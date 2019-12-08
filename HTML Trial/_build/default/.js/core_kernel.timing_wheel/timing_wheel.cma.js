(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal;
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
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_timing_wheel=caml_new_string("timing_wheel"),
     cst_timing_wheel_src_import_ml=
      caml_new_string("timing_wheel/src/import.ml"),
     cst=caml_new_string(""),
     cst_timing_wheel$0=caml_new_string("timing_wheel"),
     cst_timing_wheel$1=caml_new_string("timing_wheel"),
     cst_timing_wheel$2=caml_new_string("timing_wheel"),
     cst_timing_wheel_src_timing_wheel_intf_ml=
      caml_new_string("timing_wheel/src/timing_wheel_intf.ml"),
     cst$0=caml_new_string(""),
     cst_timing_wheel$3=caml_new_string("timing_wheel"),
     cst_timing_wheel$4=caml_new_string("timing_wheel"),
     cst_Timing_wheel_next_alarm_fires_at_exn_with_all_alarms_in_max_interval=
      caml_new_string
       ("Timing_wheel.next_alarm_fires_at_exn with all alarms in max interval"),
     cst_Timing_wheel_next_alarm_fires_at_exn_of_empty_timing_wheel=
      caml_new_string
       ("Timing_wheel.next_alarm_fires_at_exn of empty timing wheel"),
     cst_Timing_wheel_max_alarm_time_in_min_interval_exn_of_empty_timing_wheel=
      caml_new_string
       ("Timing_wheel.max_alarm_time_in_min_interval_exn of empty timing wheel"),
     cst_Timing_wheel_min_alarm_interval_num_exn_of_empty_timing_wheel=
      caml_new_string
       ("Timing_wheel.min_alarm_interval_num_exn of empty timing_wheel"),
     cst_Timing_wheel_cannot_reschedule_alarm_not_in_timing_wheel=
      caml_new_string
       ("Timing_wheel cannot reschedule alarm not in timing wheel"),
     cst_Timing_wheel_cannot_schedule_alarm_before_start_of_current_interval=
      caml_new_string
       ("Timing_wheel cannot schedule alarm before start of current interval"),
     cst_Timing_wheel_cannot_schedule_alarm_that_far_in_the_future=
      caml_new_string
       ("Timing_wheel cannot schedule alarm that far in the future"),
     cst_Timing_wheel_create_got_start_before_the_epoch=
      caml_new_string("Timing_wheel.create got start before the epoch"),
     pos$9=caml_new_string("timing_wheel/src/timing_wheel.ml:1557:26"),
     pos$8=caml_new_string("timing_wheel/src/timing_wheel.ml:1554:26"),
     pos$7=caml_new_string("timing_wheel/src/timing_wheel.ml:1570:26"),
     pos$6=caml_new_string("timing_wheel/src/timing_wheel.ml:1575:26"),
     cst_Timing_wheel_interval_num_start_got_too_large_interval_num=
      caml_new_string
       ("Timing_wheel.interval_num_start got too large interval_num"),
     cst_Timing_wheel_interval_num_start_got_too_small_interval_num=
      caml_new_string
       ("Timing_wheel.interval_num_start got too small interval_num"),
     cst_Timing_wheel_interval_num_got_time_too_far_in_the_past=
      caml_new_string
       ("Timing_wheel.interval_num got time too far in the past"),
     cst_Timing_wheel_add_at_interval_num_got_invalid_interval_num=
      caml_new_string
       ("Timing_wheel.add_at_interval_num got invalid interval num"),
     cst_Priority_queue_add_elt_key_out_of_level_bounds=
      caml_new_string("Priority_queue.add_elt key out of level bounds"),
     arg=[0,caml_new_string("_")],
     cst_Priority_queue_add_elt_key_out_of_bounds=
      caml_new_string("Priority_queue.add_elt key out of bounds"),
     pos$5=caml_new_string("timing_wheel/src/timing_wheel.ml:979:32"),
     pos$4=caml_new_string("timing_wheel/src/timing_wheel.ml:976:32"),
     pos$3=caml_new_string("timing_wheel/src/timing_wheel.ml:875:31"),
     pos$2=caml_new_string("timing_wheel/src/timing_wheel.ml:882:30"),
     pos$1=caml_new_string("timing_wheel/src/timing_wheel.ml:894:31"),
     pos$0=caml_new_string("timing_wheel/src/timing_wheel.ml:912:32"),
     pos=caml_new_string("timing_wheel/src/timing_wheel.ml:917:30"),
     cst_Timing_wheel_got_invalid_alarm=
      caml_new_string("Timing_wheel got invalid alarm"),
     cst_alarm_precision=caml_new_string("alarm_precision"),
     cst_capacity=caml_new_string("capacity"),
     cst_level_bits$0=caml_new_string("level_bits"),
     cst_alarm_precision$0=caml_new_string("alarm_precision"),
     cst_Alarm_precision_of_span_floor_pow2_ns_got_non_positive_span=
      caml_new_string
       ("[Alarm_precision.of_span_floor_pow2_ns] got non-positive span"),
     cst_Alarm_precision_to_span_of_negative_power_of_two_nanoseconds=
      caml_new_string
       ("[Alarm_precision.to_span] of negative power of two nanoseconds"),
     cst_Level_bits_create_exn_requires_a_nonempty_list=
      caml_new_string("Level_bits.create_exn requires a nonempty list"),
     cst_Level_bits_create_exn_got_nonpositive_num_bits=
      caml_new_string("Level_bits.create_exn got nonpositive num bits"),
     cst_Level_bits_create_exn_got_too_many_bits=
      caml_new_string("Level_bits.create_exn got too many bits"),
     cst_timing_wheel$5=caml_new_string("timing_wheel"),
     cst_timing_wheel_src_timing_wheel_ml=
      caml_new_string("timing_wheel/src/timing_wheel.ml"),
     cst$1=caml_new_string(""),
     cst_timing_wheel$6=caml_new_string("timing_wheel"),
     cst_level_bits=caml_new_string("level_bits"),
     tp_loc=caml_new_string("timing_wheel/src/timing_wheel.ml.Config.t"),
     cst_slots=caml_new_string("slots"),
     cst_max_allowed_key=caml_new_string("max_allowed_key"),
     cst_min_allowed_key=caml_new_string("min_allowed_key"),
     cst_length=caml_new_string("length"),
     cst_diff_max_min_allowed_key=caml_new_string("diff_max_min_allowed_key"),
     cst_min_key_in_same_slot_mask=
      caml_new_string("min_key_in_same_slot_mask"),
     cst_keys_per_slot=caml_new_string("keys_per_slot"),
     cst_bits_per_slot=caml_new_string("bits_per_slot"),
     cst_slots_mask=caml_new_string("slots_mask"),
     cst_bits=caml_new_string("bits"),
     cst_index=caml_new_string("index"),
     cst_levels=caml_new_string("levels"),
     cst_elt_key_lower_bound=caml_new_string("elt_key_lower_bound"),
     cst_min_elt=caml_new_string("min_elt"),
     cst_pool=caml_new_string("pool"),
     cst_length$0=caml_new_string("length"),
     cst_priority_queue=caml_new_string("priority_queue"),
     cst_max_allowed_alarm_time=caml_new_string("max_allowed_alarm_time"),
     cst_now_interval_num_start=caml_new_string("now_interval_num_start"),
     cst_now=caml_new_string("now"),
     cst_max_interval_num=caml_new_string("max_interval_num"),
     cst_start=caml_new_string("start"),
     cst_config=caml_new_string("config"),
     cst_timing_wheel$7=caml_new_string("timing_wheel"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Time_ns_alternate_sexp=
      global_data.Core_kernel__Time_ns_alternate_sexp,
     Assert_failure=global_data.Assert_failure,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Base_Invariant=global_data.Base__Invariant,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel_Int63=global_data.Core_kernel__Int63,
     Tuple_pool=global_data.Tuple_pool,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     include=global_data.Core_kernel__Int,
     Core_kernel_Binable=global_data.Core_kernel__Binable,
     Base_Sexpable=global_data.Base__Sexpable,
     Timing_wheel=[0];
    caml_register_global(204,Timing_wheel,"Timing_wheel__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_timing_wheel);
    caml_call1(Expect_test_collector[4][1],cst_timing_wheel_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_timing_wheel$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_timing_wheel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Timing_wheel_Import=[0];
    caml_register_global(208,Timing_wheel_Import,"Timing_wheel__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_timing_wheel$2);
    caml_call1
     (Expect_test_collector[4][1],cst_timing_wheel_src_timing_wheel_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_timing_wheel$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_timing_wheel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Timing_wheel_Timing_wheel_intf=[0];
    caml_register_global
     (209,Timing_wheel_Timing_wheel_intf,"Timing_wheel__Timing_wheel_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_timing_wheel$5);
    caml_call1
     (Expect_test_collector[4][1],cst_timing_wheel_src_timing_wheel_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_timing_wheel$6,cst$1);
    var
     _a_=Core_kernel_Time_ns_alternate_sexp[57],
     _b_=Core_kernel_Time_ns_alternate_sexp[55],
     _c_=include[15],
     _e_=include[19],
     _f_=include[73],
     _h_=include[96],
     _i_=include[100],
     _j_=include[101],
     _k_=include[103],
     _d_=include[18],
     _g_=include[95],
     _l_=include[106],
     max_num_bits=caml_call2(_e_,Core_kernel_Int63[60],1),
     _ca_=[0,caml_new_string("_")],
     _cb_=[0,caml_new_string("timing_wheel")],
     _b__=[0,caml_new_string("_")],
     _b$_=[0,caml_new_string("timing_wheel")],
     _b8_=[0,caml_new_string("_")],
     _b9_=[0,caml_new_string("timing_wheel")],
     _b6_=[0,caml_new_string("_")],
     _b7_=[0,caml_new_string("timing_wheel")],
     _b4_=[0,caml_new_string("now_interval_num_start")],
     _b5_=[0,caml_new_string("at")],
     _b2_=[0,caml_new_string("max_allowed_alarm_time")],
     _b3_=[0,caml_new_string("at")],
     _b1_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1623,53],
     _b0_=[0,caml_new_string("start")],
     _bY_=[0,caml_new_string("_")],
     _bX_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1580,6],
     _bW_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1584,6],
     _bV_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1588,6],
     _bU_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1550,11],
     _bT_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1551,11],
     _bS_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1562,11],
     _bR_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1563,11],
     _bQ_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1564,11],
     _bZ_=
      [0,caml_new_string("timing_wheel/src/timing_wheel.ml"),1544,55120,55142],
     _bO_=[0,caml_new_string("t.max_interval_num")],
     _bP_=[0,caml_new_string("interval_num")],
     _bM_=[0,caml_new_string("min_interval_num")],
     _bN_=[0,caml_new_string("interval_num")],
     _bL_=[0,caml_new_string("time")],
     _bG_=[0,caml_new_string("alarms")],
     _bH_=[0,caml_new_string("now")],
     _bI_=[0,caml_new_string("max_interval_num")],
     _bJ_=[0,caml_new_string("start")],
     _bK_=[0,caml_new_string("config")],
     _bE_=[0,caml_new_string("value")],
     _bF_=[0,caml_new_string("at")],
     _bm_=[0,caml_new_string("max_allowed_alarm_interval_num")],
     _bn_=[0,caml_new_string("min_allowed_alarm_interval_num")],
     _bo_=[0,caml_new_string("interval_num")],
     _bj_=[0,caml_new_string("_")],
     _bk_=[0,caml_new_string("level")],
     _bl_=[0,caml_new_string("key")],
     _bf_=[0,caml_new_string("priority_queue")],
     _bg_=[0,caml_new_string("max_allowed_key t")],
     _bh_=[0,caml_new_string("min_allowed_key t")],
     _bi_=[0,caml_new_string("key")],
     _bd_=[0,caml_new_string("_")],
     _ba_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),950,38],
     _a$_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),956,15],
     _a__=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),957,15],
     _a9_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),960,13],
     _a8_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),961,13],
     _a7_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),964,15],
     _a5_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),970,15],
     _a6_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),968,13],
     _bc_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),947,6],
     _bb_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),948,6],
     _a3_=[0,caml_new_string("_")],
     _a2_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),870,38],
     _a1_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),872,32],
     _a0_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),879,15],
     _aZ_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),887,15],
     _aY_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),901,15],
     _aX_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),909,15],
     _aW_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),930,21],
     _aV_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),934,21],
     _aU_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),938,21],
     _aT_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),942,21],
     _a4_=
      [0,caml_new_string("timing_wheel/src/timing_wheel.ml"),867,30229,30255],
     _be_=
      [0,caml_new_string("timing_wheel/src/timing_wheel.ml"),945,33583,33607],
     _aQ_=[0,caml_new_string("elts")],
     _aR_=[0,caml_new_string("max_allowed_key")],
     _aS_=[0,caml_new_string("min_allowed_key")],
     _aO_=[0,caml_new_string("value")],
     _aP_=[0,caml_new_string("key")],
     _aJ_=[0,caml_new_string("levels")],
     _aK_=[0,caml_new_string("elt_key_lower_bound")],
     _aL_=[0,caml_new_string("min_elt")],
     _aM_=[0,caml_new_string("pool")],
     _aN_=[0,caml_new_string("length")],
     _ao_=[0,caml_new_string("slots")],
     _ap_=[0,caml_new_string("max_allowed_key")],
     _aq_=[0,caml_new_string("min_allowed_key")],
     _ar_=[0,caml_new_string("length")],
     _as_=[0,caml_new_string("diff_max_min_allowed_key")],
     _at_=[0,caml_new_string("min_key_in_same_slot_mask")],
     _au_=[0,caml_new_string("keys_per_slot")],
     _av_=[0,caml_new_string("bits_per_slot")],
     _aw_=[0,caml_new_string("slots_mask")],
     _ax_=[0,caml_new_string("bits")],
     _ay_=[0,caml_new_string("index")],
     _S_=[0,caml_new_string("_")],
     _R_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),640,8],
     _Q_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),643,8],
     _P_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),645,8],
     _T_=
      [0,caml_new_string("timing_wheel/src/timing_wheel.ml"),639,22715,22741],
     _F_=[0,10,[0,10,[0,6,[0,6,[0,5,0]]]]],
     _D_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),257,6],
     _E_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),256,8243,8267],
     _A_=[0,caml_new_string("capacity")],
     _B_=[0,caml_new_string("level_bits")],
     _C_=[0,caml_new_string("alarm_precision")],
     _t_=[0,caml_new_string("span")],
     _q_=[0,caml_new_string("max_num_bits")],
     _r_=[0,caml_new_string("got")],
     _p_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),117,6],
     _o_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),114,4],
     _n_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),82,4],
     _m_=[0,caml_new_string("timing_wheel/src/timing_wheel.ml"),83,4],
     _s_=[0,11,[0,10,[0,10,[0,10,[0,10,[0,10,[0,1,0]]]]]]],
     min_value=0;
    function invariant(t)
     {if(caml_call2(_i_,t,min_value))
       {if(caml_call2(_j_,t,max_num_bits))return 0;
        throw [0,Assert_failure,_m_]}
      throw [0,Assert_failure,_n_]}
    function of_int(i){invariant(i);return i}
    function symbol(t1,t2){var t=caml_call2(_d_,t1,t2);invariant(t);return t}
    function symbol$0(t1,t2)
     {var t=caml_call2(_e_,t1,t2);invariant(t);return t}
    function pow2(t)
     {return caml_call2(Core_kernel_Int63[49],Core_kernel_Int63[16],t)}
    function sexp_of_t(v){return caml_call2(Core_kernel[400],_h_,v)}
    function num_bits_internal(t)
     {return caml_call3(Core_kernel_List[9],t,_c_,symbol)}
    function num_bits(t){return num_bits_internal(t)}
    function f(t)
     {if(caml_call1(Core_kernel_List[7],t))throw [0,Assert_failure,_o_];
      function _fT_(num_key_bits)
       {invariant(num_key_bits);
        if(caml_call2(_k_,num_key_bits,_c_))return 0;
        throw [0,Assert_failure,_p_]}
      caml_call2(Core_kernel_List[8],t,_fT_);
      return invariant(num_bits_internal(t))}
    function t_of_sexp(sexp)
     {var t=caml_call2(Core_kernel[401],_g_,sexp);f(t);return t}
    function create_exn(opt,ints)
     {if(opt)
       var sth=opt[1],extend_to_max_num_bits=sth;
      else
       var extend_to_max_num_bits=0;
      if(caml_call1(Core_kernel_List[7],ints))
       caml_call1
        (Core_kernel[6],cst_Level_bits_create_exn_requires_a_nonempty_list);
      function _fH_(bits){return caml_call2(Core_kernel[89],bits,0)}
      if(caml_call2(Core_kernel_List[12],ints,_fH_))
       {var
         _fI_=[0,caml_call2(Core_kernel[400],Core_kernel[339],ints),0],
         _fJ_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Level_bits_create_exn_got_nonpositive_num_bits),
            _fI_]];
        caml_call1(Core_kernel[241],_fJ_)}
      function _fK_(_fS_,_fR_){return _fS_ + _fR_ | 0}
      var num_bits=caml_call3(Core_kernel_List[9],ints,0,_fK_);
      if(caml_call2(Core_kernel[91],num_bits,max_num_bits))
       {var
         _fL_=
          [0,[1,[0,_q_,[0,caml_call1(Core_kernel[339],max_num_bits),0]]],0],
         _fM_=[0,[1,[0,_r_,[0,caml_call1(Core_kernel[339],num_bits),0]]],_fL_],
         _fN_=[0,caml_call2(Core_kernel[400],Core_kernel[339],ints),_fM_],
         _fO_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Level_bits_create_exn_got_too_many_bits),
            _fN_]];
        caml_call1(Core_kernel[241],_fO_)}
      if(extend_to_max_num_bits)
       var
        _fP_=caml_call1(Core_kernel[218],1),
        _fQ_=
         caml_call2(Core_kernel_List[113],max_num_bits - num_bits | 0,_fP_),
        ints$0=caml_call2(Core_kernel[145],ints,_fQ_);
      else
       var ints$0=ints;
      return caml_call2(Core_kernel_List[69],ints$0,of_int)}
    var level_bits_default=create_exn(0,_s_),compare=Core_kernel[335];
    function equal(x_007,x_008)
     {var match=caml_call2(compare,x_007,x_008);return 0 === match?1:0}
    function num_key_bits(t){return of_int(t)}
    function to_sexpable(t)
     {if(caml_call2(Core_kernel[92],t,0))
       {var
         _fE_=[0,caml_call1(Core_kernel[339],t),0],
         _fF_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Alarm_precision_to_span_of_negative_power_of_two_nanoseconds),
            _fE_]];
        caml_call1(Core_kernel[241],_fF_)}
      var
       _fG_=
        caml_call1(caml_call1(Core_kernel_Int63[49],Core_kernel_Int63[16]),t);
      return caml_call1(Core_kernel_Time_ns_alternate_sexp[1][126],_fG_)}
    function sexp_of_t$0(t)
     {var _fD_=to_sexpable(t);
      return caml_call1(Core_kernel_Time_ns_alternate_sexp[1][10],_fD_)}
    var
     one_nanosecond=0,
     about_one_microsecond=10,
     about_one_millisecond=20,
     about_one_second=30,
     about_one_day=46;
    function mul(t,pow2){return t + pow2 | 0}
    function div(t,pow2){return t - pow2 | 0}
    function of_sexpable(span)
     {if
       (caml_call2
         (Core_kernel_Time_ns_alternate_sexp[1][15],
          span,
          Core_kernel_Time_ns_alternate_sexp[1][74]))
       {var
         _fA_=
          [0,
           [1,
            [0,
             _t_,
             [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[1][10],span),0]]],
           0],
         _fB_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Alarm_precision_of_span_floor_pow2_ns_got_non_positive_span),
            _fA_]];
        caml_call1(Core_kernel[241],_fB_)}
      var _fC_=caml_call1(Core_kernel_Time_ns_alternate_sexp[1][125],span);
      return caml_call1(Core_kernel_Int63[83],_fC_)}
    var
     _u_=Core_kernel_Time_ns_alternate_sexp[1],
     _v_=
      caml_call1
       (caml_call1
         (Core_kernel_Binable[2],[0,_u_[5],_u_[1],_u_[2],_u_[3],_u_[4]]),
        [0,to_sexpable,of_sexpable]),
     bin_size_t=_v_[1],
     bin_write_t=_v_[2],
     bin_read_t=_v_[3],
     bin_read_t$0=_v_[4],
     bin_shape_t=_v_[5],
     bin_writer_t=_v_[6],
     bin_reader_t=_v_[7],
     bin_t=_v_[8],
     _w_=Core_kernel_Time_ns_alternate_sexp[1],
     include$0=
      caml_call1
       (caml_call1(Base_Sexpable[1],[0,_w_[9],_w_[10]]),
        [0,to_sexpable,of_sexpable]),
     t_of_sexp$0=include$0[1],
     sexp_of_t$1=include$0[2],
     _x_=
      [0,
       bin_size_t,
       bin_write_t,
       bin_read_t,
       bin_read_t$0,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       compare,
       t_of_sexp$0,
       sexp_of_t$1];
    function level_bits(r){return r[2]}
    function _y_(r,v){return [0,r[1],v,r[3]]}
    var
     _z_=0,
     level_bits$0=
      [0,function(param){return 0},cst_level_bits,_z_,level_bits,_y_];
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       alarm_precision_field=[0,0],
       level_bits_field=[0,0],
       capacity_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _fs_=param[1];
          if(1 === _fs_[0])
           {var _ft_=_fs_[1];
            if(_ft_)
             {var _fu_=_ft_[1];
              if(0 === _fu_[0])
               {var _fv_=_ft_[2],_fw_=_fu_[1];
                if(! _fv_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_fw_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _fv_[2])
                 {var tail=param[2],field_sexp=_fv_[1];
                  if(caml_string_notequal(_fw_,cst_alarm_precision))
                   if(caml_string_notequal(_fw_,cst_capacity))
                    if(caml_string_notequal(_fw_,cst_level_bits$0))
                     {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_fw_,extra[1]]}
                    else
                     if(level_bits_field[1])
                      duplicates[1] = [0,_fw_,duplicates[1]];
                     else
                      {var fvalue=t_of_sexp(field_sexp);
                       level_bits_field[1] = [0,fvalue]}
                   else
                    if(capacity_field[1])
                     duplicates[1] = [0,_fw_,duplicates[1]];
                    else
                     {var fvalue$0=caml_call1(Core_kernel[340],field_sexp);
                      capacity_field[1] = [0,fvalue$0]}
                  else
                   if(alarm_precision_field[1])
                    duplicates[1] = [0,_fw_,duplicates[1]];
                   else
                    {var fvalue$1=caml_call1(_x_[10],field_sexp);
                     alarm_precision_field[1] = [0,fvalue$1]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_fs_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var
         _fx_=alarm_precision_field[1],
         _fy_=level_bits_field[1],
         _fz_=capacity_field[1];
        if(_fx_)
         {var alarm_precision_value=_fx_[1];
          if(_fy_)var v=_fy_[1],v$0=v;else var v$0=level_bits_default;
          return [0,alarm_precision_value,v$0,_fz_]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === alarm_precision_field[1]?1:0,cst_alarm_precision$0],
                  0])}}
    function sexp_of_t$2(param)
     {var
       v_capacity=param[3],
       v_level_bits=param[2],
       v_alarm_precision=param[1],
       bnds=0;
      if(v_capacity)
       var
        v=v_capacity[1],
        arg=caml_call1(Core_kernel[339],v),
        bnd=[1,[0,_A_,[0,arg,0]]],
        bnds$0=[0,bnd,bnds];
      else
       var bnds$0=bnds;
      var
       arg$0=sexp_of_t(v_level_bits),
       bnds$1=[0,[1,[0,_B_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(_x_[11],v_alarm_precision),
       bnds$2=[0,[1,[0,_C_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function alarm_precision(t){return to_sexpable(t[1])}
    function max_num_level_bits(alarm_precision)
     {return symbol$0(max_num_bits,num_key_bits(alarm_precision))}
    function invariant$0(t)
     {function _fq_(param)
       {var _fr_=max_num_level_bits(t[1]);
        if(caml_call2(_j_,num_bits_internal(t[2]),_fr_))
         {var level_bits_fun=caml_call2(Base_Invariant[2],t,f);
          caml_call1(level_bits_fun,level_bits$0);
          return 0}
        throw [0,Assert_failure,_D_]}
      return caml_call4(Base_Invariant[1],_E_,t,sexp_of_t$2,_fq_)}
    function create(capacity,opt,alarm_precision,param)
     {if(opt)
       var sth=opt[1],level_bits=sth;
      else
       var level_bits=level_bits_default;
      var max_num_bits=max_num_level_bits(alarm_precision);
      if(caml_call2(_j_,num_bits_internal(level_bits),max_num_bits))
       var level_bits$0=level_bits;
      else
       var
        loop=
         function(t,remaining)
          {if(t)
            {var t$0=t[2],b=t[1];
             return caml_call2(_i_,b,remaining)
                     ?[0,remaining,0]
                     :[0,b,loop(t$0,symbol$0(remaining,b))]}
           return 0},
        level_bits$0=loop(level_bits,max_num_bits);
      return [0,alarm_precision,level_bits$0,capacity]}
    function microsecond_precision(param)
     {return create(0,[0,create_exn(0,_F_)],about_one_microsecond,0)}
    function durations(t)
     {function _fn_(num_bits_accum,level_num_bits)
       {var
         num_bits_accum$0=num_bits_accum + caml_call1(_f_,level_num_bits) | 0,
         _fp_=
          caml_call2
            (Core_kernel[90],num_bits_accum$0,Core_kernel_Int63[60] - 1 | 0)
           ?Core_kernel_Int63[61]
           :caml_call2
             (Core_kernel_Int63[49],Core_kernel_Int63[16],num_bits_accum$0),
         duration=caml_call1(Core_kernel_Time_ns_alternate_sexp[1][126],_fp_);
        return [0,num_bits_accum$0,duration]}
      var _fo_=caml_call1(_f_,num_key_bits(t[1]));
      return caml_call3(Core_kernel_List[70],t[2],_fo_,_fn_)}
    var comparator=Core_kernel_Int63[107],sexpifier=Core_kernel_Int63[96];
    function create$0(level_bits)
     {var _fl_=Core_kernel_Int63[16],_fm_=pow2(level_bits);
      return caml_call2(Core_kernel_Int63[19],_fm_,_fl_)}
    function num_keys(num_bits){return pow2(num_bits)}
    var
     one=Core_kernel_Int63[16],
     symbol$1=Core_kernel_Int63[19],
     bit_not=Core_kernel_Int63[47],
     sexp_of_t$3=Core_kernel_Int63[96],
     equal$0=Core_kernel_Int63[106];
    function create$1(bits_per_slot)
     {return caml_call1(bit_not,caml_call2(symbol$1,pow2(bits_per_slot),one))}
    var
     to_int_exn=Core_kernel_Int63[4],
     zero=Core_kernel_Int63[15],
     one$0=Core_kernel_Int63[16],
     symbol$2=Core_kernel_Int63[18],
     symbol$3=Core_kernel_Int63[20],
     succ=Core_kernel_Int63[41],
     pred=Core_kernel_Int63[42],
     max_value=Core_kernel_Int63[61],
     of_int$0=Core_kernel_Int63[69],
     sexp_of_t$4=Core_kernel_Int63[96],
     symbol$4=Core_kernel_Int63[100],
     symbol$5=Core_kernel_Int63[101],
     symbol$6=Core_kernel_Int63[102],
     symbol$7=Core_kernel_Int63[103],
     symbol$8=Core_kernel_Int63[104],
     symbol$9=Core_kernel_Int63[105],
     equal$1=Core_kernel_Int63[106],
     compare$0=Core_kernel_Int63[107],
     min=Core_kernel_Int63[108],
     max=Core_kernel_Int63[109],
     ascending=Core_kernel_Int63[110],
     descending=Core_kernel_Int63[111],
     between=Core_kernel_Int63[112],
     clamp_exn=Core_kernel_Int63[113],
     clamp=Core_kernel_Int63[114],
     validate_lbound=Core_kernel_Int63[115],
     validate_ubound=Core_kernel_Int63[116],
     validate_bound=Core_kernel_Int63[117],
     Replace_polymorphic_compare=Core_kernel_Int63[118],
     comparator$0=Core_kernel_Int63[119],
     Map=Core_kernel_Int63[120],
     Set=Core_kernel_Int63[121];
    function to_int63(t){return t}
    function of_int63(i){return i}
    function scale_int(t,i)
     {return caml_call2(symbol$3,t,caml_call1(of_int$0,i))}
    var
     to_int_exn$0=Core_kernel_Int63[4],
     zero$0=Core_kernel_Int63[15],
     one$1=Core_kernel_Int63[16],
     symbol$10=Core_kernel_Int63[18],
     symbol$11=Core_kernel_Int63[19],
     rem=Core_kernel_Int63[27],
     succ$0=Core_kernel_Int63[41],
     pred$0=Core_kernel_Int63[42],
     bit_and=Core_kernel_Int63[44],
     shift_right=Core_kernel_Int63[50],
     max_value$0=Core_kernel_Int63[61],
     min_value$0=Core_kernel_Int63[62],
     of_int$1=Core_kernel_Int63[69],
     sexpifier$0=Core_kernel_Int63[96],
     symbol$12=Core_kernel_Int63[100],
     symbol$13=Core_kernel_Int63[101],
     symbol$14=Core_kernel_Int63[102],
     symbol$15=Core_kernel_Int63[103],
     symbol$16=Core_kernel_Int63[104],
     symbol$17=Core_kernel_Int63[105],
     equal$2=Core_kernel_Int63[106],
     comparator$1=Core_kernel_Int63[107],
     min$0=Core_kernel_Int63[108],
     max$0=Core_kernel_Int63[109],
     ascending$0=Core_kernel_Int63[110],
     descending$0=Core_kernel_Int63[111],
     between$0=Core_kernel_Int63[112],
     clamp_exn$0=Core_kernel_Int63[113],
     clamp$0=Core_kernel_Int63[114],
     validate_lbound$0=Core_kernel_Int63[115],
     validate_ubound$0=Core_kernel_Int63[116],
     validate_bound$0=Core_kernel_Int63[117],
     Replace_polymorphic_compare$0=Core_kernel_Int63[118],
     comparator$2=Core_kernel_Int63[119],
     Map$0=Core_kernel_Int63[120],
     Set$0=Core_kernel_Int63[121],
     hash_fold_t=Core_kernel_Int63[122],
     hash=Core_kernel_Int63[123],
     hashable=Core_kernel_Int63[124],
     Table=Core_kernel_Int63[125],
     Hash_set=Core_kernel_Int63[126],
     Hash_queue=Core_kernel_Int63[127];
    function of_int63$0(i){return i}
    function to_int63$0(t){return t}
    function add(t,i){return caml_call2(symbol$10,t,i)}
    function add_clamp_to_max(t,i)
     {return caml_call2(symbol$15,t,caml_call2(symbol$11,max_value$0,i))
              ?max_value$0
              :caml_call2(symbol$10,t,i)}
    function sub(t,i){return caml_call2(symbol$11,t,i)}
    function diff(t1,t2){return caml_call2(symbol$11,t1,t2)}
    function min_key_in_same_slot(t,min_key_in_same_slot_mask)
     {return caml_call2(bit_and,t,min_key_in_same_slot_mask)}
    var
     _I_=Set$0[1],
     _K_=Map$0[1],
     _M_=Set[1],
     _N_=Map[1],
     _O_=
      [0,
       sexp_of_t$4,
       symbol$4,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       equal$1,
       compare$0,
       min,
       ascending,
       descending,
       between,
       clamp_exn,
       clamp,
       comparator$0,
       validate_lbound,
       validate_ubound,
       validate_bound,
       Replace_polymorphic_compare,
       [0,
        [0,_N_[9],_N_[10],_N_[11]],
        Map[2],
        Map[3],
        Map[4],
        Map[5],
        Map[6],
        Map[7],
        Map[8],
        Map[9],
        Map[10],
        Map[11],
        Map[12],
        Map[13],
        Map[14],
        Map[15],
        Map[16],
        Map[17],
        Map[18],
        Map[19],
        Map[20],
        Map[21],
        Map[22],
        Map[23],
        Map[24],
        Map[25],
        Map[26],
        Map[27],
        Map[28],
        Map[29],
        Map[30],
        Map[31],
        Map[32],
        Map[33],
        Map[34],
        Map[35],
        Map[36],
        Map[37],
        Map[38],
        Map[39],
        Map[40],
        Map[41],
        Map[42],
        Map[43],
        Map[44],
        Map[45],
        Map[46],
        Map[47],
        Map[48],
        Map[49],
        Map[50],
        Map[51],
        Map[52],
        Map[53],
        Map[54],
        Map[55],
        Map[56],
        Map[57],
        Map[58],
        Map[59],
        Map[60],
        Map[61],
        Map[62],
        Map[63],
        Map[64],
        Map[65],
        Map[66],
        Map[67],
        Map[68],
        Map[69],
        Map[70],
        Map[71],
        Map[72],
        Map[73],
        Map[74],
        Map[75],
        Map[76],
        Map[77],
        Map[78],
        Map[79],
        Map[80],
        Map[81],
        Map[82],
        Map[83],
        Map[84],
        Map[85],
        Map[86],
        Map[87],
        Map[88],
        Map[89],
        Map[90],
        Map[91],
        Map[92],
        Map[93],
        Map[94],
        Map[95],
        Map[96],
        Map[97],
        Map[98],
        Map[99],
        Map[100]],
       [0,
        [0,_M_[1],_M_[2],_M_[11]],
        Set[2],
        Set[3],
        Set[4],
        Set[5],
        Set[6],
        Set[7],
        Set[8],
        Set[9],
        Set[10],
        Set[11],
        Set[12],
        Set[13],
        Set[14],
        Set[15],
        Set[16],
        Set[17],
        Set[18],
        Set[19],
        Set[20],
        Set[21],
        Set[22],
        Set[23],
        Set[24],
        Set[25],
        Set[26],
        Set[27],
        Set[28],
        Set[29],
        Set[30],
        Set[31],
        Set[32],
        Set[33],
        Set[34],
        Set[35],
        Set[36],
        Set[37],
        Set[38],
        Set[39],
        Set[40],
        Set[41],
        Set[42],
        Set[43],
        Set[44],
        Set[45],
        Set[46],
        Set[47],
        Set[48],
        Set[49],
        Set[50],
        Set[51],
        Set[52],
        Set[53],
        Set[54],
        Set[55],
        Set[56],
        Set[57],
        Set[58],
        Set[59],
        Set[60],
        Set[61],
        Set[62],
        Set[63],
        Set[64],
        Set[65],
        Set[66],
        Set[67],
        Set[68],
        Set[69],
        Set[70],
        Set[71],
        Set[72],
        Set[73],
        Set[74]],
       max,
       zero,
       one$0,
       max_value,
       of_int63,
       to_int63,
       of_int$0,
       to_int_exn,
       scale_int,
       pred,
       succ,
       symbol$2],
     _G_=
      [0,
       Hash_set[1],
       Hash_set[2],
       Hash_set[3],
       Hash_set[4],
       Hash_set[5],
       Hash_set[6]],
     _H_=
      [0,
       Table[1],
       Table[2],
       Table[3],
       Table[4],
       Table[5],
       Table[6],
       Table[7],
       Table[8],
       Table[9],
       Table[10],
       Table[11],
       Table[12],
       Table[13],
       Table[14],
       Table[15],
       Table[16],
       Table[17],
       Table[18],
       Table[19],
       Table[20],
       Table[21],
       Table[22],
       Table[23],
       Table[24],
       Table[25],
       Table[26],
       Table[27],
       Table[28],
       Table[29],
       Table[30],
       Table[31],
       Table[32],
       Table[33],
       Table[34],
       Table[35],
       Table[36],
       Table[37],
       Table[38],
       Table[39],
       Table[40],
       Table[41],
       Table[42],
       Table[43],
       Table[44],
       Table[45],
       Table[46],
       Table[47],
       Table[48],
       Table[49],
       Table[50],
       Table[51],
       Table[52],
       Table[53],
       Table[54],
       Table[55],
       Table[56],
       Table[57],
       Table[58],
       Table[59],
       Table[60],
       Table[61],
       Table[62],
       Table[63],
       Table[64],
       Table[65],
       Table[66],
       Table[67],
       Table[68],
       Table[69],
       Table[70],
       Table[71],
       Table[72],
       Table[73],
       Table[74],
       Table[75],
       Table[76],
       Table[77],
       Table[78],
       Table[79]],
     _J_=
      [0,
       [0,_I_[1],_I_[2],_I_[11]],
       Set$0[2],
       Set$0[3],
       Set$0[4],
       Set$0[5],
       Set$0[6],
       Set$0[7],
       Set$0[8],
       Set$0[9],
       Set$0[10],
       Set$0[11],
       Set$0[12],
       Set$0[13],
       Set$0[14],
       Set$0[15],
       Set$0[16],
       Set$0[17],
       Set$0[18],
       Set$0[19],
       Set$0[20],
       Set$0[21],
       Set$0[22],
       Set$0[23],
       Set$0[24],
       Set$0[25],
       Set$0[26],
       Set$0[27],
       Set$0[28],
       Set$0[29],
       Set$0[30],
       Set$0[31],
       Set$0[32],
       Set$0[33],
       Set$0[34],
       Set$0[35],
       Set$0[36],
       Set$0[37],
       Set$0[38],
       Set$0[39],
       Set$0[40],
       Set$0[41],
       Set$0[42],
       Set$0[43],
       Set$0[44],
       Set$0[45],
       Set$0[46],
       Set$0[47],
       Set$0[48],
       Set$0[49],
       Set$0[50],
       Set$0[51],
       Set$0[52],
       Set$0[53],
       Set$0[54],
       Set$0[55],
       Set$0[56],
       Set$0[57],
       Set$0[58],
       Set$0[59],
       Set$0[60],
       Set$0[61],
       Set$0[62],
       Set$0[63],
       Set$0[64],
       Set$0[65],
       Set$0[66],
       Set$0[67],
       Set$0[68],
       Set$0[69],
       Set$0[70],
       Set$0[71],
       Set$0[72],
       Set$0[73],
       Set$0[74]],
     _L_=
      [0,
       [0,_K_[9],_K_[10],_K_[11]],
       Map$0[2],
       Map$0[3],
       Map$0[4],
       Map$0[5],
       Map$0[6],
       Map$0[7],
       Map$0[8],
       Map$0[9],
       Map$0[10],
       Map$0[11],
       Map$0[12],
       Map$0[13],
       Map$0[14],
       Map$0[15],
       Map$0[16],
       Map$0[17],
       Map$0[18],
       Map$0[19],
       Map$0[20],
       Map$0[21],
       Map$0[22],
       Map$0[23],
       Map$0[24],
       Map$0[25],
       Map$0[26],
       Map$0[27],
       Map$0[28],
       Map$0[29],
       Map$0[30],
       Map$0[31],
       Map$0[32],
       Map$0[33],
       Map$0[34],
       Map$0[35],
       Map$0[36],
       Map$0[37],
       Map$0[38],
       Map$0[39],
       Map$0[40],
       Map$0[41],
       Map$0[42],
       Map$0[43],
       Map$0[44],
       Map$0[45],
       Map$0[46],
       Map$0[47],
       Map$0[48],
       Map$0[49],
       Map$0[50],
       Map$0[51],
       Map$0[52],
       Map$0[53],
       Map$0[54],
       Map$0[55],
       Map$0[56],
       Map$0[57],
       Map$0[58],
       Map$0[59],
       Map$0[60],
       Map$0[61],
       Map$0[62],
       Map$0[63],
       Map$0[64],
       Map$0[65],
       Map$0[66],
       Map$0[67],
       Map$0[68],
       Map$0[69],
       Map$0[70],
       Map$0[71],
       Map$0[72],
       Map$0[73],
       Map$0[74],
       Map$0[75],
       Map$0[76],
       Map$0[77],
       Map$0[78],
       Map$0[79],
       Map$0[80],
       Map$0[81],
       Map$0[82],
       Map$0[83],
       Map$0[84],
       Map$0[85],
       Map$0[86],
       Map$0[87],
       Map$0[88],
       Map$0[89],
       Map$0[90],
       Map$0[91],
       Map$0[92],
       Map$0[93],
       Map$0[94],
       Map$0[95],
       Map$0[96],
       Map$0[97],
       Map$0[98],
       Map$0[99],
       Map$0[100]];
    function sexp_of_pool_slots(of_a,v)
     {function _ff_(_fk_){return sexp_of_pool_slots(of_a,_fk_)}
      var _fg_=caml_call1(Tuple_pool[36][3][1],_ff_);
      function _fh_(_fj_){return sexp_of_pool_slots(of_a,_fj_)}
      var _fi_=caml_call1(Tuple_pool[36][3][1],_fh_);
      return caml_call7
              (Tuple_pool[36][1][8],
               sexpifier$0,
               Core_kernel_Time_ns_alternate_sexp[89],
               of_a,
               Core_kernel[339],
               _fi_,
               _fg_,
               v)}
    function sexp_of_t$5(of_a,v)
     {function _fd_(_fe_){return sexp_of_pool_slots(of_a,_fe_)}
      return caml_call2(Tuple_pool[36][3][1],_fd_,v)}
    var
     null$0=Tuple_pool[36][3][4],
     null$1=Tuple_pool[36][3][4],
     is_null=Tuple_pool[36][3][5],
     free=Tuple_pool[36][14];
    function key(p,t)
     {return caml_call3(Tuple_pool[36][31],p,t,Tuple_pool[36][2][3])}
    function at(p,t)
     {return caml_call3(Tuple_pool[36][31],p,t,Tuple_pool[36][2][4])}
    function value(p,t)
     {return caml_call3(Tuple_pool[36][31],p,t,Tuple_pool[36][2][5])}
    function level_index(p,t)
     {return caml_call3(Tuple_pool[36][31],p,t,Tuple_pool[36][2][6])}
    function prev(p,t)
     {return caml_call3(Tuple_pool[36][31],p,t,Tuple_pool[36][2][7])}
    function set_prev(p,t,x)
     {return caml_call4(Tuple_pool[36][33],p,t,Tuple_pool[36][2][7],x)}
    function next(p,t)
     {return caml_call3(Tuple_pool[36][31],p,t,Tuple_pool[36][2][8])}
    function set_next(p,t,x)
     {return caml_call4(Tuple_pool[36][33],p,t,Tuple_pool[36][2][8],x)}
    function is_valid(p,t){return caml_call2(Tuple_pool[36][6],p,t)}
    var grow=Tuple_pool[36][12],is_full=Tuple_pool[36][13];
    function of_external_exn(pool,t)
     {if(is_valid(pool,t))return t;
      var
       _fc_=
        caml_call1(Sexplib0_Sexp_conv[7],cst_Timing_wheel_got_invalid_alarm);
      return caml_call1(Core_kernel[241],_fc_)}
    function link(pool,prev,next)
     {set_next(pool,prev,next);return set_prev(pool,next,prev)}
    function iter(pool,first,f)
     {var current=[0,first],continue$0=[0,1];
      for(;;)
       {if(continue$0[1])
         {var next$0=next(pool,current[1]);
          caml_call1(f,current[1]);
          if(caml_call2(Core_kernel[234],next$0,first))
           continue$0[1] = 0;
          else
           current[1] = next$0;
          continue}
        return 0}}
    function slots(r){return r[11]}
    function max_allowed_key(r){return r[10]}
    function set_max_allowed_key(r,v){r[10] = v;return 0}
    function min_allowed_key(r){return r[9]}
    function set_min_allowed_key(r,v){r[9] = v;return 0}
    function length(r){return r[8]}
    function set_length(r,v){r[8] = v;return 0}
    function diff_max_min_allowed_key(r){return r[7]}
    function min_key_in_same_slot_mask(r){return r[6]}
    function keys_per_slot(r){return r[5]}
    function bits_per_slot(r){return r[4]}
    function slots_mask(r){return r[3]}
    function bits(r){return r[2]}
    function index(r){return r[1]}
    function _U_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],v]}
    var _V_=0,slots$0=[0,function(param){return 0},cst_slots,_V_,slots,_U_];
    function _W_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],v,r[11]]}
    var
     _X_=[0,set_max_allowed_key],
     max_allowed_key$0=
      [0,
       function(param){return 0},
       cst_max_allowed_key,
       _X_,
       max_allowed_key,
       _W_];
    function _Y_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v,r[10],r[11]]}
    var
     _Z_=[0,set_min_allowed_key],
     min_allowed_key$0=
      [0,
       function(param){return 0},
       cst_min_allowed_key,
       _Z_,
       min_allowed_key,
       _Y_];
    function ___(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9],r[10],r[11]]}
    var
     _$_=[0,set_length],
     length$0=[0,function(param){return 0},cst_length,_$_,length,___];
    function _aa_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9],r[10],r[11]]}
    var
     _ab_=0,
     diff_max_min_allowed_key$0=
      [0,
       function(param){return 0},
       cst_diff_max_min_allowed_key,
       _ab_,
       diff_max_min_allowed_key,
       _aa_];
    function _ac_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9],r[10],r[11]]}
    var
     _ad_=0,
     min_key_in_same_slot_mask$0=
      [0,
       function(param){return 0},
       cst_min_key_in_same_slot_mask,
       _ad_,
       min_key_in_same_slot_mask,
       _ac_];
    function _ae_(r,v)
     {return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _af_=0,
     keys_per_slot$0=
      [0,function(param){return 0},cst_keys_per_slot,_af_,keys_per_slot,_ae_];
    function _ag_(r,v)
     {return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _ah_=0,
     bits_per_slot$0=
      [0,function(param){return 0},cst_bits_per_slot,_ah_,bits_per_slot,_ag_];
    function _ai_(r,v)
     {return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _aj_=0,
     slots_mask$0=
      [0,function(param){return 0},cst_slots_mask,_aj_,slots_mask,_ai_];
    function _ak_(r,v)
     {return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var _al_=0,bits$0=[0,function(param){return 0},cst_bits,_al_,bits,_ak_];
    function _am_(r,v)
     {return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _an_=0,
     index$0=[0,function(param){return 0},cst_index,_an_,index,_am_];
    function sexp_of_t$6(of_a,param)
     {var
       v_diff_max_min_allowed_key=param[7],
       v_min_key_in_same_slot_mask=param[6],
       v_keys_per_slot=param[5],
       v_bits_per_slot=param[4],
       v_slots_mask=param[3],
       v_bits=param[2],
       v_index=param[1],
       v_length=param[8],
       v_min_allowed_key=param[9],
       v_max_allowed_key=param[10],
       v_slots=param[11],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_slots),
       bnds=[0,[1,[0,_ao_,[0,arg,0]]],0],
       arg$0=caml_call1(sexpifier$0,v_max_allowed_key),
       bnds$0=[0,[1,[0,_ap_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(sexpifier$0,v_min_allowed_key),
       bnds$1=[0,[1,[0,_aq_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_length),
       bnds$2=[0,[1,[0,_ar_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(_O_[1],v_diff_max_min_allowed_key),
       bnds$3=[0,[1,[0,_as_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(sexp_of_t$3,v_min_key_in_same_slot_mask),
       bnds$4=[0,[1,[0,_at_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(_O_[1],v_keys_per_slot),
       bnds$5=[0,[1,[0,_au_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call1(_h_,v_bits_per_slot),
       bnds$6=[0,[1,[0,_av_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(sexpifier,v_slots_mask),
       bnds$7=[0,[1,[0,_aw_,[0,arg$7,0]]],bnds$6],
       arg$8=caml_call1(_h_,v_bits),
       bnds$8=[0,[1,[0,_ax_,[0,arg$8,0]]],bnds$7],
       arg$9=caml_call1(Core_kernel[339],v_index),
       bnds$9=[0,[1,[0,_ay_,[0,arg$9,0]]],bnds$8];
      return [1,bnds$9]}
    function slot(t,key)
     {var _fb_=t[3];
      return caml_call1
              (to_int_exn$0,
               caml_call2(bit_and,caml_call2(shift_right,key,t[4]),_fb_))}
    function next_slot(t,slot)
     {return (slot + 1 | 0) & caml_call1(Core_kernel_Int63[4],t[3])}
    function min_key_in_same_slot$0(t,key)
     {return min_key_in_same_slot(key,t[6])}
    function compute_min_allowed_key(t,prev_level_max_allowed_key)
     {return caml_call2(equal$2,prev_level_max_allowed_key,max_value$0)
              ?max_value$0
              :min_key_in_same_slot$0
                (t,caml_call1(succ$0,prev_level_max_allowed_key))}
    function levels(r){return r[5]}
    function elt_key_lower_bound(r){return r[4]}
    function set_elt_key_lower_bound(r,v){r[4] = v;return 0}
    function min_elt(r){return r[3]}
    function set_min_elt(r,v){r[3] = v;return 0}
    function pool(r){return r[2]}
    function set_pool(r,v){r[2] = v;return 0}
    function length$1(r){return r[1]}
    function set_length$0(r,v){r[1] = v;return 0}
    function _az_(r,v){return [0,r[1],r[2],r[3],r[4],v]}
    var
     _aA_=0,
     levels$0=[0,function(param){return 0},cst_levels,_aA_,levels,_az_];
    function _aB_(r,v){return [0,r[1],r[2],r[3],v,r[5]]}
    var
     _aC_=[0,set_elt_key_lower_bound],
     elt_key_lower_bound$0=
      [0,
       function(param){return 0},
       cst_elt_key_lower_bound,
       _aC_,
       elt_key_lower_bound,
       _aB_];
    function _aD_(r,v){return [0,r[1],r[2],v,r[4],r[5]]}
    var
     _aE_=[0,set_min_elt],
     min_elt$0=[0,function(param){return 0},cst_min_elt,_aE_,min_elt,_aD_];
    function _aF_(r,v){return [0,r[1],v,r[3],r[4],r[5]]}
    var
     _aG_=[0,set_pool],
     pool$0=[0,function(param){return 0},cst_pool,_aG_,pool,_aF_];
    function _aH_(r,v){return [0,v,r[2],r[3],r[4],r[5]]}
    var
     _aI_=[0,set_length$0],
     length$2=[0,function(param){return 0},cst_length$0,_aI_,length$1,_aH_];
    function is_empty(t){return caml_call2(Core_kernel[90],t[1],0)}
    function num_levels(t){return caml_call1(Core_kernel_Array[17],t[5])}
    function min_allowed_key$1(t){return caml_check_bound(t[5],0)[1][9]}
    function max_allowed_key$1(t)
     {var _fa_=num_levels(t) - 1 | 0;
      return caml_check_bound(t[5],_fa_)[1 + _fa_][10]}
    function internal_iter(t,f)
     {var _e4_=caml_call2(Core_kernel[91],t[1],0);
      if(_e4_)
       {var
         pool=t[2],
         levels=t[5],
         _e6_=caml_call1(Core_kernel_Array[17],levels) - 1 | 0,
         _e5_=0;
        if(! (_e6_ < 0))
         {var level_index=_e5_;
          for(;;)
           {var level=caml_check_bound(levels,level_index)[1 + level_index];
            if(caml_call2(Core_kernel[91],level[8],0))
             {var
               slots=level[11],
               _e9_=caml_call1(Core_kernel_Array[17],slots) - 1 | 0,
               _e8_=0;
              if(! (_e9_ < 0))
               {var slot_index=_e8_;
                for(;;)
                 {var elt=caml_check_bound(slots,slot_index)[1 + slot_index];
                  if(1 - caml_call1(is_null,elt))iter(pool,elt,f);
                  var _e$_=slot_index + 1 | 0;
                  if(_e9_ !== slot_index){var slot_index=_e$_;continue}
                  break}}}
            var _e__=level_index + 1 | 0;
            if(_e6_ !== level_index){var level_index=_e__;continue}
            break}}
        var _e7_=0}
      else
       var _e7_=_e4_;
      return _e7_}
    function compute_diff_max_min_allowed_key(level_bits,bits_per_slot)
     {var bits=symbol(level_bits,bits_per_slot);
      if(caml_call2(_l_,bits,max_num_bits))return _O_[26];
      var _e3_=num_keys(bits);
      return caml_call1(_O_[32],_e3_)}
    function min_elt$1(t)
     {if(is_empty(t))return caml_call1(null$1,0);
      if(caml_call1(is_null,t[3]))
       {var
         pool=t[2],
         min_elt_already_found=[0,caml_call1(null$1,0)],
         min_key_already_found=[0,max_value$0],
         level_index=[0,0],
         num_levels$0=num_levels(t);
        for(;;)
         {if(caml_call2(Core_kernel[92],level_index[1],num_levels$0))
           {var
             _e0_=level_index[1],
             level=caml_check_bound(t[5],_e0_)[1 + _e0_];
            if(caml_call2(symbol$15,level[9],min_key_already_found[1]))
             level_index[1] = num_levels$0;
            else
             if(caml_call2(Core_kernel[90],level[8],0))
              level_index[1]++;
             else
              {var
                slots=level[11],
                slot_min_key=
                 [0,
                  min_key_in_same_slot$0
                   (level,caml_call2(max$0,level[9],t[4]))],
                slot$0=[0,slot(level,slot_min_key[1])];
               for(;;)
                {var _e1_=slot$0[1];
                 if
                  (caml_call1(is_null,caml_check_bound(slots,_e1_)[1 + _e1_]))
                  if
                   (caml_call2
                     (symbol$16,slot_min_key[1],min_key_already_found[1]))
                   {slot$0[1] = next_slot(level,slot$0[1]);
                    slot_min_key[1] = add(slot_min_key[1],level[5]);
                    continue}
                 var
                  _e2_=slot$0[1],
                  first=caml_check_bound(slots,_e2_)[1 + _e2_];
                 if(1 - caml_call1(is_null,first))
                  {var continue$0=[0,1],current=[0,first];
                   for(;;)
                    {if(continue$0[1])
                      {var current_key=key(pool,current[1]);
                       if
                        (caml_call2(symbol$13,current_key,min_key_already_found[1]))
                        {min_elt_already_found[1] = current[1];
                         min_key_already_found[1] = current_key}
                       var
                        next$0=next(pool,current[1]),
                        switch$0=
                         caml_call2(Core_kernel[234],next$0,first)
                          ?0
                          :caml_call2(Core_kernel[90],level_index[1],0)
                            ?0
                            :(current[1] = next$0,1);
                       if(! switch$0)continue$0[1] = 0;
                       continue}
                     break}}
                 level_index[1]++;
                 break}}
            continue}
          t[3] = min_elt_already_found[1];
          t[4] = min_key_already_found[1];
          return t[3]}}
      return t[3]}
    function add_elt(t,to_add)
     {var
       pool$0=t[2],
       key$0=key(pool$0,to_add),
       _eT_=caml_call2(symbol$12,key$0,min_allowed_key$1(t)),
       _eU_=_eT_?caml_call2(symbol$13,key$0,max_allowed_key$1(t)):_eT_;
      if(1 - _eU_)
       {var pool=t[2],r=[0,0],_eI_=0,_eJ_=0;
        internal_iter
         (t,
          function(elt)
           {var _eY_=r[1],_eZ_=value(pool,elt);
            r[1] = [0,[0,key(pool,elt),_eZ_],_eY_];
            return 0});
        var
         v_elts=caml_call1(Core_kernel_List[32],r[1]),
         v_max_allowed_key=max_allowed_key$1(t),
         v_min_allowed_key=min_allowed_key$1(t),
         bnds=0,
         _eH_=
          function(param)
           {var
             v_key=param[1],
             bnds=[0,[1,[0,_aO_,[0,arg,0]]],0],
             arg$0=caml_call1(sexpifier$0,v_key),
             bnds$0=[0,[1,[0,_aP_,[0,arg$0,0]]],bnds];
            return [1,bnds$0]},
         arg$0=caml_call2(Core_kernel[400],_eH_,v_elts),
         bnds$0=[0,[1,[0,_aQ_,[0,arg$0,0]]],bnds],
         arg$1=caml_call1(sexpifier$0,v_max_allowed_key),
         bnds$1=[0,[1,[0,_aR_,[0,arg$1,0]]],bnds$0],
         arg$2=caml_call1(sexpifier$0,v_min_allowed_key),
         bnds$2=[0,[1,[0,_aS_,[0,arg$2,0]]],bnds$1],
         _eK_=
          [0,
           [1,[0,_bg_,[0,caml_call1(sexpifier$0,max_allowed_key$1(t)),0]]],
           [0,[1,[0,_bf_,[0,[1,bnds$2],_eJ_]]],_eI_]],
         _eL_=
          [0,
           [1,[0,_bh_,[0,caml_call1(sexpifier$0,min_allowed_key$1(t)),0]]],
           _eK_],
         _eM_=[0,[1,[0,_bi_,[0,caml_call1(sexpifier$0,key$0),0]]],_eL_],
         _eN_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Priority_queue_add_elt_key_out_of_bounds),
            _eM_]];
        caml_call1(Core_kernel[241],_eN_)}
      var level_index=[0,0];
      for(;;)
       {var _eV_=level_index[1];
        if
         (caml_call2
           (symbol$15,key$0,caml_check_bound(t[5],_eV_)[1 + _eV_][10]))
         {level_index[1]++;continue}
        var
         level_index$0=level_index[1],
         level=caml_check_bound(t[5],level_index$0)[1 + level_index$0],
         _eW_=caml_call2(symbol$12,key$0,level[9]),
         _eX_=_eW_?caml_call2(symbol$13,key$0,level[10]):_eW_;
        if(1 - _eX_)
         {var
           _eO_=0,
           _eP_=0,
           _eQ_=
            [0,
             [1,
              [0,
               _bk_,
               [0,sexp_of_t$6(function(param){return _bj_},level),_eP_]]],
             _eO_],
           _eR_=[0,[1,[0,_bl_,[0,caml_call1(sexpifier$0,key$0),0]]],_eQ_],
           _eS_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Priority_queue_add_elt_key_out_of_level_bounds),
              _eR_]];
          caml_call1(Core_kernel[241],_eS_)}
        level[8] = level[8] + 1 | 0;
        caml_call4
         (Tuple_pool[36][33],pool$0,to_add,Tuple_pool[36][2][6],level_index$0);
        var
         slot$0=slot(level,key$0),
         slots=level[11],
         t$0=caml_check_bound(slots,slot$0)[1 + slot$0];
        if(caml_call1(is_null,t$0))
         {caml_check_bound(slots,slot$0)[1 + slot$0] = to_add;
          return link(pool$0,to_add,to_add)}
        var prev$0=prev(pool$0,t$0);
        link(pool$0,prev$0,to_add);
        return link(pool$0,to_add,t$0)}}
    function internal_add_elt(t,elt)
     {var key$0=key(t[2],elt);
      if(caml_call2(symbol$16,key$0,t[4])){t[3] = elt;t[4] = key$0}
      add_elt(t,elt);
      t[1] = t[1] + 1 | 0;
      return 0}
    function ensure_valid_key(t,key)
     {var
       _eF_=caml_call2(symbol$16,key,min_allowed_key$1(t)),
       _eG_=_eF_ || caml_call2(symbol$15,key,max_allowed_key$1(t));
      if(_eG_)
       {var
         _eB_=
          [0,
           [1,[0,_bm_,[0,caml_call1(sexpifier$0,max_allowed_key$1(t)),0]]],
           0],
         _eC_=
          [0,
           [1,[0,_bn_,[0,caml_call1(sexpifier$0,min_allowed_key$1(t)),0]]],
           _eB_],
         _eD_=[0,[1,[0,_bo_,[0,caml_call1(sexpifier$0,key),0]]],_eC_],
         _eE_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_add_at_interval_num_got_invalid_interval_num),
            _eD_]];
        return caml_call1(Core_kernel[241],_eE_)}
      return _eG_}
    function internal_add(t,key,at,value)
     {ensure_valid_key(t,key);
      if(caml_call1(is_full,t[2]))t[2] = caml_call2(grow,0,t[2]);
      var
       _eA_=t[2],
       _ey_=caml_call1(null$1,0),
       _ez_=caml_call1(null$1,0),
       elt=caml_call7(Tuple_pool[36][21],_eA_,key,at,value,-1,_ez_,_ey_);
      internal_add_elt(t,elt);
      return elt}
    function internal_remove(t$0,t)
     {var pool=t$0[2];
      if(caml_call2(Tuple_pool[36][3][7],t,t$0[3]))
       t$0[3] = caml_call1(null$1,0);
      t$0[1] = t$0[1] - 1 | 0;
      var
       _eu_=level_index(pool,t),
       level=caml_check_bound(t$0[5],_eu_)[1 + _eu_];
      level[8] = level[8] - 1 | 0;
      var
       slots=level[11],
       slot$0=slot(level,key(pool,t)),
       first=caml_check_bound(slots,slot$0)[1 + slot$0],
       _ev_=next(pool,t);
      if(caml_call2(Core_kernel[234],t,_ev_))
       {var _ew_=caml_call1(null$1,0);
        caml_check_bound(slots,slot$0)[1 + slot$0] = _ew_;
        return 0}
      if(caml_call2(Core_kernel[234],t,first))
       {var _ex_=next(pool,t);
        caml_check_bound(slots,slot$0)[1 + slot$0] = _ex_}
      var _es_=next(pool,t);
      set_next(pool,prev(pool,t),_es_);
      var _et_=prev(pool,t);
      return set_prev(pool,next(pool,t),_et_)}
    var
     _bp_=
      [0,
       _O_,
       sexpifier$0,
       symbol$12,
       symbol$13,
       symbol$14,
       symbol$15,
       symbol$16,
       symbol$17,
       equal$2,
       ascending$0,
       descending$0,
       between$0,
       clamp_exn$0,
       clamp$0,
       comparator$2,
       validate_lbound$0,
       validate_ubound$0,
       validate_bound$0,
       Replace_polymorphic_compare$0,
       _L_,
       _J_,
       comparator$1,
       hash_fold_t,
       hash,
       hashable,
       _H_,
       _G_,
       Hash_queue,
       max$0,
       min$0,
       zero$0,
       one$1,
       min_value$0,
       max_value$0,
       of_int63$0,
       to_int63$0,
       of_int$1,
       to_int_exn$0,
       add,
       sub,
       diff,
       succ$0,
       pred$0,
       rem],
     min_interval_num=_bp_[31];
    function priority_queue(r){return r[7]}
    function max_allowed_alarm_time(r){return r[6]}
    function set_max_allowed_alarm_time(r,v){r[6] = v;return 0}
    function now_interval_num_start(r){return r[5]}
    function set_now_interval_num_start(r,v){r[5] = v;return 0}
    function now(r){return r[4]}
    function set_now(r,v){r[4] = v;return 0}
    function max_interval_num(r){return r[3]}
    function start(r){return r[2]}
    function config(r){return r[1]}
    function _bq_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _br_=0,
     priority_queue$0=
      [0,
       function(param){return 0},
       cst_priority_queue,
       _br_,
       priority_queue,
       _bq_];
    function _bs_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _bt_=[0,set_max_allowed_alarm_time],
     max_allowed_alarm_time$0=
      [0,
       function(param){return 0},
       cst_max_allowed_alarm_time,
       _bt_,
       max_allowed_alarm_time,
       _bs_];
    function _bu_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7]]}
    var
     _bv_=[0,set_now_interval_num_start],
     now_interval_num_start$0=
      [0,
       function(param){return 0},
       cst_now_interval_num_start,
       _bv_,
       now_interval_num_start,
       _bu_];
    function _bw_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _bx_=[0,set_now],
     now$0=[0,function(param){return 0},cst_now,_bx_,now,_bw_];
    function _by_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7]]}
    var
     _bz_=0,
     max_interval_num$0=
      [0,
       function(param){return 0},
       cst_max_interval_num,
       _bz_,
       max_interval_num,
       _by_];
    function _bA_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7]]}
    var
     _bB_=0,
     start$0=[0,function(param){return 0},cst_start,_bB_,start,_bA_];
    function _bC_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7]]}
    var
     _bD_=0,
     config$0=[0,function(param){return 0},cst_config,_bD_,config,_bC_];
    function sexp_of_t_now(param,t)
     {return caml_call1(Core_kernel_Time_ns_alternate_sexp[89],t[4])}
    function alarm_precision$0(t){return alarm_precision(t[1])}
    function at$0(tw,t)
     {var _er_=tw[7],_eq_=of_external_exn(_er_[2],t);return at(_er_[2],_eq_)}
    function value$0(tw,t)
     {var _ep_=tw[7],_eo_=of_external_exn(_ep_[2],t);
      return value(_ep_[2],_eo_)}
    function interval_num(tw,t)
     {var _en_=tw[7],_em_=of_external_exn(_en_[2],t);return key(_en_[2],_em_)}
    function iter$0(t,f){return internal_iter(t[7],f)}
    function compare$1(t1,t2)
     {return caml_call2(Core_kernel_Time_ns_alternate_sexp[22],t1[1],t2[1])}
    function sexp_of_t$7(sexp_of_a,t)
     {var
       v_max_interval_num=t[3],
       v_start=t[2],
       v_config=t[1],
       v_now=t[4],
       r=[0,0];
      iter$0
       (t,
        function(a)
         {var _el_=r[1],_ek_=value$0(t,a);
          r[1] = [0,[0,at$0(t,a),_ek_],_el_];
          return 0});
      var v_alarms=caml_call2(Core_kernel_List[56],r[1],compare$1),bnds=0;
      function _ej_(param)
       {var
         v_value=param[2],
         v_at=param[1],
         arg=caml_call1(sexp_of_a,v_value),
         bnds=[0,[1,[0,_bE_,[0,arg,0]]],0],
         arg$0=caml_call1(Core_kernel_Time_ns_alternate_sexp[89],v_at),
         bnds$0=[0,[1,[0,_bF_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      var
       arg=caml_call2(Core_kernel[400],_ej_,v_alarms),
       bnds$0=[0,[1,[0,_bG_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel_Time_ns_alternate_sexp[89],v_now),
       bnds$1=[0,[1,[0,_bH_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(_bp_[2],v_max_interval_num),
       bnds$2=[0,[1,[0,_bI_,[0,arg$1,0]]],bnds$1],
       arg$2=caml_call1(Core_kernel_Time_ns_alternate_sexp[89],v_start),
       bnds$3=[0,[1,[0,_bJ_,[0,arg$2,0]]],bnds$2],
       arg$3=sexp_of_t$2(v_config),
       bnds$4=[0,[1,[0,_bK_,[0,arg$3,0]]],bnds$3];
      return [1,bnds$4]}
    function length$3(t){return t[7][1]}
    function is_empty$0(t)
     {var _ei_=length$3(t);return caml_call2(Core_kernel[90],_ei_,0)}
    function interval_num_internal(time,alarm_precision)
     {var
       _eg_=caml_call1(Core_kernel_Time_ns_alternate_sexp[73],time),
       _eh_=caml_call2(Core_kernel_Int63[50],_eg_,alarm_precision);
      return caml_call1(_bp_[35],_eh_)}
    function interval_num_unchecked(t,time)
     {return interval_num_internal(time,t[1][1])}
    function interval_num$0(t,time)
     {if(caml_call2(Core_kernel_Time_ns_alternate_sexp[19],time,_b_))
       {var
         _ee_=
          [0,
           [1,
            [0,
             _bL_,
             [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[89],time),0]]],
           0],
         _ef_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_interval_num_got_time_too_far_in_the_past),
            _ee_]];
        caml_call1(Core_kernel[241],_ef_)}
      return interval_num_unchecked(t,time)}
    function interval_num_start_unchecked(t,interval_num)
     {var
       interval_num$0=caml_call1(_bp_[36],interval_num),
       _ed_=caml_call2(Core_kernel_Int63[49],interval_num$0,t[1][1]);
      return caml_call1(Core_kernel_Time_ns_alternate_sexp[74],_ed_)}
    function interval_num_start(t,interval_num)
     {if(caml_call2(_bp_[7],interval_num,min_interval_num))
       {var
         _d9_=[0,[1,[0,_bM_,[0,caml_call1(_bp_[2],min_interval_num),0]]],0],
         _d__=[0,[1,[0,_bN_,[0,caml_call1(_bp_[2],interval_num),0]]],_d9_],
         _d$_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_interval_num_start_got_too_small_interval_num),
            _d__]];
        caml_call1(Core_kernel[241],_d$_)}
      if(caml_call2(_bp_[6],interval_num,t[3]))
       {var
         _ea_=[0,[1,[0,_bO_,[0,caml_call1(_bp_[2],t[3]),0]]],0],
         _eb_=[0,[1,[0,_bP_,[0,caml_call1(_bp_[2],interval_num),0]]],_ea_],
         _ec_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_interval_num_start_got_too_large_interval_num),
            _eb_]];
        caml_call1(Core_kernel[241],_ec_)}
      return interval_num_start_unchecked(t,interval_num)}
    function compute_max_allowed_alarm_time(t)
     {var max_allowed_key=max_allowed_key$1(t[7]);
      if(caml_call2(_bp_[3],max_allowed_key,t[3]))return _a_;
      var
       _d5_=Core_kernel_Time_ns_alternate_sexp[1][66],
       _d6_=alarm_precision$0(t),
       _d7_=caml_call2(Core_kernel_Time_ns_alternate_sexp[1][97],_d6_,_d5_),
       _d8_=interval_num_start_unchecked(t,max_allowed_key);
      return caml_call2(Core_kernel_Time_ns_alternate_sexp[63],_d8_,_d7_)}
    function min_allowed_alarm_interval_num(t){return min_allowed_key$1(t[7])}
    function max_allowed_alarm_interval_num(t){return interval_num$0(t,t[6])}
    function interval_start(t,time)
     {return interval_num_start_unchecked(t,interval_num$0(t,time))}
    function invariant$1(invariant_a,t)
     {function _dg_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         priority_queue_fun=
          check
           (function(t)
             {var pool=t[2];
              function _dt_(param)
               {function check(f){return caml_call2(Base_Invariant[2],t,f)}
                if(caml_call2(symbol$12,min_allowed_key$1(t),zero$0))
                 {var _dz_=min_allowed_key$1(t);
                  if(caml_call2(symbol$12,max_allowed_key$1(t),_dz_))
                   {var
                     levels_fun=
                      check
                       (function(levels)
                         {var _dF_=num_levels(t);
                          if(caml_call2(Core_kernel[91],_dF_,0))
                           {var
                             _dG_=
                              function(level_index$0,level)
                               {if(caml_call2(Core_kernel[90],level_index$0,level[1]))
                                 {var
                                   _dH_=
                                    function(param)
                                     {function check(f)
                                       {return caml_call2(Base_Invariant[2],level,f)}
                                      var
                                       slots_fun=
                                        check
                                         (function(slots)
                                           {function _dS_(t$0)
                                             {var _dW_=1 - caml_call1(is_null,t$0);
                                              if(_dW_)
                                               {var
                                                 _dT_=
                                                  function(param)
                                                   {if(is_valid(pool,t$0))
                                                     {caml_call1(invariant_a,value(pool,t$0));
                                                      var n=next(pool,t$0);
                                                      if(! caml_call1(is_null,n))
                                                       {var _d4_=prev(pool,n);
                                                        if(! caml_call2(Tuple_pool[36][3][7],t$0,_d4_))
                                                         throw [0,Assert_failure,_Q_]}
                                                      var p=prev(pool,t$0);
                                                      if(! caml_call1(is_null,p))
                                                       {var _d3_=next(pool,p);
                                                        if(! caml_call2(Tuple_pool[36][3][7],t$0,_d3_))
                                                         throw [0,Assert_failure,_P_]}
                                                      return 0}
                                                    throw [0,Assert_failure,_R_]},
                                                 _dU_=function(param){return _S_},
                                                 _dV_=function(_d2_){return sexp_of_t$5(_dU_,_d2_)};
                                                caml_call4(Base_Invariant[1],_T_,t$0,_dV_,_dT_);
                                                return iter
                                                        (pool,
                                                         t$0,
                                                         function(elt)
                                                          {var _dX_=level[9];
                                                           if(caml_call2(symbol$12,key(pool,elt),_dX_))
                                                            {var _dY_=level[10];
                                                             if(caml_call2(symbol$13,key(pool,elt),_dY_))
                                                              {var _dZ_=t[4];
                                                               if(caml_call2(symbol$12,key(pool,elt),_dZ_))
                                                                {var _d0_=level[1],_d1_=level_index(pool,elt);
                                                                 if(caml_call2(Core_kernel[90],_d1_,_d0_))
                                                                  return caml_call1(invariant_a,value(pool,elt));
                                                                 throw [0,Assert_failure,_aT_]}
                                                               throw [0,Assert_failure,_aU_]}
                                                             throw [0,Assert_failure,_aV_]}
                                                           throw [0,Assert_failure,_aW_]})}
                                              return _dW_}
                                            return caml_call2(Core_kernel_Array[19],slots,_dS_)}),
                                       max_allowed_key_fun=
                                        check
                                         (function(got)
                                           {var expect=add_clamp_to_max(level[9],level[7]);
                                            return caml_call8
                                                    (Ppx_assert_lib_Runtime[3],
                                                     pos,
                                                     sexpifier$0,
                                                     comparator$1,
                                                     0,
                                                     0,
                                                     0,
                                                     expect,
                                                     got)}),
                                       min_allowed_key_fun=
                                        check
                                         (function(min_allowed_key)
                                           {if(caml_call2(symbol$12,min_allowed_key,zero$0))
                                             {var _dR_=caml_call2(symbol$16,min_allowed_key,max_value$0);
                                              if(_dR_)
                                               {var
                                                 got=caml_call2(rem,min_allowed_key,level[5]),
                                                 sexpifier=_O_[1],
                                                 comparator=_O_[9];
                                                return caml_call8
                                                        (Ppx_assert_lib_Runtime[3],
                                                         pos$0,
                                                         sexpifier,
                                                         comparator,
                                                         0,
                                                         0,
                                                         0,
                                                         _O_[24],
                                                         got)}
                                              return _dR_}
                                            throw [0,Assert_failure,_aX_]}),
                                       length_fun=
                                        check
                                         (function(length)
                                           {function _dP_(n,first)
                                             {if(caml_call1(is_null,first))return n;
                                              var r=[0,0],current=[0,first],continue$0=[0,1];
                                              for(;;)
                                               {if(continue$0[1])
                                                 {r[1]++;
                                                  var next$0=next(pool,current[1]);
                                                  if(caml_call2(Core_kernel[234],next$0,first))
                                                   continue$0[1] = 0;
                                                  else
                                                   current[1] = next$0;
                                                  continue}
                                                return n + r[1] | 0}}
                                            var _dQ_=caml_call3(Core_kernel_Array[20],level[11],0,_dP_);
                                            if(caml_call2(Core_kernel[90],length,_dQ_))return 0;
                                            throw [0,Assert_failure,_aY_]}),
                                       expect=compute_diff_max_min_allowed_key(level[2],level[4]),
                                       diff_max_min_allowed_key_fun=
                                        check
                                         (function(got)
                                           {var sexpifier=_O_[1],comparator=_O_[9];
                                            return caml_call8
                                                    (Ppx_assert_lib_Runtime[3],
                                                     pos$1,
                                                     sexpifier,
                                                     comparator,
                                                     0,
                                                     0,
                                                     0,
                                                     expect,
                                                     got)}),
                                       min_key_in_same_slot_mask_fun=
                                        check
                                         (function(min_key_in_same_slot_mask)
                                           {if
                                             (caml_call2
                                               (equal$0,min_key_in_same_slot_mask,create$1(level[4])))
                                             return 0;
                                            throw [0,Assert_failure,_aZ_]}),
                                       keys_per_slot_fun=
                                        check
                                         (function(got)
                                           {var
                                             expect=num_keys(level[4]),
                                             sexpifier=_O_[1],
                                             comparator=_O_[9];
                                            return caml_call8
                                                    (Ppx_assert_lib_Runtime[3],
                                                     pos$2,
                                                     sexpifier,
                                                     comparator,
                                                     0,
                                                     0,
                                                     0,
                                                     expect,
                                                     got)}),
                                       bits_per_slot_fun=
                                        check
                                         (function(bits_per_slot)
                                           {if(caml_call2(_i_,bits_per_slot,_c_))return 0;
                                            throw [0,Assert_failure,_a0_]}),
                                       expect$0=create$0(level[2]),
                                       slots_mask_fun=
                                        check
                                         (function(got)
                                           {return caml_call8
                                                    (Ppx_assert_lib_Runtime[3],
                                                     pos$3,
                                                     sexpifier,
                                                     comparator,
                                                     0,
                                                     0,
                                                     0,
                                                     expect$0,
                                                     got)}),
                                       bits_fun=
                                        check
                                         (function(bits)
                                           {if(caml_call2(_k_,bits,_c_))return 0;
                                            throw [0,Assert_failure,_a1_]}),
                                       index_fun=
                                        check
                                         (function(index)
                                           {if(caml_call2(Core_kernel[88],index,0))return 0;
                                            throw [0,Assert_failure,_a2_]});
                                      caml_call1(index_fun,index$0);
                                      caml_call1(bits_fun,bits$0);
                                      caml_call1(slots_mask_fun,slots_mask$0);
                                      caml_call1(bits_per_slot_fun,bits_per_slot$0);
                                      caml_call1(keys_per_slot_fun,keys_per_slot$0);
                                      caml_call1
                                       (min_key_in_same_slot_mask_fun,min_key_in_same_slot_mask$0);
                                      caml_call1
                                       (diff_max_min_allowed_key_fun,diff_max_min_allowed_key$0);
                                      caml_call1(length_fun,length$0);
                                      caml_call1(min_allowed_key_fun,min_allowed_key$0);
                                      caml_call1(max_allowed_key_fun,max_allowed_key$0);
                                      return caml_call1(slots_fun,slots$0)},
                                   _dI_=function(param){return _a3_},
                                   _dJ_=function(_dO_){return sexp_of_t$6(_dI_,_dO_)};
                                  caml_call4(Base_Invariant[1],_a4_,level,_dJ_,_dH_);
                                  var _dK_=caml_call2(Core_kernel[91],level_index$0,0);
                                  if(_dK_)
                                   {var
                                     _dL_=level_index$0 - 1 | 0,
                                     prev_level=caml_check_bound(levels,_dL_)[1 + _dL_],
                                     _dM_=level[5],
                                     expect=caml_call1(_O_[33],prev_level[7]),
                                     sexpifier$1=_O_[1],
                                     comparator$0=_O_[9];
                                    caml_call8
                                     (Ppx_assert_lib_Runtime[3],
                                      pos$4,
                                      sexpifier$1,
                                      comparator$0,
                                      0,
                                      0,
                                      0,
                                      expect,
                                      _dM_);
                                    var
                                     _dN_=level[9],
                                     expect$0=compute_min_allowed_key(level,prev_level[10]);
                                    return caml_call8
                                            (Ppx_assert_lib_Runtime[3],
                                             pos$5,
                                             sexpifier$0,
                                             comparator$1,
                                             0,
                                             0,
                                             0,
                                             expect$0,
                                             _dN_)}
                                  return _dK_}
                                throw [0,Assert_failure,_a5_]};
                            return caml_call2(Core_kernel_Array[53],levels,_dG_)}
                          throw [0,Assert_failure,_a6_]}),
                     elt_key_lower_bound_fun=
                      check
                       (function(elt_key_lower_bound)
                         {if
                           (caml_call2
                             (symbol$12,elt_key_lower_bound,min_allowed_key$1(t)))
                           {if
                             (caml_call2
                               (symbol$13,elt_key_lower_bound,max_allowed_key$1(t)))
                             {var _dE_=1 - caml_call1(is_null,t[3]);
                              if(_dE_)
                               {if(caml_call2(equal$2,elt_key_lower_bound,key(t[2],t[3])))
                                 return 0;
                                throw [0,Assert_failure,_a7_]}
                              return _dE_}
                            throw [0,Assert_failure,_a8_]}
                          throw [0,Assert_failure,_a9_]}),
                     min_elt_fun=
                      check
                       (function(elt)
                         {var _dC_=1 - caml_call1(is_null,elt);
                          if(_dC_)
                           {if(is_valid(t[2],elt))
                             {var _dD_=key(t[2],elt);
                              if(caml_call2(equal$2,t[4],_dD_))return 0;
                              throw [0,Assert_failure,_a__]}
                            throw [0,Assert_failure,_a$_]}
                          return _dC_}),
                     pool_fun=
                      check
                       (function(t)
                         {function _dA_(_dB_){return 0}
                          return caml_call2(Tuple_pool[36][5],_dA_,t)}),
                     length_fun=
                      check
                       (function(length)
                         {if(caml_call2(Core_kernel[88],length,0))return 0;
                          throw [0,Assert_failure,_ba_]});
                    caml_call1(length_fun,length$2);
                    caml_call1(pool_fun,pool$0);
                    caml_call1(min_elt_fun,min_elt$0);
                    caml_call1(elt_key_lower_bound_fun,elt_key_lower_bound$0);
                    return caml_call1(levels_fun,levels$0)}
                  throw [0,Assert_failure,_bb_]}
                throw [0,Assert_failure,_bc_]}
              function of_a(param){return _bd_}
              function _du_(param)
               {var
                 v_length=param[1],
                 v_pool=param[2],
                 v_min_elt=param[3],
                 v_elt_key_lower_bound=param[4],
                 v_levels=param[5],
                 bnds=0;
                function _dw_(_dy_){return sexp_of_t$6(of_a,_dy_)}
                var
                 arg$0=caml_call2(Core_kernel[275],_dw_,v_levels),
                 bnds$0=[0,[1,[0,_aJ_,[0,arg$0,0]]],bnds],
                 arg$1=caml_call1(sexpifier$0,v_elt_key_lower_bound),
                 bnds$1=[0,[1,[0,_aK_,[0,arg$1,0]]],bnds$0],
                 arg$2=sexp_of_t$5(of_a,v_min_elt),
                 bnds$2=[0,[1,[0,_aL_,[0,arg$2,0]]],bnds$1];
                function _dv_(_dx_){return sexp_of_pool_slots(of_a,_dx_)}
                var
                 arg=caml_call2(Tuple_pool[36][4],_dv_,v_pool),
                 bnds$3=[0,[1,[0,_aM_,[0,arg,0]]],bnds$2],
                 arg$3=caml_call1(Core_kernel[339],v_length),
                 bnds$4=[0,[1,[0,_aN_,[0,arg$3,0]]],bnds$3];
                return [1,bnds$4]}
              return caml_call4(Base_Invariant[1],_be_,t,_du_,_dt_)}),
         max_allowed_alarm_time_fun=
          check
           (function(got)
             {var
               expect=compute_max_allowed_alarm_time(t),
               sexpifier=Core_kernel_Time_ns_alternate_sexp[89],
               comparator=Core_kernel_Time_ns_alternate_sexp[22];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$6,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       expect,
                       got)}),
         now_interval_num_start_fun=
          check
           (function(got)
             {var
               expect=interval_num_start(t,min_allowed_alarm_interval_num(t)),
               sexpifier=Core_kernel_Time_ns_alternate_sexp[89],
               comparator=Core_kernel_Time_ns_alternate_sexp[22];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$7,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       expect,
                       got)}),
         now_fun=
          check
           (function(now)
             {if(caml_call2(Core_kernel_Time_ns_alternate_sexp[15],now,t[2]))
               {if(caml_call2(Core_kernel_Time_ns_alternate_sexp[16],now,_a_))
                 {var
                   _dr_=min_allowed_key$1(t[7]),
                   _ds_=interval_num$0(t,t[4]);
                  if(caml_call2(_bp_[9],_ds_,_dr_))return 0;
                  throw [0,Assert_failure,_bQ_]}
                throw [0,Assert_failure,_bR_]}
              throw [0,Assert_failure,_bS_]}),
         max_interval_num_fun=
          check
           (function(expect)
             {var
               got=interval_num$0(t,_a_),
               sexpifier=_bp_[2],
               comparator=_bp_[22];
              caml_call8
               (Ppx_assert_lib_Runtime[3],
                pos$8,
                sexpifier,
                comparator,
                0,
                0,
                0,
                expect,
                got);
              var
               got$0=interval_num$0(t,interval_num_start(t,expect)),
               sexpifier$0=_bp_[2],
               comparator$0=_bp_[22];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$9,
                       sexpifier$0,
                       comparator$0,
                       0,
                       0,
                       0,
                       expect,
                       got$0)}),
         start_fun=
          check
           (function(start)
             {if(caml_call2(Core_kernel_Time_ns_alternate_sexp[15],start,_b_))
               {if
                 (caml_call2(Core_kernel_Time_ns_alternate_sexp[16],start,_a_))
                 return 0;
                throw [0,Assert_failure,_bT_]}
              throw [0,Assert_failure,_bU_]}),
         config_fun=check(invariant$0);
        caml_call1(config_fun,config$0);
        caml_call1(start_fun,start$0);
        caml_call1(max_interval_num_fun,max_interval_num$0);
        caml_call1(now_fun,now$0);
        caml_call1(now_interval_num_start_fun,now_interval_num_start$0);
        caml_call1(max_allowed_alarm_time_fun,max_allowed_alarm_time$0);
        caml_call1(priority_queue_fun,priority_queue$0);
        return iter$0
                (t,
                 function(alarm)
                  {var
                    _dk_=interval_num$0(t,at$0(t,alarm)),
                    _dl_=interval_num(t,alarm);
                   if(caml_call2(_bp_[9],_dl_,_dk_))
                    {var
                      _dm_=interval_start(t,t[4]),
                      _dn_=interval_start(t,at$0(t,alarm));
                     if
                      (caml_call2
                        (Core_kernel_Time_ns_alternate_sexp[15],_dn_,_dm_))
                      {var
                        _do_=alarm_precision$0(t),
                        _dp_=
                         caml_call2(Core_kernel_Time_ns_alternate_sexp[66],t[4],_do_),
                        _dq_=at$0(t,alarm);
                       if
                        (caml_call2
                          (Core_kernel_Time_ns_alternate_sexp[18],_dq_,_dp_))
                        return 0;
                       throw [0,Assert_failure,_bV_]}
                     throw [0,Assert_failure,_bW_]}
                   throw [0,Assert_failure,_bX_]})}
      function _dh_(param){return _bY_}
      function _di_(_dj_){return sexp_of_t$7(_dh_,_dj_)}
      return caml_call4(Base_Invariant[1],_bZ_,t,_di_,_dg_)}
    function advance_clock(t,to,handle_fired)
     {var _dd_=caml_call2(Core_kernel_Time_ns_alternate_sexp[18],to,t[4]);
      if(_dd_)
       {t[4] = to;
        var key$0=interval_num_unchecked(t,to);
        t[5] = interval_num_start_unchecked(t,key$0);
        var _de_=t[7];
        if(caml_call2(symbol$15,key$0,min_allowed_key$1(_de_)))
         {var
           level_index=[0,0],
           prev_level_max_allowed_key=[0,caml_call1(pred$0,key$0)],
           levels=_de_[5],
           num_levels$0=num_levels(_de_);
          a:
          for(;;)
           {if(caml_call2(Core_kernel[92],level_index[1],num_levels$0))
             {var
               _dc_=level_index[1],
               level=caml_check_bound(levels,_dc_)[1 + _dc_],
               min_allowed_key_before=level[9],
               desired_min_allowed_key=
                compute_min_allowed_key(level,prev_level_max_allowed_key[1]),
               level_min_allowed_key=
                min_key_in_same_slot$0
                 (level,
                  caml_call2
                   (min$0,
                    desired_min_allowed_key,
                    caml_call2(max$0,level[9],_de_[4]))),
               level_min_allowed_key$0=[0,level_min_allowed_key],
               slot$0=[0,slot(level,level_min_allowed_key$0[1])],
               keys_per_slot=level[5],
               slots=level[11];
              for(;;)
               {if
                 (caml_call2
                   (symbol$16,
                    level_min_allowed_key$0[1],
                    desired_min_allowed_key))
                 {if(caml_call2(Core_kernel[90],level[8],0))
                   {level_min_allowed_key$0[1] = desired_min_allowed_key;
                    continue}
                  var
                   _c$_=slot$0[1],
                   first=caml_check_bound(slots,_c$_)[1 + _c$_];
                  if(1 - caml_call1(is_null,first))
                   {var _da_=caml_call1(null$1,0),_db_=slot$0[1];
                    caml_check_bound(slots,_db_)[1 + _db_] = _da_;
                    var pool=_de_[2],current=[0,first],continue$0=[0,1];
                    for(;;)
                     {if(continue$0[1])
                       {var next$0=next(pool,current[1]);
                        level[8] = level[8] - 1 | 0;
                        if(caml_call2(symbol$12,key(pool,current[1]),key$0))
                         add_elt(_de_,current[1]);
                        else
                         {_de_[1] = _de_[1] - 1 | 0;
                          caml_call1(handle_fired,current[1]);
                          caml_call2(free,pool,current[1])}
                        if(caml_call2(Core_kernel[234],next$0,first))
                         continue$0[1] = 0;
                        else
                         current[1] = next$0;
                        continue}
                      break}}
                  slot$0[1] = next_slot(level,slot$0[1]);
                  level_min_allowed_key$0[1]
                  =
                  add_clamp_to_max(level_min_allowed_key$0[1],keys_per_slot);
                  continue}
                level[9] = desired_min_allowed_key;
                level[10]
                =
                add_clamp_to_max(desired_min_allowed_key,level[7]);
                if(caml_call2(equal$2,level[9],min_allowed_key_before))
                 level_index[1] = num_levels$0;
                else
                 {level_index[1] = level_index[1] + 1 | 0;
                  prev_level_max_allowed_key[1] = level[10]}
                continue a}}
            if(caml_call2(symbol$15,key$0,_de_[4]))
             {_de_[3] = caml_call1(null$1,0);
              _de_[4] = min_allowed_key$1(_de_)}
            break}}
        t[6] = compute_max_allowed_alarm_time(t);
        var _df_=0}
      else
       var _df_=_dd_;
      return _df_}
    function create$2(config,start)
     {if
       (caml_call2
         (Core_kernel_Time_ns_alternate_sexp[19],
          start,
          Core_kernel_Time_ns_alternate_sexp[55]))
       {var
         _c0_=
          [0,
           [1,
            [0,
             _b0_,
             [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[89],start),0]]],
           0],
         _c1_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_create_got_start_before_the_epoch),
            _c0_]];
        caml_call1(Core_kernel[241],_c1_)}
      var
       l=config[2],
       level_bits$0=[0,l],
       _c2_=config[3],
       level_bits=level_bits$0?l:level_bits_default;
      function _cW_(index,param,level_bits)
       {var
         levels=param[3],
         max_level_min_allowed_key=param[2],
         bits_per_slot=param[1],
         keys_per_slot=num_keys(bits_per_slot),
         diff_max_min_allowed_key=
          compute_diff_max_min_allowed_key(level_bits,bits_per_slot),
         min_key_in_same_slot_mask=create$1(bits_per_slot),
         min_allowed_key=
          min_key_in_same_slot
           (max_level_min_allowed_key,min_key_in_same_slot_mask),
         t=add_clamp_to_max(min_allowed_key,diff_max_min_allowed_key),
         _c5_=caml_call1(null$1,0),
         _c6_=pow2(level_bits),
         _c7_=caml_call1(Core_kernel_Int63[4],_c6_),
         _c8_=caml_call2(Core_kernel_Array[35],_c7_,_c5_),
         level=
          [0,
           index,
           level_bits,
           create$0(level_bits),
           bits_per_slot,
           keys_per_slot,
           min_key_in_same_slot_mask,
           diff_max_min_allowed_key,
           0,
           min_allowed_key,
           t,
           _c8_],
         _c9_=[0,level,levels],
         _c__=
          caml_call2(symbol$14,t,max_value$0)?max_value$0:caml_call1(succ$0,t);
        return [0,symbol(level_bits,bits_per_slot),_c__,_c9_]}
      var
       match=caml_call3(Core_kernel_List[92],level_bits,[0,_c_,zero$0,0],_cW_),
       levels=match[3],
       _cX_=caml_call1(Core_kernel_Array[83],levels),
       _cY_=caml_call1(null$1,0);
      if(_c2_)var sth=_c2_[1],capacity=sth;else var capacity=1;
      var
       _cZ_=
        [0,
         0,
         caml_call2(Tuple_pool[36][35],Tuple_pool[36][1][22],capacity),
         _cY_,
         zero$0,
         _cX_],
       _c3_=Core_kernel_Time_ns_alternate_sexp[58],
       _c4_=Core_kernel_Time_ns_alternate_sexp[58],
       t=
        [0,
         config,
         start,
         interval_num_internal(_a_,config[1]),
         _c4_,
         _c3_,
         _a_,
         _cZ_];
      advance_clock(t,start,function(param){throw [0,Assert_failure,_b1_]});
      return t}
    function add_at_interval_num(t,at,value)
     {var _cV_=interval_num_start(t,at);
      return internal_add(t[7],at,_cV_,value)}
    function ensure_can_schedule_alarm(t,at)
     {if(caml_call2(Core_kernel_Time_ns_alternate_sexp[18],at,t[6]))
       {var
         _cO_=
          [0,
           [1,
            [0,
             _b2_,
             [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[89],t[6]),0]]],
           0],
         _cP_=
          [0,
           [1,
            [0,
             _b3_,
             [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[89],at),0]]],
           _cO_],
         _cQ_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_cannot_schedule_alarm_that_far_in_the_future),
            _cP_]];
        caml_call1(Core_kernel[241],_cQ_)}
      var _cU_=caml_call2(Core_kernel_Time_ns_alternate_sexp[19],at,t[5]);
      if(_cU_)
       {var
         _cR_=
          [0,
           [1,
            [0,
             _b4_,
             [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[89],t[5]),0]]],
           0],
         _cS_=
          [0,
           [1,
            [0,
             _b5_,
             [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[89],at),0]]],
           _cR_],
         _cT_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_cannot_schedule_alarm_before_start_of_current_interval),
            _cS_]];
        return caml_call1(Core_kernel[241],_cT_)}
      return _cU_}
    function add$0(t,at,value)
     {ensure_can_schedule_alarm(t,at);
      var _cN_=interval_num_unchecked(t,at);
      return internal_add(t[7],_cN_,at,value)}
    function remove(t,alarm)
     {var _cM_=t[7],pool=_cM_[2],elt=of_external_exn(pool,alarm);
      internal_remove(_cM_,elt);
      return caml_call2(free,pool,elt)}
    function clear(t)
     {var _cL_=t[7],_cC_=1 - is_empty(_cL_);
      if(_cC_)
       {_cL_[1] = 0;
        var
         pool=_cL_[2],
         free_elt=function(elt){return caml_call2(free,pool,elt)},
         levels=_cL_[5],
         _cE_=caml_call1(Core_kernel_Array[17],levels) - 1 | 0,
         _cD_=0;
        if(! (_cE_ < 0))
         {var level_index=_cD_;
          for(;;)
           {var level=caml_check_bound(levels,level_index)[1 + level_index];
            if(caml_call2(Core_kernel[91],level[8],0))
             {level[8] = 0;
              var
               slots=level[11],
               _cH_=caml_call1(Core_kernel_Array[17],slots) - 1 | 0,
               _cG_=0;
              if(! (_cH_ < 0))
               {var slot_index=_cG_;
                for(;;)
                 {var elt=caml_check_bound(slots,slot_index)[1 + slot_index];
                  if(1 - caml_call1(is_null,elt))
                   {iter(pool,elt,free_elt);
                    var _cJ_=caml_call1(null$1,0);
                    caml_check_bound(slots,slot_index)[1 + slot_index] = _cJ_}
                  var _cK_=slot_index + 1 | 0;
                  if(_cH_ !== slot_index){var slot_index=_cK_;continue}
                  break}}}
            var _cI_=level_index + 1 | 0;
            if(_cE_ !== level_index){var level_index=_cI_;continue}
            break}}
        var _cF_=0}
      else
       var _cF_=_cC_;
      return _cF_}
    function mem(t,alarm){return is_valid(t[7][2],alarm)}
    function reschedule_gen(t$0,alarm,k,x)
     {if(1 - mem(t$0,alarm))
       caml_call1
        (Core_kernel[6],
         cst_Timing_wheel_cannot_reschedule_alarm_not_in_timing_wheel);
      ensure_can_schedule_alarm(t$0,x);
      var _cB_=t$0[7];
      ensure_valid_key(_cB_,k);
      var pool=_cB_[2],t=of_external_exn(pool,alarm);
      internal_remove(_cB_,t);
      caml_call4(Tuple_pool[36][33],pool,t,Tuple_pool[36][2][3],k);
      caml_call4(Tuple_pool[36][33],pool,t,Tuple_pool[36][2][4],x);
      return internal_add_elt(_cB_,t)}
    function reschedule(t,alarm,at)
     {return reschedule_gen(t,alarm,interval_num_unchecked(t,at),at)}
    function reschedule_at_interval_num(t,alarm,at)
     {return reschedule_gen(t,alarm,at,interval_num_start(t,at))}
    function pool$1(t){return t[7][2]}
    function min_alarm_interval_num(t)
     {var elt=min_elt$1(t[7]);
      return caml_call1(is_null,elt)?0:[0,key(pool$1(t),elt)]}
    function min_alarm_interval_num_exn(t)
     {var elt=min_elt$1(t[7]);
      if(caml_call1(is_null,elt))
       {var
         _cx_=0,
         _cy_=0,
         _cz_=
          [0,
           [1,[0,_b7_,[0,sexp_of_t$7(function(param){return _b6_},t),_cy_]]],
           _cx_],
         _cA_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_min_alarm_interval_num_exn_of_empty_timing_wheel),
            _cz_]];
        return caml_call1(Core_kernel[241],_cA_)}
      return key(pool$1(t),elt)}
    function max_alarm_time_in_list(t,first)
     {var
       pool=pool$1(t),
       with_key=key(pool,first),
       max_alarm_time=[0,Core_kernel_Time_ns_alternate_sexp[55]],
       current=[0,first],
       continue$0=[0,1];
      for(;;)
       {if(continue$0[1])
         {var next$0=next(pool,current[1]);
          if(caml_call2(equal$2,key(pool,current[1]),with_key))
           {var _cv_=max_alarm_time[1],_cw_=at(pool,current[1]);
            max_alarm_time[1]
            =
            caml_call2(Core_kernel_Time_ns_alternate_sexp[24],_cw_,_cv_)}
          if(caml_call2(Core_kernel[234],next$0,first))
           continue$0[1] = 0;
          else
           current[1] = next$0;
          continue}
        return max_alarm_time[1]}}
    function max_alarm_time_in_min_interval(t)
     {var elt=min_elt$1(t[7]);
      return caml_call1(is_null,elt)?0:[0,max_alarm_time_in_list(t,elt)]}
    function max_alarm_time_in_min_interval_exn(t)
     {var elt=min_elt$1(t[7]);
      if(caml_call1(is_null,elt))
       {var
         _cr_=0,
         _cs_=0,
         _ct_=
          [0,
           [1,[0,_b9_,[0,sexp_of_t$7(function(param){return _b8_},t),_cs_]]],
           _cr_],
         _cu_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_max_alarm_time_in_min_interval_exn_of_empty_timing_wheel),
            _ct_]];
        caml_call1(Core_kernel[241],_cu_)}
      return max_alarm_time_in_list(t,elt)}
    function next_alarm_fires_at_internal(t,key)
     {return interval_num_start(t,caml_call1(_bp_[42],key))}
    function next_alarm_fires_at(t)
     {var elt=min_elt$1(t[7]);
      if(caml_call1(is_null,elt))return 0;
      var key$0=key(pool$1(t),elt);
      return caml_call2(_bp_[9],key$0,t[3])
              ?0
              :[0,next_alarm_fires_at_internal(t,key$0)]}
    function next_alarm_fires_at_exn(t)
     {var elt=min_elt$1(t[7]);
      if(caml_call1(is_null,elt))
       {var
         _cj_=0,
         _ck_=0,
         _cl_=
          [0,
           [1,[0,_b$_,[0,sexp_of_t$7(function(param){return _b__},t),_ck_]]],
           _cj_],
         _cm_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_next_alarm_fires_at_exn_of_empty_timing_wheel),
            _cl_]];
        caml_call1(Core_kernel[241],_cm_)}
      var key$0=key(pool$1(t),elt);
      if(caml_call2(_bp_[9],key$0,t[3]))
       {var
         _cn_=0,
         _co_=0,
         _cp_=
          [0,
           [1,[0,_cb_,[0,sexp_of_t$7(function(param){return _ca_},t),_co_]]],
           _cn_],
         _cq_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Timing_wheel_next_alarm_fires_at_exn_with_all_alarms_in_max_interval),
            _cp_]];
        caml_call1(Core_kernel[241],_cq_)}
      return next_alarm_fires_at_internal(t,key$0)}
    function fire_past_alarms(t,handle_fired)
     {var
       _ch_=t[4],
       key=min_allowed_alarm_interval_num(t),
       _ci_=t[7],
       level=caml_check_bound(_ci_[5],0)[1],
       _cc_=caml_call2(Core_kernel[91],level[8],0);
      if(_cc_)
       {var
         slot$0=slot(level,key),
         slots=level[11],
         pool=_ci_[2],
         first=[0,caml_check_bound(slots,slot$0)[1 + slot$0]],
         _cd_=1 - caml_call1(is_null,first[1]);
        if(_cd_)
         {var current=[0,first[1]],continue$0=[0,1];
          for(;;)
           {if(continue$0[1])
             {var elt=current[1],next$0=next(pool,elt);
              if(caml_call2(Core_kernel[234],next$0,first[1]))
               continue$0[1] = 0;
              else
               current[1] = next$0;
              var _ce_=at(pool,elt);
              if(caml_call2(Core_kernel_Time_ns_alternate_sexp[16],_ce_,_ch_))
               {caml_call1(handle_fired,elt);
                internal_remove(_ci_,elt);
                caml_call2(free,pool,elt);
                first[1] = caml_check_bound(slots,slot$0)[1 + slot$0]}
              continue}
            var _cf_=0;
            break}}
        else
         var _cf_=_cd_;
        var _cg_=_cf_}
      else
       var _cg_=_cc_;
      return _cg_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_timing_wheel$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Timing_wheel$0=
      [0,
       [0,
        compare,
        sexp_of_t$0,
        equal,
        of_sexpable,
        of_sexpable,
        to_sexpable,
        one_nanosecond,
        about_one_day,
        about_one_microsecond,
        about_one_millisecond,
        about_one_second,
        mul,
        div,
        _x_],
       sexp_of_t$7,
       sexp_of_t_now,
       _bp_,
       [0,sexp_of_t$5,null$0,at$0,interval_num,value$0],
       invariant$1,
       [0,
        t_of_sexp,
        sexp_of_t,
        f,
        max_num_bits,
        create_exn,
        level_bits_default,
        num_bits],
       [0,
        t_of_sexp$1,
        sexp_of_t$2,
        invariant$0,
        create,
        alarm_precision,
        level_bits,
        durations,
        microsecond_precision],
       create$2,
       alarm_precision$0,
       now,
       start,
       is_empty$0,
       length$3,
       iter$0,
       interval_num$0,
       min_allowed_alarm_interval_num,
       interval_num_start,
       interval_start,
       advance_clock,
       fire_past_alarms,
       max_allowed_alarm_time,
       min_allowed_alarm_interval_num,
       max_allowed_alarm_interval_num,
       add$0,
       add_at_interval_num,
       mem,
       remove,
       reschedule,
       reschedule_at_interval_num,
       clear,
       min_alarm_interval_num,
       min_alarm_interval_num_exn,
       max_alarm_time_in_min_interval,
       max_alarm_time_in_min_interval_exn,
       next_alarm_fires_at,
       next_alarm_fires_at_exn,
       [0,_a_,interval_num_internal,[0,invariant,_c_]]];
    caml_register_global(225,Timing_wheel$0,"Timing_wheel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aW1pbmdfd2hlZWwuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
