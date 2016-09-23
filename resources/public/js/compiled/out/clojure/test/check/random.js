// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojure.test.check.random');
goog.require('cljs.core');
goog.require('clojure.test.check.random.doubles');
goog.require('clojure.test.check.random.longs');

/**
 * @interface
 */
clojure.test.check.random.IRandom = function(){};

/**
 * Returns a random goog.math.Long based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.rand_long = (function clojure$test$check$random$rand_long(rng){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$rand_long$arity$1 == null)))){
return rng.clojure$test$check$random$IRandom$rand_long$arity$1(rng);
} else {
var x__7652__auto__ = (((rng == null))?null:rng);
var m__7653__auto__ = (clojure.test.check.random.rand_long[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,rng);
} else {
var m__7653__auto____$1 = (clojure.test.check.random.rand_long["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,rng);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.rand-long",rng);
}
}
}
});

/**
 * Returns a random double between 0.0 (inclusive) and 1.0 (exclusive)
 *   based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.rand_double = (function clojure$test$check$random$rand_double(rng){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$rand_double$arity$1 == null)))){
return rng.clojure$test$check$random$IRandom$rand_double$arity$1(rng);
} else {
var x__7652__auto__ = (((rng == null))?null:rng);
var m__7653__auto__ = (clojure.test.check.random.rand_double[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,rng);
} else {
var m__7653__auto____$1 = (clojure.test.check.random.rand_double["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,rng);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.rand-double",rng);
}
}
}
});

/**
 * Returns two new RNGs [rng1 rng2], which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.split = (function clojure$test$check$random$split(rng){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$split$arity$1 == null)))){
return rng.clojure$test$check$random$IRandom$split$arity$1(rng);
} else {
var x__7652__auto__ = (((rng == null))?null:rng);
var m__7653__auto__ = (clojure.test.check.random.split[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,rng);
} else {
var m__7653__auto____$1 = (clojure.test.check.random.split["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,rng);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.split",rng);
}
}
}
});

/**
 * Returns a collection of `n` RNGs, which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.split_n = (function clojure$test$check$random$split_n(rng,n){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$split_n$arity$2 == null)))){
return rng.clojure$test$check$random$IRandom$split_n$arity$2(rng,n);
} else {
var x__7652__auto__ = (((rng == null))?null:rng);
var m__7653__auto__ = (clojure.test.check.random.split_n[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,rng,n);
} else {
var m__7653__auto____$1 = (clojure.test.check.random.split_n["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,rng,n);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.split-n",rng);
}
}
}
});

/**
 * Helper for defining constants.
 */
clojure.test.check.random.hex_long = (function clojure$test$check$random$hex_long(s){
return clojure.test.check.random.longs.from_string.call(null,s,(16));
});
/**
 * Performs (-> x (unsigned-bit-shift-right n) (bit-xor x)).
 */
clojure.test.check.random.bxoubsr = (function clojure$test$check$random$bxoubsr(x,n){
return clojure.test.check.random.longs.bit_xor.call(null,clojure.test.check.random.longs.unsigned_bit_shift_right.call(null,x,n),x);
});
clojure.test.check.random.mix_64_const_1 = clojure.test.check.random.hex_long.call(null,"bf58476d1ce4e5b9");
clojure.test.check.random.mix_64_const_2 = clojure.test.check.random.hex_long.call(null,"94d049bb133111eb");
clojure.test.check.random.mix_64 = (function clojure$test$check$random$mix_64(n){
return clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,n,(30)),clojure.test.check.random.mix_64_const_1),(27)),clojure.test.check.random.mix_64_const_2),(31));
});
clojure.test.check.random.mix_gamma_const_1 = clojure.test.check.random.hex_long.call(null,"ff51afd7ed558ccd");
clojure.test.check.random.mix_gamma_const_2 = clojure.test.check.random.hex_long.call(null,"c4ceb9fe1a85ec53");
clojure.test.check.random.mix_gamma_const_3 = clojure.test.check.random.hex_long.call(null,"aaaaaaaaaaaaaaaa");
clojure.test.check.random.mix_gamma = (function clojure$test$check$random$mix_gamma(n){
var z = clojure.test.check.random.longs.bit_or.call(null,clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,n,(33)),clojure.test.check.random.mix_gamma_const_1),(33)),clojure.test.check.random.mix_gamma_const_2),(33)),clojure.test.check.random.longs.ONE);
var G__8646 = z;
if(((24) > clojure.test.check.random.longs.bit_count.call(null,clojure.test.check.random.bxoubsr.call(null,z,(1))))){
return clojure.test.check.random.longs.bit_xor.call(null,G__8646,clojure.test.check.random.mix_gamma_const_3);
} else {
return G__8646;
}
});

