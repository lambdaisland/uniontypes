// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('goog.string');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7609__auto__,k__7610__auto__){
var self__ = this;
var this__7609__auto____$1 = this;
return cljs.core._lookup.call(null,this__7609__auto____$1,k__7610__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7611__auto__,k8667,else__7612__auto__){
var self__ = this;
var this__7611__auto____$1 = this;
var G__8669 = (((k8667 instanceof cljs.core.Keyword))?k8667.fqn:null);
switch (G__8669) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8667,else__7612__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7623__auto__,writer__7624__auto__,opts__7625__auto__){
var self__ = this;
var this__7623__auto____$1 = this;
var pr_pair__7626__auto__ = ((function (this__7623__auto____$1){
return (function (keyval__7627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7624__auto__,cljs.core.pr_writer,""," ","",opts__7625__auto__,keyval__7627__auto__);
});})(this__7623__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7624__auto__,pr_pair__7626__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__7625__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$ = true;

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8666){
var self__ = this;
var G__8666__$1 = this;
return (new cljs.core.RecordIter((0),G__8666__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",142575302)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7607__auto__){
var self__ = this;
var this__7607__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7603__auto__){
var self__ = this;
var this__7603__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7613__auto__){
var self__ = this;
var this__7613__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7604__auto__){
var self__ = this;
var this__7604__auto____$1 = this;
var h__7376__auto__ = self__.__hash;
if(!((h__7376__auto__ == null))){
return h__7376__auto__;
} else {
var h__7376__auto____$1 = cljs.core.hash_imap.call(null,this__7604__auto____$1);
self__.__hash = h__7376__auto____$1;

return h__7376__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7605__auto__,other__7606__auto__){
var self__ = this;
var this__7605__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6927__auto__ = other__7606__auto__;
if(cljs.core.truth_(and__6927__auto__)){
var and__6927__auto____$1 = (this__7605__auto____$1.constructor === other__7606__auto__.constructor);
if(and__6927__auto____$1){
return cljs.core.equiv_map.call(null,this__7605__auto____$1,other__7606__auto__);
} else {
return and__6927__auto____$1;
}
} else {
return and__6927__auto__;
}
})())){
return true;
} else {
return false;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7618__auto__,k__7619__auto__){
var self__ = this;
var this__7618__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen","gen",142575302),null], null), null),k__7619__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7618__auto____$1),self__.__meta),k__7619__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7619__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7616__auto__,k__7617__auto__,G__8666){
var self__ = this;
var this__7616__auto____$1 = this;
var pred__8670 = cljs.core.keyword_identical_QMARK_;
var expr__8671 = k__7617__auto__;
if(cljs.core.truth_(pred__8670.call(null,new cljs.core.Keyword(null,"gen","gen",142575302),expr__8671))){
return (new clojure.test.check.generators.Generator(G__8666,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7617__auto__,G__8666),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7621__auto__){
var self__ = this;
var this__7621__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7608__auto__,G__8666){
var self__ = this;
var this__7608__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__8666,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7614__auto__,entry__7615__auto__){
var self__ = this;
var this__7614__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7615__auto__)){
return cljs.core._assoc.call(null,this__7614__auto____$1,cljs.core._nth.call(null,entry__7615__auto__,(0)),cljs.core._nth.call(null,entry__7615__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7614__auto____$1,entry__7615__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",1783106829,null)], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__7645__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__7645__auto__,writer__7646__auto__){
return cljs.core._write.call(null,writer__7646__auto__,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__8668){
return (new clojure.test.check.generators.Generator(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(G__8668),null,cljs.core.dissoc.call(null,G__8668,new cljs.core.Keyword(null,"gen","gen",142575302)),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__8674,rnd,size){
var map__8677 = p__8674;
var map__8677__$1 = ((((!((map__8677 == null)))?((((map__8677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8677):map__8677);
var generator_fn = cljs.core.get.call(null,map__8677__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return generator_fn.call(null,rnd,size);
});
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return value;
}));
});
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__8679){
var map__8682 = p__8679;
var map__8682__$1 = ((((!((map__8682 == null)))?((((map__8682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8682):map__8682);
var h = cljs.core.get.call(null,map__8682__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__8682,map__8682__$1,h){
return (function (rnd,size){
return k.call(null,h.call(null,rnd,size));
});})(map__8682,map__8682__$1,h))
);
});
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__8684,k){
var map__8692 = p__8684;
var map__8692__$1 = ((((!((map__8692 == null)))?((((map__8692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8692):map__8692);
var h = cljs.core.get.call(null,map__8692__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__8692,map__8692__$1,h){
return (function (rnd,size){
var vec__8694 = clojure.test.check.random.split.call(null,rnd);
var r1 = cljs.core.nth.call(null,vec__8694,(0),null);
var r2 = cljs.core.nth.call(null,vec__8694,(1),null);
var inner = h.call(null,r1,size);
var map__8697 = k.call(null,inner);
var map__8697__$1 = ((((!((map__8697 == null)))?((((map__8697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8697):map__8697);
var result = cljs.core.get.call(null,map__8697__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return result.call(null,r2,size);
});})(map__8692,map__8692__$1,h))
);
});
/**
 * Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__8702 = clojure.test.check.random.split.call(null,rr);
var r1 = cljs.core.nth.call(null,vec__8702,(0),null);
var r2 = cljs.core.nth.call(null,vec__8702,(1),null);
return cljs.core.cons.call(null,r1,clojure$test$check$generators$lazy_random_states.call(null,r2));
}),null,null));
});
/**
 * Takes a sequence of generators and returns a generator of sequences (er, vectors).
 */
clojure.test.check.generators.gen_seq__GT_seq_gen = (function clojure$test$check$generators$gen_seq__GT_seq_gen(gens){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return cljs.core.mapv.call(null,(function (p1__8705_SHARP_,p2__8706_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__8705_SHARP_,p2__8706_SHARP_,size);
}),gens,clojure.test.check.random.split_n.call(null,rnd,cljs.core.count.call(null,gens)));
}));
});
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to fmap must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,(function (p1__8707_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__8707_SHARP_);
}),gen);
});
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators.
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.pure.call(null,value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(k){
return (function (rose){
return clojure.test.check.generators.gen_fmap.call(null,clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return clojure.test.check.rose_tree.fmap.call(null,(function (p1__8708_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__8708_SHARP_,rnd,size);
}),clojure.test.check.rose_tree.fmap.call(null,k,rose));
})));
});
});
/**
 * Create a new generator that passes the result of `gen` into function
 *   `k`. `k` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator which first generates a vector of integers, and
 *   then chooses a random element from that vector:
 * 
 *    (gen/bind (gen/such-that not-empty (gen/vector gen/int))
 *              ;; this function takes a realized vector,
 *              ;; and then returns a new generator which
 *              ;; chooses a random element from it
 *              gen/elements)
 * 
 *   
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,k){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to bind must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,generator,clojure.test.check.generators.bind_helper.call(null,k));
});
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle.call(null,cljs.core.range.call(null,(0),max_size));
});
/**
 * Return a sequence of realized values from `generator`.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var args8711 = [];
var len__8122__auto___8714 = arguments.length;
var i__8123__auto___8715 = (0);
while(true){
if((i__8123__auto___8715 < len__8122__auto___8714)){
args8711.push((arguments[i__8123__auto___8715]));

var G__8716 = (i__8123__auto___8715 + (1));
i__8123__auto___8715 = G__8716;
continue;
} else {
}
break;
}

var G__8713 = args8711.length;
switch (G__8713) {
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8711.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.call(null,generator,(100));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.call(null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
return cljs.core.map.call(null,((function (r,size_seq){
return (function (p1__8709_SHARP_,p2__8710_SHARP_){
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,p1__8709_SHARP_,p2__8710_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states.call(null,r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var args8718 = [];
var len__8122__auto___8721 = arguments.length;
var i__8123__auto___8722 = (0);
while(true){
if((i__8123__auto___8722 < len__8122__auto___8721)){
args8718.push((arguments[i__8123__auto___8722]));

var G__8723 = (i__8123__auto___8722 + (1));
i__8123__auto___8722 = G__8723;
continue;
} else {
}
break;
}

var G__8720 = args8718.length;
switch (G__8720) {
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8718.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.call(null,generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to sample must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return cljs.core.take.call(null,num_samples,clojure.test.check.generators.sample_seq.call(null,generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;

/**
 * Returns a single sample value from the generator, using a default
 *   size of 30.
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var args8725 = [];
var len__8122__auto___8728 = arguments.length;
var i__8123__auto___8729 = (0);
while(true){
if((i__8123__auto___8729 < len__8122__auto___8728)){
args8725.push((arguments[i__8123__auto___8729]));

var G__8730 = (i__8123__auto___8729 + (1));
i__8123__auto___8729 = G__8730;
continue;
} else {
}
break;
}

var G__8727 = args8725.length;
switch (G__8727) {
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8725.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.call(null,generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.call(null);
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 2;

clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.call(null,(function (p1__8732_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__8732_SHARP_);
}),cljs.core.iterate.call(null,(function (p1__8733_SHARP_){
return cljs.core.quot.call(null,p1__8733_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.call(null,(function (p1__8734_SHARP_){
return (integer - p1__8734_SHARP_);
}),clojure.test.check.generators.halfs.call(null,integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose.call(null,value,cljs.core.map.call(null,clojure$test$check$generators$int_rose_tree,clojure.test.check.generators.shrink_int.call(null,value)));
});
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
return cljs.core.long$.call(null,Math.floor((lower + ((factor * (1.0 + upper)) - (factor * lower)))));
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long.call(null,clojure.test.check.random.rand_double.call(null,rnd),lower,upper);
});
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
var sized_gen__$1 = sized_gen.call(null,size);
return clojure.test.check.generators.call_gen.call(null,sized_gen__$1,rnd,size);
}));
});
/**
 * Create a new generator with `size` always bound to `n`.
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to resize must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

var map__8737 = generator;
var map__8737__$1 = ((((!((map__8737 == null)))?((((map__8737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8737):map__8737);
var gen = cljs.core.get.call(null,map__8737__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__8737,map__8737__$1,gen){
return (function (rnd,_size){
return gen.call(null,rnd,n);
});})(map__8737,map__8737__$1,gen))
);
});
/**
 * Create a new generator that modifies the size parameter by the given function. Intended to
 * support generators with sizes that need to grow at different rates compared to the normal
 * linear scaling.
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized.call(null,(function (n){
return clojure.test.check.generators.resize.call(null,f.call(null,n),generator);
}));
});
/**
 * Create a generator that returns numbers in the range
 *   `lower` to `upper`, inclusive.
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
var value = clojure.test.check.generators.rand_range.call(null,rnd,lower,upper);
return clojure.test.check.rose_tree.filter.call(null,((function (value){
return (function (p1__8739_SHARP_){
return ((p1__8739_SHARP_ >= lower)) && ((p1__8739_SHARP_ <= upper));
});})(value))
,clojure.test.check.generators.int_rose_tree.call(null,value));
}));
});
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *   Examples:
 * 
 *    (one-of [gen/int gen/boolean (gen/vector gen/int)])
 * 
 *   
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to one-of must be a collection of generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? generators)")].join('')));
}

return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,generators) - (1))),(function (p1__8740_SHARP_){
return cljs.core.nth.call(null,generators,p1__8740_SHARP_);
}));
});
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__8741,n){
while(true){
var vec__8748 = p__8741;
var seq__8749 = cljs.core.seq.call(null,vec__8748);
var first__8750 = cljs.core.first.call(null,seq__8749);
var seq__8749__$1 = cljs.core.next.call(null,seq__8749);
var h = first__8750;
var tail = seq__8749__$1;
var vec__8751 = h;
var chance = cljs.core.nth.call(null,vec__8751,(0),null);
var gen = cljs.core.nth.call(null,vec__8751,(1),null);
if((n <= chance)){
return gen;
} else {
var G__8754 = tail;
var G__8755 = (n - chance);
p__8741 = G__8754;
n = G__8755;
continue;
}
break;
}
});
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods
 * 
 *   Examples:
 * 
 *    (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])
 *   
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_.call(null,(function (p__8761){
var vec__8762 = p__8761;
var x = cljs.core.nth.call(null,vec__8762,(0),null);
var g = cljs.core.nth.call(null,vec__8762,(1),null);
var and__6927__auto__ = typeof x === 'number';
if(and__6927__auto__){
return clojure.test.check.generators.generator_QMARK_.call(null,g);
} else {
return and__6927__auto__;
}
}),pairs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to frequency must be a list of [num generator] pairs"),cljs.core.str("\n"),cljs.core.str("(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)")].join('')));
}

var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.first,pairs));
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(1),total),((function (total){
return (function (p1__8756_SHARP_){
return clojure.test.check.generators.pick.call(null,pairs,clojure.test.check.rose_tree.root.call(null,p1__8756_SHARP_));
});})(total))
);
});
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *   Examples:
 * 
 *    (gen/elements [:foo :bar :baz])
 *   
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq.call(null,coll)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("elements cannot be called with an empty collection"),cljs.core.str("\n"),cljs.core.str("(seq coll)")].join('')));
}

var v = cljs.core.vec.call(null,coll);
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,v) - (1))),((function (v){
return (function (p1__8765_SHARP_){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.fmap.call(null,v,p1__8765_SHARP_));
});})(v))
);
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(max_tries,pred,gen,tries_left,rng,size){
while(true){
if((tries_left === (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Couldn't satisfy such-that predicate after "),cljs.core.str(max_tries),cljs.core.str(" tries.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
var vec__8769 = clojure.test.check.random.split.call(null,rng);
var r1 = cljs.core.nth.call(null,vec__8769,(0),null);
var r2 = cljs.core.nth.call(null,vec__8769,(1),null);
var value = clojure.test.check.generators.call_gen.call(null,gen,r1,size);
if(cljs.core.truth_(pred.call(null,clojure.test.check.rose_tree.root.call(null,value)))){
return clojure.test.check.rose_tree.filter.call(null,pred,value);
} else {
var G__8772 = max_tries;
var G__8773 = pred;
var G__8774 = gen;
var G__8775 = (tries_left - (1));
var G__8776 = r2;
var G__8777 = (size + (1));
max_tries = G__8772;
pred = G__8773;
gen = G__8774;
tries_left = G__8775;
rng = G__8776;
size = G__8777;
continue;
}
}
break;
}
});
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be throw. You can pass an optional
 *   third argument to change the number of times tried. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 *   
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var args8778 = [];
var len__8122__auto___8781 = arguments.length;
var i__8123__auto___8782 = (0);
while(true){
if((i__8123__auto___8782 < len__8122__auto___8781)){
args8778.push((arguments[i__8123__auto___8782]));

var G__8783 = (i__8123__auto___8782 + (1));
i__8123__auto___8782 = G__8783;
continue;
} else {
}
break;
}

var G__8780 = args8778.length;
switch (G__8780) {
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8778.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.call(null,pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to such-that must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.make_gen.call(null,(function (rand_seed,size){
return clojure.test.check.generators.such_that_helper.call(null,max_tries,pred,gen,max_tries,rand_seed,size);
}));
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/not-empty (gen/vector gen/boolean))
 *   
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to not-empty must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.such_that.call(null,cljs.core.not_empty,gen);
});
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to no-shrink must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.PersistentVector.EMPTY));
}));
});
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to shrink-2 must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,cljs.core.comp.call(null,clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 *   
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__8129__auto__ = [];
var len__8122__auto___8786 = arguments.length;
var i__8123__auto___8787 = (0);
while(true){
if((i__8123__auto___8787 < len__8122__auto___8786)){
args__8129__auto__.push((arguments[i__8123__auto___8787]));

var G__8788 = (i__8123__auto___8787 + (1));
i__8123__auto___8787 = G__8788;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Args to tuple must be generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? generators)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,generators),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.zip.call(null,cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq8785){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8785));
});

/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 *   (Really returns a long)
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.choose.call(null,(- size),size);
}));
/**
 * Generates natural numbers, starting at zero. Shrinks to zero.
 */
clojure.test.check.generators.nat = clojure.test.check.generators.fmap.call(null,(function (p1__8789_SHARP_){
return Math.abs(cljs.core.long$.call(null,p1__8789_SHARP_));
}),clojure.test.check.generators.int$);
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap.call(null,(function (p1__8790_SHARP_){
return ((-1) * p1__8790_SHARP_);
}),clojure.test.check.generators.nat);
/**
 * Generate strictly positive integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap.call(null,cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Generate strictly negative integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap.call(null,cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Create a generator whose elements are chosen from `gen`. The count of the
 *   vector will be bounded by the `size` generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var args8792 = [];
var len__8122__auto___8795 = arguments.length;
var i__8123__auto___8796 = (0);
while(true){
if((i__8123__auto___8796 < len__8122__auto___8795)){
args8792.push((arguments[i__8123__auto___8796]));

var G__8797 = (i__8123__auto___8796 + (1));
i__8123__auto___8796 = G__8797;
continue;
} else {
}
break;
}

var G__8794 = args8792.length;
switch (G__8794) {
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8792.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__8791_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__8791_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return cljs.core.apply.call(null,clojure.test.check.generators.tuple,cljs.core.repeat.call(null,num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.filter.call(null,(function (v){
return ((cljs.core.count.call(null,v) >= min_elements)) && ((cljs.core.count.call(null,v) <= max_elements));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__8799_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__8799_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.list,roses));
}));
}));
});
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__8800){
var vec__8804 = p__8800;
var i1 = cljs.core.nth.call(null,vec__8804,(0),null);
var i2 = cljs.core.nth.call(null,vec__8804,(1),null);
return cljs.core.assoc.call(null,coll,i2,coll.call(null,i1),i1,coll.call(null,i2));
});
/**
 * Create a generator that generates random permutations of `coll`. Shrinks
 *   toward the original collection: `coll`. `coll` will be turned into a vector,
 *   if it's not already.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var index_gen = clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,coll) - (1)));
return clojure.test.check.generators.fmap.call(null,((function (index_gen){
return (function (p1__8807_SHARP_){
return cljs.core.reduce.call(null,clojure.test.check.generators.swap,cljs.core.vec.call(null,coll),p1__8807_SHARP_);
});})(index_gen))
,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.tuple.call(null,index_gen,index_gen),(0),((2) * cljs.core.count.call(null,coll))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *   Examples:
 * 
 *  (gen/hash-map :a gen/boolean :b gen/nat)
 *   
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__8129__auto__ = [];
var len__8122__auto___8810 = arguments.length;
var i__8123__auto___8811 = (0);
while(true){
if((i__8123__auto___8811 < len__8122__auto___8810)){
args__8129__auto__.push((arguments[i__8123__auto___8811]));

var G__8812 = (i__8123__auto___8811 + (1));
i__8123__auto___8811 = G__8812;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((0) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8130__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.call(null,(2),kvs);
var vs = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,kvs));
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Value args to hash-map must be generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? vs)")].join('')));
}

return clojure.test.check.generators.fmap.call(null,((function (ks,vs){
return (function (p1__8808_SHARP_){
return cljs.core.zipmap.call(null,ks,p1__8808_SHARP_);
});})(ks,vs))
,cljs.core.apply.call(null,clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq8809){
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8809));
});

clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return cljs.core.some_QMARK_.call(null,cljs.core._lookup.call(null,s,k));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if((cljs.core._EQ_.call(null,max_tries,tries)) && ((cljs.core.count.call(null,rose_trees) < min_elements))){
throw cljs.core.ex_info.call(null,"Couldn't generate enough distinct elements!",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gen","gen",142575302),gen,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),num_elements,new cljs.core.Keyword(null,"so-far","so-far",-1973642241),cljs.core.map.call(null,clojure.test.check.rose_tree.root,cljs.core.persistent_BANG_.call(null,rose_trees))], null));
} else {
if((cljs.core._EQ_.call(null,max_tries,tries)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,rose_trees),num_elements))){
return clojure.test.check.rose_tree.shrink.call(null,((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__8820__delegate = function (rest__8813_SHARP_){
return cljs.core.into.call(null,empty_coll,rest__8813_SHARP_);
};
var G__8820 = function (var_args){
var rest__8813_SHARP_ = null;
if (arguments.length > 0) {
var G__8821__i = 0, G__8821__a = new Array(arguments.length -  0);
while (G__8821__i < G__8821__a.length) {G__8821__a[G__8821__i] = arguments[G__8821__i + 0]; ++G__8821__i;}
  rest__8813_SHARP_ = new cljs.core.IndexedSeq(G__8821__a,0);
} 
return G__8820__delegate.call(this,rest__8813_SHARP_);};
G__8820.cljs$lang$maxFixedArity = 0;
G__8820.cljs$lang$applyTo = (function (arglist__8822){
var rest__8813_SHARP_ = cljs.core.seq(arglist__8822);
return G__8820__delegate(rest__8813_SHARP_);
});
G__8820.cljs$core$IFn$_invoke$arity$variadic = G__8820__delegate;
return G__8820;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,shuffle_fn.call(null,rng__$1,cljs.core.persistent_BANG_.call(null,rose_trees)));
} else {
var vec__8817 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__8817,(0),null);
var rng2 = cljs.core.nth.call(null,vec__8817,(1),null);
var rose = clojure.test.check.generators.call_gen.call(null,gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root.call(null,rose);
var k = key_fn.call(null,root);
if(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_.call(null,s,k))){
var G__8823 = rose_trees;
var G__8824 = s;
var G__8825 = rng2;
var G__8826 = (size__$1 + (1));
var G__8827 = (tries + (1));
rose_trees = G__8823;
s = G__8824;
rng__$1 = G__8825;
size__$1 = G__8826;
tries = G__8827;
continue;
} else {
var G__8828 = cljs.core.conj_BANG_.call(null,rose_trees,rose);
var G__8829 = cljs.core.conj_BANG_.call(null,s,k);
var G__8830 = rng2;
var G__8831 = size__$1;
var G__8832 = (0);
rose_trees = G__8828;
s = G__8829;
rng__$1 = G__8830;
size__$1 = G__8831;
tries = G__8832;
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__6939__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty.call(null,coll);
var v = cljs.core.vec.call(null,coll);
var card = cljs.core.count.call(null,coll);
var dec_card = (card - (1));
return cljs.core.into.call(null,empty_coll,cljs.core.first.call(null,cljs.core.reduce.call(null,((function (empty_coll,v,card,dec_card){
return (function (p__8840,idx){
var vec__8841 = p__8840;
var v__$1 = cljs.core.nth.call(null,vec__8841,(0),null);
var rng__$1 = cljs.core.nth.call(null,vec__8841,(1),null);
var vec__8844 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__8844,(0),null);
var rng2 = cljs.core.nth.call(null,vec__8844,(1),null);
var swap_idx = clojure.test.check.generators.rand_range.call(null,rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap.call(null,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.call(null,card))));
});
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__8853){
var map__8856 = p__8853;
var map__8856__$1 = ((((!((map__8856 == null)))?((((map__8856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8856):map__8856);
var num_elements = cljs.core.get.call(null,map__8856__$1,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107));
var min_elements = cljs.core.get.call(null,map__8856__$1,new cljs.core.Keyword(null,"min-elements","min-elements",949370780));
var max_elements = cljs.core.get.call(null,map__8856__$1,new cljs.core.Keyword(null,"max-elements","max-elements",433034073));
var max_tries = cljs.core.get.call(null,map__8856__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(10));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (_rng,coll){
return coll;
});})(map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
);
var hard_min_elements = (function (){var or__6939__auto__ = num_elements;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
var or__6939__auto____$1 = min_elements;
if(cljs.core.truth_(or__6939__auto____$1)){
return or__6939__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = ((function (shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__8847_SHARP_){
return cljs.core._EQ_.call(null,num_elements,cljs.core.count.call(null,p1__8847_SHARP_));
});})(shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
;
if(((min_elements == null)) && ((max_elements == null))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators.make_gen.call(null,((function (size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__8848_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__8848_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries));
});})(size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
);
} else {
var min_elements__$1 = (function (){var or__6939__auto__ = min_elements;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__8849_SHARP_){
return ((min_elements__$1 <= cljs.core.count.call(null,p1__8849_SHARP_))) && ((cljs.core.count.call(null,p1__8849_SHARP_) <= max_elements));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__8850_SHARP_){
return (min_elements__$1 <= cljs.core.count.call(null,p1__8850_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
);
return clojure.test.check.generators.gen_bind.call(null,(cljs.core.truth_(max_elements)?clojure.test.check.generators.choose.call(null,min_elements__$1,max_elements):clojure.test.check.generators.sized.call(null,((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__8851_SHARP_){
return clojure.test.check.generators.choose.call(null,min_elements__$1,(min_elements__$1 + p1__8851_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root.call(null,num_elements_rose);
return clojure.test.check.generators.make_gen.call(null,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__8852_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__8852_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__8856,map__8856__$1,num_elements,min_elements,max_elements,max_tries))
);
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
var args8858 = [];
var len__8122__auto___8861 = arguments.length;
var i__8123__auto___8862 = (0);
while(true){
if((i__8123__auto___8862 < len__8122__auto___8861)){
args8858.push((arguments[i__8123__auto___8862]));

var G__8863 = (i__8123__auto___8862 + (1));
i__8123__auto___8862 = G__8863;
continue;
} else {
}
break;
}

var G__8860 = args8858.length;
switch (G__8860) {
case 1:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8858.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector-distinct must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
var args8865 = [];
var len__8122__auto___8868 = arguments.length;
var i__8123__auto___8869 = (0);
while(true){
if((i__8123__auto___8869 < len__8122__auto___8868)){
args8865.push((arguments[i__8123__auto___8869]));

var G__8870 = (i__8123__auto___8869 + (1));
i__8123__auto___8869 = G__8870;
continue;
} else {
}
break;
}

var G__8867 = args8865.length;
switch (G__8867) {
case 1:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8865.length)].join('')));

}
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list-distinct must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
var args8872 = [];
var len__8122__auto___8875 = arguments.length;
var i__8123__auto___8876 = (0);
while(true){
if((i__8123__auto___8876 < len__8122__auto___8875)){
args8872.push((arguments[i__8123__auto___8876]));

var G__8877 = (i__8123__auto___8876 + (1));
i__8123__auto___8876 = G__8877;
continue;
} else {
}
break;
}

var G__8874 = args8872.length;
switch (G__8874) {
case 2:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8872.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector-distinct-by must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
var args8879 = [];
var len__8122__auto___8882 = arguments.length;
var i__8123__auto___8883 = (0);
while(true){
if((i__8123__auto___8883 < len__8122__auto___8882)){
args8879.push((arguments[i__8123__auto___8883]));

var G__8884 = (i__8123__auto___8883 + (1));
i__8123__auto___8883 = G__8884;
continue;
} else {
}
break;
}

var G__8881 = args8879.length;
switch (G__8881) {
case 2:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8879.length)].join('')));

}
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list-distinct-by must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
var args8886 = [];
var len__8122__auto___8889 = arguments.length;
var i__8123__auto___8890 = (0);
while(true){
if((i__8123__auto___8890 < len__8122__auto___8889)){
args8886.push((arguments[i__8123__auto___8890]));

var G__8891 = (i__8123__auto___8890 + (1));
i__8123__auto___8890 = G__8891;
continue;
} else {
}
break;
}

var G__8888 = args8886.length;
switch (G__8888) {
case 1:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8886.length)].join('')));

}
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to set must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = 2;

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
var args8893 = [];
var len__8122__auto___8896 = arguments.length;
var i__8123__auto___8897 = (0);
while(true){
if((i__8123__auto___8897 < len__8122__auto___8896)){
args8893.push((arguments[i__8123__auto___8897]));

var G__8898 = (i__8123__auto___8897 + (1));
i__8123__auto___8897 = G__8898;
continue;
} else {
}
break;
}

var G__8895 = args8893.length;
switch (G__8895) {
case 1:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8893.length)].join('')));

}
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to sorted-set must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.sorted_set.call(null),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = 2;

/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
var args8900 = [];
var len__8122__auto___8903 = arguments.length;
var i__8123__auto___8904 = (0);
while(true){
if((i__8123__auto___8904 < len__8122__auto___8903)){
args8900.push((arguments[i__8123__auto___8904]));

var G__8905 = (i__8123__auto___8904 + (1));
i__8123__auto___8904 = G__8905;
continue;
} else {
}
break;
}

var G__8902 = args8900.length;
switch (G__8902) {
case 2:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8900.length)].join('')));

}
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.call(null,key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.call(null,key_gen,val_gen),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = 3;

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
return clojure.test.check.rose_tree.pure.call(null,clojure.test.check.random.rand_long.call(null,rnd));
}));
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,(53),(2))) - (1));
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER);
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
});
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__8909 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs.call(null,G__8909);
} else {
return G__8909;
}
})();
while(true){
if(((min <= res)) && ((res <= max))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if(((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max))){
return res_SINGLEQUOTE_;
} else {
var G__8911 = ((function (){var G__8910 = res;
if(cljs.core.odd_QMARK_.call(null,res)){
return (((res < (0)))?cljs.core.inc:cljs.core.dec).call(null,G__8910);
} else {
return G__8910;
}
})() / (2));
res = G__8911;
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized.call(null,(function (size){
var size__$1 = (function (){var x__7272__auto__ = size;
var y__7273__auto__ = (1);
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
})();
var max_bit_count = (function (){var x__7279__auto__ = size__$1;
var y__7280__auto__ = (54);
return ((x__7279__auto__ < y__7280__auto__) ? x__7279__auto__ : y__7280__auto__);
})();
return clojure.test.check.generators.gen_fmap.call(null,((function (size__$1,max_bit_count){
return (function (rose){
var vec__8915 = clojure.test.check.rose_tree.root.call(null,rose);
var bit_count = cljs.core.nth.call(null,vec__8915,(0),null);
var x = cljs.core.nth.call(null,vec__8915,(1),null);
return clojure.test.check.generators.int_rose_tree.call(null,clojure.test.check.generators.long__GT_large_integer.call(null,bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.choose.call(null,(1),max_bit_count),clojure.test.check.generators.gen_raw_long));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 */
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__8921){
var map__8924 = p__8921;
var map__8924__$1 = ((((!((map__8924 == null)))?((((map__8924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8924):map__8924);
var min = cljs.core.get.call(null,map__8924__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__8924__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min__$1 = (function (){var or__6939__auto__ = min;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__6939__auto__ = max;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators.such_that.call(null,((function (min__$1,max__$1,map__8924,map__8924__$1,min,max){
return (function (p1__8918_SHARP_){
return ((min__$1 <= p1__8918_SHARP_)) && ((p1__8918_SHARP_ <= max__$1));
});})(min__$1,max__$1,map__8924,map__8924__$1,min,max))
,((((min__$1 <= (0))) && (((0) <= max__$1)))?clojure.test.check.generators.large_integer_STAR__STAR_.call(null,min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__8924,map__8924__$1,min,max){
return (function (p1__8919_SHARP_){
return (max__$1 + p1__8919_SHARP_);
});})(min__$1,max__$1,map__8924,map__8924__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(min__$1 - max__$1),(0))):clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__8924,map__8924__$1,min,max){
return (function (p1__8920_SHARP_){
return (min__$1 + p1__8920_SHARP_);
});})(min__$1,max__$1,map__8924,map__8924__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE);
clojure.test.check.generators.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators.choose.call(null,(0),(function (){var G__8931 = cljs.core.long$.call(null,bit_count);
switch (G__8931) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators.fmap.call(null,(function (p__8932){
var vec__8933 = p__8932;
var upper = cljs.core.nth.call(null,vec__8933,(0),null);
var lower = cljs.core.nth.call(null,vec__8933,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.call(null,clojure$test$check$generators$uniform_integer.call(null,(bit_count - (32))),clojure$test$check$generators$uniform_integer.call(null,(32))));
}
});
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__8937 = ((out * (2)) + (n__$1 & (1)));
var G__8938 = (n__$1 / (2));
var G__8939 = (out_shifter / (2));
out = G__8937;
n__$1 = G__8938;
out_shifter = G__8939;
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap.call(null,clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(function (){var x__7279__auto__ = size;
var y__7280__auto__ = (52);
return ((x__7279__auto__ < y__7280__auto__) ? x__7279__auto__ : y__7280__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer.call(null,clojure.test.check.rose_tree.root.call(null,rose));
}));
})));
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = Math.floor((Math.log(x__$1) * Math.LOG2E));
var t = clojure.test.check.generators.scalb.call(null,x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized.call(null,(function (size){
var qs8 = ((1) << cljs.core.quot.call(null,(function (){var x__7279__auto__ = (200);
var y__7280__auto__ = size;
return ((x__7279__auto__ < y__7280__auto__) ? x__7279__auto__ : y__7280__auto__);
})(),(8)));
if(((lb <= (0))) && (((0) <= ub))){
return clojure.test.check.generators.choose.call(null,(function (){var x__7272__auto__ = lb;
var y__7273__auto__ = (- qs8);
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
})(),(function (){var x__7279__auto__ = ub;
var y__7280__auto__ = qs8;
return ((x__7279__auto__ < y__7280__auto__) ? x__7279__auto__ : y__7280__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose.call(null,(function (){var x__7272__auto__ = lb;
var y__7273__auto__ = (ub - qs8);
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose.call(null,lb,(function (){var x__7279__auto__ = ub;
var y__7280__auto__ = (lb + qs8);
return ((x__7279__auto__ < y__7280__auto__) ? x__7279__auto__ : y__7280__auto__);
})());

}
}
}));
});
if(((lower_bound == null)) && ((upper_bound == null))){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(1023)),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null)));
} else {
var lower_bound__$1 = (function (){var or__6939__auto__ = lower_bound;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__6939__auto__ = upper_bound;
if(cljs.core.truth_(or__6939__auto__)){
return or__6939__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__7272__auto__ = (-1023);
var y__7273__auto__ = clojure.test.check.generators.get_exponent.call(null,lower_bound__$1);
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
})();
var ubexp = (function (){var x__7272__auto__ = (-1023);
var y__7273__auto__ = clojure.test.check.generators.get_exponent.call(null,upper_bound__$1);
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,lbexp,ubexp),clojure.test.check.generators.return$.call(null,1.0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,ubexp,lbexp),clojure.test.check.generators.return$.call(null,-1.0));
} else {
return clojure.test.check.generators.fmap.call(null,((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
return (function (p__8944){
var vec__8945 = p__8944;
var exp = cljs.core.nth.call(null,vec__8945,(0),null);
var sign = cljs.core.nth.call(null,vec__8945,(1),null);
var pair = vec__8945;
if((((sign < (0))) && ((lbexp < exp))) || (((sign > (0))) && ((ubexp < exp)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(function (){var x__7272__auto__ = ubexp;
var y__7273__auto__ = lbexp;
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
})()),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
var vec__8951 = clojure$test$check$generators$block_bounds.call(null,exp,(- sign));
var low = cljs.core.nth.call(null,vec__8951,(0),null);
var high = cljs.core.nth.call(null,vec__8951,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.call(null,(-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb.call(null,1.0,exp),clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if(((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__8954_SHARP_){
return ((lower_bound <= p1__8954_SHARP_)) && ((p1__8954_SHARP_ <= upper_bound));
}):(function (p1__8955_SHARP_){
return (lower_bound <= p1__8955_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__8956_SHARP_){
return (p1__8956_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap.call(null,((function (pred){
return (function (p__8970){
var vec__8971 = p__8970;
var vec__8974 = cljs.core.nth.call(null,vec__8971,(0),null);
var exp = cljs.core.nth.call(null,vec__8974,(0),null);
var sign = cljs.core.nth.call(null,vec__8974,(1),null);
var significand = cljs.core.nth.call(null,vec__8971,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb.call(null,base,exp) * sign);
if(cljs.core.truth_((function (){var or__6939__auto__ = (pred == null);
if(or__6939__auto__){
return or__6939__auto__;
} else {
return pred.call(null,x);
}
})())){
return x;
} else {
var vec__8977 = clojure.test.check.generators.block_bounds.call(null,exp,sign);
var low = cljs.core.nth.call(null,vec__8977,(0),null);
var high = cljs.core.nth.call(null,vec__8977,(1),null);
var block_lb = (function (){var G__8980 = low;
if(cljs.core.truth_(lower_bound)){
var x__7272__auto__ = G__8980;
var y__7273__auto__ = lower_bound;
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
} else {
return G__8980;
}
})();
var block_ub = (function (){var G__8981 = high;
if(cljs.core.truth_(upper_bound)){
var x__7279__auto__ = G__8981;
var y__7280__auto__ = upper_bound;
return ((x__7279__auto__ < y__7280__auto__) ? x__7279__auto__ : y__7280__auto__);
} else {
return G__8981;
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__7272__auto__ = (function (){var x__7279__auto__ = x__$1;
var y__7280__auto__ = block_ub;
return ((x__7279__auto__ < y__7280__auto__) ? x__7279__auto__ : y__7280__auto__);
})();
var y__7273__auto__ = block_lb;
return ((x__7272__auto__ > y__7273__auto__) ? x__7272__auto__ : y__7273__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.double_exp_and_sign.call(null,lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand));
var G__8982 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.call(null,pred,G__8982);
} else {
return G__8982;
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__8983){
var map__8987 = p__8983;
var map__8987__$1 = ((((!((map__8987 == null)))?((((map__8987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8987):map__8987);
var infinite_QMARK_ = cljs.core.get.call(null,map__8987__$1,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),true);
var NaN_QMARK_ = cljs.core.get.call(null,map__8987__$1,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),true);
var min = cljs.core.get.call(null,map__8987__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__8987__$1,new cljs.core.Keyword(null,"max","max",61366548));
var frequency_arg = (function (){var G__8989 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite.call(null,min,max)], null)], null);
var G__8989__$1 = (((((min == null))?((max == null)) || ((0.0 <= max)):(((max == null))?(min <= 0.0):((min <= 0.0)) && ((0.0 <= max)))))?cljs.core.conj.call(null,G__8989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,0.0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,-0.0)], null)):G__8989);
var G__8989__$2 = (cljs.core.truth_((function (){var and__6927__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__6927__auto__)){
return (max == null);
} else {
return and__6927__auto__;
}
})())?cljs.core.conj.call(null,G__8989__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.POS_INFINITY)], null)):G__8989__$1);
var G__8989__$3 = (cljs.core.truth_((function (){var and__6927__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__6927__auto__)){
return (min == null);
} else {
return and__6927__auto__;
}
})())?cljs.core.conj.call(null,G__8989__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NEG_INFINITY)], null)):G__8989__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.call(null,G__8989__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NAN)], null));
} else {
return G__8989__$3;
}
})();
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,frequency_arg))){
return cljs.core.second.call(null,cljs.core.first.call(null,frequency_arg));
} else {
return clojure.test.check.generators.frequency.call(null,frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(0),(255)));
/**
 * Generate only ascii character.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(32),(126)));
/**
 * Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(48),(57)),clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generate alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null));
/**
 * Generate characters that can be the char following first of a keyword.
 */
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate characters that can be the first char of a keyword.
 */
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char$));
/**
 * Generate ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_ascii));
/**
 * Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$.call(null,(function (){var and__6927__auto__ = d;
if(cljs.core.truth_(and__6927__auto__)){
var and__6927__auto____$1 = (("+" === c)) || (("-" === c));
if(and__6927__auto____$1){
return clojure.test.check.generators.digit_QMARK_.call(null,d);
} else {
return and__6927__auto____$1;
}
} else {
return and__6927__auto__;
}
})());
});
/**
 * Generate the segment of a namespace.
 */
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap.call(null,(function (p__8990){
var vec__8991 = p__8990;
var c = cljs.core.nth.call(null,vec__8991,(0),null);
var cs = cljs.core.nth.call(null,vec__8991,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.such_that.call(null,(function (p__8994){
var vec__8995 = p__8994;
var c = cljs.core.nth.call(null,vec__8995,(0),null);
var vec__8998 = cljs.core.nth.call(null,vec__8995,(1),null);
var d = cljs.core.nth.call(null,vec__8998,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest))));
/**
 * Generate a namespace (or nil for no namespace).
 */
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap.call(null,(function (v){
if(cljs.core.seq.call(null,v)){
return clojure.string.join.call(null,".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.namespace_segment));
/**
 * Generate segments of a keyword (between \:)
 */
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap.call(null,(function (p__9001){
var vec__9002 = p__9001;
var c = cljs.core.nth.call(null,vec__9002,(0),null);
var cs = cljs.core.nth.call(null,vec__9002,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
/**
 * Generate segments of a keyword that can be first (between \:)
 */
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap.call(null,(function (p__9005){
var vec__9006 = p__9005;
var c = cljs.core.nth.call(null,vec__9006,(0),null);
var cs = cljs.core.nth.call(null,vec__9006,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
/**
 * Generate keywords without namespaces.
 */
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap.call(null,(function (p__9009){
var vec__9010 = p__9009;
var c = cljs.core.nth.call(null,vec__9010,(0),null);
var cs = cljs.core.nth.call(null,vec__9010,(1),null);
return cljs.core.keyword.call(null,clojure.string.join.call(null,":",cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.keyword_segment_rest)));
/**
 * Generate keywords with optional namespaces.
 */
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap.call(null,(function (p__9013){
var vec__9014 = p__9013;
var ns = cljs.core.nth.call(null,vec__9014,(0),null);
var c = cljs.core.nth.call(null,vec__9014,(1),null);
var cs = cljs.core.nth.call(null,vec__9014,(2),null);
return cljs.core.keyword.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null));
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null));
/**
 * Generate symbols without namespaces.
 */
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap.call(null,(function (p__9017){
var vec__9018 = p__9017;
var c = cljs.core.nth.call(null,vec__9018,(0),null);
var cs = cljs.core.nth.call(null,vec__9018,(1),null);
return cljs.core.symbol.call(null,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__9021){
var vec__9022 = p__9021;
var c = cljs.core.nth.call(null,vec__9022,(0),null);
var vec__9025 = cljs.core.nth.call(null,vec__9022,(1),null);
var d = cljs.core.nth.call(null,vec__9025,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generate symbols with optional namespaces.
 */
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap.call(null,(function (p__9028){
var vec__9029 = p__9028;
var ns = cljs.core.nth.call(null,vec__9029,(0),null);
var c = cljs.core.nth.call(null,vec__9029,(1),null);
var cs = cljs.core.nth.call(null,vec__9029,(2),null);
return cljs.core.symbol.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__9032){
var vec__9033 = p__9032;
var _ = cljs.core.nth.call(null,vec__9033,(0),null);
var c = cljs.core.nth.call(null,vec__9033,(1),null);
var vec__9036 = cljs.core.nth.call(null,vec__9033,(2),null);
var d = cljs.core.nth.call(null,vec__9036,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap.call(null,(function (p__9039){
var vec__9040 = p__9039;
var a = cljs.core.nth.call(null,vec__9040,(0),null);
var b = cljs.core.nth.call(null,vec__9040,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.int$,clojure.test.check.generators.such_that.call(null,cljs.core.complement.call(null,cljs.core.zero_QMARK_),clojure.test.check.generators.int$)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink.call(null,clojure.test.check.generators.fmap.call(null,(function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return nibbles.call(null,idx).toString((16));
});
var rhex = ((nibbles.call(null,(15)) & (3)) + (8)).toString((16));
return cljs.core.uuid.call(null,[cljs.core.str(hex.call(null,(0))),cljs.core.str(hex.call(null,(1))),cljs.core.str(hex.call(null,(2))),cljs.core.str(hex.call(null,(3))),cljs.core.str(hex.call(null,(4))),cljs.core.str(hex.call(null,(5))),cljs.core.str(hex.call(null,(6))),cljs.core.str(hex.call(null,(7))),cljs.core.str("-"),cljs.core.str(hex.call(null,(8))),cljs.core.str(hex.call(null,(9))),cljs.core.str(hex.call(null,(10))),cljs.core.str(hex.call(null,(11))),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null,(12))),cljs.core.str(hex.call(null,(13))),cljs.core.str(hex.call(null,(14))),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null,(16))),cljs.core.str(hex.call(null,(17))),cljs.core.str(hex.call(null,(18))),cljs.core.str("-"),cljs.core.str(hex.call(null,(19))),cljs.core.str(hex.call(null,(20))),cljs.core.str(hex.call(null,(21))),cljs.core.str(hex.call(null,(22))),cljs.core.str(hex.call(null,(23))),cljs.core.str(hex.call(null,(24))),cljs.core.str(hex.call(null,(25))),cljs.core.str(hex.call(null,(26))),cljs.core.str(hex.call(null,(27))),cljs.core.str(hex.call(null,(28))),cljs.core.str(hex.call(null,(29))),cljs.core.str(hex.call(null,(30)))].join(''));
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.choose.call(null,(0),(15)),(31))));
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.call(null,inner_type),clojure.test.check.generators.list.call(null,inner_type),clojure.test.check.generators.map.call(null,inner_type,inner_type)], null));
});
clojure.test.check.generators.recursive_helper = (function clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,height){
if((height === (0))){
return clojure.test.check.generators.resize.call(null,scalar_size,scalar_gen);
} else {
return clojure.test.check.generators.resize.call(null,children_size,container_gen_fn.call(null,clojure$test$check$generators$recursive_helper.call(null,container_gen_fn,scalar_gen,scalar_size,children_size,(height - (1)))));
}
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 *   
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,scalar_gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to recursive-gen must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? scalar-gen)")].join('')));
}

return clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(1),(5)),(function (height){
var children_size = Math.pow(size,((1) / height));
return clojure.test.check.generators.recursive_helper.call(null,container_gen_fn,scalar_gen,size,children_size,height);
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
var args__8129__auto__ = [];
var len__8122__auto___9051 = arguments.length;
var i__8123__auto___9052 = (0);
while(true){
if((i__8123__auto___9052 < len__8122__auto___9051)){
args__8129__auto__.push((arguments[i__8123__auto___9052]));

var G__9053 = (i__8123__auto___9052 + (1));
i__8123__auto___9052 = G__9053;
continue;
} else {
}
break;
}

var argseq__8130__auto__ = ((((3) < args__8129__auto__.length))?(new cljs.core.IndexedSeq(args__8129__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8130__auto__);
});

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to gen/let must be a vector of bindings."),cljs.core.str("\n"),cljs.core.str("(vector? bindings)")].join('')));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("gen/let requires an even number of forms in binding vector"),cljs.core.str("\n"),cljs.core.str("(even? (count bindings))")].join('')));
}

if(cljs.core.empty_QMARK_.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7865__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__9043__auto__","val__9043__auto__",822260050,null)),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__9043__auto__","val__9043__auto__",822260050,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__9043__auto__","val__9043__auto__",822260050,null)),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__9043__auto__","val__9043__auto__",822260050,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
} else {
var vec__9048 = bindings;
var seq__9049 = cljs.core.seq.call(null,vec__9048);
var first__9050 = cljs.core.first.call(null,seq__9049);
var seq__9049__$1 = cljs.core.next.call(null,seq__9049);
var binding = first__9050;
var first__9050__$1 = cljs.core.first.call(null,seq__9049__$1);
var seq__9049__$2 = cljs.core.next.call(null,seq__9049__$1);
var gen = first__9050__$1;
var more = seq__9049__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),(function (){var x__7865__auto__ = gen;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7865__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7865__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),(function (){var x__7865__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",-2079390126,null)),(function (){var x__7865__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,more))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7865__auto__);
})())));
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq9044){
var G__9045 = cljs.core.first.call(null,seq9044);
var seq9044__$1 = cljs.core.next.call(null,seq9044);
var G__9046 = cljs.core.first.call(null,seq9044__$1);
var seq9044__$2 = cljs.core.next.call(null,seq9044__$1);
var G__9047 = cljs.core.first.call(null,seq9044__$2);
var seq9044__$3 = cljs.core.next.call(null,seq9044__$2);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic(G__9045,G__9046,G__9047,seq9044__$3);
});


clojure.test.check.generators.let$.cljs$lang$macro = true;

//# sourceMappingURL=generators.js.map