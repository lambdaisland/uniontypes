// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__7652__auto__ = (((spec == null))?null:spec);
var m__7653__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,spec,x);
} else {
var m__7653__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__7652__auto__ = (((spec == null))?null:spec);
var m__7653__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,spec,y);
} else {
var m__7653__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__7652__auto__ = (((spec == null))?null:spec);
var m__7653__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,spec,path,via,in$,x);
} else {
var m__7653__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__7652__auto__ = (((spec == null))?null:spec);
var m__7653__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__7653__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__7652__auto__ = (((spec == null))?null:spec);
var m__7653__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,spec,gfn);
} else {
var m__7653__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__7652__auto__ = (((spec == null))?null:spec);
var m__7653__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__7652__auto__)]);
if(!((m__7653__auto__ == null))){
return m__7653__auto__.call(null,spec);
} else {
var m__7653__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__7653__auto____$1 == null))){
return m__7653__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__11586 = cljs.core.get.call(null,reg,spec);
spec = G__11586;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__6939__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__6927__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__6927__auto__){
return x;
} else {
return and__6927__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__6927__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__6927__auto__)){
return x;
} else {
return and__6927__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__6939__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
var or__6939__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__6939__auto____$1)){
return or__6939__auto____$1;
} else {
var or__6939__auto____$2 = (function (){var and__6927__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__6927__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__6927__auto__;
}
})();
if(cljs.core.truth_(or__6939__auto____$2)){
return or__6939__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__6939__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__6939__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__6927__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__6927__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__6927__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__6927__auto__ = (form instanceof cljs.core.Symbol);
if(and__6927__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__6927__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6728__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6728__auto__)){
var probs = temp__6728__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6726__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6726__auto__)){
var name = temp__6726__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__8023__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11631_11671 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11632_11672 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11631_11671,_STAR_print_fn_STAR_11632_11672,sb__8023__auto__){
return (function (x__8024__auto__){
return sb__8023__auto__.append(x__8024__auto__);
});})(_STAR_print_newline_STAR_11631_11671,_STAR_print_fn_STAR_11632_11672,sb__8023__auto__))
;

try{var seq__11633_11673 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__11634_11674 = null;
var count__11635_11675 = (0);
var i__11636_11676 = (0);
while(true){
if((i__11636_11676 < count__11635_11675)){
var map__11637_11677 = cljs.core._nth.call(null,chunk__11634_11674,i__11636_11676);
var map__11637_11678__$1 = ((((!((map__11637_11677 == null)))?((((map__11637_11677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11637_11677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11637_11677):map__11637_11677);
var prob_11679 = map__11637_11678__$1;
var path_11680 = cljs.core.get.call(null,map__11637_11678__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_11681 = cljs.core.get.call(null,map__11637_11678__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_11682 = cljs.core.get.call(null,map__11637_11678__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_11683 = cljs.core.get.call(null,map__11637_11678__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_11684 = cljs.core.get.call(null,map__11637_11678__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_11685 = cljs.core.get.call(null,map__11637_11678__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_11685)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_11685),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_11682);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_11684)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_11684)));
}

if(cljs.core.empty_QMARK_.call(null,path_11680)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_11680));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_11681));

if(cljs.core.truth_(reason_11683)){
cljs.core.print.call(null,", ",reason_11683);
} else {
}

var seq__11639_11686 = cljs.core.seq.call(null,prob_11679);
var chunk__11640_11687 = null;
var count__11641_11688 = (0);
var i__11642_11689 = (0);
while(true){
if((i__11642_11689 < count__11641_11688)){
var vec__11643_11690 = cljs.core._nth.call(null,chunk__11640_11687,i__11642_11689);
var k_11691 = cljs.core.nth.call(null,vec__11643_11690,(0),null);
var v_11692 = cljs.core.nth.call(null,vec__11643_11690,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11691))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11691)," ");

cljs.core.pr.call(null,v_11692);
}

var G__11693 = seq__11639_11686;
var G__11694 = chunk__11640_11687;
var G__11695 = count__11641_11688;
var G__11696 = (i__11642_11689 + (1));
seq__11639_11686 = G__11693;
chunk__11640_11687 = G__11694;
count__11641_11688 = G__11695;
i__11642_11689 = G__11696;
continue;
} else {
var temp__6728__auto___11697 = cljs.core.seq.call(null,seq__11639_11686);
if(temp__6728__auto___11697){
var seq__11639_11698__$1 = temp__6728__auto___11697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11639_11698__$1)){
var c__7842__auto___11699 = cljs.core.chunk_first.call(null,seq__11639_11698__$1);
var G__11700 = cljs.core.chunk_rest.call(null,seq__11639_11698__$1);
var G__11701 = c__7842__auto___11699;
var G__11702 = cljs.core.count.call(null,c__7842__auto___11699);
var G__11703 = (0);
seq__11639_11686 = G__11700;
chunk__11640_11687 = G__11701;
count__11641_11688 = G__11702;
i__11642_11689 = G__11703;
continue;
} else {
var vec__11646_11704 = cljs.core.first.call(null,seq__11639_11698__$1);
var k_11705 = cljs.core.nth.call(null,vec__11646_11704,(0),null);
var v_11706 = cljs.core.nth.call(null,vec__11646_11704,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11705))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11705)," ");

cljs.core.pr.call(null,v_11706);
}

var G__11707 = cljs.core.next.call(null,seq__11639_11698__$1);
var G__11708 = null;
var G__11709 = (0);
var G__11710 = (0);
seq__11639_11686 = G__11707;
chunk__11640_11687 = G__11708;
count__11641_11688 = G__11709;
i__11642_11689 = G__11710;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__11711 = seq__11633_11673;
var G__11712 = chunk__11634_11674;
var G__11713 = count__11635_11675;
var G__11714 = (i__11636_11676 + (1));
seq__11633_11673 = G__11711;
chunk__11634_11674 = G__11712;
count__11635_11675 = G__11713;
i__11636_11676 = G__11714;
continue;
} else {
var temp__6728__auto___11715 = cljs.core.seq.call(null,seq__11633_11673);
if(temp__6728__auto___11715){
var seq__11633_11716__$1 = temp__6728__auto___11715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11633_11716__$1)){
var c__7842__auto___11717 = cljs.core.chunk_first.call(null,seq__11633_11716__$1);
var G__11718 = cljs.core.chunk_rest.call(null,seq__11633_11716__$1);
var G__11719 = c__7842__auto___11717;
var G__11720 = cljs.core.count.call(null,c__7842__auto___11717);
var G__11721 = (0);
seq__11633_11673 = G__11718;
chunk__11634_11674 = G__11719;
count__11635_11675 = G__11720;
i__11636_11676 = G__11721;
continue;
} else {
var map__11649_11722 = cljs.core.first.call(null,seq__11633_11716__$1);
var map__11649_11723__$1 = ((((!((map__11649_11722 == null)))?((((map__11649_11722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11649_11722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11649_11722):map__11649_11722);
var prob_11724 = map__11649_11723__$1;
var path_11725 = cljs.core.get.call(null,map__11649_11723__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_11726 = cljs.core.get.call(null,map__11649_11723__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_11727 = cljs.core.get.call(null,map__11649_11723__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_11728 = cljs.core.get.call(null,map__11649_11723__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_11729 = cljs.core.get.call(null,map__11649_11723__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_11730 = cljs.core.get.call(null,map__11649_11723__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_11730)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_11730),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_11727);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_11729)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_11729)));
}

if(cljs.core.empty_QMARK_.call(null,path_11725)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_11725));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_11726));

if(cljs.core.truth_(reason_11728)){
cljs.core.print.call(null,", ",reason_11728);
} else {
}

var seq__11651_11731 = cljs.core.seq.call(null,prob_11724);
var chunk__11652_11732 = null;
var count__11653_11733 = (0);
var i__11654_11734 = (0);
while(true){
if((i__11654_11734 < count__11653_11733)){
var vec__11655_11735 = cljs.core._nth.call(null,chunk__11652_11732,i__11654_11734);
var k_11736 = cljs.core.nth.call(null,vec__11655_11735,(0),null);
var v_11737 = cljs.core.nth.call(null,vec__11655_11735,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11736))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11736)," ");

