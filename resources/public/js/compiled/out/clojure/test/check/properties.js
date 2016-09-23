// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojure.test.check.properties');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{return cljs.core.apply.call(null,function$,args);
}catch (e11317){var t = e11317;
return t;
}})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
});
});
/**
 * Creates a property (properties are also generators). A property
 *   is a generator that generates the result of applying the function
 *   under test with the realized arguments. Once realized, the arguments
 *   will be applied to `function` with `apply`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/int gen/int] (fn [a b] (>= (+ a b) a)))
 *   
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap.call(null,clojure.test.check.properties.apply_gen.call(null,function$),cljs.core.apply.call(null,clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),bindings));
});
/**
 * Macro sugar for `for-all*`. `for-all` lets you name the parameter
 *   and use them in expression, without wrapping them in a lambda. Like
 *   `for-all*`, it returns a property.
 * 
 *   Examples
 * 
 *   (for-all [a gen/int
 *          b gen/int]
 *  (>= (+ a b) a))
 *   
 */
clojure.test.check.properties.for_all = (function clojure$test$check$properties$for_all(var_args){
var args__8129__auto__ = [];
var len__8122__auto___11322 = arguments.length;
var i__8123__auto___11323 = (0);
while(true){
if((i__8123__auto___11323 < len__8122__auto___11322)){
args__8129__auto__.push((arguments[i__8123__auto___11323]));

var G__11324 = (i__8123__auto___11323 + (1));
i__8123__auto___11323 = G__11324;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((3) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((3)),(0),null)):null);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8130__auto__);
});

clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),(function (){var x__7865__auto__ = cljs.core.vec.call(null,clojure.test.check.properties.binding_gens.call(null,bindings));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7865__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,clojure.test.check.properties.binding_vars.call(null,bindings)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
});

clojure.test.check.properties.for_all.cljs$lang$maxFixedArity = (3);

clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq11318){
var G__11319 = cljs.core.first.call(null,seq11318);
var seq11318__$1 = cljs.core.next.call(null,seq11318);
var G__11320 = cljs.core.first.call(null,seq11318__$1);
var seq11318__$2 = cljs.core.next.call(null,seq11318__$1);
var G__11321 = cljs.core.first.call(null,seq11318__$2);
var seq11318__$3 = cljs.core.next.call(null,seq11318__$2);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic(G__11319,G__11320,G__11321,seq11318__$3);
});


clojure.test.check.properties.for_all.cljs$lang$macro = true;

//# sourceMappingURL=properties.js.map