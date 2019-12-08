(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_int_compare=runtime.caml_int_compare,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
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
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_KRB2=caml_new_string("KRB2"),
     cst_KBT=caml_new_string("KBT"),
     cst_RPC=caml_new_string("RPC"),
     cst_Krb=caml_new_string("Krb"),
     cst_Krb_test_mode=caml_new_string("Krb_test_mode"),
     cst_Rpc=caml_new_string("Rpc"),
     cst_krb=caml_new_string("krb"),
     cst_krb_test_mode=caml_new_string("krb_test_mode"),
     cst_rpc=caml_new_string("rpc"),
     cst_Krb$0=caml_new_string("Krb"),
     cst_Krb_test_mode$0=caml_new_string("Krb_test_mode"),
     cst_Rpc$0=caml_new_string("Rpc"),
     cst_krb$0=caml_new_string("krb"),
     cst_krb_test_mode$0=caml_new_string("krb_test_mode"),
     cst_rpc$0=caml_new_string("rpc"),
     cst_protocol_version_header=caml_new_string("protocol_version_header"),
     cst_src_known_protocol_ml=caml_new_string("src/known_protocol.ml"),
     cst=caml_new_string(""),
     cst_protocol_version_header$0=caml_new_string("protocol_version_header"),
     all=[0,0,[0,1,[0,2,0]]],
     tp_loc=caml_new_string("src/known_protocol.ml.t"),
     retired_krb_word=caml_new_string("KRB"),
     cst_src_known_protocol_ml$0=caml_new_string("src/known_protocol.ml"),
     cst_validate_magic_words=caml_new_string(": validate magic words"),
     cst_src_known_protocol_ml$1=caml_new_string("src/known_protocol.ml"),
     cst_magic_numbers=caml_new_string(": magic numbers"),
     cst_protocol_version_header$1=caml_new_string("protocol_version_header"),
     cst_protocol_version_header$2=caml_new_string("protocol_version_header"),
     cst_src_list_with_max_len_intf_ml=
      caml_new_string("src/list_with_max_len_intf.ml"),
     cst$0=caml_new_string(""),
     cst_protocol_version_header$3=caml_new_string("protocol_version_header"),
     cst_protocol_version_header$4=caml_new_string("protocol_version_header"),
     cst_List_is_too_large=caml_new_string("List is too large"),
     cst_t$0=caml_new_string("t"),
     cst_a=caml_new_string("a"),
     cst_src_list_with_max_len_ml_7_14=
      caml_new_string("src/list_with_max_len.ml:7:14"),
     cst_a$0=caml_new_string("a"),
     cst_t=caml_new_string("t"),
     cst_src_list_with_max_len_ml_7_2=
      caml_new_string("src/list_with_max_len.ml:7:2"),
     cst_protocol_version_header$5=caml_new_string("protocol_version_header"),
     cst_src_list_with_max_len_ml=caml_new_string("src/list_with_max_len.ml"),
     cst$1=caml_new_string(""),
     cst_protocol_version_header$6=caml_new_string("protocol_version_header"),
     cst_protocol_version_header$7=caml_new_string("protocol_version_header"),
     cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers=
      caml_new_string
       ("[Protocol_version_header.negotiate]: conflicting magic protocol numbers"),
     cst_Protocol_version_header_negotiate_no_shared_version_numbers=
      caml_new_string
       ("[Protocol_version_header.negotiate]: no shared version numbers"),
     cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers$0=
      caml_new_string
       ("[Protocol_version_header.negotiate]: conflicting magic protocol numbers"),
     cst_No_magic_numbers_seen=caml_new_string("No magic numbers seen"),
     cst_Protocol_version_header_negotiate_multiple_magic_numbers_seen=
      caml_new_string
       ("[Protocol_version_header.negotiate]: multiple magic numbers seen."),
     cst_protocol_version_header$8=caml_new_string("protocol_version_header"),
     cst_src_protocol_version_header_ml=
      caml_new_string("src/protocol_version_header.ml"),
     cst$2=caml_new_string(""),
     cst_protocol_version_header$9=caml_new_string("protocol_version_header"),
     cst_Protocol_version_header=caml_new_string("Protocol_version_header"),
     cst_t$1=caml_new_string("t"),
     cst_src_protocol_version_header_ml_9_0=
      caml_new_string("src/protocol_version_header.ml:9:0"),
     cst_t$2=caml_new_string("t"),
     cst_protocol_version_header$10=caml_new_string("protocol_version_header"),
     Core_kernel=global_data.Core_kernel,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Char=global_data.Core_kernel__Char,
     Core_kernel_String=global_data.Core_kernel__String,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Inline_test_config=global_data.Inline_test_config,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Base_Exn=global_data.Base__Exn,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Bin_prot_Type_class=global_data.Bin_prot__Type_class,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Base_Or_error=global_data.Base__Or_error,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Protocol_version_header=[0];
    caml_register_global
     (85,Protocol_version_header,"Protocol_version_header__");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_protocol_version_header);
    caml_call1(Expect_test_collector[4][1],cst_src_known_protocol_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_protocol_version_header$0,cst);
    var
     compare=caml_int_compare,
     _m_=[0,caml_new_string("src/known_protocol.ml"),38,2],
     _l_=[0,caml_new_string("src/known_protocol.ml"),39,2],
     _k_=[0,caml_new_string("src/known_protocol.ml"),40,2],
     _j_=[0,caml_new_string("src/known_protocol.ml"),41,2],
     _h_=[0,caml_new_string("src/known_protocol.ml"),31,2],
     _g_=[0,caml_new_string("src/known_protocol.ml"),33,2],
     _a_=[0,caml_new_string("Krb")],
     _b_=[0,caml_new_string("Krb_test_mode")],
     _c_=[0,caml_new_string("Rpc")],
     _n_=[0,caml_new_string("max_len")],
     _o_=[0,caml_new_string("len")],
     _p_=[0,caml_new_string("context")],
     _C_=[0,caml_new_string("Unknown")],
     _A_=[0,caml_new_string("peer_protocol")],
     _B_=[0,caml_new_string("us_protocol")],
     _x_=[0,caml_new_string("protocol")],
     _y_=[0,caml_new_string("peer_versions")],
     _z_=[0,caml_new_string("us_versions")],
     _D_=[0,caml_new_string("peer_protocol")],
     _E_=[0,caml_new_string("us_protocol")],
     _F_=[0,caml_new_string("us_versions")],
     _v_=[0,caml_new_string("versions")],
     _w_=[0,caml_new_string("protocols")];
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _aR_=sexp[1];
        if(caml_string_notequal(_aR_,cst_Krb))
         {if(caml_string_notequal(_aR_,cst_Krb_test_mode))
           {if(caml_string_notequal(_aR_,cst_Rpc))
             if(caml_string_notequal(_aR_,cst_krb))
              if(caml_string_notequal(_aR_,cst_krb_test_mode))
               if(caml_string_notequal(_aR_,cst_rpc))
                var switch$0=1,switch$1=0,switch$2=0;
               else
                var switch$2=1;
              else
               var switch$1=1,switch$2=0;
             else
              var switch$0=0,switch$1=0,switch$2=0;
            else
             var switch$2=1;
            if(switch$2)return 2}
          else
           var switch$1=1;
          if(switch$1)return 1}
        else
         var switch$0=0;
        if(! switch$0)return 0}
      else
       {var _aS_=sexp[1];
        if(! _aS_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _aT_=_aS_[1];
        if(0 !== _aT_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var _aU_=_aT_[1];
        if(caml_string_notequal(_aU_,cst_Krb$0))
         {if(caml_string_notequal(_aU_,cst_Krb_test_mode$0))
           {if(caml_string_notequal(_aU_,cst_Rpc$0))
             if(caml_string_notequal(_aU_,cst_krb$0))
              if(caml_string_notequal(_aU_,cst_krb_test_mode$0))
               if(caml_string_notequal(_aU_,cst_rpc$0))
                var switch$3=1,switch$4=0,switch$5=0;
               else
                var switch$5=1;
              else
               var switch$4=1,switch$5=0;
             else
              var switch$3=0,switch$4=0,switch$5=0;
            else
             var switch$5=1;
            if(switch$5)
             return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
          else
           var switch$4=1;
          if(switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
        else
         var switch$3=0;
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc,sexp)}
    function sexp_of_t(param)
     {switch(param){case 0:return _a_;case 1:return _b_;default:return _c_}}
    function magic_word(param)
     {switch(param)
       {case 0:return cst_KRB2;case 1:return cst_KBT;default:return cst_RPC}}
    function gen_magic_number(word)
     {function _aP_(acc,c)
       {return (acc * 256 | 0) + caml_call1(Core_kernel_Char[4],c) | 0}
      var _aQ_=caml_call1(Core_kernel_String[46],word);
      return caml_call3(Core_kernel_List[9],_aQ_,0,_aP_)}
    function magic_number(t){return gen_magic_number(magic_word(t))}
    function _d_(p){return [0,magic_number(p),p]}
    var
     _e_=caml_call2(Core_kernel_List[69],all,_d_),
     by_magic_number=caml_call1(Core_kernel_Int[120][8],_e_);
    function _f_(param)
     {var
       magic_words=
        [0,retired_krb_word,caml_call2(Core_kernel_List[69],all,magic_word)],
       magic_numbers=
        caml_call2(Core_kernel_List[69],magic_words,gen_magic_number);
      function _aN_(n)
       {var _aO_=caml_call1(Core_kernel_Int[1],1073741823.);
        return caml_call2(Core_kernel[89],n,_aO_)}
      if(caml_call2(Core_kernel_List[13],magic_numbers,_aN_))
       {if
         (caml_call2(Core_kernel_List[107],Core_kernel_Int[107],magic_numbers))
         throw [0,Assert_failure,_g_];
        return 0}
      throw [0,Assert_failure,_h_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_validate_magic_words,
      0,
      cst_src_known_protocol_ml$0,
      27,
      0,
      449,
      _f_);
    function _i_(param)
     {var _aJ_=gen_magic_number(retired_krb_word);
      if(caml_call2(Core_kernel[90],_aJ_,4346443))
       {var _aK_=magic_number(0);
        if(caml_call2(Core_kernel[90],_aK_,843207243))
         {var _aL_=magic_number(1);
          if(caml_call2(Core_kernel[90],_aL_,5521995))
           {var _aM_=magic_number(2);
            if(caml_call2(Core_kernel[90],_aM_,4411474))return 0;
            throw [0,Assert_failure,_j_]}
          throw [0,Assert_failure,_k_]}
        throw [0,Assert_failure,_l_]}
      throw [0,Assert_failure,_m_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_magic_numbers,
      0,
      cst_src_known_protocol_ml$1,
      37,
      0,
      223,
      _i_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_protocol_version_header$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Protocol_version_header_Known_protocol=
      [0,compare,all,t_of_sexp,sexp_of_t,magic_number,by_magic_number];
    caml_register_global
     (97,
      Protocol_version_header_Known_protocol,
      "Protocol_version_header__Known_protocol");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_protocol_version_header$2);
    caml_call1(Expect_test_collector[4][1],cst_src_list_with_max_len_intf_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_protocol_version_header$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_protocol_version_header$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Protocol_version_header_List_with_max_len_intf=[0];
    caml_register_global
     (98,
      Protocol_version_header_List_with_max_len_intf,
      "Protocol_version_header__List_with_max_len_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_protocol_version_header$5);
    caml_call1(Expect_test_collector[4][1],cst_src_list_with_max_len_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_protocol_version_header$6,cst$1);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_protocol_version_header$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    function _q_(_ar_)
     {var
       _ai_=_ar_[1],
       _aj_=_ar_[2],
       _ak_=caml_call1(Bin_prot_Shape[3][1],cst_a),
       _al_=caml_call1(Bin_prot_Shape[4][1],cst_src_list_with_max_len_ml_7_14),
       _am_=caml_call2(Bin_prot_Shape[15],_al_,_ak_),
       _an_=caml_call1(Core_kernel[389],_am_),
       _ao_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$0),0],
       _ap_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),_ao_,_an_],0],
       _aq_=caml_call1(Bin_prot_Shape[4][1],cst_src_list_with_max_len_ml_7_2),
       group=caml_call2(Bin_prot_Shape[6],_aq_,_ap_);
      function bin_shape_t(a)
       {var _aI_=caml_call1(Bin_prot_Shape[2][1],cst_t$0);
        return caml_call1(caml_call2(Bin_prot_Shape[14],group,_aI_),[0,a,0])}
      function bin_size_t(size_of_a,v)
       {return caml_call2(Core_kernel[390],size_of_a,v)}
      function bin_write_t(write_a,buf,pos,v)
       {return caml_call3(caml_call1(Core_kernel[391],write_a),buf,pos,v)}
      function bin_writer_t(bin_writer_a)
       {function _aE_(v)
         {var _aF_=bin_writer_a[2];
          return function(_aG_,_aH_){return bin_write_t(_aF_,v,_aG_,_aH_)}}
        return [0,function(v){return bin_size_t(bin_writer_a[1],v)},_aE_]}
      var bin_read_t=Core_kernel_List[144];
      function bin_read_t$0(bin_read_el,buf,pos_ref)
       {try
         {var _aD_=caml_call4(Bin_prot_Read[40],_ai_,bin_read_el,buf,pos_ref);
          return _aD_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var _aC_=caml_call1(Core_kernel_Info[8],_aj_);
          return caml_call2(Base_Exn[7],exn,_aC_)}}
      function bin_reader_t(bin_reader_a)
       {var _ay_=caml_call1(bin_read_t,bin_reader_a[1]),_az_=bin_reader_a[1];
        return [0,
                function(_aA_,_aB_){return bin_read_t$0(_az_,_aA_,_aB_)},
                _ay_]}
      function bin_t(bin_a)
       {var _aw_=bin_reader_t(bin_a[3]),_ax_=bin_writer_t(bin_a[2]);
        return [0,bin_shape_t(bin_a[1]),_ax_,_aw_]}
      function of_list_exn(l)
       {var len=caml_call1(Core_kernel_List[6],l);
        if(caml_call2(Core_kernel[91],len,_ai_))
         {var
           _as_=[0,[1,[0,_n_,[0,caml_call1(Core_kernel[339],_ai_),0]]],0],
           _at_=[0,[1,[0,_o_,[0,caml_call1(Core_kernel[339],len),0]]],_as_],
           _au_=
            [0,[1,[0,_p_,[0,caml_call1(Core_kernel_Info[6],_aj_),0]]],_at_],
           _av_=
            [1,
             [0,caml_call1(Sexplib0_Sexp_conv[7],cst_List_is_too_large),_au_]];
          caml_call1(Core_kernel[241],_av_)}
        return l}
      var sexp_of_t=Core_kernel_List[4];
      function t_of_sexp(t_of_a,sexp)
       {var t=caml_call2(Core_kernel_List[3],t_of_a,sexp);
        return of_list_exn(t)}
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_read_t$0,
              bin_read_t,
              bin_writer_t,
              bin_reader_t,
              bin_t,
              t_of_sexp,
              sexp_of_t,
              of_list_exn]}
    var Protocol_version_header_List_with_max_len=[0,_q_];
    caml_register_global
     (104,
      Protocol_version_header_List_with_max_len,
      "Protocol_version_header__List_with_max_len");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_protocol_version_header$8);
    caml_call1(Expect_test_collector[4][1],cst_src_protocol_version_header_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_protocol_version_header$9,cst$2);
    var
     context=caml_call1(Core_kernel_Info[11],cst_Protocol_version_header),
     Bounded_list_in_case_someone_sends_garbage_on_the_wire=
      _q_([0,100,context]),
     _r_=
      caml_call1
       (Bounded_list_in_case_someone_sends_garbage_on_the_wire[1],
        Core_kernel[327]),
     _s_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$1),0,_r_],0],
     _t_=
      caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_version_header_ml_9_0),
     group=caml_call2(Bin_prot_Shape[6],_t_,_s_),
     _u_=caml_call1(Bin_prot_Shape[2][1],cst_t$2),
     bin_shape_t=caml_call1(caml_call2(Bin_prot_Shape[14],group,_u_),0);
    function bin_size_t(v)
     {return caml_call2
              (Bounded_list_in_case_someone_sends_garbage_on_the_wire[2],
               Core_kernel[328],
               v)}
    function bin_write_t(buf,pos,v)
     {return caml_call3
              (caml_call1
                (Bounded_list_in_case_someone_sends_garbage_on_the_wire[3],
                 Core_kernel[329]),
               buf,
               pos,
               v)}
    var bin_writer_t=[0,bin_size_t,bin_write_t];
    function bin_read_t(buf,pos_ref,vint)
     {return caml_call3
              (caml_call1
                (Bounded_list_in_case_someone_sends_garbage_on_the_wire[5],
                 Core_kernel[331]),
               buf,
               pos_ref,
               vint)}
    function bin_read_t$0(buf,pos_ref)
     {return caml_call2
              (caml_call1
                (Bounded_list_in_case_someone_sends_garbage_on_the_wire[4],
                 Core_kernel[331]),
               buf,
               pos_ref)}
    var
     bin_reader_t=[0,bin_read_t$0,bin_read_t],
     bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t];
    function t_of_sexp$0(t)
     {return caml_call2
              (Bounded_list_in_case_someone_sends_garbage_on_the_wire[9],
               Core_kernel[340],
               t)}
    function sexp_of_t$0(v)
     {return caml_call2
              (Bounded_list_in_case_someone_sends_garbage_on_the_wire[10],
               Core_kernel[339],
               v)}
    function create_exn(protocol,supported_versions)
     {var _ah_=[0,magic_number(protocol),supported_versions];
      return caml_call1
              (Bounded_list_in_case_someone_sends_garbage_on_the_wire[11],
               _ah_)}
    function get_protocol(t)
     {function _ad_(v)
       {var match=caml_call2(Core_kernel_Map[37],by_magic_number,v);
        if(match){var p=match[1];return [0,3506791,p]}
        return [0,4152137,v]}
      var
       match=caml_call2(Core_kernel_List[51],t,_ad_),
       versions=match[2],
       protocols=match[1];
      if(protocols)
       {if(protocols[2])
         {var
           _ae_=
            [0,
             [1,
              [0,
               _v_,
               [0,caml_call2(Core_kernel[400],Core_kernel[339],versions),0]]],
             0],
           _af_=
            [0,
             [1,
              [0,_w_,[0,caml_call2(Core_kernel[400],sexp_of_t,protocols),0]]],
             _ae_],
           _ag_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Protocol_version_header_negotiate_multiple_magic_numbers_seen),
              _af_]];
          return caml_call1(Core_kernel_Or_error[40],_ag_)}
        var p=protocols[1];
        return [0,[0,[0,p],caml_call1(Core_kernel_Int[121][57],versions)]]}
      return [0,[0,0,caml_call1(Core_kernel_Int[121][57],versions)]]}
    function negotiate(allow_legacy_peer,us,peer)
     {function _K_(param)
       {var us_versions=param[2],us_protocol=param[1];
        function _M_(param)
         {var peer_versions=param[2],peer_protocol=param[1];
          function _O_(us_protocol)
           {function _S_(peer_protocol)
             {var
               match=caml_int_compare(us_protocol,peer_protocol),
               _W_=0 === match?1:0;
              if(_W_)
               {var
                 _X_=caml_call2(Core_kernel_Set[15],us_versions,peer_versions),
                 match$0=caml_call1(Core_kernel_Set[57],_X_);
                if(match$0){var version=match$0[1];return [0,version]}
                var
                 _Y_=[0,[1,[0,_x_,[0,sexp_of_t(us_protocol),0]]],0],
                 _Z_=
                  [0,
                   [1,
                    [0,
                     _y_,
                     [0,caml_call1(Core_kernel_Int[121][74],peer_versions),0]]],
                   _Y_],
                 ___=
                  [0,
                   [1,
                    [0,
                     _z_,
                     [0,caml_call1(Core_kernel_Int[121][74],us_versions),0]]],
                   _Z_],
                 _$_=
                  [1,
                   [0,
                    caml_call1
                     (Sexplib0_Sexp_conv[7],
                      cst_Protocol_version_header_negotiate_no_shared_version_numbers),
                    ___]];
                return caml_call1(Core_kernel_Or_error[40],_$_)}
              var
               _aa_=[0,[1,[0,_A_,[0,sexp_of_t(peer_protocol),0]]],0],
               _ab_=[0,[1,[0,_B_,[0,sexp_of_t(us_protocol),0]]],_aa_],
               _ac_=
                [1,
                 [0,
                  caml_call1
                   (Sexplib0_Sexp_conv[7],
                    cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers),
                  _ab_]];
              return caml_call1(Core_kernel_Or_error[40],_ac_)}
            if(peer_protocol)
             var x=peer_protocol[1],_T_=caml_call1(Base_Or_error[24][1],x);
            else
             if(allow_legacy_peer)
              var _T_=caml_call1(Base_Or_error[24][1],us_protocol);
             else
              var
               _U_=
                [0,
                 [1,[0,_E_,[0,sexp_of_t(us_protocol),0]]],
                 [0,[1,[0,_D_,[0,_C_,0]]],0]],
               _V_=
                [1,
                 [0,
                  caml_call1
                   (Sexplib0_Sexp_conv[7],
                    cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers$0),
                  _U_]],
               _T_=caml_call1(Core_kernel_Or_error[40],_V_);
            return caml_call2(Base_Or_error[24][4][2],_T_,_S_)}
          if(us_protocol)
           var x=us_protocol[1],_P_=caml_call1(Base_Or_error[24][1],x);
          else
           var
            _Q_=
             [0,
              [1,
               [0,_F_,[0,caml_call1(Core_kernel_Int[121][74],us_versions),0]]],
              0],
            _R_=
             [1,
              [0,
               caml_call1(Sexplib0_Sexp_conv[7],cst_No_magic_numbers_seen),
               _Q_]],
            _P_=caml_call1(Core_kernel[221],_R_);
          return caml_call2(Base_Or_error[24][4][2],_P_,_O_)}
        var _N_=get_protocol(peer);
        return caml_call2(Base_Or_error[24][4][2],_N_,_M_)}
      var _L_=get_protocol(us);
      return caml_call2(Base_Or_error[24][4][2],_L_,_K_)}
    function matches_magic_prefix(t,protocol)
     {var magic_number$0=magic_number(protocol);
      return caml_call3
              (Core_kernel_List[5],t,magic_number$0,Core_kernel_Int[106])}
    function contains_magic_prefix(protocol)
     {var _H_=bin_t[3];
      function _I_(_J_){return matches_magic_prefix(_J_,protocol)}
      return caml_call2(Bin_prot_Type_class[155],_I_,_H_)}
    function f(t)
     {function _G_(protocol){return matches_magic_prefix(t,protocol)}
      return caml_call2(Core_kernel_List[15],all,_G_)}
    var any_magic_prefix=caml_call2(Bin_prot_Type_class[155],f,bin_t[3]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_protocol_version_header$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Protocol_version_header$0=
      [0,
       bin_size_t,
       bin_write_t,
       bin_read_t$0,
       bin_read_t,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       t_of_sexp$0,
       sexp_of_t$0,
       create_exn,
       negotiate,
       contains_magic_prefix,
       any_magic_prefix,
       [0,_q_]];
    caml_register_global
     (110,Protocol_version_header$0,"Protocol_version_header");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcm90b2NvbF92ZXJzaW9uX2hlYWRlci5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
