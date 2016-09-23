(ns lambdaisland.uniontypes-test
  (:require [clojure.test :refer [deftest testing is]]
            [lambdaisland.uniontypes]))

(comment
  (s/def ::availability (s/or :sold-out  #{:sold-out}
                              :in-stock  pos-int?
                              :reordered (s/tuple pos-int? pos-int?)
                              :announced string?
                              ))



  (defn display-status [availability]
    (case-of ::availability availability
      (sold-out _
                "Sold out.")
      (in-stock amount
                (str "In stock: " amount " items left."))
      (reordered [min max]
                 (str "Available again in " min " to " max "days" ))
      )))


(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))
