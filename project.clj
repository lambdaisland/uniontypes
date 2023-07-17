(defproject lambdaisland/uniontypes "0.3.0"
  :description "Union Types (ADTs) based on clojure.spec.alpha"
  :url "http://github.com/lambdaisland/uniontypes"
  :license {:name "Mozilla Public License 2.0"
            :url "https://www.mozilla.org/en-US/MPL/2.0/"}

  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.542" :scope "provided"]]

  :doo {:build "test"}

  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js/compiled"]

  :source-paths ["src"]
  :test-paths ["test"]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-doo "0.1.6"]]

  :min-lein-version "2.5.1"

  :cljsbuild {:builds
              {:test
               {:source-paths ["src" "test"]
                :compiler
                {:output-to "resources/public/js/compiled/testable.js"
                 :output-dir "resources/public/js/compiled/out"
                 :main lambdaisland.uniontypes.test-runner
                 :optimizations :none}}}}

  :profiles {:kaocha {:dependencies [[lambdaisland/kaocha "1.85.1342"]]}
             :dev {:dependencies [[org.clojure/test.check "0.9.0"]]}}

  :aliases {"kaocha" ["with-profile" "+kaocha" "run" "-m" "kaocha.runner"]
            "test-all" ["do"
                        ["test"]
                        ["doo" "phantom" "test" "once"]]})
