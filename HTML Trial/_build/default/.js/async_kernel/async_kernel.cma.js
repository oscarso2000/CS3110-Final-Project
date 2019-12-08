(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_int_compare=runtime.caml_int_compare,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_update_dummy=runtime.caml_update_dummy,
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
    function caml_call27
     (f,
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26)
     {return f.length == 27
              ?f
                (a0,
                 a1,
                 a2,
                 a3,
                 a4,
                 a5,
                 a6,
                 a7,
                 a8,
                 a9,
                 a10,
                 a11,
                 a12,
                 a13,
                 a14,
                 a15,
                 a16,
                 a17,
                 a18,
                 a19,
                 a20,
                 a21,
                 a22,
                 a23,
                 a24,
                 a25,
                 a26)
              :runtime.caml_call_gen
                (f,
                 [a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7,
                  a8,
                  a9,
                  a10,
                  a11,
                  a12,
                  a13,
                  a14,
                  a15,
                  a16,
                  a17,
                  a18,
                  a19,
                  a20,
                  a21,
                  a22,
                  a23,
                  a24,
                  a25,
                  a26])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_async_kernel=caml_new_string("async_kernel"),
     cst_src_time_ns_ml=caml_new_string("src/time_ns.ml"),
     cst=caml_new_string(""),
     cst_async_kernel$0=caml_new_string("async_kernel"),
     cst_async_kernel$1=caml_new_string("async_kernel"),
     cst_Here_is_an_explanation_of_each_field=
      caml_new_string("\n\nHere is an explanation of each field.\n"),
     cst_environment_variable_affects_Async_in_various_ways_Its_value_should_be_a_sexp_of_the_following_form_where_all_fields_are_optional=
      caml_new_string
       (" environment variable affects Async\nin various ways.  Its value should be a sexp of the following form,\nwhere all fields are optional:\n\n"),
     cst_The=caml_new_string("The "),
     cst$2=caml_new_string(")"),
     cst_default$1=caml_new_string(" (default "),
     cst$3=caml_new_string("\n"),
     cst_min=caml_new_string("min "),
     cst$1=caml_new_string("    "),
     cst_A_list_of_tags_specifying_which_Async_functions_should_print_debug_messages_to_stderr_Each_tag_identifies_a_group_of_related_Async_functions_The_tag_all_means_to_print_debug_messages_for_all_functions_Allowed_values_are=
      caml_new_string
       ("\n  A list of tags specifying which Async functions should print debug\n  messages to stderr.  Each tag identifies a group of related Async\n  functions.  The tag [all] means to print debug messages for all\n  functions.  Allowed values are:\n\n"),
     cst_This_determines_what_OS_subsystem_Async_uses_to_watch_file_descriptors_for_being_ready_The_default_is_to_use_epoll_if_timerfd_s_are_supported_and_if_not_use_select_Allowed_values_are=
      caml_new_string
       ("\n  This determines what OS subsystem Async uses to watch file descriptors for being ready.\n  The default is to use [epoll] if timerfd's are supported and if not, use [select].\n\n  Allowed values are:"),
     level_bits$0=[0,14,[0,15,[0,9,[0,6,0]]]],
     level_bits=[0,10,[0,10,[0,9,0]]],
     cst_max_num_open_file_descrs$0=
      caml_new_string("max_num_open_file_descrs"),
     cst_abort_after_thread_pool_stuck_for$0=
      caml_new_string("abort_after_thread_pool_stuck_for"),
     cst_check_invariants$0=caml_new_string("check_invariants"),
     cst_detect_invalid_access_from_thread$0=
      caml_new_string("detect_invalid_access_from_thread"),
     cst_dump_core_on_job_delay$0=caml_new_string("dump_core_on_job_delay"),
     cst_epoll_max_ready_events$0=caml_new_string("epoll_max_ready_events"),
     cst_file_descr_watcher$2=caml_new_string("file_descr_watcher"),
     cst_max_inter_cycle_timeout$0=caml_new_string("max_inter_cycle_timeout"),
     cst_max_num_jobs_per_priority_per_cycle$0=
      caml_new_string("max_num_jobs_per_priority_per_cycle"),
     cst_max_num_threads$0=caml_new_string("max_num_threads"),
     cst_min_inter_cycle_timeout$0=caml_new_string("min_inter_cycle_timeout"),
     cst_print_debug_messages_for$0=
      caml_new_string("print_debug_messages_for"),
     cst_record_backtraces$0=caml_new_string("record_backtraces"),
     cst_report_thread_pool_stuck_for$0=
      caml_new_string("report_thread_pool_stuck_for"),
     cst_thread_pool_cpu_affinity$0=
      caml_new_string("thread_pool_cpu_affinity"),
     cst_timing_wheel_config$0=caml_new_string("timing_wheel_config"),
     cst_Epoll=caml_new_string("Epoll"),
     cst_Epoll_if_timerfd=caml_new_string("Epoll_if_timerfd"),
     cst_Select=caml_new_string("Select"),
     cst_epoll=caml_new_string("epoll"),
     cst_epoll_if_timerfd=caml_new_string("epoll_if_timerfd"),
     cst_select=caml_new_string("select"),
     cst_Epoll$0=caml_new_string("Epoll"),
     cst_Epoll_if_timerfd$0=caml_new_string("Epoll_if_timerfd"),
     cst_Select$0=caml_new_string("Select"),
     cst_epoll$0=caml_new_string("epoll"),
     cst_epoll_if_timerfd$0=caml_new_string("epoll_if_timerfd"),
     cst_select$0=caml_new_string("select"),
     cst_all=caml_new_string("all"),
     cst_Monitor_send_exn=caml_new_string("Monitor_send_exn"),
     cst_All=caml_new_string("All"),
     cst_Clock=caml_new_string("Clock"),
     cst_Fd=caml_new_string("Fd"),
     cst_File_descr_watcher=caml_new_string("File_descr_watcher"),
     cst_Finalizers=caml_new_string("Finalizers"),
     cst_Interruptor=caml_new_string("Interruptor"),
     cst_Monitor=caml_new_string("Monitor"),
     cst_Parallel=caml_new_string("Parallel"),
     cst_Reader=caml_new_string("Reader"),
     cst_Scheduler=caml_new_string("Scheduler"),
     cst_Shutdown=caml_new_string("Shutdown"),
     cst_Thread_pool=caml_new_string("Thread_pool"),
     cst_Thread_safe=caml_new_string("Thread_safe"),
     cst_Writer=caml_new_string("Writer"),
     cst_parallel=caml_new_string("parallel"),
     cst_clock=caml_new_string("clock"),
     cst_fd=caml_new_string("fd"),
     cst_file_descr_watcher=caml_new_string("file_descr_watcher"),
     cst_finalizers=caml_new_string("finalizers"),
     cst_interruptor=caml_new_string("interruptor"),
     cst_monitor=caml_new_string("monitor"),
     cst_monitor_send_exn=caml_new_string("monitor_send_exn"),
     cst_reader=caml_new_string("reader"),
     cst_scheduler=caml_new_string("scheduler"),
     cst_shutdown=caml_new_string("shutdown"),
     cst_thread_pool=caml_new_string("thread_pool"),
     cst_thread_safe=caml_new_string("thread_safe"),
     cst_writer=caml_new_string("writer"),
     cst_all$0=caml_new_string("all"),
     cst_Monitor_send_exn$0=caml_new_string("Monitor_send_exn"),
     cst_All$0=caml_new_string("All"),
     cst_Clock$0=caml_new_string("Clock"),
     cst_Fd$0=caml_new_string("Fd"),
     cst_File_descr_watcher$0=caml_new_string("File_descr_watcher"),
     cst_Finalizers$0=caml_new_string("Finalizers"),
     cst_Interruptor$0=caml_new_string("Interruptor"),
     cst_Monitor$0=caml_new_string("Monitor"),
     cst_Parallel$0=caml_new_string("Parallel"),
     cst_Reader$0=caml_new_string("Reader"),
     cst_Scheduler$0=caml_new_string("Scheduler"),
     cst_Shutdown$0=caml_new_string("Shutdown"),
     cst_Thread_pool$0=caml_new_string("Thread_pool"),
     cst_Thread_safe$0=caml_new_string("Thread_safe"),
     cst_Writer$0=caml_new_string("Writer"),
     cst_parallel$0=caml_new_string("parallel"),
     cst_clock$0=caml_new_string("clock"),
     cst_fd$0=caml_new_string("fd"),
     cst_file_descr_watcher$0=caml_new_string("file_descr_watcher"),
     cst_finalizers$0=caml_new_string("finalizers"),
     cst_interruptor$0=caml_new_string("interruptor"),
     cst_monitor$0=caml_new_string("monitor"),
     cst_monitor_send_exn$0=caml_new_string("monitor_send_exn"),
     cst_reader$0=caml_new_string("reader"),
     cst_scheduler$0=caml_new_string("scheduler"),
     cst_shutdown$0=caml_new_string("shutdown"),
     cst_thread_pool$0=caml_new_string("thread_pool"),
     cst_thread_safe$0=caml_new_string("thread_safe"),
     cst_writer$0=caml_new_string("writer"),
     cst_Do_not_watch=caml_new_string("Do_not_watch"),
     cst_Watch=caml_new_string("Watch"),
     cst_do_not_watch=caml_new_string("do_not_watch"),
     cst_watch=caml_new_string("watch"),
     cst_Do_not_watch$0=caml_new_string("Do_not_watch"),
     cst_Watch$0=caml_new_string("Watch"),
     cst_do_not_watch$0=caml_new_string("do_not_watch"),
     cst_watch$0=caml_new_string("watch"),
     cst_dump_if_delayed_by=caml_new_string("dump_if_delayed_by"),
     cst_how_to_dump=caml_new_string("how_to_dump"),
     cst_how_to_dump$0=caml_new_string("how_to_dump"),
     cst_dump_if_delayed_by$0=caml_new_string("dump_if_delayed_by"),
     cst_Call_abort=caml_new_string("Call_abort"),
     cst_Call_gcore=caml_new_string("Call_gcore"),
     cst_Default=caml_new_string("Default"),
     cst_call_abort=caml_new_string("call_abort"),
     cst_call_gcore=caml_new_string("call_gcore"),
     cst_default=caml_new_string("default"),
     cst_Call_abort$0=caml_new_string("Call_abort"),
     cst_Call_gcore$0=caml_new_string("Call_gcore"),
     cst_Default$0=caml_new_string("Default"),
     cst_call_abort$0=caml_new_string("call_abort"),
     cst_call_gcore$0=caml_new_string("call_gcore"),
     cst_default$0=caml_new_string("default"),
     cst_async_kernel$2=caml_new_string("async_kernel"),
     cst_src_async_kernel_config_ml=
      caml_new_string("src/async_kernel_config.ml"),
     cst$0=caml_new_string(""),
     cst_async_kernel$3=caml_new_string("async_kernel"),
     here=[0,caml_new_string("src/async_kernel_config.ml"),13,267,282],
     here$0=[0,caml_new_string("src/async_kernel_config.ml"),20,421,436],
     here$1=[0,caml_new_string("src/async_kernel_config.ml"),27,588,603],
     here$2=[0,caml_new_string("src/async_kernel_config.ml"),35,766,783],
     here$3=[0,caml_new_string("src/async_kernel_config.ml"),46,986,1001],
     here$4=[0,caml_new_string("src/async_kernel_config.ml"),53,1143,1158],
     tp_loc=
      caml_new_string
       ("src/async_kernel_config.ml.Dump_core_on_job_delay.How_to_dump.t"),
     tp_loc$0=
      caml_new_string
       ("src/async_kernel_config.ml.Dump_core_on_job_delay.watch"),
     tp_loc$1=
      caml_new_string("src/async_kernel_config.ml.Dump_core_on_job_delay.t"),
     tp_loc$2=caml_new_string("src/async_kernel_config.ml.Debug_tag.T.t"),
     list=caml_list_of_js_array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),
     tp_loc$3=
      caml_new_string("src/async_kernel_config.ml.File_descr_watcher.T.t"),
     list$0=[0,0,[0,1,[0,2,0]]],
     cst_timing_wheel_config=caml_new_string("timing_wheel_config"),
     cst_thread_pool_cpu_affinity=caml_new_string("thread_pool_cpu_affinity"),
     cst_report_thread_pool_stuck_for=
      caml_new_string("report_thread_pool_stuck_for"),
     cst_record_backtraces=caml_new_string("record_backtraces"),
     cst_print_debug_messages_for=caml_new_string("print_debug_messages_for"),
     cst_min_inter_cycle_timeout=caml_new_string("min_inter_cycle_timeout"),
     cst_max_num_jobs_per_priority_per_cycle=
      caml_new_string("max_num_jobs_per_priority_per_cycle"),
     cst_max_num_threads=caml_new_string("max_num_threads"),
     cst_max_num_open_file_descrs=caml_new_string("max_num_open_file_descrs"),
     cst_max_inter_cycle_timeout=caml_new_string("max_inter_cycle_timeout"),
     cst_file_descr_watcher$1=caml_new_string("file_descr_watcher"),
     cst_epoll_max_ready_events=caml_new_string("epoll_max_ready_events"),
     cst_dump_core_on_job_delay=caml_new_string("dump_core_on_job_delay"),
     cst_detect_invalid_access_from_thread=
      caml_new_string("detect_invalid_access_from_thread"),
     cst_check_invariants=caml_new_string("check_invariants"),
     cst_abort_after_thread_pool_stuck_for=
      caml_new_string("abort_after_thread_pool_stuck_for"),
     tp_loc$4=caml_new_string("src/async_kernel_config.ml.t"),
     empty=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     environment_variable=caml_new_string("ASYNC_CONFIG"),
     cst$4=caml_new_string(""),
     cst_async_kernel$4=caml_new_string("async_kernel"),
     cst_async_kernel$5=caml_new_string("async_kernel"),
     cst_src_debug_ml=caml_new_string("src/debug.ml"),
     cst$5=caml_new_string(""),
     cst_async_kernel$6=caml_new_string("async_kernel"),
     cst_async_kernel$7=caml_new_string("async_kernel"),
     cst_async_kernel$8=caml_new_string("async_kernel"),
     cst_src_import_ml=caml_new_string("src/import.ml"),
     cst$6=caml_new_string(""),
     cst_async_kernel$9=caml_new_string("async_kernel"),
     cst_async_kernel$10=caml_new_string("async_kernel"),
     cst_async_kernel$11=caml_new_string("async_kernel"),
     cst_src_priority_ml=caml_new_string("src/priority.ml"),
     cst$7=caml_new_string(""),
     cst_async_kernel$12=caml_new_string("async_kernel"),
     cst_async_kernel$13=caml_new_string("async_kernel"),
     cst_async_kernel$14=caml_new_string("async_kernel"),
     cst_src_types_ml=caml_new_string("src/types.ml"),
     cst$8=caml_new_string(""),
     cst_async_kernel$15=caml_new_string("async_kernel"),
     cst_async_kernel$16=caml_new_string("async_kernel"),
     cst_id$0=caml_new_string("id"),
     cst_created_monitor=caml_new_string("created monitor"),
     cst_async_kernel$17=caml_new_string("async_kernel"),
     cst_src_monitor0_ml=caml_new_string("src/monitor0.ml"),
     cst$9=caml_new_string(""),
     cst_async_kernel$18=caml_new_string("async_kernel"),
     names=
      [0,
       caml_new_string("name"),
       [0,
        caml_new_string("here"),
        [0,
         caml_new_string("id"),
         [0,
          caml_new_string("parent"),
          [0,
           caml_new_string("next_error"),
           [0,
            caml_new_string("handlers_for_all_errors"),
            [0,
             caml_new_string("tails_for_all_errors"),
             [0,
              caml_new_string("has_seen_error"),
              [0,caml_new_string("is_detached"),0]]]]]]]]],
     cst_is_detached=caml_new_string("is_detached"),
     cst_has_seen_error=caml_new_string("has_seen_error"),
     cst_tails_for_all_errors=caml_new_string("tails_for_all_errors"),
     cst_handlers_for_all_errors=caml_new_string("handlers_for_all_errors"),
     cst_next_error=caml_new_string("next_error"),
     cst_parent=caml_new_string("parent"),
     cst_id=caml_new_string("id"),
     cst_here=caml_new_string("here"),
     cst_name=caml_new_string("name"),
     cst_async_kernel$19=caml_new_string("async_kernel"),
     cst_async_kernel$20=caml_new_string("async_kernel"),
     cst_src_execution_context_ml=caml_new_string("src/execution_context.ml"),
     cst$10=caml_new_string(""),
     cst_async_kernel$21=caml_new_string("async_kernel"),
     names$0=
      [0,
       caml_new_string("monitor"),
       [0,
        caml_new_string("priority"),
        [0,
         caml_new_string("local_storage"),
         [0,caml_new_string("backtrace_history"),0]]]],
     cst_backtrace_history=caml_new_string("backtrace_history"),
     cst_local_storage=caml_new_string("local_storage"),
     cst_priority=caml_new_string("priority"),
     cst_monitor$1=caml_new_string("monitor"),
     cst_async_kernel$22=caml_new_string("async_kernel"),
     cst_async_kernel$23=caml_new_string("async_kernel"),
     cst_src_external_job_ml=caml_new_string("src/external_job.ml"),
     cst$11=caml_new_string(""),
     cst_async_kernel$24=caml_new_string("async_kernel"),
     cst_async_kernel$25=caml_new_string("async_kernel"),
     cst_async_kernel$26=caml_new_string("async_kernel"),
     cst_src_job_pool_ml=caml_new_string("src/job_pool.ml"),
     cst$12=caml_new_string(""),
     cst_async_kernel$27=caml_new_string("async_kernel"),
     cst_async_kernel$28=caml_new_string("async_kernel"),
     cst_async_kernel$29=caml_new_string("async_kernel"),
     cst_src_job_ml=caml_new_string("src/job.ml"),
     cst$13=caml_new_string(""),
     cst_async_kernel$30=caml_new_string("async_kernel"),
     cst_async_kernel$31=caml_new_string("async_kernel"),
     cst_async_kernel$32=caml_new_string("async_kernel"),
     cst_src_job_or_event_ml=caml_new_string("src/job_or_event.ml"),
     cst$14=caml_new_string(""),
     cst_async_kernel$33=caml_new_string("async_kernel"),
     cst_async_kernel$34=caml_new_string("async_kernel"),
     cst_async_kernel$35=caml_new_string("async_kernel"),
     cst_src_job_or_event_intf_ml=caml_new_string("src/job_or_event_intf.ml"),
     cst$15=caml_new_string(""),
     cst_async_kernel$36=caml_new_string("async_kernel"),
     cst_async_kernel$37=caml_new_string("async_kernel"),
     cst_async_kernel$38=caml_new_string("async_kernel"),
     cst_src_scheduler0_ml=caml_new_string("src/scheduler0.ml"),
     cst$16=caml_new_string(""),
     cst_async_kernel$39=caml_new_string("async_kernel"),
     cst_async_kernel$40=caml_new_string("async_kernel"),
     cst_Jobs_set_jobs_left_this_cycle_got_negative_number=
      caml_new_string("Jobs.set_jobs_left_this_cycle got negative number"),
     cst_async_kernel$41=caml_new_string("async_kernel"),
     cst_src_job_queue_ml=caml_new_string("src/job_queue.ml"),
     cst$17=caml_new_string(""),
     cst_async_kernel$42=caml_new_string("async_kernel"),
     cst_length=caml_new_string("length"),
     cst_front=caml_new_string("front"),
     cst_mask=caml_new_string("mask"),
     cst_jobs=caml_new_string("jobs"),
     cst_jobs_left_this_cycle=caml_new_string("jobs_left_this_cycle"),
     cst_num_jobs_run=caml_new_string("num_jobs_run"),
     cst_async_kernel$43=caml_new_string("async_kernel"),
     cst_cannot_call_advance_by_alarms_from_callback=
      caml_new_string("cannot call [advance_by_alarms] from callback"),
     cst_cannot_schedule_an_event_with_status=
      caml_new_string("cannot schedule an event with status"),
     cst_Synchronous_time_source_abort_exn_cannot_abort_event=
      caml_new_string
       ("[Synchronous_time_source.abort_exn] cannot abort event"),
     cst_interval_span_smaller_than_alarm_precision=
      caml_new_string("interval span smaller than alarm precision"),
     pos$1=caml_new_string("src/synchronous_time_source0.ml:261:32"),
     pos$0=caml_new_string("src/synchronous_time_source0.ml:260:32"),
     cst_wall_clock=caml_new_string("wall_clock"),
     cst_Job_t=caml_new_string("<Job.t>"),
     cst_bug_set_status_transition_not_allowed=
      caml_new_string("bug -- set_status transition not allowed"),
     cst_src_synchronous_time_source0_ml_150_12=
      caml_new_string("src/synchronous_time_source0.ml:150:12"),
     pos=caml_new_string("src/synchronous_time_source0.ml:122:30"),
     cst_Y_m_dT_H_M_S_z=caml_new_string("%Y-%m-%dT%H:%M:%S%z"),
     cst_async_kernel$44=caml_new_string("async_kernel"),
     cst_src_synchronous_time_source0_ml=
      caml_new_string("src/synchronous_time_source0.ml"),
     cst$18=caml_new_string(""),
     cst_async_kernel$45=caml_new_string("async_kernel"),
     names$1=
      [0,
       caml_new_string("alarm"),
       [0,
        caml_new_string("at"),
        [0,
         caml_new_string("callback"),
         [0,
          caml_new_string("execution_context"),
          [0,
           caml_new_string("interval"),
           [0,caml_new_string("next_fired"),[0,caml_new_string("status"),0]]]]]]],
     cst_status=caml_new_string("status"),
     cst_next_fired=caml_new_string("next_fired"),
     cst_interval=caml_new_string("interval"),
     cst_execution_context=caml_new_string("execution_context"),
     cst_callback=caml_new_string("callback"),
     cst_at=caml_new_string("at"),
     cst_alarm=caml_new_string("alarm"),
     names$2=
      [0,
       caml_new_string("id"),
       [0,
        caml_new_string("advance_errors"),
        [0,
         caml_new_string("am_advancing"),
         [0,
          caml_new_string("events"),
          [0,
           caml_new_string("fired_events"),
           [0,
            caml_new_string("most_recently_fired"),
            [0,
             caml_new_string("handle_fired"),
             [0,
              caml_new_string("is_wall_clock"),
              [0,caml_new_string("scheduler"),0]]]]]]]]],
     cst_scheduler$1=caml_new_string("scheduler"),
     cst_is_wall_clock=caml_new_string("is_wall_clock"),
     cst_handle_fired=caml_new_string("handle_fired"),
     cst_most_recently_fired=caml_new_string("most_recently_fired"),
     cst_fired_events=caml_new_string("fired_events"),
     cst_events=caml_new_string("events"),
     cst_am_advancing=caml_new_string("am_advancing"),
     cst_advance_errors=caml_new_string("advance_errors"),
     cst_id$1=caml_new_string("id"),
     cst_async_kernel$46=caml_new_string("async_kernel"),
     cst_got_uncaught_exn=caml_new_string("got_uncaught_exn"),
     cst_Scheduler_invariant_failed=
      caml_new_string("Scheduler.invariant failed"),
     cst_unhandled_exception=caml_new_string("unhandled exception"),
     cst_async_kernel$47=caml_new_string("async_kernel"),
     cst_src_scheduler1_ml=caml_new_string("src/scheduler1.ml"),
     cst$19=caml_new_string(""),
     cst_async_kernel$48=caml_new_string("async_kernel"),
     names$3=
      [0,caml_new_string("execution_context"),[0,caml_new_string("exec"),0]],
     cst_exec=caml_new_string("exec"),
     cst_execution_context$0=caml_new_string("execution_context"),
     names$4=
      caml_list_of_js_array
       ([caml_new_string("check_access"),
         caml_new_string("job_pool"),
         caml_new_string("normal_priority_jobs"),
         caml_new_string("low_priority_jobs"),
         caml_new_string("very_low_priority_workers"),
         caml_new_string("main_execution_context"),
         caml_new_string("current_execution_context"),
         caml_new_string("uncaught_exn"),
         caml_new_string("cycle_count"),
         caml_new_string("cycle_start"),
         caml_new_string("in_cycle"),
         caml_new_string("run_every_cycle_start"),
         caml_new_string("last_cycle_time"),
         caml_new_string("last_cycle_num_jobs"),
         caml_new_string("total_cycle_time"),
         caml_new_string("time_source"),
         caml_new_string("external_jobs"),
         caml_new_string("thread_safe_external_job_hook"),
         caml_new_string("job_queued_hook"),
         caml_new_string("event_added_hook"),
         caml_new_string("yield"),
         caml_new_string("yield_until_no_jobs_remain"),
         caml_new_string("check_invariants"),
         caml_new_string("max_num_jobs_per_priority_per_cycle"),
         caml_new_string("record_backtraces"),
         caml_new_string("on_start_of_cycle"),
         caml_new_string("on_end_of_cycle")]),
     cst_on_end_of_cycle=caml_new_string("on_end_of_cycle"),
     cst_on_start_of_cycle=caml_new_string("on_start_of_cycle"),
     cst_record_backtraces$1=caml_new_string("record_backtraces"),
     cst_max_num_jobs_per_priority_per_cycle$1=
      caml_new_string("max_num_jobs_per_priority_per_cycle"),
     cst_check_invariants$1=caml_new_string("check_invariants"),
     cst_yield_until_no_jobs_remain=
      caml_new_string("yield_until_no_jobs_remain"),
     cst_yield=caml_new_string("yield"),
     cst_event_added_hook=caml_new_string("event_added_hook"),
     cst_job_queued_hook=caml_new_string("job_queued_hook"),
     cst_thread_safe_external_job_hook=
      caml_new_string("thread_safe_external_job_hook"),
     cst_external_jobs=caml_new_string("external_jobs"),
     cst_time_source=caml_new_string("time_source"),
     cst_total_cycle_time=caml_new_string("total_cycle_time"),
     cst_last_cycle_num_jobs=caml_new_string("last_cycle_num_jobs"),
     cst_last_cycle_time=caml_new_string("last_cycle_time"),
     cst_run_every_cycle_start=caml_new_string("run_every_cycle_start"),
     cst_in_cycle=caml_new_string("in_cycle"),
     cst_cycle_start=caml_new_string("cycle_start"),
     cst_cycle_count=caml_new_string("cycle_count"),
     cst_uncaught_exn=caml_new_string("uncaught_exn"),
     cst_current_execution_context=
      caml_new_string("current_execution_context"),
     cst_main_execution_context=caml_new_string("main_execution_context"),
     cst_very_low_priority_workers=
      caml_new_string("very_low_priority_workers"),
     cst_low_priority_jobs=caml_new_string("low_priority_jobs"),
     cst_normal_priority_jobs=caml_new_string("normal_priority_jobs"),
     cst_job_pool=caml_new_string("job_pool"),
     cst_check_access=caml_new_string("check_access"),
     cst_Async_cannot_create_its_raw_scheduler=
      caml_new_string("Async cannot create its raw scheduler"),
     cst_async_kernel$49=caml_new_string("async_kernel"),
     cst_Ivar_fill_of_full_ivar=caml_new_string("Ivar.fill of full ivar"),
     cst_Ivar_value_exn_called_on_empty_ivar=
      caml_new_string("Ivar.value_exn called on empty ivar"),
     cst_async_kernel$50=caml_new_string("async_kernel"),
     cst_src_ivar0_ml=caml_new_string("src/ivar0.ml"),
     cst$20=caml_new_string(""),
     cst_async_kernel$51=caml_new_string("async_kernel"),
     cst_async_kernel$52=caml_new_string("async_kernel"),
     cst_Deferred_value_exn_called_on_undetermined_deferred=
      caml_new_string("Deferred.value_exn called on undetermined deferred"),
     cst_async_kernel$53=caml_new_string("async_kernel"),
     cst_src_deferred0_ml=caml_new_string("src/deferred0.ml"),
     cst$21=caml_new_string(""),
     cst_async_kernel$54=caml_new_string("async_kernel"),
     cst_async_kernel$55=caml_new_string("async_kernel"),
     cst_async_kernel$56=caml_new_string("async_kernel"),
     cst_src_ivar_ml=caml_new_string("src/ivar.ml"),
     cst$22=caml_new_string(""),
     cst_async_kernel$57=caml_new_string("async_kernel"),
     cst_async_kernel$58=caml_new_string("async_kernel"),
     cst_async_kernel$59=caml_new_string("async_kernel"),
     cst_src_monad_sequence_ml=caml_new_string("src/monad_sequence.ml"),
     cst$23=caml_new_string(""),
     cst_async_kernel$60=caml_new_string("async_kernel"),
     cst_async_kernel$61=caml_new_string("async_kernel"),
     cst_async_kernel$62=caml_new_string("async_kernel"),
     cst_src_deferred1_ml=caml_new_string("src/deferred1.ml"),
     cst$24=caml_new_string(""),
     cst_async_kernel$63=caml_new_string("async_kernel"),
     cst_async_kernel$64=caml_new_string("async_kernel"),
     cst_async_kernel$65=caml_new_string("async_kernel"),
     cst_src_deferred_std_ml=caml_new_string("src/deferred_std.ml"),
     cst$25=caml_new_string(""),
     cst_async_kernel$66=caml_new_string("async_kernel"),
     cst_async_kernel$67=caml_new_string("async_kernel"),
     cst_attempt_to_fill_full_ivar=
      caml_new_string("attempt to fill full ivar"),
     cst_async_kernel$68=caml_new_string("async_kernel"),
     cst_src_ivar_filler_ml=caml_new_string("src/ivar_filler.ml"),
     cst$26=caml_new_string(""),
     cst_async_kernel$69=caml_new_string("async_kernel"),
     cst_async_kernel$70=caml_new_string("async_kernel"),
     cst_stream_is_closed=caml_new_string("stream is closed"),
     cst_open_tail=caml_new_string("<open tail>"),
     cst_closed_tail=caml_new_string("<closed tail>"),
     cst_async_kernel$71=caml_new_string("async_kernel"),
     cst_src_tail_ml=caml_new_string("src/tail.ml"),
     cst$27=caml_new_string(""),
     cst_async_kernel$72=caml_new_string("async_kernel"),
     cst_async_kernel$73=caml_new_string("async_kernel"),
     cst_Monitor_catch_got_unexpected_empty_stream=
      caml_new_string("Monitor.catch got unexpected empty stream"),
     cst_Async_finally=caml_new_string("Async finally"),
     cst_Monitor_protect=caml_new_string("Monitor.protect"),
     cst_try_with_join_or_error=caml_new_string("try_with_join_or_error"),
     cst_try_with_or_error=caml_new_string("try_with_or_error"),
     cst$30=caml_new_string(""),
     cst_failed_to_set_Monitor_Expert_try_with_log_exn=
      caml_new_string("failed to set [Monitor.Expert.try_with_log_exn]"),
     cst_Monitor_send_exn_found_listening_monitor=
      caml_new_string("Monitor.send_exn found listening monitor"),
     cst_Monitor_send_exn$1=caml_new_string("Monitor.send_exn"),
     cst_monitor_ml_Error=caml_new_string("monitor.ml.Error"),
     cst$29=caml_new_string(""),
     cst_async_kernel$74=caml_new_string("async_kernel"),
     cst_src_monitor_ml=caml_new_string("src/monitor.ml"),
     cst$28=caml_new_string(""),
     cst_async_kernel$75=caml_new_string("async_kernel"),
     job_queue=caml_new_string('Called from file "job_queue.ml"'),
     deferred0=caml_new_string('Called from file "deferred0.ml"'),
     deferred1=caml_new_string('Called from file "deferred1.ml"'),
     monitor$2=caml_new_string('Called from file "monitor.ml"'),
     import0=caml_new_string('Raised at file "import0.ml"'),
     error=caml_new_string('Called from file "error.ml"'),
     cst_Async_kernel_Monitor_Error=
      caml_new_string("Async_kernel__Monitor.Error_"),
     cst_async_kernel$76=caml_new_string("async_kernel"),
     cst_Stream_first_of_empty_stream=
      caml_new_string("Stream.first of empty stream"),
     cst_async_kernel$77=caml_new_string("async_kernel"),
     cst_src_async_stream_ml=caml_new_string("src/async_stream.ml"),
     cst$31=caml_new_string(""),
     cst_async_kernel$78=caml_new_string("async_kernel"),
     cst_async_kernel$79=caml_new_string("async_kernel"),
     cst_async_kernel$80=caml_new_string("async_kernel"),
     cst_src_synchronous_time_source_ml=
      caml_new_string("src/synchronous_time_source.ml"),
     cst$32=caml_new_string(""),
     cst_async_kernel$81=caml_new_string("async_kernel"),
     cst_async_kernel$82=caml_new_string("async_kernel"),
     cst_async_kernel$83=caml_new_string("async_kernel"),
     cst_src_time_source_intf_ml=caml_new_string("src/time_source_intf.ml"),
     cst$33=caml_new_string(""),
     cst_async_kernel$84=caml_new_string("async_kernel"),
     cst_async_kernel$85=caml_new_string("async_kernel"),
     cst_async_kernel$86=caml_new_string("async_kernel"),
     cst_src_bvar_ml=caml_new_string("src/bvar.ml"),
     cst$34=caml_new_string(""),
     cst_async_kernel$87=caml_new_string("async_kernel"),
     cst_ivar=caml_new_string("ivar"),
     cst_has_any_waiters=caml_new_string("has_any_waiters"),
     cst_async_kernel$88=caml_new_string("async_kernel"),
     cst_Time_source_with_timeout_bug_should_only_abort_once=
      caml_new_string("Time_source.with_timeout bug: should only abort once"),
     cst_Time_source_with_timeout_bug_both_completed_and_timed_out=
      caml_new_string
       ("Time_source.with_timeout bug: both completed and timed out"),
     cst_Time_source_every_got_nonpositive_span=
      caml_new_string("Time_source.every got nonpositive span"),
     cst_Time_source_Event_run_at=caml_new_string("Time_source.Event.run_at"),
     cst_Time_source_Event_reschedule_at=
      caml_new_string("Time_source.Event.reschedule_at"),
     cst_Clock_Event_abort_exn_failed_to_abort_event_that_previously_aborted=
      caml_new_string
       ("Clock.Event.abort_exn failed to abort event that previously aborted"),
     cst_Clock_Event_abort_exn_failed_to_abort_event_that_previously_happened=
      caml_new_string
       ("Clock.Event.abort_exn failed to abort event that previously happened"),
     cst_Time_source_Event_abort=caml_new_string("Time_source.Event.abort"),
     pos$2=caml_new_string("src/time_source.ml:245:30"),
     cst_wall_clock$0=caml_new_string("<wall_clock>"),
     cst_async_kernel$89=caml_new_string("async_kernel"),
     cst_src_time_source_ml=caml_new_string("src/time_source.ml"),
     cst$35=caml_new_string(""),
     cst_async_kernel$90=caml_new_string("async_kernel"),
     cst_scheduled_at=caml_new_string("scheduled_at"),
     cst_num_fires_to_skip=caml_new_string("num_fires_to_skip"),
     cst_fired=caml_new_string("fired"),
     cst_alarm$0=caml_new_string("alarm"),
     cst_async_kernel$91=caml_new_string("async_kernel"),
     cst_Stack_or_counter_pop_exn_of_empty_stack=
      caml_new_string("[Stack_or_counter.pop_exn] of empty stack"),
     cst_Stack_or_counter_create_counter_got_negative_length=
      caml_new_string("[Stack_or_counter.create_counter] got negative length"),
     cst_async_kernel$92=caml_new_string("async_kernel"),
     cst_src_stack_or_counter_ml=caml_new_string("src/stack_or_counter.ml"),
     cst$36=caml_new_string(""),
     cst_async_kernel$93=caml_new_string("async_kernel"),
     cst_async_kernel$94=caml_new_string("async_kernel"),
     cst_enqueue_exclusive_was_called_with_a_very_large_value_of_max_concurrent_jobs_This_doesn_t_work=
      caml_new_string
       ("[enqueue_exclusive] was called with a very large value of [max_concurrent_jobs]. This doesn't work."),
     cst_throttle_aborted_job=caml_new_string("throttle aborted job"),
     cst_Throttle_create_requires_positive_max_concurrent_jobs_but_got=
      caml_new_string
       ("Throttle.create requires positive max_concurrent_jobs, but got"),
     cst_Throttle_invariant_failed=
      caml_new_string("Throttle.invariant failed"),
     cst_async_kernel$95=caml_new_string("async_kernel"),
     cst_src_throttle_ml=caml_new_string("src/throttle.ml"),
     cst$37=caml_new_string(""),
     cst_async_kernel$96=caml_new_string("async_kernel"),
     cst_cleaned=caml_new_string("cleaned"),
     cst_num_resources_not_cleaned=
      caml_new_string("num_resources_not_cleaned"),
     cst_cleans=caml_new_string("cleans"),
     cst_is_dead=caml_new_string("is_dead"),
     cst_capacity_available=caml_new_string("capacity_available"),
     cst_num_jobs_running=caml_new_string("num_jobs_running"),
     cst_jobs_waiting_to_start=caml_new_string("jobs_waiting_to_start"),
     cst_job_resources_not_in_use=caml_new_string("job_resources_not_in_use"),
     cst_max_concurrent_jobs=caml_new_string("max_concurrent_jobs"),
     cst_continue_on_error=caml_new_string("continue_on_error"),
     cst_async_kernel$97=caml_new_string("async_kernel"),
     cst_Scheduler_yield_every_got_nonpositive_count=
      caml_new_string("Scheduler.yield_every got nonpositive count"),
     cst_reset_in_forked_process=caml_new_string("reset_in_forked_process"),
     cst_Async_scheduler_is_unusable_due_to_make_async_unusable=
      caml_new_string
       ("Async scheduler is unusable due to [make_async_unusable]"),
     cst_run_cycles_until_no_jobs_remain_starting=
      caml_new_string("run_cycles_until_no_jobs_remain starting"),
     cst_run_cycles_until_no_jobs_remain_cannot_proceed_scheduler_is_dead=
      caml_new_string
       ("run_cycles_until_no_jobs_remain cannot proceed -- scheduler is dead"),
     cst_run_cycles_until_no_jobs_remain_finished=
      caml_new_string("run_cycles_until_no_jobs_remain finished"),
     cst_run_cycle_starting=caml_new_string("run_cycle starting"),
     cst_run_cycle_finished=caml_new_string("run_cycle finished"),
     cst_enqueueing_finalizer_using_last_semantic=
      caml_new_string("enqueueing finalizer (using 'last' semantic)"),
     cst_adding_finalizer_using_last_semantic=
      caml_new_string("adding finalizer (using 'last' semantic)"),
     cst_enqueueing_finalizer=caml_new_string("enqueueing finalizer"),
     cst_adding_finalizer=caml_new_string("adding finalizer"),
     cst_async_kernel$98=caml_new_string("async_kernel"),
     cst_src_scheduler_ml=caml_new_string("src/scheduler.ml"),
     cst$38=caml_new_string(""),
     cst_async_kernel$99=caml_new_string("async_kernel"),
     cst_async_kernel$100=caml_new_string("async_kernel"),
     cst_async_kernel$101=caml_new_string("async_kernel"),
     cst_src_async_kernel_scheduler_ml=
      caml_new_string("src/async_kernel_scheduler.ml"),
     cst$39=caml_new_string(""),
     cst_async_kernel$102=caml_new_string("async_kernel"),
     cst_async_kernel$103=caml_new_string("async_kernel"),
     cst_async_kernel$104=caml_new_string("async_kernel"),
     cst_src_clock_intf_ml=caml_new_string("src/clock_intf.ml"),
     cst$40=caml_new_string(""),
     cst_async_kernel$105=caml_new_string("async_kernel"),
     cst_async_kernel$106=caml_new_string("async_kernel"),
     cst_async_kernel$107=caml_new_string("async_kernel"),
     cst_src_clock_ns_ml=caml_new_string("src/clock_ns.ml"),
     cst$41=caml_new_string(""),
     cst_async_kernel$108=caml_new_string("async_kernel"),
     cst_async_kernel$109=caml_new_string("async_kernel"),
     cst_async_kernel$110=caml_new_string("async_kernel"),
     cst_src_deferred_array_ml=caml_new_string("src/deferred_array.ml"),
     cst$42=caml_new_string(""),
     cst_async_kernel$111=caml_new_string("async_kernel"),
     cst_async_kernel$112=caml_new_string("async_kernel"),
     cst_async_kernel$113=caml_new_string("async_kernel"),
     cst_src_deferred_list_ml=caml_new_string("src/deferred_list.ml"),
     cst$43=caml_new_string(""),
     cst_async_kernel$114=caml_new_string("async_kernel"),
     cst_async_kernel$115=caml_new_string("async_kernel"),
     cst_async_kernel$116=caml_new_string("async_kernel"),
     cst_src_deferred_map_ml=caml_new_string("src/deferred_map.ml"),
     cst$44=caml_new_string(""),
     cst_async_kernel$117=caml_new_string("async_kernel"),
     cst_async_kernel$118=caml_new_string("async_kernel"),
     cst_caught_exception_in_memoized_function=
      caml_new_string("caught exception in memoized function"),
     cst_async_kernel$119=caml_new_string("async_kernel"),
     cst_src_deferred_memo_ml=caml_new_string("src/deferred_memo.ml"),
     cst$45=caml_new_string(""),
     cst_async_kernel$120=caml_new_string("async_kernel"),
     cst_async_kernel$121=caml_new_string("async_kernel"),
     cst_async_kernel$122=caml_new_string("async_kernel"),
     cst_src_deferred_option_ml=caml_new_string("src/deferred_option.ml"),
     cst$46=caml_new_string(""),
     cst_async_kernel$123=caml_new_string("async_kernel"),
     cst_async_kernel$124=caml_new_string("async_kernel"),
     cst_async_kernel$125=caml_new_string("async_kernel"),
     cst_src_deferred_result_ml=caml_new_string("src/deferred_result.ml"),
     cst$47=caml_new_string(""),
     cst_async_kernel$126=caml_new_string("async_kernel"),
     cst_async_kernel$127=caml_new_string("async_kernel"),
     cst_async_kernel$128=caml_new_string("async_kernel"),
     cst_src_deferred_or_error_ml=caml_new_string("src/deferred_or_error.ml"),
     cst$48=caml_new_string(""),
     cst_async_kernel$129=caml_new_string("async_kernel"),
     cst_async_kernel$130=caml_new_string("async_kernel"),
     cst_async_kernel$131=caml_new_string("async_kernel"),
     cst_src_deferred_queue_ml=caml_new_string("src/deferred_queue.ml"),
     cst$49=caml_new_string(""),
     cst_async_kernel$132=caml_new_string("async_kernel"),
     cst_async_kernel$133=caml_new_string("async_kernel"),
     cst_async_kernel$134=caml_new_string("async_kernel"),
     cst_src_deferred_sequence_ml=caml_new_string("src/deferred_sequence.ml"),
     cst$50=caml_new_string(""),
     cst_async_kernel$135=caml_new_string("async_kernel"),
     cst_async_kernel$136=caml_new_string("async_kernel"),
     cst_async_kernel$137=caml_new_string("async_kernel"),
     cst_src_deferred_ml=caml_new_string("src/deferred.ml"),
     cst$51=caml_new_string(""),
     cst_async_kernel$138=caml_new_string("async_kernel"),
     cst_async_kernel$139=caml_new_string("async_kernel"),
     cst_async_kernel$140=caml_new_string("async_kernel"),
     cst_src_require_explicit_time_source_ml=
      caml_new_string("src/require_explicit_time_source.ml"),
     cst$52=caml_new_string(""),
     cst_async_kernel$141=caml_new_string("async_kernel"),
     cst_async_kernel$142=caml_new_string("async_kernel"),
     cst_iter_without_pushback_got_non_positive_max_iterations_per_job=
      caml_new_string
       ("iter_without_pushback got non-positive max_iterations_per_job"),
     cst_read_exactly=caml_new_string("read_exactly"),
     cst_Pipe_read_exactly_got_num_values_0=
      caml_new_string("Pipe.read_exactly got num_values <= 0"),
     cst_Pipe_read_choice_single_consumer_exn_choice_was_enabled_but_pipe_is_empty_this_is_likely_due_to_a_race_condition_with_one_or_more_other_consumers=
      caml_new_string
       ("Pipe.read_choice_single_consumer_exn: choice was enabled but pipe is empty; this is likely due to a race condition with one or more other consumers"),
     cst_values_available=caml_new_string("values_available"),
     cst_read$0=caml_new_string("read"),
     cst_read=caml_new_string("read'"),
     cst_max_queue_length_0=caml_new_string("max_queue_length <= 0"),
     cst_read_now=caml_new_string("read_now"),
     cst_Attempt_to_use_consumer_with_wrong_pipe=
      caml_new_string("Attempt to use consumer with wrong pipe"),
     cst_write=caml_new_string("write"),
     cst_write_to_closed_pipe=caml_new_string("write to closed pipe"),
     cst_negative_size_budget=caml_new_string("negative size_budget"),
     cst_close_read=caml_new_string("close_read"),
     cst_close=caml_new_string("close"),
     cst_Pipe_invariant_failed=caml_new_string("Pipe.invariant failed"),
     cst_Pipe_Blocked_read_invariant_failed=
      caml_new_string("Pipe.Blocked_read.invariant failed"),
     cst_Pipe_Consumer_invariant_failed=
      caml_new_string("Pipe.Consumer.invariant failed"),
     cst_async_kernel$143=caml_new_string("async_kernel"),
     cst_src_pipe_ml=caml_new_string("src/pipe.ml"),
     cst$53=caml_new_string(""),
     cst_async_kernel$144=caml_new_string("async_kernel"),
     cst_downstream_flushed=caml_new_string("downstream_flushed"),
     cst_values_read=caml_new_string("values_read"),
     cst_pipe_id=caml_new_string("pipe_id"),
     cst_consumer=caml_new_string("consumer"),
     cst_wants=caml_new_string("wants"),
     cst_upstream_flusheds=caml_new_string("upstream_flusheds"),
     cst_consumers=caml_new_string("consumers"),
     cst_read_closed=caml_new_string("read_closed"),
     cst_closed=caml_new_string("closed"),
     cst_blocked_reads=caml_new_string("blocked_reads"),
     cst_blocked_flushes=caml_new_string("blocked_flushes"),
     cst_num_values_read=caml_new_string("num_values_read"),
     cst_pushback=caml_new_string("pushback"),
     cst_size_budget=caml_new_string("size_budget"),
     cst_buffer=caml_new_string("buffer"),
     cst_id$2=caml_new_string("id"),
     cst_async_kernel$145=caml_new_string("async_kernel"),
     cst_Mvar_take_exn_called_on_empty_mvar=
      caml_new_string("Mvar.take_exn called on empty mvar"),
     cst_Mvar_peek_exn_called_on_empty_mvar=
      caml_new_string("Mvar.peek_exn called on empty mvar"),
     pos$3=caml_new_string("src/mvar.ml:23:26"),
     cst_async_kernel$146=caml_new_string("async_kernel"),
     cst_src_mvar_ml=caml_new_string("src/mvar.ml"),
     cst$54=caml_new_string(""),
     cst_async_kernel$147=caml_new_string("async_kernel"),
     cst_value_available=caml_new_string("value_available"),
     cst_taken=caml_new_string("taken"),
     cst_current_value=caml_new_string("current_value"),
     cst_async_kernel$148=caml_new_string("async_kernel"),
     cst_async_kernel$149=caml_new_string("async_kernel"),
     cst_src_lazy_deferred_ml=caml_new_string("src/lazy_deferred.ml"),
     cst$55=caml_new_string(""),
     cst_async_kernel$150=caml_new_string("async_kernel"),
     cst_async_kernel$151=caml_new_string("async_kernel"),
     cst_async_kernel$152=caml_new_string("async_kernel"),
     cst_src_async_condition_ml=caml_new_string("src/async_condition.ml"),
     cst$56=caml_new_string(""),
     cst_async_kernel$153=caml_new_string("async_kernel"),
     cst_async_kernel$154=caml_new_string("async_kernel"),
     cst_async_kernel$155=caml_new_string("async_kernel"),
     cst_src_async_gc_ml=caml_new_string("src/async_gc.ml"),
     cst$57=caml_new_string(""),
     cst_async_kernel$156=caml_new_string("async_kernel"),
     cst_async_kernel$157=caml_new_string("async_kernel"),
     cst_async_kernel$158=caml_new_string("async_kernel"),
     cst_src_async_invariant_intf_ml=
      caml_new_string("src/async_invariant_intf.ml"),
     cst$58=caml_new_string(""),
     cst_async_kernel$159=caml_new_string("async_kernel"),
     cst_async_kernel$160=caml_new_string("async_kernel"),
     cst_problem_with_field=caml_new_string("problem with field"),
     cst_invariant_failed=caml_new_string("invariant failed"),
     cst_async_kernel$161=caml_new_string("async_kernel"),
     cst_src_async_invariant_ml=caml_new_string("src/async_invariant.ml"),
     cst$59=caml_new_string(""),
     cst_async_kernel$162=caml_new_string("async_kernel"),
     cst_async_kernel$163=caml_new_string("async_kernel"),
     pos$4=caml_new_string("src/async_kernel.ml:93:17"),
     cst_async_kernel$164=caml_new_string("async_kernel"),
     cst_src_async_kernel_ml=caml_new_string("src/async_kernel.ml"),
     cst$60=caml_new_string(""),
     cst_async_kernel$165=caml_new_string("async_kernel"),
     cst_src_async_kernel_ml$0=caml_new_string("src/async_kernel.ml"),
     cst_return_does_not_allocate=
      caml_new_string(": [return ()] does not allocate"),
     cst_async_kernel$166=caml_new_string("async_kernel"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     include=global_data.Core_kernel__Time_ns_alternate_sexp,
     Base_Field=global_data.Base__Field,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Timing_wheel=global_data.Timing_wheel,
     Thread_pool_cpu_affinity=global_data.Thread_pool_cpu_affinity,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Core_kernel_Validated=global_data.Core_kernel__Validated,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Base_Word_size=global_data.Base__Word_size,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Debug=global_data.Core_kernel__Debug,
     CamlinternalMod=global_data.CamlinternalMod,
     Core_kernel_Unique_id=global_data.Core_kernel__Unique_id,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Core_kernel_Bag=global_data.Core_kernel__Bag,
     Core_kernel_Source_code_position=
      global_data.Core_kernel__Source_code_position,
     Base_Backtrace=global_data.Base__Backtrace,
     Core_kernel_Univ_map=global_data.Core_kernel__Univ_map,
     Tuple_pool=global_data.Tuple_pool,
     Stdlib_obj=global_data.Stdlib__obj,
     Core_kernel_Uniform_array=global_data.Core_kernel__Uniform_array,
     Thread_safe_queue=global_data.Thread_safe_queue,
     Assert_failure=global_data.Assert_failure,
     include$9=global_data.Base__Invariant,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Deque=global_data.Core_kernel__Deque,
     Core_kernel_Binable=global_data.Core_kernel__Binable,
     Base_Monad=global_data.Base__Monad,
     Sexplib_Conv=global_data.Sexplib__Conv,
     Base_Stack=global_data.Base__Stack,
     Base=global_data.Base,
     Core_kernel_Queue=global_data.Core_kernel__Queue,
     Core_kernel_Heap_block=global_data.Core_kernel__Heap_block,
     Stdlib_gc=global_data.Stdlib__gc,
     Stdlib=global_data.Stdlib,
     include$24=global_data.Core_kernel__Gc,
     Base_Staged=global_data.Base__Staged,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Core_kernel_Memo=global_data.Core_kernel__Memo,
     Core_kernel_Printf=global_data.Core_kernel__Printf,
     Base_Applicative=global_data.Base__Applicative,
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Core_kernel_Date=global_data.Core_kernel__Date,
     Core_kernel_Time_float=global_data.Core_kernel__Time_float,
     Pairing_heap=global_data.Pairing_heap,
     Core_kernel_Bool=global_data.Core_kernel__Bool,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Moption=global_data.Moption,
     Core_kernel_Unit=global_data.Core_kernel__Unit,
     Inline_test_config=global_data.Inline_test_config,
     Async_kernel=[0];
    caml_register_global(1157,Async_kernel,"Async_kernel__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel);
    caml_call1(Expect_test_collector[4][1],cst_src_time_ns_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$0,cst);
    var
     _a_=include[1],
     _b_=include[2],
     _c_=include[3],
     _d_=include[4],
     _e_=include[5],
     _f_=include[6],
     _g_=include[7],
     _h_=include[8],
     _i_=include[9],
     _j_=include[10],
     _k_=include[11],
     _l_=include[12],
     _m_=include[13],
     _n_=include[14],
     _o_=include[15],
     _p_=include[16],
     _q_=include[17],
     _r_=include[18],
     _s_=include[19],
     _t_=include[20],
     _u_=include[21],
     _v_=include[22],
     _w_=include[23],
     _x_=include[24],
     _y_=include[25],
     _z_=include[26],
     _A_=include[27],
     _B_=include[28],
     _C_=include[29],
     _D_=include[30],
     _E_=include[31],
     _F_=include[32],
     _G_=include[33],
     _H_=include[34],
     _I_=include[35],
     _J_=include[36],
     _K_=include[37],
     _L_=include[38],
     _M_=include[39],
     _N_=include[40],
     _O_=include[41],
     _P_=include[42],
     _Q_=include[43],
     _R_=include[44],
     _S_=include[45],
     _T_=include[46],
     _U_=include[47],
     _V_=include[48],
     _W_=include[49],
     _X_=include[50],
     _Y_=include[51],
     _Z_=include[52],
     ___=include[53],
     _$_=include[54],
     _aa_=include[55],
     _ab_=include[56],
     _ac_=include[57],
     _ad_=include[58],
     _ae_=include[59],
     _af_=include[60],
     _ag_=include[61],
     _ah_=include[62],
     _ai_=include[63],
     _aj_=include[64],
     _ak_=include[65],
     _al_=include[66],
     _am_=include[67],
     _an_=include[68],
     _ao_=include[69],
     _ap_=include[70],
     _aq_=include[71],
     _ar_=include[72],
     _as_=include[73],
     _at_=include[74],
     _au_=include[75],
     _av_=include[76],
     _aw_=include[77],
     _ax_=include[78],
     _ay_=include[79],
     _az_=include[80],
     _aA_=include[81],
     _aB_=include[82],
     _aC_=include[83],
     _aD_=include[84],
     _aE_=include[85],
     _aF_=include[86],
     _aG_=include[87],
     _aH_=include[88],
     _aI_=include[89],
     _cC_=[0,caml_new_string("<no task id>")],
     _cy_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _cp_=[0,caml_new_string(" [ulimit -n -H]"),0],
     _ck_=[0,caml_new_string("\n"),0],
     _cf_=
      [0,
       caml_new_string
        ("\n  This is used to adjust the time/space tradeoff in the timing wheel\n  used to implement Async's clock.  Time is split into intervals of\n  size [alarm_precision], and alarms with times in the same interval\n  fire in the same cycle.  Level [i] in the timing wheel has an\n  array of size [2^b], where [b] is the [i]'th entry in [level_bits].\n"),
       0],
     _cg_=
      [0,
       caml_new_string
        ("\n   Whether and how threads in the thread pool should be affinitized to CPUs.\n"),
       0],
     _ch_=
      [0,
       caml_new_string
        ("\n  By default, Async will print a message to stderr every second if\n  the thread pool is stuck for longer than this.\n"),
       0],
     _ci_=
      [0,
       caml_new_string
        ("\n  If true, this will cause Async to keep in the execution context the\n  history of stack backtraces (obtained via [Backtrace.get]) that led\n  to the current job.  If an Async job has an unhandled exception,\n  this backtrace history will be recorded in the exception.  In\n  particular the history will appear in an unhandled exception that\n  reaches the main monitor.  This can have a substantial performance\n  impact, both in running time and space usage.\n"),
       0],
     _cj_=
      [0,
       caml_new_string
        ("\n  Turning on debug messages will substantially slow down most programs.\n"),
       0],
     _cl_=
      [0,
       caml_new_string
        ("\n  The minimum timeout the scheduler will pass to the OS when it checks\n  for I/O between cycles.  This is zero by default.  Setting it to a\n  nonzero value is used to increase thread fairness between the scheduler\n  and other threads.  A plausible setting is 1us.  This is also\n  configurable in OCaml via [Scheduler.set_min_inter_cycle_timeout].\n"),
       0],
     _cm_=
      [0,
       caml_new_string
        ("\n  The maximum number of jobs that will be done at each priority within\n  each Async cycle.  This limits how many jobs the scheduler will run\n  before pausing to check for I/O.\n"),
       0],
     _cn_=
      [0,
       caml_new_string
        ("\n  The maximum number of threads that Async will create to do blocking\n  system calls and handle calls to [In_thread.run].\n"),
       0],
     _co_=
      [0,
       caml_new_string
        ("\n  The maximum number of open file descriptors allowed at any one time."),
       0],
     _cq_=
      [0,
       caml_new_string
        ("\n  The maximum amount of time the scheduler will pause between cycles\n  when it has no jobs and is going to wait for I/O.  In principle one\n  doesn't need this, and we could use an infinite timeout.  We instead\n  use a small timeout (by default), to be more robust to bugs that\n  could prevent Async from waking up and servicing events.  For\n  example, as of 2013-01, the OCaml runtime has a bug that causes it\n  to not necessarily run an OCaml signal handler in a timely manner.\n  This in turn can cause a simple Async program that is waiting on a\n  signal to hang, when in fact it should handle the signal.\n\n  We use 50ms as the default timeout, because it is infrequent enough\n  to have a negligible performance impact, and frequent enough that\n  the latency would typically be not noticeable.  Also, 50ms is what\n  the OCaml ticker thread uses.\n"),
       0],
     _cr_=[0,caml_new_string(".\n"),0],
     _cs_=[0,caml_new_string(", ")],
     _ct_=
      [0,
       caml_new_string
        ("\n  The maximum number of ready events that Async's call to [Epoll.wait]\n  will handle.\n"),
       0],
     _cu_=
      [0,
       caml_new_string
        ("\n  Can be set to [Do_not_watch] or:\n\n    (Watch ((dump_if_delayed_by SPAN) (how_to_dump HOW)))\n\n  If set to [Watch], then on program start this will start a regular\n  Async job that increments a counter, and a C thread that will\n  detect if that job is delayed by [dump_if_delayed_by], and if so,\n  will core dump the program.  If available, [/usr/bin/gcore] is\n  used by default to dump the core, which should allow the program\n  to continue running.  Otherwise, [abort] will be called from C,\n  which will kill the program while causing a core dump.  One can\n  force [abort] or [gcore] via [how_to_dump], which should be one of:\n  [Call_abort], [Call_gcore], or [Default].\n"),
       0],
     _cv_=
      [0,
       caml_new_string
        ("\n  If true, causes Async routines to check if they are being accessed\n  from some thread other than the thread currently holding the Async\n  lock, which is not allowed and can lead to very confusing behavior.\n"),
       0],
     _cw_=
      [0,
       caml_new_string
        ("\n  If true, causes Async to regularly check invariants of its internal\n  data structures.  This can substantially slow down your program.\n"),
       0],
     _cx_=
      [0,
       caml_new_string
        ("\n  By default, Async will send an exception to the toplevel monitor\n  if it detects that the thread pool is stuck for longer than this.\n"),
       0],
     _bH_=[0,caml_new_string("timing_wheel_config")],
     _bI_=[0,caml_new_string("thread_pool_cpu_affinity")],
     _bJ_=[0,caml_new_string("report_thread_pool_stuck_for")],
     _bK_=[0,caml_new_string("record_backtraces")],
     _bL_=[0,caml_new_string("print_debug_messages_for")],
     _bM_=[0,caml_new_string("min_inter_cycle_timeout")],
     _bN_=[0,caml_new_string("max_num_jobs_per_priority_per_cycle")],
     _bO_=[0,caml_new_string("max_num_threads")],
     _bP_=[0,caml_new_string("max_num_open_file_descrs")],
     _bQ_=[0,caml_new_string("max_inter_cycle_timeout")],
     _bR_=[0,caml_new_string("file_descr_watcher")],
     _bS_=[0,caml_new_string("epoll_max_ready_events")],
     _bT_=[0,caml_new_string("dump_core_on_job_delay")],
     _bU_=[0,caml_new_string("detect_invalid_access_from_thread")],
     _bV_=[0,caml_new_string("check_invariants")],
     _bW_=[0,caml_new_string("abort_after_thread_pool_stuck_for")],
     _a__=[0,caml_new_string("Epoll_if_timerfd")],
     _a$_=[0,caml_new_string("Epoll")],
     _ba_=[0,caml_new_string("Select")],
     _aV_=[0,caml_new_string("All")],
     _aW_=[0,caml_new_string("Clock")],
     _aX_=[0,caml_new_string("Fd")],
     _aY_=[0,caml_new_string("File_descr_watcher")],
     _aZ_=[0,caml_new_string("Finalizers")],
     _a0_=[0,caml_new_string("Interruptor")],
     _a1_=[0,caml_new_string("Monitor")],
     _a2_=[0,caml_new_string("Monitor_send_exn")],
     _a3_=[0,caml_new_string("Parallel")],
     _a4_=[0,caml_new_string("Reader")],
     _a5_=[0,caml_new_string("Scheduler")],
     _a6_=[0,caml_new_string("Shutdown")],
     _a7_=[0,caml_new_string("Thread_pool")],
     _a8_=[0,caml_new_string("Thread_safe")],
     _a9_=[0,caml_new_string("Writer")],
     _aT_=[0,caml_new_string("Watch")],
     _aU_=[0,caml_new_string("Do_not_watch")],
     _aR_=[0,caml_new_string("how_to_dump")],
     _aS_=[0,caml_new_string("dump_if_delayed_by")],
     _aO_=[0,caml_new_string("Default")],
     _aP_=[0,caml_new_string("Call_abort")],
     _aQ_=[0,caml_new_string("Call_gcore")],
     _bX_=[0,0],
     _bZ_=[0,0],
     _b0_=[0,0],
     _b7_=[0,0],
     _b9_=[0,0],
     _b__=[0,0],
     _b$_=[0,0],
     _cb_=[0,0,[0,1,[0,2,0]]],
     _ce_=[0,[0,2,[0,10,0]]],
     _nE_=
      [0,
       [11,
        caml_new_string("invalid value for "),
        [2,0,[11,caml_new_string(" environment variable"),0]]],
       caml_new_string("invalid value for %s environment variable")],
     _nJ_=[0,[2,0,[11,caml_new_string("\n\n"),0]],caml_new_string("%s\n\n")],
     _cR_=[0,[2,0,[12,10,[10,0]]],caml_new_string("%s\n%!")],
     _cS_=[0,[2,0,[12,10,[10,0]]],caml_new_string("%s\n%!")],
     _cU_=[0,caml_new_string("Low")],
     _cT_=[0,caml_new_string("Normal")],
     _cV_=[0,[0]],
     _cW_=[0,caml_new_string("src/types.ml"),37,2],
     _cX_=[0,[0]],
     _cY_=[0,caml_new_string("src/types.ml"),42,2],
     _cZ_=[0,[0,[0,[0]]]],
     _c0_=[0,caml_new_string("src/types.ml"),51,2],
     _c1_=[0,[0]],
     _c2_=[0,caml_new_string("src/types.ml"),56,2],
     _c3_=[0,[0]],
     _c4_=[0,caml_new_string("src/types.ml"),66,2],
     _c5_=[0,[0]],
     _c6_=[0,caml_new_string("src/types.ml"),81,2],
     _c7_=[0,[0]],
     _c8_=[0,caml_new_string("src/types.ml"),86,2],
     _c9_=[0,[0]],
     _c__=[0,caml_new_string("src/types.ml"),95,2],
     _c$_=[0,[0]],
     _da_=[0,[0]],
     _db_=[0,[0,[0,[0]]]],
     _dc_=[0,[0]],
     _dd_=[0,[0]],
     _de_=[0,[0]],
     _df_=[0,[0]],
     _dg_=[0,[0]],
     _dh_=[0,[0,[0,[0]]]],
     _di_=[0,caml_new_string("src/types.ml"),144,2],
     _dj_=[0,[0]],
     _dk_=[0,caml_new_string("src/types.ml"),149,2],
     _dl_=[0,[0]],
     _dm_=[0,caml_new_string("src/types.ml"),155,2],
     _dn_=[0,[0]],
     _do_=[0,caml_new_string("src/types.ml"),160,2],
     _dp_=[0,[0]],
     _dq_=[0,caml_new_string("src/types.ml"),165,2],
     _dr_=[0,[0]],
     _ds_=[0,caml_new_string("src/types.ml"),177,2],
     _dt_=[0,[0]],
     _du_=[0,caml_new_string("src/types.ml"),187,2],
     _dv_=[0,[0]],
     _dw_=[0,caml_new_string("src/types.ml"),221,2],
     _dx_=[0,[0]],
     _dy_=[0,caml_new_string("src/types.ml"),238,2],
     _dz_=[0,[0,[0,[0]]]],
     _dA_=[0,caml_new_string("src/types.ml"),252,2],
     _dB_=[0,[0,[0,[0]]]],
     _dC_=[0,[0]],
     _dD_=[0,[0]],
     _dE_=[0,[0]],
     _dF_=[0,[0]],
     _dG_=[0,[0]],
     _dH_=[0,[0]],
     _dI_=[0,[0]],
     _dJ_=[0,[0]],
     _dK_=[0,[0,[0,[0]]]],
     _d3_=[0,caml_new_string("is_detached")],
     _d4_=[0,caml_new_string("has_seen_error")],
     _d5_=[0,caml_new_string("id")],
     _d6_=[0,caml_new_string("here")],
     _d7_=[0,caml_new_string("name")],
     _d8_=[0,caml_new_string("main")],
     _ef_=[0,caml_new_string("backtrace_history")],
     _eg_=[0,caml_new_string("local_storage")],
     _eh_=[0,caml_new_string("priority")],
     _ei_=[0,caml_new_string("monitor")],
     _ej_=[0,caml_new_string("<job>")],
     _ek_=[0,0],
     _el_=[0,1],
     _eP_=[0,0],
     _eN_=[0,caml_new_string("t")],
     _eO_=[0,caml_new_string("n")],
     _eL_=[0,caml_new_string("src/job_queue.ml"),39,48],
     _eK_=[0,caml_new_string("src/job_queue.ml"),41,44],
     _eJ_=[0,caml_new_string("src/job_queue.ml"),51,11],
     _eI_=[0,caml_new_string("src/job_queue.ml"),52,11],
     _eH_=[0,caml_new_string("src/job_queue.ml"),55,11],
     _eG_=[0,caml_new_string("src/job_queue.ml"),56,11],
     _eF_=[0,caml_new_string("src/job_queue.ml"),59,11],
     _eE_=[0,caml_new_string("src/job_queue.ml"),60,11],
     _eM_=[0,caml_new_string("src/job_queue.ml"),36,1348,1370],
     _ey_=[0,caml_new_string("length")],
     _ez_=[0,caml_new_string("front")],
     _eA_=[0,caml_new_string("mask")],
     _eB_=[0,caml_new_string("jobs")],
     _eC_=[0,caml_new_string("jobs_left_this_cycle")],
     _eD_=[0,caml_new_string("num_jobs_run")],
     _f0_=[0,0],
     _fZ_=[0,caml_new_string("src/synchronous_time_source0.ml"),506,45],
     _fV_=[0,caml_new_string("Ok")],
     _fW_=[0,caml_new_string("Currently_happening")],
     _fX_=[0,caml_new_string("Recently_aborted")],
     _fY_=[0,caml_new_string("Recently_fired")],
     _fU_=[0,0],
     _fT_=[0,caml_new_string("reason")],
     _fQ_=[0,caml_new_string("Ok")],
     _fR_=[0,caml_new_string("Currently_happening")],
     _fS_=[0,caml_new_string("Previously_unscheduled")],
     _fO_=[0,caml_new_string("alarm_precision")],
     _fP_=[0,caml_new_string("span")],
     _fM_=[0,caml_new_string("_")],
     _fL_=[0,caml_new_string("src/synchronous_time_source0.ml"),259,17],
     _fK_=[0,caml_new_string("src/synchronous_time_source0.ml"),266,15],
     _fJ_=[0,caml_new_string("src/synchronous_time_source0.ml"),268,42],
     _fI_=[0,caml_new_string("src/synchronous_time_source0.ml"),276,18],
     _fN_=[0,caml_new_string("src/synchronous_time_source0.ml"),243,8350,8374],
     _fF_=[0,caml_new_string("now")],
     _fG_=[0,caml_new_string("events")],
     _fH_=[0,caml_new_string("now")],
     _fk_=[0,caml_new_string("event")],
     _fl_=[0,caml_new_string("to_")],
     _fm_=[0,caml_new_string("from")],
     _fi_=[0,caml_new_string("src/synchronous_time_source0.ml"),138,58],
     _fj_=[0,caml_new_string("src/synchronous_time_source0.ml"),117,3909,3935],
     _ff_=[0,caml_new_string("interval")],
     _fg_=[0,caml_new_string("at")],
     _fh_=[0,caml_new_string("status")],
     _fd_=[0,caml_new_string("src/synchronous_time_source0.ml"),91,30],
     _eT_=[0,caml_new_string("Aborted")],
     _eU_=[0,caml_new_string("Fired")],
     _eV_=[0,caml_new_string("Happening")],
     _eW_=[0,caml_new_string("Scheduled")],
     _eX_=[0,caml_new_string("Unscheduled")],
     _eR_=[0,13,[0,6,[0,6,[0,5,0]]]],
     _hw_=[0,0],
     _hx_=[0,0],
     _hu_=[0,caml_new_string("src/scheduler1.ml"),148,40],
     _ht_=[0,caml_new_string("src/scheduler1.ml"),149,46],
     _hs_=[0,caml_new_string("src/scheduler1.ml"),156,43],
     _hr_=[0,caml_new_string("src/scheduler1.ml"),160,14],
     _hp_=[0,caml_new_string("t")],
     _hq_=[0,caml_new_string("exn")],
     _g0_=[0,caml_new_string("on_end_of_cycle")],
     _g1_=[0,caml_new_string("on_start_of_cycle")],
     _g2_=[0,caml_new_string("record_backtraces")],
     _g3_=[0,caml_new_string("max_num_jobs_per_priority_per_cycle")],
     _g4_=[0,caml_new_string("check_invariants")],
     _g5_=[0,caml_new_string("yield_until_no_jobs_remain")],
     _g6_=[0,caml_new_string("yield")],
     _g7_=[0,caml_new_string("event_added_hook")],
     _g8_=[0,caml_new_string("job_queued_hook")],
     _g9_=[0,caml_new_string("thread_safe_external_job_hook")],
     _g__=[0,caml_new_string("external_jobs")],
     _g$_=[0,caml_new_string("time_source")],
     _ha_=[0,caml_new_string("total_cycle_time")],
     _hb_=[0,caml_new_string("last_cycle_num_jobs")],
     _hc_=[0,caml_new_string("last_cycle_time")],
     _hd_=[0,caml_new_string("run_every_cycle_start")],
     _he_=[0,caml_new_string("in_cycle")],
     _hf_=[0,caml_new_string("cycle_start")],
     _hg_=[0,caml_new_string("cycle_count")],
     _hh_=[0,caml_new_string("uncaught_exn")],
     _hi_=[0,caml_new_string("current_execution_context")],
     _hj_=[0,caml_new_string("main_execution_context")],
     _hk_=[0,caml_new_string("very_low_priority_workers")],
     _hl_=[0,caml_new_string("low_priority_jobs")],
     _hm_=[0,caml_new_string("normal_priority_jobs")],
     _hn_=[0,caml_new_string("job_pool")],
     _ho_=[0,caml_new_string("check_access")],
     _f9_=[0,caml_new_string("src/scheduler1.ml"),51,1710,1734],
     _f7_=[0,caml_new_string("exec")],
     _f8_=[0,caml_new_string("execution_context")],
     _f2_=[0,caml_new_string("Not_finished")],
     _f1_=[0,caml_new_string("Finished")],
     _hO_=[0,caml_new_string("src/ivar0.ml"),450,21],
     _hP_=[0,caml_new_string("src/ivar0.ml"),446,35],
     _hN_=[0,caml_new_string("src/ivar0.ml"),383,15],
     _hM_=[0,caml_new_string("src/ivar0.ml"),362,15],
     _hL_=[0,caml_new_string("src/ivar0.ml"),340,15],
     _hK_=[0,caml_new_string("src/ivar0.ml"),321,15],
     _hH_=[0,caml_new_string("_")],
     _hI_=[0,caml_new_string("t")],
     _hJ_=[0,caml_new_string("src/ivar0.ml"),306,15],
     _hG_=[0,caml_new_string("src/ivar0.ml"),296,15],
     _hF_=[0,caml_new_string("src/ivar0.ml"),285,15],
     _hE_=[0,caml_new_string("src/ivar0.ml"),277,15],
     _hC_=[0,caml_new_string("Full")],
     _hD_=[0,caml_new_string("src/ivar0.ml"),269,15],
     _hB_=[0,caml_new_string("Empty")],
     _hA_=[0,caml_new_string("src/ivar0.ml"),258,15],
     _hz_=[0,caml_new_string("execution_context")],
     _hy_=[0,caml_new_string("src/ivar0.ml"),118,6],
     _hZ_=[0,caml_new_string("Parallel")],
     _h0_=[0,caml_new_string("Sequential")],
     _h1_=[0,caml_new_string("Max_concurrent_jobs")],
     _h4_=[0,caml_new_string("src/deferred1.ml"),124,10],
     _ic_=[0,caml_new_string("_")],
     _ib_=[0,caml_new_string("src/ivar_filler.ml"),15,20],
     _id_=[0,caml_new_string("src/ivar_filler.ml"),12,161,183],
     _h$_=[0,caml_new_string("Empty")],
     _ia_=[0,caml_new_string("Full")],
     _ie_=[0,caml_new_string("...")],
     _iv_=[0,caml_new_string("finally_exn")],
     _iw_=[0,caml_new_string("exn")],
     _ix_=[0,0],
     _iy_=[0,caml_new_string("finally")],
     _it_=[0,3804260],
     _iu_=[0,3903734],
     _is_=[0,caml_new_string("src/monitor.ml"),419,17],
     _ir_=[0,caml_new_string("exn")],
     _ip_=[0,3553398],
     _iq_=[1,0],
     _io_=[0,caml_new_string("src/monitor.ml"),191,6],
     _ii_=
      [0,
       [11,
        caml_new_string("file "),
        [3,
         0,
         [11,
          caml_new_string(", line "),
          [4,
           0,
           0,
           0,
           [11,caml_new_string(", characters "),[4,0,0,0,[12,45,[4,0,0,0,0]]]]]]]],
       caml_new_string("file %S, line %d, characters %d-%d")],
     _ij_=
      [0,
       [11,
        caml_new_string("Caught by monitor "),
        [2,0,[11,caml_new_string(" at "),[2,0,0]]]],
       caml_new_string("Caught by monitor %s at %s")],
     _il_=
      [0,
       [11,caml_new_string("Caught by monitor at "),[2,0,0]],
       caml_new_string("Caught by monitor at %s")],
     _im_=
      [0,
       [11,caml_new_string("Caught by monitor "),[2,0,0]],
       caml_new_string("Caught by monitor %s")],
     _ik_=[0,caml_new_string("backtrace_history")],
     _ih_=[0,caml_new_string("src/monitor.ml"),56,23],
     _if_=[0,caml_new_string("src/monitor.ml"),20,44],
     _ig_=[0,caml_new_string("src/monitor.ml"),13,233,255],
     _iC_=[0,-146189108],
     _iB_=[0,caml_new_string("src/async_stream.ml"),179,18],
     _iO_=[0,caml_new_string("has_any_waiters")],
     _iM_=[0,caml_new_string("_")],
     _iL_=[0,caml_new_string("src/bvar.ml"),19,47],
     _iK_=[0,caml_new_string("src/bvar.ml"),23,11],
     _iN_=[0,caml_new_string("src/bvar.ml"),14,294,316],
     _iI_=[0,caml_new_string("ivar")],
     _iJ_=[0,caml_new_string("has_any_waiters")],
     _jv_=[0,1],
     _ju_=[0,caml_new_string("span")],
     _js_=[0,-146189108],
     _jt_=[0,3903734],
     _jr_=[0,caml_new_string("_")],
     _jq_=[0,caml_new_string("_")],
     _jn_=[0,caml_new_string("Ok")],
     _jo_=[0,caml_new_string("Previously_aborted")],
     _jp_=[0,caml_new_string("Previously_happened")],
     _jm_=[0,caml_new_string("_")],
     _jl_=[0,caml_new_string("_")],
     _ji_=[0,caml_new_string("Ok")],
     _jj_=[0,caml_new_string("Previously_aborted")],
     _jk_=[0,caml_new_string("Previously_happened")],
     _jf_=[0,caml_new_string("Aborted")],
     _jg_=[0,caml_new_string("Happened")],
     _jh_=[0,caml_new_string("Scheduled_at")],
     _jd_=[0,caml_new_string("_")],
     _jc_=[0,caml_new_string("_")],
     _ja_=[0,caml_new_string("src/time_source.ml"),229,18],
     _jb_=[0,caml_new_string("src/time_source.ml"),231,18],
     _i$_=[0,caml_new_string("src/time_source.ml"),240,43],
     _je_=[0,caml_new_string("src/time_source.ml"),222,7460,7484],
     _i5_=[0,caml_new_string("time_source")],
     _i6_=[0,caml_new_string("scheduled_at")],
     _i7_=[0,caml_new_string("num_fires_to_skip")],
     _i8_=[0,caml_new_string("fired")],
     _i9_=[0,caml_new_string("fire")],
     _i__=[0,caml_new_string("alarm")],
     _iU_=[0,caml_new_string("Aborted")],
     _iV_=[0,caml_new_string("Happened")],
     _iT_=[0,caml_new_string("src/time_source.ml"),179,5],
     _iQ_=[0,caml_new_string("_")],
     _iR_=[0,caml_new_string("events")],
     _iS_=[0,caml_new_string("is_wall_clock")],
     _jz_=[0,caml_new_string("length")],
     _jw_=[0,caml_new_string("Stack")],
     _jx_=[0,caml_new_string("length")],
     _jy_=[0,caml_new_string("Counter")],
     _kr_=[0,caml_new_string("src/throttle.ml"),167,2],
     _kt_=[0,caml_new_string("src/throttle.ml"),168,2],
     _ks_=[0,caml_new_string("src/throttle.ml"),169,2],
     _kv_=[0,caml_new_string("src/throttle.ml"),273,2],
     _ku_=[0,caml_new_string("max_concurrent_jobs")],
     _kd_=[0,caml_new_string("_")],
     _kq_=[0,caml_new_string("src/throttle.ml"),98,43],
     _kp_=[0,caml_new_string("src/throttle.ml"),102,11],
     _ko_=[0,caml_new_string("src/throttle.ml"),107,29],
     _kn_=[0,caml_new_string("src/throttle.ml"),110,11],
     _km_=[0,caml_new_string("src/throttle.ml"),111,11],
     _kl_=[0,caml_new_string("src/throttle.ml"),113,16],
     _kk_=[0,caml_new_string("src/throttle.ml"),117,26],
     _kj_=[0,caml_new_string("src/throttle.ml"),122,11],
     _ki_=[0,caml_new_string("src/throttle.ml"),123,11],
     _kh_=[0,caml_new_string("src/throttle.ml"),124,69],
     _kg_=[0,caml_new_string("src/throttle.ml"),127,40],
     _ke_=[0,caml_new_string("t")],
     _kf_=[0,caml_new_string("exn")],
     _j5_=[0,caml_new_string("cleaned")],
     _j6_=[0,caml_new_string("num_resources_not_cleaned")],
     _j7_=[0,caml_new_string("cleans")],
     _j8_=[0,caml_new_string("is_dead")],
     _j9_=[0,caml_new_string("capacity_available")],
     _j__=[0,caml_new_string("num_jobs_running")],
     _j$_=[0,caml_new_string("jobs_waiting_to_start")],
     _ka_=[0,caml_new_string("job_resources_not_in_use")],
     _kb_=[0,caml_new_string("max_concurrent_jobs")],
     _kc_=[0,caml_new_string("continue_on_error")],
     _jK_=[0,caml_new_string("src/throttle.ml"),52,18],
     _jH_=[0,caml_new_string("Abort")],
     _jI_=[0,caml_new_string("Start")],
     _jE_=[0,caml_new_string("Ok")],
     _jF_=[0,caml_new_string("Raised")],
     _jD_=[0,caml_new_string("Aborted")],
     _jG_=[0,caml_new_string("outcome")],
     _jJ_=[0,caml_new_string("start")],
     _jA_=[0,caml_new_string("Aborted")],
     _jB_=[0,caml_new_string("Ok")],
     _jC_=[0,caml_new_string("Raised")],
     _kG_=[0,caml_new_string("src/scheduler.ml"),275,4],
     _kH_=[0,1],
     _kF_=[0,caml_new_string("n")],
     _kE_=[0,caml_new_string("scheduler")],
     _kN_=[0,0],
     _kM_=[0,0],
     _kP_=[0,0],
     _kO_=[0,0],
     _kR_=[0,3903734],
     _kQ_=[0,3903734],
     _k__=[0,0],
     _k9_=[0,0],
     _la_=[0,0],
     _k$_=[0,0],
     _m7_=[0,caml_new_string("src/pipe.ml"),924,4],
     _m6_=[0,caml_new_string("max_iterations_per_job")],
     _m4_=[0,caml_new_string("When_value_read")],
     _m3_=[0,caml_new_string("When_value_processed")],
     _m5_=[0,caml_new_string("Consumer")],
     _m2_=[0,caml_new_string("src/pipe.ml"),653,6],
     _m1_=[0,caml_new_string("num_values")],
     _m0_=[0,caml_new_string("here")],
     _mZ_=[0,caml_new_string("src/pipe.ml"),605,4],
     _mY_=[0,caml_new_string("max_queue_length")],
     _mX_=[0,caml_new_string("src/pipe.ml"),551,4],
     _mW_=[0,caml_new_string("_")],
     _mV_=[0,caml_new_string("_")],
     _mS_=[0,caml_new_string("_")],
     _mT_=[0,caml_new_string("pipe")],
     _mU_=[0,caml_new_string("consumer")],
     _mQ_=[0,caml_new_string("_")],
     _mP_=[0,caml_new_string("_")],
     _mO_=[0,caml_new_string("_")],
     _mN_=[0,caml_new_string("_")],
     _mR_=[0,caml_new_string("pipe")],
     _mM_=[0,caml_new_string("size_budget")],
     _mL_=[0,caml_new_string("src/pipe.ml"),442,2],
     _mK_=[0,caml_new_string("src/pipe.ml"),433,2],
     _mJ_=[0,caml_new_string("_")],
     _mI_=[0,caml_new_string("_")],
     _mH_=[0,caml_new_string("_")],
     _mG_=[0,caml_new_string("_")],
     _mF_=[0,caml_new_string("src/pipe.ml"),305,2],
     _mE_=[0,caml_new_string("src/pipe.ml"),298,2],
     _ms_=[0,caml_new_string("_")],
     _mr_=[0,caml_new_string("_")],
     _mD_=[0,caml_new_string("src/pipe.ml"),256,46],
     _mC_=[0,caml_new_string("src/pipe.ml"),259,11],
     _mz_=[0,caml_new_string("src/pipe.ml"),267,13],
     _mB_=[0,caml_new_string("src/pipe.ml"),268,11],
     _mA_=[0,caml_new_string("src/pipe.ml"),274,30],
     _mw_=[0,caml_new_string("src/pipe.ml"),282,13],
     _my_=[0,caml_new_string("src/pipe.ml"),279,36],
     _mx_=[0,caml_new_string("src/pipe.ml"),284,31],
     _mv_=[0,caml_new_string("src/pipe.ml"),291,13],
     _mt_=[0,caml_new_string("pipe")],
     _mu_=[0,caml_new_string("exn")],
     _mg_=[0,caml_new_string("upstream_flusheds")],
     _mh_=[0,caml_new_string("consumers")],
     _mi_=[0,caml_new_string("read_closed")],
     _mj_=[0,caml_new_string("closed")],
     _mk_=[0,caml_new_string("blocked_reads")],
     _ml_=[0,caml_new_string("blocked_flushes")],
     _mm_=[0,caml_new_string("num_values_read")],
     _mn_=[0,caml_new_string("pushback")],
     _mo_=[0,caml_new_string("size_budget")],
     _mp_=[0,caml_new_string("buffer")],
     _mq_=[0,caml_new_string("id")],
     _lQ_=[0,caml_new_string("Ok")],
     _lR_=[0,caml_new_string("Reader_closed")],
     _lS_=[0,caml_new_string("ready")],
     _lT_=[0,caml_new_string("fill_when_num_values_read")],
     _lM_=[0,caml_new_string("_")],
     _lP_=[0,caml_new_string("src/pipe.ml"),142,33],
     _lN_=[0,caml_new_string("pipe")],
     _lO_=[0,caml_new_string("exn")],
     _lK_=[0,caml_new_string("consumer")],
     _lL_=[0,caml_new_string("wants")],
     _lD_=[0,caml_new_string("Eof")],
     _lE_=[0,caml_new_string("Ok")],
     _lA_=[0,caml_new_string("Eof")],
     _lB_=[0,caml_new_string("Ok")],
     _lx_=[0,caml_new_string("Eof")],
     _ly_=[0,caml_new_string("Ok")],
     _lz_=[0,caml_new_string("Zero")],
     _lC_=[0,caml_new_string("One")],
     _lF_=[0,caml_new_string("At_most")],
     _lw_=[0,caml_new_string("src/pipe.ml"),80,54],
     _lu_=[0,caml_new_string("pipe")],
     _lv_=[0,caml_new_string("exn")],
     _lp_=[0,caml_new_string("downstream_flushed")],
     _lq_=[0,caml_new_string("Have_been_sent_downstream")],
     _lt_=[0,caml_new_string("Have_not_been_sent_downstream")],
     _lr_=[0,caml_new_string("values_read")],
     _ls_=[0,caml_new_string("pipe_id")],
     _lh_=[0,caml_new_string("Ok")],
     _li_=[0,caml_new_string("Reader_closed")],
     _ni_=[0,caml_new_string("src/mvar.ml"),60,2],
     _ng_=[0,caml_new_string("_")],
     _nh_=[0,caml_new_string("src/mvar.ml"),16,364,386],
     _nd_=[0,caml_new_string("value_available")],
     _ne_=[0,caml_new_string("taken")],
     _nf_=[0,caml_new_string("current_value")],
     _nu_=[0,caml_new_string("waits")],
     _nz_=[0,caml_new_string("exn")],
     _nA_=[0,caml_new_string("field")],
     _nB_=[0,1],
     _nx_=[0,caml_new_string("exn")],
     _ny_=[0,1];
    function after(t,span)
     {var result=caml_call2(_ai_,t,span);
      if(caml_call2(_a_[17],span,_a_[74]))
       if(caml_call2(_s_,result,t))return _ae_;
      return result}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$0=
      [0,
       _a_,
       _b_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_,
       _U_,
       _V_,
       _W_,
       _X_,
       _Y_,
       _Z_,
       ___,
       _$_,
       _aa_,
       _ab_,
       _ac_,
       _ad_,
       _ae_,
       _af_,
       _ag_,
       _ah_,
       _ai_,
       _aj_,
       _ak_,
       _al_,
       _am_,
       _an_,
       _ao_,
       _ap_,
       _aq_,
       _ar_,
       _as_,
       _at_,
       _au_,
       _av_,
       _aw_,
       _ax_,
       _ay_,
       _az_,
       _aA_,
       _aB_,
       _aC_,
       _aD_,
       _aE_,
       _aF_,
       _aG_,
       _aH_,
       _aI_,
       after];
    caml_register_global(1162,include$0,"Async_kernel__Time_ns");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$2);
    caml_call1(Expect_test_collector[4][1],cst_src_async_kernel_config_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$3,cst$0);
    var
     sec=_a_[80],
     concat=Core_kernel_String[24],
     t_of_sexp=Core_kernel_Int[95],
     sexp_of_t=Core_kernel_Int[96],
     validate=Core_kernel_Int[5],
     Epoll_max_ready_events=
      caml_call1
       (Core_kernel_Validated[2],[0,t_of_sexp,sexp_of_t,here,validate]),
     t_of_sexp$0=_a_[9],
     sexp_of_t$0=_a_[10],
     validate$0=_a_[37],
     Max_inter_cycle_timeout=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$0,sexp_of_t$0,here$0,validate$0]),
     t_of_sexp$1=_a_[9],
     sexp_of_t$1=_a_[10],
     validate$1=_a_[37],
     Min_inter_cycle_timeout=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$1,sexp_of_t$1,here$1,validate$1]),
     t_of_sexp$2=Core_kernel_Int[95],
     sexp_of_t$2=Core_kernel_Int[96],
     validate$2=Core_kernel_Int[5],
     include$1=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$2,sexp_of_t$2,here$2,validate$2]),
     _aJ_=include$1[1],
     _aK_=include$1[2],
     _aM_=include$1[4],
     _aN_=include$1[5],
     _aL_=include$1[3],
     default$0=caml_call1(_aM_,32768);
    function equal(t1,t2){return t1 === t2?1:0}
    var
     t_of_sexp$3=Core_kernel_Int[95],
     sexp_of_t$3=Core_kernel_Int[96],
     validate$3=Core_kernel_Int[5],
     Max_num_threads=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$3,sexp_of_t$3,here$3,validate$3]),
     t_of_sexp$4=Core_kernel_Int[95],
     sexp_of_t$4=Core_kernel_Int[96],
     validate$4=Core_kernel_Int[5],
     Max_num_jobs_per_priority_per_cycle=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$4,sexp_of_t$4,here$4,validate$4]);
    function t_of_sexp$5(sexp)
     {if(0 === sexp[0])
       {var _Nb_=sexp[1];
        if(caml_string_notequal(_Nb_,cst_Call_abort))
         {if(caml_string_notequal(_Nb_,cst_Call_gcore))
           {if(caml_string_notequal(_Nb_,cst_Default))
             if(caml_string_notequal(_Nb_,cst_call_abort))
              if(caml_string_notequal(_Nb_,cst_call_gcore))
               if(caml_string_notequal(_Nb_,cst_default))
                var switch$0=1,switch$1=0,switch$2=0;
               else
                var switch$2=1;
              else
               var switch$1=1,switch$2=0;
             else
              var switch$0=0,switch$1=0,switch$2=0;
            else
             var switch$2=1;
            if(switch$2)return 0}
          else
           var switch$1=1;
          if(switch$1)return 2}
        else
         var switch$0=0;
        if(! switch$0)return 1}
      else
       {var _Nc_=sexp[1];
        if(! _Nc_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _Nd_=_Nc_[1];
        if(0 !== _Nd_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var _Ne_=_Nd_[1];
        if(caml_string_notequal(_Ne_,cst_Call_abort$0))
         {if(caml_string_notequal(_Ne_,cst_Call_gcore$0))
           {if(caml_string_notequal(_Ne_,cst_Default$0))
             if(caml_string_notequal(_Ne_,cst_call_abort$0))
              if(caml_string_notequal(_Ne_,cst_call_gcore$0))
               if(caml_string_notequal(_Ne_,cst_default$0))
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
    function sexp_of_t$5(param)
     {switch(param){case 0:return _aO_;case 1:return _aP_;default:return _aQ_}}
    var How_to_dump=[0,t_of_sexp$5,sexp_of_t$5];
    function watch_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$0,sexp);
      var
       field_sexps=sexp[1],
       dump_if_delayed_by_field=[0,0],
       how_to_dump_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _M6_=param[1];
          if(1 === _M6_[0])
           {var _M7_=_M6_[1];
            if(_M7_)
             {var _M8_=_M7_[1];
              if(0 === _M8_[0])
               {var _M9_=_M7_[2],_M__=_M8_[1];
                if(! _M9_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_M__,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _M9_[2])
                 {var tail=param[2],field_sexp=_M9_[1];
                  if(caml_string_notequal(_M__,cst_dump_if_delayed_by))
                   if(caml_string_notequal(_M__,cst_how_to_dump))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_M__,extra[1]]}
                   else
                    if(how_to_dump_field[1])
                     duplicates[1] = [0,_M__,duplicates[1]];
                    else
                     {var fvalue=caml_call1(How_to_dump[1],field_sexp);
                      how_to_dump_field[1] = [0,fvalue]}
                  else
                   if(dump_if_delayed_by_field[1])
                    duplicates[1] = [0,_M__,duplicates[1]];
                   else
                    {var fvalue$0=caml_call1(_a_[9],field_sexp);
                     dump_if_delayed_by_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$0,_M6_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc$0,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$0,extra[1],sexp);
        var _M$_=dump_if_delayed_by_field[1],_Na_=how_to_dump_field[1];
        if(_M$_)
         if(_Na_)
          {var how_to_dump_value=_Na_[1],dump_if_delayed_by_value=_M$_[1];
           return [0,dump_if_delayed_by_value,how_to_dump_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc$0,
                 sexp,
                 [0,
                  [0,
                   0 === dump_if_delayed_by_field[1]?1:0,
                   cst_dump_if_delayed_by$0],
                  [0,[0,0 === how_to_dump_field[1]?1:0,cst_how_to_dump$0],0]])}}
    function sexp_of_watch(param)
     {var
       v_how_to_dump=param[2],
       v_dump_if_delayed_by=param[1],
       arg=caml_call1(How_to_dump[2],v_how_to_dump),
       bnds=[0,[1,[0,_aR_,[0,arg,0]]],0],
       arg$0=caml_call1(_a_[10],v_dump_if_delayed_by),
       bnds$0=[0,[1,[0,_aS_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function t_of_sexp$6(sexp)
     {if(0 === sexp[0])
       {var _M2_=sexp[1];
        if(caml_string_notequal(_M2_,cst_Do_not_watch))
         {if(caml_string_notequal(_M2_,cst_Watch))
           if(caml_string_notequal(_M2_,cst_do_not_watch))
            if(caml_string_notequal(_M2_,cst_watch))
             var switch$0=1,switch$1=0;
            else
             var switch$1=1;
           else
            var switch$0=0,switch$1=0;
          else
           var switch$1=1;
          if(switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)}
        else
         var switch$0=0;
        if(! switch$0)return 0}
      else
       {var _M3_=sexp[1];
        if(! _M3_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
        var _M4_=_M3_[1];
        if(0 !== _M4_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
        var _M5_=_M4_[1];
        if(caml_string_notequal(_M5_,cst_Do_not_watch$0))
         {if(caml_string_notequal(_M5_,cst_Watch$0))
           if(caml_string_notequal(_M5_,cst_do_not_watch$0))
            if(caml_string_notequal(_M5_,cst_watch$0))
             var switch$2=1,switch$3=0;
            else
             var switch$3=1;
           else
            var switch$2=0,switch$3=0;
          else
           var switch$3=1;
          if(switch$3)
           {var sexp_args=_M3_[2];
            if(sexp_args)
             if(! sexp_args[2])
              {var v0=sexp_args[1],v0$0=watch_of_sexp(v0);return [0,v0$0]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_M5_,sexp)}}
        else
         var switch$2=0;
        if(! switch$2)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)}
    function sexp_of_t$6(param)
     {if(param)
       {var v0=param[1],v0$0=sexp_of_watch(v0);return [1,[0,_aT_,[0,v0$0,0]]]}
      return _aU_}
    function t_of_sexp$7(sexp)
     {if(0 === sexp[0])
       {var _MS_=sexp[1],_MT_=caml_string_compare(_MS_,cst_all);
        if(0 <= _MT_)
         if(0 < _MT_)
          var
           _MU_=caml_string_compare(_MS_,cst_parallel),
           switch$0=
            0 <= _MU_
             ?0 < _MU_
               ?caml_string_notequal(_MS_,cst_reader)
                 ?caml_string_notequal(_MS_,cst_scheduler)
                   ?caml_string_notequal(_MS_,cst_shutdown)
                     ?caml_string_notequal(_MS_,cst_thread_pool)
                       ?caml_string_notequal(_MS_,cst_thread_safe)
                         ?caml_string_notequal(_MS_,cst_writer)?15:14
                         :13
                       :12
                     :11
                   :10
                 :9
               :8
             :caml_string_notequal(_MS_,cst_clock)
               ?caml_string_notequal(_MS_,cst_fd)
                 ?caml_string_notequal(_MS_,cst_file_descr_watcher)
                   ?caml_string_notequal(_MS_,cst_finalizers)
                     ?caml_string_notequal(_MS_,cst_interruptor)
                       ?caml_string_notequal(_MS_,cst_monitor)
                         ?caml_string_notequal(_MS_,cst_monitor_send_exn)?15:7
                         :6
                       :5
                     :4
                   :3
                 :2
               :1;
         else
          var switch$0=0;
        else
         var
          _MV_=caml_string_compare(_MS_,cst_Monitor_send_exn),
          switch$0=
           0 <= _MV_
            ?0 < _MV_
              ?caml_string_notequal(_MS_,cst_Parallel)
                ?caml_string_notequal(_MS_,cst_Reader)
                  ?caml_string_notequal(_MS_,cst_Scheduler)
                    ?caml_string_notequal(_MS_,cst_Shutdown)
                      ?caml_string_notequal(_MS_,cst_Thread_pool)
                        ?caml_string_notequal(_MS_,cst_Thread_safe)
                          ?caml_string_notequal(_MS_,cst_Writer)?15:14
                          :13
                        :12
                      :11
                    :10
                  :9
                :8
              :7
            :caml_string_notequal(_MS_,cst_All)
              ?caml_string_notequal(_MS_,cst_Clock)
                ?caml_string_notequal(_MS_,cst_Fd)
                  ?caml_string_notequal(_MS_,cst_File_descr_watcher)
                    ?caml_string_notequal(_MS_,cst_Finalizers)
                      ?caml_string_notequal(_MS_,cst_Interruptor)
                        ?caml_string_notequal(_MS_,cst_Monitor)?15:6
                        :5
                      :4
                    :3
                  :2
                :1
              :0;
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
          case 14:return 14
          }}
      else
       {var _MW_=sexp[1];
        if(! _MW_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$2,sexp);
        var _MX_=_MW_[1];
        if(0 !== _MX_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$2,sexp);
        var _MY_=_MX_[1],_MZ_=caml_string_compare(_MY_,cst_all$0);
        if(0 <= _MZ_)
         if(0 < _MZ_)
          var
           _M0_=caml_string_compare(_MY_,cst_parallel$0),
           switch$1=
            0 <= _M0_
             ?0 < _M0_
               ?caml_string_notequal(_MY_,cst_reader$0)
                 ?caml_string_notequal(_MY_,cst_scheduler$0)
                   ?caml_string_notequal(_MY_,cst_shutdown$0)
                     ?caml_string_notequal(_MY_,cst_thread_pool$0)
                       ?caml_string_notequal(_MY_,cst_thread_safe$0)
                         ?caml_string_notequal(_MY_,cst_writer$0)?15:14
                         :13
                       :12
                     :11
                   :10
                 :9
               :8
             :caml_string_notequal(_MY_,cst_clock$0)
               ?caml_string_notequal(_MY_,cst_fd$0)
                 ?caml_string_notequal(_MY_,cst_file_descr_watcher$0)
                   ?caml_string_notequal(_MY_,cst_finalizers$0)
                     ?caml_string_notequal(_MY_,cst_interruptor$0)
                       ?caml_string_notequal(_MY_,cst_monitor$0)
                         ?caml_string_notequal(_MY_,cst_monitor_send_exn$0)?15:7
                         :6
                       :5
                     :4
                   :3
                 :2
               :1;
         else
          var switch$1=0;
        else
         var
          _M1_=caml_string_compare(_MY_,cst_Monitor_send_exn$0),
          switch$1=
           0 <= _M1_
            ?0 < _M1_
              ?caml_string_notequal(_MY_,cst_Parallel$0)
                ?caml_string_notequal(_MY_,cst_Reader$0)
                  ?caml_string_notequal(_MY_,cst_Scheduler$0)
                    ?caml_string_notequal(_MY_,cst_Shutdown$0)
                      ?caml_string_notequal(_MY_,cst_Thread_pool$0)
                        ?caml_string_notequal(_MY_,cst_Thread_safe$0)
                          ?caml_string_notequal(_MY_,cst_Writer$0)?15:14
                          :13
                        :12
                      :11
                    :10
                  :9
                :8
              :7
            :caml_string_notequal(_MY_,cst_All$0)
              ?caml_string_notequal(_MY_,cst_Clock$0)
                ?caml_string_notequal(_MY_,cst_Fd$0)
                  ?caml_string_notequal(_MY_,cst_File_descr_watcher$0)
                    ?caml_string_notequal(_MY_,cst_Finalizers$0)
                      ?caml_string_notequal(_MY_,cst_Interruptor$0)
                        ?caml_string_notequal(_MY_,cst_Monitor$0)?15:6
                        :5
                      :4
                    :3
                  :2
                :1
              :0;
        switch(switch$1)
         {case 0:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 1:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 7:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 8:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 9:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 10:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 11:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 12:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 13:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 14:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$2,sexp)}
    function sexp_of_t$7(param)
     {switch(param)
       {case 0:return _aV_;
        case 1:return _aW_;
        case 2:return _aX_;
        case 3:return _aY_;
        case 4:return _aZ_;
        case 5:return _a0_;
        case 6:return _a1_;
        case 7:return _a2_;
        case 8:return _a3_;
        case 9:return _a4_;
        case 10:return _a5_;
        case 11:return _a6_;
        case 12:return _a7_;
        case 13:return _a8_;
        default:return _a9_}}
    function equal$0(x_003,x_004)
     {var match=caml_int_compare(x_003,x_004);return 0 === match?1:0}
    var
     include$2=caml_call1(Core_kernel_Sexpable[1],[0,t_of_sexp$7,sexp_of_t$7]),
     to_string=include$2[2];
    function t_of_sexp$8(sexp)
     {if(0 === sexp[0])
       {var _MO_=sexp[1];
        if(caml_string_notequal(_MO_,cst_Epoll))
         {if(caml_string_notequal(_MO_,cst_Epoll_if_timerfd))
           {if(caml_string_notequal(_MO_,cst_Select))
             if(caml_string_notequal(_MO_,cst_epoll))
              if(caml_string_notequal(_MO_,cst_epoll_if_timerfd))
               if(caml_string_notequal(_MO_,cst_select))
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
          if(switch$1)return 0}
        else
         var switch$0=0;
        if(! switch$0)return 1}
      else
       {var _MP_=sexp[1];
        if(! _MP_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$3,sexp);
        var _MQ_=_MP_[1];
        if(0 !== _MQ_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$3,sexp);
        var _MR_=_MQ_[1];
        if(caml_string_notequal(_MR_,cst_Epoll$0))
         {if(caml_string_notequal(_MR_,cst_Epoll_if_timerfd$0))
           {if(caml_string_notequal(_MR_,cst_Select$0))
             if(caml_string_notequal(_MR_,cst_epoll$0))
              if(caml_string_notequal(_MR_,cst_epoll_if_timerfd$0))
               if(caml_string_notequal(_MR_,cst_select$0))
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
             return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
          else
           var switch$4=1;
          if(switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
        else
         var switch$3=0;
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$3,sexp)}
    function sexp_of_t$8(param)
     {switch(param){case 0:return _a__;case 1:return _a$_;default:return _ba_}}
    var
     T=[0,t_of_sexp$8,sexp_of_t$8],
     t_of_sexp$9=T[1],
     sexp_of_t$9=T[2],
     include$3=caml_call1(Core_kernel_Sexpable[1],T),
     to_string$0=include$3[2];
    function timing_wheel_config(r){return r[16]}
    function thread_pool_cpu_affinity(r){return r[15]}
    function report_thread_pool_stuck_for(r){return r[14]}
    function record_backtraces(r){return r[13]}
    function print_debug_messages_for(r){return r[12]}
    function min_inter_cycle_timeout(r){return r[11]}
    function max_num_jobs_per_priority_per_cycle(r){return r[10]}
    function max_num_threads(r){return r[9]}
    function max_num_open_file_descrs(r){return r[8]}
    function max_inter_cycle_timeout(r){return r[7]}
    function file_descr_watcher(r){return r[6]}
    function epoll_max_ready_events(r){return r[5]}
    function dump_core_on_job_delay(r){return r[4]}
    function detect_invalid_access_from_thread(r){return r[3]}
    function check_invariants(r){return r[2]}
    function abort_after_thread_pool_stuck_for(r){return r[1]}
    function _bb_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v]}
    var
     _bc_=0,
     timing_wheel_config$0=
      [0,
       function(param){return 0},
       cst_timing_wheel_config,
       _bc_,
       timing_wheel_config,
       _bb_];
    function _bd_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16]]}
    var
     _be_=0,
     thread_pool_cpu_affinity$0=
      [0,
       function(param){return 0},
       cst_thread_pool_cpu_affinity,
       _be_,
       thread_pool_cpu_affinity,
       _bd_];
    function _bf_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16]]}
    var
     _bg_=0,
     report_thread_pool_stuck_for$0=
      [0,
       function(param){return 0},
       cst_report_thread_pool_stuck_for,
       _bg_,
       report_thread_pool_stuck_for,
       _bf_];
    function _bh_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16]]}
    var
     _bi_=0,
     record_backtraces$0=
      [0,
       function(param){return 0},
       cst_record_backtraces,
       _bi_,
       record_backtraces,
       _bh_];
    function _bj_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bk_=0,
     print_debug_messages_for$0=
      [0,
       function(param){return 0},
       cst_print_debug_messages_for,
       _bk_,
       print_debug_messages_for,
       _bj_];
    function _bl_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bm_=0,
     min_inter_cycle_timeout$0=
      [0,
       function(param){return 0},
       cst_min_inter_cycle_timeout,
       _bm_,
       min_inter_cycle_timeout,
       _bl_];
    function _bn_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bo_=0,
     max_num_jobs_per_priority_per_cycle$0=
      [0,
       function(param){return 0},
       cst_max_num_jobs_per_priority_per_cycle,
       _bo_,
       max_num_jobs_per_priority_per_cycle,
       _bn_];
    function _bp_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bq_=0,
     max_num_threads$0=
      [0,
       function(param){return 0},
       cst_max_num_threads,
       _bq_,
       max_num_threads,
       _bp_];
    function _br_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bs_=0,
     max_num_open_file_descrs$0=
      [0,
       function(param){return 0},
       cst_max_num_open_file_descrs,
       _bs_,
       max_num_open_file_descrs,
       _br_];
    function _bt_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bu_=0,
     max_inter_cycle_timeout$0=
      [0,
       function(param){return 0},
       cst_max_inter_cycle_timeout,
       _bu_,
       max_inter_cycle_timeout,
       _bt_];
    function _bv_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bw_=0,
     file_descr_watcher$0=
      [0,
       function(param){return 0},
       cst_file_descr_watcher$1,
       _bw_,
       file_descr_watcher,
       _bv_];
    function _bx_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _by_=0,
     epoll_max_ready_events$0=
      [0,
       function(param){return 0},
       cst_epoll_max_ready_events,
       _by_,
       epoll_max_ready_events,
       _bx_];
    function _bz_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bA_=0,
     dump_core_on_job_delay$0=
      [0,
       function(param){return 0},
       cst_dump_core_on_job_delay,
       _bA_,
       dump_core_on_job_delay,
       _bz_];
    function _bB_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bC_=0,
     detect_invalid_access_from_thread$0=
      [0,
       function(param){return 0},
       cst_detect_invalid_access_from_thread,
       _bC_,
       detect_invalid_access_from_thread,
       _bB_];
    function _bD_(r,v)
     {return [0,
              r[1],
              v,
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bE_=0,
     check_invariants$0=
      [0,
       function(param){return 0},
       cst_check_invariants,
       _bE_,
       check_invariants,
       _bD_];
    function _bF_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bG_=0,
     abort_after_thread_pool_stuck_for$0=
      [0,
       function(param){return 0},
       cst_abort_after_thread_pool_stuck_for,
       _bG_,
       abort_after_thread_pool_stuck_for,
       _bF_];
    function sexp_of_t$10(param)
     {var
       v_timing_wheel_config=param[16],
       v_thread_pool_cpu_affinity=param[15],
       v_report_thread_pool_stuck_for=param[14],
       v_record_backtraces=param[13],
       v_print_debug_messages_for=param[12],
       v_min_inter_cycle_timeout=param[11],
       v_max_num_jobs_per_priority_per_cycle=param[10],
       v_max_num_threads=param[9],
       v_max_num_open_file_descrs=param[8],
       v_max_inter_cycle_timeout=param[7],
       v_file_descr_watcher=param[6],
       v_epoll_max_ready_events=param[5],
       v_dump_core_on_job_delay=param[4],
       v_detect_invalid_access_from_thread=param[3],
       v_check_invariants=param[2],
       v_abort_after_thread_pool_stuck_for=param[1],
       bnds=0;
      if(v_timing_wheel_config)
       var
        v=v_timing_wheel_config[1],
        arg=caml_call1(Timing_wheel[8][2],v),
        bnd=[1,[0,_bH_,[0,arg,0]]],
        bnds$0=[0,bnd,bnds];
      else
       var bnds$0=bnds;
      if(v_thread_pool_cpu_affinity)
       var
        v$0=v_thread_pool_cpu_affinity[1],
        arg$0=caml_call1(Thread_pool_cpu_affinity[3],v$0),
        bnd$0=[1,[0,_bI_,[0,arg$0,0]]],
        bnds$1=[0,bnd$0,bnds$0];
      else
       var bnds$1=bnds$0;
      if(v_report_thread_pool_stuck_for)
       var
        v$1=v_report_thread_pool_stuck_for[1],
        arg$1=caml_call1(_a_[10],v$1),
        bnd$1=[1,[0,_bJ_,[0,arg$1,0]]],
        bnds$2=[0,bnd$1,bnds$1];
      else
       var bnds$2=bnds$1;
      if(v_record_backtraces)
       var
        v$2=v_record_backtraces[1],
        arg$2=caml_call1(Core_kernel[291],v$2),
        bnd$2=[1,[0,_bK_,[0,arg$2,0]]],
        bnds$3=[0,bnd$2,bnds$2];
      else
       var bnds$3=bnds$2;
      if(v_print_debug_messages_for)
       var
        v$3=v_print_debug_messages_for[1],
        arg$3=caml_call2(Core_kernel[400],sexp_of_t$7,v$3),
        bnd$3=[1,[0,_bL_,[0,arg$3,0]]],
        bnds$4=[0,bnd$3,bnds$3];
      else
       var bnds$4=bnds$3;
      if(v_min_inter_cycle_timeout)
       var
        v$4=v_min_inter_cycle_timeout[1],
        arg$4=caml_call1(Min_inter_cycle_timeout[2],v$4),
        bnd$4=[1,[0,_bM_,[0,arg$4,0]]],
        bnds$5=[0,bnd$4,bnds$4];
      else
       var bnds$5=bnds$4;
      if(v_max_num_jobs_per_priority_per_cycle)
       var
        v$5=v_max_num_jobs_per_priority_per_cycle[1],
        arg$5=caml_call1(Max_num_jobs_per_priority_per_cycle[2],v$5),
        bnd$5=[1,[0,_bN_,[0,arg$5,0]]],
        bnds$6=[0,bnd$5,bnds$5];
      else
       var bnds$6=bnds$5;
      if(v_max_num_threads)
       var
        v$6=v_max_num_threads[1],
        arg$6=caml_call1(Max_num_threads[2],v$6),
        bnd$6=[1,[0,_bO_,[0,arg$6,0]]],
        bnds$7=[0,bnd$6,bnds$6];
      else
       var bnds$7=bnds$6;
      if(v_max_num_open_file_descrs)
       var
        v$7=v_max_num_open_file_descrs[1],
        arg$7=caml_call1(_aK_,v$7),
        bnd$7=[1,[0,_bP_,[0,arg$7,0]]],
        bnds$8=[0,bnd$7,bnds$7];
      else
       var bnds$8=bnds$7;
      if(v_max_inter_cycle_timeout)
       var
        v$8=v_max_inter_cycle_timeout[1],
        arg$8=caml_call1(Max_inter_cycle_timeout[2],v$8),
        bnd$8=[1,[0,_bQ_,[0,arg$8,0]]],
        bnds$9=[0,bnd$8,bnds$8];
      else
       var bnds$9=bnds$8;
      if(v_file_descr_watcher)
       var
        v$9=v_file_descr_watcher[1],
        arg$9=caml_call1(sexp_of_t$9,v$9),
        bnd$9=[1,[0,_bR_,[0,arg$9,0]]],
        bnds$10=[0,bnd$9,bnds$9];
      else
       var bnds$10=bnds$9;
      if(v_epoll_max_ready_events)
       var
        v$10=v_epoll_max_ready_events[1],
        arg$10=caml_call1(Epoll_max_ready_events[2],v$10),
        bnd$10=[1,[0,_bS_,[0,arg$10,0]]],
        bnds$11=[0,bnd$10,bnds$10];
      else
       var bnds$11=bnds$10;
      if(v_dump_core_on_job_delay)
       var
        v$11=v_dump_core_on_job_delay[1],
        arg$11=sexp_of_t$6(v$11),
        bnd$11=[1,[0,_bT_,[0,arg$11,0]]],
        bnds$12=[0,bnd$11,bnds$11];
      else
       var bnds$12=bnds$11;
      if(v_detect_invalid_access_from_thread)
       var
        v$12=v_detect_invalid_access_from_thread[1],
        arg$12=caml_call1(Core_kernel[291],v$12),
        bnd$12=[1,[0,_bU_,[0,arg$12,0]]],
        bnds$13=[0,bnd$12,bnds$12];
      else
       var bnds$13=bnds$12;
      if(v_check_invariants)
       var
        v$13=v_check_invariants[1],
        arg$13=caml_call1(Core_kernel[291],v$13),
        bnd$13=[1,[0,_bV_,[0,arg$13,0]]],
        bnds$14=[0,bnd$13,bnds$13];
      else
       var bnds$14=bnds$13;
      if(v_abort_after_thread_pool_stuck_for)
       var
        v$14=v_abort_after_thread_pool_stuck_for[1],
        arg$14=caml_call1(_a_[10],v$14),
        bnd$14=[1,[0,_bW_,[0,arg$14,0]]],
        bnds$15=[0,bnd$14,bnds$14];
      else
       var bnds$15=bnds$14;
      return [1,bnds$15]}
    function default_timing_wheel_config_for_word_size(word_size)
     {if(0 === word_size)
       var alarm_precision=Timing_wheel[1][10],level_bits$1=level_bits;
      else
       var
        alarm_precision=caml_call2(Timing_wheel[1][13],Timing_wheel[1][10],3),
        level_bits$1=level_bits$0;
      var _MN_=[0,caml_call2(Timing_wheel[7][5],0,level_bits$1)];
      return caml_call4(Timing_wheel[8][4],0,_MN_,alarm_precision,0)}
    var
     default_timing_wheel_config=
      default_timing_wheel_config_for_word_size(Base_Word_size[3]),
     _bY_=[0,caml_call1(sec,1.)],
     _b1_=caml_call1(sec,0.),
     _b2_=[0,caml_call1(Min_inter_cycle_timeout[4],_b1_)],
     _b3_=[0,caml_call1(Max_num_jobs_per_priority_per_cycle[4],500)],
     _b4_=[0,caml_call1(Max_num_threads[4],50)],
     _b5_=caml_call1(sec,0.05),
     _b6_=[0,caml_call1(Max_inter_cycle_timeout[4],_b5_)],
     _b8_=[0,caml_call1(Epoll_max_ready_events[4],256)],
     default$1=
      [0,
       [0,caml_call1(sec,60.)],
       _b$_,
       _b__,
       _b9_,
       _b8_,
       _b7_,
       _b6_,
       [0,default$0],
       _b4_,
       _b3_,
       _b2_,
       _b0_,
       _bZ_,
       _bY_,
       _bX_,
       [0,default_timing_wheel_config]],
     _ca_=default$1[16],
     _cc_=caml_call1(Core_kernel_Int[121][57],_cb_),
     _cd_=[0,[0,caml_call1(Thread_pool_cpu_affinity[1][4],_cc_)]],
     example=
      [0,
       default$1[1],
       default$1[2],
       default$1[3],
       default$1[4],
       default$1[5],
       default$1[6],
       default$1[7],
       default$1[8],
       default$1[9],
       default$1[10],
       default$1[11],
       _ce_,
       default$1[13],
       default$1[14],
       _cd_,
       _ca_];
    function usage(param)
     {var _ME_=0;
      function field(to_sexp,description,ac,field)
       {var
         _ML_=caml_call2(Base_Field[3],field,default$1),
         _MM_=
          caml_call1(to_sexp,caml_call4(Core_kernel_Option[49],0,0,0,_ML_));
        return [0,[0,caml_call1(Base_Field[2],field),_MM_,description],ac]}
      var
       _Ml_=Timing_wheel[8][2],
       _Mm_=Thread_pool_cpu_affinity[3],
       _Mn_=_a_[10],
       _Mo_=Core_kernel[291];
      function _Mp_(d)
       {return caml_call2(concat,0,[0,cst$1,[0,caml_call1(to_string,d),_ck_]])}
      var
       _Mq_=
        [0,
         cst_A_list_of_tags_specifying_which_Async_functions_should_print_debug_messages_to_stderr_Each_tag_identifies_a_group_of_related_Async_functions_The_tag_all_means_to_print_debug_messages_for_all_functions_Allowed_values_are,
         [0,
          caml_call2(concat,0,caml_call2(Core_kernel_List[69],list,_Mp_)),
          _cj_]],
       _Mr_=caml_call1(Core_kernel[400],sexp_of_t$7),
       _Ms_=Min_inter_cycle_timeout[2],
       _Mt_=Max_num_jobs_per_priority_per_cycle[2],
       _Mu_=Max_num_threads[2];
      function _Mv_(default$0)
       {var
         _MJ_=caml_call1(_aN_,default$0),
         _MK_=
          caml_call2
           (concat,
            0,
            [0,cst_min,[0,caml_call2(Core_kernel_Int[14],0,_MJ_),_cp_]]);
        return caml_call1(Core_kernel[447],_MK_)}
      var
       _Mw_=Max_inter_cycle_timeout[2],
       _Mx_=
        [0,
         cst_This_determines_what_OS_subsystem_Async_uses_to_watch_file_descriptors_for_being_ready_The_default_is_to_use_epoll_if_timerfd_s_are_supported_and_if_not_use_select_Allowed_values_are,
         [0,
          caml_call2
           (concat,_cs_,caml_call2(Core_kernel_List[69],list$0,to_string$0)),
          _cr_]],
       _My_=Epoll_max_ready_events[2],
       _Mz_=Core_kernel[291],
       _MA_=Core_kernel[291],
       fields=
        field
         (_Ml_,
          _cf_,
          field
           (_Mm_,
            _cg_,
            field
             (_Mn_,
              _ch_,
              field
               (_Mo_,
                _ci_,
                field
                 (_Mr_,
                  _Mq_,
                  field
                   (_Ms_,
                    _cl_,
                    field
                     (_Mt_,
                      _cm_,
                      field
                       (_Mu_,
                        _cn_,
                        field
                         (_Mv_,
                          _co_,
                          field
                           (_Mw_,
                            _cq_,
                            field
                             (sexp_of_t$9,
                              _Mx_,
                              field
                               (_My_,
                                _ct_,
                                field
                                 (sexp_of_t$6,
                                  _cu_,
                                  field
                                   (_Mz_,
                                    _cv_,
                                    field
                                     (_MA_,
                                      _cw_,
                                      field(_a_[10],_cx_,0,abort_after_thread_pool_stuck_for$0),
                                      check_invariants$0),
                                    detect_invalid_access_from_thread$0),
                                  dump_core_on_job_delay$0),
                                epoll_max_ready_events$0),
                              file_descr_watcher$0),
                            max_inter_cycle_timeout$0),
                          max_num_open_file_descrs$0),
                        max_num_threads$0),
                      max_num_jobs_per_priority_per_cycle$0),
                    min_inter_cycle_timeout$0),
                  print_debug_messages_for$0),
                record_backtraces$0),
              report_thread_pool_stuck_for$0),
            thread_pool_cpu_affinity$0),
          timing_wheel_config$0);
      function _MB_(param)
       {var description=param[3],default$0=param[2],name=param[1];
        return caml_call2
                (concat,
                 0,
                 [0,
                  cst$3,
                  [0,
                   name,
                   [0,
                    cst_default$1,
                    [0,
                     caml_call1(Core_kernel_Sexp[81],default$0),
                     [0,cst$2,description]]]]])}
      function _MC_(param,_MI_)
       {var name2=_MI_[1],name1=param[1];
        return caml_call2(Core_kernel_String[108],name1,name2)}
      var
       _MD_=caml_call2(Core_kernel_List[56],fields,_MC_),
       _MF_=
        [0,
         cst_Here_is_an_explanation_of_each_field,
         [0,
          caml_call2(concat,0,caml_call2(Core_kernel_List[69],_MD_,_MB_)),
          _ME_]],
       _MG_=sexp_of_t$10(example),
       _MH_=
        caml_call2
         (concat,
          0,
          [0,
           cst_The,
           [0,
            environment_variable,
            [0,
             cst_environment_variable_affects_Async_in_various_ways_Its_value_should_be_a_sexp_of_the_following_form_where_all_fields_are_optional,
             [0,caml_call2(Core_kernel_Sexp[79],0,_MG_),_MF_]]]]);
      caml_call2(Core_kernel[219],_cy_,_MH_);
      return caml_call1(Core_kernel[83],1)}
    function _cz_(param){return runtime.caml_sys_getenv(environment_variable)}
    var match=caml_call1(Core_kernel_Option[56],_cz_);
    if(match)
     {var _cA_=match[1];
      if(caml_string_notequal(_cA_,cst$4))
       {var
         _cB_=
          function(param$0)
           {var sexp=caml_call1(Core_kernel_Sexp[73],_cA_);
            if(0 === sexp[0])
             return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$4,sexp);
            var
             field_sexps=sexp[1],
             abort_after_thread_pool_stuck_for_field=[0,0],
             check_invariants_field=[0,0],
             detect_invalid_access_from_thread_field=[0,0],
             dump_core_on_job_delay_field=[0,0],
             epoll_max_ready_events_field=[0,0],
             file_descr_watcher_field=[0,0],
             max_inter_cycle_timeout_field=[0,0],
             max_num_open_file_descrs_field=[0,0],
             max_num_threads_field=[0,0],
             max_num_jobs_per_priority_per_cycle_field=[0,0],
             min_inter_cycle_timeout_field=[0,0],
             print_debug_messages_for_field=[0,0],
             record_backtraces_field=[0,0],
             report_thread_pool_stuck_for_field=[0,0],
             thread_pool_cpu_affinity_field=[0,0],
             timing_wheel_config_field=[0,0],
             duplicates=[0,0],
             extra=[0,0],
             param=field_sexps;
            for(;;)
             {if(param)
               {var _Mg_=param[1];
                if(1 === _Mg_[0])
                 {var _Mh_=_Mg_[1];
                  if(_Mh_)
                   {var _Mi_=_Mh_[1];
                    if(0 === _Mi_[0])
                     {var _Mj_=_Mh_[2],_Mk_=_Mi_[1];
                      if(! _Mj_)
                       {var tail$0=param[2];
                        if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_Mk_,extra[1]];
                        var param=tail$0;
                        continue}
                      if(! _Mj_[2])
                       {var
                         tail=param[2],
                         field_sexp=_Mj_[1],
                         switch$0=
                          caml_string_compare(_Mk_,cst_max_num_open_file_descrs$0);
                        if(0 <= switch$0)
                         if(0 < switch$0)
                          if(caml_string_notequal(_Mk_,cst_max_num_threads$0))
                           if(caml_string_notequal(_Mk_,cst_min_inter_cycle_timeout$0))
                            if
                             (caml_string_notequal(_Mk_,cst_print_debug_messages_for$0))
                             if(caml_string_notequal(_Mk_,cst_record_backtraces$0))
                              if
                               (caml_string_notequal
                                 (_Mk_,cst_report_thread_pool_stuck_for$0))
                               if
                                (caml_string_notequal(_Mk_,cst_thread_pool_cpu_affinity$0))
                                if(caml_string_notequal(_Mk_,cst_timing_wheel_config$0))
                                 var switch$1=1;
                                else
                                 {if(timing_wheel_config_field[1])
                                   duplicates[1] = [0,_Mk_,duplicates[1]];
                                  else
                                   {var fvalue=caml_call1(Timing_wheel[8][1],field_sexp);
                                    timing_wheel_config_field[1] = [0,fvalue]}
                                  var switch$1=0}
                               else
                                {if(thread_pool_cpu_affinity_field[1])
                                  duplicates[1] = [0,_Mk_,duplicates[1]];
                                 else
                                  {var
                                    fvalue$0=
                                     caml_call1(Thread_pool_cpu_affinity[2],field_sexp);
                                   thread_pool_cpu_affinity_field[1] = [0,fvalue$0]}
                                 var switch$1=0}
                              else
                               {if(report_thread_pool_stuck_for_field[1])
                                 duplicates[1] = [0,_Mk_,duplicates[1]];
                                else
                                 {var fvalue$1=caml_call1(_a_[9],field_sexp);
                                  report_thread_pool_stuck_for_field[1] = [0,fvalue$1]}
                                var switch$1=0}
                             else
                              {if(record_backtraces_field[1])
                                duplicates[1] = [0,_Mk_,duplicates[1]];
                               else
                                {var fvalue$2=caml_call1(Core_kernel[292],field_sexp);
                                 record_backtraces_field[1] = [0,fvalue$2]}
                               var switch$1=0}
                            else
                             {if(print_debug_messages_for_field[1])
                               duplicates[1] = [0,_Mk_,duplicates[1]];
                              else
                               {var
                                 fvalue$3=
                                  caml_call2(Core_kernel[401],t_of_sexp$7,field_sexp);
                                print_debug_messages_for_field[1] = [0,fvalue$3]}
                              var switch$1=0}
                           else
                            {if(min_inter_cycle_timeout_field[1])
                              duplicates[1] = [0,_Mk_,duplicates[1]];
                             else
                              {var
                                fvalue$4=
                                 caml_call1(Min_inter_cycle_timeout[1],field_sexp);
                               min_inter_cycle_timeout_field[1] = [0,fvalue$4]}
                             var switch$1=0}
                          else
                           {if(max_num_threads_field[1])
                             duplicates[1] = [0,_Mk_,duplicates[1]];
                            else
                             {var fvalue$5=caml_call1(Max_num_threads[1],field_sexp);
                              max_num_threads_field[1] = [0,fvalue$5]}
                            var switch$1=0}
                         else
                          {if(max_num_open_file_descrs_field[1])
                            duplicates[1] = [0,_Mk_,duplicates[1]];
                           else
                            {var fvalue$6=caml_call1(_aJ_,field_sexp);
                             max_num_open_file_descrs_field[1] = [0,fvalue$6]}
                           var switch$1=0}
                        else
                         if
                          (caml_string_notequal
                            (_Mk_,cst_abort_after_thread_pool_stuck_for$0))
                          if(caml_string_notequal(_Mk_,cst_check_invariants$0))
                           if
                            (caml_string_notequal
                              (_Mk_,cst_detect_invalid_access_from_thread$0))
                            if(caml_string_notequal(_Mk_,cst_dump_core_on_job_delay$0))
                             if(caml_string_notequal(_Mk_,cst_epoll_max_ready_events$0))
                              if(caml_string_notequal(_Mk_,cst_file_descr_watcher$2))
                               if(caml_string_notequal(_Mk_,cst_max_inter_cycle_timeout$0))
                                if
                                 (caml_string_notequal
                                   (_Mk_,cst_max_num_jobs_per_priority_per_cycle$0))
                                 var switch$1=1;
                                else
                                 {if(max_num_jobs_per_priority_per_cycle_field[1])
                                   duplicates[1] = [0,_Mk_,duplicates[1]];
                                  else
                                   {var
                                     fvalue$7=
                                      caml_call1
                                       (Max_num_jobs_per_priority_per_cycle[1],field_sexp);
                                    max_num_jobs_per_priority_per_cycle_field[1] = [0,fvalue$7]}
                                  var switch$1=0}
                               else
                                {if(max_inter_cycle_timeout_field[1])
                                  duplicates[1] = [0,_Mk_,duplicates[1]];
                                 else
                                  {var
                                    fvalue$8=
                                     caml_call1(Max_inter_cycle_timeout[1],field_sexp);
                                   max_inter_cycle_timeout_field[1] = [0,fvalue$8]}
                                 var switch$1=0}
                              else
                               {if(file_descr_watcher_field[1])
                                 duplicates[1] = [0,_Mk_,duplicates[1]];
                                else
                                 {var fvalue$9=caml_call1(t_of_sexp$9,field_sexp);
                                  file_descr_watcher_field[1] = [0,fvalue$9]}
                                var switch$1=0}
                             else
                              {if(epoll_max_ready_events_field[1])
                                duplicates[1] = [0,_Mk_,duplicates[1]];
                               else
                                {var
                                  fvalue$10=
                                   caml_call1(Epoll_max_ready_events[1],field_sexp);
                                 epoll_max_ready_events_field[1] = [0,fvalue$10]}
                               var switch$1=0}
                            else
                             {if(dump_core_on_job_delay_field[1])
                               duplicates[1] = [0,_Mk_,duplicates[1]];
                              else
                               {var fvalue$11=t_of_sexp$6(field_sexp);
                                dump_core_on_job_delay_field[1] = [0,fvalue$11]}
                              var switch$1=0}
                           else
                            {if(detect_invalid_access_from_thread_field[1])
                              duplicates[1] = [0,_Mk_,duplicates[1]];
                             else
                              {var fvalue$12=caml_call1(Core_kernel[292],field_sexp);
                               detect_invalid_access_from_thread_field[1] = [0,fvalue$12]}
                             var switch$1=0}
                          else
                           {if(check_invariants_field[1])
                             duplicates[1] = [0,_Mk_,duplicates[1]];
                            else
                             {var fvalue$13=caml_call1(Core_kernel[292],field_sexp);
                              check_invariants_field[1] = [0,fvalue$13]}
                            var switch$1=0}
                         else
                          {if(abort_after_thread_pool_stuck_for_field[1])
                            duplicates[1] = [0,_Mk_,duplicates[1]];
                           else
                            {var fvalue$14=caml_call1(_a_[9],field_sexp);
                             abort_after_thread_pool_stuck_for_field[1] = [0,fvalue$14]}
                           var switch$1=0}
                        if(switch$1)
                         if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_Mk_,extra[1]];
                        var param=tail;
                        continue}}}}
                caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$4,_Mg_)}
              if(duplicates[1])
               return caml_call3
                       (Sexplib0_Sexp_conv_error[11],tp_loc$4,duplicates[1],sexp);
              if(extra[1])
               return caml_call3
                       (Sexplib0_Sexp_conv_error[12],tp_loc$4,extra[1],sexp);
              var
               timing_wheel_config_value=timing_wheel_config_field[1],
               thread_pool_cpu_affinity_value=
                thread_pool_cpu_affinity_field[1],
               report_thread_pool_stuck_for_value=
                report_thread_pool_stuck_for_field[1],
               record_backtraces_value=record_backtraces_field[1],
               print_debug_messages_for_value=
                print_debug_messages_for_field[1],
               min_inter_cycle_timeout_value=min_inter_cycle_timeout_field[1],
               max_num_jobs_per_priority_per_cycle_value=
                max_num_jobs_per_priority_per_cycle_field[1],
               max_num_threads_value=max_num_threads_field[1],
               max_num_open_file_descrs_value=
                max_num_open_file_descrs_field[1],
               max_inter_cycle_timeout_value=max_inter_cycle_timeout_field[1],
               file_descr_watcher_value=file_descr_watcher_field[1],
               epoll_max_ready_events_value=epoll_max_ready_events_field[1],
               dump_core_on_job_delay_value=dump_core_on_job_delay_field[1],
               detect_invalid_access_from_thread_value=
                detect_invalid_access_from_thread_field[1],
               check_invariants_value=check_invariants_field[1],
               abort_after_thread_pool_stuck_for_value=
                abort_after_thread_pool_stuck_for_field[1];
              return [0,
                      abort_after_thread_pool_stuck_for_value,
                      check_invariants_value,
                      detect_invalid_access_from_thread_value,
                      dump_core_on_job_delay_value,
                      epoll_max_ready_events_value,
                      file_descr_watcher_value,
                      max_inter_cycle_timeout_value,
                      max_num_open_file_descrs_value,
                      max_num_threads_value,
                      max_num_jobs_per_priority_per_cycle_value,
                      min_inter_cycle_timeout_value,
                      print_debug_messages_for_value,
                      record_backtraces_value,
                      report_thread_pool_stuck_for_value,
                      thread_pool_cpu_affinity_value,
                      timing_wheel_config_value]}},
         match$0=caml_call1(Core_kernel_Result[43],_cB_);
        if(0 === match$0[0])
         var t=match$0[1],t$0=t;
        else
         {var
           exn$0=match$0[1],
           _nD_=Core_kernel[508],
           _nF_=caml_call2(Core_kernel[244],_nE_,environment_variable),
           _nG_=caml_call5(Core_kernel_Error[15],0,0,_nF_,exn$0,_nD_),
           _nH_=caml_call1(Core_kernel_Error[6],_nG_),
           _nI_=caml_call2(Core_kernel_Sexp[79],0,_nH_);
          caml_call2(Core_kernel[219],_nJ_,_nI_);
          var t$0=usage(0)}
        var t$1=t$0}
      else
       var t$1=usage(0);
      var t$2=t$1}
    else
     var t$2=empty;
    function print_debug_messages_for$1(tag)
     {var _Mf_=t$2[12];
      if(_Mf_)
       {var l=_Mf_[1];return caml_call3(Core_kernel_List[5],l,tag,equal$0)}
      return 0}
    var all=print_debug_messages_for$1(0);
    function debug(tag){return all?all:print_debug_messages_for$1(tag)}
    var
     clock=debug(1),
     fd=debug(2),
     file_descr_watcher$1=debug(3),
     finalizers=debug(4),
     interruptor=debug(5),
     monitor=debug(6),
     monitor_send_exn=debug(7),
     parallel=debug(8),
     reader=debug(9),
     scheduler=debug(10),
     shutdown=debug(11),
     thread_pool=debug(12),
     thread_safe=debug(13),
     writer=debug(14);
    function symbol(field)
     {var
       _Mc_=caml_call2(Base_Field[3],field,default$1),
       _Md_=caml_call4(Core_kernel_Option[49],0,0,0,_Mc_),
       _Me_=caml_call2(Base_Field[3],field,t$2);
      return caml_call2(Core_kernel_Option[48],_Me_,_Md_)}
    var
     abort_after_thread_pool_stuck_for$1=
      symbol(abort_after_thread_pool_stuck_for$0),
     check_invariants$1=symbol(check_invariants$0),
     detect_invalid_access_from_thread$1=
      symbol(detect_invalid_access_from_thread$0),
     epoll_max_ready_events$1=symbol(epoll_max_ready_events$0),
     thread_pool_cpu_affinity$1=symbol(thread_pool_cpu_affinity$0),
     file_descr_watcher$2=symbol(file_descr_watcher$0),
     max_inter_cycle_timeout$1=symbol(max_inter_cycle_timeout$0),
     max_num_open_file_descrs$1=symbol(max_num_open_file_descrs$0),
     max_num_threads$1=symbol(max_num_threads$0),
     max_num_jobs_per_priority_per_cycle$1=
      symbol(max_num_jobs_per_priority_per_cycle$0),
     min_inter_cycle_timeout$1=symbol(min_inter_cycle_timeout$0),
     record_backtraces$1=symbol(record_backtraces$0),
     report_thread_pool_stuck_for$1=symbol(report_thread_pool_stuck_for$0),
     timing_wheel_config$1=symbol(timing_wheel_config$0),
     dump_core_on_job_delay$1=symbol(dump_core_on_job_delay$0),
     t$3=
      [0,
       [0,abort_after_thread_pool_stuck_for$1],
       [0,check_invariants$1],
       [0,detect_invalid_access_from_thread$1],
       [0,dump_core_on_job_delay$1],
       [0,epoll_max_ready_events$1],
       [0,file_descr_watcher$2],
       [0,max_inter_cycle_timeout$1],
       [0,max_num_open_file_descrs$1],
       [0,max_num_threads$1],
       [0,max_num_jobs_per_priority_per_cycle$1],
       [0,min_inter_cycle_timeout$1],
       t$2[12],
       [0,record_backtraces$1],
       [0,report_thread_pool_stuck_for$1],
       [0,thread_pool_cpu_affinity$1],
       [0,timing_wheel_config$1]],
     task_id=[0,function(param){return _cC_}];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$4=
      [0,
       clock,
       fd,
       file_descr_watcher$1,
       finalizers,
       interruptor,
       monitor,
       monitor_send_exn,
       parallel,
       reader,
       scheduler,
       shutdown,
       thread_pool,
       thread_safe,
       writer],
     Async_kernel_Async_kernel_config=
      [0,
       Epoll_max_ready_events,
       Max_inter_cycle_timeout,
       Min_inter_cycle_timeout,
       Max_num_threads,
       Max_num_jobs_per_priority_per_cycle,
       [0,_aJ_,_aK_,_aL_,_aM_,_aN_,equal,default$0],
       [0,How_to_dump,sexp_of_watch,watch_of_sexp,t_of_sexp$6,sexp_of_t$6],
       [0,sexp_of_t$7],
       [0,sexp_of_t$9],
       sexp_of_t$10,
       t$3,
       environment_variable,
       include$4,
       abort_after_thread_pool_stuck_for$1,
       check_invariants$1,
       detect_invalid_access_from_thread$1,
       dump_core_on_job_delay$1,
       thread_pool_cpu_affinity$1,
       epoll_max_ready_events$1,
       file_descr_watcher$2,
       max_inter_cycle_timeout$1,
       max_num_jobs_per_priority_per_cycle$1,
       max_num_open_file_descrs$1,
       max_num_threads$1,
       min_inter_cycle_timeout$1,
       record_backtraces$1,
       report_thread_pool_stuck_for$1,
       timing_wheel_config$1,
       default_timing_wheel_config_for_word_size,
       task_id];
    caml_register_global
     (1179,
      Async_kernel_Async_kernel_config,
      "Async_kernel__Async_kernel_config");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$5);
    caml_call1(Expect_test_collector[4][1],cst_src_debug_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$6,cst$5);
    var
     _cD_=include$4[1],
     _cG_=include$4[4],
     _cI_=include$4[6],
     _cJ_=include$4[7],
     _cM_=include$4[10],
     _cE_=include$4[2],
     _cF_=include$4[3],
     _cH_=include$4[5],
     _cK_=include$4[8],
     _cL_=include$4[9],
     _cN_=include$4[11],
     _cO_=include$4[12],
     _cP_=include$4[13],
     _cQ_=include$4[14];
    function log(v2,v3,sexp_of_a)
     {var
       v1=caml_call1(_ah_,0),
       v0=caml_call1(task_id[1],0),
       v0$0=caml_call1(Core_kernel_Sexp[88],v0),
       v1$0=caml_call1(_aI_,v1),
       v2$0=caml_call1(Core_kernel[447],v2),
       v3$0=caml_call1(sexp_of_a,v3),
       _Mb_=
        caml_call2
         (Core_kernel_Sexp[79],0,[1,[0,v0$0,[0,v1$0,[0,v2$0,[0,v3$0,0]]]]]);
      return caml_call2(Core_kernel[219],_cR_,_Mb_)}
    function log_string(message){return log(message,0,Core_kernel[491])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Debug=
      [0,
       _cD_,
       _cE_,
       _cF_,
       _cG_,
       _cH_,
       _cI_,
       _cJ_,
       _cK_,
       _cL_,
       _cM_,
       _cN_,
       _cO_,
       _cP_,
       _cQ_,
       log,
       log_string];
    caml_register_global(1180,Async_kernel_Debug,"Async_kernel__Debug");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$8);
    caml_call1(Expect_test_collector[4][1],cst_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$9,cst$6);
    var
     include$5=Core_kernel_Int[118],
     symbol$0=include$5[1],
     symbol$1=include$5[2],
     symbol$2=include$5[3],
     symbol$3=include$5[4],
     symbol$4=include$5[5],
     symbol$5=include$5[6],
     equal$1=include$5[7],
     compare=include$5[8],
     min=include$5[9],
     max=include$5[10],
     concat$0=Core_kernel_String[24],
     eprint=Core_kernel_Debug[1],
     eprint_s=Core_kernel_Debug[3],
     eprints=Core_kernel_Debug[2];
    function print_s(sexp)
     {var _Ma_=caml_call2(Core_kernel_Sexp[79],0,sexp);
      return caml_call2(Core_kernel[238],_cS_,_Ma_)}
    var sec$0=_a_[80],Thread=[0],Unix=[0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Import=
      [0,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       symbol$5,
       equal$1,
       compare,
       min,
       max,
       concat$0,
       eprint,
       eprint_s,
       eprints,
       print_s,
       sec$0,
       Thread,
       Unix];
    caml_register_global(1182,Async_kernel_Import,"Async_kernel__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$11);
    caml_call1(Expect_test_collector[4][1],cst_src_priority_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$12,cst$7);
    function sexp_of_t$11(param){return 0 === param?_cT_:_cU_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Priority=[0,sexp_of_t$11,0,1];
    caml_register_global(1183,Async_kernel_Priority,"Async_kernel__Priority");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$14);
    caml_call1(Expect_test_collector[4][1],cst_src_types_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$15,cst$8);
    var
     Cell=caml_call2(CamlinternalMod[1],_cW_,_cV_),
     Handler=caml_call2(CamlinternalMod[1],_cY_,_cX_),
     Ivar=caml_call2(CamlinternalMod[1],_c0_,_cZ_),
     Deferred=caml_call2(CamlinternalMod[1],_c2_,_c1_),
     Execution_context=caml_call2(CamlinternalMod[1],_c4_,_c3_),
     Monitor=caml_call2(CamlinternalMod[1],_c6_,_c5_),
     Tail=caml_call2(CamlinternalMod[1],_c8_,_c7_),
     Stream=caml_call2(CamlinternalMod[1],_c__,_c9_);
    caml_call3(CamlinternalMod[2],_c$_,Cell,Cell);
    caml_call3(CamlinternalMod[2],_da_,Handler,Handler);
    caml_call3(CamlinternalMod[2],_db_,Ivar,Ivar);
    caml_call3(CamlinternalMod[2],_dc_,Deferred,Deferred);
    caml_call3(CamlinternalMod[2],_dd_,Execution_context,Execution_context);
    caml_call3(CamlinternalMod[2],_de_,Monitor,Monitor);
    caml_call3(CamlinternalMod[2],_df_,Tail,Tail);
    caml_call3(CamlinternalMod[2],_dg_,Stream,Stream);
    var normal=0;
    function to_repr(t){return t}
    function of_repr(t){return t}
    var
     Bvar=[0,of_repr,to_repr],
     Event=caml_call2(CamlinternalMod[1],_di_,_dh_),
     External_job=caml_call2(CamlinternalMod[1],_dk_,_dj_),
     Job=caml_call2(CamlinternalMod[1],_dm_,_dl_),
     Job_or_event=caml_call2(CamlinternalMod[1],_do_,_dn_),
     Job_pool=caml_call2(CamlinternalMod[1],_dq_,_dp_),
     Job_queue=caml_call2(CamlinternalMod[1],_ds_,_dr_),
     Jobs=caml_call2(CamlinternalMod[1],_du_,_dt_),
     Scheduler=caml_call2(CamlinternalMod[1],_dw_,_dv_),
     Time_source=caml_call2(CamlinternalMod[1],_dy_,_dx_),
     Very_low_priority_worker=caml_call2(CamlinternalMod[1],_dA_,_dz_),
     Time_source_id=caml_call1(Core_kernel_Unique_id[2],[0]);
    caml_call3(CamlinternalMod[2],_dB_,Event,Event);
    caml_call3(CamlinternalMod[2],_dC_,External_job,External_job);
    caml_call3(CamlinternalMod[2],_dD_,Job,Job);
    caml_call3(CamlinternalMod[2],_dE_,Job_or_event,Job_or_event);
    caml_call3(CamlinternalMod[2],_dF_,Job_pool,Job_pool);
    caml_call3(CamlinternalMod[2],_dG_,Job_queue,Job_queue);
    caml_call3(CamlinternalMod[2],_dH_,Jobs,Jobs);
    caml_call3(CamlinternalMod[2],_dI_,Scheduler,Scheduler);
    caml_call3(CamlinternalMod[2],_dJ_,Time_source,Time_source);
    caml_call3
     (CamlinternalMod[2],
      _dK_,
      Very_low_priority_worker,
      Very_low_priority_worker);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Types=
      [0,
       Cell,
       Handler,
       Ivar,
       Deferred,
       Execution_context,
       Monitor,
       Tail,
       Stream,
       Bvar,
       Event,
       External_job,
       Job,
       Job_or_event,
       Job_pool,
       Job_queue,
       Jobs,
       Scheduler,
       Time_source_id,
       Time_source,
       Very_low_priority_worker];
    caml_register_global(1186,Async_kernel_Types,"Async_kernel__Types");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$17);
    caml_call1(Expect_test_collector[4][1],cst_src_monitor0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$18,cst$9);
    function is_detached(r){return r[9]}
    function set_is_detached(r,v){r[9] = v;return 0}
    function has_seen_error(r){return r[8]}
    function set_has_seen_error(r,v){r[8] = v;return 0}
    function tails_for_all_errors(r){return r[7]}
    function set_tails_for_all_errors(r,v){r[7] = v;return 0}
    function handlers_for_all_errors(r){return r[6]}
    function set_handlers_for_all_errors(r,v){r[6] = v;return 0}
    function next_error(r){return r[5]}
    function set_next_error(r,v){r[5] = v;return 0}
    function parent(r){return r[4]}
    function id(r){return r[3]}
    function here$5(r){return r[2]}
    function name(r){return r[1]}
    function _dL_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v]}
    var
     _dM_=[0,set_is_detached],
     is_detached$0=
      [0,function(param){return 0},cst_is_detached,_dM_,is_detached,_dL_];
    function _dN_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9]]}
    var
     _dO_=[0,set_has_seen_error],
     has_seen_error$0=
      [0,
       function(param){return 0},
       cst_has_seen_error,
       _dO_,
       has_seen_error,
       _dN_];
    function _dP_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9]]}
    var
     _dQ_=[0,set_tails_for_all_errors],
     tails_for_all_errors$0=
      [0,
       function(param){return 0},
       cst_tails_for_all_errors,
       _dQ_,
       tails_for_all_errors,
       _dP_];
    function _dR_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9]]}
    var
     _dS_=[0,set_handlers_for_all_errors],
     handlers_for_all_errors$0=
      [0,
       function(param){return 0},
       cst_handlers_for_all_errors,
       _dS_,
       handlers_for_all_errors,
       _dR_];
    function _dT_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9]]}
    var
     _dU_=[0,set_next_error],
     next_error$0=
      [0,function(param){return 0},cst_next_error,_dU_,next_error,_dT_];
    function _dV_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9]]}
    var
     _dW_=0,
     parent$0=[0,function(param){return 0},cst_parent,_dW_,parent,_dV_];
    function _dX_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _dY_=0,id$0=[0,function(param){return 0},cst_id,_dY_,id,_dX_];
    function _dZ_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _d0_=0,here$6=[0,function(param){return 0},cst_here,_d0_,here$5,_dZ_];
    function _d1_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _d2_=0,name$0=[0,function(param){return 0},cst_name,_d2_,name,_d1_];
    function make_creator
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun,
      compile_acc)
     {var
       match=caml_call2(name_fun,name$0,compile_acc),
       compile_acc$0=match[2],
       name_gen=match[1],
       match$0=caml_call2(here_fun,here$6,compile_acc$0),
       compile_acc$1=match$0[2],
       here_gen=match$0[1],
       match$1=caml_call2(id_fun,id$0,compile_acc$1),
       compile_acc$2=match$1[2],
       id_gen=match$1[1],
       match$2=caml_call2(parent_fun,parent$0,compile_acc$2),
       compile_acc$3=match$2[2],
       parent_gen=match$2[1],
       match$3=caml_call2(next_error_fun,next_error$0,compile_acc$3),
       compile_acc$4=match$3[2],
       next_error_gen=match$3[1],
       match$4=
        caml_call2
         (handlers_for_all_errors_fun,handlers_for_all_errors$0,compile_acc$4),
       compile_acc$5=match$4[2],
       handlers_for_all_errors_gen=match$4[1],
       match$5=
        caml_call2
         (tails_for_all_errors_fun,tails_for_all_errors$0,compile_acc$5),
       compile_acc$6=match$5[2],
       tails_for_all_errors_gen=match$5[1],
       match$6=caml_call2(has_seen_error_fun,has_seen_error$0,compile_acc$6),
       compile_acc$7=match$6[2],
       has_seen_error_gen=match$6[1],
       match$7=caml_call2(is_detached_fun,is_detached$0,compile_acc$7),
       compile_acc$8=match$7[2],
       is_detached_gen=match$7[1];
      return [0,
              function(acc)
               {var
                 name=caml_call1(name_gen,acc),
                 here=caml_call1(here_gen,acc),
                 id=caml_call1(id_gen,acc),
                 parent=caml_call1(parent_gen,acc),
                 next_error=caml_call1(next_error_gen,acc),
                 handlers_for_all_errors=
                  caml_call1(handlers_for_all_errors_gen,acc),
                 tails_for_all_errors=caml_call1(tails_for_all_errors_gen,acc),
                 has_seen_error=caml_call1(has_seen_error_gen,acc),
                 is_detached=caml_call1(is_detached_gen,acc);
                return [0,
                        name,
                        here,
                        id,
                        parent,
                        next_error,
                        handlers_for_all_errors,
                        tails_for_all_errors,
                        has_seen_error,
                        is_detached]},
              compile_acc$8]}
    function create
     (name,
      here,
      id,
      parent,
      next_error,
      handlers_for_all_errors,
      tails_for_all_errors,
      has_seen_error,
      is_detached)
     {return [0,
              name,
              here,
              id,
              parent,
              next_error,
              handlers_for_all_errors,
              tails_for_all_errors,
              has_seen_error,
              is_detached]}
    function map
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _L4_=caml_call1(is_detached_fun,is_detached$0),
       _L5_=caml_call1(has_seen_error_fun,has_seen_error$0),
       _L6_=caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0),
       _L7_=caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0),
       _L8_=caml_call1(next_error_fun,next_error$0),
       _L9_=caml_call1(parent_fun,parent$0),
       _L__=caml_call1(id_fun,id$0),
       _L$_=caml_call1(here_fun,here$6);
      return [0,
              caml_call1(name_fun,name$0),
              _L$_,
              _L__,
              _L9_,
              _L8_,
              _L7_,
              _L6_,
              _L5_,
              _L4_]}
    function iter
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {caml_call1(name_fun,name$0);
      caml_call1(here_fun,here$6);
      caml_call1(id_fun,id$0);
      caml_call1(parent_fun,parent$0);
      caml_call1(next_error_fun,next_error$0);
      caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0);
      caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0);
      caml_call1(has_seen_error_fun,has_seen_error$0);
      return caml_call1(is_detached_fun,is_detached$0)}
    function fold
     (init,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {return caml_call2
              (is_detached_fun,
               caml_call2
                (has_seen_error_fun,
                 caml_call2
                  (tails_for_all_errors_fun,
                   caml_call2
                    (handlers_for_all_errors_fun,
                     caml_call2
                      (next_error_fun,
                       caml_call2
                        (parent_fun,
                         caml_call2
                          (id_fun,
                           caml_call2(here_fun,caml_call2(name_fun,init,name$0),here$6),
                           id$0),
                         parent$0),
                       next_error$0),
                     handlers_for_all_errors$0),
                   tails_for_all_errors$0),
                 has_seen_error$0),
               is_detached$0)}
    function map_poly(record)
     {var
       _LW_=[0,caml_call1(record[1],is_detached$0),0],
       _LX_=[0,caml_call1(record[1],has_seen_error$0),_LW_],
       _LY_=[0,caml_call1(record[1],tails_for_all_errors$0),_LX_],
       _LZ_=[0,caml_call1(record[1],handlers_for_all_errors$0),_LY_],
       _L0_=[0,caml_call1(record[1],next_error$0),_LZ_],
       _L1_=[0,caml_call1(record[1],parent$0),_L0_],
       _L2_=[0,caml_call1(record[1],id$0),_L1_],
       _L3_=[0,caml_call1(record[1],here$6),_L2_];
      return [0,caml_call1(record[1],name$0),_L3_]}
    function for_all
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _LO_=caml_call1(name_fun,name$0),
       _LP_=_LO_?caml_call1(here_fun,here$6):_LO_,
       _LQ_=_LP_?caml_call1(id_fun,id$0):_LP_,
       _LR_=_LQ_?caml_call1(parent_fun,parent$0):_LQ_,
       _LS_=_LR_?caml_call1(next_error_fun,next_error$0):_LR_,
       _LT_=
        _LS_
         ?caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0)
         :_LS_,
       _LU_=
        _LT_?caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0):_LT_,
       _LV_=_LU_?caml_call1(has_seen_error_fun,has_seen_error$0):_LU_;
      return _LV_?caml_call1(is_detached_fun,is_detached$0):_LV_}
    function exists
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _LN_=caml_call1(name_fun,name$0),
       _LG_=_LN_ || caml_call1(here_fun,here$6),
       _LH_=_LG_ || caml_call1(id_fun,id$0),
       _LI_=_LH_ || caml_call1(parent_fun,parent$0),
       _LJ_=_LI_ || caml_call1(next_error_fun,next_error$0),
       _LK_=
        _LJ_
        ||
        caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0),
       _LL_=
        _LK_
        ||
        caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0),
       _LM_=_LL_ || caml_call1(has_seen_error_fun,has_seen_error$0);
      return _LM_?_LM_:caml_call1(is_detached_fun,is_detached$0)}
    function to_list
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Ly_=[0,caml_call1(is_detached_fun,is_detached$0),0],
       _Lz_=[0,caml_call1(has_seen_error_fun,has_seen_error$0),_Ly_],
       _LA_=
        [0,caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0),_Lz_],
       _LB_=
        [0,
         caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0),
         _LA_],
       _LC_=[0,caml_call1(next_error_fun,next_error$0),_LB_],
       _LD_=[0,caml_call1(parent_fun,parent$0),_LC_],
       _LE_=[0,caml_call1(id_fun,id$0),_LD_],
       _LF_=[0,caml_call1(here_fun,here$6),_LE_];
      return [0,caml_call1(name_fun,name$0),_LF_]}
    function iter$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {caml_call3(name_fun,name$0,record,record[1]);
      caml_call3(here_fun,here$6,record,record[2]);
      caml_call3(id_fun,id$0,record,record[3]);
      caml_call3(parent_fun,parent$0,record,record[4]);
      caml_call3(next_error_fun,next_error$0,record,record[5]);
      caml_call3
       (handlers_for_all_errors_fun,
        handlers_for_all_errors$0,
        record,
        record[6]);
      caml_call3
       (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]);
      caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]);
      return caml_call3(is_detached_fun,is_detached$0,record,record[9])}
    function fold$0
     (record,
      init,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Lq_=record[9],
       _Lr_=record[8],
       _Ls_=record[7],
       _Lt_=record[6],
       _Lu_=record[5],
       _Lv_=record[4],
       _Lw_=record[3],
       _Lx_=record[2];
      return caml_call4
              (is_detached_fun,
               caml_call4
                (has_seen_error_fun,
                 caml_call4
                  (tails_for_all_errors_fun,
                   caml_call4
                    (handlers_for_all_errors_fun,
                     caml_call4
                      (next_error_fun,
                       caml_call4
                        (parent_fun,
                         caml_call4
                          (id_fun,
                           caml_call4
                            (here_fun,
                             caml_call4(name_fun,init,name$0,record,record[1]),
                             here$6,
                             record,
                             _Lx_),
                           id$0,
                           record,
                           _Lw_),
                         parent$0,
                         record,
                         _Lv_),
                       next_error$0,
                       record,
                       _Lu_),
                     handlers_for_all_errors$0,
                     record,
                     _Lt_),
                   tails_for_all_errors$0,
                   record,
                   _Ls_),
                 has_seen_error$0,
                 record,
                 _Lr_),
               is_detached$0,
               record,
               _Lq_)}
    function for_all$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Li_=caml_call3(name_fun,name$0,record,record[1]),
       _Lj_=_Li_?caml_call3(here_fun,here$6,record,record[2]):_Li_,
       _Lk_=_Lj_?caml_call3(id_fun,id$0,record,record[3]):_Lj_,
       _Ll_=_Lk_?caml_call3(parent_fun,parent$0,record,record[4]):_Lk_,
       _Lm_=_Ll_?caml_call3(next_error_fun,next_error$0,record,record[5]):_Ll_,
       _Ln_=
        _Lm_
         ?caml_call3
           (handlers_for_all_errors_fun,
            handlers_for_all_errors$0,
            record,
            record[6])
         :_Lm_,
       _Lo_=
        _Ln_
         ?caml_call3
           (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7])
         :_Ln_,
       _Lp_=
        _Lo_
         ?caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8])
         :_Lo_;
      return _Lp_
              ?caml_call3(is_detached_fun,is_detached$0,record,record[9])
              :_Lp_}
    function exists$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Lh_=caml_call3(name_fun,name$0,record,record[1]),
       _La_=_Lh_ || caml_call3(here_fun,here$6,record,record[2]),
       _Lb_=_La_ || caml_call3(id_fun,id$0,record,record[3]),
       _Lc_=_Lb_ || caml_call3(parent_fun,parent$0,record,record[4]),
       _Ld_=_Lc_ || caml_call3(next_error_fun,next_error$0,record,record[5]),
       _Le_=
        _Ld_
        ||
        caml_call3
         (handlers_for_all_errors_fun,
          handlers_for_all_errors$0,
          record,
          record[6]),
       _Lf_=
        _Le_
        ||
        caml_call3
         (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]),
       _Lg_=
        _Lf_
        ||
        caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]);
      return _Lg_
              ?_Lg_
              :caml_call3(is_detached_fun,is_detached$0,record,record[9])}
    function to_list$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _K4_=[0,caml_call3(is_detached_fun,is_detached$0,record,record[9]),0],
       _K5_=
        [0,
         caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]),
         _K4_],
       _K6_=
        [0,
         caml_call3
          (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]),
         _K5_],
       _K7_=
        [0,
         caml_call3
          (handlers_for_all_errors_fun,
           handlers_for_all_errors$0,
           record,
           record[6]),
         _K6_],
       _K8_=[0,caml_call3(next_error_fun,next_error$0,record,record[5]),_K7_],
       _K9_=[0,caml_call3(parent_fun,parent$0,record,record[4]),_K8_],
       _K__=[0,caml_call3(id_fun,id$0,record,record[3]),_K9_],
       _K$_=[0,caml_call3(here_fun,here$6,record,record[2]),_K__];
      return [0,caml_call3(name_fun,name$0,record,record[1]),_K$_]}
    function map$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _KW_=caml_call3(is_detached_fun,is_detached$0,record,record[9]),
       _KX_=caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]),
       _KY_=
        caml_call3
         (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]),
       _KZ_=
        caml_call3
         (handlers_for_all_errors_fun,
          handlers_for_all_errors$0,
          record,
          record[6]),
       _K0_=caml_call3(next_error_fun,next_error$0,record,record[5]),
       _K1_=caml_call3(parent_fun,parent$0,record,record[4]),
       _K2_=caml_call3(id_fun,id$0,record,record[3]),
       _K3_=caml_call3(here_fun,here$6,record,record[2]);
      return [0,
              caml_call3(name_fun,name$0,record,record[1]),
              _K3_,
              _K2_,
              _K1_,
              _K0_,
              _KZ_,
              _KY_,
              _KX_,
              _KW_]}
    function set_all_mutable_fields
     (record,
      next_error,
      handlers_for_all_errors,
      tails_for_all_errors,
      has_seen_error,
      is_detached)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[5] = next_error;
      record$0[6] = handlers_for_all_errors;
      record$0[7] = tails_for_all_errors;
      record$0[8] = has_seen_error;
      record$0[9] = is_detached;
      return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$0,
       for_all$0,
       exists$0,
       to_list$0,
       map$0,
       set_all_mutable_fields],
     Fields=
      [0,
       names,
       is_detached$0,
       has_seen_error$0,
       tails_for_all_errors$0,
       handlers_for_all_errors$0,
       next_error$0,
       parent$0,
       id$0,
       here$6,
       name$0,
       make_creator,
       create,
       map,
       iter,
       fold,
       map_poly,
       for_all,
       exists,
       to_list,
       Direct];
    function sexp_of_one(param)
     {var
       v_is_detached=param[5],
       v_has_seen_error=param[4],
       v_id=param[3],
       v_here=param[2],
       v_name=param[1],
       arg=caml_call1(Core_kernel[291],v_is_detached),
       bnds=[0,[1,[0,_d3_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[291],v_has_seen_error),
       bnds$0=[0,[1,[0,_d4_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[339],v_id),
       bnds$1=[0,[1,[0,_d5_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call2
         (Core_kernel[431],Core_kernel_Source_code_position[1],v_here),
       bnds$2=[0,[1,[0,_d6_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel_Info[6],v_name),
       bnds$3=[0,[1,[0,_d7_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function sexp_of_t$12(v)
     {return caml_call2(Core_kernel[400],sexp_of_one,v)}
    var Pretty=[0,sexp_of_one,sexp_of_t$12];
    function loop(param)
     {var
       parent=param[4],
       id=param[3],
       here=param[2],
       name=param[1],
       has_seen_error=param[8],
       is_detached=param[9];
      return function(ac)
       {var ac$0=[0,[0,name,here,id,has_seen_error,is_detached],ac];
        if(parent){var t=parent[1];return caml_call1(loop(t),ac$0)}
        return caml_call1(Core_kernel_List[32],ac$0)}}
    function to_pretty(t){return caml_call1(loop(t),0)}
    function sexp_of_monitor(t)
     {var _KV_=to_pretty(t);return caml_call1(Pretty[2],_KV_)}
    var r=[0,0];
    function next_id(param){r[1]++;return r[1]}
    function create_with_parent(here,info,match,parent)
     {var id=next_id(0);
      if(info)
       {var _KT_=info[1];
        if(match)
         var s=match[1],_KU_=caml_call2(Core_kernel_Info[18],_KT_,s);
        else
         var _KU_=_KT_;
        var name=_KU_}
      else
       if(match)
        var s$0=match[1],name=caml_call1(Core_kernel_Info[11],s$0);
       else
        var
         name=
          caml_call5(Core_kernel_Info[15],0,0,cst_id$0,id,Core_kernel[339]);
      var
       t=
        [0,name,here,id,parent,[0,0],caml_call1(Core_kernel_Bag[22],0),0,0,0];
      if(_cI_)log(cst_created_monitor,t,sexp_of_monitor);
      return t}
    var main=create_with_parent(0,0,_d8_,0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$6=
      [0,
       _cI_,
       is_detached,
       set_is_detached,
       has_seen_error,
       set_has_seen_error,
       tails_for_all_errors,
       set_tails_for_all_errors,
       handlers_for_all_errors,
       set_handlers_for_all_errors,
       next_error,
       set_next_error,
       parent,
       id,
       here$5,
       name,
       Fields,
       Pretty,
       to_pretty,
       sexp_of_monitor,
       next_id,
       create_with_parent,
       main];
    caml_register_global(1190,include$6,"Async_kernel__Monitor0");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$20);
    caml_call1(Expect_test_collector[4][1],cst_src_execution_context_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$21,cst$10);
    function backtrace_history(r){return r[4]}
    function local_storage(r){return r[3]}
    function priority(r){return r[2]}
    function monitor$0(r){return r[1]}
    function _d9_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _d__=0,
     backtrace_history$0=
      [0,
       function(param){return 0},
       cst_backtrace_history,
       _d__,
       backtrace_history,
       _d9_];
    function _d$_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _ea_=0,
     local_storage$0=
      [0,function(param){return 0},cst_local_storage,_ea_,local_storage,_d$_];
    function _eb_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _ec_=0,
     priority$0=[0,function(param){return 0},cst_priority,_ec_,priority,_eb_];
    function _ed_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _ee_=0,
     monitor$1=[0,function(param){return 0},cst_monitor$1,_ee_,monitor$0,_ed_];
    function make_creator$0
     (monitor_fun,
      priority_fun,
      local_storage_fun,
      backtrace_history_fun,
      compile_acc)
     {var
       match=caml_call2(monitor_fun,monitor$1,compile_acc),
       compile_acc$0=match[2],
       monitor_gen=match[1],
       match$0=caml_call2(priority_fun,priority$0,compile_acc$0),
       compile_acc$1=match$0[2],
       priority_gen=match$0[1],
       match$1=caml_call2(local_storage_fun,local_storage$0,compile_acc$1),
       compile_acc$2=match$1[2],
       local_storage_gen=match$1[1],
       match$2=
        caml_call2(backtrace_history_fun,backtrace_history$0,compile_acc$2),
       compile_acc$3=match$2[2],
       backtrace_history_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 monitor=caml_call1(monitor_gen,acc),
                 priority=caml_call1(priority_gen,acc),
                 local_storage=caml_call1(local_storage_gen,acc),
                 backtrace_history=caml_call1(backtrace_history_gen,acc);
                return [0,monitor,priority,local_storage,backtrace_history]},
              compile_acc$3]}
    function create$0(monitor,priority,local_storage,backtrace_history)
     {return [0,monitor,priority,local_storage,backtrace_history]}
    function map$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _KQ_=caml_call1(backtrace_history_fun,backtrace_history$0),
       _KR_=caml_call1(local_storage_fun,local_storage$0),
       _KS_=caml_call1(priority_fun,priority$0);
      return [0,caml_call1(monitor_fun,monitor$1),_KS_,_KR_,_KQ_]}
    function iter$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {caml_call1(monitor_fun,monitor$1);
      caml_call1(priority_fun,priority$0);
      caml_call1(local_storage_fun,local_storage$0);
      return caml_call1(backtrace_history_fun,backtrace_history$0)}
    function fold$1
     (init,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {return caml_call2
              (backtrace_history_fun,
               caml_call2
                (local_storage_fun,
                 caml_call2
                  (priority_fun,
                   caml_call2(monitor_fun,init,monitor$1),
                   priority$0),
                 local_storage$0),
               backtrace_history$0)}
    function map_poly$0(record)
     {var
       _KN_=[0,caml_call1(record[1],backtrace_history$0),0],
       _KO_=[0,caml_call1(record[1],local_storage$0),_KN_],
       _KP_=[0,caml_call1(record[1],priority$0),_KO_];
      return [0,caml_call1(record[1],monitor$1),_KP_]}
    function for_all$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _KK_=caml_call1(monitor_fun,monitor$1),
       _KL_=_KK_?caml_call1(priority_fun,priority$0):_KK_,
       _KM_=_KL_?caml_call1(local_storage_fun,local_storage$0):_KL_;
      return _KM_?caml_call1(backtrace_history_fun,backtrace_history$0):_KM_}
    function exists$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _KJ_=caml_call1(monitor_fun,monitor$1),
       _KH_=_KJ_ || caml_call1(priority_fun,priority$0),
       _KI_=_KH_ || caml_call1(local_storage_fun,local_storage$0);
      return _KI_?_KI_:caml_call1(backtrace_history_fun,backtrace_history$0)}
    function to_list$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _KE_=[0,caml_call1(backtrace_history_fun,backtrace_history$0),0],
       _KF_=[0,caml_call1(local_storage_fun,local_storage$0),_KE_],
       _KG_=[0,caml_call1(priority_fun,priority$0),_KF_];
      return [0,caml_call1(monitor_fun,monitor$1),_KG_]}
    function iter$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {caml_call3(monitor_fun,monitor$1,record,record[1]);
      caml_call3(priority_fun,priority$0,record,record[2]);
      caml_call3(local_storage_fun,local_storage$0,record,record[3]);
      return caml_call3
              (backtrace_history_fun,backtrace_history$0,record,record[4])}
    function fold$2
     (record,
      init,
      monitor_fun,
      priority_fun,
      local_storage_fun,
      backtrace_history_fun)
     {var _KB_=record[4],_KC_=record[3],_KD_=record[2];
      return caml_call4
              (backtrace_history_fun,
               caml_call4
                (local_storage_fun,
                 caml_call4
                  (priority_fun,
                   caml_call4(monitor_fun,init,monitor$1,record,record[1]),
                   priority$0,
                   record,
                   _KD_),
                 local_storage$0,
                 record,
                 _KC_),
               backtrace_history$0,
               record,
               _KB_)}
    function for_all$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _Ky_=caml_call3(monitor_fun,monitor$1,record,record[1]),
       _Kz_=_Ky_?caml_call3(priority_fun,priority$0,record,record[2]):_Ky_,
       _KA_=
        _Kz_
         ?caml_call3(local_storage_fun,local_storage$0,record,record[3])
         :_Kz_;
      return _KA_
              ?caml_call3
                (backtrace_history_fun,backtrace_history$0,record,record[4])
              :_KA_}
    function exists$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _Kx_=caml_call3(monitor_fun,monitor$1,record,record[1]),
       _Kv_=_Kx_ || caml_call3(priority_fun,priority$0,record,record[2]),
       _Kw_=
        _Kv_
        ||
        caml_call3(local_storage_fun,local_storage$0,record,record[3]);
      return _Kw_
              ?_Kw_
              :caml_call3
                (backtrace_history_fun,backtrace_history$0,record,record[4])}
    function to_list$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _Ks_=
        [0,
         caml_call3
          (backtrace_history_fun,backtrace_history$0,record,record[4]),
         0],
       _Kt_=
        [0,
         caml_call3(local_storage_fun,local_storage$0,record,record[3]),
         _Ks_],
       _Ku_=[0,caml_call3(priority_fun,priority$0,record,record[2]),_Kt_];
      return [0,caml_call3(monitor_fun,monitor$1,record,record[1]),_Ku_]}
    function map$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _Kp_=
        caml_call3(backtrace_history_fun,backtrace_history$0,record,record[4]),
       _Kq_=caml_call3(local_storage_fun,local_storage$0,record,record[3]),
       _Kr_=caml_call3(priority_fun,priority$0,record,record[2]);
      return [0,
              caml_call3(monitor_fun,monitor$1,record,record[1]),
              _Kr_,
              _Kq_,
              _Kp_]}
    function set_all_mutable_fields$0(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct$0=
      [0,
       iter$2,
       fold$2,
       for_all$2,
       exists$2,
       to_list$2,
       map$2,
       set_all_mutable_fields$0];
    function sexp_of_t$13(param)
     {var
       v_backtrace_history=param[4],
       v_local_storage=param[3],
       v_priority=param[2],
       v_monitor=param[1],
       arg=caml_call2(Core_kernel[400],Base_Backtrace[1],v_backtrace_history),
       bnds=[0,[1,[0,_ef_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel_Univ_map[1],v_local_storage),
       bnds$0=[0,[1,[0,_eg_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$11(v_priority),
       bnds$1=[0,[1,[0,_eh_,[0,arg$1,0]]],bnds$0],
       arg$2=sexp_of_monitor(v_monitor),
       bnds$2=[0,[1,[0,_ei_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function f(param){return 0}
    var dummy_e=[0,main,normal,Core_kernel_Univ_map[3],0];
    function create_like(monitor,priority,local_storage,t)
     {var
       monitor$0=caml_call2(Core_kernel_Option[48],monitor,t[1]),
       _Kn_=t[4],
       _Ko_=caml_call2(Core_kernel_Option[48],local_storage,t[3]);
      return [0,
              monitor$0,
              caml_call2(Core_kernel_Option[48],priority,t[2]),
              _Ko_,
              _Kn_]}
    function find_local(t,key)
     {return caml_call2(Core_kernel_Univ_map[8],t[3],key)}
    function with_local(init,key,data)
     {var _Kk_=init[4];
      function _Kl_(param){return data}
      var _Km_=caml_call3(Core_kernel_Univ_map[12],init[3],key,_Kl_);
      return [0,init[1],init[2],_Km_,_Kk_]}
    function record_backtrace(init)
     {var _Ki_=init[4],_Kj_=[0,caml_call2(Base_Backtrace[2],0,0),_Ki_];
      return [0,init[1],init[2],init[3],_Kj_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Execution_context=
      [0,
       backtrace_history,
       local_storage,
       priority,
       monitor$0,
       [0,
        names$0,
        backtrace_history$0,
        local_storage$0,
        priority$0,
        monitor$1,
        fold$1,
        make_creator$0,
        create$0,
        map$1,
        iter$1,
        for_all$1,
        exists$1,
        to_list$1,
        map_poly$0,
        Direct$0],
       sexp_of_t$13,
       f,
       dummy_e,
       create_like,
       find_local,
       with_local,
       record_backtrace];
    caml_register_global
     (1193,Async_kernel_Execution_context,"Async_kernel__Execution_context");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$23);
    caml_call1(Expect_test_collector[4][1],cst_src_external_job_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$24,cst$11);
    function sexp_of_t$14(param){return _ej_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_External_job=[0,sexp_of_t$14];
    caml_register_global
     (1194,Async_kernel_External_job,"Async_kernel__External_job");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$26);
    caml_call1(Expect_test_collector[4][1],cst_src_job_pool_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$27,cst$12);
    function dummy_f(_Kh_){return 0}
    var dummy_a=0;
    function sexp_of_slots(v)
     {var _Kd_=Sexplib0_Sexp_conv[23];
      function _Ke_(f)
       {function _Kf_(_Kg_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_Kf_)}
      return caml_call4(Tuple_pool[1][5],sexp_of_t$13,_Ke_,_Kd_,v)}
    function sexp_of_t$15(v){return caml_call2(Tuple_pool[4],sexp_of_slots,v)}
    function invariant(t)
     {function _Kb_(_Kc_){return 0}return caml_call2(Tuple_pool[5],_Kb_,t)}
    function create$1(param)
     {return caml_call3
              (Tuple_pool[9],Tuple_pool[1][19],1,[0,dummy_e,dummy_f,dummy_a])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Job_pool=
      [0,sexp_of_slots,sexp_of_t$15,invariant,create$1];
    caml_register_global(1196,Async_kernel_Job_pool,"Async_kernel__Job_pool");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$29);
    caml_call1(Expect_test_collector[4][1],cst_src_job_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$30,cst$13);
    function sexp_of_t$16(v)
     {return caml_call2(Tuple_pool[3][1],sexp_of_slots,v)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Job=[0,sexp_of_t$16];
    caml_register_global(1197,Async_kernel_Job,"Async_kernel__Job");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$32);
    caml_call1(Expect_test_collector[4][1],cst_src_job_or_event_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$33,cst$14);
    function of_event(event){return event}
    function of_job(job){return job}
    function is_event(t){return caml_call1(Stdlib_obj[1],t)}
    function is_job(t){return typeof t === "number"?1:0}
    function kind(t){return is_event(t)?_ek_:_el_}
    function project(param,job_or_event){return job_or_event}
    var Match=[0,kind,project];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var include$7=[0,of_event,of_job,is_event,is_job,Match];
    caml_register_global(1199,include$7,"Async_kernel__Job_or_event");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$35);
    caml_call1(Expect_test_collector[4][1],cst_src_job_or_event_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$36,cst$15);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Job_or_event_intf=[0];
    caml_register_global
     (1200,Async_kernel_Job_or_event_intf,"Async_kernel__Job_or_event_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$38);
    caml_call1(Expect_test_collector[4][1],cst_src_scheduler0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$39,cst$16);
    function events(t){return t[16][4]}
    function set_execution_context(t,execution_context)
     {var
       _J$_=1 - caml_call2(Core_kernel[234],t[7],execution_context),
       _Ka_=_J$_?(t[7] = execution_context,0):_J$_;
      return _Ka_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var include$8=[0,events,set_execution_context];
    caml_register_global(1201,include$8,"Async_kernel__Scheduler0");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$41);
    caml_call1(Expect_test_collector[4][1],cst_src_job_queue_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$42,cst$17);
    function dummy_f$0(_J__){return 0}
    var dummy_a$0=0;
    function length(r){return r[6]}
    function set_length(r,v){r[6] = v;return 0}
    function front(r){return r[5]}
    function set_front(r,v){r[5] = v;return 0}
    function mask(r){return r[4]}
    function set_mask(r,v){r[4] = v;return 0}
    function jobs(r){return r[3]}
    function set_jobs(r,v){r[3] = v;return 0}
    function jobs_left_this_cycle(r){return r[2]}
    function set_jobs_left_this_cycle(r,v){r[2] = v;return 0}
    function num_jobs_run(r){return r[1]}
    function set_num_jobs_run(r,v){r[1] = v;return 0}
    function _em_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v]}
    var
     _en_=[0,set_length],
     length$0=[0,function(param){return 0},cst_length,_en_,length,_em_];
    function _eo_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6]]}
    var
     _ep_=[0,set_front],
     front$0=[0,function(param){return 0},cst_front,_ep_,front,_eo_];
    function _eq_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _er_=[0,set_mask],
     mask$0=[0,function(param){return 0},cst_mask,_er_,mask,_eq_];
    function _es_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _et_=[0,set_jobs],
     jobs$0=[0,function(param){return 0},cst_jobs,_et_,jobs,_es_];
    function _eu_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6]]}
    var
     _ev_=[0,set_jobs_left_this_cycle],
     jobs_left_this_cycle$0=
      [0,
       function(param){return 0},
       cst_jobs_left_this_cycle,
       _ev_,
       jobs_left_this_cycle,
       _eu_];
    function _ew_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _ex_=[0,set_num_jobs_run],
     num_jobs_run$0=
      [0,function(param){return 0},cst_num_jobs_run,_ex_,num_jobs_run,_ew_];
    function sexp_of_t$17(param)
     {var
       v_num_jobs_run=param[1],
       v_jobs_left_this_cycle=param[2],
       v_jobs=param[3],
       v_mask=param[4],
       v_front=param[5],
       v_length=param[6],
       arg=caml_call1(Core_kernel[339],v_length),
       bnds=[0,[1,[0,_ey_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[339],v_front),
       bnds$0=[0,[1,[0,_ez_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[339],v_mask),
       bnds$1=[0,[1,[0,_eA_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Sexplib0_Sexp_conv[23],v_jobs),
       bnds$2=[0,[1,[0,_eB_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel[339],v_jobs_left_this_cycle),
       bnds$3=[0,[1,[0,_eC_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[339],v_num_jobs_run),
       bnds$4=[0,[1,[0,_eD_,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function offset(t,i){return ((t[5] + i | 0) & t[4]) * 3 | 0}
    function capacity(t){return t[4] + 1 | 0}
    function invariant$0(t)
     {function _J5_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        var
         length_fun=
          check
           (function(length)
             {if(caml_call2(symbol$0,length,0))
               {if(caml_call2(symbol$1,length,capacity(t)))return 0;
                throw [0,Assert_failure,_eE_]}
              throw [0,Assert_failure,_eF_]}),
         front_fun=
          check
           (function(front)
             {if(caml_call2(symbol$0,front,0))
               {if(caml_call2(symbol$4,front,capacity(t)))return 0;
                throw [0,Assert_failure,_eG_]}
              throw [0,Assert_failure,_eH_]}),
         mask_fun=
          check
           (function(mask)
             {var capacity=mask + 1 | 0;
              if(caml_call1(Core_kernel_Int[69],capacity))
               {if
                 (caml_call2
                   (symbol$2,
                    capacity * 3 | 0,
                    caml_call1(Core_kernel_Uniform_array[16],t[3])))
                 return 0;
                throw [0,Assert_failure,_eI_]}
              throw [0,Assert_failure,_eJ_]}),
         jobs_fun=
          check
           (function(jobs)
             {var _J7_=t[6] - 1 | 0,_J6_=0;
              if(! (_J7_ < 0))
               {var i=_J6_;
                for(;;)
                 {var _J8_=offset(t,i);
                  caml_call2(Core_kernel_Uniform_array[17],jobs,_J8_);
                  var _J9_=i + 1 | 0;
                  if(_J7_ !== i){var i=_J9_;continue}
                  break}}
              return 0}),
         jobs_left_this_cycle_fun=
          check
           (function(jobs_left_this_cycle)
             {if(caml_call2(symbol$0,jobs_left_this_cycle,0))return 0;
              throw [0,Assert_failure,_eK_]}),
         num_jobs_run_fun=
          check
           (function(num_jobs_run)
             {if(caml_call2(symbol$0,num_jobs_run,0))return 0;
              throw [0,Assert_failure,_eL_]});
        caml_call1(num_jobs_run_fun,num_jobs_run$0);
        caml_call1(jobs_left_this_cycle_fun,jobs_left_this_cycle$0);
        caml_call1(jobs_fun,jobs$0);
        caml_call1(mask_fun,mask$0);
        caml_call1(front_fun,front$0);
        return caml_call1(length_fun,length$0)}
      return caml_call4(include$9[1],_eM_,t,sexp_of_t$17,_J5_)}
    function create_array(capacity)
     {return caml_call1(Core_kernel_Uniform_array[37],capacity * 3 | 0)}
    function create$2(param){return [0,0,0,create_array(1),0,0,0]}
    function clear(t){t[5] = 0;t[6] = 0;t[2] = 0;return 0}
    function set(t,i,execution_context,f,a)
     {var offset$0=offset(t,i);
      caml_call3
       (Core_kernel_Uniform_array[20],t[3],offset$0,execution_context);
      caml_call3(Core_kernel_Uniform_array[20],t[3],offset$0 + 1 | 0,f);
      return caml_call3(Core_kernel_Uniform_array[20],t[3],offset$0 + 2 | 0,a)}
    function enqueue(t,execution_context,f,a)
     {var _J4_=capacity(t);
      if(caml_call2(symbol$2,t[6],_J4_))
       {var
         old_capacity=capacity(t),
         new_capacity=old_capacity * 2 | 0,
         old_jobs=t[3],
         old_front=t[5],
         len1=
          caml_call2(Core_kernel_Int[108],t[6],old_capacity - old_front | 0)
          *
          3
          |
          0,
         len2=(t[6] * 3 | 0) - len1 | 0,
         new_jobs=create_array(new_capacity);
        caml_call5
         (Core_kernel_Uniform_array[29],
          old_jobs,
          old_front * 3 | 0,
          new_jobs,
          0,
          len1);
        caml_call5
         (Core_kernel_Uniform_array[29],old_jobs,0,new_jobs,len1,len2);
        t[4] = new_capacity - 1 | 0;
        t[3] = new_jobs;
        t[5] = 0}
      set(t,t[6],execution_context,f,a);
      t[6] = t[6] + 1 | 0;
      return 0}
    function set_jobs_left_this_cycle$0(t,n)
     {if(caml_call2(symbol$4,n,0))
       {var
         _J1_=[0,[1,[0,_eN_,[0,sexp_of_t$17(t),0]]],0],
         _J2_=[0,[1,[0,_eO_,[0,caml_call1(Core_kernel[339],n),0]]],_J1_],
         _J3_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Jobs_set_jobs_left_this_cycle_got_negative_number),
            _J2_]];
        caml_call1(Core_kernel[241],_J3_)}
      t[2] = n;
      return 0}
    function can_run_a_job(t)
     {var _J0_=caml_call2(symbol$3,t[6],0);
      return _J0_?caml_call2(symbol$3,t[2],0):_J0_}
    function run_job(t,scheduler,execution_context,f,a)
     {t[1] = t[1] + 1 | 0;
      set_execution_context(scheduler,execution_context);
      return caml_call1(f,a)}
    function run_external_jobs(t,scheduler)
     {var external_jobs=scheduler[17];
      for(;;)
       {if
         (caml_call2
           (symbol$3,caml_call1(Thread_safe_queue[4],external_jobs),0))
         {var
           match=caml_call1(Thread_safe_queue[6],external_jobs),
           a=match[3],
           f=match[2],
           execution_context=match[1];
          run_job(t,scheduler,execution_context,f,a);
          continue}
        return 0}}
    function run_jobs(t,scheduler)
     {try
       {run_external_jobs(t,scheduler);
        for(;;)
         {if(can_run_a_job(t))
           {var
             this_job=offset(t,0),
             execution_context=
              caml_call2(Core_kernel_Uniform_array[18],t[3],this_job),
             f=caml_call2(Core_kernel_Uniform_array[18],t[3],this_job + 1 | 0),
             a=caml_call2(Core_kernel_Uniform_array[18],t[3],this_job + 2 | 0);
            set(t,0,dummy_e,dummy_f$0,dummy_a$0);
            t[5] = (t[5] + 1 | 0) & t[4];
            t[6] = t[6] - 1 | 0;
            t[2] = t[2] - 1 | 0;
            run_job(t,scheduler,execution_context,f,a);
            run_external_jobs(t,scheduler);
            continue}
          return _eP_}}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var backtrace=caml_call1(Base_Backtrace[6][4],0);
        return [1,[0,exn,backtrace]]}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Job_queue=
      [0,
       sexp_of_t$17,
       invariant$0,
       create$2,
       enqueue,
       clear,
       set_jobs_left_this_cycle$0,
       can_run_a_job,
       length,
       run_jobs,
       num_jobs_run];
    caml_register_global
     (1206,Async_kernel_Job_queue,"Async_kernel__Job_queue");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$44);
    caml_call1
     (Expect_test_collector[4][1],cst_src_synchronous_time_source0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$45,cst$18);
    function sexp_of_t$18(t)
     {var
       _JY_=caml_call1(_aq_,t),
       _JZ_=
        runtime.core_kernel_time_ns_format
         (caml_call1(_a_[90],_JY_),cst_Y_m_dT_H_M_S_z);
      return caml_call1(Core_kernel[447],_JZ_)}
    var
     Time_ns=
      [0,
       _a_,
       _b_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_,
       _U_,
       _V_,
       _W_,
       _X_,
       _Y_,
       _Z_,
       ___,
       _$_,
       _aa_,
       _ab_,
       _ac_,
       _ad_,
       _ae_,
       _af_,
       _ag_,
       _ah_,
       _ai_,
       _aj_,
       _ak_,
       _al_,
       _am_,
       _an_,
       _ao_,
       _ap_,
       _aq_,
       _ar_,
       _as_,
       _at_,
       _au_,
       _av_,
       _aw_,
       _ax_,
       _ay_,
       _az_,
       _aA_,
       _aB_,
       _aC_,
       _aD_,
       _aE_,
       _aF_,
       _aG_,
       _aH_,
       after,
       sexp_of_t$18],
     include$10=Timing_wheel[5],
     sexp_of_t$19=include$10[1],
     null$0=include$10[2],
     at=include$10[3],
     interval_num=include$10[4],
     value=include$10[5];
    function is_null(t)
     {var _JX_=caml_call1(null$0,0);
      return caml_call2(Core_kernel[234],t,_JX_)}
    var
     Alarm=[0,sexp_of_t$19,null$0,at,interval_num,value,is_null],
     _eQ_=caml_call2(Timing_wheel[1][13],Timing_wheel[1][10],3),
     _eS_=[0,caml_call2(Timing_wheel[7][5],0,_eR_)],
     default_timing_wheel_config$0=
      caml_call4(Timing_wheel[8][4],0,_eS_,_eQ_,0),
     compare$0=caml_int_compare;
    function sexp_of_t$20(param)
     {switch(param)
       {case 0:return _eT_;
        case 1:return _eU_;
        case 2:return _eV_;
        case 3:return _eW_;
        default:return _eX_}}
    function transition_is_allowed(from,to)
     {switch(from)
       {case 0:var switch$0=4 <= to?1:0;break;
        case 1:var switch$0=1 === to?0:3 <= to?0:1;break;
        case 2:var switch$0=3 <= to?1:0;break;
        case 3:var switch$0=1 === to?1:4 <= to?1:0;break;
        default:var switch$0=1 === to?1:3 === to?1:0}
      return switch$0?1:0}
    var Status=[0,compare$0,sexp_of_t$20,transition_is_allowed];
    function status(r){return r[7]}
    function set_status(r,v){r[7] = v;return 0}
    function next_fired(r){return r[6]}
    function set_next_fired(r,v){r[6] = v;return 0}
    function interval(r){return r[5]}
    function set_interval(r,v){r[5] = v;return 0}
    function execution_context(r){return r[4]}
    function callback(r){return r[3]}
    function at$0(r){return r[2]}
    function set_at(r,v){r[2] = v;return 0}
    function alarm(r){return r[1]}
    function set_alarm(r,v){r[1] = v;return 0}
    function _eY_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _eZ_=[0,set_status],
     status$0=[0,function(param){return 0},cst_status,_eZ_,status,_eY_];
    function _e0_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _e1_=[0,set_next_fired],
     next_fired$0=
      [0,function(param){return 0},cst_next_fired,_e1_,next_fired,_e0_];
    function _e2_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7]]}
    var
     _e3_=[0,set_interval],
     interval$0=[0,function(param){return 0},cst_interval,_e3_,interval,_e2_];
    function _e4_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _e5_=0,
     execution_context$0=
      [0,
       function(param){return 0},
       cst_execution_context,
       _e5_,
       execution_context,
       _e4_];
    function _e6_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7]]}
    var
     _e7_=0,
     callback$0=[0,function(param){return 0},cst_callback,_e7_,callback,_e6_];
    function _e8_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7]]}
    var
     _e9_=[0,set_at],
     at$1=[0,function(param){return 0},cst_at,_e9_,at$0,_e8_];
    function _e__(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7]]}
    var
     _e$_=[0,set_alarm],
     alarm$0=[0,function(param){return 0},cst_alarm,_e$_,alarm,_e__];
    function make_creator$1
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun,
      compile_acc)
     {var
       match=caml_call2(alarm_fun,alarm$0,compile_acc),
       compile_acc$0=match[2],
       alarm_gen=match[1],
       match$0=caml_call2(at_fun,at$1,compile_acc$0),
       compile_acc$1=match$0[2],
       at_gen=match$0[1],
       match$1=caml_call2(callback_fun,callback$0,compile_acc$1),
       compile_acc$2=match$1[2],
       callback_gen=match$1[1],
       match$2=
        caml_call2(execution_context_fun,execution_context$0,compile_acc$2),
       compile_acc$3=match$2[2],
       execution_context_gen=match$2[1],
       match$3=caml_call2(interval_fun,interval$0,compile_acc$3),
       compile_acc$4=match$3[2],
       interval_gen=match$3[1],
       match$4=caml_call2(next_fired_fun,next_fired$0,compile_acc$4),
       compile_acc$5=match$4[2],
       next_fired_gen=match$4[1],
       match$5=caml_call2(status_fun,status$0,compile_acc$5),
       compile_acc$6=match$5[2],
       status_gen=match$5[1];
      return [0,
              function(acc)
               {var
                 alarm=caml_call1(alarm_gen,acc),
                 at=caml_call1(at_gen,acc),
                 callback=caml_call1(callback_gen,acc),
                 execution_context=caml_call1(execution_context_gen,acc),
                 interval=caml_call1(interval_gen,acc),
                 next_fired=caml_call1(next_fired_gen,acc),
                 status=caml_call1(status_gen,acc);
                return [0,
                        alarm,
                        at,
                        callback,
                        execution_context,
                        interval,
                        next_fired,
                        status]},
              compile_acc$6]}
    function create$3
     (alarm,at,callback,execution_context,interval,next_fired,status)
     {return [0,
              alarm,
              at,
              callback,
              execution_context,
              interval,
              next_fired,
              status]}
    function map$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JR_=caml_call1(status_fun,status$0),
       _JS_=caml_call1(next_fired_fun,next_fired$0),
       _JT_=caml_call1(interval_fun,interval$0),
       _JU_=caml_call1(execution_context_fun,execution_context$0),
       _JV_=caml_call1(callback_fun,callback$0),
       _JW_=caml_call1(at_fun,at$1);
      return [0,caml_call1(alarm_fun,alarm$0),_JW_,_JV_,_JU_,_JT_,_JS_,_JR_]}
    function iter$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {caml_call1(alarm_fun,alarm$0);
      caml_call1(at_fun,at$1);
      caml_call1(callback_fun,callback$0);
      caml_call1(execution_context_fun,execution_context$0);
      caml_call1(interval_fun,interval$0);
      caml_call1(next_fired_fun,next_fired$0);
      return caml_call1(status_fun,status$0)}
    function fold$3
     (init,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {return caml_call2
              (status_fun,
               caml_call2
                (next_fired_fun,
                 caml_call2
                  (interval_fun,
                   caml_call2
                    (execution_context_fun,
                     caml_call2
                      (callback_fun,
                       caml_call2(at_fun,caml_call2(alarm_fun,init,alarm$0),at$1),
                       callback$0),
                     execution_context$0),
                   interval$0),
                 next_fired$0),
               status$0)}
    function map_poly$1(record)
     {var
       _JL_=[0,caml_call1(record[1],status$0),0],
       _JM_=[0,caml_call1(record[1],next_fired$0),_JL_],
       _JN_=[0,caml_call1(record[1],interval$0),_JM_],
       _JO_=[0,caml_call1(record[1],execution_context$0),_JN_],
       _JP_=[0,caml_call1(record[1],callback$0),_JO_],
       _JQ_=[0,caml_call1(record[1],at$1),_JP_];
      return [0,caml_call1(record[1],alarm$0),_JQ_]}
    function for_all$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JF_=caml_call1(alarm_fun,alarm$0),
       _JG_=_JF_?caml_call1(at_fun,at$1):_JF_,
       _JH_=_JG_?caml_call1(callback_fun,callback$0):_JG_,
       _JI_=_JH_?caml_call1(execution_context_fun,execution_context$0):_JH_,
       _JJ_=_JI_?caml_call1(interval_fun,interval$0):_JI_,
       _JK_=_JJ_?caml_call1(next_fired_fun,next_fired$0):_JJ_;
      return _JK_?caml_call1(status_fun,status$0):_JK_}
    function exists$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JE_=caml_call1(alarm_fun,alarm$0),
       _Jz_=_JE_ || caml_call1(at_fun,at$1),
       _JA_=_Jz_ || caml_call1(callback_fun,callback$0),
       _JB_=_JA_ || caml_call1(execution_context_fun,execution_context$0),
       _JC_=_JB_ || caml_call1(interval_fun,interval$0),
       _JD_=_JC_ || caml_call1(next_fired_fun,next_fired$0);
      return _JD_?_JD_:caml_call1(status_fun,status$0)}
    function to_list$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _Jt_=[0,caml_call1(status_fun,status$0),0],
       _Ju_=[0,caml_call1(next_fired_fun,next_fired$0),_Jt_],
       _Jv_=[0,caml_call1(interval_fun,interval$0),_Ju_],
       _Jw_=[0,caml_call1(execution_context_fun,execution_context$0),_Jv_],
       _Jx_=[0,caml_call1(callback_fun,callback$0),_Jw_],
       _Jy_=[0,caml_call1(at_fun,at$1),_Jx_];
      return [0,caml_call1(alarm_fun,alarm$0),_Jy_]}
    function iter$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {caml_call3(alarm_fun,alarm$0,record,record[1]);
      caml_call3(at_fun,at$1,record,record[2]);
      caml_call3(callback_fun,callback$0,record,record[3]);
      caml_call3(execution_context_fun,execution_context$0,record,record[4]);
      caml_call3(interval_fun,interval$0,record,record[5]);
      caml_call3(next_fired_fun,next_fired$0,record,record[6]);
      return caml_call3(status_fun,status$0,record,record[7])}
    function fold$4
     (record,
      init,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _Jn_=record[7],
       _Jo_=record[6],
       _Jp_=record[5],
       _Jq_=record[4],
       _Jr_=record[3],
       _Js_=record[2];
      return caml_call4
              (status_fun,
               caml_call4
                (next_fired_fun,
                 caml_call4
                  (interval_fun,
                   caml_call4
                    (execution_context_fun,
                     caml_call4
                      (callback_fun,
                       caml_call4
                        (at_fun,
                         caml_call4(alarm_fun,init,alarm$0,record,record[1]),
                         at$1,
                         record,
                         _Js_),
                       callback$0,
                       record,
                       _Jr_),
                     execution_context$0,
                     record,
                     _Jq_),
                   interval$0,
                   record,
                   _Jp_),
                 next_fired$0,
                 record,
                 _Jo_),
               status$0,
               record,
               _Jn_)}
    function for_all$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _Jh_=caml_call3(alarm_fun,alarm$0,record,record[1]),
       _Ji_=_Jh_?caml_call3(at_fun,at$1,record,record[2]):_Jh_,
       _Jj_=_Ji_?caml_call3(callback_fun,callback$0,record,record[3]):_Ji_,
       _Jk_=
        _Jj_
         ?caml_call3
           (execution_context_fun,execution_context$0,record,record[4])
         :_Jj_,
       _Jl_=_Jk_?caml_call3(interval_fun,interval$0,record,record[5]):_Jk_,
       _Jm_=_Jl_?caml_call3(next_fired_fun,next_fired$0,record,record[6]):_Jl_;
      return _Jm_?caml_call3(status_fun,status$0,record,record[7]):_Jm_}
    function exists$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _Jg_=caml_call3(alarm_fun,alarm$0,record,record[1]),
       _Jb_=_Jg_ || caml_call3(at_fun,at$1,record,record[2]),
       _Jc_=_Jb_ || caml_call3(callback_fun,callback$0,record,record[3]),
       _Jd_=
        _Jc_
        ||
        caml_call3(execution_context_fun,execution_context$0,record,record[4]),
       _Je_=_Jd_ || caml_call3(interval_fun,interval$0,record,record[5]),
       _Jf_=_Je_ || caml_call3(next_fired_fun,next_fired$0,record,record[6]);
      return _Jf_?_Jf_:caml_call3(status_fun,status$0,record,record[7])}
    function to_list$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _I7_=[0,caml_call3(status_fun,status$0,record,record[7]),0],
       _I8_=[0,caml_call3(next_fired_fun,next_fired$0,record,record[6]),_I7_],
       _I9_=[0,caml_call3(interval_fun,interval$0,record,record[5]),_I8_],
       _I__=
        [0,
         caml_call3
          (execution_context_fun,execution_context$0,record,record[4]),
         _I9_],
       _I$_=[0,caml_call3(callback_fun,callback$0,record,record[3]),_I__],
       _Ja_=[0,caml_call3(at_fun,at$1,record,record[2]),_I$_];
      return [0,caml_call3(alarm_fun,alarm$0,record,record[1]),_Ja_]}
    function map$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _I1_=caml_call3(status_fun,status$0,record,record[7]),
       _I2_=caml_call3(next_fired_fun,next_fired$0,record,record[6]),
       _I3_=caml_call3(interval_fun,interval$0,record,record[5]),
       _I4_=
        caml_call3(execution_context_fun,execution_context$0,record,record[4]),
       _I5_=caml_call3(callback_fun,callback$0,record,record[3]),
       _I6_=caml_call3(at_fun,at$1,record,record[2]);
      return [0,
              caml_call3(alarm_fun,alarm$0,record,record[1]),
              _I6_,
              _I5_,
              _I4_,
              _I3_,
              _I2_,
              _I1_]}
    function set_all_mutable_fields$1
     (record,alarm,at,interval,next_fired,status)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = alarm;
      record$0[2] = at;
      record$0[5] = interval;
      record$0[6] = next_fired;
      record$0[7] = status;
      return 0}
    var
     Direct$1=
      [0,
       iter$4,
       fold$4,
       for_all$4,
       exists$4,
       to_list$4,
       map$4,
       set_all_mutable_fields$1],
     Fields$0=
      [0,
       names$1,
       status$0,
       next_fired$0,
       interval$0,
       execution_context$0,
       callback$0,
       at$1,
       alarm$0,
       make_creator$1,
       create$3,
       map$3,
       iter$3,
       fold$3,
       map_poly$1,
       for_all$3,
       exists$3,
       to_list$3,
       Direct$1],
     none=[],
     _fa_=4,
     _fb_=0;
    function _fc_(param){throw [0,Assert_failure,_fd_]}
    var _fe_=Time_ns[58];
    caml_update_dummy
     (none,[0,caml_call1(Alarm[2],0),_fe_,_fc_,dummy_e,_fb_,none,_fa_]);
    function is_none(t){return caml_call2(Core_kernel[234],t,none)}
    function is_some(t){return 1 - is_none(t)}
    function sexp_of_t$21(param)
     {var
       at=param[2],
       interval=param[5],
       status=param[7],
       _IZ_=
        [0,
         [1,
          [0,_ff_,[0,caml_call2(Core_kernel[431],Time_ns[1][10],interval),0]]],
         0],
       _I0_=[0,[1,[0,_fg_,[0,caml_call1(Time_ns[90],at),0]]],_IZ_];
      return [1,[0,[1,[0,_fh_,[0,caml_call1(Status[2],status),0]]],_I0_]]}
    function invariant$1(t)
     {function _IJ_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        function _IK_(_IY_){return 0}
        var
         _IL_=
          check
           (function(next_fired)
             {var _IW_=is_some(next_fired);
              if(_IW_)
               {if(2 <= t[7])throw [0,Assert_failure,_fi_];var _IX_=0}
              else
               var _IX_=_IW_;
              return _IX_});
        function _IM_(_IV_){return 0}
        function _IN_(_IU_){return 0}
        function _IO_(_IT_){return 0}
        function _IP_(_IS_){return 0}
        var
         _IQ_=
          check
           (function(alarm)
             {var
               got=caml_call1(Alarm[6],alarm),
               _IR_=3 === t[7]?0:1,
               sexpifier=Core_kernel[291],
               comparator=Core_kernel[287];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       _IR_,
                       got)});
        return caml_call7(Fields$0[12],_IQ_,_IP_,_IO_,_IN_,_IM_,_IL_,_IK_)}
      return caml_call4(include$9[1],_fj_,t,sexp_of_t$21,_IJ_)}
    function compare_at(t1,t2){return caml_call2(Time_ns[22],t1[2],t2[2])}
    function set_status$0(t,to)
     {var from=t[7];
      if(1 - caml_call2(Status[3],from,to))
       {var
         _IE_=[0,[1,[0,_fk_,[0,sexp_of_t$21(t),0]]],0],
         _IF_=[0,[1,[0,_fl_,[0,caml_call1(Status[2],to),0]]],_IE_],
         _IG_=[0,[1,[0,_fm_,[0,caml_call1(Status[2],from),0]]],_IF_],
         _IH_=
          [0,
           caml_call1
            (Sexplib0_Sexp_conv[7],cst_bug_set_status_transition_not_allowed),
           _IG_],
         _II_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_src_synchronous_time_source0_ml_150_12),
            _IH_]];
        caml_call1(Core_kernel[241],_II_)}
      t[7] = to;
      return 0}
    var
     Event$0=
      [0,
       Status,
       status,
       next_fired,
       set_next_fired,
       interval,
       set_interval,
       execution_context,
       callback,
       at$0,
       set_at,
       alarm,
       set_alarm,
       Fields$0,
       none,
       is_none,
       is_some,
       sexp_of_t$21,
       invariant$1,
       compare_at,
       set_status$0];
    function sexp_of_t$22(t)
     {var
       match=caml_call1(Match[1],t),
       k=match[1],
       match$0=caml_call2(Match[2],k,t);
      return 0 === k
              ?caml_call1(Event$0[17],match$0)
              :caml_call1(Sexplib0_Sexp_conv[7],cst_Job_t)}
    var Job_or_event$0=[0,of_event,of_job,is_event,is_job,Match,sexp_of_t$22];
    function scheduler$0(r){return r[9]}
    function is_wall_clock(r){return r[8]}
    function handle_fired(r){return r[7]}
    function most_recently_fired(r){return r[6]}
    function set_most_recently_fired(r,v){r[6] = v;return 0}
    function fired_events(r){return r[5]}
    function set_fired_events(r,v){r[5] = v;return 0}
    function events$0(r){return r[4]}
    function am_advancing(r){return r[3]}
    function set_am_advancing(r,v){r[3] = v;return 0}
    function advance_errors(r){return r[2]}
    function set_advance_errors(r,v){r[2] = v;return 0}
    function id$1(r){return r[1]}
    function _fn_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v]}
    var
     _fo_=0,
     scheduler$1=
      [0,function(param){return 0},cst_scheduler$1,_fo_,scheduler$0,_fn_];
    function _fp_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9]]}
    var
     _fq_=0,
     is_wall_clock$0=
      [0,function(param){return 0},cst_is_wall_clock,_fq_,is_wall_clock,_fp_];
    function _fr_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9]]}
    var
     _fs_=0,
     handle_fired$0=
      [0,function(param){return 0},cst_handle_fired,_fs_,handle_fired,_fr_];
    function _ft_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9]]}
    var
     _fu_=[0,set_most_recently_fired],
     most_recently_fired$0=
      [0,
       function(param){return 0},
       cst_most_recently_fired,
       _fu_,
       most_recently_fired,
       _ft_];
    function _fv_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9]]}
    var
     _fw_=[0,set_fired_events],
     fired_events$0=
      [0,function(param){return 0},cst_fired_events,_fw_,fired_events,_fv_];
    function _fx_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9]]}
    var
     _fy_=0,
     events$1=[0,function(param){return 0},cst_events,_fy_,events$0,_fx_];
    function _fz_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9]]}
    var
     _fA_=[0,set_am_advancing],
     am_advancing$0=
      [0,function(param){return 0},cst_am_advancing,_fA_,am_advancing,_fz_];
    function _fB_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var
     _fC_=[0,set_advance_errors],
     advance_errors$0=
      [0,
       function(param){return 0},
       cst_advance_errors,
       _fC_,
       advance_errors,
       _fB_];
    function _fD_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _fE_=0,id$2=[0,function(param){return 0},cst_id$1,_fE_,id$1,_fD_];
    function make_creator$2
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun,
      compile_acc)
     {var
       match=caml_call2(id_fun,id$2,compile_acc),
       compile_acc$0=match[2],
       id_gen=match[1],
       match$0=caml_call2(advance_errors_fun,advance_errors$0,compile_acc$0),
       compile_acc$1=match$0[2],
       advance_errors_gen=match$0[1],
       match$1=caml_call2(am_advancing_fun,am_advancing$0,compile_acc$1),
       compile_acc$2=match$1[2],
       am_advancing_gen=match$1[1],
       match$2=caml_call2(events_fun,events$1,compile_acc$2),
       compile_acc$3=match$2[2],
       events_gen=match$2[1],
       match$3=caml_call2(fired_events_fun,fired_events$0,compile_acc$3),
       compile_acc$4=match$3[2],
       fired_events_gen=match$3[1],
       match$4=
        caml_call2
         (most_recently_fired_fun,most_recently_fired$0,compile_acc$4),
       compile_acc$5=match$4[2],
       most_recently_fired_gen=match$4[1],
       match$5=caml_call2(handle_fired_fun,handle_fired$0,compile_acc$5),
       compile_acc$6=match$5[2],
       handle_fired_gen=match$5[1],
       match$6=caml_call2(is_wall_clock_fun,is_wall_clock$0,compile_acc$6),
       compile_acc$7=match$6[2],
       is_wall_clock_gen=match$6[1],
       match$7=caml_call2(scheduler_fun,scheduler$1,compile_acc$7),
       compile_acc$8=match$7[2],
       scheduler_gen=match$7[1];
      return [0,
              function(acc)
               {var
                 id=caml_call1(id_gen,acc),
                 advance_errors=caml_call1(advance_errors_gen,acc),
                 am_advancing=caml_call1(am_advancing_gen,acc),
                 events=caml_call1(events_gen,acc),
                 fired_events=caml_call1(fired_events_gen,acc),
                 most_recently_fired=caml_call1(most_recently_fired_gen,acc),
                 handle_fired=caml_call1(handle_fired_gen,acc),
                 is_wall_clock=caml_call1(is_wall_clock_gen,acc),
                 scheduler=caml_call1(scheduler_gen,acc);
                return [0,
                        id,
                        advance_errors,
                        am_advancing,
                        events,
                        fired_events,
                        most_recently_fired,
                        handle_fired,
                        is_wall_clock,
                        scheduler]},
              compile_acc$8]}
    function create$4
     (id,
      advance_errors,
      am_advancing,
      events,
      fired_events,
      most_recently_fired,
      handle_fired,
      is_wall_clock,
      scheduler)
     {return [0,
              id,
              advance_errors,
              am_advancing,
              events,
              fired_events,
              most_recently_fired,
              handle_fired,
              is_wall_clock,
              scheduler]}
    function map$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _Iw_=caml_call1(scheduler_fun,scheduler$1),
       _Ix_=caml_call1(is_wall_clock_fun,is_wall_clock$0),
       _Iy_=caml_call1(handle_fired_fun,handle_fired$0),
       _Iz_=caml_call1(most_recently_fired_fun,most_recently_fired$0),
       _IA_=caml_call1(fired_events_fun,fired_events$0),
       _IB_=caml_call1(events_fun,events$1),
       _IC_=caml_call1(am_advancing_fun,am_advancing$0),
       _ID_=caml_call1(advance_errors_fun,advance_errors$0);
      return [0,
              caml_call1(id_fun,id$2),
              _ID_,
              _IC_,
              _IB_,
              _IA_,
              _Iz_,
              _Iy_,
              _Ix_,
              _Iw_]}
    function iter$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {caml_call1(id_fun,id$2);
      caml_call1(advance_errors_fun,advance_errors$0);
      caml_call1(am_advancing_fun,am_advancing$0);
      caml_call1(events_fun,events$1);
      caml_call1(fired_events_fun,fired_events$0);
      caml_call1(most_recently_fired_fun,most_recently_fired$0);
      caml_call1(handle_fired_fun,handle_fired$0);
      caml_call1(is_wall_clock_fun,is_wall_clock$0);
      return caml_call1(scheduler_fun,scheduler$1)}
    function fold$5
     (init,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {return caml_call2
              (scheduler_fun,
               caml_call2
                (is_wall_clock_fun,
                 caml_call2
                  (handle_fired_fun,
                   caml_call2
                    (most_recently_fired_fun,
                     caml_call2
                      (fired_events_fun,
                       caml_call2
                        (events_fun,
                         caml_call2
                          (am_advancing_fun,
                           caml_call2
                            (advance_errors_fun,
                             caml_call2(id_fun,init,id$2),
                             advance_errors$0),
                           am_advancing$0),
                         events$1),
                       fired_events$0),
                     most_recently_fired$0),
                   handle_fired$0),
                 is_wall_clock$0),
               scheduler$1)}
    function map_poly$2(record)
     {var
       _Io_=[0,caml_call1(record[1],scheduler$1),0],
       _Ip_=[0,caml_call1(record[1],is_wall_clock$0),_Io_],
       _Iq_=[0,caml_call1(record[1],handle_fired$0),_Ip_],
       _Ir_=[0,caml_call1(record[1],most_recently_fired$0),_Iq_],
       _Is_=[0,caml_call1(record[1],fired_events$0),_Ir_],
       _It_=[0,caml_call1(record[1],events$1),_Is_],
       _Iu_=[0,caml_call1(record[1],am_advancing$0),_It_],
       _Iv_=[0,caml_call1(record[1],advance_errors$0),_Iu_];
      return [0,caml_call1(record[1],id$2),_Iv_]}
    function for_all$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _Ig_=caml_call1(id_fun,id$2),
       _Ih_=_Ig_?caml_call1(advance_errors_fun,advance_errors$0):_Ig_,
       _Ii_=_Ih_?caml_call1(am_advancing_fun,am_advancing$0):_Ih_,
       _Ij_=_Ii_?caml_call1(events_fun,events$1):_Ii_,
       _Ik_=_Ij_?caml_call1(fired_events_fun,fired_events$0):_Ij_,
       _Il_=
        _Ik_?caml_call1(most_recently_fired_fun,most_recently_fired$0):_Ik_,
       _Im_=_Il_?caml_call1(handle_fired_fun,handle_fired$0):_Il_,
       _In_=_Im_?caml_call1(is_wall_clock_fun,is_wall_clock$0):_Im_;
      return _In_?caml_call1(scheduler_fun,scheduler$1):_In_}
    function exists$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _If_=caml_call1(id_fun,id$2),
       _H__=_If_ || caml_call1(advance_errors_fun,advance_errors$0),
       _H$_=_H__ || caml_call1(am_advancing_fun,am_advancing$0),
       _Ia_=_H$_ || caml_call1(events_fun,events$1),
       _Ib_=_Ia_ || caml_call1(fired_events_fun,fired_events$0),
       _Ic_=_Ib_ || caml_call1(most_recently_fired_fun,most_recently_fired$0),
       _Id_=_Ic_ || caml_call1(handle_fired_fun,handle_fired$0),
       _Ie_=_Id_ || caml_call1(is_wall_clock_fun,is_wall_clock$0);
      return _Ie_?_Ie_:caml_call1(scheduler_fun,scheduler$1)}
    function to_list$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _H2_=[0,caml_call1(scheduler_fun,scheduler$1),0],
       _H3_=[0,caml_call1(is_wall_clock_fun,is_wall_clock$0),_H2_],
       _H4_=[0,caml_call1(handle_fired_fun,handle_fired$0),_H3_],
       _H5_=[0,caml_call1(most_recently_fired_fun,most_recently_fired$0),_H4_],
       _H6_=[0,caml_call1(fired_events_fun,fired_events$0),_H5_],
       _H7_=[0,caml_call1(events_fun,events$1),_H6_],
       _H8_=[0,caml_call1(am_advancing_fun,am_advancing$0),_H7_],
       _H9_=[0,caml_call1(advance_errors_fun,advance_errors$0),_H8_];
      return [0,caml_call1(id_fun,id$2),_H9_]}
    function iter$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {caml_call3(id_fun,id$2,record,record[1]);
      caml_call3(advance_errors_fun,advance_errors$0,record,record[2]);
      caml_call3(am_advancing_fun,am_advancing$0,record,record[3]);
      caml_call3(events_fun,events$1,record,record[4]);
      caml_call3(fired_events_fun,fired_events$0,record,record[5]);
      caml_call3
       (most_recently_fired_fun,most_recently_fired$0,record,record[6]);
      caml_call3(handle_fired_fun,handle_fired$0,record,record[7]);
      caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]);
      return caml_call3(scheduler_fun,scheduler$1,record,record[9])}
    function fold$6
     (record,
      init,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _HU_=record[9],
       _HV_=record[8],
       _HW_=record[7],
       _HX_=record[6],
       _HY_=record[5],
       _HZ_=record[4],
       _H0_=record[3],
       _H1_=record[2];
      return caml_call4
              (scheduler_fun,
               caml_call4
                (is_wall_clock_fun,
                 caml_call4
                  (handle_fired_fun,
                   caml_call4
                    (most_recently_fired_fun,
                     caml_call4
                      (fired_events_fun,
                       caml_call4
                        (events_fun,
                         caml_call4
                          (am_advancing_fun,
                           caml_call4
                            (advance_errors_fun,
                             caml_call4(id_fun,init,id$2,record,record[1]),
                             advance_errors$0,
                             record,
                             _H1_),
                           am_advancing$0,
                           record,
                           _H0_),
                         events$1,
                         record,
                         _HZ_),
                       fired_events$0,
                       record,
                       _HY_),
                     most_recently_fired$0,
                     record,
                     _HX_),
                   handle_fired$0,
                   record,
                   _HW_),
                 is_wall_clock$0,
                 record,
                 _HV_),
               scheduler$1,
               record,
               _HU_)}
    function for_all$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _HM_=caml_call3(id_fun,id$2,record,record[1]),
       _HN_=
        _HM_
         ?caml_call3(advance_errors_fun,advance_errors$0,record,record[2])
         :_HM_,
       _HO_=
        _HN_?caml_call3(am_advancing_fun,am_advancing$0,record,record[3]):_HN_,
       _HP_=_HO_?caml_call3(events_fun,events$1,record,record[4]):_HO_,
       _HQ_=
        _HP_?caml_call3(fired_events_fun,fired_events$0,record,record[5]):_HP_,
       _HR_=
        _HQ_
         ?caml_call3
           (most_recently_fired_fun,most_recently_fired$0,record,record[6])
         :_HQ_,
       _HS_=
        _HR_?caml_call3(handle_fired_fun,handle_fired$0,record,record[7]):_HR_,
       _HT_=
        _HS_
         ?caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8])
         :_HS_;
      return _HT_?caml_call3(scheduler_fun,scheduler$1,record,record[9]):_HT_}
    function exists$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _HL_=caml_call3(id_fun,id$2,record,record[1]),
       _HE_=
        _HL_
        ||
        caml_call3(advance_errors_fun,advance_errors$0,record,record[2]),
       _HF_=
        _HE_
        ||
        caml_call3(am_advancing_fun,am_advancing$0,record,record[3]),
       _HG_=_HF_ || caml_call3(events_fun,events$1,record,record[4]),
       _HH_=
        _HG_
        ||
        caml_call3(fired_events_fun,fired_events$0,record,record[5]),
       _HI_=
        _HH_
        ||
        caml_call3
         (most_recently_fired_fun,most_recently_fired$0,record,record[6]),
       _HJ_=
        _HI_
        ||
        caml_call3(handle_fired_fun,handle_fired$0,record,record[7]),
       _HK_=
        _HJ_
        ||
        caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]);
      return _HK_?_HK_:caml_call3(scheduler_fun,scheduler$1,record,record[9])}
    function to_list$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _Hw_=[0,caml_call3(scheduler_fun,scheduler$1,record,record[9]),0],
       _Hx_=
        [0,
         caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]),
         _Hw_],
       _Hy_=
        [0,caml_call3(handle_fired_fun,handle_fired$0,record,record[7]),_Hx_],
       _Hz_=
        [0,
         caml_call3
          (most_recently_fired_fun,most_recently_fired$0,record,record[6]),
         _Hy_],
       _HA_=
        [0,caml_call3(fired_events_fun,fired_events$0,record,record[5]),_Hz_],
       _HB_=[0,caml_call3(events_fun,events$1,record,record[4]),_HA_],
       _HC_=
        [0,caml_call3(am_advancing_fun,am_advancing$0,record,record[3]),_HB_],
       _HD_=
        [0,
         caml_call3(advance_errors_fun,advance_errors$0,record,record[2]),
         _HC_];
      return [0,caml_call3(id_fun,id$2,record,record[1]),_HD_]}
    function map$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _Ho_=caml_call3(scheduler_fun,scheduler$1,record,record[9]),
       _Hp_=caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]),
       _Hq_=caml_call3(handle_fired_fun,handle_fired$0,record,record[7]),
       _Hr_=
        caml_call3
         (most_recently_fired_fun,most_recently_fired$0,record,record[6]),
       _Hs_=caml_call3(fired_events_fun,fired_events$0,record,record[5]),
       _Ht_=caml_call3(events_fun,events$1,record,record[4]),
       _Hu_=caml_call3(am_advancing_fun,am_advancing$0,record,record[3]),
       _Hv_=caml_call3(advance_errors_fun,advance_errors$0,record,record[2]);
      return [0,
              caml_call3(id_fun,id$2,record,record[1]),
              _Hv_,
              _Hu_,
              _Ht_,
              _Hs_,
              _Hr_,
              _Hq_,
              _Hp_,
              _Ho_]}
    function set_all_mutable_fields$2
     (record,advance_errors,am_advancing,fired_events,most_recently_fired)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[2] = advance_errors;
      record$0[3] = am_advancing;
      record$0[5] = fired_events;
      record$0[6] = most_recently_fired;
      return 0}
    var
     Direct$2=
      [0,
       iter$6,
       fold$6,
       for_all$6,
       exists$6,
       to_list$6,
       map$6,
       set_all_mutable_fields$2],
     Fields$1=
      [0,
       names$2,
       scheduler$1,
       is_wall_clock$0,
       handle_fired$0,
       most_recently_fired$0,
       fired_events$0,
       events$1,
       am_advancing$0,
       advance_errors$0,
       id$2,
       make_creator$2,
       create$4,
       map$5,
       iter$5,
       fold$5,
       map_poly$2,
       for_all$5,
       exists$5,
       to_list$5,
       Direct$2];
    function sexp_of_t$23(param,_Hd_)
     {var
       events=_Hd_[4],
       is_wall_clock=_Hd_[8],
       now=caml_call1(Timing_wheel[11],events);
      if(is_wall_clock)
       {var _He_=[0,[1,[0,_fF_,[0,caml_call1(Time_ns[90],now),0]]],0];
        return [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_wall_clock),_He_]]}
      var all_events=[0,0];
      function _Hf_(alarm)
       {var _Hm_=all_events[1],_Hn_=caml_call2(Alarm[5],events,alarm);
        all_events[1] = [0,[0,caml_call2(Alarm[3],events,alarm),_Hn_],_Hm_];
        return 0}
      caml_call2(Timing_wheel[15],events,_Hf_);
      function _Hg_(_Hl_){return _Hl_[2]}
      function _Hh_(param,_Hk_)
       {var at2=_Hk_[1],at1=param[1];return caml_call2(Time_ns[22],at1,at2)}
      var
       _Hi_=caml_call2(Core_kernel_List[56],all_events[1],_Hh_),
       events$0=caml_call2(Core_kernel_List[69],_Hi_,_Hg_),
       _Hj_=
        [0,
         [1,
          [0,
           _fG_,
           [0,caml_call2(Core_kernel[400],Job_or_event$0[6],events$0),0]]],
         0];
      return [1,[0,[1,[0,_fH_,[0,caml_call1(Time_ns[90],now),0]]],_Hj_]]}
    function timing_wheel_now(t){return caml_call1(Timing_wheel[11],t[4])}
    function is_in_fired_events(t,event)
     {function _Hc_(r)
       {var current=[0,t[5]];
        for(;;)
         {if(caml_call1(Event$0[16],current[1]))
           {if(caml_call2(Core_kernel[234],current[1],event))caml_call1(r,1);
            current[1] = current[1][6];
            continue}
          return 0}}
      return caml_call1(Core_kernel[247],_Hc_)}
    function invariant_with_jobs(job_invariant,t)
     {function _GP_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        function _GT_(_Hb_){return 0}
        function _GU_(_Ha_){return 0}
        function _GV_(_G$_){return 0}
        var
         _GW_=
          check
           (function(most_recently_fired)
             {var _G__=caml_call1(Event$0[16],t[6]);
              if(_G__)
               {if(is_in_fired_events(t,most_recently_fired))return 0;
                throw [0,Assert_failure,_fI_]}
              return _G__}),
         _GX_=
          check
           (function(fired_events)
             {var current=[0,fired_events];
              for(;;)
               {if(caml_call1(Event$0[16],current[1]))
                 {var _G9_=timing_wheel_now(t);
                  if(caml_call2(Time_ns[16],current[1][2],_G9_))
                   {var next=current[1][6];
                    if(caml_call1(Event$0[16],next))
                     if(! caml_call2(Time_ns[16],current[1][2],next[2]))
                      throw [0,Assert_failure,_fJ_];
                    current[1] = next;
                    continue}
                  throw [0,Assert_failure,_fK_]}
                return 0}}),
         _GY_=
          check
           (function(events)
             {function _G5_(_G8_){return 0}
              caml_call2(Timing_wheel[6],_G5_,events);
              function _G6_(alarm)
               {var
                 job_or_event=caml_call2(Alarm[5],events,alarm),
                 match=caml_call1(Job_or_event$0[5][1],job_or_event),
                 k=match[1],
                 match$0=caml_call2(Job_or_event$0[5][2],k,job_or_event);
                if(0 === k)
                 {if(caml_call2(Core_kernel[234],alarm,match$0[1]))
                   {var
                     _G7_=match$0[2],
                     expect=caml_call2(Alarm[3],events,alarm),
                     sexpifier=Time_ns[90],
                     comparator=Time_ns[22];
                    caml_call8
                     (Ppx_assert_lib_Runtime[3],
                      pos$0,
                      sexpifier,
                      comparator,
                      0,
                      0,
                      0,
                      expect,
                      _G7_);
                    var sexpifier$0=Event$0[1][2],comparator$0=Event$0[1][1];
                    return caml_call8
                            (Ppx_assert_lib_Runtime[3],
                             pos$1,
                             sexpifier$0,
                             comparator$0,
                             0,
                             0,
                             0,
                             3,
                             match$0[7])}
                  throw [0,Assert_failure,_fL_]}
                return caml_call1(job_invariant,match$0)}
              return caml_call2(Timing_wheel[15],events,_G6_)});
        function _GZ_(_G4_){return 0}
        function _G0_(_G3_){return 0}
        function _G1_(_G2_){return 0}
        return caml_call9
                (Fields$1[14],_G1_,_G0_,_GZ_,_GY_,_GX_,_GW_,_GV_,_GU_,_GT_)}
      function _GQ_(param){return _fM_}
      function _GR_(_GS_){return sexp_of_t$23(_GQ_,_GS_)}
      return caml_call4(include$9[1],_fN_,t,_GR_,_GP_)}
    function invariant$2(t)
     {return invariant_with_jobs(function(param){return 0},t)}
    var
     include$11=
      [0,
       Event$0,
       Job_or_event$0,
       scheduler$0,
       is_wall_clock,
       handle_fired,
       most_recently_fired,
       set_most_recently_fired,
       fired_events,
       set_fired_events,
       events$0,
       am_advancing,
       set_am_advancing,
       advance_errors,
       set_advance_errors,
       id$1,
       Fields$1,
       sexp_of_t$23,
       timing_wheel_now,
       is_in_fired_events,
       invariant_with_jobs,
       invariant$2];
    function sexp_of_t$24(v)
     {return caml_call2(include$11[17],Core_kernel[159],v)}
    var invariant$3=include$11[21],invariant_with_jobs$0=include$11[20];
    function sexp_of_t$25(v)
     {return caml_call2(include$11[17],Core_kernel[190],v)}
    var Read_write=[0,sexp_of_t$25,invariant$3,invariant_with_jobs$0];
    function id$3(t){return t[1]}
    function is_wall_clock$1(t){return t[8]}
    function length$1(t){return caml_call1(Timing_wheel[14],t[4])}
    function max_allowed_alarm_time(t)
     {return caml_call1(Timing_wheel[22],t[4])}
    function read_only(t){return t}
    function fire(t,event)
     {caml_call2(include$11[1][20],event,1);
      event[1] = caml_call1(Alarm[2],0);
      var
       prev=[0,include$11[1][14]],
       current=[0,t[5]],
       _GN_=caml_call1(include$11[1][16],t[6]),
       _GO_=_GN_?caml_call2(Time_ns[15],event[2],t[6][2]):_GN_;
      if(_GO_){prev[1] = t[6];current[1] = prev[1][6]}
      for(;;)
       {if(caml_call1(include$11[1][16],current[1]))
         if(caml_call2(Time_ns[16],current[1][2],event[2]))
          {prev[1] = current[1];current[1] = current[1][6];continue}
        event[6] = current[1];
        t[6] = event;
        return caml_call1(include$11[1][15],prev[1])
                ?(t[5] = event,0)
                :(prev[1][6] = event,0)}}
    function alarm_precision(t){return caml_call1(Timing_wheel[10],t[4])}
    function now(t)
     {return t[8]?caml_call1(Time_ns[62],0):caml_call1(include$11[18],t)}
    var timing_wheel_now$0=include$11[18];
    function schedule(t,event)
     {caml_call2(include$11[1][20],event,3);
      var _GM_=caml_call1(include$11[2][1],event);
      event[1] = caml_call3(Timing_wheel[25],t[4],event[2],_GM_);
      return 0}
    var
     include$12=include$11[1],
     Status$0=include$12[1],
     status$1=include$12[2],
     next_fired$1=include$12[3],
     set_next_fired$0=include$12[4],
     interval$1=include$12[5],
     set_interval$0=include$12[6],
     execution_context$1=include$12[7],
     callback$1=include$12[8],
     set_at$0=include$12[10],
     alarm$1=include$12[11],
     set_alarm$0=include$12[12],
     Fields$2=include$12[13],
     none$0=include$12[14],
     is_none$0=include$12[15],
     is_some$0=include$12[16],
     sexp_of_t$26=include$12[17],
     invariant$4=include$12[18],
     compare_at$0=include$12[19],
     set_status$1=include$12[20];
    function create_internal(t,at,interval,callback)
     {var _GL_=t[9][7];
      return [0,caml_call1(Alarm[2],0),at,callback,_GL_,interval,none$0,4]}
    function add(t,event)
     {var _GK_=caml_call1(timing_wheel_now$0,t);
      return caml_call2(Time_ns[16],event[2],_GK_)
              ?fire(t,event)
              :schedule(t,event)}
    function create_and_add(t,at,interval,callback)
     {var event=create_internal(t,at,interval,callback);
      add(t,event);
      return event}
    function at$2(t,at,callback){return create_and_add(t,at,0,callback)}
    function after$0(t,span,callback)
     {var _GJ_=now(t);
      return create_and_add(t,caml_call2(Time_ns[89],_GJ_,span),0,callback)}
    function require_span_at_least_alarm_precision(t,span)
     {var
       alarm_precision$0=alarm_precision(t),
       _GF_=caml_call2(Time_ns[1][18],span,alarm_precision$0);
      if(_GF_)
       {var
         _GG_=
          [0,
           [1,[0,_fO_,[0,caml_call1(Time_ns[1][10],alarm_precision$0),0]]],
           0],
         _GH_=[0,[1,[0,_fP_,[0,caml_call1(Time_ns[1][10],span),0]]],_GG_],
         _GI_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_interval_span_smaller_than_alarm_precision),
            _GH_]];
        return caml_call1(Core_kernel[241],_GI_)}
      return _GF_}
    function at_intervals(t,span,callback)
     {require_span_at_least_alarm_precision(t,span);
      return create_and_add(t,now(t),[0,span],callback)}
    function sexp_of_t$27(param)
     {switch(param){case 0:return _fQ_;case 1:return _fR_;default:return _fS_}}
    var Abort_result=[0,sexp_of_t$27];
    function abort(t,event)
     {switch(event[7])
       {case 0:return 2;
        case 1:caml_call2(include$11[1][20],event,0);return 0;
        case 2:
         return caml_call1(Core_kernel_Option[43],event[5])?1:(event[5] = 0,0);
        case 3:
         caml_call2(include$11[1][20],event,4);
         caml_call2(Timing_wheel[28],t[4],event[1]);
         event[1] = caml_call1(Alarm[2],0);
         return 0;
        default:return 2}}
    function abort_if_possible(t,event){abort(t,event);return 0}
    function abort_exn(t,event)
     {var reason=abort(t,event);
      if(0 === reason)return 0;
      var
       _GD_=[0,[1,[0,_fT_,[0,caml_call1(Abort_result[1],reason),0]]],0],
       _GE_=
        [1,
         [0,
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_Synchronous_time_source_abort_exn_cannot_abort_event),
          _GD_]];
      return caml_call1(Core_kernel[241],_GE_)}
    function create$5(t,callback)
     {return create_internal(t,Time_ns[55],0,callback)}
    function schedule_at_internal(t,event,at,interval)
     {var _GA_=event[7];
      if(4 <= _GA_)
       {event[2] = at;event[5] = interval;add(t,event);return _fU_}
      var
       _GB_=[0,caml_call1(include$11[1][1][2],_GA_),0],
       _GC_=
        [1,
         [0,
          caml_call1
           (Sexplib0_Sexp_conv[7],cst_cannot_schedule_an_event_with_status),
          _GB_]];
      return caml_call1(Core_kernel_Or_error[40],_GC_)}
    function schedule_at(t,event,at)
     {return schedule_at_internal(t,event,at,0)}
    function schedule_after(t,event,span)
     {var _Gz_=now(t);
      return schedule_at(t,event,caml_call2(Time_ns[89],_Gz_,span))}
    function schedule_at_intervals(t,event,span)
     {require_span_at_least_alarm_precision(t,span);
      return schedule_at_internal(t,event,now(t),[0,span])}
    function sexp_of_t$28(param)
     {switch(param)
       {case 0:return _fV_;
        case 1:return _fW_;
        case 2:return _fX_;
        default:return _fY_}}
    var Reschedule_result=[0,sexp_of_t$28];
    function reschedule_at(t,event,at)
     {switch(event[7])
       {case 0:return 2;
        case 1:return 3;
        case 2:return 1;
        case 3:
         event[2] = at;
         var _Gy_=caml_call1(timing_wheel_now$0,t);
         if(caml_call2(Time_ns[18],at,_Gy_))
          caml_call3(Timing_wheel[29],t[4],event[1],at);
         else
          {caml_call2(Timing_wheel[28],t[4],event[1]);fire(t,event)}
         return 0;
        default:event[2] = at;event[5] = 0;add(t,event);return 0}}
    function reschedule_after(t,event,span)
     {var _Gx_=now(t);
      return reschedule_at(t,event,caml_call2(Time_ns[89],_Gx_,span))}
    var
     Event$1=
      [0,
       Status$0,
       status$1,
       next_fired$1,
       set_next_fired$0,
       interval$1,
       set_interval$0,
       execution_context$1,
       callback$1,
       set_at$0,
       alarm$1,
       set_alarm$0,
       Fields$2,
       none$0,
       is_none$0,
       is_some$0,
       sexp_of_t$26,
       invariant$4,
       compare_at$0,
       set_status$1,
       create_internal,
       add,
       create_and_add,
       at$2,
       after$0,
       require_span_at_least_alarm_precision,
       at_intervals,
       Abort_result,
       abort,
       abort_if_possible,
       abort_exn,
       create$5,
       schedule_at_internal,
       schedule_at,
       schedule_after,
       schedule_at_intervals,
       Reschedule_result,
       reschedule_at,
       reschedule_after];
    function run_after(t,span,callback)
     {caml_call3(Event$1[24],t,span,callback);return 0}
    function run_at(t,at,callback)
     {caml_call3(Event$1[23],t,at,callback);return 0}
    function run_at_intervals(t,span,callback)
     {caml_call3(Event$1[26],t,span,callback);return 0}
    function run_fired_events(t,send_exn)
     {var current_execution_context=t[9][7];
      for(;;)
       {if(caml_call1(Event$1[15],t[5]))
         {var event=t[5];
          if(caml_call2(Core_kernel[234],event,t[6]))t[6] = Event$1[13];
          t[5] = event[6];
          event[6] = Event$1[13];
          var _Gt_=event[7];
          if(1 === _Gt_)
           {caml_call2(Event$1[19],event,2);
            set_execution_context(t[9],event[4]);
            try
             {caml_call1(event[3],0);var switch$0=0}
            catch(exn$0)
             {exn$0 = caml_wrap_exception(exn$0);
              if(send_exn)
               {var
                 send_exn$0=send_exn[1],
                 backtrace=caml_call2(Base_Backtrace[2],0,0);
                caml_call3
                 (send_exn$0,event[4][1],[0,[0,936718974,backtrace]],exn$0)}
              else
               {var _Gu_=t[2];
                t[2] = [0,caml_call2(Core_kernel_Error[22],0,exn$0),_Gu_]}
              caml_call2(Event$1[19],event,4);
              var switch$0=1,exn=exn$0}
            if(! switch$0)
             {var _Gv_=event[5];
              if(_Gv_)
               {var interval=_Gv_[1],_Gw_=caml_call1(timing_wheel_now$0,t);
                event[2] = caml_call5(Time_ns[77],0,event[2],_Gw_,interval,0);
                schedule(t,event)}
              else
               caml_call2(Event$1[19],event,4)}}
          else
           {if(0 !== _Gt_)throw [0,Assert_failure,_fZ_];
            caml_call2(Event$1[19],event,4)}
          continue}
        return set_execution_context(t[9],current_execution_context)}}
    function advance_clock(t,to,send_exn)
     {caml_call3(Timing_wheel[20],t[4],to,t[7]);
      return run_fired_events(t,send_exn)}
    function fire_past_alarms(t,send_exn)
     {caml_call2(Timing_wheel[21],t[4],t[7]);
      return run_fired_events(t,send_exn)}
    function advance_internal(t,to,send_exn)
     {advance_clock(t,to,send_exn);return fire_past_alarms(t,send_exn)}
    function prepare_to_advance(t,send_exn)
     {if(t[3])
       {var
         _Gs_=
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_cannot_call_advance_by_alarms_from_callback);
        caml_call1(Core_kernel[241],_Gs_)}
      t[3] = 1;
      if(t[2])t[2] = 0;
      return run_fired_events(t,send_exn)}
    function finish_advancing(t)
     {t[3] = 0;
      var _Gr_=t[2];
      return _Gr_?(t[2] = 0,[1,caml_call2(Core_kernel_Error[21],0,_Gr_)]):_f0_}
    function advance_by_alarms(t,to)
     {prepare_to_advance(t,0);
      var continue$0=[0,1],send_exn=0;
      for(;;)
       {if(continue$0[1])
         {if(caml_call1(Timing_wheel[13],t[4])){continue$0[1] = 0;continue}
          var next_alarm_fires_at=caml_call1(Timing_wheel[37],t[4]);
          if(caml_call2(Time_ns[15],next_alarm_fires_at,to))
           continue$0[1] = 0;
          else
           advance_internal(t,caml_call1(Timing_wheel[35],t[4]),send_exn);
          continue}
        advance_internal(t,to,send_exn);
        return finish_advancing(t)}}
    function advance_directly(t,to)
     {prepare_to_advance(t,0);
      advance_internal(t,to,0);
      return finish_advancing(t)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$13=
      [0,
       Time_ns,
       Alarm,
       default_timing_wheel_config$0,
       include$11,
       sexp_of_t$24,
       invariant$3,
       invariant_with_jobs$0,
       Read_write,
       id$3,
       is_wall_clock$1,
       length$1,
       max_allowed_alarm_time,
       read_only,
       fire,
       alarm_precision,
       now,
       timing_wheel_now$0,
       schedule,
       Event$1,
       run_after,
       run_at,
       run_at_intervals,
       run_fired_events,
       advance_clock,
       fire_past_alarms,
       advance_internal,
       prepare_to_advance,
       finish_advancing,
       advance_by_alarms,
       advance_directly];
    caml_register_global
     (1209,include$13,"Async_kernel__Synchronous_time_source0");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$47);
    caml_call1(Expect_test_collector[4][1],cst_src_scheduler1_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$48,cst$19);
    function create_with_cell(cell){return [0,cell]}
    function create$6(param){return [0,0]}
    function create_full(a){return [0,[2,a]]}
    var Ivar$0=[0,create_with_cell,create$6,create_full];
    function create$7(param)
     {var _Gq_=[0,0,caml_call1(Ivar$0[2],0)];return caml_call1(Bvar[1],_Gq_)}
    var Bvar$0=[0,create$7];
    function sexp_of_t$29(param){return 0 === param?_f1_:_f2_}
    var Exec_result=[0,sexp_of_t$29];
    function exec(r){return r[2]}
    function execution_context$2(r){return r[1]}
    function _f3_(r,v){return [0,r[1],v]}
    var _f4_=0,exec$0=[0,function(param){return 0},cst_exec,_f4_,exec,_f3_];
    function _f5_(r,v){return [0,v,r[2]]}
    var
     _f6_=0,
     execution_context$3=
      [0,
       function(param){return 0},
       cst_execution_context$0,
       _f6_,
       execution_context$2,
       _f5_];
    function make_creator$3(execution_context_fun,exec_fun,compile_acc)
     {var
       match=caml_call2(execution_context_fun,execution_context$3,compile_acc),
       compile_acc$0=match[2],
       execution_context_gen=match[1],
       match$0=caml_call2(exec_fun,exec$0,compile_acc$0),
       compile_acc$1=match$0[2],
       exec_gen=match$0[1];
      return [0,
              function(acc)
               {var
                 execution_context=caml_call1(execution_context_gen,acc),
                 exec=caml_call1(exec_gen,acc);
                return [0,execution_context,exec]},
              compile_acc$1]}
    function create$8(execution_context,exec)
     {return [0,execution_context,exec]}
    function map$7(execution_context_fun,exec_fun)
     {var _Gp_=caml_call1(exec_fun,exec$0);
      return [0,caml_call1(execution_context_fun,execution_context$3),_Gp_]}
    function iter$7(execution_context_fun,exec_fun)
     {caml_call1(execution_context_fun,execution_context$3);
      return caml_call1(exec_fun,exec$0)}
    function fold$7(init,execution_context_fun,exec_fun)
     {return caml_call2
              (exec_fun,
               caml_call2(execution_context_fun,init,execution_context$3),
               exec$0)}
    function map_poly$3(record)
     {var _Go_=[0,caml_call1(record[1],exec$0),0];
      return [0,caml_call1(record[1],execution_context$3),_Go_]}
    function for_all$7(execution_context_fun,exec_fun)
     {var _Gn_=caml_call1(execution_context_fun,execution_context$3);
      return _Gn_?caml_call1(exec_fun,exec$0):_Gn_}
    function exists$7(execution_context_fun,exec_fun)
     {var _Gm_=caml_call1(execution_context_fun,execution_context$3);
      return _Gm_?_Gm_:caml_call1(exec_fun,exec$0)}
    function to_list$7(execution_context_fun,exec_fun)
     {var _Gl_=[0,caml_call1(exec_fun,exec$0),0];
      return [0,caml_call1(execution_context_fun,execution_context$3),_Gl_]}
    function iter$8(record,execution_context_fun,exec_fun)
     {caml_call3(execution_context_fun,execution_context$3,record,record[1]);
      return caml_call3(exec_fun,exec$0,record,record[2])}
    function fold$8(record,init,execution_context_fun,exec_fun)
     {var _Gk_=record[2];
      return caml_call4
              (exec_fun,
               caml_call4
                (execution_context_fun,
                 init,
                 execution_context$3,
                 record,
                 record[1]),
               exec$0,
               record,
               _Gk_)}
    function for_all$8(record,execution_context_fun,exec_fun)
     {var
       _Gj_=
        caml_call3(execution_context_fun,execution_context$3,record,record[1]);
      return _Gj_?caml_call3(exec_fun,exec$0,record,record[2]):_Gj_}
    function exists$8(record,execution_context_fun,exec_fun)
     {var
       _Gi_=
        caml_call3(execution_context_fun,execution_context$3,record,record[1]);
      return _Gi_?_Gi_:caml_call3(exec_fun,exec$0,record,record[2])}
    function to_list$8(record,execution_context_fun,exec_fun)
     {var _Gh_=[0,caml_call3(exec_fun,exec$0,record,record[2]),0];
      return [0,
              caml_call3
               (execution_context_fun,execution_context$3,record,record[1]),
              _Gh_]}
    function map$8(record,execution_context_fun,exec_fun)
     {var _Gg_=caml_call3(exec_fun,exec$0,record,record[2]);
      return [0,
              caml_call3
               (execution_context_fun,execution_context$3,record,record[1]),
              _Gg_]}
    function set_all_mutable_fields$3(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct$3=
      [0,
       iter$8,
       fold$8,
       for_all$8,
       exists$8,
       to_list$8,
       map$8,
       set_all_mutable_fields$3],
     Fields$3=
      [0,
       names$3,
       exec$0,
       execution_context$3,
       make_creator$3,
       create$8,
       map$7,
       iter$7,
       fold$7,
       map_poly$3,
       for_all$7,
       exists$7,
       to_list$7,
       Direct$3];
    function sexp_of_t$30(param)
     {var v_execution_context=param[1],bnds=0;
      function _Ge_(_Gf_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_Ge_),
       bnds$0=[0,[1,[0,_f7_,[0,arg,0]]],bnds],
       arg$0=sexp_of_t$13(v_execution_context),
       bnds$1=[0,[1,[0,_f8_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    function invariant$5(t)
     {function _Ga_(param)
       {function _Gc_(_Gd_){return 0}
        var _Gb_=caml_call2(include$9[2],t,f);
        return caml_call2(Fields$3[7],_Gb_,_Gc_)}
      return caml_call4(include$9[1],_f9_,t,sexp_of_t$30,_Ga_)}
    var
     Very_low_priority_worker$0=
      [0,
       Exec_result,
       exec,
       execution_context$2,
       Fields$3,
       sexp_of_t$30,
       invariant$5];
    function on_end_of_cycle(r){return r[27]}
    function set_on_end_of_cycle(r,v){r[27] = v;return 0}
    function on_start_of_cycle(r){return r[26]}
    function set_on_start_of_cycle(r,v){r[26] = v;return 0}
    function record_backtraces$2(r){return r[25]}
    function set_record_backtraces(r,v){r[25] = v;return 0}
    function max_num_jobs_per_priority_per_cycle$2(r){return r[24]}
    function set_max_num_jobs_per_priority_per_cycle(r,v){r[24] = v;return 0}
    function check_invariants$2(r){return r[23]}
    function set_check_invariants(r,v){r[23] = v;return 0}
    function yield_until_no_jobs_remain(r){return r[22]}
    function set_yield_until_no_jobs_remain(r,v){r[22] = v;return 0}
    function yield$0(r){return r[21]}
    function set_yield(r,v){r[21] = v;return 0}
    function event_added_hook(r){return r[20]}
    function set_event_added_hook(r,v){r[20] = v;return 0}
    function job_queued_hook(r){return r[19]}
    function set_job_queued_hook(r,v){r[19] = v;return 0}
    function thread_safe_external_job_hook(r){return r[18]}
    function set_thread_safe_external_job_hook(r,v){r[18] = v;return 0}
    function external_jobs(r){return r[17]}
    function time_source(r){return r[16]}
    function set_time_source(r,v){r[16] = v;return 0}
    function total_cycle_time(r){return r[15]}
    function set_total_cycle_time(r,v){r[15] = v;return 0}
    function last_cycle_num_jobs(r){return r[14]}
    function set_last_cycle_num_jobs(r,v){r[14] = v;return 0}
    function last_cycle_time(r){return r[13]}
    function set_last_cycle_time(r,v){r[13] = v;return 0}
    function run_every_cycle_start(r){return r[12]}
    function set_run_every_cycle_start(r,v){r[12] = v;return 0}
    function in_cycle(r){return r[11]}
    function set_in_cycle(r,v){r[11] = v;return 0}
    function cycle_start(r){return r[10]}
    function set_cycle_start(r,v){r[10] = v;return 0}
    function cycle_count(r){return r[9]}
    function set_cycle_count(r,v){r[9] = v;return 0}
    function uncaught_exn_unwrapped(r){return r[8]}
    function set_uncaught_exn(r,v){r[8] = v;return 0}
    function current_execution_context(r){return r[7]}
    function set_current_execution_context(r,v){r[7] = v;return 0}
    function main_execution_context(r){return r[6]}
    function set_main_execution_context(r,v){r[6] = v;return 0}
    function very_low_priority_workers(r){return r[5]}
    function low_priority_jobs(r){return r[4]}
    function normal_priority_jobs(r){return r[3]}
    function job_pool(r){return r[2]}
    function set_job_pool(r,v){r[2] = v;return 0}
    function check_access(r){return r[1]}
    function set_check_access(r,v){r[1] = v;return 0}
    function _f__(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              v]}
    var
     _f$_=[0,set_on_end_of_cycle],
     on_end_of_cycle$0=
      [0,
       function(param){return 0},
       cst_on_end_of_cycle,
       _f$_,
       on_end_of_cycle,
       _f__];
    function _ga_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              v,
              r[27]]}
    var
     _gb_=[0,set_on_start_of_cycle],
     on_start_of_cycle$0=
      [0,
       function(param){return 0},
       cst_on_start_of_cycle,
       _gb_,
       on_start_of_cycle,
       _ga_];
    function _gc_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              v,
              r[26],
              r[27]]}
    var
     _gd_=[0,set_record_backtraces],
     record_backtraces$3=
      [0,
       function(param){return 0},
       cst_record_backtraces$1,
       _gd_,
       record_backtraces$2,
       _gc_];
    function _ge_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              v,
              r[25],
              r[26],
              r[27]]}
    var
     _gf_=[0,set_max_num_jobs_per_priority_per_cycle],
     max_num_jobs_per_priority_per_cycle$3=
      [0,
       function(param){return 0},
       cst_max_num_jobs_per_priority_per_cycle$1,
       _gf_,
       max_num_jobs_per_priority_per_cycle$2,
       _ge_];
    function _gg_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              v,
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gh_=[0,set_check_invariants],
     check_invariants$3=
      [0,
       function(param){return 0},
       cst_check_invariants$1,
       _gh_,
       check_invariants$2,
       _gg_];
    function _gi_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              v,
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gj_=[0,set_yield_until_no_jobs_remain],
     yield_until_no_jobs_remain$0=
      [0,
       function(param){return 0},
       cst_yield_until_no_jobs_remain,
       _gj_,
       yield_until_no_jobs_remain,
       _gi_];
    function _gk_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              v,
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gl_=[0,set_yield],
     yield$1=[0,function(param){return 0},cst_yield,_gl_,yield$0,_gk_];
    function _gm_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              v,
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gn_=[0,set_event_added_hook],
     event_added_hook$0=
      [0,
       function(param){return 0},
       cst_event_added_hook,
       _gn_,
       event_added_hook,
       _gm_];
    function _go_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              v,
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gp_=[0,set_job_queued_hook],
     job_queued_hook$0=
      [0,
       function(param){return 0},
       cst_job_queued_hook,
       _gp_,
       job_queued_hook,
       _go_];
    function _gq_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              v,
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gr_=[0,set_thread_safe_external_job_hook],
     thread_safe_external_job_hook$0=
      [0,
       function(param){return 0},
       cst_thread_safe_external_job_hook,
       _gr_,
       thread_safe_external_job_hook,
       _gq_];
    function _gs_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              v,
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gt_=0,
     external_jobs$0=
      [0,function(param){return 0},cst_external_jobs,_gt_,external_jobs,_gs_];
    function _gu_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v,
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gv_=[0,set_time_source],
     time_source$0=
      [0,function(param){return 0},cst_time_source,_gv_,time_source,_gu_];
    function _gw_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gx_=[0,set_total_cycle_time],
     total_cycle_time$0=
      [0,
       function(param){return 0},
       cst_total_cycle_time,
       _gx_,
       total_cycle_time,
       _gw_];
    function _gy_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gz_=[0,set_last_cycle_num_jobs],
     last_cycle_num_jobs$0=
      [0,
       function(param){return 0},
       cst_last_cycle_num_jobs,
       _gz_,
       last_cycle_num_jobs,
       _gy_];
    function _gA_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gB_=[0,set_last_cycle_time],
     last_cycle_time$0=
      [0,
       function(param){return 0},
       cst_last_cycle_time,
       _gB_,
       last_cycle_time,
       _gA_];
    function _gC_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gD_=[0,set_run_every_cycle_start],
     run_every_cycle_start$0=
      [0,
       function(param){return 0},
       cst_run_every_cycle_start,
       _gD_,
       run_every_cycle_start,
       _gC_];
    function _gE_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gF_=[0,set_in_cycle],
     in_cycle$0=[0,function(param){return 0},cst_in_cycle,_gF_,in_cycle,_gE_];
    function _gG_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gH_=[0,set_cycle_start],
     cycle_start$0=
      [0,function(param){return 0},cst_cycle_start,_gH_,cycle_start,_gG_];
    function _gI_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gJ_=[0,set_cycle_count],
     cycle_count$0=
      [0,function(param){return 0},cst_cycle_count,_gJ_,cycle_count,_gI_];
    function _gK_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gL_=[0,set_uncaught_exn],
     uncaught_exn=
      [0,
       function(param){return 0},
       cst_uncaught_exn,
       _gL_,
       uncaught_exn_unwrapped,
       _gK_];
    function _gM_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gN_=[0,set_current_execution_context],
     current_execution_context$0=
      [0,
       function(param){return 0},
       cst_current_execution_context,
       _gN_,
       current_execution_context,
       _gM_];
    function _gO_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gP_=[0,set_main_execution_context],
     main_execution_context$0=
      [0,
       function(param){return 0},
       cst_main_execution_context,
       _gP_,
       main_execution_context,
       _gO_];
    function _gQ_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gR_=0,
     very_low_priority_workers$0=
      [0,
       function(param){return 0},
       cst_very_low_priority_workers,
       _gR_,
       very_low_priority_workers,
       _gQ_];
    function _gS_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gT_=0,
     low_priority_jobs$0=
      [0,
       function(param){return 0},
       cst_low_priority_jobs,
       _gT_,
       low_priority_jobs,
       _gS_];
    function _gU_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gV_=0,
     normal_priority_jobs$0=
      [0,
       function(param){return 0},
       cst_normal_priority_jobs,
       _gV_,
       normal_priority_jobs,
       _gU_];
    function _gW_(r,v)
     {return [0,
              r[1],
              v,
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gX_=[0,set_job_pool],
     job_pool$0=[0,function(param){return 0},cst_job_pool,_gX_,job_pool,_gW_];
    function _gY_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gZ_=[0,set_check_access],
     check_access$0=
      [0,function(param){return 0},cst_check_access,_gZ_,check_access,_gY_];
    function make_creator$4
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun,
      compile_acc)
     {var
       match=caml_call2(check_access_fun,check_access$0,compile_acc),
       compile_acc$0=match[2],
       check_access_gen=match[1],
       match$0=caml_call2(job_pool_fun,job_pool$0,compile_acc$0),
       compile_acc$1=match$0[2],
       job_pool_gen=match$0[1],
       match$1=
        caml_call2
         (normal_priority_jobs_fun,normal_priority_jobs$0,compile_acc$1),
       compile_acc$2=match$1[2],
       normal_priority_jobs_gen=match$1[1],
       match$2=
        caml_call2(low_priority_jobs_fun,low_priority_jobs$0,compile_acc$2),
       compile_acc$3=match$2[2],
       low_priority_jobs_gen=match$2[1],
       match$3=
        caml_call2
         (very_low_priority_workers_fun,
          very_low_priority_workers$0,
          compile_acc$3),
       compile_acc$4=match$3[2],
       very_low_priority_workers_gen=match$3[1],
       match$4=
        caml_call2
         (main_execution_context_fun,main_execution_context$0,compile_acc$4),
       compile_acc$5=match$4[2],
       main_execution_context_gen=match$4[1],
       match$5=
        caml_call2
         (current_execution_context_fun,
          current_execution_context$0,
          compile_acc$5),
       compile_acc$6=match$5[2],
       current_execution_context_gen=match$5[1],
       match$6=caml_call2(uncaught_exn_fun,uncaught_exn,compile_acc$6),
       compile_acc$7=match$6[2],
       uncaught_exn_gen=match$6[1],
       match$7=caml_call2(cycle_count_fun,cycle_count$0,compile_acc$7),
       compile_acc$8=match$7[2],
       cycle_count_gen=match$7[1],
       match$8=caml_call2(cycle_start_fun,cycle_start$0,compile_acc$8),
       compile_acc$9=match$8[2],
       cycle_start_gen=match$8[1],
       match$9=caml_call2(in_cycle_fun,in_cycle$0,compile_acc$9),
       compile_acc$10=match$9[2],
       in_cycle_gen=match$9[1],
       match$10=
        caml_call2
         (run_every_cycle_start_fun,run_every_cycle_start$0,compile_acc$10),
       compile_acc$11=match$10[2],
       run_every_cycle_start_gen=match$10[1],
       match$11=
        caml_call2(last_cycle_time_fun,last_cycle_time$0,compile_acc$11),
       compile_acc$12=match$11[2],
       last_cycle_time_gen=match$11[1],
       match$12=
        caml_call2
         (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,compile_acc$12),
       compile_acc$13=match$12[2],
       last_cycle_num_jobs_gen=match$12[1],
       match$13=
        caml_call2(total_cycle_time_fun,total_cycle_time$0,compile_acc$13),
       compile_acc$14=match$13[2],
       total_cycle_time_gen=match$13[1],
       match$14=caml_call2(time_source_fun,time_source$0,compile_acc$14),
       compile_acc$15=match$14[2],
       time_source_gen=match$14[1],
       match$15=caml_call2(external_jobs_fun,external_jobs$0,compile_acc$15),
       compile_acc$16=match$15[2],
       external_jobs_gen=match$15[1],
       match$16=
        caml_call2
         (thread_safe_external_job_hook_fun,
          thread_safe_external_job_hook$0,
          compile_acc$16),
       compile_acc$17=match$16[2],
       thread_safe_external_job_hook_gen=match$16[1],
       match$17=
        caml_call2(job_queued_hook_fun,job_queued_hook$0,compile_acc$17),
       compile_acc$18=match$17[2],
       job_queued_hook_gen=match$17[1],
       match$18=
        caml_call2(event_added_hook_fun,event_added_hook$0,compile_acc$18),
       compile_acc$19=match$18[2],
       event_added_hook_gen=match$18[1],
       match$19=caml_call2(yield_fun,yield$1,compile_acc$19),
       compile_acc$20=match$19[2],
       yield_gen=match$19[1],
       match$20=
        caml_call2
         (yield_until_no_jobs_remain_fun,
          yield_until_no_jobs_remain$0,
          compile_acc$20),
       compile_acc$21=match$20[2],
       yield_until_no_jobs_remain_gen=match$20[1],
       match$21=
        caml_call2(check_invariants_fun,check_invariants$3,compile_acc$21),
       compile_acc$22=match$21[2],
       check_invariants_gen=match$21[1],
       match$22=
        caml_call2
         (max_num_jobs_per_priority_per_cycle_fun,
          max_num_jobs_per_priority_per_cycle$3,
          compile_acc$22),
       compile_acc$23=match$22[2],
       max_num_jobs_per_priority_per_cycle_gen=match$22[1],
       match$23=
        caml_call2(record_backtraces_fun,record_backtraces$3,compile_acc$23),
       compile_acc$24=match$23[2],
       record_backtraces_gen=match$23[1],
       match$24=
        caml_call2(on_start_of_cycle_fun,on_start_of_cycle$0,compile_acc$24),
       compile_acc$25=match$24[2],
       on_start_of_cycle_gen=match$24[1],
       match$25=
        caml_call2(on_end_of_cycle_fun,on_end_of_cycle$0,compile_acc$25),
       compile_acc$26=match$25[2],
       on_end_of_cycle_gen=match$25[1];
      return [0,
              function(acc)
               {var
                 check_access=caml_call1(check_access_gen,acc),
                 job_pool=caml_call1(job_pool_gen,acc),
                 normal_priority_jobs=caml_call1(normal_priority_jobs_gen,acc),
                 low_priority_jobs=caml_call1(low_priority_jobs_gen,acc),
                 very_low_priority_workers=
                  caml_call1(very_low_priority_workers_gen,acc),
                 main_execution_context=
                  caml_call1(main_execution_context_gen,acc),
                 current_execution_context=
                  caml_call1(current_execution_context_gen,acc),
                 uncaught_exn=caml_call1(uncaught_exn_gen,acc),
                 cycle_count=caml_call1(cycle_count_gen,acc),
                 cycle_start=caml_call1(cycle_start_gen,acc),
                 in_cycle=caml_call1(in_cycle_gen,acc),
                 run_every_cycle_start=
                  caml_call1(run_every_cycle_start_gen,acc),
                 last_cycle_time=caml_call1(last_cycle_time_gen,acc),
                 last_cycle_num_jobs=caml_call1(last_cycle_num_jobs_gen,acc),
                 total_cycle_time=caml_call1(total_cycle_time_gen,acc),
                 time_source=caml_call1(time_source_gen,acc),
                 external_jobs=caml_call1(external_jobs_gen,acc),
                 thread_safe_external_job_hook=
                  caml_call1(thread_safe_external_job_hook_gen,acc),
                 job_queued_hook=caml_call1(job_queued_hook_gen,acc),
                 event_added_hook=caml_call1(event_added_hook_gen,acc),
                 yield$0=caml_call1(yield_gen,acc),
                 yield_until_no_jobs_remain=
                  caml_call1(yield_until_no_jobs_remain_gen,acc),
                 check_invariants=caml_call1(check_invariants_gen,acc),
                 max_num_jobs_per_priority_per_cycle=
                  caml_call1(max_num_jobs_per_priority_per_cycle_gen,acc),
                 record_backtraces=caml_call1(record_backtraces_gen,acc),
                 on_start_of_cycle=caml_call1(on_start_of_cycle_gen,acc),
                 on_end_of_cycle=caml_call1(on_end_of_cycle_gen,acc);
                return [0,
                        check_access,
                        job_pool,
                        normal_priority_jobs,
                        low_priority_jobs,
                        very_low_priority_workers,
                        main_execution_context,
                        current_execution_context,
                        uncaught_exn,
                        cycle_count,
                        cycle_start,
                        in_cycle,
                        run_every_cycle_start,
                        last_cycle_time,
                        last_cycle_num_jobs,
                        total_cycle_time,
                        time_source,
                        external_jobs,
                        thread_safe_external_job_hook,
                        job_queued_hook,
                        event_added_hook,
                        yield$0,
                        yield_until_no_jobs_remain,
                        check_invariants,
                        max_num_jobs_per_priority_per_cycle,
                        record_backtraces,
                        on_start_of_cycle,
                        on_end_of_cycle]},
              compile_acc$26]}
    function create$9
     (check_access,
      job_pool,
      normal_priority_jobs,
      low_priority_jobs,
      very_low_priority_workers,
      main_execution_context,
      current_execution_context,
      uncaught_exn,
      cycle_count,
      cycle_start,
      in_cycle,
      run_every_cycle_start,
      last_cycle_time,
      last_cycle_num_jobs,
      total_cycle_time,
      time_source,
      external_jobs,
      thread_safe_external_job_hook,
      job_queued_hook,
      event_added_hook,
      yield$0,
      yield_until_no_jobs_remain,
      check_invariants,
      max_num_jobs_per_priority_per_cycle,
      record_backtraces,
      on_start_of_cycle,
      on_end_of_cycle)
     {return [0,
              check_access,
              job_pool,
              normal_priority_jobs,
              low_priority_jobs,
              very_low_priority_workers,
              main_execution_context,
              current_execution_context,
              uncaught_exn,
              cycle_count,
              cycle_start,
              in_cycle,
              run_every_cycle_start,
              last_cycle_time,
              last_cycle_num_jobs,
              total_cycle_time,
              time_source,
              external_jobs,
              thread_safe_external_job_hook,
              job_queued_hook,
              event_added_hook,
              yield$0,
              yield_until_no_jobs_remain,
              check_invariants,
              max_num_jobs_per_priority_per_cycle,
              record_backtraces,
              on_start_of_cycle,
              on_end_of_cycle]}
    function map$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _FM_=caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0),
       _FN_=caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0),
       _FO_=caml_call1(record_backtraces_fun,record_backtraces$3),
       _FP_=
        caml_call1
         (max_num_jobs_per_priority_per_cycle_fun,
          max_num_jobs_per_priority_per_cycle$3),
       _FQ_=caml_call1(check_invariants_fun,check_invariants$3),
       _FR_=
        caml_call1
         (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0),
       _FS_=caml_call1(yield_fun,yield$1),
       _FT_=caml_call1(event_added_hook_fun,event_added_hook$0),
       _FU_=caml_call1(job_queued_hook_fun,job_queued_hook$0),
       _FV_=
        caml_call1
         (thread_safe_external_job_hook_fun,thread_safe_external_job_hook$0),
       _FW_=caml_call1(external_jobs_fun,external_jobs$0),
       _FX_=caml_call1(time_source_fun,time_source$0),
       _FY_=caml_call1(total_cycle_time_fun,total_cycle_time$0),
       _FZ_=caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0),
       _F0_=caml_call1(last_cycle_time_fun,last_cycle_time$0),
       _F1_=caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0),
       _F2_=caml_call1(in_cycle_fun,in_cycle$0),
       _F3_=caml_call1(cycle_start_fun,cycle_start$0),
       _F4_=caml_call1(cycle_count_fun,cycle_count$0),
       _F5_=caml_call1(uncaught_exn_fun,uncaught_exn),
       _F6_=
        caml_call1(current_execution_context_fun,current_execution_context$0),
       _F7_=caml_call1(main_execution_context_fun,main_execution_context$0),
       _F8_=
        caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0),
       _F9_=caml_call1(low_priority_jobs_fun,low_priority_jobs$0),
       _F__=caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0),
       _F$_=caml_call1(job_pool_fun,job_pool$0);
      return [0,
              caml_call1(check_access_fun,check_access$0),
              _F$_,
              _F__,
              _F9_,
              _F8_,
              _F7_,
              _F6_,
              _F5_,
              _F4_,
              _F3_,
              _F2_,
              _F1_,
              _F0_,
              _FZ_,
              _FY_,
              _FX_,
              _FW_,
              _FV_,
              _FU_,
              _FT_,
              _FS_,
              _FR_,
              _FQ_,
              _FP_,
              _FO_,
              _FN_,
              _FM_]}
    function iter$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {caml_call1(check_access_fun,check_access$0);
      caml_call1(job_pool_fun,job_pool$0);
      caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0);
      caml_call1(low_priority_jobs_fun,low_priority_jobs$0);
      caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0);
      caml_call1(main_execution_context_fun,main_execution_context$0);
      caml_call1(current_execution_context_fun,current_execution_context$0);
      caml_call1(uncaught_exn_fun,uncaught_exn);
      caml_call1(cycle_count_fun,cycle_count$0);
      caml_call1(cycle_start_fun,cycle_start$0);
      caml_call1(in_cycle_fun,in_cycle$0);
      caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0);
      caml_call1(last_cycle_time_fun,last_cycle_time$0);
      caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0);
      caml_call1(total_cycle_time_fun,total_cycle_time$0);
      caml_call1(time_source_fun,time_source$0);
      caml_call1(external_jobs_fun,external_jobs$0);
      caml_call1
       (thread_safe_external_job_hook_fun,thread_safe_external_job_hook$0);
      caml_call1(job_queued_hook_fun,job_queued_hook$0);
      caml_call1(event_added_hook_fun,event_added_hook$0);
      caml_call1(yield_fun,yield$1);
      caml_call1(yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0);
      caml_call1(check_invariants_fun,check_invariants$3);
      caml_call1
       (max_num_jobs_per_priority_per_cycle_fun,
        max_num_jobs_per_priority_per_cycle$3);
      caml_call1(record_backtraces_fun,record_backtraces$3);
      caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0);
      return caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0)}
    function fold$9
     (init,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {return caml_call2
              (on_end_of_cycle_fun,
               caml_call2
                (on_start_of_cycle_fun,
                 caml_call2
                  (record_backtraces_fun,
                   caml_call2
                    (max_num_jobs_per_priority_per_cycle_fun,
                     caml_call2
                      (check_invariants_fun,
                       caml_call2
                        (yield_until_no_jobs_remain_fun,
                         caml_call2
                          (yield_fun,
                           caml_call2
                            (event_added_hook_fun,
                             caml_call2
                              (job_queued_hook_fun,
                               caml_call2
                                (thread_safe_external_job_hook_fun,
                                 caml_call2
                                  (external_jobs_fun,
                                   caml_call2
                                    (time_source_fun,
                                     caml_call2
                                      (total_cycle_time_fun,
                                       caml_call2
                                        (last_cycle_num_jobs_fun,
                                         caml_call2
                                          (last_cycle_time_fun,
                                           caml_call2
                                            (run_every_cycle_start_fun,
                                             caml_call2
                                              (in_cycle_fun,
                                               caml_call2
                                                (cycle_start_fun,
                                                 caml_call2
                                                  (cycle_count_fun,
                                                   caml_call2
                                                    (uncaught_exn_fun,
                                                     caml_call2
                                                      (current_execution_context_fun,
                                                       caml_call2
                                                        (main_execution_context_fun,
                                                         caml_call2
                                                          (very_low_priority_workers_fun,
                                                           caml_call2
                                                            (low_priority_jobs_fun,
                                                             caml_call2
                                                              (normal_priority_jobs_fun,
                                                               caml_call2
                                                                (job_pool_fun,
                                                                 caml_call2(check_access_fun,init,check_access$0),
                                                                 job_pool$0),
                                                               normal_priority_jobs$0),
                                                             low_priority_jobs$0),
                                                           very_low_priority_workers$0),
                                                         main_execution_context$0),
                                                       current_execution_context$0),
                                                     uncaught_exn),
                                                   cycle_count$0),
                                                 cycle_start$0),
                                               in_cycle$0),
                                             run_every_cycle_start$0),
                                           last_cycle_time$0),
                                         last_cycle_num_jobs$0),
                                       total_cycle_time$0),
                                     time_source$0),
                                   external_jobs$0),
                                 thread_safe_external_job_hook$0),
                               job_queued_hook$0),
                             event_added_hook$0),
                           yield$1),
                         yield_until_no_jobs_remain$0),
                       check_invariants$3),
                     max_num_jobs_per_priority_per_cycle$3),
                   record_backtraces$3),
                 on_start_of_cycle$0),
               on_end_of_cycle$0)}
    function map_poly$4(record)
     {var
       _Fm_=[0,caml_call1(record[1],on_end_of_cycle$0),0],
       _Fn_=[0,caml_call1(record[1],on_start_of_cycle$0),_Fm_],
       _Fo_=[0,caml_call1(record[1],record_backtraces$3),_Fn_],
       _Fp_=
        [0,caml_call1(record[1],max_num_jobs_per_priority_per_cycle$3),_Fo_],
       _Fq_=[0,caml_call1(record[1],check_invariants$3),_Fp_],
       _Fr_=[0,caml_call1(record[1],yield_until_no_jobs_remain$0),_Fq_],
       _Fs_=[0,caml_call1(record[1],yield$1),_Fr_],
       _Ft_=[0,caml_call1(record[1],event_added_hook$0),_Fs_],
       _Fu_=[0,caml_call1(record[1],job_queued_hook$0),_Ft_],
       _Fv_=[0,caml_call1(record[1],thread_safe_external_job_hook$0),_Fu_],
       _Fw_=[0,caml_call1(record[1],external_jobs$0),_Fv_],
       _Fx_=[0,caml_call1(record[1],time_source$0),_Fw_],
       _Fy_=[0,caml_call1(record[1],total_cycle_time$0),_Fx_],
       _Fz_=[0,caml_call1(record[1],last_cycle_num_jobs$0),_Fy_],
       _FA_=[0,caml_call1(record[1],last_cycle_time$0),_Fz_],
       _FB_=[0,caml_call1(record[1],run_every_cycle_start$0),_FA_],
       _FC_=[0,caml_call1(record[1],in_cycle$0),_FB_],
       _FD_=[0,caml_call1(record[1],cycle_start$0),_FC_],
       _FE_=[0,caml_call1(record[1],cycle_count$0),_FD_],
       _FF_=[0,caml_call1(record[1],uncaught_exn),_FE_],
       _FG_=[0,caml_call1(record[1],current_execution_context$0),_FF_],
       _FH_=[0,caml_call1(record[1],main_execution_context$0),_FG_],
       _FI_=[0,caml_call1(record[1],very_low_priority_workers$0),_FH_],
       _FJ_=[0,caml_call1(record[1],low_priority_jobs$0),_FI_],
       _FK_=[0,caml_call1(record[1],normal_priority_jobs$0),_FJ_],
       _FL_=[0,caml_call1(record[1],job_pool$0),_FK_];
      return [0,caml_call1(record[1],check_access$0),_FL_]}
    function for_all$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _EY_=caml_call1(check_access_fun,check_access$0),
       _EZ_=_EY_?caml_call1(job_pool_fun,job_pool$0):_EY_,
       _E0_=
        _EZ_?caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0):_EZ_,
       _E1_=_E0_?caml_call1(low_priority_jobs_fun,low_priority_jobs$0):_E0_,
       _E2_=
        _E1_
         ?caml_call1
           (very_low_priority_workers_fun,very_low_priority_workers$0)
         :_E1_,
       _E3_=
        _E2_
         ?caml_call1(main_execution_context_fun,main_execution_context$0)
         :_E2_,
       _E4_=
        _E3_
         ?caml_call1
           (current_execution_context_fun,current_execution_context$0)
         :_E3_,
       _E5_=_E4_?caml_call1(uncaught_exn_fun,uncaught_exn):_E4_,
       _E6_=_E5_?caml_call1(cycle_count_fun,cycle_count$0):_E5_,
       _E7_=_E6_?caml_call1(cycle_start_fun,cycle_start$0):_E6_,
       _E8_=_E7_?caml_call1(in_cycle_fun,in_cycle$0):_E7_,
       _E9_=
        _E8_
         ?caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0)
         :_E8_,
       _E__=_E9_?caml_call1(last_cycle_time_fun,last_cycle_time$0):_E9_,
       _E$_=
        _E__?caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0):_E__,
       _Fa_=_E$_?caml_call1(total_cycle_time_fun,total_cycle_time$0):_E$_,
       _Fb_=_Fa_?caml_call1(time_source_fun,time_source$0):_Fa_,
       _Fc_=_Fb_?caml_call1(external_jobs_fun,external_jobs$0):_Fb_,
       _Fd_=
        _Fc_
         ?caml_call1
           (thread_safe_external_job_hook_fun,thread_safe_external_job_hook$0)
         :_Fc_,
       _Fe_=_Fd_?caml_call1(job_queued_hook_fun,job_queued_hook$0):_Fd_,
       _Ff_=_Fe_?caml_call1(event_added_hook_fun,event_added_hook$0):_Fe_,
       _Fg_=_Ff_?caml_call1(yield_fun,yield$1):_Ff_,
       _Fh_=
        _Fg_
         ?caml_call1
           (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0)
         :_Fg_,
       _Fi_=_Fh_?caml_call1(check_invariants_fun,check_invariants$3):_Fh_,
       _Fj_=
        _Fi_
         ?caml_call1
           (max_num_jobs_per_priority_per_cycle_fun,
            max_num_jobs_per_priority_per_cycle$3)
         :_Fi_,
       _Fk_=_Fj_?caml_call1(record_backtraces_fun,record_backtraces$3):_Fj_,
       _Fl_=_Fk_?caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0):_Fk_;
      return _Fl_?caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0):_Fl_}
    function exists$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _EX_=caml_call1(check_access_fun,check_access$0),
       _Ey_=_EX_ || caml_call1(job_pool_fun,job_pool$0),
       _Ez_=
        _Ey_
        ||
        caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0),
       _EA_=_Ez_ || caml_call1(low_priority_jobs_fun,low_priority_jobs$0),
       _EB_=
        _EA_
        ||
        caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0),
       _EC_=
        _EB_
        ||
        caml_call1(main_execution_context_fun,main_execution_context$0),
       _ED_=
        _EC_
        ||
        caml_call1(current_execution_context_fun,current_execution_context$0),
       _EE_=_ED_ || caml_call1(uncaught_exn_fun,uncaught_exn),
       _EF_=_EE_ || caml_call1(cycle_count_fun,cycle_count$0),
       _EG_=_EF_ || caml_call1(cycle_start_fun,cycle_start$0),
       _EH_=_EG_ || caml_call1(in_cycle_fun,in_cycle$0),
       _EI_=
        _EH_
        ||
        caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0),
       _EJ_=_EI_ || caml_call1(last_cycle_time_fun,last_cycle_time$0),
       _EK_=_EJ_ || caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0),
       _EL_=_EK_ || caml_call1(total_cycle_time_fun,total_cycle_time$0),
       _EM_=_EL_ || caml_call1(time_source_fun,time_source$0),
       _EN_=_EM_ || caml_call1(external_jobs_fun,external_jobs$0),
       _EO_=
        _EN_
        ||
        caml_call1
         (thread_safe_external_job_hook_fun,thread_safe_external_job_hook$0),
       _EP_=_EO_ || caml_call1(job_queued_hook_fun,job_queued_hook$0),
       _EQ_=_EP_ || caml_call1(event_added_hook_fun,event_added_hook$0),
       _ER_=_EQ_ || caml_call1(yield_fun,yield$1),
       _ES_=
        _ER_
        ||
        caml_call1
         (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0),
       _ET_=_ES_ || caml_call1(check_invariants_fun,check_invariants$3),
       _EU_=
        _ET_
        ||
        caml_call1
         (max_num_jobs_per_priority_per_cycle_fun,
          max_num_jobs_per_priority_per_cycle$3),
       _EV_=_EU_ || caml_call1(record_backtraces_fun,record_backtraces$3),
       _EW_=_EV_ || caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0);
      return _EW_?_EW_:caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0)}
    function to_list$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _D__=[0,caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0),0],
       _D$_=[0,caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0),_D__],
       _Ea_=[0,caml_call1(record_backtraces_fun,record_backtraces$3),_D$_],
       _Eb_=
        [0,
         caml_call1
          (max_num_jobs_per_priority_per_cycle_fun,
           max_num_jobs_per_priority_per_cycle$3),
         _Ea_],
       _Ec_=[0,caml_call1(check_invariants_fun,check_invariants$3),_Eb_],
       _Ed_=
        [0,
         caml_call1
          (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0),
         _Ec_],
       _Ee_=[0,caml_call1(yield_fun,yield$1),_Ed_],
       _Ef_=[0,caml_call1(event_added_hook_fun,event_added_hook$0),_Ee_],
       _Eg_=[0,caml_call1(job_queued_hook_fun,job_queued_hook$0),_Ef_],
       _Eh_=
        [0,
         caml_call1
          (thread_safe_external_job_hook_fun,thread_safe_external_job_hook$0),
         _Eg_],
       _Ei_=[0,caml_call1(external_jobs_fun,external_jobs$0),_Eh_],
       _Ej_=[0,caml_call1(time_source_fun,time_source$0),_Ei_],
       _Ek_=[0,caml_call1(total_cycle_time_fun,total_cycle_time$0),_Ej_],
       _El_=[0,caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0),_Ek_],
       _Em_=[0,caml_call1(last_cycle_time_fun,last_cycle_time$0),_El_],
       _En_=
        [0,caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0),_Em_],
       _Eo_=[0,caml_call1(in_cycle_fun,in_cycle$0),_En_],
       _Ep_=[0,caml_call1(cycle_start_fun,cycle_start$0),_Eo_],
       _Eq_=[0,caml_call1(cycle_count_fun,cycle_count$0),_Ep_],
       _Er_=[0,caml_call1(uncaught_exn_fun,uncaught_exn),_Eq_],
       _Es_=
        [0,
         caml_call1(current_execution_context_fun,current_execution_context$0),
         _Er_],
       _Et_=
        [0,
         caml_call1(main_execution_context_fun,main_execution_context$0),
         _Es_],
       _Eu_=
        [0,
         caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0),
         _Et_],
       _Ev_=[0,caml_call1(low_priority_jobs_fun,low_priority_jobs$0),_Eu_],
       _Ew_=
        [0,caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0),_Ev_],
       _Ex_=[0,caml_call1(job_pool_fun,job_pool$0),_Ew_];
      return [0,caml_call1(check_access_fun,check_access$0),_Ex_]}
    function iter$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {caml_call3(check_access_fun,check_access$0,record,record[1]);
      caml_call3(job_pool_fun,job_pool$0,record,record[2]);
      caml_call3
       (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]);
      caml_call3(low_priority_jobs_fun,low_priority_jobs$0,record,record[4]);
      caml_call3
       (very_low_priority_workers_fun,
        very_low_priority_workers$0,
        record,
        record[5]);
      caml_call3
       (main_execution_context_fun,main_execution_context$0,record,record[6]);
      caml_call3
       (current_execution_context_fun,
        current_execution_context$0,
        record,
        record[7]);
      caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]);
      caml_call3(cycle_count_fun,cycle_count$0,record,record[9]);
      caml_call3(cycle_start_fun,cycle_start$0,record,record[10]);
      caml_call3(in_cycle_fun,in_cycle$0,record,record[11]);
      caml_call3
       (run_every_cycle_start_fun,run_every_cycle_start$0,record,record[12]);
      caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[13]);
      caml_call3
       (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[14]);
      caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[15]);
      caml_call3(time_source_fun,time_source$0,record,record[16]);
      caml_call3(external_jobs_fun,external_jobs$0,record,record[17]);
      caml_call3
       (thread_safe_external_job_hook_fun,
        thread_safe_external_job_hook$0,
        record,
        record[18]);
      caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[19]);
      caml_call3(event_added_hook_fun,event_added_hook$0,record,record[20]);
      caml_call3(yield_fun,yield$1,record,record[21]);
      caml_call3
       (yield_until_no_jobs_remain_fun,
        yield_until_no_jobs_remain$0,
        record,
        record[22]);
      caml_call3(check_invariants_fun,check_invariants$3,record,record[23]);
      caml_call3
       (max_num_jobs_per_priority_per_cycle_fun,
        max_num_jobs_per_priority_per_cycle$3,
        record,
        record[24]);
      caml_call3(record_backtraces_fun,record_backtraces$3,record,record[25]);
      caml_call3(on_start_of_cycle_fun,on_start_of_cycle$0,record,record[26]);
      return caml_call3
              (on_end_of_cycle_fun,on_end_of_cycle$0,record,record[27])}
    function fold$10
     (record,
      init,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _DK_=record[27],
       _DL_=record[26],
       _DM_=record[25],
       _DN_=record[24],
       _DO_=record[23],
       _DP_=record[22],
       _DQ_=record[21],
       _DR_=record[20],
       _DS_=record[19],
       _DT_=record[18],
       _DU_=record[17],
       _DV_=record[16],
       _DW_=record[15],
       _DX_=record[14],
       _DY_=record[13],
       _DZ_=record[12],
       _D0_=record[11],
       _D1_=record[10],
       _D2_=record[9],
       _D3_=record[8],
       _D4_=record[7],
       _D5_=record[6],
       _D6_=record[5],
       _D7_=record[4],
       _D8_=record[3],
       _D9_=record[2];
      return caml_call4
              (on_end_of_cycle_fun,
               caml_call4
                (on_start_of_cycle_fun,
                 caml_call4
                  (record_backtraces_fun,
                   caml_call4
                    (max_num_jobs_per_priority_per_cycle_fun,
                     caml_call4
                      (check_invariants_fun,
                       caml_call4
                        (yield_until_no_jobs_remain_fun,
                         caml_call4
                          (yield_fun,
                           caml_call4
                            (event_added_hook_fun,
                             caml_call4
                              (job_queued_hook_fun,
                               caml_call4
                                (thread_safe_external_job_hook_fun,
                                 caml_call4
                                  (external_jobs_fun,
                                   caml_call4
                                    (time_source_fun,
                                     caml_call4
                                      (total_cycle_time_fun,
                                       caml_call4
                                        (last_cycle_num_jobs_fun,
                                         caml_call4
                                          (last_cycle_time_fun,
                                           caml_call4
                                            (run_every_cycle_start_fun,
                                             caml_call4
                                              (in_cycle_fun,
                                               caml_call4
                                                (cycle_start_fun,
                                                 caml_call4
                                                  (cycle_count_fun,
                                                   caml_call4
                                                    (uncaught_exn_fun,
                                                     caml_call4
                                                      (current_execution_context_fun,
                                                       caml_call4
                                                        (main_execution_context_fun,
                                                         caml_call4
                                                          (very_low_priority_workers_fun,
                                                           caml_call4
                                                            (low_priority_jobs_fun,
                                                             caml_call4
                                                              (normal_priority_jobs_fun,
                                                               caml_call4
                                                                (job_pool_fun,
                                                                 caml_call4
                                                                  (check_access_fun,init,check_access$0,record,record[1]),
                                                                 job_pool$0,
                                                                 record,
                                                                 _D9_),
                                                               normal_priority_jobs$0,
                                                               record,
                                                               _D8_),
                                                             low_priority_jobs$0,
                                                             record,
                                                             _D7_),
                                                           very_low_priority_workers$0,
                                                           record,
                                                           _D6_),
                                                         main_execution_context$0,
                                                         record,
                                                         _D5_),
                                                       current_execution_context$0,
                                                       record,
                                                       _D4_),
                                                     uncaught_exn,
                                                     record,
                                                     _D3_),
                                                   cycle_count$0,
                                                   record,
                                                   _D2_),
                                                 cycle_start$0,
                                                 record,
                                                 _D1_),
                                               in_cycle$0,
                                               record,
                                               _D0_),
                                             run_every_cycle_start$0,
                                             record,
                                             _DZ_),
                                           last_cycle_time$0,
                                           record,
                                           _DY_),
                                         last_cycle_num_jobs$0,
                                         record,
                                         _DX_),
                                       total_cycle_time$0,
                                       record,
                                       _DW_),
                                     time_source$0,
                                     record,
                                     _DV_),
                                   external_jobs$0,
                                   record,
                                   _DU_),
                                 thread_safe_external_job_hook$0,
                                 record,
                                 _DT_),
                               job_queued_hook$0,
                               record,
                               _DS_),
                             event_added_hook$0,
                             record,
                             _DR_),
                           yield$1,
                           record,
                           _DQ_),
                         yield_until_no_jobs_remain$0,
                         record,
                         _DP_),
                       check_invariants$3,
                       record,
                       _DO_),
                     max_num_jobs_per_priority_per_cycle$3,
                     record,
                     _DN_),
                   record_backtraces$3,
                   record,
                   _DM_),
                 on_start_of_cycle$0,
                 record,
                 _DL_),
               on_end_of_cycle$0,
               record,
               _DK_)}
    function for_all$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _Dk_=caml_call3(check_access_fun,check_access$0,record,record[1]),
       _Dl_=_Dk_?caml_call3(job_pool_fun,job_pool$0,record,record[2]):_Dk_,
       _Dm_=
        _Dl_
         ?caml_call3
           (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3])
         :_Dl_,
       _Dn_=
        _Dm_
         ?caml_call3
           (low_priority_jobs_fun,low_priority_jobs$0,record,record[4])
         :_Dm_,
       _Do_=
        _Dn_
         ?caml_call3
           (very_low_priority_workers_fun,
            very_low_priority_workers$0,
            record,
            record[5])
         :_Dn_,
       _Dp_=
        _Do_
         ?caml_call3
           (main_execution_context_fun,
            main_execution_context$0,
            record,
            record[6])
         :_Do_,
       _Dq_=
        _Dp_
         ?caml_call3
           (current_execution_context_fun,
            current_execution_context$0,
            record,
            record[7])
         :_Dp_,
       _Dr_=
        _Dq_?caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]):_Dq_,
       _Ds_=
        _Dr_?caml_call3(cycle_count_fun,cycle_count$0,record,record[9]):_Dr_,
       _Dt_=
        _Ds_?caml_call3(cycle_start_fun,cycle_start$0,record,record[10]):_Ds_,
       _Du_=_Dt_?caml_call3(in_cycle_fun,in_cycle$0,record,record[11]):_Dt_,
       _Dv_=
        _Du_
         ?caml_call3
           (run_every_cycle_start_fun,
            run_every_cycle_start$0,
            record,
            record[12])
         :_Du_,
       _Dw_=
        _Dv_
         ?caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[13])
         :_Dv_,
       _Dx_=
        _Dw_
         ?caml_call3
           (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[14])
         :_Dw_,
       _Dy_=
        _Dx_
         ?caml_call3
           (total_cycle_time_fun,total_cycle_time$0,record,record[15])
         :_Dx_,
       _Dz_=
        _Dy_?caml_call3(time_source_fun,time_source$0,record,record[16]):_Dy_,
       _DA_=
        _Dz_
         ?caml_call3(external_jobs_fun,external_jobs$0,record,record[17])
         :_Dz_,
       _DB_=
        _DA_
         ?caml_call3
           (thread_safe_external_job_hook_fun,
            thread_safe_external_job_hook$0,
            record,
            record[18])
         :_DA_,
       _DC_=
        _DB_
         ?caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[19])
         :_DB_,
       _DD_=
        _DC_
         ?caml_call3
           (event_added_hook_fun,event_added_hook$0,record,record[20])
         :_DC_,
       _DE_=_DD_?caml_call3(yield_fun,yield$1,record,record[21]):_DD_,
       _DF_=
        _DE_
         ?caml_call3
           (yield_until_no_jobs_remain_fun,
            yield_until_no_jobs_remain$0,
            record,
            record[22])
         :_DE_,
       _DG_=
        _DF_
         ?caml_call3
           (check_invariants_fun,check_invariants$3,record,record[23])
         :_DF_,
       _DH_=
        _DG_
         ?caml_call3
           (max_num_jobs_per_priority_per_cycle_fun,
            max_num_jobs_per_priority_per_cycle$3,
            record,
            record[24])
         :_DG_,
       _DI_=
        _DH_
         ?caml_call3
           (record_backtraces_fun,record_backtraces$3,record,record[25])
         :_DH_,
       _DJ_=
        _DI_
         ?caml_call3
           (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[26])
         :_DI_;
      return _DJ_
              ?caml_call3
                (on_end_of_cycle_fun,on_end_of_cycle$0,record,record[27])
              :_DJ_}
    function exists$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _Dj_=caml_call3(check_access_fun,check_access$0,record,record[1]),
       _CW_=_Dj_ || caml_call3(job_pool_fun,job_pool$0,record,record[2]),
       _CX_=
        _CW_
        ||
        caml_call3
         (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]),
       _CY_=
        _CX_
        ||
        caml_call3(low_priority_jobs_fun,low_priority_jobs$0,record,record[4]),
       _CZ_=
        _CY_
        ||
        caml_call3
         (very_low_priority_workers_fun,
          very_low_priority_workers$0,
          record,
          record[5]),
       _C0_=
        _CZ_
        ||
        caml_call3
         (main_execution_context_fun,
          main_execution_context$0,
          record,
          record[6]),
       _C1_=
        _C0_
        ||
        caml_call3
         (current_execution_context_fun,
          current_execution_context$0,
          record,
          record[7]),
       _C2_=_C1_ || caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]),
       _C3_=_C2_ || caml_call3(cycle_count_fun,cycle_count$0,record,record[9]),
       _C4_=
        _C3_
        ||
        caml_call3(cycle_start_fun,cycle_start$0,record,record[10]),
       _C5_=_C4_ || caml_call3(in_cycle_fun,in_cycle$0,record,record[11]),
       _C6_=
        _C5_
        ||
        caml_call3
         (run_every_cycle_start_fun,run_every_cycle_start$0,record,record[12]),
       _C7_=
        _C6_
        ||
        caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[13]),
       _C8_=
        _C7_
        ||
        caml_call3
         (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[14]),
       _C9_=
        _C8_
        ||
        caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[15]),
       _C__=
        _C9_
        ||
        caml_call3(time_source_fun,time_source$0,record,record[16]),
       _C$_=
        _C__
        ||
        caml_call3(external_jobs_fun,external_jobs$0,record,record[17]),
       _Da_=
        _C$_
        ||
        caml_call3
         (thread_safe_external_job_hook_fun,
          thread_safe_external_job_hook$0,
          record,
          record[18]),
       _Db_=
        _Da_
        ||
        caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[19]),
       _Dc_=
        _Db_
        ||
        caml_call3(event_added_hook_fun,event_added_hook$0,record,record[20]),
       _Dd_=_Dc_ || caml_call3(yield_fun,yield$1,record,record[21]),
       _De_=
        _Dd_
        ||
        caml_call3
         (yield_until_no_jobs_remain_fun,
          yield_until_no_jobs_remain$0,
          record,
          record[22]),
       _Df_=
        _De_
        ||
        caml_call3(check_invariants_fun,check_invariants$3,record,record[23]),
       _Dg_=
        _Df_
        ||
        caml_call3
         (max_num_jobs_per_priority_per_cycle_fun,
          max_num_jobs_per_priority_per_cycle$3,
          record,
          record[24]),
       _Dh_=
        _Dg_
        ||
        caml_call3
         (record_backtraces_fun,record_backtraces$3,record,record[25]),
       _Di_=
        _Dh_
        ||
        caml_call3
         (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[26]);
      return _Di_
              ?_Di_
              :caml_call3
                (on_end_of_cycle_fun,on_end_of_cycle$0,record,record[27])}
    function to_list$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _Cw_=
        [0,
         caml_call3(on_end_of_cycle_fun,on_end_of_cycle$0,record,record[27]),
         0],
       _Cx_=
        [0,
         caml_call3
          (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[26]),
         _Cw_],
       _Cy_=
        [0,
         caml_call3
          (record_backtraces_fun,record_backtraces$3,record,record[25]),
         _Cx_],
       _Cz_=
        [0,
         caml_call3
          (max_num_jobs_per_priority_per_cycle_fun,
           max_num_jobs_per_priority_per_cycle$3,
           record,
           record[24]),
         _Cy_],
       _CA_=
        [0,
         caml_call3(check_invariants_fun,check_invariants$3,record,record[23]),
         _Cz_],
       _CB_=
        [0,
         caml_call3
          (yield_until_no_jobs_remain_fun,
           yield_until_no_jobs_remain$0,
           record,
           record[22]),
         _CA_],
       _CC_=[0,caml_call3(yield_fun,yield$1,record,record[21]),_CB_],
       _CD_=
        [0,
         caml_call3(event_added_hook_fun,event_added_hook$0,record,record[20]),
         _CC_],
       _CE_=
        [0,
         caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[19]),
         _CD_],
       _CF_=
        [0,
         caml_call3
          (thread_safe_external_job_hook_fun,
           thread_safe_external_job_hook$0,
           record,
           record[18]),
         _CE_],
       _CG_=
        [0,
         caml_call3(external_jobs_fun,external_jobs$0,record,record[17]),
         _CF_],
       _CH_=
        [0,caml_call3(time_source_fun,time_source$0,record,record[16]),_CG_],
       _CI_=
        [0,
         caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[15]),
         _CH_],
       _CJ_=
        [0,
         caml_call3
          (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[14]),
         _CI_],
       _CK_=
        [0,
         caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[13]),
         _CJ_],
       _CL_=
        [0,
         caml_call3
          (run_every_cycle_start_fun,
           run_every_cycle_start$0,
           record,
           record[12]),
         _CK_],
       _CM_=[0,caml_call3(in_cycle_fun,in_cycle$0,record,record[11]),_CL_],
       _CN_=
        [0,caml_call3(cycle_start_fun,cycle_start$0,record,record[10]),_CM_],
       _CO_=
        [0,caml_call3(cycle_count_fun,cycle_count$0,record,record[9]),_CN_],
       _CP_=
        [0,caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]),_CO_],
       _CQ_=
        [0,
         caml_call3
          (current_execution_context_fun,
           current_execution_context$0,
           record,
           record[7]),
         _CP_],
       _CR_=
        [0,
         caml_call3
          (main_execution_context_fun,
           main_execution_context$0,
           record,
           record[6]),
         _CQ_],
       _CS_=
        [0,
         caml_call3
          (very_low_priority_workers_fun,
           very_low_priority_workers$0,
           record,
           record[5]),
         _CR_],
       _CT_=
        [0,
         caml_call3
          (low_priority_jobs_fun,low_priority_jobs$0,record,record[4]),
         _CS_],
       _CU_=
        [0,
         caml_call3
          (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]),
         _CT_],
       _CV_=[0,caml_call3(job_pool_fun,job_pool$0,record,record[2]),_CU_];
      return [0,
              caml_call3(check_access_fun,check_access$0,record,record[1]),
              _CV_]}
    function map$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_fun,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_cycle_fun,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _B8_=
        caml_call3(on_end_of_cycle_fun,on_end_of_cycle$0,record,record[27]),
       _B9_=
        caml_call3
         (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[26]),
       _B__=
        caml_call3
         (record_backtraces_fun,record_backtraces$3,record,record[25]),
       _B$_=
        caml_call3
         (max_num_jobs_per_priority_per_cycle_fun,
          max_num_jobs_per_priority_per_cycle$3,
          record,
          record[24]),
       _Ca_=
        caml_call3(check_invariants_fun,check_invariants$3,record,record[23]),
       _Cb_=
        caml_call3
         (yield_until_no_jobs_remain_fun,
          yield_until_no_jobs_remain$0,
          record,
          record[22]),
       _Cc_=caml_call3(yield_fun,yield$1,record,record[21]),
       _Cd_=
        caml_call3(event_added_hook_fun,event_added_hook$0,record,record[20]),
       _Ce_=
        caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[19]),
       _Cf_=
        caml_call3
         (thread_safe_external_job_hook_fun,
          thread_safe_external_job_hook$0,
          record,
          record[18]),
       _Cg_=caml_call3(external_jobs_fun,external_jobs$0,record,record[17]),
       _Ch_=caml_call3(time_source_fun,time_source$0,record,record[16]),
       _Ci_=
        caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[15]),
       _Cj_=
        caml_call3
         (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[14]),
       _Ck_=
        caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[13]),
       _Cl_=
        caml_call3
         (run_every_cycle_start_fun,run_every_cycle_start$0,record,record[12]),
       _Cm_=caml_call3(in_cycle_fun,in_cycle$0,record,record[11]),
       _Cn_=caml_call3(cycle_start_fun,cycle_start$0,record,record[10]),
       _Co_=caml_call3(cycle_count_fun,cycle_count$0,record,record[9]),
       _Cp_=caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]),
       _Cq_=
        caml_call3
         (current_execution_context_fun,
          current_execution_context$0,
          record,
          record[7]),
       _Cr_=
        caml_call3
         (main_execution_context_fun,
          main_execution_context$0,
          record,
          record[6]),
       _Cs_=
        caml_call3
         (very_low_priority_workers_fun,
          very_low_priority_workers$0,
          record,
          record[5]),
       _Ct_=
        caml_call3(low_priority_jobs_fun,low_priority_jobs$0,record,record[4]),
       _Cu_=
        caml_call3
         (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]),
       _Cv_=caml_call3(job_pool_fun,job_pool$0,record,record[2]);
      return [0,
              caml_call3(check_access_fun,check_access$0,record,record[1]),
              _Cv_,
              _Cu_,
              _Ct_,
              _Cs_,
              _Cr_,
              _Cq_,
              _Cp_,
              _Co_,
              _Cn_,
              _Cm_,
              _Cl_,
              _Ck_,
              _Cj_,
              _Ci_,
              _Ch_,
              _Cg_,
              _Cf_,
              _Ce_,
              _Cd_,
              _Cc_,
              _Cb_,
              _Ca_,
              _B$_,
              _B__,
              _B9_,
              _B8_]}
    function set_all_mutable_fields$4
     (record,
      check_access,
      job_pool,
      main_execution_context,
      current_execution_context,
      uncaught_exn,
      cycle_count,
      cycle_start,
      in_cycle,
      run_every_cycle_start,
      last_cycle_time,
      last_cycle_num_jobs,
      total_cycle_time,
      time_source,
      thread_safe_external_job_hook,
      job_queued_hook,
      event_added_hook,
      yield$0,
      yield_until_no_jobs_remain,
      check_invariants,
      max_num_jobs_per_priority_per_cycle,
      record_backtraces,
      on_start_of_cycle,
      on_end_of_cycle)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = check_access;
      record$0[2] = job_pool;
      record$0[6] = main_execution_context;
      record$0[7] = current_execution_context;
      record$0[8] = uncaught_exn;
      record$0[9] = cycle_count;
      record$0[10] = cycle_start;
      record$0[11] = in_cycle;
      record$0[12] = run_every_cycle_start;
      record$0[13] = last_cycle_time;
      record$0[14] = last_cycle_num_jobs;
      record$0[15] = total_cycle_time;
      record$0[16] = time_source;
      record$0[18] = thread_safe_external_job_hook;
      record$0[19] = job_queued_hook;
      record$0[20] = event_added_hook;
      record$0[21] = yield$0;
      record$0[22] = yield_until_no_jobs_remain;
      record$0[23] = check_invariants;
      record$0[24] = max_num_jobs_per_priority_per_cycle;
      record$0[25] = record_backtraces;
      record$0[26] = on_start_of_cycle;
      record$0[27] = on_end_of_cycle;
      return 0}
    var
     Direct$4=
      [0,
       iter$10,
       fold$10,
       for_all$10,
       exists$10,
       to_list$10,
       map$10,
       set_all_mutable_fields$4],
     Fields$4=
      [0,
       names$4,
       on_end_of_cycle$0,
       on_start_of_cycle$0,
       record_backtraces$3,
       max_num_jobs_per_priority_per_cycle$3,
       check_invariants$3,
       yield_until_no_jobs_remain$0,
       yield$1,
       event_added_hook$0,
       job_queued_hook$0,
       thread_safe_external_job_hook$0,
       external_jobs$0,
       time_source$0,
       total_cycle_time$0,
       last_cycle_num_jobs$0,
       last_cycle_time$0,
       run_every_cycle_start$0,
       in_cycle$0,
       cycle_start$0,
       cycle_count$0,
       uncaught_exn,
       current_execution_context$0,
       main_execution_context$0,
       very_low_priority_workers$0,
       low_priority_jobs$0,
       normal_priority_jobs$0,
       job_pool$0,
       check_access$0,
       make_creator$4,
       create$9,
       map$9,
       iter$9,
       fold$9,
       map_poly$4,
       for_all$9,
       exists$9,
       to_list$9,
       Direct$4];
    function sexp_of_t$31(param)
     {var
       v_check_access=param[1],
       v_job_pool=param[2],
       v_very_low_priority_workers=param[5],
       v_low_priority_jobs=param[4],
       v_normal_priority_jobs=param[3],
       v_main_execution_context=param[6],
       v_current_execution_context=param[7],
       v_uncaught_exn=param[8],
       v_cycle_count=param[9],
       v_cycle_start=param[10],
       v_in_cycle=param[11],
       v_run_every_cycle_start=param[12],
       v_last_cycle_time=param[13],
       v_last_cycle_num_jobs=param[14],
       v_total_cycle_time=param[15],
       v_time_source=param[16],
       v_external_jobs=param[17],
       v_job_queued_hook=param[19],
       v_event_added_hook=param[20],
       v_yield=param[21],
       v_yield_until_no_jobs_remain=param[22],
       v_check_invariants=param[23],
       v_max_num_jobs_per_priority_per_cycle=param[24],
       v_record_backtraces=param[25],
       bnds=0;
      function _BP_(_B7_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_BP_),
       bnds$0=[0,[1,[0,_g0_,[0,arg,0]]],bnds];
      function _BQ_(_B6_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_BQ_),
       bnds$1=[0,[1,[0,_g1_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Core_kernel[291],v_record_backtraces),
       bnds$2=[0,[1,[0,_g2_,[0,arg$1,0]]],bnds$1],
       arg$2=
        caml_call1
         (Max_num_jobs_per_priority_per_cycle[2],
          v_max_num_jobs_per_priority_per_cycle),
       bnds$3=[0,[1,[0,_g3_,[0,arg$2,0]]],bnds$2],
       arg$3=caml_call1(Core_kernel[291],v_check_invariants),
       bnds$4=[0,[1,[0,_g4_,[0,arg$3,0]]],bnds$3],
       arg$4=caml_call1(Sexplib0_Sexp_conv[23],v_yield_until_no_jobs_remain),
       bnds$5=[0,[1,[0,_g5_,[0,arg$4,0]]],bnds$4],
       arg$5=caml_call1(Sexplib0_Sexp_conv[23],v_yield),
       bnds$6=[0,[1,[0,_g6_,[0,arg$5,0]]],bnds$5];
      function _BR_(f)
       {function _B4_(_B5_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_B4_)}
      var
       arg$6=caml_call2(Core_kernel[431],_BR_,v_event_added_hook),
       bnds$7=[0,[1,[0,_g7_,[0,arg$6,0]]],bnds$6];
      function _BS_(f)
       {function _B2_(_B3_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_B2_)}
      var
       arg$7=caml_call2(Core_kernel[431],_BS_,v_job_queued_hook),
       bnds$8=[0,[1,[0,_g8_,[0,arg$7,0]]],bnds$7];
      function _BT_(_B1_){return 0}
      var
       arg$8=caml_call1(Sexplib0_Sexp_conv[24],_BT_),
       bnds$9=[0,[1,[0,_g9_,[0,arg$8,0]]],bnds$8],
       arg$9=caml_call2(Thread_safe_queue[1],sexp_of_t$14,v_external_jobs),
       bnds$10=[0,[1,[0,_g__,[0,arg$9,0]]],bnds$9],
       arg$10=caml_call2(include$11[17],Core_kernel[190],v_time_source),
       bnds$11=[0,[1,[0,_g$_,[0,arg$10,0]]],bnds$10],
       arg$11=caml_call1(_a_[10],v_total_cycle_time),
       bnds$12=[0,[1,[0,_ha_,[0,arg$11,0]]],bnds$11],
       arg$12=caml_call1(Core_kernel[339],v_last_cycle_num_jobs),
       bnds$13=[0,[1,[0,_hb_,[0,arg$12,0]]],bnds$12],
       arg$13=caml_call1(_a_[10],v_last_cycle_time),
       bnds$14=[0,[1,[0,_hc_,[0,arg$13,0]]],bnds$13];
      function _BU_(f)
       {function _BZ_(_B0_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_BZ_)}
      var
       arg$14=caml_call2(Core_kernel[400],_BU_,v_run_every_cycle_start),
       bnds$15=[0,[1,[0,_hd_,[0,arg$14,0]]],bnds$14],
       arg$15=caml_call1(Core_kernel[291],v_in_cycle),
       bnds$16=[0,[1,[0,_he_,[0,arg$15,0]]],bnds$15],
       arg$16=caml_call1(_aI_,v_cycle_start),
       bnds$17=[0,[1,[0,_hf_,[0,arg$16,0]]],bnds$16],
       arg$17=caml_call1(Core_kernel[339],v_cycle_count),
       bnds$18=[0,[1,[0,_hg_,[0,arg$17,0]]],bnds$17];
      function _BV_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Base_Exn[1],v0),
         v1$0=caml_call1(Core_kernel_Sexp[88],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$18=caml_call2(Core_kernel[431],_BV_,v_uncaught_exn),
       bnds$19=[0,[1,[0,_hh_,[0,arg$18,0]]],bnds$18],
       arg$19=sexp_of_t$13(v_current_execution_context),
       bnds$20=[0,[1,[0,_hi_,[0,arg$19,0]]],bnds$19],
       arg$20=sexp_of_t$13(v_main_execution_context),
       bnds$21=[0,[1,[0,_hj_,[0,arg$20,0]]],bnds$20],
       arg$21=
        caml_call2
         (Core_kernel_Deque[10],
          Very_low_priority_worker$0[5],
          v_very_low_priority_workers),
       bnds$22=[0,[1,[0,_hk_,[0,arg$21,0]]],bnds$21],
       arg$22=sexp_of_t$17(v_low_priority_jobs),
       bnds$23=[0,[1,[0,_hl_,[0,arg$22,0]]],bnds$22],
       arg$23=sexp_of_t$17(v_normal_priority_jobs),
       bnds$24=[0,[1,[0,_hm_,[0,arg$23,0]]],bnds$23],
       arg$24=sexp_of_t$15(v_job_pool),
       bnds$25=[0,[1,[0,_hn_,[0,arg$24,0]]],bnds$24];
      function _BW_(f)
       {function _BX_(_BY_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_BX_)}
      var
       arg$25=caml_call2(Core_kernel[431],_BW_,v_check_access),
       bnds$26=[0,[1,[0,_ho_,[0,arg$25,0]]],bnds$25];
      return [1,bnds$26]}
    function uncaught_exn$0(t)
     {var _BN_=t[8];
      if(_BN_)
       {var
         match=_BN_[1],
         sexp=match[2],
         exn=match[1],
         _BO_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Base_Exn[1],v0),
             v1$0=caml_call1(Core_kernel_Sexp[88],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]};
        return [0,
                caml_call5
                 (Core_kernel_Error[15],
                  0,
                  0,
                  cst_unhandled_exception,
                  [0,exn,sexp],
                  _BO_)]}
      return 0}
    function num_pending_jobs(t){return t[3][6] + t[4][6] | 0}
    function num_jobs_run$1(t){return t[3][1] + t[4][1] | 0}
    function invariant$6(t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _AP_=function(_BM_){return 0},
         _AQ_=function(_BL_){return 0},
         _AR_=function(_BK_){return 0},
         _AS_=function(_BJ_){return 0},
         _AT_=function(_BI_){return 0},
         _AU_=function(_BH_){return 0},
         _AV_=function(_BG_){return 0},
         _AW_=function(_BF_){return 0},
         _AX_=function(_BE_){return 0},
         _AY_=function(_BD_){return 0},
         _AZ_=function(_BC_){return 0},
         _A0_=
          function(job)
           {if(caml_call2(Tuple_pool[6],t[2],job))return 0;
            throw [0,Assert_failure,_hr_]},
         _A1_=caml_call1(Read_write[3],_A0_),
         _A2_=function(_BB_){return check(_A1_,_BB_)},
         _A3_=function(_BA_){return 0},
         _A4_=
          function(last_cycle_num_jobs)
           {if(caml_call2(symbol$0,last_cycle_num_jobs,0))return 0;
            throw [0,Assert_failure,_hs_]},
         _A5_=function(_Bz_){return check(_A4_,_Bz_)},
         _A6_=function(_By_){return 0},
         _A7_=function(_Bx_){return 0},
         _A8_=function(_Bw_){return 0},
         _A9_=function(_Bv_){return 0},
         _A__=
          function(cycle_count)
           {if(caml_call2(symbol$0,cycle_count,0))return 0;
            throw [0,Assert_failure,_ht_]},
         _A$_=function(_Bu_){return check(_A__,_Bu_)},
         _Ba_=
          function(uncaught_exn)
           {var _Bt_=caml_call1(Core_kernel[231],uncaught_exn);
            if(_Bt_)
             {if(caml_call2(symbol$2,num_pending_jobs(t),0))return 0;
              throw [0,Assert_failure,_hu_]}
            return _Bt_},
         _Bb_=function(_Bs_){return check(_Ba_,_Bs_)},
         _Bc_=function(_Br_){return check(f,_Br_)},
         _Bd_=function(_Bq_){return check(f,_Bq_)},
         _Be_=
          function(q)
           {return caml_call2
                    (Core_kernel_Deque[16],q,Very_low_priority_worker$0[6])},
         _Bf_=function(_Bp_){return check(_Be_,_Bp_)},
         _Bg_=function(_Bo_){return check(invariant$0,_Bo_)},
         _Bh_=function(_Bn_){return check(invariant$0,_Bn_)},
         _Bi_=function(_Bm_){return check(invariant,_Bm_)},
         _Bj_=function(_Bl_){return 0},
         _Bk_=
          caml_call27
           (Fields$4[32],
            _Bj_,
            _Bi_,
            _Bh_,
            _Bg_,
            _Bf_,
            _Bd_,
            _Bc_,
            _Bb_,
            _A$_,
            _A9_,
            _A8_,
            _A7_,
            _A6_,
            _A5_,
            _A3_,
            _A2_,
            _AZ_,
            _AY_,
            _AX_,
            _AW_,
            _AV_,
            _AU_,
            _AT_,
            _AS_,
            _AR_,
            _AQ_,
            _AP_);
        return _Bk_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _AM_=[0,[1,[0,_hp_,[0,sexp_of_t$31(t),0]]],0],
         _AN_=[0,[1,[0,_hq_,[0,caml_call1(Core_kernel[508],exn),0]]],_AM_],
         _AO_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Scheduler_invariant_failed),
            _AN_]];
        return caml_call1(Core_kernel[241],_AO_)}}
    function free_job(t,job){return caml_call2(Tuple_pool[15],t[2],job)}
    function enqueue$0(t,execution_context,f,a)
     {var _AJ_=caml_call1(Core_kernel[230],t[8]);
      if(_AJ_)
       {var priority=execution_context[2],job_queue=0 === priority?t[3]:t[4];
        enqueue(job_queue,execution_context,f,a);
        var _AK_=t[19];
        if(_AK_){var f$0=_AK_[1];return caml_call1(f$0,priority)}
        var _AL_=0}
      else
       var _AL_=_AJ_;
      return _AL_}
    function enqueue_job(t,job,free_job)
     {var
       job_pool=t[2],
       _AH_=caml_call3(Tuple_pool[32],job_pool,job,Tuple_pool[2][5]),
       _AI_=caml_call3(Tuple_pool[32],job_pool,job,Tuple_pool[2][4]);
      enqueue$0
       (t,caml_call3(Tuple_pool[32],job_pool,job,Tuple_pool[2][3]),_AI_,_AH_);
      return free_job?caml_call2(Tuple_pool[15],t[2],job):free_job}
    function handle_fired$1(time_source,job_or_event)
     {var
       match=caml_call1(include$11[2][5][1],job_or_event),
       k=match[1],
       match$0=caml_call2(include$11[2][5][2],k,job_or_event);
      return 0 === k
              ?fire(time_source,match$0)
              :enqueue_job(time_source[9],match$0,1)}
    function create$10(param)
     {var
       now=caml_call1(_ah_,0),
       t=[],
       time_source=[],
       events=caml_call2(Timing_wheel[9],timing_wheel_config$1,now);
      function _An_(_AG_){return _AG_}
      function _Ao_(_AF_){return _AF_}
      var
       _Ap_=caml_call1(Bvar$0[1],0),
       _Aq_=caml_call1(Bvar$0[1],0),
       _Ar_=0,
       _As_=0;
      function _At_(_AE_){return 0}
      var
       _Au_=caml_call1(Thread_safe_queue[3],0),
       _Av_=caml_call1(sec$0,0.),
       _Aw_=caml_call1(sec$0,0.),
       _Ax_=caml_call3(Core_kernel_Deque[30],0,0,0),
       _Ay_=create$2(0),
       _Az_=create$2(0);
      caml_update_dummy
       (t,
        [0,
         0,
         create$1(0),
         _Az_,
         _Ay_,
         _Ax_,
         dummy_e,
         dummy_e,
         0,
         0,
         now,
         0,
         0,
         _Aw_,
         0,
         _Av_,
         time_source,
         _Au_,
         _At_,
         _As_,
         _Ar_,
         _Aq_,
         _Ap_,
         check_invariants$1,
         max_num_jobs_per_priority_per_cycle$1,
         record_backtraces$1,
         _Ao_,
         _An_]);
      var _AA_=1;
      function _AB_(alarm)
       {return handle_fired$1
                (time_source,caml_call2(Timing_wheel[5][5],events,alarm))}
      var _AC_=Event$1[13],_AD_=Event$1[13];
      caml_update_dummy
       (time_source,
        [0,caml_call1(Time_source_id[45],0),0,0,events,_AD_,_AC_,_AB_,_AA_,t]);
      return t}
    function is_dead(t){return caml_call1(Core_kernel[231],t[8])}
    function set_check_access$0(t,f){t[1] = f;return 0}
    var match$1=caml_call1(Core_kernel_Result[43],create$10);
    if(0 === match$1[0])
     var t$4=match$1[1],_hv_=[0,t$4];
    else
     {var exn=match$1[1];
      log(cst_Async_cannot_create_its_raw_scheduler,exn,Core_kernel[508]);
      var _hv_=caml_call1(Core_kernel[83],1)}
    function check_access$1(t)
     {var _Am_=t[1];if(_Am_){var f=_Am_[1];return caml_call1(f,0)}return 0}
    function t$5(param){var t=_hv_[1];check_access$1(t);return t}
    function current_execution_context$1(t)
     {return t[25]?record_backtrace(t[7]):t[7]}
    function with_execution_context(t,tmp_context,f)
     {var old_context=current_execution_context$1(t);
      set_execution_context(t,tmp_context);
      function _Al_(param){return set_execution_context(t,old_context)}
      return caml_call2(Core_kernel[239],f,_Al_)}
    function create_job(t,execution_context,f,a)
     {if(caml_call1(Tuple_pool[14],t[2]))
       t[2] = caml_call2(Tuple_pool[13],0,t[2]);
      return caml_call4(Tuple_pool[19],t[2],execution_context,f,a)}
    function got_uncaught_exn(t,exn,sexp)
     {if(_cM_)
       log
        (cst_got_uncaught_exn,
         [0,exn,sexp],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=caml_call1(Base_Exn[1],v0),
            v1$0=caml_call1(Core_kernel_Sexp[88],v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      caml_call2(Core_kernel_List[8],[0,t[3],[0,t[4],0]],clear);
      t[8] = [0,[0,exn,sexp]];
      return 0}
    function start_cycle(t,max_num_jobs_per_priority)
     {var
       n=
        caml_call1
         (Max_num_jobs_per_priority_per_cycle[5],max_num_jobs_per_priority);
      set_jobs_left_this_cycle$0(t[3],n);
      return set_jobs_left_this_cycle$0(t[4],n)}
    function run_jobs$0(t)
     {for(;;)
       {var e=run_jobs(t[3],t);
        if(0 === e[0])
         {var e$0=run_jobs(t[4],t);
          if(0 === e$0[0])
           {if(! can_run_a_job(t[3]))if(! can_run_a_job(t[4]))return _hw_;
            continue}
          return e$0}
        return e}}
    function stabilize(t)
     {start_cycle
       (t,
        caml_call1(Max_num_jobs_per_priority_per_cycle[4],Core_kernel_Int[61]));
      var match=run_jobs$0(t);
      if(0 === match[0])return _hx_;
      var match$0=match[1],exn=match$0[1];
      return [1,exn]}
    function create$11(opt,now,param)
     {if(opt)
       var sth=opt[1],timing_wheel_config=sth;
      else
       var timing_wheel_config=timing_wheel_config$1;
      var
       t=t$5(0),
       events=caml_call2(Timing_wheel[9],timing_wheel_config,now),
       time_source=[],
       _Ah_=0;
      function _Ai_(alarm)
       {return handle_fired$1
                (time_source,caml_call2(Timing_wheel[5][5],events,alarm))}
      var _Aj_=Event$1[13],_Ak_=Event$1[13];
      caml_update_dummy
       (time_source,
        [0,caml_call1(Time_source_id[45],0),0,0,events,_Ak_,_Aj_,_Ai_,_Ah_,t]);
      return time_source}
    function wall_clock(param){return t$5(0)[16]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Scheduler1=
      [0,
       events,
       set_execution_context,
       _cM_,
       Ivar$0,
       Bvar$0,
       Very_low_priority_worker$0,
       on_end_of_cycle,
       set_on_end_of_cycle,
       on_start_of_cycle,
       set_on_start_of_cycle,
       record_backtraces$2,
       set_record_backtraces,
       max_num_jobs_per_priority_per_cycle$2,
       set_max_num_jobs_per_priority_per_cycle,
       check_invariants$2,
       set_check_invariants,
       yield_until_no_jobs_remain,
       set_yield_until_no_jobs_remain,
       yield$0,
       set_yield,
       event_added_hook,
       set_event_added_hook,
       job_queued_hook,
       set_job_queued_hook,
       thread_safe_external_job_hook,
       set_thread_safe_external_job_hook,
       external_jobs,
       time_source,
       set_time_source,
       total_cycle_time,
       set_total_cycle_time,
       last_cycle_num_jobs,
       set_last_cycle_num_jobs,
       last_cycle_time,
       set_last_cycle_time,
       run_every_cycle_start,
       set_run_every_cycle_start,
       in_cycle,
       set_in_cycle,
       cycle_start,
       set_cycle_start,
       cycle_count,
       set_cycle_count,
       set_uncaught_exn,
       set_current_execution_context,
       main_execution_context,
       set_main_execution_context,
       very_low_priority_workers,
       low_priority_jobs,
       normal_priority_jobs,
       job_pool,
       set_job_pool,
       Fields$4,
       sexp_of_t$31,
       uncaught_exn_unwrapped,
       uncaught_exn$0,
       num_pending_jobs,
       num_jobs_run$1,
       invariant$6,
       free_job,
       enqueue$0,
       enqueue_job,
       handle_fired$1,
       create$10,
       is_dead,
       set_check_access$0,
       _hv_,
       check_access$1,
       t$5,
       current_execution_context$1,
       with_execution_context,
       create_job,
       got_uncaught_exn,
       start_cycle,
       run_jobs$0,
       stabilize,
       create$11,
       wall_clock];
    caml_register_global
     (1212,Async_kernel_Scheduler1,"Async_kernel__Scheduler1");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$50);
    caml_call1(Expect_test_collector[4][1],cst_src_ivar0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$51,cst$20);
    function set_prev(param,x){param[3] = x;return 0}
    function set_next(param,x){param[4] = x;return 0}
    function create$12(run,execution_context)
     {var t=[0,run,execution_context,0,0];
      set_prev(t,t);
      set_next(t,t);
      return t}
    function create2(run1,execution_context1,run2,execution_context2)
     {var
       t1=[0,run1,execution_context1,0,0],
       t2=[0,run2,execution_context2,t1,t1];
      set_prev(t1,t2);
      set_next(t1,t2);
      return t1}
    function length$2(t)
     {var n=[0,1],r=[0,t[4]];
      for(;;)
       {if(caml_call2(Core_kernel[234],r[1],t))return n[1];
        n[1]++;
        r[1] = r[1][4];
        continue}}
    function enqueue$1(t,scheduler,v){return enqueue$0(scheduler,t[2],t[1],v)}
    function schedule_jobs(t,v)
     {var scheduler=t$5(0);
      enqueue$1(t,scheduler,v);
      var r=[0,t[4]];
      for(;;)
       {if(caml_call2(Core_kernel[234],r[1],t))return 0;
        enqueue$1(r[1],scheduler,v);
        r[1] = r[1][4];
        continue}}
    function add$0(t,run,execution_context)
     {var result=[0,run,execution_context,t[3],t];
      set_next(t[3],result);
      set_prev(t,result);
      return result}
    function of_list(l)
     {if(l)
       {var
         l$0=l[2],
         match=l[1],
         execution_context=match[2],
         run=match[1],
         prev=create$12(run,execution_context),
         prev$0=prev,
         l$1=l$0;
        for(;;)
         {if(l$1)
           {var
             l$2=l$1[2],
             match$0=l$1[1],
             execution_context$0=match$0[2],
             run$0=match$0[1],
             t=[0,run$0,execution_context$0,prev$0,prev];
            set_next(prev$0,t);
            var prev$0=t,l$1=l$2;
            continue}
          set_prev(prev,prev$0);
          return [0,prev]}}
      return 0}
    function to_list$11(first)
     {var t=first[3],acc=0;
      for(;;)
       {var acc$0=[0,[0,t[1],t[2]],acc];
        if(caml_call2(Core_kernel[234],t,first))return acc$0;
        var t$0=t[3],t=t$0,acc=acc$0;
        continue}}
    function sexp_of_t$32(param,t)
     {var execution_context=t[2];
      return [1,[0,_hz_,[0,sexp_of_t$13(execution_context),0]]]}
    function cell_of_handler(x){return x}
    function equal$2(t$0,t){return caml_call2(Core_kernel[234],t$0,t)}
    function indir(t){return [0,[3,t]]}
    var
     create_with_cell$0=Ivar$0[1],
     create$13=Ivar$0[2],
     create_full$0=Ivar$0[3];
    function squash(t$3)
     {var _Af_=t$3[1];
      if(typeof _Af_ !== "number" && 3 === _Af_[0])
       {var t$4=_Af_[1],_Ag_=t$4[1];
        if(typeof _Ag_ !== "number" && 3 === _Ag_[0])
         {var t$5=_Ag_[1],indir=_Ag_,t=t$5;
          for(;;)
           {var _Ad_=t[1];
            if(typeof _Ad_ !== "number" && 3 === _Ad_[0])
             {var t$0=_Ad_[1],indir=_Ad_,t=t$0;continue}
            var t$1=t$3;
            for(;;)
             {var _Ae_=t$1[1];
              if(typeof _Ae_ !== "number" && 3 === _Ae_[0])
               {var t$2=_Ae_[1];t$1[1] = indir;var t$1=t$2;continue}
              return t$1}}}
        return t$4}
      return t$3}
    function invariant$7(a_invariant,t)
     {var t$0=squash(t),_Ac_=t$0[1];
      if(typeof _Ac_ === "number")
       return 0;
      else
       switch(_Ac_[0])
        {case 0:
          var r=[0,_Ac_[4]];
          for(;;)
           {if(caml_call2(Core_kernel[234],r[1],_Ac_))return 0;
            var t1=r[1];
            if(caml_call2(Core_kernel[234],t1[4][3],t1))
             {r[1] = r[1][4];continue}
            throw [0,Assert_failure,_hy_]}
         case 1:return 0;
         case 2:var a=_Ac_[1];return caml_call1(a_invariant,a);
         default:throw [0,Assert_failure,_hA_]}}
    function sexp_of_t$33(sexp_of_a,t)
     {var t$0=squash(t),_Ab_=t$0[1];
      if(typeof _Ab_ !== "number")
       switch(_Ab_[0])
        {case 2:
          var a=_Ab_[1];return [1,[0,_hC_,[0,caml_call1(sexp_of_a,a),0]]];
         case 3:throw [0,Assert_failure,_hD_]
         }
      return _hB_}
    function peek(t)
     {var t$0=squash(t),_Aa_=t$0[1];
      if(typeof _Aa_ !== "number")
       switch(_Aa_[0])
        {case 2:var a=_Aa_[1];return [0,a];
         case 3:throw [0,Assert_failure,_hE_]
         }
      return 0}
    function value$0(t,if_empty_then_failwith)
     {var t$0=squash(t),_z$_=t$0[1];
      if(typeof _z$_ !== "number")
       switch(_z$_[0])
        {case 2:var a=_z$_[1];return a;case 3:throw [0,Assert_failure,_hF_]}
      return caml_call1(Core_kernel[6],if_empty_then_failwith)}
    function value_exn(t)
     {return value$0(t,cst_Ivar_value_exn_called_on_empty_ivar)}
    function is_empty(t)
     {var t$0=squash(t),_z__=t$0[1];
      if(typeof _z__ !== "number")
       switch(_z__[0]){case 2:return 0;case 3:throw [0,Assert_failure,_hG_]}
      return 1}
    function is_full(t){return 1 - is_empty(t)}
    function fill(t,v)
     {var t$0=squash(t),_z5_=t$0[1];
      if(typeof _z5_ === "number")
       {t$0[1] = [2,v];return 0}
      else
       switch(_z5_[0])
        {case 0:t$0[1] = [2,v];return schedule_jobs(_z5_,v);
         case 1:
          var execution_context=_z5_[2],run=_z5_[1];
          t$0[1] = [2,v];
          return enqueue$0(t$5(0),execution_context,run,v);
         case 2:
          var
           _z6_=0,
           _z7_=0,
           _z8_=
            [0,
             [1,
              [0,_hI_,[0,sexp_of_t$33(function(param){return _hH_},t$0),_z7_]]],
             _z6_],
           _z9_=
            [1,
             [0,
              caml_call1(Sexplib0_Sexp_conv[7],cst_Ivar_fill_of_full_ivar),
              _z8_]];
          return caml_call1(Core_kernel[241],_z9_);
         default:throw [0,Assert_failure,_hJ_]}}
    function remove_handler(t,handler)
     {function x(_z4_){return 0}
      handler[1] = x;
      var t$0=squash(t),_z3_=t$0[1];
      if(typeof _z3_ !== "number")
       switch(_z3_[0])
        {case 0:
          if(caml_call2(Core_kernel[234],handler,handler[4]))
           {t$0[1] = 0;return 0}
          if(caml_call2(Core_kernel[234],handler,_z3_))t$0[1] = handler[4];
          set_prev(handler[4],handler[3]);
          set_next(handler[3],handler[4]);
          set_prev(handler,handler);
          return set_next(handler,handler);
         case 2:return 0;
         case 3:throw [0,Assert_failure,_hK_]
         }
      return 0}
    function add_handler(t,run,execution_context)
     {var t$0=squash(t),_z2_=t$0[1];
      if(typeof _z2_ === "number")
       {var handler=create$12(run,execution_context);
        t$0[1] = handler;
        return handler}
      else
       switch(_z2_[0])
        {case 0:return add$0(_z2_,run,execution_context);
         case 1:
          var
           execution_context$0=_z2_[2],
           run$0=_z2_[1],
           handler$0=create2(run,execution_context,run$0,execution_context$0);
          t$0[1] = handler$0;
          return handler$0;
         case 2:
          var
           v=_z2_[1],
           handler$1=create$12(run,execution_context),
           run$1=function(v){return caml_call1(handler$1[1],v)};
          enqueue$0(t$5(0),execution_context,run$1,v);
          return handler$1;
         default:throw [0,Assert_failure,_hL_]}}
    function has_handlers(t)
     {var t$0=squash(t),_z1_=t$0[1];
      if(typeof _z1_ !== "number")
       switch(_z1_[0])
        {case 3:throw [0,Assert_failure,_hM_];case 2:break;default:return 1}
      return 0}
    function upon(t,run)
     {return add_handler(t,run,current_execution_context$1(t$5(0)))}
    function upon$0(t,run)
     {var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler),
       t$0=squash(t),
       _z0_=t$0[1];
      if(typeof _z0_ === "number")
       {t$0[1] = [1,run,execution_context];return 0}
      else
       switch(_z0_[0])
        {case 0:add$0(_z0_,run,execution_context);return 0;
         case 1:
          var execution_context$0=_z0_[2],run$0=_z0_[1];
          t$0[1] = create2(run,execution_context,run$0,execution_context$0);
          return 0;
         case 2:
          var v=_z0_[1];return enqueue$0(scheduler,execution_context,run,v);
         default:throw [0,Assert_failure,_hN_]}}
    function connect(bind_result,bind_rhs)
     {var _zW_=1 - caml_call2(Core_kernel[234],bind_result,bind_rhs);
      if(_zW_)
       {var
         bind_result$0=squash(bind_result),
         indir=[3,bind_result$0],
         ivar=bind_rhs;
        for(;;)
         {var cell=ivar[1];
          if(typeof cell === "number")
           var switch$0=0;
          else
           switch(cell[0])
            {case 2:var switch$0=1;break;
             case 3:
              var ivar$0=cell[1];ivar[1] = indir;var ivar=ivar$0;continue;
             default:var switch$0=0}
          if(! switch$0)
           if(1 - caml_call2(Core_kernel[234],ivar,bind_result$0))
            ivar[1] = indir;
          var _zX_=bind_result$0[1];
          if(typeof _zX_ === "number")
           var switch$1=0;
          else
           switch(_zX_[0])
            {case 0:
              if(typeof cell === "number")
               var switch$1=1;
              else
               switch(cell[0])
                {case 0:
                  var last1=_zX_[3],last2=cell[3];
                  set_next(last1,cell);
                  set_next(last2,_zX_);
                  set_prev(_zX_,last2);
                  return set_prev(cell,last1);
                 case 1:
                  var execution_context2=cell[2],run2=cell[1];
                  add$0(_zX_,run2,execution_context2);
                  return 0;
                 case 2:
                  var v=cell[1];
                  bind_result$0[1] = cell;
                  return schedule_jobs(_zX_,v);
                 default:var switch$1=0}
              break;
             case 1:
              var _zY_=_zX_[2],_zZ_=_zX_[1];
              if(typeof cell === "number")
               var switch$1=1;
              else
               switch(cell[0])
                {case 0:
                  var handler1=add$0(cell,_zZ_,_zY_);
                  bind_result$0[1] = handler1;
                  return 0;
                 case 1:
                  var
                   execution_context2$0=cell[2],
                   run2$0=cell[1],
                   handler1$0=create2(_zZ_,_zY_,run2$0,execution_context2$0);
                  bind_result$0[1] = handler1$0;
                  return 0;
                 case 2:
                  var v$0=cell[1];
                  bind_result$0[1] = cell;
                  return enqueue$0(t$5(0),_zY_,_zZ_,v$0);
                 default:var switch$1=0}
              break;
             case 2:var switch$1=0;break;
             default:var switch$1=2}
          switch(switch$1)
           {case 0:
             if(typeof cell === "number")
              var switch$3=1;
             else
              if(3 === cell[0])var switch$2=1,switch$3=0;else var switch$3=1;
             if(switch$3)
              {if(typeof _zX_ !== "number")throw [0,Assert_failure,_hO_];
               var switch$2=0}
             break;
            case 1:var switch$2=0;break;
            default:var switch$2=1}
          if(switch$2)throw [0,Assert_failure,_hP_];
          return typeof cell === "number"?0:(bind_result$0[1] = cell,0)}}
      return _zW_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _hQ_=[0,sexp_of_t$32,length$2,of_list,to_list$11],
     include$14=
      [0,
       sexp_of_t$33,
       invariant$7,
       create$13,
       create_full$0,
       create_with_cell$0,
       peek,
       value_exn,
       value$0,
       is_empty,
       is_full,
       equal$2,
       connect,
       fill,
       _hQ_,
       cell_of_handler,
       add_handler,
       remove_handler,
       has_handlers,
       upon$0,
       upon,
       indir,
       squash];
    caml_register_global(1213,include$14,"Async_kernel__Ivar0");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$53);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$54,cst$21);
    function of_ivar(ivar){return ivar}
    function invariant$8(invariant_a,t){return invariant$7(invariant_a,t)}
    function sexp_of_t$34(sexp_of_a,t){return sexp_of_t$33(sexp_of_a,t)}
    function peek$0(t){return peek(t)}
    function return$0(a){return caml_call1(create_full$0,a)}
    function is_determined(t){return is_full(t)}
    function value_exn$0(t)
     {return value$0(t,cst_Deferred_value_exn_called_on_undetermined_deferred)}
    function upon$1(t,f){return upon$0(t,f)}
    function create$14(f)
     {var result=caml_call1(create$13,0);caml_call1(f,result);return result}
    function bind(t,f)
     {var bind_result=caml_call1(create$13,0);
      upon$1(t,function(a){return connect(bind_result,caml_call1(f,a))});
      return bind_result}
    function add_handler$0(t,f,execution_context)
     {return add_handler(t,f,execution_context)}
    function remove_handler$0(t,h){return remove_handler(t,h)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Handler$0=[0,_hQ_[1]],
     include$15=
      [0,
       sexp_of_t$34,
       invariant$8,
       of_ivar,
       create$14,
       peek$0,
       value_exn$0,
       is_determined,
       return$0,
       upon$1,
       bind,
       Handler$0,
       add_handler$0,
       remove_handler$0];
    caml_register_global(1214,include$15,"Async_kernel__Deferred0");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$56);
    caml_call1(Expect_test_collector[4][1],cst_src_ivar_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$57,cst$22);
    function fill_if_empty(t,v)
     {var _zV_=is_empty(t);return _zV_?fill(t,v):_zV_}
    function to_binable(t){return peek(t)}
    function of_binable(param)
     {if(param){var a=param[1];return caml_call1(create_full$0,a)}
      return caml_call1(create$13,0)}
    var
     include$16=
      caml_call1
       (caml_call1
         (Core_kernel_Binable[3],
          [0,
           Core_kernel_Option[1],
           Core_kernel_Option[2],
           Core_kernel_Option[3],
           Core_kernel_Option[4],
           Core_kernel_Option[5]]),
        [0,to_binable,of_binable]),
     _hR_=include$16[1],
     _hS_=include$16[2],
     _hT_=include$16[3],
     _hU_=include$16[4],
     _hV_=include$16[5],
     _hW_=include$16[6],
     _hX_=include$16[7],
     _hY_=include$16[8];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$58);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Ivar=
      [0,
       _hR_,
       _hS_,
       _hT_,
       _hU_,
       _hV_,
       _hW_,
       _hX_,
       _hY_,
       sexp_of_t$33,
       invariant$7,
       equal$2,
       create$13,
       create_full$0,
       fill,
       fill_if_empty,
       is_empty,
       is_full,
       of_ivar,
       peek,
       value_exn,
       has_handlers];
    caml_register_global(1216,Async_kernel_Ivar,"Async_kernel__Ivar");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$59);
    caml_call1(Expect_test_collector[4][1],cst_src_monad_sequence_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$60,cst$23);
    function sexp_of_how(param)
     {if(typeof param === "number")return -676829465 <= param?_hZ_:_h0_;
      var v0=param[2];
      return [1,[0,_h1_,[0,caml_call1(Core_kernel[339],v0),0]]]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$61);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Monad_sequence=[0,sexp_of_how];
    caml_register_global
     (1217,Async_kernel_Monad_sequence,"Async_kernel__Monad_sequence");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$62);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred1_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$63,cst$24);
    function never(param){return caml_call1(create$13,0)}
    var
     map$11=
      [0,
       -198771759,
       function(t,f)
        {var result=caml_call1(create$13,0);
         upon$1(t,function(a){return fill(result,caml_call1(f,a))});
         return result}],
     include$17=caml_call1(Base_Monad[1],[0,bind,return$0,map$11]),
     _h2_=include$17[1],
     _h3_=include$17[2],
     Monad_infix=include$17[3],
     bind$0=include$17[4],
     map$12=include$17[6],
     join=include$17[7],
     ignore_m=include$17[8],
     include$18=include$17[11],
     symbol_bind=include$18[2],
     symbol_map=include$18[3],
     include$19=include$17[11][4],
     bind$1=include$19[2],
     map$13=include$19[3],
     both=include$19[4],
     Open_on_rhs=include$19[5],
     Let_syntax=[0,bind$1,map$13,both,Open_on_rhs,return$0],
     Let_syntax$0=[0,symbol_bind,symbol_map,return$0,Let_syntax],
     unit=caml_call1(Let_syntax$0[3],0);
    function both$0(t1,t2)
     {return create$14
              (function(result)
                {return upon$1
                         (t1,
                          function(a1)
                           {return upon$1
                                    (t2,function(a2){return fill(result,[0,a1,a2])})})})}
    var
     symbol_bind$0=Monad_infix[1],
     symbol_map$0=Monad_infix[2],
     Infix=[0,symbol_bind$0,symbol_map$0,upon$1,both$0];
    function don_t_wait_for(param){return 0}
    function map$14(param,f2)
     {var f1=param[2],t=param[1];
      return [0,t,function(x){return caml_call1(f2,caml_call1(f1,x))}]}
    var Choice=[0,map$14];
    function process(param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var rest=param$0[3],handler=param$0[2],t=param$0[1];
          remove_handler$0(t,handler);
          var param$0=rest;
          continue}
        return 0}}
    var Unregister=[0,process];
    function choice(t,f){return [0,t,f]}
    function enabled(choices)
     {var result=caml_call1(create$13,0),unregisters=[0,0];
      function ready(param)
       {var _zS_=is_empty(result);
        return _zS_
                ?(caml_call1(Unregister[1],unregisters[1]),
                  fill
                   (result,
                    function(param)
                     {function _zT_(ac,param)
                       {var f=param[2],t=param[1],match=peek$0(t);
                        if(match){var v=match[1];return [0,caml_call1(f,v),ac]}
                        return ac}
                      var _zU_=caml_call3(Core_kernel_List[9],choices,0,_zT_);
                      return caml_call1(Core_kernel_List[32],_zU_)}))
                :_zS_}
      var execution_context=current_execution_context$1(t$5(0));
      function _zR_(acc,param)
       {var t=param[1];
        return [0,t,add_handler$0(t,ready,execution_context),acc]}
      unregisters[1] = caml_call3(Core_kernel_List[9],choices,0,_zR_);
      return result}
    function choose_result(choices)
     {var choices$0=choices;
      for(;;)
       {if(choices$0)
         {var
           choices$1=choices$0[2],
           match=choices$0[1],
           f=match[2],
           t=match[1],
           match$0=peek$0(t);
          if(match$0){var v=match$0[1];return caml_call1(f,v)}
          var choices$0=choices$1;
          continue}
        throw [0,Assert_failure,_h4_]}}
    function choose(choices)
     {var result=caml_call1(create$13,0),unregisters=[0,0];
      function ready(param)
       {var _zQ_=is_empty(result);
        return _zQ_
                ?(caml_call1(Unregister[1],unregisters[1]),
                  fill(result,choose_result(choices)))
                :_zQ_}
      var execution_context=current_execution_context$1(t$5(0));
      function _zP_(acc,param)
       {var t=param[1];
        return [0,t,add_handler$0(t,ready,execution_context),acc]}
      unregisters[1] = caml_call3(Core_kernel_List[9],choices,0,_zP_);
      return result}
    function any_f(ts,f)
     {function _zO_(t){return [0,t,f]}
      return choose(caml_call2(Core_kernel_List[69],ts,_zO_))}
    function any(ts){return any_f(ts,function(_zN_){return _zN_})}
    function any_unit(ts){return any_f(ts,function(_zM_){return 0})}
    function for$0(start,to,do$0)
     {function loop(i)
       {if(caml_call2(Core_kernel[91],i,to))
         return caml_call1(Let_syntax$0[3],0);
        function _zK_(param){return loop(i + 1 | 0)}
        var _zL_=caml_call1(do$0,i);
        return caml_call2(Let_syntax$0[4][1],_zL_,_zK_)}
      return loop(start)}
    function repeat_until_finished(state,f)
     {return create$14
              (function(finished)
                {function loop(state)
                  {function _zI_(param)
                    {if(990972795 <= param[1])
                      {var state=param[2];return loop(state)}
                     var result=param[2];
                     return fill(finished,result)}
                   var _zJ_=caml_call1(f,state);
                   return caml_call2(Infix[3],_zJ_,_zI_)}
                 return loop(state)})}
    function forever(state,f)
     {var
       _zE_=Core_kernel[147],
       _zF_=
        repeat_until_finished
         (state,
          function(state)
           {function _zG_(state){return [0,990972795,state]}
            var _zH_=caml_call1(f,state);
            return caml_call2(Let_syntax$0[4][2],_zH_,_zG_)});
      return caml_call2(Infix[3],_zF_,_zE_)}
    function fold$11(t,init,f)
     {return create$14
              (function(result)
                {function loop(t,b)
                  {if(t)
                    {var
                      xs=t[2],
                      x=t[1],
                      _zC_=function(b){return loop(xs,b)},
                      _zD_=caml_call2(f,b,x);
                     return caml_call2(Infix[3],_zD_,_zC_)}
                   return fill(result,b)}
                 return loop(t,init)})}
    function seqmap(t,f)
     {var
       _zy_=Core_kernel_List[32],
       _zz_=
        fold$11
         (t,
          0,
          function(bs,a)
           {function _zA_(b){return [0,b,bs]}
            var _zB_=caml_call1(f,a);
            return caml_call2(Infix[2],_zB_,_zA_)});
      return caml_call2(Infix[2],_zz_,_zy_)}
    function all$0(ds){return seqmap(ds,function(_zx_){return _zx_})}
    function all_unit(ds){return fold$11(ds,0,function(param,d){return d})}
    function ok(x)
     {function _zw_(x){return [0,x]}return caml_call2(Infix[2],x,_zw_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$64);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$20=
      [0,
       sexp_of_t$34,
       invariant$8,
       of_ivar,
       create$14,
       peek$0,
       value_exn$0,
       is_determined,
       upon$1,
       Handler$0,
       add_handler$0,
       remove_handler$0,
       never,
       include$17,
       _h2_,
       _h3_,
       Monad_infix,
       bind$0,
       map$12,
       join,
       ignore_m,
       return$0,
       Let_syntax$0,
       unit,
       ignore_m,
       both$0,
       Infix,
       don_t_wait_for,
       Choice,
       Unregister,
       choice,
       enabled,
       choose_result,
       choose,
       any_f,
       any,
       any_unit,
       for$0,
       repeat_until_finished,
       forever,
       sexp_of_how,
       fold$11,
       seqmap,
       all$0,
       all_unit,
       ok];
    caml_register_global(1219,include$20,"Async_kernel__Deferred1");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$65);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_std_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$66,cst$25);
    var
     _h5_=Infix[3],
     _h7_=Let_syntax$0[1],
     _h8_=Let_syntax$0[2],
     _h9_=Let_syntax$0[3],
     _h__=Let_syntax$0[4],
     _h6_=Infix[4];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$67);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_std=
      [0,
       _h5_,
       _h6_,
       _h7_,
       _h8_,
       _h__,
       choice,
       choose,
       don_t_wait_for,
       never,
       _h9_,
       upon$1];
    caml_register_global
     (1220,Async_kernel_Deferred_std,"Async_kernel__Deferred_std");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$68);
    caml_call1(Expect_test_collector[4][1],cst_src_ivar_filler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$69,cst$26);
    function sexp_of_t$35(of_a,v)
     {function _zv_(param)
       {if(param)
         {var v0=param[1],v0$0=sexp_of_t$33(of_a,v0);
          return [1,[0,_h$_,[0,v0$0,0]]]}
        return _ia_}
      return caml_call2(Core_kernel[475],_zv_,v)}
    function invariant$9(param,t)
     {function _zq_(param)
       {var _zu_=t[1];
        if(_zu_)
         {var ivar=_zu_[1];
          if(is_empty(ivar))return 0;
          throw [0,Assert_failure,_ib_]}
        return 0}
      function _zr_(param){return _ic_}
      function _zs_(_zt_){return sexp_of_t$35(_zr_,_zt_)}
      return caml_call4(include$9[1],_id_,t,_zs_,_zq_)}
    function create$15(param)
     {var ivar=caml_call1(create$13,0),t=[0,[0,ivar]];return [0,t,ivar]}
    function is_empty$0(t){return t[1]?1:0}
    function fill$0(t,a)
     {var _zo_=t[1];
      if(_zo_){var i=_zo_[1];t[1] = 0;return fill(i,a)}
      var
       _zp_=
        caml_call1(Sexplib0_Sexp_conv[7],cst_attempt_to_fill_full_ivar);
      return caml_call1(Core_kernel[241],_zp_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$70);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Ivar_filler=
      [0,sexp_of_t$35,invariant$9,create$15,is_empty$0,fill$0];
    caml_register_global
     (1221,Async_kernel_Ivar_filler,"Async_kernel__Ivar_filler");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$71);
    caml_call1(Expect_test_collector[4][1],cst_src_tail_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$72,cst$27);
    function sexp_of_t$36(sexp_of_a,d)
     {var d$0=d,ac=0;
      for(;;)
       {var match=peek$0(d$0);
        if(match)
         {var _zn_=match[1];
          if(_zn_)
           {var
             t=_zn_[2],
             a=_zn_[1],
             ac$0=[0,caml_call1(sexp_of_a,a),ac],
             d$0=t,
             ac=ac$0;
            continue}
          return [1,caml_call1(Core_kernel_List[32],ac)]}
        return [1,caml_call1(Core_kernel_List[32],[0,_ie_,ac])]}}
    function next(t){return t}
    var include$21=[0,sexp_of_t$36,next];
    function sexp_of_t$37(param,t)
     {var _zm_=is_empty(t[1])?cst_open_tail:cst_closed_tail;return [0,_zm_]}
    function create$16(param){return [0,caml_call1(create$13,0)]}
    function collect(t){return t[1]}
    function is_closed(t){return is_full(t[1])}
    function fill_exn(t,v)
     {if(is_closed(t))
       {var _zl_=caml_call1(Sexplib0_Sexp_conv[7],cst_stream_is_closed);
        return caml_call1(Core_kernel[241],_zl_)}
      return fill(t[1],v)}
    function close_exn(t){return fill_exn(t,0)}
    function close_if_open(t)
     {var _zk_=1 - is_closed(t);return _zk_?fill(t[1],0):_zk_}
    function extend(t,v)
     {var next=caml_call1(create$13,0);
      fill_exn(t,[0,v,next]);
      t[1] = next;
      return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$73);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Tail=
      [0,
       sexp_of_t$37,
       create$16,
       extend,
       close_exn,
       close_if_open,
       is_closed,
       include$21,
       collect];
    caml_register_global(1222,Async_kernel_Tail,"Async_kernel__Tail");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$74);
    caml_call1(Expect_test_collector[4][1],cst_src_monitor_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$75,cst$28);
    function invariant$10(t)
     {function _y4_(param)
       {function _y6_(_zj_){return 0}
        function _y7_(_zi_){return 0}
        function _y8_(_zh_){return 0}
        function _y9_(_zg_){return 0}
        function f(next_error)
         {if(is_empty(next_error))return 0;throw [0,Assert_failure,_if_]}
        var _y5_=caml_call2(include$9[2],t,f);
        function _y__(_zf_){return 0}
        function _y$_(_ze_){return 0}
        function _za_(_zd_){return 0}
        function _zb_(_zc_){return 0}
        return caml_call9
                (Fields[14],_zb_,_za_,_y$_,_y__,_y5_,_y9_,_y8_,_y7_,_y6_)}
      return caml_call4(include$9[1],_ig_,t,sexp_of_monitor,_y4_)}
    function current_execution_context$2(param)
     {return current_execution_context$1(t$5(0))}
    function current(param){return current_execution_context$2(0)[1]}
    function depth(t)
     {var t$0=t,n=0;
      for(;;)
       {var _y3_=t$0[4];
        if(_y3_){var t$1=_y3_[1],n$0=n + 1 | 0,t$0=t$1,n=n$0;continue}
        return n}}
    function detach(t){t[9] = 1;return 0}
    function detach_and_iter_errors(t,f)
     {detach(t);
      var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler),
       handler_state_ref=[0,0];
      function run_f(exn)
       {var _y1_=handler_state_ref[1];
        if(typeof _y1_ === "number")
         {if(0 === _y1_)throw [0,Assert_failure,_ih_];return 0}
        var bag_elt=_y1_[1];
        try
         {var _y2_=caml_call1(f,exn);return _y2_}
        catch(inner_exn)
         {inner_exn = caml_wrap_exception(inner_exn);
          handler_state_ref[1] = 1;
          caml_call2(Core_kernel_Bag[26],t[6],bag_elt);
          throw inner_exn}}
      handler_state_ref[1]
      =
      [0,caml_call2(Core_kernel_Bag[23],t[6],[0,execution_context,run_f])];
      return 0}
    function detach_and_get_error_stream(t)
     {detach(t);var tail=create$16(0);t[7] = [0,tail,t[7]];return tail[1]}
    function get_next_error(t){return t[5]}
    function detach_and_get_next_error(t){detach(t);return t[5]}
    function create$17(here,info,name,param)
     {var parent=current(0);
      return create_with_parent(here,info,name,[0,parent])}
    var
     Error=
      [248,cst_Async_kernel_Monitor_Error,runtime.caml_fresh_oo_id(0)];
    function _in_(param)
     {if(param[1] === Error)
       {var
         t=param[2],
         monitor=t[4],
         backtrace_history=t[3],
         backtrace=t[2],
         exn=t[1],
         s=caml_call1(Core_kernel_Info[8],monitor[1]),
         name=caml_string_notequal(s,cst$29)?[0,s]:0,
         _yT_=monitor[2];
        if(_yT_)
         var
          here=_yT_[1],
          column=here[4] - here[3] | 0,
          pos=
           [0,caml_call5(Core_kernel[244],_ii_,here[1],here[2],column,column)];
        else
         var pos=0;
        if(pos)
         {var _yU_=pos[1];
          if(name)
           var
            name$0=name[1],
            _yV_=[0,caml_call3(Core_kernel[244],_ij_,name$0,_yU_),0];
          else
           var _yV_=[0,caml_call2(Core_kernel[244],_il_,_yU_),0];
          var monitor$0=_yV_}
        else
         if(name)
          var
           name$1=name[1],
           monitor$0=[0,caml_call2(Core_kernel[244],_im_,name$1),0];
         else
          var monitor$0=0;
        if(backtrace)
         var
          backtrace$0=backtrace[1],
          backtrace$1=caml_call1(Base_Backtrace[4],backtrace$0);
        else
         var backtrace$1=0;
        if(backtrace$1)
         {var rest=backtrace$1[2],t1=backtrace$1[1];
          if(caml_call2(Core_kernel_String[49],t1,import0))
           {if(rest)
             {var rest$0=rest[2],t2=rest[1];
              if(caml_call2(Core_kernel_String[49],t2,error))
               {if(rest$0)
                 {var rest$1=rest$0[2],t3=rest$0[1];
                  if(caml_call2(Core_kernel_String[49],t3,error))
                   var rest$2=rest$1,switch$2=1;
                  else
                   var switch$2=0}
                else
                 var switch$2=0;
                if(! switch$2)var rest$2=rest$0;
                var rest$3=rest$2,switch$1=1}
              else
               var switch$1=0}
            else
             var switch$1=0;
            if(! switch$1)var rest$3=rest;
            var traces=rest$3,switch$0=1}
          else
           var switch$0=0}
        else
         var switch$0=0;
        if(! switch$0)var traces=backtrace$1;
        var match=caml_call1(Core_kernel_List[32],traces);
        if(match)
         {var rest$4=match[2],t1$0=match[1];
          if(caml_call2(Core_kernel_String[49],t1$0,job_queue))
           {if(rest$4)
             {var rest$5=rest$4[2],t2$0=rest$4[1];
              if(caml_call2(Core_kernel_String[49],t2$0,job_queue))
               {if(rest$5)
                 {var rest$6=rest$5[2],t2$1=rest$5[1];
                  if(caml_call2(Core_kernel_String[49],t2$1,deferred0))
                   var switch$6=1;
                  else
                   if(caml_call2(Core_kernel_String[49],t2$1,deferred1))
                    var switch$6=1;
                   else
                    if(caml_call2(Core_kernel_String[49],t2$1,monitor$2))
                     var switch$6=1;
                    else
                     var switch$5=1,switch$6=0;
                  if(switch$6)
                   var
                    _yW_=caml_call1(Core_kernel_List[32],rest$6),
                    switch$3=1,
                    switch$4=0,
                    switch$5=0}
                else
                 var switch$5=1;
                if(switch$5)
                 var
                  _yW_=caml_call1(Core_kernel_List[32],rest$5),
                  switch$3=1,
                  switch$4=0}
              else
               var switch$4=1}
            else
             var switch$4=1;
            if(switch$4)
             var _yW_=caml_call1(Core_kernel_List[32],rest$4),switch$3=1}
          else
           var switch$3=0}
        else
         var switch$3=0;
        if(! switch$3)var _yW_=traces;
        var
         backtrace$2=caml_call2(Core_kernel[145],_yW_,monitor$0),
         list_if_not_empty=function(l){return l?[0,l]:0},
         match$0=list_if_not_empty(backtrace$2),
         _yX_=list_if_not_empty(backtrace_history),
         match$1=0;
        if(_yX_)
         var
          v=_yX_[1],
          _yY_=
           [0,
            [1,
             [0,_ik_,[0,caml_call2(Core_kernel[400],Base_Backtrace[1],v),0]]],
            match$1];
        else
         var _yY_=match$1;
        if(match$0)
         var
          v$0=match$0[1],
          _yZ_=[0,caml_call2(Core_kernel[400],Core_kernel[447],v$0),_yY_];
        else
         var _yZ_=_yY_;
        var sexp=[1,[0,caml_call1(Core_kernel[508],exn),_yZ_]];
        if(0 === sexp[0])var _y0_=[0,sexp,0];else var l=sexp[1],_y0_=l;
        return [1,
                [0,
                 caml_call1(Sexplib0_Sexp_conv[7],cst_monitor_ml_Error),
                 _y0_]]}
      throw [0,Assert_failure,_io_]}
    caml_call3(Sexplib_Conv[51][2],0,Error,_in_);
    function extract_exn(exn)
     {if(exn[1] === Error){var error=exn[2];return error[1]}return exn}
    function send_exn(t,backtrace,exn)
     {if(exn[1] === Error)
       var exn$0=exn;
      else
       {if(backtrace)
         {var _yR_=backtrace[1];
          if(typeof _yR_ === "number")
           var _yS_=[0,caml_call1(Base_Backtrace[6][4],0)];
          else
           var b=_yR_[2],_yS_=[0,b];
          var backtrace$0=_yS_}
        else
         var backtrace$0=0;
        var
         backtrace_history=current_execution_context$2(0)[4],
         exn$0=[0,Error,[0,exn,backtrace$0,backtrace_history,t]]}
      if(_cJ_)
       log
        (cst_Monitor_send_exn$1,
         [0,t,exn$0],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=sexp_of_monitor(v0),
            v1$0=caml_call1(Core_kernel[508],v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      t[8] = 1;
      var scheduler=t$5(0),t$0=t;
      for(;;)
       {fill(t$0[5],exn$0);
        t$0[5] = caml_call1(create$13,0);
        if(t$0[9])
         {if(_cJ_)
           log
            (cst_Monitor_send_exn_found_listening_monitor,
             [0,t$0,exn$0],
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=sexp_of_monitor(v0),
                v1$0=caml_call1(Core_kernel[508],v1);
               return [1,[0,v0$0,[0,v1$0,0]]]});
          var
           _yN_=
            function(param)
             {var f=param[2],execution_context=param[1];
              return enqueue$0(scheduler,execution_context,f,exn$0)};
          caml_call2(Core_kernel_Bag[7],t$0[6],_yN_);
          var _yO_=function(tail){return extend(tail,exn$0)};
          return caml_call2(Core_kernel_List[8],t$0[7],_yO_)}
        var _yP_=t$0[4];
        if(_yP_){var t$1=_yP_[1],t$0=t$1;continue}
        var _yQ_=caml_call1(task_id[1],0);
        return got_uncaught_exn(t$5(0),exn$0,_yQ_)}}
    function within_context(context,f)
     {function _yM_(param)
       {var match=caml_call1(Core_kernel_Result[43],f);
        if(0 === match[0]){var x=match[1];return [0,x]}
        var exn=match[1];
        send_exn(context[1],_ip_,exn);
        return _iq_}
      return with_execution_context(t$5(0),context,_yM_)}
    function within_gen(monitor,priority,f)
     {var
       tmp_context=
        create_like(monitor,priority,0,current_execution_context$2(0));
      return within_context(tmp_context,f)}
    function within(monitor,priority,f)
     {var match=within_gen(monitor,priority,f);
      if(0 === match[0]){var d=match[1];return d}
      return never(0)}
    function within_v(monitor,priority,f)
     {var match=within_gen(monitor,priority,f);
      if(0 === match[0]){var x=match[1];return [0,x]}
      return 0}
    function within$0(monitor,priority,f)
     {var match=within_gen(monitor,priority,f);return 0 === match[0]?0:0}
    function schedule_with_data(monitor,priority,work,x)
     {var scheduler=t$5(0);
      return enqueue$0
              (scheduler,
               create_like
                (monitor,priority,0,current_execution_context$1(scheduler)),
               work,
               x)}
    function schedule$0(monitor,priority,work)
     {return schedule_with_data(monitor,priority,work,0)}
    function upon_work_fill_i(param)
     {var i=param[2],work=param[1];
      function _yL_(a){return fill(i,a)}
      return upon$1(caml_call1(work,0),_yL_)}
    function schedule$1(monitor,priority,work)
     {var i=caml_call1(create$13,0);
      schedule_with_data(monitor,priority,upon_work_fill_i,[0,work,i]);
      return i}
    function preserve_execution_context(f)
     {var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler);
      function _yK_(a){return enqueue$0(scheduler,execution_context,f,a)}
      return caml_call1(Core_kernel[245],_yK_)}
    function preserve_execution_context$0(f)
     {var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler);
      function call_and_fill(param)
       {var i=param[3],a=param[2],f=param[1];
        function _yJ_(r){return fill(i,r)}
        return upon$1(caml_call1(f,a),_yJ_)}
      function _yI_(a)
       {return create$14
                (function(i)
                  {return enqueue$0
                           (scheduler,execution_context,call_and_fill,[0,f,a,i])})}
      return caml_call1(Core_kernel[245],_yI_)}
    function stream_iter(stream,f)
     {function loop(stream)
       {function _yH_(param)
         {if(param)
           {var stream=param[2],v=param[1];
            loop(stream);
            return caml_call1(f,v)}
          return 0}
        return caml_call2(_h5_,caml_call1(include$21[2],stream),_yH_)}
      return loop(stream)}
    function create$18(here,info,name,run,f)
     {var
       monitor=create_with_parent(here,info,name,0),
       exns=detach_and_get_error_stream(monitor),
       ok=523273847 <= run?schedule$1([0,monitor],0,f):within([0,monitor],0,f);
      return [0,ok,exns]}
    function fill_result_and_handle_background_errors
     (result_filler,result,exns,handle_exns_after_result)
     {var _yG_=is_empty$0(result_filler);
      return _yG_
              ?(fill$0(result_filler,result),
                caml_call1(handle_exns_after_result,exns))
              :_yG_}
    var
     try_with_log_exn=
      [0,
       function(exn)
        {var
          _yE_=[0,[1,[0,_ir_,[0,caml_call1(Base_Exn[1],exn),0]]],0],
          _yF_=
           [1,
            [0,
             caml_call1
              (Sexplib0_Sexp_conv[7],
               cst_failed_to_set_Monitor_Expert_try_with_log_exn),
             _yE_]];
         return caml_call1(Core_kernel[241],_yF_)}],
     Expert=[0,try_with_log_exn];
    function try_with(here,info,opt,_yC_,_yB_,_yA_,f$0)
     {if(opt)var sth=opt[1],name=sth;else var name=cst$30;
      if(_yC_)
       var sth$0=_yC_[1],do_extract_exn=sth$0;
      else
       var do_extract_exn=0;
      if(_yB_)var sth$1=_yB_[1],run=sth$1;else var run=523273847;
      if(_yA_)var sth$2=_yA_[1],rest=sth$2;else var rest=3804260;
      var
       match=create$18(here,info,[0,name],run,f$0),
       exns=match[2],
       ok=match[1];
      if(typeof rest === "number")
       if(3804260 <= rest)
        var handle_exn=Expert[1][1];
       else
        var
         parent=current(0),
         handle_exn=function(exn){return send_exn(parent,0,exn)};
      else
       var
        f=rest[2],
        parent$0=current(0),
        handle_exn=
         function(exn)
          {return within$0
                   ([0,parent$0],0,function(param){return caml_call1(f,exn)})};
      function handle_exns_after_result(exns)
       {return stream_iter(exns,handle_exn)}
      return within
              ([0,main],
               0,
               function(param)
                {if(is_determined(ok))
                  {handle_exns_after_result(exns);
                   return caml_call1(_h9_,[0,value_exn$0(ok)])}
                 var
                  match=create$15(0),
                  result=match[2],
                  result_filler=match[1];
                 upon$1
                  (ok,
                   function(res)
                    {return fill_result_and_handle_background_errors
                             (result_filler,[0,res],exns,handle_exns_after_result)});
                 function _yD_(param)
                  {if(param)
                    {var
                      exns=param[2],
                      exn=param[1],
                      exn$0=do_extract_exn?extract_exn(exn):exn;
                     return fill_result_and_handle_background_errors
                             (result_filler,[1,exn$0],exns,handle_exns_after_result)}
                   throw [0,Assert_failure,_is_]}
                 upon$1(caml_call1(include$21[2],exns),_yD_);
                 return result})}
    function try_with_or_error(here,info,opt,extract_exn,f)
     {if(opt)var sth=opt[1],name=sth;else var name=cst_try_with_or_error;
      var arg=Core_kernel_Or_error[38];
      function _yz_(eta){return caml_call2(arg,0,eta)}
      return caml_call2
              (_h8_,try_with(here,info,[0,name],extract_exn,_iu_,_it_,f),_yz_)}
    function try_with_join_or_error(here,info,opt,extract_exn,f)
     {if(opt)var sth=opt[1],name=sth;else var name=cst_try_with_join_or_error;
      var _yy_=Core_kernel_Or_error[26];
      return caml_call2
              (_h8_,try_with_or_error(here,info,[0,name],extract_exn,f),_yy_)}
    function protect(here,info,opt,extract_exn,run,f,finally$0)
     {if(opt)var sth=opt[1],name=sth;else var name=cst_Monitor_protect;
      function _yp_(r)
       {function _yr_(match)
         {if(0 === r[0])
           {var _yt_=r[1];if(0 === match[0])return _yt_;var e=match[1]}
          else
           {var _yu_=r[1];
            if(0 !== match[0])
             {var
               finally_exn=match[1],
               _yv_=
                [0,
                 [1,[0,_iv_,[0,caml_call1(Core_kernel[508],finally_exn),0]]],
                 0],
               _yw_=
                [0,[1,[0,_iw_,[0,caml_call1(Core_kernel[508],_yu_),0]]],_yv_],
               _yx_=
                [1,
                 [0,caml_call1(Sexplib0_Sexp_conv[7],cst_Async_finally),_yw_]];
              return caml_call1(Core_kernel[241],_yx_)}
            var e=_yu_}
          throw e}
        var _ys_=try_with(here,info,_iy_,_ix_,0,0,finally$0);
        return caml_call2(_h__[2],_ys_,_yr_)}
      var _yq_=try_with(here,info,[0,name],extract_exn,run,0,f);
      return caml_call2(_h__[1],_yq_,_yp_)}
    function handle_errors(here,info,name,f,handler)
     {var match=create$18(here,info,name,3903734,f),exns=match[2],ok=match[1];
      stream_iter(exns,handler);
      return ok}
    function catch_stream(here,info,name,f)
     {var
       match=
        create$18
         (here,
          info,
          name,
          3903734,
          function(param){caml_call1(f,0);return caml_call1(_h9_,0)}),
       exns=match[2];
      return exns}
    function catch$0(here,info,name,f)
     {function _yl_(param)
       {if(param){var x=param[1];return x}
        var
         _yo_=
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_Monitor_catch_got_unexpected_empty_stream);
        return caml_call1(Core_kernel[241],_yo_)}
      var
       _ym_=catch_stream(here,info,name,f),
       _yn_=caml_call1(include$21[2],_ym_);
      return caml_call2(_h__[2],_yn_,_yl_)}
    function catch_error(here,info,name,f)
     {var arg=Core_kernel_Error[22];
      function _yk_(eta){return caml_call2(arg,0,eta)}
      return caml_call2(_h8_,catch$0(here,info,name,f),_yk_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$76);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$22=
      [0,
       within,
       within$0,
       within_v,
       schedule$1,
       schedule$0,
       within_context,
       preserve_execution_context,
       preserve_execution_context$0],
     Async_kernel_Monitor=
      [0,
       sexp_of_monitor,
       invariant$10,
       create$17,
       name,
       parent,
       depth,
       current,
       detach,
       detach_and_iter_errors,
       detach_and_get_next_error,
       detach_and_get_error_stream,
       get_next_error,
       extract_exn,
       has_seen_error,
       send_exn,
       try_with,
       try_with_or_error,
       try_with_join_or_error,
       handle_errors,
       catch_stream,
       catch$0,
       catch_error,
       protect,
       main,
       Expert,
       include$22];
    caml_register_global(1224,Async_kernel_Monitor,"Async_kernel__Monitor");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$77);
    caml_call1(Expect_test_collector[4][1],cst_src_async_stream_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$78,cst$31);
    var _iA_=include$21[2],_iz_=include$21[1];
    function first_exn(t)
     {function _yh_(param)
       {if(param){var x=param[1];return x}
        var
         _yj_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Stream_first_of_empty_stream);
        return caml_call1(Core_kernel[241],_yj_)}
      var _yi_=caml_call1(_iA_,t);
      return caml_call2(_h__[2],_yi_,_yh_)}
    function fold$12(t,init,f)
     {return create$14
              (function(result)
                {function loop(t,b)
                  {function _ye_(param)
                    {if(param)
                      {var
                        t=param[2],
                        v=param[1],
                        _yf_=function(_yg_){return loop(t,_yg_)};
                       return upon$1(caml_call2(f,b,v),_yf_)}
                     return fill(result,b)}
                   return upon$1(caml_call1(_iA_,t),_ye_)}
                 return loop(t,init)})}
    function fold$13(t,init,f)
     {return create$14
              (function(result)
                {function loop$0(counter,t,b)
                  {var match=peek$0(caml_call1(_iA_,t));
                   if(match)
                    {var next=match[1];
                     if(counter < 50)
                      {var counter$0=counter + 1 | 0;
                       return loop_next$0(counter$0,next,b)}
                     return caml_trampoline_return(loop_next$0,[0,next,b])}
                   function _yd_(next){return loop_next(next,b)}
                   return upon$1(caml_call1(_iA_,t),_yd_)}
                 function loop_next$0(counter,next,b)
                  {if(next)
                    {var t=next[2],v=next[1],_yc_=caml_call2(f,b,v);
                     if(counter < 50)
                      {var counter$0=counter + 1 | 0;
                       return loop$0(counter$0,t,_yc_)}
                     return caml_trampoline_return(loop$0,[0,t,_yc_])}
                   return fill(result,b)}
                 function loop(t,b){return caml_trampoline(loop$0(0,t,b))}
                 function loop_next(next,b)
                  {return caml_trampoline(loop_next$0(0,next,b))}
                 return loop(t,init)})}
    function length$3(t)
     {return fold$13(t,0,function(n,param){return n + 1 | 0})}
    function iter$11(t,f)
     {return fold$12(t,0,function(param,v){return caml_call1(f,v)})}
    function closed(t)
     {var match=peek$0(caml_call1(_iA_,t));
      if(match)if(! match[1])return caml_call1(_h9_,0);
      return iter$11(t,function(param){return caml_call1(_h9_,0)})}
    function iter$12(t,f)
     {iter$11(t,function(a){caml_call1(f,a);return caml_call1(_h9_,0)});
      return 0}
    function create$19(f)
     {var tail=create$16(0),t=tail[1];caml_call1(f,tail);return t}
    function unfold(b,f)
     {return create$19
              (function(tail)
                {function loop(b)
                  {function _yb_(param)
                    {if(param)
                      {var match=param[1],b=match[2],a=match[1];
                       extend(tail,a);
                       return loop(b)}
                     return close_exn(tail)}
                   return upon$1(caml_call1(f,b),_yb_)}
                 return loop(b)})}
    function of_list$0(l)
     {return create$19
              (function(tail)
                {function _ya_(x){return extend(tail,x)}
                 caml_call2(Core_kernel_List[8],l,_ya_);
                 return close_exn(tail)})}
    function to_list$12(s)
     {var _x$_=Core_kernel_List[32];
      return caml_call2
              (_h8_,
               fold$12(s,0,function(b,a){return caml_call1(_h9_,[0,a,b])}),
               _x$_)}
    function copy_to_tail(t,tail)
     {return iter$11(t,function(a){return caml_call1(_h9_,extend(tail,a))})}
    function append(t1,t2)
     {return create$19
              (function(tail)
                {function _x9_(param)
                  {function _x__(param){return close_exn(tail)}
                   return upon$1(copy_to_tail(t2,tail),_x__)}
                 return upon$1(copy_to_tail(t1,tail),_x9_)})}
    function concat$1(t)
     {return create$19
              (function(tail)
                {function _x8_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11(t,function(t){return copy_to_tail(t,tail)}),_x8_)})}
    function filter_deprecated(t,f)
     {return create$19
              (function(tail)
                {function _x5_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(a)
                             {function _x6_(param){return 0 === param?0:extend(tail,a)}
                              var _x7_=caml_call1(_h9_,caml_call1(f,a));
                              return caml_call2(_h__[2],_x7_,_x6_)}),
                          _x5_)})}
    function filter_map_deprecated(t,f)
     {return create$19
              (function(tail)
                {function _x2_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(a)
                             {function _x3_(param)
                               {if(param){var v=param[1];return extend(tail,v)}return 0}
                              var _x4_=caml_call1(_h9_,caml_call1(f,a));
                              return caml_call2(_h__[2],_x4_,_x3_)}),
                          _x2_)})}
    function map$15(t,f)
     {return create$19
              (function(tail)
                {function _xZ_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(v)
                             {function _x0_(_x1_){return extend(tail,_x1_)}
                              return caml_call2(_h8_,caml_call1(f,v),_x0_)}),
                          _xZ_)})}
    function map$16(t,f)
     {return map$15(t,function(a){return caml_call1(_h9_,caml_call1(f,a))})}
    function first_n(s,n)
     {return create$19
              (function(tail)
                {function loop(s,n)
                  {if(caml_call2(Core_kernel[90],n,0))return close_exn(tail);
                   function _xY_(param)
                    {if(param)
                      {var t=param[2],x=param[1];
                       extend(tail,x);
                       return loop(t,n - 1 | 0)}
                     return close_exn(tail)}
                   return upon$1(caml_call1(_iA_,s),_xY_)}
                 return loop(s,n)})}
    function available_now(t)
     {var t$0=t,ac=0;
      for(;;)
       {var match=peek$0(caml_call1(_iA_,t$0));
        if(match)
         {var _xX_=match[1];
          if(_xX_)
           {var t$1=_xX_[2],x=_xX_[1],ac$0=[0,x,ac],t$0=t$1,ac=ac$0;continue}}
        return [0,caml_call1(Core_kernel_List[32],ac),t$0]}}
    function split(opt,_xS_,t)
     {if(opt)var sth=opt[1],stop=sth;else var stop=never(0);
      if(_xS_)
       var sth$0=_xS_[1],f=sth$0;
      else
       var f=function(param){return 192584839};
      var reason_for_stopping=caml_call1(create$13,0),prefix=create$16(0);
      function finish(v){close_exn(prefix);return fill(reason_for_stopping,v)}
      function loop(t)
       {function _xT_(param)
         {if(typeof param === "number")return finish([0,280164845,t]);
          var o=param[2];
          if(o)
           {var t$0=o[2],a=o[1],match=caml_call1(f,a);
            if(typeof match === "number"){extend(prefix,a);return loop(t$0)}
            var b=match[2];
            return finish([0,398750242,[0,b,t$0]])}
          return finish(1144100)}
        var _xU_=0;
        function _xV_(o){return [0,870035731,o]}
        var _xW_=[0,[0,caml_call1(_iA_,t),_xV_],_xU_];
        return caml_call2
                (_h5_,
                 choose([0,[0,stop,function(param){return 280164845}],_xW_]),
                 _xT_)}
      loop(t);
      return [0,prefix[1],reason_for_stopping]}
    function find(t,f)
     {var
       match=
        split
         (0,
          [0,function(a){return caml_call1(f,a)?[0,398750242,a]:192584839}],
          t),
       found=match[2];
      function _xR_(x)
       {if(typeof x !== "number")
         if(! (398750242 <= x[1]))throw [0,Assert_failure,_iB_];
        return x}
      return caml_call2(_h__[2],found,_xR_)}
    function ungroup(t)
     {return create$19
              (function(tail)
                {function _xP_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(l)
                             {function _xQ_(x){return extend(tail,x)}
                              caml_call2(Core_kernel_List[8],l,_xQ_);
                              return caml_call1(_h9_,0)}),
                          _xP_)})}
    function interleave(ts)
     {return create$19
              (function(tail)
                {var num_open=[0,1];
                 function close(param)
                  {num_open[1] = num_open[1] - 1 | 0;
                   var _xO_=caml_call2(Core_kernel[90],num_open[1],0);
                   return _xO_?close_exn(tail):_xO_}
                 var
                  outer_closed=
                   iter$11
                    (ts,
                     function(t)
                      {num_open[1] = num_open[1] + 1 | 0;
                       upon$1(copy_to_tail(t,tail),close);
                       return caml_call1(_h9_,0)});
                 return upon$1(outer_closed,close)})}
    function take_until(t,d)
     {return create$19
              (function(tail)
                {function loop(t)
                  {function _xJ_(param)
                    {if(typeof param !== "number")
                      {var _xN_=param[2];
                       if(_xN_)
                        {var t=_xN_[2],x=_xN_[1];extend(tail,x);return loop(t)}}
                     return close_exn(tail)}
                   var _xK_=0;
                   function _xL_(z){return [0,870035731,z]}
                   var _xM_=[0,[0,caml_call1(_iA_,t),_xL_],_xK_];
                   return upon$1
                           (choose([0,[0,d,function(param){return 926227490}],_xM_]),
                            _xJ_)}
                 return loop(t)})}
    function iter_durably(t,f)
     {return create$14
              (function(result)
                {function loop(t)
                  {function _xH_(param)
                    {if(param)
                      {var
                        t=param[2],
                        x=param[1],
                        _xI_=
                         function(z)
                          {loop(t);
                           if(0 === z[0])return 0;
                           var e=z[1];
                           return send_exn(current(0),0,e)};
                       return caml_call2
                               (_h5_,
                                try_with
                                 (0,0,0,0,0,_iC_,function(param){return caml_call1(f,x)}),
                                _xI_)}
                     return fill(result,0)}
                   return caml_call2(_h5_,caml_call1(_iA_,t),_xH_)}
                 return loop(t)})}
    function iter_durably_report_end(t,f)
     {return create$14
              (function(result)
                {function loop(t)
                  {function _xG_(param)
                    {if(param)
                      {var t=param[2],x=param[1];loop(t);return caml_call1(f,x)}
                     return fill(result,0)}
                   return caml_call2(_h5_,caml_call1(_iA_,t),_xG_)}
                 return loop(t)})}
    function iter_durably$0(t,f){iter_durably_report_end(t,f);return 0}
    function of_fun(f)
     {return unfold
              (0,
               function(param)
                {function _xE_(a){return [0,[0,a,0]]}
                 var _xF_=caml_call1(f,0);
                 return caml_call2(_h__[2],_xF_,_xE_)})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$79);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Async_stream=
      [0,
       _iz_,
       create$19,
       _iA_,
       first_exn,
       of_list$0,
       to_list$12,
       of_fun,
       copy_to_tail,
       append,
       concat$1,
       available_now,
       filter_deprecated,
       filter_map_deprecated,
       fold$12,
       fold$13,
       iter$11,
       closed,
       iter$12,
       take_until,
       iter_durably,
       iter_durably$0,
       iter_durably_report_end,
       length$3,
       map$15,
       map$16,
       first_n,
       unfold,
       split,
       find,
       ungroup,
       interleave];
    caml_register_global
     (1225,Async_kernel_Async_stream,"Async_kernel__Async_stream");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$80);
    caml_call1(Expect_test_collector[4][1],cst_src_synchronous_time_source_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$81,cst$32);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$82);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Synchronous_time_source=
      [0,
       [0,include$11[17]],
       Read_write,
       Time_source_id,
       sexp_of_t$24,
       invariant_with_jobs$0,
       invariant$3,
       id$3,
       length$1,
       read_only,
       create$11,
       alarm_precision,
       is_wall_clock$1,
       now,
       timing_wheel_now$0,
       advance_by_alarms,
       advance_directly,
       run_at,
       run_after,
       run_at_intervals,
       max_allowed_alarm_time,
       [0,
        Event$1[16],
        Event$1[17],
        Event$1[23],
        Event$1[24],
        Event$1[26],
        Event$1[27],
        Event$1[28],
        Event$1[30],
        Event$1[29],
        Event$1[31],
        Event$1[33],
        Event$1[34],
        Event$1[35],
        Event$1[36],
        Event$1[37],
        Event$1[38]],
       default_timing_wheel_config$0,
       wall_clock];
    caml_register_global
     (1226,
      Async_kernel_Synchronous_time_source,
      "Async_kernel__Synchronous_time_source");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$83);
    caml_call1(Expect_test_collector[4][1],cst_src_time_source_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$84,cst$33);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$85);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Time_source_intf=[0];
    caml_register_global
     (1227,Async_kernel_Time_source_intf,"Async_kernel__Time_source_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$86);
    caml_call1(Expect_test_collector[4][1],cst_src_bvar_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$87,cst$34);
    function ivar(r){return r[2]}
    function set_ivar(r,v){r[2] = v;return 0}
    function _iD_(r){return r[1]}
    function set_has_any_waiters(r,v){r[1] = v;return 0}
    function _iE_(r,v){return [0,r[1],v]}
    var
     _iF_=[0,set_ivar],
     ivar$0=[0,function(param){return 0},cst_ivar,_iF_,ivar,_iE_];
    function _iG_(r,v){return [0,v,r[2]]}
    var
     _iH_=[0,set_has_any_waiters],
     has_any_waiters=
      [0,function(param){return 0},cst_has_any_waiters,_iH_,_iD_,_iG_];
    function invariant$11(invariant_a,param,t)
     {var repr=caml_call1(Bvar[2],t);
      function _xB_(param)
       {function check(f){return caml_call2(include$9[2],repr,f)}
        var
         ivar_fun=
          check
           (function(ivar)
             {invariant$7(invariant_a,ivar);
              if(is_empty(ivar))return 0;
              throw [0,Assert_failure,_iK_]}),
         has_any_waiters_fun=
          check
           (function(has_any_waiters)
             {var _xD_=has_handlers(repr[2]);
              if(_xD_)
               {if(has_any_waiters)return 0;throw [0,Assert_failure,_iL_]}
              return _xD_});
        caml_call1(has_any_waiters_fun,has_any_waiters);
        return caml_call1(ivar_fun,ivar$0)}
      function of_a(param){return _iM_}
      function _xC_(param)
       {var
         v_has_any_waiters=param[1],
         v_ivar=param[2],
         arg=sexp_of_t$33(of_a,v_ivar),
         bnds=[0,[1,[0,_iI_,[0,arg,0]]],0],
         arg$0=caml_call1(Core_kernel[291],v_has_any_waiters),
         bnds$0=[0,[1,[0,_iJ_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      return caml_call4(include$9[1],_iN_,repr,_xC_,_xB_)}
    function sexp_of_t$38(param,_xA_,t)
     {var match=caml_call1(Bvar[2],t),has_any_waiters=match[1];
      return [1,[0,_iO_,[0,caml_call1(Core_kernel[291],has_any_waiters),0]]]}
    var _iP_=Bvar$0[1];
    function broadcast(t,a)
     {var
       repr=caml_call1(Bvar[2],t),
       _xy_=repr[1],
       _xz_=
        _xy_
         ?(repr[1] = 0,fill(repr[2],a),repr[2] = caml_call1(create$13,0),0)
         :_xy_;
      return _xz_}
    function wait(t)
     {var repr=caml_call1(Bvar[2],t);repr[1] = 1;return repr[2]}
    function has_any_waiters$0(t)
     {var repr=caml_call1(Bvar[2],t);return repr[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$88);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Bvar=
      [0,sexp_of_t$38,invariant$11,_iP_,wait,broadcast,has_any_waiters$0];
    caml_register_global(1228,Async_kernel_Bvar,"Async_kernel__Bvar");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$89);
    caml_call1(Expect_test_collector[4][1],cst_src_time_source_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$90,cst$35);
    var
     Job_or_event$1=include$11[2],
     invariant_with_jobs$1=include$11[20],
     invariant$12=include$11[21];
    function sexp_of_t$39(param,_xt_)
     {var events=_xt_[4],is_wall_clock=_xt_[8];
      if(is_wall_clock)
       return caml_call1(Sexplib0_Sexp_conv[7],cst_wall_clock$0);
      var _xu_=0,_xv_=0;
      function _xw_(param){return _iQ_}
      var
       _xx_=
        [0,[1,[0,_iR_,[0,caml_call2(Timing_wheel[2],_xw_,events),_xv_]]],_xu_];
      return [1,
              [0,
               [1,[0,_iS_,[0,caml_call1(Core_kernel[291],is_wall_clock),0]]],
               _xx_]]}
    function sexp_of_t$40(v){return sexp_of_t$39(Core_kernel[190],v)}
    var Read_write$0=[0,sexp_of_t$40,invariant$12,invariant_with_jobs$1];
    function sexp_of_t$41(v){return sexp_of_t$39(Core_kernel[159],v)}
    function read_only$0(t){return t}
    function alarm_precision$0(t){return caml_call1(Timing_wheel[10],t[4])}
    function next_alarm_fires_at(t){return caml_call1(Timing_wheel[36],t[4])}
    function timing_wheel_now$1(t){return caml_call1(Timing_wheel[11],t[4])}
    function id$4(t){return t[1]}
    function now$0(t){return t[8]?caml_call1(_ah_,0):timing_wheel_now$1(t)}
    var send_exn$0=[0,send_exn];
    function advance(t,to){return advance_clock(t,to,send_exn$0)}
    function advance_by(t,by){return advance(t,after(now$0(t),by))}
    function fire_past_alarms$0(t){return fire_past_alarms(t,send_exn$0)}
    function advance_by_alarms$0(wait_for,t,to)
     {function run_queued_alarms(param)
       {if(wait_for){var f=wait_for[1];return caml_call1(f,0)}
        return wait(t[9][21])}
      function finish(param)
       {advance(t,to);fire_past_alarms$0(t);return run_queued_alarms(0)}
      function walk_alarms(param)
       {var match=next_alarm_fires_at(t);
        if(match)
         {var next_alarm_fires_at$0=match[1];
          if(caml_call2(_o_,next_alarm_fires_at$0,to))return finish(0);
          advance(t,next_alarm_fires_at$0);
          var
           _xr_=function(param){return walk_alarms(0)},
           _xs_=run_queued_alarms(0);
          return caml_call2(_h__[1],_xs_,_xr_)}
        return finish(0)}
      function _xp_(param){return walk_alarms(0)}
      var _xq_=run_queued_alarms(0);
      return caml_call2(_h__[1],_xq_,_xp_)}
    function advance_by_alarms_by(wait_for,t,by)
     {return advance_by_alarms$0(wait_for,t,after(now$0(t),by))}
    function span_to_time(t,span){return after(now$0(t),span)}
    function run_at_internal(t,time,f$0,a)
     {var execution_context=current_execution_context$1(t[9]);
      if(caml_call2(_r_,time,caml_call1(Timing_wheel[11],t[4])))
       {var
         _xm_=create_job(t[9],execution_context,f$0,a),
         _xn_=caml_call1(Job_or_event$1[2],_xm_),
         alarm=caml_call3(Timing_wheel[25],t[4],time,_xn_),
         _xo_=t[9][20];
        if(_xo_){var f=_xo_[1];caml_call1(f,time)}
        return alarm}
      enqueue$0(t[9],execution_context,f$0,a);
      return caml_call1(Timing_wheel[5][2],0)}
    function run_at$0(t,time,f,a){run_at_internal(t,time,f,a);return 0}
    function run_after$0(t,span,f,a)
     {return run_at$0(t,span_to_time(t,span),f,a)}
    function fill$1(result){return fill(result,0)}
    function at$3(t,time)
     {if(caml_call2(_p_,time,caml_call1(Timing_wheel[11],t[4])))
       return caml_call1(_h9_,0);
      var result=caml_call1(create$13,0);
      run_at_internal(t,time,fill$1,result);
      return result}
    function after$1(t,span){return at$3(t,span_to_time(t,span))}
    function remove_alarm(t,alarm)
     {var
       job_or_event=caml_call2(Timing_wheel[5][5],t[4],alarm),
       match=caml_call1(Job_or_event$1[5][1],job_or_event),
       k=match[1],
       match$0=caml_call2(Job_or_event$1[5][2],k,job_or_event);
      if(0 === k)throw [0,Assert_failure,_iT_];
      free_job(t[9],match$0);
      return caml_call2(Timing_wheel[28],t[4],alarm)}
    function sexp_of_t$42(of_a,of_h,param)
     {if(0 === param[0])
       {var v0=param[1],v0$0=caml_call1(of_a,v0);
        return [1,[0,_iU_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
      return [1,[0,_iV_,[0,v0$2,0]]]}
    var Fired=[0,sexp_of_t$42];
    function scheduled_at(r){return r[5]}
    function set_scheduled_at(r,v){r[5] = v;return 0}
    function num_fires_to_skip(r){return r[4]}
    function set_num_fires_to_skip(r,v){r[4] = v;return 0}
    function _iW_(r){return r[3]}
    function alarm$2(r){return r[1]}
    function set_alarm$1(r,v){r[1] = v;return 0}
    function _iX_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6]]}
    var
     _iY_=[0,set_scheduled_at],
     scheduled_at$0=
      [0,function(param){return 0},cst_scheduled_at,_iY_,scheduled_at,_iX_];
    function _iZ_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _i0_=[0,set_num_fires_to_skip],
     num_fires_to_skip$0=
      [0,
       function(param){return 0},
       cst_num_fires_to_skip,
       _i0_,
       num_fires_to_skip,
       _iZ_];
    function _i1_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var _i2_=0,fired=[0,function(param){return 0},cst_fired,_i2_,_iW_,_i1_];
    function _i3_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _i4_=[0,set_alarm$1],
     alarm$3=[0,function(param){return 0},cst_alarm$0,_i4_,alarm$2,_i3_];
    function sexp_of_t$43(of_a,of_h,param)
     {var
       v_alarm=param[1],
       v_fired=param[3],
       v_num_fires_to_skip=param[4],
       v_scheduled_at=param[5],
       v_time_source=param[6],
       arg=sexp_of_t$24(v_time_source),
       bnds=[0,[1,[0,_i5_,[0,arg,0]]],0],
       arg$0=caml_call1(_aI_,v_scheduled_at),
       bnds$0=[0,[1,[0,_i6_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[339],v_num_fires_to_skip),
       bnds$1=[0,[1,[0,_i7_,[0,arg$1,0]]],bnds$0],
       arg$2=sexp_of_t$33(caml_call2(Fired[1],of_a,of_h),v_fired),
       bnds$2=[0,[1,[0,_i8_,[0,arg$2,0]]],bnds$1];
      function _xk_(_xl_){return 0}
      var
       arg$3=caml_call1(Sexplib0_Sexp_conv[24],_xk_),
       bnds$3=[0,[1,[0,_i9_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call2(Timing_wheel[5][1],Job_or_event$1[6],v_alarm),
       bnds$4=[0,[1,[0,_i__,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function sexp_of_t_unit(v)
     {return sexp_of_t$43(Core_kernel[491],Core_kernel[491],v)}
    function fired$0(t){return t[3]}
    function invariant$13(invariant_a,invariant_h,t)
     {function _xb_(param)
       {var events=t[6][4];
        function check(f){return caml_call2(include$9[2],t,f)}
        var
         scheduled_at_fun=
          check
           (function(got)
             {var _xj_=caml_call2(Timing_wheel[27],events,t[1]);
              if(_xj_)
               {var expect=caml_call2(Timing_wheel[5][3],events,t[1]);
                return caml_call8
                        (Ppx_assert_lib_Runtime[3],pos$2,_aI_,_v_,0,0,0,expect,got)}
              return _xj_}),
         num_fires_to_skip_fun=
          check
           (function(num_fires_to_skip)
             {if(caml_call2(symbol$0,num_fires_to_skip,0))return 0;
              throw [0,Assert_failure,_i$_]}),
         fired_fun=
          check
           (function(fired)
             {var match=peek$0(fired);
              if(match)
               {var _xi_=match[1];
                if(0 === _xi_[0])
                 {var a=_xi_[1];return caml_call1(invariant_a,a)}
                var h=_xi_[1];
                return caml_call1(invariant_h,h)}
              return 0}),
         alarm_fun=
          check
           (function(alarm)
             {if(is_full(t[3]))
               {if(caml_call2(Timing_wheel[27],events,alarm))
                 throw [0,Assert_failure,_ja_];
                return 0}
              var _xg_=caml_call2(Timing_wheel[27],events,alarm);
              if(_xg_)
               {var _xh_=caml_call2(Timing_wheel[5][5],events,alarm);
                if(caml_call1(Job_or_event$1[4],_xh_))return 0;
                throw [0,Assert_failure,_jb_]}
              return _xg_});
        caml_call1(alarm_fun,alarm$3);
        caml_call1(fired_fun,fired);
        caml_call1(num_fires_to_skip_fun,num_fires_to_skip$0);
        caml_call1(scheduled_at_fun,scheduled_at$0);
        return 0}
      function _xc_(param){return _jc_}
      function _xd_(param){return _jd_}
      function _xe_(_xf_){return sexp_of_t$43(_xd_,_xc_,_xf_)}
      return caml_call4(include$9[1],_je_,t,_xe_,_xb_)}
    function sexp_of_t$44(of_a,of_h,param)
     {switch(param[0])
       {case 0:
         var v0=param[1],v0$0=caml_call1(of_a,v0);
         return [1,[0,_jf_,[0,v0$0,0]]];
        case 1:
         var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
         return [1,[0,_jg_,[0,v0$2,0]]];
        default:
         var v0$3=param[1],v0$4=caml_call1(_aI_,v0$3);
         return [1,[0,_jh_,[0,v0$4,0]]]}}
    var Status$1=[0,sexp_of_t$44];
    function status$2(t)
     {var match=peek$0(t[3]);
      if(match)
       {var _xa_=match[1];
        if(0 === _xa_[0]){var a=_xa_[1];return [0,a]}
        var h=_xa_[1];
        return [1,h]}
      return [2,t[5]]}
    function sexp_of_t$45(of_a,of_h,param)
     {if(typeof param === "number")
       return _ji_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_jj_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
        return [1,[0,_jk_,[0,v0$2,0]]]}}
    var Abort_result$0=[0,sexp_of_t$45];
    function abort$0(t,a)
     {if(_cD_)
       {var
         _w6_=function(param){return _jl_},
         _w7_=function(param){return _jm_};
        log
         (cst_Time_source_Event_abort,
          t,
          function(_w$_){return sexp_of_t$43(_w7_,_w6_,_w$_)})}
      var match=peek$0(t[3]);
      if(match)
       {var _w8_=match[1];
        if(0 === _w8_[0]){var a$0=_w8_[1];return [0,a$0]}
        var h=_w8_[1];
        return [1,h]}
      fill(t[3],[0,a]);
      var _w9_=t[1],_w__=t[6];
      if(caml_call2(Timing_wheel[27],_w__[4],_w9_))remove_alarm(_w__,_w9_);
      return 0}
    function abort_exn$0(t,a)
     {var match=abort$0(t,a);
      if(typeof match === "number")
       return 0;
      else
       {if(0 === match[0])
         {var
           _w4_=
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Clock_Event_abort_exn_failed_to_abort_event_that_previously_aborted);
          return caml_call1(Core_kernel[241],_w4_)}
        var
         _w5_=
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_Clock_Event_abort_exn_failed_to_abort_event_that_previously_happened);
        return caml_call1(Core_kernel[241],_w5_)}}
    function abort_if_possible$0(t,a){abort$0(t,a);return 0}
    function schedule$2(t){t[1] = run_at_internal(t[6],t[5],t[2],0);return 0}
    function sexp_of_t$46(of_a,of_h,param)
     {if(typeof param === "number")
       return _jn_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_jo_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
        return [1,[0,_jp_,[0,v0$2,0]]]}}
    var Reschedule_result$0=[0,sexp_of_t$46];
    function reschedule_at$0(t,at)
     {if(_cD_)
       log
        (cst_Time_source_Event_reschedule_at,
         [0,t,at],
         function(param)
          {var v1=param[2],v0=param[1];
           function _w3_(param){return _jq_}
           var
            v0$0=sexp_of_t$43(function(param){return _jr_},_w3_,v0),
            v1$0=caml_call1(_aI_,v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      var match=peek$0(t[3]);
      if(match)
       {var _w2_=match[1];
        if(0 === _w2_[0]){var a=_w2_[1];return [0,a]}
        var h=_w2_[1];
        return [1,h]}
      var
       events=t[6][4],
       match$0=caml_call2(Timing_wheel[27],events,t[1]),
       am_trying_to_reschedule_in_the_future=
        caml_call2(_r_,at,caml_call1(Timing_wheel[11],events));
      t[5] = at;
      if(0 === am_trying_to_reschedule_in_the_future)
       {if(0 !== match$0)
         {caml_call1(t[6][7],t[1]);caml_call2(Timing_wheel[28],events,t[1])}}
      else
       if(0 === match$0)
        {t[4] = t[4] + 1 | 0;schedule$2(t)}
       else
        caml_call3(Timing_wheel[29],events,t[1],at);
      return 0}
    function reschedule_after$0(t,span)
     {return reschedule_at$0(t,span_to_time(t[6],span))}
    function run_at$1(time_source,scheduled_at,f,z)
     {if(_cD_)log(cst_Time_source_Event_run_at,scheduled_at,_aI_);
      var _wV_=0,_wW_=caml_call1(create$13,0);
      function _wX_(_w1_){return 0}
      var
       t=
        [0,
         caml_call1(Timing_wheel[5][2],0),
         _wX_,
         _wW_,
         _wV_,
         scheduled_at,
         time_source];
      function fire(param)
       {var _wY_=is_empty(t[3]);
        if(_wY_)
         {if(caml_call2(symbol$3,t[4],0)){t[4] = t[4] - 1 | 0;return 0}
          var result=caml_call1(f,z),_wZ_=is_empty(t[3]);
          if(_wZ_)return fill(t[3],[1,result]);
          var _w0_=_wZ_}
        else
         var _w0_=_wY_;
        return _w0_}
      t[2] = fire;
      schedule$2(t);
      return t}
    function at$4(time_source,time)
     {var _wT_=0;
      return run_at$1(time_source,time,function(_wU_){return 0},_wT_)}
    function run_after$1(time_source,span,f,a)
     {return run_at$1(time_source,span_to_time(time_source,span),f,a)}
    function after$2(time_source,span)
     {return at$4(time_source,span_to_time(time_source,span))}
    function at_times(opt,t,next_time)
     {if(opt)var sth=opt[1],stop=sth;else var stop=never(0);
      var tail=create$16(0);
      function loop(param)
       {function _wP_(param)
         {return 936767357 <= param?(extend(tail,0),loop(0)):close_exn(tail)}
        var _wQ_=0;
        function _wR_(param){return 936767357}
        var _wS_=[0,[0,at$3(t,caml_call1(next_time,0)),_wR_],_wQ_];
        return upon$1
                (choose([0,[0,stop,function(param){return 926227490}],_wS_]),
                 _wP_)}
      loop(0);
      return tail[1]}
    function at_varying_intervals(stop,t,compute_span)
     {return at_times
              (stop,
               t,
               function(param)
                {var _wO_=caml_call1(compute_span,0);
                 return after(now$0(t),_wO_)})}
    function at_intervals$0(start,stop,t,interval)
     {if(start)var x=start[1],start$0=x;else var start$0=now$0(t);
      return at_times
              (stop,
               t,
               function(param)
                {return caml_call5(_aw_,0,start$0,now$0(t),interval,0)})}
    var immediately=0;
    function run_repeatedly(opt,stop,_wK_,_wJ_,t,f,continue$0)
     {if(opt)var sth=opt[1],start=sth;else var start=caml_call1(_h9_,0);
      if(_wK_)
       var sth$0=_wK_[1],continue_on_error=sth$0;
      else
       var continue_on_error=1;
      if(_wJ_)
       var sth$1=_wJ_[1],finished=sth$1;
      else
       var finished=caml_call1(create$13,0);
      return upon$1
              (start,
               function(param)
                {var alarm=[0,caml_call1(Timing_wheel[5][2],0)];
                 if(stop)
                  {var stop$0=stop[1];
                   upon$1
                    (stop$0,
                     function(param)
                      {var _wN_=caml_call2(Timing_wheel[27],t[4],alarm[1]);
                       return _wN_
                               ?(remove_alarm(t,alarm[1]),fill_if_empty(finished,0))
                               :_wN_});
                   var stop$1=stop$0}
                 else
                  var stop$1=never(0);
                 function continue_f(param)
                  {if(is_determined(stop$1))return fill_if_empty(finished,0);
                   var _wL_=0;
                   if(typeof continue$0 === "number")
                    var _wM_=caml_call1(Timing_wheel[11],t[4]);
                   else
                    if(0 === continue$0[0])
                     var span=continue$0[1],_wM_=span_to_time(t,span);
                    else
                     var
                      interval=continue$0[2],
                      base=continue$0[1],
                      _wM_=caml_call5(_aw_,0,base,now$0(t),interval,0);
                   alarm[1] = run_at_internal(t,_wM_,run_f,_wL_);
                   return 0}
                 function run_f(param)
                  {if(is_determined(stop$1))return fill_if_empty(finished,0);
                   if(continue_on_error)
                    return upon$1
                            (try_with(0,0,0,0,_jt_,_js_,f),continue_try_with);
                   var d=caml_call1(f,0);
                   return is_determined(d)?continue_f(0):upon$1(d,continue_f)}
                 function continue_try_with(or_error)
                  {if(0 !== or_error[0])
                    {var error=or_error[1];send_exn(current(0),0,error)}
                   return continue_f(0)}
                 return run_f(0)})}
    function every(start,stop,continue_on_error,finished,t,span,f)
     {if(caml_call2(_a_[15],span,_a_[74]))
       {var
         _wH_=[0,[1,[0,_ju_,[0,caml_call1(_a_[10],span),0]]],0],
         _wI_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Time_source_every_got_nonpositive_span),
            _wH_]];
        caml_call1(Core_kernel[241],_wI_)}
      return run_repeatedly
              (start,stop,continue_on_error,finished,t,f,[0,span])}
    function every$0(start,stop,continue_on_error,t,span,f)
     {return every
              (start,
               stop,
               continue_on_error,
               0,
               t,
               span,
               function(param){caml_call1(f,0);return caml_call1(_h9_,0)})}
    function run_at_intervals$0(start,stop,continue_on_error,t,interval,f)
     {var now=now$0(t);
      if(start)
       var
        start$0=start[1],
        base=start$0,
        start$1=[0,at$3(t,caml_call5(_aw_,_jv_,start$0,now,interval,0))];
      else
       var base=now,start$1=0;
      return run_repeatedly
              (start$1,stop,continue_on_error,0,t,f,[1,base,interval])}
    function run_at_intervals$1(start,stop,continue_on_error,t,interval,f)
     {return run_at_intervals$0
              (start,
               stop,
               continue_on_error,
               t,
               interval,
               function(param){caml_call1(f,0);return caml_call1(_h9_,0)})}
    function with_timeout(t,span,d)
     {var timeout=after$2(t,span),_wC_=0;
      function _wD_(param)
       {if(0 === param[0])
         {var
           _wG_=
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Time_source_with_timeout_bug_both_completed_and_timed_out);
          return caml_call1(Core_kernel[241],_wG_)}
        return 642269825}
      var _wE_=[0,[0,timeout[3],_wD_],_wC_];
      return choose
              ([0,
                [0,
                 d,
                 function(v)
                  {var match=abort$0(timeout,0);
                   if(typeof match === "number")
                    var switch$0=0;
                   else
                    if(0 === match[0])
                     {var
                       _wF_=
                        caml_call1
                         (Sexplib0_Sexp_conv[7],
                          cst_Time_source_with_timeout_bug_should_only_abort_once);
                      caml_call1(Core_kernel[241],_wF_);
                      var switch$0=1}
                    else
                     var switch$0=0;
                   return [0,1025039613,v]}],
                _wE_])}
    function of_synchronous(t){return t}
    function to_synchronous(t){return t}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$91);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$23=
      [0,
       sexp_of_t$43,
       sexp_of_t_unit,
       invariant$13,
       scheduled_at,
       Status$1,
       status$2,
       run_at$1,
       run_after$1,
       Abort_result$0,
       abort$0,
       abort_exn$0,
       abort_if_possible$0,
       Fired,
       fired$0,
       Reschedule_result$0,
       reschedule_at$0,
       reschedule_after$0,
       at$4,
       after$2],
     Async_kernel_Time_source=
      [0,
       [0,sexp_of_t$39],
       Read_write$0,
       Time_source_id,
       sexp_of_t$41,
       id$4,
       invariant$12,
       invariant_with_jobs$1,
       read_only$0,
       create$11,
       wall_clock,
       alarm_precision$0,
       next_alarm_fires_at,
       now$0,
       timing_wheel_now$1,
       advance,
       advance,
       advance_by,
       advance_by,
       fire_past_alarms$0,
       advance_by_alarms$0,
       advance_by_alarms_by,
       [0,immediately],
       run_repeatedly,
       run_at$0,
       run_after$0,
       at$3,
       after$1,
       with_timeout,
       include$23,
       at_varying_intervals,
       at_intervals$0,
       every,
       every$0,
       run_at_intervals$0,
       run_at_intervals$1,
       of_synchronous,
       to_synchronous];
    caml_register_global
     (1229,Async_kernel_Time_source,"Async_kernel__Time_source");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$92);
    caml_call1(Expect_test_collector[4][1],cst_src_stack_or_counter_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$93,cst$36);
    function sexp_of_t$47(of_v_x_001,param)
     {if(0 === param[0])
       {var v0=param[1],v0$0=caml_call2(Base_Stack[2],of_v_x_001,v0);
        return [1,[0,_jw_,[0,v0$0,0]]]}
      var
       v_length=param[1],
       arg=caml_call1(Base[115],v_length),
       bnds=[0,[1,[0,_jx_,[0,arg,0]]],0];
      return [1,[0,_jy_,bnds]]}
    function of_list$1(list){return [0,caml_call1(Base_Stack[21],list)]}
    function create_counter(length)
     {if(caml_call2(Base[184],length,0))
       {var
         _wA_=[0,[1,[0,_jz_,[0,caml_call1(Base[115],length),0]]],0],
         _wB_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Stack_or_counter_create_counter_got_negative_length),
            _wA_]];
        caml_call1(Base[207],_wB_)}
      return [1,length]}
    function length$4(t)
     {if(0 === t[0]){var s=t[1];return caml_call1(Base_Stack[5],s)}
      return t[1]}
    function clear$0(t)
     {if(0 === t[0]){var s=t[1];return caml_call1(Base_Stack[29],s)}
      t[1] = 0;
      return 0}
    function push(r,a)
     {if(0 === r[0]){var s=r[1];return caml_call2(Base_Stack[24],s,a)}
      r[1] = caml_call2(Base[165],r[1],1);
      return 0}
    function pop_exn(r)
     {if(0 === r[0]){var s=r[1];return caml_call1(Base_Stack[26],s)}
      if(caml_call2(Base[187],r[1],0))
       {var
         _wz_=
          caml_call1
           (Sexplib0_Sexp_conv[7],cst_Stack_or_counter_pop_exn_of_empty_stack);
        caml_call1(Base[207],_wz_)}
      r[1] = caml_call2(Base[166],r[1],1);
      return 0}
    function iter$13(t,f)
     {if(0 === t[0]){var s=t[1];return caml_call2(Base_Stack[7],s,f)}
      var _wx_=t[1],_ww_=1;
      if(! (_wx_ < 1))
       {var for$0=_ww_;
        for(;;)
         {caml_call1(f,0);
          var _wy_=for$0 + 1 | 0;
          if(_wx_ !== for$0){var for$0=_wy_;continue}
          break}}
      return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$94);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Stack_or_counter=
      [0,
       sexp_of_t$47,
       clear$0,
       create_counter,
       iter$13,
       length$4,
       of_list$1,
       pop_exn,
       push];
    caml_register_global
     (1232,Async_kernel_Stack_or_counter,"Async_kernel__Stack_or_counter");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$95);
    caml_call1(Expect_test_collector[4][1],cst_src_throttle_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$96,cst$37);
    function sexp_of_outcome(of_a,param)
     {if(typeof param === "number")return _jA_;
      if(17724 <= param[1])
       {var v0=param[2];return [1,[0,_jB_,[0,caml_call1(of_a,v0),0]]]}
      var v0$0=param[2];
      return [1,[0,_jC_,[0,caml_call1(Core_kernel[508],v0$0),0]]]}
    function abort$1(t){return fill(t[1],774323088)}
    function cleaned(r){return r[10]}
    function num_resources_not_cleaned(r){return r[9]}
    function set_num_resources_not_cleaned(r,v){r[9] = v;return 0}
    function cleans(r){return r[8]}
    function set_cleans(r,v){r[8] = v;return 0}
    function is_dead$0(r){return r[7]}
    function set_is_dead(r,v){r[7] = v;return 0}
    function capacity_available(r){return r[6]}
    function set_capacity_available(r,v){r[6] = v;return 0}
    function num_jobs_running(r){return r[5]}
    function set_num_jobs_running(r,v){r[5] = v;return 0}
    function jobs_waiting_to_start(r){return r[4]}
    function job_resources_not_in_use(r){return r[3]}
    function max_concurrent_jobs(r){return r[2]}
    function continue_on_error(r){return r[1]}
    function _jL_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],v]}
    var
     _jM_=0,
     cleaned$0=[0,function(param){return 0},cst_cleaned,_jM_,cleaned,_jL_];
    function _jN_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v,r[10]]}
    var
     _jO_=[0,set_num_resources_not_cleaned],
     num_resources_not_cleaned$0=
      [0,
       function(param){return 0},
       cst_num_resources_not_cleaned,
       _jO_,
       num_resources_not_cleaned,
       _jN_];
    function _jP_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9],r[10]]}
    var
     _jQ_=[0,set_cleans],
     cleans$0=[0,function(param){return 0},cst_cleans,_jQ_,cleans,_jP_];
    function _jR_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9],r[10]]}
    var
     _jS_=[0,set_is_dead],
     is_dead$1=[0,function(param){return 0},cst_is_dead,_jS_,is_dead$0,_jR_];
    function _jT_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9],r[10]]}
    var
     _jU_=[0,set_capacity_available],
     capacity_available$0=
      [0,
       function(param){return 0},
       cst_capacity_available,
       _jU_,
       capacity_available,
       _jT_];
    function _jV_(r,v)
     {return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9],r[10]]}
    var
     _jW_=[0,set_num_jobs_running],
     num_jobs_running$0=
      [0,
       function(param){return 0},
       cst_num_jobs_running,
       _jW_,
       num_jobs_running,
       _jV_];
    function _jX_(r,v)
     {return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _jY_=0,
     jobs_waiting_to_start$0=
      [0,
       function(param){return 0},
       cst_jobs_waiting_to_start,
       _jY_,
       jobs_waiting_to_start,
       _jX_];
    function _jZ_(r,v)
     {return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _j0_=0,
     job_resources_not_in_use$0=
      [0,
       function(param){return 0},
       cst_job_resources_not_in_use,
       _j0_,
       job_resources_not_in_use,
       _jZ_];
    function _j1_(r,v)
     {return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _j2_=0,
     max_concurrent_jobs$0=
      [0,
       function(param){return 0},
       cst_max_concurrent_jobs,
       _j2_,
       max_concurrent_jobs,
       _j1_];
    function _j3_(r,v)
     {return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _j4_=0,
     continue_on_error$0=
      [0,
       function(param){return 0},
       cst_continue_on_error,
       _j4_,
       continue_on_error,
       _j3_];
    function iter$14
     (continue_on_error_fun,
      max_concurrent_jobs_fun,
      job_resources_not_in_use_fun,
      jobs_waiting_to_start_fun,
      num_jobs_running_fun,
      capacity_available_fun,
      is_dead_fun,
      cleans_fun,
      num_resources_not_cleaned_fun,
      cleaned_fun)
     {caml_call1(continue_on_error_fun,continue_on_error$0);
      caml_call1(max_concurrent_jobs_fun,max_concurrent_jobs$0);
      caml_call1(job_resources_not_in_use_fun,job_resources_not_in_use$0);
      caml_call1(jobs_waiting_to_start_fun,jobs_waiting_to_start$0);
      caml_call1(num_jobs_running_fun,num_jobs_running$0);
      caml_call1(capacity_available_fun,capacity_available$0);
      caml_call1(is_dead_fun,is_dead$1);
      caml_call1(cleans_fun,cleans$0);
      caml_call1(num_resources_not_cleaned_fun,num_resources_not_cleaned$0);
      return caml_call1(cleaned_fun,cleaned$0)}
    function sexp_of_t$48(of_a,param)
     {var
       v_jobs_waiting_to_start=param[4],
       v_job_resources_not_in_use=param[3],
       v_max_concurrent_jobs=param[2],
       v_continue_on_error=param[1],
       v_num_jobs_running=param[5],
       v_capacity_available=param[6],
       v_is_dead=param[7],
       v_cleans=param[8],
       v_num_resources_not_cleaned=param[9],
       v_cleaned=param[10],
       arg=sexp_of_t$33(Core_kernel[491],v_cleaned),
       bnds=[0,[1,[0,_j5_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[339],v_num_resources_not_cleaned),
       bnds$0=[0,[1,[0,_j6_,[0,arg$0,0]]],bnds];
      function _wp_(f)
       {function _wu_(_wv_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_wu_)}
      var
       arg$1=caml_call2(Core_kernel[400],_wp_,v_cleans),
       bnds$1=[0,[1,[0,_j7_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[291],v_is_dead),
       bnds$2=[0,[1,[0,_j8_,[0,arg$2,0]]],bnds$1],
       _wq_=Core_kernel[491];
      function _wr_(_wt_){return sexp_of_t$33(_wq_,_wt_)}
      var
       arg$3=caml_call2(Core_kernel[431],_wr_,v_capacity_available),
       bnds$3=[0,[1,[0,_j9_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[339],v_num_jobs_running),
       bnds$4=[0,[1,[0,_j__,[0,arg$4,0]]],bnds$3];
      function _ws_(param)
       {var
         v_outcome=param[2],
         v_start=param[1],
         bnds=0,
         arg=
          sexp_of_t$34
           (function(param)
             {return -216426513 === param?_jD_:17724 <= param?_jE_:_jF_},
            v_outcome),
         bnds$0=[0,[1,[0,_jG_,[0,arg,0]]],bnds],
         arg$0=
          sexp_of_t$33
           (function(param)
             {if(typeof param === "number")return _jH_;
              var v0=param[2];
              return [1,[0,_jI_,[0,caml_call1(of_a,v0),0]]]},
            v_start),
         bnds$1=[0,[1,[0,_jJ_,[0,arg$0,0]]],bnds$0];
        return [1,bnds$1]}
      var
       arg$5=caml_call2(Core_kernel_Queue[11],_ws_,v_jobs_waiting_to_start),
       bnds$5=[0,[1,[0,_j$_,[0,arg$5,0]]],bnds$4],
       arg$6=sexp_of_t$47(of_a,v_job_resources_not_in_use),
       bnds$6=[0,[1,[0,_ka_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Core_kernel[339],v_max_concurrent_jobs),
       bnds$7=[0,[1,[0,_kb_,[0,arg$7,0]]],bnds$6],
       arg$8=caml_call1(Core_kernel[291],v_continue_on_error),
       bnds$8=[0,[1,[0,_kc_,[0,arg$8,0]]],bnds$7];
      return [1,bnds$8]}
    function invariant$14(invariant_a,t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _vV_=
          function(cleaned)
           {var _wo_=is_full(cleaned);
            if(_wo_)
             {if(caml_call2(symbol$2,t[9],0))return 0;
              throw [0,Assert_failure,_kg_]}
            return _wo_},
         _vW_=function(_wn_){return check(_vV_,_wn_)},
         _vX_=
          function(num_resources_not_cleaned)
           {if(caml_call2(symbol$0,num_resources_not_cleaned,0))
             {if(caml_call2(symbol$1,num_resources_not_cleaned,t[2]))
               {var _wm_=caml_call2(symbol$4,num_resources_not_cleaned,t[2]);
                if(_wm_){if(t[7])return 0;throw [0,Assert_failure,_kh_]}
                return _wm_}
              throw [0,Assert_failure,_ki_]}
            throw [0,Assert_failure,_kj_]},
         _vY_=function(_wl_){return check(_vX_,_wl_)},
         _vZ_=function(_wk_){return 0},
         _v0_=function(_wj_){return 0},
         _v1_=
          function(param)
           {if(param)
             {var ivar=param[1];
              if(is_empty(ivar))return 0;
              throw [0,Assert_failure,_kk_]}
            return 0},
         _v2_=function(_wi_){return check(_v1_,_wi_)},
         _v3_=
          function(num_jobs_running)
           {if(caml_call2(symbol$0,num_jobs_running,0))
             {if(caml_call2(symbol$1,num_jobs_running,t[2]))
               {var _wh_=caml_call2(symbol$4,num_jobs_running,t[2]);
                if(_wh_)
                 {if(caml_call1(Core_kernel_Queue[14],t[4]))return 0;
                  throw [0,Assert_failure,_kl_]}
                return _wh_}
              throw [0,Assert_failure,_km_]}
            throw [0,Assert_failure,_kn_]},
         _v4_=function(_wg_){return check(_v3_,_wg_)},
         _v5_=
          function(jobs_waiting_to_start)
           {var _wf_=t[7];
            if(_wf_)
             {if(caml_call1(Core_kernel_Queue[14],jobs_waiting_to_start))
               return 0;
              throw [0,Assert_failure,_ko_]}
            return _wf_},
         _v6_=function(_we_){return check(_v5_,_we_)},
         _v7_=
          function(job_resources_not_in_use)
           {iter$13(job_resources_not_in_use,invariant_a);
            var _wd_=t[7]?0:t[2] - t[5] | 0;
            if(caml_call2(symbol$2,length$4(job_resources_not_in_use),_wd_))
             return 0;
            throw [0,Assert_failure,_kp_]},
         _v8_=function(_wc_){return check(_v7_,_wc_)},
         _v9_=
          function(max_concurrent_jobs)
           {if(caml_call2(symbol$3,max_concurrent_jobs,0))return 0;
            throw [0,Assert_failure,_kq_]},
         _v__=function(_wb_){return check(_v9_,_wb_)},
         _v$_=
          iter$14
           (function(_wa_){return 0},
            _v__,
            _v8_,
            _v6_,
            _v4_,
            _v2_,
            _v0_,
            _vZ_,
            _vY_,
            _vW_);
        return _v$_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _vQ_=0,
         _vR_=0,
         _vS_=
          [0,
           [1,[0,_ke_,[0,sexp_of_t$48(function(param){return _kd_},t),_vR_]]],
           _vQ_],
         _vT_=[0,[1,[0,_kf_,[0,caml_call1(Core_kernel[508],exn),0]]],_vS_],
         _vU_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Throttle_invariant_failed),
            _vT_]];
        return caml_call1(Core_kernel[241],_vU_)}}
    function sexp_of_t$49(of_a,of_kind,v){return sexp_of_t$48(of_a,v)}
    function invariant$15(invariant_a,param,t)
     {return invariant$14(invariant_a,t)}
    var T2=[0,sexp_of_t$49,invariant$15];
    function num_jobs_waiting_to_start(t)
     {return caml_call1(Core_kernel_Queue[13],t[4])}
    function clean_resource(t,a)
     {function _vN_(param)
       {t[9] = t[9] - 1 | 0;
        var _vP_=caml_call2(symbol$2,t[9],0);
        return _vP_?fill(t[10],0):_vP_}
      function _vO_(f){return caml_call1(f,a)}
      return caml_call2
              (_h5_,all_unit(caml_call2(Core_kernel_List[69],t[8],_vO_)),_vN_)}
    function kill(t)
     {var _vL_=1 - t[7];
      if(_vL_)
       {t[7] = 1;
        caml_call2(Core_kernel_Queue[15],t[4],abort$1);
        caml_call1(Core_kernel_Queue[46],t[4]);
        var _vM_=function(a){return clean_resource(t,a)};
        iter$13(t[3],_vM_);
        return clear$0(t[3])}
      return _vL_}
    function at_kill(t,f)
     {var
       _vK_=caml_call1(include$22[8],f),
       f$0=caml_call1(Core_kernel[246],_vK_);
      t[8] = [0,f$0,t[8]];
      return 0}
    function cleaned$1(t){return t[10]}
    function start_job(t)
     {if(t[7])throw [0,Assert_failure,_kr_];
      if(caml_call2(symbol$4,t[5],t[2]))
       {if(caml_call1(Core_kernel_Queue[14],t[4]))
         throw [0,Assert_failure,_ks_];
        var t$0=caml_call1(Core_kernel_Queue[43],t[4]);
        t[5] = t[5] + 1 | 0;
        var
         a=pop_exn(t[3]),
         _vI_=
          function(res)
           {t[5] = t[5] - 1 | 0;
            if(! (17724 <= res))if(1 - t[1])kill(t);
            if(t[7])return clean_resource(t,a);
            push(t[3],a);
            if(caml_call1(Core_kernel_Queue[14],t[4]))
             {var _vJ_=t[6];
              if(_vJ_){var ivar=_vJ_[1];fill(ivar,0);t[6] = 0;return 0}
              return 0}
            return start_job(t)};
        fill(t$0[1],[0,389604418,a]);
        var
         _vH_=
          function(x)
           {if(-216426513 === x)throw [0,Assert_failure,_jK_];return x};
        return caml_call2(_h5_,caml_call2(_h__[2],t$0[2],_vH_),_vI_)}
      throw [0,Assert_failure,_kt_]}
    function create_internal$0(continue_on_error,job_resources)
     {var
       max_concurrent_jobs=length$4(job_resources),
       _vG_=caml_call1(create$13,0);
      return [0,
              continue_on_error,
              max_concurrent_jobs,
              job_resources,
              caml_call2(Core_kernel_Queue[60],0,0),
              0,
              0,
              0,
              0,
              max_concurrent_jobs,
              _vG_]}
    function create_with(continue_on_error,job_resources)
     {return create_internal$0(continue_on_error,of_list$1(job_resources))}
    function create$20(opt,a)
     {if(opt)
       var sth=opt[1],continue_on_error=sth;
      else
       var continue_on_error=0;
      return create_with(continue_on_error,[0,a,0])}
    var Sequencer=[0,sexp_of_t$48,create$20];
    function create$21(continue_on_error,max_concurrent_jobs)
     {if(caml_call2(symbol$1,max_concurrent_jobs,0))
       {var
         _vE_=
          [0,
           [1,[0,_ku_,[0,caml_call1(Core_kernel[339],max_concurrent_jobs),0]]],
           0],
         _vF_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Throttle_create_requires_positive_max_concurrent_jobs_but_got),
            _vE_]];
        caml_call1(Core_kernel[241],_vF_)}
      return create_internal$0
              (continue_on_error,create_counter(max_concurrent_jobs))}
    function enqueue$2(t,f)
     {var start=caml_call1(create$13,0);
      function _vA_(param)
       {if(typeof param === "number")return caml_call1(_h9_,-216426513);
        var a=param[2];
        function _vC_(param)
         {if(0 === param[0]){var a=param[1];return [0,17724,a]}
          var exn=param[1];
          return [0,-387916264,exn]}
        var
         _vD_=
          try_with(0,0,0,0,0,0,function(param){return caml_call1(f,a)});
        return caml_call2(_h__[2],_vD_,_vC_)}
      var result=caml_call2(_h__[1],start,_vA_);
      function _vB_(param)
       {return typeof param === "number"
                ?-216426513
                :17724 <= param[1]?17724:-387916264}
      var
       outcome=caml_call2(_h__[2],result,_vB_),
       internal_job=[0,start,outcome];
      if(t[7])
       abort$1(internal_job);
      else
       {caml_call2(Core_kernel_Queue[40],t[4],internal_job);
        if(caml_call2(symbol$4,t[5],t[2]))start_job(t)}
      return result}
    function handle_enqueue_result(result)
     {if(typeof result === "number")
       {var _vz_=caml_call1(Sexplib0_Sexp_conv[7],cst_throttle_aborted_job);
        return caml_call1(Core_kernel[241],_vz_)}
      if(17724 <= result[1]){var a=result[2];return a}
      var exn=result[2];
      throw exn}
    function enqueue$3(t,f)
     {return caml_call2(_h8_,enqueue$2(t,f),handle_enqueue_result)}
    function enqueue_exclusive(t,f)
     {var n=t[2];
      if(caml_call2(Core_kernel_Int[100],n,1000000))
       {var
         _vt_=
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_enqueue_exclusive_was_called_with_a_very_large_value_of_max_concurrent_jobs_This_doesn_t_work);
        caml_call1(Core_kernel[241],_vt_)}
      var done=caml_call1(create$13,0);
      if(caml_call2(symbol$3,n,0))
       {var f_placeholder=function(slot){return done},_vv_=n - 1 | 0,_vu_=1;
        if(! (_vv_ < 1))
         {var for$0=_vu_;
          for(;;)
           {enqueue$3(t,f_placeholder);
            var _vy_=for$0 + 1 | 0;
            if(_vv_ !== for$0){var for$0=_vy_;continue}
            break}}
        var
         _vw_=
          function(result){fill(done,0);return handle_enqueue_result(result)},
         _vx_=enqueue$2(t,function(slot){return caml_call1(f,0)});
        return caml_call2(_h__[2],_vx_,_vw_)}
      throw [0,Assert_failure,_kv_]}
    function monad_sequence_how(opt,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       if(-676829465 <= how)var f$0=f,switch$0=1;else var switch$0=0;
      else
       var switch$0=0;
      if(! switch$0)
       {if(typeof how === "number")
         var max_concurrent_jobs=1;
        else
         var
          max_concurrent_jobs$0=how[2],
          max_concurrent_jobs=max_concurrent_jobs$0;
        var
         t=create$21(0,max_concurrent_jobs),
         f$0=
          function(a)
           {return enqueue$3(t,function(param){return caml_call1(f,a)})}}
      return caml_call1(Core_kernel[245],f$0)}
    function monad_sequence_how2(opt,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       if(-676829465 <= how)var f$0=f,switch$0=1;else var switch$0=0;
      else
       var switch$0=0;
      if(! switch$0)
       {if(typeof how === "number")
         var max_concurrent_jobs=1;
        else
         var
          max_concurrent_jobs$0=how[2],
          max_concurrent_jobs=max_concurrent_jobs$0;
        var
         t=create$21(0,max_concurrent_jobs),
         f$0=
          function(a1,a2)
           {return enqueue$3(t,function(param){return caml_call2(f,a1,a2)})}}
      return caml_call1(Core_kernel[245],f$0)}
    function prior_jobs_done(t)
     {return create$14
              (function(all_dummy_jobs_running)
                {var dummy_jobs_running=[0,0],_vr_=t[2],_vq_=1;
                 if(! (_vr_ < 1))
                  {var for$0=_vq_;
                   for(;;)
                    {enqueue$3
                      (t,
                       function(param)
                        {dummy_jobs_running[1]++;
                         if(caml_call2(symbol$2,dummy_jobs_running[1],t[2]))
                          fill(all_dummy_jobs_running,0);
                         return all_dummy_jobs_running});
                     var _vs_=for$0 + 1 | 0;
                     if(_vr_ !== for$0){var for$0=_vs_;continue}
                     break}}
                 return 0})}
    function capacity_available$1(t)
     {if(caml_call2(symbol$4,t[5],t[2]))return caml_call1(_h9_,0);
      var _vp_=t[6];
      if(_vp_){var ivar=_vp_[1];return ivar}
      return create$14(function(ivar){t[6] = [0,ivar];return 0})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$97);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Throttle=
      [0,
       T2,
       sexp_of_t$48,
       invariant$14,
       create$21,
       create_with,
       sexp_of_outcome,
       enqueue$2,
       enqueue$3,
       enqueue_exclusive,
       monad_sequence_how,
       monad_sequence_how2,
       prior_jobs_done,
       max_concurrent_jobs,
       num_jobs_running,
       num_jobs_waiting_to_start,
       capacity_available$1,
       kill,
       is_dead$0,
       at_kill,
       cleaned$1,
       Sequencer];
    caml_register_global(1234,Async_kernel_Throttle,"Async_kernel__Throttle");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$98);
    caml_call1(Expect_test_collector[4][1],cst_src_scheduler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$99,cst$38);
    var
     _kw_=include$22[1],
     _kx_=include$22[2],
     _ky_=include$22[3],
     _kz_=include$22[4],
     _kA_=include$22[5],
     _kB_=include$22[6],
     _kC_=include$22[7],
     _kD_=include$22[8];
    function find_local$0(key)
     {return find_local(current_execution_context$1(t$5(0)),key)}
    function with_local$0(key,value,f)
     {var
       t=t$5(0),
       execution_context=with_local(current_execution_context$1(t),key,value);
      return with_execution_context(t,execution_context,f)}
    var main_execution_context$1=t$5(0)[6];
    function can_run_a_job$0(t)
     {var _vo_=caml_call2(symbol$3,num_pending_jobs(t),0);
      return _vo_?_vo_:has_any_waiters$0(t[21])}
    function has_upcoming_event(t)
     {var _vn_=events(t);return 1 - caml_call1(Timing_wheel[13],_vn_)}
    function next_upcoming_event(t)
     {var _vm_=events(t);return caml_call1(Timing_wheel[36],_vm_)}
    function next_upcoming_event_exn(t)
     {var _vl_=events(t);return caml_call1(Timing_wheel[37],_vl_)}
    function event_precision(t)
     {var _vk_=events(t);return caml_call1(Timing_wheel[10],_vk_)}
    function cycle_start$1(t){return t[10]}
    function run_every_cycle_start$1(t,f){t[12] = [0,f,t[12]];return 0}
    function map_cycle_times(t,f)
     {return create$19
              (function(tail)
                {return run_every_cycle_start$1
                         (t,function(param){return extend(tail,caml_call1(f,t[13]))})})}
    function long_cycles(t,at_least)
     {return create$19
              (function(tail)
                {return run_every_cycle_start$1
                         (t,
                          function(param)
                           {var _vj_=caml_call2(_a_[14],t[13],at_least);
                            return _vj_?extend(tail,t[13]):_vj_})})}
    function cycle_num_jobs(t)
     {return create$19
              (function(tail)
                {return run_every_cycle_start$1
                         (t,function(param){return extend(tail,t[14])})})}
    function cycle_count$1(t){return t[9]}
    function set_max_num_jobs_per_priority_per_cycle$0(t,int$0)
     {t[24] = caml_call1(Max_num_jobs_per_priority_per_cycle[4],int$0);
      return 0}
    function max_num_jobs_per_priority_per_cycle$4(t)
     {return caml_call1(Max_num_jobs_per_priority_per_cycle[5],t[24])}
    function set_thread_safe_external_job_hook$0(t,f){t[18] = f;return 0}
    function thread_safe_enqueue_external_job(t,execution_context,f,a)
     {caml_call2(Thread_safe_queue[5],t[17],[0,execution_context,f,a]);
      return caml_call1(t[18],0)}
    function set_event_added_hook$0(t,f){t[20] = [0,f];return 0}
    function set_job_queued_hook$0(t,f){t[19] = [0,f];return 0}
    function create_alarm(t,f)
     {var execution_context=current_execution_context$1(t);
      function _vi_(param)
       {return thread_safe_enqueue_external_job(t,execution_context,f,0)}
      return caml_call1(include$24[9][6][2],_vi_)}
    function add_finalizer(t,heap_block,f)
     {var execution_context=current_execution_context$1(t);
      function finalizer(heap_block)
       {if(_cG_)log_string(cst_enqueueing_finalizer);
        return thread_safe_enqueue_external_job
                (t,execution_context,f,heap_block)}
      if(_cG_)log_string(cst_adding_finalizer);
      try
       {var _vg_=caml_call2(Stdlib_gc[3],finalizer,heap_block);return _vg_}
      catch(_vh_)
       {_vh_ = caml_wrap_exception(_vh_);
        if(_vh_[1] === Stdlib[6])return 0;
        throw _vh_}}
    function add_finalizer_exn(t,x,f)
     {function _vf_(heap_block)
       {return caml_call1(f,caml_call1(Core_kernel_Heap_block[4],heap_block))}
      return add_finalizer(t,caml_call1(Core_kernel_Heap_block[3],x),_vf_)}
    function add_finalizer_last(t,heap_block,f)
     {var execution_context=current_execution_context$1(t);
      function finalizer(param)
       {if(_cG_)log_string(cst_enqueueing_finalizer_using_last_semantic);
        return thread_safe_enqueue_external_job(t,execution_context,f,0)}
      if(_cG_)log_string(cst_adding_finalizer_using_last_semantic);
      try
       {var _vd_=caml_call2(Stdlib_gc[4],finalizer,heap_block);return _vd_}
      catch(_ve_)
       {_ve_ = caml_wrap_exception(_ve_);
        if(_ve_[1] === Stdlib[6])return 0;
        throw _ve_}}
    function add_finalizer_last_exn(t,x,f)
     {return add_finalizer_last(t,caml_call1(Core_kernel_Heap_block[3],x),f)}
    function force_current_cycle_to_end(t)
     {return set_jobs_left_this_cycle$0(t[3],0)}
    var send_exn$1=[0,send_exn];
    function advance_clock$0(t,now)
     {return advance_internal(t[16],now,send_exn$1)}
    function run_cycle(t)
     {if(_cM_)log(cst_run_cycle_starting,t,sexp_of_t$31);
      caml_call1(t[26],0);
      var now=caml_call1(_ah_,0);
      t[9] = t[9] + 1 | 0;
      t[10] = now;
      t[11] = 1;
      broadcast(t[21],0);
      var num_jobs_run_at_start_of_cycle=num_jobs_run$1(t);
      function _u8_(f){return caml_call1(f,0)}
      caml_call2(Core_kernel_List[8],t[12],_u8_);
      advance_clock$0(t,now);
      start_cycle(t,t[24]);
      for(;;)
       {var match=run_jobs$0(t);
        if(0 === match[0])
         {var _u9_=t[10],cycle_time=caml_call2(_ao_,caml_call1(_ah_,0),_u9_);
          t[13] = cycle_time;
          t[14] = num_jobs_run$1(t) - num_jobs_run_at_start_of_cycle | 0;
          t[15] = caml_call2(_a_[96],t[15],cycle_time);
          var
           _u__=has_any_waiters$0(t[22]),
           _u$_=_u__?caml_call2(symbol$2,t[3][6] + t[4][6] | 0,0):_u__;
          if(_u$_)broadcast(t[22],0);
          t[11] = 0;
          caml_call1(t[27],0);
          if(_cM_)
           {var
             _va_=
              function(param)
               {var
                 v1=param[2],
                 v0=param[1],
                 v0$0=caml_call2(Core_kernel[431],Core_kernel_Error[6],v0),
                 v1$0=caml_call1(Core_kernel[291],v1);
                return [1,[0,v0$0,[0,v1$0,0]]]},
             _vb_=next_upcoming_event(t),
             _vc_=caml_call1(Core_kernel[231],_vb_);
            return log(cst_run_cycle_finished,[0,uncaught_exn$0(t),_vc_],_va_)}
          return _cM_}
        var match$0=match[1],backtrace=match$0[2],exn=match$0[1];
        send_exn(current(0),[0,[0,936718974,backtrace]],exn);
        continue}}
    function run_cycles_until_no_jobs_remain(param)
     {if(_cM_)log_string(cst_run_cycles_until_no_jobs_remain_starting);
      var t=t$5(0);
      if(is_dead(t))
       {var
         _u4_=[0,[1,[0,_kE_,[0,sexp_of_t$31(t),0]]],0],
         _u5_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_run_cycles_until_no_jobs_remain_cannot_proceed_scheduler_is_dead),
            _u4_]];
        caml_call1(Core_kernel[241],_u5_)}
      for(;;)
       {run_cycle(t);
        advance_clock$0(t,caml_call1(_ah_,0));
        if(can_run_a_job$0(t))continue;
        set_execution_context(t,t[6]);
        if(_cM_)log_string(cst_run_cycles_until_no_jobs_remain_finished);
        var _u6_=Core_kernel_Error[25],_u7_=uncaught_exn$0(t);
        return caml_call2(Core_kernel_Option[18],_u7_,_u6_)}}
    function make_async_unusable(param)
     {var t=_hv_[1];
      t[1]
      =
      [0,
       function(param)
        {var
          _u3_=
           caml_call1
            (Sexplib0_Sexp_conv[7],
             cst_Async_scheduler_is_unusable_due_to_make_async_unusable);
         return caml_call1(Core_kernel[241],_u3_)}];
      return 0}
    function reset_in_forked_process(param)
     {if(_cM_)log_string(cst_reset_in_forked_process);
      _hv_[1] = create$10(0);
      return 0}
    function check_invariants$4(t){return t[23]}
    function set_check_invariants$0(t,b){t[23] = b;return 0}
    function set_record_backtraces$0(t,b){t[25] = b;return 0}
    function set_on_start_of_cycle$0(t,f){t[26] = f;return 0}
    function set_on_end_of_cycle$0(t,f){t[27] = f;return 0}
    function yield$2(t){return wait(t[21])}
    function yield_until_no_jobs_remain$1(t){return wait(t[22])}
    function yield_every(n)
     {if(caml_call2(symbol$1,n,0))
       {var
         _uZ_=[0,[1,[0,_kF_,[0,caml_call1(Core_kernel[339],n),0]]],0],
         _u0_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_Scheduler_yield_every_got_nonpositive_count),
            _uZ_]];
        return caml_call1(Core_kernel[241],_u0_)}
      if(caml_call2(symbol$2,n,1))
       {var _u1_=function(t){return yield$2(t)};
        return caml_call1(Core_kernel[245],_u1_)}
      var count_until_yield=[0,n];
      function _u2_(t)
       {count_until_yield[1] += -1;
        return caml_call2(symbol$3,count_until_yield[1],0)
                ?caml_call1(_h9_,0)
                :(count_until_yield[1] = n,yield$2(t))}
      return caml_call1(Core_kernel[245],_u2_)}
    function total_cycle_time$1(t)
     {if(t[11])
       {var
         _uY_=t[10],
         this_cycle_time=caml_call2(_ao_,caml_call1(_ah_,0),_uY_);
        return caml_call2(_a_[96],t[15],this_cycle_time)}
      return t[15]}
    function yield_then_run(t)
     {var _uW_=1 - caml_call1(Core_kernel_Deque[15],t[5]);
      if(_uW_)
       {var _uX_=function(param){return run(t)};
        return upon$1(yield$2(t),_uX_)}
      return _uW_}
    function run_workers$0(counter,t,num_execs_before_yielding)
     {if(caml_call2(symbol$2,num_execs_before_yielding,0))
       return yield_then_run(t);
      var _uV_=1 - caml_call1(Core_kernel_Deque[15],t[5]);
      if(_uV_)
       {var worker=caml_call1(Core_kernel_Deque[60],t[5]);
        set_execution_context(t,worker[1]);
        if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return run_worker(counter$0,t,worker,num_execs_before_yielding)}
        return caml_trampoline_return
                (run_worker,[0,t,worker,num_execs_before_yielding])}
      return _uV_}
    function run_worker(counter,t,worker,num_execs_before_yielding)
     {var num_execs_before_yielding$0=num_execs_before_yielding;
      for(;;)
       {if(caml_call2(Core_kernel[234],t[7],worker[1]))
         {if(caml_call2(symbol$2,num_execs_before_yielding$0,0))
           {caml_call2(Core_kernel_Deque[51],t[5],worker);
            return yield_then_run(t)}
          var num_execs_before_yielding$1=num_execs_before_yielding$0 - 1 | 0;
          try
           {var val=caml_call1(worker[2],0)}
          catch(exn$0)
           {exn$0 = caml_wrap_exception(exn$0);
            var bt=caml_call1(Base_Backtrace[6][4],0);
            send_exn(current(0),[0,[0,936718974,bt]],exn$0);
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return run_workers$0(counter$0,t,num_execs_before_yielding$1)}
            return caml_trampoline_return
                    (run_workers$0,[0,t,num_execs_before_yielding$1]);
            var exn=exn$0}
          if(0 === val)
           {if(counter < 50)
             {var counter$1=counter + 1 | 0;
              return run_workers$0(counter$1,t,num_execs_before_yielding$1)}
            return caml_trampoline_return
                    (run_workers$0,[0,t,num_execs_before_yielding$1])}
          var num_execs_before_yielding$0=num_execs_before_yielding$1;
          continue}
        throw [0,Assert_failure,_kG_]}}
    function run_workers(t,num_execs_before_yielding)
     {return caml_trampoline(run_workers$0(0,t,num_execs_before_yielding))}
    function run(t){return run_workers(t,1000)}
    function enqueue$4(f)
     {var
       t=t$5(0),
       queue=t[5],
       running=1 - caml_call1(Core_kernel_Deque[15],queue),
       execution_context=create_like(0,_kH_,0,current_execution_context$1(t));
      caml_call2(Core_kernel_Deque[52],queue,[0,execution_context,f]);
      var _uU_=1 - running;
      return _uU_?enqueue$0(t,execution_context,run,t):_uU_}
    var For_bench=[0,advance_clock$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$100);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$25=
      [0,
       sexp_of_t$31,
       t$5,
       invariant$6,
       current_execution_context$1,
       with_execution_context,
       set_execution_context,
       enqueue$0,
       create_job,
       enqueue_job,
       free_job,
       main_execution_context$1,
       cycle_start$1,
       run_cycle,
       run_cycles_until_no_jobs_remain,
       has_upcoming_event,
       next_upcoming_event,
       next_upcoming_event_exn,
       event_precision,
       uncaught_exn$0,
       uncaught_exn_unwrapped,
       num_pending_jobs,
       num_jobs_run$1,
       map_cycle_times,
       cycle_num_jobs,
       cycle_count$1,
       total_cycle_time$1,
       max_num_jobs_per_priority_per_cycle$4,
       set_max_num_jobs_per_priority_per_cycle$0,
       set_check_access$0,
       check_access$1,
       check_invariants$4,
       set_check_invariants$0,
       set_record_backtraces$0,
       run_every_cycle_start$1,
       long_cycles,
       can_run_a_job$0,
       create_alarm,
       add_finalizer,
       add_finalizer_exn,
       add_finalizer_last,
       add_finalizer_last_exn,
       set_thread_safe_external_job_hook$0,
       set_job_queued_hook$0,
       set_event_added_hook$0,
       set_on_start_of_cycle$0,
       set_on_end_of_cycle$0,
       thread_safe_enqueue_external_job,
       force_current_cycle_to_end,
       _kw_,
       _kx_,
       _ky_,
       _kz_,
       _kA_,
       _kC_,
       _kD_,
       _kB_,
       find_local$0,
       with_local$0,
       make_async_unusable,
       reset_in_forked_process,
       yield$2,
       yield_every,
       yield_until_no_jobs_remain$1,
       [0,Very_low_priority_worker$0[1],enqueue$4],
       For_bench];
    caml_register_global(1239,include$25,"Async_kernel__Scheduler");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$101);
    caml_call1(Expect_test_collector[4][1],cst_src_async_kernel_scheduler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$102,cst$39);
    function enqueue_job$0(execution_context,f,a)
     {return enqueue$0(t$5(0),execution_context,f,a)}
    function thread_safe_enqueue_job(execution_context,f,a)
     {return thread_safe_enqueue_external_job(t$5(0),execution_context,f,a)}
    function current_execution_context$3(param)
     {return current_execution_context$1(t$5(0))}
    function cycle_count$2(param){return t$5(0)[9]}
    function cycle_start_ns(param){return t$5(0)[10]}
    function cycle_start$2(param){return caml_call1(_aB_,cycle_start_ns(0))}
    function cycle_times_ns(param)
     {function _uS_(_uT_){return _uT_}return map_cycle_times(t$5(0),_uS_)}
    function cycle_times(param)
     {var _uR_=_a_[133];return map_cycle_times(t$5(0),_uR_)}
    function total_cycle_time$2(param){return total_cycle_time$1(t$5(0))}
    function long_cycles$0(at_least){return long_cycles(t$5(0),at_least)}
    function event_precision_ns(param){return event_precision(t$5(0))}
    function event_precision$0(param)
     {var _uQ_=event_precision_ns(0);return caml_call1(_a_[133],_uQ_)}
    function set_max_num_jobs_per_priority_per_cycle$1(i)
     {return set_max_num_jobs_per_priority_per_cycle$0(t$5(0),i)}
    function max_num_jobs_per_priority_per_cycle$5(param)
     {return max_num_jobs_per_priority_per_cycle$4(t$5(0))}
    function set_record_backtraces$1(bool)
     {return set_record_backtraces$0(t$5(0),bool)}
    function force_current_cycle_to_end$0(param)
     {return force_current_cycle_to_end(t$5(0))}
    function yield$3(param){return yield$2(t$5(0))}
    function yield_until_no_jobs_remain$2(param)
     {return yield_until_no_jobs_remain$1(t$5(0))}
    function yield_every$0(n)
     {var
       _uO_=yield_every(n),
       yield_every$0=caml_call1(Base_Staged[2],_uO_),
       t=t$5(0);
      function _uP_(param){return caml_call1(yield_every$0,t)}
      return caml_call1(Core_kernel[245],_uP_)}
    function num_jobs_run$2(param){return num_jobs_run$1(t$5(0))}
    function num_pending_jobs$0(param){return num_pending_jobs(t$5(0))}
    function set_on_start_of_cycle$1(f)
     {return set_on_start_of_cycle$0(t$5(0),f)}
    function set_on_end_of_cycle$1(f){return set_on_end_of_cycle$0(t$5(0),f)}
    var
     Expert$0=
      [0,
       run_cycles_until_no_jobs_remain,
       set_on_start_of_cycle$1,
       set_on_end_of_cycle$1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$103);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Async_kernel_scheduler=
      [0,
       current_execution_context$3,
       _kB_,
       _kw_,
       _kx_,
       _ky_,
       with_local$0,
       find_local$0,
       _kz_,
       _kA_,
       enqueue_job$0,
       thread_safe_enqueue_job,
       _kC_,
       _kD_,
       cycle_start$2,
       cycle_start_ns,
       cycle_times,
       cycle_times_ns,
       long_cycles$0,
       cycle_count$2,
       total_cycle_time$2,
       event_precision$0,
       event_precision_ns,
       force_current_cycle_to_end$0,
       set_max_num_jobs_per_priority_per_cycle$1,
       max_num_jobs_per_priority_per_cycle$5,
       set_record_backtraces$1,
       yield$3,
       yield_until_no_jobs_remain$2,
       yield_every$0,
       num_jobs_run$2,
       num_pending_jobs$0,
       Expert$0];
    caml_register_global
     (1241,
      Async_kernel_Async_kernel_scheduler,
      "Async_kernel__Async_kernel_scheduler");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$104);
    caml_call1(Expect_test_collector[4][1],cst_src_clock_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$105,cst$40);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$106);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Clock_intf=[0];
    caml_register_global
     (1242,Async_kernel_Clock_intf,"Async_kernel__Clock_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$107);
    caml_call1(Expect_test_collector[4][1],cst_src_clock_ns_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$108,cst$41);
    function time_source$1(param){return t$5(0)[16]}
    function after$3(span){return after$1(time_source$1(0),span)}
    function at$5(time){return at$3(time_source$1(0),time)}
    function at_varying_intervals$0(stop,compute_span)
     {return at_varying_intervals(stop,time_source$1(0),compute_span)}
    function at_intervals$1(start,stop,interval)
     {return at_intervals$0(start,stop,time_source$1(0),interval)}
    function every$1(start,stop,continue_on_error,finished,span,f)
     {return every
              (start,stop,continue_on_error,finished,time_source$1(0),span,f)}
    function every$2(start,stop,continue_on_error,span,f)
     {return every$0(start,stop,continue_on_error,time_source$1(0),span,f)}
    function run_after$2(span,f,a)
     {return run_after$0(time_source$1(0),span,f,a)}
    function run_at$2(time,f,a){return run_at$0(time_source$1(0),time,f,a)}
    function run_at_intervals$2(start,stop,continue_on_error,interval,f)
     {return run_at_intervals$1
              (start,stop,continue_on_error,time_source$1(0),interval,f)}
    function run_at_intervals$3(start,stop,continue_on_error,interval,f)
     {return run_at_intervals$0
              (start,stop,continue_on_error,time_source$1(0),interval,f)}
    function with_timeout$0(span,d)
     {return with_timeout(time_source$1(0),span,d)}
    var
     sexp_of_t$50=include$23[1],
     sexp_of_t_unit$0=include$23[2],
     invariant$16=include$23[3],
     scheduled_at$1=include$23[4],
     Status$2=include$23[5],
     status$3=include$23[6],
     abort$2=include$23[10],
     abort_exn$1=include$23[11],
     abort_if_possible$1=include$23[12],
     fired$1=include$23[14],
     reschedule_at$1=include$23[16],
     reschedule_after$1=include$23[17],
     _kI_=include$23[7],
     _kJ_=include$23[8],
     _kK_=include$23[18],
     _kL_=include$23[19];
    function after$4(span){return caml_call2(_kL_,time_source$1(0),span)}
    function run_after$3(span,f,a)
     {return caml_call4(_kJ_,time_source$1(0),span,f,a)}
    function at$6(time){return caml_call2(_kK_,time_source$1(0),time)}
    function run_at$3(time,f,z)
     {return caml_call4(_kI_,time_source$1(0),time,f,z)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$109);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Clock_ns=
      [0,
       run_at$2,
       run_after$2,
       at$5,
       after$3,
       with_timeout$0,
       [0,
        sexp_of_t$50,
        sexp_of_t_unit$0,
        invariant$16,
        scheduled_at$1,
        Status$2,
        status$3,
        run_at$3,
        run_after$3,
        abort$2,
        abort_exn$1,
        abort_if_possible$1,
        fired$1,
        reschedule_at$1,
        reschedule_after$1,
        at$6,
        after$4],
       at_varying_intervals$0,
       at_intervals$1,
       every$1,
       every$2,
       run_at_intervals$3,
       run_at_intervals$2];
    caml_register_global(1243,Async_kernel_Clock_ns,"Async_kernel__Clock_ns");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$110);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_array_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$111,cst$42);
    function foldi(t,init,f)
     {return create$14
              (function(result)
                {function loop(i,b)
                  {var _uM_=caml_call1(Core_kernel_Array[17],t);
                   if(caml_call2(Core_kernel[90],i,_uM_))return fill(result,b);
                   function _uN_(b){return loop(i + 1 | 0,b)}
                   return caml_call2
                           (_h5_,caml_call3(f,i,b,caml_check_bound(t,i)[1 + i]),_uN_)}
                 return loop(0,init)})}
    function fold$14(t,init,f)
     {return foldi(t,init,function(param,a,x){return caml_call2(f,a,x)})}
    function seqmapi(t,f)
     {function _uI_(bs)
       {var _uL_=caml_call1(Core_kernel_List[32],bs);
        return caml_call1(Core_kernel_Array[47],_uL_)}
      var
       _uJ_=
        foldi
         (t,
          0,
          function(i,bs,a)
           {function _uK_(b){return [0,b,bs]}
            return caml_call2(_h8_,caml_call2(f,i,a),_uK_)});
      return caml_call2(_h__[2],_uJ_,_uI_)}
    function all$1(ds){return seqmapi(ds,function(param,x){return x})}
    function all_unit$0(ds)
     {return caml_call1(ignore_m,fold$14(ds,0,function(param,d){return d}))}
    function iteri(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       if(! (-676829465 <= how))
        return foldi(t,0,function(i,param,x){return caml_call2(f,i,x)});
      var
       _uG_=monad_sequence_how2([0,how],f),
       _uH_=caml_call1(Core_kernel[246],_uG_);
      return all_unit$0(caml_call2(Core_kernel_Array[54],t,_uH_))}
    function mapi(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")if(! (-676829465 <= how))return seqmapi(t,f);
      var
       _uE_=monad_sequence_how2([0,how],f),
       _uF_=caml_call1(Core_kernel[246],_uE_);
      return all$1(caml_call2(Core_kernel_Array[54],t,_uF_))}
    function filteri(how,t,f)
     {function _uA_(bools)
       {function _uC_(ac,x,b){return b?[0,x,ac]:ac}
        var _uD_=caml_call4(Core_kernel_Array[76],t,bools,0,_uC_);
        return caml_call1(Core_kernel_Array[83],_uD_)}
      var _uB_=mapi(how,t,f);
      return caml_call2(_h__[2],_uB_,_uA_)}
    function filter_mapi(how,t,f)
     {var _uz_=Core_kernel_Array[68];
      return caml_call2(_h8_,mapi(how,t,f),_uz_)}
    function concat_mapi(how,t,f)
     {function _uw_(t)
       {var _uy_=caml_call1(Core_kernel_Array[29],t);
        return caml_call1(Core_kernel_Array[39],_uy_)}
      var _ux_=mapi(how,t,f);
      return caml_call2(_h__[2],_ux_,_uw_)}
    function find_mapi(t,f)
     {function aux(i)
       {var _ut_=caml_call1(Core_kernel_Array[17],t);
        if(caml_call2(Core_kernel[90],i,_ut_))return caml_call1(_h9_,0);
        function _uu_(some){return some?caml_call1(_h9_,some):aux(i + 1 | 0)}
        var _uv_=caml_call2(f,i,caml_check_bound(t,i)[1 + i]);
        return caml_call2(_h__[1],_uv_,_uu_)}
      return aux(0)}
    function findi(t,f)
     {return find_mapi
              (t,
               function(i,elt)
                {function _ur_(b){return b?[0,[0,i,elt]]:0}
                 var _us_=caml_call2(f,i,elt);
                 return caml_call2(_h__[2],_us_,_ur_)})}
    function find$0(t,f)
     {return find_mapi
              (t,
               function(param,elt)
                {function _up_(b){return b?[0,elt]:0}
                 var _uq_=caml_call1(f,elt);
                 return caml_call2(_h__[2],_uq_,_up_)})}
    function existsi(t,f)
     {function _ul_(param){return param?1:0}
      var
       _um_=
        find_mapi
         (t,
          function(i,elt)
           {function _un_(b){return b?_kM_:0}
            var _uo_=caml_call2(f,i,elt);
            return caml_call2(_h__[2],_uo_,_un_)});
      return caml_call2(_h__[2],_um_,_ul_)}
    function for_alli(t,f)
     {function _uh_(param){return param?0:1}
      var
       _ui_=
        find_mapi
         (t,
          function(i,elt)
           {function _uj_(b){return b?0:_kN_}
            var _uk_=caml_call2(f,i,elt);
            return caml_call2(_h__[2],_uk_,_uj_)});
      return caml_call2(_h__[2],_ui_,_uh_)}
    function iter$15(how,t,f)
     {return iteri(how,t,function(param,a){return caml_call1(f,a)})}
    function map$17(how,t,f)
     {return mapi(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map(how,t,f)
     {return filter_mapi(how,t,function(param,a){return caml_call1(f,a)})}
    function filter(how,t,f)
     {return filteri(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map(how,t,f)
     {return concat_mapi(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map(t,f)
     {return find_mapi(t,function(param,a){return caml_call1(f,a)})}
    function exists$11(t,f)
     {return existsi(t,function(param,a){return caml_call1(f,a)})}
    function for_all$11(t,f)
     {return for_alli(t,function(param,a){return caml_call1(f,a)})}
    function init(how,n,f)
     {function _uf_(_ug_){return _ug_}
      return map$17(how,caml_call2(Core_kernel_Array[36],n,_uf_),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$112);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_array=
      [0,
       foldi,
       fold$14,
       find$0,
       findi,
       find_map,
       find_mapi,
       exists$11,
       existsi,
       for_all$11,
       for_alli,
       all$1,
       all_unit$0,
       init,
       iter$15,
       iteri,
       map$17,
       mapi,
       filter,
       filteri,
       filter_map,
       filter_mapi,
       concat_map,
       concat_mapi];
    caml_register_global
     (1245,Async_kernel_Deferred_array,"Async_kernel__Deferred_array");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$113);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_list_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$114,cst$43);
    function foldi$0(t,init,f)
     {return create$14
              (function(result)
                {function loop(t,i,b)
                  {if(t)
                    {var
                      xs=t[2],
                      x=t[1],
                      _ue_=function(b){return loop(xs,i + 1 | 0,b)};
                     return caml_call2(_h5_,caml_call3(f,i,b,x),_ue_)}
                   return fill(result,b)}
                 return loop(t,0,init)})}
    function fold$15(t,init,f)
     {return foldi$0(t,init,function(param,a,x){return caml_call2(f,a,x)})}
    function seqmapi$0(t,f)
     {var _ub_=Core_kernel_List[32];
      return caml_call2
              (_h8_,
               foldi$0
                (t,
                 0,
                 function(i,bs,a)
                  {function _uc_(b){return [0,b,bs]}
                   var _ud_=caml_call2(f,i,a);
                   return caml_call2(_h__[2],_ud_,_uc_)}),
               _ub_)}
    function all$2(ds){return seqmapi$0(ds,function(param,x){return x})}
    function all_unit$1(ds)
     {return caml_call1(ignore_m,fold$15(ds,0,function(param,d){return d}))}
    function iteri$0(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       if(! (-676829465 <= how))
        return foldi$0(t,0,function(i,param,x){return caml_call2(f,i,x)});
      var
       _t$_=monad_sequence_how2([0,how],f),
       _ua_=caml_call1(Core_kernel[246],_t$_);
      return all_unit$1(caml_call2(Core_kernel_List[89],t,_ua_))}
    function mapi$0(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       if(! (-676829465 <= how))return seqmapi$0(t,f);
      var
       _t9_=monad_sequence_how2([0,how],f),
       _t__=caml_call1(Core_kernel[246],_t9_);
      return all$2(caml_call2(Core_kernel_List[89],t,_t__))}
    function filteri$0(how,t,f)
     {function _t5_(bools)
       {function _t7_(ac,x,b){return b?[0,x,ac]:ac}
        var _t8_=caml_call4(Core_kernel_List[40],t,bools,0,_t7_);
        return caml_call1(Core_kernel_List[32],_t8_)}
      var _t6_=mapi$0(how,t,f);
      return caml_call2(_h__[2],_t6_,_t5_)}
    function filter_mapi$0(how,t,f)
     {var _t4_=Core_kernel_List[118];
      return caml_call2(_h8_,mapi$0(how,t,f),_t4_)}
    function concat_mapi$0(how,t,f)
     {var _t3_=Core_kernel_List[127];
      return caml_call2(_h8_,mapi$0(how,t,f),_t3_)}
    function find_mapi$0(t,f)
     {function find_mapi(t,f,i)
       {if(t)
         {var
           tl=t[2],
           hd=t[1],
           _t1_=
            function(some)
             {return some?caml_call1(_h9_,some):find_mapi(tl,f,i + 1 | 0)},
           _t2_=caml_call2(f,i,hd);
          return caml_call2(_h__[1],_t2_,_t1_)}
        return caml_call1(_h9_,0)}
      return find_mapi(t,f,0)}
    function findi$0(t,f)
     {return find_mapi$0
              (t,
               function(i,elt)
                {function _tZ_(b){return b?[0,[0,i,elt]]:0}
                 var _t0_=caml_call2(f,i,elt);
                 return caml_call2(_h__[2],_t0_,_tZ_)})}
    function find$1(t,f)
     {return find_mapi$0
              (t,
               function(param,elt)
                {function _tX_(b){return b?[0,elt]:0}
                 var _tY_=caml_call1(f,elt);
                 return caml_call2(_h__[2],_tY_,_tX_)})}
    function existsi$0(t,f)
     {function _tT_(param){return param?1:0}
      var
       _tU_=
        find_mapi$0
         (t,
          function(i,elt)
           {function _tV_(b){return b?_kO_:0}
            var _tW_=caml_call2(f,i,elt);
            return caml_call2(_h__[2],_tW_,_tV_)});
      return caml_call2(_h__[2],_tU_,_tT_)}
    function for_alli$0(t,f)
     {function _tP_(param){return param?0:1}
      var
       _tQ_=
        find_mapi$0
         (t,
          function(i,elt)
           {function _tR_(b){return b?0:_kP_}
            var _tS_=caml_call2(f,i,elt);
            return caml_call2(_h__[2],_tS_,_tR_)});
      return caml_call2(_h__[2],_tQ_,_tP_)}
    function iter$16(how,t,f)
     {return iteri$0(how,t,function(param,a){return caml_call1(f,a)})}
    function map$18(how,t,f)
     {return mapi$0(how,t,function(param,a){return caml_call1(f,a)})}
    function filter$0(how,t,f)
     {return filteri$0(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map$0(how,t,f)
     {return filter_mapi$0(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map$0(how,t,f)
     {return concat_mapi$0(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map$0(t,f)
     {return find_mapi$0(t,function(param,a){return caml_call1(f,a)})}
    function exists$12(t,f)
     {return existsi$0(t,function(param,a){return caml_call1(f,a)})}
    function for_all$12(t,f)
     {return for_alli$0(t,function(param,a){return caml_call1(f,a)})}
    function init$0(how,n,f)
     {function _tN_(_tO_){return _tO_}
      return map$18(how,caml_call2(Core_kernel_List[113],n,_tN_),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$115);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_list=
      [0,
       foldi$0,
       fold$15,
       find$1,
       findi$0,
       find_map$0,
       find_mapi$0,
       exists$12,
       existsi$0,
       for_all$12,
       for_alli$0,
       all$2,
       all_unit$1,
       init$0,
       iter$16,
       iteri$0,
       map$18,
       mapi$0,
       filter$0,
       filteri$0,
       filter_map$0,
       filter_mapi$0,
       concat_map$0,
       concat_mapi$0];
    caml_register_global
     (1246,Async_kernel_Deferred_list,"Async_kernel__Deferred_list");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$116);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_map_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$117,cst$44);
    function change(t,k,f)
     {function _tK_(opt)
       {function _tM_(param){return opt}
        return caml_call3(Core_kernel_Map[35],t,k,_tM_)}
      var _tL_=caml_call1(f,caml_call2(Core_kernel_Map[37],t,k));
      return caml_call2(_h__[2],_tL_,_tK_)}
    function update(t,k,f)
     {function _tI_(data){return caml_call3(Core_kernel_Map[31],t,k,data)}
      var _tJ_=caml_call1(f,caml_call2(Core_kernel_Map[37],t,k));
      return caml_call2(_h__[2],_tJ_,_tI_)}
    function iter_keys(how,t,f)
     {return iter$16(how,caml_call1(Core_kernel_Map[66],t),f)}
    function iter$17(how,t,f)
     {return iter$16(how,caml_call1(Core_kernel_Map[67],t),f)}
    function iteri$1(how,t,f)
     {function _tH_(param)
       {var data=param[2],key=param[1];return caml_call2(f,key,data)}
      return iter$16(how,caml_call2(Core_kernel_Map[68],0,t),_tH_)}
    function fold$16(t,init,f)
     {function _tG_(key,data,alist){return [0,[0,key,data],alist]}
      var
       alist_in_increasing_key_order=
        caml_call3(Core_kernel_Map[52],t,0,_tG_);
      return fold$15
              (alist_in_increasing_key_order,
               init,
               function(ac,param)
                {var data=param[2],key=param[1];
                 return caml_call3(f,key,data,ac)})}
    function fold_right(t,init,f)
     {function _tF_(key,data,alist){return [0,[0,key,data],alist]}
      var
       alist_in_decreasing_key_order=
        caml_call3(Core_kernel_Map[51],t,0,_tF_);
      return fold$15
              (alist_in_decreasing_key_order,
               init,
               function(ac,param)
                {var data=param[2],key=param[1];
                 return caml_call3(f,key,data,ac)})}
    function result(r){return r[3]}
    function filter_mapi$1(how,t,f)
     {var jobs=[0,0];
      function _tz_(key,data)
       {var job=[0,key,data,0];jobs[1] = [0,job,jobs[1]];return job}
      var job_map=caml_call2(Core_kernel_Map[50],t,_tz_);
      function _tA_(param)
       {return caml_call2(Core_kernel_Map[57],job_map,result)}
      function _tB_(job)
       {var data=job[2],key=job[1];
        function _tD_(x){job[3] = x;return 0}
        var _tE_=caml_call2(f,key,data);
        return caml_call2(_h__[2],_tE_,_tD_)}
      var _tC_=iter$16(how,jobs[1],_tB_);
      return caml_call2(_h__[2],_tC_,_tA_)}
    function filter_map$1(how,t,f)
     {return filter_mapi$1
              (how,t,function(param,data){return caml_call1(f,data)})}
    function filter_keys(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(key,data)
                {function _tx_(b){return b?[0,data]:0}
                 var _ty_=caml_call1(f,key);
                 return caml_call2(_h__[2],_ty_,_tx_)})}
    function filter$1(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(param,data)
                {function _tv_(b){return b?[0,data]:0}
                 var _tw_=caml_call1(f,data);
                 return caml_call2(_h__[2],_tw_,_tv_)})}
    function filteri$1(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(key,data)
                {function _tt_(b){return b?[0,data]:0}
                 var _tu_=caml_call2(f,key,data);
                 return caml_call2(_h__[2],_tu_,_tt_)})}
    function mapi$1(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(key,data)
                {function _tr_(z){return [0,z]}
                 var _ts_=caml_call2(f,key,data);
                 return caml_call2(_h__[2],_ts_,_tr_)})}
    function map$19(how,t,f)
     {return mapi$1(how,t,function(param,data){return caml_call1(f,data)})}
    function merge(how,t1,t2,f)
     {function _tp_(thunk){return caml_call1(thunk,0)}
      function _tq_(key,z)
       {return [0,function(param){return caml_call2(f,key,z)}]}
      return filter_map$1(how,caml_call3(Core_kernel_Map[70],t1,t2,_tq_),_tp_)}
    function all$3(t){return map$19(0,t,function(_to_){return _to_})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$118);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_map=
      [0,
       change,
       update,
       iter_keys,
       iter$17,
       iteri$1,
       map$19,
       mapi$1,
       fold$16,
       fold_right,
       filter_keys,
       filter$1,
       filteri$1,
       filter_map$1,
       filter_mapi$1,
       merge,
       all$3];
    caml_register_global
     (1248,Async_kernel_Deferred_map,"Async_kernel__Deferred_map");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$119);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_memo_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$120,cst$45);
    function reraise(param)
     {if(0 === param[0]){var x=param[1];return x}
      var exn=param[1];
      return caml_call2
              (Base_Exn[7],exn,cst_caught_exception_in_memoized_function)}
    function general(hashable,f)
     {function _tm_(a)
       {return try_with
                (0,0,0,0,_kQ_,0,function(param){return caml_call1(f,a)})}
      var f$0=caml_call3(Core_kernel_Memo[1],[0,hashable[4]],0,_tm_);
      function _tn_(a){return caml_call2(_h8_,caml_call1(f$0,a),reraise)}
      return caml_call1(Base_Staged[1],_tn_)}
    function unit$0(f)
     {function _tk_(param){return try_with(0,0,0,0,_kR_,0,f)}
      var f$0=caml_call1(Core_kernel_Memo[2],_tk_);
      function _tl_(param){return caml_call2(_h8_,caml_call1(f$0,0),reraise)}
      return caml_call1(Base_Staged[1],_tl_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$121);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Deferred_memo=[0,general,unit$0];
    caml_register_global
     (1250,Async_kernel_Deferred_memo,"Async_kernel__Deferred_memo");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$122);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_option_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$123,cst$46);
    function return$1(a){return return$0([0,a])}
    function bind$2(t,f)
     {return caml_call2
              (bind$0,
               t,
               function(param)
                {if(param){var a=param[1];return caml_call1(f,a)}
                 return return$0(0)})}
    var
     map$20=
      [0,
       -198771759,
       function(t,f)
        {return caml_call2
                 (map$12,
                  t,
                  function(r){return caml_call2(Core_kernel_Option[38],r,f)})}],
     include$26=caml_call1(Base_Monad[1],[0,bind$2,return$1,map$20]),
     _kS_=include$26[1],
     _kT_=include$26[2],
     _kU_=include$26[3],
     _kV_=include$26[4],
     _kW_=include$26[5],
     _kX_=include$26[6],
     _kY_=include$26[7],
     _kZ_=include$26[8],
     _k0_=include$26[9],
     _k1_=include$26[10],
     _k2_=include$26[11];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$124);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_option=
      [0,_kS_,_kT_,_kU_,_kV_,_kW_,_kX_,_kY_,_kZ_,_k0_,_k1_,_k2_];
    caml_register_global
     (1251,Async_kernel_Deferred_option,"Async_kernel__Deferred_option");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$125);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_result_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$126,cst$47);
    function combine(t1,t2,ok,err)
     {function _ti_(param)
       {var t2=param[2],t1=param[1];
        return caml_call4(Core_kernel_Result[38],t1,t2,ok,err)}
      var _tj_=caml_call2(_h__[3],t1,t2);
      return caml_call2(_h__[2],_tj_,_ti_)}
    function return$2(a){return return$0([0,a])}
    function bind$3(t,f)
     {return caml_call2
              (bind$0,
               t,
               function(error)
                {if(0 === error[0]){var a=error[1];return caml_call1(f,a)}
                 return return$0(error)})}
    var
     map$21=
      [0,
       -198771759,
       function(t,f)
        {return caml_call2
                 (map$12,
                  t,
                  function(r){return caml_call2(Core_kernel_Result[36],r,f)})}],
     include$27=caml_call1(Base_Monad[2],[0,bind$3,map$21,return$2]),
     symbol_bind$1=include$27[1],
     _k3_=include$27[2],
     Monad_infix$0=include$27[4],
     bind$4=include$27[5],
     return$3=include$27[6],
     _k5_=include$27[7],
     join$0=include$27[8],
     ignore_m$0=include$27[9],
     _k4_=include$27[3],
     _k6_=include$27[10],
     _k7_=include$27[11];
    function fail(x){return return$0([1,x])}
    function failf(format)
     {return caml_call2(Core_kernel_Printf[4],fail,format)}
    function map_error(t,f)
     {return caml_call2
              (map$12,
               t,
               function(r){return caml_call2(Core_kernel_Result[37],r,f)})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$127);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_result=
      [0,
       symbol_bind$1,
       _k3_,
       _k4_,
       Monad_infix$0,
       bind$4,
       return$3,
       _k5_,
       join$0,
       ignore_m$0,
       _k6_,
       _k7_,
       ignore_m$0,
       fail,
       failf,
       map_error,
       combine];
    caml_register_global
     (1253,Async_kernel_Deferred_result,"Async_kernel__Deferred_result");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$128);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_or_error_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$129,cst$48);
    function apply(f,x)
     {function _th_(e1,e2)
       {return caml_call2(Core_kernel_Error[21],0,[0,e1,[0,e2,0]])}
      return combine(f,x,function(f,x){return caml_call1(f,x)},_th_)}
    var
     map$22=[0,-198771759,_k5_],
     include$28=caml_call1(Base_Applicative[5],[0,return$3,apply,map$22]),
     return$4=include$28[1],
     map$23=include$28[2],
     both$1=include$28[3],
     symbol$6=include$28[4],
     symbol$7=include$28[5],
     symbol$8=include$28[6],
     apply$0=include$28[8],
     map2=include$28[9],
     map3=include$28[10],
     all$4=include$28[11],
     all_unit$2=include$28[12],
     Applicative_infix=include$28[13],
     symbol_bind$2=Monad_infix$0[1],
     symbol_map$1=Monad_infix$0[2],
     Open_on_rhs$0=[0],
     _k8_=include$28[7];
    function fail$0(error)
     {return return$0(caml_call1(Core_kernel_Result[25],error))}
    function ok_exn(t){return caml_call2(map$12,t,Core_kernel_Or_error[36])}
    function of_exn(exn)
     {return return$0(caml_call2(Core_kernel_Or_error[37],0,exn))}
    function of_exn_result(t)
     {var arg=Core_kernel_Or_error[38];
      return caml_call2(map$12,t,function(eta){return caml_call2(arg,0,eta)})}
    function error$0(msg,v,sexp_of)
     {return return$0(caml_call4(Core_kernel_Or_error[39],0,msg,v,sexp_of))}
    function error_s(sexp)
     {return return$0(caml_call1(Core_kernel_Or_error[40],sexp))}
    function error_string(msg)
     {return return$0(caml_call1(Core_kernel_Or_error[41],msg))}
    function errorf(format)
     {return caml_call2(Core_kernel[232],error_string,format)}
    function tag(t,tag)
     {var _tf_=Core_kernel_Or_error[43];
      return caml_call2
              (map$12,t,function(_tg_){return caml_call2(_tf_,_tg_,tag)})}
    function tag_s(t,tag)
     {var _td_=Core_kernel_Or_error[44];
      return caml_call2
              (map$12,t,function(_te_){return caml_call2(_td_,_te_,tag)})}
    function tag_arg(t,message,a,sexp_of_a)
     {return caml_call2
              (map$12,
               t,
               function(t)
                {return caml_call4
                         (Core_kernel_Or_error[45],t,message,a,sexp_of_a)})}
    function unimplemented(msg)
     {return return$0(caml_call1(Core_kernel_Or_error[46],msg))}
    function combine_errors(l)
     {var _tc_=Core_kernel_Or_error[50];
      return caml_call2(map$12,all$0(l),_tc_)}
    function combine_errors_unit(l)
     {var _tb_=Core_kernel_Or_error[51];
      return caml_call2(map$12,all$0(l),_tb_)}
    function filter_ok_at_least_one(l)
     {var _ta_=Core_kernel_Or_error[52];
      return caml_call2(map$12,all$0(l),_ta_)}
    function find_map_ok(l,f)
     {return repeat_until_finished
              ([0,l,0],
               function(param)
                {var errors=param[2],l=param[1];
                 if(l)
                  {var
                    tl=l[2],
                    hd=l[1],
                    _s__=
                     function(param)
                      {if(0 === param[0])
                        {var result=param[1];return [0,-289386606,[0,result]]}
                       var current_error=param[1];
                       return [0,990972795,[0,tl,[0,current_error,errors]]]};
                   return caml_call2(map$12,caml_call1(f,hd),_s__)}
                 var
                  _s$_=caml_call1(Core_kernel_List[32],errors),
                  errors$0=caml_call2(Core_kernel_Error[21],0,_s$_);
                 return return$0([0,-289386606,[1,errors$0]])})}
    var ok_unit=caml_call1(return$4,0);
    function try_with$0(extract_exn,run,here,name,f)
     {function _s9_(ok)
       {if(0 === ok[0])return ok;
        var exn=ok[1];
        return [1,caml_call2(Core_kernel_Error[22],0,exn)]}
      return caml_call2(map$12,try_with(here,0,name,extract_exn,run,0,f),_s9_)}
    function try_with_join(extract_exn,run,here,name,f)
     {var _s8_=Core_kernel_Or_error[26];
      return caml_call2(map$12,try_with$0(extract_exn,run,here,name,f),_s8_)}
    function foldi$1(list,acc,f)
     {function loop(i,acc,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _s7_=function(acc){return loop(i + 1 | 0,acc,tl)};
          return caml_call2(bind$4,caml_call3(f,i,acc,hd),_s7_)}
        return caml_call1(return$4,acc)}
      return loop(0,acc,list)}
    function fold$17(t,init,f)
     {return foldi$1(t,init,function(param,a,x){return caml_call2(f,a,x)})}
    function iteri$2(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       if(! (-676829465 <= how))
        return foldi$1(t,0,function(i,param,x){return caml_call2(f,i,x)});
      var
       _s5_=monad_sequence_how2([0,how],f),
       _s6_=caml_call1(Core_kernel[246],_s5_);
      return caml_call1(all_unit$2,caml_call2(Core_kernel_List[89],t,_s6_))}
    function mapi$2(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       if(! (-676829465 <= how))
        {var _s1_=Core_kernel_List[32];
         return caml_call2
                 (symbol_map$1,
                  foldi$1
                   (t,
                    0,
                    function(i,bs,a)
                     {function _s4_(b){return [0,b,bs]}
                      return caml_call2(map$23,caml_call2(f,i,a),_s4_)}),
                  _s1_)}
      var
       _s2_=monad_sequence_how2([0,how],f),
       _s3_=caml_call1(Core_kernel[246],_s2_);
      return caml_call1(all$4,caml_call2(Core_kernel_List[89],t,_s3_))}
    function filter_mapi$2(how,t,f)
     {var _s0_=Core_kernel_List[118];
      return caml_call2(symbol_map$1,mapi$2(how,t,f),_s0_)}
    function concat_mapi$1(how,t,f)
     {var _sZ_=Core_kernel_List[127];
      return caml_call2(symbol_map$1,mapi$2(how,t,f),_sZ_)}
    function filteri$2(how,t,f)
     {return filter_mapi$2
              (how,
               t,
               function(i,x)
                {function _sY_(b){return b?[0,x]:0}
                 return caml_call2(map$23,caml_call2(f,i,x),_sY_)})}
    function find_mapi$1(t,f)
     {function find_mapi(t,f,i)
       {if(t)
         {var
           tl=t[2],
           hd=t[1],
           _sX_=
            function(some)
             {return some?caml_call1(return$4,some):find_mapi(tl,f,i + 1 | 0)};
          return caml_call2(bind$4,caml_call2(f,i,hd),_sX_)}
        return caml_call1(return$4,0)}
      return find_mapi(t,f,0)}
    function findi$1(t,f)
     {return find_mapi$1
              (t,
               function(i,elt)
                {function _sW_(b){return b?[0,[0,i,elt]]:0}
                 return caml_call2(map$23,caml_call2(f,i,elt),_sW_)})}
    function find$2(t,f)
     {return find_mapi$1
              (t,
               function(param,elt)
                {function _sV_(b){return b?[0,elt]:0}
                 return caml_call2(map$23,caml_call1(f,elt),_sV_)})}
    function existsi$1(t,f)
     {function _sT_(param){return param?1:0}
      return caml_call2
              (map$23,
               find_mapi$1
                (t,
                 function(i,elt)
                  {function _sU_(b){return b?_k9_:0}
                   return caml_call2(map$23,caml_call2(f,i,elt),_sU_)}),
               _sT_)}
    function for_alli$1(t,f)
     {function _sR_(param){return param?0:1}
      return caml_call2
              (map$23,
               find_mapi$1
                (t,
                 function(i,elt)
                  {function _sS_(b){return b?0:_k__}
                   return caml_call2(map$23,caml_call2(f,i,elt),_sS_)}),
               _sR_)}
    function iter$18(how,t,f)
     {return iteri$2(how,t,function(param,a){return caml_call1(f,a)})}
    function map$24(how,t,f)
     {return mapi$2(how,t,function(param,a){return caml_call1(f,a)})}
    function filter$2(how,t,f)
     {return filteri$2(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map$2(how,t,f)
     {return filter_mapi$2(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map$1(how,t,f)
     {return concat_mapi$1(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map$1(t,f)
     {return find_mapi$1(t,function(param,a){return caml_call1(f,a)})}
    function exists$13(t,f)
     {return existsi$1(t,function(param,a){return caml_call1(f,a)})}
    function for_all$13(t,f)
     {return for_alli$1(t,function(param,a){return caml_call1(f,a)})}
    function init$1(how,n,f)
     {function _sP_(_sQ_){return _sQ_}
      return map$24(how,caml_call2(Core_kernel_List[113],n,_sP_),f)}
    function repeat_until_finished$0(state,f)
     {function _sO_(param)
       {if(990972795 <= param[1])
         {var state=param[2];return repeat_until_finished$0(state,f)}
        var state$0=param[2];
        return caml_call1(return$4,state$0)}
      return caml_call2(bind$4,caml_call1(f,state),_sO_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$130);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_or_error=
      [0,
       both$1,
       symbol$6,
       symbol$7,
       symbol$8,
       apply$0,
       map2,
       map3,
       Applicative_infix,
       symbol_bind$1,
       _k8_,
       Monad_infix$0,
       bind$4,
       return$4,
       map$23,
       join$0,
       ignore_m$0,
       all$4,
       all_unit$2,
       [0,
        return$4,
        symbol_bind$2,
        symbol_map$1,
        [0,return$4,bind$4,map$23,both$1,Open_on_rhs$0]],
       fail$0,
       ignore_m$0,
       ok_exn,
       of_exn,
       of_exn_result,
       error$0,
       error_s,
       error_string,
       errorf,
       tag,
       tag_s,
       tag_arg,
       unimplemented,
       combine_errors,
       combine_errors_unit,
       filter_ok_at_least_one,
       find_map_ok,
       ok_unit,
       try_with$0,
       try_with_join,
       [0,
        foldi$1,
        fold$17,
        find$2,
        findi$1,
        find_map$1,
        find_mapi$1,
        exists$13,
        existsi$1,
        for_all$13,
        for_alli$1,
        all$4,
        all_unit$2,
        init$1,
        iter$18,
        iteri$2,
        map$24,
        mapi$2,
        filter$2,
        filteri$2,
        filter_map$2,
        filter_mapi$2,
        concat_map$1,
        concat_mapi$1],
       repeat_until_finished$0];
    caml_register_global
     (1255,Async_kernel_Deferred_or_error,"Async_kernel__Deferred_or_error");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$131);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_queue_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$132,cst$49);
    function foldi$2(t,init,f)
     {return foldi$0(caml_call1(Core_kernel_Queue[25],t),init,f)}
    function fold$18(t,init,f)
     {return fold$15(caml_call1(Core_kernel_Queue[25],t),init,f)}
    function all$5(t)
     {var _sN_=Core_kernel_Queue[37];
      return caml_call2(_h8_,all$2(caml_call1(Core_kernel_Queue[25],t)),_sN_)}
    function all_unit$3(t)
     {return all_unit$1(caml_call1(Core_kernel_Queue[25],t))}
    function iter$19(how,t,f)
     {return iter$16(how,caml_call1(Core_kernel_Queue[25],t),f)}
    function iteri$3(how,t,f)
     {return iteri$0(how,caml_call1(Core_kernel_Queue[25],t),f)}
    function map$25(how,t,f)
     {var _sM_=Core_kernel_Queue[37];
      return caml_call2
              (_h8_,map$18(how,caml_call1(Core_kernel_Queue[25],t),f),_sM_)}
    function mapi$3(how,t,f)
     {var _sL_=Core_kernel_Queue[37];
      return caml_call2
              (_h8_,mapi$0(how,caml_call1(Core_kernel_Queue[25],t),f),_sL_)}
    function init$2(how,n,f)
     {var _sK_=Core_kernel_Queue[37];
      return caml_call2(_h8_,init$0(how,n,f),_sK_)}
    function filter$3(how,t,f)
     {var _sJ_=Core_kernel_Queue[37];
      return caml_call2
              (_h8_,filter$0(how,caml_call1(Core_kernel_Queue[25],t),f),_sJ_)}
    function filteri$3(how,t,f)
     {var _sI_=Core_kernel_Queue[37];
      return caml_call2
              (_h8_,filteri$0(how,caml_call1(Core_kernel_Queue[25],t),f),_sI_)}
    function filter_map$3(how,t,f)
     {var _sH_=Core_kernel_Queue[37];
      return caml_call2
              (_h8_,
               filter_map$0(how,caml_call1(Core_kernel_Queue[25],t),f),
               _sH_)}
    function filter_mapi$3(how,t,f)
     {var _sG_=Core_kernel_Queue[37];
      return caml_call2
              (_h8_,
               filter_mapi$0(how,caml_call1(Core_kernel_Queue[25],t),f),
               _sG_)}
    function concat_map$2(how,t,f)
     {var _sD_=Core_kernel_Queue[37];
      function _sE_(x)
       {var _sF_=Core_kernel_Queue[25];
        return caml_call2(_h8_,caml_call1(f,x),_sF_)}
      return caml_call2
              (_h8_,
               concat_map$0(how,caml_call1(Core_kernel_Queue[25],t),_sE_),
               _sD_)}
    function concat_mapi$2(how,t,f)
     {var _sA_=Core_kernel_Queue[37];
      function _sB_(i,x)
       {var _sC_=Core_kernel_Queue[25];
        return caml_call2(_h8_,caml_call2(f,i,x),_sC_)}
      return caml_call2
              (_h8_,
               concat_mapi$0(how,caml_call1(Core_kernel_Queue[25],t),_sB_),
               _sA_)}
    function find_map$2(t,f)
     {return find_map$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function find_mapi$2(t,f)
     {return find_mapi$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function find$3(t,f){return find$1(caml_call1(Core_kernel_Queue[25],t),f)}
    function findi$2(t,f)
     {return findi$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function for_all$14(t,f)
     {return for_all$12(caml_call1(Core_kernel_Queue[25],t),f)}
    function for_alli$2(t,f)
     {return for_alli$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function exists$14(t,f)
     {return exists$12(caml_call1(Core_kernel_Queue[25],t),f)}
    function existsi$2(t,f)
     {return existsi$0(caml_call1(Core_kernel_Queue[25],t),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$133);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_queue=
      [0,
       foldi$2,
       fold$18,
       find$3,
       findi$2,
       find_map$2,
       find_mapi$2,
       exists$14,
       existsi$2,
       for_all$14,
       for_alli$2,
       all$5,
       all_unit$3,
       init$2,
       iter$19,
       iteri$3,
       map$25,
       mapi$3,
       filter$3,
       filteri$3,
       filter_map$3,
       filter_mapi$3,
       concat_map$2,
       concat_mapi$2];
    caml_register_global
     (1256,Async_kernel_Deferred_queue,"Async_kernel__Deferred_queue");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$134);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_sequence_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$135,cst$50);
    function fold_mapi(opt,t,init,mapi_f,fold_f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       {if(-676829465 <= how)
         {var c$1=caml_call1(_h9_,init),i=0,t$0=t,c=c$1;
          for(;;)
           {var match=caml_call1(Core_kernel_Sequence[47],t$0);
            if(match)
             {var
               match$0=match[1],
               t$1=match$0[2],
               a=match$0[1],
               _sq_=
                function(c)
                  {return function(b)
                    {function _sz_(c){return caml_call2(fold_f,c,b)}
                     return caml_call2(_h__[2],c,_sz_)}}
                 (c),
               _sr_=caml_call2(mapi_f,i,a),
               c$0=caml_call2(_h__[1],_sr_,_sq_),
               i$0=i + 1 | 0,
               i=i$0,
               t$0=t$1,
               c=c$0;
              continue}
            return c}}
        var
         loop=
          function(i,t,c)
           {var match=caml_call1(Core_kernel_Sequence[47],t);
            if(match)
             {var
               match$0=match[1],
               t$0=match$0[2],
               a=match$0[1],
               _sx_=
                function(b){return loop(i + 1 | 0,t$0,caml_call2(fold_f,c,b))},
               _sy_=caml_call2(mapi_f,i,a);
              return caml_call2(_h__[1],_sy_,_sx_)}
            return caml_call1(_h9_,c)};
        return loop(0,t,init)}
      var
       max_concurrent_jobs=how[2],
       throttle=create$21(0,max_concurrent_jobs);
      function loop$0(i,t,c)
       {function _ss_(param)
         {var match=caml_call1(Core_kernel_Sequence[47],t);
          if(match)
           {var
             match$0=match[1],
             t$0=match$0[2],
             a=match$0[1],
             _su_=
              function(b)
               {function _sw_(c){return caml_call2(fold_f,c,b)}
                return caml_call2(_h__[2],c,_sw_)},
             _sv_=
              enqueue$3
               (throttle,function(param){return caml_call2(mapi_f,i,a)});
            return loop$0(i + 1 | 0,t$0,caml_call2(_h__[1],_sv_,_su_))}
          return c}
        var _st_=capacity_available$1(throttle);
        return caml_call2(_h__[1],_st_,_ss_)}
      return loop$0(0,t,caml_call1(_h9_,init))}
    function foldi$3(t,init,f)
     {function _sm_(param){var b=param[2];return caml_call1(_h9_,b)}
      function _sn_(param,a,k)
       {var b=param[2],i=param[1];
        function _so_(b){return caml_call1(k,[0,i + 1 | 0,b])}
        var _sp_=caml_call3(f,i,b,a);
        return caml_call2(_h__[1],_sp_,_so_)}
      return caml_call4(Core_kernel_Sequence[103],t,[0,0,init],_sn_,_sm_)}
    function fold$19(t,init,f)
     {function _sl_(b,a,k){return caml_call2(_h7_,caml_call2(f,b,a),k)}
      return caml_call4(Core_kernel_Sequence[103],t,init,_sl_,_h9_)}
    function all$6(t)
     {function _sh_(res)
       {var _sk_=caml_call1(Core_kernel_List[32],res);
        return caml_call1(Core_kernel_Sequence[107],_sk_)}
      var
       _si_=
        fold$19
         (t,
          0,
          function(accum,d)
           {function _sj_(a){return [0,a,accum]}
            return caml_call2(_h__[2],d,_sj_)});
      return caml_call2(_h__[2],_si_,_sh_)}
    function all_unit$4(t){return fold$19(t,0,function(param,v){return v})}
    function find_mapi$3(t,f)
     {function find_mapi(t,f,i)
       {var match=caml_call1(Core_kernel_Sequence[47],t);
        if(match)
         {var
           match$0=match[1],
           rest=match$0[2],
           v=match$0[1],
           _sf_=
            function(some)
             {return some?caml_call1(_h9_,some):find_mapi(rest,f,i + 1 | 0)},
           _sg_=caml_call2(f,i,v);
          return caml_call2(_h__[1],_sg_,_sf_)}
        return caml_call1(_h9_,0)}
      return find_mapi(t,f,0)}
    function findi$3(t,f)
     {return find_mapi$3
              (t,
               function(i,elt)
                {function _sd_(b){return b?[0,[0,i,elt]]:0}
                 var _se_=caml_call2(f,i,elt);
                 return caml_call2(_h__[2],_se_,_sd_)})}
    function find$4(t,f)
     {return find_mapi$3
              (t,
               function(param,elt)
                {function _sb_(b){return b?[0,elt]:0}
                 var _sc_=caml_call1(f,elt);
                 return caml_call2(_h__[2],_sc_,_sb_)})}
    function existsi$3(t,f)
     {function _r9_(param){return param?1:0}
      var
       _r__=
        find_mapi$3
         (t,
          function(i,elt)
           {function _r$_(b){return b?_k$_:0}
            var _sa_=caml_call2(f,i,elt);
            return caml_call2(_h__[2],_sa_,_r$_)});
      return caml_call2(_h__[2],_r__,_r9_)}
    function for_alli$3(t,f)
     {function _r5_(param){return param?0:1}
      var
       _r6_=
        find_mapi$3
         (t,
          function(i,elt)
           {function _r7_(b){return b?0:_la_}
            var _r8_=caml_call2(f,i,elt);
            return caml_call2(_h__[2],_r8_,_r7_)});
      return caml_call2(_h__[2],_r6_,_r5_)}
    function iteri$4(how,t,f)
     {return fold_mapi(how,t,0,f,function(param,_r4_){return 0})}
    function mapi$4(how,t,f)
     {function _r0_(bs)
       {var _r3_=caml_call1(Core_kernel_List[32],bs);
        return caml_call1(Core_kernel_Sequence[107],_r3_)}
      function _r1_(bs,b){return [0,b,bs]}
      var
       _r2_=
        fold_mapi(how,t,0,function(i,a){return caml_call2(f,i,a)},_r1_);
      return caml_call2(_h__[2],_r2_,_r0_)}
    function filter_mapi$4(how,t,f)
     {function _rW_(bs)
       {var _rZ_=caml_call1(Core_kernel_List[32],bs);
        return caml_call1(Core_kernel_Sequence[107],_rZ_)}
      function _rX_(bs,maybe_v)
       {if(maybe_v){var b=maybe_v[1];return [0,b,bs]}return bs}
      var
       _rY_=
        fold_mapi(how,t,0,function(i,a){return caml_call2(f,i,a)},_rX_);
      return caml_call2(_h__[2],_rY_,_rW_)}
    function concat_mapi$3(how,t,f)
     {var _rV_=Core_kernel_Sequence[68];
      return caml_call2(_h8_,mapi$4(how,t,f),_rV_)}
    function filteri$4(how,t,f)
     {return filter_mapi$4
              (how,
               t,
               function(i,a)
                {function _rT_(param){return 0 === param?0:[0,a]}
                 var _rU_=caml_call2(f,i,a);
                 return caml_call2(_h__[2],_rU_,_rT_)})}
    function iter$20(how,t,f)
     {return iteri$4(how,t,function(param,a){return caml_call1(f,a)})}
    function map$26(how,t,f)
     {return mapi$4(how,t,function(param,a){return caml_call1(f,a)})}
    function filter$4(how,t,f)
     {return filteri$4(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map$4(how,t,f)
     {return filter_mapi$4(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map$3(how,t,f)
     {return concat_mapi$3(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map$3(t,f)
     {return find_mapi$3(t,function(param,a){return caml_call1(f,a)})}
    function exists$15(t,f)
     {return existsi$3(t,function(param,a){return caml_call1(f,a)})}
    function for_all$15(t,f)
     {return for_alli$3(t,function(param,a){return caml_call1(f,a)})}
    function init$3(how,n,f)
     {function _rR_(_rS_){return _rS_}
      return map$26(how,caml_call2(Core_kernel_Sequence[81],n,_rR_),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$136);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Deferred_sequence=
      [0,
       foldi$3,
       fold$19,
       find$4,
       findi$3,
       find_map$3,
       find_mapi$3,
       exists$15,
       existsi$3,
       for_all$15,
       for_alli$3,
       all$6,
       all_unit$4,
       init$3,
       iter$20,
       iteri$4,
       map$26,
       mapi$4,
       filter$4,
       filteri$4,
       filter_map$4,
       filter_mapi$4,
       concat_map$3,
       concat_mapi$3];
    caml_register_global
     (1258,Async_kernel_Deferred_sequence,"Async_kernel__Deferred_sequence");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$137);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$138,cst$51);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$139);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _lb_=[0,Infix[1],Infix[2],Infix[3]],
     _lc_=Let_syntax$0[4],
     include$29=
      [0,
       Let_syntax$0[3],
       Let_syntax$0[1],
       Let_syntax$0[2],
       [0,_lc_[5],_lc_[1],_lc_[2],_lc_[3],_lc_[4]]],
     Async_kernel_Deferred=
      [0,
       sexp_of_t$34,
       invariant$8,
       create$14,
       upon$1,
       peek$0,
       value_exn$0,
       is_determined,
       _h2_,
       _h3_,
       Monad_infix,
       bind$0,
       return$0,
       map$12,
       join,
       ignore_m,
       include$29,
       _lb_,
       unit,
       ignore_m,
       never,
       both$0,
       all$0,
       all_unit,
       any,
       any_unit,
       don_t_wait_for,
       Choice,
       choice,
       enabled,
       choose,
       for$0,
       repeat_until_finished,
       forever,
       ok];
    caml_register_global(1259,Async_kernel_Deferred,"Async_kernel__Deferred");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$140);
    caml_call1
     (Expect_test_collector[4][1],cst_src_require_explicit_time_source_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$141,cst$52);
    var
     _ld_=Async_kernel_Clock_ns[4],
     _le_=Async_kernel_Clock_ns[3],
     _lf_=Async_kernel_Clock_ns[10],
     _lg_=Async_kernel_Clock_ns[5];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$142);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Require_explicit_time_source=
      [0,
       Async_kernel_Clock_ns,
       [0,
        _c_,
        _d_,
        _e_,
        _f_,
        _g_,
        _h_,
        _i_,
        _j_,
        _k_,
        _l_,
        _m_,
        _n_,
        _o_,
        _p_,
        _q_,
        _r_,
        _s_,
        _t_,
        _u_,
        _v_,
        _w_,
        _x_,
        _z_,
        _A_,
        _B_,
        _C_,
        _D_,
        _E_,
        _F_,
        _G_,
        _H_,
        _I_,
        _J_,
        _K_,
        _L_,
        _M_,
        _N_,
        _O_,
        _P_,
        _Q_,
        _R_,
        _S_,
        _T_,
        _U_,
        _V_,
        _W_,
        _X_,
        _Y_,
        _Z_,
        ___,
        _$_,
        _aa_,
        _ab_,
        _ac_,
        _ad_,
        _ae_,
        _af_,
        _ag_,
        _ai_,
        _aj_,
        _ak_,
        _al_,
        _am_,
        _an_,
        _ao_,
        _ap_,
        _aq_,
        _ar_,
        _as_,
        _at_,
        _au_,
        _av_,
        _aw_,
        _ax_,
        _ay_,
        _az_,
        _aA_,
        _aB_,
        _aC_,
        _aD_,
        _aE_,
        _aH_,
        _aI_,
        after,
        _ah_],
       [0,
        Core_kernel_Time_float[1],
        Core_kernel_Time_float[2],
        Core_kernel_Time_float[3],
        Core_kernel_Time_float[4],
        Core_kernel_Time_float[5],
        Core_kernel_Time_float[6],
        Core_kernel_Time_float[7],
        Core_kernel_Time_float[8],
        Core_kernel_Time_float[9],
        Core_kernel_Time_float[10],
        Core_kernel_Time_float[11],
        Core_kernel_Time_float[12],
        Core_kernel_Time_float[16],
        Core_kernel_Time_float[17],
        Core_kernel_Time_float[18],
        Core_kernel_Time_float[19],
        Core_kernel_Time_float[20],
        Core_kernel_Time_float[21],
        Core_kernel_Time_float[22],
        Core_kernel_Time_float[23],
        Core_kernel_Time_float[24],
        Core_kernel_Time_float[25],
        Core_kernel_Time_float[26],
        Core_kernel_Time_float[27],
        Core_kernel_Time_float[28],
        Core_kernel_Time_float[29],
        Core_kernel_Time_float[30],
        Core_kernel_Time_float[31],
        Core_kernel_Time_float[32],
        Core_kernel_Time_float[33],
        Core_kernel_Time_float[34],
        Core_kernel_Time_float[35],
        Core_kernel_Time_float[36],
        Core_kernel_Time_float[37],
        Core_kernel_Time_float[38],
        Core_kernel_Time_float[39],
        Core_kernel_Time_float[40],
        Core_kernel_Time_float[41],
        Core_kernel_Time_float[42],
        Core_kernel_Time_float[43],
        Core_kernel_Time_float[44],
        Core_kernel_Time_float[45],
        Core_kernel_Time_float[47],
        Core_kernel_Time_float[48],
        Core_kernel_Time_float[51],
        Core_kernel_Time_float[52],
        Core_kernel_Time_float[53],
        Core_kernel_Time_float[54],
        Core_kernel_Time_float[55],
        Core_kernel_Time_float[56],
        Core_kernel_Time_float[57],
        Core_kernel_Time_float[58],
        Core_kernel_Time_float[59],
        Core_kernel_Time_float[60],
        Core_kernel_Time_float[61],
        Core_kernel_Time_float[62],
        Core_kernel_Time_float[63],
        Core_kernel_Time_float[64],
        Core_kernel_Time_float[65],
        Core_kernel_Time_float[66],
        Core_kernel_Time_float[67],
        Core_kernel_Time_float[68],
        Core_kernel_Time_float[69],
        Core_kernel_Time_float[70],
        Core_kernel_Time_float[71],
        Core_kernel_Time_float[72],
        Core_kernel_Time_float[73],
        Core_kernel_Time_float[74],
        Core_kernel_Time_float[75],
        Core_kernel_Time_float[76],
        Core_kernel_Time_float[77],
        Core_kernel_Time_float[78],
        Core_kernel_Time_float[79],
        Core_kernel_Time_float[80],
        Core_kernel_Time_float[81],
        Core_kernel_Time_float[82],
        Core_kernel_Time_float[83],
        Core_kernel_Time_float[84],
        Core_kernel_Time_float[49]],
       [0,
        current_execution_context$3,
        _kB_,
        _kw_,
        _kx_,
        _ky_,
        with_local$0,
        find_local$0,
        _kz_,
        _kA_,
        enqueue_job$0,
        thread_safe_enqueue_job,
        _kC_,
        _kD_,
        cycle_times,
        cycle_times_ns,
        long_cycles$0,
        cycle_count$2,
        total_cycle_time$2,
        event_precision$0,
        event_precision_ns,
        force_current_cycle_to_end$0,
        set_max_num_jobs_per_priority_per_cycle$1,
        max_num_jobs_per_priority_per_cycle$5,
        set_record_backtraces$1,
        yield$3,
        yield_until_no_jobs_remain$2,
        yield_every$0,
        num_jobs_run$2,
        num_pending_jobs$0,
        cycle_start$2,
        cycle_start_ns],
       [0,
        Core_kernel_Date[1],
        Core_kernel_Date[2],
        Core_kernel_Date[3],
        Core_kernel_Date[4],
        Core_kernel_Date[5],
        Core_kernel_Date[6],
        Core_kernel_Date[7],
        Core_kernel_Date[8],
        Core_kernel_Date[9],
        Core_kernel_Date[10],
        Core_kernel_Date[11],
        Core_kernel_Date[12],
        Core_kernel_Date[13],
        Core_kernel_Date[14],
        Core_kernel_Date[15],
        Core_kernel_Date[19],
        Core_kernel_Date[20],
        Core_kernel_Date[21],
        Core_kernel_Date[22],
        Core_kernel_Date[23],
        Core_kernel_Date[24],
        Core_kernel_Date[25],
        Core_kernel_Date[26],
        Core_kernel_Date[27],
        Core_kernel_Date[28],
        Core_kernel_Date[29],
        Core_kernel_Date[30],
        Core_kernel_Date[31],
        Core_kernel_Date[32],
        Core_kernel_Date[33],
        Core_kernel_Date[34],
        Core_kernel_Date[35],
        Core_kernel_Date[36],
        Core_kernel_Date[37],
        Core_kernel_Date[38],
        Core_kernel_Date[40],
        Core_kernel_Date[43],
        Core_kernel_Date[44],
        Core_kernel_Date[45],
        Core_kernel_Date[46],
        Core_kernel_Date[47],
        Core_kernel_Date[48],
        Core_kernel_Date[49],
        Core_kernel_Date[50],
        Core_kernel_Date[51],
        Core_kernel_Date[52],
        Core_kernel_Date[53],
        Core_kernel_Date[54],
        Core_kernel_Date[55],
        Core_kernel_Date[56],
        Core_kernel_Date[57],
        Core_kernel_Date[58],
        Core_kernel_Date[59],
        Core_kernel_Date[60],
        Core_kernel_Date[61],
        Core_kernel_Date[62],
        Core_kernel_Date[63],
        Core_kernel_Date[64],
        Core_kernel_Date[65],
        Core_kernel_Date[66],
        Core_kernel_Date[67],
        Core_kernel_Date[68],
        Core_kernel_Date[69],
        Core_kernel_Date[70],
        Core_kernel_Date[71],
        Core_kernel_Date[72],
        Core_kernel_Date[73],
        Core_kernel_Date[74],
        Core_kernel_Date[75],
        Core_kernel_Date[76],
        Core_kernel_Date[77],
        Core_kernel_Date[78],
        Core_kernel_Date[79],
        Core_kernel_Date[84],
        Core_kernel_Date[85]],
       _le_,
       _ld_,
       _lf_,
       _lg_];
    caml_register_global
     (1262,
      Async_kernel_Require_explicit_time_source,
      "Async_kernel__Require_explicit_time_source");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$143);
    caml_call1(Expect_test_collector[4][1],cst_src_pipe_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$144,cst$53);
    var show_debug_messages=[0,0],check_invariant=[0,0];
    function sexp_of_t$51(param){return 17724 <= param?_lh_:_li_}
    function equal$3(x_003,x_004)
     {if(caml_call2(Ppx_compare_lib[1],x_003,x_004))
       var match=0;
      else
       {if(17724 <= x_003)
         if(17724 === x_004)var match=0,switch$0=1;else var switch$0=0;
        else
         if(-402004920 === x_004)var match=0,switch$0=1;else var switch$0=0;
        if(! switch$0)var match=caml_int_compare(x_003,x_004)}
      return 0 === match?1:0}
    function combine$0(l)
     {function _rP_(l)
       {var match=caml_call3(Core_kernel_List[5],l,-402004920,equal$3);
        return 0 === match?17724:-402004920}
      var _rQ_=all$0(l);
      return caml_call2(_h__[2],_rQ_,_rP_)}
    function downstream_flushed(r){return r[3]}
    function values_read(r){return r[2]}
    function set_values_read(r,v){r[2] = v;return 0}
    function pipe_id(r){return r[1]}
    function _lj_(r,v){return [0,r[1],r[2],v]}
    var
     _lk_=0,
     downstream_flushed$0=
      [0,
       function(param){return 0},
       cst_downstream_flushed,
       _lk_,
       downstream_flushed,
       _lj_];
    function _ll_(r,v){return [0,r[1],v,r[3]]}
    var
     _lm_=[0,set_values_read],
     values_read$0=
      [0,function(param){return 0},cst_values_read,_lm_,values_read,_ll_];
    function _ln_(r,v){return [0,v,r[2],r[3]]}
    var
     _lo_=0,
     pipe_id$0=[0,function(param){return 0},cst_pipe_id,_lo_,pipe_id,_ln_];
    function iter$21(pipe_id_fun,values_read_fun,downstream_flushed_fun)
     {caml_call1(pipe_id_fun,pipe_id$0);
      caml_call1(values_read_fun,values_read$0);
      return caml_call1(downstream_flushed_fun,downstream_flushed$0)}
    function sexp_of_t$52(param)
     {var v_pipe_id=param[1],v_values_read=param[2],bnds=0;
      function _rN_(_rO_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_rN_),
       bnds$0=[0,[1,[0,_lp_,[0,arg,0]]],bnds];
      if(typeof v_values_read === "number")
       var arg$0=_lq_;
      else
       var
        v0=v_values_read[2],
        arg$0=[1,[0,_lt_,[0,sexp_of_t$33(Core_kernel[491],v0),0]]];
      var
       bnds$1=[0,[1,[0,_lr_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Core_kernel[339],v_pipe_id),
       bnds$2=[0,[1,[0,_ls_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$17(t)
     {try
       {var
         _rI_=function(_rM_){return 0},
         _rJ_=
          function(field)
           {var param=caml_call2(Base_Field[3],field,t);
            if(typeof param === "number")return 0;
            var ivar=param[2];
            if(is_empty(ivar))return 0;
            throw [0,Assert_failure,_lw_]},
         _rK_=iter$21(function(_rL_){return 0},_rJ_,_rI_);
        return _rK_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _rF_=[0,[1,[0,_lu_,[0,sexp_of_t$52(t),0]]],0],
         _rG_=[0,[1,[0,_lv_,[0,caml_call1(Core_kernel[508],exn),0]]],_rF_],
         _rH_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],cst_Pipe_Consumer_invariant_failed),
            _rG_]];
        return caml_call1(Core_kernel[241],_rH_)}}
    function start(t)
     {return typeof t[2] === "number"
              ?(t[2] = [0,-122467239,caml_call1(create$13,0)],0)
              :0}
    function values_sent_downstream(t)
     {var _rE_=t[2];
      if(typeof _rE_ === "number")return 0;
      var ivar=_rE_[2];
      fill(ivar,0);
      t[2] = -758792467;
      return 0}
    function values_sent_downstream_and_flushed(t)
     {var _rC_=t[2];
      if(typeof _rC_ === "number")return caml_call1(t[3],0);
      var when_sent_downstream=_rC_[2];
      function _rD_(param){return caml_call1(t[3],0)}
      return caml_call2(_h__[1],when_sent_downstream,_rD_)}
    function consumer(r){return r[2]}
    function wants(r){return r[1]}
    function _lG_(r,v){return [0,r[1],v]}
    var
     _lH_=0,
     consumer$0=[0,function(param){return 0},cst_consumer,_lH_,consumer,_lG_];
    function _lI_(r,v){return [0,v,r[2]]}
    var
     _lJ_=0,
     wants$0=[0,function(param){return 0},cst_wants,_lJ_,wants,_lI_];
    function iter$22(wants_fun,consumer_fun)
     {caml_call1(wants_fun,wants$0);
      return caml_call1(consumer_fun,consumer$0)}
    function sexp_of_t$53(of_a,param)
     {var
       v_consumer=param[2],
       v_wants=param[1],
       arg=caml_call2(Core_kernel[431],sexp_of_t$52,v_consumer),
       bnds=[0,[1,[0,_lK_,[0,arg,0]]],0];
      switch(v_wants[0])
       {case 0:
         var
          v0=v_wants[1],
          v0$0=
           sexp_of_t$33(function(param){return 3456156 <= param?_lx_:_ly_},v0),
          arg$0=[1,[0,_lz_,[0,v0$0,0]]];
         break;
        case 1:
         var
          v0$1=v_wants[1],
          v0$2=
           sexp_of_t$33
            (function(param)
              {if(typeof param === "number")return _lA_;
               var v0=param[2];
               return [1,[0,_lB_,[0,caml_call1(of_a,v0),0]]]},
             v0$1),
          arg$0=[1,[0,_lC_,[0,v0$2,0]]];
         break;
        default:
         var
          v1=v_wants[2],
          v0$3=v_wants[1],
          v0$4=caml_call1(Core_kernel[339],v0$3),
          v1$0=
           sexp_of_t$33
            (function(param)
              {if(typeof param === "number")return _lD_;
               var v0=param[2];
               return [1,
                       [0,_lE_,[0,caml_call2(Core_kernel_Queue[11],of_a,v0),0]]]},
             v1),
          arg$0=[1,[0,_lF_,[0,v0$4,[0,v1$0,0]]]]}
      var bnds$0=[0,[1,[0,_lL_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$18(t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _rw_=
          function(param)
           {if(param){var consumer=param[1];return invariant$17(consumer)}
            return 0},
         _rx_=function(_rB_){return check(_rw_,_rB_)},
         _ry_=
          function(param)
           {if(2 === param[0])
             {var i=param[1];
              if(caml_call2(symbol$3,i,0))return 0;
              throw [0,Assert_failure,_lP_]}
            return 0},
         _rz_=iter$22(function(_rA_){return check(_ry_,_rA_)},_rx_);
        return _rz_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _rr_=0,
         _rs_=0,
         _rt_=
          [0,
           [1,[0,_lN_,[0,sexp_of_t$53(function(param){return _lM_},t),_rs_]]],
           _rr_],
         _ru_=[0,[1,[0,_lO_,[0,caml_call1(Core_kernel[508],exn),0]]],_rt_],
         _rv_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],cst_Pipe_Blocked_read_invariant_failed),
            _ru_]];
        return caml_call1(Core_kernel[241],_rv_)}}
    function fill_with_eof(t)
     {var _rq_=t[1];
      switch(_rq_[0])
       {case 0:var i=_rq_[1];return fill(i,3456156);
        case 1:var i$0=_rq_[1];return fill(i$0,3456156);
        default:var i$1=_rq_[2];return fill(i$1,3456156)}}
    function fill_when_num_values_read(r){return r[1]}
    function sexp_of_t$54(param)
     {var
       v_ready=param[2],
       v_fill_when_num_values_read=param[1],
       bnds=0,
       arg=
        sexp_of_t$33(function(param){return 17724 <= param?_lQ_:_lR_},v_ready),
       bnds$0=[0,[1,[0,_lS_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[339],v_fill_when_num_values_read),
       bnds$1=[0,[1,[0,_lT_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    function fill$2(t,v){return fill(t[2],v)}
    function upstream_flusheds(r){return r[11]}
    function consumers(r){return r[10]}
    function set_consumers(r,v){r[10] = v;return 0}
    function read_closed(r){return r[9]}
    function _lU_(r){return r[8]}
    function blocked_reads(r){return r[7]}
    function blocked_flushes(r){return r[6]}
    function num_values_read(r){return r[5]}
    function set_num_values_read(r,v){r[5] = v;return 0}
    function _lV_(r){return r[4]}
    function set_pushback(r,v){r[4] = v;return 0}
    function size_budget(r){return r[3]}
    function set_size_budget(r,v){r[3] = v;return 0}
    function buffer(r){return r[2]}
    function set_buffer(r,v){r[2] = v;return 0}
    function id$5(r){return r[1]}
    function _lW_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],v]}
    var
     _lX_=0,
     upstream_flusheds$0=
      [0,
       function(param){return 0},
       cst_upstream_flusheds,
       _lX_,
       upstream_flusheds,
       _lW_];
    function _lY_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],v,r[11]]}
    var
     _lZ_=[0,set_consumers],
     consumers$0=
      [0,function(param){return 0},cst_consumers,_lZ_,consumers,_lY_];
    function _l0_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v,r[10],r[11]]}
    var
     _l1_=0,
     read_closed$0=
      [0,function(param){return 0},cst_read_closed,_l1_,read_closed,_l0_];
    function _l2_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9],r[10],r[11]]}
    var
     _l3_=0,
     closed$0=[0,function(param){return 0},cst_closed,_l3_,_lU_,_l2_];
    function _l4_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9],r[10],r[11]]}
    var
     _l5_=0,
     blocked_reads$0=
      [0,function(param){return 0},cst_blocked_reads,_l5_,blocked_reads,_l4_];
    function _l6_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9],r[10],r[11]]}
    var
     _l7_=0,
     blocked_flushes$0=
      [0,
       function(param){return 0},
       cst_blocked_flushes,
       _l7_,
       blocked_flushes,
       _l6_];
    function _l8_(r,v)
     {return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _l9_=[0,set_num_values_read],
     num_values_read$0=
      [0,
       function(param){return 0},
       cst_num_values_read,
       _l9_,
       num_values_read,
       _l8_];
    function _l__(r,v)
     {return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _l$_=[0,set_pushback],
     pushback=[0,function(param){return 0},cst_pushback,_l$_,_lV_,_l__];
    function _ma_(r,v)
     {return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _mb_=[0,set_size_budget],
     size_budget$0=
      [0,function(param){return 0},cst_size_budget,_mb_,size_budget,_ma_];
    function _mc_(r,v)
     {return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var
     _md_=[0,set_buffer],
     buffer$0=[0,function(param){return 0},cst_buffer,_md_,buffer,_mc_];
    function _me_(r,v)
     {return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11]]}
    var _mf_=0,id$6=[0,function(param){return 0},cst_id$2,_mf_,id$5,_me_];
    function iter$23
     (id_fun,
      buffer_fun,
      size_budget_fun,
      pushback_fun,
      num_values_read_fun,
      blocked_flushes_fun,
      blocked_reads_fun,
      closed_fun,
      read_closed_fun,
      consumers_fun,
      upstream_flusheds_fun)
     {caml_call1(id_fun,id$6);
      caml_call1(buffer_fun,buffer$0);
      caml_call1(size_budget_fun,size_budget$0);
      caml_call1(pushback_fun,pushback);
      caml_call1(num_values_read_fun,num_values_read$0);
      caml_call1(blocked_flushes_fun,blocked_flushes$0);
      caml_call1(blocked_reads_fun,blocked_reads$0);
      caml_call1(closed_fun,closed$0);
      caml_call1(read_closed_fun,read_closed$0);
      caml_call1(consumers_fun,consumers$0);
      return caml_call1(upstream_flusheds_fun,upstream_flusheds$0)}
    function sexp_of_pipe(of_a,of_phantom,param)
     {var
       v_id=param[1],
       v_buffer=param[2],
       v_size_budget=param[3],
       v_pushback=param[4],
       v_num_values_read=param[5],
       v_read_closed=param[9],
       v_closed=param[8],
       v_blocked_reads=param[7],
       v_blocked_flushes=param[6],
       v_consumers=param[10],
       v_upstream_flusheds=param[11],
       bnds=0;
      function _rl_(f)
       {function _ro_(_rp_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_ro_)}
      var
       arg=caml_call2(Core_kernel_Bag[3],_rl_,v_upstream_flusheds),
       bnds$0=[0,[1,[0,_mg_,[0,arg,0]]],bnds],
       arg$0=caml_call2(Core_kernel[400],sexp_of_t$52,v_consumers),
       bnds$1=[0,[1,[0,_mh_,[0,arg$0,0]]],bnds$0],
       arg$1=sexp_of_t$33(Core_kernel[491],v_read_closed),
       bnds$2=[0,[1,[0,_mi_,[0,arg$1,0]]],bnds$1],
       arg$2=sexp_of_t$33(Core_kernel[491],v_closed),
       bnds$3=[0,[1,[0,_mj_,[0,arg$2,0]]],bnds$2];
      function _rm_(_rn_){return sexp_of_t$53(of_a,_rn_)}
      var
       arg$3=caml_call2(Core_kernel_Queue[11],_rm_,v_blocked_reads),
       bnds$4=[0,[1,[0,_mk_,[0,arg$3,0]]],bnds$3],
       arg$4=caml_call2(Core_kernel_Queue[11],sexp_of_t$54,v_blocked_flushes),
       bnds$5=[0,[1,[0,_ml_,[0,arg$4,0]]],bnds$4],
       arg$5=caml_call1(Core_kernel[339],v_num_values_read),
       bnds$6=[0,[1,[0,_mm_,[0,arg$5,0]]],bnds$5],
       arg$6=sexp_of_t$33(Core_kernel[491],v_pushback),
       bnds$7=[0,[1,[0,_mn_,[0,arg$6,0]]],bnds$6],
       arg$7=caml_call1(Core_kernel[339],v_size_budget),
       bnds$8=[0,[1,[0,_mo_,[0,arg$7,0]]],bnds$7],
       arg$8=caml_call2(Core_kernel_Queue[11],of_a,v_buffer),
       bnds$9=[0,[1,[0,_mp_,[0,arg$8,0]]],bnds$8],
       arg$9=caml_call1(Core_kernel[339],v_id),
       bnds$10=[0,[1,[0,_mq_,[0,arg$9,0]]],bnds$9];
      return [1,bnds$10]}
    function hash(t){return caml_call1(Core_kernel_Hashtbl[1],t[1])}
    function equal$4(t1,t2){return caml_call2(Core_kernel[234],t1,t2)}
    function compare$1(t1,t2)
     {return caml_call2(Core_kernel_Int[107],t1[1],t2[1])}
    function is_closed$0(t){return is_full(t[8])}
    function is_read_closed(t){return is_full(t[9])}
    function closed$1(t){return t[8]}
    function pushback$0(t){return t[4]}
    function length$5(t){return caml_call1(Core_kernel_Queue[13],t[2])}
    function is_empty$1(t){return caml_call2(symbol$2,length$5(t),0)}
    function invariant$19(t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _qI_=function(_rk_){return 0},
         _qJ_=
          function(l)
           {function _rj_(consumer)
             {invariant$17(consumer);
              if(caml_call2(symbol$2,consumer[1],t[1]))return 0;
              throw [0,Assert_failure,_mv_]}
            return caml_call2(Core_kernel_List[8],l,_rj_)},
         _qK_=function(_ri_){return check(_qJ_,_ri_)},
         _qL_=function(_rh_){return 0},
         _qM_=function(_rg_){return 0},
         _qN_=
          function(blocked_reads)
           {if(1 - is_empty$1(t))
             if(! caml_call1(Core_kernel_Queue[14],blocked_reads))
              throw [0,Assert_failure,_my_];
            function _rc_(read)
             {invariant$18(read);
              var _re_=read[1];
              switch(_re_[0])
               {case 0:var i=_re_[1],_rf_=is_empty(i);break;
                case 1:var i$0=_re_[1],_rf_=is_empty(i$0);break;
                default:var i$1=_re_[2],_rf_=is_empty(i$1)}
              if(_rf_)return 0;
              throw [0,Assert_failure,_mw_]}
            caml_call2(Core_kernel_Queue[15],blocked_reads,_rc_);
            var _rd_=is_closed$0(t);
            if(_rd_)
             {if(caml_call1(Core_kernel_Queue[14],blocked_reads))return 0;
              throw [0,Assert_failure,_mx_]}
            return _rd_},
         _qO_=function(_rb_){return check(_qN_,_rb_)},
         _qP_=
          function(blocked_flushes)
           {function _q8_(f)
             {if(caml_call2(symbol$3,f[1],t[5]))return 0;
              throw [0,Assert_failure,_mz_]}
            caml_call2(Core_kernel_Queue[15],blocked_flushes,_q8_);
            var
             _q9_=Core_kernel_Int[107],
             _q__=caml_call1(Core_kernel_Queue[25],blocked_flushes),
             _q$_=
              caml_call2(Core_kernel_List[69],_q__,fill_when_num_values_read);
            if(caml_call2(Core_kernel_List[134],_q$_,_q9_))
             {var _ra_=is_empty$1(t);
              if(_ra_)
               {if(caml_call1(Core_kernel_Queue[14],blocked_flushes))return 0;
                throw [0,Assert_failure,_mA_]}
              return _ra_}
            throw [0,Assert_failure,_mB_]},
         _qQ_=function(_q7_){return check(_qP_,_q7_)},
         _qR_=function(_q6_){return 0},
         _qS_=
          function(pushback)
           {var
             _q2_=t[3],
             _q3_=caml_call2(symbol$1,length$5(t),_q2_),
             _q4_=_q3_ || is_closed$0(t),
             _q5_=is_full(pushback);
            if(caml_call2(Core_kernel_Bool[25],_q5_,_q4_))return 0;
            throw [0,Assert_failure,_mC_]},
         _qT_=function(_q1_){return check(_qS_,_q1_)},
         _qU_=
          function(size_budget)
           {if(caml_call2(symbol$0,size_budget,0))return 0;
            throw [0,Assert_failure,_mD_]},
         _qV_=function(_q0_){return check(_qU_,_q0_)},
         _qW_=function(_qZ_){return 0},
         _qX_=
          iter$23
           (function(_qY_){return 0},
            _qW_,
            _qV_,
            _qT_,
            _qR_,
            _qQ_,
            _qO_,
            _qM_,
            _qL_,
            _qK_,
            _qI_);
        return _qX_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _qC_=0,
         _qD_=0,
         _qE_=function(param){return _mr_},
         _qF_=
          [0,
           [1,
            [0,
             _mt_,
             [0,sexp_of_pipe(function(param){return _ms_},_qE_,t),_qD_]]],
           _qC_],
         _qG_=[0,[1,[0,_mu_,[0,caml_call1(Core_kernel[508],exn),0]]],_qF_],
         _qH_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Pipe_invariant_failed),
            _qG_]];
        return caml_call1(Core_kernel[241],_qH_)}}
    function sexp_of_phantom(v){throw [0,Assert_failure,_mE_]}
    function sexp_of_t$55(of_a,v){return sexp_of_pipe(of_a,sexp_of_phantom,v)}
    function sexp_of_phantom$0(v){throw [0,Assert_failure,_mF_]}
    function sexp_of_t$56(of_a,v)
     {return sexp_of_pipe(of_a,sexp_of_phantom$0,v)}
    var id_ref=[0,0];
    function create_internal$1(initial_buffer)
     {id_ref[1]++;
      var
       _qw_=caml_call1(Core_kernel_Bag[22],0),
       _qx_=caml_call1(create$13,0),
       _qy_=caml_call1(create$13,0),
       _qz_=caml_call2(Core_kernel_Queue[60],0,0),
       _qA_=caml_call2(Core_kernel_Queue[60],0,0),
       _qB_=caml_call1(create$13,0),
       t=[0,id_ref[1],initial_buffer,0,_qB_,0,_qA_,_qz_,_qy_,_qx_,0,_qw_];
      return t}
    function create$22(param)
     {var t=create_internal$1(caml_call2(Core_kernel_Queue[60],0,0));
      fill(t[4],0);
      if(check_invariant[1])invariant$19(t);
      return [0,t,t]}
    function update_pushback(t)
     {var _qt_=t[3];
      if(! caml_call2(symbol$1,length$5(t),_qt_))
       if(! is_closed$0(t))
        {var
          _qu_=is_full(t[4]),
          _qv_=_qu_?(t[4] = caml_call1(create$13,0),0):_qu_;
         return _qv_}
      return fill_if_empty(t[4],0)}
    function close(t)
     {if(show_debug_messages[1])
       {var
         _qp_=function(param){return _mG_},
         _qq_=function(param){return _mH_};
        caml_call3
         (eprints,
          cst_close,
          t,
          function(_qs_){return sexp_of_pipe(_qq_,_qp_,_qs_)})}
      if(check_invariant[1])invariant$19(t);
      var _qr_=1 - is_closed$0(t);
      if(_qr_)
       {fill(t[8],0);
        if(is_empty$1(t))
         {caml_call2(Core_kernel_Queue[15],t[7],fill_with_eof);
          caml_call1(Core_kernel_Queue[46],t[7])}
        return update_pushback(t)}
      return _qr_}
    function close_read(t)
     {if(show_debug_messages[1])
       {var
         _qk_=function(param){return _mI_},
         _ql_=function(param){return _mJ_};
        caml_call3
         (eprints,
          cst_close_read,
          t,
          function(_qo_){return sexp_of_pipe(_ql_,_qk_,_qo_)})}
      if(check_invariant[1])invariant$19(t);
      var _qm_=1 - is_read_closed(t);
      if(_qm_)
       {fill(t[9],0);
        var _qn_=function(flush){return fill$2(flush,-402004920)};
        caml_call2(Core_kernel_Queue[15],t[6],_qn_);
        caml_call1(Core_kernel_Queue[46],t[6]);
        caml_call1(Core_kernel_Queue[46],t[2]);
        update_pushback(t);
        return close(t)}
      return _qm_}
    function create_reader(close_on_exception,f)
     {var match=create$22(0),w=match[2],r=match[1];
      if(close_on_exception)
       {var _qi_=function(param){close(w);return caml_call1(_h9_,0)};
        protect(0,0,0,0,0,function(param){return caml_call1(f,w)},_qi_)}
      else
       {var _qj_=function(param){return close(w)};
        upon$1(caml_call1(f,w),_qj_)}
      return r}
    function init$4(f){return create_reader(1,f)}
    function create_writer(f)
     {var match=create$22(0),w=match[2],r=match[1];
      function _qh_(param){close_read(r);return caml_call1(_h9_,0)}
      protect(0,0,0,0,0,function(param){return caml_call1(f,r)},_qh_);
      return w}
    function values_were_read(t,consumer)
     {caml_call2(Core_kernel_Option[18],consumer,start);
      for(;;)
       {var match=caml_call1(Core_kernel_Queue[44],t[6]);
        if(match)
         {var flush=match[1],_qf_=caml_call2(symbol$0,t[5],flush[1]);
          if(_qf_)
           {caml_call1(Core_kernel_Queue[43],t[6]);
            if(consumer)
             {var
               consumer$0=consumer[1],
               _qg_=
                function(flush)
                  {return function(flush_result)
                    {return fill$2(flush,flush_result)}}
                 (flush);
              upon$1(values_sent_downstream_and_flushed(consumer$0),_qg_)}
            else
             fill$2(flush,17724);
            continue}
          return _qf_}
        return 0}}
    function consume_one(t,consumer)
     {if(caml_call2(symbol$0,length$5(t),1))
       {var result=caml_call1(Core_kernel_Queue[43],t[2]);
        t[5] = t[5] + 1 | 0;
        values_were_read(t,consumer);
        update_pushback(t);
        return result}
      throw [0,Assert_failure,_mK_]}
    function consume(t,max_queue_length,consumer)
     {if(caml_call2(symbol$0,max_queue_length,0))
       {if(caml_call2(symbol$0,max_queue_length,length$5(t)))
         {var result=t[2];
          t[2] = caml_call2(Core_kernel_Queue[60],0,0);
          var _qe_=caml_call1(Core_kernel_Queue[13],result);
          t[5] = t[5] + _qe_ | 0;
          values_were_read(t,consumer);
          update_pushback(t);
          return result}
        t[5] = t[5] + max_queue_length | 0;
        values_were_read(t,consumer);
        var result$0=caml_call2(Core_kernel_Queue[60],[0,max_queue_length],0);
        caml_call4(Core_kernel_Queue[63],t[2],result$0,[0,max_queue_length],0);
        update_pushback(t);
        return result$0}
      throw [0,Assert_failure,_mL_]}
    function set_size_budget$0(t,size_budget)
     {if(caml_call2(symbol$4,size_budget,0))
       {var
         _qc_=
          [0,[1,[0,_mM_,[0,caml_call1(Core_kernel[339],size_budget),0]]],0],
         _qd_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_negative_size_budget),_qc_]];
        caml_call1(Core_kernel[241],_qd_)}
      t[3] = size_budget;
      return update_pushback(t)}
    function start_write(t)
     {if(show_debug_messages[1])
       {var
         _p5_=function(param){return _mN_},
         _p6_=function(param){return _mO_};
        caml_call3
         (eprints,
          cst_write,
          t,
          function(_qb_){return sexp_of_pipe(_p6_,_p5_,_qb_)})}
      if(check_invariant[1])invariant$19(t);
      var _p7_=is_closed$0(t);
      if(_p7_)
       {var
         _p8_=0,
         _p9_=0,
         _p__=function(param){return _mP_},
         _p$_=
          [0,
           [1,
            [0,
             _mR_,
             [0,sexp_of_pipe(function(param){return _mQ_},_p__,t),_p9_]]],
           _p8_],
         _qa_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_write_to_closed_pipe),_p$_]];
        return caml_call1(Core_kernel[241],_qa_)}
      return _p7_}
    function finish_write(t)
     {for(;;)
       {if(! caml_call1(Core_kernel_Queue[14],t[7]))
         if(! is_empty$1(t))
          {var
            blocked_read=caml_call1(Core_kernel_Queue[43],t[7]),
            consumer=blocked_read[2],
            _p4_=blocked_read[1];
           switch(_p4_[0])
            {case 0:var ivar=_p4_[1];fill(ivar,17724);break;
             case 1:
              var ivar$0=_p4_[1];
              fill(ivar$0,[0,17724,consume_one(t,consumer)]);
              break;
             default:
              var ivar$1=_p4_[2],max_queue_length=_p4_[1];
              fill(ivar$1,[0,17724,consume(t,max_queue_length,consumer)])}
           continue}
        return update_pushback(t)}}
    function transfer_in_without_pushback(t,from)
     {start_write(t);
      caml_call4(Core_kernel_Queue[63],from,t[2],0,0);
      return finish_write(t)}
    function transfer_in(t,from)
     {transfer_in_without_pushback(t,from);return t[4]}
    function write(t,q){return transfer_in(t,q)}
    function write_without_pushback(t,value)
     {start_write(t);
      caml_call2(Core_kernel_Queue[40],t[2],value);
      return finish_write(t)}
    function write$0(t,value){write_without_pushback(t,value);return t[4]}
    function write_when_ready(t,f)
     {function _p3_(param)
       {return is_closed$0(t)
                ?-1025106484
                :[0,
                  17724,
                  caml_call1
                   (f,function(x){return write_without_pushback(t,x)})]}
      return caml_call2(_h__[2],t[4],_p3_)}
    function write_if_open(t,x)
     {return is_closed$0(t)?caml_call1(_h9_,0):write$0(t,x)}
    function write_without_pushback_if_open(t,x)
     {var _p2_=1 - is_closed$0(t);
      return _p2_?write_without_pushback(t,x):_p2_}
    function ensure_consumer_matches(consumer,t)
     {if(consumer)
       {var
         consumer$0=consumer[1],
         _pW_=caml_call2(symbol$5,t[1],consumer$0[1]);
        if(_pW_)
         {var
           _pX_=0,
           _pY_=0,
           _pZ_=
            [0,
             [1,
              [0,_mT_,[0,sexp_of_t$55(function(param){return _mS_},t),_pY_]]],
             _pX_],
           _p0_=[0,[1,[0,_mU_,[0,sexp_of_t$52(consumer$0),0]]],_pZ_],
           _p1_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Attempt_to_use_consumer_with_wrong_pipe),
              _p0_]];
          return caml_call1(Core_kernel[241],_p1_)}
        return _pW_}
      return 0}
    function start_read(consumer,t,label)
     {if(show_debug_messages[1])
       {var
         _pT_=function(param){return _mV_},
         _pU_=function(param){return _mW_};
        caml_call3
         (eprints,label,t,function(_pV_){return sexp_of_pipe(_pU_,_pT_,_pV_)})}
      if(check_invariant[1])invariant$19(t);
      return ensure_consumer_matches(consumer,t)}
    function gen_read_now(consumer,t,consume)
     {start_read(consumer,t,cst_read_now);
      if(is_empty$1(t))return is_closed$0(t)?3456156:-445537353;
      if(caml_call1(Core_kernel_Queue[14],t[7]))
       return [0,17724,caml_call2(consume,t,consumer)];
      throw [0,Assert_failure,_mX_]}
    function get_max_queue_length(max_queue_length)
     {if(max_queue_length)
       {var max_queue_length$0=max_queue_length[1];
        if(caml_call2(symbol$1,max_queue_length$0,0))
         {var
           _pR_=
            [0,
             [1,
              [0,_mY_,[0,caml_call1(Core_kernel[339],max_queue_length$0),0]]],
             0],
           _pS_=
            [1,
             [0,caml_call1(Sexplib0_Sexp_conv[7],cst_max_queue_length_0),_pR_]];
          caml_call1(Core_kernel[241],_pS_)}
        return max_queue_length$0}
      return Core_kernel_Int[61]}
    function read_now(consumer,max_queue_length,t)
     {var max_queue_length$0=get_max_queue_length(max_queue_length);
      return gen_read_now
              (consumer,
               t,
               function(t,consumer)
                {return consume(t,max_queue_length$0,consumer)})}
    function read_now$0(consumer,t)
     {return gen_read_now(consumer,t,consume_one)}
    function read_now_at_most(consumer,t,num_values)
     {return read_now(consumer,[0,num_values],t)}
    function peek$1(t){return caml_call1(Core_kernel_Queue[44],t[2])}
    function clear$1(t){read_now(0,0,t);return 0}
    function read(consumer,max_queue_length,t)
     {var max_queue_length$0=get_max_queue_length(max_queue_length);
      start_read(consumer,t,cst_read);
      var r=read_now(consumer,[0,max_queue_length$0],t);
      if(typeof r === "number")
       if(! (3456156 <= r))
        return create$14
                (function(ivar)
                  {return caml_call2
                           (Core_kernel_Queue[40],
                            t[7],
                            [0,[2,max_queue_length$0,ivar],consumer])});
      return caml_call1(_h9_,r)}
    function read$0(consumer,t)
     {start_read(consumer,t,cst_read$0);
      if(is_empty$1(t))
       return is_closed$0(t)
               ?caml_call1(_h9_,3456156)
               :create$14
                 (function(ivar)
                   {return caml_call2
                            (Core_kernel_Queue[40],t[7],[0,[1,ivar],consumer])});
      if(caml_call1(Core_kernel_Queue[14],t[7]))
       return caml_call1(_h9_,[0,17724,consume_one(t,consumer)]);
      throw [0,Assert_failure,_mZ_]}
    function read_at_most(consumer,t,num_values)
     {return read(consumer,[0,num_values],t)}
    function values_available(t)
     {start_read(0,t,cst_values_available);
      if(is_empty$1(t))
       {if(is_closed$0(t))return caml_call1(_h9_,3456156);
        var match=caml_call1(Core_kernel_Queue[61],t[7]);
        if(match)
         {var _pP_=match[1],_pQ_=_pP_[1];
          if(0 === _pQ_[0])if(! _pP_[2]){var ivar=_pQ_[1];return ivar}}
        return create$14
                (function(ivar)
                  {return caml_call2
                           (Core_kernel_Queue[40],t[7],[0,[0,ivar],0])})}
      return caml_call1(_h9_,17724)}
    function read_choice(t)
     {function _pO_(param){return read_now$0(0,t)}
      return [0,values_available(t),_pO_]}
    function read_choice_single_consumer_exn(t,here)
     {function _pK_(x)
       {if(typeof x === "number")
         if(! (3456156 <= x))
          {var
            _pM_=
             [0,
              [1,
               [0,
                _m0_,
                [0,caml_call1(Core_kernel_Source_code_position[1],here),0]]],
              0],
            _pN_=
             [1,
              [0,
               caml_call1
                (Sexplib0_Sexp_conv[7],
                 cst_Pipe_read_choice_single_consumer_exn_choice_was_enabled_but_pipe_is_empty_this_is_likely_due_to_a_race_condition_with_one_or_more_other_consumers),
               _pM_]];
           return caml_call1(Core_kernel[241],_pN_)}
        return x}
      var _pL_=read_choice(t);
      return caml_call2(Choice[1],_pL_,_pK_)}
    function read_exactly(consumer,t,num_values)
     {start_read(consumer,t,cst_read_exactly);
      if(caml_call2(symbol$1,num_values,0))
       {var
         _pG_=[0,[1,[0,_m1_,[0,caml_call1(Core_kernel[339],num_values),0]]],0],
         _pH_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],cst_Pipe_read_exactly_got_num_values_0),
            _pG_]];
        caml_call1(Core_kernel[241],_pH_)}
      return create$14
              (function(finish)
                {var result=caml_call2(Core_kernel_Queue[60],0,0);
                 function loop(param)
                  {var already_read=caml_call1(Core_kernel_Queue[13],result);
                   if(caml_call2(symbol$1,already_read,num_values))
                    {if(caml_call2(symbol$2,already_read,num_values))
                      return fill(finish,[0,-876407060,result]);
                     var
                      _pI_=
                       function(param)
                        {if(typeof param === "number")
                          {var
                            _pJ_=
                             caml_call2(symbol$2,already_read,0)
                              ?3456156
                              :[0,287952037,result];
                           return fill(finish,_pJ_)}
                         var q=param[2];
                         caml_call4(Core_kernel_Queue[63],q,result,0,0);
                         return loop(0)};
                     return caml_call2
                             (_h5_,
                              read(consumer,[0,num_values - already_read | 0],t),
                              _pI_)}
                   throw [0,Assert_failure,_m2_]}
                 return loop(0)})}
    function downstream_flushed$1(t)
     {return is_empty$1(t)
              ?caml_call1(Core_kernel_List[7],t[10])
                ?caml_call1(_h9_,17724)
                :combine$0
                  (caml_call2
                    (Core_kernel_List[69],
                     t[10],
                     values_sent_downstream_and_flushed))
              :create$14
                (function(ready)
                  {var _pF_=length$5(t);
                   return caml_call2
                           (Core_kernel_Queue[40],t[6],[0,t[5] + _pF_ | 0,ready])})}
    function upstream_flushed(t)
     {if(caml_call1(Core_kernel_Bag[6],t[11]))return downstream_flushed$1(t);
      function _pD_(f){return caml_call1(f,0)}
      var _pE_=caml_call1(Core_kernel_Bag[17],t[11]);
      return combine$0(caml_call2(Core_kernel_List[69],_pE_,_pD_))}
    function add_consumer(t,downstream_flushed)
     {var consumer=[0,t[1],-758792467,downstream_flushed];
      t[10] = [0,consumer,t[10]];
      return consumer}
    function sexp_of_t$57(param)
     {if(typeof param === "number")return 0 === param?_m3_:_m4_;
      var v0=param[1],v0$0=sexp_of_t$52(v0);
      return [1,[0,_m5_,[0,v0$0,0]]]}
    var Flushed=[0,sexp_of_t$57];
    function fold_gen(read_now,opt,t,init,f)
     {if(opt)var sth=opt[1],flushed=sth;else var flushed=1;
      if(typeof flushed === "number")
       var
        consumer=
         0 === flushed
          ?[0,add_consumer(t,function(param){return caml_call1(_h9_,17724)})]
          :0;
      else
       var consumer$0=flushed[1],consumer=[0,consumer$0];
      if(check_invariant[1])invariant$19(t);
      ensure_consumer_matches(consumer,t);
      return create$14
              (function(finished)
                {function _pB_(param)
                  {function loop(b)
                    {var match=caml_call2(read_now,consumer,t);
                     if(typeof match === "number")
                      {if(3456156 <= match)return fill(finished,b);
                       var _pC_=function(param){return loop(b)};
                       return caml_call2(_h5_,values_available(t),_pC_)}
                     var v=match[2];
                     return caml_call3(f,b,v,continue$0)}
                   function continue$0(b)
                    {caml_call2
                      (Core_kernel_Option[18],consumer,values_sent_downstream);
                     return loop(b)}
                   return loop(init)}
                 return caml_call2(_h5_,caml_call1(_h9_,0),_pB_)})}
    function fold$20(flushed,max_queue_length,t,init,f)
     {function _py_(b,q,loop){return caml_call2(_h5_,caml_call2(f,b,q),loop)}
      return fold_gen
              (function(_pz_)
                {return function(_pA_)
                  {return read_now(_pz_,max_queue_length,_pA_)}},
               flushed,
               t,
               init,
               _py_)}
    function fold$21(flushed,t,init,f)
     {return fold_gen
              (read_now$0,
               flushed,
               t,
               init,
               function(b,a,loop)
                {return caml_call2(_h5_,caml_call2(f,b,a),loop)})}
    function fold_without_pushback(consumer,t,init,f)
     {function _pw_(b,a,loop){return caml_call1(loop,caml_call2(f,b,a))}
      if(consumer)var c=consumer[1],_px_=[0,[0,c]];else var _px_=0;
      return fold_gen(read_now$0,_px_,t,init,_pw_)}
    function with_error_to_current_monitor(opt,f,a)
     {if(opt)
       var sth=opt[1],continue_on_error=sth;
      else
       var continue_on_error=0;
      if(continue_on_error)
       {var
         _pt_=
          function(param)
           {if(0 === param[0])return 0;
            var exn=param[1],_pv_=extract_exn(exn);
            return send_exn(current(0),0,_pv_)},
         _pu_=try_with(0,0,0,0,0,0,function(param){return caml_call1(f,a)});
        return caml_call2(_h__[2],_pu_,_pt_)}
      return caml_call1(f,a)}
    function iter$24(continue_on_error,flushed,max_queue_length,t,f)
     {return fold$20
              (flushed,
               max_queue_length,
               t,
               0,
               function(param,q)
                {return with_error_to_current_monitor(continue_on_error,f,q)})}
    function iter$25(continue_on_error,flushed,t,f)
     {return fold_gen
              (read_now$0,
               flushed,
               t,
               0,
               function(param,a,loop)
                {function _ps_(param){return caml_call1(loop,0)}
                 return caml_call2
                         (_h5_,
                          with_error_to_current_monitor(continue_on_error,f,a),
                          _ps_)})}
    function iter_without_pushback(consumer,opt,max_iterations_per_job,t,f)
     {if(opt)
       var sth=opt[1],continue_on_error=sth;
      else
       var continue_on_error=0;
      ensure_consumer_matches(consumer,t);
      if(max_iterations_per_job)
       {var max_iterations_per_job$0=max_iterations_per_job[1];
        if(caml_call2(symbol$1,max_iterations_per_job$0,0))
         {var
           _pm_=
            [0,
             [1,
              [0,
               _m6_,
               [0,caml_call1(Core_kernel[339],max_iterations_per_job$0),0]]],
             0],
           _pn_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_iter_without_pushback_got_non_positive_max_iterations_per_job),
              _pm_]];
          caml_call1(Core_kernel[241],_pn_)}
        var max_iterations_per_job$1=max_iterations_per_job$0}
      else
       var max_iterations_per_job$1=Core_kernel_Int[61];
      var
       f$0=
        continue_on_error
         ?function(a)
           {try
             {var _pr_=caml_call1(f,a);return _pr_}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return send_exn(current(0),0,exn)}}
         :f;
      return create$14
              (function(finished)
                {function _po_(param)
                  {function start(param)
                    {var remaining=max_iterations_per_job$1;
                     for(;;)
                      {if(caml_call2(symbol$2,remaining,0))
                        {var _pp_=function(param){return start(0)};
                         return caml_call2(_h5_,caml_call1(_h9_,0),_pp_)}
                       var match=read_now$0(consumer,t);
                       if(typeof match === "number")
                        {if(3456156 <= match)return fill(finished,0);
                         var _pq_=function(param){return start(0)};
                         return caml_call2(_h5_,values_available(t),_pq_)}
                       var a=match[2];
                       caml_call1(f$0,a);
                       var remaining$0=remaining - 1 | 0,remaining=remaining$0;
                       continue}}
                   return start(0)}
                 return caml_call2(_h5_,caml_call1(_h9_,0),_po_)})}
    function drain(t)
     {return iter$24(0,0,0,t,function(param){return caml_call1(_h9_,0)})}
    function drain_and_count(t)
     {return fold$20
              (0,
               0,
               t,
               0,
               function(sum,q)
                {return caml_call1
                         (_h9_,sum + caml_call1(Core_kernel_Queue[13],q) | 0)})}
    function read_all(input)
     {var result=caml_call2(Core_kernel_Queue[60],0,0);
      function _pk_(param){return result}
      var
       _pl_=
        iter$24
         (0,
          0,
          0,
          input,
          function(q)
           {caml_call4(Core_kernel_Queue[63],q,result,0,0);
            return caml_call1(_h9_,0)});
      return caml_call2(_h__[2],_pl_,_pk_)}
    function to_list$13(r)
     {var _pj_=Core_kernel_Queue[25];return caml_call2(_h8_,read_all(r),_pj_)}
    function to_stream_deprecated(t)
     {return create$19
              (function(tail)
                {function _pi_(param){return close_exn(tail)}
                 return caml_call2
                         (_h5_,
                          iter_without_pushback
                           (0,0,0,t,function(x){return extend(tail,x)}),
                          _pi_)})}
    function of_stream_deprecated(s)
     {var
       match=create$22(0),
       w=match[2],
       r=match[1],
       q=caml_call2(Core_kernel_Queue[60],0,0);
      function transfer(param)
       {var _ph_=1 - caml_call1(Core_kernel_Queue[14],q);
        return _ph_?(write(w,q),0):_ph_}
      function loop$0(counter,s)
       {if(is_closed$0(w))throw [0,Assert_failure,_m7_];
        var next_deferred=caml_call1(_iA_,s),match=peek$0(next_deferred);
        if(match)
         {var next=match[1];
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return loop_next$0(counter$0,next)}
          return caml_trampoline_return(loop_next$0,[0,next])}
        transfer(0);
        return upon$1(next_deferred,check_closed_loop_next)}
      function loop_next$0(counter,param)
       {if(param)
         {var s=param[2],x=param[1];
          caml_call2(Core_kernel_Queue[40],q,x);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return loop$0(counter$0,s)}
          return caml_trampoline_return(loop$0,[0,s])}
        transfer(0);
        return close(w)}
      function loop(s){return caml_trampoline(loop$0(0,s))}
      function loop_next(param){return caml_trampoline(loop_next$0(0,param))}
      function check_closed_loop_next(next)
       {var _pg_=1 - is_closed$0(w);return _pg_?loop_next(next):_pg_}
      loop(s);
      return r}
    function transfer_gen(read_now,write,input,output,f)
     {if(check_invariant[1]){invariant$19(input);invariant$19(output)}
      function upstream_flushed$0(param){return upstream_flushed(input)}
      var
       _o8_=caml_call2(Core_kernel_Bag[23],output[11],upstream_flushed$0),
       consumer=
        add_consumer
         (input,function(param){return downstream_flushed$1(output)});
      function _o9_(param)
       {caml_call2(Core_kernel_Bag[26],output[11],_o8_);
        return caml_call1(_h9_,0)}
      return protect
              (0,
               0,
               0,
               0,
               0,
               function(param)
                {return create$14
                         (function(result)
                           {function _o__(param)
                             {function output_closed(param)
                               {close_read(input);return fill(result,0)}
                              function loop(param)
                               {if(is_closed$0(output))return output_closed(0);
                                var match=caml_call2(read_now,[0,consumer],input);
                                if(typeof match === "number")
                                 {if(3456156 <= match)return fill(result,0);
                                  var
                                   _o$_=function(param){return loop(0)},
                                   _pa_=0,
                                   _pb_=function(_pf_){return 0},
                                   _pc_=[0,[0,output[8],_pb_],_pa_],
                                   _pd_=function(_pe_){return 0};
                                  return caml_call2
                                          (_h5_,
                                           choose([0,[0,values_available(input),_pd_],_pc_]),
                                           _o$_)}
                                var x=match[2];
                                return caml_call2(f,x,continue$0)}
                              function continue$0(y)
                               {if(is_closed$0(output))return output_closed(0);
                                var pushback=caml_call2(write,output,y);
                                values_sent_downstream(consumer);
                                return caml_call2
                                        (_h5_,pushback,function(param){return loop(0)})}
                              return loop(0)}
                            return caml_call2(_h5_,caml_call1(_h9_,0),_o__)})},
               _o9_)}
    function transfer(max_queue_length,input,output,f)
     {function _o5_(q,k){return caml_call2(_h5_,caml_call1(f,q),k)}
      return transfer_gen
              (function(_o6_)
                {return function(_o7_)
                  {return read_now(_o6_,max_queue_length,_o7_)}},
               write,
               input,
               output,
               _o5_)}
    function transfer$0(input,output,f)
     {return transfer_gen
              (read_now$0,
               write$0,
               input,
               output,
               function(a,k){return caml_call1(k,caml_call1(f,a))})}
    function transfer_id(max_queue_length,input,output)
     {function _o2_(q,k){return caml_call1(k,q)}
      return transfer_gen
              (function(_o3_)
                {return function(_o4_)
                  {return read_now(_o3_,max_queue_length,_o4_)}},
               write,
               input,
               output,
               _o2_)}
    function map_gen(read,write,input,f)
     {var match=create$22(0),output=match[2],result=match[1];
      function _o1_(param){return close(output)}
      upon$1(transfer_gen(read,write,input,output,f),_o1_);
      return result}
    function map$27(max_queue_length,input,f)
     {function _oY_(q,k){return caml_call2(_h5_,caml_call1(f,q),k)}
      return map_gen
              (function(_oZ_)
                {return function(_o0_)
                  {return read_now(_oZ_,max_queue_length,_o0_)}},
               write,
               input,
               _oY_)}
    function map$28(input,f)
     {return map_gen
              (read_now$0,
               write$0,
               input,
               function(a,k){return caml_call1(k,caml_call1(f,a))})}
    function filter_map$5(max_queue_length,input,f)
     {return map$27
              (max_queue_length,input,function(q){return filter_map$3(0,q,f)})}
    function filter_map$6(max_queue_length,input,f)
     {function _oU_(q,k)
       {function _oX_(x){return is_read_closed(input)?0:caml_call1(f,x)}
        return caml_call1(k,caml_call2(Core_kernel_Queue[52],q,_oX_))}
      return map_gen
              (function(_oV_)
                {return function(_oW_)
                  {return read_now(_oV_,max_queue_length,_oW_)}},
               write,
               input,
               _oU_)}
    function fold_filter_map(max_queue_length,input,init,f)
     {var accum=[0,init];
      return filter_map$6
              (max_queue_length,
               input,
               function(x)
                {var match=caml_call2(f,accum[1],x),x$0=match[2],a=match[1];
                 accum[1] = a;
                 return x$0})}
    function fold_map(max_queue_length,input,init,f)
     {return fold_filter_map
              (max_queue_length,
               input,
               init,
               function(accum,a)
                {var match=caml_call2(f,accum,a),b=match[2],accum$0=match[1];
                 return [0,accum$0,[0,b]]})}
    function filter$5(input,f)
     {return filter_map$6(0,input,function(x){return caml_call1(f,x)?[0,x]:0})}
    function of_list$2(l)
     {var t=create_internal$1(caml_call1(Core_kernel_Queue[37],l));
      fill(t[8],0);
      update_pushback(t);
      return t}
    function singleton(x)
     {var match=create$22(0),writer=match[2],reader=match[1];
      write_without_pushback(writer,x);
      close(writer);
      return reader}
    function unfold$0(s,f)
     {function symbol(d,f)
       {var match=peek$0(d);
        if(match){var x=match[1];return caml_call1(f,x)}
        return caml_call2(_h7_,d,f)}
      return create_reader
              (0,
               function(writer)
                {function loop(s)
                  {function _oS_(param)
                    {if(param)
                      {var match=param[1],s=match[2],a=match[1];
                       if(is_closed$0(writer))return caml_call1(_h9_,0);
                       var _oT_=function(param){return loop(s)};
                       return symbol(write$0(writer,a),_oT_)}
                     return caml_call1(_h9_,0)}
                   return symbol(caml_call1(f,s),_oS_)}
                 return loop(s)})}
    function of_sequence(sequence)
     {return create_reader
              (0,
               function(writer)
                {function loop(sequence$1)
                  {if(! is_closed$0(writer))
                    if(! caml_call1(Core_kernel_Sequence[16],sequence$1))
                     {start_write(writer);
                      var
                       _oQ_=length$5(writer),
                       i$1=(1 + writer[3] | 0) - _oQ_ | 0,
                       sequence=sequence$1,
                       i=i$1;
                      for(;;)
                       {if(! caml_call2(symbol$1,i,0))
                         {var match=caml_call1(Core_kernel_Sequence[47],sequence);
                          if(match)
                           {var match$0=match[1],sequence$0=match$0[2],a=match$0[1];
                            caml_call2(Core_kernel_Queue[40],writer[2],a);
                            var i$0=i - 1 | 0,sequence=sequence$0,i=i$0;
                            continue}}
                        finish_write(writer);
                        var _oR_=function(param){return loop(sequence)};
                        return caml_call2(_h__[1],writer[4],_oR_)}}
                   return caml_call1(_h9_,0)}
                 return loop(sequence)})}
    function to_sequence(t)
     {function _oP_(param)
       {var match=read_now$0(0,t);
        if(typeof match === "number")
         return 3456156 <= match?0:[0,[0,[1,values_available(t)],0]];
        var a=match[2];
        return [0,[0,[0,a],0]]}
      return caml_call2(Core_kernel_Sequence[49],0,_oP_)}
    function interleave_pipe(inputs)
     {var
       match=create$22(0),
       output_writer=match[2],
       output=match[1],
       num_pipes_remaining=[0,1];
      function decr_num_pipes_remaining(param)
       {num_pipes_remaining[1] += -1;
        var _oO_=caml_call2(symbol$2,num_pipes_remaining[1],0);
        return _oO_?close(output_writer):_oO_}
      function _oK_(param){return decr_num_pipes_remaining(0)}
      var
       _oL_=
        iter_without_pushback
         (0,
          0,
          0,
          inputs,
          function(input)
           {num_pipes_remaining[1]++;
            function _oM_(param){return decr_num_pipes_remaining(0)}
            var _oN_=transfer_id(0,input,output_writer);
            caml_call2(_h__[2],_oN_,_oM_);
            return 0});
      caml_call2(_h__[2],_oL_,_oK_);
      return output}
    function interleave$0(inputs)
     {if(check_invariant[1])
       caml_call2(Core_kernel_List[8],inputs,invariant$19);
      return interleave_pipe(of_list$2(inputs))}
    function merge$0(inputs,compare)
     {var match=create$22(0),w=match[2],r=match[1];
      function _oA_(param)
       {return caml_call2(Core_kernel_List[8],inputs,close_read)}
      upon$1(w[8],_oA_);
      var _oB_=0;
      function _oC_(param,_oJ_)
       {var a2=_oJ_[1],a1=param[1];return caml_call2(compare,a1,a2)}
      var heap=caml_call3(Pairing_heap[20],0,_oC_,_oB_);
      function handle_read(input,eof_or_ok)
       {if(typeof eof_or_ok === "number")return 0;
        var v=eof_or_ok[2];
        return caml_call2(Pairing_heap[25],heap,[0,v,input])}
      function pop_heap_and_loop(param)
       {for(;;)
         {var match=caml_call1(Pairing_heap[27],heap);
          if(match)
           {var
             match$0=match[1],
             input=match$0[2],
             v=match$0[1],
             _oF_=1 - is_closed$0(w);
            if(_oF_)
             {write_without_pushback(w,v);
              if(caml_call2(symbol$2,caml_call1(Pairing_heap[3],heap),0))
               {var _oG_=function(param){return close(w)};
                return upon$1(transfer_id(0,input,w),_oG_)}
              var x=read_now$0(0,input);
              if(typeof x === "number")
               if(! (3456156 <= x))
                {var
                  _oH_=
                   function(param)
                    {function _oI_(x)
                      {handle_read(input,x);return pop_heap_and_loop(0)}
                     return caml_call2(_h5_,read$0(0,input),_oI_)};
                 return caml_call2(_h5_,w[4],_oH_)}
              handle_read(input,x);
              continue}
            return _oF_}
          return close(w)}}
      var
       initial_push=
        iter$16
         (0,
          inputs,
          function(input)
           {function _oD_(x){return handle_read(input,x)}
            var _oE_=read$0(0,input);
            return caml_call2(_h__[2],_oE_,_oD_)});
      upon$1(initial_push,pop_heap_and_loop);
      return r}
    function concat$2(inputs)
     {var match=create$22(0),w=match[2],r=match[1];
      function _oz_(param){return close(w)}
      upon$1
       (iter$16(0,inputs,function(input){return transfer_id(0,input,w)}),_oz_);
      return r}
    function fork(t,pushback_uses)
     {var
       match=create$22(0),
       writer0=match[2],
       reader0=match[1],
       match$0=create$22(0),
       writer1=match$0[2],
       reader1=match$0[1],
       some_reader_was_closed=[0,0],
       consumer=
        add_consumer
         (t,
          function(param)
           {var some_reader_was_closed$0=some_reader_was_closed[1];
            function _ow_(param)
             {return 17724 <= param
                      ?some_reader_was_closed$0?-402004920:17724
                      :-402004920}
            var
             _ox_=[0,downstream_flushed$1(writer1),0],
             _oy_=combine$0([0,downstream_flushed$1(writer0),_ox_]);
            return caml_call2(_h__[2],_oy_,_ow_)}),
       still_open=[0,writer0,[0,writer1,0]];
      function filter_open(still_open)
       {if(caml_call2(Core_kernel_List[12],still_open,is_closed$0))
         {some_reader_was_closed[1] = 1;
          var
           _ov_=function(w){return 1 - is_closed$0(w)},
           still_open$0=caml_call2(Core_kernel_List[48],still_open,_ov_);
          if(caml_call1(Core_kernel_List[7],still_open$0))close(t);
          return still_open$0}
        return still_open}
      function _op_(still_open)
       {caml_call2(Core_kernel_List[8],still_open,close);
        return caml_call1(_h9_,0)}
      var
       _oq_=
        fold$20
         ([0,[0,consumer]],
          0,
          t,
          still_open,
          function(still_open,queue)
           {var still_open$0=filter_open(still_open);
            if(caml_call1(Core_kernel_List[7],still_open$0))
             return caml_call1(_h9_,0);
            function _or_(param)
             {var still_open=filter_open(still_open$0);
              function _ot_(w)
               {start_write(w);
                function _ou_(x)
                 {return caml_call2(Core_kernel_Queue[40],w[2],x)}
                caml_call2(Core_kernel_Queue[15],queue,_ou_);
                return finish_write(w)}
              caml_call2(Core_kernel_List[8],still_open,_ot_);
              return still_open}
            var
             _os_=
              -648027566 <= pushback_uses
               ?any(caml_call2(Core_kernel_List[69],still_open$0,pushback$0))
               :all_unit
                 (caml_call2(Core_kernel_List[69],still_open$0,pushback$0));
            return caml_call2(_h__[2],_os_,_or_)});
      caml_call2(_h__[1],_oq_,_op_);
      return [0,reader0,reader1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$145);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Pipe=
      [0,
       sexp_of_pipe,
       sexp_of_pipe,
       [0,sexp_of_t$56,invariant$19],
       [0,sexp_of_t$55,invariant$19],
       create_reader,
       create_writer,
       init$4,
       create$22,
       of_list$2,
       singleton,
       unfold$0,
       of_sequence,
       to_sequence,
       close,
       close_read,
       is_closed$0,
       closed$1,
       [0,sexp_of_t$51],
       upstream_flushed,
       downstream_flushed$1,
       [0,values_sent_downstream],
       add_consumer,
       length$5,
       is_empty$1,
       pushback$0,
       write$0,
       write_without_pushback,
       transfer_in,
       transfer_in_without_pushback,
       write_when_ready,
       write_if_open,
       write_without_pushback_if_open,
       read,
       read$0,
       read_at_most,
       read_exactly,
       read_now,
       read_now$0,
       read_now_at_most,
       peek$1,
       clear$1,
       read_all,
       values_available,
       read_choice,
       read_choice_single_consumer_exn,
       Flushed,
       fold$20,
       fold$21,
       fold_without_pushback,
       iter$24,
       iter$25,
       iter_without_pushback,
       transfer,
       transfer$0,
       transfer_id,
       map$27,
       map$28,
       fold_map,
       fold_map,
       filter_map$5,
       filter_map$6,
       fold_filter_map,
       fold_filter_map,
       filter$5,
       interleave$0,
       interleave_pipe,
       merge$0,
       concat$2,
       fork,
       to_stream_deprecated,
       of_stream_deprecated,
       drain,
       drain_and_count,
       to_list$13,
       hash,
       equal$4,
       compare$1,
       size_budget,
       set_size_budget$0,
       show_debug_messages,
       check_invariant];
    caml_register_global(1267,Async_kernel_Pipe,"Async_kernel__Pipe");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$146);
    caml_call1(Expect_test_collector[4][1],cst_src_mvar_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$147,cst$54);
    function _m8_(r){return r[3]}
    function set_value_available(r,v){r[3] = v;return 0}
    function taken(r){return r[2]}
    function current_value(r){return r[1]}
    function _m9_(r,v){return [0,r[1],r[2],v]}
    var
     _m__=[0,set_value_available],
     value_available=
      [0,function(param){return 0},cst_value_available,_m__,_m8_,_m9_];
    function _m$_(r,v){return [0,r[1],v,r[3]]}
    var
     _na_=0,
     taken$0=[0,function(param){return 0},cst_taken,_na_,taken,_m$_];
    function _nb_(r,v){return [0,v,r[2],r[3]]}
    var
     _nc_=0,
     current_value$0=
      [0,function(param){return 0},cst_current_value,_nc_,current_value,_nb_];
    function value_available$0(t){return t[3]}
    function is_empty$2(t){return caml_call1(Moption[5],t[1])}
    function invariant$20(invariant_a,param,t)
     {function _oj_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        var
         value_available_fun=
          check
           (function(value_available)
             {var
               got=is_full(value_available),
               expect=caml_call1(Moption[6],t[1]),
               sexpifier=Core_kernel[291],
               comparator=Core_kernel[287];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$3,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       expect,
                       got)});
        function _ol_(_oo_){return 0}
        var
         _om_=Core_kernel_Unit[4],
         taken_fun=check(function(_on_){return invariant$11(_om_,_ol_,_on_)}),
         current_value_fun=check(caml_call1(Moption[2],invariant_a));
        caml_call1(current_value_fun,current_value$0);
        caml_call1(taken_fun,taken$0);
        return caml_call1(value_available_fun,value_available)}
      function of_a(param){return _ng_}
      function _ok_(param)
       {var
         v_taken=param[2],
         v_current_value=param[1],
         v_value_available=param[3],
         arg=sexp_of_t$33(Core_kernel[491],v_value_available),
         bnds=[0,[1,[0,_nd_,[0,arg,0]]],0],
         arg$0=sexp_of_t$38(Core_kernel[491],Core_kernel[190],v_taken),
         bnds$0=[0,[1,[0,_ne_,[0,arg$0,0]]],bnds],
         arg$1=caml_call2(Moption[1],of_a,v_current_value),
         bnds$1=[0,[1,[0,_nf_,[0,arg$1,0]]],bnds$0];
        return [1,bnds$1]}
      return caml_call4(include$9[1],_nh_,t,_ok_,_oj_)}
    function peek$2(t){return caml_call1(Moption[7],t[1])}
    function peek_exn(t)
     {if(is_empty$2(t))
       {var
         _oi_=
          caml_call1
           (Sexplib0_Sexp_conv[7],cst_Mvar_peek_exn_called_on_empty_mvar);
        caml_call1(Core_kernel[241],_oi_)}
      return caml_call1(Moption[8],t[1])}
    function sexp_of_t$58(sexp_of_a,param,t)
     {var _oh_=peek$2(t);return caml_call2(Core_kernel[431],sexp_of_a,_oh_)}
    function sexp_of_t$59(of_a,v)
     {return sexp_of_t$58(of_a,Core_kernel[190],v)}
    function invariant$21(invariant_a,t)
     {return invariant$20(invariant_a,function(_og_){return 0},t)}
    var Read_write$1=[0,sexp_of_t$59,invariant$21];
    function sexp_of_t$60(of_a,v)
     {return sexp_of_t$58(of_a,Core_kernel[159],v)}
    function invariant$22(invariant_a,t)
     {return invariant$20(invariant_a,function(_of_){return 0},t)}
    var Read_only=[0,sexp_of_t$60,invariant$22];
    function read_only$1(t){return t}
    function write_only(t){return t}
    function create$23(param)
     {var _od_=caml_call1(create$13,0),_oe_=caml_call1(_iP_,0);
      return [0,caml_call1(Moption[4],0),_oe_,_od_]}
    function take_nonempty(t)
     {if(is_empty$2(t))throw [0,Assert_failure,_ni_];
      var r=caml_call1(Moption[8],t[1]);
      caml_call1(Moption[11],t[1]);
      broadcast(t[2],0);
      t[3] = caml_call1(create$13,0);
      return r}
    function take_now_exn(t)
     {if(is_empty$2(t))
       {var
         _oc_=
          caml_call1
           (Sexplib0_Sexp_conv[7],cst_Mvar_take_exn_called_on_empty_mvar);
        caml_call1(Core_kernel[241],_oc_)}
      return take_nonempty(t)}
    function take_now(t){return is_empty$2(t)?0:[0,take_nonempty(t)]}
    function take(t)
     {if(is_empty$2(t))
       {var _ob_=function(param){return take(t)};
        return caml_call2(_h__[1],t[3],_ob_)}
      return caml_call1(_h9_,take_nonempty(t))}
    function set$0(t,v)
     {caml_call2(Moption[12],t[1],v);return fill_if_empty(t[3],0)}
    function update$0(t,f){return set$0(t,caml_call1(f,peek$2(t)))}
    function update_exn(t,f){return set$0(t,caml_call1(f,peek_exn(t)))}
    function taken$1(t){return wait(t[2])}
    function put(t,v)
     {if(is_empty$2(t)){set$0(t,v);return caml_call1(_h9_,0)}
      function _n$_(param){return put(t,v)}
      var _oa_=taken$1(t);
      return caml_call2(_h__[1],_oa_,_n$_)}
    function pipe_when_ready(t)
     {var match=create$22(0),w=match[2],r=match[1];
      function loop(param)
       {function _n8_(param)
         {if(is_closed$0(w))return caml_call1(_h9_,0);
          var match=take_now(t);
          if(match)
           {var
             x=match[1],
             _n9_=function(param){return loop(0)},
             _n__=write$0(w,x);
            return caml_call2(_h__[1],_n__,_n9_)}
          return loop(0)}
        return caml_call2(_h__[1],t[3],_n8_)}
      loop(0);
      return r}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$148);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Mvar=
      [0,
       sexp_of_t$58,
       Read_write$1,
       Read_only,
       create$23,
       is_empty$2,
       put,
       set$0,
       update$0,
       update_exn,
       read_only$1,
       write_only,
       value_available$0,
       take,
       take_now,
       take_now_exn,
       taken$1,
       peek$2,
       peek_exn,
       pipe_when_ready];
    caml_register_global(1270,Async_kernel_Mvar,"Async_kernel__Mvar");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$149);
    caml_call1(Expect_test_collector[4][1],cst_src_lazy_deferred_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$150,cst$55);
    function create$24(f)
     {var start=caml_call1(create$13,0);
      function _n7_(param){return try_with_or_error(0,0,0,0,f)}
      return [0,start,caml_call2(_h__[1],start,_n7_)]}
    function wait$0(t){return t[2]}
    function wait_exn(t){return caml_call2(_h8_,t[2],Core_kernel[233])}
    function force(t){fill_if_empty(t[1],0);return t[2]}
    function force_exn(t)
     {var _n6_=Core_kernel[233];return caml_call2(_h8_,force(t),_n6_)}
    function return$5(a)
     {return create$24(function(param){return caml_call1(_h9_,a)})}
    function bind$5(t,f)
     {return create$24
              (function(param)
                {function _n4_(a){return force_exn(caml_call1(f,a))}
                 var _n5_=force_exn(t);
                 return caml_call2(_h__[1],_n5_,_n4_)})}
    var
     map$29=
      [0,
       -198771759,
       function(t,f)
        {return create$24
                 (function(param){return caml_call2(_h8_,force_exn(t),f)})}],
     include$30=caml_call1(Base_Monad[1],[0,bind$5,return$5,map$29]),
     _nm_=include$30[4],
     _nj_=include$30[1],
     _nk_=include$30[2],
     _nl_=include$30[3],
     _nn_=include$30[5],
     _no_=include$30[6],
     _np_=include$30[7],
     _nq_=include$30[8],
     _nr_=include$30[9],
     _ns_=include$30[10],
     _nt_=include$30[11];
    function bind$6(t,f)
     {return caml_call2
              (_nm_,
               t,
               function(a)
                {return create$24(function(param){return caml_call1(f,a)})})}
    function is_forced(t){return is_full(t[1])}
    function is_determined$0(t){return is_determined(t[2])}
    function peek$3(t){return peek$0(t[2])}
    function peek_exn$0(t)
     {var _n2_=Core_kernel[233],_n3_=peek$3(t);
      return caml_call2(Core_kernel_Option[38],_n3_,_n2_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$151);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Lazy_deferred=
      [0,
       create$24,
       force,
       force_exn,
       wait$0,
       wait_exn,
       _nj_,
       _nk_,
       _nl_,
       _nm_,
       _nn_,
       _no_,
       _np_,
       _nq_,
       _nr_,
       _ns_,
       _nt_,
       bind$6,
       peek$3,
       peek_exn$0,
       is_determined$0,
       is_forced];
    caml_register_global
     (1271,Async_kernel_Lazy_deferred,"Async_kernel__Lazy_deferred");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$152);
    caml_call1(Expect_test_collector[4][1],cst_src_async_condition_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$153,cst$56);
    function sexp_of_t$61(of_a,param)
     {var v_waits=param[1],bnds=0;
      function _n0_(_n1_){return sexp_of_t$33(of_a,_n1_)}
      var
       arg=caml_call2(Core_kernel_Queue[11],_n0_,v_waits),
       bnds$0=[0,[1,[0,_nu_,[0,arg,0]]],bnds];
      return [1,bnds$0]}
    function create$25(param)
     {return [0,caml_call2(Core_kernel_Queue[60],0,0)]}
    function wait$1(t)
     {return create$14
              (function(ivar)
                {return caml_call2(Core_kernel_Queue[40],t[1],ivar)})}
    function signal(t,a)
     {function _nY_(ivar){return fill(ivar,a)}
      var _nZ_=caml_call1(Core_kernel_Queue[42],t[1]);
      return caml_call2(Core_kernel_Option[18],_nZ_,_nY_)}
    function broadcast$0(t,a)
     {function _nX_(ivar){return fill(ivar,a)}
      caml_call2(Core_kernel_Queue[15],t[1],_nX_);
      return caml_call1(Core_kernel_Queue[46],t[1])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$154);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Async_condition=
      [0,sexp_of_t$61,create$25,signal,broadcast$0,wait$1];
    caml_register_global
     (1272,Async_kernel_Async_condition,"Async_kernel__Async_condition");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$155);
    caml_call1(Expect_test_collector[4][1],cst_src_async_gc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$156,cst$57);
    var
     Stat=include$24[1],
     Control=include$24[2],
     print_stat=include$24[3],
     allocated_bytes=include$24[4],
     keep_alive=include$24[5],
     Allocation_policy=include$24[6],
     tune=include$24[7],
     disable_compaction=include$24[8],
     Stable=include$24[10];
    function add_finalizer$0(heap_block,f)
     {return add_finalizer(t$5(0),heap_block,f)}
    function add_finalizer_exn$0(heap_block,f)
     {return add_finalizer_exn(t$5(0),heap_block,f)}
    function add_finalizer_last$0(heap_block,f)
     {return add_finalizer_last(t$5(0),heap_block,f)}
    function add_finalizer_last_exn$0(heap_block,f)
     {return add_finalizer_last_exn(t$5(0),heap_block,f)}
    var sexp_of_t$62=include$24[9][6][1];
    function create$26(f){return create_alarm(t$5(0),f)}
    var
     delete$0=include$24[9][6][3],
     Alarm$0=[0,sexp_of_t$62,create$26,delete$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$157);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel_Async_gc=
      [0,
       Stat,
       Control,
       print_stat,
       allocated_bytes,
       keep_alive,
       Allocation_policy,
       tune,
       disable_compaction,
       Stable,
       add_finalizer$0,
       add_finalizer_exn$0,
       add_finalizer_last$0,
       add_finalizer_last_exn$0,
       Alarm$0];
    caml_register_global(1273,Async_kernel_Async_gc,"Async_kernel__Async_gc");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$158);
    caml_call1(Expect_test_collector[4][1],cst_src_async_invariant_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$159,cst$58);
    var Async=[0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$160);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Async_invariant_intf=[0,Async];
    caml_register_global
     (1274,
      Async_kernel_Async_invariant_intf,
      "Async_kernel__Async_invariant_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$161);
    caml_call1(Expect_test_collector[4][1],cst_src_async_invariant_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$162,cst$59);
    var _nv_=include$9[1],_nw_=include$9[2];
    function invariant$23(here,t,sexp_of_t,f)
     {function _nR_(param)
       {if(0 === param[0])return 0;
        var
         exn=param[1],
         _nT_=[0,caml_call1(sexp_of_t,t),0],
         _nU_=[0,[1,[0,_nx_,[0,caml_call1(Core_kernel[508],exn),0]]],_nT_],
         _nV_=[0,caml_call1(Core_kernel_Source_code_position[1],here),_nU_],
         _nW_=
          [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_invariant_failed),_nV_]];
        return caml_call1(Core_kernel[241],_nW_)}
      var _nS_=try_with(0,0,0,_ny_,0,0,f);
      return caml_call2(include$29[4][3],_nS_,_nR_)}
    function check_field(t,f,wait_for_previous,field)
     {function _nK_(param)
       {function _nL_(param)
         {if(0 === param[0])return 0;
          var
           exn=param[1],
           _nN_=[0,[1,[0,_nz_,[0,caml_call1(Core_kernel[508],exn),0]]],0],
           _nO_=caml_call1(Base_Field[2],field),
           _nP_=[0,[1,[0,_nA_,[0,caml_call1(Core_kernel[447],_nO_),0]]],_nN_],
           _nQ_=
            [1,
             [0,caml_call1(Sexplib0_Sexp_conv[7],cst_problem_with_field),_nP_]];
          return caml_call1(Core_kernel[241],_nQ_)}
        var
         _nM_=
          try_with
           (0,
            0,
            0,
            _nB_,
            0,
            0,
            function(param)
             {return caml_call1(f,caml_call2(Base_Field[3],field,t))});
        return caml_call2(include$29[4][3],_nM_,_nL_)}
      return caml_call2(include$29[4][2],wait_for_previous,_nK_)}
    var Async$0=[0,invariant$23,check_field];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$163);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_kernel_Async_invariant=[0,_nv_,_nw_,Async$0];
    caml_register_global
     (1275,Async_kernel_Async_invariant,"Async_kernel__Async_invariant");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_kernel$164);
    caml_call1(Expect_test_collector[4][1],cst_src_async_kernel_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$165,cst$60);
    var
     after$5=Async_kernel_Clock_ns[4],
     at$7=Async_kernel_Clock_ns[3],
     every$3=Async_kernel_Clock_ns[10],
     with_timeout$1=Async_kernel_Clock_ns[5],
     symbol$9=_lb_[3],
     return$6=include$29[1],
     symbol_bind$3=include$29[2],
     symbol_map$2=include$29[3],
     Let_syntax$1=include$29[4],
     Async_kernel_private=[0];
    function _nC_(param)
     {var expect=runtime.core_kernel_gc_minor_words(0);
      caml_call1(return$6,0);
      return$0(0);
      caml_call1(include$29[1],0);
      caml_call1(include$29[4][1],0);
      var
       got=runtime.core_kernel_gc_minor_words(0),
       sexpifier=Core_kernel[339],
       comparator=Core_kernel[335];
      return caml_call8
              (Ppx_assert_lib_Runtime[3],
               pos$4,
               sexpifier,
               comparator,
               0,
               0,
               0,
               expect,
               got)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_return_does_not_allocate,
      0,
      cst_src_async_kernel_ml$0,
      86,
      0,
      443,
      _nC_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$166);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_kernel$0=
      [0,
       after$5,
       at$7,
       catch$0,
       choice,
       choose,
       don_t_wait_for,
       every$3,
       never,
       _kA_,
       _kz_,
       try_with,
       upon$1,
       with_timeout$1,
       _kx_,
       _kw_,
       symbol$9,
       symbol_bind$1,
       _k3_,
       return$6,
       symbol_bind$3,
       symbol_map$2,
       Let_syntax$1,
       Async_kernel_private];
    caml_register_global(1277,Async_kernel$0,"Async_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19rZXJuZWwuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
