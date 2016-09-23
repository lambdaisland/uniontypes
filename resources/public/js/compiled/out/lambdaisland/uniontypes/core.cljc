(ns lambdaisland.uniontypes.core
  (:require [clojure.spec :as s]
            [clojure.spec.test :as st]
            ))

(s/def ::or-spec-desc (s/cat :or #{'or}
                             :cases (s/+ (s/cat :name keyword? :spec any?))) )

(s/def ::case-of-args (s/cat :spec qualified-keyword?
                             :val any?
                             :branches (s/+ (s/or :branch (s/cat :name symbol? :binding any? :body (s/* any?))
                                                  :invalid (s/cat :name #{:invalid} :binding any? :body (s/* any?)))) ))

(defn- select-branches [branches]
  (map second (filter #(= (first %) :branch) branches)))

(defn- select-invalid [branches]
  (second (first (filter #(= (first %) :invalid) branches))))

(defn- explain-invalid [spec val]
  (let [{:keys [cases]} (s/conform ::or-spec-desc (s/describe (s/get-spec spec)))]
    (str "The value " (pr-str val) " is not a valid " spec ". Must be one of\n"
         (apply str (for [{:keys [name spec]} cases]
                      (str "  " name " " spec "\n"))))))

(defn- case-of-impl [spec val branches]
  (let [val-sym (gensym "value")
        invalid (or (select-invalid branches)
                    {:binding '_
                     :body `((throw (ex-info (explain-invalid ~spec ~val) {})))})]
    `(let [conformed# (s/conform ~spec ~val)]
       (if (= ::s/invalid conformed#)
         (let [~(:binding invalid) (s/explain-data ~spec ~val)]
           ~@(:body invalid))
         (let [[branch# ~val-sym] conformed#]
           (case branch#
             ~@(reduce (fn [acc b]
                         (concat acc [(-> b :name keyword)
                                      `(let [~(:binding b) ~val-sym]
                                         ~@(:body b))]))
                       ()
                       (select-branches branches))))))))

(defmacro case-of [& args]
  (let [{:keys [spec val branches]} (s/conform ::case-of-args args)
        spec-obj (s/get-spec spec)]
    (if-not spec-obj
      (throw (ex-info (str "Spec not found: " spec) {:spec spec :spec-obj spec-obj}))
      (let [{:keys [cases]} (s/conform ::or-spec-desc (s/describe spec-obj))
            expected-branches (set (map :name cases))
            actual-branches (set (map (comp keyword :name) (select-branches branches)))
            too-many (map (comp symbol name) (remove expected-branches actual-branches))
            too-few (map (comp symbol name) (remove actual-branches expected-branches))]
        (if (seq too-few)
          (throw (ex-info (str "Missing branches in (case-of " spec "): " (pr-str too-few)) {})))
        (if (seq too-many)
          (throw (ex-info (str "These branches were used in (case-of " spec "), but they are not part of the spec: " (pr-str too-many)) {})))
        (case-of-impl spec val branches)))))

(s/fdef case-of :args ::case-of-args)
