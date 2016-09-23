// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.test');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('cljs.stacktrace');
goog.require('goog.object');
goog.require('clojure.test.check');
goog.require('cljs.spec.impl.gen');
goog.require('cljs.pprint');
goog.require('cljs.spec');
goog.require('clojure.string');
goog.require('clojure.test.check.properties');
cljs.spec.test.distinct_by = (function cljs$spec$test$distinct_by(f,coll){
var step = (function cljs$spec$test$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__12508,seen__$1){
while(true){
var vec__12509 = p__12508;
var x = cljs.core.nth.call(null,vec__12509,(0),null);
var xs__$1 = vec__12509;
var temp__6728__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__6728__auto__){
var s = temp__6728__auto__;
var v = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v)){
var G__12512 = cljs.core.rest.call(null,s);
var G__12513 = seen__$1;
p__12508 = G__12512;
seen__$1 = G__12513;
continue;
} else {
return cljs.core.cons.call(null,x,cljs$spec$test$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.spec.test.__GT_sym = (function cljs$spec$test$__GT_sym(x){
return cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.__GT_sym;},new cljs.core.Symbol("cljs.spec","->sym","cljs.spec/->sym",-246461561,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec","cljs.spec",-1965249603,null),new cljs.core.Symbol(null,"->sym","->sym",696606926,null),"resources/public/js/compiled/out/cljs/spec.cljs",13,1,263,263,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.__GT_sym)?cljs.spec.__GT_sym.cljs$lang$test:null)]))).call(null,x);
});
/**
 * if false, instrumented fns call straight through
 */
cljs.spec.test._STAR_instrument_enabled_STAR_ = true;
cljs.spec.test.get_host_port = (function cljs$spec$test$get_host_port(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),window.location.host,new cljs.core.Keyword(null,"port","port",1534937262),window.location.port], null);
}
});
cljs.spec.test.get_ua_product = (function cljs$spec$test$get_ua_product(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.call(null,cljs.core._STAR_target_STAR_);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
cljs.spec.test.get_env = (function cljs$spec$test$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",938384227),cljs.spec.test.get_ua_product.call(null)], null);
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.test.fn_spec_QMARK_ = (function cljs$spec$test$fn_spec_QMARK_(m){
var or__6939__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.test.explain_data_STAR_ = (function cljs$spec$test$explain_data_STAR_(spec,v){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,v,null))){
return null;
} else {
return cljs.spec.explain_data.call(null,spec,v);
}
});
cljs.spec.test.find_caller = (function cljs$spec$test$find_caller(st){
var search_spec_fn = (function cljs$spec$test$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(frame);
var and__6927__auto__ = typeof s === 'string';
if(and__6927__auto__){
var and__6927__auto____$1 = !(clojure.string.blank_QMARK_.call(null,s));
if(and__6927__auto____$1){
return cljs.core.re_find.call(null,/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__6927__auto____$1;
}
} else {
return and__6927__auto__;
}
} else {
return null;
}
});
return cljs.core.first.call(null,cljs.core.drop_while.call(null,search_spec_fn,cljs.core.drop_while.call(null,(function (p1__12514_SHARP_){
return cljs.core.not.call(null,search_spec_fn.call(null,p1__12514_SHARP_));
}),st)));
});
cljs.spec.test.spec_checking_fn = (function cljs$spec$test$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.maybe_spec;},new cljs.core.Symbol("cljs.spec","maybe-spec","cljs.spec/maybe-spec",-1978544303,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec","cljs.spec",-1965249603,null),new cljs.core.Symbol(null,"maybe-spec","maybe-spec",-741366888,null),"resources/public/js/compiled/out/cljs/spec.cljs",18,1,94,94,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec-or-k","spec-or-k",1986391440,null)], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.maybe_spec)?cljs.spec.maybe_spec.cljs$lang$test:null)]))).call(null,fn_spec);
var conform_BANG_ = ((function (fn_spec__$1){
return (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var caller = cljs.spec.test.find_caller.call(null,cljs.stacktrace.parse_stacktrace.call(null,cljs.spec.test.get_host_port.call(null),(new Error()).stack,cljs.spec.test.get_env.call(null),null));
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"instrument","instrument",-960698844)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.test","caller","cljs.spec.test/caller",189634138),caller], null):null));
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(v__$1),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__8023__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12520_12525 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12521_12526 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12520_12525,_STAR_print_fn_STAR_12521_12526,sb__8023__auto__,caller,ed,conformed,fn_spec__$1){
return (function (x__8024__auto__){
return sb__8023__auto__.append(x__8024__auto__);
});})(_STAR_print_newline_STAR_12520_12525,_STAR_print_fn_STAR_12521_12526,sb__8023__auto__,caller,ed,conformed,fn_spec__$1))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12521_12526;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12520_12525;
}
return [cljs.core.str(sb__8023__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});})(fn_spec__$1))
;
var G__12522 = ((function (fn_spec__$1,conform_BANG_){
return (function() { 
var G__12527__delegate = function (args){
if(cljs.core.truth_(cljs.spec.test._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_12523 = cljs.spec.test._STAR_instrument_enabled_STAR_;
cljs.spec.test._STAR_instrument_enabled_STAR_ = null;

try{if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec__$1))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec__$1),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_12524 = cljs.spec.test._STAR_instrument_enabled_STAR_;
cljs.spec.test._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_12524;
}}finally {cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_12523;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__12527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12528__i = 0, G__12528__a = new Array(arguments.length -  0);
while (G__12528__i < G__12528__a.length) {G__12528__a[G__12528__i] = arguments[G__12528__i + 0]; ++G__12528__i;}
  args = new cljs.core.IndexedSeq(G__12528__a,0);
} 
return G__12527__delegate.call(this,args);};
G__12527.cljs$lang$maxFixedArity = 0;
G__12527.cljs$lang$applyTo = (function (arglist__12529){
var args = cljs.core.seq(arglist__12529);
return G__12527__delegate(args);
});
G__12527.cljs$core$IFn$_invoke$arity$variadic = G__12527__delegate;
return G__12527;
})()
;})(fn_spec__$1,conform_BANG_))
;
goog.object.extend(G__12522,f);

