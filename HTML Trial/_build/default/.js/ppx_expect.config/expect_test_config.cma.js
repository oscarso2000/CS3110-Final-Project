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
     cst_CR=caml_new_string("CR "),
     cst=caml_new_string(""),
     Stdlib_printf=global_data.Stdlib__printf,
     equal=runtime.caml_equal,
     _a_=
      [0,
       [11,
        caml_new_string("\n(* "),
        [2,
         0,
         [11,
          caml_new_string
           ("expect_test_collector: This test expectation appears to contain a backtrace.\n   This is strongly discouraged as backtraces are fragile.\n   Please change this test to not include a backtrace. *)\n\n"),
          0]]],
       caml_new_string
        ("\n(* %sexpect_test_collector: This test expectation appears to contain a backtrace.\n   This is strongly discouraged as backtraces are fragile.\n   Please change this test to not include a backtrace. *)\n\n")];
    function comment_prefix(param){return 15023 <= param?cst_CR:cst}
    function message_when_expectation_contains_backtrace(t)
     {var _b_=comment_prefix(t);return caml_call2(Stdlib_printf[4],_a_,_b_)}
    var
     Upon_unreleasable_issue=
      [0,equal,comment_prefix,message_when_expectation_contains_backtrace];
    function return$0(x){return x}
    function bind(t,f){return caml_call1(f,t)}
    function to_run(t){return t}
    var IO_flush=[0,return$0,bind,to_run];
    function flush(param){return 0}
    function run(f){return caml_call1(f,0)}
    function flushed(param){return 1}
    var
     Expect_test_config=
      [0,Upon_unreleasable_issue,[0],IO_flush,flush,run,flushed,15023];
    runtime.caml_register_global(4,Expect_test_config,"Expect_test_config");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb25maWcuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
