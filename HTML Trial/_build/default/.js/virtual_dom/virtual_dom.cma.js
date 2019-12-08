(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_src_dom_float_ml$0=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$1=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$2=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$3=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$4=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$5=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$6=caml_new_string("src/dom_float.ml"),
     cst_virtual_dom=caml_new_string("virtual_dom"),
     cst_src_dom_float_ml=caml_new_string("src/dom_float.ml"),
     cst=caml_new_string(""),
     cst_virtual_dom$0=caml_new_string("virtual_dom"),
     cst_src_dom_float_ml$7=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$8=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$9=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$10=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$11=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$12=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$13=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$14=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$15=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$16=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$17=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$18=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$19=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$20=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$21=caml_new_string("src/dom_float.ml"),
     cst_src_dom_float_ml$22=caml_new_string("src/dom_float.ml"),
     cst_73a2b20534ede23efe6432d58da7721e=
      caml_new_string("73a2b20534ede23efe6432d58da7721e"),
     cst_virtual_dom$1=caml_new_string("virtual_dom"),
     cst_virtual_dom$2=caml_new_string("virtual_dom"),
     cst_src_event_intf_ml=caml_new_string("src/event_intf.ml"),
     cst$0=caml_new_string(""),
     cst_virtual_dom$3=caml_new_string("virtual_dom"),
     cst_virtual_dom$4=caml_new_string("virtual_dom"),
     cst_handle_non_dom_event_exn_called_with_Stop_propagation_which_requires_a_dom_event=
      caml_new_string
       ("[handle_non_dom_event_exn] called with [Stop_propagation] which requires a dom event"),
     cst_handle_non_dom_event_exn_called_with_Prevent_default_which_requires_a_dom_event=
      caml_new_string
       ("[handle_non_dom_event_exn] called with [Prevent_default] which requires a dom event"),
     cst_Unrecognized_variant=caml_new_string("Unrecognized variant"),
     cst_Virtual_dom_Event_Define_Handler_C=
      caml_new_string("Virtual_dom__Event.Define(Handler).C"),
     cst_virtual_dom$5=caml_new_string("virtual_dom"),
     cst_src_event_ml=caml_new_string("src/event.ml"),
     cst$1=caml_new_string(""),
     cst_virtual_dom$6=caml_new_string("virtual_dom"),
     cst_Virtual_dom_Event_Ignore=caml_new_string("Virtual_dom__Event.Ignore"),
     cst_Virtual_dom_Event_Viewport_changed=
      caml_new_string("Virtual_dom__Event.Viewport_changed"),
     cst_Virtual_dom_Event_Stop_propagation=
      caml_new_string("Virtual_dom__Event.Stop_propagation"),
     cst_Virtual_dom_Event_Prevent_default=
      caml_new_string("Virtual_dom__Event.Prevent_default"),
     cst_Virtual_dom_Event_Many=caml_new_string("Virtual_dom__Event.Many"),
     cst_virtual_dom$7=caml_new_string("virtual_dom"),
     cst_placeholder$0=caml_new_string("placeholder"),
     cst_on=caml_new_string("on"),
     cst_tabindex=caml_new_string("tabindex"),
     cst_value$0=caml_new_string("value"),
     cst_type=caml_new_string("type"),
     cst_for=caml_new_string("for"),
     cst_autofocus=caml_new_string("autofocus"),
     cst_placeholder=caml_new_string("placeholder"),
     cst_href=caml_new_string("href"),
     cst_name=caml_new_string("name"),
     cst_id=caml_new_string("id"),
     cst_class=caml_new_string("class"),
     cst_invalid_classnames=caml_new_string("invalid classnames"),
     cst_invalid_classname=caml_new_string("invalid classname"),
     cst_foo_bar$0=caml_new_string("foo bar"),
     cst$3=caml_new_string(""),
     cst_foo_bar=caml_new_string("foo-bar"),
     cst_style=caml_new_string("style"),
     cst_value=caml_new_string("value"),
     cst_virtual_dom$8=caml_new_string("virtual_dom"),
     cst_src_attr_ml=caml_new_string("src/attr.ml"),
     cst$2=caml_new_string(""),
     cst_virtual_dom$9=caml_new_string("virtual_dom"),
     cst_src_attr_ml$0=caml_new_string("src/attr.ml"),
     cst_valid=caml_new_string(": valid"),
     cst_src_attr_ml$1=caml_new_string("src/attr.ml"),
     cst_invalid_empty=caml_new_string(": invalid-empty"),
     cst_src_attr_ml$2=caml_new_string("src/attr.ml"),
     cst_invalid_space=caml_new_string(": invalid-space"),
     cst$4=caml_new_string(""),
     cst_checked=caml_new_string("checked"),
     cst$5=caml_new_string(""),
     cst_selected=caml_new_string("selected"),
     cst$6=caml_new_string(""),
     cst_hidden=caml_new_string("hidden"),
     cst$7=caml_new_string(""),
     cst_disabled=caml_new_string("disabled"),
     cst_focus=caml_new_string("focus"),
     cst_blur=caml_new_string("blur"),
     cst_click=caml_new_string("click"),
     cst_contextmenu=caml_new_string("contextmenu"),
     cst_dblclick=caml_new_string("dblclick"),
     cst_mousemove=caml_new_string("mousemove"),
     cst_mouseup=caml_new_string("mouseup"),
     cst_mousedown=caml_new_string("mousedown"),
     cst_mouseenter=caml_new_string("mouseenter"),
     cst_mouseleave=caml_new_string("mouseleave"),
     cst_mouseover=caml_new_string("mouseover"),
     cst_mouseout=caml_new_string("mouseout"),
     cst_keyup=caml_new_string("keyup"),
     cst_keypress=caml_new_string("keypress"),
     cst_keydown=caml_new_string("keydown"),
     cst_change=caml_new_string("change"),
     cst_input=caml_new_string("input"),
     cst_virtual_dom$10=caml_new_string("virtual_dom"),
     cst_virtual_dom$11=caml_new_string("virtual_dom"),
     cst_src_attr_intf_ml=caml_new_string("src/attr_intf.ml"),
     cst$8=caml_new_string(""),
     cst_virtual_dom$12=caml_new_string("virtual_dom"),
     cst_virtual_dom$13=caml_new_string("virtual_dom"),
     cst_virtual_dom$14=caml_new_string("virtual_dom"),
     cst_src_attrs_ml=caml_new_string("src/attrs.ml"),
     cst$9=caml_new_string(""),
     cst_virtual_dom$15=caml_new_string("virtual_dom"),
     cst_virtual_dom$16=caml_new_string("virtual_dom"),
     cst$11=caml_new_string(""),
     cst_virtual_dom$17=caml_new_string("virtual_dom"),
     cst_src_node_ml=caml_new_string("src/node.ml"),
     cst$10=caml_new_string(""),
     cst_virtual_dom$18=caml_new_string("virtual_dom"),
     cst_a=caml_new_string("a"),
     cst_body=caml_new_string("body"),
     cst_button=caml_new_string("button"),
     cst_code=caml_new_string("code"),
     cst_div=caml_new_string("div"),
     cst_footer=caml_new_string("footer"),
     cst_h1=caml_new_string("h1"),
     cst_h2=caml_new_string("h2"),
     cst_h3=caml_new_string("h3"),
     cst_h4=caml_new_string("h4"),
     cst_h5=caml_new_string("h5"),
     cst_h6=caml_new_string("h6"),
     cst_header=caml_new_string("header"),
     cst_html=caml_new_string("html"),
     cst_input$0=caml_new_string("input"),
     cst_textarea=caml_new_string("textarea"),
     cst_select=caml_new_string("select"),
     cst_option=caml_new_string("option"),
     cst_label=caml_new_string("label"),
     cst_li=caml_new_string("li"),
     cst_p=caml_new_string("p"),
     cst_pre=caml_new_string("pre"),
     cst_section=caml_new_string("section"),
     cst_span=caml_new_string("span"),
     cst_strong=caml_new_string("strong"),
     cst_table=caml_new_string("table"),
     cst_tbody=caml_new_string("tbody"),
     cst_td=caml_new_string("td"),
     cst_th=caml_new_string("th"),
     cst_thead=caml_new_string("thead"),
     cst_tr=caml_new_string("tr"),
     cst_ul=caml_new_string("ul"),
     cst_ol=caml_new_string("ol"),
     cst_br=caml_new_string("br"),
     cst_hr=caml_new_string("hr"),
     cst_virtual_dom$19=caml_new_string("virtual_dom"),
     cst_virtual_dom$20=caml_new_string("virtual_dom"),
     cst_src_tyxml_f_ml=caml_new_string("src/tyxml_f.ml"),
     cst$12=caml_new_string(""),
     cst_virtual_dom$21=caml_new_string("virtual_dom"),
     cst_virtual_dom$22=caml_new_string("virtual_dom"),
     cst_virtual_dom$23=caml_new_string("virtual_dom"),
     cst_src_vdom_ml=caml_new_string("src/vdom.ml"),
     cst$13=caml_new_string(""),
     cst_virtual_dom$24=caml_new_string("virtual_dom"),
     cst_virtual_dom$25=caml_new_string("virtual_dom"),
     cst$18=caml_new_string(";"),
     cst$19=caml_new_string("&"),
     cst$17=caml_new_string(" "),
     cst$16=caml_new_string(","),
     cst$15=caml_new_string(" "),
     cst_checked$0=caml_new_string("checked"),
     cst_selected$0=caml_new_string("selected"),
     cst_value$1=caml_new_string("value"),
     cst_virtual_dom$26=caml_new_string("virtual_dom"),
     cst_src_tyxml_ml=caml_new_string("src/tyxml.ml"),
     cst$14=caml_new_string(""),
     cst_virtual_dom$27=caml_new_string("virtual_dom"),
     cst_virtual_dom$28=caml_new_string("virtual_dom"),
     cst_virtual_dom$29=caml_new_string("virtual_dom"),
     cst_src_virtual_dom_ml=caml_new_string("src/virtual_dom.ml"),
     cst$20=caml_new_string(""),
     cst_virtual_dom$30=caml_new_string("virtual_dom"),
     cst_virtual_dom$31=caml_new_string("virtual_dom"),
     Core_kernel=global_data.Core_kernel,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Expect_test_config=global_data.Expect_test_config,
     Inline_test_config=global_data.Inline_test_config,
     Base_List=global_data.Base__List,
     Base=global_data.Base,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Js_of_ocaml_Dom=global_data.Js_of_ocaml__Dom,
     Base_Hashtbl=global_data.Base__Hashtbl,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Int=global_data.Base__Int,
     Stdlib_obj=global_data.Stdlib__obj,
     Base_Fn=global_data.Base__Fn,
     Base_Option=global_data.Base__Option,
     Base_Type_equal=global_data.Base__Type_equal,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Base_Bool=global_data.Base__Bool,
     Base_Set=global_data.Base__Set,
     Base_String=global_data.Base__String,
     Base_Char=global_data.Base__Char,
     Css_gen=global_data.Css_gen,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Array=global_data.Base__Array,
     Stdlib=global_data.Stdlib,
     Assert_failure=global_data.Assert_failure,
     Stdlib_string=global_data.Stdlib__string,
     Xml_wrap=global_data.Xml_wrap,
     Svg_f=global_data.Svg_f,
     Html_f=global_data.Html_f,
     Virtual_dom=[0];
    caml_register_global(236,Virtual_dom,"Virtual_dom__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom);
    caml_call1(Expect_test_collector[4][1],cst_src_dom_float_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$0,cst);
    var
     _b_=[0,[2,0,0],caml_new_string("%s")],
     _d_=[1,caml_new_string(" 1 ")],
     _e_=[0,caml_new_string("")],
     _h_=[1,caml_new_string(" NaN ")],
     _i_=[0,caml_new_string("")],
     _l_=[1,caml_new_string(" Infinity ")],
     _m_=[0,caml_new_string("")],
     _p_=[1,caml_new_string(" -Infinity ")],
     _q_=[0,caml_new_string("")],
     _t_=[1,caml_new_string(" 1e-8 ")],
     _u_=[0,caml_new_string("")],
     _x_=[1,caml_new_string(" -1 ")],
     _y_=[0,caml_new_string("")],
     _B_=[1,caml_new_string(" 1.0000001 ")],
     _C_=[0,caml_new_string("")],
     _G_=[0,8],
     _M_=[0,caml_new_string(" ")],
     _L_=[0,caml_new_string("classnames")],
     _K_=[0,caml_new_string("classname")],
     _T_=[0,caml_new_string("src/tyxml.ml"),69,19],
     _S_=[0,caml_new_string("src/tyxml.ml"),68,17];
    function to_js_string(value){return value.toString()}
    function to_string(value){return caml_js_to_string(value.toString())}
    var
     Expect_test_collector$0=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _a_(param)
     {function print(f)
       {var _c4_=to_string(f);return caml_call2(Core_kernel[238],_b_,_c4_)}
      print(1.);
      var
       _cX_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$0),
         10,
         241,
         245,
         251];
      caml_call1(Expect_test_collector$0[1],_cX_);
      print(Core_kernel_Float[12]);
      var
       _cY_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$1),
         12,
         281,
         285,
         291];
      caml_call1(Expect_test_collector$0[1],_cY_);
      print(Core_kernel_Float[13]);
      var
       _cZ_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$2),
         14,
         328,
         332,
         338];
      caml_call1(Expect_test_collector$0[1],_cZ_);
      print(Core_kernel_Float[14]);
      var
       _c0_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$3),
         16,
         384,
         388,
         394];
      caml_call1(Expect_test_collector$0[1],_c0_);
      print(1e-08);
      var
       _c1_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$4),
         18,
         433,
         437,
         443];
      caml_call1(Expect_test_collector$0[1],_c1_);
      print(-1.);
      var
       _c2_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$5),
         20,
         472,
         476,
         482];
      caml_call1(Expect_test_collector$0[1],_c2_);
      print(1.0000001);
      var
       _c3_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$6),
         22,
         513,
         517,
         523];
      return caml_call1(Expect_test_collector$0[1],_c3_)}
    var
     _c_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$7),
       10,
       241,
       252,
       259],
     _f_=
      [0,
       [0,
        _e_,
        _d_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$8),
         10,
         241,
         245,
         251],
        _c_],
       0],
     _g_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$9),
       12,
       281,
       292,
       301],
     _j_=
      [0,
       [0,
        _i_,
        _h_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$10),
         12,
         281,
         285,
         291],
        _g_],
       _f_],
     _k_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$11),
       14,
       328,
       339,
       353],
     _n_=
      [0,
       [0,
        _m_,
        _l_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$12),
         14,
         328,
         332,
         338],
        _k_],
       _j_],
     _o_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$13),
       16,
       384,
       395,
       410],
     _r_=
      [0,
       [0,
        _q_,
        _p_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$14),
         16,
         384,
         388,
         394],
        _o_],
       _n_],
     _s_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$15),
       18,
       433,
       444,
       454],
     _v_=
      [0,
       [0,
        _u_,
        _t_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$16),
         18,
         433,
         437,
         443],
        _s_],
       _r_],
     _w_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$17),
       20,
       472,
       483,
       491],
     _z_=
      [0,
       [0,
        _y_,
        _x_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$18),
         20,
         472,
         476,
         482],
        _w_],
       _v_],
     _A_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$19),
       22,
       513,
       524,
       539],
     _D_=
      [0,
       [0,
        _C_,
        _B_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$20),
         22,
         513,
         517,
         523],
        _A_],
       _z_],
     _E_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$22),
       6,
       138,
       138,
       540],
     _F_=
      caml_call1
       (Expect_test_common_File[4][3],cst_73a2b20534ede23efe6432d58da7721e);
    caml_call9
     (Expect_test_collector$0[3],
      _F_,
      _E_,
      cst_src_dom_float_ml$21,
      0,
      0,
      _D_,
      0,
      Inline_test_config,
      _a_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Dom_float=[0,to_js_string,to_string];
    caml_register_global(245,Virtual_dom_Dom_float,"Virtual_dom__Dom_float");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$2);
    caml_call1(Expect_test_collector[4][1],cst_src_event_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Event_intf=[0];
    caml_register_global(246,Virtual_dom_Event_intf,"Virtual_dom__Event_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$5);
    caml_call1(Expect_test_collector[4][1],cst_src_event_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$6,cst$1);
    var
     Ignore=[248,cst_Virtual_dom_Event_Ignore,caml_fresh_oo_id(0)],
     Viewport_changed=
      [248,cst_Virtual_dom_Event_Viewport_changed,caml_fresh_oo_id(0)],
     Stop_propagation=
      [248,cst_Virtual_dom_Event_Stop_propagation,caml_fresh_oo_id(0)],
     Prevent_default=
      [248,cst_Virtual_dom_Event_Prevent_default,caml_fresh_oo_id(0)],
     Many=[248,cst_Virtual_dom_Event_Many,caml_fresh_oo_id(0)],
     handlers=
      caml_call3
       (Base_Hashtbl[4],0,_G_,[0,Base_Int[18],Base_Int[8],Base_Int[6]]),
     visibility_handlers=[0,0],
     id=Stdlib_obj[24],
     of_val=Stdlib_obj[22];
    function Define(Handler)
     {var
       C=[248,cst_Virtual_dom_Event_Define_Handler_C,caml_fresh_oo_id(0)],
       key=caml_call1(id,C);
      function _cV_(inp)
       {if(inp[1] === C){var value=inp[2];return caml_call1(Handler[2],value)}
        var _cW_=caml_call1(Sexplib0_Sexp_conv[7],cst_Unrecognized_variant);
        return caml_call1(Base[207],_cW_)}
      caml_call3(Base_Hashtbl[36],handlers,key,_cV_);
      function inject(v){return [0,C,v]}
      return [0,C,inject]}
    function Define_visibility(VH)
     {visibility_handlers[1] = [0,VH[1],visibility_handlers[1]];return [0]}
    function handle_registered_event(t)
     {var _cU_=caml_call1(id,caml_call1(of_val,t));
      return caml_call3(Base_Hashtbl[53],handlers,_cU_,t)}
    function handle(evt)
     {function handle(t)
       {if(t === Ignore)return 0;
        if(t[1] === Many){var l=t[2];return caml_call2(Base_List[8],l,handle)}
        if(t === Viewport_changed)
         {var _cT_=function(f){return caml_call1(f,0)};
          return caml_call2(Base_List[8],visibility_handlers[1],_cT_)}
        return t === Stop_propagation
                ?caml_call1(Js_of_ocaml_Dom_html[116],evt)
                :t === Prevent_default
                  ?caml_call1(Js_of_ocaml_Dom[18],evt)
                  :handle_registered_event(t)}
      return handle}
    function handle_non_dom_event_exn(t)
     {if(t === Ignore)return 0;
      if(t[1] === Many)
       {var l=t[2];return caml_call2(Base_List[8],l,handle_non_dom_event_exn)}
      if(t === Viewport_changed)
       {var _cS_=function(f){return caml_call1(f,0)};
        return caml_call2(Base_List[8],visibility_handlers[1],_cS_)}
      return t === Stop_propagation
              ?caml_call1
                (Base[205],
                 cst_handle_non_dom_event_exn_called_with_Stop_propagation_which_requires_a_dom_event)
              :t === Prevent_default
                ?caml_call1
                  (Base[205],
                   cst_handle_non_dom_event_exn_called_with_Prevent_default_which_requires_a_dom_event)
                :handle_registered_event(t)}
    var Expert=[0,handle,handle_non_dom_event_exn];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Event=
      [0,
       Ignore,
       Viewport_changed,
       Stop_propagation,
       Prevent_default,
       Many,
       Define,
       Define_visibility,
       Expert];
    caml_register_global(255,Event,"Virtual_dom__Event");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$8);
    caml_call1(Expect_test_collector[4][1],cst_src_attr_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$9,cst$2);
    var
     generic_hook=
      [246,function(_cR_){return Js_of_ocaml_Js[50][1].GenericHook}];
    function create(init,update,destroy,id)
     {var
       init$0=caml_js_wrap_callback(init),
       _cN_=caml_call2(Base_Option[29],update,caml_js_wrap_callback),
       update$0=caml_call1(Js_of_ocaml_Js[5][9],_cN_);
      function _cO_(param,_cQ_){return 0}
      var
       destroy$0=
        caml_js_wrap_callback(caml_call2(Base_Option[40],destroy,_cO_)),
       _cP_=runtime.caml_obj_tag(generic_hook),
       generic_hook$0=
        250 === _cP_
         ?generic_hook[1]
         :246 === _cP_
           ?caml_call1(CamlinternalLazy[2],generic_hook)
           :generic_hook;
      return generic_hook$0(init$0,update$0,destroy$0,id)}
    function create$0(name,value){return [1,name,value.toString()]}
    function to_style(param)
     {if(0 === param[0]){var s=param[1];return [0,s]}return 0}
    function style(css){return [0,css]}
    function valid_class_name(s)
     {var
       _cM_=caml_call1(Base_String[4],s),
       invalid=_cM_ || caml_call2(Base_String[9],s,Base_Char[42]);
      return 1 - invalid}
    function _H_(param){return valid_class_name(cst_foo_bar)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_valid,
      0,
      cst_src_attr_ml$0,
      136,
      0,
      45,
      _H_);
    function _I_(param){return 1 - valid_class_name(cst$3)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_invalid_empty,
      0,
      cst_src_attr_ml$1,
      137,
      0,
      52,
      _I_);
    function _J_(param){return 1 - valid_class_name(cst_foo_bar$0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_invalid_space,
      0,
      cst_src_attr_ml$2,
      138,
      0,
      59,
      _J_);
    function class$0(classname)
     {if(1 - valid_class_name(classname))
       {var
         _cK_=[0,[1,[0,_K_,[0,caml_call1(Base[153],classname),0]]],0],
         _cL_=
          [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_invalid_classname),_cK_]];
        caml_call1(Base[207],_cL_)}
      return [1,caml_call2(Base_Set[6],[0,Base_String[38]],classname)]}
    function classes(classes){return [1,classes]}
    function classes$0(classnames)
     {if(1 - caml_call2(Base_List[13],classnames,valid_class_name))
       {var
         _cI_=
          [0,[1,[0,_L_,[0,caml_call2(Base[132],Base[153],classnames),0]]],0],
         _cJ_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_invalid_classnames),_cI_]];
        caml_call1(Base[207],_cJ_)}
      return [1,caml_call2(Base_Set[31],[0,Base_String[38]],classnames)]}
    function to_class(param)
     {if(1 === param[0]){var cs=param[1];return [0,cs]}return 0}
    function create$1(name,value){return [2,create$0(name,value)]}
    function create_float(name,value){return [2,[1,name,value.toString()]]}
    function property(name,value){return [2,[0,name,value]]}
    function string_property(name,value){return [2,[0,name,value.toString()]]}
    function bool_property(name,value){return [2,[0,name,! ! value]]}
    function id$0(s){return create$1(cst_id,s)}
    function name(s){return create$1(cst_name,s)}
    function href(r){return create$1(cst_href,r)}
    var
     checked=create$1(cst_checked,cst$4),
     selected=create$1(cst_selected,cst$5),
     hidden=create$1(cst_hidden,cst$6),
     disabled=create$1(cst_disabled,cst$7);
    function placeholder(x){return create$1(cst_placeholder,x)}
    function autofocus(b)
     {return create$1(cst_autofocus,caml_call1(Base_Bool[7],b))}
    function for$0(x){return create$1(cst_for,x)}
    function type(x){return create$1(cst_type,x)}
    function value(x){return create$1(cst_value$0,x)}
    function tabindex(x)
     {return create$1(cst_tabindex,caml_call1(Base_Int[10],x))}
    function on(event,convert_to_vdom_event)
     {function f(e)
       {var _cH_=caml_call1(convert_to_vdom_event,e);
        caml_call2(Event[8][1],e,_cH_);
        return Js_of_ocaml_Js[7]}
      var _cG_=caml_call1(Js_of_ocaml_Dom[10],f);
      return property(caml_call2(Base[202],cst_on,event),_cG_)}
    function on_focus(_cF_){return on(cst_focus,_cF_)}
    function on_blur(_cE_){return on(cst_blur,_cE_)}
    function on_click(_cD_){return on(cst_click,_cD_)}
    function on_contextmenu(_cC_){return on(cst_contextmenu,_cC_)}
    function on_double_click(_cB_){return on(cst_dblclick,_cB_)}
    function on_mousemove(_cA_){return on(cst_mousemove,_cA_)}
    function on_mouseup(_cz_){return on(cst_mouseup,_cz_)}
    function on_mousedown(_cy_){return on(cst_mousedown,_cy_)}
    function on_mouseenter(_cx_){return on(cst_mouseenter,_cx_)}
    function on_mouseleave(_cw_){return on(cst_mouseleave,_cw_)}
    function on_mouseover(_cv_){return on(cst_mouseover,_cv_)}
    function on_mouseout(_cu_){return on(cst_mouseout,_cu_)}
    function on_keyup(_ct_){return on(cst_keyup,_ct_)}
    function on_keypress(_cs_){return on(cst_keypress,_cs_)}
    function on_keydown(_cr_){return on(cst_keydown,_cr_)}
    function const_ignore(param){return Event[1]}
    function run_coercion(coercion,target,prev)
     {if(prev)return prev;
      var _cq_=caml_call1(coercion,target);
      return caml_call1(Js_of_ocaml_Js[5][10],_cq_)}
    function on_input_event(event,handler)
     {return on
              (event,
               function(ev)
                {function _ck_(target)
                  {function _co_(target)
                    {var text=caml_js_to_string(target.value);
                     return caml_call2(handler,ev,text)}
                   var
                    _cp_=Event[1],
                    _cl_=run_coercion(Js_of_ocaml_Dom_html[117][33],target,0),
                    _cm_=run_coercion(Js_of_ocaml_Dom_html[117][50],target,_cl_),
                    _cn_=run_coercion(Js_of_ocaml_Dom_html[117][55],target,_cm_);
                   return caml_call3(Base_Option[37],_cn_,_cp_,_co_)}
                 return caml_call3
                         (Js_of_ocaml_Js[5][7],ev.target,const_ignore,_ck_)})}
    function on_change(_cj_){return on_input_event(cst_change,_cj_)}
    function on_input(_ci_){return on_input_event(cst_input,_ci_)}
    function to_raw(param)
     {switch(param[0])
       {case 0:
         var
          css=param[1],
          props=caml_call1(Css_gen[30],css),
          obj={},
          _cg_=
           function(param)
            {var v=param[2],k=param[1];
             return obj[k.toString()] = v.toString()};
         caml_call2(Base_List[8],props,_cg_);
         return [0,cst_style,obj];
        case 1:
         var classes=param[1],_ch_=caml_call1(Base_Set[33],classes);
         return create$0(cst_class,caml_call2(Base_String[48],_M_,_ch_));
        default:var r=param[1];return r}}
    function list_to_obj(l)
     {var attrs=caml_call2(Base_List[72],l,to_raw),attrs_obj={};
      function _ce_(param)
       {switch(param[0])
         {case 0:
           var _cf_=param[1];
           if(caml_string_notequal(_cf_,cst_value))
            {var value$0=param[2];return attrs_obj[_cf_.toString()] = value$0}
           var
            value$1=param[2],
            value=Js_of_ocaml_Js[50][1].SoftSetHook(value$1);
           return attrs_obj.value = value;
          case 1:
           var value$2=param[2],name=param[1];
           if(1 - caml_call1(Js_of_ocaml_Js[6][5],attrs_obj.attributes))
            attrs_obj.attributes = {};
           return attrs_obj.attributes[name.toString()] = value$2;
          default:
           var hook=param[2],name$0=param[1];
           return attrs_obj[name$0.toString()] = hook}}
      caml_call2(Base_List[8],attrs,_ce_);
      return attrs_obj}
    function create_basic_hook(name,hook,unhook,param)
     {var
       _cc_=caml_call1(Base_Fn[1],0),
       hook$0=caml_call2(Base_Option[40],hook,_cc_);
      function _cd_(f,param){return f}
      var
       unhook$0=caml_call2(Base_Option[29],unhook,_cd_),
       id=caml_call2(Base_Type_equal[12][4],cst_placeholder$0,Base[163]);
      return [2,[2,name,create(hook$0,0,unhook$0,id)]]}
    function create_stateful_hook(name,hook,unhook,id)
     {return [2,[2,name,create(hook,0,[0,unhook],id)]]}
    function create_persistent_hook(name,init,update,destroy,id)
     {return [2,[2,name,create(init,[0,update],[0,destroy],id)]]}
    var
     Expert$0=
      [0,create_basic_hook,create_stateful_hook,create_persistent_hook];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Virtual_dom_Attr=
      [0,
       create$1,
       create_float,
       string_property,
       bool_property,
       property,
       on,
       autofocus,
       checked,
       class$0,
       to_class,
       classes$0,
       classes,
       disabled,
       for$0,
       href,
       id$0,
       name,
       placeholder,
       selected,
       hidden,
       style,
       to_style,
       tabindex,
       type,
       value,
       on_focus,
       on_blur,
       on_input,
       on_change,
       on_click,
       on_contextmenu,
       on_double_click,
       on_mousemove,
       on_mouseup,
       on_mousedown,
       on_mouseenter,
       on_mouseleave,
       on_mouseover,
       on_mouseout,
       on_keyup,
       on_keypress,
       on_keydown,
       Expert$0,
       list_to_obj];
    caml_register_global(266,Virtual_dom_Attr,"Virtual_dom__Attr");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$11);
    caml_call1(Expect_test_collector[4][1],cst_src_attr_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$12,cst$8);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Attr_intf=[0];
    caml_register_global(267,Virtual_dom_Attr_intf,"Virtual_dom__Attr_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$14);
    caml_call1(Expect_test_collector[4][1],cst_src_attrs_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$15,cst$9);
    function make_map(extract,combine,is_empty,make_attr,t,f)
     {function _cb_(a)
       {var match=caml_call1(extract,a);
        if(match){var c=match[1];return [0,3506791,c]}
        return [0,4152137,a]}
      var
       match=caml_call2(Base_List[54],t,_cb_),
       other=match[2],
       specials=match[1],
       cl=caml_call1(f,caml_call1(combine,specials));
      return caml_call1(is_empty,cl)?other:[0,caml_call1(make_attr,cl),other]}
    var _N_=Base_Set[8],_O_=caml_call1(Base_Set[13],[0,Base_String[38]]);
    function map_class(_b$_,_ca_)
     {return make_map(to_class,_O_,_N_,classes,_b$_,_ca_)}
    function add_class(t,c)
     {return map_class(t,function(cs){return caml_call2(Base_Set[10],cs,c)})}
    var _P_=Css_gen[20];
    function _Q_(x_002)
     {var match=caml_call2(Css_gen[10],_P_,x_002);return 0 === match?1:0}
    var _R_=Css_gen[29];
    function map_style(_b9_,_b__)
     {return make_map(to_style,_R_,_Q_,style,_b9_,_b__)}
    function add_style(t,s)
     {return map_style(t,function(ss){return caml_call2(Css_gen[27],ss,s)})}
    function merge_classes_and_styles(t)
     {function _b6_(_b8_){return _b8_}
      return map_class(map_style(t,function(_b7_){return _b7_}),_b6_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Virtual_dom_Attrs=
      [0,merge_classes_and_styles,map_style,add_style,map_class,add_class];
    caml_register_global(268,Virtual_dom_Attrs,"Virtual_dom__Attrs");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$17);
    caml_call1(Expect_test_collector[4][1],cst_src_node_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$18,cst$10);
    var virtual_dom=Js_of_ocaml_Js[50][1].VirtualDom;
    function tag(t){return t[1]}
    function attrs(t){return t[3]}
    function key(t){return t[2]}
    function with_key(t,key){return [0,t[1],[0,key],t[3],t[4],t[5]]}
    function map_attrs(init,f)
     {var _b3_=init[5],_b4_=init[4],_b5_=caml_call1(f,init[3]);
      return [0,init[1],init[2],_b5_,_b4_,_b3_]}
    function add_class$0(t,c)
     {return map_attrs(t,function(a){return add_class(a,c)})}
    function add_style$0(t,s)
     {return map_attrs(t,function(a){return add_style(a,s)})}
    function string_to_js_text(s)
     {var vtext=virtual_dom.VText;return new vtext(s.toString())}
    function to_js(param)
     {if(typeof param === "number")
       return string_to_js_text(cst$11);
      else
       switch(param[0])
        {case 0:var s=param[1];return string_to_js_text(s);
         case 1:
          var
           _bM_=param[1],
           _bN_=_bM_[4],
           _bO_=_bM_[3],
           _bP_=_bM_[2],
           _bQ_=_bM_[1];
          if(4153924 <= _bM_[5])
           {var vnode=virtual_dom.svg;
            if(_bP_)
             {var
               key=_bP_[1],
               _bR_=caml_call1(Js_of_ocaml_Js[6][2],key.toString()),
               _bS_=caml_js_from_array(caml_call1(Base_Array[37],_bN_)),
               _bT_=list_to_obj(_bO_);
              return new vnode(_bQ_.toString(),_bT_,_bS_,_bR_)}
            var
             _bU_=Js_of_ocaml_Js[6][1],
             _bV_=caml_js_from_array(caml_call1(Base_Array[37],_bN_)),
             _bW_=list_to_obj(_bO_);
            return new vnode(_bQ_.toString(),_bW_,_bV_,_bU_)}
          var vnode$0=virtual_dom.VNode;
          if(_bP_)
           {var
             key$0=_bP_[1],
             _bX_=caml_call1(Js_of_ocaml_Js[6][2],key$0.toString()),
             _bY_=caml_js_from_array(caml_call1(Base_Array[37],_bN_)),
             _bZ_=list_to_obj(_bO_);
            return new vnode$0(_bQ_.toString(),_bZ_,_bY_,_bX_)}
          var
           _b0_=Js_of_ocaml_Js[6][1],
           _b1_=caml_js_from_array(caml_call1(Base_Array[37],_bN_)),
           _b2_=list_to_obj(_bO_);
          return new vnode$0(_bQ_.toString(),_b2_,_b1_,_b0_);
         default:var w=param[1];return w}}
    function element(kind,tag,key,attrs,children)
     {function _bL_(other)
       {return typeof other === "number"?0:[0,to_js(other)]}
      var children$0=caml_call2(Base_List[119],children,_bL_);
      return [0,tag,key,attrs,children$0,kind]}
    function text(s){return [0,s]}
    function widget(destroy$0,update$0,id,init,param)
     {if(destroy$0)
       var sth=destroy$0[1],destroy=sth;
      else
       var destroy=function(param,_bK_){return 0};
      if(update$0)
       var sth$0=update$0[1],update=sth$0;
      else
       var update=function(s,elt){return [0,s,elt]};
      var obj={};
      obj.type = "Widget";
      obj.name = 0;
      obj.id = id;
      obj.init
      =
      caml_js_wrap_callback
       (function(param)
         {var match=caml_call1(init,0),dom_node=match[2],s0=match[1];
          obj.state = s0;
          return dom_node});
      obj.update
      =
      caml_js_wrap_callback
       (function(prev,dom_node)
         {caml_call2(Base_Type_equal[12][11],prev.id,id);
          var
           match=caml_call2(update,prev.state,dom_node),
           dom_node$0=match[2],
           state=match[1];
          obj.state = state;
          return dom_node$0});
      obj.destroy
      =
      caml_js_wrap_callback
       (function(dom_node){return caml_call2(destroy,obj.state,dom_node)});
      return [2,obj]}
    function create$2(tag,key,attrs,children)
     {return [1,element(-847254184,tag,key,attrs,children)]}
    function create_childless(tag,key,attrs){return create$2(tag,key,attrs,0)}
    function create_svg(tag,key,attrs,children)
     {return [1,element(4153924,tag,key,attrs,children)]}
    var none=0;
    function to_dom(t){return virtual_dom.createElement(to_js(t))}
    function a(_bH_,_bI_,_bJ_){return create$2(cst_a,_bH_,_bI_,_bJ_)}
    function body(_bE_,_bF_,_bG_){return create$2(cst_body,_bE_,_bF_,_bG_)}
    function button(_bB_,_bC_,_bD_)
     {return create$2(cst_button,_bB_,_bC_,_bD_)}
    function code(_by_,_bz_,_bA_){return create$2(cst_code,_by_,_bz_,_bA_)}
    function div(_bv_,_bw_,_bx_){return create$2(cst_div,_bv_,_bw_,_bx_)}
    function footer(_bs_,_bt_,_bu_)
     {return create$2(cst_footer,_bs_,_bt_,_bu_)}
    function h1(_bp_,_bq_,_br_){return create$2(cst_h1,_bp_,_bq_,_br_)}
    function h2(_bm_,_bn_,_bo_){return create$2(cst_h2,_bm_,_bn_,_bo_)}
    function h3(_bj_,_bk_,_bl_){return create$2(cst_h3,_bj_,_bk_,_bl_)}
    function h4(_bg_,_bh_,_bi_){return create$2(cst_h4,_bg_,_bh_,_bi_)}
    function h5(_bd_,_be_,_bf_){return create$2(cst_h5,_bd_,_be_,_bf_)}
    function h6(_ba_,_bb_,_bc_){return create$2(cst_h6,_ba_,_bb_,_bc_)}
    function header(_a9_,_a__,_a$_)
     {return create$2(cst_header,_a9_,_a__,_a$_)}
    function html(_a6_,_a7_,_a8_){return create$2(cst_html,_a6_,_a7_,_a8_)}
    function input(_a3_,_a4_,_a5_)
     {return create$2(cst_input$0,_a3_,_a4_,_a5_)}
    function textarea(_a0_,_a1_,_a2_)
     {return create$2(cst_textarea,_a0_,_a1_,_a2_)}
    function select(_aX_,_aY_,_aZ_)
     {return create$2(cst_select,_aX_,_aY_,_aZ_)}
    function option(_aU_,_aV_,_aW_)
     {return create$2(cst_option,_aU_,_aV_,_aW_)}
    function label(_aR_,_aS_,_aT_){return create$2(cst_label,_aR_,_aS_,_aT_)}
    function li(_aO_,_aP_,_aQ_){return create$2(cst_li,_aO_,_aP_,_aQ_)}
    function p(_aL_,_aM_,_aN_){return create$2(cst_p,_aL_,_aM_,_aN_)}
    function pre(_aI_,_aJ_,_aK_){return create$2(cst_pre,_aI_,_aJ_,_aK_)}
    function section(_aF_,_aG_,_aH_)
     {return create$2(cst_section,_aF_,_aG_,_aH_)}
    function span(_aC_,_aD_,_aE_){return create$2(cst_span,_aC_,_aD_,_aE_)}
    function strong(_az_,_aA_,_aB_)
     {return create$2(cst_strong,_az_,_aA_,_aB_)}
    function table(_aw_,_ax_,_ay_){return create$2(cst_table,_aw_,_ax_,_ay_)}
    function tbody(_at_,_au_,_av_){return create$2(cst_tbody,_at_,_au_,_av_)}
    function td(_aq_,_ar_,_as_){return create$2(cst_td,_aq_,_ar_,_as_)}
    function th(_an_,_ao_,_ap_){return create$2(cst_th,_an_,_ao_,_ap_)}
    function thead(_ak_,_al_,_am_){return create$2(cst_thead,_ak_,_al_,_am_)}
    function tr(_ah_,_ai_,_aj_){return create$2(cst_tr,_ah_,_ai_,_aj_)}
    function ul(_ae_,_af_,_ag_){return create$2(cst_ul,_ae_,_af_,_ag_)}
    function ol(_ab_,_ac_,_ad_){return create$2(cst_ol,_ab_,_ac_,_ad_)}
    function br(_$_,_aa_){return create_childless(cst_br,_$_,_aa_)}
    function hr(_Z_,___){return create_childless(cst_hr,_Z_,___)}
    function create$3(previous,current)
     {var _Y_=to_js(current);return virtual_dom.diff(to_js(previous),_Y_)}
    function apply(t,elt){return virtual_dom.patch(elt,t)}
    function f(patch)
     {for(var key in patch)if(key !== "a")return false;return true}
    function is_empty(t){return f(t) | 0}
    var Patch=[0,create$3,apply,is_empty];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Virtual_dom_Node=
      [0,
       [0,tag,attrs,key,with_key,map_attrs,add_style$0,add_class$0],
       [0],
       none,
       text,
       a,
       body,
       button,
       code,
       div,
       footer,
       h1,
       h2,
       h3,
       h4,
       h5,
       h6,
       header,
       html,
       input,
       textarea,
       select,
       option,
       label,
       li,
       p,
       pre,
       section,
       span,
       strong,
       table,
       tbody,
       td,
       th,
       thead,
       tr,
       ul,
       ol,
       br,
       hr,
       create$2,
       create_svg,
       to_dom,
       widget,
       Patch];
    caml_register_global(270,Virtual_dom_Node,"Virtual_dom__Node");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$20);
    caml_call1(Expect_test_collector[4][1],cst_src_tyxml_f_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$21,cst$12);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Tyxml_f=[0];
    caml_register_global(271,Virtual_dom_Tyxml_f,"Virtual_dom__Tyxml_f");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$23);
    caml_call1(Expect_test_collector[4][1],cst_src_vdom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$24,cst$13);
    var
     Attr=
      [0,
       create$1,
       create_float,
       string_property,
       bool_property,
       property,
       on,
       autofocus,
       checked,
       class$0,
       to_class,
       classes$0,
       classes,
       disabled,
       for$0,
       href,
       id$0,
       name,
       placeholder,
       selected,
       hidden,
       style,
       to_style,
       tabindex,
       type,
       value,
       on_focus,
       on_blur,
       on_input,
       on_change,
       on_click,
       on_contextmenu,
       on_double_click,
       on_mousemove,
       on_mouseup,
       on_mousedown,
       on_mouseenter,
       on_mouseleave,
       on_mouseover,
       on_mouseout,
       on_keyup,
       on_keypress,
       on_keydown,
       Expert$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Vdom=[0,Attr,Event];
    caml_register_global(272,Virtual_dom_Vdom,"Virtual_dom__Vdom");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$26);
    caml_call1(Expect_test_collector[4][1],cst_src_tyxml_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$27,cst$14);
    function uri_of_string(s){return s}
    function string_of_uri(s){return s}
    function attr(name,value)
     {if(caml_string_notequal(name,cst_checked$0))
       if(caml_string_notequal(name,cst_selected$0))
        if(caml_string_notequal(name,cst_value$1))return create$1(name,value);
      return property(name,value.toString())}
    function attr_ev(name,cvt_to_vdom_event)
     {function f(e)
       {var _X_=caml_call1(cvt_to_vdom_event,e);
        caml_call2(Event[8][1],e,_X_);
        return Js_of_ocaml_Js[7]}
      return property(name,caml_call1(Js_of_ocaml_Dom[10],f))}
    function float_attrib(name,value)
     {return attr(name,caml_call1(Stdlib[35],value))}
    function int_attrib(name,value)
     {return attr(name,caml_call1(Stdlib[33],value))}
    function string_attrib(name,value){return attr(name,value)}
    function space_sep_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$15,values))}
    function comma_sep_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$16,values))}
    function event_handler_attrib(name,value){return attr_ev(name,value)}
    function mouse_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function touch_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function keyboard_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function uri_attrib(name,value){return attr(name,value)}
    function uris_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$17,values))}
    function empty(param){throw [0,Assert_failure,_S_]}
    function comment(c){throw [0,Assert_failure,_T_]}
    function pcdata(s){return [0,s]}
    function encodedpcdata(s){return [0,s]}
    function entity(e)
     {var
       _V_=caml_call2(Stdlib[28],e,cst$18),
       _W_=caml_call2(Stdlib[28],cst$19,_V_).toString(),
       entity=caml_call1(Js_of_ocaml_Dom_html[122],_W_);
      return [0,caml_js_to_string(entity)]}
    function leaf(opt,name)
     {if(opt)var sth=opt[1],a=sth;else var a=0;return create$2(name,0,a,0)}
    function node(opt,name,children)
     {if(opt)var sth=opt[1],a=sth;else var a=0;
      return create$2(name,0,a,children)}
    function cdata(s){return [0,s]}
    function cdata_script(s){return [0,s]}
    function cdata_style(s){return [0,s]}
    function leaf$0(opt,name)
     {if(opt)var sth=opt[1],a=sth;else var a=0;return create_svg(name,0,a,0)}
    function node$0(opt,name,children)
     {if(opt)var sth=opt[1],a=sth;else var a=0;
      return create_svg(name,0,a,children)}
    var
     Svg=
      caml_call1
       (Svg_f[1],
        [0,
         Xml_wrap[1],
         string_of_uri,
         uri_of_string,
         float_attrib,
         int_attrib,
         string_attrib,
         space_sep_attrib,
         comma_sep_attrib,
         event_handler_attrib,
         mouse_event_handler_attrib,
         keyboard_event_handler_attrib,
         touch_event_handler_attrib,
         uri_attrib,
         uris_attrib,
         empty,
         comment,
         pcdata,
         encodedpcdata,
         entity,
         leaf$0,
         node$0,
         cdata,
         cdata_script,
         cdata_style]),
     _U_=
      [0,
       Svg[2],
       Svg[3],
       Svg[4],
       Svg[5],
       Svg[6],
       Svg[7],
       Svg[8],
       Svg[9],
       Svg[10],
       Svg[11],
       Svg[12],
       Svg[13],
       Svg[14],
       Svg[15],
       Svg[16],
       Svg[17],
       Svg[18],
       Svg[19],
       Svg[20],
       Svg[21],
       Svg[22],
       Svg[23],
       Svg[24],
       Svg[25],
       Svg[26],
       Svg[27],
       Svg[28],
       Svg[29],
       Svg[30],
       Svg[31],
       Svg[32],
       Svg[33],
       Svg[34],
       Svg[35],
       Svg[36],
       Svg[37],
       Svg[38],
       Svg[39],
       Svg[40],
       Svg[41],
       Svg[42],
       Svg[43],
       Svg[44],
       Svg[45],
       Svg[46],
       Svg[47],
       Svg[48],
       Svg[49],
       Svg[50],
       Svg[51],
       Svg[52],
       Svg[53],
       Svg[54],
       Svg[55],
       Svg[56],
       Svg[57],
       Svg[58],
       Svg[59],
       Svg[60],
       Svg[61],
       Svg[62],
       Svg[63],
       Svg[64],
       Svg[65],
       Svg[66],
       Svg[67],
       Svg[68],
       Svg[69],
       Svg[70],
       Svg[71],
       Svg[72],
       Svg[73],
       Svg[74],
       Svg[75],
       Svg[76],
       Svg[77],
       Svg[78],
       Svg[79],
       Svg[80],
       Svg[81],
       Svg[82],
       Svg[83],
       Svg[84],
       Svg[85],
       Svg[86],
       Svg[87],
       Svg[88],
       Svg[89],
       Svg[90],
       Svg[91],
       Svg[92],
       Svg[93],
       Svg[94],
       Svg[95],
       Svg[96],
       Svg[97],
       Svg[98],
       Svg[99],
       Svg[100],
       Svg[101],
       Svg[102],
       Svg[103],
       Svg[104],
       Svg[105],
       Svg[106],
       Svg[107],
       Svg[108],
       Svg[109],
       Svg[110],
       Svg[111],
       Svg[112],
       Svg[113],
       Svg[114],
       Svg[115],
       Svg[116],
       Svg[117],
       Svg[118],
       Svg[119],
       Svg[120],
       Svg[121],
       Svg[122],
       Svg[123],
       Svg[124],
       Svg[125],
       Svg[126],
       Svg[127],
       Svg[128],
       Svg[129],
       Svg[130],
       Svg[131],
       Svg[132],
       Svg[133],
       Svg[134],
       Svg[135],
       Svg[136],
       Svg[137],
       Svg[138],
       Svg[139],
       Svg[140],
       Svg[141],
       Svg[142],
       Svg[143],
       Svg[144],
       Svg[145],
       Svg[146],
       Svg[147],
       Svg[148],
       Svg[149],
       Svg[150],
       Svg[151],
       Svg[152],
       Svg[153],
       Svg[154],
       Svg[155],
       Svg[156],
       Svg[157],
       Svg[158],
       Svg[159],
       Svg[160],
       Svg[161],
       Svg[162],
       Svg[163],
       Svg[164],
       Svg[165],
       Svg[166],
       Svg[167],
       Svg[168],
       Svg[169],
       Svg[170],
       Svg[171],
       Svg[172],
       Svg[173],
       Svg[174],
       Svg[175],
       Svg[176],
       Svg[177],
       Svg[178],
       Svg[179],
       Svg[180],
       Svg[181],
       Svg[182],
       Svg[183],
       Svg[184],
       Svg[185],
       Svg[186],
       Svg[187],
       Svg[188],
       Svg[189],
       Svg[190],
       Svg[191],
       Svg[192],
       Svg[193],
       Svg[194],
       Svg[195],
       Svg[196],
       Svg[197],
       Svg[198],
       Svg[199],
       Svg[200],
       Svg[201],
       Svg[202],
       Svg[203],
       Svg[204],
       Svg[205],
       Svg[206],
       Svg[207],
       Svg[208],
       Svg[209],
       Svg[210],
       Svg[211],
       Svg[212],
       Svg[213],
       Svg[214],
       Svg[215],
       Svg[216],
       Svg[217],
       Svg[218],
       Svg[219],
       Svg[220],
       Svg[221],
       Svg[222],
       Svg[223],
       Svg[224],
       Svg[225],
       Svg[226],
       Svg[227],
       Svg[228],
       Svg[229],
       Svg[230],
       Svg[231],
       Svg[232],
       Svg[233],
       Svg[234],
       Svg[235],
       Svg[236],
       Svg[237],
       Svg[238],
       Svg[239],
       Svg[240],
       Svg[241],
       Svg[242],
       Svg[243],
       Svg[244],
       Svg[245],
       Svg[246],
       Svg[247],
       Svg[248],
       Svg[249],
       Svg[250],
       Svg[251],
       Svg[252],
       Svg[253],
       Svg[254],
       Svg[255],
       Svg[256],
       Svg[257],
       Svg[258],
       Svg[259],
       Svg[260],
       Svg[261],
       Svg[262],
       Svg[263],
       Svg[264],
       Svg[265],
       Svg[266],
       Svg[267],
       Svg[268],
       Svg[269],
       Svg[270],
       Svg[271],
       Svg[272],
       Svg[273],
       Svg[274],
       Svg[275],
       Svg[276],
       Svg[277],
       Svg[278],
       Svg[279],
       Svg[280],
       Svg[281],
       Svg[282],
       Svg[283],
       Svg[284],
       Svg[285],
       Svg[286],
       Svg[287],
       Svg[288],
       Svg[289],
       Svg[290],
       Svg[291],
       Svg[292],
       Svg[293],
       Svg[294],
       Svg[295],
       Svg[296],
       Svg[297],
       Svg[298],
       Svg[299],
       Svg[300],
       Svg[301],
       Svg[302],
       Svg[303],
       Svg[304],
       Svg[305],
       Svg[306],
       Svg[307],
       Svg[308],
       Svg[309],
       Svg[310],
       Svg[311],
       Svg[312],
       Svg[313],
       Svg[314],
       Svg[315],
       Svg[316],
       Svg[317],
       Svg[318],
       Svg[319],
       Svg[320],
       Svg[321],
       Svg[322],
       Svg[323],
       Svg[324],
       Svg[325],
       Svg[326],
       Svg[327],
       Svg[328],
       Svg[329]],
     Html=
      caml_call1
       (caml_call1
         (Html_f[1],
          [0,
           Xml_wrap[1],
           string_of_uri,
           uri_of_string,
           float_attrib,
           int_attrib,
           string_attrib,
           space_sep_attrib,
           comma_sep_attrib,
           event_handler_attrib,
           mouse_event_handler_attrib,
           keyboard_event_handler_attrib,
           touch_event_handler_attrib,
           uri_attrib,
           uris_attrib,
           empty,
           comment,
           pcdata,
           encodedpcdata,
           entity,
           leaf,
           node,
           cdata,
           cdata_script,
           cdata_style]),
        _U_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Virtual_dom_Tyxml=
      [0,
       [0,
        Xml_wrap[1],
        string_of_uri,
        uri_of_string,
        float_attrib,
        int_attrib,
        string_attrib,
        space_sep_attrib,
        comma_sep_attrib,
        event_handler_attrib,
        mouse_event_handler_attrib,
        keyboard_event_handler_attrib,
        touch_event_handler_attrib,
        uri_attrib,
        uris_attrib,
        empty,
        comment,
        pcdata,
        encodedpcdata,
        entity,
        leaf,
        node,
        cdata,
        cdata_script,
        cdata_style],
       Svg,
       Html];
    caml_register_global(279,Virtual_dom_Tyxml,"Virtual_dom__Tyxml");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$29);
    caml_call1(Expect_test_collector[4][1],cst_src_virtual_dom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$30,cst$20);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom$0=[0];
    caml_register_global(280,Virtual_dom$0,"Virtual_dom");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2aXJ0dWFsX2RvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
