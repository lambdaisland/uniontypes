(ns lambdaisland.uniontypes-test
  (:require [clojure.spec :as s]
            [clojure.test :refer [deftest is testing]]
            [lambdaisland.uniontypes #?(:clj :refer
                                        :cljs :refer-macros) [case-of]]
            [lambdaisland.uniontypes.core :refer [case-of*]]
            #?(:cljs [cljs.core :refer [ExceptionInfo]]))
  #?(:clj (:import clojure.lang.ExceptionInfo)))

(defn fail []
  (throw (ex-info "This code should never be reached" {})))

(s/def ::availability (s/or :sold-out  #{:sold-out}
                            :in-stock  pos-int?
                            :reordered (s/tuple pos-int? pos-int?)
                            :announced string?))

(deftest case-of-test
  (testing "happy path"
    (is (= "Sold out."
           (case-of ::availability :sold-out
             :sold-out _
             "Sold out."

             :in-stock amount
             (str "In stock: " amount " items left.")

             :reordered [min max]
             (str "Available again in " min " to " max "days" )

             :announced date
             (str "Will be available on: " date)

             :spec/invalid _
             "that doesn't seem right")))

    (is (= "That doesn't seem right."
           (case-of ::availability {:not :valid}
             :sold-out _
             "Sold out."

             :in-stock amount
             (str "In stock: " amount " items left.")

             :reordered [min max]
             (str "Available again in " min " to " max "days" )

             :announced date
             (str "Will be available on: " date)

             :spec/invalid _
             "That doesn't seem right."))))

  (testing "Error messages"
    (try
      (case-of* '(::availability availability
                                 :sold-out _
                                 "Sold out."

                                 :in-stock amount
                                 (str "In stock: " amount " items left.")

                                 :reordered [min max]
                                 (str "Available again in " min " to " max "days" )

                                 :foo x
                                 ""))
      (fail)
      (catch ExceptionInfo e
        (is (= #?(:clj (.getMessage e)
                  :cljs (.-message e)) "The cases in this `case-of` are different from the ones in the spec:

    (s/def :lambdaisland.uniontypes-test/availability
      (s/or :sold-out #{:sold-out}
            :in-stock pos-int?
            :reordered (tuple pos-int? pos-int?)
            :announced string?))

Add a case for :announced.
Remove the case :foo.")

            )))))