return G__12522;
});
cljs.spec.test.no_fspec = (function cljs$spec$test$no_fspec(v,spec){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(v),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"no-fspec","no-fspec",-1763393966)], null));
});
if(typeof cljs.spec.test.instrumented_vars !== 'undefined'){
} else {
cljs.spec.test.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Helper for instrument.
 */
cljs.spec.test.instrument_choose_fn = (function cljs$spec$test$instrument_choose_fn(f,spec,sym,p__12530){
var map__12533 = p__12530;
var map__12533__$1 = ((((!((map__12533 == null)))?((((map__12533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12533):map__12533);
var over = cljs.core.get.call(null,map__12533__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var stub = cljs.core.get.call(null,map__12533__$1,new cljs.core.Keyword(null,"stub","stub",1339145807));
var replace = cljs.core.get.call(null,map__12533__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sym], true),stub))){
return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,spec,over));
} else {
return cljs.core.get.call(null,replace,sym,f);
}
});
/**
 * Helper for instrument
 */
cljs.spec.test.instrument_choose_spec = (function cljs$spec$test$instrument_choose_spec(spec,sym,p__12535){
var map__12538 = p__12535;
var map__12538__$1 = ((((!((map__12538 == null)))?((((map__12538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538):map__12538);
var overrides = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return cljs.core.get.call(null,overrides,sym,spec);
});
cljs.spec.test.instrument_1_STAR_ = (function cljs$spec$test$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.get_spec.call(null,v);
var map__12542 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.test.instrumented_vars),v);
var map__12542__$1 = ((((!((map__12542 == null)))?((((map__12542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12542):map__12542);
var raw = cljs.core.get.call(null,map__12542__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__12542__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
var to_wrap = ((cljs.core._EQ_.call(null,wrapped,current))?raw:current);
var ospec = (function (){var or__6939__auto__ = cljs.spec.test.instrument_choose_spec.call(null,spec,s,opts);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
throw cljs.spec.test.no_fspec.call(null,v,spec);
}
})();
var ofn = cljs.spec.test.instrument_choose_fn.call(null,to_wrap,ospec,s,opts);
var checked = cljs.spec.test.spec_checking_fn.call(null,v,ofn,ospec);
cljs.core.swap_BANG_.call(null,cljs.spec.test.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),to_wrap,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
});
cljs.spec.test.unstrument_1_STAR_ = (function cljs$spec$test$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__6728__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.test.instrumented_vars),v);
if(cljs.core.truth_(temp__6728__auto__)){
var map__12546 = temp__6728__auto__;
var map__12546__$1 = ((((!((map__12546 == null)))?((((map__12546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12546):map__12546);
var raw = cljs.core.get.call(null,map__12546__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__12546__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
cljs.core.swap_BANG_.call(null,cljs.spec.test.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.test.fn_spec_name_QMARK_ = (function cljs$spec$test$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
cljs.spec.test.collectionize = (function cljs$spec$test$collectionize(x){
if((x instanceof cljs.core.Symbol)){
var x__7865__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
} else {
return x;
}
});
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
cljs.spec.test.instrumentable_syms = (function cljs$spec$test$instrumentable_syms(var_args){
var args12548 = [];
var len__8122__auto___12551 = arguments.length;
var i__8123__auto___12552 = (0);
while(true){
if((i__8123__auto___12552 < len__8122__auto___12551)){
args12548.push((arguments[i__8123__auto___12552]));

var G__12553 = (i__8123__auto___12552 + (1));
i__8123__auto___12552 = G__12553;
continue;
} else {
}
break;
}

var G__12550 = args12548.length;
switch (G__12550) {
case 0:
return cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12548.length)].join('')));

}
});

cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.instrumentable_syms.call(null,null);
});

cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_.call(null,cljs.core.ident_QMARK_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("instrument :gen expects ident keys"),cljs.core.str("\n"),cljs.core.str("(every? ident? (keys (:gen opts)))")].join('')));
}

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,cljs.spec.test.fn_spec_name_QMARK_,cljs.core.keys.call(null,cljs.spec.registry.call(null))),cljs.core.keys.call(null,new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"stub","stub",1339145807).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys.call(null,new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test.instrumentable_syms.cljs$lang$maxFixedArity = 1;

cljs.spec.test.explain_check = (function cljs$spec$test$explain_check(args,spec,v,role){
return cljs.core.ex_info.call(null,"Specification-based check failed",(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,v,null))?null:cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,v),new cljs.core.Keyword("cljs.spec.test","args","cljs.spec.test/args",-644372375),args,new cljs.core.Keyword("cljs.spec.test","val","cljs.spec.test/val",2121386021),v,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547))));
});
/**
 * Returns true if call passes specs, otherwise *returns* an exception
 * with explain-data + ::s/failure.
 */
cljs.spec.test.check_call = (function cljs$spec$test$check_call(f,specs,args){
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args):null);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return cljs.spec.test.explain_check.call(null,args,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,new cljs.core.Keyword(null,"args","args",1315556576));
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret):null);
if(cljs.core._EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return cljs.spec.test.explain_check.call(null,args,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret,new cljs.core.Keyword(null,"ret","ret",-468222814));
} else {
if(cljs.core.truth_((function (){var and__6927__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__6927__auto__)){
var and__6927__auto____$1 = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__6927__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__6927__auto____$1;
}
} else {
return and__6927__auto__;
}
})())){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null)))){
return true;
} else {
return cljs.spec.test.explain_check.call(null,args,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null),new cljs.core.Keyword(null,"fn","fn",-1175266204));
}
} else {
return true;
}
}
}
});
cljs.spec.test.quick_check = (function cljs$spec$test$quick_check(f,specs,p__12556){
var map__12562 = p__12556;
var map__12562__$1 = ((((!((map__12562 == null)))?((((map__12562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12562):map__12562);
var gen = cljs.core.get.call(null,map__12562__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var opts = cljs.core.get.call(null,map__12562__$1,new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533));
var map__12564 = opts;
var map__12564__$1 = ((((!((map__12564 == null)))?((((map__12564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12564):map__12564);
var num_tests = cljs.core.get.call(null,map__12564__$1,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(1000));
var g = (function (){try{return cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),gen);
}catch (e12566){if((e12566 instanceof Error)){
var t = e12566;
return t;
} else {
throw e12566;

}
}})();
if((g instanceof Error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),g], null);
} else {
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (map__12564,map__12564__$1,num_tests,g,map__12562,map__12562__$1,gen,opts){
return (function (p1__12555_SHARP_){
return cljs.spec.test.check_call.call(null,f,specs,p1__12555_SHARP_);
});})(map__12564,map__12564__$1,num_tests,g,map__12562,map__12562__$1,gen,opts))
);
return cljs.core.apply.call(null,cljs.spec.impl.gen.quick_check,num_tests,prop,cljs.core.mapcat.call(null,cljs.core.identity,opts));
}
});
/**
 * Builds spec result map.
 */
cljs.spec.test.make_check_result = (function cljs$spec$test$make_check_result(check_sym,spec,test_check_ret){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),test_check_ret], null),(cljs.core.truth_(check_sym)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),check_sym], null):null),(function (){var temp__6728__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__6728__auto__)){
var result = temp__6728__auto__;
if(result === true){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),result], null);
}
} else {
return null;
}
})(),(function (){var temp__6728__auto__ = new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__6728__auto__)){
var shrunk = temp__6728__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(shrunk)], null);
} else {
return null;
}
})());
});
cljs.spec.test.validate_check_opts = (function cljs$spec$test$validate_check_opts(opts){
if(cljs.core.every_QMARK_.call(null,cljs.core.ident_QMARK_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("check :gen expects ident keys"),cljs.core.str("\n"),cljs.core.str("(every? ident? (keys (:gen opts)))")].join('')));
}
});
cljs.spec.test.failure_type = (function cljs$spec$test$failure_type(x){
return new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x));
});
cljs.spec.test.unwrap_failure = (function cljs$spec$test$unwrap_failure(x){
if(cljs.core.truth_(cljs.spec.test.failure_type.call(null,x))){
return cljs.core.ex_data.call(null,x);
} else {
return x;
}
});
/**
 * Returns the type of the check result. This can be any of the
 * ::s/failure keywords documented in 'check', or:
 * 
 *   :check-passed   all checked fn returns conformed
 *   :check-threw    checked fn threw an exception
 */