/**
* @constructor
 * @implements {clojure.test.check.random.IRandom}
*/
clojure.test.check.random.JavaUtilSplittableRandom = (function (gamma,state){
this.gamma = gamma;
this.state = state;
})
clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$ = true;

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_long$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return clojure.test.check.random.mix_64.call(null,clojure.test.check.random.longs._PLUS_.call(null,self__.state,self__.gamma));
});

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_double$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.test.check.random.doubles.rand_long__GT_rand_double.call(null,clojure.test.check.random.rand_long.call(null,this$__$1));
});

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,self__.state);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma.call(null,state_SINGLEQUOTE__SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state_SINGLEQUOTE__SINGLEQUOTE_)),(new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64.call(null,state_SINGLEQUOTE_)))], null);
});

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split_n$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var G__8647 = n;
switch (G__8647) {
case (0):
return cljs.core.PersistentVector.EMPTY;

break;
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null);

break;
default:
var n_dec = (n - (1));
var state__$1 = self__.state;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core._EQ_.call(null,n_dec,cljs.core.count.call(null,ret))){
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,ret,(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state__$1))));
} else {
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,state__$1);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma.call(null,state_SINGLEQUOTE__SINGLEQUOTE_);
var new_rng = (new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64.call(null,state_SINGLEQUOTE_)));
var G__8649 = state_SINGLEQUOTE__SINGLEQUOTE_;
var G__8650 = cljs.core.conj_BANG_.call(null,ret,new_rng);
state__$1 = G__8649;
ret = G__8650;
continue;
}
break;
}

}
});

clojure.test.check.random.JavaUtilSplittableRandom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gamma","gamma",-770466082,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$type = true;

clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorStr = "clojure.test.check.random/JavaUtilSplittableRandom";

clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorPrWriter = (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"clojure.test.check.random/JavaUtilSplittableRandom");
});

clojure.test.check.random.__GT_JavaUtilSplittableRandom = (function clojure$test$check$random$__GT_JavaUtilSplittableRandom(gamma,state){
return (new clojure.test.check.random.JavaUtilSplittableRandom(gamma,state));
});

clojure.test.check.random.golden_gamma = clojure.test.check.random.hex_long.call(null,"9e3779b97f4a7c15");
clojure.test.check.random.make_java_util_splittable_random = (function clojure$test$check$random$make_java_util_splittable_random(seed){
return (new clojure.test.check.random.JavaUtilSplittableRandom(clojure.test.check.random.golden_gamma,(function (){var or__6939__auto__ = clojure.test.check.random.longs.__GT_long.call(null,seed);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
throw cljs.core.ex_info.call(null,"Bad random seed!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),seed], null));
}
})()));
});
clojure.test.check.random.next_rng = (function (){var a = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),clojure.test.check.random.make_java_util_splittable_random.call(null,(new Date()).valueOf())], null));
return ((function (a){
return (function (){
return new cljs.core.Keyword(null,"returned","returned",-2020439163).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,a,((function (a){
return (function (p__8651){
var map__8652 = p__8651;
var map__8652__$1 = ((((!((map__8652 == null)))?((((map__8652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8652):map__8652);
var state = cljs.core.get.call(null,map__8652__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vec__8654 = clojure.test.check.random.split.call(null,state);
var r1 = cljs.core.nth.call(null,vec__8654,(0),null);
var r2 = cljs.core.nth.call(null,vec__8654,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),r1,new cljs.core.Keyword(null,"returned","returned",-2020439163),r2], null);
});})(a))
));
});
;})(a))
})();
/**
 * Given an optional integer (or goog.math.Long) seed, returns an
 *   implementation of the IRandom protocol.
 */
clojure.test.check.random.make_random = (function clojure$test$check$random$make_random(var_args){
var args8657 = [];
var len__8122__auto___8660 = arguments.length;
var i__8123__auto___8661 = (0);
while(true){
if((i__8123__auto___8661 < len__8122__auto___8660)){
args8657.push((arguments[i__8123__auto___8661]));

var G__8662 = (i__8123__auto___8661 + (1));
i__8123__auto___8661 = G__8662;
continue;
} else {
}
break;
}

var G__8659 = args8657.length;
switch (G__8659) {
case 0:
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8657.length)].join('')));

}
});

clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.test.check.random.next_rng.call(null);
});

clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return clojure.test.check.random.make_java_util_splittable_random.call(null,seed);
});

clojure.test.check.random.make_random.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=random.js.map