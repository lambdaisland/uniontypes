// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11101 = arguments.length;
var i__8123__auto___11102 = (0);
while(true){
if((i__8123__auto___11102 < len__8122__auto___11101)){
args__8129__auto__.push((arguments[i__8123__auto___11102]));

var G__11103 = (i__8123__auto___11102 + (1));
i__8123__auto___11102 = G__11103;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq11100){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11100));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11105 = arguments.length;
var i__8123__auto___11106 = (0);
while(true){
if((i__8123__auto___11106 < len__8122__auto___11105)){
args__8129__auto__.push((arguments[i__8123__auto___11106]));

var G__11107 = (i__8123__auto___11106 + (1));
i__8123__auto___11106 = G__11107;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq11104){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11104));
});

var g_QMARK__11108 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_11109 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__11108){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__11108))
,null));
var mkg_11110 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__11108,g_11109){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__11108,g_11109))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__11108,g_11109,mkg_11110){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__11108).call(null,x);
});})(g_QMARK__11108,g_11109,mkg_11110))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__11108,g_11109,mkg_11110){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_11110).call(null,gfn);
});})(g_QMARK__11108,g_11109,mkg_11110))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__11108,g_11109,mkg_11110){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_11109).call(null,generator);
});})(g_QMARK__11108,g_11109,mkg_11110))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11072__auto___11129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11072__auto___11129){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11130 = arguments.length;
var i__8123__auto___11131 = (0);
while(true){
if((i__8123__auto___11131 < len__8122__auto___11130)){
args__8129__auto__.push((arguments[i__8123__auto___11131]));

var G__11132 = (i__8123__auto___11131 + (1));
i__8123__auto___11131 = G__11132;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11129))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11129),args);
});})(g__11072__auto___11129))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11072__auto___11129){
return (function (seq11111){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11111));
});})(g__11072__auto___11129))
;


var g__11072__auto___11133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11072__auto___11133){
return (function cljs$spec$impl$gen$list(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11134 = arguments.length;
var i__8123__auto___11135 = (0);
while(true){
if((i__8123__auto___11135 < len__8122__auto___11134)){
args__8129__auto__.push((arguments[i__8123__auto___11135]));

var G__11136 = (i__8123__auto___11135 + (1));
i__8123__auto___11135 = G__11136;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11133))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11133),args);
});})(g__11072__auto___11133))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11072__auto___11133){
return (function (seq11112){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11112));
});})(g__11072__auto___11133))
;


var g__11072__auto___11137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11072__auto___11137){
return (function cljs$spec$impl$gen$map(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11138 = arguments.length;
var i__8123__auto___11139 = (0);
while(true){
if((i__8123__auto___11139 < len__8122__auto___11138)){
args__8129__auto__.push((arguments[i__8123__auto___11139]));

var G__11140 = (i__8123__auto___11139 + (1));
i__8123__auto___11139 = G__11140;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11137))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11137),args);
});})(g__11072__auto___11137))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11072__auto___11137){
return (function (seq11113){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11113));
});})(g__11072__auto___11137))
;


var g__11072__auto___11141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11072__auto___11141){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11142 = arguments.length;
var i__8123__auto___11143 = (0);
while(true){
if((i__8123__auto___11143 < len__8122__auto___11142)){
args__8129__auto__.push((arguments[i__8123__auto___11143]));

var G__11144 = (i__8123__auto___11143 + (1));
i__8123__auto___11143 = G__11144;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11141))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11141),args);
});})(g__11072__auto___11141))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11072__auto___11141){
return (function (seq11114){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11114));
});})(g__11072__auto___11141))
;


var g__11072__auto___11145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11072__auto___11145){
return (function cljs$spec$impl$gen$set(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11146 = arguments.length;
var i__8123__auto___11147 = (0);
while(true){
if((i__8123__auto___11147 < len__8122__auto___11146)){
args__8129__auto__.push((arguments[i__8123__auto___11147]));

var G__11148 = (i__8123__auto___11147 + (1));
i__8123__auto___11147 = G__11148;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11145))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11145),args);
});})(g__11072__auto___11145))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11072__auto___11145){
return (function (seq11115){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11115));
});})(g__11072__auto___11145))
;


