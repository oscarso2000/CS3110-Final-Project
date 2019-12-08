(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Step_function_create_exn_got_unsorted_times=
      caml_new_string("[Step_function.create_exn] got unsorted times"),
     cst_incremental_step_function=
      caml_new_string("incremental_step_function"),
     cst_step_function_src_incremental_step_function_ml=
      caml_new_string("step_function/src/incremental_step_function.ml"),
     cst=caml_new_string(""),
     cst_incremental_step_function$0=
      caml_new_string("incremental_step_function"),
     cst_incremental_step_function$1=
      caml_new_string("incremental_step_function"),
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel=global_data.Core_kernel,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns;
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_step_function);
    caml_call1
     (Expect_test_collector[4][1],
      cst_step_function_src_incremental_step_function_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_step_function$0,cst);
    var
     symbol=Core_kernel_Time_ns[19],
     compare=Core_kernel_Time_ns[22],
     sexp_of_t=Core_kernel_Time_ns[25][2],
     _c_=[0,caml_new_string("steps")],
     _a_=[0,caml_new_string("steps")],
     _b_=[0,caml_new_string("init")];
    function steps(r){return r[2]}
    function init(r){return r[1]}
    function sexp_of_t$0(of_a,param)
     {var v_steps=param[2],v_init=param[1],bnds=0;
      function _n_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(sexp_of_t,v0),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg=caml_call2(Core_kernel_Sequence[13],_n_,v_steps),
       bnds$0=[0,[1,[0,_a_,[0,arg,0]]],bnds],
       arg$0=caml_call1(of_a,v_init),
       bnds$1=[0,[1,[0,_b_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    function invariant(invariant_a,param)
     {var init=param[1];return caml_call1(invariant_a,init)}
    function value(t$0,at)
     {var init=t$0[1],steps=t$0[2];
      for(;;)
       {var match=caml_call1(Core_kernel_Sequence[47],steps);
        if(match)
         {var
           _m_=match[1],
           steps$0=_m_[2],
           match$0=_m_[1],
           a=match$0[2],
           t=match$0[1];
          if(caml_call2(symbol,at,t))return init;
          var init=a,steps=steps$0;
          continue}
        return init}}
    function constant(init){return [0,init,Core_kernel_Sequence[46]]}
    function create_exn(init,steps)
     {function _d_(param,_l_)
       {var time2=_l_[1],time1=param[1];
        return caml_call2(compare,time1,time2)}
      if(1 - caml_call2(Core_kernel_List[134],steps,_d_))
       {var
         _e_=0,
         _f_=0,
         _g_=function(_k_){return _k_[1]},
         _h_=caml_call2(Core_kernel_List[69],steps,_g_),
         _i_=
          [0,
           [1,[0,_c_,[0,caml_call2(Core_kernel[400],sexp_of_t,_h_),_f_]]],
           _e_],
         _j_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Step_function_create_exn_got_unsorted_times),
            _i_]];
        caml_call1(Core_kernel[241],_j_)}
      return [0,init,caml_call1(Core_kernel_Sequence[107],steps)]}
    function create_from_sequence(init,steps){return [0,init,steps]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_step_function$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_step_function=
      [0,
       sexp_of_t$0,
       invariant,
       init,
       steps,
       value,
       constant,
       create_exn,
       create_from_sequence];
    runtime.caml_register_global
     (21,Incremental_step_function,"Incremental_step_function");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyZW1lbnRhbF9zdGVwX2Z1bmN0aW9uLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
