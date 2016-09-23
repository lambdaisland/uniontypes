// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojure.test.check.random.longs');
goog.require('cljs.core');
goog.require('clojure.test.check.random.longs.bit_count_impl');
goog.require('goog.math.Long');
clojure.test.check.random.longs.unsigned_bit_shift_right = (function clojure$test$check$random$longs$unsigned_bit_shift_right(x,n){
return x.shiftRightUnsigned(n);
});
clojure.test.check.random.longs._PLUS_ = (function clojure$test$check$random$longs$_PLUS_(x,y){
return x.add(y);
});
clojure.test.check.random.longs._STAR_ = (function clojure$test$check$random$longs$_STAR_(x,y){
return x.multiply(y);
});
clojure.test.check.random.longs.bit_xor = (function clojure$test$check$random$longs$bit_xor(x,y){
return x.xor(y);
});
clojure.test.check.random.longs.bit_or = (function clojure$test$check$random$longs$bit_or(x,y){
return x.or(y);
});
clojure.test.check.random.longs.from_string = (function clojure$test$check$random$longs$from_string(s,radix){
return goog.math.Long.fromString(s,radix);
});
clojure.test.check.random.longs.from_number = (function clojure$test$check$random$longs$from_number(x){
return goog.math.Long.fromNumber(x);
});
/**
 * Coerces to long, or returns nil if not possible.
 */
clojure.test.check.random.longs.__GT_long = (function clojure$test$check$random$longs$__GT_long(x){
if(typeof x === 'number'){
return goog.math.Long.fromNumber(x);
} else {
if((x instanceof goog.math.Long)){
return x;
} else {
return null;
}
}
});
clojure.test.check.random.longs.ONE = goog.math.Long.getOne();
clojure.test.check.random.longs.bit_count = clojure.test.check.random.longs.bit_count_impl.bit_count;

//# sourceMappingURL=longs.js.map