var g__11072__auto___11149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11072__auto___11149){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11150 = arguments.length;
var i__8123__auto___11151 = (0);
while(true){
if((i__8123__auto___11151 < len__8122__auto___11150)){
args__8129__auto__.push((arguments[i__8123__auto___11151]));

var G__11152 = (i__8123__auto___11151 + (1));
i__8123__auto___11151 = G__11152;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11149))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11149),args);
});})(g__11072__auto___11149))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11072__auto___11149){
return (function (seq11116){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11116));
});})(g__11072__auto___11149))
;


var g__11072__auto___11153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11072__auto___11153){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11154 = arguments.length;
var i__8123__auto___11155 = (0);
while(true){
if((i__8123__auto___11155 < len__8122__auto___11154)){
args__8129__auto__.push((arguments[i__8123__auto___11155]));

var G__11156 = (i__8123__auto___11155 + (1));
i__8123__auto___11155 = G__11156;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11153))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11153),args);
});})(g__11072__auto___11153))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11072__auto___11153){
return (function (seq11117){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11117));
});})(g__11072__auto___11153))
;


var g__11072__auto___11157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11072__auto___11157){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11158 = arguments.length;
var i__8123__auto___11159 = (0);
while(true){
if((i__8123__auto___11159 < len__8122__auto___11158)){
args__8129__auto__.push((arguments[i__8123__auto___11159]));

var G__11160 = (i__8123__auto___11159 + (1));
i__8123__auto___11159 = G__11160;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11157))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11157),args);
});})(g__11072__auto___11157))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11072__auto___11157){
return (function (seq11118){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11118));
});})(g__11072__auto___11157))
;


var g__11072__auto___11161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11072__auto___11161){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11162 = arguments.length;
var i__8123__auto___11163 = (0);
while(true){
if((i__8123__auto___11163 < len__8122__auto___11162)){
args__8129__auto__.push((arguments[i__8123__auto___11163]));

var G__11164 = (i__8123__auto___11163 + (1));
i__8123__auto___11163 = G__11164;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11161))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11161),args);
});})(g__11072__auto___11161))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11072__auto___11161){
return (function (seq11119){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11119));
});})(g__11072__auto___11161))
;


var g__11072__auto___11165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11072__auto___11165){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11166 = arguments.length;
var i__8123__auto___11167 = (0);
while(true){
if((i__8123__auto___11167 < len__8122__auto___11166)){
args__8129__auto__.push((arguments[i__8123__auto___11167]));

var G__11168 = (i__8123__auto___11167 + (1));
i__8123__auto___11167 = G__11168;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11165))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11165),args);
});})(g__11072__auto___11165))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11072__auto___11165){
return (function (seq11120){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11120));
});})(g__11072__auto___11165))
;


var g__11072__auto___11169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11072__auto___11169){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11170 = arguments.length;
var i__8123__auto___11171 = (0);
while(true){
if((i__8123__auto___11171 < len__8122__auto___11170)){
args__8129__auto__.push((arguments[i__8123__auto___11171]));

var G__11172 = (i__8123__auto___11171 + (1));
i__8123__auto___11171 = G__11172;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11169))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11169),args);
});})(g__11072__auto___11169))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11072__auto___11169){
return (function (seq11121){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11121));
});})(g__11072__auto___11169))
;


var g__11072__auto___11173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11072__auto___11173){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11174 = arguments.length;
var i__8123__auto___11175 = (0);
while(true){
if((i__8123__auto___11175 < len__8122__auto___11174)){
args__8129__auto__.push((arguments[i__8123__auto___11175]));

var G__11176 = (i__8123__auto___11175 + (1));
i__8123__auto___11175 = G__11176;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11173))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11173),args);
});})(g__11072__auto___11173))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11072__auto___11173){
return (function (seq11122){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11122));
});})(g__11072__auto___11173))
;


