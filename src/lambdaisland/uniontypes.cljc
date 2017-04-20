(ns lambdaisland.uniontypes
  (:require [lambdaisland.uniontypes.core :refer [case-of*]]
            [clojure.spec :as s]))

(defmacro case-of [& args]
  (let [cljs? (boolean (:ns &env))]
    (case-of* args cljs?)))