cljs.core.pr.call(null,v_11737);
}

var G__11738 = seq__11651_11731;
var G__11739 = chunk__11652_11732;
var G__11740 = count__11653_11733;
var G__11741 = (i__11654_11734 + (1));
seq__11651_11731 = G__11738;
chunk__11652_11732 = G__11739;
count__11653_11733 = G__11740;
i__11654_11734 = G__11741;
continue;
} else {
var temp__6728__auto___11742__$1 = cljs.core.seq.call(null,seq__11651_11731);
if(temp__6728__auto___11742__$1){
var seq__11651_11743__$1 = temp__6728__auto___11742__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11651_11743__$1)){
var c__7842__auto___11744 = cljs.core.chunk_first.call(null,seq__11651_11743__$1);
var G__11745 = cljs.core.chunk_rest.call(null,seq__11651_11743__$1);
var G__11746 = c__7842__auto___11744;
var G__11747 = cljs.core.count.call(null,c__7842__auto___11744);
var G__11748 = (0);
seq__11651_11731 = G__11745;
chunk__11652_11732 = G__11746;
count__11653_11733 = G__11747;
i__11654_11734 = G__11748;
continue;
} else {
var vec__11658_11749 = cljs.core.first.call(null,seq__11651_11743__$1);
var k_11750 = cljs.core.nth.call(null,vec__11658_11749,(0),null);
var v_11751 = cljs.core.nth.call(null,vec__11658_11749,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11750))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11750)," ");

cljs.core.pr.call(null,v_11751);
}

var G__11752 = cljs.core.next.call(null,seq__11651_11743__$1);
var G__11753 = null;
var G__11754 = (0);
var G__11755 = (0);
seq__11651_11731 = G__11752;
chunk__11652_11732 = G__11753;
count__11653_11733 = G__11754;
i__11654_11734 = G__11755;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__11756 = cljs.core.next.call(null,seq__11633_11716__$1);
var G__11757 = null;
var G__11758 = (0);
var G__11759 = (0);
seq__11633_11673 = G__11756;
chunk__11634_11674 = G__11757;
count__11635_11675 = G__11758;
i__11636_11676 = G__11759;
continue;
}
} else {
}
}
break;
}

var seq__11661_11760 = cljs.core.seq.call(null,ed);
var chunk__11662_11761 = null;
var count__11663_11762 = (0);
var i__11664_11763 = (0);
while(true){
if((i__11664_11763 < count__11663_11762)){
var vec__11665_11764 = cljs.core._nth.call(null,chunk__11662_11761,i__11664_11763);
var k_11765 = cljs.core.nth.call(null,vec__11665_11764,(0),null);
var v_11766 = cljs.core.nth.call(null,vec__11665_11764,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_11765))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_11765)," ");

cljs.core.pr.call(null,v_11766);

cljs.core.newline.call(null);
}

var G__11767 = seq__11661_11760;
var G__11768 = chunk__11662_11761;
var G__11769 = count__11663_11762;
var G__11770 = (i__11664_11763 + (1));
seq__11661_11760 = G__11767;
chunk__11662_11761 = G__11768;
count__11663_11762 = G__11769;
i__11664_11763 = G__11770;
continue;
} else {
var temp__6728__auto___11771 = cljs.core.seq.call(null,seq__11661_11760);
if(temp__6728__auto___11771){
var seq__11661_11772__$1 = temp__6728__auto___11771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11661_11772__$1)){
var c__7842__auto___11773 = cljs.core.chunk_first.call(null,seq__11661_11772__$1);
var G__11774 = cljs.core.chunk_rest.call(null,seq__11661_11772__$1);
var G__11775 = c__7842__auto___11773;
var G__11776 = cljs.core.count.call(null,c__7842__auto___11773);
var G__11777 = (0);
seq__11661_11760 = G__11774;
chunk__11662_11761 = G__11775;
count__11663_11762 = G__11776;
i__11664_11763 = G__11777;
continue;
} else {
var vec__11668_11778 = cljs.core.first.call(null,seq__11661_11772__$1);
var k_11779 = cljs.core.nth.call(null,vec__11668_11778,(0),null);
var v_11780 = cljs.core.nth.call(null,vec__11668_11778,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_11779))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_11779)," ");

cljs.core.pr.call(null,v_11780);

cljs.core.newline.call(null);
}