var g__11072__auto___11177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11072__auto___11177){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11178 = arguments.length;
var i__8123__auto___11179 = (0);
while(true){
if((i__8123__auto___11179 < len__8122__auto___11178)){
args__8129__auto__.push((arguments[i__8123__auto___11179]));

var G__11180 = (i__8123__auto___11179 + (1));
i__8123__auto___11179 = G__11180;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11177))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11177),args);
});})(g__11072__auto___11177))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11072__auto___11177){
return (function (seq11123){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11123));
});})(g__11072__auto___11177))
;


var g__11072__auto___11181 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11072__auto___11181){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11182 = arguments.length;
var i__8123__auto___11183 = (0);
while(true){
if((i__8123__auto___11183 < len__8122__auto___11182)){
args__8129__auto__.push((arguments[i__8123__auto___11183]));

var G__11184 = (i__8123__auto___11183 + (1));
i__8123__auto___11183 = G__11184;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11181))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11181){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11181),args);
});})(g__11072__auto___11181))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11072__auto___11181){
return (function (seq11124){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11124));
});})(g__11072__auto___11181))
;


var g__11072__auto___11185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11072__auto___11185){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11186 = arguments.length;
var i__8123__auto___11187 = (0);
while(true){
if((i__8123__auto___11187 < len__8122__auto___11186)){
args__8129__auto__.push((arguments[i__8123__auto___11187]));

var G__11188 = (i__8123__auto___11187 + (1));
i__8123__auto___11187 = G__11188;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11185))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11185),args);
});})(g__11072__auto___11185))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11072__auto___11185){
return (function (seq11125){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11125));
});})(g__11072__auto___11185))
;


var g__11072__auto___11189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11072__auto___11189){
return (function cljs$spec$impl$gen$return(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11190 = arguments.length;
var i__8123__auto___11191 = (0);
while(true){
if((i__8123__auto___11191 < len__8122__auto___11190)){
args__8129__auto__.push((arguments[i__8123__auto___11191]));

var G__11192 = (i__8123__auto___11191 + (1));
i__8123__auto___11191 = G__11192;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11189))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11189),args);
});})(g__11072__auto___11189))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11072__auto___11189){
return (function (seq11126){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11126));
});})(g__11072__auto___11189))
;


var g__11072__auto___11193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11072__auto___11193){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11194 = arguments.length;
var i__8123__auto___11195 = (0);
while(true){
if((i__8123__auto___11195 < len__8122__auto___11194)){
args__8129__auto__.push((arguments[i__8123__auto___11195]));

var G__11196 = (i__8123__auto___11195 + (1));
i__8123__auto___11195 = G__11196;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11193))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11193),args);
});})(g__11072__auto___11193))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11072__auto___11193){
return (function (seq11127){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11127));
});})(g__11072__auto___11193))
;


var g__11072__auto___11197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11072__auto___11197){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11198 = arguments.length;
var i__8123__auto___11199 = (0);
while(true){
if((i__8123__auto___11199 < len__8122__auto___11198)){
args__8129__auto__.push((arguments[i__8123__auto___11199]));

var G__11200 = (i__8123__auto___11199 + (1));
i__8123__auto___11199 = G__11200;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11072__auto___11197))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11072__auto___11197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11072__auto___11197),args);
});})(g__11072__auto___11197))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11072__auto___11197){
return (function (seq11128){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11128));
});})(g__11072__auto___11197))
;

var g__11085__auto___11222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11085__auto___11222){
return (function cljs$spec$impl$gen$any(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11223 = arguments.length;
var i__8123__auto___11224 = (0);
while(true){
if((i__8123__auto___11224 < len__8122__auto___11223)){
args__8129__auto__.push((arguments[i__8123__auto___11224]));

var G__11225 = (i__8123__auto___11224 + (1));
i__8123__auto___11224 = G__11225;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11222))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11222){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11222);
});})(g__11085__auto___11222))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11085__auto___11222){
return (function (seq11201){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11201));
});})(g__11085__auto___11222))
;