cljs.spec.test.result_type = (function cljs$spec$test$result_type(ret){
var failure = new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(ret);
if((failure == null)){
return new cljs.core.Keyword(null,"check-passed","check-passed",1505510820);
} else {
if(cljs.core.truth_(cljs.spec.test.failure_type.call(null,failure))){
return cljs.spec.test.failure_type.call(null,failure);
} else {
return new cljs.core.Keyword(null,"check-threw","check-threw",-1050428963);

}
}
});
/**
 * Given a check result, returns an abbreviated version
 * suitable for summary use.
 */
cljs.spec.test.abbrev_result = (function cljs$spec$test$abbrev_result(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.dissoc.call(null,x,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960)),new cljs.core.Keyword(null,"spec","spec",347520401),cljs.spec.describe),new cljs.core.Keyword(null,"failure","failure",720415879),cljs.spec.test.unwrap_failure);
} else {
return cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
}
});
/**
 * Given a collection of check-results, e.g. from 'check', pretty
 * prints the summary-result (default abbrev-result) of each.
 * 
 * Returns a map with :total, the total number of results, plus a
 * key with a count for each different :type of result.
 */
cljs.spec.test.summarize_results = (function cljs$spec$test$summarize_results(var_args){
var args12567 = [];
var len__8122__auto___12570 = arguments.length;
var i__8123__auto___12571 = (0);
while(true){
if((i__8123__auto___12571 < len__8122__auto___12570)){
args12567.push((arguments[i__8123__auto___12571]));

var G__12572 = (i__8123__auto___12571 + (1));
i__8123__auto___12571 = G__12572;
continue;
} else {
}
break;
}

var G__12569 = args12567.length;
switch (G__12569) {
case 1:
return cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12567.length)].join('')));

}
});

cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$1 = (function (check_results){
return cljs.spec.test.summarize_results.call(null,check_results,cljs.spec.test.abbrev_result);
});

cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$2 = (function (check_results,summary_result){
return cljs.core.reduce.call(null,(function (summary,result){
cljs.pprint.pprint.call(null,summary_result.call(null,result));

return cljs.core.update.call(null,cljs.core.update.call(null,summary,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.inc),cljs.spec.test.result_type.call(null,result),cljs.core.fnil.call(null,cljs.core.inc,(0)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),(0)], null),check_results);
});

cljs.spec.test.summarize_results.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=test.js.map