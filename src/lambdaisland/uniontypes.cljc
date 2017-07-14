(ns lambdaisland.uniontypes
  (:require [lambdaisland.uniontypes.core :refer [case-of*] :as utcore]
            [clojure.spec.alpha :as s]))

(defmacro case-of
  {:style/indent 2}
  [& args]
  (let [cljs? (boolean (:ns &env))]
    (case-of* args cljs?)))

(s/fdef case-of :args ::utcore/case-of-args)