var g__11085__auto___11226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11085__auto___11226){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11227 = arguments.length;
var i__8123__auto___11228 = (0);
while(true){
if((i__8123__auto___11228 < len__8122__auto___11227)){
args__8129__auto__.push((arguments[i__8123__auto___11228]));

var G__11229 = (i__8123__auto___11228 + (1));
i__8123__auto___11228 = G__11229;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11226))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11226){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11226);
});})(g__11085__auto___11226))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11085__auto___11226){
return (function (seq11202){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11202));
});})(g__11085__auto___11226))
;


var g__11085__auto___11230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11085__auto___11230){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11231 = arguments.length;
var i__8123__auto___11232 = (0);
while(true){
if((i__8123__auto___11232 < len__8122__auto___11231)){
args__8129__auto__.push((arguments[i__8123__auto___11232]));

var G__11233 = (i__8123__auto___11232 + (1));
i__8123__auto___11232 = G__11233;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11230))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11230){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11230);
});})(g__11085__auto___11230))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11085__auto___11230){
return (function (seq11203){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11203));
});})(g__11085__auto___11230))
;


var g__11085__auto___11234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11085__auto___11234){
return (function cljs$spec$impl$gen$char(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11235 = arguments.length;
var i__8123__auto___11236 = (0);
while(true){
if((i__8123__auto___11236 < len__8122__auto___11235)){
args__8129__auto__.push((arguments[i__8123__auto___11236]));

var G__11237 = (i__8123__auto___11236 + (1));
i__8123__auto___11236 = G__11237;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11234))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11234){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11234);
});})(g__11085__auto___11234))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11085__auto___11234){
return (function (seq11204){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11204));
});})(g__11085__auto___11234))
;


var g__11085__auto___11238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11085__auto___11238){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11239 = arguments.length;
var i__8123__auto___11240 = (0);
while(true){
if((i__8123__auto___11240 < len__8122__auto___11239)){
args__8129__auto__.push((arguments[i__8123__auto___11240]));

var G__11241 = (i__8123__auto___11240 + (1));
i__8123__auto___11240 = G__11241;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11238))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11238){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11238);
});})(g__11085__auto___11238))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11085__auto___11238){
return (function (seq11205){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11205));
});})(g__11085__auto___11238))
;


var g__11085__auto___11242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11085__auto___11242){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11243 = arguments.length;
var i__8123__auto___11244 = (0);
while(true){
if((i__8123__auto___11244 < len__8122__auto___11243)){
args__8129__auto__.push((arguments[i__8123__auto___11244]));

var G__11245 = (i__8123__auto___11244 + (1));
i__8123__auto___11244 = G__11245;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11242))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11242){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11242);
});})(g__11085__auto___11242))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11085__auto___11242){
return (function (seq11206){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11206));
});})(g__11085__auto___11242))
;


var g__11085__auto___11246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11085__auto___11246){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11247 = arguments.length;
var i__8123__auto___11248 = (0);
while(true){
if((i__8123__auto___11248 < len__8122__auto___11247)){
args__8129__auto__.push((arguments[i__8123__auto___11248]));

var G__11249 = (i__8123__auto___11248 + (1));
i__8123__auto___11248 = G__11249;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11246))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11246){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11246);
});})(g__11085__auto___11246))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11085__auto___11246){
return (function (seq11207){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11207));
});})(g__11085__auto___11246))
;


var g__11085__auto___11250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11085__auto___11250){
return (function cljs$spec$impl$gen$double(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11251 = arguments.length;
var i__8123__auto___11252 = (0);
while(true){
if((i__8123__auto___11252 < len__8122__auto___11251)){
args__8129__auto__.push((arguments[i__8123__auto___11252]));

var G__11253 = (i__8123__auto___11252 + (1));
i__8123__auto___11252 = G__11253;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11250))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11250){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11250);
});})(g__11085__auto___11250))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11085__auto___11250){
return (function (seq11208){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11208));
});})(g__11085__auto___11250))
;


