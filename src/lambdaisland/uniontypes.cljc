(ns lambdaisland.uniontypes
  (:require [lambdaisland.uniontypes.core :refer [case-of* fix-clojurescript-namespace]]))

(defmacro case-of [& args]
  ;; load the referenced namespace, this is mostly for ClojureScript, to load
  ;; the spec definition at macro expansion time
  (-> args first namespace symbol require)
  (let [code (case-of* args)]
    (if (:ns &env)
      (fix-clojurescript-namespace code)
      code)))
