(ns lambdaisland.uniontypes.core
  (:require
   [clojure.walk :refer [prewalk]]
   [clojure.spec :as s]))

(s/def ::or-spec-desc (s/cat :or #{'or}
                             :cases (s/+ (s/cat :name keyword? :spec any?))) )

(s/def ::case-of-args (s/cat :spec qualified-keyword?
                             :val any?
                             :branches (s/+ (s/alt :branch (s/cat :name simple-keyword? :binding any? :body any?)
                                                   :invalid (s/cat :name #{:spec/invalid} :binding any? :body any?))) ))

(defn- select-branches [branches]
  (map second (filter #(= (first %) :branch) branches)))

(defn- select-invalid [branches]
  (second (first (filter #(= (first %) :invalid) branches))))

(defn explain-invalid [spec val]
  (let [{:keys [cases]} (s/conform ::or-spec-desc (s/describe (s/get-spec spec)))]
    (str "The value " (pr-str val) " is not a valid " spec ". Must be one of\n"
         (apply str (for [{:keys [name spec]} cases]
                      (str "  " name " " spec "\n"))))))

(defn- one? [xs]
  (= (count xs) 1))

(defn- ^{:test #(assert (= (join-and [4 5 6]) "4, 5, and 6"))}
  join-and
  [xs]
  (if (seq xs)
    (if (one? xs)
      (str (first xs))
      (let [parts (interpose ", " xs)]
        (str (apply str (butlast parts)) "and " (last parts))))
    ""))

(meta conj)

(defn- spaces
  ^{:test #(assert (= (spaces 6) "      "))}
  [n]
  (apply str (repeat n " ")))

(defn- pprint-spec [spec indent]
  (let [desc (s/describe (s/get-spec spec))
        extra-indent (+ (count "  (s/ ") (count (str (first desc))))]
    (str (spaces indent)
         "(s/def " spec "\n"
         (spaces indent) "  (s/" (apply str (interpose " " (map pr-str (take 3 desc))))
         (if (> (count desc) 3)
           (apply str (map (fn [[a b]] (str "\n" (spaces (+ indent extra-indent)) (pr-str a) " " (pr-str b))) (partition-all 2 (drop 3 desc))))
           "")
         "))")))

(defn- branch-mismatch-message [unrecognized missing spec]
  (cond-> (str "The cases in this `case-of` are different from the ones in the spec:\n\n"
               (pprint-spec spec 4)
               "\n\n")

    (seq missing)
    (str "Add " (if (one? missing) "a case" "cases") " for " (join-and missing) ".")

    (and (seq missing) (seq unrecognized))
    (str "\n")

    (seq unrecognized)
    (str (str "Remove the " (if (one? unrecognized) "case" "cases") " " (join-and unrecognized) "."))))

(defn- check-branches-match [expected actual spec]
  (let [unrecognized (remove expected actual)
        missing (remove actual expected)]
    (if (or (seq missing) (seq unrecognized))
      (throw
       (ex-info
        (branch-mismatch-message unrecognized missing spec)
        {:unrecognized unrecognized
         :missing missing})))))

(defn fix-clojurescript-namespace [form]
  (prewalk (fn [x] (if (and (qualified-ident? x) (= (namespace x) "clojure.spec"))
                     (cond-> (str "cljs.spec/" (name x))
                       (keyword? x) keyword
                       (symbol? x) symbol)
                     x)) form))

(defn- case-of-codegen [spec val branches]
  (let [val-sym (gensym "value")
        invalid (or (select-invalid branches)
                    {:binding '_
                     :body `(throw (ex-info (explain-invalid ~spec ~val) {}))})]
    `(let [conformed# (s/conform ~spec ~val)]
       (if (= ::s/invalid conformed#)
         (let [~(:binding invalid) (s/explain-data ~spec ~val)]
           ~(:body invalid))
         (let [[branch# ~val-sym] conformed#]
           (case branch#
             ~@(reduce (fn [acc b]
                         (concat acc [(-> b :name keyword)
                                      `(let [~(:binding b) ~val-sym]
                                         ~(:body b))]))
                       ()
                       (select-branches branches))))))))

;; macro-as-function so we can test the compile time exceptions
(defn case-of* [args]
  (let [{:keys [spec val branches] :as conformed} (s/conform ::case-of-args args)
        spec-obj (s/get-spec spec)]
    (if-not spec-obj
      (throw (ex-info (str "Spec not found: " spec) {:spec spec :spec-obj spec-obj :conformed conformed}))
      (let [{:keys [cases]} (s/conform ::or-spec-desc (s/describe spec-obj))
            expected-branches (set (map :name cases))
            actual-branches (set (map (comp keyword :name) (select-branches branches)))]
        (check-branches-match expected-branches actual-branches spec)
        (case-of-codegen spec val branches)))))

(defmacro case-of [& args]
  ;; load the referenced namespace, this is mostly for ClojureScript, to load
  ;; the spec definition at macro expansion time
  (-> args first namespace symbol require)
  (let [code (case-of* args)]
    (if (:ns &env)
      (fix-clojurescript-namespace code)
      code)))

(s/fdef case-of :args ::case-of-args)
