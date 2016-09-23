(ns lambdaisland.uniontypes.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   lambdaisland.uniontypes-test))

(enable-console-print!)

(doo-tests 'lambdaisland.uniontypes-test)