var g__11085__auto___11254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11085__auto___11254){
return (function cljs$spec$impl$gen$int(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11255 = arguments.length;
var i__8123__auto___11256 = (0);
while(true){
if((i__8123__auto___11256 < len__8122__auto___11255)){
args__8129__auto__.push((arguments[i__8123__auto___11256]));

var G__11257 = (i__8123__auto___11256 + (1));
i__8123__auto___11256 = G__11257;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11254))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11254){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11254);
});})(g__11085__auto___11254))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11085__auto___11254){
return (function (seq11209){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11209));
});})(g__11085__auto___11254))
;


var g__11085__auto___11258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11085__auto___11258){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11259 = arguments.length;
var i__8123__auto___11260 = (0);
while(true){
if((i__8123__auto___11260 < len__8122__auto___11259)){
args__8129__auto__.push((arguments[i__8123__auto___11260]));

var G__11261 = (i__8123__auto___11260 + (1));
i__8123__auto___11260 = G__11261;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11258))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11258){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11258);
});})(g__11085__auto___11258))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11085__auto___11258){
return (function (seq11210){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11210));
});})(g__11085__auto___11258))
;


var g__11085__auto___11262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11085__auto___11262){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11263 = arguments.length;
var i__8123__auto___11264 = (0);
while(true){
if((i__8123__auto___11264 < len__8122__auto___11263)){
args__8129__auto__.push((arguments[i__8123__auto___11264]));

var G__11265 = (i__8123__auto___11264 + (1));
i__8123__auto___11264 = G__11265;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11262))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11262){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11262);
});})(g__11085__auto___11262))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11085__auto___11262){
return (function (seq11211){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11211));
});})(g__11085__auto___11262))
;


var g__11085__auto___11266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11085__auto___11266){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11267 = arguments.length;
var i__8123__auto___11268 = (0);
while(true){
if((i__8123__auto___11268 < len__8122__auto___11267)){
args__8129__auto__.push((arguments[i__8123__auto___11268]));

var G__11269 = (i__8123__auto___11268 + (1));
i__8123__auto___11268 = G__11269;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11266))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11266){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11266);
});})(g__11085__auto___11266))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11085__auto___11266){
return (function (seq11212){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11212));
});})(g__11085__auto___11266))
;


var g__11085__auto___11270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11085__auto___11270){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11271 = arguments.length;
var i__8123__auto___11272 = (0);
while(true){
if((i__8123__auto___11272 < len__8122__auto___11271)){
args__8129__auto__.push((arguments[i__8123__auto___11272]));

var G__11273 = (i__8123__auto___11272 + (1));
i__8123__auto___11272 = G__11273;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11270))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11270){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11270);
});})(g__11085__auto___11270))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11085__auto___11270){
return (function (seq11213){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11213));
});})(g__11085__auto___11270))
;


var g__11085__auto___11274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11085__auto___11274){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11275 = arguments.length;
var i__8123__auto___11276 = (0);
while(true){
if((i__8123__auto___11276 < len__8122__auto___11275)){
args__8129__auto__.push((arguments[i__8123__auto___11276]));

var G__11277 = (i__8123__auto___11276 + (1));
i__8123__auto___11276 = G__11277;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11274))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11274){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11274);
});})(g__11085__auto___11274))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11085__auto___11274){
return (function (seq11214){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11214));
});})(g__11085__auto___11274))
;


var g__11085__auto___11278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11085__auto___11278){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11279 = arguments.length;
var i__8123__auto___11280 = (0);
while(true){
if((i__8123__auto___11280 < len__8122__auto___11279)){
args__8129__auto__.push((arguments[i__8123__auto___11280]));

var G__11281 = (i__8123__auto___11280 + (1));
i__8123__auto___11280 = G__11281;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11278))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11278){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11278);
});})(g__11085__auto___11278))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11085__auto___11278){
return (function (seq11215){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11215));
});})(g__11085__auto___11278))
;


