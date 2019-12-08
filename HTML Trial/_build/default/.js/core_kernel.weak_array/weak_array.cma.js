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
     cst_weak_array=caml_new_string("weak_array"),
     cst_weak_array_src_weak_array_ml=
      caml_new_string("weak_array/src/weak_array.ml"),
     cst=caml_new_string(""),
     cst_weak_array$0=caml_new_string("weak_array"),
     cst_weak_array$1=caml_new_string("weak_array"),
     Core_kernel_Heap_block=global_data.Core_kernel__Heap_block,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Stdlib_weak=global_data.Stdlib__weak,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_weak_array);
    caml_call1(Expect_test_collector[4][1],cst_weak_array_src_weak_array_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_weak_array$0,cst);
    function create(len){return caml_call1(Stdlib_weak[1],len)}
    function length(t){return caml_call1(Stdlib_weak[2],t)}
    var _b_=Stdlib_weak[4],_a_=Stdlib_weak[3];
    function is_some(t,i){return caml_call2(Stdlib_weak[6],t,i)}
    function is_none(t,i){return 1 - is_some(t,i)}
    function sexp_of_t(sexp_of_a,t)
     {function _c_(i){return caml_call2(_b_,t,i)}
      var
       _d_=length(t),
       _e_=caml_call2(Core_kernel_Array[36],_d_,_c_),
       _f_=caml_call1(Core_kernel_Heap_block[1],sexp_of_a),
       _g_=caml_call1(Core_kernel[431],_f_);
      return caml_call1(caml_call1(Core_kernel[275],_g_),_e_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_weak_array$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Weak_array=[0,sexp_of_t,create,length,_a_,_b_,is_some,is_none];
    runtime.caml_register_global(12,Weak_array,"Weak_array");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ3ZWFrX2FycmF5LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