var G__11781 = cljs.core.next.call(null,seq__11661_11772__$1);
var G__11782 = null;
var G__11783 = (0);
var G__11784 = (0);
seq__11661_11760 = G__11781;
chunk__11662_11761 = G__11782;
count__11663_11762 = G__11783;
i__11664_11763 = G__11784;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11632_11672;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11631_11671;
}
return [cljs.core.str(sb__8023__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__8023__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11787_11789 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11788_11790 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11787_11789,_STAR_print_fn_STAR_11788_11790,sb__8023__auto__){
return (function (x__8024__auto__){
return sb__8023__auto__.append(x__8024__auto__);
});})(_STAR_print_newline_STAR_11787_11789,_STAR_print_fn_STAR_11788_11790,sb__8023__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11788_11790;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11787_11789;
}
return [cljs.core.str(sb__8023__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__6726__auto__ = (function (){var or__6939__auto__ = (function (){var temp__6728__auto__ = (function (){var or__6939__auto__ = cljs.core.get.call(null,overrides,(function (){var or__6939__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__6728__auto__)){
var gfn = temp__6728__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6726__auto__)){
var g = temp__6726__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6726__auto__,spec__$1){
return (function (p1__11791_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__11791_SHARP_);
});})(g,temp__6726__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args11792 = [];
var len__8122__auto___11795 = arguments.length;
var i__8123__auto___11796 = (0);
while(true){
if((i__8123__auto___11796 < len__8122__auto___11795)){
args11792.push((arguments[i__8123__auto___11796]));

var G__11797 = (i__8123__auto___11796 + (1));
i__8123__auto___11796 = G__11797;
continue;
} else {
}
break;
}

var G__11794 = args11792.length;
switch (G__11794) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11792.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__6927__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__6927__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__6927__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__6939__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
var or__6939__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__6939__auto____$1)){
return or__6939__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6728__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6728__auto__)){
var arg_spec = temp__6728__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6726__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6726__auto__)){
var name = temp__6726__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__8023__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11801_11803 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11802_11804 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11801_11803,_STAR_print_fn_STAR_11802_11804,sb__8023__auto__,ed,arg_spec,temp__6728__auto__,specs){
return (function (x__8024__auto__){
return sb__8023__auto__.append(x__8024__auto__);
});})(_STAR_print_newline_STAR_11801_11803,_STAR_print_fn_STAR_11802_11804,sb__8023__auto__,ed,arg_spec,temp__6728__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11802_11804;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11801_11803;
}
return [cljs.core.str(sb__8023__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__6939__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args11805 = [];
var len__8122__auto___11808 = arguments.length;
var i__8123__auto___11809 = (0);
while(true){
if((i__8123__auto___11809 < len__8122__auto___11808)){
args11805.push((arguments[i__8123__auto___11809]));

var G__11810 = (i__8123__auto___11809 + (1));
i__8123__auto___11809 = G__11810;
continue;
} else {
}
break;
}

var G__11807 = args11805.length;
switch (G__11807) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11805.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6726__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6726__auto__)){
var spec = temp__6726__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args11812 = [];
var len__8122__auto___11815 = arguments.length;
var i__8123__auto___11816 = (0);
while(true){
if((i__8123__auto___11816 < len__8122__auto___11815)){
args11812.push((arguments[i__8123__auto___11816]));

var G__11817 = (i__8123__auto___11816 + (1));
i__8123__auto___11816 = G__11817;
continue;
} else {
}
break;
}

var G__11814 = args11812.length;
switch (G__11814) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11812.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6726__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6726__auto__)){
var name = temp__6726__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__11822){
var map__11853 = p__11822;
var map__11853__$1 = ((((!((map__11853 == null)))?((((map__11853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11853):map__11853);
var argm = map__11853__$1;
var opt = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__11819_SHARP_){
var or__6939__auto__ = k__GT_s.call(null,p1__11819_SHARP_);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return p1__11819_SHARP_;
}
});})(keys_pred,k__GT_s,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec11855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11855 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,map__11853,id,req_keys,opt_specs,p__11822,k__GT_s,pred_forms,meta11856){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.map__11853 = map__11853;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.p__11822 = p__11822;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta11856 = meta11856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_11857,meta11856__$1){
var self__ = this;
var _11857__$1 = this;
return (new cljs.spec.t_cljs$spec11855(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.req,self__.map__11853,self__.id,self__.req_keys,self__.opt_specs,self__.p__11822,self__.k__GT_s,self__.pred_forms,meta11856__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_11857){
var self__ = this;
var _11857__$1 = this;
return self__.meta11856;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec11855.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__11861 = cljs.core.keys.call(null,m);
var vec__11862 = G__11861;
var seq__11863 = cljs.core.seq.call(null,vec__11862);
var first__11864 = cljs.core.first.call(null,seq__11863);
var seq__11863__$1 = cljs.core.next.call(null,seq__11863);
var k = first__11864;
var ks = seq__11863__$1;
var keys = vec__11862;
var ret__$1 = ret;
var G__11861__$1 = G__11861;
while(true){
var ret__$2 = ret__$1;
var vec__11865 = G__11861__$1;
var seq__11866 = cljs.core.seq.call(null,vec__11865);
var first__11867 = cljs.core.first.call(null,seq__11866);
var seq__11866__$1 = cljs.core.next.call(null,seq__11866);
var k__$1 = first__11867;
var ks__$1 = seq__11866__$1;
var keys__$1 = vec__11865;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__11883 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__11884 = ks__$1;
ret__$1 = G__11883;
G__11861__$1 = G__11884;
continue;
}
} else {
var G__11885 = ret__$2;
var G__11886 = ks__$1;
ret__$1 = G__11885;
G__11861__$1 = G__11886;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__11871 = cljs.core.keys.call(null,m);
var vec__11872 = G__11871;
var seq__11873 = cljs.core.seq.call(null,vec__11872);
var first__11874 = cljs.core.first.call(null,seq__11873);
var seq__11873__$1 = cljs.core.next.call(null,seq__11873);
var k = first__11874;
var ks = seq__11873__$1;
var keys = vec__11872;
var ret__$1 = ret;
var G__11871__$1 = G__11871;
while(true){
var ret__$2 = ret__$1;
var vec__11875 = G__11871__$1;
var seq__11876 = cljs.core.seq.call(null,vec__11875);
var first__11877 = cljs.core.first.call(null,seq__11876);
var seq__11876__$1 = cljs.core.next.call(null,seq__11876);
var k__$1 = first__11877;
var ks__$1 = seq__11876__$1;
var keys__$1 = vec__11875;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__11887 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__11888 = ks__$1;
ret__$1 = G__11887;
G__11871__$1 = G__11888;
continue;
} else {
var G__11889 = ret__$2;
var G__11890 = ks__$1;
ret__$1 = G__11889;
G__11871__$1 = G__11890;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__6728__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6728__auto__){
var probs = temp__6728__auto__;
return cljs.core.map.call(null,((function (probs,temp__6728__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__11820_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__11820_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__6728__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__11878){
var vec__11879 = p__11878;
var k = cljs.core.nth.call(null,vec__11879,(0),null);
var v = cljs.core.nth.call(null,vec__11879,(1),null);
if(cljs.core.truth_((function (){var or__6939__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__11821_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__11821_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__11882 = cljs.core.PersistentVector.EMPTY;
var G__11882__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__11882,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__11882);
var G__11882__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__11882__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__11882__$1);
var G__11882__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__11882__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__11882__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__11882__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__11882__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"map__11853","map__11853",-1457006631,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"p__11822","p__11822",42127133,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta11856","meta11856",-491763516,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11855.cljs$lang$type = true;

cljs.spec.t_cljs$spec11855.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11855";

cljs.spec.t_cljs$spec11855.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec11855");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec11855 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec11855(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,map__11853__$2,id__$1,req_keys__$1,opt_specs__$1,p__11822__$1,k__GT_s__$1,pred_forms__$1,meta11856){
return (new cljs.spec.t_cljs$spec11855(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,map__11853__$2,id__$1,req_keys__$1,opt_specs__$1,p__11822__$1,k__GT_s__$1,pred_forms__$1,meta11856));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__11853,map__11853__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec11855(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,map__11853__$1,id,req_keys,opt_specs,p__11822,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args11891 = [];
var len__8122__auto___11899 = arguments.length;
var i__8123__auto___11900 = (0);
while(true){
if((i__8123__auto___11900 < len__8122__auto___11899)){
args11891.push((arguments[i__8123__auto___11900]));

var G__11901 = (i__8123__auto___11900 + (1));
i__8123__auto___11900 = G__11901;
continue;
} else {
}
break;
}

var G__11893 = args11891.length;
switch (G__11893) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11891.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__11894 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__11894,gfn);
} else {
return G__11894;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__11895 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__11895,gfn);
} else {
return G__11895;
}
} else {
if(typeof cljs.spec.t_cljs$spec11896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11896 = (function (form,pred,gfn,cpred_QMARK_,unc,meta11897){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta11897 = meta11897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11898,meta11897__$1){
var self__ = this;
var _11898__$1 = this;
return (new cljs.spec.t_cljs$spec11896(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta11897__$1));
});

cljs.spec.t_cljs$spec11896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11898){
var self__ = this;
var _11898__$1 = this;
return self__.meta11897;
});

cljs.spec.t_cljs$spec11896.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec11896.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec11896.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec11896.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec11896.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec11896.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec11896.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec11896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta11897","meta11897",-1448074541,null)], null);
});

cljs.spec.t_cljs$spec11896.cljs$lang$type = true;

cljs.spec.t_cljs$spec11896.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11896";

cljs.spec.t_cljs$spec11896.cljs$lang$ctorPrWriter = (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec11896");
});

cljs.spec.__GT_t_cljs$spec11896 = (function cljs$spec$__GT_t_cljs$spec11896(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta11897){
return (new cljs.spec.t_cljs$spec11896(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta11897));
});

}

return (new cljs.spec.t_cljs$spec11896(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args11908 = [];
var len__8122__auto___11922 = arguments.length;
var i__8123__auto___11923 = (0);
while(true){
if((i__8123__auto___11923 < len__8122__auto___11922)){
args11908.push((arguments[i__8123__auto___11923]));

var G__11924 = (i__8123__auto___11923 + (1));
i__8123__auto___11923 = G__11924;
continue;
} else {
}
break;
}

var G__11910 = args11908.length;
switch (G__11910) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11908.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__11903_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__6927__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__11903_SHARP_));
if(and__6927__auto__){
return mm.call(null,p1__11903_SHARP_);
} else {
return and__6927__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__11904_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__11904_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__11905_SHARP_,p2__11906_SHARP_){
return cljs.core.assoc.call(null,p1__11905_SHARP_,retag,p2__11906_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec11911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11911 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta11912){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta11912 = meta11912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_11913,meta11912__$1){
var self__ = this;
var _11913__$1 = this;
return (new cljs.spec.t_cljs$spec11911(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta11912__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_11913){
var self__ = this;
var _11913__$1 = this;
return self__.meta11912;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec11911.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6726__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6726__auto__)){
var pred = temp__6726__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6726__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6726__auto__)){
var pred = temp__6726__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6726__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6726__auto__)){
var pred = temp__6726__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__11914){
var vec__11915 = p__11914;
var k = cljs.core.nth.call(null,vec__11915,(0),null);
var f = cljs.core.nth.call(null,vec__11915,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__11915,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__11915,k,f,___$1,id,predx,dval,tag){
return (function (p1__11907_SHARP_){
return self__.tag.call(null,p1__11907_SHARP_,k);
});})(rmap__$1,p,vec__11915,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__7865__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__7865__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto____$1);
})(),x__7865__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__11915,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__11918){
var vec__11919 = p__11918;
var k = cljs.core.nth.call(null,vec__11919,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__7865__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta11912","meta11912",1916819678,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11911.cljs$lang$type = true;

cljs.spec.t_cljs$spec11911.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11911";

cljs.spec.t_cljs$spec11911.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec11911");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec11911 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec11911(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta11912){
return (new cljs.spec.t_cljs$spec11911(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta11912));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec11911(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args11926 = [];
var len__8122__auto___11932 = arguments.length;
var i__8123__auto___11933 = (0);
while(true){
if((i__8123__auto___11933 < len__8122__auto___11932)){
args11926.push((arguments[i__8123__auto___11933]));

var G__11934 = (i__8123__auto___11933 + (1));
i__8123__auto___11933 = G__11934;
continue;
} else {
}
break;
}

var G__11928 = args11926.length;
switch (G__11928) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11926.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec11929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11929 = (function (forms,preds,gfn,meta11930){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta11930 = meta11930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11931,meta11930__$1){
var self__ = this;
var _11931__$1 = this;
return (new cljs.spec.t_cljs$spec11929(self__.forms,self__.preds,self__.gfn,meta11930__$1));
});

cljs.spec.t_cljs$spec11929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11931){
var self__ = this;
var _11931__$1 = this;
return self__.meta11930;
});

cljs.spec.t_cljs$spec11929.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec11929.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__11936 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__11937 = (i + (1));
ret = G__11936;
i = G__11937;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec11929.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__11938 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__11939 = (i + (1));
ret = G__11938;
i = G__11939;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec11929.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec11929.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec11929.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec11929.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec11929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta11930","meta11930",2043190318,null)], null);
});

cljs.spec.t_cljs$spec11929.cljs$lang$type = true;

cljs.spec.t_cljs$spec11929.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11929";

cljs.spec.t_cljs$spec11929.cljs$lang$ctorPrWriter = (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec11929");
});

