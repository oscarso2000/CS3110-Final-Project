(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_div=runtime.caml_div,
     caml_mul=runtime.caml_mul,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_wrap_exception=runtime.caml_wrap_exception;
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
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    function caml_call10(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {return f.length == 10
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9])}
    function caml_call11(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
     {return f.length == 11
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10])}
    function caml_call12(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
     {return f.length == 12
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11])}
    function caml_call13(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
     {return f.length == 13
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12])}
    function caml_call14(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
     {return f.length == 14
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13])}
    function caml_call15(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)
     {return f.length == 15
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_tuple_pool=caml_new_string("tuple_pool"),
     cst_tuple_pool_src_import_ml=caml_new_string("tuple_pool/src/import.ml"),
     cst=caml_new_string(""),
     cst_tuple_pool$0=caml_new_string("tuple_pool"),
     cst_tuple_pool$1=caml_new_string("tuple_pool"),
     cst_tuple_pool$2=caml_new_string("tuple_pool"),
     cst_tuple_pool_src_tuple_type_intf_ml=
      caml_new_string("tuple_pool/src/tuple_type_intf.ml"),
     cst$0=caml_new_string(""),
     cst_tuple_pool$3=caml_new_string("tuple_pool"),
     cst_tuple_pool$4=caml_new_string("tuple_pool"),
     cst_tuple_pool$5=caml_new_string("tuple_pool"),
     cst_tuple_pool_src_tuple_type_ml=
      caml_new_string("tuple_pool/src/tuple_type.ml"),
     cst$1=caml_new_string(""),
     cst_tuple_pool$6=caml_new_string("tuple_pool"),
     t1=[0,301584533,[0,1]],
     t2=[0,301584533,[0,2]],
     t3=[0,301584533,[0,3]],
     t4=[0,301584533,[0,4]],
     t5=[0,301584533,[0,5]],
     t6=[0,301584533,[0,6]],
     t7=[0,301584533,[0,7]],
     t8=[0,301584533,[0,8]],
     t9=[0,301584533,[0,9]],
     t10=[0,301584533,[0,10]],
     t11=[0,301584533,[0,11]],
     t12=[0,301584533,[0,12]],
     t13=[0,301584533,[0,13]],
     t14=[0,301584533,[0,14]],
     cst_tuple_pool$7=caml_new_string("tuple_pool"),
     cst_tuple_pool$8=caml_new_string("tuple_pool"),
     cst_tuple_pool_src_tuple_pool_intf_ml=
      caml_new_string("tuple_pool/src/tuple_pool_intf.ml"),
     cst$2=caml_new_string(""),
     cst_tuple_pool$9=caml_new_string("tuple_pool"),
     cst_tuple_pool$10=caml_new_string("tuple_pool"),
     cst_attempt_to_use_invalid_pointer=
      caml_new_string("attempt to use invalid pointer"),
     cst_is_valid=caml_new_string("is_valid"),
     cst_pointer=caml_new_string("pointer"),
     name$1=
      caml_new_string("tuple_pool/src/tuple_pool.ml.Error_check.Pointer.t"),
     cst_unsafe_set=caml_new_string("unsafe_set"),
     cst_set=caml_new_string("set"),
     cst_unsafe_get=caml_new_string("unsafe_get"),
     cst_get=caml_new_string("get"),
     cst_get_tuple=caml_new_string("get_tuple"),
     cst_new=caml_new_string("new"),
     cst_free=caml_new_string("free"),
     cst_unsafe_free=caml_new_string("unsafe_free"),
     cst_is_full=caml_new_string("is_full"),
     cst_grow=caml_new_string("grow"),
     cst_capacity$0=caml_new_string("capacity"),
     cst_max_capacity=caml_new_string("max_capacity"),
     cst_create=caml_new_string("create"),
     cst_pointer_is_valid=caml_new_string("pointer_is_valid"),
     cst_pointer_of_id_exn=caml_new_string("pointer_of_id_exn"),
     cst_id_of_pointer=caml_new_string("id_of_pointer"),
     cst_Pointer_Id_to_int63=caml_new_string("Pointer.Id.to_int63"),
     cst_Pointer_Id_of_int63=caml_new_string("Pointer.Id.of_int63"),
     cst_Pointer_is_null=caml_new_string("Pointer.is_null"),
     cst_Pointer_phys_equal=caml_new_string("Pointer.phys_equal"),
     cst_Pointer_phys_compare=caml_new_string("Pointer.phys_compare"),
     prefix=caml_new_string("Pool."),
     name$0=caml_new_string("tuple_pool/src/tuple_pool.ml.Debug.Pointer.t"),
     cst_t=caml_new_string("t"),
     cst_tuple_pool_src_tuple_pool_ml_968_6=
      caml_new_string("tuple_pool/src/tuple_pool.ml:968:6"),
     cst_t$0=caml_new_string("t"),
     cst_Pool_free_of_invalid_pointer=
      caml_new_string("Pool.free of invalid pointer"),
     cst_Pool_malloc_of_full_pool=caml_new_string("Pool.malloc of full pool"),
     cst_Pool_grow_cannot_grow_pool_capacity_already_at_maximum=
      caml_new_string
       ("Pool.grow cannot grow pool; capacity already at maximum"),
     cst_Pool_create_got_invalid_capacity=
      caml_new_string("Pool.create got invalid capacity"),
     cst_Pool_create_got_too_large_capacity=
      caml_new_string("Pool.create got too large capacity"),
     cst_cycle_in_free_list=caml_new_string("cycle in free list"),
     cst_Pool_invariant_failed=caml_new_string("Pool.invariant failed"),
     cst_invalid_header_index=caml_new_string("invalid header index"),
     cst_pointer_not_live=caml_new_string("pointer not live"),
     cst_Pool_pointer_of_id_exn_got_invalid_id=
      caml_new_string("Pool.pointer_of_id_exn got invalid id"),
     cst_should_equal=caml_new_string("should equal"),
     cst_Pointer_of_id_exn_got_strange_id=
      caml_new_string("Pointer.of_id_exn got strange id"),
     cst_Tuple_id_of_int_got_negative_int=
      caml_new_string("Tuple_id.of_int got negative int"),
     cst_Pool_grow_got_too_small_capacity=
      caml_new_string("Pool.grow got too small capacity"),
     cst_tuple_pool$11=caml_new_string("tuple_pool"),
     cst_tuple_pool_src_tuple_pool_ml=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst$3=caml_new_string(""),
     cst_tuple_pool$12=caml_new_string("tuple_pool"),
     cst_tuple_pool_src_tuple_pool_ml$0=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_t13_max_slot=caml_new_string(": <<t13 = max_slot>>"),
     cst_tuple_pool_src_tuple_pool_ml$1=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_array_index_num_bits_0=
      caml_new_string(": <<array_index_num_bits > 0>>"),
     cst_tuple_pool_src_tuple_pool_ml$2=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_masked_tuple_id_num_bits_0=
      caml_new_string(": <<masked_tuple_id_num_bits > 0>>"),
     cst_tuple_pool_src_tuple_pool_ml$3=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_array_index_num_bits_masked_tuple_id_num_b=
      caml_new_string
       (": <<(array_index_num_bits + masked_tuple_id_num_b[...]>>"),
     name=caml_new_string("tuple_pool/src/tuple_pool.ml.Pool.Pointer.t"),
     cst_tuple_pool_src_tuple_pool_ml$4=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_null_max_slot_0=caml_new_string(": <<((null ()) + max_slot) < 0>>"),
     cst_tuple_pool_src_tuple_pool_ml$5=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_invariant_ignore_null=
      caml_new_string(": <<invariant ignore (null ())>>"),
     cst_tuple_pool_src_tuple_pool_ml$6=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_List_iter_Tuple_id_examples_f_fun_tuple_i=
      caml_new_string
       (": <<List.iter Tuple_id.examples   ~f:(fun tuple_i[...]>>"),
     cst_tuple_pool_src_tuple_pool_ml$7=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_List_iter_Tuple_id_examples_f_fun_id=
      caml_new_string
       (": <<List.iter Tuple_id.examples   ~f:(fun id ->  [...]>>"),
     cst_tuple_pool_src_tuple_pool_ml$8=
      caml_new_string("tuple_pool/src/tuple_pool.ml"),
     cst_for_slots_per_tuple_1_to_max_slot_do_asse=
      caml_new_string
       (": <<for slots_per_tuple = 1 to max_slot do   asse[...]>>"),
     cst_dummy=caml_new_string("dummy"),
     cst_first_free=caml_new_string("first_free"),
     cst_next_id=caml_new_string("next_id"),
     cst_length=caml_new_string("length"),
     cst_capacity=caml_new_string("capacity"),
     cst_slots_per_tuple=caml_new_string("slots_per_tuple"),
     cst_tuple_pool$13=caml_new_string("tuple_pool"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel=global_data.Core_kernel,
     Typerep_lib_Typename=global_data.Typerep_lib__Typename,
     Typerep_lib_Std=global_data.Typerep_lib__Std,
     Typerep_lib_Typerep_obj=global_data.Typerep_lib__Typerep_obj,
     Typerep_lib_Make_typename=global_data.Typerep_lib__Make_typename,
     Core_kernel_Int63=global_data.Core_kernel__Int63,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Debug=global_data.Core_kernel__Debug,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Core_kernel_Uniform_array=global_data.Core_kernel__Uniform_array,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Base_Field=global_data.Base__Field,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_String=global_data.Base__String,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Stdlib_sys=global_data.Stdlib__sys,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Caml=global_data.Caml,
     Core_kernel_Printf=global_data.Core_kernel__Printf,
     Inline_test_config=global_data.Inline_test_config,
     Tuple_pool=[0];
    caml_register_global(186,Tuple_pool,"Tuple_pool__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_tuple_pool);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Tuple_pool_Import=[0];
    caml_register_global(190,Tuple_pool_Import,"Tuple_pool__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_tuple_pool$2);
    caml_call1
     (Expect_test_collector[4][1],cst_tuple_pool_src_tuple_type_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Tuple_pool_Tuple_type_intf=[0];
    caml_register_global
     (191,Tuple_pool_Tuple_type_intf,"Tuple_pool__Tuple_type_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_tuple_pool$5);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_tuple_type_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$6,cst$1);
    var
     _b_=[0,caml_new_string("Slots")],
     _a_=[0,caml_new_string("slots_per_tuple")],
     _aV_=[0,caml_new_string("_")],
     _aW_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),1132,38018,38047]],
     _aT_=[0,caml_new_string("pointer")],
     _aU_=[0,caml_new_string("is_valid")],
     _aS_=[0,caml_new_string("_")],
     _aR_=[0,caml_new_string("_")],
     _aQ_=[0,caml_new_string("_")],
     _aP_=[0,caml_new_string("_")],
     _aO_=[0,caml_new_string("_")],
     _aN_=[0,caml_new_string("_")],
     _aM_=[0,caml_new_string("_")],
     _aL_=[0,caml_new_string("_")],
     _aK_=[0,caml_new_string("_")],
     _aJ_=[0,caml_new_string("capacity")],
     _aI_=[0,caml_new_string("_")],
     _aH_=[0,caml_new_string("_")],
     _aG_=[0,caml_new_string("_")],
     _aF_=[0,caml_new_string("_")],
     _aE_=[0,caml_new_string("_")],
     _aD_=[0,caml_new_string("_")],
     _aC_=[0,caml_new_string("_")],
     _aB_=[0,caml_new_string("_")],
     _aA_=[0,caml_new_string("_")],
     _az_=[0,caml_new_string("_")],
     _ay_=[0,caml_new_string("_")],
     _ax_=[0,caml_new_string(" result"),0],
     _av_=[0,caml_new_string("_")],
     _au_=[0,caml_new_string("_")],
     _aw_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),685,22786,22792]],
     _as_=[0,caml_new_string("_")],
     _at_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),644,21157,21192]],
     _ar_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),613,20262,20268]],
     _ap_=[0,caml_new_string("max")],
     _ao_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),530,17678,17687]],
     _aq_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),535,17911,17917]],
     _ac_=[0,caml_new_string("_")],
     _an_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),443,56],
     _am_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),446,13],
     _al_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),447,13],
     _ak_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),450,13],
     _aj_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),451,13],
     _ai_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),459,15],
     _ah_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),461,15],
     _ag_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),464,15225,15245]],
     _ae_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),471,15],
     _af_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),480,21],
     _ad_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),484,16155,16168]],
     _$_=[0,caml_new_string("_")],
     _ab_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),427,13740,13753]],
     _aa_=
      [0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),432,13937,13943]],
     _V_=[0,caml_new_string("dummy")],
     _W_=[0,caml_new_string("first_free")],
     _X_=[0,caml_new_string("next_id")],
     _Y_=[0,caml_new_string("length")],
     _Z_=[0,caml_new_string("capacity")],
     ___=[0,caml_new_string("slots_per_tuple")],
     _I_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),323,6],
     _E_=[0,caml_new_string("null")],
     _F_=[0,caml_new_string("Free")],
     _G_=[0,caml_new_string("Used")],
     _D_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),301,8],
     _C_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),302,8],
     _y_=[0,caml_new_string("_")],
     _z_=[0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),249,7655,7670]],
     _x_=[0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),252,7751,7759]],
     _u_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),217,48],
     _r_=
      [0,
       [11,caml_new_string("<Pool.Pointer.t: 0x"),[4,6,[0,2,8],0,[12,62,0]]],
       caml_new_string("<Pool.Pointer.t: 0x%08x>")],
     _p_=[0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),143,4381,4401]],
     _o_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),135,22],
     _g_=[0,caml_new_string("capacity")],
     _h_=[0,caml_new_string("old_capacity")],
     _i_=[0,[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),28,619,627]],
     _f_=[0,caml_new_string("")],
     _aY_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),103,6],
     _aZ_=[0,caml_new_string("tuple_pool/src/tuple_pool.ml"),106,6];
    function sexp_of_t(param)
     {var
       v0=param[2],
       v_slots_per_tuple=v0[1],
       arg=caml_call1(Core_kernel[339],v_slots_per_tuple),
       bnds=[0,[1,[0,_a_,[0,arg,0]]],0];
      return [1,[0,_b_,[0,[1,bnds],0]]]}
    function sexp_of_t$0(of_tuple,of_variant,v){return sexp_of_t(v)}
    function slots_per_tuple(param){var match=param[2],n=match[1];return n}
    function sexp_of_t1(of_a0,v){return sexp_of_t(v)}
    function sexp_of_t2(of_a0,of_a1,v){return sexp_of_t(v)}
    function sexp_of_t3(of_a0,of_a1,of_a2,v){return sexp_of_t(v)}
    function sexp_of_t4(of_a0,of_a1,of_a2,of_a3,v){return sexp_of_t(v)}
    function sexp_of_t5(of_a0,of_a1,of_a2,of_a3,of_a4,v){return sexp_of_t(v)}
    function sexp_of_t6(of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,v)
     {return sexp_of_t(v)}
    function sexp_of_t7(of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,v)
     {return sexp_of_t(v)}
    function sexp_of_t8(of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,v)
     {return sexp_of_t(v)}
    function sexp_of_t9
     (of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,of_a8,v)
     {return sexp_of_t(v)}
    function sexp_of_t10
     (of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,of_a8,of_a9,v)
     {return sexp_of_t(v)}
    function sexp_of_t11
     (of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,of_a8,of_a9,of_a10,v)
     {return sexp_of_t(v)}
    function sexp_of_t12
     (of_a0,
      of_a1,
      of_a2,
      of_a3,
      of_a4,
      of_a5,
      of_a6,
      of_a7,
      of_a8,
      of_a9,
      of_a10,
      of_a11,
      v)
     {return sexp_of_t(v)}
    function sexp_of_t13
     (of_a0,
      of_a1,
      of_a2,
      of_a3,
      of_a4,
      of_a5,
      of_a6,
      of_a7,
      of_a8,
      of_a9,
      of_a10,
      of_a11,
      of_a12,
      v)
     {return sexp_of_t(v)}
    function sexp_of_t14
     (of_a0,
      of_a1,
      of_a2,
      of_a3,
      of_a4,
      of_a5,
      of_a6,
      of_a7,
      of_a8,
      of_a9,
      of_a10,
      of_a11,
      of_a12,
      of_a13,
      v)
     {return sexp_of_t(v)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _c_=
      [0,
       sexp_of_t$0,
       slots_per_tuple,
       sexp_of_t1,
       sexp_of_t2,
       sexp_of_t3,
       sexp_of_t4,
       sexp_of_t5,
       sexp_of_t6,
       sexp_of_t7,
       sexp_of_t8,
       sexp_of_t9,
       sexp_of_t10,
       sexp_of_t11,
       sexp_of_t12,
       sexp_of_t13,
       sexp_of_t14,
       t1,
       t2,
       t3,
       t4,
       t5,
       t6,
       t7,
       t8,
       t9,
       t10,
       t11,
       t12,
       t13,
       t14],
     Tuple_pool_Tuple_type=[0,_c_];
    caml_register_global(193,Tuple_pool_Tuple_type,"Tuple_pool__Tuple_type");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_tuple_pool$8);
    caml_call1
     (Expect_test_collector[4][1],cst_tuple_pool_src_tuple_pool_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$9,cst$2);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Tuple_pool_Tuple_pool_intf=[0];
    caml_register_global
     (194,Tuple_pool_Tuple_pool_intf,"Tuple_pool__Tuple_pool_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_tuple_pool$11);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_tuple_pool_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$12,cst$3);
    var
     _d_=Core_kernel_Error[38],
     arch_sixtyfour=caml_call2(Core_kernel[90],Stdlib_sys[10],64),
     num_bits=Core_kernel_Int[60],
     max_value=Caml[18],
     to_string=Core_kernel[22],
     _e_=Core_kernel_Printf[2];
    function concat(l){return caml_call2(Base_String[48],_f_,l)}
    var max_slot=14;
    function sexp_of_t$1(of_slots,of_a,v)
     {return caml_call1(Core_kernel[339],v)}
    function equal(t1,t2){return caml_call2(Core_kernel[90],t1,t2)}
    var
     t0=1,
     t1$0=2,
     t2$0=3,
     t3$0=4,
     t4$0=5,
     t5$0=6,
     t6$0=7,
     t7$0=8,
     t8$0=9,
     t9$0=10,
     t10$0=11,
     t11$0=12,
     t12$0=13,
     t13$0=14;
    function _j_(param){return caml_call2(Core_kernel[90],t13$0,max_slot)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_t13_max_slot,
      0,
      cst_tuple_pool_src_tuple_pool_ml$0,
      86,
      4,
      31,
      _j_);
    var
     Slot=
      [0,
       sexp_of_t$1,
       equal,
       t0,
       t1$0,
       t2$0,
       t3$0,
       t4$0,
       t5$0,
       t6$0,
       t7$0,
       t8$0,
       t9$0,
       t10$0,
       t11$0,
       t12$0,
       t13$0];
    if(arch_sixtyfour)
     {if(! caml_call2(Core_kernel[90],num_bits,63))
       throw [0,Assert_failure,_aY_];
      var _k_=30}
    else
     {if(! caml_call2(Core_kernel[90],num_bits,31))
       if(! caml_call2(Core_kernel[90],num_bits,32))
        throw [0,Assert_failure,_aZ_];
      var _k_=22}
    var masked_tuple_id_num_bits=num_bits - _k_ | 0;
    function _l_(param){return caml_call2(Core_kernel[91],_k_,0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_array_index_num_bits_0,
      0,
      cst_tuple_pool_src_tuple_pool_ml$1,
      112,
      2,
      39,
      _l_);
    function _m_(param)
     {return caml_call2(Core_kernel[91],masked_tuple_id_num_bits,0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_masked_tuple_id_num_bits_0,
      0,
      cst_tuple_pool_src_tuple_pool_ml$2,
      113,
      2,
      43,
      _m_);
    function _n_(param)
     {return caml_call2
              (Core_kernel[89],_k_ + masked_tuple_id_num_bits | 0,num_bits)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_array_index_num_bits_masked_tuple_id_num_b,
      0,
      cst_tuple_pool_src_tuple_pool_ml$3,
      114,
      2,
      78,
      _n_);
    var max_array_length=1 << _k_,sexp_of_t$2=Core_kernel[339];
    function invariant(t)
     {if(caml_call2(Core_kernel[88],t,0))return 0;
      throw [0,Assert_failure,_o_]}
    var init=0;
    function of_int(i)
     {if(caml_call2(Core_kernel[92],i,0))
       caml_call5
        (_d_,0,_p_,cst_Tuple_id_of_int_got_negative_int,i,Core_kernel[339]);
      return i}
    var
     examples=[0,0,[0,1,[0,536870911,[0,max_value,0]]]],
     tuple_id_mask=(1 << masked_tuple_id_num_bits) - 1 | 0,
     Typename_of_t=caml_call1(Typerep_lib_Make_typename[2],[0,name]),
     _q_=Typename_of_t[2];
    function typerep_of_t(of_slots)
     {var name_of_t=caml_call1(Typename_of_t[1],of_slots);
      return [9,[0,name_of_t,[0,Core_kernel[341]]]]}
    function sexp_of_t$3(param,t){return [0,caml_call2(_e_,_r_,t)]}
    function phys_equal(t1,t2){return t1 === t2?1:0}
    var _s_=Core_kernel[95];
    function null$0(param){return -15}
    function is_null(t){return t === -15?1:0}
    function _t_(param){return caml_call2(Core_kernel[92],-1,0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_null_max_slot_0,
      0,
      cst_tuple_pool_src_tuple_pool_ml$4,
      207,
      4,
      39,
      _t_);
    function create(header_index,tuple_id)
     {return header_index | (tuple_id & tuple_id_mask) << _k_}
    var header_index_mask=(1 << _k_) - 1 | 0;
    function masked_tuple_id(t){return t >>> _k_ | 0}
    function header_index(t){return t & header_index_mask}
    function invariant$0(param,t)
     {var _dd_=1 - (t === -15?1:0);
      if(_dd_)
       {var _de_=header_index(t);
        if(caml_call2(Core_kernel[91],_de_,0))return 0;
        throw [0,Assert_failure,_u_]}
      return _dd_}
    function _v_(param)
     {var _db_=-15;return invariant$0(function(_dc_){return 0},_db_)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_invariant_ignore_null,
      0,
      cst_tuple_pool_src_tuple_pool_ml$5,
      219,
      4,
      48,
      _v_);
    function _w_(param)
     {function _c__(tuple_id)
       {var _c$_=create(1,tuple_id);
        return invariant$0(function(_da_){return 0},_c$_)}
      return caml_call2(Core_kernel_List[8],examples,_c__)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_List_iter_Tuple_id_examples_f_fun_tuple_i,
      0,
      cst_tuple_pool_src_tuple_pool_ml$6,
      221,
      4,
      135,
      _w_);
    function slot_index(t,slot){return header_index(t) + slot | 0}
    function first_slot_index(t){return slot_index(t,Slot[3])}
    var
     to_int_exn=Core_kernel_Int63[4],
     of_int$0=Core_kernel_Int63[69],
     bin_size_t=Core_kernel_Int63[87],
     bin_write_t=Core_kernel_Int63[88],
     bin_read_t=Core_kernel_Int63[89],
     bin_read_t$0=Core_kernel_Int63[90],
     bin_shape_t=Core_kernel_Int63[91],
     bin_writer_t=Core_kernel_Int63[92],
     bin_reader_t=Core_kernel_Int63[93],
     bin_t=Core_kernel_Int63[94],
     t_of_sexp=Core_kernel_Int63[95],
     sexp_of_t$4=Core_kernel_Int63[96];
    function to_int63(t){return t}
    function of_int63(i){return i}
    var
     _A_=
      [0,
       bin_size_t,
       bin_write_t,
       bin_read_t,
       bin_read_t$0,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       t_of_sexp,
       sexp_of_t$4,
       to_int63,
       of_int63],
     null$1=0;
    function is_null$0(t){return caml_call2(Core_kernel[90],t,0)}
    function is_free(t){return caml_call2(Core_kernel[91],t,0)}
    function is_used(t){return caml_call2(Core_kernel[92],t,0)}
    function tuple_id(t){return of_int(- (t + 1 | 0) | 0)}
    function _B_(param)
     {function _c9_(id)
       {var t=-1 - id | 0;
        if(is_used(t))
         {var t1=tuple_id(t);
          if(caml_call2(Core_kernel[90],t1,id))return 0;
          throw [0,Assert_failure,_C_]}
        throw [0,Assert_failure,_D_]}
      return caml_call2(Core_kernel_List[8],examples,_c9_)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_List_iter_Tuple_id_examples_f_fun_id,
      0,
      cst_tuple_pool_src_tuple_pool_ml$7,
      298,
      4,
      173,
      _B_);
    var metadata_index=0,start_of_tuples_index=1;
    function max_capacity(slots_per_tuple)
     {return caml_div(max_array_length - 1 | 0,1 + slots_per_tuple | 0)}
    function _H_(param)
     {var slots_per_tuple=1;
      for(;;)
       {var
         _c7_=
          1
          +
          caml_mul(1 + slots_per_tuple | 0,max_capacity(slots_per_tuple))
          |
          0;
        if(caml_call2(Core_kernel[89],_c7_,max_array_length))
         {var _c8_=slots_per_tuple + 1 | 0;
          if(14 !== slots_per_tuple){var slots_per_tuple=_c8_;continue}
          return 0}
        throw [0,Assert_failure,_I_]}}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_for_slots_per_tuple_1_to_max_slot_do_asse,
      0,
      cst_tuple_pool_src_tuple_pool_ml$8,
      321,
      2,
      203,
      _H_);
    function dummy(r){return r[6]}
    function first_free(r){return r[5]}
    function set_first_free(r,v){r[5] = v;return 0}
    function next_id(r){return r[4]}
    function set_next_id(r,v){r[4] = v;return 0}
    function length(r){return r[3]}
    function set_length(r,v){r[3] = v;return 0}
    function capacity(r){return r[2]}
    function slots_per_tuple$0(r){return r[1]}
    function _J_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v]}
    var _K_=0,dummy$0=[0,function(param){return 0},cst_dummy,_K_,dummy,_J_];
    function _L_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6]]}
    var
     _M_=[0,set_first_free],
     first_free$0=
      [0,function(param){return 0},cst_first_free,_M_,first_free,_L_];
    function _N_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _O_=[0,set_next_id],
     next_id$0=[0,function(param){return 0},cst_next_id,_O_,next_id,_N_];
    function _P_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _Q_=[0,set_length],
     length$0=[0,function(param){return 0},cst_length,_Q_,length,_P_];
    function _R_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6]]}
    var
     _S_=0,
     capacity$0=[0,function(param){return 0},cst_capacity,_S_,capacity,_R_];
    function _T_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _U_=0,
     slots_per_tuple$1=
      [0,
       function(param){return 0},
       cst_slots_per_tuple,
       _U_,
       slots_per_tuple$0,
       _T_];
    function iter
     (slots_per_tuple_fun,
      capacity_fun,
      length_fun,
      next_id_fun,
      first_free_fun,
      dummy_fun)
     {caml_call1(slots_per_tuple_fun,slots_per_tuple$1);
      caml_call1(capacity_fun,capacity$0);
      caml_call1(length_fun,length$0);
      caml_call1(next_id_fun,next_id$0);
      caml_call1(first_free_fun,first_free$0);
      return caml_call1(dummy_fun,dummy$0)}
    function array_indices_per_tuple(t){return 1 + t[1] | 0}
    function array_length(t)
     {var _c6_=array_indices_per_tuple(t);return 1 + caml_mul(t[2],_c6_) | 0}
    function tuple_num_to_header_index(t,tuple_num)
     {return 1 + caml_mul(tuple_num,array_indices_per_tuple(t)) | 0}
    function tuple_num_to_first_slot_index(t,tuple_num)
     {return tuple_num_to_header_index(t,tuple_num) + 1 | 0}
    function metadata(t)
     {return caml_call2(Core_kernel_Uniform_array[18],t,metadata_index)}
    function length$1(t){return metadata(t)[3]}
    function sexp_of_t$5(sexp_of_ty,t)
     {var
       param=metadata(t),
       v_capacity=param[2],
       v_slots_per_tuple=param[1],
       v_length=param[3],
       v_next_id=param[4],
       v_first_free=param[5],
       v_dummy=param[6],
       arg=caml_call2(Core_kernel[431],Sexplib0_Sexp_conv[23],v_dummy),
       bnds=[0,[1,[0,_V_,[0,arg,0]]],0],
       arg$0=
        is_null$0(v_first_free)
         ?_E_
         :is_free(v_first_free)
           ?[1,[0,_F_,[0,[0,caml_call1(to_string,v_first_free)],0]]]
           :[1,[0,_G_,[0,[0,caml_call1(to_string,tuple_id(v_first_free))],0]]],
       bnds$0=[0,[1,[0,_W_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(sexp_of_t$2,v_next_id),
       bnds$1=[0,[1,[0,_X_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_length),
       bnds$2=[0,[1,[0,_Y_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel[339],v_capacity),
       bnds$3=[0,[1,[0,_Z_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[339],v_slots_per_tuple),
       bnds$4=[0,[1,[0,___,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function unsafe_header(t,header_index)
     {return caml_call2(Core_kernel_Uniform_array[18],t,header_index)}
    function unsafe_set_header(t,header_index,header)
     {return caml_call3(Core_kernel_Uniform_array[39],t,header_index,header)}
    function header_index_is_in_bounds(t,header_index)
     {var _c4_=caml_call2(Core_kernel[88],header_index,start_of_tuples_index);
      if(_c4_)
       {var _c5_=caml_call1(Core_kernel_Uniform_array[16],t);
        return caml_call2(Core_kernel[92],header_index,_c5_)}
      return _c4_}
    function unsafe_pointer_is_live(t,pointer)
     {var
       header_index$0=header_index(pointer),
       header=unsafe_header(t,header_index$0),
       _c1_=is_used(header);
      if(_c1_)
       {var
         _c2_=masked_tuple_id(pointer),
         _c3_=tuple_id(header) & tuple_id_mask;
        return caml_call2(Core_kernel[90],_c3_,_c2_)}
      return _c1_}
    function pointer_is_valid(t,pointer)
     {var _c0_=header_index_is_in_bounds(t,header_index(pointer));
      return _c0_?unsafe_pointer_is_live(t,pointer):_c0_}
    function id_of_pointer(t,pointer){return caml_call1(of_int$0,pointer)}
    function is_valid_header_index(t,header_index)
     {var
       metadata$0=metadata(t),
       _cY_=header_index_is_in_bounds(t,header_index);
      if(_cY_)
       {var
         _cZ_=
          runtime.caml_mod
           (header_index - 1 | 0,array_indices_per_tuple(metadata$0));
        return caml_call2(Core_kernel[90],0,_cZ_)}
      return _cY_}
    function pointer_of_id_exn(t$2,id)
     {try
       {try
         {var t=caml_call1(to_int_exn,id);
          if(t === -15)
           var t$0=t;
          else
           {var
             _cV_=of_int(masked_tuple_id(t)),
             should_equal=create(header_index(t),_cV_);
            if(t === should_equal)
             var t$1=t;
            else
             var
              _cW_=function(param){return _y_},
              t$1=
               caml_call5
                (_d_,
                 0,
                 _z_,
                 cst_should_equal,
                 should_equal,
                 function(_cX_){return sexp_of_t$3(_cW_,_cX_)});
            var t$0=t$1}
          var pointer=t$0}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var
           pointer=
            caml_call5
             (_d_,
              0,
              _x_,
              cst_Pointer_of_id_exn_got_strange_id,
              [0,id,exn],
              function(param)
               {var
                 v1=param[2],
                 v0=param[1],
                 v0$0=caml_call1(sexp_of_t$4,v0),
                 v1$0=caml_call1(Core_kernel[508],v1);
                return [1,[0,v0$0,[0,v1$0,0]]]})}
        if(1 - (pointer === -15?1:0))
         {var header_index$0=header_index(pointer);
          if(1 - is_valid_header_index(t$2,header_index$0))
           caml_call5
            (_d_,
             0,
             _ab_,
             cst_invalid_header_index,
             header_index$0,
             Core_kernel[339]);
          if(1 - unsafe_pointer_is_live(t$2,pointer))
           caml_call1(Core_kernel[6],cst_pointer_not_live)}
        return pointer}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return caml_call5
                (_d_,
                 0,
                 _aa_,
                 cst_Pool_pointer_of_id_exn_got_invalid_id,
                 [0,id,t$2,exn],
                 function(param)
                  {var
                    v2=param[3],
                    v1=param[2],
                    v0=param[1],
                    v0$0=caml_call1(_A_[10],v0),
                    v1$0=sexp_of_t$5(function(param){return _$_},v1),
                    v2$0=caml_call1(Core_kernel[508],v2);
                   return [1,[0,v0$0,[0,v1$0,[0,v2$0,0]]]]})}}
    function invariant$1(invariant_a,t)
     {try
       {var
         t$0=metadata(t),
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t$0))},
         _cu_=
          function(param)
           {if(param)
             {var
               dummy=param[1],
               _cN_=t$0[1],
               _cO_=caml_call1(Core_kernel_Uniform_array[16],dummy);
              if(caml_call2(Core_kernel[90],_cO_,_cN_))return 0;
              throw [0,Assert_failure,_ae_]}
            var _cQ_=t$0[2] - 1 | 0,_cP_=0;
            if(! (_cQ_ < 0))
             {var tuple_num=_cP_;
              for(;;)
               {var
                 header_index=tuple_num_to_header_index(t$0,tuple_num),
                 header=unsafe_header(t,header_index);
                if(is_free(header))
                 {var
                   first_slot=tuple_num_to_first_slot_index(t$0,tuple_num),
                   _cS_=t$0[1] - 1 | 0,
                   _cR_=0;
                  if(! (_cS_ < 0))
                   {var slot=_cR_;
                    for(;;)
                     {if
                       (typeof
                        caml_call2
                         (Core_kernel_Uniform_array[17],t,first_slot + slot | 0)
                        !==
                        "number")
                       throw [0,Assert_failure,_af_];
                      var _cU_=slot + 1 | 0;
                      if(_cS_ !== slot){var slot=_cU_;continue}
                      break}}}
                var _cT_=tuple_num + 1 | 0;
                if(_cQ_ !== tuple_num){var tuple_num=_cT_;continue}
                break}}
            return 0},
         _cv_=function(_cM_){return check(_cu_,_cM_)},
         _cw_=
          function(first_free)
           {var
             free=caml_call2(Core_kernel_Array[35],t$0[2],0),
             r=[0,first_free];
            for(;;)
             {if(is_null$0(r[1]))return 0;
              var header=r[1];
              if(is_free(header))
               {if(is_valid_header_index(t,header))
                 {var
                   tuple_num=
                    caml_div(header - 1 | 0,array_indices_per_tuple(t$0));
                  if(caml_check_bound(free,tuple_num)[1 + tuple_num])
                   caml_call5
                    (_d_,
                     0,
                     _ag_,
                     cst_cycle_in_free_list,
                     tuple_num,
                     Core_kernel[339]);
                  caml_check_bound(free,tuple_num)[1 + tuple_num] = 1;
                  r[1] = unsafe_header(t,header);
                  continue}
                throw [0,Assert_failure,_ah_]}
              throw [0,Assert_failure,_ai_]}},
         _cx_=function(_cL_){return check(_cw_,_cL_)},
         _cy_=function(_cK_){return check(invariant,_cK_)},
         _cz_=
          function(length)
           {if(caml_call2(Core_kernel[88],length,0))
             {if(caml_call2(Core_kernel[89],length,t$0[2]))return 0;
              throw [0,Assert_failure,_aj_]}
            throw [0,Assert_failure,_ak_]},
         _cA_=function(_cJ_){return check(_cz_,_cJ_)},
         _cB_=
          function(capacity)
           {if(caml_call2(Core_kernel[88],capacity,0))
             {var
               _cH_=array_length(t$0),
               _cI_=caml_call1(Core_kernel_Uniform_array[16],t);
              if(caml_call2(Core_kernel[90],_cI_,_cH_))return 0;
              throw [0,Assert_failure,_al_]}
            throw [0,Assert_failure,_am_]},
         _cC_=function(_cG_){return check(_cB_,_cG_)},
         _cD_=
          function(slots_per_tuple)
           {if(caml_call2(Core_kernel[91],slots_per_tuple,0))return 0;
            throw [0,Assert_failure,_an_]},
         _cE_=
          iter
           (function(_cF_){return check(_cD_,_cF_)},_cC_,_cA_,_cy_,_cx_,_cv_);
        return _cE_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return caml_call5
                (_d_,
                 0,
                 _ad_,
                 cst_Pool_invariant_failed,
                 [0,exn,t],
                 function(param)
                  {var
                    v1=param[2],
                    v0=param[1],
                    v0$0=caml_call1(Core_kernel[508],v0),
                    v1$0=sexp_of_t$5(function(param){return _ac_},v1);
                   return [1,[0,v0$0,[0,v1$0,0]]]})}}
    function capacity$1(t){return metadata(t)[2]}
    function is_full(t)
     {var t$0=metadata(t);return caml_call2(Core_kernel[90],t$0[3],t$0[2])}
    function unsafe_add_to_free_list(t,metadata,header_index)
     {unsafe_set_header(t,header_index,metadata[5]);
      metadata[5] = header_index;
      return 0}
    function set_metadata(t,metadata)
     {return caml_call3
              (Core_kernel_Uniform_array[19],t,metadata_index,metadata)}
    function create_array(metadata)
     {var
       _ct_=array_length(metadata),
       t=caml_call1(Core_kernel_Uniform_array[37],_ct_);
      set_metadata(t,metadata);
      return t}
    function unsafe_init_range(t,metadata,lo,hi)
     {var _cm_=metadata[6];
      if(_cm_)
       {var dummy=_cm_[1],_cn_=hi - 1 | 0;
        if(! (_cn_ < lo))
         {var tuple_num$0=lo;
          for(;;)
           {var
             _cq_=metadata[1],
             _cr_=tuple_num_to_first_slot_index(metadata,tuple_num$0);
            caml_call5(Core_kernel_Uniform_array[29],dummy,0,t,_cr_,_cq_);
            var _cs_=tuple_num$0 + 1 | 0;
            if(_cn_ !== tuple_num$0){var tuple_num$0=_cs_;continue}
            break}}}
      var _co_=hi - 1 | 0;
      if(! (_co_ < lo))
       {var tuple_num=_co_;
        for(;;)
         {unsafe_add_to_free_list
           (t,metadata,tuple_num_to_header_index(metadata,tuple_num));
          var _cp_=tuple_num - 1 | 0;
          if(lo !== tuple_num){var tuple_num=_cp_;continue}
          break}}
      return 0}
    function create_with_dummy(slots,capacity,dummy)
     {if(caml_call2(Core_kernel[92],capacity,0))
       caml_call5
        (_d_,
         0,
         _ao_,
         cst_Pool_create_got_invalid_capacity,
         capacity,
         Core_kernel[339]);
      var
       slots_per_tuple=caml_call1(_c_[2],slots),
       max_capacity$0=max_capacity(slots_per_tuple);
      if(caml_call2(Core_kernel[91],capacity,max_capacity$0))
       caml_call5
        (_d_,
         0,
         _aq_,
         cst_Pool_create_got_too_large_capacity,
         [0,capacity,[0,5442212,max_capacity$0]],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=caml_call1(Core_kernel[339],v0),
            v0$1=v1[2],
            v1$0=[1,[0,_ap_,[0,caml_call1(Core_kernel[339],v0$1),0]]];
           return [1,[0,v0$0,[0,v1$0,0]]]});
      var
       metadata=[0,slots_per_tuple,capacity,0,init,null$1,dummy],
       t=create_array(metadata);
      unsafe_init_range(t,metadata,0,capacity);
      return t}
    function create$0(slots,capacity,dummy)
     {var
       _cl_=caml_call1(_c_[2],slots),
       dummy$0=
        caml_call2(Core_kernel[90],_cl_,1)
         ?caml_call1(Core_kernel_Uniform_array[14],dummy)
         :dummy;
      return create_with_dummy(slots,capacity,[0,dummy$0])}
    function grow(capacity$0,t)
     {var
       match=metadata(t),
       old_capacity=match[2],
       slots_per_tuple=match[1],
       length=match[3],
       next_id=match[4],
       dummy$0=match[6];
      if(capacity$0)
       {var capacity=capacity$0[1];
        if(caml_call2(Core_kernel[89],capacity,old_capacity))
         caml_call5
          (_d_,
           0,
           _i_,
           cst_Pool_grow_got_too_small_capacity,
           [0,[0,-1011154630,capacity],[0,138253074,old_capacity]],
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=v0[2],
              v0$1=[1,[0,_g_,[0,caml_call1(Core_kernel[339],v0$0),0]]],
              v0$2=v1[2],
              v1$0=[1,[0,_h_,[0,caml_call1(Core_kernel[339],v0$2),0]]];
             return [1,[0,v0$1,[0,v1$0,0]]]});
        var _cg_=capacity}
      else
       var
        _cg_=
         caml_call2(Core_kernel[90],old_capacity,0)?1:old_capacity * 2 | 0;
      var
       _ch_=max_capacity(slots_per_tuple),
       capacity$1=caml_call2(Core_kernel[96],_ch_,_cg_);
      if(caml_call2(Core_kernel[90],capacity$1,old_capacity))
       caml_call5
        (_d_,
         0,
         _ar_,
         cst_Pool_grow_cannot_grow_pool_capacity_already_at_maximum,
         capacity$1,
         Core_kernel[339]);
      var
       metadata$2=[0,slots_per_tuple,capacity$1,length,next_id,null$1,dummy$0],
       t$0=create_array(metadata$2),
       _ci_=caml_mul(old_capacity,array_indices_per_tuple(metadata$2));
      caml_call5
       (Core_kernel_Uniform_array[29],
        t,
        start_of_tuples_index,
        t$0,
        start_of_tuples_index,
        _ci_);
      var metadata$0=metadata(t),_ca_=metadata$0[6];
      if(_ca_)
       {var dummy=_ca_[1],_cc_=metadata$0[2] - 1 | 0,_cb_=0;
        if(! (_cc_ < 0))
         {var tuple_num=_cb_;
          for(;;)
           {var header_index=tuple_num_to_header_index(metadata$0,tuple_num);
            unsafe_set_header(t,header_index,null$1);
            caml_call5
             (Core_kernel_Uniform_array[29],
              dummy,
              0,
              t,
              header_index + 1 | 0,
              metadata$0[1]);
            var _cd_=tuple_num + 1 | 0;
            if(_cc_ !== tuple_num){var tuple_num=_cd_;continue}
            break}}}
      else
       {var _ce_=caml_call1(Core_kernel_Uniform_array[16],t) - 1 | 0;
        if(! (_ce_ < 1))
         {var i=start_of_tuples_index;
          for(;;)
           {caml_call3(Core_kernel_Uniform_array[20],t,i,0);
            var _cf_=i + 1 | 0;
            if(_ce_ !== i){var i=_cf_;continue}
            break}}}
      var metadata$1=[0,metadata$0[1],0,0,metadata$0[4],null$1,metadata$0[6]];
      set_metadata(t,metadata$1);
      unsafe_init_range(t$0,metadata$2,old_capacity,capacity$1);
      var _cj_=old_capacity - 1 | 0;
      if(! (_cj_ < 0))
       {var tuple_num$0=_cj_;
        for(;;)
         {var
           header_index$0=tuple_num_to_header_index(metadata$2,tuple_num$0),
           header=unsafe_header(t$0,header_index$0);
          if(1 - is_used(header))
           unsafe_add_to_free_list(t$0,metadata$2,header_index$0);
          var _ck_=tuple_num$0 - 1 | 0;
          if(0 !== tuple_num$0){var tuple_num$0=_ck_;continue}
          break}}
      return t$0}
    function malloc(t)
     {var metadata$0=metadata(t),first_free=metadata$0[5];
      if(is_null$0(first_free))
       {var _b9_=function(param){return _as_};
        caml_call5
         (_d_,
          0,
          _at_,
          cst_Pool_malloc_of_full_pool,
          t,
          function(_b$_){return sexp_of_t$5(_b9_,_b$_)})}
      metadata$0[5] = unsafe_header(t,first_free);
      metadata$0[3] = metadata$0[3] + 1 | 0;
      var tuple_id=metadata$0[4];
      unsafe_set_header(t,first_free,-1 - tuple_id | 0);
      var
       _b__=
        arch_sixtyfour
         ?tuple_id + 1 | 0
         :caml_call2(Core_kernel[90],tuple_id,max_value)?0:tuple_id + 1 | 0;
      metadata$0[4] = _b__;
      return create(first_free,tuple_id)}
    function unsafe_free(t,pointer)
     {var metadata$0=metadata(t);
      metadata$0[3] = metadata$0[3] - 1 | 0;
      unsafe_add_to_free_list(t,metadata$0,header_index(pointer));
      var _b3_=metadata$0[6];
      if(_b3_)
       {var dummy=_b3_[1],_b4_=metadata$0[1],_b5_=first_slot_index(pointer);
        return caml_call5(Core_kernel_Uniform_array[31],dummy,0,t,_b5_,_b4_)}
      var pos=first_slot_index(pointer),_b7_=metadata$0[1] - 1 | 0,_b6_=0;
      if(! (_b7_ < 0))
       {var i=_b6_;
        for(;;)
         {caml_call2(Core_kernel_Uniform_array[41],t,pos + i | 0);
          var _b8_=i + 1 | 0;
          if(_b7_ !== i){var i=_b8_;continue}
          break}}
      return 0}
    function free(t,pointer)
     {if(1 - pointer_is_valid(t,pointer))
       caml_call5
        (_d_,
         0,
         _aw_,
         cst_Pool_free_of_invalid_pointer,
         [0,pointer,t],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=sexp_of_t$3(function(param){return _au_},v0),
            v1$0=sexp_of_t$5(function(param){return _av_},v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      return unsafe_free(t,pointer)}
    function new1(t,a0)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      return pointer}
    function new2(t,a0,a1)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      return pointer}
    function new3(t,a0,a1,a2)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      return pointer}
    function new4(t,a0,a1,a2,a3)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      return pointer}
    function new5(t,a0,a1,a2,a3,a4)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      return pointer}
    function new6(t,a0,a1,a2,a3,a4,a5)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      return pointer}
    function new7(t,a0,a1,a2,a3,a4,a5,a6)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      return pointer}
    function new8(t,a0,a1,a2,a3,a4,a5,a6,a7)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      return pointer}
    function new9(t,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      return pointer}
    function new10(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      return pointer}
    function new11(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      return pointer}
    function new12(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 12 | 0,a11);
      return pointer}
    function new13(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 12 | 0,a11);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 13 | 0,a12);
      return pointer}
    function new14(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 12 | 0,a11);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 13 | 0,a12);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 14 | 0,a13);
      return pointer}
    function get(t,p,slot)
     {var _b2_=slot_index(p,slot);
      return caml_call2(Core_kernel_Uniform_array[17],t,_b2_)}
    function unsafe_get(t,p,slot)
     {var _b1_=slot_index(p,slot);
      return caml_call2(Core_kernel_Uniform_array[18],t,_b1_)}
    function set(t,p,slot,x)
     {var _b0_=slot_index(p,slot);
      return caml_call3(Core_kernel_Uniform_array[19],t,_b0_,x)}
    function unsafe_set(t,p,slot,x)
     {var _bZ_=slot_index(p,slot);
      return caml_call3(Core_kernel_Uniform_array[20],t,_bZ_,x)}
    function get_tuple(t,pointer)
     {var metadata$0=metadata(t),len=metadata$0[1];
      if(caml_call2(Core_kernel[90],len,1))return get(t,pointer,Slot[3]);
      var _bY_=first_slot_index(pointer);
      return caml_call3(Core_kernel_Uniform_array[32],t,_bY_,len)}
    function create$1(slots,capacity)
     {return create_with_dummy(slots,capacity,0)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    function _aX_(Pool)
     {var Slots=Pool[1],Slot=Pool[2];
      function sexp_of_t(of_slots,param)
       {var
         v_is_valid=param[1],
         v_pointer=param[2],
         arg=caml_call2(Pool[3][1],of_slots,v_pointer),
         bnds=[0,[1,[0,_aT_,[0,arg,0]]],0],
         arg$0=caml_call1(Core_kernel[291],v_is_valid),
         bnds$0=[0,[1,[0,_aU_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      var
       Typename_of_t=caml_call1(Typerep_lib_Make_typename[2],[0,name$1]),
       typename_of_t=Typename_of_t[2];
      function typerep_of_t(of_slots)
       {var name_of_t=caml_call1(Typename_of_t[1],of_slots);
        return [9,
                [0,
                 name_of_t,
                 [0,
                  [246,
                   function(_bQ_)
                    {var _bR_=1;
                     function _bS_(t){return t[1]}
                     var
                      _bT_=caml_call2(Typerep_lib_Typename[1],0,0),
                      field0=
                       caml_call1
                        (Typerep_lib_Std[1][8][7],
                         [0,cst_is_valid,Core_kernel[293],0,_bT_,_bS_,_bR_]),
                      _bU_=0;
                     function _bV_(t){return t[2]}
                     var
                      _bW_=caml_call2(Typerep_lib_Typename[1],0,0),
                      _bX_=
                       [0,
                        cst_pointer,
                        caml_call1(Pool[3][2],of_slots),
                        1,
                        _bW_,
                        _bV_,
                        _bU_],
                      field1=caml_call1(Typerep_lib_Std[1][8][7],_bX_),
                      typename=caml_call1(Typerep_lib_Std[1][1][2],name_of_t),
                      has_double_array_tag=
                       caml_call1
                        (Typerep_lib_Typerep_obj[4],
                         [0,Typerep_lib_Typerep_obj[3],Typerep_lib_Typerep_obj[3]]),
                      fields=[0,[0,field0],[0,field1]];
                     function create(param)
                      {var
                        get=param[1],
                        is_valid=caml_call1(get,field0),
                        pointer=caml_call1(get,field1);
                       return [0,is_valid,pointer]}
                     return [7,
                             caml_call1
                              (Typerep_lib_Std[1][10][7],
                               [0,typename,fields,has_double_array_tag,create])]}]]]]}
      function create(pointer){return [0,1,pointer]}
      function null$0(param){return [0,0,caml_call1(Pool[3][4],0)]}
      function phys_compare(t1,t2){return caml_call2(Pool[3][6],t1[2],t2[2])}
      function phys_equal(t1,t2){return caml_call2(Pool[3][7],t1[2],t2[2])}
      function is_null(t){return caml_call1(Pool[3][5],t[2])}
      function follow(t)
       {if(1 - t[1])
         {var _bO_=function(param){return _aV_};
          caml_call5
           (_d_,
            0,
            _aW_,
            cst_attempt_to_use_invalid_pointer,
            t,
            function(_bP_){return sexp_of_t(_bO_,_bP_)})}
        return t[2]}
      function invalidate(t){t[1] = 0;return 0}
      var Id=Pool[3][8],sexp_of_t$0=Pool[4],invariant=Pool[5],length=Pool[12];
      function pointer_is_valid(t,param)
       {var is_valid=param[1],pointer=param[2];
        return is_valid?caml_call2(Pool[6],t,pointer):is_valid}
      function id_of_pointer(t,pointer)
       {return caml_call2(Pool[7],t,pointer[2])}
      function pointer_of_id_exn(t,id)
       {var
         pointer=caml_call2(Pool[8],t,id),
         is_valid=caml_call2(Pool[6],t,pointer);
        return [0,is_valid,pointer]}
      var
       create$0=Pool[9],
       capacity=Pool[11],
       max_capacity=Pool[10],
       grow=Pool[13],
       is_full=Pool[14];
      function get_tuple(t,p)
       {var _bN_=follow(p);return caml_call2(Pool[31],t,_bN_)}
      function get(t,p){var _bM_=follow(p);return caml_call2(Pool[32],t,_bM_)}
      function unsafe_get(t,p)
       {var _bL_=follow(p);return caml_call2(Pool[33],t,_bL_)}
      function set(t,p,slot,v)
       {var _bK_=follow(p);return caml_call4(Pool[34],t,_bK_,slot,v)}
      function unsafe_set(t,p,slot,v)
       {var _bJ_=follow(p);return caml_call4(Pool[35],t,_bJ_,slot,v)}
      function unsafe_free(t,p)
       {var _bI_=follow(p);caml_call2(Pool[16],t,_bI_);return invalidate(p)}
      function free(t,p)
       {var _bH_=follow(p);caml_call2(Pool[15],t,_bH_);return invalidate(p)}
      function new1(t,a0){return create(caml_call2(Pool[17],t,a0))}
      function new2(t,a0,a1){return create(caml_call3(Pool[18],t,a0,a1))}
      function new3(t,a0,a1,a2)
       {return create(caml_call4(Pool[19],t,a0,a1,a2))}
      function new4(t,a0,a1,a2,a3)
       {return create(caml_call5(Pool[20],t,a0,a1,a2,a3))}
      function new5(t,a0,a1,a2,a3,a4)
       {return create(caml_call6(Pool[21],t,a0,a1,a2,a3,a4))}
      function new6(t,a0,a1,a2,a3,a4,a5)
       {return create(caml_call7(Pool[22],t,a0,a1,a2,a3,a4,a5))}
      function new7(t,a0,a1,a2,a3,a4,a5,a6)
       {return create(caml_call8(Pool[23],t,a0,a1,a2,a3,a4,a5,a6))}
      function new8(t,a0,a1,a2,a3,a4,a5,a6,a7)
       {return create(caml_call9(Pool[24],t,a0,a1,a2,a3,a4,a5,a6,a7))}
      function new9(t,a0,a1,a2,a3,a4,a5,a6,a7,a8)
       {return create(caml_call10(Pool[25],t,a0,a1,a2,a3,a4,a5,a6,a7,a8))}
      function new10(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
       {return create(caml_call11(Pool[26],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9))}
      function new11(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
       {return create
                (caml_call12(Pool[27],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10))}
      function new12(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
       {return create
                (caml_call13(Pool[28],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11))}
      function new13(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
       {return create
                (caml_call14
                  (Pool[29],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12))}
      function new14(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
       {return create
                (caml_call15
                  (Pool[30],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13))}
      return [0,
              Slots,
              Slot,
              [0,
               sexp_of_t,
               typerep_of_t,
               typename_of_t,
               null$0,
               is_null,
               phys_compare,
               phys_equal,
               Id],
              sexp_of_t$0,
              invariant,
              pointer_is_valid,
              id_of_pointer,
              pointer_of_id_exn,
              create$0,
              max_capacity,
              capacity,
              length,
              grow,
              is_full,
              free,
              unsafe_free,
              new1,
              new2,
              new3,
              new4,
              new5,
              new6,
              new7,
              new8,
              new9,
              new10,
              new11,
              new12,
              new13,
              new14,
              get_tuple,
              get,
              unsafe_get,
              set,
              unsafe_set]}
    var
     Tuple_pool$0=
      [0,
       _c_,
       Slot,
       [0,sexp_of_t$3,typerep_of_t,_q_,null$0,is_null,_s_,phys_equal,_A_],
       sexp_of_t$5,
       invariant$1,
       pointer_is_valid,
       id_of_pointer,
       pointer_of_id_exn,
       create$0,
       max_capacity,
       capacity$1,
       length$1,
       grow,
       is_full,
       free,
       unsafe_free,
       new1,
       new2,
       new3,
       new4,
       new5,
       new6,
       new7,
       new8,
       new9,
       new10,
       new11,
       new12,
       new13,
       new14,
       get_tuple,
       get,
       unsafe_get,
       set,
       unsafe_set,
       [0,
        _c_,
        Slot,
        [0,sexp_of_t$3,typerep_of_t,_q_,null$0,is_null,_s_,phys_equal,_A_],
        sexp_of_t$5,
        invariant$1,
        pointer_is_valid,
        id_of_pointer,
        pointer_of_id_exn,
        max_capacity,
        capacity$1,
        length$1,
        grow,
        is_full,
        free,
        unsafe_free,
        new1,
        new2,
        new3,
        new4,
        new5,
        new6,
        new7,
        new8,
        new9,
        new10,
        new11,
        new12,
        new13,
        new14,
        get_tuple,
        get,
        unsafe_get,
        set,
        unsafe_set,
        create$1],
       function(Pool)
        {var check_invariant=[0,1],show_messages=[0,1];
         function debug(name,ts,arg,sexp_of_arg,sexp_of_result,f)
          {if(check_invariant[1])
            {var _bB_=function(_bG_){return 0},_bC_=caml_call1(Pool[5],_bB_);
             caml_call2(Core_kernel_List[8],ts,_bC_)}
           if(show_messages[1])
            {var _bD_=concat([0,prefix,[0,name,0]]);
             caml_call3(Core_kernel_Debug[2],_bD_,arg,sexp_of_arg)}
           var result_or_exn=caml_call1(Core_kernel_Result[43],f);
           if(show_messages[1])
            {var
              _bE_=
               caml_call2
                (Core_kernel_Result[10],sexp_of_result,Core_kernel[508]),
              _bF_=concat([0,prefix,[0,name,_ax_]]);
             caml_call3(Core_kernel_Debug[2],_bF_,result_or_exn,_bE_)}
           return caml_call1(Core_kernel_Result[30],result_or_exn)}
         var
          Slots=Pool[1],
          Slot=Pool[2],
          sexp_of_t=Pool[3][1],
          Typename_of_t=caml_call1(Typerep_lib_Make_typename[2],[0,name$0]),
          _a0_=Typename_of_t[2];
         function typerep_of_t(of_slots)
          {var name_of_t=caml_call1(Typename_of_t[1],of_slots);
           return [9,
                   [0,
                    name_of_t,
                    [0,
                     [246,function(_bA_){return caml_call1(Pool[3][2],of_slots)}]]]]}
         function phys_compare(t1,t2)
          {function _by_(param){return caml_call2(Pool[3][6],t1,t2)}
           var _bz_=Core_kernel[339];
           return debug
                   (cst_Pointer_phys_compare,
                    0,
                    [0,t1,t2],
                    function(param)
                     {var
                       v1=param[2],
                       v0=param[1],
                       v0$0=caml_call2(sexp_of_t,function(param){return _ay_},v0),
                       v1$0=caml_call2(sexp_of_t,function(param){return _az_},v1);
                      return [1,[0,v0$0,[0,v1$0,0]]]},
                    _bz_,
                    _by_)}
         function phys_equal(t1,t2)
          {function _bw_(param){return caml_call2(Pool[3][7],t1,t2)}
           var _bx_=Core_kernel[291];
           return debug
                   (cst_Pointer_phys_equal,
                    0,
                    [0,t1,t2],
                    function(param)
                     {var
                       v1=param[2],
                       v0=param[1],
                       v0$0=caml_call2(sexp_of_t,function(param){return _aA_},v0),
                       v1$0=caml_call2(sexp_of_t,function(param){return _aB_},v1);
                      return [1,[0,v0$0,[0,v1$0,0]]]},
                    _bx_,
                    _bw_)}
         function is_null(t)
          {function _bu_(param){return caml_call1(Pool[3][5],t)}
           var _bv_=Core_kernel[291];
           return debug
                   (cst_Pointer_is_null,
                    0,
                    t,
                    caml_call1(sexp_of_t,function(param){return _aC_}),
                    _bv_,
                    _bu_)}
         var
          _a1_=Pool[3][4],
          _a2_=Pool[3][8][5],
          _a3_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),0,_a2_],0],
          _a4_=
           caml_call1
            (Bin_prot_Shape[4][1],cst_tuple_pool_src_tuple_pool_ml_968_6),
          group=caml_call2(Bin_prot_Shape[6],_a4_,_a3_),
          _a5_=caml_call1(Bin_prot_Shape[2][1],cst_t$0),
          bin_shape_t=caml_call1(caml_call2(Bin_prot_Shape[14],group,_a5_),0),
          bin_size_t=Pool[3][8][1],
          bin_write_t=Pool[3][8][2],
          bin_writer_t=[0,bin_size_t,bin_write_t],
          bin_read_t=Pool[3][8][4],
          bin_read_t$0=Pool[3][8][3],
          bin_reader_t=[0,bin_read_t$0,bin_read_t],
          bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t],
          t_of_sexp=Pool[3][8][9],
          sexp_of_t$0=Pool[3][8][10];
         function of_int63(i)
          {function _bt_(param){return caml_call1(Pool[3][8][12],i)}
           return debug
                   (cst_Pointer_Id_of_int63,
                    0,
                    i,
                    Core_kernel_Int63[96],
                    sexp_of_t$0,
                    _bt_)}
         function to_int63(t)
          {function _bs_(param){return caml_call1(Pool[3][8][11],t)}
           return debug
                   (cst_Pointer_Id_to_int63,
                    0,
                    t,
                    sexp_of_t$0,
                    Core_kernel_Int63[96],
                    _bs_)}
         var sexp_of_t$1=Pool[4],invariant=Pool[5],length=Pool[12];
         function id_of_pointer(t,pointer)
          {function _br_(param){return caml_call2(Pool[7],t,pointer)}
           return debug
                   (cst_id_of_pointer,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aD_}),
                    sexp_of_t$0,
                    _br_)}
         function pointer_of_id_exn(t,id)
          {function _bq_(param){return caml_call2(Pool[8],t,id)}
           return debug
                   (cst_pointer_of_id_exn,
                    [0,t,0],
                    id,
                    sexp_of_t$0,
                    caml_call1(sexp_of_t,function(param){return _aE_}),
                    _bq_)}
         function pointer_is_valid(t,pointer)
          {function _bo_(param){return caml_call2(Pool[6],t,pointer)}
           var _bp_=Core_kernel[291];
           return debug
                   (cst_pointer_is_valid,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aF_}),
                    _bp_,
                    _bo_)}
         function create(slots,capacity,dummy)
          {function _bm_(param)
            {return caml_call3(Pool[9],slots,capacity,dummy)}
           var _bn_=caml_call1(sexp_of_t$1,function(param){return _aG_});
           return debug(cst_create,0,capacity,Core_kernel[339],_bn_,_bm_)}
         function max_capacity(slots_per_tuple)
          {function _bl_(param){return caml_call1(Pool[10],slots_per_tuple)}
           return debug
                   (cst_max_capacity,
                    0,
                    slots_per_tuple,
                    Core_kernel[339],
                    Core_kernel[339],
                    _bl_)}
         function capacity(t)
          {function _bj_(param){return caml_call1(Pool[11],t)}
           var _bk_=Core_kernel[339];
           return debug
                   (cst_capacity$0,
                    [0,t,0],
                    t,
                    caml_call1(sexp_of_t$1,function(param){return _aH_}),
                    _bk_,
                    _bj_)}
         function grow(capacity,t)
          {function _bh_(param){return caml_call2(Pool[13],capacity,t)}
           var _bi_=caml_call1(sexp_of_t$1,function(param){return _aI_});
           return debug
                   (cst_grow,
                    [0,t,0],
                    [0,-1011154630,capacity],
                    function(param)
                     {var v0=param[2];
                      return [1,
                              [0,
                               _aJ_,
                               [0,caml_call2(Core_kernel[431],Core_kernel[339],v0),0]]]},
                    _bi_,
                    _bh_)}
         function is_full(t)
          {function _bf_(param){return caml_call1(Pool[14],t)}
           var _bg_=Core_kernel[291];
           return debug
                   (cst_is_full,
                    [0,t,0],
                    t,
                    caml_call1(sexp_of_t$1,function(param){return _aK_}),
                    _bg_,
                    _bf_)}
         function unsafe_free(t,p)
          {function _bd_(param){return caml_call2(Pool[16],t,p)}
           var _be_=Core_kernel[491];
           return debug
                   (cst_unsafe_free,
                    [0,t,0],
                    p,
                    caml_call1(sexp_of_t,function(param){return _aL_}),
                    _be_,
                    _bd_)}
         function free(t,p)
          {function _bb_(param){return caml_call2(Pool[15],t,p)}
           var _bc_=Core_kernel[491];
           return debug
                   (cst_free,
                    [0,t,0],
                    p,
                    caml_call1(sexp_of_t,function(param){return _aM_}),
                    _bc_,
                    _bb_)}
         function debug_new(t,f)
          {var _ba_=caml_call1(sexp_of_t,function(param){return _aN_});
           return debug(cst_new,[0,t,0],0,Core_kernel[491],_ba_,f)}
         function new1(t,a0)
          {return debug_new
                   (t,function(param){return caml_call2(Pool[17],t,a0)})}
         function new2(t,a0,a1)
          {return debug_new
                   (t,function(param){return caml_call3(Pool[18],t,a0,a1)})}
         function new3(t,a0,a1,a2)
          {return debug_new
                   (t,function(param){return caml_call4(Pool[19],t,a0,a1,a2)})}
         function new4(t,a0,a1,a2,a3)
          {return debug_new
                   (t,
                    function(param){return caml_call5(Pool[20],t,a0,a1,a2,a3)})}
         function new5(t,a0,a1,a2,a3,a4)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call6(Pool[21],t,a0,a1,a2,a3,a4)})}
         function new6(t,a0,a1,a2,a3,a4,a5)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call7(Pool[22],t,a0,a1,a2,a3,a4,a5)})}
         function new7(t,a0,a1,a2,a3,a4,a5,a6)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call8(Pool[23],t,a0,a1,a2,a3,a4,a5,a6)})}
         function new8(t,a0,a1,a2,a3,a4,a5,a6,a7)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call9(Pool[24],t,a0,a1,a2,a3,a4,a5,a6,a7)})}
         function new9(t,a0,a1,a2,a3,a4,a5,a6,a7,a8)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call10(Pool[25],t,a0,a1,a2,a3,a4,a5,a6,a7,a8)})}
         function new10(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call11
                              (Pool[26],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)})}
         function new11(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call12
                              (Pool[27],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)})}
         function new12(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call13
                              (Pool[28],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)})}
         function new13(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call14
                              (Pool[29],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)})}
         function new14(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call15
                              (Pool[30],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)})}
         function get_tuple(t,pointer)
          {function _a__(param){return caml_call2(Pool[31],t,pointer)}
           function _a$_(param){return _aO_}
           return debug
                   (cst_get_tuple,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aP_}),
                    _a$_,
                    _a__)}
         function debug_get(name,f,t,pointer)
          {function _a8_(param){return caml_call2(f,t,pointer)}
           function _a9_(param){return _aQ_}
           return debug
                   (name,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aR_}),
                    _a9_,
                    _a8_)}
         function get(t,pointer,slot)
          {return caml_call1(debug_get(cst_get,Pool[32],t,pointer),slot)}
         function unsafe_get(t,pointer,slot)
          {return caml_call1
                   (debug_get(cst_unsafe_get,Pool[33],t,pointer),slot)}
         function debug_set(name,f,t,pointer,slot,a)
          {function _a6_(param){return caml_call4(f,t,pointer,slot,a)}
           var _a7_=Core_kernel[491];
           return debug
                   (name,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aS_}),
                    _a7_,
                    _a6_)}
         function set(t,pointer,slot,a)
          {return debug_set(cst_set,Pool[34],t,pointer,slot,a)}
         function unsafe_set(t,pointer,slot,a)
          {return debug_set(cst_unsafe_set,Pool[35],t,pointer,slot,a)}
         return [0,
                 Slots,
                 Slot,
                 [0,
                  sexp_of_t,
                  typerep_of_t,
                  _a0_,
                  _a1_,
                  is_null,
                  phys_compare,
                  phys_equal,
                  [0,
                   bin_size_t,
                   bin_write_t,
                   bin_read_t$0,
                   bin_read_t,
                   bin_shape_t,
                   bin_writer_t,
                   bin_reader_t,
                   bin_t,
                   t_of_sexp,
                   sexp_of_t$0,
                   to_int63,
                   of_int63]],
                 sexp_of_t$1,
                 invariant,
                 pointer_is_valid,
                 id_of_pointer,
                 pointer_of_id_exn,
                 create,
                 max_capacity,
                 capacity,
                 length,
                 grow,
                 is_full,
                 free,
                 unsafe_free,
                 new1,
                 new2,
                 new3,
                 new4,
                 new5,
                 new6,
                 new7,
                 new8,
                 new9,
                 new10,
                 new11,
                 new12,
                 new13,
                 new14,
                 get_tuple,
                 get,
                 unsafe_get,
                 set,
                 unsafe_set,
                 check_invariant,
                 show_messages]},
       _aX_];
    caml_register_global(216,Tuple_pool$0,"Tuple_pool");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0dXBsZV9wb29sLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
