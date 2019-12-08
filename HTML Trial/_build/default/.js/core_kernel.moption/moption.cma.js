(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_moption=caml_new_string("moption"),
     cst_moption_src_import_ml=caml_new_string("moption/src/import.ml"),
     cst=caml_new_string(""),
     cst_moption$0=caml_new_string("moption"),
     cst_moption$1=caml_new_string("moption"),
     cst_Moption_get_some_exn=caml_new_string("Moption.get_some_exn"),
     cst_moption$2=caml_new_string("moption"),
     cst_moption_src_moption_ml=caml_new_string("moption/src/moption.ml"),
     cst$0=caml_new_string(""),
     cst_moption$3=caml_new_string("moption"),
     cst_moption$4=caml_new_string("moption"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Base_Invariant=global_data.Base__Invariant,
     Core_kernel=global_data.Core_kernel,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Stdlib_obj=global_data.Stdlib__obj,
     Moption=[0];
    caml_register_global(13,Moption,"Moption__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_moption);
    caml_call1(Expect_test_collector[4][1],cst_moption_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_moption$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_moption$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Moption_Import=[0];
    caml_register_global(17,Moption_Import,"Moption__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_moption$2);
    caml_call1(Expect_test_collector[4][1],cst_moption_src_moption_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_moption$3,cst$0);
    var
     none=runtime.caml_obj_block(Stdlib_obj[12],1),
     _a_=[0,caml_new_string("_")],
     _b_=[0,caml_new_string("moption/src/moption.ml"),30,838,860];
    function create(param){return [0,none]}
    function is_none(x){return caml_call2(Core_kernel[234],x[1],none)}
    function is_some(x){return 1 - is_none(x)}
    function get_some_exn(x)
     {if(is_none(x))
       {var _i_=caml_call1(Sexplib0_Sexp_conv[7],cst_Moption_get_some_exn);
        return caml_call1(Core_kernel[241],_i_)}
      return x[1]}
    function get(t){return is_none(t)?0:[0,t[1]]}
    function unsafe_get(t){return t[1]}
    function set_some(t,v){t[1] = v;return 0}
    function set_none(t){t[1] = none;return 0}
    function set(t,v)
     {if(v){var v$0=v[1];return set_some(t,v$0)}return set_none(t)}
    function sexp_of_t(sexp_of_a,t)
     {var _h_=get(t);return caml_call2(Core_kernel[431],sexp_of_a,_h_)}
    function invariant(invariant_a,t)
     {function _c_(param)
       {var _g_=get(t);
        return caml_call2(Core_kernel_Option[18],_g_,invariant_a)}
      function _d_(param){return _a_}
      function _e_(_f_){return sexp_of_t(_d_,_f_)}
      return caml_call4(Base_Invariant[1],_b_,t,_e_,_c_)}
    var
     Optional_syntax=[0,is_none,unsafe_get],
     Optional_syntax$0=[0,Optional_syntax];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_moption$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Moption$0=
      [0,
       sexp_of_t,
       invariant,
       Optional_syntax$0,
       create,
       is_none,
       is_some,
       get,
       get_some_exn,
       unsafe_get,
       set,
       set_none,
       set_some];
    caml_register_global(23,Moption$0,"Moption");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJtb3B0aW9uLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
