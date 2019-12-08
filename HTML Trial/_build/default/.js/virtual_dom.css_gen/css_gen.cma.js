(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_compare=runtime.caml_compare,
     caml_int_compare=runtime.caml_int_compare,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_test_19abf2_2=caml_new_string('"test\\19abf2\\2"'),
     cst_010_xFFa_o123_n_u_12345_aa=
      caml_new_string
       ('"\\010\\xFFa\\o123\\n\\\\\\u{12345}aa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa"'),
     cst$8=
      caml_new_string
       ('"\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6"'),
     cst_css_gen_src_css_tokenizer_ml$55=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_url_http_wwww_google_com=
      caml_new_string('url( "http://wwww.google.com")'),
     cst_url_http_wwww_google_com$0=
      caml_new_string("url('http://wwww.google.com')"),
     cst_url_http_wwww_google_com$1=
      caml_new_string("url('http://wwww.google.com' )"),
     cst_css_gen_src_css_tokenizer_ml$50=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_red=caml_new_string("red-->"),
     cst_css_gen_src_css_tokenizer_ml$45=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_import_foo_bar=caml_new_string('@import "foo.bar";'),
     cst_css_gen_src_css_tokenizer_ml$40=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_color_f00=caml_new_string("color: #f00"),
     cst_color_rgb_255_0_0=caml_new_string("color: rgb(255,0,0)"),
     cst_color_rgb_255_0_0$0=caml_new_string("color: rgb(255,0,0)"),
     cst_css_gen_src_css_tokenizer_ml$35=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_Foo_Bar=caml_new_string("'Foo '\"Bar\"';' '\\'' \"\\\"\""),
     cst_css_gen_src_css_tokenizer_ml$30=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_foo_bar$2=caml_new_string("'foo bar"),
     cst$6=caml_new_string("'"),
     cst$7=caml_new_string("'\\'"),
     cst_css_gen_src_css_tokenizer_ml$25=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_margin_0_5in=caml_new_string("margin: 0.5in"),
     cst_line_height_3cm=caml_new_string("line-height: 3cm"),
     cst_line_height_120=caml_new_string("line-height: 120%"),
     cst_grid_0_1_foo=caml_new_string("grid: 0 1 foo"),
     cst_margin_0_5_in=caml_new_string("margin: 0.5-in"),
     cst_css_gen_src_css_tokenizer_ml$20=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst$5=caml_new_string("  "),
     cst_css_gen_src_css_tokenizer_ml$15=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_foo_bar_baz=caml_new_string("-foo-bar: baz"),
     cst_foo_bar=caml_new_string("-foo-bar("),
     cst_foo_bar$0=caml_new_string("@foo-bar"),
     cst_foo_bar$1=caml_new_string("@-foo-bar"),
     cst_css_gen_src_css_tokenizer_ml$10=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst$4=caml_new_string(")({}[];:"),
     cst_css_gen_src_css_tokenizer_ml$5=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst$3=caml_new_string(""),
     cst_css_gen_src_css_tokenizer_ml$0=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst$2=caml_new_string(""),
     cst$1=caml_new_string("*/"),
     cst$0=caml_new_string("/*"),
     cst_url=caml_new_string("url("),
     cst_atkeyword=caml_new_string("atkeyword"),
     cst_Lcurly=caml_new_string("Lcurly"),
     cst_Eof=caml_new_string("Eof"),
     cst_Atkeyword=caml_new_string("Atkeyword"),
     cst_Colon=caml_new_string("Colon"),
     cst_Comment=caml_new_string("Comment"),
     cst_Delim=caml_new_string("Delim"),
     cst_Dimension=caml_new_string("Dimension"),
     cst_Error=caml_new_string("Error"),
     cst_Function=caml_new_string("Function"),
     cst_Hash=caml_new_string("Hash"),
     cst_Ident=caml_new_string("Ident"),
     cst_Lbracket=caml_new_string("Lbracket"),
     cst_Rparen=caml_new_string("Rparen"),
     cst_Lparen=caml_new_string("Lparen"),
     cst_Number=caml_new_string("Number"),
     cst_Percentage=caml_new_string("Percentage"),
     cst_Rbracket=caml_new_string("Rbracket"),
     cst_Rcurly=caml_new_string("Rcurly"),
     cst_Semi=caml_new_string("Semi"),
     cst_String=caml_new_string("String"),
     cst_Uri=caml_new_string("Uri"),
     cst_White_space=caml_new_string("White_space"),
     cst_lcurly=caml_new_string("lcurly"),
     cst_error=caml_new_string("error"),
     cst_colon=caml_new_string("colon"),
     cst_comment=caml_new_string("comment"),
     cst_delim=caml_new_string("delim"),
     cst_dimension=caml_new_string("dimension"),
     cst_eof=caml_new_string("eof"),
     cst_function=caml_new_string("function"),
     cst_hash=caml_new_string("hash"),
     cst_ident=caml_new_string("ident"),
     cst_lbracket=caml_new_string("lbracket"),
     cst_rparen=caml_new_string("rparen"),
     cst_lparen=caml_new_string("lparen"),
     cst_number=caml_new_string("number"),
     cst_percentage=caml_new_string("percentage"),
     cst_rbracket=caml_new_string("rbracket"),
     cst_rcurly=caml_new_string("rcurly"),
     cst_semi=caml_new_string("semi"),
     cst_string=caml_new_string("string"),
     cst_uri=caml_new_string("uri"),
     cst_white_space=caml_new_string("white_space"),
     cst_atkeyword$0=caml_new_string("atkeyword"),
     cst_Lcurly$0=caml_new_string("Lcurly"),
     cst_Eof$0=caml_new_string("Eof"),
     cst_Atkeyword$0=caml_new_string("Atkeyword"),
     cst_Colon$0=caml_new_string("Colon"),
     cst_Comment$0=caml_new_string("Comment"),
     cst_Delim$0=caml_new_string("Delim"),
     cst_Dimension$0=caml_new_string("Dimension"),
     cst_Error$0=caml_new_string("Error"),
     cst_Function$0=caml_new_string("Function"),
     cst_Hash$0=caml_new_string("Hash"),
     cst_Ident$0=caml_new_string("Ident"),
     cst_Lbracket$0=caml_new_string("Lbracket"),
     cst_Rparen$0=caml_new_string("Rparen"),
     cst_Lparen$0=caml_new_string("Lparen"),
     cst_Number$0=caml_new_string("Number"),
     cst_Percentage$0=caml_new_string("Percentage"),
     cst_Rbracket$0=caml_new_string("Rbracket"),
     cst_Rcurly$0=caml_new_string("Rcurly"),
     cst_Semi$0=caml_new_string("Semi"),
     cst_String$0=caml_new_string("String"),
     cst_Uri$0=caml_new_string("Uri"),
     cst_White_space$0=caml_new_string("White_space"),
     cst_lcurly$0=caml_new_string("lcurly"),
     cst_error$0=caml_new_string("error"),
     cst_colon$0=caml_new_string("colon"),
     cst_comment$0=caml_new_string("comment"),
     cst_delim$0=caml_new_string("delim"),
     cst_dimension$0=caml_new_string("dimension"),
     cst_eof$0=caml_new_string("eof"),
     cst_function$0=caml_new_string("function"),
     cst_hash$0=caml_new_string("hash"),
     cst_ident$0=caml_new_string("ident"),
     cst_lbracket$0=caml_new_string("lbracket"),
     cst_rparen$0=caml_new_string("rparen"),
     cst_lparen$0=caml_new_string("lparen"),
     cst_number$0=caml_new_string("number"),
     cst_percentage$0=caml_new_string("percentage"),
     cst_rbracket$0=caml_new_string("rbracket"),
     cst_rcurly$0=caml_new_string("rcurly"),
     cst_semi$0=caml_new_string("semi"),
     cst_string$0=caml_new_string("string"),
     cst_uri$0=caml_new_string("uri"),
     cst_white_space$0=caml_new_string("white_space"),
     cst_css_gen=caml_new_string("css_gen"),
     cst_css_gen_src_css_tokenizer_ml=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst=caml_new_string(""),
     cst_css_gen$0=caml_new_string("css_gen"),
     tp_loc=caml_new_string("css_gen/src/css_tokenizer.ml.Token.t"),
     cst_Css_gen_Css_tokenizer_Error_happened=
      caml_new_string("Css_gen__Css_tokenizer.Error_happened"),
     cst_css_gen_src_css_tokenizer_ml$1=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$2=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$3=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$4=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$6=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$7=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$8=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$9=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$0=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$11=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$12=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$13=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$14=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$1=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$16=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$17=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$18=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$19=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$2=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$21=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$22=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$23=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$24=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$3=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$26=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$27=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$28=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$29=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$4=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$31=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$32=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$33=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$34=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$5=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$36=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$37=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$38=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$39=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$6=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$41=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$42=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$43=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$44=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$7=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$46=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$47=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$48=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$49=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$8=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$51=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$52=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$53=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$54=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$9=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen_src_css_tokenizer_ml$56=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$57=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$58=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_ml$59=
      caml_new_string("css_gen/src/css_tokenizer.ml"),
     cst_29a79425bfd5284345e8bd1cbb9c0ef8$10=
      caml_new_string("29a79425bfd5284345e8bd1cbb9c0ef8"),
     cst_css_gen$1=caml_new_string("css_gen"),
     cst_Expected_any=caml_new_string("Expected <any>"),
     cst_Expected_value=caml_new_string("Expected <value>"),
     cst_flex_1_0_auto$0=caml_new_string("flex: 1 0 auto"),
     cst_flex_1_0_auto$1=caml_new_string("flex: 1 0 auto;"),
     cst_background_5d9ab2_url_img_tree_png_no_repeat_top_left_margin_left_200px=
      caml_new_string
       ('background: #5d9ab2 url("img_tree.png") no-repeat top left;margin-left: 200px'),
     cst$11=caml_new_string(";;;;;"),
     cst_flex_1_0_auto_other_sa=
      caml_new_string("flex: 1 0 auto ;; other : sa "),
     cst_css_gen_src_css_parser_ml$15=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_content=
      caml_new_string
       ("content: '\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6'"),
     cst_css_gen_src_css_parser_ml$10=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_flex_1_0_auto=caml_new_string("flex: 1 0 auto"),
     cst_content_Hello_World=caml_new_string("content: 'Hello World'"),
     cst_content_foo=caml_new_string("content: foo;"),
     cst_content_bar=caml_new_string("content: bar "),
     cst_css_gen_src_css_parser_ml$5=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_x=caml_new_string("x"),
     cst_3=caml_new_string("3"),
     cst_3in=caml_new_string("3in"),
     cst_3$0=caml_new_string("3%"),
     cst_fff=caml_new_string("#fff"),
     cst_1_0_auto=caml_new_string("1 0 auto"),
     cst_Hello_World=caml_new_string("'Hello World'"),
     cst_rgb_0_0_0=caml_new_string("rgb(0,0,0)"),
     cst_css_gen_src_css_parser_ml$0=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_s_sexp_arg_Or_error_t=
      caml_new_string("%s --> %{sexp:arg Or_error.t}\n"),
     cst$10=caml_new_string(" --> "),
     cst_Expected_declaration=caml_new_string("Expected <declaration>"),
     cst_Unexpected_token=caml_new_string("Unexpected token"),
     cst_css_gen$2=caml_new_string("css_gen"),
     cst_css_gen_src_css_parser_ml=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst$9=caml_new_string(""),
     cst_css_gen$3=caml_new_string("css_gen"),
     cst_css_gen_src_css_parser_ml$1=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$2=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$3=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$4=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_faa6d4d2dcc84185f8e15aee50111c07=
      caml_new_string("faa6d4d2dcc84185f8e15aee50111c07"),
     cst_css_gen_src_css_parser_ml$6=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$7=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$8=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$9=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_faa6d4d2dcc84185f8e15aee50111c07$0=
      caml_new_string("faa6d4d2dcc84185f8e15aee50111c07"),
     cst_css_gen_src_css_parser_ml$11=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$12=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$13=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$14=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_faa6d4d2dcc84185f8e15aee50111c07$1=
      caml_new_string("faa6d4d2dcc84185f8e15aee50111c07"),
     cst_css_gen_src_css_parser_ml$16=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$17=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$18=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$19=
      caml_new_string("css_gen/src/css_parser.ml"),
     cst_faa6d4d2dcc84185f8e15aee50111c07$2=
      caml_new_string("faa6d4d2dcc84185f8e15aee50111c07"),
     cst_css_gen$4=caml_new_string("css_gen"),
     cst$19=caml_new_string('";"'),
     cst_content$0=caml_new_string("content"),
     cst_css_gen_src_css_gen_ml$0=caml_new_string("css_gen/src/css_gen.ml"),
     cst_animation_delay=caml_new_string("animation-delay"),
     cst_animation_iteration_count=
      caml_new_string("animation-iteration-count"),
     cst_animation_timing_function=
      caml_new_string("animation-timing-function"),
     cst_animation_fill_mode=caml_new_string("animation-fill-mode"),
     cst_animation_direction=caml_new_string("animation-direction"),
     cst_animation_duration=caml_new_string("animation-duration"),
     cst_animation_name=caml_new_string("animation-name"),
     cst_align_self=caml_new_string("align-self"),
     cst_order=caml_new_string("order"),
     cst_flex=caml_new_string("flex"),
     cst_align_items=caml_new_string("align-items"),
     cst_flex_wrap=caml_new_string("flex-wrap"),
     cst_flex_direction=caml_new_string("flex-direction"),
     cst_center=caml_new_string("center"),
     cst_auto$0=caml_new_string("auto"),
     cst_flex_start=caml_new_string("flex-start"),
     cst_baseline=caml_new_string("baseline"),
     cst_flex_end=caml_new_string("flex-end"),
     cst_stretch=caml_new_string("stretch"),
     cst_text_decoration=caml_new_string("text-decoration"),
     cst_border_radius=caml_new_string("border-radius"),
     cst_border_collapse=caml_new_string("border-collapse"),
     cst_outline=caml_new_string("outline"),
     cst_border_left=caml_new_string("border-left"),
     cst_border_bottom=caml_new_string("border-bottom"),
     cst_border_top=caml_new_string("border-top"),
     cst_border_right=caml_new_string("border-right"),
     cst_border=caml_new_string("border"),
     cst$16=caml_new_string(""),
     cst$17=caml_new_string(""),
     cst$18=caml_new_string(" "),
     cst_float=caml_new_string("float"),
     cst_background_color=caml_new_string("background-color"),
     cst_color=caml_new_string("color"),
     cst_font_variant=caml_new_string("font-variant"),
     cst_font_weight=caml_new_string("font-weight"),
     cst_font_style=caml_new_string("font-style"),
     cst_font_family=caml_new_string("font-family"),
     cst_initial=caml_new_string("initial"),
     cst_pre=caml_new_string("pre"),
     cst_inherit=caml_new_string("inherit"),
     cst_nowrap=caml_new_string("nowrap"),
     cst_normal=caml_new_string("normal"),
     cst_pre_line=caml_new_string("pre-line"),
     cst_pre_wrap=caml_new_string("pre-wrap"),
     cst_white_space$1=caml_new_string("white-space"),
     cst_opacity=caml_new_string("opacity"),
     cst_z_index=caml_new_string("z-index"),
     cst_visibility=caml_new_string("visibility"),
     cst_display=caml_new_string("display"),
     cst_box_sizing=caml_new_string("box-sizing"),
     cst_sticky=caml_new_string("sticky"),
     cst_static=caml_new_string("static"),
     cst_absolute=caml_new_string("absolute"),
     cst_relative=caml_new_string("relative"),
     cst_fixed=caml_new_string("fixed"),
     cst_position=caml_new_string("position"),
     cst$15=caml_new_string(""),
     cst_auto=caml_new_string("auto"),
     cst_Auto$0=caml_new_string("Auto"),
     cst_Auto$1=caml_new_string("Auto"),
     cst_Ch=caml_new_string("Ch"),
     cst_Em=caml_new_string("Em"),
     cst_Percent=caml_new_string("Percent"),
     cst_Pt=caml_new_string("Pt"),
     cst_Px=caml_new_string("Px"),
     cst_Rem=caml_new_string("Rem"),
     cst_Vh=caml_new_string("Vh"),
     cst_Vw=caml_new_string("Vw"),
     cst_Ch$0=caml_new_string("Ch"),
     cst_Em$0=caml_new_string("Em"),
     cst_Percent$0=caml_new_string("Percent"),
     cst_Pt$0=caml_new_string("Pt"),
     cst_Px$0=caml_new_string("Px"),
     cst_Rem$0=caml_new_string("Rem"),
     cst_Vh$0=caml_new_string("Vh"),
     cst_Vw$0=caml_new_string("Vw"),
     cst_Bottom=caml_new_string("Bottom"),
     cst_Center=caml_new_string("Center"),
     cst_Justify=caml_new_string("Justify"),
     cst_Left=caml_new_string("Left"),
     cst_Middle=caml_new_string("Middle"),
     cst_Right=caml_new_string("Right"),
     cst_Top=caml_new_string("Top"),
     cst_Bottom$0=caml_new_string("Bottom"),
     cst_Center$0=caml_new_string("Center"),
     cst_Justify$0=caml_new_string("Justify"),
     cst_Left$0=caml_new_string("Left"),
     cst_Middle$0=caml_new_string("Middle"),
     cst_Right$0=caml_new_string("Right"),
     cst_Top$0=caml_new_string("Top"),
     partial=[12,41,0],
     partial$0=[0,2],
     err=[2,caml_new_string("css_gen/src/css_gen.ml.Color.T.t")],
     cst_HSLA=caml_new_string("HSLA"),
     cst_Hex=caml_new_string("Hex"),
     cst_Name=caml_new_string("Name"),
     cst_RGBA=caml_new_string("RGBA"),
     cst_Var=caml_new_string("Var"),
     cst_HSLA$0=caml_new_string("HSLA"),
     cst_Hex$0=caml_new_string("Hex"),
     cst_Name$0=caml_new_string("Name"),
     cst_RGBA$0=caml_new_string("RGBA"),
     cst_Var$0=caml_new_string("Var"),
     cst_css_gen_src_css_gen_ml_Color_T_HSLA_t=
      caml_new_string("css_gen/src/css_gen.ml.Color.T.HSLA.t"),
     cst_a$2=caml_new_string("a"),
     cst_h=caml_new_string("h"),
     cst_l=caml_new_string("l"),
     cst_s=caml_new_string("s"),
     cst_a$3=caml_new_string("a"),
     cst_l$0=caml_new_string("l"),
     cst_s$0=caml_new_string("s"),
     cst_h$0=caml_new_string("h"),
     cst_css_gen_src_css_gen_ml_Color_T_RGBA_t=
      caml_new_string("css_gen/src/css_gen.ml.Color.T.RGBA.t"),
     cst_a=caml_new_string("a"),
     cst_b=caml_new_string("b"),
     cst_g=caml_new_string("g"),
     cst_r=caml_new_string("r"),
     cst_a$0=caml_new_string("a"),
     cst_b$0=caml_new_string("b"),
     cst_g$0=caml_new_string("g"),
     cst_r$0=caml_new_string("r"),
     cst_Inherit=caml_new_string("Inherit"),
     cst_Initial=caml_new_string("Initial"),
     cst_Inherit$0=caml_new_string("Inherit"),
     cst_Initial$0=caml_new_string("Initial"),
     cst$13=caml_new_string("-"),
     cst$14=caml_new_string("_"),
     cst_css_gen$5=caml_new_string("css_gen"),
     cst_css_gen_src_css_gen_ml=caml_new_string("css_gen/src/css_gen.ml"),
     cst$12=caml_new_string(""),
     cst_css_gen$6=caml_new_string("css_gen"),
     tp_loc$0=caml_new_string("css_gen/src/css_gen.ml.Stable.V1.t"),
     cst_t=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_7_4=
      caml_new_string("css_gen/src/css_gen.ml:7:4"),
     cst_t$0=caml_new_string("t"),
     tp_loc$1=caml_new_string("css_gen/src/css_gen.ml.css_global_values"),
     tp_loc$2=caml_new_string("css_gen/src/css_gen.ml.css_global_values"),
     cst_Initial$1=caml_new_string("Initial"),
     cst_Inherit$1=caml_new_string("Inherit"),
     cst_css_gen_src_css_gen_ml_21_2=
      caml_new_string("css_gen/src/css_gen.ml:21:2"),
     cst_css_global_values=caml_new_string("css_global_values"),
     cst_css_gen_src_css_gen_ml_20_0=
      caml_new_string("css_gen/src/css_gen.ml:20:0"),
     cst_css_global_values$0=caml_new_string("css_global_values"),
     tp_loc$3=caml_new_string("css_gen/src/css_gen.ml.Color.T.RGBA.t"),
     cst_a$1=caml_new_string("a"),
     cst_b$1=caml_new_string("b"),
     cst_g$1=caml_new_string("g"),
     cst_r$1=caml_new_string("r"),
     cst_t$1=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_29_6=
      caml_new_string("css_gen/src/css_gen.ml:29:6"),
     cst_t$2=caml_new_string("t"),
     tp_loc$4=caml_new_string("css_gen/src/css_gen.ml.Color.T.HSLA.t"),
     cst_a$4=caml_new_string("a"),
     cst_l$1=caml_new_string("l"),
     cst_s$1=caml_new_string("s"),
     cst_h$1=caml_new_string("h"),
     cst_t$3=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_41_6=
      caml_new_string("css_gen/src/css_gen.ml:41:6"),
     cst_t$4=caml_new_string("t"),
     tp_loc$5=caml_new_string("css_gen/src/css_gen.ml.Color.T.t"),
     tp_loc$6=caml_new_string("css_gen/src/css_gen.ml.Color.T.t"),
     cst_css_gen_src_css_gen_ml_58_8=
      caml_new_string("css_gen/src/css_gen.ml:58:8"),
     cst_Var$1=caml_new_string("Var"),
     cst_Hex$1=caml_new_string("Hex"),
     cst_Name$1=caml_new_string("Name"),
     cst_HSLA$1=caml_new_string("HSLA"),
     cst_RGBA$1=caml_new_string("RGBA"),
     cst_css_gen_src_css_gen_ml_53_6=
      caml_new_string("css_gen/src/css_gen.ml:53:6"),
     cst_t$5=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_52_4=
      caml_new_string("css_gen/src/css_gen.ml:52:4"),
     cst_t$6=caml_new_string("t"),
     tp_loc$7=caml_new_string("css_gen/src/css_gen.ml.Alignment.t"),
     tp_loc$8=caml_new_string("css_gen/src/css_gen.ml.Alignment.t"),
     cst_css_gen_src_css_gen_ml_102_6=
      caml_new_string("css_gen/src/css_gen.ml:102:6"),
     cst_Justify$1=caml_new_string("Justify"),
     cst_Middle$1=caml_new_string("Middle"),
     cst_Bottom$1=caml_new_string("Bottom"),
     cst_Top$1=caml_new_string("Top"),
     cst_Center$1=caml_new_string("Center"),
     cst_Right$1=caml_new_string("Right"),
     cst_Left$1=caml_new_string("Left"),
     cst_css_gen_src_css_gen_ml_95_4=
      caml_new_string("css_gen/src/css_gen.ml:95:4"),
     cst_t$7=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_94_2=
      caml_new_string("css_gen/src/css_gen.ml:94:2"),
     cst_t$8=caml_new_string("t"),
     tp_loc$9=caml_new_string("css_gen/src/css_gen.ml.Length.t"),
     tp_loc$10=caml_new_string("css_gen/src/css_gen.ml.Length.t"),
     cst_css_gen_src_css_gen_ml_123_6=
      caml_new_string("css_gen/src/css_gen.ml:123:6"),
     cst_Vw$1=caml_new_string("Vw"),
     cst_Vh$1=caml_new_string("Vh"),
     cst_Px$1=caml_new_string("Px"),
     cst_Pt$1=caml_new_string("Pt"),
     cst_Percent$1=caml_new_string("Percent"),
     cst_Em$1=caml_new_string("Em"),
     cst_Rem$1=caml_new_string("Rem"),
     cst_Ch$1=caml_new_string("Ch"),
     cst_css_gen_src_css_gen_ml_115_4=
      caml_new_string("css_gen/src/css_gen.ml:115:4"),
     cst_t$9=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_114_2=
      caml_new_string("css_gen/src/css_gen.ml:114:2"),
     cst_t$10=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_145_6=
      caml_new_string("css_gen/src/css_gen.ml:145:6"),
     cst_Auto=caml_new_string("Auto"),
     cst_css_gen_src_css_gen_ml_144_4=
      caml_new_string("css_gen/src/css_gen.ml:144:4"),
     cst_t$11=caml_new_string("t"),
     cst_css_gen_src_css_gen_ml_143_2=
      caml_new_string("css_gen/src/css_gen.ml:143:2"),
     cst_t$12=caml_new_string("t"),
     tp_loc$11=caml_new_string("css_gen/src/css_gen.ml.Auto_or_length.t"),
     tp_loc$12=caml_new_string("css_gen/src/css_gen.ml.Auto_or_length.t"),
     cst_left=caml_new_string("left"),
     cst_top=caml_new_string("top"),
     cst_bottom=caml_new_string("bottom"),
     cst_right=caml_new_string("right"),
     cst_overflow=caml_new_string("overflow"),
     cst_overflow_x=caml_new_string("overflow-x"),
     cst_overflow_y=caml_new_string("overflow-y"),
     cst_font_size=caml_new_string("font-size"),
     cst_text_align=caml_new_string("text-align"),
     cst_horizontal_align=caml_new_string("horizontal-align"),
     cst_vertical_align=caml_new_string("vertical-align"),
     cst_width=caml_new_string("width"),
     cst_min_width=caml_new_string("min-width"),
     cst_max_width=caml_new_string("max-width"),
     cst_height=caml_new_string("height"),
     cst_min_height=caml_new_string("min-height"),
     cst_max_height=caml_new_string("max-height"),
     cst_padding_top=caml_new_string("padding-top"),
     cst_padding_bottom=caml_new_string("padding-bottom"),
     cst_padding_left=caml_new_string("padding-left"),
     cst_padding_right=caml_new_string("padding-right"),
     cst_margin_top=caml_new_string("margin-top"),
     cst_margin_bottom=caml_new_string("margin-bottom"),
     cst_margin_left=caml_new_string("margin-left"),
     cst_margin_right=caml_new_string("margin-right"),
     cst_border_spacing=caml_new_string("border-spacing"),
     cst_css_gen_src_css_gen_ml$1=caml_new_string("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$2=caml_new_string("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$3=caml_new_string("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$4=caml_new_string("css_gen/src/css_gen.ml"),
     cst_2ff226de531bd74ddb8c492c5138db15=
      caml_new_string("2ff226de531bd74ddb8c492c5138db15"),
     cst_css_gen$7=caml_new_string("css_gen"),
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Char=global_data.Core_kernel__Char,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Expect_test_config=global_data.Expect_test_config,
     Inline_test_config=global_data.Inline_test_config,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Unit=global_data.Core_kernel__Unit,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     Core_kernel_Percent=global_data.Core_kernel__Percent,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Bin_prot_Common=global_data.Bin_prot__Common,
     Bin_prot_Write=global_data.Bin_prot__Write,
     Core_kernel_Stable=global_data.Core_kernel__Stable,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Core_kernel_Fn=global_data.Core_kernel__Fn,
     Css_gen=[0];
    caml_register_global(777,Css_gen,"Css_gen__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_css_gen);
    caml_call1(Expect_test_collector[4][1],cst_css_gen_src_css_tokenizer_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_css_gen$0,cst);
    var
     _G_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),217,2],
     _F_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),202,2],
     _E_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),203,2],
     _D_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),193,2],
     _C_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),194,2],
     _B_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),185,2],
     _A_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),186,2],
     _z_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),169,2],
     _y_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),155,2],
     _x_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),120,2],
     _w_=[0,caml_new_string("css_gen/src/css_tokenizer.ml"),50,2],
     _a_=[0,caml_new_string("Ident")],
     _b_=[0,caml_new_string("Atkeyword")],
     _c_=[0,caml_new_string("String")],
     _d_=[0,caml_new_string("Hash")],
     _e_=[0,caml_new_string("Number")],
     _f_=[0,caml_new_string("Percentage")],
     _g_=[0,caml_new_string("Dimension")],
     _h_=[0,caml_new_string("Uri")],
     _i_=[0,caml_new_string("Lcurly")],
     _j_=[0,caml_new_string("Rcurly")],
     _k_=[0,caml_new_string("Lbracket")],
     _l_=[0,caml_new_string("Rbracket")],
     _m_=[0,caml_new_string("Lparen")],
     _n_=[0,caml_new_string("Rparen")],
     _o_=[0,caml_new_string("Colon")],
     _p_=[0,caml_new_string("Semi")],
     _q_=[0,caml_new_string("White_space")],
     _r_=[0,caml_new_string("Comment")],
     _s_=[0,caml_new_string("Function")],
     _t_=[0,caml_new_string("Eof")],
     _u_=[0,caml_new_string("Delim")],
     _v_=[0,caml_new_string("Error")],
     _K_=[1,caml_new_string("((Eof 0 0))")],
     _L_=[0,caml_new_string("")],
     _N_=[0,caml_new_string("eof")],
     _S_=
      [1,
       caml_new_string
        (" ((Rparen 0 1)(Lparen 1 1)(Lcurly 2 1)(Rcurly 3 1)(Lbracket 4 1)(Rbracket 5 1)(Semi 6 1)(Colon 7 1)(Eof 8 0)) ")],
     _T_=[0,caml_new_string("")],
     _V_=[0,caml_new_string("simple_tokens")],
     ___=
      [1,
       caml_new_string
        ("\n    ((Ident 0 8)(Colon 8 1)(White_space 9 1)(Ident 10 3)(Eof 13 0))\n    ((Function 0 9)(Eof 9 0))\n    ((Atkeyword 0 8)(Eof 8 0))\n    ((Atkeyword 0 9)(Eof 9 0)) ")],
     _$_=[0,caml_new_string("")],
     _ab_=[0,caml_new_string("ident")],
     _ag_=[1,caml_new_string("((White_space 0 2)(Eof 2 0))")],
     _ah_=[0,caml_new_string("")],
     _aj_=[0,caml_new_string("whitespace")],
     _ao_=
      [1,
       caml_new_string
        ("\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Dimension 8 5)(Eof 13 0))\n    ((Ident 0 11)(Colon 11 1)(White_space 12 1)(Dimension 13 3)(Eof 16 0))\n    ((Ident 0 11)(Colon 11 1)(White_space 12 1)(Percentage 13 4)(Eof 17 0))\n    ((Ident 0 4)(Colon 4 1)(White_space 5 1)(Number 6 1)(White_space 7 1)(Number 8 1)(White_space 9 1)(Ident 10 3)(Eof 13 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Dimension 8 6)(Eof 14 0)) ")],
     _ap_=[0,caml_new_string("")],
     _ar_=[0,caml_new_string("numbers")],
     _aw_=
      [1,
       caml_new_string
        ("\n    ((Error 0 8))\n    ((Error 0 1))\n    ((Error 0 3)) ")],
     _ax_=[0,caml_new_string("")],
     _az_=[0,caml_new_string("badly_quoted")],
     _aE_=
      [1,
       caml_new_string
        (" ((String 0 6)(String 6 5)(String 11 3)(White_space 14 1)(String 15 4)(White_space 19 1)(String 20 4)(Eof 24 0)) ")],
     _aF_=[0,caml_new_string("")],
     _aH_=[0,caml_new_string("quoted")],
     _aM_=
      [1,
       caml_new_string
        ("\n    ((Ident 0 5)(Colon 5 1)(White_space 6 1)(Hash 7 4)(Eof 11 0))\n    ((Ident 0 5)(Colon 5 1)(White_space 6 1)(Function 7 4)(Number 11 3)(Delim 14 1)(Number 15 1)(Delim 16 1)(Number 17 1)(Rparen 18 1)(Eof 19 0))\n    ((Ident 0 5)(Colon 5 1)(White_space 6 1)(Function 7 4)(Number 11 3)(Delim 14 1)(Number 15 1)(Delim 16 1)(Number 17 1)(Rparen 18 1)(Eof 19 0)) ")],
     _aN_=[0,caml_new_string("")],
     _aP_=[0,caml_new_string("colors")],
     _aU_=
      [1,
       caml_new_string
        (" ((Atkeyword 0 7)(White_space 7 1)(String 8 9)(Semi 17 1)(Eof 18 0)) ")],
     _aV_=[0,caml_new_string("")],
     _aX_=[0,caml_new_string("import")],
     _a2_=[1,caml_new_string(" ((Ident 0 5)(Delim 5 1)(Eof 6 0)) ")],
     _a3_=[0,caml_new_string("")],
     _a5_=[0,caml_new_string("red example")],
     _a__=
      [1,
       caml_new_string
        ("\n    ((Uri 0 30)(Eof 30 0))\n    ((Uri 0 29)(Eof 29 0))\n    ((Uri 0 30)(Eof 30 0)) ")],
     _a$_=[0,caml_new_string("")],
     _bb_=[0,caml_new_string("url")],
     _bg_=
      [1,
       caml_new_string
        ("\n    ((String 0 15)(Eof 15 0))\n    ((String 0 51)(Eof 51 0))\n    ((String 0 49)(Eof 49 0)) ")],
     _bh_=[0,caml_new_string("")],
     _bj_=[0,caml_new_string("escape")],
     _bI_=
      [0,
       caml_new_string
        ("\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6")],
     _bp_=[12,10,0],
     _bq_=[0,0],
     _bn_=[0,caml_new_string("got")],
     _bo_=[0,caml_new_string("expected")],
     _bt_=
      [1,
       caml_new_string
        ("\n      x --> (Ok ())\n      3 --> (Ok ())\n      3in --> (Ok ())\n      3% --> (Ok ())\n      #fff --> (Ok ())\n      1 0 auto --> (Ok ())\n      'Hello World' --> (Ok ())\n      rgb(0,0,0) --> (Ok ()) ")],
     _bu_=[0,caml_new_string("")],
     _bw_=[0,caml_new_string("values")],
     _bB_=
      [1,
       caml_new_string
        ('\n      flex: 1 0 auto --> (Ok (flex "1 0 auto"))\n      content: \'Hello World\' --> (Ok (content "\'Hello World\'"))\n      content: foo; --> (Error ("Unexpected token" (expected Eof) (got Semi)))\n      content: bar  --> (Ok (content bar)) ')],
     _bC_=[0,caml_new_string("")],
     _bE_=[0,caml_new_string("declaration")],
     _bK_=
      [1,
       caml_new_string
        ("\n    content: '\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6' --> (Ok\n     (content\n      \"'\\226\\134\\144 \\226\\134\\145 \\226\\134\\146 \\226\\134\\147 \\226\\134\\148 \\226\\134\\149 \\226\\135\\170 \\226\\134\\185 \\226\\172\\136 \\226\\134\\152 \\226\\159\\190 \\226\\134\\182'\"))\n    \"\\226\\134\\144 \\226\\134\\145 \\226\\134\\146 \\226\\134\\147 \\226\\134\\148 \\226\\134\\149 \\226\\135\\170 \\226\\134\\185 \\226\\172\\136 \\226\\134\\152 \\226\\159\\190 \\226\\134\\182\" ")],
     _bL_=[0,caml_new_string("")],
     _bN_=[0,caml_new_string("unicode")],
     _bS_=
      [1,
       caml_new_string
        ('\n    flex: 1 0 auto --> (Ok ((flex "1 0 auto")))\n    flex: 1 0 auto; --> (Ok ((flex "1 0 auto")))\n    background: #5d9ab2 url("img_tree.png") no-repeat top left;margin-left: 200px --> (Ok\n     ((background "#5d9ab2 url(\\"img_tree.png\\") no-repeat top left")\n      (margin-left 200px)))\n    ;;;;; --> (Ok ())\n    flex: 1 0 auto ;; other : sa  --> (Ok ((flex "1 0 auto") (other sa))) ')],
     _bT_=[0,caml_new_string("")],
     _bV_=[0,caml_new_string("declaration list")],
     _eZ_=[0,-81804554],
     _e0_=[0,1],
     _eV_=[0,caml_new_string("None")],
     _eW_=[0,caml_new_string("Backwards")],
     _eX_=[0,caml_new_string("Both")],
     _eU_=[0,caml_new_string("Forwards")],
     _eR_=[0,caml_new_string("Alternate_reverse")],
     _eS_=[0,caml_new_string("Reverse")],
     _eT_=[0,caml_new_string("Alternate")],
     _eQ_=[0,caml_new_string("Normal")],
     _eP_=[0,[8,0,0,[0,2],[12,115,0]],caml_new_string("%.2fs")],
     _eO_=
      [0,
       [8,0,0,0,[12,32,[8,0,0,0,[12,32,[2,0,0]]]]],
       caml_new_string("%f %f %s")],
     _eM_=[0,caml_new_string("Wrap")],
     _eN_=[0,caml_new_string("Nowrap")],
     _eL_=[0,caml_new_string("Wrap_reverse")],
     _eH_=[0,caml_new_string("Column_reverse")],
     _eI_=[0,caml_new_string("Row_reverse")],
     _eJ_=[0,caml_new_string("Row")],
     _eK_=[0,caml_new_string("Column")],
     _eG_=[0,caml_new_string(" ")],
     _eC_=[0,caml_new_string("Wavy")],
     _eB_=[0,caml_new_string("Solid")],
     _eE_=[0,caml_new_string("Double")],
     _eF_=[0,caml_new_string("Dashed")],
     _eD_=[0,caml_new_string("Dotted")],
     _ey_=[0,caml_new_string("None")],
     _ez_=[0,caml_new_string("Underline")],
     _eA_=[0,caml_new_string("Line_through")],
     _ex_=[0,caml_new_string("Overline")],
     _ev_=[0,caml_new_string("Collapse")],
     _ew_=[0,caml_new_string("Separate")],
     _eh_=[0,caml_new_string("None")],
     _ei_=[0,caml_new_string("Solid")],
     _ej_=[0,caml_new_string("Hidden")],
     _ek_=[0,caml_new_string("Ridge")],
     _el_=[0,caml_new_string("Double")],
     _em_=[0,caml_new_string("Dotted")],
     _en_=[0,caml_new_string("Dashed")],
     _eo_=[0,caml_new_string("Inset")],
     _ep_=[0,caml_new_string("Groove")],
     _eq_=[0,caml_new_string("Outset")],
     _ee_=[0,caml_new_string("None")],
     _ef_=[0,caml_new_string("Left")],
     _eg_=[0,caml_new_string("Right")],
     _ed_=[0,caml_new_string("Normal")],
     _ec_=[0,caml_new_string("Small_caps")],
     _d$_=[0,caml_new_string("Bold")],
     _ea_=[0,caml_new_string("Lighter")],
     _eb_=[0,caml_new_string("Normal")],
     _d__=[0,caml_new_string("Bolder")],
     _d7_=[0,caml_new_string("Italic")],
     _d8_=[0,caml_new_string("Oblique")],
     _d9_=[0,caml_new_string("Normal")],
     _d6_=[0,caml_new_string(",")],
     _d2_=[0,caml_new_string("Auto")],
     _d3_=[0,caml_new_string("Hidden")],
     _d4_=[0,caml_new_string("Scroll")],
     _d5_=[0,caml_new_string("Visible")],
     _d0_=[0,caml_new_string("Collapse")],
     _d1_=[0,caml_new_string("Visible")],
     _dZ_=[0,caml_new_string("Hidden")],
     _dQ_=[0,caml_new_string("None")],
     _dR_=[0,caml_new_string("Flex")],
     _dS_=[0,caml_new_string("Table")],
     _dT_=[0,caml_new_string("List_item")],
     _dU_=[0,caml_new_string("Inline_flex")],
     _dW_=[0,caml_new_string("Inline_block")],
     _dX_=[0,caml_new_string("Inline")],
     _dY_=[0,caml_new_string("Inline_table")],
     _dV_=[0,caml_new_string("Block")],
     _dP_=[0,caml_new_string("Content_box")],
     _dO_=[0,caml_new_string("Border_box")],
     _dL_=
      [0,[2,0,[11,caml_new_string(": "),[2,0,0]]],caml_new_string("%s: %s")],
     _dM_=[0,caml_new_string(";")],
     _dK_=[0,caml_new_string("Auto")],
     _du_=
      [0,
       [8,0,0,[0,2],[11,caml_new_string("rem"),0]],
       caml_new_string("%.2frem")],
     _dv_=
      [0,[8,0,0,[0,2],[11,caml_new_string("vw"),0]],caml_new_string("%.2fvw")],
     _dw_=
      [0,[8,0,0,[0,2],[11,caml_new_string("vh"),0]],caml_new_string("%.2fvh")],
     _dx_=[0,[4,3,0,0,[11,caml_new_string("px"),0]],caml_new_string("%ipx")],
     _dy_=
      [0,[8,0,0,[0,2],[11,caml_new_string("pt"),0]],caml_new_string("%.2fpt")],
     _dz_=[0,[4,3,0,0,[11,caml_new_string("em"),0]],caml_new_string("%iem")],
     _dA_=
      [0,[8,0,0,[0,2],[11,caml_new_string("ch"),0]],caml_new_string("%.2fch")],
     _dB_=[0,[8,0,0,[0,2],[12,37,0]],caml_new_string("%.2f%%")],
     _c9_=[0,caml_new_string("Rem")],
     _c__=[0,caml_new_string("Vw")],
     _c$_=[0,caml_new_string("Vh")],
     _da_=[0,caml_new_string("Px")],
     _db_=[0,caml_new_string("Pt")],
     _dc_=[0,caml_new_string("Em")],
     _dd_=[0,caml_new_string("Ch")],
     _de_=[0,caml_new_string("Percent")],
     _cO_=[0,caml_new_string("Center")],
     _cP_=[0,caml_new_string("Left")],
     _cQ_=[0,caml_new_string("Bottom")],
     _cR_=[0,caml_new_string("Middle")],
     _cS_=[0,caml_new_string("Top")],
     _cT_=[0,caml_new_string("Right")],
     _cU_=[0,caml_new_string("Justify")],
     _cK_=
      [0,
       [11,
        caml_new_string("rgba("),
        [4,
         3,
         0,
         0,
         [12,44,[4,3,0,0,[12,44,[4,3,0,0,[12,44,[8,0,0,[0,2],[12,41,0]]]]]]]]],
       caml_new_string("rgba(%i,%i,%i,%.2f)")],
     _cL_=
      [0,
       [11,
        caml_new_string("rgb("),
        [4,3,0,0,[12,44,[4,3,0,0,[12,44,[4,3,0,0,[12,41,0]]]]]]],
       caml_new_string("rgb(%i,%i,%i)")],
     _cM_=
      [0,
       [11,
        caml_new_string("hsla("),
        [4,
         3,
         0,
         0,
         [12,
          44,
          [8,
           0,
           0,
           [0,0],
           [12,
            37,
            [12,44,[8,0,0,[0,0],[12,37,[12,44,[8,0,0,partial$0,partial]]]]]]]]]],
       caml_new_string("hsla(%i,%.0f%%,%.0f%%,%.2f)")],
     _cN_=
      [0,
       [11,
        caml_new_string("hsl("),
        [4,
         3,
         0,
         0,
         [12,44,[8,0,0,[0,0],[12,37,[12,44,[8,0,0,[0,0],[12,37,[12,41,0]]]]]]]]],
       caml_new_string("hsl(%i,%.0f%%,%.0f%%)")],
     _cJ_=
      [0,
       [11,caml_new_string("var("),[2,0,[12,41,0]]],
       caml_new_string("var(%s)")],
     _ct_=[0,caml_new_string("RGBA")],
     _cu_=[0,caml_new_string("Name")],
     _cv_=[0,caml_new_string("HSLA")],
     _cw_=[0,caml_new_string("Hex")],
     _cs_=[0,caml_new_string("Var")],
     _cj_=[0,caml_new_string("a")],
     _ck_=[0,caml_new_string("l")],
     _cl_=[0,caml_new_string("s")],
     _cm_=[0,caml_new_string("h")],
     _ca_=[0,caml_new_string("a")],
     _cb_=[0,caml_new_string("b")],
     _cc_=[0,caml_new_string("g")],
     _cd_=[0,caml_new_string("r")],
     _b3_=[0,caml_new_string("Initial")],
     _b4_=[0,caml_new_string("Inherit")],
     _er_=[0,4202101],
     _es_=[0,437082891],
     _et_=[0,847852583],
     _eu_=[0,-57574468],
     _e2_=
      [1,
       caml_new_string
        ('\n    flex: 1.000000 1.000000 auto;overflow: scroll\n    flex: 1.000000 1.000000 auto;overflow: scroll\n    display: inline-flex;flex-direction: column;flex-wrap: nowrap;border: dashed\n    display: inline-flex;flex-direction: column;flex-wrap: nowrap;border: dashed\n    color: rgb(100,100,100)\n    color: rgb(100,100,100)\n    color: hsl(100,75%,60%)\n    color: hsl(100,75%,60%)\n    content: ";"\n    content: ";" ')],
     _e3_=[0,caml_new_string("")],
     _e5_=
      [0,
       caml_new_string("to_string_css -> of_string_css_exn -> to_string_css")];
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _iX_=sexp[1],_iY_=caml_string_compare(_iX_,cst_atkeyword);
        if(0 <= _iY_)
         if(0 < _iY_)
          {var _iZ_=caml_string_compare(_iX_,cst_lcurly);
           if(0 <= _iZ_)
            if(0 < _iZ_)
             var
              _i0_=caml_string_compare(_iX_,cst_rparen),
              switch$0=
               0 <= _i0_
                ?0 < _i0_
                  ?caml_string_notequal(_iX_,cst_semi)
                    ?caml_string_notequal(_iX_,cst_string)
                      ?caml_string_notequal(_iX_,cst_uri)
                        ?caml_string_notequal(_iX_,cst_white_space)?22:16
                        :7
                      :2
                    :15
                  :13
                :caml_string_notequal(_iX_,cst_lparen)
                  ?caml_string_notequal(_iX_,cst_number)
                    ?caml_string_notequal(_iX_,cst_percentage)
                      ?caml_string_notequal(_iX_,cst_rbracket)
                        ?caml_string_notequal(_iX_,cst_rcurly)?22:9
                        :11
                      :5
                    :4
                  :12;
            else
             var switch$0=8;
           else
            var
             _i1_=caml_string_compare(_iX_,cst_error),
             switch$0=
              0 <= _i1_
               ?0 < _i1_
                 ?caml_string_notequal(_iX_,cst_function)
                   ?caml_string_notequal(_iX_,cst_hash)
                     ?caml_string_notequal(_iX_,cst_ident)
                       ?caml_string_notequal(_iX_,cst_lbracket)?22:10
                       :0
                     :3
                   :18
                 :21
               :caml_string_notequal(_iX_,cst_colon)
                 ?caml_string_notequal(_iX_,cst_comment)
                   ?caml_string_notequal(_iX_,cst_delim)
                     ?caml_string_notequal(_iX_,cst_dimension)
                       ?caml_string_notequal(_iX_,cst_eof)?22:19
                       :6
                     :20
                   :17
                 :14}
         else
          var switch$0=1;
        else
         {var _i2_=caml_string_compare(_iX_,cst_Lcurly);
          if(0 <= _i2_)
           if(0 < _i2_)
            var
             _i3_=caml_string_compare(_iX_,cst_Rparen),
             switch$0=
              0 <= _i3_
               ?0 < _i3_
                 ?caml_string_notequal(_iX_,cst_Semi)
                   ?caml_string_notequal(_iX_,cst_String)
                     ?caml_string_notequal(_iX_,cst_Uri)
                       ?caml_string_notequal(_iX_,cst_White_space)?22:16
                       :7
                     :2
                   :15
                 :13
               :caml_string_notequal(_iX_,cst_Lparen)
                 ?caml_string_notequal(_iX_,cst_Number)
                   ?caml_string_notequal(_iX_,cst_Percentage)
                     ?caml_string_notequal(_iX_,cst_Rbracket)
                       ?caml_string_notequal(_iX_,cst_Rcurly)?22:9
                       :11
                     :5
                   :4
                 :12;
           else
            var switch$0=8;
          else
           var
            _i4_=caml_string_compare(_iX_,cst_Eof),
            switch$0=
             0 <= _i4_
              ?0 < _i4_
                ?caml_string_notequal(_iX_,cst_Error)
                  ?caml_string_notequal(_iX_,cst_Function)
                    ?caml_string_notequal(_iX_,cst_Hash)
                      ?caml_string_notequal(_iX_,cst_Ident)
                        ?caml_string_notequal(_iX_,cst_Lbracket)?22:10
                        :0
                      :3
                    :18
                  :21
                :19
              :caml_string_notequal(_iX_,cst_Atkeyword)
                ?caml_string_notequal(_iX_,cst_Colon)
                  ?caml_string_notequal(_iX_,cst_Comment)
                    ?caml_string_notequal(_iX_,cst_Delim)
                      ?caml_string_notequal(_iX_,cst_Dimension)?22:6
                      :20
                    :17
                  :14
                :1}
        switch(switch$0)
         {case 0:return 0;
          case 1:return 1;
          case 2:return 2;
          case 3:return 3;
          case 4:return 4;
          case 5:return 5;
          case 6:return 6;
          case 7:return 7;
          case 8:return 8;
          case 9:return 9;
          case 10:return 10;
          case 11:return 11;
          case 12:return 12;
          case 13:return 13;
          case 14:return 14;
          case 15:return 15;
          case 16:return 16;
          case 17:return 17;
          case 18:return 18;
          case 19:return 19;
          case 20:return 20;
          case 21:return 21
          }}
      else
       {var _i5_=sexp[1];
        if(! _i5_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _i6_=_i5_[1];
        if(0 !== _i6_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var _i7_=_i6_[1],_i8_=caml_string_compare(_i7_,cst_atkeyword$0);
        if(0 <= _i8_)
         if(0 < _i8_)
          {var _i9_=caml_string_compare(_i7_,cst_lcurly$0);
           if(0 <= _i9_)
            if(0 < _i9_)
             var
              _i__=caml_string_compare(_i7_,cst_rparen$0),
              switch$1=
               0 <= _i__
                ?0 < _i__
                  ?caml_string_notequal(_i7_,cst_semi$0)
                    ?caml_string_notequal(_i7_,cst_string$0)
                      ?caml_string_notequal(_i7_,cst_uri$0)
                        ?caml_string_notequal(_i7_,cst_white_space$0)?22:16
                        :7
                      :2
                    :15
                  :13
                :caml_string_notequal(_i7_,cst_lparen$0)
                  ?caml_string_notequal(_i7_,cst_number$0)
                    ?caml_string_notequal(_i7_,cst_percentage$0)
                      ?caml_string_notequal(_i7_,cst_rbracket$0)
                        ?caml_string_notequal(_i7_,cst_rcurly$0)?22:9
                        :11
                      :5
                    :4
                  :12;
            else
             var switch$1=8;
           else
            var
             _i$_=caml_string_compare(_i7_,cst_error$0),
             switch$1=
              0 <= _i$_
               ?0 < _i$_
                 ?caml_string_notequal(_i7_,cst_function$0)
                   ?caml_string_notequal(_i7_,cst_hash$0)
                     ?caml_string_notequal(_i7_,cst_ident$0)
                       ?caml_string_notequal(_i7_,cst_lbracket$0)?22:10
                       :0
                     :3
                   :18
                 :21
               :caml_string_notequal(_i7_,cst_colon$0)
                 ?caml_string_notequal(_i7_,cst_comment$0)
                   ?caml_string_notequal(_i7_,cst_delim$0)
                     ?caml_string_notequal(_i7_,cst_dimension$0)
                       ?caml_string_notequal(_i7_,cst_eof$0)?22:19
                       :6
                     :20
                   :17
                 :14}
         else
          var switch$1=1;
        else
         {var _ja_=caml_string_compare(_i7_,cst_Lcurly$0);
          if(0 <= _ja_)
           if(0 < _ja_)
            var
             _jb_=caml_string_compare(_i7_,cst_Rparen$0),
             switch$1=
              0 <= _jb_
               ?0 < _jb_
                 ?caml_string_notequal(_i7_,cst_Semi$0)
                   ?caml_string_notequal(_i7_,cst_String$0)
                     ?caml_string_notequal(_i7_,cst_Uri$0)
                       ?caml_string_notequal(_i7_,cst_White_space$0)?22:16
                       :7
                     :2
                   :15
                 :13
               :caml_string_notequal(_i7_,cst_Lparen$0)
                 ?caml_string_notequal(_i7_,cst_Number$0)
                   ?caml_string_notequal(_i7_,cst_Percentage$0)
                     ?caml_string_notequal(_i7_,cst_Rbracket$0)
                       ?caml_string_notequal(_i7_,cst_Rcurly$0)?22:9
                       :11
                     :5
                   :4
                 :12;
           else
            var switch$1=8;
          else
           var
            _jc_=caml_string_compare(_i7_,cst_Eof$0),
            switch$1=
             0 <= _jc_
              ?0 < _jc_
                ?caml_string_notequal(_i7_,cst_Error$0)
                  ?caml_string_notequal(_i7_,cst_Function$0)
                    ?caml_string_notequal(_i7_,cst_Hash$0)
                      ?caml_string_notequal(_i7_,cst_Ident$0)
                        ?caml_string_notequal(_i7_,cst_Lbracket$0)?22:10
                        :0
                      :3
                    :18
                  :21
                :19
              :caml_string_notequal(_i7_,cst_Atkeyword$0)
                ?caml_string_notequal(_i7_,cst_Colon$0)
                  ?caml_string_notequal(_i7_,cst_Comment$0)
                    ?caml_string_notequal(_i7_,cst_Delim$0)
                      ?caml_string_notequal(_i7_,cst_Dimension$0)?22:6
                      :20
                    :17
                  :14
                :1}
        switch(switch$1)
         {case 0:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 1:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 7:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 8:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 9:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 10:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 11:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 12:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 13:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 14:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 15:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 16:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 17:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 18:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 19:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 20:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 21:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc,sexp)}
    function sexp_of_t(param)
     {switch(param)
       {case 0:return _a_;
        case 1:return _b_;
        case 2:return _c_;
        case 3:return _d_;
        case 4:return _e_;
        case 5:return _f_;
        case 6:return _g_;
        case 7:return _h_;
        case 8:return _i_;
        case 9:return _j_;
        case 10:return _k_;
        case 11:return _l_;
        case 12:return _m_;
        case 13:return _n_;
        case 14:return _o_;
        case 15:return _p_;
        case 16:return _q_;
        case 17:return _r_;
        case 18:return _s_;
        case 19:return _t_;
        case 20:return _u_;
        default:return _v_}}
    function equal(x_003,x_004)
     {var match=caml_int_compare(x_003,x_004);return 0 === match?1:0}
    function source(t){return t[1]}
    function next_pos(t){return t[2] + t[3] | 0}
    function is_next_eof(t)
     {var _iV_=caml_ml_string_length(t[1]),_iW_=next_pos(t);
      return caml_call2(Core_kernel_Int[118][1],_iW_,_iV_)}
    function next_char(t)
     {var _iU_=next_pos(t);return runtime.caml_string_get(t[1],_iU_)}
    function consume_1(t){t[3] = t[3] + 1 | 0;return 0}
    function one_char_token(t,tok)
     {if(caml_call2(Core_kernel_Int[118][3],t[3],0))
       {consume_1(t);t[4] = tok;return 0}
      throw [0,Assert_failure,_w_]}
    var
     Error_happened=
      [248,
       cst_Css_gen_Css_tokenizer_Error_happened,
       runtime.caml_fresh_oo_id(0)];
    function error(t){t[4] = 21;throw Error_happened}
    function accept(t,f)
     {if(! is_next_eof(t))
       if(caml_call1(f,next_char(t))){consume_1(t);return 1}
      return 0}
    function accept_char(t,ch)
     {return accept(t,caml_call1(Core_kernel_Char[41],ch))}
    function accept_string(t,str)
     {var pos=next_pos(t),n=caml_ml_string_length(str);
      return caml_call2
               (Core_kernel_Int[118][4],
                pos + n | 0,
                caml_ml_string_length(t[1]))
              ?0
              :caml_call3(Core_kernel_String[45],t[1],pos,str)
                ?(t[3] = t[3] + n | 0,1)
                :0}
    function expect(t,f){return accept(t,f)?0:error(t)}
    function expect_char(t,ch)
     {return expect(t,caml_call1(Core_kernel_Char[41],ch))}
    function many(t,f)
     {for(;;)
       {if(! is_next_eof(t))
         if(caml_call1(f,next_char(t))){consume_1(t);continue}
        return 0}}
    function many1(t,f){expect(t,f);return many(t,f)}
    function nmstart(c)
     {var _iT_=caml_call1(Core_kernel_Char[12],c);
      return _iT_?_iT_:caml_call2(Core_kernel_Char[41],c,95)}
    function nmchar(c)
     {var _iP_=caml_call1(Core_kernel_Char[12],c);
      if(_iP_)
       var _iQ_=_iP_;
      else
       {var _iR_=caml_call1(Core_kernel_Char[11],c);
        if(_iR_)
         var _iQ_=_iR_;
        else
         {var _iS_=caml_call2(Core_kernel_Char[41],c,95);
          if(! _iS_)return caml_call2(Core_kernel_Char[41],c,45);
          var _iQ_=_iS_}}
      return _iQ_}
    function ident(t){expect(t,nmstart);return many(t,nmchar)}
    function ident_or_function(t)
     {ident(t);return accept_char(t,40)?(t[4] = 18,0):(t[4] = 0,0)}
    function is_whitespace(param)
     {var
       _iO_=param - 9 | 0,
       switch$0=4 < _iO_ >>> 0?23 === _iO_?1:0:2 === _iO_?0:1;
      return switch$0?1:0}
    function quoted_string(t,quote)
     {var _iM_=next_char(t);
      if(caml_call2(Core_kernel_Char[41],_iM_,quote))
       {consume_1(t);
        for(;;)
         {many
           (t,
            function(c)
             {var
               _iN_=c - 10 | 0,
               switch$0=3 < _iN_ >>> 0?82 === _iN_?1:0:1 === _iN_?0:1;
              return switch$0?0:caml_call2(Core_kernel_Char[41],c,quote)?0:1});
          if(accept_char(t,92))
           {if(accept_char(t,quote))continue;
            var c=next_char(t);
            if(11 <= c)
             if(14 <= c)
              var switch$0=0;
             else
              {var switcher=c - 11 | 0;
               switch(switcher)
                {case 0:var switch$0=0;break;
                 case 1:var switch$0=1;break;
                 default:consume_1(t);accept_char(t,10);continue}}
            else
             var switch$0=10 <= c?1:0;
            if(switch$0){consume_1(t);continue}
            consume_1(t);
            continue}
          return expect_char(t,quote)}}
      throw [0,Assert_failure,_x_]}
    function _H_(t)
     {var new_off=next_pos(t);
      t[2] = new_off;
      t[3] = 0;
      if(is_next_eof(t)){t[4] = 19;return 0}
      var quote$0=next_char(t);
      if(is_whitespace(quote$0)){many(t,is_whitespace);t[4] = 16;return 0}
      if(91 <= quote$0)
       {if(117 <= quote$0)
         {if(! (126 <= quote$0))
           {var switcher=quote$0 - 117 | 0;
            switch(switcher)
             {case 0:
               if(caml_call2(Core_kernel_Int[118][3],t[3],0))
                {var _iL_=next_char(t);
                 if(caml_call2(Core_kernel_Char[41],_iL_,117))
                  {if(accept_string(t,cst_url))
                    {many(t,is_whitespace);
                     var
                      quote=next_char(t),
                      switch$0=34 === quote?0:39 === quote?0:(error(t),1);
                     if(! switch$0)quoted_string(t,quote);
                     many(t,is_whitespace);
                     expect_char(t,41);
                     t[4] = 7;
                     return 0}
                   return ident_or_function(t)}
                 throw [0,Assert_failure,_E_]}
               throw [0,Assert_failure,_F_];
              case 6:return one_char_token(t,8);
              case 8:return one_char_token(t,9)
              }}}
        else
         if(! (94 <= quote$0))
          {var switcher$0=quote$0 - 91 | 0;
           switch(switcher$0)
            {case 0:return one_char_token(t,10);
             case 1:break;
             default:return one_char_token(t,11)}}}
      else
       {var switcher$1=quote$0 - 34 | 0;
        if(! (30 < switcher$1 >>> 0))
         switch(switcher$1)
          {case 1:
            if(caml_call2(Core_kernel_Int[118][3],t[3],0))
             {var _iJ_=next_char(t);
              if(caml_call2(Core_kernel_Char[41],_iJ_,35))
               {consume_1(t);many1(t,nmchar);t[4] = 3;return 0}
              throw [0,Assert_failure,_A_]}
            throw [0,Assert_failure,_B_];
           case 6:return one_char_token(t,12);
           case 7:return one_char_token(t,13);
           case 11:
            consume_1(t);
            if(! is_next_eof(t))
             if(nmstart(next_char(t)))return ident_or_function(t);
            t[4] = 20;
            return 0;
           case 13:
            if(caml_call2(Core_kernel_Int[118][3],t[3],0))
             {if(accept_string(t,cst$0))
               for(;;)
                {many(t,function(param){return 42 === param?0:1});
                 if(accept_string(t,cst$1)){t[4] = 17;return 0}
                 if(accept_char(t,42))continue;
                 return error(t)}
              expect_char(t,47);
              t[4] = 20;
              return 0}
            throw [0,Assert_failure,_G_];
           case 24:return one_char_token(t,14);
           case 25:return one_char_token(t,15);
           case 30:
            if(caml_call2(Core_kernel_Int[118][3],t[3],0))
             {var _iK_=next_char(t);
              if(caml_call2(Core_kernel_Char[41],_iK_,64))
               {consume_1(t);accept_char(t,45);ident(t);t[4] = 1;return 0}
              throw [0,Assert_failure,_C_]}
            throw [0,Assert_failure,_D_];
           case 0:
           case 5:
            if(caml_call2(Core_kernel_Int[118][3],t[3],0))
             {quoted_string(t,quote$0);t[4] = 2;return 0}
            throw [0,Assert_failure,_y_];
           case 2:
           case 3:
           case 4:
           case 8:
           case 9:
           case 10:
           case 26:
           case 27:
           case 28:
           case 29:break;
           default:
            if(caml_call2(Core_kernel_Int[118][3],t[3],0))
             {if(accept_char(t,46))
               many1(t,Core_kernel_Char[11]);
              else
               {many1(t,Core_kernel_Char[11]);
                if(accept_char(t,46))many1(t,Core_kernel_Char[11])}
              return accept_char(t,37)
                      ?(t[4] = 5,0)
                      :accept_char(t,45)
                        ?(ident(t),t[4] = 6,0)
                        :accept(t,nmstart)?(many(t,nmchar),t[4] = 6,0):(t[4] = 4,0)}
            throw [0,Assert_failure,_z_]}}
      return nmstart(quote$0)?ident_or_function(t):(consume_1(t),t[4] = 20,0)}
    function next(t)
     {if(equal(t[4],21))return 0;
      try
       {var _iH_=_H_(t);return _iH_}
      catch(_iI_)
       {_iI_ = caml_wrap_exception(_iI_);
        if(_iI_ === Error_happened)return 0;
        throw _iI_}}
    function create(s){var t=[0,s,0,0,16];next(t);return t}
    function slice(t){return [0,t[2],t[3]]}
    function current(t){return t[4]}
    function current_text(t)
     {if(equal(t[4],19))return cst$2;
      var match=slice(t),len=match[2],pos=match[1];
      return caml_call3(Core_kernel_String[1],t[1],pos,len)}
    function test(s)
     {var t=create(s),acc=0;
      for(;;)
       {var
         match=slice(t),
         len=match[2],
         start=match[1],
         acc$0=[0,[0,t[4],start,len],acc];
        if(! equal(t[4],19))
         if(! equal(t[4],21)){next(t);var acc=acc$0;continue}
        var
         _iD_=caml_call1(Core_kernel_List[32],acc$0),
         _iE_=
          function(param)
           {var
             v2=param[3],
             v1=param[2],
             v0=param[1],
             v0$0=sexp_of_t(v0),
             v1$0=caml_call1(Core_kernel[339],v1),
             v2$0=caml_call1(Core_kernel[339],v2);
            return [1,[0,v0$0,[0,v1$0,[0,v2$0,0]]]]},
         _iF_=caml_call1(caml_call1(Core_kernel[400],_iE_),_iD_),
         _iG_=caml_call1(Core_kernel_Sexp[80],_iF_);
        return caml_call1(Core_kernel[32],_iG_)}}
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
    function _I_(param)
     {test(cst$3);
      var
       _iC_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$0),
         324,
         6696,
         6700,
         6706];
      return caml_call1(Expect_test_collector$0[1],_iC_)}
    var
     _J_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$1),
       324,
       6696,
       6707,
       6722],
     _M_=
      [0,
       [0,
        _L_,
        _K_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$2),
         324,
         6696,
         6700,
         6706],
        _J_],
       0],
     _O_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$4),
       322,
       6661,
       6661,
       6723],
     _P_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8);
    caml_call9
     (Expect_test_collector$0[3],
      _P_,
      _O_,
      cst_css_gen_src_css_tokenizer_ml$3,
      _N_,
      0,
      _M_,
      0,
      Inline_test_config,
      _I_);
    var
     Expect_test_collector$1=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _Q_(param)
     {test(cst$4);
      var
       _iB_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$5),
         329,
         6781,
         6785,
         6791];
      return caml_call1(Expect_test_collector$1[1],_iB_)}
    var
     _R_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$6),
       330,
       6792,
       6796,
       6910],
     _U_=
      [0,
       [0,
        _T_,
        _S_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$7),
         329,
         6781,
         6785,
         6791],
        _R_],
       0],
     _W_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$9),
       327,
       6728,
       6728,
       6911],
     _X_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$0);
    caml_call9
     (Expect_test_collector$1[3],
      _X_,
      _W_,
      cst_css_gen_src_css_tokenizer_ml$8,
      _V_,
      0,
      _U_,
      0,
      Inline_test_config,
      _Q_);
    var
     Expect_test_collector$2=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _Y_(param)
     {test(cst_foo_bar_baz);
      test(cst_foo_bar);
      test(cst_foo_bar$0);
      test(cst_foo_bar$1);
      var
       _iA_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$10),
         338,
         7025,
         7029,
         7035];
      return caml_call1(Expect_test_collector$2[1],_iA_)}
    var
     _Z_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$11),
       339,
       7036,
       7040,
       7205],
     _aa_=
      [0,
       [0,
        _$_,
        ___,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$12),
         338,
         7025,
         7029,
         7035],
        _Z_],
       0],
     _ac_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$14),
       333,
       6916,
       6916,
       7206],
     _ad_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$1);
    caml_call9
     (Expect_test_collector$2[3],
      _ad_,
      _ac_,
      cst_css_gen_src_css_tokenizer_ml$13,
      _ab_,
      0,
      _aa_,
      0,
      Inline_test_config,
      _Y_);
    var
     Expect_test_collector$3=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _ae_(param)
     {test(cst$5);
      var
       _iz_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$15),
         348,
         7255,
         7259,
         7265];
      return caml_call1(Expect_test_collector$3[1],_iz_)}
    var
     _af_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$16),
       348,
       7255,
       7266,
       7298],
     _ai_=
      [0,
       [0,
        _ah_,
        _ag_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$17),
         348,
         7255,
         7259,
         7265],
        _af_],
       0],
     _ak_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$19),
       346,
       7211,
       7211,
       7299],
     _al_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$2);
    caml_call9
     (Expect_test_collector$3[3],
      _al_,
      _ak_,
      cst_css_gen_src_css_tokenizer_ml$18,
      _aj_,
      0,
      _ai_,
      0,
      Inline_test_config,
      _ae_);
    var
     Expect_test_collector$4=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _am_(param)
     {test(cst_margin_0_5in);
      test(cst_line_height_3cm);
      test(cst_line_height_120);
      test(cst_grid_0_1_foo);
      test(cst_margin_0_5_in);
      var
       _iy_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$20),
         357,
         7460,
         7464,
         7470];
      return caml_call1(Expect_test_collector$4[1],_iy_)}
    var
     _an_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$21),
       358,
       7471,
       7475,
       7899],
     _aq_=
      [0,
       [0,
        _ap_,
        _ao_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$22),
         357,
         7460,
         7464,
         7470],
        _an_],
       0],
     _as_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$24),
       351,
       7304,
       7304,
       7900],
     _at_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$3);
    caml_call9
     (Expect_test_collector$4[3],
      _at_,
      _as_,
      cst_css_gen_src_css_tokenizer_ml$23,
      _ar_,
      0,
      _aq_,
      0,
      Inline_test_config,
      _am_);
    var
     Expect_test_collector$5=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _au_(param)
     {test(cst_foo_bar$2);
      test(cst$6);
      test(cst$7);
      var
       _ix_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$25),
         370,
         7984,
         7988,
         7994];
      return caml_call1(Expect_test_collector$5[1],_ix_)}
    var
     _av_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$26),
       370,
       7984,
       7995,
       8054],
     _ay_=
      [0,
       [0,
        _ax_,
        _aw_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$27),
         370,
         7984,
         7988,
         7994],
        _av_],
       0],
     _aA_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$29),
       366,
       7905,
       7905,
       8055],
     _aB_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$4);
    caml_call9
     (Expect_test_collector$5[3],
      _aB_,
      _aA_,
      cst_css_gen_src_css_tokenizer_ml$28,
      _az_,
      0,
      _ay_,
      0,
      Inline_test_config,
      _au_);
    var
     Expect_test_collector$6=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _aC_(param)
     {test(cst_Foo_Bar);
      var
       _iw_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$30),
         378,
         8124,
         8128,
         8134];
      return caml_call1(Expect_test_collector$6[1],_iw_)}
    var
     _aD_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$31),
       379,
       8135,
       8139,
       8256],
     _aG_=
      [0,
       [0,
        _aF_,
        _aE_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$32),
         378,
         8124,
         8128,
         8134],
        _aD_],
       0],
     _aI_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$34),
       376,
       8060,
       8060,
       8257],
     _aJ_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$5);
    caml_call9
     (Expect_test_collector$6[3],
      _aJ_,
      _aI_,
      cst_css_gen_src_css_tokenizer_ml$33,
      _aH_,
      0,
      _aG_,
      0,
      Inline_test_config,
      _aC_);
    var
     Expect_test_collector$7=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _aK_(param)
     {test(cst_color_f00);
      test(cst_color_rgb_255_0_0);
      test(cst_color_rgb_255_0_0$0);
      var
       _iv_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$35),
         386,
         8377,
         8381,
         8387];
      return caml_call1(Expect_test_collector$7[1],_iv_)}
    var
     _aL_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$36),
       387,
       8388,
       8392,
       8755],
     _aO_=
      [0,
       [0,
        _aN_,
        _aM_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$37),
         386,
         8377,
         8381,
         8387],
        _aL_],
       0],
     _aQ_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$39),
       382,
       8262,
       8262,
       8756],
     _aR_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$6);
    caml_call9
     (Expect_test_collector$7[3],
      _aR_,
      _aQ_,
      cst_css_gen_src_css_tokenizer_ml$38,
      _aP_,
      0,
      _aO_,
      0,
      Inline_test_config,
      _aK_);
    var
     Expect_test_collector$8=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _aS_(param)
     {test(cst_import_foo_bar);
      var
       _iu_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$40),
         395,
         8819,
         8823,
         8829];
      return caml_call1(Expect_test_collector$8[1],_iu_)}
    var
     _aT_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$41),
       395,
       8819,
       8830,
       8903],
     _aW_=
      [0,
       [0,
        _aV_,
        _aU_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$42),
         395,
         8819,
         8823,
         8829],
        _aT_],
       0],
     _aY_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$44),
       393,
       8761,
       8761,
       8904],
     _aZ_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$7);
    caml_call9
     (Expect_test_collector$8[3],
      _aZ_,
      _aY_,
      cst_css_gen_src_css_tokenizer_ml$43,
      _aX_,
      0,
      _aW_,
      0,
      Inline_test_config,
      _aS_);
    var
     Expect_test_collector$9=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _a0_(param)
     {test(cst_red);
      var
       _it_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$45),
         400,
         8958,
         8962,
         8968];
      return caml_call1(Expect_test_collector$9[1],_it_)}
    var
     _a1_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$46),
       400,
       8958,
       8969,
       9008],
     _a4_=
      [0,
       [0,
        _a3_,
        _a2_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$47),
         400,
         8958,
         8962,
         8968],
        _a1_],
       0],
     _a6_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$49),
       398,
       8909,
       8909,
       9009],
     _a7_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$8);
    caml_call9
     (Expect_test_collector$9[3],
      _a7_,
      _a6_,
      cst_css_gen_src_css_tokenizer_ml$48,
      _a5_,
      0,
      _a4_,
      0,
      Inline_test_config,
      _a0_);
    var
     Expect_test_collector$10=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _a8_(param)
     {test(cst_url_http_wwww_google_com);
      test(cst_url_http_wwww_google_com$0);
      test(cst_url_http_wwww_google_com$1);
      var
       _is_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$50),
         407,
         9166,
         9170,
         9176];
      return caml_call1(Expect_test_collector$10[1],_is_)}
    var
     _a9_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$51),
       408,
       9177,
       9181,
       9267],
     _ba_=
      [0,
       [0,
        _a$_,
        _a__,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$52),
         407,
         9166,
         9170,
         9176],
        _a9_],
       0],
     _bc_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$54),
       403,
       9014,
       9014,
       9268],
     _bd_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$9);
    caml_call9
     (Expect_test_collector$10[3],
      _bd_,
      _bc_,
      cst_css_gen_src_css_tokenizer_ml$53,
      _bb_,
      0,
      _ba_,
      0,
      Inline_test_config,
      _a8_);
    var
     Expect_test_collector$11=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _be_(param)
     {test(cst_test_19abf2_2);
      test(cst_010_xFFa_o123_n_u_12345_aa);
      test(cst$8);
      var
       _ir_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$55),
         418,
         9454,
         9458,
         9464];
      return caml_call1(Expect_test_collector$11[1],_ir_)}
    var
     _bf_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$56),
       419,
       9465,
       9469,
       9564],
     _bi_=
      [0,
       [0,
        _bh_,
        _bg_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$57),
         418,
         9454,
         9458,
         9464],
        _bf_],
       0],
     _bk_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_ml$59),
       414,
       9273,
       9273,
       9565],
     _bl_=
      caml_call1
       (Expect_test_common_File[4][3],cst_29a79425bfd5284345e8bd1cbb9c0ef8$10);
    caml_call9
     (Expect_test_collector$11[3],
      _bl_,
      _bk_,
      cst_css_gen_src_css_tokenizer_ml$58,
      _bj_,
      0,
      _bi_,
      0,
      Inline_test_config,
      _be_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_css_gen$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _bm_=[0,t_of_sexp,sexp_of_t,equal],
     Css_gen_Css_tokenizer=
      [0,create,_bm_,current,slice,current_text,source,next];
    caml_register_global(792,Css_gen_Css_tokenizer,"Css_gen__Css_tokenizer");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_css_gen$2);
    caml_call1(Expect_test_collector[4][1],cst_css_gen_src_css_parser_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_css_gen$3,cst$9);
    function next$0(ct)
     {for(;;){next(ct);if(caml_call2(_bm_[3],ct[4],17))continue;return 0}}
    function skip_white_space(ct)
     {for(;;){if(caml_call2(_bm_[3],ct[4],16)){next$0(ct);continue}return 0}}
    function accept$0(ct,expected)
     {var got=ct[4];return caml_call2(_bm_[3],got,expected)?(next$0(ct),1):0}
    function expect$0(ct,expected)
     {var got=ct[4];
      if(caml_call2(_bm_[3],got,expected))return next$0(ct);
      var
       _io_=[0,[1,[0,_bn_,[0,caml_call1(_bm_[2],got),0]]],0],
       _ip_=[0,[1,[0,_bo_,[0,caml_call1(_bm_[2],expected),0]]],_io_],
       _iq_=
        [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_Unexpected_token),_ip_]];
      return caml_call1(Core_kernel[241],_iq_)}
    function many$0(ct,f){for(;;){if(caml_call1(f,ct))continue;return 0}}
    function any(ct)
     {var match=ct[4];
      switch(match)
       {case 10:
         next$0(ct);
         skip_white_space(ct);
         expect_any(ct);
         expect$0(ct,11);
         var res=1;
         break;
        case 12:
         next$0(ct);
         skip_white_space(ct);
         expect_any(ct);
         expect$0(ct,13);
         var res=1;
         break;
        case 18:
         next$0(ct);
         skip_white_space(ct);
         many$0(ct,any);
         expect$0(ct,13);
         var res=1;
         break;
        case 0:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 20:next$0(ct);var res=1;break;
        default:var res=0}
      if(res)skip_white_space(ct);
      return res}
    function expect_any(ct)
     {if(any(ct))return 0;
      var _in_=caml_call1(Sexplib0_Sexp_conv[7],cst_Expected_any);
      return caml_call1(Core_kernel[241],_in_)}
    function f(ct)
     {var _ii_=any(ct);
      if(_ii_)
       var _ij_=_ii_;
      else
       {var
         _ik_=
          accept$0(ct,8)
           ?(skip_white_space(ct),
             many$0
              (ct,
               function(ct)
                {var _il_=f(ct);
                 if(_il_)
                  var _im_=_il_;
                 else
                  {if(accept$0(ct,15)){skip_white_space(ct);return 1}
                   var _im_=0}
                 return _im_}),
             expect$0(ct,9),
             skip_white_space(ct),
             1)
           :0;
        if(_ik_)
         var _ij_=_ik_;
        else
         {if(accept$0(ct,1)){skip_white_space(ct);return 1}var _ij_=0}}
      return _ij_}
    function expect_value(ct)
     {var _ig_=f(ct)?(many$0(ct,f),1):0;
      if(_ig_)return 0;
      var _ih_=caml_call1(Sexplib0_Sexp_conv[7],cst_Expected_value);
      return caml_call1(Core_kernel[241],_ih_)}
    function declaration(ct)
     {var match=slice(ct),ident_len=match[2],ident_start=match[1];
      if(accept$0(ct,0))
       {skip_white_space(ct);
        expect$0(ct,14);
        skip_white_space(ct);
        var value_start=slice(ct)[1];
        expect_value(ct);
        var
         next_token_start=slice(ct)[1],
         source=ct[1],
         _ie_=
          caml_call3
           (Core_kernel_String[1],
            source,
            value_start,
            next_token_start - value_start | 0),
         _if_=caml_call2(Core_kernel_String[60],0,_ie_);
        return [0,
                [0,
                 caml_call3
                  (Core_kernel_String[1],source,ident_start,ident_len),
                 _if_]]}
      return 0}
    function expect_declaration(ct)
     {var match=declaration(ct);
      if(match)
       {var match$0=match[1],value=match$0[2],field=match$0[1];
        return [0,field,value]}
      var _id_=caml_call1(Sexplib0_Sexp_conv[7],cst_Expected_declaration);
      return caml_call1(Core_kernel[241],_id_)}
    function expect_declaration_list(ct)
     {var res=[0,0];
      function add(kv)
       {if(kv)
         {var match=kv[1],v=match[2],k=match[1];
          res[1] = [0,[0,k,v],res[1]];
          return 0}
        return 0}
      skip_white_space(ct);
      add(declaration(ct));
      many$0
       (ct,
        function(ct)
         {return accept$0(ct,15)
                  ?(skip_white_space(ct),add(declaration(ct)),1)
                  :0});
      return caml_call1(Core_kernel_List[32],res[1])}
    function parse(parser_f,s)
     {var ct=create(s);
      for(;;)
       {if(caml_call2(_bm_[3],ct[4],17)){next(ct);continue}
        var
         _ic_=
          function(param)
           {var res=caml_call1(parser_f,ct);expect$0(ct,19);return res};
        return caml_call2(Core_kernel_Or_error[33],0,_ic_)}}
    function validate_value(_ib_){return parse(expect_value,_ib_)}
    function parse_declaration_list(s)
     {return parse(expect_declaration_list,s)}
    function test_parser(p,sexp_of_arg,s)
     {var
       r=parse(p,s),
       _h$_=
        [0,
         [2,
          0,
          [11,
           cst$10,
           [24,
            _bq_,
            function(param,custom_printf_001)
             {var
               _ia_=
                caml_call2
                 (Core_kernel_Or_error[13],sexp_of_arg,custom_printf_001);
              return caml_call2(Sexplib0_Sexp[13],0,_ia_)},
            _bp_]]],
         cst_s_sexp_arg_Or_error_t];
      return caml_call3(Core_kernel[238],_h$_,s,r)}
    var
     Expect_test_collector$12=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _br_(param)
     {var _h8_=Core_kernel_Unit[14];
      function test(_h__){return test_parser(expect_value,_h8_,_h__)}
      test(cst_x);
      test(cst_3);
      test(cst_3in);
      test(cst_3$0);
      test(cst_fff);
      test(cst_1_0_auto);
      test(cst_Hello_World);
      test(cst_rgb_0_0_0);
      var
       _h9_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$0),
         199,
         4629,
         4633,
         4639];
      return caml_call1(Expect_test_collector$12[1],_h9_)}
    var
     _bs_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$1),
       200,
       4640,
       4644,
       4843],
     _bv_=
      [0,
       [0,
        _bu_,
        _bt_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$2),
         199,
         4629,
         4633,
         4639],
        _bs_],
       0],
     _bx_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$4),
       189,
       4416,
       4416,
       4844],
     _by_=
      caml_call1
       (Expect_test_common_File[4][3],cst_faa6d4d2dcc84185f8e15aee50111c07);
    caml_call9
     (Expect_test_collector$12[3],
      _by_,
      _bx_,
      cst_css_gen_src_css_parser_ml$3,
      _bw_,
      0,
      _bv_,
      0,
      Inline_test_config,
      _br_);
    var
     Expect_test_collector$13=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _bz_(param)
     {function _h5_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[447],v0),
         v1$0=caml_call1(Core_kernel[447],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      function test(_h7_){return test_parser(expect_declaration,_h5_,_h7_)}
      test(cst_flex_1_0_auto);
      test(cst_content_Hello_World);
      test(cst_content_foo);
      test(cst_content_bar);
      var
       _h6_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$5),
         219,
         5171,
         5175,
         5181];
      return caml_call1(Expect_test_collector$13[1],_h6_)}
    var
     _bA_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$6),
       220,
       5182,
       5186,
       5425],
     _bD_=
      [0,
       [0,
        _bC_,
        _bB_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$7),
         219,
         5171,
         5175,
         5181],
        _bA_],
       0],
     _bF_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$9),
       211,
       4849,
       4849,
       5426],
     _bG_=
      caml_call1
       (Expect_test_common_File[4][3],cst_faa6d4d2dcc84185f8e15aee50111c07$0);
    caml_call9
     (Expect_test_collector$13[3],
      _bG_,
      _bF_,
      cst_css_gen_src_css_parser_ml$8,
      _bE_,
      0,
      _bD_,
      0,
      Inline_test_config,
      _bz_);
    var
     Expect_test_collector$14=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _bH_(param)
     {test_parser
       (expect_declaration,
        function(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[447],v0),
           v1$0=caml_call1(Core_kernel[447],v1);
          return [1,[0,v0$0,[0,v1$0,0]]]},
        cst_content);
      var _h3_=caml_call1(Core_kernel_Sexp[81],_bI_);
      caml_call1(Core_kernel[32],_h3_);
      var
       _h4_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$10),
         232,
         5703,
         5707,
         5713];
      return caml_call1(Expect_test_collector$14[1],_h4_)}
    var
     _bJ_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$11),
       233,
       5714,
       5718,
       6138],
     _bM_=
      [0,
       [0,
        _bL_,
        _bK_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$12),
         232,
         5703,
         5707,
         5713],
        _bJ_],
       0],
     _bO_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$14),
       227,
       5431,
       5431,
       6139],
     _bP_=
      caml_call1
       (Expect_test_common_File[4][3],cst_faa6d4d2dcc84185f8e15aee50111c07$1);
    caml_call9
     (Expect_test_collector$14[3],
      _bP_,
      _bO_,
      cst_css_gen_src_css_parser_ml$13,
      _bN_,
      0,
      _bM_,
      0,
      Inline_test_config,
      _bH_);
    var
     Expect_test_collector$15=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _bQ_(param)
     {function _hZ_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[447],v0),
         v1$0=caml_call1(Core_kernel[447],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var _h0_=caml_call1(Core_kernel[400],_hZ_);
      function test(_h2_)
       {return test_parser(expect_declaration_list,_h0_,_h2_)}
      test(cst_flex_1_0_auto$0);
      test(cst_flex_1_0_auto$1);
      test
       (cst_background_5d9ab2_url_img_tree_png_no_repeat_top_left_margin_left_200px);
      test(cst$11);
      test(cst_flex_1_0_auto_other_sa);
      var
       _h1_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$15),
         247,
         6465,
         6469,
         6475];
      return caml_call1(Expect_test_collector$15[1],_h1_)}
    var
     _bR_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$16),
       248,
       6476,
       6480,
       6866],
     _bU_=
      [0,
       [0,
        _bT_,
        _bS_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$17),
         247,
         6465,
         6469,
         6475],
        _bR_],
       0],
     _bW_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$19),
       240,
       6144,
       6144,
       6867],
     _bX_=
      caml_call1
       (Expect_test_common_File[4][3],cst_faa6d4d2dcc84185f8e15aee50111c07$2);
    caml_call9
     (Expect_test_collector$15[3],
      _bX_,
      _bW_,
      cst_css_gen_src_css_parser_ml$18,
      _bV_,
      0,
      _bU_,
      0,
      Inline_test_config,
      _bQ_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_css_gen$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Css_gen_Css_parser=[0,validate_value,parse_declaration_list];
    caml_register_global(797,Css_gen_Css_parser,"Css_gen__Css_parser");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_css_gen$5);
    caml_call1(Expect_test_collector[4][1],cst_css_gen_src_css_gen_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_css_gen$6,cst$12);
    function t_of_sexp$0(t)
     {function _hW_(sexp)
       {if(1 === sexp[0])
         {var _hX_=sexp[1];
          if(_hX_)
           {var _hY_=_hX_[2];
            if(_hY_)
             if(! _hY_[2])
              {var
                v1=_hY_[1],
                v0=_hX_[1],
                v0$0=caml_call1(Core_kernel_Stable[266],v0),
                v1$0=caml_call1(Core_kernel_Stable[266],v1);
               return [0,v0$0,v1$0]}}}
        return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)}
      return caml_call2(Core_kernel_Stable[258],_hW_,t)}
    function sexp_of_t$0(v)
     {function _hV_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel_Stable[265],v0),
         v1$0=caml_call1(Core_kernel_Stable[265],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      return caml_call2(Core_kernel_Stable[257],_hV_,v)}
    function compare(a_001,b_002)
     {function _hU_(a_003,b_004)
       {var
         t_006=a_003[2],
         t_005=a_003[1],
         t_008=b_004[2],
         t_007=b_004[1],
         n=caml_call2(Core_kernel_Stable[354],t_005,t_007);
        return 0 === n?caml_call2(Core_kernel_Stable[354],t_006,t_008):n}
      return caml_call3(Core_kernel_Stable[357],_hU_,a_001,b_002)}
    var
     _bY_=
      caml_call1
       (Bin_prot_Shape[7],
        [0,Core_kernel_Stable[59],[0,Core_kernel_Stable[59],0]]),
     _bZ_=caml_call1(Core_kernel_Stable[150],_bY_),
     _b0_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),0,_bZ_],0],
     _b1_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_7_4),
     group=caml_call2(Bin_prot_Shape[6],_b1_,_b0_),
     _b2_=caml_call1(Bin_prot_Shape[2][1],cst_t$0),
     bin_shape_t=caml_call1(caml_call2(Bin_prot_Shape[14],group,_b2_),0);
    function bin_size_t(v)
     {function _hR_(param)
       {var
         v2=param[2],
         v1=param[1],
         _hS_=caml_call1(Core_kernel_Stable[3],v1),
         size=caml_call2(Bin_prot_Common[23],0,_hS_),
         _hT_=caml_call1(Core_kernel_Stable[3],v2);
        return caml_call2(Bin_prot_Common[23],size,_hT_)}
      return caml_call2(Core_kernel_Stable[18],_hR_,v)}
    function bin_write_t(buf,pos,v)
     {function _hQ_(buf,pos,param)
       {var
         v2=param[2],
         v1=param[1],
         pos$0=caml_call3(Core_kernel_Stable[61],buf,pos,v1);
        return caml_call3(Core_kernel_Stable[61],buf,pos$0,v2)}
      return caml_call3(caml_call1(Core_kernel_Stable[152],_hQ_),buf,pos,v)}
    var bin_writer_t=[0,bin_size_t,bin_write_t];
    function bin_read_t(buf,pos_ref,vint)
     {function _hP_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel_Stable[63],buf,pos_ref),
         v2=caml_call2(Core_kernel_Stable[63],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call3
              (caml_call1(Core_kernel_Stable[155],_hP_),buf,pos_ref,vint)}
    function bin_read_t$0(buf,pos_ref)
     {function _hO_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel_Stable[63],buf,pos_ref),
         v2=caml_call2(Core_kernel_Stable[63],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call2(caml_call1(Core_kernel_Stable[154],_hO_),buf,pos_ref)}
    var
     bin_reader_t=[0,bin_read_t$0,bin_read_t],
     bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t];
    function sanitize_sexp(s)
     {var
       _hM_=caml_call1(Core_kernel_Sexp[81],s),
       _hN_=caml_call1(Core_kernel_String[28],_hM_);
      return caml_call3(Core_kernel_String[43],_hN_,cst$14,cst$13)}
    function css_global_values_of_sexp(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        return caml_string_notequal(atom,cst_Inherit)
                ?caml_string_notequal(atom,cst_Initial)
                  ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                  :418396260
                :-72987685}
      var _hK_=sexp[1];
      if(_hK_)
       {var _hL_=_hK_[1];
        if(0 === _hL_[0])
         {var atom$0=_hL_[1];
          return caml_string_notequal(atom$0,cst_Inherit$0)
                  ?caml_string_notequal(atom$0,cst_Initial$0)
                    ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                    :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$1,sexp)
                  :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$1,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$1,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$1,sexp)}
    function css_global_values_of_sexp$0(sexp)
     {try
       {var _hI_=css_global_values_of_sexp(sexp);return _hI_}
      catch(_hJ_)
       {_hJ_ = caml_wrap_exception(_hJ_);
        if(_hJ_ === Sexplib0_Sexp_conv_error[17])
         return caml_call2(Sexplib0_Sexp_conv_error[19],tp_loc$2,sexp);
        throw _hJ_}}
    function sexp_of_css_global_values(param)
     {return 418396260 <= param?_b3_:_b4_}
    var
     _b5_=[0,caml_call2(Bin_prot_Shape[10],cst_Initial$1,0),0],
     _b6_=[0,caml_call2(Bin_prot_Shape[10],cst_Inherit$1,0),_b5_],
     _b7_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_21_2),
     _b8_=caml_call2(Bin_prot_Shape[12],_b7_,_b6_),
     _b9_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_css_global_values),0,_b8_],0],
     _b__=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_20_0),
     group$0=caml_call2(Bin_prot_Shape[6],_b__,_b9_),
     _b$_=caml_call1(Bin_prot_Shape[2][1],cst_css_global_values$0),
     bin_shape_css_global_values=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_b$_),0);
    function compare_css_global_values(a_009,b_010)
     {if(caml_call2(Ppx_compare_lib[1],a_009,b_010))return 0;
      if(418396260 <= a_009)
       {if(418396260 === b_010)return 0}
      else
       if(-72987685 === b_010)return 0;
      return caml_int_compare(a_009,b_010)}
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$3,sexp);
      var
       field_sexps=sexp[1],
       r_field=[0,0],
       g_field=[0,0],
       b_field=[0,0],
       a_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _hz_=param[1];
          if(1 === _hz_[0])
           {var _hA_=_hz_[1];
            if(_hA_)
             {var _hB_=_hA_[1];
              if(0 === _hB_[0])
               {var _hC_=_hA_[2],_hD_=_hB_[1];
                if(! _hC_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_hD_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _hC_[2])
                 {var tail=param[2],field_sexp=_hC_[1];
                  if(caml_string_notequal(_hD_,cst_a))
                   if(caml_string_notequal(_hD_,cst_b))
                    if(caml_string_notequal(_hD_,cst_g))
                     if(caml_string_notequal(_hD_,cst_r))
                      {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_hD_,extra[1]]}
                     else
                      if(r_field[1])
                       duplicates[1] = [0,_hD_,duplicates[1]];
                      else
                       {var fvalue=caml_call1(Core_kernel[340],field_sexp);
                        r_field[1] = [0,fvalue]}
                    else
                     if(g_field[1])
                      duplicates[1] = [0,_hD_,duplicates[1]];
                     else
                      {var fvalue$0=caml_call1(Core_kernel[340],field_sexp);
                       g_field[1] = [0,fvalue$0]}
                   else
                    if(b_field[1])
                     duplicates[1] = [0,_hD_,duplicates[1]];
                    else
                     {var fvalue$1=caml_call1(Core_kernel[340],field_sexp);
                      b_field[1] = [0,fvalue$1]}
                  else
                   if(a_field[1])
                    duplicates[1] = [0,_hD_,duplicates[1]];
                   else
                    {var
                      fvalue$2=
                       caml_call2
                        (Core_kernel[432],Core_kernel_Percent[5],field_sexp);
                     a_field[1] = [0,fvalue$2]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$3,_hz_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc$3,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$3,extra[1],sexp);
        var _hE_=r_field[1],_hF_=g_field[1],_hG_=b_field[1],_hH_=a_field[1];
        if(_hE_)
         if(_hF_)
          if(_hG_)
           if(_hH_)
            {var
              a_value=_hH_[1],
              b_value=_hG_[1],
              g_value=_hF_[1],
              r_value=_hE_[1];
             return [0,r_value,g_value,b_value,a_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc$3,
                 sexp,
                 [0,
                  [0,0 === r_field[1]?1:0,cst_r$0],
                  [0,
                   [0,0 === g_field[1]?1:0,cst_g$0],
                   [0,
                    [0,0 === b_field[1]?1:0,cst_b$0],
                    [0,[0,0 === a_field[1]?1:0,cst_a$0],0]]]])}}
    function sexp_of_t$1(param)
     {var
       v_a=param[4],
       v_b=param[3],
       v_g=param[2],
       v_r=param[1],
       arg=caml_call2(Core_kernel[431],Core_kernel_Percent[6],v_a),
       bnds=[0,[1,[0,_ca_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[339],v_b),
       bnds$0=[0,[1,[0,_cb_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[339],v_g),
       bnds$1=[0,[1,[0,_cc_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_r),
       bnds$2=[0,[1,[0,_cd_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    var
     _ce_=
      [0,[0,cst_a$1,caml_call1(Core_kernel[420],Core_kernel_Percent[11])],0],
     _cf_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_r$1,Core_kernel[327]],
         [0,
          [0,cst_g$1,Core_kernel[327]],
          [0,[0,cst_b$1,Core_kernel[327]],_ce_]]]),
     _cg_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$1),0,_cf_],0],
     _ch_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_29_6),
     group$1=caml_call2(Bin_prot_Shape[6],_ch_,_cg_),
     _ci_=caml_call1(Bin_prot_Shape[2][1],cst_t$2),
     bin_shape_t$0=caml_call1(caml_call2(Bin_prot_Shape[14],group$1,_ci_),0);
    function bin_size_t$0(param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       _hv_=caml_call1(Core_kernel[328],v1),
       size=caml_call2(Bin_prot_Common[23],0,_hv_),
       _hw_=caml_call1(Core_kernel[328],v2),
       size$0=caml_call2(Bin_prot_Common[23],size,_hw_),
       _hx_=caml_call1(Core_kernel[328],v3),
       size$1=caml_call2(Bin_prot_Common[23],size$0,_hx_),
       _hy_=caml_call2(Core_kernel[421],Core_kernel_Percent[7],v4);
      return caml_call2(Bin_prot_Common[23],size$1,_hy_)}
    function bin_write_t$0(buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel[329],buf,pos,v1),
       pos$1=caml_call3(Core_kernel[329],buf,pos$0,v2),
       pos$2=caml_call3(Core_kernel[329],buf,pos$1,v3);
      return caml_call3
              (caml_call1(Core_kernel[422],Core_kernel_Percent[8]),
               buf,
               pos$2,
               v4)}
    var bin_writer_t$0=[0,bin_size_t$0,bin_write_t$0];
    function bin_read_t$1(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_css_gen_src_css_gen_ml_Color_T_RGBA_t,
               pos_ref[1])}
    function bin_read_t$2(buf,pos_ref)
     {var
       v_r=caml_call2(Core_kernel[331],buf,pos_ref),
       v_g=caml_call2(Core_kernel[331],buf,pos_ref),
       v_b=caml_call2(Core_kernel[331],buf,pos_ref),
       v_a=
        caml_call2
         (caml_call1(Core_kernel[424],Core_kernel_Percent[9]),buf,pos_ref);
      return [0,v_r,v_g,v_b,v_a]}
    var
     bin_reader_t$0=[0,bin_read_t$2,bin_read_t$1],
     bin_t$0=[0,bin_shape_t$0,bin_writer_t$0,bin_reader_t$0];
    function compare$0(a_011,b_012)
     {if(caml_call2(Ppx_compare_lib[1],a_011,b_012))return 0;
      var n=caml_call2(Core_kernel[335],a_011[1],b_012[1]);
      if(0 === n)
       {var n$0=caml_call2(Core_kernel[335],a_011[2],b_012[2]);
        if(0 === n$0)
         {var n$1=caml_call2(Core_kernel[335],a_011[3],b_012[3]);
          return 0 === n$1
                  ?caml_call3
                    (Core_kernel[428],Core_kernel_Percent[22],a_011[4],b_012[4])
                  :n$1}
        return n$0}
      return n}
    function create$0(r,g,b,a,param){return [0,r,g,b,a]}
    function t_of_sexp$2(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$4,sexp);
      var
       field_sexps=sexp[1],
       h_field=[0,0],
       s_field=[0,0],
       l_field=[0,0],
       a_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _hm_=param[1];
          if(1 === _hm_[0])
           {var _hn_=_hm_[1];
            if(_hn_)
             {var _ho_=_hn_[1];
              if(0 === _ho_[0])
               {var _hp_=_hn_[2],_hq_=_ho_[1];
                if(! _hp_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_hq_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _hp_[2])
                 {var tail=param[2],field_sexp=_hp_[1];
                  if(caml_string_notequal(_hq_,cst_a$2))
                   if(caml_string_notequal(_hq_,cst_h))
                    if(caml_string_notequal(_hq_,cst_l))
                     if(caml_string_notequal(_hq_,cst_s))
                      {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_hq_,extra[1]]}
                     else
                      if(s_field[1])
                       duplicates[1] = [0,_hq_,duplicates[1]];
                      else
                       {var fvalue=caml_call1(Core_kernel_Percent[5],field_sexp);
                        s_field[1] = [0,fvalue]}
                    else
                     if(l_field[1])
                      duplicates[1] = [0,_hq_,duplicates[1]];
                     else
                      {var fvalue$0=caml_call1(Core_kernel_Percent[5],field_sexp);
                       l_field[1] = [0,fvalue$0]}
                   else
                    if(h_field[1])
                     duplicates[1] = [0,_hq_,duplicates[1]];
                    else
                     {var fvalue$1=caml_call1(Core_kernel[340],field_sexp);
                      h_field[1] = [0,fvalue$1]}
                  else
                   if(a_field[1])
                    duplicates[1] = [0,_hq_,duplicates[1]];
                   else
                    {var
                      fvalue$2=
                       caml_call2
                        (Core_kernel[432],Core_kernel_Percent[5],field_sexp);
                     a_field[1] = [0,fvalue$2]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$4,_hm_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc$4,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$4,extra[1],sexp);
        var _hr_=h_field[1],_hs_=s_field[1],_ht_=l_field[1],_hu_=a_field[1];
        if(_hr_)
         if(_hs_)
          if(_ht_)
           if(_hu_)
            {var
              a_value=_hu_[1],
              l_value=_ht_[1],
              s_value=_hs_[1],
              h_value=_hr_[1];
             return [0,h_value,s_value,l_value,a_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc$4,
                 sexp,
                 [0,
                  [0,0 === h_field[1]?1:0,cst_h$0],
                  [0,
                   [0,0 === s_field[1]?1:0,cst_s$0],
                   [0,
                    [0,0 === l_field[1]?1:0,cst_l$0],
                    [0,[0,0 === a_field[1]?1:0,cst_a$3],0]]]])}}
    function sexp_of_t$2(param)
     {var
       v_a=param[4],
       v_l=param[3],
       v_s=param[2],
       v_h=param[1],
       arg=caml_call2(Core_kernel[431],Core_kernel_Percent[6],v_a),
       bnds=[0,[1,[0,_cj_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel_Percent[6],v_l),
       bnds$0=[0,[1,[0,_ck_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel_Percent[6],v_s),
       bnds$1=[0,[1,[0,_cl_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_h),
       bnds$2=[0,[1,[0,_cm_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    var
     _cn_=
      [0,[0,cst_a$4,caml_call1(Core_kernel[420],Core_kernel_Percent[11])],0],
     _co_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_h$1,Core_kernel[327]],
         [0,
          [0,cst_s$1,Core_kernel_Percent[11]],
          [0,[0,cst_l$1,Core_kernel_Percent[11]],_cn_]]]),
     _cp_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$3),0,_co_],0],
     _cq_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_41_6),
     group$2=caml_call2(Bin_prot_Shape[6],_cq_,_cp_),
     _cr_=caml_call1(Bin_prot_Shape[2][1],cst_t$4),
     bin_shape_t$1=caml_call1(caml_call2(Bin_prot_Shape[14],group$2,_cr_),0);
    function bin_size_t$1(param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       _hi_=caml_call1(Core_kernel[328],v1),
       size=caml_call2(Bin_prot_Common[23],0,_hi_),
       _hj_=caml_call1(Core_kernel_Percent[7],v2),
       size$0=caml_call2(Bin_prot_Common[23],size,_hj_),
       _hk_=caml_call1(Core_kernel_Percent[7],v3),
       size$1=caml_call2(Bin_prot_Common[23],size$0,_hk_),
       _hl_=caml_call2(Core_kernel[421],Core_kernel_Percent[7],v4);
      return caml_call2(Bin_prot_Common[23],size$1,_hl_)}
    function bin_write_t$1(buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel[329],buf,pos,v1),
       pos$1=caml_call3(Core_kernel_Percent[8],buf,pos$0,v2),
       pos$2=caml_call3(Core_kernel_Percent[8],buf,pos$1,v3);
      return caml_call3
              (caml_call1(Core_kernel[422],Core_kernel_Percent[8]),
               buf,
               pos$2,
               v4)}
    var bin_writer_t$1=[0,bin_size_t$1,bin_write_t$1];
    function bin_read_t$3(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_css_gen_src_css_gen_ml_Color_T_HSLA_t,
               pos_ref[1])}
    function bin_read_t$4(buf,pos_ref)
     {var
       v_h=caml_call2(Core_kernel[331],buf,pos_ref),
       v_s=caml_call2(Core_kernel_Percent[9],buf,pos_ref),
       v_l=caml_call2(Core_kernel_Percent[9],buf,pos_ref),
       v_a=
        caml_call2
         (caml_call1(Core_kernel[424],Core_kernel_Percent[9]),buf,pos_ref);
      return [0,v_h,v_s,v_l,v_a]}
    var
     bin_reader_t$1=[0,bin_read_t$4,bin_read_t$3],
     bin_t$1=[0,bin_shape_t$1,bin_writer_t$1,bin_reader_t$1];
    function compare$1(a_015,b_016)
     {if(caml_call2(Ppx_compare_lib[1],a_015,b_016))return 0;
      var n=caml_call2(Core_kernel[335],a_015[1],b_016[1]);
      if(0 === n)
       {var n$0=caml_call2(Core_kernel_Percent[22],a_015[2],b_016[2]);
        if(0 === n$0)
         {var n$1=caml_call2(Core_kernel_Percent[22],a_015[3],b_016[3]);
          return 0 === n$1
                  ?caml_call3
                    (Core_kernel[428],Core_kernel_Percent[22],a_015[4],b_016[4])
                  :n$1}
        return n$0}
      return n}
    function create$1(h,s,l,a,param){return [0,h,s,l,a]}
    function t_of_sexp$3(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        try
         {var _hc_=css_global_values_of_sexp(sexp);return _hc_}
        catch(_hh_)
         {_hh_ = caml_wrap_exception(_hh_);
          if(_hh_ === Sexplib0_Sexp_conv_error[17])
           return caml_string_notequal(atom,cst_HSLA)
                   ?caml_string_notequal(atom,cst_Hex)
                     ?caml_string_notequal(atom,cst_Name)
                       ?caml_string_notequal(atom,cst_RGBA)
                         ?caml_string_notequal(atom,cst_Var)
                           ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                           :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$5,sexp)
                         :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$5,sexp)
                       :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$5,sexp)
                     :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$5,sexp)
                   :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$5,sexp);
          throw _hh_}}
      var _hd_=sexp[1];
      if(_hd_)
       {var _he_=_hd_[1];
        if(0 === _he_[0])
         {var sexp_args=_hd_[2],atom$0=_he_[1];
          if(caml_string_notequal(atom$0,cst_HSLA$0))
           {if(caml_string_notequal(atom$0,cst_Hex$0))
             {if(caml_string_notequal(atom$0,cst_Name$0))
               {if(caml_string_notequal(atom$0,cst_RGBA$0))
                 {if(caml_string_notequal(atom$0,cst_Var$0))
                   try
                    {var _hf_=css_global_values_of_sexp(sexp);return _hf_}
                   catch(_hg_)
                    {_hg_ = caml_wrap_exception(_hg_);
                     if(_hg_ === Sexplib0_Sexp_conv_error[17])
                      return caml_call1(Sexplib0_Sexp_conv_error[18],0);
                     throw _hg_}
                  if(sexp_args)
                   if(! sexp_args[2])
                    {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel[448],v0);
                     return [0,4298439,v0$0]}
                  return caml_call3
                          (Sexplib0_Sexp_conv_error[21],tp_loc$5,atom$0,sexp)}
                if(sexp_args)
                 if(! sexp_args[2])
                  {var v0$1=sexp_args[1],v0$2=t_of_sexp$1(v0$1);
                   return [0,912890036,v0$2]}
                return caml_call3
                        (Sexplib0_Sexp_conv_error[21],tp_loc$5,atom$0,sexp)}
              if(sexp_args)
               if(! sexp_args[2])
                {var v0$3=sexp_args[1],v0$4=caml_call1(Core_kernel[448],v0$3);
                 return [0,869834347,v0$4]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[21],tp_loc$5,atom$0,sexp)}
            if(sexp_args)
             if(! sexp_args[2])
              {var v0$5=sexp_args[1],v0$6=caml_call1(Core_kernel[448],v0$5);
               return [0,3603131,v0$6]}
            return caml_call3
                    (Sexplib0_Sexp_conv_error[21],tp_loc$5,atom$0,sexp)}
          if(sexp_args)
           if(! sexp_args[2])
            {var v0$7=sexp_args[1],v0$8=t_of_sexp$2(v0$7);
             return [0,802593344,v0$8]}
          return caml_call3(Sexplib0_Sexp_conv_error[21],tp_loc$5,atom$0,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$5,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$5,sexp)}
    function t_of_sexp$4(sexp)
     {try
       {var _ha_=t_of_sexp$3(sexp);return _ha_}
      catch(_hb_)
       {_hb_ = caml_wrap_exception(_hb_);
        if(_hb_ === Sexplib0_Sexp_conv_error[17])
         return caml_call2(Sexplib0_Sexp_conv_error[19],tp_loc$6,sexp);
        throw _hb_}}
    function sexp_of_t$3(v)
     {if(typeof v === "number")return sexp_of_css_global_values(v);
      var _g$_=v[1];
      if(4298439 === _g$_)
       {var v0=v[2];return [1,[0,_cs_,[0,caml_call1(Core_kernel[447],v0),0]]]}
      if(869834347 <= _g$_)
       {if(912890036 <= _g$_)
         {var v0$0=v[2];return [1,[0,_ct_,[0,sexp_of_t$1(v0$0),0]]]}
        var v0$1=v[2];
        return [1,[0,_cu_,[0,caml_call1(Core_kernel[447],v0$1),0]]]}
      if(802593344 <= _g$_)
       {var v0$2=v[2];return [1,[0,_cv_,[0,sexp_of_t$2(v0$2),0]]]}
      var v0$3=v[2];
      return [1,[0,_cw_,[0,caml_call1(Core_kernel[447],v0$3),0]]]}
    var
     _cx_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_58_8),
     _cy_=
      [0,caml_call2(Bin_prot_Shape[11],_cx_,bin_shape_css_global_values),0],
     _cz_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Var$1,[0,Core_kernel[435]]),_cy_],
     _cA_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Hex$1,[0,Core_kernel[435]]),_cz_],
     _cB_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Name$1,[0,Core_kernel[435]]),_cA_],
     _cC_=[0,caml_call2(Bin_prot_Shape[10],cst_HSLA$1,[0,bin_shape_t$1]),_cB_],
     _cD_=[0,caml_call2(Bin_prot_Shape[10],cst_RGBA$1,[0,bin_shape_t$0]),_cC_],
     _cE_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_53_6),
     _cF_=caml_call2(Bin_prot_Shape[12],_cE_,_cD_),
     _cG_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$5),0,_cF_],0],
     _cH_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_52_4),
     group$3=caml_call2(Bin_prot_Shape[6],_cH_,_cG_),
     _cI_=caml_call1(Bin_prot_Shape[2][1],cst_t$6),
     bin_shape_t$2=caml_call1(caml_call2(Bin_prot_Shape[14],group$3,_cI_),0);
    function bin_size_t$2(v)
     {if(typeof v === "number")return 4;
      var _g__=v[1];
      if(4298439 === _g__)
       {var args=v[2],size_args=caml_call1(Core_kernel[436],args);
        return caml_call2(Bin_prot_Common[23],size_args,4)}
      if(869834347 <= _g__)
       {if(912890036 <= _g__)
         {var args$0=v[2],size_args$0=bin_size_t$0(args$0);
          return caml_call2(Bin_prot_Common[23],size_args$0,4)}
        var args$1=v[2],size_args$1=caml_call1(Core_kernel[436],args$1);
        return caml_call2(Bin_prot_Common[23],size_args$1,4)}
      if(802593344 <= _g__)
       {var args$2=v[2],size_args$2=bin_size_t$1(args$2);
        return caml_call2(Bin_prot_Common[23],size_args$2,4)}
      var args$3=v[2],size_args$3=caml_call1(Core_kernel[436],args$3);
      return caml_call2(Bin_prot_Common[23],size_args$3,4)}
    function bin_write_t$2(buf,pos,v)
     {if(typeof v === "number")
       return 418396260 <= v
               ?caml_call3(Bin_prot_Write[29],buf,pos,418396260)
               :caml_call3(Bin_prot_Write[29],buf,pos,-72987685);
      var _g9_=v[1];
      if(4298439 === _g9_)
       {var args=v[2],pos$0=caml_call3(Bin_prot_Write[29],buf,pos,4298439);
        return caml_call3(Core_kernel[437],buf,pos$0,args)}
      if(869834347 <= _g9_)
       {if(912890036 <= _g9_)
         {var
           args$0=v[2],
           pos$1=caml_call3(Bin_prot_Write[29],buf,pos,912890036);
          return bin_write_t$0(buf,pos$1,args$0)}
        var
         args$1=v[2],
         pos$2=caml_call3(Bin_prot_Write[29],buf,pos,869834347);
        return caml_call3(Core_kernel[437],buf,pos$2,args$1)}
      if(802593344 <= _g9_)
       {var
         args$2=v[2],
         pos$3=caml_call3(Bin_prot_Write[29],buf,pos,802593344);
        return bin_write_t$1(buf,pos$3,args$2)}
      var args$3=v[2],pos$4=caml_call3(Bin_prot_Write[29],buf,pos,3603131);
      return caml_call3(Core_kernel[437],buf,pos$4,args$3)}
    var bin_writer_t$2=[0,bin_size_t$2,bin_write_t$2];
    function bin_read_t$5(buf,pos_ref,vint)
     {if(802593344 <= vint)
       {if(869834347 === vint)
         {var arg_1=caml_call2(Core_kernel[439],buf,pos_ref);
          return [0,869834347,arg_1]}
        if(912890036 === vint)
         {var arg_1$0=bin_read_t$2(buf,pos_ref);return [0,912890036,arg_1$0]}
        if(! (802593345 <= vint))
         {var arg_1$1=bin_read_t$4(buf,pos_ref);return [0,802593344,arg_1$1]}}
      else
       {if(3603131 === vint)
         {var arg_1$2=caml_call2(Core_kernel[439],buf,pos_ref);
          return [0,3603131,arg_1$2]}
        if(4298439 === vint)
         {var arg_1$3=caml_call2(Core_kernel[439],buf,pos_ref);
          return [0,4298439,arg_1$3]}}
      if(-72987685 === vint)return -72987685;
      if(418396260 === vint)return 418396260;
      throw Bin_prot_Common[13]}
    function bin_read_t$6(buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var _g7_=bin_read_t$5(buf,pos_ref,vint);return _g7_}
      catch(_g8_)
       {_g8_ = caml_wrap_exception(_g8_);
        if(_g8_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err,pos_ref[1]);
        throw _g8_}}
    var
     bin_reader_t$2=[0,bin_read_t$6,bin_read_t$5],
     bin_t$2=[0,bin_shape_t$2,bin_writer_t$2,bin_reader_t$2];
    function compare$2(a_019,b_020)
     {if(caml_call2(Ppx_compare_lib[1],a_019,b_020))return 0;
      if(typeof a_019 === "number")
       {var switch$0=-72987685 === b_020?0:418396260 === b_020?0:1;
        if(! switch$0)return compare_css_global_values(a_019,b_020)}
      else
       {var _g6_=a_019[1];
        if(4298439 === _g6_)
         {if(typeof b_020 !== "number")
           if(4298439 === b_020[1])
            {var right_030=b_020[2],left_029=a_019[2];
             return caml_call2(Core_kernel[443],left_029,right_030)}}
        else
         if(869834347 <= _g6_)
          {if(912890036 <= _g6_)
            {if(typeof b_020 !== "number")
              if(912890036 === b_020[1])
               {var right_022=b_020[2],left_021=a_019[2];
                return compare$0(left_021,right_022)}}
           else
            if(typeof b_020 !== "number")
             if(869834347 === b_020[1])
              {var right_026=b_020[2],left_025=a_019[2];
               return caml_call2(Core_kernel[443],left_025,right_026)}}
         else
          if(802593344 <= _g6_)
           {if(typeof b_020 !== "number")
             if(802593344 === b_020[1])
              {var right_024=b_020[2],left_023=a_019[2];
               return compare$1(left_023,right_024)}}
          else
           if(typeof b_020 !== "number")
            if(3603131 === b_020[1])
             {var right_028=b_020[2],left_027=a_019[2];
              return caml_call2(Core_kernel[443],left_027,right_028)}}
      return caml_compare(a_019,b_020)}
    caml_call1(Core_kernel_Sexpable[1],[0,t_of_sexp$4,sexp_of_t$3]);
    function to_string_css(c)
     {if(typeof c === "number")return sanitize_sexp(sexp_of_t$3(c));
      var _gZ_=c[1];
      if(4298439 === _gZ_)
       {var var$0=c[2];return caml_call2(Core_kernel[244],_cJ_,var$0)}
      if(869834347 <= _gZ_)
       {if(912890036 <= _gZ_)
         {var match=c[2],a=match[4],b=match[3],g=match[2],r=match[1];
          if(a)
           {var p=a[1],_g0_=caml_call1(Core_kernel_Percent[67],p);
            return caml_call5(Core_kernel[244],_cK_,r,g,b,_g0_)}
          return caml_call4(Core_kernel[244],_cL_,r,g,b)}
        var name=c[2];
        return name}
      if(802593344 <= _gZ_)
       {var
         match$0=c[2],
         a$0=match$0[4],
         l=match$0[3],
         s=match$0[2],
         h=match$0[1];
        if(a$0)
         {var
           p$0=a$0[1],
           _g1_=caml_call1(Core_kernel_Percent[67],p$0),
           _g2_=caml_call1(Core_kernel_Percent[69],l),
           _g3_=caml_call1(Core_kernel_Percent[69],s);
          return caml_call5(Core_kernel[244],_cM_,h,_g3_,_g2_,_g1_)}
        var
         _g4_=caml_call1(Core_kernel_Percent[69],l),
         _g5_=caml_call1(Core_kernel_Percent[69],s);
        return caml_call4(Core_kernel[244],_cN_,h,_g5_,_g4_)}
      var hex=c[2];
      return hex}
    function t_of_sexp$5(sexp)
     {try
       {if(0 === sexp[0])
         {var atom=sexp[1];
          if(caml_string_notequal(atom,cst_Bottom))
           if(caml_string_notequal(atom,cst_Center))
            if(caml_string_notequal(atom,cst_Justify))
             if(caml_string_notequal(atom,cst_Left))
              if(caml_string_notequal(atom,cst_Middle))
               if(caml_string_notequal(atom,cst_Right))
                if(caml_string_notequal(atom,cst_Top))
                 try
                  {var _gR_=css_global_values_of_sexp(sexp),_gV_=_gR_}
                 catch(_gX_)
                  {_gX_ = caml_wrap_exception(_gX_);
                   if(_gX_ !== Sexplib0_Sexp_conv_error[17])throw _gX_;
                   var _gV_=caml_call1(Sexplib0_Sexp_conv_error[18],0)}
                else
                 var _gV_=4202101;
               else
                var _gV_=-57574468;
              else
               var _gV_=15943541;
             else
              var _gV_=847852583;
            else
             var _gV_=-788068560;
           else
            var _gV_=980392437;
          else
           var _gV_=437082891}
        else
         {var _gS_=sexp[1];
          if(_gS_)
           {var _gT_=_gS_[1];
            if(0 === _gT_[0])
             {var atom$0=_gT_[1];
              try
               {var _gU_=css_global_values_of_sexp(sexp),_gV_=_gU_}
              catch(_gY_)
               {_gY_ = caml_wrap_exception(_gY_);
                if(_gY_ !== Sexplib0_Sexp_conv_error[17])throw _gY_;
                var
                 _gV_=
                  caml_string_notequal(atom$0,cst_Bottom$0)
                   ?caml_string_notequal(atom$0,cst_Center$0)
                     ?caml_string_notequal(atom$0,cst_Justify$0)
                       ?caml_string_notequal(atom$0,cst_Left$0)
                         ?caml_string_notequal(atom$0,cst_Middle$0)
                           ?caml_string_notequal(atom$0,cst_Right$0)
                             ?caml_string_notequal(atom$0,cst_Top$0)
                               ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                               :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$7,sexp)
                             :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$7,sexp)
                           :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$7,sexp)
                         :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$7,sexp)
                       :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$7,sexp)
                     :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$7,sexp)
                   :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$7,sexp)}}
            else
             var _gV_=caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$7,sexp)}
          else
           var _gV_=caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$7,sexp)}
        return _gV_}
      catch(_gW_)
       {_gW_ = caml_wrap_exception(_gW_);
        if(_gW_ === Sexplib0_Sexp_conv_error[17])
         return caml_call2(Sexplib0_Sexp_conv_error[19],tp_loc$8,sexp);
        throw _gW_}}
    function sexp_of_t$4(v)
     {if(15943541 <= v)
       {if(418396260 !== v)
         return 847852583 <= v
                 ?980392437 <= v?_cO_:_cP_
                 :437082891 <= v?_cQ_:_cR_}
      else
       {if(-57574468 <= v)return 4202101 <= v?_cS_:_cT_;
        if(! (-72987685 <= v))return _cU_}
      return sexp_of_css_global_values(v)}
    var
     _cV_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_102_6),
     _cW_=
      [0,caml_call2(Bin_prot_Shape[11],_cV_,bin_shape_css_global_values),0],
     _cX_=[0,caml_call2(Bin_prot_Shape[10],cst_Justify$1,0),_cW_],
     _cY_=[0,caml_call2(Bin_prot_Shape[10],cst_Middle$1,0),_cX_],
     _cZ_=[0,caml_call2(Bin_prot_Shape[10],cst_Bottom$1,0),_cY_],
     _c0_=[0,caml_call2(Bin_prot_Shape[10],cst_Top$1,0),_cZ_],
     _c1_=[0,caml_call2(Bin_prot_Shape[10],cst_Center$1,0),_c0_],
     _c2_=[0,caml_call2(Bin_prot_Shape[10],cst_Right$1,0),_c1_],
     _c3_=[0,caml_call2(Bin_prot_Shape[10],cst_Left$1,0),_c2_],
     _c4_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_95_4),
     _c5_=caml_call2(Bin_prot_Shape[12],_c4_,_c3_),
     _c6_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$7),0,_c5_],0],
     _c7_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_94_2),
     group$4=caml_call2(Bin_prot_Shape[6],_c7_,_c6_),
     _c8_=caml_call1(Bin_prot_Shape[2][1],cst_t$8);
    caml_call1(caml_call2(Bin_prot_Shape[14],group$4,_c8_),0);
    caml_call1(Core_kernel_Sexpable[1],[0,t_of_sexp$5,sexp_of_t$4]);
    var
     to_string_css$0=
      caml_call2(Core_kernel_Fn[5],sanitize_sexp,sexp_of_t$4);
    function t_of_sexp$6(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        try
         {var _gL_=css_global_values_of_sexp(sexp);return _gL_}
        catch(_gQ_)
         {_gQ_ = caml_wrap_exception(_gQ_);
          if(_gQ_ === Sexplib0_Sexp_conv_error[17])
           return caml_string_notequal(atom,cst_Ch)
                   ?caml_string_notequal(atom,cst_Em)
                     ?caml_string_notequal(atom,cst_Percent)
                       ?caml_string_notequal(atom,cst_Pt)
                         ?caml_string_notequal(atom,cst_Px)
                           ?caml_string_notequal(atom,cst_Rem)
                             ?caml_string_notequal(atom,cst_Vh)
                               ?caml_string_notequal(atom,cst_Vw)
                                 ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                                 :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp)
                               :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp)
                             :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp)
                           :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp)
                         :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp)
                       :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp)
                     :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp)
                   :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$9,sexp);
          throw _gQ_}}
      var _gM_=sexp[1];
      if(_gM_)
       {var _gN_=_gM_[1];
        if(0 === _gN_[0])
         {var sexp_args=_gM_[2],atom$0=_gN_[1];
          if(caml_string_notequal(atom$0,cst_Ch$0))
           {if(caml_string_notequal(atom$0,cst_Em$0))
             {if(caml_string_notequal(atom$0,cst_Percent$0))
               {if(caml_string_notequal(atom$0,cst_Pt$0))
                 {if(caml_string_notequal(atom$0,cst_Px$0))
                   {if(caml_string_notequal(atom$0,cst_Rem$0))
                     {if(caml_string_notequal(atom$0,cst_Vh$0))
                       {if(caml_string_notequal(atom$0,cst_Vw$0))
                         try
                          {var _gO_=css_global_values_of_sexp(sexp);return _gO_}
                         catch(_gP_)
                          {_gP_ = caml_wrap_exception(_gP_);
                           if(_gP_ === Sexplib0_Sexp_conv_error[17])
                            return caml_call1(Sexplib0_Sexp_conv_error[18],0);
                           throw _gP_}
                        if(sexp_args)
                         if(! sexp_args[2])
                          {var
                            v0=sexp_args[1],
                            v0$0=caml_call1(Core_kernel_Percent[5],v0);
                           return [0,19297,v0$0]}
                        return caml_call3
                                (Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
                      if(sexp_args)
                       if(! sexp_args[2])
                        {var
                          v0$1=sexp_args[1],
                          v0$2=caml_call1(Core_kernel_Percent[5],v0$1);
                         return [0,19282,v0$2]}
                      return caml_call3
                              (Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
                    if(sexp_args)
                     if(! sexp_args[2])
                      {var
                        v0$3=sexp_args[1],
                        v0$4=caml_call1(Core_kernel[324],v0$3);
                       return [0,4100410,v0$4]}
                    return caml_call3
                            (Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
                  if(sexp_args)
                   if(! sexp_args[2])
                    {var
                      v0$5=sexp_args[1],
                      v0$6=caml_call1(Core_kernel[340],v0$5);
                     return [0,17960,v0$6]}
                  return caml_call3
                          (Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
                if(sexp_args)
                 if(! sexp_args[2])
                  {var
                    v0$7=sexp_args[1],
                    v0$8=caml_call1(Core_kernel[324],v0$7);
                   return [0,17956,v0$8]}
                return caml_call3
                        (Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
              if(sexp_args)
               if(! sexp_args[2])
                {var
                  v0$9=sexp_args[1],
                  v0$10=caml_call1(Core_kernel_Percent[5],v0$9);
                 return [0,-970206555,v0$10]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
            if(sexp_args)
             if(! sexp_args[2])
              {var
                v0$11=sexp_args[1],
                v0$12=caml_call1(Core_kernel[340],v0$11);
               return [0,15496,v0$12]}
            return caml_call3
                    (Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
          if(sexp_args)
           if(! sexp_args[2])
            {var v0$13=sexp_args[1],v0$14=caml_call1(Core_kernel[324],v0$13);
             return [0,15045,v0$14]}
          return caml_call3(Sexplib0_Sexp_conv_error[21],tp_loc$9,atom$0,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$9,sexp)}
    function t_of_sexp$7(sexp)
     {try
       {var _gJ_=t_of_sexp$6(sexp);return _gJ_}
      catch(_gK_)
       {_gK_ = caml_wrap_exception(_gK_);
        if(_gK_ === Sexplib0_Sexp_conv_error[17])
         return caml_call2(Sexplib0_Sexp_conv_error[19],tp_loc$10,sexp);
        throw _gK_}}
    function sexp_of_t$5(v)
     {if(typeof v === "number")return sexp_of_css_global_values(v);
      var _gI_=v[1];
      if(17960 <= _gI_)
       {if(19297 <= _gI_)
         {if(4100410 <= _gI_)
           {var v0=v[2];
            return [1,[0,_c9_,[0,caml_call1(Core_kernel[323],v0),0]]]}
          var v0$0=v[2];
          return [1,[0,_c__,[0,caml_call1(Core_kernel_Percent[6],v0$0),0]]]}
        if(19282 <= _gI_)
         {var v0$1=v[2];
          return [1,[0,_c$_,[0,caml_call1(Core_kernel_Percent[6],v0$1),0]]]}
        var v0$2=v[2];
        return [1,[0,_da_,[0,caml_call1(Core_kernel[339],v0$2),0]]]}
      if(15496 <= _gI_)
       {if(17956 <= _gI_)
         {var v0$3=v[2];
          return [1,[0,_db_,[0,caml_call1(Core_kernel[323],v0$3),0]]]}
        var v0$4=v[2];
        return [1,[0,_dc_,[0,caml_call1(Core_kernel[339],v0$4),0]]]}
      if(15045 <= _gI_)
       {var v0$5=v[2];
        return [1,[0,_dd_,[0,caml_call1(Core_kernel[323],v0$5),0]]]}
      var v0$6=v[2];
      return [1,[0,_de_,[0,caml_call1(Core_kernel_Percent[6],v0$6),0]]]}
    var
     _df_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_123_6),
     _dg_=
      [0,caml_call2(Bin_prot_Shape[11],_df_,bin_shape_css_global_values),0],
     _dh_=
      [0,
       caml_call2(Bin_prot_Shape[10],cst_Vw$1,[0,Core_kernel_Percent[11]]),
       _dg_],
     _di_=
      [0,
       caml_call2(Bin_prot_Shape[10],cst_Vh$1,[0,Core_kernel_Percent[11]]),
       _dh_],
     _dj_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Px$1,[0,Core_kernel[327]]),_di_],
     _dk_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Pt$1,[0,Core_kernel[311]]),_dj_],
     _dl_=
      [0,
       caml_call2
        (Bin_prot_Shape[10],cst_Percent$1,[0,Core_kernel_Percent[11]]),
       _dk_],
     _dm_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Em$1,[0,Core_kernel[327]]),_dl_],
     _dn_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Rem$1,[0,Core_kernel[311]]),_dm_],
     _do_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Ch$1,[0,Core_kernel[311]]),_dn_],
     _dp_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_115_4),
     _dq_=caml_call2(Bin_prot_Shape[12],_dp_,_do_),
     _dr_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$9),0,_dq_],0],
     _ds_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_114_2),
     group$5=caml_call2(Bin_prot_Shape[6],_ds_,_dr_),
     _dt_=caml_call1(Bin_prot_Shape[2][1],cst_t$10),
     bin_shape_t$3=caml_call1(caml_call2(Bin_prot_Shape[14],group$5,_dt_),0);
    function compare$3(a_037,b_038)
     {if(caml_call2(Ppx_compare_lib[1],a_037,b_038))return 0;
      if(typeof a_037 === "number")
       {var switch$0=-72987685 === b_038?0:418396260 === b_038?0:1;
        if(! switch$0)return compare_css_global_values(a_037,b_038)}
      else
       {var _gH_=a_037[1];
        if(17960 <= _gH_)
         {if(19297 <= _gH_)
           {if(4100410 <= _gH_)
             {if(typeof b_038 !== "number")
               if(4100410 === b_038[1])
                {var right_042=b_038[2],left_041=a_037[2];
                 return caml_call2(Core_kernel[319],left_041,right_042)}}
            else
             if(typeof b_038 !== "number")
              if(19297 === b_038[1])
               {var right_054=b_038[2],left_053=a_037[2];
                return caml_call2(Core_kernel_Percent[22],left_053,right_054)}}
          else
           if(19282 <= _gH_)
            {if(typeof b_038 !== "number")
              if(19282 === b_038[1])
               {var right_052=b_038[2],left_051=a_037[2];
                return caml_call2(Core_kernel_Percent[22],left_051,right_052)}}
           else
            if(typeof b_038 !== "number")
             if(17960 === b_038[1])
              {var right_050=b_038[2],left_049=a_037[2];
               return caml_call2(Core_kernel[335],left_049,right_050)}}
        else
         if(15496 <= _gH_)
          {if(17956 <= _gH_)
            {if(typeof b_038 !== "number")
              if(17956 === b_038[1])
               {var right_048=b_038[2],left_047=a_037[2];
                return caml_call2(Core_kernel[319],left_047,right_048)}}
           else
            if(typeof b_038 !== "number")
             if(15496 === b_038[1])
              {var right_044=b_038[2],left_043=a_037[2];
               return caml_call2(Core_kernel[335],left_043,right_044)}}
         else
          if(15045 <= _gH_)
           {if(typeof b_038 !== "number")
             if(15045 === b_038[1])
              {var right_040=b_038[2],left_039=a_037[2];
               return caml_call2(Core_kernel[319],left_039,right_040)}}
          else
           if(typeof b_038 !== "number")
            if(-970206555 === b_038[1])
             {var right_046=b_038[2],left_045=a_037[2];
              return caml_call2(Core_kernel_Percent[22],left_045,right_046)}}
      return caml_compare(a_037,b_038)}
    function to_string_css$1(l)
     {if(typeof l === "number")
       return sanitize_sexp(sexp_of_css_global_values(l));
      var _gD_=l[1];
      if(17960 <= _gD_)
       {if(19297 <= _gD_)
         {if(4100410 <= _gD_)
           {var f=l[2];return caml_call2(Core_kernel[244],_du_,f)}
          var p=l[2],_gE_=caml_call1(Core_kernel_Percent[69],p);
          return caml_call2(Core_kernel[244],_dv_,_gE_)}
        if(19282 <= _gD_)
         {var p$0=l[2],_gF_=caml_call1(Core_kernel_Percent[69],p$0);
          return caml_call2(Core_kernel[244],_dw_,_gF_)}
        var i=l[2];
        return caml_call2(Core_kernel[244],_dx_,i)}
      if(15496 <= _gD_)
       {if(17956 <= _gD_)
         {var p$1=l[2];return caml_call2(Core_kernel[244],_dy_,p$1)}
        var i$0=l[2];
        return caml_call2(Core_kernel[244],_dz_,i$0)}
      if(15045 <= _gD_){var c=l[2];return caml_call2(Core_kernel[244],_dA_,c)}
      var p$2=l[2],_gG_=caml_call1(Core_kernel_Percent[69],p$2);
      return caml_call2(Core_kernel[244],_dB_,_gG_)}
    var
     percent100=[0,-970206555,caml_call1(Core_kernel_Percent[68],100.)],
     _dC_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_145_6),
     _dD_=[0,caml_call2(Bin_prot_Shape[11],_dC_,bin_shape_t$3),0],
     _dE_=[0,caml_call2(Bin_prot_Shape[10],cst_Auto,0),_dD_],
     _dF_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_144_4),
     _dG_=caml_call2(Bin_prot_Shape[12],_dF_,_dE_),
     _dH_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$11),0,_dG_],0],
     _dI_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_143_2),
     group$6=caml_call2(Bin_prot_Shape[6],_dI_,_dH_),
     _dJ_=caml_call1(Bin_prot_Shape[2][1],cst_t$12);
    caml_call1(caml_call2(Bin_prot_Shape[14],group$6,_dJ_),0);
    function compare$4(a_057,b_058)
     {if(caml_call2(Ppx_compare_lib[1],a_057,b_058))return 0;
      if(typeof a_057 === "number")
       if(726666127 <= a_057)
        {if(726666127 === b_058)return 0;var switch$0=1}
       else
        var switch$0=0;
      else
       var switch$0=0;
      if(! switch$0)
       {if(typeof b_058 === "number")
         var switch$1=-72987685 === b_058?0:418396260 === b_058?0:1;
        else
         var
          _gC_=b_058[1],
          switch$1=
           17957 <= _gC_
            ?19283 <= _gC_
              ?19297 === _gC_?0:4100410 === _gC_?0:1
              :17960 === _gC_?0:19282 <= _gC_?0:1
            :15046 <= _gC_
              ?15496 === _gC_?0:17956 <= _gC_?0:1
              :-970206555 === _gC_?0:15045 <= _gC_?0:1;
        if(! switch$1)return compare$3(a_057,b_058)}
      return caml_compare(a_057,b_058)}
    function t_of_sexp$8(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        if(caml_string_notequal(atom,cst_Auto$0))
         try
          {var _gw_=t_of_sexp$6(sexp);return _gw_}
         catch(_gB_)
          {_gB_ = caml_wrap_exception(_gB_);
           if(_gB_ === Sexplib0_Sexp_conv_error[17])
            return caml_call1(Sexplib0_Sexp_conv_error[18],0);
           throw _gB_}
        return 726666127}
      var _gx_=sexp[1];
      if(_gx_)
       {var _gy_=_gx_[1];
        if(0 === _gy_[0])
         {var atom$0=_gy_[1];
          try
           {var _gz_=t_of_sexp$6(sexp);return _gz_}
          catch(_gA_)
           {_gA_ = caml_wrap_exception(_gA_);
            if(_gA_ === Sexplib0_Sexp_conv_error[17])
             return caml_string_notequal(atom$0,cst_Auto$1)
                     ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                     :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$11,sexp);
            throw _gA_}}
        return caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$11,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$11,sexp)}
    function t_of_sexp$9(sexp)
     {try
       {var _gu_=t_of_sexp$8(sexp);return _gu_}
      catch(_gv_)
       {_gv_ = caml_wrap_exception(_gv_);
        if(_gv_ === Sexplib0_Sexp_conv_error[17])
         return caml_call2(Sexplib0_Sexp_conv_error[19],tp_loc$12,sexp);
        throw _gv_}}
    function sexp_of_t$6(v)
     {if(typeof v === "number")if(726666127 <= v)return _dK_;
      return sexp_of_t$5(v)}
    function to_string_css$2(l)
     {if(typeof l === "number")if(726666127 <= l)return cst_auto;
      return to_string_css$1(l)}
    function value_map(o,f)
     {return caml_call3(Core_kernel_Option[45],o,cst$15,f)}
    function symbol(t1,t2){return caml_call2(Core_kernel[145],t1,t2)}
    function concat(l){return caml_call1(Core_kernel_List[127],l)}
    function to_string_list(_gt_){return _gt_}
    function to_string_css$3(t)
     {function _gr_(param)
       {var value=param[2],field=param[1];
        return caml_call3(Core_kernel[244],_dL_,field,value)}
      var _gs_=caml_call2(Core_kernel_List[69],t,_gr_);
      return caml_call2(Core_kernel_String[24],_dM_,_gs_)}
    function of_string_css_exn(s)
     {var _gq_=parse_declaration_list(s);
      return caml_call1(Core_kernel_Or_error[36],_gq_)}
    function create_raw(field,value){return [0,[0,field,value],0]}
    function create$2(field,value)
     {var _gp_=validate_value(value);
      caml_call1(Core_kernel_Or_error[36],_gp_);
      return create_raw(field,value)}
    var empty=0,_dN_=Core_kernel_List[7];
    function create_placement(name,length)
     {return create$2(name,to_string_css$1(length))}
    function left(_go_){return create_placement(cst_left,_go_)}
    function top(_gn_){return create_placement(cst_top,_gn_)}
    function bottom(_gm_){return create_placement(cst_bottom,_gm_)}
    function right(_gl_){return create_placement(cst_right,_gl_)}
    function position(tp,bt,lt,rt,pos)
     {var
       value=
        332360020 === pos
         ?cst_fixed
         :982536398 <= pos
           ?1070408009 <= pos?cst_sticky:cst_static
           :491227799 <= pos?cst_absolute:cst_relative,
       pos$0=create$2(cst_position,value);
      function convert(opt_l,f)
       {return caml_call3(Core_kernel_Option[45],opt_l,empty,f)}
      var
       _gi_=[0,convert(bt,bottom),0],
       _gj_=[0,convert(rt,right),_gi_],
       _gk_=[0,convert(lt,left),_gj_];
      return concat([0,pos$0,[0,convert(tp,top),_gk_]])}
    function box_sizing(v)
     {var
       _gh_=
        92813848 === v?_dO_:367114405 === v?_dP_:sexp_of_css_global_values(v),
       value=sanitize_sexp(_gh_);
      return create_raw(cst_box_sizing,value)}
    function display(v)
     {if(168351231 <= v)
       if(498536372 <= v)
        if(781663065 <= v)
         if(870530776 <= v)
          var _gg_=_dQ_,switch$0=1;
         else
          var _gg_=_dR_,switch$0=1;
        else
         if(504440814 <= v)
          var _gg_=_dS_,switch$0=1;
         else
          var _gg_=_dT_,switch$0=1;
       else
        if(418396260 <= v)var switch$0=0;else var _gg_=_dU_,switch$0=1;
      else
       if(-936778451 === v)
        var _gg_=_dV_,switch$0=1;
       else
        if(-266363961 <= v)
         if(-72987685 <= v)var switch$0=0;else var _gg_=_dW_,switch$0=1;
        else
         if(-841728391 <= v)
          var _gg_=_dX_,switch$0=1;
         else
          var _gg_=_dY_,switch$0=1;
      if(! switch$0)var _gg_=sexp_of_css_global_values(v);
      var value=sanitize_sexp(_gg_);
      return create_raw(cst_display,value)}
    function visibility(v)
     {var
       _gf_=
        19559306 === v
         ?_dZ_
         :-260726701 <= v
           ?507973005 <= v?_d0_:sexp_of_css_global_values(v)
           :_d1_,
       value=sanitize_sexp(_gf_);
      return create_raw(cst_visibility,value)}
    function make_overflow(field,v)
     {if(-67548115 <= v)
       if(418396260 <= v)
        if(726666127 <= v)var _ge_=_d2_,switch$0=1;else var switch$0=0;
       else
        if(19559306 <= v)
         var _ge_=_d3_,switch$0=1;
        else
         var _ge_=_d4_,switch$0=1;
      else
       if(-72987685 <= v)var switch$0=0;else var _ge_=_d5_,switch$0=1;
      if(! switch$0)var _ge_=sexp_of_css_global_values(v);
      var value=sanitize_sexp(_ge_);
      return create_raw(field,value)}
    function overflow(_gd_){return make_overflow(cst_overflow,_gd_)}
    function overflow_x(_gc_){return make_overflow(cst_overflow_x,_gc_)}
    function overflow_y(_gb_){return make_overflow(cst_overflow_y,_gb_)}
    function z_index(i)
     {return create_raw(cst_z_index,caml_call1(Core_kernel_Int[98],i))}
    function opacity(i)
     {return create_raw(cst_opacity,caml_call1(Core_kernel_Float[148],i))}
    function create_length_field(field,l)
     {return create_raw(field,to_string_css$2(l))}
    function white_space(v)
     {var
       value=
        -397426005 <= v
         ?4003843 <= v
           ?418396260 <= v?cst_initial:cst_pre
           :-72987685 <= v?cst_inherit:cst_nowrap
         :-932293946 === v
           ?cst_pre_wrap
           :-453122489 <= v?cst_normal:cst_pre_line;
      return create$2(cst_white_space$1,value)}
    function font_size(_ga_){return create_length_field(cst_font_size,_ga_)}
    function font_family(l)
     {return create_raw
              (cst_font_family,caml_call2(Core_kernel_String[24],_d6_,l))}
    function font_style(s)
     {var
       _f$_=
        -72987685 <= s
         ?989373200 <= s?_d7_:sexp_of_css_global_values(s)
         :-115526511 <= s?_d8_:_d9_,
       value=sanitize_sexp(_f$_);
      return create_raw(cst_font_style,value)}
    function font_weight(s)
     {if(typeof s === "number")
       var
        _f__=
         347568466 === s
          ?_d__
          :-415993180 <= s
            ?737455525 <= s?_d$_:sexp_of_css_global_values(s)
            :-415993181 <= s?_ea_:_eb_,
        value=sanitize_sexp(_f__);
      else
       var i=s[2],value=caml_call1(Core_kernel_Int[98],i);
      return create_raw(cst_font_weight,value)}
    var bold=font_weight(737455525);
    function font_variant(s)
     {var
       _f9_=
        57678329 === s?_ec_:-453122488 <= s?sexp_of_css_global_values(s):_ed_,
       value=sanitize_sexp(_f9_);
      return create_raw(cst_font_variant,value)}
    function font(size,family,style,weight,variant,param)
     {var
       _f4_=[0,caml_call2(Core_kernel_Option[38],variant,font_variant),0],
       _f5_=[0,caml_call2(Core_kernel_Option[38],weight,font_weight),_f4_],
       _f6_=[0,caml_call2(Core_kernel_Option[38],style,font_style),_f5_],
       _f7_=[0,[0,font_family(family)],_f6_],
       _f8_=[0,[0,font_size(size)],_f7_];
      return concat(caml_call1(Core_kernel_List[118],_f8_))}
    function color(c){return create_raw(cst_color,to_string_css(c))}
    function background_color(c)
     {return create_raw(cst_background_color,to_string_css(c))}
    function create_alignment(field,a)
     {return create_raw(field,caml_call1(to_string_css$0,a))}
    function text_align(_f3_){return create_alignment(cst_text_align,_f3_)}
    function horizontal_align(_f2_)
     {return create_alignment(cst_horizontal_align,_f2_)}
    function vertical_align(_f1_)
     {return create_alignment(cst_vertical_align,_f1_)}
    function float$0(f)
     {var
       _f0_=
        847852583 <= f
         ?870530776 <= f?_ee_:_ef_
         :-57574468 === f?_eg_:sexp_of_css_global_values(f);
      return create_raw(cst_float,sanitize_sexp(_f0_))}
    function width(_fZ_){return create_length_field(cst_width,_fZ_)}
    function min_width(_fY_){return create_length_field(cst_min_width,_fY_)}
    function max_width(_fX_){return create_length_field(cst_max_width,_fX_)}
    function height(_fW_){return create_length_field(cst_height,_fW_)}
    function min_height(_fV_){return create_length_field(cst_min_height,_fV_)}
    function max_height(_fU_){return create_length_field(cst_max_height,_fU_)}
    function padding_top(_fT_)
     {return create_length_field(cst_padding_top,_fT_)}
    function padding_bottom(_fS_)
     {return create_length_field(cst_padding_bottom,_fS_)}
    function padding_left(_fR_)
     {return create_length_field(cst_padding_left,_fR_)}
    function padding_right(_fQ_)
     {return create_length_field(cst_padding_right,_fQ_)}
    function padding(top,bottom,left,right,param)
     {var
       m=Core_kernel_Option[38],
       _fM_=[0,caml_call2(m,right,padding_right),0],
       _fN_=[0,caml_call2(m,left,padding_left),_fM_],
       _fO_=[0,caml_call2(m,bottom,padding_bottom),_fN_],
       _fP_=[0,caml_call2(m,top,padding_top),_fO_];
      return concat(caml_call1(Core_kernel_List[118],_fP_))}
    function uniform_padding(l){return padding([0,l],[0,l],[0,l],[0,l],0)}
    function margin_top(_fL_){return create_length_field(cst_margin_top,_fL_)}
    function margin_bottom(_fK_)
     {return create_length_field(cst_margin_bottom,_fK_)}
    function margin_left(_fJ_)
     {return create_length_field(cst_margin_left,_fJ_)}
    function margin_right(_fI_)
     {return create_length_field(cst_margin_right,_fI_)}
    function margin(top,bottom,left,right,param)
     {var
       m=Core_kernel_Option[38],
       _fE_=[0,caml_call2(m,right,margin_right),0],
       _fF_=[0,caml_call2(m,left,margin_left),_fE_],
       _fG_=[0,caml_call2(m,bottom,margin_bottom),_fF_],
       _fH_=[0,caml_call2(m,top,margin_top),_fG_];
      return concat(caml_call1(Core_kernel_List[118],_fH_))}
    function uniform_margin(l){return margin([0,l],[0,l],[0,l],[0,l],0)}
    function concat2v(x,match)
     {if(caml_string_notequal(x,cst$16))
       {if(caml_string_notequal(match,cst$17))
         {var _fD_=caml_call2(Core_kernel[18],cst$18,match);
          return caml_call2(Core_kernel[18],x,_fD_)}
        return x}
      return match}
    function concat3v(v1,v2,v3){return concat2v(concat2v(v1,v2),v3)}
    function border_value(width,color,style,param)
     {if(-72987685 <= style)
       {if(19559306 <= style)
         if(418396260 <= style)
          if(870530776 <= style)var _fC_=_eh_,switch$0=1;else var switch$0=0;
         else
          if(334701579 <= style)
           var _fC_=_ei_,switch$0=1;
          else
           var _fC_=_ej_,switch$0=1;
        else
         if(-57723893 <= style)var _fC_=_ek_,switch$0=1;else var switch$0=0;
        if(! switch$0)var _fC_=sexp_of_css_global_values(style)}
      else
       var
        _fC_=
         -783455043 <= style
          ?-423359734 <= style
            ?-413163727 <= style?_el_:_em_
            :-696935855 <= style?_en_:_eo_
          :-793243622 <= style?_ep_:_eq_;
      var
       style$0=sanitize_sexp(_fC_),
       width$0=value_map(width,to_string_css$1),
       color$0=value_map(color,to_string_css);
      return concat3v(width$0,style$0,color$0)}
    function create_border(side,param)
     {if(side)
       var
        _fA_=side[1],
        _fB_=
         437082891 <= _fA_
          ?847852583 <= _fA_?cst_border_left:cst_border_bottom
          :4202101 <= _fA_?cst_border_top:cst_border_right,
        field=_fB_;
      else
       var field=cst_border;
      return function(width,color,style,param)
       {return create_raw(field,border_value(width,color,style,0))}}
    var
     border_top=create_border(_er_,0),
     border_bottom=create_border(_es_,0),
     border_left=create_border(_et_,0),
     border_right=create_border(_eu_,0),
     border=create_border(0,0);
    function outline(width,color,style,param)
     {return create_raw(cst_outline,border_value(width,color,style,0))}
    function border_collapse(v)
     {var
       _fz_=
        -72987685 <= v?507973005 <= v?_ev_:sexp_of_css_global_values(v):_ew_,
       value=sanitize_sexp(_fz_);
      return create_raw(cst_border_collapse,value)}
    function border_spacing(_fy_)
     {return create_length_field(cst_border_spacing,_fy_)}
    function border_radius(l)
     {return create$2(cst_border_radius,to_string_css$1(l))}
    function text_decoration(style,color,line,param)
     {function _fu_(l)
       {var
         _fx_=
          518168424 === l
           ?_ex_
           :698610924 <= l
             ?870530776 <= l?_ey_:_ez_
             :-72987685 <= l?sexp_of_css_global_values(l):_eA_;
        return sanitize_sexp(_fx_)}
      var
       _fv_=caml_call2(Core_kernel_List[69],line,_fu_),
       line$0=caml_call2(Core_kernel_String[24],_eG_,_fv_),
       style$0=
        value_map
         (style,
          function(s)
           {var
             _fw_=
              -72987685 <= s
               ?334701579 === s
                 ?_eB_
                 :969642477 <= s?_eC_:sexp_of_css_global_values(s)
               :-423359734 === s?_eD_:-413163727 <= s?_eE_:_eF_;
            return sanitize_sexp(_fw_)}),
       color$0=value_map(color,to_string_css),
       value=concat3v(line$0,style$0,color$0);
      return create_raw(cst_text_decoration,value)}
    function item_alignment_to_string_css(param)
     {return -354838363 <= param
              ?726666127 <= param
                ?980392437 <= param?cst_center:cst_auto$0
                :555646908 <= param?cst_flex_start:cst_baseline
              :-401431371 <= param?cst_flex_end:cst_stretch}
    function flex_container(opt,_fo_,_fn_,align_items,param)
     {if(opt)var sth=opt[1],inline=sth;else var inline=0;
      if(_fo_)var sth$0=_fo_[1],direction=sth$0;else var direction=4102650;
      if(_fn_)var sth$1=_fn_[1],wrap=sth$1;else var wrap=-397426005;
      var
       _fp_=
        175421085 <= direction
         ?744569753 <= direction?_eH_:_eI_
         :4102650 <= direction?_eJ_:_eK_,
       direction$0=sanitize_sexp(_fp_),
       _fq_=899936909 === wrap?_eL_:970483178 <= wrap?_eM_:_eN_,
       wrap$0=sanitize_sexp(_fq_);
      if(align_items)
       var
        a=align_items[1],
        align_items$0=
         create_raw(cst_align_items,item_alignment_to_string_css(a));
      else
       var align_items$0=empty;
      var
       _fr_=[0,create_raw(cst_flex_wrap,wrap$0),[0,align_items$0,0]],
       _fs_=[0,create_raw(cst_flex_direction,direction$0),_fr_],
       _ft_=inline?168351231:781663065;
      return concat([0,display(_ft_),_fs_])}
    function flex_item(order,opt,_fj_,grow,param)
     {if(opt)var sth=opt[1],basis=sth;else var basis=726666127;
      if(_fj_)var sth$0=_fj_[1],shrink=sth$0;else var shrink=1.;
      function _fk_(i)
       {return create_raw(cst_order,caml_call1(Core_kernel_Int[98],i))}
      var
       _fl_=caml_call2(Core_kernel_Option[38],order,_fk_),
       _fm_=caml_call1(Core_kernel_Option[28],_fl_),
       order$0=caml_call1(Core_kernel_List[25],_fm_),
       basis$0=to_string_css$2(basis),
       flex=
        create_raw
         (cst_flex,caml_call4(Core_kernel[244],_eO_,grow,shrink,basis$0));
      return concat([0,flex,[0,order$0,0]])}
    function align_self(a)
     {var value=item_alignment_to_string_css(a);
      return create_raw(cst_align_self,value)}
    function animation
     (name,
      duration,
      delay,
      direction,
      fill_mode,
      iter_count,
      timing_function,
      param)
     {var m=Core_kernel_Option[38];
      function span_to_string(s)
       {var _fi_=caml_call1(Core_kernel_Time_ns[1][90],s);
        return caml_call2(Core_kernel[244],_eP_,_fi_)}
      var
       direction$0=
        caml_call2
         (m,
          direction,
          function(d)
           {var
             _fh_=
              -453122489 === d
               ?_eQ_
               :-326048323 <= d
                 ?-72987685 <= d?sexp_of_css_global_values(d):_eR_
                 :-397582078 <= d?_eS_:_eT_,
             value=sanitize_sexp(_fh_);
            return create_raw(cst_animation_direction,value)}),
       fill_mode$0=
        caml_call2
         (m,
          fill_mode,
          function(f)
           {var
             _fg_=
              90990382 === f
               ?_eU_
               :813329168 <= f
                 ?870530776 <= f?_eV_:_eW_
                 :737457313 <= f?_eX_:sexp_of_css_global_values(f),
             value=sanitize_sexp(_fg_);
            return create_raw(cst_animation_fill_mode,value)}),
       _fa_=[0,direction$0,[0,fill_mode$0,0]],
       _fb_=
        [0,
         caml_call2
          (m,
           timing_function,
           function(value)
            {return create_raw(cst_animation_timing_function,value)}),
         _fa_],
       _fc_=
        [0,
         caml_call2
          (m,
           iter_count,
           function(i)
            {return create_raw
                     (cst_animation_iteration_count,
                      caml_call1(Core_kernel_Int[98],i))}),
         _fb_],
       _fd_=
        [0,
         caml_call2
          (m,
           delay,
           function(s)
            {return create_raw(cst_animation_delay,span_to_string(s))}),
         _fc_],
       _fe_=
        [0,
         [0,create_raw(cst_animation_duration,span_to_string(duration))],
         _fd_],
       _ff_=[0,[0,create_raw(cst_animation_name,name)],_fe_];
      return concat(caml_call1(Core_kernel_List[118],_ff_))}
    var
     Expect_test_collector$16=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _eY_(param)
     {function t(css)
       {var s=to_string_css$3(css),s2=to_string_css$3(of_string_css_exn(s));
        caml_call1(Core_kernel[32],s);
        return caml_call1(Core_kernel[32],s2)}
      var _e8_=overflow(-67548115);
      t(symbol(flex_item(0,0,0,1.,0),_e8_));
      var _e9_=caml_call4(border,0,0,-696935855,0);
      t(symbol(flex_container(_e0_,_eZ_,0,0,0),_e9_));
      t(color([0,912890036,[0,100,100,100,0]]));
      var _e__=caml_call1(Core_kernel_Percent[66],0.6);
      t
       (color
         ([0,
           802593344,
           [0,100,caml_call1(Core_kernel_Percent[66],0.75),_e__,0]]));
      t(create$2(cst_content$0,cst$19));
      var
       _e$_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$0),
         644,
         16079,
         16083,
         16089];
      return caml_call1(Expect_test_collector$16[1],_e$_)}
    var
     _e1_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$1),
       645,
       16090,
       16094,
       16507],
     _e4_=
      [0,
       [0,
        _e3_,
        _e2_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$2),
         644,
         16079,
         16083,
         16089],
        _e1_],
       0],
     _e6_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$4),
       629,
       15491,
       15491,
       16508],
     _e7_=
      caml_call1
       (Expect_test_common_File[4][3],cst_2ff226de531bd74ddb8c492c5138db15);
    caml_call9
     (Expect_test_collector$16[3],
      _e7_,
      _e6_,
      cst_css_gen_src_css_gen_ml$3,
      _e5_,
      0,
      _e4_,
      0,
      Inline_test_config,
      _eY_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_css_gen$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Css_gen$0=
      [0,
       sexp_of_css_global_values,
       css_global_values_of_sexp$0,
       css_global_values_of_sexp,
       compare_css_global_values,
       [0,
        [0,
         t_of_sexp$1,
         sexp_of_t$1,
         bin_size_t$0,
         bin_write_t$0,
         bin_read_t$2,
         bin_read_t$1,
         bin_shape_t$0,
         bin_writer_t$0,
         bin_reader_t$0,
         bin_t$0,
         compare$0,
         create$0],
        [0,
         t_of_sexp$2,
         sexp_of_t$2,
         bin_size_t$1,
         bin_write_t$1,
         bin_read_t$4,
         bin_read_t$3,
         bin_shape_t$1,
         bin_writer_t$1,
         bin_reader_t$1,
         bin_t$1,
         compare$1,
         create$1],
        sexp_of_t$3,
        t_of_sexp$4,
        t_of_sexp$3,
        bin_size_t$2,
        bin_write_t$2,
        bin_read_t$6,
        bin_read_t$5,
        bin_shape_t$2,
        bin_writer_t$2,
        bin_reader_t$2,
        bin_t$2,
        compare$2,
        to_string_css],
       [0,
        sexp_of_t$5,
        t_of_sexp$7,
        t_of_sexp$6,
        compare$3,
        percent100,
        to_string_css$1],
       [0,sexp_of_t$6,t_of_sexp$9,t_of_sexp$8,compare$4,to_string_css$2],
       t_of_sexp$0,
       sexp_of_t$0,
       compare,
       bin_size_t,
       bin_write_t,
       bin_read_t$0,
       bin_read_t,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       create$2,
       empty,
       _dN_,
       position,
       top,
       bottom,
       left,
       right,
       symbol,
       symbol,
       concat,
       to_string_list,
       to_string_css$3,
       of_string_css_exn,
       box_sizing,
       display,
       visibility,
       overflow,
       overflow_x,
       overflow_y,
       z_index,
       opacity,
       font_size,
       font_family,
       font_style,
       font_weight,
       font_variant,
       font,
       bold,
       color,
       background_color,
       text_align,
       horizontal_align,
       vertical_align,
       white_space,
       float$0,
       width,
       min_width,
       max_width,
       height,
       min_height,
       max_height,
       padding_top,
       padding_bottom,
       padding_left,
       padding_right,
       uniform_padding,
       padding,
       margin_top,
       margin_bottom,
       margin_left,
       margin_right,
       uniform_margin,
       margin,
       border_top,
       border_bottom,
       border_left,
       border_right,
       border,
       border_radius,
       border_collapse,
       border_spacing,
       outline,
       text_decoration,
       flex_container,
       flex_item,
       align_self,
       animation,
       [0,
        [0,
         t_of_sexp$0,
         sexp_of_t$0,
         compare,
         bin_size_t,
         bin_write_t,
         bin_read_t$0,
         bin_read_t,
         bin_shape_t,
         bin_writer_t,
         bin_reader_t,
         bin_t]]];
    caml_register_global(811,Css_gen$0,"Css_gen");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJjc3NfZ2VuLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