cljs.spec.__GT_t_cljs$spec11929 = (function cljs$spec$__GT_t_cljs$spec11929(forms__$1,preds__$1,gfn__$1,meta11930){
return (new cljs.spec.t_cljs$spec11929(forms__$1,preds__$1,gfn__$1,meta11930));
});

}

return (new cljs.spec.t_cljs$spec11929(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x11941 = v;
x11941.cljs$core$IMapEntry$ = true;

x11941.cljs$core$IMapEntry$_key$arity$1 = ((function (x11941){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x11941))
;

x11941.cljs$core$IMapEntry$_val$arity$1 = ((function (x11941){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x11941))
;

return x11941;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__11956 = (i + (1));
i = G__11956;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec11949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11949 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta11950){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta11950 = meta11950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_11951,meta11950__$1){
var self__ = this;
var _11951__$1 = this;
return (new cljs.spec.t_cljs$spec11949(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta11950__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_11951){
var self__ = this;
var _11951__$1 = this;
return self__.meta11950;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec11949.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__11952){
var self__ = this;
var vec__11953 = p__11952;
var k = cljs.core.nth.call(null,vec__11953,(0),null);
var x = cljs.core.nth.call(null,vec__11953,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta11950","meta11950",-559948424,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec11949.cljs$lang$type = true;

cljs.spec.t_cljs$spec11949.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11949";

cljs.spec.t_cljs$spec11949.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec11949");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec11949 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec11949(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta11950){
return (new cljs.spec.t_cljs$spec11949(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta11950));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec11949(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__11983 = preds;
var vec__11985 = G__11983;
var seq__11986 = cljs.core.seq.call(null,vec__11985);
var first__11987 = cljs.core.first.call(null,seq__11986);
var seq__11986__$1 = cljs.core.next.call(null,seq__11986);
var pred = first__11987;
var preds__$1 = seq__11986__$1;
var G__11984 = forms;
var vec__11988 = G__11984;
var seq__11989 = cljs.core.seq.call(null,vec__11988);
var first__11990 = cljs.core.first.call(null,seq__11989);
var seq__11989__$1 = cljs.core.next.call(null,seq__11989);
var form = first__11990;
var forms__$1 = seq__11989__$1;
var ret__$1 = ret;
var G__11983__$1 = G__11983;
var G__11984__$1 = G__11984;
while(true){
var ret__$2 = ret__$1;
var vec__11991 = G__11983__$1;
var seq__11992 = cljs.core.seq.call(null,vec__11991);
var first__11993 = cljs.core.first.call(null,seq__11992);
var seq__11992__$1 = cljs.core.next.call(null,seq__11992);
var pred__$1 = first__11993;
var preds__$2 = seq__11992__$1;
var vec__11994 = G__11984__$1;
var seq__11995 = cljs.core.seq.call(null,vec__11994);
var first__11996 = cljs.core.first.call(null,seq__11995);
var seq__11995__$1 = cljs.core.next.call(null,seq__11995);
var form__$1 = first__11996;
var forms__$2 = seq__11995__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__11997 = nret;
var G__11998 = preds__$2;
var G__11999 = forms__$2;
ret__$1 = G__11997;
G__11983__$1 = G__11998;
G__11984__$1 = G__11999;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__12026 = forms;
var vec__12028 = G__12026;
var seq__12029 = cljs.core.seq.call(null,vec__12028);
var first__12030 = cljs.core.first.call(null,seq__12029);
var seq__12029__$1 = cljs.core.next.call(null,seq__12029);
var form = first__12030;
var forms__$1 = seq__12029__$1;
var G__12027 = preds;
var vec__12031 = G__12027;
var seq__12032 = cljs.core.seq.call(null,vec__12031);
var first__12033 = cljs.core.first.call(null,seq__12032);
var seq__12032__$1 = cljs.core.next.call(null,seq__12032);
var pred = first__12033;
var preds__$1 = seq__12032__$1;
var ret__$1 = ret;
var G__12026__$1 = G__12026;
var G__12027__$1 = G__12027;
while(true){
var ret__$2 = ret__$1;
var vec__12034 = G__12026__$1;
var seq__12035 = cljs.core.seq.call(null,vec__12034);
var first__12036 = cljs.core.first.call(null,seq__12035);
var seq__12035__$1 = cljs.core.next.call(null,seq__12035);
var form__$1 = first__12036;
var forms__$2 = seq__12035__$1;
var vec__12037 = G__12027__$1;
var seq__12038 = cljs.core.seq.call(null,vec__12037);
var first__12039 = cljs.core.first.call(null,seq__12038);
var seq__12038__$1 = cljs.core.next.call(null,seq__12038);
var pred__$1 = first__12039;
var preds__$2 = seq__12038__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__12040 = nret;
var G__12041 = forms__$2;
var G__12042 = preds__$2;
ret__$1 = G__12040;
G__12026__$1 = G__12041;
G__12027__$1 = G__12042;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec12048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12048 = (function (and_spec_impl,forms,preds,gfn,meta12049){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta12049 = meta12049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12050,meta12049__$1){
var self__ = this;
var _12050__$1 = this;
return (new cljs.spec.t_cljs$spec12048(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta12049__$1));
});

cljs.spec.t_cljs$spec12048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12050){
var self__ = this;
var _12050__$1 = this;
return self__.meta12049;
});

cljs.spec.t_cljs$spec12048.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec12048.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec12048.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__12044_SHARP_,p2__12043_SHARP_){
return cljs.spec.unform.call(null,p2__12043_SHARP_,p1__12044_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec12048.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec12048.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec12048.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec12048.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec12048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12049","meta12049",1367582293,null)], null);
});

cljs.spec.t_cljs$spec12048.cljs$lang$type = true;

cljs.spec.t_cljs$spec12048.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12048";

cljs.spec.t_cljs$spec12048.cljs$lang$ctorPrWriter = (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec12048");
});

cljs.spec.__GT_t_cljs$spec12048 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec12048(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta12049){
return (new cljs.spec.t_cljs$spec12048(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta12049));
});

}

return (new cljs.spec.t_cljs$spec12048(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__6939__auto__ = kfn;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__6939__auto__ = kform;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.valid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__6927__auto__ = distinct;
if(cljs.core.truth_(and__6927__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__6927__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__6927__auto__ = count;
if(cljs.core.truth_(and__6927__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__6927__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7865__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__6927__auto__ = (function (){var or__6939__auto__ = min_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__6927__auto__)){
return !((((function (){var or__6939__auto__ = min_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__6939__auto__ = max_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__6927__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__7865__auto__ = (function (){var or__6939__auto__ = min_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.count.call(null,cljs.core.unquote.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = (function (){var or__6939__auto__ = max_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec12062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12062 = (function (merge_spec_impl,forms,preds,gfn,meta12063){
this.merge_spec_impl = merge_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta12063 = meta12063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12064,meta12063__$1){
var self__ = this;
var _12064__$1 = this;
return (new cljs.spec.t_cljs$spec12062(self__.merge_spec_impl,self__.forms,self__.preds,self__.gfn,meta12063__$1));
});

cljs.spec.t_cljs$spec12062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12064){
var self__ = this;
var _12064__$1 = this;
return self__.meta12063;
});

cljs.spec.t_cljs$spec12062.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec12062.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__12051_SHARP_,p2__12052_SHARP_){
return cljs.spec.dt.call(null,p1__12051_SHARP_,x,p2__12052_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec12062.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__12053_SHARP_){
return cljs.spec.unform.call(null,p1__12053_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec12062.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__12054_SHARP_,p2__12055_SHARP_){
return cljs.spec.explain_1.call(null,p1__12054_SHARP_,p2__12055_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec12062.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__12056_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__12056_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__12057_SHARP_,p2__12058_SHARP_){
return cljs.spec.gensub.call(null,p1__12057_SHARP_,overrides,path,rmap,p2__12058_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec12062.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec12062.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec12062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"merge-spec-impl","merge-spec-impl",397115684,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'merge'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12063","meta12063",-919327735,null)], null);
});

cljs.spec.t_cljs$spec12062.cljs$lang$type = true;

cljs.spec.t_cljs$spec12062.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12062";

cljs.spec.t_cljs$spec12062.cljs$lang$ctorPrWriter = (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec12062");
});

cljs.spec.__GT_t_cljs$spec12062 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec12062(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta12063){
return (new cljs.spec.t_cljs$spec12062(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta12063));
});

}

return (new cljs.spec.t_cljs$spec12062(cljs$spec$merge_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args12069 = [];
var len__8122__auto___12094 = arguments.length;
var i__8123__auto___12095 = (0);
while(true){
if((i__8123__auto___12095 < len__8122__auto___12094)){
args12069.push((arguments[i__8123__auto___12095]));

var G__12096 = (i__8123__auto___12095 + (1));
i__8123__auto___12095 = G__12096;
continue;
} else {
}
break;
}

var G__12071 = args12069.length;
switch (G__12071) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12069.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__12072,gfn){
var map__12073 = p__12072;
var map__12073__$1 = ((((!((map__12073 == null)))?((((map__12073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12073):map__12073);
var opts = map__12073__$1;
var max_count = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__12065_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__12065_SHARP_);
});})(conform_into,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__6939__auto__ = kfn;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return ((function (or__6939__auto__,conform_into,check_QMARK_,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__6939__auto__,conform_into,check_QMARK_,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__12075 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__12075,(0),null);
var kindform = cljs.core.nth.call(null,vec__12075,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__6927__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6927__auto__){
var or__6939__auto__ = (function (){var and__6927__auto____$1 = kind;
if(cljs.core.truth_(and__6927__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__6927__auto____$1;
}
})();
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__6927__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__12066_SHARP_){
return cljs.core.empty.call(null,(function (){var or__6939__auto__ = conform_into;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return p1__12066_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec12078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12078 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,p__12072,kindform,conform_keys,kind_form,addcv,cfns,map__12073,vec__12075,distinct,kindfn,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta12079){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.p__12072 = p__12072;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.map__12073 = map__12073;
this.vec__12075 = vec__12075;
this.distinct = distinct;
this.kindfn = kindfn;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta12079 = meta12079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_12080,meta12079__$1){
var self__ = this;
var _12080__$1 = this;
return (new cljs.spec.t_cljs$spec12078(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.p__12072,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.map__12073,self__.vec__12075,self__.distinct,self__.kindfn,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta12079__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_12080){
var self__ = this;
var _12080__$1 = this;
return self__.meta12079;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec12078.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__12081 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__12081,(0),null);
var add = cljs.core.nth.call(null,vec__12081,(1),null);
var complete = cljs.core.nth.call(null,vec__12081,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__12087 = cljs.core.seq.call(null,x);
var vec__12088 = G__12087;
var seq__12089 = cljs.core.seq.call(null,vec__12088);
var first__12090 = cljs.core.first.call(null,seq__12089);
var seq__12089__$1 = cljs.core.next.call(null,seq__12089);
var v = first__12090;
var vs = seq__12089__$1;
var vseq = vec__12088;
var ret__$1 = ret;
var i__$1 = i;
var G__12087__$1 = G__12087;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__12091 = G__12087__$1;
var seq__12092 = cljs.core.seq.call(null,vec__12091);
var first__12093 = cljs.core.first.call(null,seq__12092);
var seq__12092__$1 = cljs.core.next.call(null,seq__12092);
var v__$1 = first__12093;
var vs__$1 = seq__12092__$1;
var vseq__$1 = vec__12091;
if(vseq__$1){
var cv = cljs.spec.dt.call(null,self__.pred,v__$1,null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12098 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__12099 = (i__$2 + (1));
var G__12100 = vs__$1;
ret__$1 = G__12098;
i__$1 = G__12099;
G__12087__$1 = G__12100;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__7272__auto__ = (1);
var y__7273__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__12101 = (i + step);
i = G__12101;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__6939__auto__ = (function (){var and__6927__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__6927__auto__){
return x;
} else {
return and__6927__auto__;
}
})();
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__6939__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__6939__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__6939__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.call(null),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__12067_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__12067_SHARP_)){
return p1__12067_SHARP_;
} else {
return cljs.core.empty.call(null,p1__12067_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__12068_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__12068_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__12068_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__6939__auto__ = self__.min_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__6939__auto__ = self__.max_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
var x__7272__auto__ = self__.gen_max;
var y__7273__auto__ = ((2) * (function (){var or__6939__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__6939__auto____$1)){
return or__6939__auto____$1;
} else {
return (0);
}
})());
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__6939__auto__ = self__.min_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__6939__auto__ = self__.min_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return (0);
}
})(),(function (){var or__6939__auto__ = self__.max_count;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
var x__7272__auto__ = self__.gen_max;
var y__7273__auto__ = ((2) * (function (){var or__6939__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__6939__auto____$1)){
return or__6939__auto____$1;
} else {
return (0);
}
})());
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__7865__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p__12072","p__12072",990388846,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"map__12073","map__12073",-127329677,null),new cljs.core.Symbol(null,"vec__12075","vec__12075",1568752501,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta12079","meta12079",326032746,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec12078.cljs$lang$type = true;

cljs.spec.t_cljs$spec12078.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12078";

cljs.spec.t_cljs$spec12078.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec12078");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec12078 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec12078(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__12072__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,map__12073__$2,vec__12075__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta12079){
return (new cljs.spec.t_cljs$spec12078(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__12072__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,map__12073__$2,vec__12075__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta12079));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__12075,kindfn,kindform,cfns,map__12073,map__12073__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec12078(form,max_count,check_QMARK_,gfn,gen_max,pred,p__12072,kindform,conform_keys,kind_form,addcv,cfns,map__12073__$1,vec__12075,distinct,kindfn,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__12102){
var map__12105 = p__12102;
var map__12105__$1 = ((((!((map__12105 == null)))?((((map__12105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12105):map__12105);
var op = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__12107){
var map__12119 = p__12107;
var map__12119__$1 = ((((!((map__12119 == null)))?((((map__12119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12119):map__12119);
var vec__12120 = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12121 = cljs.core.seq.call(null,vec__12120);
var first__12122 = cljs.core.first.call(null,seq__12121);
var seq__12121__$1 = cljs.core.next.call(null,seq__12121);
var p1 = first__12122;
var pr = seq__12121__$1;
var ps = vec__12120;
var vec__12123 = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12124 = cljs.core.seq.call(null,vec__12123);
var first__12125 = cljs.core.first.call(null,seq__12124);
var seq__12124__$1 = cljs.core.next.call(null,seq__12124);
var k1 = first__12125;
var kr = seq__12124__$1;
var ks = vec__12123;
var vec__12126 = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__12127 = cljs.core.seq.call(null,vec__12126);
var first__12128 = cljs.core.first.call(null,seq__12127);
var seq__12127__$1 = cljs.core.next.call(null,seq__12127);
var f1 = first__12128;
var fr = seq__12127__$1;
var forms = vec__12126;
var ret = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__8129__auto__ = [];
var len__8122__auto___12131 = arguments.length;
var i__8123__auto___12132 = (0);
while(true){
if((i__8123__auto___12132 < len__8122__auto___12131)){
args__8129__auto__.push((arguments[i__8123__auto___12132]));

var G__12133 = (i__8123__auto___12132 + (1));
i__8123__auto___12132 = G__12133;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq12130){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12130));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7865__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__7865__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__6939__auto__ = ks;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__12134_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__12134_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__6939__auto__ = cljs.core.seq.call(null,ks);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6939__auto__ = cljs.core.seq.call(null,forms);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__12135_SHARP_){
return cljs.core.nth.call(null,p1__12135_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__12145 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__12148 = cljs.core.nth.call(null,vec__12145,(0),null);
var seq__12149 = cljs.core.seq.call(null,vec__12148);
var first__12150 = cljs.core.first.call(null,seq__12149);
var seq__12149__$1 = cljs.core.next.call(null,seq__12149);
var p1 = first__12150;
var pr = seq__12149__$1;
var ps__$1 = vec__12148;
var vec__12151 = cljs.core.nth.call(null,vec__12145,(1),null);
var k1 = cljs.core.nth.call(null,vec__12151,(0),null);
var ks__$1 = vec__12151;
var forms__$1 = cljs.core.nth.call(null,vec__12145,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__8129__auto__ = [];
var len__8122__auto___12155 = arguments.length;
var i__8123__auto___12156 = (0);
while(true){
if((i__8123__auto___12156 < len__8122__auto___12155)){
args__8129__auto__.push((arguments[i__8123__auto___12156]));

var G__12157 = (i__8123__auto___12156 + (1));
i__8123__auto___12156 = G__12157;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq12154){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12154));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__6927__auto__ = p1;
if(cljs.core.truth_(and__6927__auto__)){
return p2;
} else {
return and__6927__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__6939__auto__ = p1;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__6939__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__6939__auto__){
return or__6939__auto__;
} else {
var or__6939__auto____$1 = (function (){var and__6927__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__6927__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__6927__auto__;
}
})();
if(cljs.core.truth_(or__6939__auto____$1)){
return or__6939__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__12161 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12161__$1 = ((((!((map__12161 == null)))?((((map__12161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12161):map__12161);
var p__$1 = map__12161__$1;
var op = cljs.core.get.call(null,map__12161__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12161__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__12161__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12161__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__12161__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12163 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12163)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__12163)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12163)){
var and__6927__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__6927__auto__)){
var or__6939__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__6927__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12163)){
var or__6939__auto__ = (p1 === p2);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12163)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12163)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__12182 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12182__$1 = ((((!((map__12182 == null)))?((((map__12182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12182):map__12182);
var p__$1 = map__12182__$1;
var vec__12183 = cljs.core.get.call(null,map__12182__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12184 = cljs.core.seq.call(null,vec__12183);
var first__12185 = cljs.core.first.call(null,seq__12184);
var seq__12184__$1 = cljs.core.next.call(null,seq__12184);
var p0 = first__12185;
var pr = seq__12184__$1;
var ps = vec__12183;
var vec__12186 = cljs.core.get.call(null,map__12182__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12186,(0),null);
var ks = vec__12186;
var op = cljs.core.get.call(null,map__12182__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12182__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12182__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12182__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12190 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12190)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__12190)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12190)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12190)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12190)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12190)){
var vec__12191 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__12194 = cljs.core.nth.call(null,vec__12191,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__12194,(0),null);
var vec__12197 = cljs.core.nth.call(null,vec__12191,(1),null);
var k0 = cljs.core.nth.call(null,vec__12197,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__12216 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12216__$1 = ((((!((map__12216 == null)))?((((map__12216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12216):map__12216);
var p__$1 = map__12216__$1;
var vec__12217 = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12218 = cljs.core.seq.call(null,vec__12217);
var first__12219 = cljs.core.first.call(null,seq__12218);
var seq__12218__$1 = cljs.core.next.call(null,seq__12218);
var p0 = first__12219;
var pr = seq__12218__$1;
var ps = vec__12217;
var vec__12220 = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12220,(0),null);
var ks = vec__12220;
var op = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__12224 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12224)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__12224)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12224)){
var px = cljs.core.reduce.call(null,((function (G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12201_SHARP_,p2__12200_SHARP_){
return cljs.spec.unform.call(null,p2__12200_SHARP_,p1__12201_SHARP_);
});})(G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12224)){
return cljs.core.mapcat.call(null,((function (G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12202_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__12202_SHARP_);
});})(G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12224)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12203_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__12203_SHARP_);
});})(G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__12224,map__12216,map__12216__$1,p__$1,vec__12217,seq__12218,first__12219,seq__12218__$1,p0,pr,ps,vec__12220,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12224)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__12225 = x;
var k__$1 = cljs.core.nth.call(null,vec__12225,(0),null);
var v = cljs.core.nth.call(null,vec__12225,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__12231 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12231__$1 = ((((!((map__12231 == null)))?((((map__12231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12231):map__12231);
var p__$1 = map__12231__$1;
var op = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__12231,map__12231__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__12231,map__12231__$1,p__$1,op,ps,splice))
;
var G__12233 = op;
if(cljs.core._EQ_.call(null,null,G__12233)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12233)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12233)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12233)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12233)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12233)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__12244 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12244__$1 = ((((!((map__12244 == null)))?((((map__12244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12244):map__12244);
var p__$1 = map__12244__$1;
var vec__12245 = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12246 = cljs.core.seq.call(null,vec__12245);
var first__12247 = cljs.core.first.call(null,seq__12246);
var seq__12246__$1 = cljs.core.next.call(null,seq__12246);
var p0 = first__12247;
var pr = seq__12246__$1;
var ps = vec__12245;
var vec__12248 = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12249 = cljs.core.seq.call(null,vec__12248);
var first__12250 = cljs.core.first.call(null,seq__12249);
var seq__12249__$1 = cljs.core.next.call(null,seq__12249);
var k0 = first__12250;
var kr = seq__12249__$1;
var ks = vec__12248;
var op = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__12244__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__12252 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12252)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12252)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12252)){
var temp__6728__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6728__auto__)){
var p1__$1 = temp__6728__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12252)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12252)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__12252,map__12244,map__12244__$1,p__$1,vec__12245,seq__12246,first__12247,seq__12246__$1,p0,pr,ps,vec__12248,seq__12249,first__12250,seq__12249__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__12234_SHARP_){
return cljs$spec$deriv.call(null,p1__12234_SHARP_,x);
});})(G__12252,map__12244,map__12244__$1,p__$1,vec__12245,seq__12246,first__12247,seq__12246__$1,p0,pr,ps,vec__12248,seq__12249,first__12250,seq__12249__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12252)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__12256 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12256__$1 = ((((!((map__12256 == null)))?((((map__12256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12256):map__12256);
var p__$1 = map__12256__$1;
var op = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__12258 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12258)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12258)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12258)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12258)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__7865__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__6939__auto__ = cljs.core.seq.call(null,ks);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12258)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__7865__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12258)){
var x__7865__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__7865__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto____$1);
})(),x__7865__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__12272 = input;
var x = cljs.core.nth.call(null,vec__12272,(0),null);
var input__$1 = vec__12272;
var map__12275 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12275__$1 = ((((!((map__12275 == null)))?((((map__12275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12275):map__12275);
var p__$1 = map__12275__$1;
var op = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6726__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6726__auto__)){
var name = temp__6726__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__12272,x,input__$1,map__12275,map__12275__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__12272,x,input__$1,map__12275,map__12275__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__12277 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12277)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12277)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12277)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6726__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6726__auto__)){
var p1__$1 = temp__6726__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12277)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__6939__auto__ = cljs.core.seq.call(null,ks);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6939__auto__ = cljs.core.seq.call(null,forms);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__12278 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__12277,vec__12272,x,input__$1,map__12275,map__12275__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__12281){
var vec__12282 = p__12281;
var p__$2 = cljs.core.nth.call(null,vec__12282,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__12277,vec__12272,x,input__$1,map__12275,map__12275__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__12278,(0),null);
var k = cljs.core.nth.call(null,vec__12278,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__12278,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__6939__auto__ = form__$1;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12277)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__12277,vec__12272,x,input__$1,map__12275,map__12275__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__6939__auto__ = form__$1;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__12277,vec__12272,x,input__$1,map__12275,map__12275__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__6939__auto__ = cljs.core.seq.call(null,ks);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6939__auto__ = cljs.core.seq.call(null,forms);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12277)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__12291 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12291__$1 = ((((!((map__12291 == null)))?((((map__12291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12291):map__12291);
var p__$1 = map__12291__$1;
var ps = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__6927__auto__ = rmap__$1;
if(cljs.core.truth_(and__6927__auto__)){
var and__6927__auto____$1 = id;
if(cljs.core.truth_(and__6927__auto____$1)){
var and__6927__auto____$2 = k;
if(cljs.core.truth_(and__6927__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__6927__auto____$2;
}
} else {
return and__6927__auto____$1;
}
} else {
return and__6927__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__6939__auto__ = f__$1;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return p__$2;
}
})());
});})(map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__6939__auto__ = f__$1;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__6939__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6939__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__6939__auto__ = (function (){var temp__6728__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6728__auto__)){
var g = temp__6728__auto__;
var G__12294 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__12294)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__12294)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
var or__6939__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__6939__auto____$1)){
return or__6939__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__12295 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12295)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__12295)){
var temp__6728__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6728__auto__)){
var g = temp__6728__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12295)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12295)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12295)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12295)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6728__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6728__auto__)){
var g = temp__6728__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6728__auto__,G__12295,or__6939__auto____$1,or__6939__auto__,map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__12285_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12285_SHARP_);
});})(g,temp__6728__auto__,G__12295,or__6939__auto____$1,or__6939__auto__,map__12291,map__12291__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__12296){
while(true){
var vec__12300 = p__12296;
var seq__12301 = cljs.core.seq.call(null,vec__12300);
var first__12302 = cljs.core.first.call(null,seq__12301);
var seq__12301__$1 = cljs.core.next.call(null,seq__12301);
var x = first__12302;
var xs = seq__12301__$1;
var data = vec__12300;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6726__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6726__auto__)){
var dp = temp__6726__auto__;
var G__12303 = dp;
var G__12304 = xs;
p = G__12303;
p__12296 = G__12304;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__12318 = input;
var vec__12319 = G__12318;
var seq__12320 = cljs.core.seq.call(null,vec__12319);
var first__12321 = cljs.core.first.call(null,seq__12320);
var seq__12320__$1 = cljs.core.next.call(null,seq__12320);
var x = first__12321;
var xs = seq__12320__$1;
var data = vec__12319;
var i = (0);
var p__$1 = p;
var G__12318__$1 = G__12318;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__12322 = G__12318__$1;
var seq__12323 = cljs.core.seq.call(null,vec__12322);
var first__12324 = cljs.core.first.call(null,seq__12323);
var seq__12323__$1 = cljs.core.next.call(null,seq__12323);
var x__$1 = first__12324;
var xs__$1 = seq__12323__$1;
var data__$1 = vec__12322;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6726__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6726__auto__)){
var dp = temp__6726__auto__;
var G__12325 = dp;
var G__12326 = xs__$1;
var G__12327 = (i__$2 + (1));
p__$1 = G__12325;
G__12318__$1 = G__12326;
i__$1 = G__12327;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__6939__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec12331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12331 = (function (regex_spec_impl,re,gfn,meta12332){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta12332 = meta12332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12333,meta12332__$1){
var self__ = this;
var _12333__$1 = this;
return (new cljs.spec.t_cljs$spec12331(self__.regex_spec_impl,self__.re,self__.gfn,meta12332__$1));
});

cljs.spec.t_cljs$spec12331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12333){
var self__ = this;
var _12333__$1 = this;
return self__.meta12332;
});

cljs.spec.t_cljs$spec12331.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec12331.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec12331.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec12331.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec12331.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec12331.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec12331.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec12331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12332","meta12332",-1712896917,null)], null);
});

cljs.spec.t_cljs$spec12331.cljs$lang$type = true;

cljs.spec.t_cljs$spec12331.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12331";

cljs.spec.t_cljs$spec12331.cljs$lang$ctorPrWriter = (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec12331");
});

cljs.spec.__GT_t_cljs$spec12331 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec12331(regex_spec_impl__$1,re__$1,gfn__$1,meta12332){
return (new cljs.spec.t_cljs$spec12331(regex_spec_impl__$1,re__$1,gfn__$1,meta12332));
});

}

return (new cljs.spec.t_cljs$spec12331(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__6927__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__6927__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__6927__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__12334_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__12334_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6726__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6726__auto__)){
var vec__12338 = temp__6726__auto__;
var smallest = cljs.core.nth.call(null,vec__12338,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec12347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec12347 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta12348){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta12348 = meta12348;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_12349,meta12348__$1){
var self__ = this;
var _12349__$1 = this;
return (new cljs.spec.t_cljs$spec12347(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta12348__$1));
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_12349){
var self__ = this;
var _12349__$1 = this;
return self__.meta12348;
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec12347.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e12350){if((e12350 instanceof Error)){
var t = e12350;
return t;
} else {
throw e12350;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__12353__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__8023__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12351_12354 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12352_12355 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12351_12354,_STAR_print_fn_STAR_12352_12355,sb__8023__auto__,___$3,specs){
return (function (x__8024__auto__){
return sb__8023__auto__.append(x__8024__auto__);
});})(_STAR_print_newline_STAR_12351_12354,_STAR_print_fn_STAR_12352_12355,sb__8023__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12352_12355;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12351_12354;
}
return [cljs.core.str(sb__8023__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__12353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12356__i = 0, G__12356__a = new Array(arguments.length -  0);
while (G__12356__i < G__12356__a.length) {G__12356__a[G__12356__i] = arguments[G__12356__i + 0]; ++G__12356__i;}
  args = new cljs.core.IndexedSeq(G__12356__a,0);
} 
return G__12353__delegate.call(this,args);};
G__12353.cljs$lang$maxFixedArity = 0;
G__12353.cljs$lang$applyTo = (function (arglist__12357){
var args = cljs.core.seq(arglist__12357);
return G__12353__delegate(args);
});
G__12353.cljs$core$IFn$_invoke$arity$variadic = G__12353__delegate;
return G__12353;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec12347.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__7865__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__7865__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__7865__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec12347.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta12348","meta12348",-1798227304,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec12347.cljs$lang$type = true;

cljs.spec.t_cljs$spec12347.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12347";

cljs.spec.t_cljs$spec12347.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__7591__auto__,writer__7592__auto__,opt__7593__auto__){
return cljs.core._write.call(null,writer__7592__auto__,"cljs.spec/t_cljs$spec12347");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec12347 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec12347(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta12348){
return (new cljs.spec.t_cljs$spec12347(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta12348));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec12347(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12358#","p1__12358#",425469894,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__12358#","p1__12358#",425469894,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__12358#","p1__12358#",425469894,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12359#","p1__12359#",1426984793,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__12359#","p1__12359#",1426984793,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12358#","p1__12358#",425469894,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__12358#","p1__12358#",425469894,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__12358#","p1__12358#",425469894,null)))),(function (p1__12358_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__12358_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__12358_SHARP_));
}),null,true,(function (p1__12359_SHARP_){
return cljs.core.map.call(null,(function (p__12360){
var vec__12361 = p__12360;
var k = cljs.core.nth.call(null,vec__12361,(0),null);
var v = cljs.core.nth.call(null,vec__12361,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__12359_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args12365 = [];
var len__8122__auto___12368 = arguments.length;
var i__8123__auto___12369 = (0);
while(true){
if((i__8123__auto___12369 < len__8122__auto___12368)){
args12365.push((arguments[i__8123__auto___12369]));

var G__12370 = (i__8123__auto___12369 + (1));
i__8123__auto___12369 = G__12370;
continue;
} else {
}
break;
}

var G__12367 = args12365.length;
switch (G__12367) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12365.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__12364_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12364_SHARP_,cljs.spec.conform.call(null,spec,p1__12364_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__6927__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__6927__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__6927__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__6927__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__6927__auto__)){
return val.lessThan(end);
} else {
return and__6927__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__6927__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__6927__auto__)){
return val.lessThan(end);
} else {
return and__6927__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__8023__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12374_12376 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12375_12377 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12374_12376,_STAR_print_fn_STAR_12375_12377,sb__8023__auto__,ed){
return (function (x__8024__auto__){
return sb__8023__auto__.append(x__8024__auto__);
});})(_STAR_print_newline_STAR_12374_12376,_STAR_print_fn_STAR_12375_12377,sb__8023__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12375_12377;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12374_12376;
}
return [cljs.core.str(sb__8023__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map