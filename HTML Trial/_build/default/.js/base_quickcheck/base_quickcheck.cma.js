(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_update_dummy=runtime.caml_update_dummy;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Base_quickcheck_Observer_observe_size_0=
      caml_new_string("Base_quickcheck.Observer.observe: size < 0"),
     cst_Float_uniform_exclusive_bounds_are_not_finite=
      caml_new_string("Float.uniform_exclusive: bounds are not finite"),
     cst_Float_uniform_exclusive_requested_range_is_empty=
      caml_new_string("Float.uniform_exclusive: requested range is empty"),
     cst_Base_quickcheck_Generator_weighted_recursive_union_lists_must_be_non_empty=
      caml_new_string
       ("Base_quickcheck.Generator.weighted_recursive_union: lists must be non-empty"),
     cst_Base_quickcheck_Generator_of_weighted_list_weight_is_not_finite=
      caml_new_string
       ("Base_quickcheck.Generator.of_weighted_list: weight is not finite"),
     cst_Base_quickcheck_Generator_of_weighted_list_weight_is_negative=
      caml_new_string
       ("Base_quickcheck.Generator.of_weighted_list: weight is negative"),
     cst_Base_quickcheck_Generator_of_weighted_list_empty_list=
      caml_new_string
       ("Base_quickcheck.Generator.of_weighted_list: empty list"),
     cst_Base_quickcheck_Generator_of_weighted_list_total_weight_is_zero=
      caml_new_string
       ("Base_quickcheck.Generator.of_weighted_list: total weight is zero"),
     cst_Base_quickcheck_Generator_of_list_empty_list=
      caml_new_string("Base_quickcheck.Generator.of_list: empty list"),
     cst_Base_quickcheck_Generator_generate_size_0=
      caml_new_string("Base_quickcheck.Generator.generate: size < 0"),
     cst_Base_quickcheck_Test_run_test_failed=
      caml_new_string("Base_quickcheck.Test.run: test failed"),
     cst_Base_quickcheck_Test_run_insufficient_size_values_for_test_count=
      caml_new_string
       ("Base_quickcheck.Test.run: insufficient size values for test count"),
     cst=caml_new_string("..."),
     names=
      [0,
       caml_new_string("seed"),
       [0,
        caml_new_string("test_count"),
        [0,caml_new_string("shrink_count"),[0,caml_new_string("sizes"),0]]]],
     cst_sizes=caml_new_string("sizes"),
     cst_shrink_count=caml_new_string("shrink_count"),
     cst_test_count=caml_new_string("test_count"),
     cst_seed=caml_new_string("seed"),
     Base=global_data.Base,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Set=global_data.Base__Set,
     Base_Map=global_data.Base__Map,
     Base_List=global_data.Base__List,
     Base_String=global_data.Base__String,
     Splittable_random=global_data.Splittable_random,
     Base_Float=global_data.Base__Float,
     Base_Int=global_data.Base__Int,
     Base_Int63=global_data.Base__Int63,
     Base_Char=global_data.Base__Char,
     Base_Array=global_data.Base__Array,
     Base_Either=global_data.Base__Either,
     Base_Option=global_data.Base__Option,
     Assert_failure=global_data.Assert_failure,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Error=global_data.Base__Error,
     Base_Hash=global_data.Base__Hash,
     Base_Staged=global_data.Base__Staged,
     Base_Applicative=global_data.Base__Applicative,
     Base_Monad=global_data.Base__Monad,
     Base_Int32=global_data.Base__Int32,
     Base_Int64=global_data.Base__Int64,
     Base_Nativeint=global_data.Base__Nativeint,
     Base_Sequence=global_data.Base__Sequence,
     Base_Backtrace=global_data.Base__Backtrace,
     Base_Or_error=global_data.Base__Or_error,
     Base_Random=global_data.Base__Random,
     Base_Field=global_data.Base__Field,
     Base_Bool=global_data.Base__Bool,
     Base_quickcheck=[0];
    caml_register_global(75,Base_quickcheck,"Base_quickcheck__");
    var Base_quickcheck_With_basic_types=[0];
    caml_register_global
     (76,Base_quickcheck_With_basic_types,"Base_quickcheck__With_basic_types");
    var
     _a_=[0,caml_new_string("size")],
     _U_=[0,caml_new_string("upper_bound")],
     _V_=[0,caml_new_string("lower_bound")],
     _W_=[0,caml_new_string("upper_bound")],
     _X_=[0,caml_new_string("lower_bound")],
     _n_=[0,0],
     _m_=[0,1],
     _l_=[0,caml_new_string("src/generator.ml"),198,4],
     _k_=[0,caml_new_string("src/generator.ml"),225,6],
     _j_=[0,caml_new_string("src/generator.ml"),160,14],
     _h_=[0,caml_new_string("weight")],
     _i_=[0,caml_new_string("weight")],
     _b_=[0,caml_new_string("size")],
     _as_=[0,0],
     _at_=[0,0],
     _au_=[0,caml_new_string("error")],
     _av_=[0,caml_new_string("input")],
     _aq_=[0,caml_new_string("number_of_size_values")],
     _ar_=[0,caml_new_string("test_count")],
     _ai_=[0,caml_new_string("sizes")],
     _aj_=[0,caml_new_string("shrink_count")],
     _ak_=[0,caml_new_string("test_count")],
     _al_=[0,caml_new_string("seed")],
     ___=[0,caml_new_string("Deterministic")],
     _$_=[0,caml_new_string("Nondeterministic")],
     _am_=[0,104758188],
     _an_=[0,104758188],
     _ap_=[0,caml_new_string("an arbitrary but deterministic string")],
     _aw_=[0,0];
    function create(f){return f}
    function observe(t,x,size,hash)
     {if(caml_call2(Base[184],size,0))
       {var
         _en_=[0,[1,[0,_a_,[0,caml_call1(Base[115],size),0]]],0],
         _eo_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Base_quickcheck_Observer_observe_size_0),
            _en_]];
        return caml_call1(Base[207],_eo_)}
      return caml_call3(t,x,size,hash)}
    function quickcheck_observer_unit(param,_em_,hash){return hash}
    var include=[0,quickcheck_observer_unit,create,observe];
    caml_register_global(79,include,"Base_quickcheck__Observer0");
    function create$0(f){return caml_call1(Base_Staged[1],f)}
    function generate(t,size,random)
     {if(caml_call2(Base[184],size,0))
       {var
         _ek_=[0,[1,[0,_b_,[0,caml_call1(Base[115],size),0]]],0],
         _el_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Base_quickcheck_Generator_generate_size_0),
            _ek_]];
        return caml_call1(Base[207],_el_)}
      return caml_call3(Base_Staged[2],t,size,random)}
    var size=create$0(function(size,param){return size});
    function fn(dom,rng)
     {return create$0
              (function(size,random)
                {var random$0=caml_call1(Splittable_random[1][5],random);
                 return function(x)
                  {var
                    hash=observe(dom,x,size,caml_call1(Base_Hash[7],0)),
                    random=caml_call1(Splittable_random[1][4],random$0),
                    _ej_=caml_call1(Base_Hash[9],hash);
                   caml_call2(Splittable_random[1][3],random,_ej_);
                   return generate(rng,size,random)}})}
    function with_size(t,size)
     {return create$0(function(param,random){return generate(t,size,random)})}
    function perturb(t,salt)
     {return create$0
              (function(size,random)
                {caml_call2(Splittable_random[1][3],random,salt);
                 return generate(t,size,random)})}
    function filter_map(t,f)
     {function loop(size,random)
       {var size$0=size;
        for(;;)
         {var x=generate(t,size$0,random),match=caml_call1(f,x);
          if(match){var y=match[1];return y}
          var size$1=caml_call2(Base[165],size$0,1),size$0=size$1;
          continue}}
      return create$0(loop)}
    function filter(t,f)
     {return filter_map(t,function(x){return caml_call1(f,x)?[0,x]:0})}
    function return$0(x){return create$0(function(param,_ei_){return x})}
    function map(t,f)
     {return create$0
              (function(size,random)
                {return caml_call1(f,generate(t,size,random))})}
    function apply(tf,tx)
     {return create$0
              (function(size,random)
                {var f=generate(tf,size,random),x=generate(tx,size,random);
                 return caml_call1(f,x)})}
    function bind(t,f)
     {return create$0
              (function(size,random)
                {var x=generate(t,size,random);
                 return generate(caml_call1(f,x),size,random)})}
    function all(list)
     {return create$0
              (function(size,random)
                {function _eg_(_eh_){return generate(_eh_,size,random)}
                 return caml_call2(Base_List[72],list,_eg_)})}
    function all_unit(list)
     {return create$0
              (function(size,random)
                {function _ee_(_ef_){return generate(_ef_,size,random)}
                 return caml_call2(Base_List[8],list,_ee_)})}
    var
     map$0=[0,-198771759,map],
     For_applicative=caml_call1(Base_Applicative[5],[0,return$0,apply,map$0]),
     both=For_applicative[3],
     map2=For_applicative[9],
     map3=For_applicative[10],
     include$0=For_applicative[13],
     symbol=include$0[1],
     symbol$0=include$0[2],
     symbol$1=include$0[3],
     map$1=[0,-198771759,map],
     For_monad=caml_call1(Base_Monad[1],[0,bind,return$0,map$1]),
     _d_=For_monad[7],
     _e_=For_monad[3],
     _c_=For_monad[8],
     _f_=_e_[1],
     _g_=_e_[2];
    function of_list(list)
     {if(caml_call1(Base_List[7],list))
       {var
         _ec_=
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_Base_quickcheck_Generator_of_list_empty_list);
        caml_call1(Base_Error[27],_ec_)}
      var
       array=caml_call1(Base_Array[37],list),
       _ed_=caml_call1(Base_Array[7],array),
       hi=caml_call2(Base[166],_ed_,1),
       lo=0;
      return create$0
              (function(param,random)
                {var index=caml_call3(Splittable_random[3],random,lo,hi);
                 return caml_check_bound(array,index)[1 + index]})}
    function union(list){return caml_call1(_d_,of_list(list))}
    function of_weighted_list(alist)
     {if(caml_call1(Base_List[7],alist))
       {var
         _d5_=
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_Base_quickcheck_Generator_of_weighted_list_empty_list);
        caml_call1(Base_Error[27],_d5_)}
      var
       match=caml_call1(Base_List[88],alist),
       values=match[2],
       weights=match[1],
       value_array=caml_call1(Base_Array[37],values);
      function _d6_(param){return 0.}
      var
       _d7_=caml_call1(Base_Array[7],value_array),
       array=caml_call2(Base_Array[26],_d7_,_d6_);
      function _d8_(index,acc,weight)
       {if(1 - caml_call1(Base_Float[115],weight))
         {var
           _d__=[0,[1,[0,_h_,[0,caml_call1(Base[109],weight),0]]],0],
           _d$_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Base_quickcheck_Generator_of_weighted_list_weight_is_not_finite),
              _d__]];
          caml_call1(Base_Error[27],_d$_)}
        if(caml_call2(Base_Float[12],weight,0.))
         {var
           _ea_=[0,[1,[0,_i_,[0,caml_call1(Base[109],weight),0]]],0],
           _eb_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Base_quickcheck_Generator_of_weighted_list_weight_is_negative),
              _ea_]];
          caml_call1(Base_Error[27],_eb_)}
        var cumulative=caml_call2(Base[196],acc,weight);
        runtime.caml_array_set(array,index,cumulative);
        return cumulative}
      var sum=caml_call3(Base_List[95],weights,0.,_d8_);
      if(caml_call2(Base_Float[9],sum,0.))
       {var
         _d9_=
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_Base_quickcheck_Generator_of_weighted_list_total_weight_is_zero);
        caml_call1(Base_Error[27],_d9_)}
      return create$0
              (function(param,random)
                {var
                  choice=caml_call3(Splittable_random[8],random,0.,sum),
                  match=
                   caml_call6
                    (Base_Array[4],0,0,array,Base_Float[15],926943384,choice);
                 if(match)
                  {var index=match[1];
                   return caml_check_bound(value_array,index)[1 + index]}
                 throw [0,Assert_failure,_j_]})}
    function weighted_union(alist)
     {return caml_call1(_d_,of_weighted_list(alist))}
    function of_lazy(lazy_t)
     {return create$0
              (function(size,random)
                {var
                  _d3_=caml_obj_tag(lazy_t),
                  _d4_=
                   250 === _d3_
                    ?lazy_t[1]
                    :246 === _d3_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
                 return generate(_d4_,size,random)})}
    function fixed_point(of_generator)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_d2_){return caml_call1(of_generator,of_lazy(lazy_t))}]);
      var _d1_=caml_obj_tag(lazy_t);
      return 250 === _d1_
              ?lazy_t[1]
              :246 === _d1_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t}
    function weighted_recursive_union(nonrec_list,f)
     {return fixed_point
              (function(self)
                {function _dU_(param)
                  {var t=param[2],w=param[1];
                   function _d0_(n)
                    {return with_size(t,caml_call2(Base[166],n,1))}
                   return [0,w,caml_call2(For_monad[11][4][2],size,_d0_)]}
                 var
                  _dV_=caml_call1(f,self),
                  rec_list=caml_call2(Base_List[72],_dV_,_dU_),
                  _dW_=caml_call1(Base_List[7],nonrec_list),
                  _dX_=_dW_ || caml_call1(Base_List[7],rec_list);
                 if(_dX_)
                  {var
                    _dY_=
                     caml_call1
                      (Sexplib0_Sexp_conv[7],
                       cst_Base_quickcheck_Generator_weighted_recursive_union_lists_must_be_non_empty);
                   caml_call1(Base[207],_dY_)}
                 var
                  nonrec_gen=weighted_union(nonrec_list),
                  rec_gen=
                   weighted_union(caml_call2(Base[164],nonrec_list,rec_list));
                 function _dZ_(param){return 0 === param?nonrec_gen:rec_gen}
                 return caml_call2(For_monad[11][4][2],size,_dZ_)})}
    function recursive_union(nonrec_list,f)
     {function weighted(list)
       {function _dT_(t){return [0,1.,t]}
        return caml_call2(Base_List[72],list,_dT_)}
      function _dS_(self){return weighted(caml_call1(f,self))}
      return weighted_recursive_union(weighted(nonrec_list),_dS_)}
    function sizes(opt,_dD_,param)
     {if(opt)var sth=opt[1],min_length=sth;else var min_length=0;
      if(_dD_)
       var sth$0=_dD_[1],max_length=sth$0;
      else
       var max_length=Base_Int[88];
      return create$0
              (function(size,random)
                {if(caml_call2(Base[185],min_length,max_length))
                  {var
                    upper_bound=caml_call2(Base[165],min_length,size),
                    max_length$0=
                     caml_call2(Base[189],upper_bound,min_length)
                      ?caml_call2(Base[195],max_length,upper_bound)
                      :max_length,
                    len=
                     caml_call3
                      (Splittable_random[10][1],random,min_length,max_length$0);
                   if(caml_call2(Base[187],len,0))return 0;
                   var
                    _dE_=function(param){return 0},
                    sizes=caml_call2(Base_Array[26],len,_dE_),
                    _dF_=caml_call2(Base[166],len,min_length),
                    remaining=caml_call2(Base[166],size,_dF_),
                    max_index=caml_call2(Base[166],len,1),
                    _dG_=1;
                   if(! (remaining < 1))
                    {var for$0=_dG_;
                     for(;;)
                      {var
                        index=
                         caml_call3(Splittable_random[10][1],random,0,max_index),
                        _dO_=caml_check_bound(sizes,index)[1 + index],
                        _dP_=caml_call2(Base[165],_dO_,1);
                       caml_check_bound(sizes,index)[1 + index] = _dP_;
                       var _dQ_=for$0 + 1 | 0;
                       if(remaining !== for$0){var for$0=_dQ_;continue}
                       break}}
                   var _dI_=caml_call2(Base[166],max_index,1),_dH_=0;
                   if(! (_dI_ < 0))
                    {var i=_dH_;
                     for(;;)
                      {var j=caml_call3(Splittable_random[3],random,i,max_index);
                       caml_call3(Base_Array[71],sizes,i,j);
                       var _dN_=i + 1 | 0;
                       if(_dI_ !== i){var i=_dN_;continue}
                       break}}
                   var
                    _dJ_=caml_call2(Base[166],len,min_length),
                    _dK_=function(_dR_){return _dR_},
                    _dL_=
                     caml_call3
                      (Base_Array[16],[0,Base_Int[42],Base_Int[45]],sizes,_dK_),
                    _dM_=caml_call2(Base[165],_dL_,_dJ_);
                   if(caml_call2(Base[187],_dM_,size))
                    return caml_call1(Base_Array[19],sizes);
                   throw [0,Assert_failure,_k_]}
                 throw [0,Assert_failure,_l_]})}
    var
     quickcheck_generator_unit=caml_call1(For_monad[11][1],0),
     quickcheck_generator_bool=
      create$0
       (function(param,random){return caml_call1(Splittable_random[2],random)});
    function quickcheck_generator_option(value_t)
     {var _dC_=[0,map(value_t,Base_Option[28]),0];
      return union([0,caml_call1(For_monad[11][1],0),_dC_])}
    function either(fst_t,snd_t)
     {var _dB_=[0,map(snd_t,Base_Either[17]),0];
      return union([0,map(fst_t,Base_Either[16]),_dB_])}
    function result(ok_t,err_t)
     {function _dA_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return map(either(ok_t,err_t),_dA_)}
    function list_generic(min_length,max_length,elt_gen)
     {function _dx_(sizes)
       {function _dz_(size){return with_size(elt_gen,size)}
        return all(caml_call2(Base_List[72],sizes,_dz_))}
      var _dy_=sizes(min_length,max_length,0);
      return caml_call2(For_monad[11][4][2],_dy_,_dx_)}
    function quickcheck_generator_list(elt_gen)
     {return list_generic(0,0,elt_gen)}
    function list_non_empty(elt_gen){return list_generic(_m_,0,elt_gen)}
    function list_with_length(elt_gen,length)
     {return list_generic([0,length],[0,length],elt_gen)}
    function list_filtered(elts)
     {var
       elts$0=caml_call1(Base_Array[37],elts),
       length_of_input=caml_call1(Base_Array[7],elts$0);
      return create$0
              (function(param,random)
                {var
                  length_of_output=
                   caml_call3(Splittable_random[3],random,0,length_of_input);
                 function _dp_(_dw_){return _dw_}
                 var
                  indices=caml_call2(Base_Array[26],length_of_input,_dp_),
                  _dr_=caml_call2(Base[166],length_of_output,1),
                  _dq_=0;
                 if(! (_dr_ < 0))
                  {var i=_dq_;
                   for(;;)
                    {var
                      _dt_=caml_call2(Base[166],length_of_input,1),
                      j=caml_call3(Splittable_random[3],random,i,_dt_);
                     caml_call3(Base_Array[71],indices,i,j);
                     var _du_=i + 1 | 0;
                     if(_dr_ !== i){var i=_du_;continue}
                     break}}
                 caml_call4
                  (Base_Array[47],
                   _n_,
                   [0,length_of_output],
                   indices,
                   Base_Int[18]);
                 function _ds_(i)
                  {var _dv_=caml_check_bound(indices,i)[1 + i];
                   return caml_check_bound(elts$0,_dv_)[1 + _dv_]}
                 return caml_call2(Base_List[116],length_of_output,_ds_)})}
    function list_permutations(list)
     {return create$0
              (function(param,random)
                {var
                  array=caml_call1(Base_Array[37],list),
                  _dm_=caml_call1(Base_Array[7],array),
                  _dn_=caml_call2(Base[166],_dm_,1),
                  _dl_=1;
                 if(! (_dn_ < 1))
                  {var i=_dl_;
                   for(;;)
                    {var j=caml_call3(Splittable_random[3],random,0,i);
                     caml_call3(Base_Array[71],array,i,j);
                     var _do_=i + 1 | 0;
                     if(_dn_ !== i){var i=_do_;continue}
                     break}}
                 return caml_call1(Base_Array[19],array)})}
    function char_uniform_inclusive(lo,hi)
     {return create$0
              (function(param,random)
                {var
                  _di_=caml_call1(Base_Char[29],hi),
                  _dj_=caml_call1(Base_Char[29],lo),
                  _dk_=caml_call3(Splittable_random[3],random,_dj_,_di_);
                 return caml_call1(Base_Char[32],_dk_)})}
    var
     char_uppercase=char_uniform_inclusive(65,90),
     char_lowercase=char_uniform_inclusive(97,122),
     char_digit=char_uniform_inclusive(48,57),
     char_print_uniform=char_uniform_inclusive(32,126),
     char_uniform=char_uniform_inclusive(Base_Char[45],Base_Char[46]),
     char_alpha=union([0,char_lowercase,[0,char_uppercase,0]]),
     char_alphanum=
      weighted_union([0,[0,52.,char_alpha],[0,[0,10.,char_digit],0]]),
     char_whitespace=
      of_list(caml_call2(Base_List[51],Base_Char[1],Base_Char[42])),
     char_print=
      weighted_union
       ([0,[0,10.,char_alphanum],[0,[0,1.,char_print_uniform],0]]),
     _o_=[0,[0,1.,caml_call1(For_monad[11][1],Base_Char[46])],0],
     quickcheck_generator_char=
      weighted_union
       ([0,
         [0,100.,char_print],
         [0,
          [0,10.,char_uniform],
          [0,[0,1.,caml_call1(For_monad[11][1],Base_Char[45])],_o_]]]);
    function small_int(allow_zero)
     {return create$0
              (function(size,random)
                {var
                  lower_bound=allow_zero?0:1,
                  upper_bound=caml_call2(Base[165],size,1),
                  _dh_=caml_call2(Base[166],upper_bound,lower_bound),
                  weighted_low=
                   caml_call3(Splittable_random[10][1],random,0,_dh_),
                  weighted_high=caml_call2(Base[166],upper_bound,weighted_low);
                 return weighted_high})}
    var
     small_positive_or_zero_int=small_int(1),
     small_strictly_positive_int=small_int(0);
    function For_integer(Integer)
     {function uniform_inclusive(lo,hi)
       {return create$0
                (function(param,random)
                  {return caml_call3(Integer[98],random,lo,hi)})}
      function log_uniform_inclusive(lo,hi)
       {return create$0
                (function(param,random)
                  {return caml_call3(Integer[99],random,lo,hi)})}
      function non_uniform(f,lo,hi)
       {var
         _df_=[0,[0,0.9,caml_call2(f,lo,hi)],0],
         _dg_=[0,[0,0.05,caml_call1(For_monad[11][1],hi)],_df_];
        return weighted_union
                ([0,[0,0.05,caml_call1(For_monad[11][1],lo)],_dg_])}
      function inclusive(_dd_,_de_)
       {return non_uniform(uniform_inclusive,_dd_,_de_)}
      function log_inclusive(_db_,_dc_)
       {return non_uniform(log_uniform_inclusive,_db_,_dc_)}
      var
       uniform_all=uniform_inclusive(Integer[89],Integer[88]),
       let_syntax_002=log_inclusive(Integer[42],Integer[88]);
      function _c$_(param)
       {var magnitude=param[2],negative=param[1];
        return negative?caml_call1(Integer[74],magnitude):magnitude}
      var
       _da_=
        caml_call2
         (For_monad[11][4][4],quickcheck_generator_bool,let_syntax_002),
       all=caml_call2(For_monad[11][4][3],_da_,_c$_);
      return [0,
              uniform_inclusive,
              log_uniform_inclusive,
              non_uniform,
              inclusive,
              log_inclusive,
              uniform_all,
              all]}
    var
     of_float=Base_Int[1],
     to_float=Base_Int[2],
     of_int_exn=Base_Int[3],
     to_int_exn=Base_Int[4],
     hash_fold_t=Base_Int[5],
     hash=Base_Int[6],
     t_of_sexp=Base_Int[7],
     sexp_of_t=Base_Int[8],
     of_string=Base_Int[9],
     to_string=Base_Int[10],
     symbol$2=Base_Int[11],
     symbol$3=Base_Int[12],
     symbol$4=Base_Int[13],
     symbol$5=Base_Int[14],
     symbol$6=Base_Int[15],
     symbol$7=Base_Int[16],
     equal=Base_Int[17],
     compare=Base_Int[18],
     min=Base_Int[19],
     max=Base_Int[20],
     ascending=Base_Int[21],
     descending=Base_Int[22],
     between=Base_Int[23],
     clamp_exn=Base_Int[24],
     clamp=Base_Int[25],
     comparator=Base_Int[26],
     validate_lbound=Base_Int[27],
     validate_ubound=Base_Int[28],
     validate_bound=Base_Int[29],
     pp=Base_Int[30],
     validate_positive=Base_Int[31],
     validate_non_negative=Base_Int[32],
     validate_negative=Base_Int[33],
     validate_non_positive=Base_Int[34],
     is_positive=Base_Int[35],
     is_non_negative=Base_Int[36],
     is_negative=Base_Int[37],
     is_non_positive=Base_Int[38],
     sign=Base_Int[39],
     Hex=Base_Int[40],
     to_string_hum=Base_Int[41],
     zero=Base_Int[42],
     one=Base_Int[43],
     minus_one=Base_Int[44],
     symbol$8=Base_Int[45],
     symbol$9=Base_Int[46],
     symbol$10=Base_Int[47],
     symbol$11=Base_Int[48],
     neg=Base_Int[49],
     symbol$12=Base_Int[50],
     symbol$13=Base_Int[51],
     symbol$14=Base_Int[52],
     symbol$15=Base_Int[53],
     rem=Base_Int[54],
     symbol$16=Base_Int[55],
     land=Base_Int[56],
     lor=Base_Int[57],
     lxor=Base_Int[58],
     lnot=Base_Int[59],
     lsl=Base_Int[60],
     asr=Base_Int[61],
     round=Base_Int[62],
     round_towards_zero=Base_Int[63],
     round_down=Base_Int[64],
     round_up=Base_Int[65],
     round_nearest=Base_Int[66],
     abs=Base_Int[67],
     succ=Base_Int[68],
     pred=Base_Int[69],
     pow=Base_Int[70],
     bit_and=Base_Int[71],
     bit_or=Base_Int[72],
     bit_xor=Base_Int[73],
     bit_not=Base_Int[74],
     popcount=Base_Int[75],
     shift_left=Base_Int[76],
     shift_right=Base_Int[77],
     decr=Base_Int[78],
     incr=Base_Int[79],
     of_int32_exn=Base_Int[80],
     to_int32_exn=Base_Int[81],
     of_int64_exn=Base_Int[82],
     to_int64=Base_Int[83],
     of_nativeint_exn=Base_Int[84],
     to_nativeint_exn=Base_Int[85],
     of_float_unchecked=Base_Int[86],
     num_bits=Base_Int[87],
     max_value=Base_Int[88],
     min_value=Base_Int[89],
     lsr=Base_Int[90],
     shift_right_logical=Base_Int[91],
     ceil_pow2=Base_Int[92],
     floor_pow2=Base_Int[93],
     ceil_log2=Base_Int[94],
     floor_log2=Base_Int[95],
     is_pow2=Base_Int[96],
     O=Base_Int[97],
     uniform=Splittable_random[3],
     log_uniform=Splittable_random[10][1],
     For_int=
      For_integer
       ([0,
         of_float,
         to_float,
         of_int_exn,
         to_int_exn,
         hash_fold_t,
         hash,
         t_of_sexp,
         sexp_of_t,
         of_string,
         to_string,
         symbol$2,
         symbol$3,
         symbol$4,
         symbol$5,
         symbol$6,
         symbol$7,
         equal,
         compare,
         min,
         max,
         ascending,
         descending,
         between,
         clamp_exn,
         clamp,
         comparator,
         validate_lbound,
         validate_ubound,
         validate_bound,
         pp,
         validate_positive,
         validate_non_negative,
         validate_negative,
         validate_non_positive,
         is_positive,
         is_non_negative,
         is_negative,
         is_non_positive,
         sign,
         Hex,
         to_string_hum,
         zero,
         one,
         minus_one,
         symbol$8,
         symbol$9,
         symbol$10,
         symbol$11,
         neg,
         symbol$12,
         symbol$13,
         symbol$14,
         symbol$15,
         rem,
         symbol$16,
         land,
         lor,
         lxor,
         lnot,
         lsl,
         asr,
         round,
         round_towards_zero,
         round_down,
         round_up,
         round_nearest,
         abs,
         succ,
         pred,
         pow,
         bit_and,
         bit_or,
         bit_xor,
         bit_not,
         popcount,
         shift_left,
         shift_right,
         decr,
         incr,
         of_int32_exn,
         to_int32_exn,
         of_int64_exn,
         to_int64,
         of_nativeint_exn,
         to_nativeint_exn,
         of_float_unchecked,
         num_bits,
         max_value,
         min_value,
         lsr,
         shift_right_logical,
         ceil_pow2,
         floor_pow2,
         ceil_log2,
         floor_log2,
         is_pow2,
         O,
         uniform,
         log_uniform]),
     quickcheck_generator_int=For_int[7],
     int_uniform=For_int[6],
     int_inclusive=For_int[4],
     int_uniform_inclusive=For_int[1],
     int_log_inclusive=For_int[5],
     int_log_uniform_inclusive=For_int[2],
     of_float$0=Base_Int32[1],
     to_float$0=Base_Int32[2],
     of_int_exn$0=Base_Int32[3],
     to_int_exn$0=Base_Int32[4],
     hash_fold_t$0=Base_Int32[5],
     hash$0=Base_Int32[6],
     t_of_sexp$0=Base_Int32[7],
     sexp_of_t$0=Base_Int32[8],
     of_string$0=Base_Int32[9],
     to_string$0=Base_Int32[10],
     symbol$17=Base_Int32[11],
     symbol$18=Base_Int32[12],
     symbol$19=Base_Int32[13],
     symbol$20=Base_Int32[14],
     symbol$21=Base_Int32[15],
     symbol$22=Base_Int32[16],
     equal$0=Base_Int32[17],
     compare$0=Base_Int32[18],
     min$0=Base_Int32[19],
     max$0=Base_Int32[20],
     ascending$0=Base_Int32[21],
     descending$0=Base_Int32[22],
     between$0=Base_Int32[23],
     clamp_exn$0=Base_Int32[24],
     clamp$0=Base_Int32[25],
     comparator$0=Base_Int32[26],
     validate_lbound$0=Base_Int32[27],
     validate_ubound$0=Base_Int32[28],
     validate_bound$0=Base_Int32[29],
     pp$0=Base_Int32[30],
     validate_positive$0=Base_Int32[31],
     validate_non_negative$0=Base_Int32[32],
     validate_negative$0=Base_Int32[33],
     validate_non_positive$0=Base_Int32[34],
     is_positive$0=Base_Int32[35],
     is_non_negative$0=Base_Int32[36],
     is_negative$0=Base_Int32[37],
     is_non_positive$0=Base_Int32[38],
     sign$0=Base_Int32[39],
     Hex$0=Base_Int32[40],
     to_string_hum$0=Base_Int32[41],
     zero$0=Base_Int32[42],
     one$0=Base_Int32[43],
     minus_one$0=Base_Int32[44],
     symbol$23=Base_Int32[45],
     symbol$24=Base_Int32[46],
     symbol$25=Base_Int32[47],
     symbol$26=Base_Int32[48],
     neg$0=Base_Int32[49],
     symbol$27=Base_Int32[50],
     symbol$28=Base_Int32[51],
     symbol$29=Base_Int32[52],
     symbol$30=Base_Int32[53],
     rem$0=Base_Int32[54],
     symbol$31=Base_Int32[55],
     land$0=Base_Int32[56],
     lor$0=Base_Int32[57],
     lxor$0=Base_Int32[58],
     lnot$0=Base_Int32[59],
     lsl$0=Base_Int32[60],
     asr$0=Base_Int32[61],
     round$0=Base_Int32[62],
     round_towards_zero$0=Base_Int32[63],
     round_down$0=Base_Int32[64],
     round_up$0=Base_Int32[65],
     round_nearest$0=Base_Int32[66],
     abs$0=Base_Int32[67],
     succ$0=Base_Int32[68],
     pred$0=Base_Int32[69],
     pow$0=Base_Int32[70],
     bit_and$0=Base_Int32[71],
     bit_or$0=Base_Int32[72],
     bit_xor$0=Base_Int32[73],
     bit_not$0=Base_Int32[74],
     popcount$0=Base_Int32[75],
     shift_left$0=Base_Int32[76],
     shift_right$0=Base_Int32[77],
     decr$0=Base_Int32[78],
     incr$0=Base_Int32[79],
     of_int32_exn$0=Base_Int32[80],
     to_int32_exn$0=Base_Int32[81],
     of_int64_exn$0=Base_Int32[82],
     to_int64$0=Base_Int32[83],
     of_nativeint_exn$0=Base_Int32[84],
     to_nativeint_exn$0=Base_Int32[85],
     of_float_unchecked$0=Base_Int32[86],
     num_bits$0=Base_Int32[87],
     max_value$0=Base_Int32[88],
     min_value$0=Base_Int32[89],
     lsr$0=Base_Int32[90],
     shift_right_logical$0=Base_Int32[91],
     ceil_pow2$0=Base_Int32[92],
     floor_pow2$0=Base_Int32[93],
     ceil_log2$0=Base_Int32[94],
     floor_log2$0=Base_Int32[95],
     is_pow2$0=Base_Int32[96],
     O$0=Base_Int32[97],
     uniform$0=Splittable_random[4],
     log_uniform$0=Splittable_random[10][2],
     For_int32=
      For_integer
       ([0,
         of_float$0,
         to_float$0,
         of_int_exn$0,
         to_int_exn$0,
         hash_fold_t$0,
         hash$0,
         t_of_sexp$0,
         sexp_of_t$0,
         of_string$0,
         to_string$0,
         symbol$17,
         symbol$18,
         symbol$19,
         symbol$20,
         symbol$21,
         symbol$22,
         equal$0,
         compare$0,
         min$0,
         max$0,
         ascending$0,
         descending$0,
         between$0,
         clamp_exn$0,
         clamp$0,
         comparator$0,
         validate_lbound$0,
         validate_ubound$0,
         validate_bound$0,
         pp$0,
         validate_positive$0,
         validate_non_negative$0,
         validate_negative$0,
         validate_non_positive$0,
         is_positive$0,
         is_non_negative$0,
         is_negative$0,
         is_non_positive$0,
         sign$0,
         Hex$0,
         to_string_hum$0,
         zero$0,
         one$0,
         minus_one$0,
         symbol$23,
         symbol$24,
         symbol$25,
         symbol$26,
         neg$0,
         symbol$27,
         symbol$28,
         symbol$29,
         symbol$30,
         rem$0,
         symbol$31,
         land$0,
         lor$0,
         lxor$0,
         lnot$0,
         lsl$0,
         asr$0,
         round$0,
         round_towards_zero$0,
         round_down$0,
         round_up$0,
         round_nearest$0,
         abs$0,
         succ$0,
         pred$0,
         pow$0,
         bit_and$0,
         bit_or$0,
         bit_xor$0,
         bit_not$0,
         popcount$0,
         shift_left$0,
         shift_right$0,
         decr$0,
         incr$0,
         of_int32_exn$0,
         to_int32_exn$0,
         of_int64_exn$0,
         to_int64$0,
         of_nativeint_exn$0,
         to_nativeint_exn$0,
         of_float_unchecked$0,
         num_bits$0,
         max_value$0,
         min_value$0,
         lsr$0,
         shift_right_logical$0,
         ceil_pow2$0,
         floor_pow2$0,
         ceil_log2$0,
         floor_log2$0,
         is_pow2$0,
         O$0,
         uniform$0,
         log_uniform$0]),
     quickcheck_generator_int32=For_int32[7],
     int32_uniform=For_int32[6],
     int32_inclusive=For_int32[4],
     int32_uniform_inclusive=For_int32[1],
     int32_log_inclusive=For_int32[5],
     int32_log_uniform_inclusive=For_int32[2],
     of_float$1=Base_Int63[1],
     to_float$1=Base_Int63[2],
     of_int_exn$1=Base_Int63[3],
     to_int_exn$1=Base_Int63[4],
     hash_fold_t$1=Base_Int63[5],
     hash$1=Base_Int63[6],
     t_of_sexp$1=Base_Int63[7],
     sexp_of_t$1=Base_Int63[8],
     of_string$1=Base_Int63[9],
     to_string$1=Base_Int63[10],
     symbol$32=Base_Int63[11],
     symbol$33=Base_Int63[12],
     symbol$34=Base_Int63[13],
     symbol$35=Base_Int63[14],
     symbol$36=Base_Int63[15],
     symbol$37=Base_Int63[16],
     equal$1=Base_Int63[17],
     compare$1=Base_Int63[18],
     min$1=Base_Int63[19],
     max$1=Base_Int63[20],
     ascending$1=Base_Int63[21],
     descending$1=Base_Int63[22],
     between$1=Base_Int63[23],
     clamp_exn$1=Base_Int63[24],
     clamp$1=Base_Int63[25],
     comparator$1=Base_Int63[26],
     validate_lbound$1=Base_Int63[27],
     validate_ubound$1=Base_Int63[28],
     validate_bound$1=Base_Int63[29],
     pp$1=Base_Int63[30],
     validate_positive$1=Base_Int63[31],
     validate_non_negative$1=Base_Int63[32],
     validate_negative$1=Base_Int63[33],
     validate_non_positive$1=Base_Int63[34],
     is_positive$1=Base_Int63[35],
     is_non_negative$1=Base_Int63[36],
     is_negative$1=Base_Int63[37],
     is_non_positive$1=Base_Int63[38],
     sign$1=Base_Int63[39],
     Hex$1=Base_Int63[40],
     to_string_hum$1=Base_Int63[41],
     zero$1=Base_Int63[42],
     one$1=Base_Int63[43],
     minus_one$1=Base_Int63[44],
     symbol$38=Base_Int63[45],
     symbol$39=Base_Int63[46],
     symbol$40=Base_Int63[47],
     symbol$41=Base_Int63[48],
     neg$1=Base_Int63[49],
     symbol$42=Base_Int63[50],
     symbol$43=Base_Int63[51],
     symbol$44=Base_Int63[52],
     symbol$45=Base_Int63[53],
     rem$1=Base_Int63[54],
     symbol$46=Base_Int63[55],
     land$1=Base_Int63[56],
     lor$1=Base_Int63[57],
     lxor$1=Base_Int63[58],
     lnot$1=Base_Int63[59],
     lsl$1=Base_Int63[60],
     asr$1=Base_Int63[61],
     round$1=Base_Int63[62],
     round_towards_zero$1=Base_Int63[63],
     round_down$1=Base_Int63[64],
     round_up$1=Base_Int63[65],
     round_nearest$1=Base_Int63[66],
     abs$1=Base_Int63[67],
     succ$1=Base_Int63[68],
     pred$1=Base_Int63[69],
     pow$1=Base_Int63[70],
     bit_and$1=Base_Int63[71],
     bit_or$1=Base_Int63[72],
     bit_xor$1=Base_Int63[73],
     bit_not$1=Base_Int63[74],
     popcount$1=Base_Int63[75],
     shift_left$1=Base_Int63[76],
     shift_right$1=Base_Int63[77],
     decr$1=Base_Int63[78],
     incr$1=Base_Int63[79],
     of_int32_exn$1=Base_Int63[80],
     to_int32_exn$1=Base_Int63[81],
     of_int64_exn$1=Base_Int63[82],
     to_int64$1=Base_Int63[83],
     of_nativeint_exn$1=Base_Int63[84],
     to_nativeint_exn$1=Base_Int63[85],
     of_float_unchecked$1=Base_Int63[86],
     num_bits$1=Base_Int63[87],
     max_value$1=Base_Int63[88],
     min_value$1=Base_Int63[89],
     lsr$1=Base_Int63[90],
     shift_right_logical$1=Base_Int63[91],
     ceil_pow2$1=Base_Int63[92],
     floor_pow2$1=Base_Int63[93],
     ceil_log2$1=Base_Int63[94],
     is_pow2$1=Base_Int63[95],
     O$1=Base_Int63[96],
     floor_log2$1=Base_Int63[112],
     uniform$1=Splittable_random[5],
     log_uniform$1=Splittable_random[10][3],
     For_int63=
      For_integer
       ([0,
         of_float$1,
         to_float$1,
         of_int_exn$1,
         to_int_exn$1,
         hash_fold_t$1,
         hash$1,
         t_of_sexp$1,
         sexp_of_t$1,
         of_string$1,
         to_string$1,
         symbol$32,
         symbol$33,
         symbol$34,
         symbol$35,
         symbol$36,
         symbol$37,
         equal$1,
         compare$1,
         min$1,
         max$1,
         ascending$1,
         descending$1,
         between$1,
         clamp_exn$1,
         clamp$1,
         comparator$1,
         validate_lbound$1,
         validate_ubound$1,
         validate_bound$1,
         pp$1,
         validate_positive$1,
         validate_non_negative$1,
         validate_negative$1,
         validate_non_positive$1,
         is_positive$1,
         is_non_negative$1,
         is_negative$1,
         is_non_positive$1,
         sign$1,
         Hex$1,
         to_string_hum$1,
         zero$1,
         one$1,
         minus_one$1,
         symbol$38,
         symbol$39,
         symbol$40,
         symbol$41,
         neg$1,
         symbol$42,
         symbol$43,
         symbol$44,
         symbol$45,
         rem$1,
         symbol$46,
         land$1,
         lor$1,
         lxor$1,
         lnot$1,
         lsl$1,
         asr$1,
         round$1,
         round_towards_zero$1,
         round_down$1,
         round_up$1,
         round_nearest$1,
         abs$1,
         succ$1,
         pred$1,
         pow$1,
         bit_and$1,
         bit_or$1,
         bit_xor$1,
         bit_not$1,
         popcount$1,
         shift_left$1,
         shift_right$1,
         decr$1,
         incr$1,
         of_int32_exn$1,
         to_int32_exn$1,
         of_int64_exn$1,
         to_int64$1,
         of_nativeint_exn$1,
         to_nativeint_exn$1,
         of_float_unchecked$1,
         num_bits$1,
         max_value$1,
         min_value$1,
         lsr$1,
         shift_right_logical$1,
         ceil_pow2$1,
         floor_pow2$1,
         ceil_log2$1,
         floor_log2$1,
         is_pow2$1,
         O$1,
         uniform$1,
         log_uniform$1]),
     int63=For_int63[7],
     int63_uniform=For_int63[6],
     int63_inclusive=For_int63[4],
     int63_uniform_inclusive=For_int63[1],
     int63_log_inclusive=For_int63[5],
     int63_log_uniform_inclusive=For_int63[2],
     of_float$2=Base_Int64[1],
     to_float$2=Base_Int64[2],
     of_int_exn$2=Base_Int64[3],
     to_int_exn$2=Base_Int64[4],
     hash_fold_t$2=Base_Int64[5],
     hash$2=Base_Int64[6],
     t_of_sexp$2=Base_Int64[7],
     sexp_of_t$2=Base_Int64[8],
     of_string$2=Base_Int64[9],
     to_string$2=Base_Int64[10],
     symbol$47=Base_Int64[11],
     symbol$48=Base_Int64[12],
     symbol$49=Base_Int64[13],
     symbol$50=Base_Int64[14],
     symbol$51=Base_Int64[15],
     symbol$52=Base_Int64[16],
     equal$2=Base_Int64[17],
     compare$2=Base_Int64[18],
     min$2=Base_Int64[19],
     max$2=Base_Int64[20],
     ascending$2=Base_Int64[21],
     descending$2=Base_Int64[22],
     between$2=Base_Int64[23],
     clamp_exn$2=Base_Int64[24],
     clamp$2=Base_Int64[25],
     comparator$2=Base_Int64[26],
     validate_lbound$2=Base_Int64[27],
     validate_ubound$2=Base_Int64[28],
     validate_bound$2=Base_Int64[29],
     pp$2=Base_Int64[30],
     validate_positive$2=Base_Int64[31],
     validate_non_negative$2=Base_Int64[32],
     validate_negative$2=Base_Int64[33],
     validate_non_positive$2=Base_Int64[34],
     is_positive$2=Base_Int64[35],
     is_non_negative$2=Base_Int64[36],
     is_negative$2=Base_Int64[37],
     is_non_positive$2=Base_Int64[38],
     sign$2=Base_Int64[39],
     Hex$2=Base_Int64[40],
     to_string_hum$2=Base_Int64[41],
     zero$2=Base_Int64[42],
     one$2=Base_Int64[43],
     minus_one$2=Base_Int64[44],
     symbol$53=Base_Int64[45],
     symbol$54=Base_Int64[46],
     symbol$55=Base_Int64[47],
     symbol$56=Base_Int64[48],
     neg$2=Base_Int64[49],
     symbol$57=Base_Int64[50],
     symbol$58=Base_Int64[51],
     symbol$59=Base_Int64[52],
     symbol$60=Base_Int64[53],
     rem$2=Base_Int64[54],
     symbol$61=Base_Int64[55],
     land$2=Base_Int64[56],
     lor$2=Base_Int64[57],
     lxor$2=Base_Int64[58],
     lnot$2=Base_Int64[59],
     lsl$2=Base_Int64[60],
     asr$2=Base_Int64[61],
     round$2=Base_Int64[62],
     round_towards_zero$2=Base_Int64[63],
     round_down$2=Base_Int64[64],
     round_up$2=Base_Int64[65],
     round_nearest$2=Base_Int64[66],
     abs$2=Base_Int64[67],
     succ$2=Base_Int64[68],
     pred$2=Base_Int64[69],
     pow$2=Base_Int64[70],
     bit_and$2=Base_Int64[71],
     bit_or$2=Base_Int64[72],
     bit_xor$2=Base_Int64[73],
     bit_not$2=Base_Int64[74],
     popcount$2=Base_Int64[75],
     shift_left$2=Base_Int64[76],
     shift_right$2=Base_Int64[77],
     decr$2=Base_Int64[78],
     incr$2=Base_Int64[79],
     of_int32_exn$2=Base_Int64[80],
     to_int32_exn$2=Base_Int64[81],
     of_int64_exn$2=Base_Int64[82],
     to_int64$2=Base_Int64[83],
     of_nativeint_exn$2=Base_Int64[84],
     to_nativeint_exn$2=Base_Int64[85],
     of_float_unchecked$2=Base_Int64[86],
     num_bits$2=Base_Int64[87],
     max_value$2=Base_Int64[88],
     min_value$2=Base_Int64[89],
     lsr$2=Base_Int64[90],
     shift_right_logical$2=Base_Int64[91],
     ceil_pow2$2=Base_Int64[92],
     floor_pow2$2=Base_Int64[93],
     ceil_log2$2=Base_Int64[94],
     floor_log2$2=Base_Int64[95],
     is_pow2$2=Base_Int64[96],
     O$2=Base_Int64[97],
     uniform$2=Splittable_random[6],
     log_uniform$2=Splittable_random[10][4],
     For_int64=
      For_integer
       ([0,
         of_float$2,
         to_float$2,
         of_int_exn$2,
         to_int_exn$2,
         hash_fold_t$2,
         hash$2,
         t_of_sexp$2,
         sexp_of_t$2,
         of_string$2,
         to_string$2,
         symbol$47,
         symbol$48,
         symbol$49,
         symbol$50,
         symbol$51,
         symbol$52,
         equal$2,
         compare$2,
         min$2,
         max$2,
         ascending$2,
         descending$2,
         between$2,
         clamp_exn$2,
         clamp$2,
         comparator$2,
         validate_lbound$2,
         validate_ubound$2,
         validate_bound$2,
         pp$2,
         validate_positive$2,
         validate_non_negative$2,
         validate_negative$2,
         validate_non_positive$2,
         is_positive$2,
         is_non_negative$2,
         is_negative$2,
         is_non_positive$2,
         sign$2,
         Hex$2,
         to_string_hum$2,
         zero$2,
         one$2,
         minus_one$2,
         symbol$53,
         symbol$54,
         symbol$55,
         symbol$56,
         neg$2,
         symbol$57,
         symbol$58,
         symbol$59,
         symbol$60,
         rem$2,
         symbol$61,
         land$2,
         lor$2,
         lxor$2,
         lnot$2,
         lsl$2,
         asr$2,
         round$2,
         round_towards_zero$2,
         round_down$2,
         round_up$2,
         round_nearest$2,
         abs$2,
         succ$2,
         pred$2,
         pow$2,
         bit_and$2,
         bit_or$2,
         bit_xor$2,
         bit_not$2,
         popcount$2,
         shift_left$2,
         shift_right$2,
         decr$2,
         incr$2,
         of_int32_exn$2,
         to_int32_exn$2,
         of_int64_exn$2,
         to_int64$2,
         of_nativeint_exn$2,
         to_nativeint_exn$2,
         of_float_unchecked$2,
         num_bits$2,
         max_value$2,
         min_value$2,
         lsr$2,
         shift_right_logical$2,
         ceil_pow2$2,
         floor_pow2$2,
         ceil_log2$2,
         floor_log2$2,
         is_pow2$2,
         O$2,
         uniform$2,
         log_uniform$2]),
     quickcheck_generator_int64=For_int64[7],
     int64_uniform=For_int64[6],
     int64_inclusive=For_int64[4],
     int64_uniform_inclusive=For_int64[1],
     int64_log_inclusive=For_int64[5],
     int64_log_uniform_inclusive=For_int64[2],
     of_float$3=Base_Nativeint[1],
     to_float$3=Base_Nativeint[2],
     of_int_exn$3=Base_Nativeint[3],
     to_int_exn$3=Base_Nativeint[4],
     hash_fold_t$3=Base_Nativeint[5],
     hash$3=Base_Nativeint[6],
     t_of_sexp$3=Base_Nativeint[7],
     sexp_of_t$3=Base_Nativeint[8],
     of_string$3=Base_Nativeint[9],
     to_string$3=Base_Nativeint[10],
     symbol$62=Base_Nativeint[11],
     symbol$63=Base_Nativeint[12],
     symbol$64=Base_Nativeint[13],
     symbol$65=Base_Nativeint[14],
     symbol$66=Base_Nativeint[15],
     symbol$67=Base_Nativeint[16],
     equal$3=Base_Nativeint[17],
     compare$3=Base_Nativeint[18],
     min$3=Base_Nativeint[19],
     max$3=Base_Nativeint[20],
     ascending$3=Base_Nativeint[21],
     descending$3=Base_Nativeint[22],
     between$3=Base_Nativeint[23],
     clamp_exn$3=Base_Nativeint[24],
     clamp$3=Base_Nativeint[25],
     comparator$3=Base_Nativeint[26],
     validate_lbound$3=Base_Nativeint[27],
     validate_ubound$3=Base_Nativeint[28],
     validate_bound$3=Base_Nativeint[29],
     pp$3=Base_Nativeint[30],
     validate_positive$3=Base_Nativeint[31],
     validate_non_negative$3=Base_Nativeint[32],
     validate_negative$3=Base_Nativeint[33],
     validate_non_positive$3=Base_Nativeint[34],
     is_positive$3=Base_Nativeint[35],
     is_non_negative$3=Base_Nativeint[36],
     is_negative$3=Base_Nativeint[37],
     is_non_positive$3=Base_Nativeint[38],
     sign$3=Base_Nativeint[39],
     Hex$3=Base_Nativeint[40],
     to_string_hum$3=Base_Nativeint[41],
     zero$3=Base_Nativeint[42],
     one$3=Base_Nativeint[43],
     minus_one$3=Base_Nativeint[44],
     symbol$68=Base_Nativeint[45],
     symbol$69=Base_Nativeint[46],
     symbol$70=Base_Nativeint[47],
     symbol$71=Base_Nativeint[48],
     neg$3=Base_Nativeint[49],
     symbol$72=Base_Nativeint[50],
     symbol$73=Base_Nativeint[51],
     symbol$74=Base_Nativeint[52],
     symbol$75=Base_Nativeint[53],
     rem$3=Base_Nativeint[54],
     symbol$76=Base_Nativeint[55],
     land$3=Base_Nativeint[56],
     lor$3=Base_Nativeint[57],
     lxor$3=Base_Nativeint[58],
     lnot$3=Base_Nativeint[59],
     lsl$3=Base_Nativeint[60],
     asr$3=Base_Nativeint[61],
     round$3=Base_Nativeint[62],
     round_towards_zero$3=Base_Nativeint[63],
     round_down$3=Base_Nativeint[64],
     round_up$3=Base_Nativeint[65],
     round_nearest$3=Base_Nativeint[66],
     abs$3=Base_Nativeint[67],
     succ$3=Base_Nativeint[68],
     pred$3=Base_Nativeint[69],
     pow$3=Base_Nativeint[70],
     bit_and$3=Base_Nativeint[71],
     bit_or$3=Base_Nativeint[72],
     bit_xor$3=Base_Nativeint[73],
     bit_not$3=Base_Nativeint[74],
     popcount$3=Base_Nativeint[75],
     shift_left$3=Base_Nativeint[76],
     shift_right$3=Base_Nativeint[77],
     decr$3=Base_Nativeint[78],
     incr$3=Base_Nativeint[79],
     of_int32_exn$3=Base_Nativeint[80],
     to_int32_exn$3=Base_Nativeint[81],
     of_int64_exn$3=Base_Nativeint[82],
     to_int64$3=Base_Nativeint[83],
     of_nativeint_exn$3=Base_Nativeint[84],
     to_nativeint_exn$3=Base_Nativeint[85],
     of_float_unchecked$3=Base_Nativeint[86],
     num_bits$3=Base_Nativeint[87],
     max_value$3=Base_Nativeint[88],
     min_value$3=Base_Nativeint[89],
     lsr$3=Base_Nativeint[90],
     shift_right_logical$3=Base_Nativeint[91],
     ceil_pow2$3=Base_Nativeint[92],
     floor_pow2$3=Base_Nativeint[93],
     ceil_log2$3=Base_Nativeint[94],
     floor_log2$3=Base_Nativeint[95],
     is_pow2$3=Base_Nativeint[96],
     O$3=Base_Nativeint[97],
     uniform$3=Splittable_random[7],
     log_uniform$3=Splittable_random[10][5],
     For_nativeint=
      For_integer
       ([0,
         of_float$3,
         to_float$3,
         of_int_exn$3,
         to_int_exn$3,
         hash_fold_t$3,
         hash$3,
         t_of_sexp$3,
         sexp_of_t$3,
         of_string$3,
         to_string$3,
         symbol$62,
         symbol$63,
         symbol$64,
         symbol$65,
         symbol$66,
         symbol$67,
         equal$3,
         compare$3,
         min$3,
         max$3,
         ascending$3,
         descending$3,
         between$3,
         clamp_exn$3,
         clamp$3,
         comparator$3,
         validate_lbound$3,
         validate_ubound$3,
         validate_bound$3,
         pp$3,
         validate_positive$3,
         validate_non_negative$3,
         validate_negative$3,
         validate_non_positive$3,
         is_positive$3,
         is_non_negative$3,
         is_negative$3,
         is_non_positive$3,
         sign$3,
         Hex$3,
         to_string_hum$3,
         zero$3,
         one$3,
         minus_one$3,
         symbol$68,
         symbol$69,
         symbol$70,
         symbol$71,
         neg$3,
         symbol$72,
         symbol$73,
         symbol$74,
         symbol$75,
         rem$3,
         symbol$76,
         land$3,
         lor$3,
         lxor$3,
         lnot$3,
         lsl$3,
         asr$3,
         round$3,
         round_towards_zero$3,
         round_down$3,
         round_up$3,
         round_nearest$3,
         abs$3,
         succ$3,
         pred$3,
         pow$3,
         bit_and$3,
         bit_or$3,
         bit_xor$3,
         bit_not$3,
         popcount$3,
         shift_left$3,
         shift_right$3,
         decr$3,
         incr$3,
         of_int32_exn$3,
         to_int32_exn$3,
         of_int64_exn$3,
         to_int64$3,
         of_nativeint_exn$3,
         to_nativeint_exn$3,
         of_float_unchecked$3,
         num_bits$3,
         max_value$3,
         min_value$3,
         lsr$3,
         shift_right_logical$3,
         ceil_pow2$3,
         floor_pow2$3,
         ceil_log2$3,
         floor_log2$3,
         is_pow2$3,
         O$3,
         uniform$3,
         log_uniform$3]),
     quickcheck_generator_nativeint=For_nativeint[7],
     _p_=For_nativeint[6],
     _q_=For_nativeint[4],
     _r_=For_nativeint[1],
     _s_=For_nativeint[5],
     _t_=For_nativeint[2],
     float_zero_exponent=caml_call1(Base_Float[122],0.),
     float_zero_mantissa=caml_call1(Base_Float[123],0.),
     float_max_positive_subnormal_value=
      caml_call2(Base_Float[56],759637122,Base_Float[52]),
     float_subnormal_exponent=caml_call1(Base_Float[122],Base_Float[51]),
     float_min_subnormal_mantissa=caml_call1(Base_Float[123],Base_Float[51]),
     float_max_subnormal_mantissa=
      caml_call1(Base_Float[123],float_max_positive_subnormal_value),
     _u_=Base_Float[50],
     lower_bound=caml_call1(Base_Float[122],Base_Float[52]),
     upper_bound=caml_call1(Base_Float[122],_u_),
     float_max_nan_mantissa=caml_call1(Base_Float[123],_u_),
     float_inf_exponent=caml_call1(Base_Float[122],Base_Float[38]),
     float_inf_mantissa=caml_call1(Base_Float[123],Base_Float[38]),
     float_nan_exponent=caml_call1(Base_Float[122],Base_Float[37]),
     float_min_nan_mantissa=caml_call1(Base_Int63[68],float_inf_mantissa),
     float_num_mantissa_bits=52;
    function _v_(num_bits)
     {function _c6_(bits)
       {var _c__=caml_call2(Base_Int[46],float_num_mantissa_bits,num_bits);
        return caml_call2(Base_Int63[76],bits,_c__)}
      var
       _c7_=caml_call2(Base_Int63[76],Base_Int63[43],num_bits),
       _c8_=caml_call1(Base_Int63[69],_c7_),
       _c9_=caml_call2(For_int63[4],Base_Int63[42],_c8_);
      return caml_call2(For_monad[11][4][3],_c9_,_c6_)}
    var
     _w_=caml_call2(For_int[1],0,float_num_mantissa_bits),
     float_normal_mantissa=caml_call2(For_monad[11][4][2],_w_,_v_),
     upper_bound$0=caml_call1(Base_Float[122],1.),
     _D_=0;
    function _x_(offset){return caml_call2(Base_Int[45],upper_bound$0,offset)}
    var
     _y_=caml_call2(Base_Int[46],upper_bound,upper_bound$0),
     _z_=caml_call2(For_int[5],0,_y_),
     _E_=[0,caml_call2(For_monad[11][4][3],_z_,_x_),_D_];
    function _A_(offset){return caml_call2(Base_Int[46],upper_bound$0,offset)}
    var
     _B_=caml_call2(Base_Int[46],upper_bound$0,lower_bound),
     _C_=caml_call2(For_int[5],0,_B_),
     float_exponent=union([0,caml_call2(For_monad[11][4][3],_C_,_A_),_E_]);
    function _F_(negative)
     {return caml_call3
              (Base_Float[120],
               negative,
               float_zero_exponent,
               float_zero_mantissa)}
    var
     float_zero=caml_call2(For_monad[11][4][3],quickcheck_generator_bool,_F_),
     let_syntax_004=caml_call1(For_monad[11][1],float_subnormal_exponent),
     let_syntax_005=
      caml_call2
       (For_int63[5],
        float_min_subnormal_mantissa,
        float_max_subnormal_mantissa);
    function _G_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[120],negative,exponent,mantissa)}
    var
     _H_=caml_call2(For_monad[11][4][4],let_syntax_004,let_syntax_005),
     _I_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_H_),
     float_subnormal=caml_call2(For_monad[11][4][3],_I_,_G_);
    function _J_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[120],negative,exponent,mantissa)}
    var
     _K_=caml_call2(For_monad[11][4][4],float_exponent,float_normal_mantissa),
     _L_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_K_),
     float_normal=caml_call2(For_monad[11][4][3],_L_,_J_);
    function _M_(negative)
     {return caml_call3
              (Base_Float[120],negative,float_inf_exponent,float_inf_mantissa)}
    var
     float_infinite=
      caml_call2(For_monad[11][4][3],quickcheck_generator_bool,_M_),
     let_syntax_010=caml_call1(For_monad[11][1],float_nan_exponent),
     let_syntax_011=
      caml_call2(For_int63[4],float_min_nan_mantissa,float_max_nan_mantissa);
    function _N_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[120],negative,exponent,mantissa)}
    var
     _O_=caml_call2(For_monad[11][4][4],let_syntax_010,let_syntax_011),
     _P_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_O_),
     float_nan=caml_call2(For_monad[11][4][3],_P_,_N_);
    function float_of_class(c)
     {switch(c)
       {case 0:return float_infinite;
        case 1:return float_nan;
        case 2:return float_normal;
        case 3:return float_subnormal;
        default:return float_zero}}
    function float_matching_classes(filter)
     {function _c3_(c)
       {if(caml_call1(filter,c))
         {var _c4_=float_of_class(c);
          switch(c)
           {case 0:var _c5_=1.;break;
            case 1:var _c5_=1.;break;
            case 2:var _c5_=100.;break;
            case 3:var _c5_=10.;break;
            default:var _c5_=1.}
          return [0,[0,_c5_,_c4_]]}
        return 0}
      return weighted_union
              (caml_call2(Base_List[119],Base_Float[113][2],_c3_))}
    var
     float_finite=
      float_matching_classes(function(param){return 2 <= param?1:0}),
     float_without_nan=
      float_matching_classes(function(param){return 1 === param?0:1}),
     quickcheck_generator_float=
      float_matching_classes(function(param){return 1}),
     float_finite_non_zero=
      float_matching_classes
       (function(param)
         {var switcher=param - 2 | 0;return 1 < switcher >>> 0?0:1});
    function _Q_(t){return caml_call1(Base_Float[102],t)}
    var
     float_strictly_positive=
      caml_call2(For_monad[11][4][3],float_finite_non_zero,_Q_);
    function _R_(t)
     {var _c2_=caml_call1(Base_Float[102],t);
      return caml_call1(Base[201],_c2_)}
    var
     float_strictly_negative=
      caml_call2(For_monad[11][4][3],float_finite_non_zero,_R_);
    function _S_(t){return caml_call1(Base_Float[102],t)}
    var
     float_positive_or_zero=
      caml_call2(For_monad[11][4][3],float_finite,_S_);
    function _T_(t)
     {var _c1_=caml_call1(Base_Float[102],t);
      return caml_call1(Base[201],_c1_)}
    var
     float_negative_or_zero=
      caml_call2(For_monad[11][4][3],float_finite,_T_);
    function float_uniform_exclusive(lower_bound,upper_bound)
     {var
       _cT_=1 - caml_call1(Base_Float[115],lower_bound),
       _cU_=_cT_ || 1 - caml_call1(Base_Float[115],upper_bound);
      if(_cU_)
       {var
         _cV_=[0,[1,[0,_U_,[0,caml_call1(Base[109],upper_bound),0]]],0],
         _cW_=[0,[1,[0,_V_,[0,caml_call1(Base[109],lower_bound),0]]],_cV_],
         _cX_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Float_uniform_exclusive_bounds_are_not_finite),
            _cW_]];
        caml_call1(Base[207],_cX_)}
      var
       lower_inclusive=caml_call2(Base_Float[56],19067,lower_bound),
       upper_inclusive=caml_call2(Base_Float[56],759637122,upper_bound);
      if(caml_call2(Base_Float[103][10],lower_inclusive,upper_inclusive))
       {var
         _cY_=[0,[1,[0,_W_,[0,caml_call1(Base[109],upper_bound),0]]],0],
         _cZ_=[0,[1,[0,_X_,[0,caml_call1(Base[109],lower_bound),0]]],_cY_],
         _c0_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Float_uniform_exclusive_requested_range_is_empty),
            _cZ_]];
        caml_call1(Base[207],_c0_)}
      return create$0
              (function(param,random)
                {return caml_call3
                         (Splittable_random[8],
                          random,
                          lower_inclusive,
                          upper_inclusive)})}
    function float_inclusive(lower_bound,upper_bound)
     {var
       _cR_=[0,[0,0.9,float_uniform_exclusive(lower_bound,upper_bound)],0],
       _cS_=[0,[0,0.05,caml_call1(For_monad[11][1],upper_bound)],_cR_];
      return weighted_union
              ([0,[0,0.05,caml_call1(For_monad[11][1],lower_bound)],_cS_])}
    function string_with_length_of(char_gen,length)
     {var _cQ_=list_with_length(char_gen,length);
      return map(_cQ_,Base_String[106])}
    function string_of(char_gen)
     {return bind
              (small_positive_or_zero_int,
               function(length){return string_with_length_of(char_gen,length)})}
    function string_non_empty_of(char_gen)
     {return bind
              (small_strictly_positive_int,
               function(length){return string_with_length_of(char_gen,length)})}
    var
     quickcheck_generator_string=string_of(quickcheck_generator_char),
     string_non_empty=string_non_empty_of(quickcheck_generator_char);
    function string_with_length(length)
     {return string_with_length_of(quickcheck_generator_char,length)}
    function sexp_of(atom)
     {return fixed_point
              (function(self)
                {function _cJ_(size)
                  {function _cK_(param)
                    {if(0 === param)
                      {var _cN_=function(atom){return [0,atom]};
                       return caml_call2(For_monad[11][4][3],atom,_cN_)}
                     function _cO_(list){return [1,list]}
                     var _cP_=quickcheck_generator_list(self);
                     return caml_call2(For_monad[11][4][3],_cP_,_cO_)}
                   var
                    _cL_=caml_call2(Base[165],size,1),
                    _cM_=caml_call2(For_int[2],0,_cL_);
                   return caml_call2(For_monad[11][4][2],_cM_,_cK_)}
                 return caml_call2(For_monad[11][4][2],size,_cJ_)})}
    var sexp=sexp_of(quickcheck_generator_string);
    function map_tree_using_comparator(comparator,key_gen,data_gen)
     {function _cD_(keys)
       {var keys$0=caml_call2(Base_List[108],comparator[1],keys);
        function _cF_(data)
         {var
           _cH_=caml_call2(Base_List[91],keys$0,data),
           _cI_=caml_call2(Base_Map[98][3][7],comparator,_cH_);
          return caml_call1(For_monad[11][1],_cI_)}
        var _cG_=list_with_length(data_gen,caml_call1(Base_List[6],keys$0));
        return caml_call2(For_monad[11][4][2],_cG_,_cF_)}
      var _cE_=quickcheck_generator_list(key_gen);
      return caml_call2(For_monad[11][4][2],_cE_,_cD_)}
    function set_tree_using_comparator(comparator,elt_gen)
     {var _cC_=caml_call1(Base_Set[71][3][53],comparator);
      return map(quickcheck_generator_list(elt_gen),_cC_)}
    function map_t_m(m,key_gen,data_gen)
     {var
       comparator=m[1],
       _cB_=map_tree_using_comparator(comparator,key_gen,data_gen);
      return map(_cB_,caml_call1(Base_Map[98][89],comparator))}
    function set_t_m(m,elt_gen)
     {var comparator=m[1],_cA_=set_tree_using_comparator(comparator,elt_gen);
      return map(_cA_,caml_call1(Base_Set[71][62],comparator))}
    var
     Base_quickcheck_Generator=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       int63,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       sexp,
       quickcheck_generator_option,
       quickcheck_generator_list,
       either,
       result,
       fn,
       map_t_m,
       set_t_m,
       map_tree_using_comparator,
       set_tree_using_comparator,
       of_list,
       union,
       both,
       symbol,
       symbol$0,
       symbol$1,
       apply,
       map2,
       map3,
       For_applicative[13],
       _f_,
       _g_,
       For_monad[3],
       bind,
       return$0,
       map,
       _d_,
       _c_,
       all,
       all_unit,
       For_monad[11],
       size,
       with_size,
       sizes,
       filter,
       filter_map,
       recursive_union,
       fixed_point,
       of_lazy,
       of_weighted_list,
       weighted_union,
       weighted_recursive_union,
       small_positive_or_zero_int,
       small_strictly_positive_int,
       int_uniform,
       int32_uniform,
       int63_uniform,
       int64_uniform,
       _p_,
       int_inclusive,
       int32_inclusive,
       int63_inclusive,
       int64_inclusive,
       _q_,
       int_uniform_inclusive,
       int32_uniform_inclusive,
       int63_uniform_inclusive,
       int64_uniform_inclusive,
       _r_,
       int_log_uniform_inclusive,
       int32_log_uniform_inclusive,
       int63_log_uniform_inclusive,
       int64_log_uniform_inclusive,
       _t_,
       int_log_inclusive,
       int32_log_inclusive,
       int63_log_inclusive,
       int64_log_inclusive,
       _s_,
       float_inclusive,
       float_uniform_exclusive,
       float_without_nan,
       float_finite,
       float_strictly_positive,
       float_strictly_negative,
       float_positive_or_zero,
       float_negative_or_zero,
       float_of_class,
       char_lowercase,
       char_uppercase,
       char_digit,
       char_alpha,
       char_alphanum,
       char_whitespace,
       char_print,
       char_uniform_inclusive,
       string_non_empty,
       string_with_length,
       string_of,
       string_non_empty_of,
       string_with_length_of,
       sexp_of,
       list_non_empty,
       list_with_length,
       list_filtered,
       list_permutations,
       perturb,
       create$0,
       generate];
    caml_register_global
     (102,Base_quickcheck_Generator,"Base_quickcheck__Generator");
    function quickcheck_shrinker_float(param){return Base_Sequence[38]}
    function create$1(_cz_){return _cz_}
    function shrink(_cy_){return _cy_}
    function map$2(t,f,f_inverse)
     {return function(x)
       {var _cx_=caml_call1(t,caml_call1(f_inverse,x));
        return caml_call2(Base_Sequence[32],_cx_,f)}}
    function of_lazy$0(lazy_t)
     {return function(x)
       {var
         _ct_=
          [246,
           function(_cu_)
            {var
              _cv_=caml_obj_tag(lazy_t),
              _cw_=
               250 === _cv_
                ?lazy_t[1]
                :246 === _cv_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
             return caml_call1(_cw_,x)}];
        return caml_call1(Base_Sequence[103],_ct_)}}
    function fixed_point$0(of_shrinker)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_cs_){return caml_call1(of_shrinker,of_lazy$0(lazy_t))}]);
      return of_lazy$0(lazy_t)}
    function both$0(fst_t,snd_t)
     {return function(param)
       {var snd=param[2],fst=param[1],_cl_=0;
        function _cm_(snd){return [0,fst,snd]}
        var
         _cn_=caml_call1(snd_t,snd),
         _co_=[0,caml_call2(Base_Sequence[32],_cn_,_cm_),_cl_];
        function _cp_(fst){return [0,fst,snd]}
        var
         _cq_=caml_call1(fst_t,fst),
         _cr_=[0,caml_call2(Base_Sequence[32],_cq_,_cp_),_co_];
        return caml_call1(Base_Sequence[66],_cr_)}}
    function quickcheck_shrinker_option(value_t)
     {return function(param)
       {if(param)
         {var
           value=param[1],
           _ch_=Base_Option[28],
           _ci_=caml_call1(value_t,value),
           _cj_=caml_call2(Base_Sequence[32],_ci_,_ch_),
           _ck_=caml_call1(Base_Sequence[97],0);
          return caml_call2(Base_Sequence[61],_ck_,_cj_)}
        return Base_Sequence[38]}}
    function quickcheck_shrinker_list(elt_t)
     {return fixed_point$0
              (function(list_t)
                {return function(param)
                  {if(param)
                    {var
                      tail=param[2],
                      head=param[1],
                      _b$_=0,
                      _ca_=function(tail){return [0,head,tail]},
                      _cb_=caml_call1(list_t,tail),
                      _cc_=[0,caml_call2(Base_Sequence[32],_cb_,_ca_),_b$_],
                      _cd_=function(head){return [0,head,tail]},
                      _ce_=caml_call1(elt_t,head),
                      _cf_=[0,caml_call2(Base_Sequence[32],_ce_,_cd_),_cc_],
                      _cg_=[0,caml_call1(Base_Sequence[97],tail),_cf_];
                     return caml_call1(Base_Sequence[66],_cg_)}
                   return Base_Sequence[38]}})}
    var
     _Y_=Base_String[15],
     _Z_=Base_String[106],
     quickcheck_shrinker_string=
      map$2(quickcheck_shrinker_list(quickcheck_shrinker_float),_Z_,_Y_),
     sexp$0=
      fixed_point$0
       (function(shrinker)
         {return function(param)
           {if(0 === param[0])return Base_Sequence[38];
            var
             l=param[1],
             _b9_=caml_call1(quickcheck_shrinker_list(shrinker),l),
             _b__=Base_Sequence[32],
             shrink_list=caml_call2(_b__,_b9_,function(l){return [1,l]}),
             shrink_tree=caml_call1(Base_Sequence[102],l);
            return caml_call1
                    (Base_Sequence[66],[0,shrink_list,[0,shrink_tree,0]])}});
    function either$0(fst_t,snd_t)
     {return function(either)
       {if(0 === either[0])
         {var fst=either[1],_b5_=Base_Either[16],_b6_=caml_call1(fst_t,fst);
          return caml_call2(Base_Sequence[32],_b6_,_b5_)}
        var snd=either[1],_b7_=Base_Either[17],_b8_=caml_call1(snd_t,snd);
        return caml_call2(Base_Sequence[32],_b8_,_b7_)}}
    function result$0(ok_t,err_t)
     {function _b3_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      function _b4_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return map$2(either$0(ok_t,err_t),_b4_,_b3_)}
    function map_tree_using_comparator$0(comparator,key_t,data_t)
     {return function(tree)
       {var alist=caml_call2(Base_Map[98][3][61],0,tree);
        function _bT_(param)
         {var k=param[1];
          return caml_call3(Base_Map[98][3][36],comparator,tree,k)}
        var
         _bU_=caml_call1(Base_Sequence[102],alist),
         drop_keys=caml_call2(Base_Sequence[32],_bU_,_bT_);
        function _bV_(param)
         {var
           data=param[2],
           key=param[1],
           tree$0=caml_call3(Base_Map[98][3][36],comparator,tree,key);
          function _b1_(smaller_key)
           {var
             match=
              caml_call4
               (Base_Map[98][3][26],comparator,tree$0,smaller_key,data);
            if(typeof match === "number")return 0;
            var tree=match[2];
            return [0,tree]}
          var _b2_=caml_call1(key_t,key);
          return caml_call2(Base_Sequence[76],_b2_,_b1_)}
        var
         _bW_=caml_call2(Base_List[72],alist,_bV_),
         shrink_keys=caml_call1(Base_Sequence[66],_bW_);
        function _bX_(param)
         {var data=param[2],key=param[1];
          function _bZ_(smaller_data)
           {return caml_call4
                    (Base_Map[98][3][28],comparator,tree,key,smaller_data)}
          var _b0_=caml_call1(data_t,data);
          return caml_call2(Base_Sequence[32],_b0_,_bZ_)}
        var
         _bY_=caml_call2(Base_List[72],alist,_bX_),
         shrink_data=caml_call1(Base_Sequence[66],_bY_);
        return caml_call1
                (Base_Sequence[66],
                 [0,drop_keys,[0,shrink_keys,[0,shrink_data,0]]])}}
    function set_tree_using_comparator$0(comparator,elt_t)
     {return function(tree)
       {var list=caml_call1(Base_Set[71][3][15],tree);
        function _bN_(elt)
         {return caml_call3(Base_Set[71][3][20],comparator,tree,elt)}
        var
         _bO_=caml_call1(Base_Sequence[102],list),
         drop_elts=caml_call2(Base_Sequence[32],_bO_,_bN_);
        function _bP_(elt)
         {var tree$0=caml_call3(Base_Set[71][3][20],comparator,tree,elt);
          function _bR_(smaller_elt)
           {var
             match=
              caml_call3(Base_Set[71][3][18],comparator,tree$0,smaller_elt);
            return 0 === match
                    ?[0,
                      caml_call3
                       (Base_Set[71][3][19],comparator,tree$0,smaller_elt)]
                    :0}
          var _bS_=caml_call1(elt_t,elt);
          return caml_call2(Base_Sequence[76],_bS_,_bR_)}
        var
         _bQ_=caml_call2(Base_List[72],list,_bP_),
         shrink_elts=caml_call1(Base_Sequence[66],_bQ_);
        return caml_call1(Base_Sequence[66],[0,drop_elts,[0,shrink_elts,0]])}}
    function map_t(key_t,data_t)
     {return function(map_t)
       {var
         comparator=caml_call1(Base_Map[4],map_t),
         _bL_=Base_Map[98][66],
         _bM_=caml_call1(Base_Map[98][89],comparator),
         t=
          map$2
           (map_tree_using_comparator$0(comparator,key_t,data_t),_bM_,_bL_);
        return caml_call1(t,map_t)}}
    function set_t(elt_t)
     {return function(set_t)
       {var
         comparator=caml_call1(Base_Set[4],set_t),
         _bJ_=Base_Set[71][46],
         _bK_=caml_call1(Base_Set[71][62],comparator),
         t=map$2(set_tree_using_comparator$0(comparator,elt_t),_bK_,_bJ_);
        return caml_call1(t,set_t)}}
    var
     Base_quickcheck_Shrinker=
      [0,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       sexp$0,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list,
       both$0,
       either$0,
       result$0,
       map_t,
       set_t,
       map_tree_using_comparator$0,
       set_tree_using_comparator$0,
       map$2,
       fixed_point$0,
       of_lazy$0,
       create$1,
       shrink];
    caml_register_global
     (104,Base_quickcheck_Shrinker,"Base_quickcheck__Shrinker");
    var Base_quickcheck_Test_intf=[0];
    caml_register_global
     (105,Base_quickcheck_Test_intf,"Base_quickcheck__Test_intf");
    function sexp_of_t$4(param)
     {if(param)
       {var v0=param[1],v0$0=caml_call1(Base[153],v0);
        return [1,[0,___,[0,v0$0,0]]]}
      return _$_}
    var Seed=[0,sexp_of_t$4];
    function sizes$0(r){return r[4]}
    function shrink_count(r){return r[3]}
    function test_count(r){return r[2]}
    function seed(r){return r[1]}
    function _aa_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _ab_=0,
     sizes$1=[0,function(param){return 0},cst_sizes,_ab_,sizes$0,_aa_];
    function _ac_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _ad_=0,
     shrink_count$0=
      [0,function(param){return 0},cst_shrink_count,_ad_,shrink_count,_ac_];
    function _ae_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _af_=0,
     test_count$0=
      [0,function(param){return 0},cst_test_count,_af_,test_count,_ae_];
    function _ag_(r,v){return [0,v,r[2],r[3],r[4]]}
    var _ah_=0,seed$0=[0,function(param){return 0},cst_seed,_ah_,seed,_ag_];
    function make_creator
     (seed_fun,test_count_fun,shrink_count_fun,sizes_fun,compile_acc)
     {var
       match=caml_call2(seed_fun,seed$0,compile_acc),
       compile_acc$0=match[2],
       seed_gen=match[1],
       match$0=caml_call2(test_count_fun,test_count$0,compile_acc$0),
       compile_acc$1=match$0[2],
       test_count_gen=match$0[1],
       match$1=caml_call2(shrink_count_fun,shrink_count$0,compile_acc$1),
       compile_acc$2=match$1[2],
       shrink_count_gen=match$1[1],
       match$2=caml_call2(sizes_fun,sizes$1,compile_acc$2),
       compile_acc$3=match$2[2],
       sizes_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 seed=caml_call1(seed_gen,acc),
                 test_count=caml_call1(test_count_gen,acc),
                 shrink_count=caml_call1(shrink_count_gen,acc),
                 sizes=caml_call1(sizes_gen,acc);
                return [0,seed,test_count,shrink_count,sizes]},
              compile_acc$3]}
    function create$2(seed,test_count,shrink_count,sizes)
     {return [0,seed,test_count,shrink_count,sizes]}
    function map$3(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bG_=caml_call1(sizes_fun,sizes$1),
       _bH_=caml_call1(shrink_count_fun,shrink_count$0),
       _bI_=caml_call1(test_count_fun,test_count$0);
      return [0,caml_call1(seed_fun,seed$0),_bI_,_bH_,_bG_]}
    function iter(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {caml_call1(seed_fun,seed$0);
      caml_call1(test_count_fun,test_count$0);
      caml_call1(shrink_count_fun,shrink_count$0);
      return caml_call1(sizes_fun,sizes$1)}
    function fold(init,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {return caml_call2
              (sizes_fun,
               caml_call2
                (shrink_count_fun,
                 caml_call2
                  (test_count_fun,
                   caml_call2(seed_fun,init,seed$0),
                   test_count$0),
                 shrink_count$0),
               sizes$1)}
    function map_poly(record)
     {var
       _bD_=[0,caml_call1(record[1],sizes$1),0],
       _bE_=[0,caml_call1(record[1],shrink_count$0),_bD_],
       _bF_=[0,caml_call1(record[1],test_count$0),_bE_];
      return [0,caml_call1(record[1],seed$0),_bF_]}
    function for_all(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bA_=caml_call1(seed_fun,seed$0),
       _bB_=_bA_?caml_call1(test_count_fun,test_count$0):_bA_,
       _bC_=_bB_?caml_call1(shrink_count_fun,shrink_count$0):_bB_;
      return _bC_?caml_call1(sizes_fun,sizes$1):_bC_}
    function exists(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bz_=caml_call1(seed_fun,seed$0),
       _bx_=_bz_ || caml_call1(test_count_fun,test_count$0),
       _by_=_bx_ || caml_call1(shrink_count_fun,shrink_count$0);
      return _by_?_by_:caml_call1(sizes_fun,sizes$1)}
    function to_list(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bu_=[0,caml_call1(sizes_fun,sizes$1),0],
       _bv_=[0,caml_call1(shrink_count_fun,shrink_count$0),_bu_],
       _bw_=[0,caml_call1(test_count_fun,test_count$0),_bv_];
      return [0,caml_call1(seed_fun,seed$0),_bw_]}
    function iter$0(record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {caml_call3(seed_fun,seed$0,record,record[1]);
      caml_call3(test_count_fun,test_count$0,record,record[2]);
      caml_call3(shrink_count_fun,shrink_count$0,record,record[3]);
      return caml_call3(sizes_fun,sizes$1,record,record[4])}
    function fold$0
     (record,init,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var _br_=record[4],_bs_=record[3],_bt_=record[2];
      return caml_call4
              (sizes_fun,
               caml_call4
                (shrink_count_fun,
                 caml_call4
                  (test_count_fun,
                   caml_call4(seed_fun,init,seed$0,record,record[1]),
                   test_count$0,
                   record,
                   _bt_),
                 shrink_count$0,
                 record,
                 _bs_),
               sizes$1,
               record,
               _br_)}
    function for_all$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bo_=caml_call3(seed_fun,seed$0,record,record[1]),
       _bp_=_bo_?caml_call3(test_count_fun,test_count$0,record,record[2]):_bo_,
       _bq_=
        _bp_?caml_call3(shrink_count_fun,shrink_count$0,record,record[3]):_bp_;
      return _bq_?caml_call3(sizes_fun,sizes$1,record,record[4]):_bq_}
    function exists$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bn_=caml_call3(seed_fun,seed$0,record,record[1]),
       _bl_=_bn_ || caml_call3(test_count_fun,test_count$0,record,record[2]),
       _bm_=
        _bl_
        ||
        caml_call3(shrink_count_fun,shrink_count$0,record,record[3]);
      return _bm_?_bm_:caml_call3(sizes_fun,sizes$1,record,record[4])}
    function to_list$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bi_=[0,caml_call3(sizes_fun,sizes$1,record,record[4]),0],
       _bj_=
        [0,caml_call3(shrink_count_fun,shrink_count$0,record,record[3]),_bi_],
       _bk_=[0,caml_call3(test_count_fun,test_count$0,record,record[2]),_bj_];
      return [0,caml_call3(seed_fun,seed$0,record,record[1]),_bk_]}
    function map$4(record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bf_=caml_call3(sizes_fun,sizes$1,record,record[4]),
       _bg_=caml_call3(shrink_count_fun,shrink_count$0,record,record[3]),
       _bh_=caml_call3(test_count_fun,test_count$0,record,record[2]);
      return [0,caml_call3(seed_fun,seed$0,record,record[1]),_bh_,_bg_,_bf_]}
    function set_all_mutable_fields(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$0,
       for_all$0,
       exists$0,
       to_list$0,
       map$4,
       set_all_mutable_fields];
    function sexp_of_t$5(param)
     {var
       v_sizes=param[4],
       v_shrink_count=param[3],
       v_test_count=param[2],
       v_seed=param[1],
       _be_=Base[115],
       match=caml_call2(Base_Sequence[86],v_sizes,100),
       suffix=match[2],
       prefix=match[1],
       prefix$0=caml_call2(Base_List[72],prefix,_be_),
       match$0=caml_call1(Base_Sequence[6],suffix),
       bnds=0,
       suffix$0=0 === match$0?[0,caml_call1(Sexplib0_Sexp_conv[7],cst),0]:0,
       arg=[1,caml_call2(Base[164],prefix$0,suffix$0)],
       bnds$0=[0,[1,[0,_ai_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Base[115],v_shrink_count),
       bnds$1=[0,[1,[0,_aj_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Base[115],v_test_count),
       bnds$2=[0,[1,[0,_ak_,[0,arg$1,0]]],bnds$1],
       arg$2=caml_call1(Seed[1],v_seed),
       bnds$3=[0,[1,[0,_al_,[0,arg$2,0]]],bnds$2];
      return [1,bnds$3]}
    var
     _ao_=caml_call5(Base_List[114],0,_an_,_am_,0,30),
     default_config=[0,_ap_,10000,10000,caml_call1(Base_Sequence[95],_ao_)],
     lazy_nondeterministic_state=
      [246,function(_bd_){return caml_call2(Base_Random[18][3],0,0)}];
    function with_sample(f,opt,_a__,generator)
     {if(opt)var sth=opt[1],config=sth;else var config=default_config;
      if(_a__)var sth$0=_a__[1],examples=sth$0;else var examples=0;
      var match=config[1];
      if(match)
       var
        string=match[1],
        _a2_=runtime.Base_hash_string(string),
        random=caml_call1(Splittable_random[1][2],_a2_);
      else
       var
        _a3_=caml_obj_tag(lazy_nondeterministic_state),
        _a4_=
         250 === _a3_
          ?lazy_nondeterministic_state[1]
          :246 === _a3_
            ?caml_call1(CamlinternalLazy[2],lazy_nondeterministic_state)
            :lazy_nondeterministic_state,
        random=caml_call1(Splittable_random[1][1],_a4_);
      function _a5_(param)
       {var
         number_of_size_values=param[2],
         sizes=param[1],
         match=caml_call2(Base[189],number_of_size_values,config[2]);
        if(0 === match)
         {var match$0=caml_call1(Base_Sequence[39],sizes);
          if(match$0)
           {var match$1=match$0[1],remaining_sizes=match$1[2],size=match$1[1];
            return [0,
                    [0,
                     size,
                     [0,
                      remaining_sizes,
                      caml_call2(Base[165],number_of_size_values,1)]]]}
          var
           _ba_=
            [0,
             [1,[0,_aq_,[0,caml_call1(Base[115],number_of_size_values),0]]],
             0],
           _bb_=[0,[1,[0,_ar_,[0,caml_call1(Base[115],config[2]),0]]],_ba_],
           _bc_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Base_quickcheck_Test_run_insufficient_size_values_for_test_count),
              _bb_]];
          return caml_call1(Base[207],_bc_)}
        return 0}
      var
       _a6_=caml_call2(Base_Sequence[42],[0,config[4],0],_a5_),
       _a7_=Base_Sequence[32],
       _a8_=
        caml_call2
         (_a7_,_a6_,function(size){return generate(generator,size,random)}),
       _a9_=caml_call1(Base_Sequence[102],examples),
       sequence=caml_call2(Base_Sequence[61],_a9_,_a8_);
      function _a$_(param){return caml_call1(f,sequence)}
      return caml_call2(Base_Or_error[29],0,_a$_)}
    function run(f,opt,_aR_,m)
     {if(opt)var sth=opt[1],config=sth;else var config=default_config;
      if(_aR_)var sth$0=_aR_[1],examples=sth$0;else var examples=0;
      var _aS_=m[2],_aT_=[0,examples],_aU_=[0,config];
      return with_sample
              (function(sequence)
                {function _aW_(param,input)
                  {function _a0_(param){return caml_call1(f,input)}
                   var
                    _a1_=[0,caml_call1(Base_Backtrace[6][1],0)],
                    match=caml_call2(Base_Or_error[29],_a1_,_a0_);
                   if(0 === match[0])return _as_;
                   var error=match[1];
                   return [1,[0,input,error]]}
                 var match$2=caml_call3(Base_Sequence[9],sequence,0,_aW_);
                 if(0 === match$2[0])return _at_;
                 var
                  match$3=match$2[1],
                  error$1=match$3[2],
                  input$0=match$3[1],
                  shrinker=m[3],
                  shrink_count$1=config[3],
                  alternates$2=caml_call1(shrinker,input$0),
                  shrink_count=shrink_count$1,
                  alternates=alternates$2,
                  input=input$0,
                  error=error$1;
                 for(;;)
                  {if(0 !== shrink_count)
                    {var
                      shrink_count$0=caml_call2(Base[166],shrink_count,1),
                      match=caml_call1(Base_Sequence[39],alternates);
                     if(match)
                      {var
                        match$0=match[1],
                        alternates$0=match$0[2],
                        alternate=match$0[1],
                        _aV_=
                         function(alternate)
                           {return function(param){return caml_call1(f,alternate)}}
                          (alternate),
                        match$1=caml_call2(Base_Or_error[29],0,_aV_);
                       if(0 === match$1[0])
                        {var shrink_count=shrink_count$0,alternates=alternates$0;
                         continue}
                       var
                        error$0=match$1[1],
                        alternates$1=caml_call1(shrinker,alternate),
                        shrink_count=shrink_count$0,
                        alternates=alternates$1,
                        input=alternate,
                        error=error$0;
                       continue}}
                   var
                    _aX_=
                     [0,[1,[0,_au_,[0,caml_call1(Base_Error[6],error),0]]],0],
                    _aY_=[0,[1,[0,_av_,[0,caml_call1(m[1],input),0]]],_aX_],
                    _aZ_=
                     [1,
                      [0,
                       caml_call1
                        (Sexplib0_Sexp_conv[7],
                         cst_Base_quickcheck_Test_run_test_failed),
                       _aY_]];
                   return caml_call1(Base_Or_error[35],_aZ_)}},
               _aU_,
               _aT_,
               _aS_)}
    function with_sample_exn(f,config,examples,generator)
     {function f$0(x)
       {function _aQ_(param){return caml_call1(f,x)}
        return caml_call2(Base_Or_error[28],0,_aQ_)}
      var _aP_=with_sample(f$0,config,examples,generator);
      return caml_call1(Base_Or_error[31],_aP_)}
    function run_exn(f,config,examples,testable)
     {function f$0(x)
       {function _aN_(param){return caml_call1(f,x)}
        var _aO_=[0,caml_call1(Base_Backtrace[6][1],0)];
        return caml_call2(Base_Or_error[28],_aO_,_aN_)}
      var _aM_=run(f$0,config,examples,testable);
      return caml_call1(Base_Or_error[31],_aM_)}
    var
     Base_quickcheck_Test=
      [0,
       [0,
        Seed,
        sizes$0,
        shrink_count,
        test_count,
        seed,
        [0,
         names,
         sizes$1,
         shrink_count$0,
         test_count$0,
         seed$0,
         fold,
         make_creator,
         create$2,
         map$3,
         iter,
         for_all,
         exists,
         to_list,
         map_poly,
         Direct],
        sexp_of_t$5],
       default_config,
       run,
       run_exn,
       with_sample,
       with_sample_exn];
    caml_register_global(110,Base_quickcheck_Test,"Base_quickcheck__Test");
    function unmap(t,f)
     {return function(x,size,hash)
       {return observe(t,caml_call1(f,x),size,hash)}}
    function of_hash_fold(f)
     {return function(x,param,hash){return caml_call2(f,hash,x)}}
    function of_lazy$1(lazy_t)
     {return function(x,size,hash)
       {var
         _aK_=caml_obj_tag(lazy_t),
         _aL_=
          250 === _aK_
           ?lazy_t[1]
           :246 === _aK_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
        return observe(_aL_,x,size,hash)}}
    function fixed_point$1(wrap)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_aJ_){return caml_call1(wrap,of_lazy$1(lazy_t))}]);
      return of_lazy$1(lazy_t)}
    var
     quickcheck_observer_bool=of_hash_fold(Base_Bool[2]),
     quickcheck_observer_char=of_hash_fold(Base_Char[2]),
     quickcheck_observer_int=of_hash_fold(Base_Int[5]),
     quickcheck_observer_int32=of_hash_fold(Base_Int32[5]),
     int63$0=of_hash_fold(Base_Int63[5]),
     quickcheck_observer_int64=of_hash_fold(Base_Int64[5]),
     quickcheck_observer_nativeint=of_hash_fold(Base_Nativeint[5]),
     quickcheck_observer_float=of_hash_fold(Base_Float[3]),
     quickcheck_observer_string=of_hash_fold(Base_String[19]),
     sexp$1=of_hash_fold(Base[84][1]);
    function either$1(fst_t,snd_t)
     {return function(either,size,hash)
       {if(0 === either[0])
         {var fst=either[1];
          return observe(fst_t,fst,size,caml_call2(Base[112],hash,1))}
        var snd=either[1];
        return observe(snd_t,snd,size,caml_call2(Base[112],hash,2))}}
    function result$1(ok_t,err_t)
     {function _aI_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return unmap(either$1(ok_t,err_t),_aI_)}
    function both$1(fst_t,snd_t)
     {return function(param,size,hash)
       {var
         snd=param[2],
         fst=param[1],
         hash$0=observe(fst_t,fst,size,hash),
         hash$1=observe(snd_t,snd,size,hash$0);
        return hash$1}}
    function quickcheck_observer_option(value_t)
     {function _aH_(param)
       {if(param){var value=param[1];return [1,value]}return _aw_}
      return unmap(either$1(quickcheck_observer_unit,value_t),_aH_)}
    function quickcheck_observer_list(elt_t)
     {return function(list,size,hash)
       {var
         _aE_=caml_call1(Base_Hash[9],hash),
         random=caml_call1(Splittable_random[1][2],_aE_),
         length=caml_call1(Base_List[6],list),
         sizes$0=generate(sizes([0,length],[0,length],0),size,random);
        function _aF_(hash,elt,size)
         {return observe(elt_t,elt,size,caml_call2(Base[112],hash,1))}
        var _aG_=caml_call2(Base[112],hash,0);
        return caml_call4(Base_List[43],list,sizes$0,_aG_,_aF_)}}
    function fn$0(dom,rng)
     {return function(f,size,hash)
       {var
         _aB_=caml_call1(Base_Hash[9],hash),
         random=caml_call1(Splittable_random[1][2],_aB_),
         _aC_=caml_call2(Base[167],size,2),
         sizes$0=generate(sizes(0,0,0),_aC_,random);
        function _aD_(hash,size)
         {var x=generate(dom,size,random);
          return observe(rng,caml_call1(f,x),size,hash)}
        return caml_call3(Base_List[9],sizes$0,hash,_aD_)}}
    function map_tree(key_obs,data_obs)
     {var arg=Base_Map[98][3][61];
      function _aA_(eta){return caml_call2(arg,0,eta)}
      return unmap(quickcheck_observer_list(both$1(key_obs,data_obs)),_aA_)}
    function set_tree(elt_obs)
     {var _az_=Base_Set[71][3][15];
      return unmap(quickcheck_observer_list(elt_obs),_az_)}
    function map_t$0(key_obs,data_obs)
     {var _ay_=Base_Map[98][66];return unmap(map_tree(key_obs,data_obs),_ay_)}
    function set_t$0(elt_obs)
     {var _ax_=Base_Set[71][46];return unmap(set_tree(elt_obs),_ax_)}
    var
     Base_quickcheck_Observer=
      [0,
       quickcheck_observer_unit,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       int63$0,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       sexp$1,
       quickcheck_observer_option,
       quickcheck_observer_list,
       both$1,
       either$1,
       result$1,
       fn$0,
       map_t$0,
       set_t$0,
       map_tree,
       set_tree,
       of_hash_fold,
       unmap,
       fixed_point$1,
       of_lazy$1,
       create,
       observe];
    caml_register_global
     (112,Base_quickcheck_Observer,"Base_quickcheck__Observer");
    var
     include$1=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_generator_option,
       quickcheck_generator_list,
       quickcheck_observer_option,
       quickcheck_observer_list,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list];
    caml_register_global(113,include$1,"Base_quickcheck__Export");
    var
     Base_quickcheck$0=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_generator_option,
       quickcheck_generator_list,
       quickcheck_observer_option,
       quickcheck_observer_list,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list];
    caml_register_global(114,Base_quickcheck$0,"Base_quickcheck");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX3F1aWNrY2hlY2suY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