var g__11085__auto___11282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11085__auto___11282){
return (function cljs$spec$impl$gen$string(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11283 = arguments.length;
var i__8123__auto___11284 = (0);
while(true){
if((i__8123__auto___11284 < len__8122__auto___11283)){
args__8129__auto__.push((arguments[i__8123__auto___11284]));

var G__11285 = (i__8123__auto___11284 + (1));
i__8123__auto___11284 = G__11285;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11282))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11282){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11282);
});})(g__11085__auto___11282))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11085__auto___11282){
return (function (seq11216){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11216));
});})(g__11085__auto___11282))
;


var g__11085__auto___11286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11085__auto___11286){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11287 = arguments.length;
var i__8123__auto___11288 = (0);
while(true){
if((i__8123__auto___11288 < len__8122__auto___11287)){
args__8129__auto__.push((arguments[i__8123__auto___11288]));

var G__11289 = (i__8123__auto___11288 + (1));
i__8123__auto___11288 = G__11289;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11286))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11286){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11286);
});})(g__11085__auto___11286))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11085__auto___11286){
return (function (seq11217){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11217));
});})(g__11085__auto___11286))
;


var g__11085__auto___11290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11085__auto___11290){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11291 = arguments.length;
var i__8123__auto___11292 = (0);
while(true){
if((i__8123__auto___11292 < len__8122__auto___11291)){
args__8129__auto__.push((arguments[i__8123__auto___11292]));

var G__11293 = (i__8123__auto___11292 + (1));
i__8123__auto___11292 = G__11293;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11290))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11290){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11290);
});})(g__11085__auto___11290))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11085__auto___11290){
return (function (seq11218){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11218));
});})(g__11085__auto___11290))
;


var g__11085__auto___11294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11085__auto___11294){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11295 = arguments.length;
var i__8123__auto___11296 = (0);
while(true){
if((i__8123__auto___11296 < len__8122__auto___11295)){
args__8129__auto__.push((arguments[i__8123__auto___11296]));

var G__11297 = (i__8123__auto___11296 + (1));
i__8123__auto___11296 = G__11297;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11294))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11294){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11294);
});})(g__11085__auto___11294))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11085__auto___11294){
return (function (seq11219){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11219));
});})(g__11085__auto___11294))
;


var g__11085__auto___11298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11085__auto___11298){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11299 = arguments.length;
var i__8123__auto___11300 = (0);
while(true){
if((i__8123__auto___11300 < len__8122__auto___11299)){
args__8129__auto__.push((arguments[i__8123__auto___11300]));

var G__11301 = (i__8123__auto___11300 + (1));
i__8123__auto___11300 = G__11301;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11298))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11298){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11298);
});})(g__11085__auto___11298))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11085__auto___11298){
return (function (seq11220){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11220));
});})(g__11085__auto___11298))
;


var g__11085__auto___11302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11085__auto___11302){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11303 = arguments.length;
var i__8123__auto___11304 = (0);
while(true){
if((i__8123__auto___11304 < len__8122__auto___11303)){
args__8129__auto__.push((arguments[i__8123__auto___11304]));

var G__11305 = (i__8123__auto___11304 + (1));
i__8123__auto___11304 = G__11305;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});})(g__11085__auto___11302))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11085__auto___11302){
return (function (args){
return cljs.core.deref.call(null,g__11085__auto___11302);
});})(g__11085__auto___11302))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11085__auto___11302){
return (function (seq11221){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11221));
});})(g__11085__auto___11302))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11308 = arguments.length;
var i__8123__auto___11309 = (0);
while(true){
if((i__8123__auto___11309 < len__8122__auto___11308)){
args__8129__auto__.push((arguments[i__8123__auto___11309]));

var G__11310 = (i__8123__auto___11309 + (1));
i__8123__auto___11309 = G__11310;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__11306_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__11306_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq11307){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11307));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__11311_SHARP_){
return (new Date(p1__11311_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map