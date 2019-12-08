(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_sys_time=runtime.caml_sys_time,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_inline_tests_runner_exe=caml_new_string("inline_tests_runner.exe"),
     cst$10=caml_new_string(""),
     cst$8=caml_new_string("\n"),
     cst$9=caml_new_string(" "),
     cst$7=caml_new_string(""),
     cst_ppx_inline_test_cannot_use_list_partition_or_partition_without_specifying_a_partition_at_preprocessing_time=
      caml_new_string
       ("ppx_inline_test: cannot use -list-partition or -partition without specifying a partition at preprocessing time"),
     cst$5=caml_new_string("\n"),
     cst$6=caml_new_string(" "),
     cst$3=caml_new_string("\n"),
     cst_T_MODULE_at=caml_new_string("T_MODULE at "),
     cst_in_TES=caml_new_string("  in TES"),
     cst$4=caml_new_string(""),
     cst_inline_tests_log$0=caml_new_string("inline_tests.log"),
     cst_inline_tests_log=caml_new_string("inline_tests.log"),
     cst$1=caml_new_string(""),
     cst$2=caml_new_string(""),
     cst$0=caml_new_string(""),
     cst_success=caml_new_string("success"),
     cst_failure=caml_new_string("failure"),
     cst_error=caml_new_string("error"),
     enable_everything=[0,0,0],
     cst_FORCE_DROP_INLINE_TEST=caml_new_string("FORCE_DROP_INLINE_TEST"),
     cst=caml_new_string(""),
     cst_inline_test_runner=caml_new_string("inline-test-runner"),
     cst_inline_test_runner$0=caml_new_string("inline-test-runner"),
     cst_Path_to_the_root_of_the_source_tree=
      caml_new_string(" Path to the root of the source tree"),
     cst_source_tree_root=caml_new_string("-source-tree-root"),
     cst_Allow_output_patterns_in_tests_expectations=
      caml_new_string(" Allow output patterns in tests expectations"),
     cst_allow_output_patterns=caml_new_string("-allow-output-patterns"),
     cst_Diff_command_for_tests_that_require_diffing_use_to_disable_diffing=
      caml_new_string
       (" Diff command for tests that require diffing (use - to disable diffing)"),
     cst_diff_cmd=caml_new_string("-diff-cmd"),
     cst_Update_expect_tests_in_place=
      caml_new_string(" Update expect tests in place"),
     cst_in_place=caml_new_string("-in-place"),
     cst_Summarize_tests_without_using_color=
      caml_new_string(" Summarize tests without using color"),
     cst_no_color=caml_new_string("-no-color"),
     cst_location_Run_only_the_tests_specified_by_all_the_only_test_options_Locations_can_be_one_of_these_forms_file_ml_file_ml_line_number_File_file_ml_File_file_ml_line_23_File_file_ml_line_23_characters_2_3=
      caml_new_string
       ('location Run only the tests specified by all the -only-test options.\n                      Locations can be one of these forms:\n                      - file.ml\n                      - file.ml:line_number\n                      - File "file.ml"\n                      - File "file.ml", line 23\n                      - File "file.ml", line 23, characters 2-3'),
     cst_only_test=caml_new_string("-only-test"),
     cst_tag_Only_run_tests_tagged_with_tag_overrides_previous_drop_tag=
      caml_new_string
       ("tag Only run tests tagged with [tag] (overrides previous -drop-tag)"),
     cst_require_tag=caml_new_string("-require-tag"),
     cst_tag_Only_run_tests_not_tagged_with_tag_overrides_previous_require_tag=
      caml_new_string
       ("tag Only run tests not tagged with [tag] (overrides previous -require-tag)"),
     cst_drop_tag=caml_new_string("-drop-tag"),
     cst_Log_the_tests_run_in_inline_tests_log=
      caml_new_string(" Log the tests run in inline_tests.log"),
     cst_log=caml_new_string("-log"),
     cst_Show_the_number_of_tests_ran=
      caml_new_string(" Show the number of tests ran"),
     cst_show_counts=caml_new_string("-show-counts"),
     cst_End_with_an_error_if_no_tests_were_run=
      caml_new_string(" End with an error if no tests were run"),
     cst_strict=caml_new_string("-strict"),
     cst_Run_tests_only_up_to_the_first_error_doesn_t_work_for_expect_tests=
      caml_new_string
       (" Run tests only up to the first error (doesn't work for expect tests)"),
     cst_stop_on_error=caml_new_string("-stop-on-error"),
     cst_Show_the_tests_as_they_run=
      caml_new_string(" Show the tests as they run"),
     cst_verbose=caml_new_string("-verbose"),
     cst_Only_run_the_tests_in_the_given_partition=
      caml_new_string(" Only run the tests in the given partition"),
     cst_partition=caml_new_string("-partition"),
     cst_Lists_all_the_partitions_that_contain_at_least_one_test_or_test_module=
      caml_new_string
       (" Lists all the partitions that contain at least one test or test_module"),
     cst_list_partitions=caml_new_string("-list-partitions"),
     cst_Do_not_run_tests_but_show_what_would_have_been_run=
      caml_new_string(" Do not run tests but show what would have been run"),
     cst_list_test_names=caml_new_string("-list-test-names"),
     am_running_inline_test_env_var=caml_new_string("TESTING_FRAMEWORK"),
     cst_PPX_INLINE_TEST_LIB_AM_RUNNING_INLINE_TEST=
      caml_new_string("PPX_INLINE_TEST_LIB_AM_RUNNING_INLINE_TEST"),
     cst_inline_test=caml_new_string("inline-test"),
     Stdlib_list=global_data.Stdlib__list,
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_filename=global_data.Stdlib__filename,
     Assert_failure=global_data.Assert_failure,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_random=global_data.Stdlib__random,
     Base_Random=global_data.Base__Random,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_scanf=global_data.Stdlib__scanf,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_arg=global_data.Stdlib__arg,
     Stdlib_array=global_data.Stdlib__array,
     Base=global_data.Base,
     Ppx_inline_test_lib=[0];
    caml_register_global(96,Ppx_inline_test_lib,"Ppx_inline_test_lib");
    var
     _B_=[0,[12,32,[2,0,[12,58,[4,0,0,0,0]]]],caml_new_string(" %s:%d")],
     _C_=[0,[12,32,[2,0,0]],caml_new_string(" %s")],
     _x_=
      [0,
       [11,
        caml_new_string
         ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n"),
        [10,0]],
       caml_new_string
        ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n%!")],
     _y_=
      [0,
       [11,
        caml_new_string
         ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n"),
        [10,0]],
       caml_new_string
        ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n%!")],
     _J_=[0,[2,0,[12,10,0]],caml_new_string("%s\n")],
     _z_=
      [0,
       [4,
        0,
        0,
        0,
        [11,
         caml_new_string(" tests ran, "),
         [4,0,0,0,[11,caml_new_string(" test_modules ran\n"),[10,0]]]]],
       caml_new_string("%d tests ran, %d test_modules ran\n%!")],
     _F_=[0,caml_new_string("runtime-lib/runtime.ml"),598,65],
     _A_=
      [0,
       [11,
        caml_new_string
         ("ppx_inline_test error: the following -only-test flags matched nothing:"),
        0],
       caml_new_string
        ("ppx_inline_test error: the following -only-test flags matched nothing:")],
     _D_=[0,[11,caml_new_string(".\n"),[10,0]],caml_new_string(".\n%!")],
     _E_=
      [0,
       [11,
        caml_new_string("ppx_inline_test error: no tests have been run.\n"),
        [10,0]],
       caml_new_string("ppx_inline_test error: no tests have been run.\n%!")],
     _H_=[0,[11,caml_new_string("T_MODULES"),0],caml_new_string("T_MODULES")],
     _I_=
      [0,
       [11,caml_new_string(", "),[4,0,0,0,[11,caml_new_string(" TES"),0]]],
       caml_new_string(", %d TES")],
     _G_=
      [0,
       [11,
        caml_new_string("FAILED "),
        [4,
         0,
         0,
         0,
         [11,
          caml_new_string(" / "),
          [4,0,0,0,[11,caml_new_string(" tests"),[2,0,[12,10,[10,0]]]]]]]],
       caml_new_string("FAILED %d / %d tests%s\n%!")],
     _v_=
      [0,
       [11,
        caml_new_string("T_MODULE at "),
        [2,
         0,
         [11,
          caml_new_string(" threw"),
          [2,0,[2,0,[11,caml_new_string(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]]],
       caml_new_string("T_MODULE at %s threw%s%s.\n%s%s\n%!")],
     _w_=[0,[11,caml_new_string("TES"),0],caml_new_string("TES")],
     _s_=
      [0,
       [11,
        caml_new_string(" ("),
        [8,0,0,[0,3],[11,caml_new_string(" sec)\n"),[10,0]]]],
       caml_new_string(" (%.3f sec)\n%!")],
     _q_=[0,[2,0,[12,10,[2,0,0]]],caml_new_string("%s\n%s")],
     _r_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _u_=
      [0,
       [2,0,[11,caml_new_string(" is false.\n"),[2,0,[12,10,[10,0]]]]],
       caml_new_string("%s is false.\n%s\n%!")],
     _t_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(" threw"),
         [2,0,[2,0,[11,caml_new_string(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]],
       caml_new_string("%s threw%s%s.\n%s%s\n%!")],
     _p_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _o_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _n_=[0,[12,10,[2,0,[12,10,[10,0]]]],caml_new_string("\n%s\n%!")],
     _T_=
      [0,
       [11,
        caml_new_string("Argument "),
        [2,
         0,
         [11,
          caml_new_string(" doesn't fit the format filename[:line_number]\n"),
          [10,0]]]],
       caml_new_string
        ("Argument %s doesn't fit the format filename[:line_number]\n%!")],
     _P_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(": unexpected anonymous argument "),
         [2,0,[12,10,[10,0]]]]],
       caml_new_string("%s: unexpected anonymous argument %s\n%!")],
     _g_=
      [0,
       [11,
        caml_new_string(" File "),
        [3,
         0,
         [11,
          caml_new_string(" , line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(" , characters "),
            [4,0,0,0,[11,caml_new_string(" - "),[4,0,0,0,[12,32,[10,0]]]]]]]]]],
       caml_new_string(" File %S , line %d , characters %d - %d %!")],
     _f_=
      [0,
       [11,
        caml_new_string(" File "),
        [3,0,[11,caml_new_string(" , line "),[4,0,0,0,[12,32,[10,0]]]]]],
       caml_new_string(" File %S , line %d %!")],
     _e_=
      [0,
       [11,caml_new_string(" File "),[3,0,[12,32,[10,0]]]],
       caml_new_string(" File %S %!")],
     _d_=
      [0,
       [11,
        caml_new_string("File "),
        [3,
         0,
         [11,
          caml_new_string(", line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(", characters "),
            [4,0,0,0,[12,45,[4,0,0,0,[2,0,0]]]]]]]]],
       caml_new_string("File %S, line %d, characters %d-%d%s")],
     _a_=[0,[2,0,0],caml_new_string("%s")],
     _b_=[0,[2,0,0],caml_new_string("%s")],
     _O_=
      [0,
       [2,0,[12,32,[2,0,[12,32,[2,0,[11,caml_new_string(" [args]"),0]]]]]],
       caml_new_string("%s %s %s [args]")],
     _M_=[0,caml_new_string("runtime-lib/runtime.ml"),313,18],
     _m_=[0,187165616,545942154],
     _K_=[0,187165616,-863538453];
    function to_string(param)
     {switch(param)
       {case 0:return cst_success;
        case 1:return cst_failure;
        default:return cst_error}}
    function combine(t1,t2)
     {switch(t1)
       {case 0:if(0 === t2)return 0;var switch$0=0;break;
        case 1:var switch$0=0;break;
        default:var switch$0=1}
      if(! switch$0)if(2 !== t2)return 1;
      return 2}
    function combine_all(ts){return caml_call3(Stdlib_list[21],combine,0,ts)}
    var
     test_modules_ran=[0,0],
     test_modules_failed=[0,0],
     tests_ran=[0,0],
     tests_failed=[0,0],
     dynamic_lib=[0,0];
    function entire_module_disabled(t,tags)
     {var _b1_=t[2];
      function _b2_(dropped){return caml_call2(Stdlib_list[32],dropped,tags)}
      return caml_call2(Stdlib_list[29],_b2_,_b1_)}
    function disabled(t,tags)
     {var _bW_=t[1];
      function _bX_(req){return 1 - caml_call2(Stdlib_list[32],req,tags)}
      var _bY_=caml_call2(Stdlib_list[29],_bX_,_bW_);
      if(_bY_)return _bY_;
      var _bZ_=t[2];
      function _b0_(dropped){return caml_call2(Stdlib_list[32],dropped,tags)}
      return caml_call2(Stdlib_list[29],_b0_,_bZ_)}
    var action=[0,-950194894];
    try
     {caml_sys_getenv(cst_FORCE_DROP_INLINE_TEST);var _aa_=1,force_drop=_aa_}
    catch(_bV_)
     {_bV_ = caml_wrap_exception(_bV_);
      if(_bV_ !== Stdlib[8])throw _bV_;
      var force_drop=0}
    function get(param){return force_drop?-950194894:action[1]}
    function set(v){action[1] = v;return 0}
    var _c_=caml_call2(Stdlib_hashtbl[1],0,23),current=[0,cst];
    function found_test(param)
     {var
       _bT_=caml_string_notequal(current[1],cst$0),
       _bU_=_bT_?1 - caml_call2(Stdlib_hashtbl[9],_c_,current[1]):_bT_;
      return _bU_?caml_call3(Stdlib_hashtbl[5],_c_,current[1],0):_bU_}
    function is_current(param)
     {if(param){var p=param[1];return caml_string_equal(p,current[1])}
      return 1}
    var current$0=[0,0];
    function current_tags(param)
     {var _bS_=current$0[1];
      function _bQ_(m){return m[2]}
      var _bR_=caml_call2(Stdlib_list[17],_bQ_,_bS_);
      return caml_call1(Stdlib_list[13],_bR_)}
    var
     verbose=[0,0],
     strict=[0,0],
     show_counts=[0,0],
     list_test_names=[0,0],
     delayed_errors=[0,0],
     stop_on_error=[0,0],
     log=[0,0],
     time_sec=[0,0.],
     use_color=[0,1],
     in_place=[0,0],
     diff_command=[0,0],
     source_tree_root=[0,0],
     allow_output_patterns=[0,0];
    function displayed_descr(descr,filename,line,start_pos,end_pos)
     {return caml_call6
              (Stdlib_printf[4],_d_,filename,line,start_pos,end_pos,descr)}
    function backtrace_indented(by)
     {var str=caml_call1(Stdlib_printexc[5],0);
      if(caml_string_notequal(str,cst$1))
       {var
         len=caml_ml_string_length(str),
         buf=caml_call1(Stdlib_buffer[1],len * 2 | 0),
         indentation=caml_call2(Stdlib_string[1],by,32);
        caml_call2(Stdlib_buffer[14],buf,indentation);
        var _bL_=len - 1 | 0,_bK_=0;
        if(! (_bL_ < 0))
         {var i=_bK_;
          for(;;)
           {var _bM_=caml_string_get(str,i);
            caml_call2(Stdlib_buffer[10],buf,_bM_);
            var
             _bN_=10 === caml_string_get(str,i)?1:0,
             _bO_=_bN_?i !== (len - 1 | 0)?1:0:_bN_;
            if(_bO_)caml_call2(Stdlib_buffer[14],buf,indentation);
            var _bP_=i + 1 | 0;
            if(_bL_ !== i){var i=_bP_;continue}
            break}}
        return caml_call1(Stdlib_buffer[2],buf)}
      return cst$2}
    var match=caml_call1(Stdlib_array[11],Stdlib_sys[1]);
    if(match)
     {var _h_=match[2];
      if(_h_)
       {var _i_=match[1];
        if(caml_string_notequal(_h_[1],cst_inline_test_runner))
         var switch$0=0;
        else
         {var _N_=_h_[2];
          if(_N_)
           {var rest=_N_[2],lib=_N_[1];
            if(Base[85][1])
             {var
               tests=[0,0],
               list_partitions=[0,0],
               partition=[0,0],
               tag_predicate=[0,enable_everything],
               msg$1=
                caml_call4
                 (Stdlib_printf[4],_O_,_i_,cst_inline_test_runner$0,lib),
               f=
                function(anon)
                 {caml_call3(Stdlib_printf[3],_P_,_i_,anon);
                  return caml_call1(Stdlib[99],1)},
               _Q_=0,
               _R_=
                [0,
                 [0,
                  cst_allow_output_patterns,
                  [2,allow_output_patterns],
                  cst_Allow_output_patterns_in_tests_expectations],
                 [0,
                  [0,
                   cst_source_tree_root,
                   [4,function(s){source_tree_root[1] = [0,s];return 0}],
                   cst_Path_to_the_root_of_the_source_tree],
                  _Q_]],
               _S_=
                [0,
                 [0,
                  cst_no_color,
                  [3,use_color],
                  cst_Summarize_tests_without_using_color],
                 [0,
                  [0,
                   cst_in_place,
                   [2,in_place],
                   cst_Update_expect_tests_in_place],
                  [0,
                   [0,
                    cst_diff_cmd,
                    [4,function(s){diff_command[1] = [0,s];return 0}],
                    cst_Diff_command_for_tests_that_require_diffing_use_to_disable_diffing],
                   _R_]]],
               _U_=
                [0,
                 [0,
                  cst_only_test,
                  [4,
                   function(filename)
                    {try
                      {var
                        _bD_=
                         function(file,line,start_pos,end_pos)
                          {return [0,file,[0,line]]},
                        _bE_=[0,caml_call3(Stdlib_scanf[4],filename,_g_,_bD_)],
                        match=_bE_}
                     catch(_bH_)
                      {try
                        {var
                          _bB_=function(file,line){return [0,file,[0,line]]},
                          _bC_=[0,caml_call3(Stdlib_scanf[4],filename,_f_,_bB_)],
                          match=_bC_}
                       catch(_bI_)
                        {try
                          {var
                            _bz_=function(file){return [0,file,0]},
                            _bA_=[0,caml_call3(Stdlib_scanf[4],filename,_e_,_bz_)],
                            match=_bA_}
                         catch(_bJ_){var match=0}}}
                     if(match)
                      var
                       match$0=match[1],
                       index=match$0[2],
                       file=match$0[1],
                       filename$0=file,
                       index$0=index;
                     else
                      if(caml_call2(Stdlib_string[22],filename,58))
                       {var
                         i=caml_call2(Stdlib_string[14],filename,58),
                         filename$1=caml_call3(Stdlib_string[4],filename,0,i),
                         index_string=
                          caml_call3
                           (Stdlib_string[4],
                            filename,
                            i + 1 | 0,
                            (caml_ml_string_length(filename) - i | 0) - 1 | 0);
                        try
                         {var
                           _bF_=runtime.caml_int_of_string(index_string),
                           index$1=_bF_}
                        catch(_bG_)
                         {_bG_ = caml_wrap_exception(_bG_);
                          if(_bG_[1] !== Stdlib[7])throw _bG_;
                          caml_call2(Stdlib_printf[3],_T_,filename);
                          var index$1=caml_call1(Stdlib[99],1)}
                        var filename$0=filename$1,index$0=[0,index$1]}
                      else
                       var filename$0=filename,index$0=0;
                     tests[1] = [0,[0,filename$0,index$0,[0,0]],tests[1]];
                     return 0}],
                  cst_location_Run_only_the_tests_specified_by_all_the_only_test_options_Locations_can_be_one_of_these_forms_file_ml_file_ml_line_number_File_file_ml_File_file_ml_line_23_File_file_ml_line_23_characters_2_3],
                 _S_],
               _V_=
                [0,
                 [0,
                  cst_require_tag,
                  [4,
                   function(s)
                    {var _bx_=tag_predicate[1],_bu_=_bx_[2];
                     function _bv_(_by_){return caml_string_notequal(s,_by_)}
                     var _bw_=caml_call2(Stdlib_list[36],_bv_,_bu_);
                     tag_predicate[1] = [0,[0,s,_bx_[1]],_bw_];
                     return 0}],
                  cst_tag_Only_run_tests_tagged_with_tag_overrides_previous_drop_tag],
                 _U_],
               _W_=
                [0,
                 [0,
                  cst_drop_tag,
                  [4,
                   function(s)
                    {var _bs_=tag_predicate[1],_bp_=[0,s,_bs_[2]],_bq_=_bs_[1];
                     function _br_(_bt_){return caml_string_notequal(s,_bt_)}
                     tag_predicate[1]
                     =
                     [0,caml_call2(Stdlib_list[36],_br_,_bq_),_bp_];
                     return 0}],
                  cst_tag_Only_run_tests_not_tagged_with_tag_overrides_previous_require_tag],
                 _V_],
               _X_=
                [0,
                 [0,cst_verbose,[2,verbose],cst_Show_the_tests_as_they_run],
                 [0,
                  [0,
                   cst_stop_on_error,
                   [2,stop_on_error],
                   cst_Run_tests_only_up_to_the_first_error_doesn_t_work_for_expect_tests],
                  [0,
                   [0,
                    cst_strict,
                    [2,strict],
                    cst_End_with_an_error_if_no_tests_were_run],
                   [0,
                    [0,
                     cst_show_counts,
                     [2,show_counts],
                     cst_Show_the_number_of_tests_ran],
                    [0,
                     [0,
                      cst_log,
                      [0,
                       function(param)
                        {try
                          {runtime.caml_sys_remove(cst_inline_tests_log$0)}
                         catch(_bo_){}
                         log[1] = [0,caml_call1(Stdlib[60],cst_inline_tests_log)];
                         return 0}],
                      cst_Log_the_tests_run_in_inline_tests_log],
                     _W_]]]]],
               _Y_=
                [0,
                 [0,
                  cst_partition,
                  [4,function(i){partition[1] = [0,i];return 0}],
                  cst_Only_run_the_tests_in_the_given_partition],
                 _X_],
               _Z_=
                [0,
                 [0,
                  cst_list_partitions,
                  [0,function(param){list_partitions[1] = 1;return 0}],
                  cst_Lists_all_the_partitions_that_contain_at_least_one_test_or_test_module],
                 _Y_],
               ___=
                [0,
                 [0,
                  cst_list_test_names,
                  [0,
                   function(param)
                    {list_test_names[1] = 1;verbose[1] = 1;return 0}],
                  cst_Do_not_run_tests_but_show_what_would_have_been_run],
                 _Z_],
               l=caml_call2(Stdlib_arg[11],0,___),
               argv=caml_call1(Stdlib_array[12],[0,_i_,rest]);
              try
               {caml_call5(Stdlib_arg[3],0,argv,l,f,msg$1)}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                if(exn[1] === Stdlib_arg[8])
                 {var msg=exn[2];
                  caml_call2(Stdlib_printf[3],_a_,msg);
                  caml_call1(Stdlib[99],1)}
                else
                 {if(exn[1] !== Stdlib_arg[7])throw exn;
                  var msg$0=exn[2];
                  caml_call2(Stdlib_printf[2],_b_,msg$0);
                  caml_call1(Stdlib[99],0)}}
              var
               _$_=
                list_partitions[1]?-260537174:[0,1025081494,partition[1]];
              set([0,-753295984,[0,[0,lib,tests[1],tag_predicate[1]],_$_]]);
              var switch$0=1}
            else
             var switch$0=0}
          else
           var switch$0=0}}
      else
       var switch$0=0}
    else
     var switch$0=0;
    var match$0=get(0);
    if(typeof match$0 === "number")
     var _j_=0;
    else
     {if(984731018 <= match$0[1])throw [0,Assert_failure,_M_];var _j_=1}
    try
     {caml_sys_getenv(cst_PPX_INLINE_TEST_LIB_AM_RUNNING_INLINE_TEST);
      var switch$1=0}
    catch(_bm_)
     {_bm_ = caml_wrap_exception(_bm_);
      if(_bm_ !== Stdlib[8])throw _bm_;
      try
       {var val=caml_sys_getenv(am_running_inline_test_env_var),switch$2=0}
      catch(_bn_)
       {_bn_ = caml_wrap_exception(_bn_);
        if(_bn_ !== Stdlib[8])throw _bn_;
        var _k_=0,switch$2=1}
      if(! switch$2)
       var _L_=caml_string_notequal(val,cst_inline_test)?0:1,_k_=_L_;
      var _l_=_k_,switch$1=1}
    if(! switch$1)var _l_=1;
    var testing=_j_?_m_:_l_?_K_:822171972;
    function time_without_resetting_random_seeds(f)
     {var before_sec=caml_sys_time(0);
      try
       {var res=caml_call1(f,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        time_sec[1] = caml_sys_time(0) - before_sec;
        throw e}
      time_sec[1] = caml_sys_time(0) - before_sec;
      return res}
    var
     saved_caml_random_state=
      [246,
       function(_bl_){return caml_call1(Stdlib_random[11][1],[0,100,200,300])}],
     saved_base_random_state=
      [246,
       function(_bk_){return caml_call1(Base_Random[18][2],[0,111,222,333])}];
    function time_and_reset_random_seeds(f)
     {var
       caml_random_state=caml_call1(Stdlib_random[12],0),
       base_random_state=caml_call1(Base_Random[18][4],Base_Random[18][1]),
       _bg_=caml_obj_tag(saved_caml_random_state),
       _bh_=
        250 === _bg_
         ?saved_caml_random_state[1]
         :246 === _bg_
           ?caml_call1(CamlinternalLazy[2],saved_caml_random_state)
           :saved_caml_random_state;
      caml_call1(Stdlib_random[13],_bh_);
      var
       _bi_=caml_obj_tag(saved_base_random_state),
       _bj_=
        250 === _bi_
         ?saved_base_random_state[1]
         :246 === _bi_
           ?caml_call1(CamlinternalLazy[2],saved_base_random_state)
           :saved_base_random_state;
      caml_call1(Base_Random[19],_bj_);
      var result=time_without_resetting_random_seeds(f);
      caml_call1(Stdlib_random[13],caml_random_state);
      caml_call1(Base_Random[19],base_random_state);
      return result}
    function string_of_module_descr(param)
     {var _ba_=current$0[1];
      function _a__(m){return m[1]}
      var _a$_=caml_call2(Stdlib_list[17],_a__,_ba_);
      function _bb_(s)
       {var
         _bd_=caml_call1(Stdlib_string[32],s),
         _be_=caml_call2(Stdlib[28],_bd_,cst$3),
         _bf_=caml_call2(Stdlib[28],cst_T_MODULE_at,_be_);
        return caml_call2(Stdlib[28],cst_in_TES,_bf_)}
      var _bc_=caml_call2(Stdlib_list[17],_bb_,_a$_);
      return caml_call2(Stdlib_string[7],cst$4,_bc_)}
    function position_match(def_filename,def_line_number,l)
     {function _a4_(param)
       {var
         used=param[3],
         line_number_opt=param[2],
         filename=param[1],
         position_start=
          caml_ml_string_length(def_filename)
          -
          caml_ml_string_length(filename)
          |
          0,
         _a5_=0 <= position_start?1:0;
        if(_a5_)
         {var
           end_of_def_filename=
            caml_call3
             (Stdlib_string[4],
              def_filename,
              position_start,
              caml_ml_string_length(filename)),
           _a6_=caml_string_equal(end_of_def_filename,filename);
          if(_a6_)
           {var
             _a7_=0 === position_start?1:0,
             _a8_=
              _a7_
              ||
              (47 === caml_string_get(def_filename,position_start - 1 | 0)?1:0);
            if(_a8_)
             if(line_number_opt)
              var
               line_number=line_number_opt[1],
               _a9_=caml_equal(def_line_number,line_number);
             else
              var _a9_=1;
            else
             var _a9_=_a8_}
          else
           var _a9_=_a6_;
          var found=_a9_}
        else
         var found=_a5_;
        if(found)used[1] = 1;
        return found}
      return caml_call2(Stdlib_list[29],_a4_,l)}
    function print_delayed_errors(param)
     {var delayed_errors$0=caml_call1(Stdlib_list[9],delayed_errors[1]);
      if(delayed_errors$0)
       {var _a2_=caml_call2(Stdlib_string[1],70,61);
        caml_call2(Stdlib_printf[3],_n_,_a2_);
        var
         _a3_=
          function(message){return caml_call2(Stdlib_printf[3],_o_,message)};
        return caml_call2(Stdlib_list[15],_a3_,delayed_errors$0)}
      return 0}
    function eprintf_or_delay(fmt)
     {function _a0_(s)
       {if(verbose[1])
         delayed_errors[1] = [0,s,delayed_errors[1]];
        else
         caml_call2(Stdlib_printf[3],_p_,s);
        var _a1_=stop_on_error[1];
        return _a1_?(print_delayed_errors(0),caml_call1(Stdlib[99],2)):_a1_}
      return caml_call2(Stdlib_printf[9],_a0_,fmt)}
    function add_hooks(C,f,param){caml_call1(C[1],0);return caml_call1(f,0)}
    function test
     (config,descr,tags,def_filename,def_line_number,start_pos,end_pos,f)
     {function f$0(_aZ_){return add_hooks(config,f,_aZ_)}
      function descr$0(param)
       {return displayed_descr
                (descr,def_filename,def_line_number,start_pos,end_pos)}
      var match=get(0);
      if(typeof match === "number")return 0;
      if(984731018 <= match[1])
       {var r=match[2],_aJ_=r[1];
        r[1]
        =
        [0,
         function(param)
          {var _aX_=1 - time_and_reset_random_seeds(f$0);
           if(_aX_){var _aY_=descr$0(0);return caml_call1(Stdlib[2],_aY_)}
           return _aX_},
         _aJ_];
        return 0}
      var
       _aK_=match[2],
       what_to_do=_aK_[2],
       match$0=_aK_[1],
       which_tags=match$0[3],
       only_test_location=match$0[2],
       libname=match$0[1],
       _aL_=current_tags(0),
       complete_tags=caml_call2(Stdlib[37],tags,_aL_),
       _aM_=caml_equal([0,libname],dynamic_lib[1]);
      if(_aM_)
       var
        _aN_=
         only_test_location
          ?position_match(def_filename,def_line_number,only_test_location)
          :1,
        should_run=_aN_?1 - disabled(which_tags,complete_tags):_aN_;
      else
       var should_run=_aM_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_aO_=is_current(partition);
        if(_aO_)
         {var descr$1=descr$0(0);
          tests_ran[1]++;
          var _aP_=log[1];
          if(_aP_)
           {var ch=_aP_[1],_aQ_=string_of_module_descr(0);
            caml_call4(Stdlib_printf[1],ch,_q_,descr$1,_aQ_)}
          if(verbose[1])caml_call2(Stdlib_printf[2],_r_,descr$1);
          var
           print_time_taken=
            function(param)
             {var _aW_=verbose[1];
              return _aW_?caml_call2(Stdlib_printf[2],_s_,time_sec[1]):_aW_};
          try
           {var
             _aS_=1 - list_test_names[1],
             failed=_aS_?1 - time_and_reset_random_seeds(f$0):_aS_;
            print_time_taken(0);
            if(failed)
             {tests_failed[1]++;
              var
               _aT_=string_of_module_descr(0),
               _aU_=caml_call2(eprintf_or_delay(_u_),descr$1,_aT_)}
            else
             var _aU_=failed;
            return _aU_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            print_time_taken(0);
            var backtrace=backtrace_indented(2);
            tests_failed[1]++;
            var
             exn_str=caml_call1(Stdlib_printexc[1],exn),
             sep=caml_call2(Stdlib_string[22],exn_str,10)?cst$5:cst$6,
             _aR_=string_of_module_descr(0);
            return caml_call5
                    (eprintf_or_delay(_t_),descr$1,sep,exn_str,backtrace,_aR_)}}
        var _aV_=_aO_}
      else
       var _aV_=should_run;
      return _aV_}
    function set_lib_and_partition(static_lib,partition)
     {if(dynamic_lib[1])return 0;
      dynamic_lib[1] = [0,static_lib];
      var match=get(0);
      if(typeof match !== "number")
       if(! (984731018 <= match[1]))
        {var
          match$0=match[2],
          what_to_do=match$0[2],
          which_tests=match$0[1],
          _aI_=caml_string_equal(which_tests[1],static_lib);
         if(_aI_)
          {if(typeof what_to_do === "number")
            var switch$0=0;
           else
            if(what_to_do[2])
             var switch$0=0;
            else
             var requires_partition=0,switch$0=1;
           if(! switch$0)var requires_partition=1;
           if(caml_string_equal(partition,cst$7))
            if(requires_partition)
             return caml_call1
                     (Stdlib[2],
                      cst_ppx_inline_test_cannot_use_list_partition_or_partition_without_specifying_a_partition_at_preprocessing_time);
           current[1] = partition;
           return 0}
         return _aI_}
      return 0}
    function unset_lib(static_lib)
     {var _aF_=dynamic_lib[1];
      if(_aF_)
       {var
         lib=_aF_[1],
         _aG_=caml_string_equal(lib,static_lib),
         _aH_=_aG_?(dynamic_lib[1] = 0,0):_aG_;
        return _aH_}
      return 0}
    function test_unit
     (config,descr,tags,filename,line_number,start_pos,end_pos,f)
     {return test
              (config,
               descr,
               tags,
               filename,
               line_number,
               start_pos,
               end_pos,
               function(param){caml_call1(f,0);return 1})}
    function collect(f)
     {var prev_action=get(0),tests=[0,0];
      set([0,984731018,tests]);
      try
       {caml_call1(f,0);
        var tests$0=caml_call1(Stdlib_list[9],tests[1]);
        set(prev_action);
        return tests$0}
      catch(e){e = caml_wrap_exception(e);set(prev_action);throw e}}
    function test_module
     (config,descr,tags,def_filename,def_line_number,start_pos,end_pos,f)
     {function f$0(_aE_){return add_hooks(config,f,_aE_)}
      function descr$0(param)
       {return displayed_descr
                (descr,def_filename,def_line_number,start_pos,end_pos)}
      var match=get(0);
      if(typeof match === "number")return 0;
      if(984731018 <= match[1])
       {var r=match[2],_av_=r[1],_aw_=collect(f$0);
        r[1] = caml_call2(Stdlib_list[12],_aw_,_av_);
        return 0}
      var
       _ax_=match[2],
       what_to_do=_ax_[2],
       match$0=_ax_[1],
       which_tags=match$0[3],
       libname=match$0[1],
       _ay_=current_tags(0),
       partial_tags=caml_call2(Stdlib[37],tags,_ay_),
       _az_=caml_equal([0,libname],dynamic_lib[1]),
       should_run=
        _az_?1 - entire_module_disabled(which_tags,partial_tags):_az_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_aA_=is_current(partition);
        if(_aA_)
         {test_modules_ran[1]++;
          var descr$1=descr$0(0);
          try
           {var
             f$1=
              function(param){return time_without_resetting_random_seeds(f$0)},
             prev=current$0[1];
            current$0[1] = [0,[0,descr$1,tags],prev];
            try
             {f$1(0);current$0[1] = prev;var _au_=0;return _au_}
            catch(e){e = caml_wrap_exception(e);current$0[1] = prev;throw e}}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var backtrace=backtrace_indented(2);
            test_modules_failed[1]++;
            var
             exn_str=caml_call1(Stdlib_printexc[1],exn),
             sep=caml_call2(Stdlib_string[22],exn_str,10)?cst$8:cst$9,
             _aB_=string_of_module_descr(0),
             _aC_=caml_call1(Stdlib_string[32],descr$1);
            return caml_call5
                    (eprintf_or_delay(caml_call2(Stdlib[98],_w_,_v_)),
                     _aC_,
                     sep,
                     exn_str,
                     backtrace,
                     _aB_)}}
        var _aD_=_aA_}
      else
       var _aD_=should_run;
      return _aD_}
    function summarize(param)
     {var action=get(0);
      if(typeof action === "number")
       {if(runtime.caml_notequal(Stdlib_sys[1],[0]))
         var
          _ai_=runtime.caml_check_bound(Stdlib_sys[1],0)[1],
          switch$0=
           caml_string_equal
             (caml_call1(Stdlib_filename[13],_ai_),
              cst_inline_tests_runner_exe)
            ?(caml_call1(Stdlib_printf[3],_x_),1)
            :0;
        else
         var switch$0=0;
        if(! switch$0)caml_call1(Stdlib_printf[3],_y_);
        return 2}
      if(! (984731018 <= action[1]))
       if(-260537174 === action[2][2])
        {var
          _ae_=0,
          _af_=function(k,param,acc){return [0,k,acc]},
          _ag_=caml_call3(Stdlib_hashtbl[14],_af_,_c_,_ae_),
          _ah_=caml_call2(Stdlib_list[49],Stdlib_string[33],_ag_),
          _at_=caml_call1(Stdlib_printf[2],_J_);
         caml_call2(Stdlib_list[15],_at_,_ah_);
         return 0}
      var _aj_=log[1];
      if(_aj_){var ch=_aj_[1];caml_call1(Stdlib[76],ch)}
      print_delayed_errors(0);
      var _ak_=tests_failed[1],_al_=test_modules_failed[1];
      if(0 === _ak_)
       if(0 === _al_)
        {if(show_counts[1])
          caml_call3(Stdlib_printf[3],_z_,tests_ran[1],test_modules_ran[1]);
         if(984731018 <= action[1])
          var errors=0;
         else
          {var _an_=action[2],_ao_=_an_[1][2];
           if(typeof _an_[2] === "number")throw [0,Assert_failure,_F_];
           var
            _ap_=function(param){var used=param[3];return 1 - used[1]},
            unused_tests=caml_call2(Stdlib_list[36],_ap_,_ao_),
            _aq_=unused_tests?[0,unused_tests]:0,
            errors=_aq_}
         if(errors)
          {var tests=errors[1];
           caml_call1(Stdlib_printf[3],_A_);
           var
            _am_=
             function(param)
              {var line_number_opt=param[2],filename=param[1];
               if(line_number_opt)
                {var line_number=line_number_opt[1];
                 return caml_call3(Stdlib_printf[3],_B_,filename,line_number)}
               return caml_call2(Stdlib_printf[3],_C_,filename)};
           caml_call2(Stdlib_list[15],_am_,tests);
           caml_call1(Stdlib_printf[3],_D_);
           return 2}
         if(0 === tests_ran[1])
          if(strict[1]){caml_call1(Stdlib_printf[3],_E_);return 2}
         return 0}
      if(0 === _al_)
       var _ar_=cst$10;
      else
       var
        _as_=caml_call2(Stdlib[98],_I_,_H_),
        _ar_=caml_call2(Stdlib_printf[4],_as_,_al_);
      caml_call4(Stdlib_printf[3],_G_,_ak_,tests_ran[1],_ar_);
      return 1}
    var
     use_color$0=use_color[1],
     in_place$0=in_place[1],
     diff_command$0=diff_command[1],
     source_tree_root$0=source_tree_root[1],
     allow_output_patterns$0=allow_output_patterns[1],
     evaluators=[0,[0,summarize,0]];
    function add_evaluator(f){evaluators[1] = [0,f,evaluators[1]];return 0}
    function exit(param)
     {var _ab_=caml_call1(Stdlib_list[9],evaluators[1]);
      function _ac_(f){return caml_call1(f,0)}
      var param$0=combine_all(caml_call2(Stdlib_list[17],_ac_,_ab_));
      switch(param$0)
       {case 0:var _ad_=0;break;case 1:var _ad_=2;break;default:var _ad_=1}
      return caml_call1(Stdlib[99],_ad_)}
    var
     Ppx_inline_test_lib_Runtime=
      [0,
       [0,combine,combine_all,to_string],
       set_lib_and_partition,
       unset_lib,
       test,
       test_unit,
       test_module,
       summarize,
       collect,
       testing,
       use_color$0,
       in_place$0,
       diff_command$0,
       source_tree_root$0,
       allow_output_patterns$0,
       _l_,
       am_running_inline_test_env_var,
       add_evaluator,
       exit];
    caml_register_global
     (114,Ppx_inline_test_lib_Runtime,"Ppx_inline_test_lib__Runtime");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfaW5saW5lX3Rlc3RfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
