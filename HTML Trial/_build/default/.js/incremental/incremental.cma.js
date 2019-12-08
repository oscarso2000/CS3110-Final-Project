(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
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
    function caml_call16
     (f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)
     {return f.length == 16
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15])}
    function caml_call17
     (f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16)
     {return f.length == 17
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16)
              :runtime.caml_call_gen
                (f,
                 [a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16])}
    function caml_call26
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
      a25)
     {return f.length == 26
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
                 a25)
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
                  a25])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_incremental=caml_new_string("incremental"),
     cst_src_before_or_after_ml=caml_new_string("src/before_or_after.ml"),
     cst=caml_new_string(""),
     cst_incremental$0=caml_new_string("incremental"),
     cst_incremental$1=caml_new_string("incremental"),
     cst_incremental$2=caml_new_string("incremental"),
     cst_src_import_ml=caml_new_string("src/import.ml"),
     cst$0=caml_new_string(""),
     cst_incremental$3=caml_new_string("incremental"),
     cst_incremental$4=caml_new_string("incremental"),
     cst_incremental$5=caml_new_string("incremental"),
     cst_src_cutoff_ml=caml_new_string("src/cutoff.ml"),
     cst$1=caml_new_string(""),
     cst_incremental$6=caml_new_string("incremental"),
     cst_incremental$7=caml_new_string("incremental"),
     cst_incremental$8=caml_new_string("incremental"),
     cst_src_node_id_ml=caml_new_string("src/node_id.ml"),
     cst$2=caml_new_string(""),
     cst_incremental$9=caml_new_string("incremental"),
     cst_incremental$10=caml_new_string("incremental"),
     cst_incremental$11=caml_new_string("incremental"),
     cst_src_stabilization_num_ml=caml_new_string("src/stabilization_num.ml"),
     cst$3=caml_new_string(""),
     cst_incremental$12=caml_new_string("incremental"),
     cst_incremental$13=caml_new_string("incremental"),
     cst_incremental$14=caml_new_string("incremental"),
     cst_src_on_update_handler_ml=caml_new_string("src/on_update_handler.ml"),
     cst$4=caml_new_string(""),
     cst_incremental$15=caml_new_string("incremental"),
     cst_incremental$16=caml_new_string("incremental"),
     cst_Top=caml_new_string("Top"),
     cst_n=caml_new_string("n"),
     cst_incremental$17=caml_new_string("incremental"),
     cst_src_types_ml=caml_new_string("src/types.ml"),
     cst$5=caml_new_string(""),
     cst_incremental$18=caml_new_string("incremental"),
     cst_incremental$19=caml_new_string("incremental"),
     cst_incremental$20=caml_new_string("incremental"),
     cst_src_var_ml=caml_new_string("src/var.ml"),
     cst$6=caml_new_string(""),
     cst_incremental$21=caml_new_string("incremental"),
     cst_watch=caml_new_string("watch"),
     cst_set_at=caml_new_string("set_at"),
     cst_value_set_during_stabilization=
      caml_new_string("value_set_during_stabilization"),
     cst_value=caml_new_string("value"),
     cst_incremental$22=caml_new_string("incremental"),
     cst_Unordered_array_fold_child_changed_mismatch=
      caml_new_string("[Unordered_array_fold.child_changed] mismatch"),
     pos=caml_new_string("src/unordered_array_fold.ml:58:26"),
     cst_incremental$23=caml_new_string("incremental"),
     cst_src_unordered_array_fold_ml=
      caml_new_string("src/unordered_array_fold.ml"),
     cst$7=caml_new_string(""),
     cst_incremental$24=caml_new_string("incremental"),
     cst_num_changes_since_last_full_compute=
      caml_new_string("num_changes_since_last_full_compute"),
     cst_fold_value=caml_new_string("fold_value"),
     cst_children=caml_new_string("children"),
     cst_full_compute_every_n_changes=
      caml_new_string("full_compute_every_n_changes"),
     cst_init=caml_new_string("init"),
     cst_main=caml_new_string("main"),
     cst_incremental$25=caml_new_string("incremental"),
     cst_incremental$26=caml_new_string("incremental"),
     cst_src_alarm_ml=caml_new_string("src/alarm.ml"),
     cst$8=caml_new_string(""),
     cst_incremental$27=caml_new_string("incremental"),
     cst_incremental$28=caml_new_string("incremental"),
     cst_incremental$29=caml_new_string("incremental"),
     cst_src_step_function_node_ml=
      caml_new_string("src/step_function_node.ml"),
     cst$9=caml_new_string(""),
     cst_incremental$30=caml_new_string("incremental"),
     cst_alarm_value=caml_new_string("alarm_value"),
     cst_alarm=caml_new_string("alarm"),
     cst_value$0=caml_new_string("value"),
     cst_main$0=caml_new_string("main"),
     cst_incremental$31=caml_new_string("incremental"),
     cst_incremental$32=caml_new_string("incremental"),
     cst_src_array_fold_ml=caml_new_string("src/array_fold.ml"),
     cst$10=caml_new_string(""),
     cst_incremental$33=caml_new_string("incremental"),
     cst_children$0=caml_new_string("children"),
     cst_init$0=caml_new_string("init"),
     cst_incremental$34=caml_new_string("incremental"),
     cst_incremental$35=caml_new_string("incremental"),
     cst_src_at_ml=caml_new_string("src/at.ml"),
     cst$11=caml_new_string(""),
     cst_incremental$36=caml_new_string("incremental"),
     cst_alarm$0=caml_new_string("alarm"),
     cst_main$1=caml_new_string("main"),
     cst_incremental$37=caml_new_string("incremental"),
     cst_incremental$38=caml_new_string("incremental"),
     cst_src_at_intervals_ml=caml_new_string("src/at_intervals.ml"),
     cst$12=caml_new_string(""),
     cst_incremental$39=caml_new_string("incremental"),
     cst_alarm$1=caml_new_string("alarm"),
     cst_interval=caml_new_string("interval"),
     cst_main$2=caml_new_string("main"),
     cst_incremental$40=caml_new_string("incremental"),
     cst_incremental$41=caml_new_string("incremental"),
     cst_src_bind_ml=caml_new_string("src/bind.ml"),
     cst$13=caml_new_string(""),
     cst_incremental$42=caml_new_string("incremental"),
     cst_all_nodes_created_on_rhs=caml_new_string("all_nodes_created_on_rhs"),
     cst_rhs_scope=caml_new_string("rhs_scope"),
     cst_lhs_change=caml_new_string("lhs_change"),
     cst_main$3=caml_new_string("main"),
     cst_incremental$43=caml_new_string("incremental"),
     pos$1=caml_new_string("src/expert.ml:76:19"),
     pos$2=caml_new_string("src/expert.ml:69:22"),
     pos$0=caml_new_string("src/expert.ml:60:21"),
     cst_incremental$44=caml_new_string("incremental"),
     cst_src_expert_ml=caml_new_string("src/expert.ml"),
     cst$14=caml_new_string(""),
     cst_incremental$45=caml_new_string("incremental"),
     cst_incremental$46=caml_new_string("incremental"),
     cst_incremental$47=caml_new_string("incremental"),
     cst_src_sexp_of_ml=caml_new_string("src/sexp_of.ml"),
     cst$15=caml_new_string(""),
     cst_incremental$48=caml_new_string("incremental"),
     cst_incremental$49=caml_new_string("incremental"),
     cst_incremental$50=caml_new_string("incremental"),
     cst_src_scope_ml=caml_new_string("src/scope.ml"),
     cst$16=caml_new_string(""),
     cst_incremental$51=caml_new_string("incremental"),
     cst_incremental$52=caml_new_string("incremental"),
     cst_incremental$53=caml_new_string("incremental"),
     cst_src_freeze_ml=caml_new_string("src/freeze.ml"),
     cst$17=caml_new_string(""),
     cst_incremental$54=caml_new_string("incremental"),
     cst_main$4=caml_new_string("main"),
     cst_incremental$55=caml_new_string("incremental"),
     cst_incremental$56=caml_new_string("incremental"),
     cst_src_if_then_else_ml=caml_new_string("src/if_then_else.ml"),
     cst$18=caml_new_string(""),
     cst_incremental$57=caml_new_string("incremental"),
     cst_current_branch=caml_new_string("current_branch"),
     cst_test_change=caml_new_string("test_change"),
     cst_main$5=caml_new_string("main"),
     cst_incremental$58=caml_new_string("incremental"),
     cst_incremental$59=caml_new_string("incremental"),
     cst_src_join_ml=caml_new_string("src/join.ml"),
     cst$19=caml_new_string(""),
     cst_incremental$60=caml_new_string("incremental"),
     cst_lhs_change$0=caml_new_string("lhs_change"),
     cst_main$6=caml_new_string("main"),
     cst_incremental$61=caml_new_string("incremental"),
     cst_incremental$62=caml_new_string("incremental"),
     cst_src_snapshot_ml=caml_new_string("src/snapshot.ml"),
     cst$20=caml_new_string(""),
     cst_incremental$63=caml_new_string("incremental"),
     cst_before=caml_new_string("before"),
     cst_main$7=caml_new_string("main"),
     cst_incremental$64=caml_new_string("incremental"),
     cst_Kind_slow_get_child_got_invalid_index=
      caml_new_string("Kind.slow_get_child got invalid index"),
     cst_Invalid=caml_new_string("Invalid"),
     cst_Uninitialized=caml_new_string("Uninitialized"),
     cst_Array_fold=caml_new_string("Array_fold"),
     cst_At=caml_new_string("At"),
     cst_At_intervals=caml_new_string("At_intervals"),
     cst_Bind_lhs_change=caml_new_string("Bind_lhs_change"),
     cst_Bind_main=caml_new_string("Bind_main"),
     cst_Const=caml_new_string("Const"),
     cst_Expert=caml_new_string("Expert"),
     cst_Freeze=caml_new_string("Freeze"),
     cst_If_test_change=caml_new_string("If_test_change"),
     cst_If_then_else=caml_new_string("If_then_else"),
     cst_Join_lhs_change=caml_new_string("Join_lhs_change"),
     cst_Join_main=caml_new_string("Join_main"),
     cst_Map=caml_new_string("Map"),
     cst_Snapshot=caml_new_string("Snapshot"),
     cst_Step_function=caml_new_string("Step_function"),
     cst_Unordered_array_fold=caml_new_string("Unordered_array_fold"),
     cst_Var=caml_new_string("Var"),
     cst_Map2=caml_new_string("Map2"),
     cst_Map3=caml_new_string("Map3"),
     cst_Map4=caml_new_string("Map4"),
     cst_Map5=caml_new_string("Map5"),
     cst_Map6=caml_new_string("Map6"),
     cst_Map7=caml_new_string("Map7"),
     cst_Map8=caml_new_string("Map8"),
     cst_Map9=caml_new_string("Map9"),
     cst_Map10=caml_new_string("Map10"),
     cst_Map11=caml_new_string("Map11"),
     cst_Map12=caml_new_string("Map12"),
     cst_Map13=caml_new_string("Map13"),
     cst_Map14=caml_new_string("Map14"),
     cst_Map15=caml_new_string("Map15"),
     cst_incremental$65=caml_new_string("incremental"),
     cst_src_kind_ml=caml_new_string("src/kind.ml"),
     cst$21=caml_new_string(""),
     cst_incremental$66=caml_new_string("incremental"),
     cst_incremental$67=caml_new_string("incremental"),
     cst_n$0=caml_new_string("n"),
     cst_attempt_to_get_value_of_an_invalid_node=
      caml_new_string("attempt to get value of an invalid node"),
     pos$8=caml_new_string("src/node.ml:307:27"),
     pos$7=caml_new_string("src/node.ml:319:24"),
     pos$6=caml_new_string("src/node.ml:325:22"),
     pos$5=caml_new_string("src/node.ml:386:29"),
     pos$4=caml_new_string("src/node.ml:400:26"),
     pos$3=caml_new_string("src/node.ml:270:15"),
     cst_incremental$68=caml_new_string("incremental"),
     cst_src_node_ml=caml_new_string("src/node.ml"),
     cst$22=caml_new_string(""),
     cst_incremental$69=caml_new_string("incremental"),
     cst_my_child_index_in_parent_at_index=
      caml_new_string("my_child_index_in_parent_at_index"),
     cst_my_parent_index_in_child_at_index=
      caml_new_string("my_parent_index_in_child_at_index"),
     cst_observers=caml_new_string("observers"),
     cst_old_value_opt=caml_new_string("old_value_opt"),
     cst_next_in_adjust_heights_heap=
      caml_new_string("next_in_adjust_heights_heap"),
     cst_height_in_adjust_heights_heap=
      caml_new_string("height_in_adjust_heights_heap"),
     cst_next_in_recompute_heap=caml_new_string("next_in_recompute_heap"),
     cst_prev_in_recompute_heap=caml_new_string("prev_in_recompute_heap"),
     cst_height_in_recompute_heap=caml_new_string("height_in_recompute_heap"),
     cst_height=caml_new_string("height"),
     cst_next_node_in_same_scope=caml_new_string("next_node_in_same_scope"),
     cst_created_in=caml_new_string("created_in"),
     cst_parent0=caml_new_string("parent0"),
     cst_parent1_and_beyond=caml_new_string("parent1_and_beyond"),
     cst_num_parents=caml_new_string("num_parents"),
     cst_num_on_update_handlers=caml_new_string("num_on_update_handlers"),
     cst_changed_at=caml_new_string("changed_at"),
     cst_cutoff=caml_new_string("cutoff"),
     cst_kind=caml_new_string("kind"),
     cst_value_opt=caml_new_string("value_opt"),
     cst_recomputed_at=caml_new_string("recomputed_at"),
     cst_id=caml_new_string("id"),
     cst_incremental$70=caml_new_string("incremental"),
     pos$9=caml_new_string("src/recompute_heap.ml:38:22"),
     cst_incremental$71=caml_new_string("incremental"),
     cst_src_recompute_heap_ml=caml_new_string("src/recompute_heap.ml"),
     cst$23=caml_new_string(""),
     cst_incremental$72=caml_new_string("incremental"),
     cst_nodes_by_height=caml_new_string("nodes_by_height"),
     cst_height_lower_bound=caml_new_string("height_lower_bound"),
     cst_length=caml_new_string("length"),
     cst_incremental$73=caml_new_string("incremental"),
     cst_adding_edge_made_graph_cyclic=
      caml_new_string("adding edge made graph cyclic"),
     cst_node_with_too_large_height=
      caml_new_string("node with too large height"),
     cst_cannot_set_max_height_allowed_less_than_the_max_height_already_seen=
      caml_new_string
       ("cannot set_max_height_allowed less than the max height already seen"),
     cst_incremental$74=caml_new_string("incremental"),
     cst_src_adjust_heights_heap_ml=
      caml_new_string("src/adjust_heights_heap.ml"),
     cst$24=caml_new_string(""),
     cst_incremental$75=caml_new_string("incremental"),
     cst_nodes_by_height$0=caml_new_string("nodes_by_height"),
     cst_max_height_seen=caml_new_string("max_height_seen"),
     cst_height_lower_bound$0=caml_new_string("height_lower_bound"),
     cst_length$0=caml_new_string("length"),
     cst_incremental$76=caml_new_string("incremental"),
     cst_incremental$77=caml_new_string("incremental"),
     cst_src_alarm_value_ml=caml_new_string("src/alarm_value.ml"),
     cst$25=caml_new_string(""),
     cst_incremental$78=caml_new_string("incremental"),
     cst_action=caml_new_string("action"),
     cst_incremental$79=caml_new_string("incremental"),
     cst_incremental$80=caml_new_string("incremental"),
     cst_src_config_intf_ml=caml_new_string("src/config_intf.ml"),
     cst$26=caml_new_string(""),
     cst_incremental$81=caml_new_string("incremental"),
     cst_incremental$82=caml_new_string("incremental"),
     cst_incremental$83=caml_new_string("incremental"),
     cst_src_config_ml=caml_new_string("src/config.ml"),
     cst$27=caml_new_string(""),
     cst_incremental$84=caml_new_string("incremental"),
     cst_incremental$85=caml_new_string("incremental"),
     cst_on_update_disallowed=caml_new_string("on_update disallowed"),
     cst_Observer_value_exn_called_after_disallow_future_use=
      caml_new_string("Observer.value_exn called after disallow_future_use"),
     cst_Observer_value_exn_called_without_stabilizing=
      caml_new_string("Observer.value_exn called without stabilizing"),
     cst_attempt_to_get_value_of_an_invalid_node$0=
      caml_new_string("attempt to get value of an invalid node"),
     cst_incremental$86=caml_new_string("incremental"),
     cst_src_internal_observer_ml=caml_new_string("src/internal_observer.ml"),
     cst$28=caml_new_string(""),
     cst_incremental$87=caml_new_string("incremental"),
     cst_next_in_observing=caml_new_string("next_in_observing"),
     cst_prev_in_observing=caml_new_string("prev_in_observing"),
     cst_next_in_all=caml_new_string("next_in_all"),
     cst_prev_in_all=caml_new_string("prev_in_all"),
     cst_on_update_handlers=caml_new_string("on_update_handlers"),
     cst_observing=caml_new_string("observing"),
     cst_incremental$88=caml_new_string("incremental"),
     cst_incremental$89=caml_new_string("incremental"),
     cst_src_observer_ml=caml_new_string("src/observer.ml"),
     cst$29=caml_new_string(""),
     cst_incremental$90=caml_new_string("incremental"),
     cst_incremental$91=caml_new_string("incremental"),
     cst_incremental$92=caml_new_string("incremental"),
     cst_src_raised_exn_ml=caml_new_string("src/raised_exn.ml"),
     cst$30=caml_new_string(""),
     cst_incremental$93=caml_new_string("incremental"),
     cst_incremental$94=caml_new_string("incremental"),
     cst_Trying_to_make_a_node_necessary_whose_defining_bind_is_not_necessary=
      caml_new_string
       ("Trying to make a node necessary whose defining bind is not necessary"),
     cst_on_children_nodes=caml_new_string(" on children nodes"),
     cst_can_only_call$1=caml_new_string("can only call "),
     cst_on_parent_nodes=caml_new_string(" on parent nodes"),
     cst_can_only_call$0=caml_new_string("can only call "),
     cst_during_stabilization=caml_new_string(" during stabilization"),
     cst_can_only_call=caml_new_string("can only call "),
     cst_unexpected_kind_for_expert_node=
      caml_new_string("unexpected kind for expert node"),
     cst_advance_clock=caml_new_string("advance_clock"),
     cst_cannot_take_snapshot_in_the_past=
      caml_new_string("cannot take snapshot in the past"),
     cst_at_intervals_got_too_small_interval=
      caml_new_string("at_intervals got too small interval"),
     cst_unordered_array_fold_got_non_positive_full_compute_every_n_changes=
      caml_new_string
       ("unordered_array_fold got non-positive full_compute_every_n_changes"),
     cst_stabilize=caml_new_string("stabilize"),
     cst_cannot_set_var_stabilization_previously_raised=
      caml_new_string("cannot set var -- stabilization previously raised"),
     cst_Observer_value_exn_called_during_stabilization=
      caml_new_string("Observer.value_exn called during stabilization"),
     cst_Observer_value_exn_called_after_stabilize_previously_raised=
      caml_new_string
       ("Observer.value_exn called after stabilize previously raised"),
     cst_attempt_to_run_within_an_invalid_scope=
      caml_new_string("attempt to run within an invalid scope"),
     cst_set_max_height_allowed=caml_new_string("set_max_height_allowed"),
     cst_member_of_all_observers_with_unexpected_state=
      caml_new_string("member of all_observers with unexpected state"),
     cst_cannot_call_am_stabilizing_stabilize_previously_raised=
      caml_new_string
       ("cannot call am_stabilizing -- stabilize previously raised"),
     cst_max_num_parents=caml_new_string("max_num_parents"),
     cst_percentage_of_nodes_by_num_parents=
      caml_new_string("percentage_of_nodes_by_num_parents"),
     cst_percentage_of_nodes_by_num_parents$0=
      caml_new_string("percentage_of_nodes_by_num_parents"),
     cst_max_num_parents$0=caml_new_string("max_num_parents"),
     cst_incremental$95=caml_new_string("incremental"),
     cst_src_state_ml=caml_new_string("src/state.ml"),
     cst$31=caml_new_string(""),
     cst_incremental$96=caml_new_string("incremental"),
     names=
      [0,
       caml_new_string("currently_running_node"),
       [0,caml_new_string("expert_nodes_created_by_current_node"),0]],
     cst_expert_nodes_created_by_current_node=
      caml_new_string("expert_nodes_created_by_current_node"),
     cst_currently_running_node=caml_new_string("currently_running_node"),
     names$0=
      caml_list_of_js_array
       ([caml_new_string("status"),
         caml_new_string("bind_lhs_change_should_invalidate_rhs"),
         caml_new_string("stabilization_num"),
         caml_new_string("current_scope"),
         caml_new_string("recompute_heap"),
         caml_new_string("adjust_heights_heap"),
         caml_new_string("propagate_invalidity"),
         caml_new_string("num_active_observers"),
         caml_new_string("all_observers"),
         caml_new_string("finalized_observers"),
         caml_new_string("new_observers"),
         caml_new_string("disallowed_observers"),
         caml_new_string("set_during_stabilization"),
         caml_new_string("handle_after_stabilization"),
         caml_new_string("run_on_update_handlers"),
         caml_new_string("only_in_debug"),
         caml_new_string("weak_hashtbls"),
         caml_new_string("num_nodes_became_necessary"),
         caml_new_string("num_nodes_became_unnecessary"),
         caml_new_string("num_nodes_changed"),
         caml_new_string("num_nodes_created"),
         caml_new_string("num_nodes_invalidated"),
         caml_new_string("num_nodes_recomputed"),
         caml_new_string("num_nodes_recomputed_directly_because_one_child"),
         caml_new_string("num_nodes_recomputed_directly_because_min_height"),
         caml_new_string("num_var_sets")]),
     cst_num_var_sets=caml_new_string("num_var_sets"),
     cst_num_nodes_recomputed_directly_because_min_height=
      caml_new_string("num_nodes_recomputed_directly_because_min_height"),
     cst_num_nodes_recomputed_directly_because_one_child=
      caml_new_string("num_nodes_recomputed_directly_because_one_child"),
     cst_num_nodes_recomputed=caml_new_string("num_nodes_recomputed"),
     cst_num_nodes_invalidated=caml_new_string("num_nodes_invalidated"),
     cst_num_nodes_created=caml_new_string("num_nodes_created"),
     cst_num_nodes_changed=caml_new_string("num_nodes_changed"),
     cst_num_nodes_became_unnecessary=
      caml_new_string("num_nodes_became_unnecessary"),
     cst_num_nodes_became_necessary=
      caml_new_string("num_nodes_became_necessary"),
     cst_weak_hashtbls=caml_new_string("weak_hashtbls"),
     cst_only_in_debug=caml_new_string("only_in_debug"),
     cst_run_on_update_handlers=caml_new_string("run_on_update_handlers"),
     cst_handle_after_stabilization=
      caml_new_string("handle_after_stabilization"),
     cst_set_during_stabilization=caml_new_string("set_during_stabilization"),
     cst_disallowed_observers=caml_new_string("disallowed_observers"),
     cst_new_observers=caml_new_string("new_observers"),
     cst_finalized_observers=caml_new_string("finalized_observers"),
     cst_all_observers=caml_new_string("all_observers"),
     cst_num_active_observers=caml_new_string("num_active_observers"),
     cst_propagate_invalidity=caml_new_string("propagate_invalidity"),
     cst_adjust_heights_heap=caml_new_string("adjust_heights_heap"),
     cst_recompute_heap=caml_new_string("recompute_heap"),
     cst_current_scope=caml_new_string("current_scope"),
     cst_stabilization_num=caml_new_string("stabilization_num"),
     cst_bind_lhs_change_should_invalidate_rhs=
      caml_new_string("bind_lhs_change_should_invalidate_rhs"),
     cst_status=caml_new_string("status"),
     names$1=
      [0,
       caml_new_string("timing_wheel"),
       [0,
        caml_new_string("now"),
        [0,
         caml_new_string("handle_fired"),
         [0,caml_new_string("fired_alarm_values"),0]]]],
     cst_fired_alarm_values=caml_new_string("fired_alarm_values"),
     cst_handle_fired=caml_new_string("handle_fired"),
     cst_now=caml_new_string("now"),
     cst_timing_wheel=caml_new_string("timing_wheel"),
     tp_loc=caml_new_string("src/state.ml.Stats.t"),
     cst_incremental$97=caml_new_string("incremental"),
     cst_incremental$98=caml_new_string("incremental"),
     cst_src_expert1_ml=caml_new_string("src/expert1.ml"),
     cst$32=caml_new_string(""),
     cst_incremental$99=caml_new_string("incremental"),
     cst_incremental$100=caml_new_string("incremental"),
     cst_incremental$101=caml_new_string("incremental"),
     cst_src_reduce_balanced_ml=caml_new_string("src/reduce_balanced.ml"),
     cst$33=caml_new_string(""),
     cst_incremental$102=caml_new_string("incremental"),
     cst_incremental$103=caml_new_string("incremental"),
     cst_incremental$104=caml_new_string("incremental"),
     cst_src_incremental_intf_ml=caml_new_string("src/incremental_intf.ml"),
     cst$34=caml_new_string(""),
     cst_incremental$105=caml_new_string("incremental"),
     cst_incremental$106=caml_new_string("incremental"),
     cst_invalid$0=caml_new_string("<invalid>"),
     cst_unnecessary=caml_new_string("<unnecessary>"),
     cst_uncomputed=caml_new_string("<uncomputed>"),
     cst_disallowed=caml_new_string("<disallowed>"),
     cst_unstabilized=caml_new_string("<unstabilized>"),
     cst_invalid=caml_new_string("<invalid>"),
     cst_Incremental_bug_Observer_on_update_exn_got_unexpected_update_Unnecessary=
      caml_new_string
       ("Incremental bug -- Observer.on_update_exn got unexpected update Unnecessary"),
     level_bits=[0,14,[0,13,[0,5,0]]],
     cst_incremental$107=caml_new_string("incremental"),
     cst_src_incremental_ml=caml_new_string("src/incremental.ml"),
     cst$35=caml_new_string(""),
     cst_incremental$108=caml_new_string("incremental"),
     cst_incremental$109=caml_new_string("incremental"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel=global_data.Core_kernel,
     include=global_data.Core_kernel__Int,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     include$0=global_data.Uopt,
     Base_Invariant=global_data.Base__Invariant,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Assert_failure=global_data.Assert_failure,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     CamlinternalMod=global_data.CamlinternalMod,
     Base_Field=global_data.Base__Field,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Timing_wheel=global_data.Timing_wheel,
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Incremental_step_function=global_data.Incremental_step_function,
     Core_kernel_Hash_set=global_data.Core_kernel__Hash_set,
     Core_kernel_List=global_data.Core_kernel__List,
     Stdio_Out_channel=global_data.Stdio__Out_channel,
     Base_Backtrace=global_data.Base__Backtrace,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Core_kernel_Stack=global_data.Core_kernel__Stack,
     Weak_hashtbl=global_data.Weak_hashtbl,
     Thread_safe_queue=global_data.Thread_safe_queue,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Core_kernel_Fn=global_data.Core_kernel__Fn,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Lazy=global_data.Core_kernel__Lazy,
     Core_kernel_Gc=global_data.Core_kernel__Gc,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Percent=global_data.Core_kernel__Percent,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Balanced_reducer=global_data.Balanced_reducer,
     Core_kernel_Tuple=global_data.Core_kernel__Tuple,
     Incremental=[0];
    caml_register_global(1150,Incremental,"Incremental__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental);
    caml_call1(Expect_test_collector[4][1],cst_src_before_or_after_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$0,cst);
    var
     _b_=[0,caml_new_string("After")],
     _a_=[0,caml_new_string("Before")],
     _l_=[0,caml_new_string("_")],
     _m_=[0,caml_new_string("src/cutoff.ml"),17,416,438],
     _f_=[0,caml_new_string("Always")],
     _g_=[0,caml_new_string("Never")],
     _h_=[0,caml_new_string("Phys_equal")],
     _i_=[0,caml_new_string("Compare")],
     _j_=[0,caml_new_string("Equal")],
     _k_=[0,caml_new_string("F")],
     _n_=[0,caml_new_string("src/node_id.ml"),5,18],
     _x_=[0,caml_new_string("src/stabilization_num.ml"),5,18],
     _H_=[0,caml_new_string("created_at")],
     _I_=[0,caml_new_string("previous_update_kind")],
     _J_=[0,caml_new_string("f")],
     _D_=[0,caml_new_string("Invalidated")],
     _E_=[0,caml_new_string("Unnecessary")],
     _F_=[0,caml_new_string("Necessary")],
     _G_=[0,caml_new_string("Changed")],
     _y_=[0,caml_new_string("Never_been_updated")],
     _z_=[0,caml_new_string("Necessary")],
     _A_=[0,caml_new_string("Changed")],
     _B_=[0,caml_new_string("Invalidated")],
     _C_=[0,caml_new_string("Unnecessary")],
     _aM_=[0,caml_new_string("_")],
     _aJ_=[0,caml_new_string("_")],
     _K_=[0,[0]],
     _L_=[0,caml_new_string("src/types.ml"),17,2],
     _M_=[0,[0,[0,[0]]]],
     _N_=[0,caml_new_string("src/types.ml"),33,2],
     _O_=[0,[0]],
     _P_=[0,caml_new_string("src/types.ml"),42,2],
     _Q_=[0,[0]],
     _R_=[0,caml_new_string("src/types.ml"),52,2],
     _S_=[0,[0]],
     _T_=[0,caml_new_string("src/types.ml"),63,2],
     _U_=[0,[0]],
     _V_=[0,caml_new_string("src/types.ml"),76,2],
     _W_=[0,[0]],
     _X_=[0,caml_new_string("src/types.ml"),86,2],
     _Y_=[0,[0]],
     _Z_=[0,caml_new_string("src/types.ml"),107,2],
     ___=[0,[0]],
     _$_=[0,caml_new_string("src/types.ml"),116,2],
     _aa_=[0,[0]],
     _ab_=[0,caml_new_string("src/types.ml"),128,2],
     _ac_=[0,[0,[0,[0]],[0,[0]]]],
     _ad_=[0,caml_new_string("src/types.ml"),155,2],
     _ae_=[0,[0]],
     _af_=[0,caml_new_string("src/types.ml"),165,2],
     _ag_=[0,[0]],
     _ah_=[0,caml_new_string("src/types.ml"),406,2],
     _ai_=[0,[0,0,[0,[0,0]],0,0,0]],
     _aj_=[0,caml_new_string("src/types.ml"),449,6],
     _ak_=[0,[0]],
     _al_=[0,caml_new_string("src/types.ml"),508,2],
     _am_=[0,[0,0]],
     _an_=[0,caml_new_string("src/types.ml"),515,6],
     _ao_=[0,[0]],
     _ap_=[0,caml_new_string("src/types.ml"),535,2],
     _aq_=[0,[0]],
     _ar_=[0,caml_new_string("src/types.ml"),549,2],
     _as_=[0,[0]],
     _at_=[0,caml_new_string("src/types.ml"),563,2],
     _au_=[0,[0]],
     _av_=[0,caml_new_string("src/types.ml"),573,2],
     _aw_=[0,[0]],
     _ax_=[0,[0,[0,[0]]]],
     _ay_=[0,[0]],
     _az_=[0,[0]],
     _aA_=[0,[0]],
     _aB_=[0,[0]],
     _aC_=[0,[0]],
     _aD_=[0,[0]],
     _aE_=[0,[0]],
     _aF_=[0,[0]],
     _aG_=[0,[0,[0,[0]],[0,[0]]]],
     _aH_=[0,[0]],
     _aI_=[0,[0]],
     _aK_=[0,[0,0,[0,[0,0]],0,0,0]],
     _aL_=[0,[0]],
     _aN_=[0,[0,0]],
     _aO_=[0,[0]],
     _aP_=[0,[0]],
     _aQ_=[0,[0]],
     _aR_=[0,[0]],
     _a8_=[0,caml_new_string("_")],
     _a9_=[0,caml_new_string("T")],
     _a6_=[0,caml_new_string("_")],
     _a5_=[0,caml_new_string("src/var.ml"),32,23],
     _a4_=[0,caml_new_string("src/var.ml"),33,18],
     _a7_=[0,caml_new_string("src/var.ml"),22,920,942],
     _a0_=[0,caml_new_string("watch")],
     _a1_=[0,caml_new_string("set_at")],
     _a2_=[0,caml_new_string("value_set_during_stabilization")],
     _a3_=[0,caml_new_string("value")],
     _bH_=[0,caml_new_string("_")],
     _bG_=[0,caml_new_string("_")],
     _bD_=[0,caml_new_string("_")],
     _bE_=[0,caml_new_string("child")],
     _bF_=[0,caml_new_string("child_index")],
     _bI_=[0,caml_new_string("unordered_array_fold")],
     _bB_=[0,caml_new_string("_")],
     _bA_=[0,caml_new_string("_")],
     _bz_=[0,caml_new_string("src/unordered_array_fold.ml"),43,40],
     _by_=[0,caml_new_string("src/unordered_array_fold.ml"),44,18],
     _bx_=[0,caml_new_string("src/unordered_array_fold.ml"),70,11],
     _bw_=[0,caml_new_string("src/unordered_array_fold.ml"),54,18],
     _bv_=[0,caml_new_string("src/unordered_array_fold.ml"),65,11],
     _bu_=[0,caml_new_string("src/unordered_array_fold.ml"),66,11],
     _bC_=[0,caml_new_string("src/unordered_array_fold.ml"),36,923,945],
     _bm_=[0,caml_new_string("num_changes_since_last_full_compute")],
     _bn_=[0,caml_new_string("fold_value")],
     _bo_=[0,caml_new_string("children")],
     _bp_=[0,caml_new_string("full_compute_every_n_changes")],
     _bq_=[0,caml_new_string("update")],
     _br_=[0,caml_new_string("f")],
     _bs_=[0,caml_new_string("init")],
     _bt_=[0,caml_new_string("main")],
     _a__=[0,caml_new_string("F_inverse")],
     _a$_=[0,caml_new_string("Update")],
     _b3_=[0,caml_new_string("_")],
     _b2_=[0,caml_new_string("src/step_function_node.ml"),30,33],
     _b1_=[0,caml_new_string("src/step_function_node.ml"),31,18],
     _bZ_=[0,caml_new_string("src/step_function_node.ml"),41,18],
     _b0_=[0,caml_new_string("src/step_function_node.ml"),40,33],
     _b4_=[0,caml_new_string("src/step_function_node.ml"),22,633,655],
     _bR_=[0,caml_new_string("clock")],
     _bS_=[0,caml_new_string("alarm_value")],
     _bT_=[0,caml_new_string("alarm")],
     _bU_=[0,caml_new_string("upcoming_steps")],
     _bV_=[0,caml_new_string("value")],
     _bW_=[0,caml_new_string("extracted_step_function_from_child_at")],
     _bX_=[0,caml_new_string("child")],
     _bY_=[0,caml_new_string("main")],
     _cb_=[0,caml_new_string("_")],
     _ca_=[0,caml_new_string("_")],
     _cc_=[0,caml_new_string("src/array_fold.ml"),13,260,282],
     _b9_=[0,caml_new_string("children")],
     _b__=[0,caml_new_string("f")],
     _b$_=[0,caml_new_string("init")],
     _cm_=[0,caml_new_string("src/at.ml"),23,22],
     _cl_=[0,caml_new_string("src/at.ml"),24,18],
     _cn_=[0,caml_new_string("src/at.ml"),15,271,293],
     _ch_=[0,caml_new_string("clock")],
     _ci_=[0,caml_new_string("alarm")],
     _cj_=[0,caml_new_string("at")],
     _ck_=[0,caml_new_string("main")],
     _cB_=[0,caml_new_string("src/at_intervals.ml"),23,32],
     _cA_=[0,caml_new_string("src/at_intervals.ml"),24,18],
     _cz_=[0,caml_new_string("src/at_intervals.ml"),26,40],
     _cC_=[0,caml_new_string("src/at_intervals.ml"),16,300,322],
     _cu_=[0,caml_new_string("clock")],
     _cv_=[0,caml_new_string("alarm")],
     _cw_=[0,caml_new_string("interval")],
     _cx_=[0,caml_new_string("base")],
     _cy_=[0,caml_new_string("main")],
     _c2_=[0,caml_new_string("_")],
     _c1_=[0,caml_new_string("_")],
     _c0_=[0,caml_new_string("src/bind.ml"),52,29],
     _cZ_=[0,caml_new_string("src/bind.ml"),53,18],
     _cY_=[0,caml_new_string("src/bind.ml"),58,11],
     _cX_=[0,caml_new_string("src/bind.ml"),61,35],
     _cW_=[0,caml_new_string("src/bind.ml"),62,18],
     _cU_=[0,caml_new_string("src/bind.ml"),67,24],
     _cV_=[0,caml_new_string("src/bind.ml"),66,26],
     _cT_=[0,caml_new_string("src/bind.ml"),71,13],
     _cS_=[0,caml_new_string("src/bind.ml"),73,18],
     _c3_=[0,caml_new_string("src/bind.ml"),45,1445,1467],
     _cL_=[0,caml_new_string("all_nodes_created_on_rhs")],
     _cM_=[0,caml_new_string("rhs_scope")],
     _cN_=[0,caml_new_string("rhs")],
     _cO_=[0,caml_new_string("lhs_change")],
     _cP_=[0,caml_new_string("lhs")],
     _cQ_=[0,caml_new_string("f")],
     _cR_=[0,caml_new_string("main")],
     _dh_=[0,caml_new_string("src/expert.ml"),142,2],
     _dg_=[0,caml_new_string("src/expert.ml"),111,2],
     _de_=[0,caml_new_string("src/expert.ml"),61,15],
     _df_=[0,caml_new_string("src/expert.ml"),53,2],
     _c9_=[0,caml_new_string("will_fire_all_callbacks")],
     _c__=[0,caml_new_string("num_invalid_children")],
     _c$_=[0,caml_new_string("force_stale")],
     _da_=[0,caml_new_string("num_children")],
     _db_=[0,caml_new_string("children")],
     _dc_=[0,caml_new_string("on_observability_change")],
     _dd_=[0,caml_new_string("f")],
     _c7_=[0,caml_new_string("_")],
     _c8_=[0,caml_new_string("E")],
     _c4_=[0,caml_new_string("index")],
     _c5_=[0,caml_new_string("on_change")],
     _c6_=[0,caml_new_string("child")],
     _dj_=[0,caml_new_string("src/scope.ml"),37,2],
     _ds_=[0,caml_new_string("_")],
     _dr_=[0,caml_new_string("src/freeze.ml"),19,11],
     _dq_=[0,caml_new_string("src/freeze.ml"),23,26],
     _dp_=[0,caml_new_string("src/freeze.ml"),24,18],
     _dt_=[0,caml_new_string("src/freeze.ml"),14,246,268],
     _dm_=[0,caml_new_string("only_freeze_when")],
     _dn_=[0,caml_new_string("child")],
     _do_=[0,caml_new_string("main")],
     _dK_=[0,caml_new_string("_")],
     _dJ_=[0,caml_new_string("src/if_then_else.ml"),26,32],
     _dI_=[0,caml_new_string("src/if_then_else.ml"),33,34],
     _dH_=[0,caml_new_string("src/if_then_else.ml"),34,18],
     _dG_=[0,caml_new_string("src/if_then_else.ml"),40,13],
     _dL_=[0,caml_new_string("src/if_then_else.ml"),19,389,411],
     _dA_=[0,caml_new_string("else_")],
     _dB_=[0,caml_new_string("then_")],
     _dC_=[0,caml_new_string("current_branch")],
     _dD_=[0,caml_new_string("test_change")],
     _dE_=[0,caml_new_string("test")],
     _dF_=[0,caml_new_string("main")],
     _dY_=[0,caml_new_string("_")],
     _dX_=[0,caml_new_string("src/join.ml"),24,29],
     _dW_=[0,caml_new_string("src/join.ml"),25,18],
     _dV_=[0,caml_new_string("src/join.ml"),31,35],
     _dU_=[0,caml_new_string("src/join.ml"),32,18],
     _dZ_=[0,caml_new_string("src/join.ml"),17,329,351],
     _dQ_=[0,caml_new_string("rhs")],
     _dR_=[0,caml_new_string("lhs_change")],
     _dS_=[0,caml_new_string("lhs")],
     _dT_=[0,caml_new_string("main")],
     _ea_=[0,caml_new_string("_")],
     _d$_=[0,caml_new_string("src/snapshot.ml"),21,11],
     _d__=[0,caml_new_string("src/snapshot.ml"),25,28],
     _d9_=[0,caml_new_string("src/snapshot.ml"),26,18],
     _eb_=[0,caml_new_string("src/snapshot.ml"),16,293,315],
     _d4_=[0,caml_new_string("clock")],
     _d5_=[0,caml_new_string("value_at")],
     _d6_=[0,caml_new_string("before")],
     _d7_=[0,caml_new_string("at")],
     _d8_=[0,caml_new_string("main")],
     _gI_=[0,caml_new_string("_")],
     _gJ_=[0,[0,caml_new_string("src/kind.ml"),606,14342,14348]],
     _gG_=[0,caml_new_string("_")],
     _gF_=[0,caml_new_string("_")],
     _gE_=[0,caml_new_string("_")],
     _gD_=[0,caml_new_string("_")],
     _gC_=[0,caml_new_string("_")],
     _gB_=[0,caml_new_string("_")],
     _gA_=[0,caml_new_string("_")],
     _gz_=[0,caml_new_string("_")],
     _gy_=[0,caml_new_string("_")],
     _gx_=[0,caml_new_string("_")],
     _gw_=[0,caml_new_string("_")],
     _gv_=[0,caml_new_string("_")],
     _gu_=[0,caml_new_string("_")],
     _gt_=[0,caml_new_string("_")],
     _gs_=[0,caml_new_string("_")],
     _gq_=[0,caml_new_string("_")],
     _gp_=[0,caml_new_string("_")],
     _go_=[0,caml_new_string("_")],
     _gn_=[0,caml_new_string("_")],
     _gm_=[0,caml_new_string("_")],
     _gl_=[0,caml_new_string("_")],
     _gk_=[0,caml_new_string("_")],
     _gj_=[0,caml_new_string("_")],
     _gi_=[0,caml_new_string("_")],
     _gh_=[0,caml_new_string("_")],
     _gg_=[0,caml_new_string("_")],
     _gf_=[0,caml_new_string("_")],
     _ge_=[0,caml_new_string("_")],
     _gd_=[0,caml_new_string("_")],
     _gb_=[0,caml_new_string("_")],
     _ga_=[0,caml_new_string("_")],
     _f$_=[0,caml_new_string("_")],
     _f__=[0,caml_new_string("_")],
     _f9_=[0,caml_new_string("_")],
     _f8_=[0,caml_new_string("_")],
     _f7_=[0,caml_new_string("_")],
     _f6_=[0,caml_new_string("_")],
     _f5_=[0,caml_new_string("_")],
     _f4_=[0,caml_new_string("_")],
     _f3_=[0,caml_new_string("_")],
     _f2_=[0,caml_new_string("_")],
     _f1_=[0,caml_new_string("_")],
     _fZ_=[0,caml_new_string("_")],
     _fY_=[0,caml_new_string("_")],
     _fX_=[0,caml_new_string("_")],
     _fW_=[0,caml_new_string("_")],
     _fV_=[0,caml_new_string("_")],
     _fU_=[0,caml_new_string("_")],
     _fT_=[0,caml_new_string("_")],
     _fS_=[0,caml_new_string("_")],
     _fR_=[0,caml_new_string("_")],
     _fQ_=[0,caml_new_string("_")],
     _fP_=[0,caml_new_string("_")],
     _fO_=[0,caml_new_string("_")],
     _fM_=[0,caml_new_string("_")],
     _fL_=[0,caml_new_string("_")],
     _fK_=[0,caml_new_string("_")],
     _fJ_=[0,caml_new_string("_")],
     _fI_=[0,caml_new_string("_")],
     _fH_=[0,caml_new_string("_")],
     _fG_=[0,caml_new_string("_")],
     _fF_=[0,caml_new_string("_")],
     _fE_=[0,caml_new_string("_")],
     _fD_=[0,caml_new_string("_")],
     _fC_=[0,caml_new_string("_")],
     _fA_=[0,caml_new_string("_")],
     _fz_=[0,caml_new_string("_")],
     _fy_=[0,caml_new_string("_")],
     _fx_=[0,caml_new_string("_")],
     _fw_=[0,caml_new_string("_")],
     _fv_=[0,caml_new_string("_")],
     _fu_=[0,caml_new_string("_")],
     _ft_=[0,caml_new_string("_")],
     _fs_=[0,caml_new_string("_")],
     _fr_=[0,caml_new_string("_")],
     _fp_=[0,caml_new_string("_")],
     _fo_=[0,caml_new_string("_")],
     _fn_=[0,caml_new_string("_")],
     _fm_=[0,caml_new_string("_")],
     _fl_=[0,caml_new_string("_")],
     _fk_=[0,caml_new_string("_")],
     _fj_=[0,caml_new_string("_")],
     _fi_=[0,caml_new_string("_")],
     _fh_=[0,caml_new_string("_")],
     _ff_=[0,caml_new_string("_")],
     _fe_=[0,caml_new_string("_")],
     _fd_=[0,caml_new_string("_")],
     _fc_=[0,caml_new_string("_")],
     _fb_=[0,caml_new_string("_")],
     _fa_=[0,caml_new_string("_")],
     _e$_=[0,caml_new_string("_")],
     _e__=[0,caml_new_string("_")],
     _e8_=[0,caml_new_string("_")],
     _e7_=[0,caml_new_string("_")],
     _e6_=[0,caml_new_string("_")],
     _e5_=[0,caml_new_string("_")],
     _e4_=[0,caml_new_string("_")],
     _e3_=[0,caml_new_string("_")],
     _e2_=[0,caml_new_string("_")],
     _e0_=[0,caml_new_string("_")],
     _eZ_=[0,caml_new_string("_")],
     _eY_=[0,caml_new_string("_")],
     _eX_=[0,caml_new_string("_")],
     _eW_=[0,caml_new_string("_")],
     _eV_=[0,caml_new_string("_")],
     _eT_=[0,caml_new_string("_")],
     _eS_=[0,caml_new_string("_")],
     _eR_=[0,caml_new_string("_")],
     _eQ_=[0,caml_new_string("_")],
     _eP_=[0,caml_new_string("_")],
     _eN_=[0,caml_new_string("_")],
     _eM_=[0,caml_new_string("_")],
     _eL_=[0,caml_new_string("_")],
     _eK_=[0,caml_new_string("_")],
     _eI_=[0,caml_new_string("_")],
     _eH_=[0,caml_new_string("_")],
     _eG_=[0,caml_new_string("_")],
     _eE_=[0,caml_new_string("_")],
     _eD_=[0,caml_new_string("_")],
     _eA_=[0,caml_new_string("_")],
     _ew_=[0,caml_new_string("_")],
     _et_=[0,caml_new_string("_")],
     _eq_=[0,caml_new_string("_")],
     _el_=[0,caml_new_string("_")],
     _ej_=[0,caml_new_string("_")],
     _ei_=[0,caml_new_string("_")],
     _ee_=[0,caml_new_string("_")],
     _ec_=[0,caml_new_string("Invalid")],
     _ed_=[0,caml_new_string("Uninitialized")],
     _ef_=[0,caml_new_string("Array_fold")],
     _eg_=[0,caml_new_string("At")],
     _eh_=[0,caml_new_string("At_intervals")],
     _ek_=[0,caml_new_string("Bind_lhs_change")],
     _em_=[0,caml_new_string("Bind_main")],
     _en_=[0,caml_new_string("Const")],
     _eo_=[0,caml_new_string("Expert")],
     _ep_=[0,caml_new_string("Freeze")],
     _er_=[0,caml_new_string("If_test_change")],
     _es_=[0,caml_new_string("If_then_else")],
     _eu_=[0,caml_new_string("Join_lhs_change")],
     _ev_=[0,caml_new_string("Join_main")],
     _ex_=[0,caml_new_string("Map")],
     _ey_=[0,caml_new_string("Snapshot")],
     _ez_=[0,caml_new_string("Step_function")],
     _eB_=[0,caml_new_string("Unordered_array_fold")],
     _eC_=[0,caml_new_string("Var")],
     _eF_=[0,caml_new_string("Map2")],
     _eJ_=[0,caml_new_string("Map3")],
     _eO_=[0,caml_new_string("Map4")],
     _eU_=[0,caml_new_string("Map5")],
     _e1_=[0,caml_new_string("Map6")],
     _e9_=[0,caml_new_string("Map7")],
     _fg_=[0,caml_new_string("Map8")],
     _fq_=[0,caml_new_string("Map9")],
     _fB_=[0,caml_new_string("Map10")],
     _fN_=[0,caml_new_string("Map11")],
     _f0_=[0,caml_new_string("Map12")],
     _gc_=[0,caml_new_string("Map13")],
     _gr_=[0,caml_new_string("Map14")],
     _gH_=[0,caml_new_string("Map15")],
     _ix_=
      [0,
       [11,
        caml_new_string("  "),
        [2,
         0,
         [11,
          caml_new_string(" -> "),
          [2,0,[11,caml_new_string(" [style=dashed]\n"),0]]]]],
       caml_new_string("  %s -> %s [style=dashed]\n")],
     _iw_=
      [0,
       [11,
        caml_new_string("  "),
        [2,0,[11,caml_new_string(" -> "),[2,0,[12,10,0]]]]],
       caml_new_string("  %s -> %s\n")],
     _iv_=
      [0,
       [11,
        caml_new_string("  "),
        [2,
         0,
         [11,
          caml_new_string(' [label="'),
          [2,
           0,
           [12,
            32,
            [2,
             0,
             [11,
              caml_new_string("\\nheight = "),
              [4,0,0,0,[11,caml_new_string('"]\n'),0]]]]]]]]],
       caml_new_string('  %s [label="%s %s\\nheight = %d"]\n')],
     _it_=
      [0,
       [11,caml_new_string("digraph G {\n"),0],
       caml_new_string("digraph G {\n")],
     _iu_=
      [0,
       [11,caml_new_string("  rankdir = BT\n"),0],
       caml_new_string("  rankdir = BT\n")],
     _iy_=[0,[11,caml_new_string("}\n"),[10,0]],caml_new_string("}\n%!")],
     _is_=[0,caml_new_string("_")],
     _ir_=[0,caml_new_string("src/node.ml"),440,12],
     _ip_=[0,caml_new_string("src/node.ml"),459,33],
     _iq_=[0,caml_new_string("src/node.ml"),452,14],
     _in_=[0,caml_new_string("_")],
     _io_=[0,[0,caml_new_string("src/node.ml"),419,17820,17827]],
     _il_=[0,caml_new_string("_")],
     _ij_=[0,caml_new_string("src/node.ml"),288,50],
     _ii_=[0,caml_new_string("src/node.ml"),304,16],
     _ih_=[0,caml_new_string("src/node.ml"),314,11],
     _ig_=[0,caml_new_string("src/node.ml"),315,11],
     _if_=[0,caml_new_string("src/node.ml"),330,16],
     _id_=[0,caml_new_string("src/node.ml"),333,34],
     _ie_=[0,caml_new_string("src/node.ml"),333,60],
     _ic_=[0,caml_new_string("src/node.ml"),336,11],
     _ib_=[0,caml_new_string("src/node.ml"),337,11],
     _ia_=[0,caml_new_string("src/node.ml"),341,16],
     _h$_=[0,caml_new_string("src/node.ml"),345,13],
     _h__=[0,caml_new_string("src/node.ml"),346,13],
     _h9_=[0,caml_new_string("src/node.ml"),350,16],
     _h8_=[0,caml_new_string("src/node.ml"),354,13],
     _h7_=[0,caml_new_string("src/node.ml"),355,13],
     _h6_=[0,caml_new_string("src/node.ml"),359,16],
     _h5_=[0,caml_new_string("src/node.ml"),363,16],
     _h4_=[0,caml_new_string("src/node.ml"),367,13],
     _h3_=[0,caml_new_string("src/node.ml"),368,13],
     _h2_=[0,caml_new_string("src/node.ml"),374,13],
     _h1_=[0,caml_new_string("src/node.ml"),377,37],
     _h0_=[0,caml_new_string("src/node.ml"),392,15],
     _hZ_=[0,caml_new_string("src/node.ml"),404,13],
     _hY_=[0,caml_new_string("src/node.ml"),279,6],
     _hX_=[0,caml_new_string("src/node.ml"),280,6],
     _hW_=[0,caml_new_string("src/node.ml"),281,6],
     _hU_=[0,caml_new_string("src/node.ml"),275,8],
     _hT_=[0,caml_new_string("src/node.ml"),276,8],
     _ik_=[0,caml_new_string("src/node.ml"),273,6],
     _hV_=[0,caml_new_string("src/node.ml"),277,6],
     _im_=[0,caml_new_string("src/node.ml"),269,11295,11317],
     _hS_=[0,caml_new_string("src/node.ml"),212,21],
     _hR_=[0,caml_new_string("src/node.ml"),123,21],
     _hq_=[0,caml_new_string("creation_backtrace")],
     _hr_=[0,caml_new_string("user_info")],
     _hs_=[0,caml_new_string("force_necessary")],
     _ht_=[0,caml_new_string("my_child_index_in_parent_at_index")],
     _hu_=[0,caml_new_string("my_parent_index_in_child_at_index")],
     _hv_=[0,caml_new_string("on_update_handlers")],
     _hw_=[0,caml_new_string("is_in_handle_after_stabilization")],
     _hx_=[0,caml_new_string("observers")],
     _hy_=[0,caml_new_string("old_value_opt")],
     _hz_=[0,caml_new_string("next_in_adjust_heights_heap")],
     _hA_=[0,caml_new_string("height_in_adjust_heights_heap")],
     _hB_=[0,caml_new_string("next_in_recompute_heap")],
     _hC_=[0,caml_new_string("prev_in_recompute_heap")],
     _hD_=[0,caml_new_string("height_in_recompute_heap")],
     _hE_=[0,caml_new_string("height")],
     _hF_=[0,caml_new_string("next_node_in_same_scope")],
     _hG_=[0,caml_new_string("created_in")],
     _hH_=[0,caml_new_string("parent0")],
     _hI_=[0,caml_new_string("parent1_and_beyond")],
     _hJ_=[0,caml_new_string("num_parents")],
     _hK_=[0,caml_new_string("num_on_update_handlers")],
     _hL_=[0,caml_new_string("changed_at")],
     _hM_=[0,caml_new_string("cutoff")],
     _hN_=[0,caml_new_string("kind")],
     _hO_=[0,caml_new_string("value_opt")],
     _hP_=[0,caml_new_string("recomputed_at")],
     _hQ_=[0,caml_new_string("id")],
     _iM_=[0,caml_new_string("src/recompute_heap.ml"),41,11],
     _iL_=[0,caml_new_string("src/recompute_heap.ml"),42,11],
     _iK_=[0,caml_new_string("src/recompute_heap.ml"),44,13],
     _iJ_=[0,caml_new_string("src/recompute_heap.ml"),50,15],
     _iI_=[0,caml_new_string("src/recompute_heap.ml"),51,15],
     _iN_=[0,caml_new_string("src/recompute_heap.ml"),30,823,845],
     _iF_=[0,caml_new_string("nodes_by_height")],
     _iG_=[0,caml_new_string("height_lower_bound")],
     _iH_=[0,caml_new_string("length")],
     _jg_=[0,caml_new_string("_")],
     _je_=[0,caml_new_string("_")],
     _jf_=[0,caml_new_string("child")],
     _jh_=[0,caml_new_string("parent")],
     _ji_=[0,[0,caml_new_string("src/adjust_heights_heap.ml"),141,4857,4861]],
     _jb_=[0,caml_new_string("Height")],
     _jc_=[0,caml_new_string("Max")],
     _jd_=[0,[0,caml_new_string("src/adjust_heights_heap.ml"),129,4436,4442]],
     _i$_=[0,caml_new_string("max_height_seen")],
     _ja_=[0,[0,caml_new_string("src/adjust_heights_heap.ml"),83,2643,2647]],
     _i9_=[0,caml_new_string("src/adjust_heights_heap.ml"),57,11],
     _i8_=[0,caml_new_string("src/adjust_heights_heap.ml"),60,11],
     _i7_=[0,caml_new_string("src/adjust_heights_heap.ml"),61,11],
     _i6_=[0,caml_new_string("src/adjust_heights_heap.ml"),63,13],
     _i5_=[0,caml_new_string("src/adjust_heights_heap.ml"),67,11],
     _i4_=[0,caml_new_string("src/adjust_heights_heap.ml"),68,11],
     _i__=[0,caml_new_string("src/adjust_heights_heap.ml"),52,1560,1582],
     _i0_=[0,caml_new_string("nodes_by_height")],
     _i1_=[0,caml_new_string("max_height_seen")],
     _i2_=[0,caml_new_string("height_lower_bound")],
     _i3_=[0,caml_new_string("length")],
     _iQ_=[0,caml_new_string("src/adjust_heights_heap.ml"),23,10],
     _iP_=[0,caml_new_string("src/adjust_heights_heap.ml"),24,10],
     _iO_=[0,caml_new_string("src/adjust_heights_heap.ml"),27,12],
     _iR_=[0,caml_new_string("src/adjust_heights_heap.ml"),19,521,545],
     _jt_=[0,caml_new_string("src/alarm_value.ml"),30,827,849],
     _jr_=[0,caml_new_string("next_fired")],
     _js_=[0,caml_new_string("action")],
     _jn_=[0,caml_new_string("_")],
     _jl_=[0,caml_new_string("_")],
     _jj_=[0,caml_new_string("At")],
     _jk_=[0,caml_new_string("At_intervals")],
     _jm_=[0,caml_new_string("Snapshot")],
     _jo_=[0,caml_new_string("Step_function")],
     _ka_=[0,caml_new_string("_")],
     _j9_=[0,caml_new_string("_")],
     _j__=[0,[0,caml_new_string("src/internal_observer.ml"),134,4338,4367]],
     _j$_=[0,caml_new_string("src/internal_observer.ml"),138,32],
     _j3_=[0,caml_new_string("_")],
     _j5_=[0,caml_new_string("_")],
     _j7_=[0,caml_new_string("_")],
     _j8_=[0,[0,caml_new_string("src/internal_observer.ml"),124,4001,4005]],
     _j6_=[0,[0,caml_new_string("src/internal_observer.ml"),122,3892,3896]],
     _j4_=[0,[0,caml_new_string("src/internal_observer.ml"),128,4166,4175]],
     _j1_=[0,caml_new_string("_")],
     _j0_=[0,caml_new_string("src/internal_observer.ml"),68,25],
     _jZ_=[0,caml_new_string("src/internal_observer.ml"),73,36],
     _jY_=[0,caml_new_string("src/internal_observer.ml"),76,13],
     _jX_=[0,caml_new_string("src/internal_observer.ml"),85,36],
     _jW_=[0,caml_new_string("src/internal_observer.ml"),88,13],
     _jV_=[0,caml_new_string("src/internal_observer.ml"),97,36],
     _jU_=[0,caml_new_string("src/internal_observer.ml"),100,13],
     _jT_=[0,caml_new_string("src/internal_observer.ml"),109,36],
     _jS_=[0,caml_new_string("src/internal_observer.ml"),112,13],
     _j2_=[0,caml_new_string("src/internal_observer.ml"),59,1656,1678],
     _jL_=[0,caml_new_string("next_in_observing")],
     _jM_=[0,caml_new_string("prev_in_observing")],
     _jN_=[0,caml_new_string("next_in_all")],
     _jO_=[0,caml_new_string("prev_in_all")],
     _jP_=[0,caml_new_string("on_update_handlers")],
     _jQ_=[0,caml_new_string("observing")],
     _jR_=[0,caml_new_string("state")],
     _jv_=[0,caml_new_string("Created")],
     _jw_=[0,caml_new_string("In_use")],
     _jx_=[0,caml_new_string("Disallowed")],
     _jy_=[0,caml_new_string("Unlinked")],
     _ju_=[0,caml_new_string("_")],
     _kc_=[0,caml_new_string("backtrace")],
     _kd_=[0,caml_new_string("exn")],
     _mm_=[0,caml_new_string("_")],
     _mn_=[0,[0,caml_new_string("src/state.ml"),558,25573,25577]],
     _mp_=[0,caml_new_string("src/state.ml"),756,4],
     _mq_=[0,caml_new_string("src/state.ml"),806,21],
     _ms_=[0,caml_new_string("src/state.ml"),1071,29],
     _mt_=[0,caml_new_string("src/state.ml"),1073,20],
     _mu_=[0,caml_new_string("src/state.ml"),1074,30],
     _mr_=[0,caml_new_string("src/state.ml"),1075,54],
     _mN_=[0,caml_new_string("src/state.ml"),2004,6],
     _mL_=[0,caml_new_string("_")],
     _mJ_=[0,caml_new_string("_")],
     _mK_=[0,caml_new_string("current.kind")],
     _mM_=[0,caml_new_string("node.kind")],
     _mH_=[0,caml_new_string("_")],
     _mF_=[0,caml_new_string("_")],
     _mG_=[0,caml_new_string("current.kind")],
     _mI_=[0,caml_new_string("node.kind")],
     _mE_=[0,caml_new_string("_")],
     _mD_=[5,1],
     _mC_=[0,[0,caml_new_string("src/state.ml"),1731,67023,67027]],
     _mB_=[0,0],
     _mA_=[0,[0,caml_new_string("src/state.ml"),1602,63560,63564]],
     _mz_=[0,[0,caml_new_string("src/state.ml"),1304,53388,53392]],
     _mw_=[0,caml_new_string("_")],
     _mx_=[0,[0,caml_new_string("src/state.ml"),1266,52127,52131]],
     _my_=[0,[0,caml_new_string("src/state.ml"),1261,51978,51982]],
     _mv_=[0,caml_new_string("src/state.ml"),1226,29],
     _mo_=[0,[0,caml_new_string("src/state.ml"),632,28469,28476]],
     _mf_=
      [0,
       [11,
        caml_new_string("cannot "),
        [2,0,[11,caml_new_string(" during stabilization"),0]]],
       caml_new_string("cannot %s during stabilization")],
     _mg_=[0,[0,caml_new_string("src/state.ml"),338,14984,14988]],
     _mh_=
      [0,
       [11,
        caml_new_string("cannot "),
        [2,0,[11,caml_new_string(" during on-update handlers"),0]]],
       caml_new_string("cannot %s during on-update handlers")],
     _mi_=[0,[0,caml_new_string("src/state.ml"),326,14558,14564]],
     _mj_=
      [0,
       [11,
        caml_new_string("cannot "),
        [2,0,[11,caml_new_string(" -- stabilize previously raised"),0]]],
       caml_new_string("cannot %s -- stabilize previously raised")],
     _mk_=[0,[0,caml_new_string("src/state.ml"),332,14772,14776]],
     _mc_=[0,caml_new_string("src/state.ml"),258,39],
     _mb_=[0,caml_new_string("src/state.ml"),262,13],
     _ma_=[0,caml_new_string("src/state.ml"),266,13],
     _l$_=[0,caml_new_string("src/state.ml"),268,46],
     _l__=[0,caml_new_string("src/state.ml"),283,41],
     _l9_=[0,caml_new_string("src/state.ml"),291,49],
     _l6_=[0,caml_new_string("src/state.ml"),301,20],
     _l7_=[0,caml_new_string("src/state.ml"),297,15],
     _l8_=[0,caml_new_string("src/state.ml"),295,48],
     _l5_=[0,caml_new_string("src/state.ml"),247,39],
     _l4_=[0,caml_new_string("src/state.ml"),248,8],
     _l2_=[0,caml_new_string("_")],
     _l3_=[0,[0,caml_new_string("src/state.ml"),240,10516,10527]],
     _md_=[0,caml_new_string("src/state.ml"),250,6],
     _me_=[0,caml_new_string("src/state.ml"),234,10238,10262],
     _l1_=[0,[0,caml_new_string("src/state.ml"),224,9960,9964]],
     _lZ_=[0,caml_new_string("percentage_of_nodes_by_num_parents")],
     _l0_=[0,caml_new_string("max_num_parents")],
     _lX_=[0,caml_new_string("src/state.ml"),153,13],
     _lW_=[0,caml_new_string("src/state.ml"),156,44],
     _lY_=[0,caml_new_string("src/state.ml"),148,7334,7358],
     _lS_=[0,caml_new_string("fired_alarm_values")],
     _lT_=[0,caml_new_string("handle_fired")],
     _lU_=[0,caml_new_string("now")],
     _lV_=[0,caml_new_string("timing_wheel")],
     _lk_=[0,caml_new_string("num_var_sets")],
     _ll_=
      [0,caml_new_string("num_nodes_recomputed_directly_because_min_height")],
     _lm_=
      [0,caml_new_string("num_nodes_recomputed_directly_because_one_child")],
     _ln_=[0,caml_new_string("num_nodes_recomputed")],
     _lo_=[0,caml_new_string("num_nodes_invalidated")],
     _lp_=[0,caml_new_string("num_nodes_created")],
     _lq_=[0,caml_new_string("num_nodes_changed")],
     _lr_=[0,caml_new_string("num_nodes_became_unnecessary")],
     _ls_=[0,caml_new_string("num_nodes_became_necessary")],
     _lt_=[0,caml_new_string("weak_hashtbls")],
     _lu_=[0,caml_new_string("only_in_debug")],
     _lv_=[0,caml_new_string("run_on_update_handlers")],
     _lw_=[0,caml_new_string("handle_after_stabilization")],
     _lx_=[0,caml_new_string("set_during_stabilization")],
     _ly_=[0,caml_new_string("disallowed_observers")],
     _lz_=[0,caml_new_string("new_observers")],
     _lA_=[0,caml_new_string("finalized_observers")],
     _lB_=[0,caml_new_string("all_observers")],
     _lC_=[0,caml_new_string("num_active_observers")],
     _lD_=[0,caml_new_string("propagate_invalidity")],
     _lE_=[0,caml_new_string("adjust_heights_heap")],
     _lF_=[0,caml_new_string("recompute_heap")],
     _lG_=[0,caml_new_string("current_scope")],
     _lH_=[0,caml_new_string("stabilization_num")],
     _lI_=[0,caml_new_string("bind_lhs_change_should_invalidate_rhs")],
     _lJ_=[0,caml_new_string("status")],
     _ku_=[0,caml_new_string("_")],
     _kt_=[0,caml_new_string("_")],
     _kv_=[0,caml_new_string("T")],
     _ks_=[0,caml_new_string("src/state.ml"),37,1080,1104],
     _kq_=[0,caml_new_string("expert_nodes_created_by_current_node")],
     _kr_=[0,caml_new_string("currently_running_node")],
     _kl_=[0,caml_new_string("src/state.ml"),24,670,694],
     _kj_=[0,caml_new_string("_")],
     _ki_=[0,caml_new_string("_")],
     _kk_=[0,caml_new_string("T")],
     _ke_=[0,caml_new_string("Stabilizing")],
     _kf_=[0,caml_new_string("Running_on_update_handlers")],
     _kg_=[0,caml_new_string("Not_stabilizing")],
     _kh_=[0,caml_new_string("Stabilize_previously_raised")],
     _mR_=[0,caml_new_string("_")],
     _mS_=[0,[0,caml_new_string("src/incremental.ml"),162,5126,5136]],
     _mO_=[0,caml_new_string("Invalidated")],
     _mP_=[0,caml_new_string("Initialized")],
     _mQ_=[0,caml_new_string("Changed")],
     _mT_=[0,1];
    function sexp_of_t(param){return 0 === param?_a_:_b_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Before_or_after=[0,sexp_of_t];
    caml_register_global
     (1154,Incremental_Before_or_after,"Incremental__Before_or_after");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$2);
    caml_call1(Expect_test_collector[4][1],cst_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$3,cst$0);
    var
     _c_=include[118],
     symbol=_c_[1],
     symbol$0=_c_[2],
     symbol$1=_c_[3],
     symbol$2=_c_[4],
     symbol$3=_c_[5],
     symbol$4=_c_[6],
     min=_c_[9],
     max=_c_[10],
     concat=Core_kernel_String[24],
     _d_=_c_[7],
     _e_=_c_[8],
     debug=0;
    function tag(v0,v1,sexp_of_a)
     {var v0$0=caml_call1(Core_kernel[447],v0),v1$0=caml_call1(sexp_of_a,v1);
      return [1,[0,v0$0,[0,v1$0,0]]]}
    var
     Span=Core_kernel_Time_ns[1],
     Ofday=Core_kernel_Time_ns[2],
     hash_fold_t=Core_kernel_Time_ns[3],
     hash=Core_kernel_Time_ns[4],
     typerep_of_t=Core_kernel_Time_ns[5],
     typename_of_t=Core_kernel_Time_ns[6],
     bin_size_t=Core_kernel_Time_ns[7],
     bin_write_t=Core_kernel_Time_ns[8],
     bin_read_t=Core_kernel_Time_ns[9],
     bin_read_t$0=Core_kernel_Time_ns[10],
     bin_shape_t=Core_kernel_Time_ns[11],
     bin_writer_t=Core_kernel_Time_ns[12],
     bin_reader_t=Core_kernel_Time_ns[13],
     bin_t=Core_kernel_Time_ns[14],
     symbol$5=Core_kernel_Time_ns[15],
     symbol$6=Core_kernel_Time_ns[16],
     symbol$7=Core_kernel_Time_ns[17],
     symbol$8=Core_kernel_Time_ns[18],
     symbol$9=Core_kernel_Time_ns[19],
     symbol$10=Core_kernel_Time_ns[20],
     equal=Core_kernel_Time_ns[21],
     compare=Core_kernel_Time_ns[22],
     min$0=Core_kernel_Time_ns[23],
     max$0=Core_kernel_Time_ns[24],
     Alternate_sexp=Core_kernel_Time_ns[25],
     quickcheck_generator=Core_kernel_Time_ns[26],
     quickcheck_observer=Core_kernel_Time_ns[27],
     quickcheck_shrinker=Core_kernel_Time_ns[28],
     gen_incl=Core_kernel_Time_ns[29],
     gen_uniform_incl=Core_kernel_Time_ns[30],
     is_earlier=Core_kernel_Time_ns[31],
     is_later=Core_kernel_Time_ns[32],
     of_date_ofday=Core_kernel_Time_ns[33],
     of_date_ofday_precise=Core_kernel_Time_ns[34],
     to_date_ofday=Core_kernel_Time_ns[35],
     to_date_ofday_precise=Core_kernel_Time_ns[36],
     to_date=Core_kernel_Time_ns[37],
     to_ofday=Core_kernel_Time_ns[38],
     reset_date_cache=Core_kernel_Time_ns[39],
     convert=Core_kernel_Time_ns[40],
     utc_offset=Core_kernel_Time_ns[41],
     of_string=Core_kernel_Time_ns[42],
     to_string=Core_kernel_Time_ns[43],
     to_filename_string=Core_kernel_Time_ns[44],
     of_filename_string=Core_kernel_Time_ns[45],
     to_string_abs=Core_kernel_Time_ns[46],
     to_string_abs_trimmed=Core_kernel_Time_ns[47],
     to_string_abs_parts=Core_kernel_Time_ns[48],
     to_string_trimmed=Core_kernel_Time_ns[49],
     to_sec_string=Core_kernel_Time_ns[50],
     of_localized_string=Core_kernel_Time_ns[51],
     of_string_gen=Core_kernel_Time_ns[52],
     to_string_iso8601_basic=Core_kernel_Time_ns[53],
     occurrence=Core_kernel_Time_ns[54],
     epoch=Core_kernel_Time_ns[55],
     min_value_representable=Core_kernel_Time_ns[56],
     max_value_representable=Core_kernel_Time_ns[57],
     min_value_for_1us_rounding=Core_kernel_Time_ns[58],
     max_value_for_1us_rounding=Core_kernel_Time_ns[59],
     min_value=Core_kernel_Time_ns[60],
     max_value=Core_kernel_Time_ns[61],
     now=Core_kernel_Time_ns[62],
     add=Core_kernel_Time_ns[63],
     add_saturating=Core_kernel_Time_ns[64],
     sub_saturating=Core_kernel_Time_ns[65],
     sub=Core_kernel_Time_ns[66],
     next=Core_kernel_Time_ns[67],
     prev=Core_kernel_Time_ns[68],
     diff=Core_kernel_Time_ns[69],
     abs_diff=Core_kernel_Time_ns[70],
     to_span_since_epoch=Core_kernel_Time_ns[71],
     of_span_since_epoch=Core_kernel_Time_ns[72],
     to_int63_ns_since_epoch=Core_kernel_Time_ns[73],
     of_int63_ns_since_epoch=Core_kernel_Time_ns[74],
     to_int_ns_since_epoch=Core_kernel_Time_ns[75],
     of_int_ns_since_epoch=Core_kernel_Time_ns[76],
     next_multiple=Core_kernel_Time_ns[77],
     prev_multiple=Core_kernel_Time_ns[78],
     random=Core_kernel_Time_ns[79],
     of_time=Core_kernel_Time_ns[80],
     to_time=Core_kernel_Time_ns[81],
     to_time_float_round_nearest=Core_kernel_Time_ns[82],
     to_time_float_round_nearest_microsecond=Core_kernel_Time_ns[83],
     of_time_float_round_nearest=Core_kernel_Time_ns[84],
     of_time_float_round_nearest_microsecond=Core_kernel_Time_ns[85],
     Utc=Core_kernel_Time_ns[86],
     Stable=Core_kernel_Time_ns[87],
     sexp_of_t$0=Core_kernel_Time_ns[25][2],
     Time_ns=
      [0,
       Span,
       Ofday,
       hash_fold_t,
       hash,
       typerep_of_t,
       typename_of_t,
       bin_size_t,
       bin_write_t,
       bin_read_t,
       bin_read_t$0,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal,
       compare,
       min$0,
       max$0,
       Alternate_sexp,
       quickcheck_generator,
       quickcheck_observer,
       quickcheck_shrinker,
       gen_incl,
       gen_uniform_incl,
       is_earlier,
       is_later,
       of_date_ofday,
       of_date_ofday_precise,
       to_date_ofday,
       to_date_ofday_precise,
       to_date,
       to_ofday,
       reset_date_cache,
       convert,
       utc_offset,
       of_string,
       to_string,
       to_filename_string,
       of_filename_string,
       to_string_abs,
       to_string_abs_trimmed,
       to_string_abs_parts,
       to_string_trimmed,
       to_sec_string,
       of_localized_string,
       of_string_gen,
       to_string_iso8601_basic,
       occurrence,
       epoch,
       min_value_representable,
       max_value_representable,
       min_value_for_1us_rounding,
       max_value_for_1us_rounding,
       min_value,
       max_value,
       now,
       add,
       add_saturating,
       sub_saturating,
       sub,
       next,
       prev,
       diff,
       abs_diff,
       to_span_since_epoch,
       of_span_since_epoch,
       to_int63_ns_since_epoch,
       of_int63_ns_since_epoch,
       to_int_ns_since_epoch,
       of_int_ns_since_epoch,
       next_multiple,
       prev_multiple,
       random,
       of_time,
       to_time,
       to_time_float_round_nearest,
       to_time_float_round_nearest_microsecond,
       of_time_float_round_nearest,
       of_time_float_round_nearest_microsecond,
       Utc,
       Stable,
       sexp_of_t$0],
     bin_shape_t$0=Core_kernel_Array[1],
     bin_size_t$0=Core_kernel_Array[2],
     bin_write_t$0=Core_kernel_Array[3],
     bin_read_t$1=Core_kernel_Array[4],
     bin_read_t$2=Core_kernel_Array[5],
     bin_writer_t$0=Core_kernel_Array[6],
     bin_reader_t$0=Core_kernel_Array[7],
     bin_t$0=Core_kernel_Array[8],
     typerep_of_t$0=Core_kernel_Array[9],
     typename_of_t$0=Core_kernel_Array[10],
     compare$0=Core_kernel_Array[11],
     t_of_sexp=Core_kernel_Array[12],
     sexp_of_t$1=Core_kernel_Array[13],
     binary_search=Core_kernel_Array[14],
     binary_search_segmented=Core_kernel_Array[15],
     mem=Core_kernel_Array[16],
     length=Core_kernel_Array[17],
     is_empty=Core_kernel_Array[18],
     iter=Core_kernel_Array[19],
     fold=Core_kernel_Array[20],
     fold_result=Core_kernel_Array[21],
     fold_until=Core_kernel_Array[22],
     exists=Core_kernel_Array[23],
     for_all=Core_kernel_Array[24],
     count=Core_kernel_Array[25],
     sum=Core_kernel_Array[26],
     find=Core_kernel_Array[27],
     find_map=Core_kernel_Array[28],
     to_list=Core_kernel_Array[29],
     to_array=Core_kernel_Array[30],
     min_elt=Core_kernel_Array[31],
     max_elt=Core_kernel_Array[32],
     invariant=Core_kernel_Array[33],
     max_length=Core_kernel_Array[34],
     create=Core_kernel_Array[35],
     init=Core_kernel_Array[36],
     make_matrix=Core_kernel_Array[37],
     append=Core_kernel_Array[38],
     concat$0=Core_kernel_Array[39],
     copy=Core_kernel_Array[40],
     fill=Core_kernel_Array[41],
     blit=Core_kernel_Array[42],
     blito=Core_kernel_Array[43],
     unsafe_blit=Core_kernel_Array[44],
     sub$0=Core_kernel_Array[45],
     subo=Core_kernel_Array[46],
     of_list=Core_kernel_Array[47],
     map=Core_kernel_Array[48],
     folding_map=Core_kernel_Array[49],
     folding_mapi=Core_kernel_Array[50],
     fold_map=Core_kernel_Array[51],
     fold_mapi=Core_kernel_Array[52],
     iteri=Core_kernel_Array[53],
     mapi=Core_kernel_Array[54],
     foldi=Core_kernel_Array[55],
     fold_right=Core_kernel_Array[56],
     sort=Core_kernel_Array[57],
     stable_sort=Core_kernel_Array[58],
     is_sorted=Core_kernel_Array[59],
     is_sorted_strictly=Core_kernel_Array[60],
     concat_map=Core_kernel_Array[61],
     concat_mapi=Core_kernel_Array[62],
     partition_tf=Core_kernel_Array[63],
     partitioni_tf=Core_kernel_Array[64],
     cartesian_product=Core_kernel_Array[65],
     transpose=Core_kernel_Array[66],
     transpose_exn=Core_kernel_Array[67],
     filter_opt=Core_kernel_Array[68],
     filter_map=Core_kernel_Array[69],
     filter_mapi=Core_kernel_Array[70],
     for_alli=Core_kernel_Array[71],
     existsi=Core_kernel_Array[72],
     counti=Core_kernel_Array[73],
     iter2_exn=Core_kernel_Array[74],
     map2_exn=Core_kernel_Array[75],
     fold2_exn=Core_kernel_Array[76],
     for_all2_exn=Core_kernel_Array[77],
     exists2_exn=Core_kernel_Array[78],
     filter=Core_kernel_Array[79],
     filteri=Core_kernel_Array[80],
     swap=Core_kernel_Array[81],
     rev_inplace=Core_kernel_Array[82],
     of_list_rev=Core_kernel_Array[83],
     of_list_map=Core_kernel_Array[84],
     of_list_mapi=Core_kernel_Array[85],
     of_list_rev_map=Core_kernel_Array[86],
     of_list_rev_mapi=Core_kernel_Array[87],
     map_inplace=Core_kernel_Array[88],
     find_exn=Core_kernel_Array[89],
     find_map_exn=Core_kernel_Array[90],
     findi=Core_kernel_Array[91],
     findi_exn=Core_kernel_Array[92],
     find_mapi=Core_kernel_Array[93],
     find_mapi_exn=Core_kernel_Array[94],
     find_consecutive_duplicate=Core_kernel_Array[95],
     reduce=Core_kernel_Array[96],
     reduce_exn=Core_kernel_Array[97],
     permute=Core_kernel_Array[98],
     random_element=Core_kernel_Array[99],
     random_element_exn=Core_kernel_Array[100],
     zip=Core_kernel_Array[101],
     zip_exn=Core_kernel_Array[102],
     unzip=Core_kernel_Array[103],
     sorted_copy=Core_kernel_Array[104],
     last=Core_kernel_Array[105],
     equal$0=Core_kernel_Array[106],
     unsafe_truncate=Core_kernel_Array[107],
     to_sequence=Core_kernel_Array[108],
     to_sequence_mutable=Core_kernel_Array[109],
     Int=Core_kernel_Array[110],
     Float=Core_kernel_Array[111],
     normalize=Core_kernel_Array[112],
     slice=Core_kernel_Array[113],
     nget=Core_kernel_Array[114],
     nset=Core_kernel_Array[115],
     Permissioned=Core_kernel_Array[116];
    function realloc(t,len,a)
     {var new_t=caml_call2(create,len,a),_F__=caml_call1(length,t);
      caml_call5(Core_kernel_Array[42],t,0,new_t,0,_F__);
      return new_t}
    var
     Array=
      [0,
       bin_shape_t$0,
       bin_size_t$0,
       bin_write_t$0,
       bin_read_t$1,
       bin_read_t$2,
       bin_writer_t$0,
       bin_reader_t$0,
       bin_t$0,
       typerep_of_t$0,
       typename_of_t$0,
       compare$0,
       t_of_sexp,
       sexp_of_t$1,
       binary_search,
       binary_search_segmented,
       mem,
       length,
       is_empty,
       iter,
       fold,
       fold_result,
       fold_until,
       exists,
       for_all,
       count,
       sum,
       find,
       find_map,
       to_list,
       to_array,
       min_elt,
       max_elt,
       invariant,
       max_length,
       create,
       init,
       make_matrix,
       append,
       concat$0,
       copy,
       fill,
       blit,
       blito,
       unsafe_blit,
       sub$0,
       subo,
       of_list,
       map,
       folding_map,
       folding_mapi,
       fold_map,
       fold_mapi,
       iteri,
       mapi,
       foldi,
       fold_right,
       sort,
       stable_sort,
       is_sorted,
       is_sorted_strictly,
       concat_map,
       concat_mapi,
       partition_tf,
       partitioni_tf,
       cartesian_product,
       transpose,
       transpose_exn,
       filter_opt,
       filter_map,
       filter_mapi,
       for_alli,
       existsi,
       counti,
       iter2_exn,
       map2_exn,
       fold2_exn,
       for_all2_exn,
       exists2_exn,
       filter,
       filteri,
       swap,
       rev_inplace,
       of_list_rev,
       of_list_map,
       of_list_mapi,
       of_list_rev_map,
       of_list_rev_mapi,
       map_inplace,
       find_exn,
       find_map_exn,
       findi,
       findi_exn,
       find_mapi,
       find_mapi_exn,
       find_consecutive_duplicate,
       reduce,
       reduce_exn,
       permute,
       random_element,
       random_element_exn,
       zip,
       zip_exn,
       unzip,
       sorted_copy,
       last,
       equal$0,
       unsafe_truncate,
       to_sequence,
       to_sequence_mutable,
       Int,
       Float,
       normalize,
       slice,
       nget,
       nset,
       Permissioned,
       realloc],
     Uopt=
      [0,
       include$0[1],
       include$0[2],
       include$0[3],
       include$0[4],
       include$0[5],
       include$0[6],
       include$0[7],
       include$0[9],
       include$0[8]];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Import=
      [0,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       _d_,
       _e_,
       min,
       max,
       debug,
       concat,
       tag,
       Time_ns,
       Array,
       Uopt];
    caml_register_global(1161,Incremental_Import,"Incremental__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$5);
    caml_call1(Expect_test_collector[4][1],cst_src_cutoff_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$6,cst$1);
    function sexp_of_t$2(of_a,param)
     {if(typeof param === "number")
       switch(param){case 0:return _f_;case 1:return _g_;default:return _h_}
      else
       switch(param[0])
        {case 0:
          var
           _F4_=function(_F8_){return 0},
           v0=caml_call1(Sexplib0_Sexp_conv[24],_F4_);
          return [1,[0,_i_,[0,v0,0]]];
         case 1:
          var
           _F5_=function(_F7_){return 0},
           v0$0=caml_call1(Sexplib0_Sexp_conv[24],_F5_);
          return [1,[0,_j_,[0,v0$0,0]]];
         default:
          var
           _F6_=function(_F9_){return 0},
           v0$1=caml_call1(Sexplib0_Sexp_conv[24],_F6_);
          return [1,[0,_k_,[0,v0$1,0]]]}}
    function invariant$0(param,t)
     {function _F0_(param){return 0}
      function _F1_(param){return _l_}
      function _F2_(_F3_){return sexp_of_t$2(_F1_,_F3_)}
      return caml_call4(Base_Invariant[1],_m_,t,_F2_,_F0_)}
    function create$0(f){return [2,f]}
    function of_compare(f){return [0,f]}
    function of_equal(f){return [1,f]}
    var poly_equal=[1,runtime.caml_equal],never=1,always=0;
    function should_cutoff(t,old_value,new_value)
     {if(typeof t === "number")
       switch(t)
        {case 0:return 1;
         case 1:return 0;
         default:return caml_call2(Core_kernel[234],old_value,new_value)}
      else
       switch(t[0])
        {case 0:
          var f=t[1];
          return caml_call2(symbol$1,caml_call2(f,old_value,new_value),0);
         case 1:var f$0=t[1];return caml_call2(f$0,old_value,new_value);
         default:var f$1=t[1];return caml_call2(f$1,old_value,new_value)}}
    function equal$1(t1,match)
     {if(typeof t1 === "number")
       switch(t1)
        {case 0:if(typeof match === "number")if(0 === match)return 1;return 0;
         case 1:if(typeof match === "number")if(1 === match)return 1;return 0;
         default:if(typeof match === "number")if(2 <= match)return 1;return 0}
      else
       switch(t1[0])
        {case 0:
          var _FX_=t1[1];
          if(typeof match !== "number" && 0 === match[0])
           {var f2=match[1];return caml_call2(Core_kernel[234],_FX_,f2)}
          return 0;
         case 1:
          var _FY_=t1[1];
          if(typeof match !== "number" && 1 === match[0])
           {var f2$0=match[1];return caml_call2(Core_kernel[234],_FY_,f2$0)}
          return 0;
         default:
          var _FZ_=t1[1];
          if(typeof match !== "number" && 2 === match[0])
           {var f2$1=match[1];return caml_call2(Core_kernel[234],_FZ_,f2$1)}
          return 0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Cutoff=
      [0,
       sexp_of_t$2,
       invariant$0,
       create$0,
       of_compare,
       of_equal,
       always,
       never,
       2,
       poly_equal,
       equal$1,
       should_cutoff];
    caml_register_global(1164,Incremental_Cutoff,"Incremental__Cutoff");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$8);
    caml_call1(Expect_test_collector[4][1],cst_src_node_id_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$9,cst$2);
    var
     incr=include[52],
     sexp_of_t$3=include[96],
     to_string$0=include[98],
     symbol$11=include[100],
     compare$1=include[107],
     hash_fold_t$0=include[122],
     hash$0=include[123],
     hashable=include[124],
     Table=include[125],
     Hash_set=include[126],
     Hash_queue=include[127],
     phys_equal=2;
    function invariant$1(t)
     {if(caml_call2(symbol$11,t,1))return 0;throw [0,Assert_failure,_n_]}
    var r=[0,0];
    function next$0(param){caml_call1(incr,r);return r[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _o_=
      [0,
       Hash_set[1],
       Hash_set[2],
       Hash_set[3],
       Hash_set[4],
       Hash_set[5],
       Hash_set[6]],
     Incremental_Node_id=
      [0,
       sexp_of_t$3,
       compare$1,
       hash_fold_t$0,
       hash$0,
       hashable,
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
       _o_,
       Hash_queue,
       invariant$1,
       next$0,
       to_string$0];
    caml_register_global(1166,Incremental_Node_id,"Incremental__Node_id");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$11);
    caml_call1(Expect_test_collector[4][1],cst_src_stabilization_num_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$12,cst$3);
    var
     _p_=include[15],
     _r_=include[73],
     _s_=include[96],
     _t_=include[100],
     _v_=include[106],
     _w_=include[107],
     _q_=include[18],
     _u_=include[102];
    function invariant$2(t)
     {if(caml_call2(_t_,t,-1))return 0;throw [0,Assert_failure,_x_]}
    var none=-1;
    function is_none(t){return caml_call2(_u_,t,none)}
    function is_some(t){return caml_call2(_t_,t,0)}
    function add1(t){return caml_call2(_q_,t,1)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Stabilization_num=
      [0,_w_,_s_,_v_,invariant$2,none,_p_,is_none,is_some,add1,_r_];
    caml_register_global
     (1167,Incremental_Stabilization_num,"Incremental__Stabilization_num");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$14);
    caml_call1(Expect_test_collector[4][1],cst_src_on_update_handler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$15,cst$4);
    function compare$2(cmp_a,a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       if(0 === a_001)
        if(typeof match === "number")
         return 0 === match?0:-1;
        else
         var switch$0=0 === match[0]?0:1;
       else
        if(typeof match === "number")
         return 0 === match?1:0;
        else
         var switch$0=0 === match[0]?0:1;
      else
       {if(0 === a_001[0])
         {var _FU_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];return caml_call2(cmp_a,_FU_,b_004)}
          return -1}
        var _FV_=a_001[2],_FW_=a_001[1];
        if(typeof match === "number")
         return -1;
        else
         {if(0 !== match[0])
           {var b_008=match[2],b_006=match[1],n=caml_call2(cmp_a,_FW_,b_006);
            return 0 === n?caml_call2(cmp_a,_FV_,b_008):n}
          var switch$0=0}}
      return switch$0?1:1}
    function sexp_of_t$4(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_D_:_E_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_F_,[0,v0$0,0]]]}
        var
         v1=param[2],
         v0$1=param[1],
         v0$2=caml_call1(of_a,v0$1),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,_G_,[0,v0$2,[0,v1$0,0]]]]}}
    var Node_update=[0,compare$2,sexp_of_t$4];
    function sexp_of_t$5(of_a,param)
     {var
       v_previous_update_kind=param[2],
       v_created_at=param[3],
       arg=caml_call1(_s_,v_created_at),
       bnds=[0,[1,[0,_H_,[0,arg,0]]],0];
      switch(v_previous_update_kind)
       {case 0:var arg$0=_y_;break;
        case 1:var arg$0=_z_;break;
        case 2:var arg$0=_A_;break;
        case 3:var arg$0=_B_;break;
        default:var arg$0=_C_}
      var bnds$0=[0,[1,[0,_I_,[0,arg$0,0]]],bnds];
      function _FS_(_FT_){return 0}
      var
       arg$1=caml_call1(Sexplib0_Sexp_conv[24],_FS_),
       bnds$1=[0,[1,[0,_J_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function create$1(f,created_at){return [0,f,0,created_at]}
    function really_run(t,node_update)
     {var
       _FR_=
        typeof node_update === "number"
         ?0 === node_update?3:4
         :0 === node_update[0]?1:2;
      t[2] = _FR_;
      return caml_call1(t[1],node_update)}
    function run(t,node_update,now)
     {var _FQ_=caml_call2(symbol$3,caml_call2(_w_,t[3],now),0);
      if(_FQ_)
       {switch(t[2])
         {case 0:
           var
            switch$0=
             typeof node_update === "number"?2:1 === node_update[0]?0:2;
           break;
          case 1:
           var
            switch$0=
             typeof node_update === "number"?2:0 === node_update[0]?1:2;
           break;
          case 2:
           var
            switch$0=
             typeof node_update === "number"?2:0 === node_update[0]?1:2;
           break;
          case 3:return 0;
          default:
           var
            switch$0=
             typeof node_update === "number"
              ?1 === node_update?1:2
              :1 === node_update[0]?0:2}
        switch(switch$0)
         {case 0:var a=node_update[2];return really_run(t,[0,a]);
          case 1:return 0;
          default:return really_run(t,node_update)}}
      return _FQ_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_On_update_handler=
      [0,Node_update,sexp_of_t$5,create$1,run];
    caml_register_global
     (1169,Incremental_On_update_handler,"Incremental__On_update_handler");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$17);
    caml_call1(Expect_test_collector[4][1],cst_src_types_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$18,cst$5);
    var
     Alarm=caml_call2(CamlinternalMod[1],_L_,_K_),
     Alarm_value=caml_call2(CamlinternalMod[1],_N_,_M_),
     Array_fold=caml_call2(CamlinternalMod[1],_P_,_O_),
     At=caml_call2(CamlinternalMod[1],_R_,_Q_),
     At_intervals=caml_call2(CamlinternalMod[1],_T_,_S_),
     Bind=caml_call2(CamlinternalMod[1],_V_,_U_),
     Clock=caml_call2(CamlinternalMod[1],_X_,_W_),
     Expert=caml_call2(CamlinternalMod[1],_Z_,_Y_),
     Freeze=caml_call2(CamlinternalMod[1],_$_,___),
     If_then_else=caml_call2(CamlinternalMod[1],_ab_,_aa_),
     Internal_observer=caml_call2(CamlinternalMod[1],_ad_,_ac_),
     Join=caml_call2(CamlinternalMod[1],_af_,_ae_),
     Kind=caml_call2(CamlinternalMod[1],_ah_,_ag_),
     Node=caml_call2(CamlinternalMod[1],_aj_,_ai_),
     Observer=caml_call2(CamlinternalMod[1],_al_,_ak_),
     include$1=caml_call2(CamlinternalMod[1],_an_,_am_),
     Snapshot=caml_call2(CamlinternalMod[1],_ap_,_ao_),
     Step_function_node=caml_call2(CamlinternalMod[1],_ar_,_aq_),
     Unordered_array_fold=caml_call2(CamlinternalMod[1],_at_,_as_),
     Var=caml_call2(CamlinternalMod[1],_av_,_au_);
    caml_call3(CamlinternalMod[2],_aw_,Alarm,Alarm);
    caml_call3(CamlinternalMod[2],_ax_,Alarm_value,Alarm_value);
    caml_call3(CamlinternalMod[2],_ay_,Array_fold,Array_fold);
    caml_call3(CamlinternalMod[2],_az_,At,At);
    caml_call3(CamlinternalMod[2],_aA_,At_intervals,At_intervals);
    caml_call3(CamlinternalMod[2],_aB_,Bind,Bind);
    caml_call3(CamlinternalMod[2],_aC_,Clock,Clock);
    caml_call3(CamlinternalMod[2],_aD_,Expert,Expert);
    caml_call3(CamlinternalMod[2],_aE_,Freeze,Freeze);
    caml_call3(CamlinternalMod[2],_aF_,If_then_else,If_then_else);
    caml_call3(CamlinternalMod[2],_aG_,Internal_observer,Internal_observer);
    caml_call3(CamlinternalMod[2],_aH_,Join,Join);
    caml_call3(CamlinternalMod[2],_aI_,Kind,Kind);
    function sexp_of_t$6(param,t)
     {var
       _FP_=
        caml_call2(concat,0,[0,cst_n,[0,caml_call1(to_string$0,t[1]),0]]);
      return caml_call1(Core_kernel[447],_FP_)}
    function sexp_of_t$7(param)
     {return sexp_of_t$6(function(param){return _aJ_},param)}
    function is_valid(t)
     {var _FO_=t[4];
      if(typeof _FO_ === "number")if(0 === _FO_)return 0;
      return 1}
    function is_necessary(t)
     {var _FJ_=caml_call2(symbol$2,t[8],0);
      if(_FJ_)
       var _FK_=_FJ_;
      else
       {var _FL_=caml_call1(Uopt[6],t[20]);
        if(_FL_)
         var _FK_=_FL_;
        else
         {var _FM_=t[4];
          if(typeof _FM_ === "number")
           var switch$0=0;
          else
           if(7 === _FM_[0])var _FN_=1,switch$0=1;else var switch$0=0;
          if(! switch$0)var _FN_=0;
          var _FK_=_FN_ || t[25]}}
      return _FK_}
    function type_equal_if_phys_same(t1,t2)
     {return caml_call2(Core_kernel[235],t1,t2)?[0,0]:0}
    caml_call3
     (CamlinternalMod[2],
      _aK_,
      Node,
      [0,
       sexp_of_t$6,
       [0,sexp_of_t$7],
       is_valid,
       is_necessary,
       type_equal_if_phys_same]);
    caml_call3(CamlinternalMod[2],_aL_,Observer,Observer);
    function sexp_of_t$8(param)
     {if(param)
       {var bind=param[1],_FH_=bind[1],_FI_=function(param){return _aM_};
        return caml_call1(caml_call1(Node[1],_FI_),_FH_)}
      return caml_call1(Core_kernel[447],cst_Top)}
    caml_call3(CamlinternalMod[2],_aN_,include$1,[0,sexp_of_t$8]);
    caml_call3(CamlinternalMod[2],_aO_,Snapshot,Snapshot);
    caml_call3(CamlinternalMod[2],_aP_,Step_function_node,Step_function_node);
    caml_call3
     (CamlinternalMod[2],_aQ_,Unordered_array_fold,Unordered_array_fold);
    caml_call3(CamlinternalMod[2],_aR_,Var,Var);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Types=
      [0,
       Alarm,
       Alarm_value,
       Array_fold,
       At,
       At_intervals,
       Bind,
       Clock,
       Expert,
       Freeze,
       If_then_else,
       Internal_observer,
       Join,
       Kind,
       Node,
       Observer,
       include$1,
       Snapshot,
       Step_function_node,
       Unordered_array_fold,
       Var];
    caml_register_global(1171,Incremental_Types,"Incremental__Types");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$20);
    caml_call1(Expect_test_collector[4][1],cst_src_var_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$21,cst$6);
    function watch(r){return r[4]}
    function set_at(r){return r[3]}
    function set_set_at(r,v){r[3] = v;return 0}
    function value_set_during_stabilization(r){return r[2]}
    function set_value_set_during_stabilization(r,v){r[2] = v;return 0}
    function value(r){return r[1]}
    function set_value(r,v){r[1] = v;return 0}
    function _aS_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _aT_=0,
     watch$0=[0,function(param){return 0},cst_watch,_aT_,watch,_aS_];
    function _aU_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _aV_=[0,set_set_at],
     set_at$0=[0,function(param){return 0},cst_set_at,_aV_,set_at,_aU_];
    function _aW_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _aX_=[0,set_value_set_during_stabilization],
     value_set_during_stabilization$0=
      [0,
       function(param){return 0},
       cst_value_set_during_stabilization,
       _aX_,
       value_set_during_stabilization,
       _aW_];
    function _aY_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _aZ_=[0,set_value],
     value$0=[0,function(param){return 0},cst_value,_aZ_,value,_aY_];
    function sexp_of_t$9(of_a,param)
     {var
       v_value=param[1],
       v_value_set_during_stabilization=param[2],
       v_set_at=param[3],
       v_watch=param[4],
       arg=caml_call2(Node[1],of_a,v_watch),
       bnds=[0,[1,[0,_a0_,[0,arg,0]]],0],
       arg$0=caml_call1(_s_,v_set_at),
       bnds$0=[0,[1,[0,_a1_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Uopt[1],of_a,v_value_set_during_stabilization),
       bnds$1=[0,[1,[0,_a2_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(of_a,v_value),
       bnds$2=[0,[1,[0,_a3_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$3(invariant_a,t)
     {function _FC_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         watch_fun=
          check
           (function(watch)
             {var _FG_=watch[4];
              if(typeof _FG_ === "number")
               {if(0 === _FG_)return 0}
              else
               if(16 === _FG_[0])
                {var t$0=_FG_[1];
                 if(caml_call2(Core_kernel[234],t,t$0))return 0;
                 throw [0,Assert_failure,_a5_]}
              throw [0,Assert_failure,_a4_]}),
         set_at_fun=check(invariant$2),
         value_set_during_stabilization_fun=
          check(caml_call1(Uopt[2],invariant_a)),
         value_fun=check(invariant_a);
        caml_call1(value_fun,value$0);
        caml_call1
         (value_set_during_stabilization_fun,value_set_during_stabilization$0);
        caml_call1(set_at_fun,set_at$0);
        return caml_call1(watch_fun,watch$0)}
      function _FD_(param){return _a6_}
      function _FE_(_FF_){return sexp_of_t$9(_FD_,_FF_)}
      return caml_call4(Base_Invariant[1],_a7_,t,_FE_,_FC_)}
    function sexp_of_t$10(param)
     {var v0=sexp_of_t$9(function(param){return _a8_},param);
      return [1,[0,_a9_,[0,v0,0]]]}
    function latest_value(t)
     {return caml_call1(Uopt[6],t[2])?caml_call1(Uopt[9],t[2]):t[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Packed=[0,sexp_of_t$10],
     include$2=[0,invariant$3,sexp_of_t$9,Packed,latest_value];
    caml_register_global(1173,include$2,"Incremental__Var");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$23);
    caml_call1(Expect_test_collector[4][1],cst_src_unordered_array_fold_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$24,cst$7);
    function sexp_of_t$11(of_a,of_b,param)
     {if(0 === param[0])
       {var
         _Fy_=function(_FB_){return 0},
         v0=caml_call1(Sexplib0_Sexp_conv[24],_Fy_);
        return [1,[0,_a__,[0,v0,0]]]}
      function _Fz_(_FA_){return 0}
      var v0$0=caml_call1(Sexplib0_Sexp_conv[24],_Fz_);
      return [1,[0,_a$_,[0,v0$0,0]]]}
    function num_changes_since_last_full_compute(r){return r[8]}
    function set_num_changes_since_last_full_compute(r,v){r[8] = v;return 0}
    function fold_value(r){return r[7]}
    function set_fold_value(r,v){r[7] = v;return 0}
    function children(r){return r[6]}
    function full_compute_every_n_changes(r){return r[5]}
    function init$0(r){return r[2]}
    function main(r){return r[1]}
    function _ba_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v]}
    var
     _bb_=[0,set_num_changes_since_last_full_compute],
     num_changes_since_last_full_compute$0=
      [0,
       function(param){return 0},
       cst_num_changes_since_last_full_compute,
       _bb_,
       num_changes_since_last_full_compute,
       _ba_];
    function _bc_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8]]}
    var
     _bd_=[0,set_fold_value],
     fold_value$0=
      [0,function(param){return 0},cst_fold_value,_bd_,fold_value,_bc_];
    function _be_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8]]}
    var
     _bf_=0,
     children$0=[0,function(param){return 0},cst_children,_bf_,children,_be_];
    function _bg_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8]]}
    var
     _bh_=0,
     full_compute_every_n_changes$0=
      [0,
       function(param){return 0},
       cst_full_compute_every_n_changes,
       _bh_,
       full_compute_every_n_changes,
       _bg_];
    function _bi_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8]]}
    var _bj_=0,init$1=[0,function(param){return 0},cst_init,_bj_,init$0,_bi_];
    function _bk_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8]]}
    var _bl_=0,main$0=[0,function(param){return 0},cst_main,_bl_,main,_bk_];
    function sexp_of_t$12(of_a,of_acc,param)
     {var
       v_children=param[6],
       v_full_compute_every_n_changes=param[5],
       v_init=param[2],
       v_main=param[1],
       v_fold_value=param[7],
       v_num_changes_since_last_full_compute=param[8],
       arg=caml_call1(Core_kernel[339],v_num_changes_since_last_full_compute),
       bnds=[0,[1,[0,_bm_,[0,arg,0]]],0],
       arg$0=caml_call2(Uopt[1],of_acc,v_fold_value),
       bnds$0=[0,[1,[0,_bn_,[0,arg$0,0]]],bnds],
       _Ft_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Core_kernel[275],_Ft_,v_children),
       bnds$1=[0,[1,[0,_bo_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_full_compute_every_n_changes),
       bnds$2=[0,[1,[0,_bp_,[0,arg$2,0]]],bnds$1];
      function _Fu_(_Fx_){return 0}
      var
       arg$3=caml_call1(Sexplib0_Sexp_conv[24],_Fu_),
       bnds$3=[0,[1,[0,_bq_,[0,arg$3,0]]],bnds$2];
      function _Fv_(_Fw_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_Fv_),
       bnds$4=[0,[1,[0,_br_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(of_acc,v_init),
       bnds$5=[0,[1,[0,_bs_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call2(Node[1],of_acc,v_main),
       bnds$6=[0,[1,[0,_bt_,[0,arg$6,0]]],bnds$5];
      return [1,bnds$6]}
    function invariant$4(invariant_a,invariant_acc,t)
     {function _Fl_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         num_changes_since_last_full_compute_fun=
          check
           (function(num_changes_since_last_full_compute)
             {if(caml_call2(symbol,num_changes_since_last_full_compute,0))
               {if
                 (caml_call2
                   (symbol$0,num_changes_since_last_full_compute,t[5]))
                 return 0;
                throw [0,Assert_failure,_bu_]}
              throw [0,Assert_failure,_bv_]}),
         fold_value_fun=
          check
           (function(fold_value)
             {caml_call2(Uopt[2],invariant_acc,fold_value);
              var
               got=caml_call1(Uopt[6],fold_value),
               expect=caml_call2(symbol$3,t[8],t[5]),
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
                       expect,
                       got)}),
         children_fun=
          check
           (function(children)
             {function _Fr_(child)
               {caml_call2(Uopt[2],invariant_a,child[3]);
                var _Fs_=caml_call2(symbol$3,t[8],t[5]);
                if(_Fs_)
                 {if(caml_call1(Uopt[6],child[3]))return 0;
                  throw [0,Assert_failure,_bw_]}
                return _Fs_}
              return caml_call2(Array[19],children,_Fr_)}),
         full_compute_every_n_changes_fun=
          check
           (function(full_compute_every_n_changes)
             {if(caml_call2(symbol$2,full_compute_every_n_changes,0))return 0;
              throw [0,Assert_failure,_bx_]}),
         init_fun=check(invariant_acc),
         main_fun=
          check
           (function(main)
             {var _Fq_=main[4];
              if(typeof _Fq_ === "number")
               {if(0 === _Fq_)return 0}
              else
               if(15 === _Fq_[0])
                {var t$0=_Fq_[1];
                 if(caml_call2(Core_kernel[235],t,t$0))return 0;
                 throw [0,Assert_failure,_bz_]}
              throw [0,Assert_failure,_by_]});
        caml_call1(main_fun,main$0);
        caml_call1(init_fun,init$1);
        caml_call1
         (full_compute_every_n_changes_fun,full_compute_every_n_changes$0);
        caml_call1(children_fun,children$0);
        caml_call1(fold_value_fun,fold_value$0);
        return caml_call1
                (num_changes_since_last_full_compute_fun,
                 num_changes_since_last_full_compute$0)}
      function _Fm_(param){return _bA_}
      function _Fn_(param){return _bB_}
      function _Fo_(_Fp_){return sexp_of_t$12(_Fn_,_Fm_,_Fp_)}
      return caml_call4(Base_Invariant[1],_bC_,t,_Fo_,_Fl_)}
    function create$2
     (init,f,update$0,full_compute_every_n_changes,children,main)
     {var _Fj_=Uopt[3];
      if(0 === update$0[0])
       var
        f_inverse=update$0[1],
        _Fk_=
         function(fold_value,old_value,new_value)
          {return caml_call2
                   (f,caml_call2(f_inverse,fold_value,old_value),new_value)};
      else
       var update=update$0[1],_Fk_=update;
      return [0,
              main,
              init,
              f,
              _Fk_,
              full_compute_every_n_changes,
              children,
              _Fj_,
              full_compute_every_n_changes]}
    function compute(t)
     {if(caml_call2(symbol$1,t[8],t[5]))
       {t[8] = 0;
        var
         children=t[6],
         f=t[3],
         init=t[2],
         result=[0,init],
         _Fg_=caml_call1(Array[17],children) - 1 | 0,
         _Ff_=0;
        if(! (_Fg_ < 0))
         {var i=_Ff_;
          for(;;)
           {var _Fh_=caml_call1(Uopt[7],children[1 + i][3]);
            result[1] = caml_call2(f,result[1],_Fh_);
            var _Fi_=i + 1 | 0;
            if(_Fg_ !== i){var i=_Fi_;continue}
            break}}
        t[7] = caml_call1(Uopt[4],result[1])}
      return caml_call1(Uopt[7],t[7])}
    function force_full_compute(t){t[7] = Uopt[3];t[8] = t[5];return 0}
    function child_changed(t,child,child_index,old_value_opt,new_value)
     {var
       child_at_index=caml_check_bound(t[6],child_index)[1 + child_index],
       match=caml_call2(Node[5],child,child_at_index);
      if(match)
       {if(caml_call2(symbol$3,t[8],t[5] - 1 | 0))
         {t[8] = t[8] + 1 | 0;
          var
           _E4_=caml_call1(Uopt[7],old_value_opt),
           _E5_=caml_call1(Uopt[7],t[7]),
           _E6_=caml_call3(t[4],_E5_,_E4_,new_value);
          t[7] = caml_call1(Uopt[4],_E6_);
          return 0}
        var _E7_=caml_call2(symbol$3,t[8],t[5]);
        return _E7_?force_full_compute(t):_E7_}
      var _E8_=0,_E9_=0;
      function _E__(param){return _bD_}
      var
       _E$_=[0,[1,[0,_bE_,[0,caml_call2(Node[1],_E__,child),_E9_]]],_E8_],
       _Fa_=
        [0,[1,[0,_bF_,[0,caml_call1(Core_kernel[339],child_index),0]]],_E$_],
       _Fb_=0;
      function _Fc_(param){return _bG_}
      var
       _Fd_=
        [0,
         [1,
          [0,_bI_,[0,sexp_of_t$12(function(param){return _bH_},_Fc_,t),_Fb_]]],
         _Fa_],
       _Fe_=
        [1,
         [0,
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_Unordered_array_fold_child_changed_mismatch),
          _Fd_]];
      return caml_call1(Core_kernel[241],_Fe_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Unordered_array_fold=
      [0,
       invariant$4,
       sexp_of_t$12,
       [0,sexp_of_t$11],
       create$2,
       compute,
       child_changed,
       force_full_compute];
    caml_register_global
     (1175,
      Incremental_Unordered_array_fold,
      "Incremental__Unordered_array_fold");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$26);
    caml_call1(Expect_test_collector[4][1],cst_src_alarm_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$27,cst$8);
    function sexp_of_t$13(v)
     {return caml_call2(Timing_wheel[5][1],Sexplib0_Sexp_conv[23],v)}
    function invariant$5(param){return 0}
    var null$0=caml_call1(Timing_wheel[5][2],0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Alarm=[0,sexp_of_t$13,invariant$5,null$0];
    caml_register_global(1177,Incremental_Alarm,"Incremental__Alarm");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$29);
    caml_call1(Expect_test_collector[4][1],cst_src_step_function_node_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$30,cst$9);
    function alarm_value(r){return r[7]}
    function set_alarm_value(r,v){r[7] = v;return 0}
    function alarm(r){return r[6]}
    function set_alarm(r,v){r[6] = v;return 0}
    function value$1(r){return r[4]}
    function set_value$0(r,v){r[4] = v;return 0}
    function main$1(r){return r[1]}
    function _bJ_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8]]}
    var
     _bK_=[0,set_alarm_value],
     alarm_value$0=
      [0,function(param){return 0},cst_alarm_value,_bK_,alarm_value,_bJ_];
    function _bL_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8]]}
    var
     _bM_=[0,set_alarm],
     alarm$0=[0,function(param){return 0},cst_alarm,_bM_,alarm,_bL_];
    function _bN_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8]]}
    var
     _bO_=[0,set_value$0],
     value$2=[0,function(param){return 0},cst_value$0,_bO_,value$1,_bN_];
    function _bP_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8]]}
    var
     _bQ_=0,
     main$2=[0,function(param){return 0},cst_main$0,_bQ_,main$1,_bP_];
    function sexp_of_t$14(of_a,param)
     {var
       v_main=param[1],
       v_child=param[2],
       v_extracted_step_function_from_child_at=param[3],
       v_value=param[4],
       v_upcoming_steps=param[5],
       v_alarm=param[6],
       v_alarm_value=param[7],
       v_clock=param[8],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_bR_,[0,arg,0]]],0],
       arg$0=caml_call1(Sexplib0_Sexp_conv[23],v_alarm_value),
       bnds$0=[0,[1,[0,_bS_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$13(v_alarm),
       bnds$1=[0,[1,[0,_bT_,[0,arg$1,0]]],bnds$0];
      function _E1_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Time_ns[88],v0),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$2=caml_call2(Core_kernel_Sequence[13],_E1_,v_upcoming_steps),
       bnds$2=[0,[1,[0,_bU_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Uopt[1],of_a,v_value),
       bnds$3=[0,[1,[0,_bV_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(_s_,v_extracted_step_function_from_child_at),
       bnds$4=[0,[1,[0,_bW_,[0,arg$4,0]]],bnds$3],
       _E2_=caml_call1(Incremental_step_function[1],of_a),
       _E3_=caml_call1(Node[1],_E2_),
       arg$5=caml_call2(Uopt[1],_E3_,v_child),
       bnds$5=[0,[1,[0,_bX_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call2(Node[1],of_a,v_main),
       bnds$6=[0,[1,[0,_bY_,[0,arg$6,0]]],bnds$5];
      return [1,bnds$6]}
    function invariant$6(invariant_a,t)
     {function _EV_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_value_fun=
          check
           (function(alarm_value)
             {var _E0_=alarm_value[1];
              if(3 === _E0_[0])
               {var t2=_E0_[1];
                if(caml_call2(Core_kernel[235],t,t2))return 0;
                throw [0,Assert_failure,_b0_]}
              throw [0,Assert_failure,_bZ_]}),
         alarm_fun=check(invariant$5),
         value_fun=check(caml_call1(Uopt[2],invariant_a)),
         main_fun=
          check
           (function(main)
             {var _EZ_=main[4];
              if(typeof _EZ_ === "number")
               {if(0 === _EZ_)return 0}
              else
               switch(_EZ_[0])
                {case 5:return 0;
                 case 14:
                  var t$0=_EZ_[1];
                  if(caml_call2(Core_kernel[234],t,t$0))return 0;
                  throw [0,Assert_failure,_b2_]
                 }
              throw [0,Assert_failure,_b1_]});
        caml_call1(main_fun,main$2);
        caml_call1(value_fun,value$2);
        caml_call1(alarm_fun,alarm$0);
        caml_call1(alarm_value_fun,alarm_value$0);
        return 0}
      function _EW_(param){return _b3_}
      function _EX_(_EY_){return sexp_of_t$14(_EW_,_EY_)}
      return caml_call4(Base_Invariant[1],_b4_,t,_EX_,_EV_)}
    function advance(t,to)
     {var _EU_=t[5],a1$0=caml_call1(Uopt[7],t[4]),a1=a1$0,steps=_EU_;
      for(;;)
       {var match=caml_call1(Core_kernel_Sequence[47],steps);
        if(match)
         {var
           _ET_=match[1],
           steps2=_ET_[2],
           match$0=_ET_[1],
           a2=match$0[2],
           step_at=match$0[1];
          if(caml_call2(Time_ns[15],to,step_at))
           {var a1=a2,steps=steps2;continue}}
        t[4] = caml_call1(Uopt[4],a1);
        t[5] = steps;
        return 0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Step_function_node=[0,invariant$6,sexp_of_t$14,advance];
    caml_register_global
     (1180,Incremental_Step_function_node,"Incremental__Step_function_node");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$32);
    caml_call1(Expect_test_collector[4][1],cst_src_array_fold_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$33,cst$10);
    function children$1(r){return r[3]}
    function init$2(r){return r[1]}
    function _b5_(r,v){return [0,r[1],r[2],v]}
    var
     _b6_=0,
     children$2=
      [0,function(param){return 0},cst_children$0,_b6_,children$1,_b5_];
    function _b7_(r,v){return [0,v,r[2],r[3]]}
    var
     _b8_=0,
     init$3=[0,function(param){return 0},cst_init$0,_b8_,init$2,_b7_];
    function sexp_of_t$15(of_a,of_acc,param)
     {var
       v_children=param[3],
       v_init=param[1],
       _EQ_=caml_call1(Node[1],of_a),
       arg=caml_call2(Core_kernel[275],_EQ_,v_children),
       bnds=[0,[1,[0,_b9_,[0,arg,0]]],0];
      function _ER_(_ES_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_ER_),
       bnds$0=[0,[1,[0,_b__,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_acc,v_init),
       bnds$1=[0,[1,[0,_b$_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function invariant$7(invariant_a,invariant_acc,t)
     {function _EK_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         children_fun=
          check
           (function(children)
             {function _EP_(child)
               {return caml_call2(Uopt[2],invariant_a,child[3])}
              return caml_call2(Array[19],children,_EP_)}),
         init_fun=check(invariant_acc);
        caml_call1(init_fun,init$3);
        return caml_call1(children_fun,children$2)}
      function _EL_(param){return _ca_}
      function _EM_(param){return _cb_}
      function _EN_(_EO_){return sexp_of_t$15(_EM_,_EL_,_EO_)}
      return caml_call4(Base_Invariant[1],_cc_,t,_EN_,_EK_)}
    function compute$0(param)
     {var
       children=param[3],
       f=param[2],
       init=param[1],
       result=[0,init],
       _EH_=caml_call1(Array[17],children) - 1 | 0,
       _EG_=0;
      if(! (_EH_ < 0))
       {var i=_EG_;
        for(;;)
         {var _EI_=caml_call1(Uopt[7],children[1 + i][3]);
          result[1] = caml_call2(f,result[1],_EI_);
          var _EJ_=i + 1 | 0;
          if(_EH_ !== i){var i=_EJ_;continue}
          break}}
      return result[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Array_fold=[0,sexp_of_t$15,invariant$7,compute$0];
    caml_register_global
     (1181,Incremental_Array_fold,"Incremental__Array_fold");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$35);
    caml_call1(Expect_test_collector[4][1],cst_src_at_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$36,cst$11);
    function alarm$1(r){return r[3]}
    function set_alarm$0(r,v){r[3] = v;return 0}
    function main$3(r){return r[1]}
    function _cd_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _ce_=[0,set_alarm$0],
     alarm$2=[0,function(param){return 0},cst_alarm$0,_ce_,alarm$1,_cd_];
    function _cf_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _cg_=0,
     main$4=[0,function(param){return 0},cst_main$1,_cg_,main$3,_cf_];
    function sexp_of_t$16(param)
     {var
       v_at=param[2],
       v_main=param[1],
       v_alarm=param[3],
       v_clock=param[4],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_ch_,[0,arg,0]]],0],
       arg$0=sexp_of_t$13(v_alarm),
       bnds$0=[0,[1,[0,_ci_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Time_ns[88],v_at),
       bnds$1=[0,[1,[0,_cj_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Incremental_Before_or_after[1],v_main),
       bnds$2=[0,[1,[0,_ck_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$8(t)
     {function _EE_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_fun=check(invariant$5),
         main_fun=
          check
           (function(main)
             {var _EF_=main[4];
              if(typeof _EF_ === "number")
               {if(0 === _EF_)return 0}
              else
               switch(_EF_[0])
                {case 1:
                  var t$0=_EF_[1];
                  if(caml_call2(Core_kernel[234],t,t$0))return 0;
                  throw [0,Assert_failure,_cm_];
                 case 5:if(0 !== _EF_[1])return 0;break
                 }
              throw [0,Assert_failure,_cl_]});
        caml_call1(main_fun,main$4);
        caml_call1(alarm_fun,alarm$2);
        return 0}
      return caml_call4(Base_Invariant[1],_cn_,t,sexp_of_t$16,_EE_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_At=[0,invariant$8,sexp_of_t$16];
    caml_register_global(1182,Incremental_At,"Incremental__At");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$38);
    caml_call1(Expect_test_collector[4][1],cst_src_at_intervals_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$39,cst$12);
    function alarm$3(r){return r[4]}
    function set_alarm$1(r,v){r[4] = v;return 0}
    function interval(r){return r[3]}
    function main$5(r){return r[1]}
    function _co_(r,v){return [0,r[1],r[2],r[3],v,r[5]]}
    var
     _cp_=[0,set_alarm$1],
     alarm$4=[0,function(param){return 0},cst_alarm$1,_cp_,alarm$3,_co_];
    function _cq_(r,v){return [0,r[1],r[2],v,r[4],r[5]]}
    var
     _cr_=0,
     interval$0=[0,function(param){return 0},cst_interval,_cr_,interval,_cq_];
    function _cs_(r,v){return [0,v,r[2],r[3],r[4],r[5]]}
    var
     _ct_=0,
     main$6=[0,function(param){return 0},cst_main$2,_ct_,main$5,_cs_];
    function sexp_of_t$17(param)
     {var
       v_interval=param[3],
       v_base=param[2],
       v_main=param[1],
       v_alarm=param[4],
       v_clock=param[5],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_cu_,[0,arg,0]]],0],
       arg$0=sexp_of_t$13(v_alarm),
       bnds$0=[0,[1,[0,_cv_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Time_ns[1][10],v_interval),
       bnds$1=[0,[1,[0,_cw_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Time_ns[88],v_base),
       bnds$2=[0,[1,[0,_cx_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],Core_kernel[491],v_main),
       bnds$3=[0,[1,[0,_cy_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function invariant$9(t)
     {function _EC_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_fun=check(invariant$5),
         interval_fun=
          check
           (function(interval)
             {if(caml_call1(Time_ns[1][40],interval))return 0;
              throw [0,Assert_failure,_cz_]}),
         main_fun=
          check
           (function(main)
             {var _ED_=main[4];
              if(typeof _ED_ === "number")
               {if(0 === _ED_)return 0}
              else
               if(2 === _ED_[0])
                {var t$0=_ED_[1];
                 if(caml_call2(Core_kernel[234],t,t$0))return 0;
                 throw [0,Assert_failure,_cB_]}
              throw [0,Assert_failure,_cA_]});
        caml_call1(main_fun,main$6);
        caml_call1(interval_fun,interval$0);
        caml_call1(alarm_fun,alarm$4);
        return 0}
      return caml_call4(Base_Invariant[1],_cC_,t,sexp_of_t$17,_EC_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_At_intervals=[0,invariant$9,sexp_of_t$17];
    caml_register_global
     (1183,Incremental_At_intervals,"Incremental__At_intervals");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$41);
    caml_call1(Expect_test_collector[4][1],cst_src_bind_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$42,cst$13);
    function all_nodes_created_on_rhs(r){return r[7]}
    function set_all_nodes_created_on_rhs(r,v){r[7] = v;return 0}
    function rhs_scope(r){return r[6]}
    function set_rhs_scope(r,v){r[6] = v;return 0}
    function lhs_change(r){return r[4]}
    function main$7(r){return r[1]}
    function _cD_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _cE_=[0,set_all_nodes_created_on_rhs],
     all_nodes_created_on_rhs$0=
      [0,
       function(param){return 0},
       cst_all_nodes_created_on_rhs,
       _cE_,
       all_nodes_created_on_rhs,
       _cD_];
    function _cF_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _cG_=[0,set_rhs_scope],
     rhs_scope$0=
      [0,function(param){return 0},cst_rhs_scope,_cG_,rhs_scope,_cF_];
    function _cH_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _cI_=0,
     lhs_change$0=
      [0,function(param){return 0},cst_lhs_change,_cI_,lhs_change,_cH_];
    function _cJ_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7]]}
    var
     _cK_=0,
     main$8=[0,function(param){return 0},cst_main$3,_cK_,main$7,_cJ_];
    function sexp_of_t$18(of_a,of_b,param)
     {var
       v_main=param[1],
       v_lhs_change=param[4],
       v_lhs=param[3],
       v_rhs=param[5],
       v_rhs_scope=param[6],
       v_all_nodes_created_on_rhs=param[7],
       arg=caml_call2(Uopt[1],Node[2][1],v_all_nodes_created_on_rhs),
       bnds=[0,[1,[0,_cL_,[0,arg,0]]],0],
       arg$0=caml_call1(include$1[1],v_rhs_scope),
       bnds$0=[0,[1,[0,_cM_,[0,arg$0,0]]],bnds],
       _Ez_=caml_call1(Node[1],of_b),
       arg$1=caml_call2(Uopt[1],_Ez_,v_rhs),
       bnds$1=[0,[1,[0,_cN_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Core_kernel[491],v_lhs_change),
       bnds$2=[0,[1,[0,_cO_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],of_a,v_lhs),
       bnds$3=[0,[1,[0,_cP_,[0,arg$3,0]]],bnds$2];
      function _EA_(_EB_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_EA_),
       bnds$4=[0,[1,[0,_cQ_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call2(Node[1],of_b,v_main),
       bnds$5=[0,[1,[0,_cR_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function same(t1,t2){return caml_call2(Core_kernel[235],t1,t2)}
    function is_valid$0(t)
     {var _Ey_=t[1][4];
      if(typeof _Ey_ === "number")if(0 === _Ey_)return 0;
      return 1}
    function iter_nodes_created_on_rhs(t,f)
     {var r=[0,t[7]];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var match=caml_call1(Uopt[9],r[1]);
          r[1] = match[12];
          caml_call1(f,match);
          continue}
        return 0}}
    function invariant$10(invariant_a,invariant_b,t)
     {function _Eq_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         all_nodes_created_on_rhs_fun=
          check
           (function(param)
             {return iter_nodes_created_on_rhs
                      (t,
                       function(node)
                        {if(caml_call2(Core_kernel[234],node[11],t[6]))
                          {var _Ex_=caml_call1(Node[4],node);
                           if(_Ex_)
                            {if(caml_call2(symbol$3,t[4][13],node[13]))return 0;
                             throw [0,Assert_failure,_cS_]}
                           return _Ex_}
                         throw [0,Assert_failure,_cT_]})}),
         rhs_scope_fun=
          check
           (function(param)
             {if(param)
               {var t$0=param[1];
                if(same(t,t$0))return 0;
                throw [0,Assert_failure,_cU_]}
              throw [0,Assert_failure,_cV_]}),
         lhs_change_fun=
          check
           (function(lhs_change)
             {if(caml_call2(Core_kernel[234],lhs_change[11],t[1][11]))
               {var _Ew_=lhs_change[4];
                if(typeof _Ew_ === "number")
                 {if(0 === _Ew_)return 0}
                else
                 if(3 === _Ew_[0])
                  {var t$0=_Ew_[1];
                   if(same(t,t$0))return 0;
                   throw [0,Assert_failure,_cX_]}
                throw [0,Assert_failure,_cW_]}
              throw [0,Assert_failure,_cY_]}),
         main_fun=
          check
           (function(main)
             {var _Ev_=main[4];
              if(typeof _Ev_ === "number")
               {if(0 === _Ev_)return 0}
              else
               if(4 === _Ev_[0])
                {var t$0=_Ev_[1];
                 if(same(t,t$0))return 0;
                 throw [0,Assert_failure,_c0_]}
              throw [0,Assert_failure,_cZ_]});
        caml_call1(main_fun,main$8);
        caml_call1(lhs_change_fun,lhs_change$0);
        caml_call1(rhs_scope_fun,rhs_scope$0);
        return caml_call1
                (all_nodes_created_on_rhs_fun,all_nodes_created_on_rhs$0)}
      function _Er_(param){return _c1_}
      function _Es_(param){return _c2_}
      function _Et_(_Eu_){return sexp_of_t$18(_Es_,_Er_,_Eu_)}
      return caml_call4(Base_Invariant[1],_c3_,t,_Et_,_Eq_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Bind=
      [0,invariant$10,sexp_of_t$18,is_valid$0,iter_nodes_created_on_rhs];
    caml_register_global(1184,Incremental_Bind,"Incremental__Bind");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$44);
    caml_call1(Expect_test_collector[4][1],cst_src_expert_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$45,cst$14);
    function sexp_of_t$19(of_a,param)
     {var
       v_child=param[1],
       v_index=param[3],
       arg=caml_call2(Uopt[1],Core_kernel[339],v_index),
       bnds=[0,[1,[0,_c4_,[0,arg,0]]],0];
      function _Eo_(_Ep_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_Eo_),
       bnds$0=[0,[1,[0,_c5_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Node[1],of_a,v_child),
       bnds$1=[0,[1,[0,_c6_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function sexp_of_packed_edge(param)
     {var v0=sexp_of_t$19(function(param){return _c7_},param);
      return [1,[0,_c8_,[0,v0,0]]]}
    function sexp_of_t$20(of_a,param)
     {var
       v_children=param[3],
       v_num_children=param[4],
       v_force_stale=param[5],
       v_num_invalid_children=param[6],
       v_will_fire_all_callbacks=param[7],
       arg=caml_call1(Core_kernel[291],v_will_fire_all_callbacks),
       bnds=[0,[1,[0,_c9_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[339],v_num_invalid_children),
       bnds$0=[0,[1,[0,_c__,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[291],v_force_stale),
       bnds$1=[0,[1,[0,_c$_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_num_children),
       bnds$2=[0,[1,[0,_da_,[0,arg$2,0]]],bnds$1],
       _Ej_=caml_call1(Uopt[1],sexp_of_packed_edge),
       arg$3=caml_call2(Array[13],_Ej_,v_children),
       bnds$3=[0,[1,[0,_db_,[0,arg$3,0]]],bnds$2];
      function _Ek_(_En_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_Ek_),
       bnds$4=[0,[1,[0,_dc_,[0,arg$4,0]]],bnds$3];
      function _El_(_Em_){return 0}
      var
       arg$5=caml_call1(Sexplib0_Sexp_conv[24],_El_),
       bnds$5=[0,[1,[0,_dd_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function invariant$11(invariant_a,param)
     {var children=param[3],num_children=param[4];
      if(caml_call2(symbol$0,num_children,caml_call1(Array[17],children)))
       {var
         _Ei_=
          function(expect,uopt)
           {var match=caml_call2(symbol$3,expect,num_children);
            if(0 === match)
             {if(caml_call1(Uopt[5],uopt))return 0;
              throw [0,Assert_failure,_de_]}
            var
             r=caml_call1(Uopt[7],uopt),
             got=caml_call1(Uopt[7],r[3]),
             sexpifier=Core_kernel[339],
             comparator=Core_kernel[335];
            return caml_call8
                    (Ppx_assert_lib_Runtime[3],
                     pos$0,
                     sexpifier,
                     comparator,
                     0,
                     0,
                     0,
                     expect,
                     got)};
        return caml_call2(Array[53],children,_Ei_)}
      throw [0,Assert_failure,_df_]}
    function invariant_about_num_invalid_children(param)
     {var
       children=param[3],
       num_children=param[4],
       num_invalid_children=param[6];
      return function(is_necessary)
       {if(is_necessary)
         {var count_invalid_children=[0,0],_Ef_=num_children - 1 | 0,_Ee_=0;
          if(! (_Ef_ < 0))
           {var i=_Ee_;
            for(;;)
             {var
               _Eg_=caml_check_bound(children,i)[1 + i],
               r=caml_call1(Uopt[7],_Eg_);
              if(1 - caml_call1(Node[3],r[1]))count_invalid_children[1]++;
              var _Eh_=i + 1 | 0;
              if(_Ef_ !== i){var i=_Eh_;continue}
              break}}
          var sexpifier=Core_kernel[339],comparator=Core_kernel[335];
          return caml_call8
                  (Ppx_assert_lib_Runtime[3],
                   pos$1,
                   sexpifier,
                   comparator,
                   0,
                   0,
                   0,
                   count_invalid_children[1],
                   num_invalid_children)}
        var sexpifier$0=Core_kernel[339],comparator$0=Core_kernel[335];
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$2,
                 sexpifier$0,
                 comparator$0,
                 0,
                 0,
                 0,
                 0,
                 num_invalid_children)}}
    function create$3(f,on_observability_change)
     {return [0,f,on_observability_change,[0],0,0,0,1]}
    function make_stale(t){return t[5]?534011858:(t[5] = 1,17724)}
    function incr_invalid_children(t){t[6] = t[6] + 1 | 0;return 0}
    function decr_invalid_children(t){t[6] = t[6] - 1 | 0;return 0}
    function add_child_edge(t,packed_edge)
     {if(caml_call1(Uopt[5],packed_edge[3]))
       {var _Eb_=caml_call1(Array[17],t[3]);
        if(caml_call2(symbol,t[4],_Eb_))
         {var
           _Ec_=2 * caml_call1(Array[17],t[3]) | 0,
           new_max=caml_call2(include[109],2,_Ec_);
          t[3] = caml_call3(Array[117],t[3],new_max,Uopt[3])}
        var new_child_index=t[4];
        packed_edge[3] = caml_call1(Uopt[4],new_child_index);
        var _Ed_=caml_call1(Uopt[4],packed_edge);
        caml_check_bound(t[3],new_child_index)[1 + new_child_index] = _Ed_;
        t[4] = t[4] + 1 | 0;
        t[5] = 1;
        return new_child_index}
      throw [0,Assert_failure,_dg_]}
    function swap_children(t,child_index1,child_index2)
     {var
       _D$_=caml_check_bound(t[3],child_index1)[1 + child_index1],
       edge1=caml_call1(Uopt[7],_D$_),
       _Ea_=caml_check_bound(t[3],child_index2)[1 + child_index2],
       edge2=caml_call1(Uopt[7],_Ea_);
      edge1[3] = caml_call1(Uopt[4],child_index2);
      edge2[3] = caml_call1(Uopt[4],child_index1);
      return caml_call3(Array[81],t[3],child_index1,child_index2)}
    function last_child_edge_exn(t)
     {var
       last_index=t[4] - 1 | 0,
       _D__=caml_check_bound(t[3],last_index)[1 + last_index];
      return caml_call1(Uopt[7],_D__)}
    function remove_last_child_edge_exn(t)
     {var
       last_index=t[4] - 1 | 0,
       packed_edge_opt=caml_check_bound(t[3],last_index)[1 + last_index],
       _D9_=Uopt[3];
      caml_check_bound(t[3],last_index)[1 + last_index] = _D9_;
      t[4] = last_index;
      t[5] = 1;
      if(caml_call1(Uopt[6],packed_edge_opt))
       {var match=caml_call1(Uopt[9],packed_edge_opt);
        match[3] = Uopt[3];
        return 0}
      throw [0,Assert_failure,_dh_]}
    function before_main_computation(t)
     {if(caml_call2(symbol$2,t[6],0))return 144245463;
      t[5] = 0;
      var will_fire_all_callbacks=t[7];
      t[7] = 0;
      if(will_fire_all_callbacks)
       {var _D5_=t[4] - 1 | 0,_D4_=0;
        if(! (_D5_ < 0))
         {var i=_D4_;
          for(;;)
           {var
             _D6_=caml_check_bound(t[3],i)[1 + i],
             r=caml_call1(Uopt[7],_D6_),
             _D7_=caml_call1(Uopt[7],r[1][3]);
            caml_call1(r[2],_D7_);
            var _D8_=i + 1 | 0;
            if(_D5_ !== i){var i=_D8_;continue}
            break}}}
      return 17724}
    function observability_change(t,is_now_observable)
     {caml_call1(t[2],is_now_observable);
      var _D2_=1 - is_now_observable,_D3_=_D2_?(t[7] = 1,t[6] = 0,0):_D2_;
      return _D3_}
    function run_edge_callback(t,child_index)
     {var _DX_=1 - t[7];
      if(_DX_)
       {var
         _DY_=caml_check_bound(t[3],child_index)[1 + child_index],
         r=caml_call1(Uopt[7],_DY_),
         _DZ_=caml_call1(Uopt[6],r[1][3]);
        if(_DZ_)
         {var _D0_=caml_call1(Uopt[9],r[1][3]);return caml_call1(r[2],_D0_)}
        var _D1_=_DZ_}
      else
       var _D1_=_DX_;
      return _D1_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Expert=
      [0,
       invariant$11,
       sexp_of_t$20,
       sexp_of_t$19,
       invariant_about_num_invalid_children,
       create$3,
       make_stale,
       incr_invalid_children,
       decr_invalid_children,
       add_child_edge,
       swap_children,
       last_child_edge_exn,
       remove_last_child_edge_exn,
       before_main_computation,
       observability_change,
       run_edge_callback];
    caml_register_global(1185,Incremental_Expert,"Incremental__Expert");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$47);
    caml_call1(Expect_test_collector[4][1],cst_src_sexp_of_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$48,cst$15);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Sexp_of=[0];
    caml_register_global(1186,Incremental_Sexp_of,"Incremental__Sexp_of");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$50);
    caml_call1(Expect_test_collector[4][1],cst_src_scope_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$51,cst$16);
    var _di_=include$1[1],top=0;
    function is_top(param){return param?0:1}
    function invariant$12(param)
     {if(param)
       {var bind=param[1],_DU_=function(_DW_){return 0};
        return invariant$10(function(_DV_){return 0},_DU_,bind)}
      return 0}
    function height(param)
     {if(param){var bind=param[1];return bind[4][13]}return -1}
    function is_valid$1(param)
     {if(param){var bind=param[1];return is_valid$0(bind)}return 1}
    function is_necessary$0(param)
     {if(param){var bind=param[1];return caml_call1(Node[4],bind[1])}return 1}
    function add_node(t,node)
     {if(caml_call2(Core_kernel[234],node[11],t))
       {if(t)
         {var bind=t[1];
          node[12] = bind[7];
          bind[7] = caml_call1(Uopt[4],node);
          return 0}
        return 0}
      throw [0,Assert_failure,_dj_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$3=
      [0,
       _di_,
       invariant$12,
       top,
       is_top,
       height,
       is_valid$1,
       is_necessary$0,
       add_node];
    caml_register_global(1187,include$3,"Incremental__Scope");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$53);
    caml_call1(Expect_test_collector[4][1],cst_src_freeze_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$54,cst$17);
    function main$9(r){return r[1]}
    function _dk_(r,v){return [0,v,r[2],r[3]]}
    var
     _dl_=0,
     main$10=[0,function(param){return 0},cst_main$4,_dl_,main$9,_dk_];
    function sexp_of_t$21(of_a,param)
     {var v_child=param[2],v_main=param[1],bnds=0;
      function _DS_(_DT_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_DS_),
       bnds$0=[0,[1,[0,_dm_,[0,arg,0]]],bnds],
       arg$0=caml_call2(Node[1],of_a,v_child),
       bnds$1=[0,[1,[0,_dn_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_do_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$13(invariant_a,t)
     {function _DN_(param)
       {function f(main)
         {if(is_top(main[11]))
           {var _DR_=main[4];
            if(typeof _DR_ === "number")
             {if(0 === _DR_)return 0}
            else
             switch(_DR_[0])
              {case 5:return 0;
               case 7:
                var t$0=_DR_[1];
                if(caml_call2(Core_kernel[234],t,t$0))return 0;
                throw [0,Assert_failure,_dq_]
               }
            throw [0,Assert_failure,_dp_]}
          throw [0,Assert_failure,_dr_]}
        var main_fun=caml_call2(Base_Invariant[2],t,f);
        caml_call1(main_fun,main$10);
        return 0}
      function _DO_(param){return _ds_}
      function _DP_(_DQ_){return sexp_of_t$21(_DO_,_DQ_)}
      return caml_call4(Base_Invariant[1],_dt_,t,_DP_,_DN_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Freeze=[0,invariant$13,sexp_of_t$21];
    caml_register_global(1188,Incremental_Freeze,"Incremental__Freeze");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$56);
    caml_call1(Expect_test_collector[4][1],cst_src_if_then_else_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$57,cst$18);
    function current_branch(r){return r[4]}
    function set_current_branch(r,v){r[4] = v;return 0}
    function test_change(r){return r[3]}
    function main$11(r){return r[1]}
    function _du_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _dv_=[0,set_current_branch],
     current_branch$0=
      [0,
       function(param){return 0},
       cst_current_branch,
       _dv_,
       current_branch,
       _du_];
    function _dw_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _dx_=0,
     test_change$0=
      [0,function(param){return 0},cst_test_change,_dx_,test_change,_dw_];
    function _dy_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _dz_=0,
     main$12=[0,function(param){return 0},cst_main$5,_dz_,main$11,_dy_];
    function sexp_of_t$22(of_a,param)
     {var
       v_test_change=param[3],
       v_test=param[2],
       v_main=param[1],
       v_current_branch=param[4],
       v_else=param[6],
       v_then=param[5],
       arg=caml_call2(Node[1],of_a,v_else),
       bnds=[0,[1,[0,_dA_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],of_a,v_then),
       bnds$0=[0,[1,[0,_dB_,[0,arg$0,0]]],bnds],
       _DM_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Uopt[1],_DM_,v_current_branch),
       bnds$1=[0,[1,[0,_dC_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Core_kernel[491],v_test_change),
       bnds$2=[0,[1,[0,_dD_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],Core_kernel[291],v_test),
       bnds$3=[0,[1,[0,_dE_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call2(Node[1],of_a,v_main),
       bnds$4=[0,[1,[0,_dF_,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function invariant$14(invariant_a,t)
     {function _DF_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         current_branch_fun=
          check
           (function(current_branch)
             {var _DL_=caml_call1(Uopt[6],current_branch);
              if(_DL_)
               {var current_branch$0=caml_call1(Uopt[7],current_branch);
                if(! caml_call2(Core_kernel[234],current_branch$0,t[5]))
                 if(! caml_call2(Core_kernel[234],current_branch$0,t[6]))
                  throw [0,Assert_failure,_dG_];
                return 0}
              return _DL_}),
         test_change_fun=
          check
           (function(test_change)
             {var _DK_=test_change[4];
              if(typeof _DK_ === "number")
               {if(0 === _DK_)return 0}
              else
               if(8 === _DK_[0])
                {var t$0=_DK_[1];
                 if(caml_call2(Core_kernel[235],t,t$0))return 0;
                 throw [0,Assert_failure,_dI_]}
              throw [0,Assert_failure,_dH_]}),
         main_fun=
          check
           (function(main)
             {var _DJ_=main[4];
              if(typeof _DJ_ === "number")
               {if(0 === _DJ_)return 0}
              else
               if(9 === _DJ_[0])
                {var t$0=_DJ_[1];
                 if(caml_call2(Core_kernel[234],t,t$0))return 0;
                 throw [0,Assert_failure,_dJ_]}
              return 0});
        caml_call1(main_fun,main$12);
        caml_call1(test_change_fun,test_change$0);
        caml_call1(current_branch_fun,current_branch$0);
        return 0}
      function _DG_(param){return _dK_}
      function _DH_(_DI_){return sexp_of_t$22(_DG_,_DI_)}
      return caml_call4(Base_Invariant[1],_dL_,t,_DH_,_DF_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$58);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_If_then_else=[0,invariant$14,sexp_of_t$22];
    caml_register_global
     (1189,Incremental_If_then_else,"Incremental__If_then_else");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$59);
    caml_call1(Expect_test_collector[4][1],cst_src_join_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$60,cst$19);
    function lhs_change$1(r){return r[3]}
    function main$13(r){return r[1]}
    function _dM_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _dN_=0,
     lhs_change$2=
      [0,function(param){return 0},cst_lhs_change$0,_dN_,lhs_change$1,_dM_];
    function _dO_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _dP_=0,
     main$14=[0,function(param){return 0},cst_main$6,_dP_,main$13,_dO_];
    function sexp_of_t$23(of_a,param)
     {var
       v_lhs_change=param[3],
       v_lhs=param[2],
       v_main=param[1],
       v_rhs=param[4],
       _DD_=caml_call1(Node[1],of_a),
       arg=caml_call2(Uopt[1],_DD_,v_rhs),
       bnds=[0,[1,[0,_dQ_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],Core_kernel[491],v_lhs_change),
       bnds$0=[0,[1,[0,_dR_,[0,arg$0,0]]],bnds],
       _DE_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Node[1],_DE_,v_lhs),
       bnds$1=[0,[1,[0,_dS_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_dT_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function same$0(t1,t2){return caml_call2(Core_kernel[235],t1,t2)}
    function invariant$15(invariant_a,t)
     {function _Dx_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         lhs_change_fun=
          check
           (function(lhs_change)
             {var _DC_=lhs_change[4];
              if(typeof _DC_ === "number")
               {if(0 === _DC_)return 0}
              else
               if(10 === _DC_[0])
                {var t$0=_DC_[1];
                 if(same$0(t,t$0))return 0;
                 throw [0,Assert_failure,_dV_]}
              throw [0,Assert_failure,_dU_]}),
         main_fun=
          check
           (function(main)
             {var _DB_=main[4];
              if(typeof _DB_ === "number")
               {if(0 === _DB_)return 0}
              else
               if(11 === _DB_[0])
                {var t$0=_DB_[1];
                 if(same$0(t,t$0))return 0;
                 throw [0,Assert_failure,_dX_]}
              throw [0,Assert_failure,_dW_]});
        caml_call1(main_fun,main$14);
        caml_call1(lhs_change_fun,lhs_change$2);
        return 0}
      function _Dy_(param){return _dY_}
      function _Dz_(_DA_){return sexp_of_t$23(_Dy_,_DA_)}
      return caml_call4(Base_Invariant[1],_dZ_,t,_Dz_,_Dx_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$61);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Join=[0,invariant$15,sexp_of_t$23];
    caml_register_global(1190,Incremental_Join,"Incremental__Join");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$62);
    caml_call1(Expect_test_collector[4][1],cst_src_snapshot_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$63,cst$20);
    function before(r){return r[3]}
    function main$15(r){return r[1]}
    function _d0_(r,v){return [0,r[1],r[2],v,r[4],r[5]]}
    var
     _d1_=0,
     before$0=[0,function(param){return 0},cst_before,_d1_,before,_d0_];
    function _d2_(r,v){return [0,v,r[2],r[3],r[4],r[5]]}
    var
     _d3_=0,
     main$16=[0,function(param){return 0},cst_main$7,_d3_,main$15,_d2_];
    function sexp_of_t$24(of_a,param)
     {var
       v_clock=param[5],
       v_value_at=param[4],
       v_before=param[3],
       v_at=param[2],
       v_main=param[1],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_d4_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],of_a,v_value_at),
       bnds$0=[0,[1,[0,_d5_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_a,v_before),
       bnds$1=[0,[1,[0,_d6_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Time_ns[88],v_at),
       bnds$2=[0,[1,[0,_d7_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],of_a,v_main),
       bnds$3=[0,[1,[0,_d8_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function invariant$16(invariant_a,t)
     {function _Ds_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         before_fun=check(invariant_a),
         main_fun=
          check
           (function(main)
             {if(is_top(main[11]))
               {var _Dw_=main[4];
                if(typeof _Dw_ === "number")
                 {if(0 === _Dw_)return 0}
                else
                 switch(_Dw_[0])
                  {case 5:return 0;
                   case 13:
                    var t$0=_Dw_[1];
                    if(caml_call2(Core_kernel[234],t,t$0))return 0;
                    throw [0,Assert_failure,_d__]
                   }
                throw [0,Assert_failure,_d9_]}
              throw [0,Assert_failure,_d$_]});
        caml_call1(main_fun,main$16);
        caml_call1(before_fun,before$0);
        return 0}
      function _Dt_(param){return _ea_}
      function _Du_(_Dv_){return sexp_of_t$24(_Dt_,_Dv_)}
      return caml_call4(Base_Invariant[1],_eb_,t,_Du_,_Ds_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$64);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Snapshot=[0,invariant$16,sexp_of_t$24];
    caml_register_global(1191,Incremental_Snapshot,"Incremental__Snapshot");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$65);
    caml_call1(Expect_test_collector[4][1],cst_src_kind_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$66,cst$21);
    function sexp_of_t$25(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_ec_:_ed_;
      else
       switch(param[0])
        {case 0:
          var
           v0=param[1],
           v0$0=sexp_of_t$15(function(param){return _ee_},of_a,v0);
          return [1,[0,_ef_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=sexp_of_t$16(v0$1);
          return [1,[0,_eg_,[0,v0$2,0]]];
         case 2:
          var v0$3=param[1],v0$4=sexp_of_t$17(v0$3);
          return [1,[0,_eh_,[0,v0$4,0]]];
         case 3:
          var
           v0$5=param[1],
           _A7_=function(param){return _ei_},
           v0$6=sexp_of_t$18(function(param){return _ej_},_A7_,v0$5);
          return [1,[0,_ek_,[0,v0$6,0]]];
         case 4:
          var
           v0$7=param[1],
           v0$8=sexp_of_t$18(function(param){return _el_},of_a,v0$7);
          return [1,[0,_em_,[0,v0$8,0]]];
         case 5:
          var v0$9=param[1],v0$10=caml_call1(of_a,v0$9);
          return [1,[0,_en_,[0,v0$10,0]]];
         case 6:
          var v0$11=param[1],v0$12=sexp_of_t$20(of_a,v0$11);
          return [1,[0,_eo_,[0,v0$12,0]]];
         case 7:
          var v0$13=param[1],v0$14=sexp_of_t$21(of_a,v0$13);
          return [1,[0,_ep_,[0,v0$14,0]]];
         case 8:
          var
           v0$15=param[1],
           v0$16=sexp_of_t$22(function(param){return _eq_},v0$15);
          return [1,[0,_er_,[0,v0$16,0]]];
         case 9:
          var v0$17=param[1],v0$18=sexp_of_t$22(of_a,v0$17);
          return [1,[0,_es_,[0,v0$18,0]]];
         case 10:
          var
           v0$19=param[1],
           v0$20=sexp_of_t$23(function(param){return _et_},v0$19);
          return [1,[0,_eu_,[0,v0$20,0]]];
         case 11:
          var v0$21=param[1],v0$22=sexp_of_t$23(of_a,v0$21);
          return [1,[0,_ev_,[0,v0$22,0]]];
         case 12:
          var
           v1=param[2],
           _A8_=function(_Dq_){return 0},
           v0$23=caml_call1(Sexplib0_Sexp_conv[24],_A8_),
           _A9_=function(param){return _ew_},
           v1$0=caml_call2(Node[1],_A9_,v1);
          return [1,[0,_ex_,[0,v0$23,[0,v1$0,0]]]];
         case 13:
          var v0$24=param[1],v0$25=sexp_of_t$24(of_a,v0$24);
          return [1,[0,_ey_,[0,v0$25,0]]];
         case 14:
          var v0$26=param[1],v0$27=sexp_of_t$14(of_a,v0$26);
          return [1,[0,_ez_,[0,v0$27,0]]];
         case 15:
          var
           v0$28=param[1],
           v0$29=sexp_of_t$12(function(param){return _eA_},of_a,v0$28);
          return [1,[0,_eB_,[0,v0$29,0]]];
         case 16:
          var v0$30=param[1],v0$31=sexp_of_t$9(of_a,v0$30);
          return [1,[0,_eC_,[0,v0$31,0]]];
         case 17:
          var
           v2=param[3],
           v1$1=param[2],
           _A__=function(_Dp_){return 0},
           v0$32=caml_call1(Sexplib0_Sexp_conv[24],_A__),
           _A$_=function(param){return _eD_},
           v1$2=caml_call2(Node[1],_A$_,v1$1),
           _Ba_=function(param){return _eE_},
           v2$0=caml_call2(Node[1],_Ba_,v2);
          return [1,[0,_eF_,[0,v0$32,[0,v1$2,[0,v2$0,0]]]]];
         case 18:
          var
           v3=param[4],
           v2$1=param[3],
           v1$3=param[2],
           _Bb_=function(_Do_){return 0},
           v0$33=caml_call1(Sexplib0_Sexp_conv[24],_Bb_),
           _Bc_=function(param){return _eG_},
           v1$4=caml_call2(Node[1],_Bc_,v1$3),
           _Bd_=function(param){return _eH_},
           v2$2=caml_call2(Node[1],_Bd_,v2$1),
           _Be_=function(param){return _eI_},
           v3$0=caml_call2(Node[1],_Be_,v3);
          return [1,[0,_eJ_,[0,v0$33,[0,v1$4,[0,v2$2,[0,v3$0,0]]]]]];
         case 19:
          var
           v4=param[5],
           v3$1=param[4],
           v2$3=param[3],
           v1$5=param[2],
           _Bf_=function(_Dn_){return 0},
           v0$34=caml_call1(Sexplib0_Sexp_conv[24],_Bf_),
           _Bg_=function(param){return _eK_},
           v1$6=caml_call2(Node[1],_Bg_,v1$5),
           _Bh_=function(param){return _eL_},
           v2$4=caml_call2(Node[1],_Bh_,v2$3),
           _Bi_=function(param){return _eM_},
           v3$2=caml_call2(Node[1],_Bi_,v3$1),
           _Bj_=function(param){return _eN_},
           v4$0=caml_call2(Node[1],_Bj_,v4);
          return [1,[0,_eO_,[0,v0$34,[0,v1$6,[0,v2$4,[0,v3$2,[0,v4$0,0]]]]]]];
         case 20:
          var
           v5=param[6],
           v4$1=param[5],
           v3$3=param[4],
           v2$5=param[3],
           v1$7=param[2],
           _Bk_=function(_Dm_){return 0},
           v0$35=caml_call1(Sexplib0_Sexp_conv[24],_Bk_),
           _Bl_=function(param){return _eP_},
           v1$8=caml_call2(Node[1],_Bl_,v1$7),
           _Bm_=function(param){return _eQ_},
           v2$6=caml_call2(Node[1],_Bm_,v2$5),
           _Bn_=function(param){return _eR_},
           v3$4=caml_call2(Node[1],_Bn_,v3$3),
           _Bo_=function(param){return _eS_},
           v4$2=caml_call2(Node[1],_Bo_,v4$1),
           _Bp_=function(param){return _eT_},
           v5$0=caml_call2(Node[1],_Bp_,v5);
          return [1,
                  [0,
                   _eU_,
                   [0,v0$35,[0,v1$8,[0,v2$6,[0,v3$4,[0,v4$2,[0,v5$0,0]]]]]]]];
         case 21:
          var
           v6=param[7],
           v5$1=param[6],
           v4$3=param[5],
           v3$5=param[4],
           v2$7=param[3],
           v1$9=param[2],
           _Bq_=function(_Dl_){return 0},
           v0$36=caml_call1(Sexplib0_Sexp_conv[24],_Bq_),
           _Br_=function(param){return _eV_},
           v1$10=caml_call2(Node[1],_Br_,v1$9),
           _Bs_=function(param){return _eW_},
           v2$8=caml_call2(Node[1],_Bs_,v2$7),
           _Bt_=function(param){return _eX_},
           v3$6=caml_call2(Node[1],_Bt_,v3$5),
           _Bu_=function(param){return _eY_},
           v4$4=caml_call2(Node[1],_Bu_,v4$3),
           _Bv_=function(param){return _eZ_},
           v5$2=caml_call2(Node[1],_Bv_,v5$1),
           _Bw_=function(param){return _e0_},
           v6$0=caml_call2(Node[1],_Bw_,v6);
          return [1,
                  [0,
                   _e1_,
                   [0,
                    v0$36,
                    [0,v1$10,[0,v2$8,[0,v3$6,[0,v4$4,[0,v5$2,[0,v6$0,0]]]]]]]]];
         case 22:
          var
           v7=param[8],
           v6$1=param[7],
           v5$3=param[6],
           v4$5=param[5],
           v3$7=param[4],
           v2$9=param[3],
           v1$11=param[2],
           _Bx_=function(_Dk_){return 0},
           v0$37=caml_call1(Sexplib0_Sexp_conv[24],_Bx_),
           _By_=function(param){return _e2_},
           v1$12=caml_call2(Node[1],_By_,v1$11),
           _Bz_=function(param){return _e3_},
           v2$10=caml_call2(Node[1],_Bz_,v2$9),
           _BA_=function(param){return _e4_},
           v3$8=caml_call2(Node[1],_BA_,v3$7),
           _BB_=function(param){return _e5_},
           v4$6=caml_call2(Node[1],_BB_,v4$5),
           _BC_=function(param){return _e6_},
           v5$4=caml_call2(Node[1],_BC_,v5$3),
           _BD_=function(param){return _e7_},
           v6$2=caml_call2(Node[1],_BD_,v6$1),
           _BE_=function(param){return _e8_},
           v7$0=caml_call2(Node[1],_BE_,v7);
          return [1,
                  [0,
                   _e9_,
                   [0,
                    v0$37,
                    [0,
                     v1$12,
                     [0,v2$10,[0,v3$8,[0,v4$6,[0,v5$4,[0,v6$2,[0,v7$0,0]]]]]]]]]];
         case 23:
          var
           v8=param[9],
           v7$1=param[8],
           v6$3=param[7],
           v5$5=param[6],
           v4$7=param[5],
           v3$9=param[4],
           v2$11=param[3],
           v1$13=param[2],
           _BF_=function(_Dj_){return 0},
           v0$38=caml_call1(Sexplib0_Sexp_conv[24],_BF_),
           _BG_=function(param){return _e__},
           v1$14=caml_call2(Node[1],_BG_,v1$13),
           _BH_=function(param){return _e$_},
           v2$12=caml_call2(Node[1],_BH_,v2$11),
           _BI_=function(param){return _fa_},
           v3$10=caml_call2(Node[1],_BI_,v3$9),
           _BJ_=function(param){return _fb_},
           v4$8=caml_call2(Node[1],_BJ_,v4$7),
           _BK_=function(param){return _fc_},
           v5$6=caml_call2(Node[1],_BK_,v5$5),
           _BL_=function(param){return _fd_},
           v6$4=caml_call2(Node[1],_BL_,v6$3),
           _BM_=function(param){return _fe_},
           v7$2=caml_call2(Node[1],_BM_,v7$1),
           _BN_=function(param){return _ff_},
           v8$0=caml_call2(Node[1],_BN_,v8);
          return [1,
                  [0,
                   _fg_,
                   [0,
                    v0$38,
                    [0,
                     v1$14,
                     [0,
                      v2$12,
                      [0,v3$10,[0,v4$8,[0,v5$6,[0,v6$4,[0,v7$2,[0,v8$0,0]]]]]]]]]]];
         case 24:
          var
           v9=param[10],
           v8$1=param[9],
           v7$3=param[8],
           v6$5=param[7],
           v5$7=param[6],
           v4$9=param[5],
           v3$11=param[4],
           v2$13=param[3],
           v1$15=param[2],
           _BO_=function(_Di_){return 0},
           v0$39=caml_call1(Sexplib0_Sexp_conv[24],_BO_),
           _BP_=function(param){return _fh_},
           v1$16=caml_call2(Node[1],_BP_,v1$15),
           _BQ_=function(param){return _fi_},
           v2$14=caml_call2(Node[1],_BQ_,v2$13),
           _BR_=function(param){return _fj_},
           v3$12=caml_call2(Node[1],_BR_,v3$11),
           _BS_=function(param){return _fk_},
           v4$10=caml_call2(Node[1],_BS_,v4$9),
           _BT_=function(param){return _fl_},
           v5$8=caml_call2(Node[1],_BT_,v5$7),
           _BU_=function(param){return _fm_},
           v6$6=caml_call2(Node[1],_BU_,v6$5),
           _BV_=function(param){return _fn_},
           v7$4=caml_call2(Node[1],_BV_,v7$3),
           _BW_=function(param){return _fo_},
           v8$2=caml_call2(Node[1],_BW_,v8$1),
           _BX_=function(param){return _fp_},
           v9$0=caml_call2(Node[1],_BX_,v9);
          return [1,
                  [0,
                   _fq_,
                   [0,
                    v0$39,
                    [0,
                     v1$16,
                     [0,
                      v2$14,
                      [0,
                       v3$12,
                       [0,v4$10,[0,v5$8,[0,v6$6,[0,v7$4,[0,v8$2,[0,v9$0,0]]]]]]]]]]]];
         case 25:
          var
           v10=param[11],
           v9$1=param[10],
           v8$3=param[9],
           v7$5=param[8],
           v6$7=param[7],
           v5$9=param[6],
           v4$11=param[5],
           v3$13=param[4],
           v2$15=param[3],
           v1$17=param[2],
           _BY_=function(_Dh_){return 0},
           v0$40=caml_call1(Sexplib0_Sexp_conv[24],_BY_),
           _BZ_=function(param){return _fr_},
           v1$18=caml_call2(Node[1],_BZ_,v1$17),
           _B0_=function(param){return _fs_},
           v2$16=caml_call2(Node[1],_B0_,v2$15),
           _B1_=function(param){return _ft_},
           v3$14=caml_call2(Node[1],_B1_,v3$13),
           _B2_=function(param){return _fu_},
           v4$12=caml_call2(Node[1],_B2_,v4$11),
           _B3_=function(param){return _fv_},
           v5$10=caml_call2(Node[1],_B3_,v5$9),
           _B4_=function(param){return _fw_},
           v6$8=caml_call2(Node[1],_B4_,v6$7),
           _B5_=function(param){return _fx_},
           v7$6=caml_call2(Node[1],_B5_,v7$5),
           _B6_=function(param){return _fy_},
           v8$4=caml_call2(Node[1],_B6_,v8$3),
           _B7_=function(param){return _fz_},
           v9$2=caml_call2(Node[1],_B7_,v9$1),
           _B8_=function(param){return _fA_},
           v10$0=caml_call2(Node[1],_B8_,v10);
          return [1,
                  [0,
                   _fB_,
                   [0,
                    v0$40,
                    [0,
                     v1$18,
                     [0,
                      v2$16,
                      [0,
                       v3$14,
                       [0,
                        v4$12,
                        [0,v5$10,[0,v6$8,[0,v7$6,[0,v8$4,[0,v9$2,[0,v10$0,0]]]]]]]]]]]]];
         case 26:
          var
           v11=param[12],
           v10$1=param[11],
           v9$3=param[10],
           v8$5=param[9],
           v7$7=param[8],
           v6$9=param[7],
           v5$11=param[6],
           v4$13=param[5],
           v3$15=param[4],
           v2$17=param[3],
           v1$19=param[2],
           _B9_=function(_Dg_){return 0},
           v0$41=caml_call1(Sexplib0_Sexp_conv[24],_B9_),
           _B__=function(param){return _fC_},
           v1$20=caml_call2(Node[1],_B__,v1$19),
           _B$_=function(param){return _fD_},
           v2$18=caml_call2(Node[1],_B$_,v2$17),
           _Ca_=function(param){return _fE_},
           v3$16=caml_call2(Node[1],_Ca_,v3$15),
           _Cb_=function(param){return _fF_},
           v4$14=caml_call2(Node[1],_Cb_,v4$13),
           _Cc_=function(param){return _fG_},
           v5$12=caml_call2(Node[1],_Cc_,v5$11),
           _Cd_=function(param){return _fH_},
           v6$10=caml_call2(Node[1],_Cd_,v6$9),
           _Ce_=function(param){return _fI_},
           v7$8=caml_call2(Node[1],_Ce_,v7$7),
           _Cf_=function(param){return _fJ_},
           v8$6=caml_call2(Node[1],_Cf_,v8$5),
           _Cg_=function(param){return _fK_},
           v9$4=caml_call2(Node[1],_Cg_,v9$3),
           _Ch_=function(param){return _fL_},
           v10$2=caml_call2(Node[1],_Ch_,v10$1),
           _Ci_=function(param){return _fM_},
           v11$0=caml_call2(Node[1],_Ci_,v11);
          return [1,
                  [0,
                   _fN_,
                   [0,
                    v0$41,
                    [0,
                     v1$20,
                     [0,
                      v2$18,
                      [0,
                       v3$16,
                       [0,
                        v4$14,
                        [0,
                         v5$12,
                         [0,v6$10,[0,v7$8,[0,v8$6,[0,v9$4,[0,v10$2,[0,v11$0,0]]]]]]]]]]]]]];
         case 27:
          var
           v12=param[13],
           v11$1=param[12],
           v10$3=param[11],
           v9$5=param[10],
           v8$7=param[9],
           v7$9=param[8],
           v6$11=param[7],
           v5$13=param[6],
           v4$15=param[5],
           v3$17=param[4],
           v2$19=param[3],
           v1$21=param[2],
           _Cj_=function(_Df_){return 0},
           v0$42=caml_call1(Sexplib0_Sexp_conv[24],_Cj_),
           _Ck_=function(param){return _fO_},
           v1$22=caml_call2(Node[1],_Ck_,v1$21),
           _Cl_=function(param){return _fP_},
           v2$20=caml_call2(Node[1],_Cl_,v2$19),
           _Cm_=function(param){return _fQ_},
           v3$18=caml_call2(Node[1],_Cm_,v3$17),
           _Cn_=function(param){return _fR_},
           v4$16=caml_call2(Node[1],_Cn_,v4$15),
           _Co_=function(param){return _fS_},
           v5$14=caml_call2(Node[1],_Co_,v5$13),
           _Cp_=function(param){return _fT_},
           v6$12=caml_call2(Node[1],_Cp_,v6$11),
           _Cq_=function(param){return _fU_},
           v7$10=caml_call2(Node[1],_Cq_,v7$9),
           _Cr_=function(param){return _fV_},
           v8$8=caml_call2(Node[1],_Cr_,v8$7),
           _Cs_=function(param){return _fW_},
           v9$6=caml_call2(Node[1],_Cs_,v9$5),
           _Ct_=function(param){return _fX_},
           v10$4=caml_call2(Node[1],_Ct_,v10$3),
           _Cu_=function(param){return _fY_},
           v11$2=caml_call2(Node[1],_Cu_,v11$1),
           _Cv_=function(param){return _fZ_},
           v12$0=caml_call2(Node[1],_Cv_,v12);
          return [1,
                  [0,
                   _f0_,
                   [0,
                    v0$42,
                    [0,
                     v1$22,
                     [0,
                      v2$20,
                      [0,
                       v3$18,
                       [0,
                        v4$16,
                        [0,
                         v5$14,
                         [0,
                          v6$12,
                          [0,v7$10,[0,v8$8,[0,v9$6,[0,v10$4,[0,v11$2,[0,v12$0,0]]]]]]]]]]]]]]];
         case 28:
          var
           v13=param[14],
           v12$1=param[13],
           v11$3=param[12],
           v10$5=param[11],
           v9$7=param[10],
           v8$9=param[9],
           v7$11=param[8],
           v6$13=param[7],
           v5$15=param[6],
           v4$17=param[5],
           v3$19=param[4],
           v2$21=param[3],
           v1$23=param[2],
           _Cw_=function(_De_){return 0},
           v0$43=caml_call1(Sexplib0_Sexp_conv[24],_Cw_),
           _Cx_=function(param){return _f1_},
           v1$24=caml_call2(Node[1],_Cx_,v1$23),
           _Cy_=function(param){return _f2_},
           v2$22=caml_call2(Node[1],_Cy_,v2$21),
           _Cz_=function(param){return _f3_},
           v3$20=caml_call2(Node[1],_Cz_,v3$19),
           _CA_=function(param){return _f4_},
           v4$18=caml_call2(Node[1],_CA_,v4$17),
           _CB_=function(param){return _f5_},
           v5$16=caml_call2(Node[1],_CB_,v5$15),
           _CC_=function(param){return _f6_},
           v6$14=caml_call2(Node[1],_CC_,v6$13),
           _CD_=function(param){return _f7_},
           v7$12=caml_call2(Node[1],_CD_,v7$11),
           _CE_=function(param){return _f8_},
           v8$10=caml_call2(Node[1],_CE_,v8$9),
           _CF_=function(param){return _f9_},
           v9$8=caml_call2(Node[1],_CF_,v9$7),
           _CG_=function(param){return _f__},
           v10$6=caml_call2(Node[1],_CG_,v10$5),
           _CH_=function(param){return _f$_},
           v11$4=caml_call2(Node[1],_CH_,v11$3),
           _CI_=function(param){return _ga_},
           v12$2=caml_call2(Node[1],_CI_,v12$1),
           _CJ_=function(param){return _gb_},
           v13$0=caml_call2(Node[1],_CJ_,v13);
          return [1,
                  [0,
                   _gc_,
                   [0,
                    v0$43,
                    [0,
                     v1$24,
                     [0,
                      v2$22,
                      [0,
                       v3$20,
                       [0,
                        v4$18,
                        [0,
                         v5$16,
                         [0,
                          v6$14,
                          [0,
                           v7$12,
                           [0,v8$10,[0,v9$8,[0,v10$6,[0,v11$4,[0,v12$2,[0,v13$0,0]]]]]]]]]]]]]]]];
         case 29:
          var
           v14=param[15],
           v13$1=param[14],
           v12$3=param[13],
           v11$5=param[12],
           v10$7=param[11],
           v9$9=param[10],
           v8$11=param[9],
           v7$13=param[8],
           v6$15=param[7],
           v5$17=param[6],
           v4$19=param[5],
           v3$21=param[4],
           v2$23=param[3],
           v1$25=param[2],
           _CK_=function(_Dd_){return 0},
           v0$44=caml_call1(Sexplib0_Sexp_conv[24],_CK_),
           _CL_=function(param){return _gd_},
           v1$26=caml_call2(Node[1],_CL_,v1$25),
           _CM_=function(param){return _ge_},
           v2$24=caml_call2(Node[1],_CM_,v2$23),
           _CN_=function(param){return _gf_},
           v3$22=caml_call2(Node[1],_CN_,v3$21),
           _CO_=function(param){return _gg_},
           v4$20=caml_call2(Node[1],_CO_,v4$19),
           _CP_=function(param){return _gh_},
           v5$18=caml_call2(Node[1],_CP_,v5$17),
           _CQ_=function(param){return _gi_},
           v6$16=caml_call2(Node[1],_CQ_,v6$15),
           _CR_=function(param){return _gj_},
           v7$14=caml_call2(Node[1],_CR_,v7$13),
           _CS_=function(param){return _gk_},
           v8$12=caml_call2(Node[1],_CS_,v8$11),
           _CT_=function(param){return _gl_},
           v9$10=caml_call2(Node[1],_CT_,v9$9),
           _CU_=function(param){return _gm_},
           v10$8=caml_call2(Node[1],_CU_,v10$7),
           _CV_=function(param){return _gn_},
           v11$6=caml_call2(Node[1],_CV_,v11$5),
           _CW_=function(param){return _go_},
           v12$4=caml_call2(Node[1],_CW_,v12$3),
           _CX_=function(param){return _gp_},
           v13$2=caml_call2(Node[1],_CX_,v13$1),
           _CY_=function(param){return _gq_},
           v14$0=caml_call2(Node[1],_CY_,v14);
          return [1,
                  [0,
                   _gr_,
                   [0,
                    v0$44,
                    [0,
                     v1$26,
                     [0,
                      v2$24,
                      [0,
                       v3$22,
                       [0,
                        v4$20,
                        [0,
                         v5$18,
                         [0,
                          v6$16,
                          [0,
                           v7$14,
                           [0,
                            v8$12,
                            [0,
                             v9$10,
                             [0,v10$8,[0,v11$6,[0,v12$4,[0,v13$2,[0,v14$0,0]]]]]]]]]]]]]]]]];
         default:
          var
           v15=param[16],
           v14$1=param[15],
           v13$3=param[14],
           v12$5=param[13],
           v11$7=param[12],
           v10$9=param[11],
           v9$11=param[10],
           v8$13=param[9],
           v7$15=param[8],
           v6$17=param[7],
           v5$19=param[6],
           v4$21=param[5],
           v3$23=param[4],
           v2$25=param[3],
           v1$27=param[2],
           _CZ_=function(_Dr_){return 0},
           v0$45=caml_call1(Sexplib0_Sexp_conv[24],_CZ_),
           _C0_=function(param){return _gs_},
           v1$28=caml_call2(Node[1],_C0_,v1$27),
           _C1_=function(param){return _gt_},
           v2$26=caml_call2(Node[1],_C1_,v2$25),
           _C2_=function(param){return _gu_},
           v3$24=caml_call2(Node[1],_C2_,v3$23),
           _C3_=function(param){return _gv_},
           v4$22=caml_call2(Node[1],_C3_,v4$21),
           _C4_=function(param){return _gw_},
           v5$20=caml_call2(Node[1],_C4_,v5$19),
           _C5_=function(param){return _gx_},
           v6$18=caml_call2(Node[1],_C5_,v6$17),
           _C6_=function(param){return _gy_},
           v7$16=caml_call2(Node[1],_C6_,v7$15),
           _C7_=function(param){return _gz_},
           v8$14=caml_call2(Node[1],_C7_,v8$13),
           _C8_=function(param){return _gA_},
           v9$12=caml_call2(Node[1],_C8_,v9$11),
           _C9_=function(param){return _gB_},
           v10$10=caml_call2(Node[1],_C9_,v10$9),
           _C__=function(param){return _gC_},
           v11$8=caml_call2(Node[1],_C__,v11$7),
           _C$_=function(param){return _gD_},
           v12$6=caml_call2(Node[1],_C$_,v12$5),
           _Da_=function(param){return _gE_},
           v13$4=caml_call2(Node[1],_Da_,v13$3),
           _Db_=function(param){return _gF_},
           v14$2=caml_call2(Node[1],_Db_,v14$1),
           _Dc_=function(param){return _gG_},
           v15$0=caml_call2(Node[1],_Dc_,v15);
          return [1,
                  [0,
                   _gH_,
                   [0,
                    v0$45,
                    [0,
                     v1$28,
                     [0,
                      v2$26,
                      [0,
                       v3$24,
                       [0,
                        v4$22,
                        [0,
                         v5$20,
                         [0,
                          v6$18,
                          [0,
                           v7$16,
                           [0,
                            v8$14,
                            [0,
                             v9$12,
                             [0,
                              v10$10,
                              [0,v11$8,[0,v12$6,[0,v13$4,[0,v14$2,[0,v15$0,0]]]]]]]]]]]]]]]]]]}}
    function name(param)
     {if(typeof param === "number")
       return 0 === param?cst_Invalid:cst_Uninitialized;
      else
       switch(param[0])
        {case 0:return cst_Array_fold;
         case 1:return cst_At;
         case 2:return cst_At_intervals;
         case 3:return cst_Bind_lhs_change;
         case 4:return cst_Bind_main;
         case 5:return cst_Const;
         case 6:return cst_Expert;
         case 7:return cst_Freeze;
         case 8:return cst_If_test_change;
         case 9:return cst_If_then_else;
         case 10:return cst_Join_lhs_change;
         case 11:return cst_Join_main;
         case 12:return cst_Map;
         case 13:return cst_Snapshot;
         case 14:return cst_Step_function;
         case 15:return cst_Unordered_array_fold;
         case 16:return cst_Var;
         case 17:return cst_Map2;
         case 18:return cst_Map3;
         case 19:return cst_Map4;
         case 20:return cst_Map5;
         case 21:return cst_Map6;
         case 22:return cst_Map7;
         case 23:return cst_Map8;
         case 24:return cst_Map9;
         case 25:return cst_Map10;
         case 26:return cst_Map11;
         case 27:return cst_Map12;
         case 28:return cst_Map13;
         case 29:return cst_Map14;
         default:return cst_Map15}}
    function invariant$17(invariant_a,t)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var array_fold=t[1];
          return invariant$7(function(_A6_){return 0},invariant_a,array_fold);
         case 1:var at=t[1];return invariant$8(at);
         case 2:var at_intervals=t[1];return invariant$9(at_intervals);
         case 3:
          var bind=t[1],_AY_=function(_A5_){return 0};
          return invariant$10(function(_A4_){return 0},_AY_,bind);
         case 4:
          var bind$0=t[1];
          return invariant$10(function(_A3_){return 0},invariant_a,bind$0);
         case 5:var a=t[1];return caml_call1(invariant_a,a);
         case 6:var e=t[1];return invariant$11(invariant_a,e);
         case 7:var freeze=t[1];return invariant$13(invariant_a,freeze);
         case 8:
          var if_then_else=t[1];
          return invariant$14(function(_A2_){return 0},if_then_else);
         case 9:
          var if_then_else$0=t[1];
          return invariant$14(invariant_a,if_then_else$0);
         case 10:
          var join=t[1];return invariant$15(function(_A1_){return 0},join);
         case 11:var join$0=t[1];return invariant$15(invariant_a,join$0);
         case 13:var snapshot=t[1];return invariant$16(invariant_a,snapshot);
         case 14:
          var step_function_node=t[1];
          return invariant$6(invariant_a,step_function_node);
         case 15:
          var unordered_array_fold=t[1];
          return invariant$4
                  (function(_A0_){return 0},invariant_a,unordered_array_fold);
         case 16:
          var var$0=t[1];return invariant$3(function(_AZ_){return 0},var$0);
         default:return 0}}
    function initial_num_children(t)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var match=t[1],children=match[3];
          return caml_call1(Array[17],children);
         case 1:return 0;
         case 2:return 0;
         case 3:return 1;
         case 4:return 2;
         case 5:return 0;
         case 6:return 0;
         case 7:return 1;
         case 8:return 1;
         case 9:return 2;
         case 10:return 1;
         case 11:return 2;
         case 12:return 1;
         case 13:return 0;
         case 14:return 1;
         case 15:
          var match$0=t[1],children$0=match$0[6];
          return caml_call1(Array[17],children$0);
         case 16:return 0;
         case 17:return 2;
         case 18:return 3;
         case 19:return 4;
         case 20:return 5;
         case 21:return 6;
         case 22:return 7;
         case 23:return 8;
         case 24:return 9;
         case 25:return 10;
         case 26:return 11;
         case 27:return 12;
         case 28:return 13;
         case 29:return 14;
         default:return 15}}
    var
     bind_rhs_child_index=1,
     freeze_child_index=0,
     if_branch_child_index=1,
     join_rhs_child_index=1;
    function iteri_children(t,f)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var
           match=t[1],
           children=match[3],
           _AM_=caml_call1(Array[17],children) - 1 | 0,
           _AL_=0;
          if(! (_AM_ < 0))
           {var i=_AL_;
            for(;;)
             {caml_call2(f,i,children[1 + i]);
              var _AN_=i + 1 | 0;
              if(_AM_ !== i){var i=_AN_;continue}
              break}}
          return 0;
         case 1:return 0;
         case 2:return 0;
         case 3:var bind=t[1];return caml_call2(f,0,bind[3]);
         case 4:
          var match$0=t[1],lhs_change=match$0[4],rhs=match$0[5];
          caml_call2(f,0,lhs_change);
          var _AO_=caml_call1(Uopt[6],rhs);
          return _AO_?caml_call2(f,1,caml_call1(Uopt[9],rhs)):_AO_;
         case 5:return 0;
         case 6:
          var
           match$1=t[1],
           children$0=match$1[3],
           num_children=match$1[4],
           _AQ_=num_children - 1 | 0,
           _AP_=0;
          if(! (_AQ_ < 0))
           {var i$0=_AP_;
            for(;;)
             {var r=caml_call1(Uopt[7],children$0[1 + i$0]);
              caml_call2(f,i$0,r[1]);
              var _AR_=i$0 + 1 | 0;
              if(_AQ_ !== i$0){var i$0=_AR_;continue}
              break}}
          return 0;
         case 7:
          var match$2=t[1],child=match$2[2];return caml_call2(f,0,child);
         case 8:var match$3=t[1],test=match$3[2];return caml_call2(f,0,test);
         case 9:
          var match$4=t[1],test_change=match$4[3],current_branch=match$4[4];
          caml_call2(f,0,test_change);
          var _AS_=caml_call1(Uopt[6],current_branch);
          return _AS_?caml_call2(f,1,caml_call1(Uopt[9],current_branch)):_AS_;
         case 10:var match$5=t[1],lhs=match$5[2];return caml_call2(f,0,lhs);
         case 11:
          var match$6=t[1],lhs_change$0=match$6[3],rhs$0=match$6[4];
          caml_call2(f,0,lhs_change$0);
          var _AT_=caml_call1(Uopt[6],rhs$0);
          return _AT_?caml_call2(f,1,caml_call1(Uopt[9],rhs$0)):_AT_;
         case 12:var node0=t[2];return caml_call2(f,0,node0);
         case 13:return 0;
         case 14:
          var
           match$7=t[1],
           child$0=match$7[2],
           _AU_=caml_call1(Uopt[6],child$0);
          return _AU_?caml_call2(f,0,caml_call1(Uopt[9],child$0)):_AU_;
         case 15:
          var
           match$8=t[1],
           children$1=match$8[6],
           _AW_=caml_call1(Array[17],children$1) - 1 | 0,
           _AV_=0;
          if(! (_AW_ < 0))
           {var i$1=_AV_;
            for(;;)
             {caml_call2(f,i$1,children$1[1 + i$1]);
              var _AX_=i$1 + 1 | 0;
              if(_AW_ !== i$1){var i$1=_AX_;continue}
              break}}
          return 0;
         case 16:return 0;
         case 17:
          var node1=t[3],node0$0=t[2];
          caml_call2(f,0,node0$0);
          return caml_call2(f,1,node1);
         case 18:
          var node2=t[4],node1$0=t[3],node0$1=t[2];
          caml_call2(f,0,node0$1);
          caml_call2(f,1,node1$0);
          return caml_call2(f,2,node2);
         case 19:
          var node3=t[5],node2$0=t[4],node1$1=t[3],node0$2=t[2];
          caml_call2(f,0,node0$2);
          caml_call2(f,1,node1$1);
          caml_call2(f,2,node2$0);
          return caml_call2(f,3,node3);
         case 20:
          var node4=t[6],node3$0=t[5],node2$1=t[4],node1$2=t[3],node0$3=t[2];
          caml_call2(f,0,node0$3);
          caml_call2(f,1,node1$2);
          caml_call2(f,2,node2$1);
          caml_call2(f,3,node3$0);
          return caml_call2(f,4,node4);
         case 21:
          var
           node5=t[7],
           node4$0=t[6],
           node3$1=t[5],
           node2$2=t[4],
           node1$3=t[3],
           node0$4=t[2];
          caml_call2(f,0,node0$4);
          caml_call2(f,1,node1$3);
          caml_call2(f,2,node2$2);
          caml_call2(f,3,node3$1);
          caml_call2(f,4,node4$0);
          return caml_call2(f,5,node5);
         case 22:
          var
           node6=t[8],
           node5$0=t[7],
           node4$1=t[6],
           node3$2=t[5],
           node2$3=t[4],
           node1$4=t[3],
           node0$5=t[2];
          caml_call2(f,0,node0$5);
          caml_call2(f,1,node1$4);
          caml_call2(f,2,node2$3);
          caml_call2(f,3,node3$2);
          caml_call2(f,4,node4$1);
          caml_call2(f,5,node5$0);
          return caml_call2(f,6,node6);
         case 23:
          var
           node7=t[9],
           node6$0=t[8],
           node5$1=t[7],
           node4$2=t[6],
           node3$3=t[5],
           node2$4=t[4],
           node1$5=t[3],
           node0$6=t[2];
          caml_call2(f,0,node0$6);
          caml_call2(f,1,node1$5);
          caml_call2(f,2,node2$4);
          caml_call2(f,3,node3$3);
          caml_call2(f,4,node4$2);
          caml_call2(f,5,node5$1);
          caml_call2(f,6,node6$0);
          return caml_call2(f,7,node7);
         case 24:
          var
           node8=t[10],
           node7$0=t[9],
           node6$1=t[8],
           node5$2=t[7],
           node4$3=t[6],
           node3$4=t[5],
           node2$5=t[4],
           node1$6=t[3],
           node0$7=t[2];
          caml_call2(f,0,node0$7);
          caml_call2(f,1,node1$6);
          caml_call2(f,2,node2$5);
          caml_call2(f,3,node3$4);
          caml_call2(f,4,node4$3);
          caml_call2(f,5,node5$2);
          caml_call2(f,6,node6$1);
          caml_call2(f,7,node7$0);
          return caml_call2(f,8,node8);
         case 25:
          var
           node9=t[11],
           node8$0=t[10],
           node7$1=t[9],
           node6$2=t[8],
           node5$3=t[7],
           node4$4=t[6],
           node3$5=t[5],
           node2$6=t[4],
           node1$7=t[3],
           node0$8=t[2];
          caml_call2(f,0,node0$8);
          caml_call2(f,1,node1$7);
          caml_call2(f,2,node2$6);
          caml_call2(f,3,node3$5);
          caml_call2(f,4,node4$4);
          caml_call2(f,5,node5$3);
          caml_call2(f,6,node6$2);
          caml_call2(f,7,node7$1);
          caml_call2(f,8,node8$0);
          return caml_call2(f,9,node9);
         case 26:
          var
           node10=t[12],
           node9$0=t[11],
           node8$1=t[10],
           node7$2=t[9],
           node6$3=t[8],
           node5$4=t[7],
           node4$5=t[6],
           node3$6=t[5],
           node2$7=t[4],
           node1$8=t[3],
           node0$9=t[2];
          caml_call2(f,0,node0$9);
          caml_call2(f,1,node1$8);
          caml_call2(f,2,node2$7);
          caml_call2(f,3,node3$6);
          caml_call2(f,4,node4$5);
          caml_call2(f,5,node5$4);
          caml_call2(f,6,node6$3);
          caml_call2(f,7,node7$2);
          caml_call2(f,8,node8$1);
          caml_call2(f,9,node9$0);
          return caml_call2(f,10,node10);
         case 27:
          var
           node11=t[13],
           node10$0=t[12],
           node9$1=t[11],
           node8$2=t[10],
           node7$3=t[9],
           node6$4=t[8],
           node5$5=t[7],
           node4$6=t[6],
           node3$7=t[5],
           node2$8=t[4],
           node1$9=t[3],
           node0$10=t[2];
          caml_call2(f,0,node0$10);
          caml_call2(f,1,node1$9);
          caml_call2(f,2,node2$8);
          caml_call2(f,3,node3$7);
          caml_call2(f,4,node4$6);
          caml_call2(f,5,node5$5);
          caml_call2(f,6,node6$4);
          caml_call2(f,7,node7$3);
          caml_call2(f,8,node8$2);
          caml_call2(f,9,node9$1);
          caml_call2(f,10,node10$0);
          return caml_call2(f,11,node11);
         case 28:
          var
           node12=t[14],
           node11$0=t[13],
           node10$1=t[12],
           node9$2=t[11],
           node8$3=t[10],
           node7$4=t[9],
           node6$5=t[8],
           node5$6=t[7],
           node4$7=t[6],
           node3$8=t[5],
           node2$9=t[4],
           node1$10=t[3],
           node0$11=t[2];
          caml_call2(f,0,node0$11);
          caml_call2(f,1,node1$10);
          caml_call2(f,2,node2$9);
          caml_call2(f,3,node3$8);
          caml_call2(f,4,node4$7);
          caml_call2(f,5,node5$6);
          caml_call2(f,6,node6$5);
          caml_call2(f,7,node7$4);
          caml_call2(f,8,node8$3);
          caml_call2(f,9,node9$2);
          caml_call2(f,10,node10$1);
          caml_call2(f,11,node11$0);
          return caml_call2(f,12,node12);
         case 29:
          var
           node13=t[15],
           node12$0=t[14],
           node11$1=t[13],
           node10$2=t[12],
           node9$3=t[11],
           node8$4=t[10],
           node7$5=t[9],
           node6$6=t[8],
           node5$7=t[7],
           node4$8=t[6],
           node3$9=t[5],
           node2$10=t[4],
           node1$11=t[3],
           node0$12=t[2];
          caml_call2(f,0,node0$12);
          caml_call2(f,1,node1$11);
          caml_call2(f,2,node2$10);
          caml_call2(f,3,node3$9);
          caml_call2(f,4,node4$8);
          caml_call2(f,5,node5$7);
          caml_call2(f,6,node6$6);
          caml_call2(f,7,node7$5);
          caml_call2(f,8,node8$4);
          caml_call2(f,9,node9$3);
          caml_call2(f,10,node10$2);
          caml_call2(f,11,node11$1);
          caml_call2(f,12,node12$0);
          return caml_call2(f,13,node13);
         default:
          var
           node14=t[16],
           node13$0=t[15],
           node12$1=t[14],
           node11$2=t[13],
           node10$3=t[12],
           node9$4=t[11],
           node8$5=t[10],
           node7$6=t[9],
           node6$7=t[8],
           node5$8=t[7],
           node4$9=t[6],
           node3$10=t[5],
           node2$11=t[4],
           node1$12=t[3],
           node0$13=t[2];
          caml_call2(f,0,node0$13);
          caml_call2(f,1,node1$12);
          caml_call2(f,2,node2$11);
          caml_call2(f,3,node3$10);
          caml_call2(f,4,node4$9);
          caml_call2(f,5,node5$8);
          caml_call2(f,6,node6$7);
          caml_call2(f,7,node7$6);
          caml_call2(f,8,node8$5);
          caml_call2(f,9,node9$4);
          caml_call2(f,10,node10$3);
          caml_call2(f,11,node11$2);
          caml_call2(f,12,node12$1);
          caml_call2(f,13,node13$0);
          return caml_call2(f,14,node14)}}
    function slow_get_child(t,index)
     {if(typeof t !== "number")
       switch(t[0])
        {case 0:
          var match=t[1],children=match[3];
          return caml_check_bound(children,index)[1 + index];
         case 6:
          var
           match$0=t[1],
           children$0=match$0[3],
           _AI_=caml_check_bound(children$0,index)[1 + index],
           match$1=caml_call1(Uopt[7],_AI_);
          return match$1[1];
         case 15:
          var match$2=t[1],children$1=match$2[6];
          return caml_check_bound(children$1,index)[1 + index]
         }
      function _AH_(r)
       {iteri_children
         (t,
          function(i,child)
           {var _AK_=caml_call2(symbol$1,i,index);
            return _AK_?caml_call1(r,child):_AK_});
        function _AJ_(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[339],v0),
           v1$0=sexp_of_t$25(function(param){return _gI_},v1);
          return [1,[0,v0$0,[0,v1$0,0]]]}
        return caml_call5
                (Core_kernel[224],
                 0,
                 _gJ_,
                 cst_Kind_slow_get_child_got_invalid_index,
                 [0,index,t],
                 _AJ_)}
      return caml_call1(Core_kernel[247],_AH_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$67);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Kind=
      [0,
       invariant$17,
       sexp_of_t$25,
       name,
       initial_num_children,
       slow_get_child,
       bind_rhs_child_index,
       freeze_child_index,
       if_branch_child_index,
       join_rhs_child_index,
       iteri_children];
    caml_register_global(1192,Incremental_Kind,"Incremental__Kind");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$68);
    caml_call1(Expect_test_collector[4][1],cst_src_node_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$69,cst$22);
    function user_info(r){return r[26]}
    function my_child_index_in_parent_at_index(r){return r[24]}
    function set_my_child_index_in_parent_at_index(r,v){r[24] = v;return 0}
    function my_parent_index_in_child_at_index(r){return r[23]}
    function set_my_parent_index_in_child_at_index(r,v){r[23] = v;return 0}
    function observers(r){return r[20]}
    function set_observers(r,v){r[20] = v;return 0}
    function old_value_opt(r){return r[19]}
    function set_old_value_opt(r,v){r[19] = v;return 0}
    function next_in_adjust_heights_heap(r){return r[18]}
    function set_next_in_adjust_heights_heap(r,v){r[18] = v;return 0}
    function height_in_adjust_heights_heap(r){return r[17]}
    function set_height_in_adjust_heights_heap(r,v){r[17] = v;return 0}
    function next_in_recompute_heap(r){return r[16]}
    function set_next_in_recompute_heap(r,v){r[16] = v;return 0}
    function prev_in_recompute_heap(r){return r[15]}
    function set_prev_in_recompute_heap(r,v){r[15] = v;return 0}
    function height_in_recompute_heap(r){return r[14]}
    function set_height_in_recompute_heap(r,v){r[14] = v;return 0}
    function height$0(r){return r[13]}
    function set_height(r,v){r[13] = v;return 0}
    function next_node_in_same_scope(r){return r[12]}
    function set_next_node_in_same_scope(r,v){r[12] = v;return 0}
    function created_in(r){return r[11]}
    function set_created_in(r,v){r[11] = v;return 0}
    function parent0(r){return r[10]}
    function set_parent0(r,v){r[10] = v;return 0}
    function parent1_and_beyond(r){return r[9]}
    function set_parent1_and_beyond(r,v){r[9] = v;return 0}
    function num_parents(r){return r[8]}
    function set_num_parents(r,v){r[8] = v;return 0}
    function num_on_update_handlers(r){return r[7]}
    function set_num_on_update_handlers(r,v){r[7] = v;return 0}
    function changed_at(r){return r[6]}
    function set_changed_at(r,v){r[6] = v;return 0}
    function cutoff(r){return r[5]}
    function set_cutoff(r,v){r[5] = v;return 0}
    function kind(r){return r[4]}
    function set_kind(r,v){r[4] = v;return 0}
    function value_opt(r){return r[3]}
    function set_value_opt(r,v){r[3] = v;return 0}
    function recomputed_at(r){return r[2]}
    function set_recomputed_at(r,v){r[2] = v;return 0}
    function id(r){return r[1]}
    function _gK_(r,v)
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
     _gL_=[0,set_my_child_index_in_parent_at_index],
     my_child_index_in_parent_at_index$0=
      [0,
       function(param){return 0},
       cst_my_child_index_in_parent_at_index,
       _gL_,
       my_child_index_in_parent_at_index,
       _gK_];
    function _gM_(r,v)
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
     _gN_=[0,set_my_parent_index_in_child_at_index],
     my_parent_index_in_child_at_index$0=
      [0,
       function(param){return 0},
       cst_my_parent_index_in_child_at_index,
       _gN_,
       my_parent_index_in_child_at_index,
       _gM_];
    function _gO_(r,v)
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
     _gP_=[0,set_observers],
     observers$0=
      [0,function(param){return 0},cst_observers,_gP_,observers,_gO_];
    function _gQ_(r,v)
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
     _gR_=[0,set_old_value_opt],
     old_value_opt$0=
      [0,function(param){return 0},cst_old_value_opt,_gR_,old_value_opt,_gQ_];
    function _gS_(r,v)
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
     _gT_=[0,set_next_in_adjust_heights_heap],
     next_in_adjust_heights_heap$0=
      [0,
       function(param){return 0},
       cst_next_in_adjust_heights_heap,
       _gT_,
       next_in_adjust_heights_heap,
       _gS_];
    function _gU_(r,v)
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
     _gV_=[0,set_height_in_adjust_heights_heap],
     height_in_adjust_heights_heap$0=
      [0,
       function(param){return 0},
       cst_height_in_adjust_heights_heap,
       _gV_,
       height_in_adjust_heights_heap,
       _gU_];
    function _gW_(r,v)
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
     _gX_=[0,set_next_in_recompute_heap],
     next_in_recompute_heap$0=
      [0,
       function(param){return 0},
       cst_next_in_recompute_heap,
       _gX_,
       next_in_recompute_heap,
       _gW_];
    function _gY_(r,v)
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
     _gZ_=[0,set_prev_in_recompute_heap],
     prev_in_recompute_heap$0=
      [0,
       function(param){return 0},
       cst_prev_in_recompute_heap,
       _gZ_,
       prev_in_recompute_heap,
       _gY_];
    function _g0_(r,v)
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
     _g1_=[0,set_height_in_recompute_heap],
     height_in_recompute_heap$0=
      [0,
       function(param){return 0},
       cst_height_in_recompute_heap,
       _g1_,
       height_in_recompute_heap,
       _g0_];
    function _g2_(r,v)
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
     _g3_=[0,set_height],
     height$1=[0,function(param){return 0},cst_height,_g3_,height$0,_g2_];
    function _g4_(r,v)
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
     _g5_=[0,set_next_node_in_same_scope],
     next_node_in_same_scope$0=
      [0,
       function(param){return 0},
       cst_next_node_in_same_scope,
       _g5_,
       next_node_in_same_scope,
       _g4_];
    function _g6_(r,v)
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
     _g7_=[0,set_created_in],
     created_in$0=
      [0,function(param){return 0},cst_created_in,_g7_,created_in,_g6_];
    function _g8_(r,v)
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
     _g9_=[0,set_parent0],
     parent0$0=[0,function(param){return 0},cst_parent0,_g9_,parent0,_g8_];
    function _g__(r,v)
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
     _g$_=[0,set_parent1_and_beyond],
     parent1_and_beyond$0=
      [0,
       function(param){return 0},
       cst_parent1_and_beyond,
       _g$_,
       parent1_and_beyond,
       _g__];
    function _ha_(r,v)
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
     _hb_=[0,set_num_parents],
     num_parents$0=
      [0,function(param){return 0},cst_num_parents,_hb_,num_parents,_ha_];
    function _hc_(r,v)
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
     _hd_=[0,set_num_on_update_handlers],
     num_on_update_handlers$0=
      [0,
       function(param){return 0},
       cst_num_on_update_handlers,
       _hd_,
       num_on_update_handlers,
       _hc_];
    function _he_(r,v)
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
     _hf_=[0,set_changed_at],
     changed_at$0=
      [0,function(param){return 0},cst_changed_at,_hf_,changed_at,_he_];
    function _hg_(r,v)
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
     _hh_=[0,set_cutoff],
     cutoff$0=[0,function(param){return 0},cst_cutoff,_hh_,cutoff,_hg_];
    function _hi_(r,v)
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
     _hj_=[0,set_kind],
     kind$0=[0,function(param){return 0},cst_kind,_hj_,kind,_hi_];
    function _hk_(r,v)
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
     _hl_=[0,set_value_opt],
     value_opt$0=
      [0,function(param){return 0},cst_value_opt,_hl_,value_opt,_hk_];
    function _hm_(r,v)
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
     _hn_=[0,set_recomputed_at],
     recomputed_at$0=
      [0,function(param){return 0},cst_recomputed_at,_hn_,recomputed_at,_hm_];
    function _ho_(r,v)
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
    var _hp_=0,id$0=[0,function(param){return 0},cst_id,_hp_,id,_ho_];
    function sexp_of_t$26(of_a,param)
     {var
       v_id=param[1],
       v_recomputed_at=param[2],
       v_value_opt=param[3],
       v_kind=param[4],
       v_cutoff=param[5],
       v_changed_at=param[6],
       v_num_on_update_handlers=param[7],
       v_num_parents=param[8],
       v_parent1_and_beyond=param[9],
       v_parent0=param[10],
       v_created_in=param[11],
       v_next_node_in_same_scope=param[12],
       v_height=param[13],
       v_height_in_recompute_heap=param[14],
       v_prev_in_recompute_heap=param[15],
       v_next_in_recompute_heap=param[16],
       v_height_in_adjust_heights_heap=param[17],
       v_next_in_adjust_heights_heap=param[18],
       v_old_value_opt=param[19],
       v_observers=param[20],
       v_is_in_handle_after_stabilization=param[21],
       v_on_update_handlers=param[22],
       v_my_parent_index_in_child_at_index=param[23],
       v_my_child_index_in_parent_at_index=param[24],
       v_force_necessary=param[25],
       v_user_info=param[26],
       v_creation_backtrace=param[27],
       arg=caml_call2(Core_kernel[431],Base_Backtrace[1],v_creation_backtrace),
       bnds=[0,[1,[0,_hq_,[0,arg,0]]],0],
       arg$0=caml_call2(Core_kernel[431],Core_kernel_Info[6],v_user_info),
       bnds$0=[0,[1,[0,_hr_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[291],v_force_necessary),
       bnds$1=[0,[1,[0,_hs_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call2
         (Core_kernel[275],
          Core_kernel[339],
          v_my_child_index_in_parent_at_index),
       bnds$2=[0,[1,[0,_ht_,[0,arg$2,0]]],bnds$1],
       arg$3=
        caml_call2
         (Core_kernel[275],
          Core_kernel[339],
          v_my_parent_index_in_child_at_index),
       bnds$3=[0,[1,[0,_hu_,[0,arg$3,0]]],bnds$2];
      function _AE_(_AG_){return sexp_of_t$5(of_a,_AG_)}
      var
       arg$4=caml_call2(Core_kernel[400],_AE_,v_on_update_handlers),
       bnds$4=[0,[1,[0,_hv_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(Core_kernel[291],v_is_in_handle_after_stabilization),
       bnds$5=[0,[1,[0,_hw_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call2(Uopt[1],Sexplib0_Sexp_conv[23],v_observers),
       bnds$6=[0,[1,[0,_hx_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call2(Uopt[1],of_a,v_old_value_opt),
       bnds$7=[0,[1,[0,_hy_,[0,arg$7,0]]],bnds$6],
       arg$8=caml_call2(Uopt[1],Node[2][1],v_next_in_adjust_heights_heap),
       bnds$8=[0,[1,[0,_hz_,[0,arg$8,0]]],bnds$7],
       arg$9=caml_call1(Core_kernel[339],v_height_in_adjust_heights_heap),
       bnds$9=[0,[1,[0,_hA_,[0,arg$9,0]]],bnds$8],
       arg$10=caml_call2(Uopt[1],Node[2][1],v_next_in_recompute_heap),
       bnds$10=[0,[1,[0,_hB_,[0,arg$10,0]]],bnds$9],
       arg$11=caml_call2(Uopt[1],Node[2][1],v_prev_in_recompute_heap),
       bnds$11=[0,[1,[0,_hC_,[0,arg$11,0]]],bnds$10],
       arg$12=caml_call1(Core_kernel[339],v_height_in_recompute_heap),
       bnds$12=[0,[1,[0,_hD_,[0,arg$12,0]]],bnds$11],
       arg$13=caml_call1(Core_kernel[339],v_height),
       bnds$13=[0,[1,[0,_hE_,[0,arg$13,0]]],bnds$12],
       arg$14=caml_call2(Uopt[1],Node[2][1],v_next_node_in_same_scope),
       bnds$14=[0,[1,[0,_hF_,[0,arg$14,0]]],bnds$13],
       arg$15=caml_call1(_di_,v_created_in),
       bnds$15=[0,[1,[0,_hG_,[0,arg$15,0]]],bnds$14],
       arg$16=caml_call2(Uopt[1],Node[2][1],v_parent0),
       bnds$16=[0,[1,[0,_hH_,[0,arg$16,0]]],bnds$15],
       _AF_=caml_call1(Uopt[1],Node[2][1]),
       arg$17=caml_call2(Core_kernel[275],_AF_,v_parent1_and_beyond),
       bnds$17=[0,[1,[0,_hI_,[0,arg$17,0]]],bnds$16],
       arg$18=caml_call1(Core_kernel[339],v_num_parents),
       bnds$18=[0,[1,[0,_hJ_,[0,arg$18,0]]],bnds$17],
       arg$19=caml_call1(Core_kernel[339],v_num_on_update_handlers),
       bnds$19=[0,[1,[0,_hK_,[0,arg$19,0]]],bnds$18],
       arg$20=caml_call1(_s_,v_changed_at),
       bnds$20=[0,[1,[0,_hL_,[0,arg$20,0]]],bnds$19],
       arg$21=sexp_of_t$2(of_a,v_cutoff),
       bnds$21=[0,[1,[0,_hM_,[0,arg$21,0]]],bnds$20],
       arg$22=sexp_of_t$25(of_a,v_kind),
       bnds$22=[0,[1,[0,_hN_,[0,arg$22,0]]],bnds$21],
       arg$23=caml_call2(Uopt[1],of_a,v_value_opt),
       bnds$23=[0,[1,[0,_hO_,[0,arg$23,0]]],bnds$22],
       arg$24=caml_call1(_s_,v_recomputed_at),
       bnds$24=[0,[1,[0,_hP_,[0,arg$24,0]]],bnds$23],
       arg$25=caml_call1(sexp_of_t$3,v_id),
       bnds$25=[0,[1,[0,_hQ_,[0,arg$25,0]]],bnds$24];
      return [1,bnds$25]}
    function same$1(t1,t2){return caml_call2(Core_kernel[235],t1,t2)}
    function packed_same(param,t2){return same$1(param,t2)}
    function set_user_info(t,user_info){t[26] = user_info;return 0}
    var is_necessary$1=Node[4];
    function iteri_children$0(t,f){return iteri_children(t[4],f)}
    var is_valid$2=Node[3],type_equal_if_phys_same$0=Node[5];
    function edge_is_stale(child,parent)
     {return caml_call2(symbol$2,caml_call2(_w_,child[6],parent[2]),0)}
    function is_stale_with_respect_to_a_child(t)
     {var is_stale=[0,0];
      iteri_children$0
       (t,
        function(param,child)
         {var _AC_=edge_is_stale(child,t),_AD_=_AC_?(is_stale[1] = 1,0):_AC_;
          return _AD_});
      return is_stale[1]}
    function is_stale(t)
     {var _Aw_=t[4];
      if(typeof _Aw_ === "number")
       {if(0 === _Aw_)return 0;throw [0,Assert_failure,_hR_]}
      else
       switch(_Aw_[0])
        {case 1:return is_none(t[2]);
         case 2:return is_none(t[2]);
         case 3:
          var _Ay_=is_none(t[2]);
          return _Ay_?_Ay_:is_stale_with_respect_to_a_child(t);
         case 5:return is_none(t[2]);
         case 6:
          var match=_Aw_[1],force_stale=match[5];
          if(force_stale)
           var force_stale$0=force_stale;
          else
           {var _Az_=is_none(t[2]);
            if(! _Az_)return is_stale_with_respect_to_a_child(t);
            var force_stale$0=_Az_}
          return force_stale$0;
         case 8:
          var _AA_=is_none(t[2]);
          return _AA_?_AA_:is_stale_with_respect_to_a_child(t);
         case 10:
          var _AB_=is_none(t[2]);
          return _AB_?_AB_:is_stale_with_respect_to_a_child(t);
         case 13:return is_none(t[2]);
         case 16:
          var match$0=_Aw_[1],set_at=match$0[3];
          return caml_call2(symbol$2,caml_call2(_w_,set_at,t[2]),0);
         default:
          var _Ax_=is_none(t[2]);
          return _Ax_?_Ax_:is_stale_with_respect_to_a_child(t)}}
    function needs_to_be_computed(t)
     {var _Av_=caml_call1(is_necessary$1,t);return _Av_?is_stale(t):_Av_}
    function is_in_recompute_heap(t){return caml_call2(symbol,t[14],0)}
    function is_in_adjust_heights_heap(t){return caml_call2(symbol,t[17],0)}
    function get_parent(t,index)
     {if(caml_call2(symbol$1,index,0))
       var _At_=t[10];
      else
       var _Au_=index - 1 | 0,_At_=caml_check_bound(t[9],_Au_)[1 + _Au_];
      return caml_call1(Uopt[7],_At_)}
    function iteri_parents(t,f)
     {var _Am_=caml_call2(symbol$2,t[8],0);
      if(_Am_)
       {caml_call2(f,0,caml_call1(Uopt[7],t[10]));
        var _Ao_=t[8] - 1 | 0,_An_=1;
        if(! (_Ao_ < 1))
         {var index=_An_;
          for(;;)
           {var _Aq_=index - 1 | 0,_Ar_=caml_check_bound(t[9],_Aq_)[1 + _Aq_];
            caml_call2(f,index,caml_call1(Uopt[7],_Ar_));
            var _As_=index + 1 | 0;
            if(_Ao_ !== index){var index=_As_;continue}
            break}}
        var _Ap_=0}
      else
       var _Ap_=_Am_;
      return _Ap_}
    function has_child(t,child)
     {var has=[0,0];
      iteri_children$0
       (t,
        function(param,child$0)
         {var _Ak_=has[1],_Al_=_Ak_ || same$1(child,child$0);
          has[1] = _Al_;
          return 0});
      return has[1]}
    function has_parent(t,parent)
     {var has=[0,0];
      iteri_parents
       (t,
        function(param,parent$0)
         {var _Ai_=has[1],_Aj_=_Ai_ || same$1(parent,parent$0);
          has[1] = _Aj_;
          return 0});
      return has[1]}
    function should_be_invalidated(t)
     {var _Af_=t[4];
      if(typeof _Af_ === "number")
       {if(0 === _Af_)return 0;throw [0,Assert_failure,_hS_]}
      else
       switch(_Af_[0])
        {case 1:return 0;
         case 2:return 0;
         case 3:
          var match=_Af_[1],lhs=match[3];
          return 1 - caml_call1(is_valid$2,lhs);
         case 4:
          var match$0=_Af_[1],lhs_change=match$0[4];
          return 1 - caml_call1(is_valid$2,lhs_change);
         case 6:return 0;
         case 8:
          var match$1=_Af_[1],test=match$1[2];
          return 1 - caml_call1(is_valid$2,test);
         case 9:
          var match$2=_Af_[1],test_change=match$2[3];
          return 1 - caml_call1(is_valid$2,test_change);
         case 10:
          var match$3=_Af_[1],lhs$0=match$3[2];
          return 1 - caml_call1(is_valid$2,lhs$0);
         case 11:
          var match$4=_Af_[1],lhs_change$0=match$4[3];
          return 1 - caml_call1(is_valid$2,lhs_change$0);
         case 5:
         case 13:
         case 16:return 0;
         default:
          var has=[0,0];
          iteri_children$0
           (t,
            function(param,child)
             {var _Ag_=has[1],_Ah_=_Ag_ || 1 - caml_call1(is_valid$2,child);
              has[1] = _Ah_;
              return 0});
          return has[1]}}
    function fold_observers(t,init,f)
     {var r=[0,t[20]],ac=[0,init];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var observer=caml_call1(Uopt[7],r[1]);
          r[1] = observer[7];
          ac[1] = caml_call2(f,ac[1],observer);
          continue}
        return ac[1]}}
    function invariant$18(invariant_a,t)
     {function _zS_(param)
       {var
         t2=is_in_recompute_heap(t),
         t1=needs_to_be_computed(t),
         sexpifier=Core_kernel[291],
         comparator=Core_kernel[287];
        caml_call8
         (Ppx_assert_lib_Runtime[2],pos$3,sexpifier,comparator,0,0,0,t1,t2);
        if(caml_call1(is_necessary$1,t))
         {var _zW_=height(t[11]);
          if(! caml_call2(symbol$2,t[13],_zW_))throw [0,Assert_failure,_ik_];
          iteri_children$0
           (t,
            function(param,child)
             {if(caml_call2(symbol$2,t[13],child[13]))
               {if(has_parent(child,t))return 0;throw [0,Assert_failure,_hT_]}
              throw [0,Assert_failure,_hU_]});
          if(should_be_invalidated(t))throw [0,Assert_failure,_hV_]}
        iteri_parents
         (t,
          function(param,parent)
           {if(has_child(parent,t))
             {if(caml_call1(is_necessary$1,parent))
               {if(caml_call2(symbol$3,t[13],parent[13]))return 0;
                throw [0,Assert_failure,_hW_]}
              throw [0,Assert_failure,_hX_]}
            throw [0,Assert_failure,_hY_]});
        function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         my_child_index_in_parent_at_index_fun=
          check
           (function(my_child_index_in_parent_at_index)
             {var
               got=caml_call1(Array[17],my_child_index_in_parent_at_index),
               expect=caml_call1(Array[17],t[9]) + 1 | 0,
               sexpifier=Core_kernel[339],
               comparator=Core_kernel[335];
              caml_call8
               (Ppx_assert_lib_Runtime[3],
                pos$4,
                sexpifier,
                comparator,
                0,
                0,
                0,
                expect,
                got);
              return iteri_parents
                      (t,
                       function(parent_index,parent)
                        {var
                          _Ae_=
                           caml_check_bound
                             (my_child_index_in_parent_at_index,parent_index)
                            [1 + parent_index];
                         if(packed_same(t,slow_get_child(parent[4],_Ae_)))return 0;
                         throw [0,Assert_failure,_hZ_]})}),
         my_parent_index_in_child_at_index_fun=
          check
           (function(my_parent_index_in_child_at_index)
             {var
               _Ac_=t[4],
               switch$0=typeof _Ac_ === "number"?0:6 === _Ac_[0]?1:0;
              if(! switch$0)
               {var
                 got=caml_call1(Array[17],my_parent_index_in_child_at_index),
                 expect=initial_num_children(t[4]),
                 sexpifier=Core_kernel[339],
                 comparator=Core_kernel[335];
                caml_call8
                 (Ppx_assert_lib_Runtime[3],
                  pos$5,
                  sexpifier,
                  comparator,
                  0,
                  0,
                  0,
                  expect,
                  got)}
              var _Ad_=caml_call1(is_necessary$1,t);
              return _Ad_
                      ?iteri_children$0
                        (t,
                         function(child_index,child)
                          {if
                            (packed_same
                              (t,
                               get_parent
                                (child,
                                 caml_check_bound
                                   (my_parent_index_in_child_at_index,child_index)
                                  [1 + child_index])))
                            return 0;
                           throw [0,Assert_failure,_h0_]})
                      :_Ad_}),
         observers_fun=
          check
           (function(param)
             {return fold_observers
                      (t,
                       0,
                       function(param$0,param)
                        {var state=param[1],observing=param[2];
                         if(caml_call2(Core_kernel[234],t,observing))
                          {var switcher=state - 1 | 0;
                           if(1 < switcher >>> 0)throw [0,Assert_failure,_h1_];
                           return 0}
                         throw [0,Assert_failure,_h2_]})}),
         old_value_opt_fun=check(caml_call1(Uopt[2],invariant_a)),
         next_in_adjust_heights_heap_fun=
          check
           (function(next_in_adjust_heights_heap)
             {if(is_in_adjust_heights_heap(t))
               {var _Ab_=caml_call1(Uopt[6],next_in_adjust_heights_heap);
                if(_Ab_)
                 {var next=caml_call1(Uopt[7],next_in_adjust_heights_heap);
                  if(is_in_adjust_heights_heap(next))
                   {if(caml_call2(symbol$1,t[17],next[17]))return 0;
                    throw [0,Assert_failure,_h3_]}
                  throw [0,Assert_failure,_h4_]}
                return _Ab_}
              if(caml_call1(Uopt[5],next_in_adjust_heights_heap))return 0;
              throw [0,Assert_failure,_h5_]}),
         height_in_adjust_heights_heap_fun=
          check
           (function(height_in_adjust_heights_heap)
             {var _Aa_=caml_call2(symbol,height_in_adjust_heights_heap,0);
              if(_Aa_)
               {if(caml_call2(symbol$3,height_in_adjust_heights_heap,t[13]))
                 return 0;
                throw [0,Assert_failure,_h6_]}
              return _Aa_}),
         next_in_recompute_heap_fun=
          check
           (function(next_in_recompute_heap)
             {if(1 - is_in_recompute_heap(t))
               if(! caml_call1(Uopt[5],next_in_recompute_heap))
                throw [0,Assert_failure,_h9_];
              var _z$_=caml_call1(Uopt[6],next_in_recompute_heap);
              if(_z$_)
               {var next=caml_call1(Uopt[7],next_in_recompute_heap);
                if(packed_same(t,caml_call1(Uopt[7],next[15])))
                 {if(caml_call2(symbol$1,t[14],next[14]))return 0;
                  throw [0,Assert_failure,_h7_]}
                throw [0,Assert_failure,_h8_]}
              return _z$_}),
         prev_in_recompute_heap_fun=
          check
           (function(prev_in_recompute_heap)
             {if(1 - is_in_recompute_heap(t))
               if(! caml_call1(Uopt[5],prev_in_recompute_heap))
                throw [0,Assert_failure,_ia_];
              var _z__=caml_call1(Uopt[6],prev_in_recompute_heap);
              if(_z__)
               {var prev=caml_call1(Uopt[7],prev_in_recompute_heap);
                if(packed_same(t,caml_call1(Uopt[7],prev[16])))
                 {if(caml_call2(symbol$1,t[14],prev[14]))return 0;
                  throw [0,Assert_failure,_h__]}
                throw [0,Assert_failure,_h$_]}
              return _z__}),
         height_in_recompute_heap_fun=
          check
           (function(height_in_recompute_heap)
             {if(caml_call2(symbol,height_in_recompute_heap,-1))
               {if(caml_call2(symbol$0,height_in_recompute_heap,t[13]))
                 return 0;
                throw [0,Assert_failure,_ib_]}
              throw [0,Assert_failure,_ic_]}),
         height_fun=
          check
           (function(height)
             {if(caml_call1(is_necessary$1,t))
               {if(caml_call2(symbol,height,0))return 0;
                throw [0,Assert_failure,_id_]}
              if(caml_call2(symbol$1,height,-1))return 0;
              throw [0,Assert_failure,_ie_]}),
         next_node_in_same_scope_fun=
          check
           (function(next_node_in_same_scope)
             {var
               _z8_=is_top(t[11]),
               _z9_=_z8_ || 1 - caml_call1(is_valid$2,t);
              if(_z9_)
               {if(caml_call1(Uopt[5],next_node_in_same_scope))return 0;
                throw [0,Assert_failure,_if_]}
              return _z9_}),
         created_in_fun=check(invariant$12),
         parent0_fun=
          check
           (function(parent0)
             {var
               t2=caml_call1(Uopt[6],parent0),
               t1=caml_call2(symbol$2,t[8],0),
               sexpifier=Core_kernel[291],
               comparator=Core_kernel[287];
              return caml_call8
                      (Ppx_assert_lib_Runtime[2],
                       pos$6,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       t1,
                       t2)}),
         parent1_and_beyond_fun=
          check
           (function(parent1_and_beyond)
             {var _z4_=caml_call1(Array[17],parent1_and_beyond),_z3_=1;
              if(! (_z4_ < 1))
               {var parent_index=_z3_;
                for(;;)
                 {var
                   _z5_=parent_index - 1 | 0,
                   _z6_=caml_check_bound(parent1_and_beyond,_z5_)[1 + _z5_],
                   t2=caml_call1(Uopt[6],_z6_),
                   t1=caml_call2(symbol$3,parent_index,t[8]),
                   sexpifier=Core_kernel[291],
                   comparator=Core_kernel[287];
                  caml_call8
                   (Ppx_assert_lib_Runtime[2],
                    pos$7,
                    sexpifier,
                    comparator,
                    0,
                    0,
                    0,
                    t1,
                    t2);
                  var _z7_=parent_index + 1 | 0;
                  if(_z4_ !== parent_index){var parent_index=_z7_;continue}
                  break}}
              return 0}),
         num_parents_fun=
          check
           (function(num_parents)
             {if(caml_call2(symbol,num_parents,0))
               {if
                 (caml_call2
                   (symbol$0,num_parents,1 + caml_call1(Array[17],t[9]) | 0))
                 return 0;
                throw [0,Assert_failure,_ig_]}
              throw [0,Assert_failure,_ih_]}),
         _zX_=
          fold_observers
           (t,
            0,
            function(n,param)
             {var on_update_handlers=param[3];
              return n
                     +
                     caml_call1(Core_kernel_List[6],on_update_handlers)
                     |
                     0}),
         expect=caml_call1(Core_kernel_List[6],t[22]) + _zX_ | 0,
         num_on_update_handlers_fun=
          check
           (function(got)
             {var sexpifier=Core_kernel[339],comparator=Core_kernel[335];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$8,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       expect,
                       got)}),
         changed_at_fun=
          check
           (function(changed_at)
             {invariant$2(changed_at);
              var _z2_=is_some(t[2]);
              if(_z2_)
               {if(caml_call2(symbol$0,caml_call2(_w_,changed_at,t[2]),0))
                 return 0;
                throw [0,Assert_failure,_ii_]}
              return _z2_}),
         cutoff_fun=
          check(function(_z1_){return invariant$0(invariant_a,_z1_)}),
         kind_fun=
          check
           (function(kind)
             {invariant$17(invariant_a,kind);
              if(typeof kind !== "number" && 6 === kind[0])
               {var e=kind[1],_z0_=caml_call1(is_necessary$1,t);
                return caml_call1
                        (invariant_about_num_invalid_children(e),_z0_)}
              return 0}),
         value_opt_fun=
          check
           (function(value_opt)
             {var
               _zY_=caml_call1(is_valid$2,t),
               _zZ_=_zY_?1 - is_stale(t):_zY_;
              if(_zZ_)
               if(! caml_call1(Uopt[6],value_opt))
                throw [0,Assert_failure,_ij_];
              return caml_call2(Uopt[2],invariant_a,value_opt)}),
         recomputed_at_fun=check(invariant$2),
         id_fun=check(invariant$1);
        caml_call1(id_fun,id$0);
        caml_call1(recomputed_at_fun,recomputed_at$0);
        caml_call1(value_opt_fun,value_opt$0);
        caml_call1(kind_fun,kind$0);
        caml_call1(cutoff_fun,cutoff$0);
        caml_call1(changed_at_fun,changed_at$0);
        caml_call1(num_on_update_handlers_fun,num_on_update_handlers$0);
        caml_call1(num_parents_fun,num_parents$0);
        caml_call1(parent1_and_beyond_fun,parent1_and_beyond$0);
        caml_call1(parent0_fun,parent0$0);
        caml_call1(created_in_fun,created_in$0);
        caml_call1(next_node_in_same_scope_fun,next_node_in_same_scope$0);
        caml_call1(height_fun,height$1);
        caml_call1(height_in_recompute_heap_fun,height_in_recompute_heap$0);
        caml_call1(prev_in_recompute_heap_fun,prev_in_recompute_heap$0);
        caml_call1(next_in_recompute_heap_fun,next_in_recompute_heap$0);
        caml_call1
         (height_in_adjust_heights_heap_fun,height_in_adjust_heights_heap$0);
        caml_call1
         (next_in_adjust_heights_heap_fun,next_in_adjust_heights_heap$0);
        caml_call1(old_value_opt_fun,old_value_opt$0);
        caml_call1(observers_fun,observers$0);
        caml_call1
         (my_parent_index_in_child_at_index_fun,
          my_parent_index_in_child_at_index$0);
        caml_call1
         (my_child_index_in_parent_at_index_fun,
          my_child_index_in_parent_at_index$0);
        return 0}
      function _zT_(param){return _il_}
      function _zU_(_zV_){return sexp_of_t$26(_zT_,_zV_)}
      return caml_call4(Base_Invariant[1],_im_,t,_zU_,_zS_)}
    function unsafe_value(t){return caml_call1(Uopt[9],t[3])}
    function value_exn(t)
     {if(caml_call1(Uopt[6],t[3]))return caml_call1(Uopt[9],t[3]);
      function _zP_(param){return _in_}
      function _zQ_(_zR_){return sexp_of_t$26(_zP_,_zR_)}
      return caml_call5
              (Core_kernel[224],
               0,
               _io_,
               cst_attempt_to_get_value_of_an_invalid_node,
               t,
               _zQ_)}
    function get_cutoff(t){return t[5]}
    function set_cutoff$0(t,cutoff){t[5] = cutoff;return 0}
    function is_const(t)
     {var _zO_=t[4];
      if(typeof _zO_ !== "number" && 5 === _zO_[0])return 1;
      return 0}
    function on_update(t,on_update_handler)
     {t[22] = [0,on_update_handler,t[22]];t[7] = t[7] + 1 | 0;return 0}
    function run_on_update_handlers(t,node_update,now)
     {var r=[0,t[22]];
      for(;;)
       {if(caml_call1(Core_kernel_List[7],r[1]))
         {var r$0=[0,t[20]];
          a:
          for(;;)
           {if(caml_call1(Uopt[6],r$0[1]))
             {var observer=caml_call1(Uopt[7],r$0[1]);
              r$0[1] = observer[7];
              var r$1=[0,observer[3]];
              for(;;)
               {if(caml_call1(Core_kernel_List[7],r$1[1]))continue a;
                var _zL_=r$1[1];
                if(_zL_)
                 {var rest=_zL_[2],on_update_handler=_zL_[1];
                  r$1[1] = rest;
                  var _zM_=observer[1];
                  if(0 !== _zM_)
                   {var switcher=_zM_ - 1 | 0;
                    switch(switcher)
                     {case 0:
                       run(on_update_handler,node_update,now);var switch$0=0;break;
                      case 1:var switch$0=0;break;
                      default:var switch$0=1}
                    if(! switch$0)continue}
                  throw [0,Assert_failure,_ip_]}
                throw [0,Assert_failure,_iq_]}}
            return 0}}
        var _zN_=r[1];
        if(_zN_)
         {var rest$0=_zN_[2],on_update_handler$0=_zN_[1];
          r[1] = rest$0;
          run(on_update_handler$0,node_update,now);
          continue}
        throw [0,Assert_failure,_ir_]}}
    var keep_node_creation_backtrace=[0,0];
    function set_kind$0(t,kind)
     {t[4] = kind;
      var _zK_=initial_num_children(kind);
      t[23] = caml_call2(Array[35],_zK_,-1);
      return 0}
    function create$4(created_in,kind)
     {var
       _zz_=
        keep_node_creation_backtrace[1]
         ?[0,caml_call2(Base_Backtrace[2],0,0)]
         :0,
       _zA_=initial_num_children(kind),
       _zB_=caml_call2(Array[35],_zA_,-1),
       _zC_=Uopt[3],
       _zD_=Uopt[3],
       _zE_=Uopt[3],
       _zF_=Uopt[3],
       _zG_=Uopt[3],
       _zH_=Uopt[3],
       _zI_=Uopt[3],
       _zJ_=Uopt[3],
       t=
        [0,
         next$0(0),
         none,
         _zJ_,
         kind,
         phys_equal,
         none,
         0,
         0,
         [0],
         _zI_,
         created_in,
         _zH_,
         -1,
         -1,
         _zG_,
         _zF_,
         -1,
         _zE_,
         _zD_,
         _zC_,
         0,
         0,
         _zB_,
         [0,-1],
         0,
         0,
         _zz_];
      add_node(created_in,t);
      return t}
    function max_num_parents(t){return 1 + caml_call1(Array[17],t[9]) | 0}
    function set_parent(child,parent,parent_index)
     {if(caml_call2(symbol$1,parent_index,0)){child[10] = parent;return 0}
      var _zy_=parent_index - 1 | 0;
      caml_check_bound(child[9],_zy_)[1 + _zy_] = parent;
      return 0}
    function link(child,child_index,parent,parent_index)
     {set_parent(child,caml_call1(Uopt[4],parent),parent_index);
      caml_check_bound(child[24],parent_index)[1 + parent_index]
      =
      child_index;
      caml_check_bound(parent[23],child_index)[1 + child_index]
      =
      parent_index;
      return 0}
    function add_parent(child,parent,child_index)
     {var _zx_=max_num_parents(child);
      if(caml_call2(symbol$1,child[8],_zx_))
       {var new_max_num_parents=2 * max_num_parents(child) | 0;
        child[9]
        =
        caml_call3(Array[117],child[9],new_max_num_parents - 1 | 0,Uopt[3]);
        child[24] = caml_call3(Array[117],child[24],new_max_num_parents,-1)}
      var max_num_children=caml_call1(Array[17],parent[23]);
      if(caml_call2(symbol,child_index,max_num_children))
       {var
         new_max_num_children=
          caml_call2(include[109],2,2 * max_num_children | 0);
        parent[23] = caml_call3(Array[117],parent[23],new_max_num_children,-1)}
      link(child,child_index,parent,child[8]);
      child[8] = child[8] + 1 | 0;
      return 0}
    function remove_parent(child,parent,child_index)
     {var
       parent_index=caml_check_bound(parent[23],child_index)[1 + child_index],
       parent_index$0=child[8] - 1 | 0;
      if(caml_call2(symbol$3,parent_index,parent_index$0))
       {var
         _zv_=parent_index$0 - 1 | 0,
         _zw_=caml_check_bound(child[9],_zv_)[1 + _zv_],
         match=caml_call1(Uopt[7],_zw_);
        link
         (child,
          caml_check_bound(child[24],parent_index$0)[1 + parent_index$0],
          match,
          parent_index)}
      set_parent(child,Uopt[3],parent_index$0);
      child[8] = child[8] - 1 | 0;
      return 0}
    function swap_children_except_in_kind
     (parent,child1,child_index1,child2,child_index2)
     {var
       index_of_parent_in_child1=
        caml_check_bound(parent[23],child_index1)[1 + child_index1],
       index_of_parent_in_child2=
        caml_check_bound(parent[23],child_index2)[1 + child_index2];
      caml_check_bound(child1[24],index_of_parent_in_child1)
       [1 + index_of_parent_in_child1]
      =
      child_index2;
      caml_check_bound(child2[24],index_of_parent_in_child2)
       [1 + index_of_parent_in_child2]
      =
      child_index1;
      caml_check_bound(parent[23],child_index1)[1 + child_index1]
      =
      index_of_parent_in_child2;
      caml_check_bound(parent[23],child_index2)[1 + child_index2]
      =
      index_of_parent_in_child1;
      return 0}
    function sexp_of_t$27(param)
     {return sexp_of_t$26(function(param){return _is_},param)}
    function invariant$19(param)
     {return invariant$18(function(_zu_){return 0},param)}
    function iter_descendants_internal(ts,f)
     {var seen=caml_call3(_o_[2],0,0,0);
      function iter_descendants(t)
       {var _zt_=1 - caml_call2(Core_kernel_Hash_set[20],seen,t[1]);
        return _zt_
                ?(caml_call2(Core_kernel_Hash_set[22],seen,t[1]),
                  caml_call1(f,t),
                  iteri_children$0
                   (t,function(param,t){return iter_descendants(t)}))
                :_zt_}
      caml_call2(Core_kernel_List[8],ts,iter_descendants);
      return seen}
    function iter_descendants(ts,f){iter_descendants_internal(ts,f);return 0}
    function save_dot(file,ts)
     {function _zj_(out)
       {function node_name(node)
         {var _zs_=caml_call1(to_string$0,node[1]);
          return caml_call2(Core_kernel[18],cst_n$0,_zs_)}
        caml_call2(Core_kernel[226],out,_it_);
        caml_call2(Core_kernel[226],out,_iu_);
        var
         bind_edges=[0,0],
         seen=
          iter_descendants_internal
           (ts,
            function(t)
             {var name$0=node_name(t),_zo_=t[13],_zp_=name(t[4]);
              caml_call6(Core_kernel[226],out,_iv_,name$0,name$0,_zp_,_zo_);
              iteri_children$0
               (t,
                function(param,from)
                 {var _zr_=node_name(from);
                  return caml_call4(Core_kernel[226],out,_iw_,_zr_,name$0)});
              var _zq_=t[4];
              if(typeof _zq_ !== "number" && 3 === _zq_[0])
               {var bind=_zq_[1];
                return iter_nodes_created_on_rhs
                        (bind,
                         function(to)
                          {bind_edges[1] = [0,[0,t,to],bind_edges[1]];return 0})}
              return 0});
        function _zk_(param)
         {var
           to=param[2],
           match=param[1],
           _zl_=caml_call2(Core_kernel_Hash_set[20],seen,to[1]);
          if(_zl_)
           {var _zm_=node_name(to),_zn_=node_name(match);
            return caml_call4(Core_kernel[226],out,_ix_,_zn_,_zm_)}
          return _zl_}
        caml_call2(Core_kernel_List[8],bind_edges[1],_zk_);
        return caml_call2(Core_kernel[226],out,_iy_)}
      return caml_call6(Stdio_Out_channel[6],0,0,0,0,file,_zj_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$70);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Packed$0=
      [0,
       sexp_of_t$27,
       invariant$19,
       function(M)
        {function fold(t,init,f)
          {var ac=[0,init],r=[0,t];
           for(;;)
            {if(caml_call1(Uopt[6],r[1]))
              {var packed_node=caml_call1(Uopt[9],r[1]);
               r[1] = caml_call1(M[1],packed_node);
               ac[1] = caml_call2(f,ac[1],packed_node);
               continue}
             return ac[1]}}
         function iter(t,f)
          {return fold(t,0,function(param,n){return caml_call1(f,n)})}
         function invariant(t){return iter(t,invariant$19)}
         function length(t)
          {return fold(t,0,function(n,param){return n + 1 | 0})}
         function sexp_of_t(t)
          {var
            _zh_=fold(t,0,function(ac,n){return [0,n,ac]}),
            _zi_=caml_call1(Core_kernel_List[32],_zh_);
           return caml_call1(caml_call1(Core_kernel[400],Node[2][1]),_zi_)}
         return [0,sexp_of_t,invariant,length,iter]},
       iter_descendants,
       save_dot],
     include$4=
      [0,
       Packed$0,
       sexp_of_t$26,
       type_equal_if_phys_same$0,
       invariant$18,
       create$4,
       set_kind$0,
       same$1,
       iteri_children$0,
       get_parent,
       add_parent,
       remove_parent,
       swap_children_except_in_kind,
       is_const,
       is_in_recompute_heap,
       is_necessary$1,
       is_valid$2,
       should_be_invalidated,
       edge_is_stale,
       is_stale,
       needs_to_be_computed,
       value_exn,
       unsafe_value,
       get_cutoff,
       set_cutoff$0,
       on_update,
       run_on_update_handlers,
       keep_node_creation_backtrace,
       user_info,
       set_user_info,
       has_child,
       has_parent];
    caml_register_global(1198,include$4,"Incremental__Node");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$71);
    caml_call1(Expect_test_collector[4][1],cst_src_recompute_heap_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$72,cst$23);
    function next$1(param){return param[16]}
    var As_recompute_list=caml_call1(Packed$0[3],[0,next$1]);
    function nodes_by_height(r){return r[3]}
    function set_nodes_by_height(r,v){r[3] = v;return 0}
    function height_lower_bound(r){return r[2]}
    function set_height_lower_bound(r,v){r[2] = v;return 0}
    function length$0(r){return r[1]}
    function set_length(r,v){r[1] = v;return 0}
    function _iz_(r,v){return [0,r[1],r[2],v]}
    var
     _iA_=[0,set_nodes_by_height],
     nodes_by_height$0=
      [0,
       function(param){return 0},
       cst_nodes_by_height,
       _iA_,
       nodes_by_height,
       _iz_];
    function _iB_(r,v){return [0,r[1],v,r[3]]}
    var
     _iC_=[0,set_height_lower_bound],
     height_lower_bound$0=
      [0,
       function(param){return 0},
       cst_height_lower_bound,
       _iC_,
       height_lower_bound,
       _iB_];
    function _iD_(r,v){return [0,v,r[2],r[3]]}
    var
     _iE_=[0,set_length],
     length$1=[0,function(param){return 0},cst_length,_iE_,length$0,_iD_];
    function sexp_of_t$28(param)
     {var
       v_length=param[1],
       v_height_lower_bound=param[2],
       v_nodes_by_height=param[3],
       max_nonempty_index=[0,-1],
       bnds=0;
      function _ze_(i,l)
       {var
         _zf_=caml_call1(Uopt[6],l),
         _zg_=_zf_?(max_nonempty_index[1] = i,0):_zf_;
        return _zg_}
      caml_call2(Array[53],v_nodes_by_height,_ze_);
      var
       v=
        caml_call3
         (Array[45],v_nodes_by_height,0,max_nonempty_index[1] + 1 | 0),
       arg=caml_call2(Array[13],As_recompute_list[1],v),
       bnds$0=[0,[1,[0,_iF_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[339],v_height_lower_bound),
       bnds$1=[0,[1,[0,_iG_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Core_kernel[339],v_length),
       bnds$2=[0,[1,[0,_iH_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function max_height_allowed(t){return caml_call1(Array[17],t[3]) - 1 | 0}
    function invariant$20(t)
     {function _y7_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         nodes_by_height_fun=
          check
           (function(nodes_by_height)
             {function _zc_(height,node)
               {function _zd_(node)
                 {if(caml_call2(symbol$1,node[14],height))
                   {if(needs_to_be_computed(node))return 0;
                    throw [0,Assert_failure,_iI_]}
                  throw [0,Assert_failure,_iJ_]}
                return caml_call2(As_recompute_list[4],node,_zd_)}
              return caml_call2(Array[53],nodes_by_height,_zc_)}),
         height_lower_bound_fun=
          check
           (function(height_lower_bound)
             {if(caml_call2(symbol,height_lower_bound,0))
               {if
                 (caml_call2
                   (symbol$0,height_lower_bound,caml_call1(Array[17],t[3])))
                 {var _y$_=height_lower_bound - 1 | 0,_y__=0;
                  if(! (_y$_ < 0))
                   {var height=_y__;
                    for(;;)
                     {var _za_=caml_check_bound(t[3],height)[1 + height];
                      if(! caml_call1(Uopt[5],_za_))throw [0,Assert_failure,_iK_];
                      var _zb_=height + 1 | 0;
                      if(_y$_ !== height){var height=_zb_;continue}
                      break}}
                  return 0}
                throw [0,Assert_failure,_iL_]}
              throw [0,Assert_failure,_iM_]}),
         length_fun=
          check
           (function(t1)
             {var actual_length=[0,0];
              function _y8_(node)
               {var _y9_=caml_call1(As_recompute_list[3],node);
                actual_length[1] = actual_length[1] + _y9_ | 0;
                return 0}
              caml_call2(Array[19],t[3],_y8_);
              var sexpifier=Core_kernel[339],comparator=Core_kernel[335];
              return caml_call8
                      (Ppx_assert_lib_Runtime[2],
                       pos$9,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       t1,
                       actual_length[1])});
        caml_call1(length_fun,length$1);
        caml_call1(height_lower_bound_fun,height_lower_bound$0);
        return caml_call1(nodes_by_height_fun,nodes_by_height$0)}
      return caml_call4(Base_Invariant[1],_iN_,t,sexp_of_t$28,_y7_)}
    function create_nodes_by_height(max_height_allowed)
     {return caml_call2(Array[35],max_height_allowed + 1 | 0,Uopt[3])}
    function set_max_height_allowed(t,max_height_allowed)
     {var
       src=t[3],
       dst=create_nodes_by_height(max_height_allowed),
       _y4_=caml_call1(Array[17],dst),
       _y5_=caml_call2(min,caml_call1(Array[17],src),_y4_);
      caml_call5(Array[42],src,0,dst,0,_y5_);
      t[3] = dst;
      var _y6_=caml_call1(Array[17],dst);
      t[2] = caml_call2(min,t[2],_y6_);
      return 0}
    function create$5(max_height_allowed)
     {return [0,
              0,
              max_height_allowed + 1 | 0,
              create_nodes_by_height(max_height_allowed)]}
    function set_prev(next,prev)
     {var _y2_=caml_call1(Uopt[6],next);
      if(_y2_)
       {var match=caml_call1(Uopt[9],next);match[15] = prev;var _y3_=0}
      else
       var _y3_=_y2_;
      return _y3_}
    function link$0(t,node)
     {var height=node[13];
      node[14] = height;
      var next=caml_check_bound(t[3],height)[1 + height];
      node[16] = next;
      set_prev(next,caml_call1(Uopt[4],node));
      var _y1_=caml_call1(Uopt[4],node);
      t[3][1 + height] = _y1_;
      return 0}
    function unlink(t,node)
     {var
       prev=node[15],
       next=node[16],
       _yY_=node[14],
       _yZ_=caml_check_bound(t[3],_yY_)[1 + _yY_],
       _y0_=caml_call1(Uopt[4],node);
      if(caml_call2(Core_kernel[235],_y0_,_yZ_))t[3][1 + node[14]] = next;
      set_prev(next,prev);
      if(caml_call1(Uopt[6],prev))
       {var match=caml_call1(Uopt[9],prev);match[16] = next}
      node[15] = Uopt[3];
      return 0}
    function add$0(t,node)
     {var height=node[13];
      if(caml_call2(symbol$3,height,t[2]))t[2] = height;
      link$0(t,node);
      t[1] = t[1] + 1 | 0;
      return 0}
    function remove(t,node)
     {unlink(t,node);
      node[16] = Uopt[3];
      node[14] = -1;
      t[1] = t[1] - 1 | 0;
      return 0}
    function increase_height(t,node){unlink(t,node);return link$0(t,node)}
    function min_height(t)
     {if(caml_call2(symbol$1,t[1],0))
       t[2] = caml_call1(Array[17],t[3]);
      else
       {var nodes_by_height=t[3];
        for(;;)
         {var _yW_=t[2],_yX_=caml_check_bound(nodes_by_height,_yW_)[1 + _yW_];
          if(caml_call1(Uopt[5],_yX_)){t[2] = t[2] + 1 | 0;continue}
          break}}
      return t[2]}
    function remove_min(t)
     {var
       nodes_by_height=t[3],
       _yT_=t[2],
       node=[0,caml_check_bound(nodes_by_height,_yT_)[1 + _yT_]];
      for(;;)
       {if(caml_call1(Uopt[5],node[1]))
         {t[2] = t[2] + 1 | 0;
          var _yU_=t[2];
          node[1] = caml_check_bound(nodes_by_height,_yU_)[1 + _yU_];
          continue}
        var node$0=caml_call1(Uopt[9],node[1]);
        node$0[14] = -1;
        t[1] = t[1] - 1 | 0;
        var next=node$0[16],_yV_=t[2];
        caml_check_bound(t[3],_yV_)[1 + _yV_] = next;
        set_prev(next,Uopt[3]);
        node$0[16] = Uopt[3];
        return node$0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$73);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Recompute_heap=
      [0,
       sexp_of_t$28,
       invariant$20,
       create$5,
       length$0,
       max_height_allowed,
       set_max_height_allowed,
       min_height,
       add$0,
       remove,
       remove_min,
       increase_height];
    caml_register_global
     (1199,Incremental_Recompute_heap,"Incremental__Recompute_heap");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$74);
    caml_call1(Expect_test_collector[4][1],cst_src_adjust_heights_heap_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$75,cst$24);
    function next$2(param){return param[18]}
    var As_adjust_heights_list=caml_call1(Packed$0[3],[0,next$2]);
    function sexp_of_t$29(t)
     {var max_nonempty_index=[0,-1];
      function _yQ_(i,l)
       {var
         _yR_=caml_call1(Uopt[6],l),
         _yS_=_yR_?(max_nonempty_index[1] = i,0):_yR_;
        return _yS_}
      caml_call2(Array[53],t,_yQ_);
      var v=caml_call3(Array[45],t,0,max_nonempty_index[1] + 1 | 0);
      return caml_call2(Array[13],As_adjust_heights_list[1],v)}
    function invariant$21(t)
     {function _yM_(param)
       {function _yN_(height,nodes)
         {caml_call1(As_adjust_heights_list[2],nodes);
          function _yO_(node)
           {if(caml_call2(symbol$1,node[17],height))
             {if(caml_call2(symbol$2,node[13],node[17]))
               {var _yP_=is_in_recompute_heap(node);
                if(_yP_)
                 {if(caml_call2(symbol$1,node[14],node[17]))return 0;
                  throw [0,Assert_failure,_iO_]}
                return _yP_}
              throw [0,Assert_failure,_iP_]}
            throw [0,Assert_failure,_iQ_]}
          return caml_call2(As_adjust_heights_list[4],nodes,_yO_)}
        return caml_call2(Array[53],t,_yN_)}
      return caml_call4(Base_Invariant[1],_iR_,t,sexp_of_t$29,_yM_)}
    function create$6(max_height_allowed)
     {return caml_call2(Array[35],max_height_allowed + 1 | 0,Uopt[3])}
    function nodes_by_height$1(r){return r[4]}
    function set_nodes_by_height$0(r,v){r[4] = v;return 0}
    function max_height_seen(r){return r[3]}
    function set_max_height_seen(r,v){r[3] = v;return 0}
    function height_lower_bound$1(r){return r[2]}
    function set_height_lower_bound$0(r,v){r[2] = v;return 0}
    function length$2(r){return r[1]}
    function set_length$0(r,v){r[1] = v;return 0}
    function _iS_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _iT_=[0,set_nodes_by_height$0],
     nodes_by_height$2=
      [0,
       function(param){return 0},
       cst_nodes_by_height$0,
       _iT_,
       nodes_by_height$1,
       _iS_];
    function _iU_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _iV_=[0,set_max_height_seen],
     max_height_seen$0=
      [0,
       function(param){return 0},
       cst_max_height_seen,
       _iV_,
       max_height_seen,
       _iU_];
    function _iW_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _iX_=[0,set_height_lower_bound$0],
     height_lower_bound$2=
      [0,
       function(param){return 0},
       cst_height_lower_bound$0,
       _iX_,
       height_lower_bound$1,
       _iW_];
    function _iY_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _iZ_=[0,set_length$0],
     length$3=[0,function(param){return 0},cst_length$0,_iZ_,length$2,_iY_];
    function sexp_of_t$30(param)
     {var
       v_length=param[1],
       v_height_lower_bound=param[2],
       v_max_height_seen=param[3],
       v_nodes_by_height=param[4],
       arg=sexp_of_t$29(v_nodes_by_height),
       bnds=[0,[1,[0,_i0_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[339],v_max_height_seen),
       bnds$0=[0,[1,[0,_i1_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[339],v_height_lower_bound),
       bnds$1=[0,[1,[0,_i2_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_length),
       bnds$2=[0,[1,[0,_i3_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function max_height_allowed$0(t)
     {return caml_call1(Array[17],t[4]) - 1 | 0}
    function invariant$22(t)
     {function _yE_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         nodes_by_height_fun=check(invariant$21),
         max_height_seen_fun=
          check
           (function(max_height_seen)
             {if(caml_call2(symbol,max_height_seen,0))
               {if
                 (caml_call2(symbol$0,max_height_seen,max_height_allowed$0(t)))
                 return 0;
                throw [0,Assert_failure,_i4_]}
              throw [0,Assert_failure,_i5_]}),
         height_lower_bound_fun=
          check
           (function(height_lower_bound)
             {if(caml_call2(symbol,height_lower_bound,0))
               {if
                 (caml_call2
                   (symbol$0,height_lower_bound,caml_call1(Array[17],t[4])))
                 {var _yJ_=height_lower_bound - 1 | 0,_yI_=0;
                  if(! (_yJ_ < 0))
                   {var height=_yI_;
                    for(;;)
                     {var _yK_=caml_check_bound(t[4],height)[1 + height];
                      if(! caml_call1(Uopt[5],_yK_))throw [0,Assert_failure,_i6_];
                      var _yL_=height + 1 | 0;
                      if(_yJ_ !== height){var height=_yL_;continue}
                      break}}
                  return 0}
                throw [0,Assert_failure,_i7_]}
              throw [0,Assert_failure,_i8_]}),
         length_fun=
          check
           (function(length)
             {var r=[0,0],_yG_=t[4];
              function _yF_(node)
               {var _yH_=caml_call1(As_adjust_heights_list[3],node);
                r[1] = r[1] + _yH_ | 0;
                return 0}
              caml_call2(Array[19],_yG_,_yF_);
              if(caml_call2(symbol$1,length,r[1]))return 0;
              throw [0,Assert_failure,_i9_]});
        caml_call1(length_fun,length$3);
        caml_call1(height_lower_bound_fun,height_lower_bound$2);
        caml_call1(max_height_seen_fun,max_height_seen$0);
        return caml_call1(nodes_by_height_fun,nodes_by_height$2)}
      return caml_call4(Base_Invariant[1],_i__,t,sexp_of_t$30,_yE_)}
    function create$7(max_height_allowed)
     {return [0,0,max_height_allowed + 1 | 0,0,create$6(max_height_allowed)]}
    function set_max_height_allowed$0(t,max_height_allowed)
     {if(caml_call2(symbol$3,max_height_allowed,t[3]))
       {var
         _yD_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[339],v0),
             v0$1=v1[2],
             v1$0=[1,[0,_i$_,[0,caml_call1(Core_kernel[339],v0$1),0]]];
            return [1,[0,v0$0,[0,v1$0,0]]]};
        caml_call5
         (Core_kernel[224],
          0,
          _ja_,
          cst_cannot_set_max_height_allowed_less_than_the_max_height_already_seen,
          [0,max_height_allowed,[0,-794774856,t[3]]],
          _yD_)}
      t[4] = create$6(max_height_allowed);
      return 0}
    function set_height$0(t,node,height)
     {if(caml_call2(symbol$2,height,t[3]))
       {t[3] = height;
        if(caml_call2(symbol$2,height,max_height_allowed$0(t)))
         {var
           _yB_=
            function(param)
             {var
               v1=param[2],
               v0=param[1],
               v0$0=v0[2],
               v0$1=[1,[0,_jb_,[0,caml_call1(Core_kernel[339],v0$0),0]]],
               v0$2=v1[2],
               v1$0=[1,[0,_jc_,[0,caml_call1(Core_kernel[339],v0$2),0]]];
              return [1,[0,v0$1,[0,v1$0,0]]]},
           _yC_=[0,[0,920681479,height],[0,3850884,max_height_allowed$0(t)]];
          caml_call5
           (Core_kernel[224],0,_jd_,cst_node_with_too_large_height,_yC_,_yB_)}}
      node[13] = height;
      return 0}
    function ensure_height_requirement
     (t,original_child,original_parent,child,parent)
     {if(same$1(parent,original_child))
       {var
         _yx_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=v0[2],
             _yz_=0,
             v0$1=
              [1,
               [0,
                _jf_,
                [0,sexp_of_t$26(function(param){return _je_},v0$0),_yz_]]],
             v0$2=v1[2],
             _yA_=0,
             v1$0=
              [1,
               [0,
                _jh_,
                [0,sexp_of_t$26(function(param){return _jg_},v0$2),_yA_]]];
            return [1,[0,v0$1,[0,v1$0,0]]]};
        caml_call5
         (Core_kernel[224],
          0,
          _ji_,
          cst_adding_edge_made_graph_cyclic,
          [0,[0,-977688164,original_child],[0,-310508246,original_parent]],
          _yx_)}
      var _yy_=caml_call2(symbol,child[13],parent[13]);
      if(_yy_)
       {if(caml_call2(symbol$1,parent[17],-1))
         {var height=parent[13];
          parent[17] = height;
          t[1] = t[1] + 1 | 0;
          parent[18] = caml_check_bound(t[4],height)[1 + height];
          var _yw_=caml_call1(Uopt[4],parent);
          t[4][1 + height] = _yw_}
        return set_height$0(t,parent,child[13] + 1 | 0)}
      return _yy_}
    function adjust_heights(t,recompute_heap,original_child,original_parent)
     {t[2] = original_parent[13];
      ensure_height_requirement
       (t,original_child,original_parent,original_child,original_parent);
      b:
      for(;;)
       {if(caml_call2(symbol$2,t[1],0))
         {var r=[0,t[2]];
          for(;;)
           {var _yo_=r[1],_yp_=caml_check_bound(t[4],_yo_)[1 + _yo_];
            if(caml_call1(Uopt[5],_yp_)){r[1]++;continue}
            var height=r[1];
            t[2] = height;
            var child=caml_call1(Uopt[9],t[4][1 + height]);
            child[17] = -1;
            t[1] = t[1] - 1 | 0;
            t[4][1 + height] = child[18];
            child[18] = Uopt[3];
            if(is_in_recompute_heap(child))
             increase_height(recompute_heap,child);
            if(caml_call2(symbol$2,child[8],0))
             {var parent=caml_call1(Uopt[7],child[10]);
              ensure_height_requirement
               (t,original_child,original_parent,child,parent);
              var _yr_=child[8] - 1 | 0,_yq_=1;
              if(! (_yr_ < 1))
               {var parent_index=_yq_;
                for(;;)
                 {var
                   _yt_=parent_index - 1 | 0,
                   _yu_=caml_check_bound(child[9],_yt_)[1 + _yt_],
                   match$0=caml_call1(Uopt[7],_yu_);
                  ensure_height_requirement
                   (t,original_child,original_parent,child,match$0);
                  var _yv_=parent_index + 1 | 0;
                  if(_yr_ !== parent_index){var parent_index=_yv_;continue}
                  break}}}
            var _ys_=child[4];
            if(typeof _ys_ === "number")
             var switch$0=0;
            else
             if(3 === _ys_[0])
              {var
                match=_ys_[1],
                all_nodes_created_on_rhs=match[7],
                r$0=[0,all_nodes_created_on_rhs];
               for(;;)
                {if(caml_call1(Uopt[6],r$0[1]))
                  {var node_on_rhs=caml_call1(Uopt[9],r$0[1]);
                   r$0[1] = node_on_rhs[12];
                   if(caml_call1(is_necessary$1,node_on_rhs))
                    ensure_height_requirement
                     (t,original_child,original_parent,child,node_on_rhs);
                   continue}
                 var switch$0=1;
                 break}}
             else
              var switch$0=0;
            continue b}}
        return debug}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$76);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_Adjust_heights_heap=
      [0,
       sexp_of_t$30,
       invariant$22,
       create$7,
       length$2,
       max_height_allowed$0,
       set_max_height_allowed$0,
       max_height_seen,
       set_height$0,
       adjust_heights];
    caml_register_global
     (1200,Incremental_Adjust_heights_heap,"Incremental__Adjust_heights_heap");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$77);
    caml_call1(Expect_test_collector[4][1],cst_src_alarm_value_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$78,cst$25);
    function f(param)
     {switch(param[0])
       {case 0:var at=param[1];return invariant$8(at);
        case 1:var at_intervals=param[1];return invariant$9(at_intervals);
        case 2:
         var snapshot=param[1];
         return invariant$16(function(_ym_){return 0},snapshot);
        default:
         var step_function_node=param[1];
         return invariant$6(function(_yn_){return 0},step_function_node)}}
    function action(r){return r[1]}
    function _jp_(r,v){return [0,v,r[2]]}
    var
     _jq_=0,
     action$0=[0,function(param){return 0},cst_action,_jq_,action,_jp_];
    function sexp_of_t$31(param)
     {var
       v_action=param[1],
       v_next_fired=param[2],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_next_fired),
       bnds=[0,[1,[0,_jr_,[0,arg,0]]],0];
      switch(v_action[0])
       {case 0:
         var
          v0=v_action[1],
          v0$0=sexp_of_t$16(v0),
          arg$0=[1,[0,_jj_,[0,v0$0,0]]];
         break;
        case 1:
         var
          v0$1=v_action[1],
          v0$2=sexp_of_t$17(v0$1),
          arg$0=[1,[0,_jk_,[0,v0$2,0]]];
         break;
        case 2:
         var
          v0$3=v_action[1],
          v0$4=sexp_of_t$24(function(param){return _jl_},v0$3),
          arg$0=[1,[0,_jm_,[0,v0$4,0]]];
         break;
        default:
         var
          v0$5=v_action[1],
          v0$6=sexp_of_t$14(function(param){return _jn_},v0$5),
          arg$0=[1,[0,_jo_,[0,v0$6,0]]]}
      var bnds$0=[0,[1,[0,_js_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$23(t)
     {function _yl_(param)
       {var action_fun=caml_call2(Base_Invariant[2],t,f);
        caml_call1(action_fun,action$0);
        return 0}
      return caml_call4(Base_Invariant[1],_jt_,t,sexp_of_t$31,_yl_)}
    function create$8(action){return [0,action,Uopt[3]]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$79);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Alarm_value=[0,[0],invariant$23,sexp_of_t$31,create$8];
    caml_register_global
     (1201,Incremental_Alarm_value,"Incremental__Alarm_value");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$80);
    caml_call1(Expect_test_collector[4][1],cst_src_config_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$81,cst$26);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$82);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Config_intf=[0];
    caml_register_global
     (1202,Incremental_Config_intf,"Incremental__Config_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$83);
    caml_call1(Expect_test_collector[4][1],cst_src_config_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$84,cst$27);
    function Default(symbol){return [0,1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$85);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Config=[0,Default];
    caml_register_global(1203,Incremental_Config,"Incremental__Config");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$86);
    caml_call1(Expect_test_collector[4][1],cst_src_internal_observer_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$87,cst$28);
    function sexp_of_t$32(param)
     {var _yj_=param[2];
      function _yk_(param){return _ju_}
      return caml_call1(caml_call1(Node[1],_yk_),_yj_)}
    function next_in_all(param){return param[5]}
    function set_prev_in_all(param,t2){param[4] = t2;return 0}
    function next_in_observing(r){return r[7]}
    function set_next_in_observing(r,v){r[7] = v;return 0}
    function prev_in_observing(r){return r[6]}
    function set_prev_in_observing(r,v){r[6] = v;return 0}
    function next_in_all$0(r){return r[5]}
    function set_next_in_all(r,v){r[5] = v;return 0}
    function prev_in_all(r){return r[4]}
    function set_prev_in_all$0(r,v){r[4] = v;return 0}
    function on_update_handlers(r){return r[3]}
    function set_on_update_handlers(r,v){r[3] = v;return 0}
    function observing(r){return r[2]}
    function _jz_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _jA_=[0,set_next_in_observing],
     next_in_observing$0=
      [0,
       function(param){return 0},
       cst_next_in_observing,
       _jA_,
       next_in_observing,
       _jz_];
    function _jB_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _jC_=[0,set_prev_in_observing],
     prev_in_observing$0=
      [0,
       function(param){return 0},
       cst_prev_in_observing,
       _jC_,
       prev_in_observing,
       _jB_];
    function _jD_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7]]}
    var
     _jE_=[0,set_next_in_all],
     next_in_all$1=
      [0,function(param){return 0},cst_next_in_all,_jE_,next_in_all$0,_jD_];
    function _jF_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _jG_=[0,set_prev_in_all$0],
     prev_in_all$0=
      [0,function(param){return 0},cst_prev_in_all,_jG_,prev_in_all,_jF_];
    function _jH_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7]]}
    var
     _jI_=[0,set_on_update_handlers],
     on_update_handlers$0=
      [0,
       function(param){return 0},
       cst_on_update_handlers,
       _jI_,
       on_update_handlers,
       _jH_];
    function _jJ_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7]]}
    var
     _jK_=0,
     observing$0=
      [0,function(param){return 0},cst_observing,_jK_,observing,_jJ_];
    function sexp_of_internal_observer(of_a,param)
     {var
       v_state=param[1],
       v_observing=param[2],
       v_on_update_handlers=param[3],
       v_prev_in_all=param[4],
       v_next_in_all=param[5],
       v_prev_in_observing=param[6],
       v_next_in_observing=param[7],
       arg=caml_call2(Uopt[1],Sexplib0_Sexp_conv[23],v_next_in_observing),
       bnds=[0,[1,[0,_jL_,[0,arg,0]]],0],
       arg$0=caml_call2(Uopt[1],Sexplib0_Sexp_conv[23],v_prev_in_observing),
       bnds$0=[0,[1,[0,_jM_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Uopt[1],sexp_of_t$32,v_next_in_all),
       bnds$1=[0,[1,[0,_jN_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Uopt[1],sexp_of_t$32,v_prev_in_all),
       bnds$2=[0,[1,[0,_jO_,[0,arg$2,0]]],bnds$1];
      function _yh_(_yi_){return sexp_of_t$5(of_a,_yi_)}
      var
       arg$3=caml_call2(Core_kernel[400],_yh_,v_on_update_handlers),
       bnds$3=[0,[1,[0,_jP_,[0,arg$3,0]]],bnds$2],
       arg$4=sexp_of_t$26(of_a,v_observing),
       bnds$4=[0,[1,[0,_jQ_,[0,arg$4,0]]],bnds$3];
      switch(v_state)
       {case 0:var arg$5=_jv_;break;
        case 1:var arg$5=_jw_;break;
        case 2:var arg$5=_jx_;break;
        default:var arg$5=_jy_}
      var bnds$5=[0,[1,[0,_jR_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function use_is_allowed(t){return 2 <= t[1]?0:1}
    function same$2(t1,t2){return caml_call2(Core_kernel[235],t1,t2)}
    function same_as_packed(t1,param){return same$2(t1,param)}
    function invariant$24(invariant_a,t)
     {function _x4_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         next_in_observing_fun=
          check
           (function(next_in_observing)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! caml_call1(Uopt[5],next_in_observing))
                throw [0,Assert_failure,_jT_];
              var _ye_=caml_call1(Uopt[6],next_in_observing);
              if(_ye_)
               {var
                 _yf_=caml_call1(Uopt[7],next_in_observing)[6],
                 _yg_=caml_call1(Uopt[7],_yf_);
                if(caml_call2(Core_kernel[234],t,_yg_))return 0;
                throw [0,Assert_failure,_jS_]}
              return _ye_}),
         prev_in_observing_fun=
          check
           (function(prev_in_observing)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! caml_call1(Uopt[5],prev_in_observing))
                throw [0,Assert_failure,_jV_];
              var _yb_=caml_call1(Uopt[6],prev_in_observing);
              if(_yb_)
               {var
                 _yc_=caml_call1(Uopt[7],prev_in_observing)[7],
                 _yd_=caml_call1(Uopt[7],_yc_);
                if(caml_call2(Core_kernel[234],t,_yd_))return 0;
                throw [0,Assert_failure,_jU_]}
              return _yb_}),
         next_in_all_fun=
          check
           (function(next_in_all)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! caml_call1(Uopt[5],next_in_all))
                throw [0,Assert_failure,_jX_];
              var _x$_=caml_call1(Uopt[6],next_in_all);
              if(_x$_)
               {var _ya_=caml_call1(Uopt[7],next_in_all)[4];
                if(same_as_packed(t,caml_call1(Uopt[7],_ya_)))return 0;
                throw [0,Assert_failure,_jW_]}
              return _x$_}),
         prev_in_all_fun=
          check
           (function(prev_in_all)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! caml_call1(Uopt[5],prev_in_all))
                throw [0,Assert_failure,_jZ_];
              var _x9_=caml_call1(Uopt[6],prev_in_all);
              if(_x9_)
               {var _x__=caml_call1(Uopt[7],prev_in_all)[5];
                if(same_as_packed(t,caml_call1(Uopt[7],_x__)))return 0;
                throw [0,Assert_failure,_jY_]}
              return _x9_}),
         on_update_handlers_fun=
          check
           (function(on_update_handlers)
             {if(3 <= t[1])
               {if(caml_call1(Core_kernel_List[7],on_update_handlers))
                 return 0;
                throw [0,Assert_failure,_j0_]}
              return 0}),
         observing_fun=
          check(function(_x8_){return invariant$18(invariant_a,_x8_)});
        caml_call1(observing_fun,observing$0);
        caml_call1(on_update_handlers_fun,on_update_handlers$0);
        caml_call1(prev_in_all_fun,prev_in_all$0);
        caml_call1(next_in_all_fun,next_in_all$1);
        caml_call1(prev_in_observing_fun,prev_in_observing$0);
        return caml_call1(next_in_observing_fun,next_in_observing$0)}
      function _x5_(param){return _j1_}
      function _x6_(_x7_){return sexp_of_internal_observer(_x5_,_x7_)}
      return caml_call4(Base_Invariant[1],_j2_,t,_x6_,_x4_)}
    function value_exn$0(t)
     {var _xU_=t[1];
      if(1 === _xU_)
       {var uopt=t[2][3];
        if(caml_call1(Uopt[5],uopt))
         {var
           _xV_=function(param){return _j3_},
           _xW_=function(_x3_){return sexp_of_internal_observer(_xV_,_x3_)};
          caml_call5
           (Core_kernel[224],
            0,
            _j4_,
            cst_attempt_to_get_value_of_an_invalid_node$0,
            t,
            _xW_)}
        return caml_call1(Uopt[9],uopt)}
      if(0 === _xU_)
       {var
         _xX_=function(param){return _j5_},
         _xY_=function(_x2_){return sexp_of_internal_observer(_xX_,_x2_)};
        return caml_call5
                (Core_kernel[224],
                 0,
                 _j6_,
                 cst_Observer_value_exn_called_without_stabilizing,
                 t,
                 _xY_)}
      function _xZ_(param){return _j7_}
      function _x0_(_x1_){return sexp_of_internal_observer(_xZ_,_x1_)}
      return caml_call5
              (Core_kernel[224],
               0,
               _j8_,
               cst_Observer_value_exn_called_after_disallow_future_use,
               t,
               _x0_)}
    function on_update_exn(t,on_update_handler)
     {if(2 <= t[1])
       {var
         _xQ_=function(param){return _j9_},
         _xR_=function(_xT_){return sexp_of_internal_observer(_xQ_,_xT_)};
        return caml_call5
                (Core_kernel[224],0,_j__,cst_on_update_disallowed,t,_xR_)}
      t[3] = [0,on_update_handler,t[3]];
      var _xS_=t[1];
      if(1 === _xS_)
       {var observing=t[2];observing[7] = observing[7] + 1 | 0;return 0}
      if(0 === _xS_)return 0;
      throw [0,Assert_failure,_j$_]}
    function unlink$0(t)
     {var prev=t[6],next=t[7];
      t[6] = Uopt[3];
      t[7] = Uopt[3];
      if(caml_call1(Uopt[6],next))caml_call1(Uopt[9],next)[6] = prev;
      if(caml_call1(Uopt[6],prev))caml_call1(Uopt[9],prev)[7] = next;
      var observing=t[2],_xN_=caml_call1(Uopt[7],observing[20]);
      if(caml_call2(Core_kernel[234],t,_xN_))observing[20] = next;
      var _xO_=caml_call1(Core_kernel_List[6],t[3]);
      observing[7] = observing[7] - _xO_ | 0;
      t[3] = 0;
      var prev$0=t[4],next$0=t[5];
      t[4] = Uopt[3];
      t[5] = Uopt[3];
      if(caml_call1(Uopt[6],next$0))
       set_prev_in_all(caml_call1(Uopt[9],next$0),prev$0);
      var _xP_=caml_call1(Uopt[6],prev$0);
      if(_xP_)
       {var param=caml_call1(Uopt[9],prev$0);param[5] = next$0;return 0}
      return _xP_}
    function sexp_of_t$33(param)
     {return sexp_of_internal_observer(function(param){return _ka_},param)}
    function invariant$25(param)
     {return invariant$24(function(_xM_){return 0},param)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$88);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _kb_=[0,sexp_of_t$33,invariant$25,next_in_all,set_prev_in_all],
     Incremental_Internal_observer=
      [0,
       invariant$24,
       sexp_of_internal_observer,
       same$2,
       observing,
       use_is_allowed,
       value_exn$0,
       on_update_exn,
       unlink$0,
       _kb_];
    caml_register_global
     (1204,Incremental_Internal_observer,"Incremental__Internal_observer");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$89);
    caml_call1(Expect_test_collector[4][1],cst_src_observer_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$90,cst$29);
    function sexp_of_t$34(of_a,v)
     {function _xK_(_xL_){return sexp_of_internal_observer(of_a,_xL_)}
      return caml_call2(Core_kernel[475],_xK_,v)}
    function invariant$26(invariant_a,t)
     {return invariant$24(invariant_a,t[1])}
    function observing$1(t){return t[1][2]}
    function use_is_allowed$0(t){return use_is_allowed(t[1])}
    function value_exn$1(t){return value_exn$0(t[1])}
    function on_update_exn$0(t,on_update_handler)
     {return on_update_exn(t[1],on_update_handler)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$91);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$5=
      [0,
       invariant$26,
       sexp_of_t$34,
       observing$1,
       use_is_allowed$0,
       value_exn$1,
       on_update_exn$0];
    caml_register_global(1205,include$5,"Incremental__Observer");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$92);
    caml_call1(Expect_test_collector[4][1],cst_src_raised_exn_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$93,cst$30);
    function sexp_of_t$35(param)
     {var
       v_backtrace=param[2],
       v_exn=param[1],
       arg=caml_call1(Base_Backtrace[1],v_backtrace),
       bnds=[0,[1,[0,_kc_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[508],v_exn),
       bnds$0=[0,[1,[0,_kd_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function create$9(exn){return [0,exn,caml_call1(Base_Backtrace[6][4],0)]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$94);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Raised_exn=[0,sexp_of_t$35,create$9];
    caml_register_global
     (1206,Incremental_Raised_exn,"Incremental__Raised_exn");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$95);
    caml_call1(Expect_test_collector[4][1],cst_src_state_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$96,cst$31);
    function sexp_of_status(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return _ke_;case 1:return _kf_;default:return _kg_}
      var v0=param[1],v0$0=sexp_of_t$35(v0);
      return [1,[0,_kh_,[0,v0$0,0]]]}
    function sexp_of_t$36(param)
     {var
       v1=param[2],
       v0=param[1],
       v0$0=sexp_of_t$26(function(param){return _ki_},v0);
      function _xJ_(param){return _kj_}
      var v1$0=caml_call2(Node_update[2],_xJ_,v1);
      return [1,[0,_kk_,[0,v0$0,[0,v1$0,0]]]]}
    function invariant$27(t)
     {var node=t[1];
      function _xH_(param){return invariant$18(function(_xI_){return 0},node)}
      return caml_call4(Base_Invariant[1],_kl_,t,sexp_of_t$36,_xH_)}
    var Run_on_update_handlers=[0,sexp_of_t$36,invariant$27];
    function expert_nodes_created_by_current_node(r){return r[2]}
    function set_expert_nodes_created_by_current_node(r,v){r[2] = v;return 0}
    function currently_running_node(r){return r[1]}
    function set_currently_running_node(r,v){r[1] = v;return 0}
    function _km_(r,v){return [0,r[1],v]}
    var
     _kn_=[0,set_expert_nodes_created_by_current_node],
     expert_nodes_created_by_current_node$0=
      [0,
       function(param){return 0},
       cst_expert_nodes_created_by_current_node,
       _kn_,
       expert_nodes_created_by_current_node,
       _km_];
    function _ko_(r,v){return [0,v,r[2]]}
    var
     _kp_=[0,set_currently_running_node],
     currently_running_node$0=
      [0,
       function(param){return 0},
       cst_currently_running_node,
       _kp_,
       currently_running_node,
       _ko_];
    function make_creator
     (currently_running_node_fun,
      expert_nodes_created_by_current_node_fun,
      compile_acc)
     {var
       match=
        caml_call2
         (currently_running_node_fun,currently_running_node$0,compile_acc),
       compile_acc$0=match[2],
       currently_running_node_gen=match[1],
       match$0=
        caml_call2
         (expert_nodes_created_by_current_node_fun,
          expert_nodes_created_by_current_node$0,
          compile_acc$0),
       compile_acc$1=match$0[2],
       expert_nodes_created_by_current_node_gen=match$0[1];
      return [0,
              function(acc)
               {var
                 currently_running_node=
                  caml_call1(currently_running_node_gen,acc),
                 expert_nodes_created_by_current_node=
                  caml_call1(expert_nodes_created_by_current_node_gen,acc);
                return [0,
                        currently_running_node,
                        expert_nodes_created_by_current_node]},
              compile_acc$1]}
    function create$10
     (currently_running_node,expert_nodes_created_by_current_node)
     {return [0,currently_running_node,expert_nodes_created_by_current_node]}
    function map$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _xG_=
        caml_call1
         (expert_nodes_created_by_current_node_fun,
          expert_nodes_created_by_current_node$0);
      return [0,
              caml_call1(currently_running_node_fun,currently_running_node$0),
              _xG_]}
    function iter$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {caml_call1(currently_running_node_fun,currently_running_node$0);
      return caml_call1
              (expert_nodes_created_by_current_node_fun,
               expert_nodes_created_by_current_node$0)}
    function fold$0
     (init,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {return caml_call2
              (expert_nodes_created_by_current_node_fun,
               caml_call2
                (currently_running_node_fun,init,currently_running_node$0),
               expert_nodes_created_by_current_node$0)}
    function map_poly(record)
     {var
       _xF_=
        [0,caml_call1(record[1],expert_nodes_created_by_current_node$0),0];
      return [0,caml_call1(record[1],currently_running_node$0),_xF_]}
    function for_all$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _xE_=
        caml_call1(currently_running_node_fun,currently_running_node$0);
      return _xE_
              ?caml_call1
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0)
              :_xE_}
    function exists$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _xD_=
        caml_call1(currently_running_node_fun,currently_running_node$0);
      return _xD_
              ?_xD_
              :caml_call1
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0)}
    function to_list$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _xC_=
        [0,
         caml_call1
          (expert_nodes_created_by_current_node_fun,
           expert_nodes_created_by_current_node$0),
         0];
      return [0,
              caml_call1(currently_running_node_fun,currently_running_node$0),
              _xC_]}
    function iter$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {caml_call3
       (currently_running_node_fun,currently_running_node$0,record,record[1]);
      return caml_call3
              (expert_nodes_created_by_current_node_fun,
               expert_nodes_created_by_current_node$0,
               record,
               record[2])}
    function fold$1
     (record,
      init,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var _xB_=record[2];
      return caml_call4
              (expert_nodes_created_by_current_node_fun,
               caml_call4
                (currently_running_node_fun,
                 init,
                 currently_running_node$0,
                 record,
                 record[1]),
               expert_nodes_created_by_current_node$0,
               record,
               _xB_)}
    function for_all$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _xA_=
        caml_call3
         (currently_running_node_fun,
          currently_running_node$0,
          record,
          record[1]);
      return _xA_
              ?caml_call3
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0,
                 record,
                 record[2])
              :_xA_}
    function exists$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _xz_=
        caml_call3
         (currently_running_node_fun,
          currently_running_node$0,
          record,
          record[1]);
      return _xz_
              ?_xz_
              :caml_call3
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0,
                 record,
                 record[2])}
    function to_list$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _xy_=
        [0,
         caml_call3
          (expert_nodes_created_by_current_node_fun,
           expert_nodes_created_by_current_node$0,
           record,
           record[2]),
         0];
      return [0,
              caml_call3
               (currently_running_node_fun,
                currently_running_node$0,
                record,
                record[1]),
              _xy_]}
    function map$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _xx_=
        caml_call3
         (expert_nodes_created_by_current_node_fun,
          expert_nodes_created_by_current_node$0,
          record,
          record[2]);
      return [0,
              caml_call3
               (currently_running_node_fun,
                currently_running_node$0,
                record,
                record[1]),
              _xx_]}
    function set_all_mutable_fields
     (record,currently_running_node,expert_nodes_created_by_current_node)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = currently_running_node;
      record$0[2] = expert_nodes_created_by_current_node;
      return 0}
    var
     Direct=
      [0,
       iter$1,
       fold$1,
       for_all$1,
       exists$1,
       to_list$1,
       map$1,
       set_all_mutable_fields],
     Fields=
      [0,
       names,
       expert_nodes_created_by_current_node$0,
       currently_running_node$0,
       make_creator,
       create$10,
       map$0,
       iter$0,
       fold$0,
       map_poly,
       for_all$0,
       exists$0,
       to_list$0,
       Direct];
    function sexp_of_t$37(param)
     {var
       v_currently_running_node=param[1],
       v_expert_nodes_created_by_current_node=param[2],
       arg=
        caml_call2
         (Core_kernel[400],Packed$0[1],v_expert_nodes_created_by_current_node),
       bnds=[0,[1,[0,_kq_,[0,arg,0]]],0],
       arg$0=caml_call2(Core_kernel[431],Packed$0[1],v_currently_running_node),
       bnds$0=[0,[1,[0,_kr_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$28(t)
     {function _xs_(param)
       {function _xt_(_xw_){return 0}
        function _xu_(_xv_){return 0}
        return caml_call2(Fields[7],_xu_,_xt_)}
      return caml_call4(Base_Invariant[1],_ks_,t,sexp_of_t$37,_xs_)}
    function create$11(param){return [0,0,0]}
    var
     Only_in_debug=
      [0,
       expert_nodes_created_by_current_node,
       set_expert_nodes_created_by_current_node,
       currently_running_node,
       set_currently_running_node,
       Fields,
       sexp_of_t$37,
       invariant$28,
       create$11];
    function sexp_of_t$38(param)
     {var v0=param[1];
      function _xq_(param){return _kt_}
      function _xr_(param){return _ku_}
      var v0$0=caml_call3(Weak_hashtbl[1],_xr_,_xq_,v0);
      return [1,[0,_kv_,[0,v0$0,0]]]}
    var Packed_weak_hashtbl=[0,sexp_of_t$38];
    function num_var_sets(r){return r[26]}
    function set_num_var_sets(r,v){r[26] = v;return 0}
    function num_nodes_recomputed_directly_because_min_height(r){return r[25]}
    function set_num_nodes_recomputed_directly_because_min_height(r,v)
     {r[25] = v;return 0}
    function num_nodes_recomputed_directly_because_one_child(r){return r[24]}
    function set_num_nodes_recomputed_directly_because_one_child(r,v)
     {r[24] = v;return 0}
    function num_nodes_recomputed(r){return r[23]}
    function set_num_nodes_recomputed(r,v){r[23] = v;return 0}
    function num_nodes_invalidated(r){return r[22]}
    function set_num_nodes_invalidated(r,v){r[22] = v;return 0}
    function num_nodes_created(r){return r[21]}
    function set_num_nodes_created(r,v){r[21] = v;return 0}
    function num_nodes_changed(r){return r[20]}
    function set_num_nodes_changed(r,v){r[20] = v;return 0}
    function num_nodes_became_unnecessary(r){return r[19]}
    function set_num_nodes_became_unnecessary(r,v){r[19] = v;return 0}
    function num_nodes_became_necessary(r){return r[18]}
    function set_num_nodes_became_necessary(r,v){r[18] = v;return 0}
    function weak_hashtbls(r){return r[17]}
    function only_in_debug(r){return r[16]}
    function set_only_in_debug(r,v){r[16] = v;return 0}
    function run_on_update_handlers$0(r){return r[15]}
    function handle_after_stabilization(r){return r[14]}
    function set_during_stabilization(r){return r[13]}
    function disallowed_observers(r){return r[12]}
    function new_observers(r){return r[11]}
    function finalized_observers(r){return r[10]}
    function all_observers(r){return r[9]}
    function set_all_observers(r,v){r[9] = v;return 0}
    function num_active_observers(r){return r[8]}
    function set_num_active_observers(r,v){r[8] = v;return 0}
    function propagate_invalidity(r){return r[7]}
    function adjust_heights_heap(r){return r[6]}
    function recompute_heap(r){return r[5]}
    function current_scope(r){return r[4]}
    function set_current_scope(r,v){r[4] = v;return 0}
    function stabilization_num(r){return r[3]}
    function set_stabilization_num(r,v){r[3] = v;return 0}
    function bind_lhs_change_should_invalidate_rhs(r){return r[2]}
    function status(r){return r[1]}
    function set_status(r,v){r[1] = v;return 0}
    function _kw_(r,v)
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
              v]}
    var
     _kx_=[0,set_num_var_sets],
     num_var_sets$0=
      [0,function(param){return 0},cst_num_var_sets,_kx_,num_var_sets,_kw_];
    function _ky_(r,v)
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
              r[26]]}
    var
     _kz_=[0,set_num_nodes_recomputed_directly_because_min_height],
     num_nodes_recomputed_directly_because_min_height$0=
      [0,
       function(param){return 0},
       cst_num_nodes_recomputed_directly_because_min_height,
       _kz_,
       num_nodes_recomputed_directly_because_min_height,
       _ky_];
    function _kA_(r,v)
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
              r[26]]}
    var
     _kB_=[0,set_num_nodes_recomputed_directly_because_one_child],
     num_nodes_recomputed_directly_because_one_child$0=
      [0,
       function(param){return 0},
       cst_num_nodes_recomputed_directly_because_one_child,
       _kB_,
       num_nodes_recomputed_directly_because_one_child,
       _kA_];
    function _kC_(r,v)
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
              r[26]]}
    var
     _kD_=[0,set_num_nodes_recomputed],
     num_nodes_recomputed$0=
      [0,
       function(param){return 0},
       cst_num_nodes_recomputed,
       _kD_,
       num_nodes_recomputed,
       _kC_];
    function _kE_(r,v)
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
              r[26]]}
    var
     _kF_=[0,set_num_nodes_invalidated],
     num_nodes_invalidated$0=
      [0,
       function(param){return 0},
       cst_num_nodes_invalidated,
       _kF_,
       num_nodes_invalidated,
       _kE_];
    function _kG_(r,v)
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
              r[26]]}
    var
     _kH_=[0,set_num_nodes_created],
     num_nodes_created$0=
      [0,
       function(param){return 0},
       cst_num_nodes_created,
       _kH_,
       num_nodes_created,
       _kG_];
    function _kI_(r,v)
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
              r[26]]}
    var
     _kJ_=[0,set_num_nodes_changed],
     num_nodes_changed$0=
      [0,
       function(param){return 0},
       cst_num_nodes_changed,
       _kJ_,
       num_nodes_changed,
       _kI_];
    function _kK_(r,v)
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
              r[26]]}
    var
     _kL_=[0,set_num_nodes_became_unnecessary],
     num_nodes_became_unnecessary$0=
      [0,
       function(param){return 0},
       cst_num_nodes_became_unnecessary,
       _kL_,
       num_nodes_became_unnecessary,
       _kK_];
    function _kM_(r,v)
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
              r[26]]}
    var
     _kN_=[0,set_num_nodes_became_necessary],
     num_nodes_became_necessary$0=
      [0,
       function(param){return 0},
       cst_num_nodes_became_necessary,
       _kN_,
       num_nodes_became_necessary,
       _kM_];
    function _kO_(r,v)
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
              r[26]]}
    var
     _kP_=0,
     weak_hashtbls$0=
      [0,function(param){return 0},cst_weak_hashtbls,_kP_,weak_hashtbls,_kO_];
    function _kQ_(r,v)
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
              r[26]]}
    var
     _kR_=[0,set_only_in_debug],
     only_in_debug$0=
      [0,function(param){return 0},cst_only_in_debug,_kR_,only_in_debug,_kQ_];
    function _kS_(r,v)
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
              r[26]]}
    var
     _kT_=0,
     run_on_update_handlers$1=
      [0,
       function(param){return 0},
       cst_run_on_update_handlers,
       _kT_,
       run_on_update_handlers$0,
       _kS_];
    function _kU_(r,v)
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
              r[26]]}
    var
     _kV_=0,
     handle_after_stabilization$0=
      [0,
       function(param){return 0},
       cst_handle_after_stabilization,
       _kV_,
       handle_after_stabilization,
       _kU_];
    function _kW_(r,v)
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
              r[26]]}
    var
     _kX_=0,
     set_during_stabilization$0=
      [0,
       function(param){return 0},
       cst_set_during_stabilization,
       _kX_,
       set_during_stabilization,
       _kW_];
    function _kY_(r,v)
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
              r[26]]}
    var
     _kZ_=0,
     disallowed_observers$0=
      [0,
       function(param){return 0},
       cst_disallowed_observers,
       _kZ_,
       disallowed_observers,
       _kY_];
    function _k0_(r,v)
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
              r[26]]}
    var
     _k1_=0,
     new_observers$0=
      [0,function(param){return 0},cst_new_observers,_k1_,new_observers,_k0_];
    function _k2_(r,v)
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
              r[26]]}
    var
     _k3_=0,
     finalized_observers$0=
      [0,
       function(param){return 0},
       cst_finalized_observers,
       _k3_,
       finalized_observers,
       _k2_];
    function _k4_(r,v)
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
              r[26]]}
    var
     _k5_=[0,set_all_observers],
     all_observers$0=
      [0,function(param){return 0},cst_all_observers,_k5_,all_observers,_k4_];
    function _k6_(r,v)
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
              r[26]]}
    var
     _k7_=[0,set_num_active_observers],
     num_active_observers$0=
      [0,
       function(param){return 0},
       cst_num_active_observers,
       _k7_,
       num_active_observers,
       _k6_];
    function _k8_(r,v)
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
              r[26]]}
    var
     _k9_=0,
     propagate_invalidity$0=
      [0,
       function(param){return 0},
       cst_propagate_invalidity,
       _k9_,
       propagate_invalidity,
       _k8_];
    function _k__(r,v)
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
              r[26]]}
    var
     _k$_=0,
     adjust_heights_heap$0=
      [0,
       function(param){return 0},
       cst_adjust_heights_heap,
       _k$_,
       adjust_heights_heap,
       _k__];
    function _la_(r,v)
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
              r[26]]}
    var
     _lb_=0,
     recompute_heap$0=
      [0,
       function(param){return 0},
       cst_recompute_heap,
       _lb_,
       recompute_heap,
       _la_];
    function _lc_(r,v)
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
              r[26]]}
    var
     _ld_=[0,set_current_scope],
     current_scope$0=
      [0,function(param){return 0},cst_current_scope,_ld_,current_scope,_lc_];
    function _le_(r,v)
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
              r[26]]}
    var
     _lf_=[0,set_stabilization_num],
     stabilization_num$0=
      [0,
       function(param){return 0},
       cst_stabilization_num,
       _lf_,
       stabilization_num,
       _le_];
    function _lg_(r,v)
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
              r[26]]}
    var
     _lh_=0,
     bind_lhs_change_should_invalidate_rhs$0=
      [0,
       function(param){return 0},
       cst_bind_lhs_change_should_invalidate_rhs,
       _lh_,
       bind_lhs_change_should_invalidate_rhs,
       _lg_];
    function _li_(r,v)
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
              r[26]]}
    var
     _lj_=[0,set_status],
     status$0=[0,function(param){return 0},cst_status,_lj_,status,_li_];
    function make_creator$0
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun,
      compile_acc)
     {var
       match=caml_call2(status_fun,status$0,compile_acc),
       compile_acc$0=match[2],
       status_gen=match[1],
       match$0=
        caml_call2
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0,
          compile_acc$0),
       compile_acc$1=match$0[2],
       bind_lhs_change_should_invalidate_rhs_gen=match$0[1],
       match$1=
        caml_call2(stabilization_num_fun,stabilization_num$0,compile_acc$1),
       compile_acc$2=match$1[2],
       stabilization_num_gen=match$1[1],
       match$2=caml_call2(current_scope_fun,current_scope$0,compile_acc$2),
       compile_acc$3=match$2[2],
       current_scope_gen=match$2[1],
       match$3=caml_call2(recompute_heap_fun,recompute_heap$0,compile_acc$3),
       compile_acc$4=match$3[2],
       recompute_heap_gen=match$3[1],
       match$4=
        caml_call2
         (adjust_heights_heap_fun,adjust_heights_heap$0,compile_acc$4),
       compile_acc$5=match$4[2],
       adjust_heights_heap_gen=match$4[1],
       match$5=
        caml_call2
         (propagate_invalidity_fun,propagate_invalidity$0,compile_acc$5),
       compile_acc$6=match$5[2],
       propagate_invalidity_gen=match$5[1],
       match$6=
        caml_call2
         (num_active_observers_fun,num_active_observers$0,compile_acc$6),
       compile_acc$7=match$6[2],
       num_active_observers_gen=match$6[1],
       match$7=caml_call2(all_observers_fun,all_observers$0,compile_acc$7),
       compile_acc$8=match$7[2],
       all_observers_gen=match$7[1],
       match$8=
        caml_call2
         (finalized_observers_fun,finalized_observers$0,compile_acc$8),
       compile_acc$9=match$8[2],
       finalized_observers_gen=match$8[1],
       match$9=caml_call2(new_observers_fun,new_observers$0,compile_acc$9),
       compile_acc$10=match$9[2],
       new_observers_gen=match$9[1],
       match$10=
        caml_call2
         (disallowed_observers_fun,disallowed_observers$0,compile_acc$10),
       compile_acc$11=match$10[2],
       disallowed_observers_gen=match$10[1],
       match$11=
        caml_call2
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          compile_acc$11),
       compile_acc$12=match$11[2],
       set_during_stabilization_gen=match$11[1],
       match$12=
        caml_call2
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          compile_acc$12),
       compile_acc$13=match$12[2],
       handle_after_stabilization_gen=match$12[1],
       match$13=
        caml_call2
         (run_on_update_handlers_fun,run_on_update_handlers$1,compile_acc$13),
       compile_acc$14=match$13[2],
       run_on_update_handlers_gen=match$13[1],
       match$14=caml_call2(only_in_debug_fun,only_in_debug$0,compile_acc$14),
       compile_acc$15=match$14[2],
       only_in_debug_gen=match$14[1],
       match$15=caml_call2(weak_hashtbls_fun,weak_hashtbls$0,compile_acc$15),
       compile_acc$16=match$15[2],
       weak_hashtbls_gen=match$15[1],
       match$16=
        caml_call2
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          compile_acc$16),
       compile_acc$17=match$16[2],
       num_nodes_became_necessary_gen=match$16[1],
       match$17=
        caml_call2
         (num_nodes_became_unnecessary_fun,
          num_nodes_became_unnecessary$0,
          compile_acc$17),
       compile_acc$18=match$17[2],
       num_nodes_became_unnecessary_gen=match$17[1],
       match$18=
        caml_call2(num_nodes_changed_fun,num_nodes_changed$0,compile_acc$18),
       compile_acc$19=match$18[2],
       num_nodes_changed_gen=match$18[1],
       match$19=
        caml_call2(num_nodes_created_fun,num_nodes_created$0,compile_acc$19),
       compile_acc$20=match$19[2],
       num_nodes_created_gen=match$19[1],
       match$20=
        caml_call2
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,compile_acc$20),
       compile_acc$21=match$20[2],
       num_nodes_invalidated_gen=match$20[1],
       match$21=
        caml_call2
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,compile_acc$21),
       compile_acc$22=match$21[2],
       num_nodes_recomputed_gen=match$21[1],
       match$22=
        caml_call2
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0,
          compile_acc$22),
       compile_acc$23=match$22[2],
       num_nodes_recomputed_directly_because_one_child_gen=match$22[1],
       match$23=
        caml_call2
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0,
          compile_acc$23),
       compile_acc$24=match$23[2],
       num_nodes_recomputed_directly_because_min_height_gen=match$23[1],
       match$24=caml_call2(num_var_sets_fun,num_var_sets$0,compile_acc$24),
       compile_acc$25=match$24[2],
       num_var_sets_gen=match$24[1];
      return [0,
              function(acc)
               {var
                 status=caml_call1(status_gen,acc),
                 bind_lhs_change_should_invalidate_rhs=
                  caml_call1(bind_lhs_change_should_invalidate_rhs_gen,acc),
                 stabilization_num=caml_call1(stabilization_num_gen,acc),
                 current_scope=caml_call1(current_scope_gen,acc),
                 recompute_heap=caml_call1(recompute_heap_gen,acc),
                 adjust_heights_heap=caml_call1(adjust_heights_heap_gen,acc),
                 propagate_invalidity=caml_call1(propagate_invalidity_gen,acc),
                 num_active_observers=caml_call1(num_active_observers_gen,acc),
                 all_observers=caml_call1(all_observers_gen,acc),
                 finalized_observers=caml_call1(finalized_observers_gen,acc),
                 new_observers=caml_call1(new_observers_gen,acc),
                 disallowed_observers=caml_call1(disallowed_observers_gen,acc),
                 set_during_stabilization=
                  caml_call1(set_during_stabilization_gen,acc),
                 handle_after_stabilization=
                  caml_call1(handle_after_stabilization_gen,acc),
                 run_on_update_handlers=
                  caml_call1(run_on_update_handlers_gen,acc),
                 only_in_debug=caml_call1(only_in_debug_gen,acc),
                 weak_hashtbls=caml_call1(weak_hashtbls_gen,acc),
                 num_nodes_became_necessary=
                  caml_call1(num_nodes_became_necessary_gen,acc),
                 num_nodes_became_unnecessary=
                  caml_call1(num_nodes_became_unnecessary_gen,acc),
                 num_nodes_changed=caml_call1(num_nodes_changed_gen,acc),
                 num_nodes_created=caml_call1(num_nodes_created_gen,acc),
                 num_nodes_invalidated=
                  caml_call1(num_nodes_invalidated_gen,acc),
                 num_nodes_recomputed=caml_call1(num_nodes_recomputed_gen,acc),
                 num_nodes_recomputed_directly_because_one_child=
                  caml_call1
                   (num_nodes_recomputed_directly_because_one_child_gen,acc),
                 num_nodes_recomputed_directly_because_min_height=
                  caml_call1
                   (num_nodes_recomputed_directly_because_min_height_gen,acc),
                 num_var_sets=caml_call1(num_var_sets_gen,acc);
                return [0,
                        status,
                        bind_lhs_change_should_invalidate_rhs,
                        stabilization_num,
                        current_scope,
                        recompute_heap,
                        adjust_heights_heap,
                        propagate_invalidity,
                        num_active_observers,
                        all_observers,
                        finalized_observers,
                        new_observers,
                        disallowed_observers,
                        set_during_stabilization,
                        handle_after_stabilization,
                        run_on_update_handlers,
                        only_in_debug,
                        weak_hashtbls,
                        num_nodes_became_necessary,
                        num_nodes_became_unnecessary,
                        num_nodes_changed,
                        num_nodes_created,
                        num_nodes_invalidated,
                        num_nodes_recomputed,
                        num_nodes_recomputed_directly_because_one_child,
                        num_nodes_recomputed_directly_because_min_height,
                        num_var_sets]},
              compile_acc$25]}
    function create$12
     (status,
      bind_lhs_change_should_invalidate_rhs,
      stabilization_num,
      current_scope,
      recompute_heap,
      adjust_heights_heap,
      propagate_invalidity,
      num_active_observers,
      all_observers,
      finalized_observers,
      new_observers,
      disallowed_observers,
      set_during_stabilization,
      handle_after_stabilization,
      run_on_update_handlers,
      only_in_debug,
      weak_hashtbls,
      num_nodes_became_necessary,
      num_nodes_became_unnecessary,
      num_nodes_changed,
      num_nodes_created,
      num_nodes_invalidated,
      num_nodes_recomputed,
      num_nodes_recomputed_directly_because_one_child,
      num_nodes_recomputed_directly_because_min_height,
      num_var_sets)
     {return [0,
              status,
              bind_lhs_change_should_invalidate_rhs,
              stabilization_num,
              current_scope,
              recompute_heap,
              adjust_heights_heap,
              propagate_invalidity,
              num_active_observers,
              all_observers,
              finalized_observers,
              new_observers,
              disallowed_observers,
              set_during_stabilization,
              handle_after_stabilization,
              run_on_update_handlers,
              only_in_debug,
              weak_hashtbls,
              num_nodes_became_necessary,
              num_nodes_became_unnecessary,
              num_nodes_changed,
              num_nodes_created,
              num_nodes_invalidated,
              num_nodes_recomputed,
              num_nodes_recomputed_directly_because_one_child,
              num_nodes_recomputed_directly_because_min_height,
              num_var_sets]}
    function map$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _w3_=caml_call1(num_var_sets_fun,num_var_sets$0),
       _w4_=
        caml_call1
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0),
       _w5_=
        caml_call1
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0),
       _w6_=caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),
       _w7_=caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),
       _w8_=caml_call1(num_nodes_created_fun,num_nodes_created$0),
       _w9_=caml_call1(num_nodes_changed_fun,num_nodes_changed$0),
       _w__=
        caml_call1
         (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0),
       _w$_=
        caml_call1
         (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
       _xa_=caml_call1(weak_hashtbls_fun,weak_hashtbls$0),
       _xb_=caml_call1(only_in_debug_fun,only_in_debug$0),
       _xc_=caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
       _xd_=
        caml_call1
         (handle_after_stabilization_fun,handle_after_stabilization$0),
       _xe_=
        caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
       _xf_=caml_call1(disallowed_observers_fun,disallowed_observers$0),
       _xg_=caml_call1(new_observers_fun,new_observers$0),
       _xh_=caml_call1(finalized_observers_fun,finalized_observers$0),
       _xi_=caml_call1(all_observers_fun,all_observers$0),
       _xj_=caml_call1(num_active_observers_fun,num_active_observers$0),
       _xk_=caml_call1(propagate_invalidity_fun,propagate_invalidity$0),
       _xl_=caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),
       _xm_=caml_call1(recompute_heap_fun,recompute_heap$0),
       _xn_=caml_call1(current_scope_fun,current_scope$0),
       _xo_=caml_call1(stabilization_num_fun,stabilization_num$0),
       _xp_=
        caml_call1
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0);
      return [0,
              caml_call1(status_fun,status$0),
              _xp_,
              _xo_,
              _xn_,
              _xm_,
              _xl_,
              _xk_,
              _xj_,
              _xi_,
              _xh_,
              _xg_,
              _xf_,
              _xe_,
              _xd_,
              _xc_,
              _xb_,
              _xa_,
              _w$_,
              _w__,
              _w9_,
              _w8_,
              _w7_,
              _w6_,
              _w5_,
              _w4_,
              _w3_]}
    function iter$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {caml_call1(status_fun,status$0);
      caml_call1
       (bind_lhs_change_should_invalidate_rhs_fun,
        bind_lhs_change_should_invalidate_rhs$0);
      caml_call1(stabilization_num_fun,stabilization_num$0);
      caml_call1(current_scope_fun,current_scope$0);
      caml_call1(recompute_heap_fun,recompute_heap$0);
      caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0);
      caml_call1(propagate_invalidity_fun,propagate_invalidity$0);
      caml_call1(num_active_observers_fun,num_active_observers$0);
      caml_call1(all_observers_fun,all_observers$0);
      caml_call1(finalized_observers_fun,finalized_observers$0);
      caml_call1(new_observers_fun,new_observers$0);
      caml_call1(disallowed_observers_fun,disallowed_observers$0);
      caml_call1(set_during_stabilization_fun,set_during_stabilization$0);
      caml_call1(handle_after_stabilization_fun,handle_after_stabilization$0);
      caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1);
      caml_call1(only_in_debug_fun,only_in_debug$0);
      caml_call1(weak_hashtbls_fun,weak_hashtbls$0);
      caml_call1(num_nodes_became_necessary_fun,num_nodes_became_necessary$0);
      caml_call1
       (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0);
      caml_call1(num_nodes_changed_fun,num_nodes_changed$0);
      caml_call1(num_nodes_created_fun,num_nodes_created$0);
      caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0);
      caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0);
      caml_call1
       (num_nodes_recomputed_directly_because_one_child_fun,
        num_nodes_recomputed_directly_because_one_child$0);
      caml_call1
       (num_nodes_recomputed_directly_because_min_height_fun,
        num_nodes_recomputed_directly_because_min_height$0);
      return caml_call1(num_var_sets_fun,num_var_sets$0)}
    function fold$2
     (init,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {return caml_call2
              (num_var_sets_fun,
               caml_call2
                (num_nodes_recomputed_directly_because_min_height_fun,
                 caml_call2
                  (num_nodes_recomputed_directly_because_one_child_fun,
                   caml_call2
                    (num_nodes_recomputed_fun,
                     caml_call2
                      (num_nodes_invalidated_fun,
                       caml_call2
                        (num_nodes_created_fun,
                         caml_call2
                          (num_nodes_changed_fun,
                           caml_call2
                            (num_nodes_became_unnecessary_fun,
                             caml_call2
                              (num_nodes_became_necessary_fun,
                               caml_call2
                                (weak_hashtbls_fun,
                                 caml_call2
                                  (only_in_debug_fun,
                                   caml_call2
                                    (run_on_update_handlers_fun,
                                     caml_call2
                                      (handle_after_stabilization_fun,
                                       caml_call2
                                        (set_during_stabilization_fun,
                                         caml_call2
                                          (disallowed_observers_fun,
                                           caml_call2
                                            (new_observers_fun,
                                             caml_call2
                                              (finalized_observers_fun,
                                               caml_call2
                                                (all_observers_fun,
                                                 caml_call2
                                                  (num_active_observers_fun,
                                                   caml_call2
                                                    (propagate_invalidity_fun,
                                                     caml_call2
                                                      (adjust_heights_heap_fun,
                                                       caml_call2
                                                        (recompute_heap_fun,
                                                         caml_call2
                                                          (current_scope_fun,
                                                           caml_call2
                                                            (stabilization_num_fun,
                                                             caml_call2
                                                              (bind_lhs_change_should_invalidate_rhs_fun,
                                                               caml_call2(status_fun,init,status$0),
                                                               bind_lhs_change_should_invalidate_rhs$0),
                                                             stabilization_num$0),
                                                           current_scope$0),
                                                         recompute_heap$0),
                                                       adjust_heights_heap$0),
                                                     propagate_invalidity$0),
                                                   num_active_observers$0),
                                                 all_observers$0),
                                               finalized_observers$0),
                                             new_observers$0),
                                           disallowed_observers$0),
                                         set_during_stabilization$0),
                                       handle_after_stabilization$0),
                                     run_on_update_handlers$1),
                                   only_in_debug$0),
                                 weak_hashtbls$0),
                               num_nodes_became_necessary$0),
                             num_nodes_became_unnecessary$0),
                           num_nodes_changed$0),
                         num_nodes_created$0),
                       num_nodes_invalidated$0),
                     num_nodes_recomputed$0),
                   num_nodes_recomputed_directly_because_one_child$0),
                 num_nodes_recomputed_directly_because_min_height$0),
               num_var_sets$0)}
    function map_poly$0(record)
     {var
       _wE_=[0,caml_call1(record[1],num_var_sets$0),0],
       _wF_=
        [0,
         caml_call1
          (record[1],num_nodes_recomputed_directly_because_min_height$0),
         _wE_],
       _wG_=
        [0,
         caml_call1
          (record[1],num_nodes_recomputed_directly_because_one_child$0),
         _wF_],
       _wH_=[0,caml_call1(record[1],num_nodes_recomputed$0),_wG_],
       _wI_=[0,caml_call1(record[1],num_nodes_invalidated$0),_wH_],
       _wJ_=[0,caml_call1(record[1],num_nodes_created$0),_wI_],
       _wK_=[0,caml_call1(record[1],num_nodes_changed$0),_wJ_],
       _wL_=[0,caml_call1(record[1],num_nodes_became_unnecessary$0),_wK_],
       _wM_=[0,caml_call1(record[1],num_nodes_became_necessary$0),_wL_],
       _wN_=[0,caml_call1(record[1],weak_hashtbls$0),_wM_],
       _wO_=[0,caml_call1(record[1],only_in_debug$0),_wN_],
       _wP_=[0,caml_call1(record[1],run_on_update_handlers$1),_wO_],
       _wQ_=[0,caml_call1(record[1],handle_after_stabilization$0),_wP_],
       _wR_=[0,caml_call1(record[1],set_during_stabilization$0),_wQ_],
       _wS_=[0,caml_call1(record[1],disallowed_observers$0),_wR_],
       _wT_=[0,caml_call1(record[1],new_observers$0),_wS_],
       _wU_=[0,caml_call1(record[1],finalized_observers$0),_wT_],
       _wV_=[0,caml_call1(record[1],all_observers$0),_wU_],
       _wW_=[0,caml_call1(record[1],num_active_observers$0),_wV_],
       _wX_=[0,caml_call1(record[1],propagate_invalidity$0),_wW_],
       _wY_=[0,caml_call1(record[1],adjust_heights_heap$0),_wX_],
       _wZ_=[0,caml_call1(record[1],recompute_heap$0),_wY_],
       _w0_=[0,caml_call1(record[1],current_scope$0),_wZ_],
       _w1_=[0,caml_call1(record[1],stabilization_num$0),_w0_],
       _w2_=
        [0,caml_call1(record[1],bind_lhs_change_should_invalidate_rhs$0),_w1_];
      return [0,caml_call1(record[1],status$0),_w2_]}
    function for_all$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _wf_=caml_call1(status_fun,status$0),
       _wg_=
        _wf_
         ?caml_call1
           (bind_lhs_change_should_invalidate_rhs_fun,
            bind_lhs_change_should_invalidate_rhs$0)
         :_wf_,
       _wh_=_wg_?caml_call1(stabilization_num_fun,stabilization_num$0):_wg_,
       _wi_=_wh_?caml_call1(current_scope_fun,current_scope$0):_wh_,
       _wj_=_wi_?caml_call1(recompute_heap_fun,recompute_heap$0):_wi_,
       _wk_=
        _wj_?caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0):_wj_,
       _wl_=
        _wk_?caml_call1(propagate_invalidity_fun,propagate_invalidity$0):_wk_,
       _wm_=
        _wl_?caml_call1(num_active_observers_fun,num_active_observers$0):_wl_,
       _wn_=_wm_?caml_call1(all_observers_fun,all_observers$0):_wm_,
       _wo_=
        _wn_?caml_call1(finalized_observers_fun,finalized_observers$0):_wn_,
       _wp_=_wo_?caml_call1(new_observers_fun,new_observers$0):_wo_,
       _wq_=
        _wp_?caml_call1(disallowed_observers_fun,disallowed_observers$0):_wp_,
       _wr_=
        _wq_
         ?caml_call1(set_during_stabilization_fun,set_during_stabilization$0)
         :_wq_,
       _ws_=
        _wr_
         ?caml_call1
           (handle_after_stabilization_fun,handle_after_stabilization$0)
         :_wr_,
       _wt_=
        _ws_
         ?caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1)
         :_ws_,
       _wu_=_wt_?caml_call1(only_in_debug_fun,only_in_debug$0):_wt_,
       _wv_=_wu_?caml_call1(weak_hashtbls_fun,weak_hashtbls$0):_wu_,
       _ww_=
        _wv_
         ?caml_call1
           (num_nodes_became_necessary_fun,num_nodes_became_necessary$0)
         :_wv_,
       _wx_=
        _ww_
         ?caml_call1
           (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0)
         :_ww_,
       _wy_=_wx_?caml_call1(num_nodes_changed_fun,num_nodes_changed$0):_wx_,
       _wz_=_wy_?caml_call1(num_nodes_created_fun,num_nodes_created$0):_wy_,
       _wA_=
        _wz_
         ?caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0)
         :_wz_,
       _wB_=
        _wA_?caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0):_wA_,
       _wC_=
        _wB_
         ?caml_call1
           (num_nodes_recomputed_directly_because_one_child_fun,
            num_nodes_recomputed_directly_because_one_child$0)
         :_wB_,
       _wD_=
        _wC_
         ?caml_call1
           (num_nodes_recomputed_directly_because_min_height_fun,
            num_nodes_recomputed_directly_because_min_height$0)
         :_wC_;
      return _wD_?caml_call1(num_var_sets_fun,num_var_sets$0):_wD_}
    function exists$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _we_=caml_call1(status_fun,status$0),
       _vS_=
        _we_
        ||
        caml_call1
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0),
       _vT_=_vS_ || caml_call1(stabilization_num_fun,stabilization_num$0),
       _vU_=_vT_ || caml_call1(current_scope_fun,current_scope$0),
       _vV_=_vU_ || caml_call1(recompute_heap_fun,recompute_heap$0),
       _vW_=_vV_ || caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),
       _vX_=
        _vW_
        ||
        caml_call1(propagate_invalidity_fun,propagate_invalidity$0),
       _vY_=
        _vX_
        ||
        caml_call1(num_active_observers_fun,num_active_observers$0),
       _vZ_=_vY_ || caml_call1(all_observers_fun,all_observers$0),
       _v0_=_vZ_ || caml_call1(finalized_observers_fun,finalized_observers$0),
       _v1_=_v0_ || caml_call1(new_observers_fun,new_observers$0),
       _v2_=
        _v1_
        ||
        caml_call1(disallowed_observers_fun,disallowed_observers$0),
       _v3_=
        _v2_
        ||
        caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
       _v4_=
        _v3_
        ||
        caml_call1
         (handle_after_stabilization_fun,handle_after_stabilization$0),
       _v5_=
        _v4_
        ||
        caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
       _v6_=_v5_ || caml_call1(only_in_debug_fun,only_in_debug$0),
       _v7_=_v6_ || caml_call1(weak_hashtbls_fun,weak_hashtbls$0),
       _v8_=
        _v7_
        ||
        caml_call1
         (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
       _v9_=
        _v8_
        ||
        caml_call1
         (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0),
       _v__=_v9_ || caml_call1(num_nodes_changed_fun,num_nodes_changed$0),
       _v$_=_v__ || caml_call1(num_nodes_created_fun,num_nodes_created$0),
       _wa_=
        _v$_
        ||
        caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),
       _wb_=
        _wa_
        ||
        caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),
       _wc_=
        _wb_
        ||
        caml_call1
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0),
       _wd_=
        _wc_
        ||
        caml_call1
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0);
      return _wd_?_wd_:caml_call1(num_var_sets_fun,num_var_sets$0)}
    function to_list$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _vt_=[0,caml_call1(num_var_sets_fun,num_var_sets$0),0],
       _vu_=
        [0,
         caml_call1
          (num_nodes_recomputed_directly_because_min_height_fun,
           num_nodes_recomputed_directly_because_min_height$0),
         _vt_],
       _vv_=
        [0,
         caml_call1
          (num_nodes_recomputed_directly_because_one_child_fun,
           num_nodes_recomputed_directly_because_one_child$0),
         _vu_],
       _vw_=
        [0,caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),_vv_],
       _vx_=
        [0,caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),_vw_],
       _vy_=[0,caml_call1(num_nodes_created_fun,num_nodes_created$0),_vx_],
       _vz_=[0,caml_call1(num_nodes_changed_fun,num_nodes_changed$0),_vy_],
       _vA_=
        [0,
         caml_call1
          (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0),
         _vz_],
       _vB_=
        [0,
         caml_call1
          (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
         _vA_],
       _vC_=[0,caml_call1(weak_hashtbls_fun,weak_hashtbls$0),_vB_],
       _vD_=[0,caml_call1(only_in_debug_fun,only_in_debug$0),_vC_],
       _vE_=
        [0,
         caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
         _vD_],
       _vF_=
        [0,
         caml_call1
          (handle_after_stabilization_fun,handle_after_stabilization$0),
         _vE_],
       _vG_=
        [0,
         caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
         _vF_],
       _vH_=
        [0,caml_call1(disallowed_observers_fun,disallowed_observers$0),_vG_],
       _vI_=[0,caml_call1(new_observers_fun,new_observers$0),_vH_],
       _vJ_=[0,caml_call1(finalized_observers_fun,finalized_observers$0),_vI_],
       _vK_=[0,caml_call1(all_observers_fun,all_observers$0),_vJ_],
       _vL_=
        [0,caml_call1(num_active_observers_fun,num_active_observers$0),_vK_],
       _vM_=
        [0,caml_call1(propagate_invalidity_fun,propagate_invalidity$0),_vL_],
       _vN_=[0,caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),_vM_],
       _vO_=[0,caml_call1(recompute_heap_fun,recompute_heap$0),_vN_],
       _vP_=[0,caml_call1(current_scope_fun,current_scope$0),_vO_],
       _vQ_=[0,caml_call1(stabilization_num_fun,stabilization_num$0),_vP_],
       _vR_=
        [0,
         caml_call1
          (bind_lhs_change_should_invalidate_rhs_fun,
           bind_lhs_change_should_invalidate_rhs$0),
         _vQ_];
      return [0,caml_call1(status_fun,status$0),_vR_]}
    function iter$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {caml_call3(status_fun,status$0,record,record[1]);
      caml_call3
       (bind_lhs_change_should_invalidate_rhs_fun,
        bind_lhs_change_should_invalidate_rhs$0,
        record,
        record[2]);
      caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]);
      caml_call3(current_scope_fun,current_scope$0,record,record[4]);
      caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]);
      caml_call3
       (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]);
      caml_call3
       (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]);
      caml_call3
       (num_active_observers_fun,num_active_observers$0,record,record[8]);
      caml_call3(all_observers_fun,all_observers$0,record,record[9]);
      caml_call3
       (finalized_observers_fun,finalized_observers$0,record,record[10]);
      caml_call3(new_observers_fun,new_observers$0,record,record[11]);
      caml_call3
       (disallowed_observers_fun,disallowed_observers$0,record,record[12]);
      caml_call3
       (set_during_stabilization_fun,
        set_during_stabilization$0,
        record,
        record[13]);
      caml_call3
       (handle_after_stabilization_fun,
        handle_after_stabilization$0,
        record,
        record[14]);
      caml_call3
       (run_on_update_handlers_fun,run_on_update_handlers$1,record,record[15]);
      caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]);
      caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]);
      caml_call3
       (num_nodes_became_necessary_fun,
        num_nodes_became_necessary$0,
        record,
        record[18]);
      caml_call3
       (num_nodes_became_unnecessary_fun,
        num_nodes_became_unnecessary$0,
        record,
        record[19]);
      caml_call3(num_nodes_changed_fun,num_nodes_changed$0,record,record[20]);
      caml_call3(num_nodes_created_fun,num_nodes_created$0,record,record[21]);
      caml_call3
       (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[22]);
      caml_call3
       (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[23]);
      caml_call3
       (num_nodes_recomputed_directly_because_one_child_fun,
        num_nodes_recomputed_directly_because_one_child$0,
        record,
        record[24]);
      caml_call3
       (num_nodes_recomputed_directly_because_min_height_fun,
        num_nodes_recomputed_directly_because_min_height$0,
        record,
        record[25]);
      return caml_call3(num_var_sets_fun,num_var_sets$0,record,record[26])}
    function fold$3
     (record,
      init,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _u6_=record[26],
       _u7_=record[25],
       _u8_=record[24],
       _u9_=record[23],
       _u__=record[22],
       _u$_=record[21],
       _va_=record[20],
       _vb_=record[19],
       _vc_=record[18],
       _vd_=record[17],
       _ve_=record[16],
       _vf_=record[15],
       _vg_=record[14],
       _vh_=record[13],
       _vi_=record[12],
       _vj_=record[11],
       _vk_=record[10],
       _vl_=record[9],
       _vm_=record[8],
       _vn_=record[7],
       _vo_=record[6],
       _vp_=record[5],
       _vq_=record[4],
       _vr_=record[3],
       _vs_=record[2];
      return caml_call4
              (num_var_sets_fun,
               caml_call4
                (num_nodes_recomputed_directly_because_min_height_fun,
                 caml_call4
                  (num_nodes_recomputed_directly_because_one_child_fun,
                   caml_call4
                    (num_nodes_recomputed_fun,
                     caml_call4
                      (num_nodes_invalidated_fun,
                       caml_call4
                        (num_nodes_created_fun,
                         caml_call4
                          (num_nodes_changed_fun,
                           caml_call4
                            (num_nodes_became_unnecessary_fun,
                             caml_call4
                              (num_nodes_became_necessary_fun,
                               caml_call4
                                (weak_hashtbls_fun,
                                 caml_call4
                                  (only_in_debug_fun,
                                   caml_call4
                                    (run_on_update_handlers_fun,
                                     caml_call4
                                      (handle_after_stabilization_fun,
                                       caml_call4
                                        (set_during_stabilization_fun,
                                         caml_call4
                                          (disallowed_observers_fun,
                                           caml_call4
                                            (new_observers_fun,
                                             caml_call4
                                              (finalized_observers_fun,
                                               caml_call4
                                                (all_observers_fun,
                                                 caml_call4
                                                  (num_active_observers_fun,
                                                   caml_call4
                                                    (propagate_invalidity_fun,
                                                     caml_call4
                                                      (adjust_heights_heap_fun,
                                                       caml_call4
                                                        (recompute_heap_fun,
                                                         caml_call4
                                                          (current_scope_fun,
                                                           caml_call4
                                                            (stabilization_num_fun,
                                                             caml_call4
                                                              (bind_lhs_change_should_invalidate_rhs_fun,
                                                               caml_call4(status_fun,init,status$0,record,record[1]),
                                                               bind_lhs_change_should_invalidate_rhs$0,
                                                               record,
                                                               _vs_),
                                                             stabilization_num$0,
                                                             record,
                                                             _vr_),
                                                           current_scope$0,
                                                           record,
                                                           _vq_),
                                                         recompute_heap$0,
                                                         record,
                                                         _vp_),
                                                       adjust_heights_heap$0,
                                                       record,
                                                       _vo_),
                                                     propagate_invalidity$0,
                                                     record,
                                                     _vn_),
                                                   num_active_observers$0,
                                                   record,
                                                   _vm_),
                                                 all_observers$0,
                                                 record,
                                                 _vl_),
                                               finalized_observers$0,
                                               record,
                                               _vk_),
                                             new_observers$0,
                                             record,
                                             _vj_),
                                           disallowed_observers$0,
                                           record,
                                           _vi_),
                                         set_during_stabilization$0,
                                         record,
                                         _vh_),
                                       handle_after_stabilization$0,
                                       record,
                                       _vg_),
                                     run_on_update_handlers$1,
                                     record,
                                     _vf_),
                                   only_in_debug$0,
                                   record,
                                   _ve_),
                                 weak_hashtbls$0,
                                 record,
                                 _vd_),
                               num_nodes_became_necessary$0,
                               record,
                               _vc_),
                             num_nodes_became_unnecessary$0,
                             record,
                             _vb_),
                           num_nodes_changed$0,
                           record,
                           _va_),
                         num_nodes_created$0,
                         record,
                         _u$_),
                       num_nodes_invalidated$0,
                       record,
                       _u__),
                     num_nodes_recomputed$0,
                     record,
                     _u9_),
                   num_nodes_recomputed_directly_because_one_child$0,
                   record,
                   _u8_),
                 num_nodes_recomputed_directly_because_min_height$0,
                 record,
                 _u7_),
               num_var_sets$0,
               record,
               _u6_)}
    function for_all$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _uH_=caml_call3(status_fun,status$0,record,record[1]),
       _uI_=
        _uH_
         ?caml_call3
           (bind_lhs_change_should_invalidate_rhs_fun,
            bind_lhs_change_should_invalidate_rhs$0,
            record,
            record[2])
         :_uH_,
       _uJ_=
        _uI_
         ?caml_call3
           (stabilization_num_fun,stabilization_num$0,record,record[3])
         :_uI_,
       _uK_=
        _uJ_
         ?caml_call3(current_scope_fun,current_scope$0,record,record[4])
         :_uJ_,
       _uL_=
        _uK_
         ?caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5])
         :_uK_,
       _uM_=
        _uL_
         ?caml_call3
           (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6])
         :_uL_,
       _uN_=
        _uM_
         ?caml_call3
           (propagate_invalidity_fun,propagate_invalidity$0,record,record[7])
         :_uM_,
       _uO_=
        _uN_
         ?caml_call3
           (num_active_observers_fun,num_active_observers$0,record,record[8])
         :_uN_,
       _uP_=
        _uO_
         ?caml_call3(all_observers_fun,all_observers$0,record,record[9])
         :_uO_,
       _uQ_=
        _uP_
         ?caml_call3
           (finalized_observers_fun,finalized_observers$0,record,record[10])
         :_uP_,
       _uR_=
        _uQ_
         ?caml_call3(new_observers_fun,new_observers$0,record,record[11])
         :_uQ_,
       _uS_=
        _uR_
         ?caml_call3
           (disallowed_observers_fun,disallowed_observers$0,record,record[12])
         :_uR_,
       _uT_=
        _uS_
         ?caml_call3
           (set_during_stabilization_fun,
            set_during_stabilization$0,
            record,
            record[13])
         :_uS_,
       _uU_=
        _uT_
         ?caml_call3
           (handle_after_stabilization_fun,
            handle_after_stabilization$0,
            record,
            record[14])
         :_uT_,
       _uV_=
        _uU_
         ?caml_call3
           (run_on_update_handlers_fun,
            run_on_update_handlers$1,
            record,
            record[15])
         :_uU_,
       _uW_=
        _uV_
         ?caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16])
         :_uV_,
       _uX_=
        _uW_
         ?caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17])
         :_uW_,
       _uY_=
        _uX_
         ?caml_call3
           (num_nodes_became_necessary_fun,
            num_nodes_became_necessary$0,
            record,
            record[18])
         :_uX_,
       _uZ_=
        _uY_
         ?caml_call3
           (num_nodes_became_unnecessary_fun,
            num_nodes_became_unnecessary$0,
            record,
            record[19])
         :_uY_,
       _u0_=
        _uZ_
         ?caml_call3
           (num_nodes_changed_fun,num_nodes_changed$0,record,record[20])
         :_uZ_,
       _u1_=
        _u0_
         ?caml_call3
           (num_nodes_created_fun,num_nodes_created$0,record,record[21])
         :_u0_,
       _u2_=
        _u1_
         ?caml_call3
           (num_nodes_invalidated_fun,
            num_nodes_invalidated$0,
            record,
            record[22])
         :_u1_,
       _u3_=
        _u2_
         ?caml_call3
           (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[23])
         :_u2_,
       _u4_=
        _u3_
         ?caml_call3
           (num_nodes_recomputed_directly_because_one_child_fun,
            num_nodes_recomputed_directly_because_one_child$0,
            record,
            record[24])
         :_u3_,
       _u5_=
        _u4_
         ?caml_call3
           (num_nodes_recomputed_directly_because_min_height_fun,
            num_nodes_recomputed_directly_because_min_height$0,
            record,
            record[25])
         :_u4_;
      return _u5_
              ?caml_call3(num_var_sets_fun,num_var_sets$0,record,record[26])
              :_u5_}
    function exists$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _uG_=caml_call3(status_fun,status$0,record,record[1]),
       _ui_=
        _uG_
        ||
        caml_call3
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0,
          record,
          record[2]),
       _uj_=
        _ui_
        ||
        caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]),
       _uk_=
        _uj_
        ||
        caml_call3(current_scope_fun,current_scope$0,record,record[4]),
       _ul_=
        _uk_
        ||
        caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
       _um_=
        _ul_
        ||
        caml_call3
         (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
       _un_=
        _um_
        ||
        caml_call3
         (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
       _uo_=
        _un_
        ||
        caml_call3
         (num_active_observers_fun,num_active_observers$0,record,record[8]),
       _up_=
        _uo_
        ||
        caml_call3(all_observers_fun,all_observers$0,record,record[9]),
       _uq_=
        _up_
        ||
        caml_call3
         (finalized_observers_fun,finalized_observers$0,record,record[10]),
       _ur_=
        _uq_
        ||
        caml_call3(new_observers_fun,new_observers$0,record,record[11]),
       _us_=
        _ur_
        ||
        caml_call3
         (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
       _ut_=
        _us_
        ||
        caml_call3
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          record,
          record[13]),
       _uu_=
        _ut_
        ||
        caml_call3
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          record,
          record[14]),
       _uv_=
        _uu_
        ||
        caml_call3
         (run_on_update_handlers_fun,
          run_on_update_handlers$1,
          record,
          record[15]),
       _uw_=
        _uv_
        ||
        caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]),
       _ux_=
        _uw_
        ||
        caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]),
       _uy_=
        _ux_
        ||
        caml_call3
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          record,
          record[18]),
       _uz_=
        _uy_
        ||
        caml_call3
         (num_nodes_became_unnecessary_fun,
          num_nodes_became_unnecessary$0,
          record,
          record[19]),
       _uA_=
        _uz_
        ||
        caml_call3
         (num_nodes_changed_fun,num_nodes_changed$0,record,record[20]),
       _uB_=
        _uA_
        ||
        caml_call3
         (num_nodes_created_fun,num_nodes_created$0,record,record[21]),
       _uC_=
        _uB_
        ||
        caml_call3
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[22]),
       _uD_=
        _uC_
        ||
        caml_call3
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[23]),
       _uE_=
        _uD_
        ||
        caml_call3
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0,
          record,
          record[24]),
       _uF_=
        _uE_
        ||
        caml_call3
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0,
          record,
          record[25]);
      return _uF_
              ?_uF_
              :caml_call3(num_var_sets_fun,num_var_sets$0,record,record[26])}
    function to_list$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _tV_=
        [0,caml_call3(num_var_sets_fun,num_var_sets$0,record,record[26]),0],
       _tW_=
        [0,
         caml_call3
          (num_nodes_recomputed_directly_because_min_height_fun,
           num_nodes_recomputed_directly_because_min_height$0,
           record,
           record[25]),
         _tV_],
       _tX_=
        [0,
         caml_call3
          (num_nodes_recomputed_directly_because_one_child_fun,
           num_nodes_recomputed_directly_because_one_child$0,
           record,
           record[24]),
         _tW_],
       _tY_=
        [0,
         caml_call3
          (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[23]),
         _tX_],
       _tZ_=
        [0,
         caml_call3
          (num_nodes_invalidated_fun,
           num_nodes_invalidated$0,
           record,
           record[22]),
         _tY_],
       _t0_=
        [0,
         caml_call3
          (num_nodes_created_fun,num_nodes_created$0,record,record[21]),
         _tZ_],
       _t1_=
        [0,
         caml_call3
          (num_nodes_changed_fun,num_nodes_changed$0,record,record[20]),
         _t0_],
       _t2_=
        [0,
         caml_call3
          (num_nodes_became_unnecessary_fun,
           num_nodes_became_unnecessary$0,
           record,
           record[19]),
         _t1_],
       _t3_=
        [0,
         caml_call3
          (num_nodes_became_necessary_fun,
           num_nodes_became_necessary$0,
           record,
           record[18]),
         _t2_],
       _t4_=
        [0,
         caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]),
         _t3_],
       _t5_=
        [0,
         caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]),
         _t4_],
       _t6_=
        [0,
         caml_call3
          (run_on_update_handlers_fun,
           run_on_update_handlers$1,
           record,
           record[15]),
         _t5_],
       _t7_=
        [0,
         caml_call3
          (handle_after_stabilization_fun,
           handle_after_stabilization$0,
           record,
           record[14]),
         _t6_],
       _t8_=
        [0,
         caml_call3
          (set_during_stabilization_fun,
           set_during_stabilization$0,
           record,
           record[13]),
         _t7_],
       _t9_=
        [0,
         caml_call3
          (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
         _t8_],
       _t__=
        [0,
         caml_call3(new_observers_fun,new_observers$0,record,record[11]),
         _t9_],
       _t$_=
        [0,
         caml_call3
          (finalized_observers_fun,finalized_observers$0,record,record[10]),
         _t__],
       _ua_=
        [0,
         caml_call3(all_observers_fun,all_observers$0,record,record[9]),
         _t$_],
       _ub_=
        [0,
         caml_call3
          (num_active_observers_fun,num_active_observers$0,record,record[8]),
         _ua_],
       _uc_=
        [0,
         caml_call3
          (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
         _ub_],
       _ud_=
        [0,
         caml_call3
          (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
         _uc_],
       _ue_=
        [0,
         caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
         _ud_],
       _uf_=
        [0,
         caml_call3(current_scope_fun,current_scope$0,record,record[4]),
         _ue_],
       _ug_=
        [0,
         caml_call3
          (stabilization_num_fun,stabilization_num$0,record,record[3]),
         _uf_],
       _uh_=
        [0,
         caml_call3
          (bind_lhs_change_should_invalidate_rhs_fun,
           bind_lhs_change_should_invalidate_rhs$0,
           record,
           record[2]),
         _ug_];
      return [0,caml_call3(status_fun,status$0,record,record[1]),_uh_]}
    function map$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _tw_=caml_call3(num_var_sets_fun,num_var_sets$0,record,record[26]),
       _tx_=
        caml_call3
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0,
          record,
          record[25]),
       _ty_=
        caml_call3
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0,
          record,
          record[24]),
       _tz_=
        caml_call3
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[23]),
       _tA_=
        caml_call3
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[22]),
       _tB_=
        caml_call3
         (num_nodes_created_fun,num_nodes_created$0,record,record[21]),
       _tC_=
        caml_call3
         (num_nodes_changed_fun,num_nodes_changed$0,record,record[20]),
       _tD_=
        caml_call3
         (num_nodes_became_unnecessary_fun,
          num_nodes_became_unnecessary$0,
          record,
          record[19]),
       _tE_=
        caml_call3
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          record,
          record[18]),
       _tF_=caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]),
       _tG_=caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]),
       _tH_=
        caml_call3
         (run_on_update_handlers_fun,
          run_on_update_handlers$1,
          record,
          record[15]),
       _tI_=
        caml_call3
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          record,
          record[14]),
       _tJ_=
        caml_call3
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          record,
          record[13]),
       _tK_=
        caml_call3
         (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
       _tL_=caml_call3(new_observers_fun,new_observers$0,record,record[11]),
       _tM_=
        caml_call3
         (finalized_observers_fun,finalized_observers$0,record,record[10]),
       _tN_=caml_call3(all_observers_fun,all_observers$0,record,record[9]),
       _tO_=
        caml_call3
         (num_active_observers_fun,num_active_observers$0,record,record[8]),
       _tP_=
        caml_call3
         (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
       _tQ_=
        caml_call3
         (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
       _tR_=caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
       _tS_=caml_call3(current_scope_fun,current_scope$0,record,record[4]),
       _tT_=
        caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]),
       _tU_=
        caml_call3
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0,
          record,
          record[2]);
      return [0,
              caml_call3(status_fun,status$0,record,record[1]),
              _tU_,
              _tT_,
              _tS_,
              _tR_,
              _tQ_,
              _tP_,
              _tO_,
              _tN_,
              _tM_,
              _tL_,
              _tK_,
              _tJ_,
              _tI_,
              _tH_,
              _tG_,
              _tF_,
              _tE_,
              _tD_,
              _tC_,
              _tB_,
              _tA_,
              _tz_,
              _ty_,
              _tx_,
              _tw_]}
    function set_all_mutable_fields$0
     (record,
      status,
      stabilization_num,
      current_scope,
      num_active_observers,
      all_observers,
      only_in_debug,
      num_nodes_became_necessary,
      num_nodes_became_unnecessary,
      num_nodes_changed,
      num_nodes_created,
      num_nodes_invalidated,
      num_nodes_recomputed,
      num_nodes_recomputed_directly_because_one_child,
      num_nodes_recomputed_directly_because_min_height,
      num_var_sets)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = status;
      record$0[3] = stabilization_num;
      record$0[4] = current_scope;
      record$0[8] = num_active_observers;
      record$0[9] = all_observers;
      record$0[16] = only_in_debug;
      record$0[18] = num_nodes_became_necessary;
      record$0[19] = num_nodes_became_unnecessary;
      record$0[20] = num_nodes_changed;
      record$0[21] = num_nodes_created;
      record$0[22] = num_nodes_invalidated;
      record$0[23] = num_nodes_recomputed;
      record$0[24] = num_nodes_recomputed_directly_because_one_child;
      record$0[25] = num_nodes_recomputed_directly_because_min_height;
      record$0[26] = num_var_sets;
      return 0}
    var
     Direct$0=
      [0,
       iter$3,
       fold$3,
       for_all$3,
       exists$3,
       to_list$3,
       map$3,
       set_all_mutable_fields$0],
     Fields$0=
      [0,
       names$0,
       num_var_sets$0,
       num_nodes_recomputed_directly_because_min_height$0,
       num_nodes_recomputed_directly_because_one_child$0,
       num_nodes_recomputed$0,
       num_nodes_invalidated$0,
       num_nodes_created$0,
       num_nodes_changed$0,
       num_nodes_became_unnecessary$0,
       num_nodes_became_necessary$0,
       weak_hashtbls$0,
       only_in_debug$0,
       run_on_update_handlers$1,
       handle_after_stabilization$0,
       set_during_stabilization$0,
       disallowed_observers$0,
       new_observers$0,
       finalized_observers$0,
       all_observers$0,
       num_active_observers$0,
       propagate_invalidity$0,
       adjust_heights_heap$0,
       recompute_heap$0,
       current_scope$0,
       stabilization_num$0,
       bind_lhs_change_should_invalidate_rhs$0,
       status$0,
       make_creator$0,
       create$12,
       map$2,
       iter$2,
       fold$2,
       map_poly$0,
       for_all$2,
       exists$2,
       to_list$2,
       Direct$0];
    function sexp_of_t$39(param)
     {var
       v_status=param[1],
       v_bind_lhs_change_should_invalidate_rhs=param[2],
       v_stabilization_num=param[3],
       v_current_scope=param[4],
       v_propagate_invalidity=param[7],
       v_adjust_heights_heap=param[6],
       v_recompute_heap=param[5],
       v_num_active_observers=param[8],
       v_all_observers=param[9],
       v_run_on_update_handlers=param[15],
       v_handle_after_stabilization=param[14],
       v_set_during_stabilization=param[13],
       v_disallowed_observers=param[12],
       v_new_observers=param[11],
       v_finalized_observers=param[10],
       v_only_in_debug=param[16],
       v_weak_hashtbls=param[17],
       v_num_nodes_became_necessary=param[18],
       v_num_nodes_became_unnecessary=param[19],
       v_num_nodes_changed=param[20],
       v_num_nodes_created=param[21],
       v_num_nodes_invalidated=param[22],
       v_num_nodes_recomputed=param[23],
       v_num_nodes_recomputed_directly_because_one_child=param[24],
       v_num_nodes_recomputed_directly_because_min_height=param[25],
       v_num_var_sets=param[26],
       arg=caml_call1(Core_kernel[339],v_num_var_sets),
       bnds=[0,[1,[0,_lk_,[0,arg,0]]],0],
       arg$0=
        caml_call1
         (Core_kernel[339],v_num_nodes_recomputed_directly_because_min_height),
       bnds$0=[0,[1,[0,_ll_,[0,arg$0,0]]],bnds],
       arg$1=
        caml_call1
         (Core_kernel[339],v_num_nodes_recomputed_directly_because_one_child),
       bnds$1=[0,[1,[0,_lm_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[339],v_num_nodes_recomputed),
       bnds$2=[0,[1,[0,_ln_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel[339],v_num_nodes_invalidated),
       bnds$3=[0,[1,[0,_lo_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[339],v_num_nodes_created),
       bnds$4=[0,[1,[0,_lp_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(Core_kernel[339],v_num_nodes_changed),
       bnds$5=[0,[1,[0,_lq_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call1(Core_kernel[339],v_num_nodes_became_unnecessary),
       bnds$6=[0,[1,[0,_lr_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Core_kernel[339],v_num_nodes_became_necessary),
       bnds$7=[0,[1,[0,_ls_,[0,arg$7,0]]],bnds$6],
       arg$8=
        caml_call2
         (Thread_safe_queue[1],Packed_weak_hashtbl[1],v_weak_hashtbls),
       bnds$8=[0,[1,[0,_lt_,[0,arg$8,0]]],bnds$7],
       arg$9=caml_call1(Only_in_debug[6],v_only_in_debug),
       bnds$9=[0,[1,[0,_lu_,[0,arg$9,0]]],bnds$8],
       arg$10=
        caml_call2
         (Core_kernel_Stack[2],
          Run_on_update_handlers[1],
          v_run_on_update_handlers),
       bnds$10=[0,[1,[0,_lv_,[0,arg$10,0]]],bnds$9],
       arg$11=
        caml_call2
         (Core_kernel_Stack[2],Packed$0[1],v_handle_after_stabilization),
       bnds$11=[0,[1,[0,_lw_,[0,arg$11,0]]],bnds$10],
       arg$12=
        caml_call2(Core_kernel_Stack[2],Packed[1],v_set_during_stabilization),
       bnds$12=[0,[1,[0,_lx_,[0,arg$12,0]]],bnds$11],
       arg$13=caml_call2(Core_kernel_Stack[2],_kb_[1],v_disallowed_observers),
       bnds$13=[0,[1,[0,_ly_,[0,arg$13,0]]],bnds$12],
       arg$14=caml_call2(Core_kernel_Stack[2],_kb_[1],v_new_observers),
       bnds$14=[0,[1,[0,_lz_,[0,arg$14,0]]],bnds$13],
       arg$15=caml_call2(Thread_safe_queue[1],_kb_[1],v_finalized_observers),
       bnds$15=[0,[1,[0,_lA_,[0,arg$15,0]]],bnds$14],
       arg$16=caml_call2(Uopt[1],_kb_[1],v_all_observers),
       bnds$16=[0,[1,[0,_lB_,[0,arg$16,0]]],bnds$15],
       arg$17=caml_call1(Core_kernel[339],v_num_active_observers),
       bnds$17=[0,[1,[0,_lC_,[0,arg$17,0]]],bnds$16],
       arg$18=
        caml_call2(Core_kernel_Stack[2],Packed$0[1],v_propagate_invalidity),
       bnds$18=[0,[1,[0,_lD_,[0,arg$18,0]]],bnds$17],
       arg$19=sexp_of_t$30(v_adjust_heights_heap),
       bnds$19=[0,[1,[0,_lE_,[0,arg$19,0]]],bnds$18],
       arg$20=sexp_of_t$28(v_recompute_heap),
       bnds$20=[0,[1,[0,_lF_,[0,arg$20,0]]],bnds$19],
       arg$21=caml_call1(_di_,v_current_scope),
       bnds$21=[0,[1,[0,_lG_,[0,arg$21,0]]],bnds$20],
       arg$22=caml_call1(_s_,v_stabilization_num),
       bnds$22=[0,[1,[0,_lH_,[0,arg$22,0]]],bnds$21],
       arg$23=
        caml_call1(Core_kernel[291],v_bind_lhs_change_should_invalidate_rhs),
       bnds$23=[0,[1,[0,_lI_,[0,arg$23,0]]],bnds$22],
       arg$24=sexp_of_status(v_status),
       bnds$24=[0,[1,[0,_lJ_,[0,arg$24,0]]],bnds$23];
      return [1,bnds$24]}
    function fired_alarm_values(r){return r[4]}
    function set_fired_alarm_values(r,v){r[4] = v;return 0}
    function handle_fired(r){return r[3]}
    function now$0(r){return r[2]}
    function timing_wheel(r){return r[1]}
    function _lK_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _lL_=[0,set_fired_alarm_values],
     fired_alarm_values$0=
      [0,
       function(param){return 0},
       cst_fired_alarm_values,
       _lL_,
       fired_alarm_values,
       _lK_];
    function _lM_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _lN_=0,
     handle_fired$0=
      [0,function(param){return 0},cst_handle_fired,_lN_,handle_fired,_lM_];
    function _lO_(r,v){return [0,r[1],v,r[3],r[4]]}
    var _lP_=0,now$1=[0,function(param){return 0},cst_now,_lP_,now$0,_lO_];
    function _lQ_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _lR_=0,
     timing_wheel$0=
      [0,function(param){return 0},cst_timing_wheel,_lR_,timing_wheel,_lQ_];
    function make_creator$1
     (timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      compile_acc)
     {var
       match=caml_call2(timing_wheel_fun,timing_wheel$0,compile_acc),
       compile_acc$0=match[2],
       timing_wheel_gen=match[1],
       match$0=caml_call2(now_fun,now$1,compile_acc$0),
       compile_acc$1=match$0[2],
       now_gen=match$0[1],
       match$1=caml_call2(handle_fired_fun,handle_fired$0,compile_acc$1),
       compile_acc$2=match$1[2],
       handle_fired_gen=match$1[1],
       match$2=
        caml_call2(fired_alarm_values_fun,fired_alarm_values$0,compile_acc$2),
       compile_acc$3=match$2[2],
       fired_alarm_values_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 timing_wheel=caml_call1(timing_wheel_gen,acc),
                 now=caml_call1(now_gen,acc),
                 handle_fired=caml_call1(handle_fired_gen,acc),
                 fired_alarm_values=caml_call1(fired_alarm_values_gen,acc);
                return [0,timing_wheel,now,handle_fired,fired_alarm_values]},
              compile_acc$3]}
    function create$13(timing_wheel,now,handle_fired,fired_alarm_values)
     {return [0,timing_wheel,now,handle_fired,fired_alarm_values]}
    function map$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tt_=caml_call1(fired_alarm_values_fun,fired_alarm_values$0),
       _tu_=caml_call1(handle_fired_fun,handle_fired$0),
       _tv_=caml_call1(now_fun,now$1);
      return [0,caml_call1(timing_wheel_fun,timing_wheel$0),_tv_,_tu_,_tt_]}
    function iter$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {caml_call1(timing_wheel_fun,timing_wheel$0);
      caml_call1(now_fun,now$1);
      caml_call1(handle_fired_fun,handle_fired$0);
      return caml_call1(fired_alarm_values_fun,fired_alarm_values$0)}
    function fold$4
     (init,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {return caml_call2
              (fired_alarm_values_fun,
               caml_call2
                (handle_fired_fun,
                 caml_call2
                  (now_fun,
                   caml_call2(timing_wheel_fun,init,timing_wheel$0),
                   now$1),
                 handle_fired$0),
               fired_alarm_values$0)}
    function map_poly$1(record)
     {var
       _tq_=[0,caml_call1(record[1],fired_alarm_values$0),0],
       _tr_=[0,caml_call1(record[1],handle_fired$0),_tq_],
       _ts_=[0,caml_call1(record[1],now$1),_tr_];
      return [0,caml_call1(record[1],timing_wheel$0),_ts_]}
    function for_all$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tn_=caml_call1(timing_wheel_fun,timing_wheel$0),
       _to_=_tn_?caml_call1(now_fun,now$1):_tn_,
       _tp_=_to_?caml_call1(handle_fired_fun,handle_fired$0):_to_;
      return _tp_?caml_call1(fired_alarm_values_fun,fired_alarm_values$0):_tp_}
    function exists$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tm_=caml_call1(timing_wheel_fun,timing_wheel$0),
       _tk_=_tm_ || caml_call1(now_fun,now$1),
       _tl_=_tk_ || caml_call1(handle_fired_fun,handle_fired$0);
      return _tl_?_tl_:caml_call1(fired_alarm_values_fun,fired_alarm_values$0)}
    function to_list$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _th_=[0,caml_call1(fired_alarm_values_fun,fired_alarm_values$0),0],
       _ti_=[0,caml_call1(handle_fired_fun,handle_fired$0),_th_],
       _tj_=[0,caml_call1(now_fun,now$1),_ti_];
      return [0,caml_call1(timing_wheel_fun,timing_wheel$0),_tj_]}
    function iter$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]);
      caml_call3(now_fun,now$1,record,record[2]);
      caml_call3(handle_fired_fun,handle_fired$0,record,record[3]);
      return caml_call3
              (fired_alarm_values_fun,fired_alarm_values$0,record,record[4])}
    function fold$5
     (record,
      init,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun)
     {var _te_=record[4],_tf_=record[3],_tg_=record[2];
      return caml_call4
              (fired_alarm_values_fun,
               caml_call4
                (handle_fired_fun,
                 caml_call4
                  (now_fun,
                   caml_call4
                    (timing_wheel_fun,init,timing_wheel$0,record,record[1]),
                   now$1,
                   record,
                   _tg_),
                 handle_fired$0,
                 record,
                 _tf_),
               fired_alarm_values$0,
               record,
               _te_)}
    function for_all$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tb_=caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
       _tc_=_tb_?caml_call3(now_fun,now$1,record,record[2]):_tb_,
       _td_=
        _tc_?caml_call3(handle_fired_fun,handle_fired$0,record,record[3]):_tc_;
      return _td_
              ?caml_call3
                (fired_alarm_values_fun,fired_alarm_values$0,record,record[4])
              :_td_}
    function exists$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _ta_=caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
       _s__=_ta_ || caml_call3(now_fun,now$1,record,record[2]),
       _s$_=
        _s__
        ||
        caml_call3(handle_fired_fun,handle_fired$0,record,record[3]);
      return _s$_
              ?_s$_
              :caml_call3
                (fired_alarm_values_fun,fired_alarm_values$0,record,record[4])}
    function to_list$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _s7_=
        [0,
         caml_call3
          (fired_alarm_values_fun,fired_alarm_values$0,record,record[4]),
         0],
       _s8_=
        [0,caml_call3(handle_fired_fun,handle_fired$0,record,record[3]),_s7_],
       _s9_=[0,caml_call3(now_fun,now$1,record,record[2]),_s8_];
      return [0,
              caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
              _s9_]}
    function map$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _s4_=
        caml_call3
         (fired_alarm_values_fun,fired_alarm_values$0,record,record[4]),
       _s5_=caml_call3(handle_fired_fun,handle_fired$0,record,record[3]),
       _s6_=caml_call3(now_fun,now$1,record,record[2]);
      return [0,
              caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
              _s6_,
              _s5_,
              _s4_]}
    function set_all_mutable_fields$1(record,fired_alarm_values)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[4] = fired_alarm_values;
      return 0}
    var
     Direct$1=
      [0,
       iter$5,
       fold$5,
       for_all$5,
       exists$5,
       to_list$5,
       map$5,
       set_all_mutable_fields$1],
     Fields$1=
      [0,
       names$1,
       fired_alarm_values$0,
       handle_fired$0,
       now$1,
       timing_wheel$0,
       make_creator$1,
       create$13,
       map$4,
       iter$4,
       fold$4,
       map_poly$1,
       for_all$4,
       exists$4,
       to_list$4,
       Direct$1];
    function sexp_of_t$40(param)
     {var
       v_now=param[2],
       v_timing_wheel=param[1],
       v_fired_alarm_values=param[4],
       arg=caml_call2(Uopt[1],sexp_of_t$31,v_fired_alarm_values),
       bnds=[0,[1,[0,_lS_,[0,arg,0]]],0];
      function _s2_(_s3_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_s2_),
       bnds$0=[0,[1,[0,_lT_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$9(Time_ns[88],v_now),
       bnds$1=[0,[1,[0,_lU_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Timing_wheel[2],sexp_of_t$31,v_timing_wheel),
       bnds$2=[0,[1,[0,_lV_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$29(t)
     {function _sV_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         _sW_=
          check
           (function(fired_alarm_values)
             {if(caml_call1(Uopt[5],fired_alarm_values))return 0;
              throw [0,Assert_failure,_lW_]});
        function _sX_(_s1_){return 0}
        var
         _sY_=
          check
           (function(now)
             {var _s0_=caml_call1(Timing_wheel[11],t[1]);
              if(caml_call2(Time_ns[21],now[1],_s0_))return 0;
              throw [0,Assert_failure,_lX_]}),
         _sZ_=check(caml_call1(Timing_wheel[6],invariant$23));
        return caml_call4(Fields$1[9],_sZ_,_sY_,_sX_,_sW_)}
      return caml_call4(Base_Invariant[1],_lY_,t,sexp_of_t$40,_sV_)}
    var
     Clock$0=
      [0,
       fired_alarm_values,
       set_fired_alarm_values,
       handle_fired,
       now$0,
       timing_wheel,
       Fields$1,
       sexp_of_t$40,
       invariant$29];
    function now$2(clock){return clock[2][1]}
    function timing_wheel_length(clock)
     {return caml_call1(Timing_wheel[14],clock[1])}
    function num_stabilizes(t){return caml_call1(_r_,t[3])}
    function max_height_allowed$1(t){return max_height_allowed$0(t[6])}
    function max_height_seen$1(t){return t[6][3]}
    function iter_observers(t,f)
     {var r=[0,t[9]];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var observer=caml_call1(Uopt[9],r[1]);
          r[1] = caml_call1(_kb_[3],observer);
          caml_call1(f,observer);
          continue}
        return 0}}
    function directly_observed(t)
     {var r=[0,0];
      iter_observers(t,function(param){r[1] = [0,param[2],r[1]];return 0});
      return r[1]}
    function save_dot$0(t,file)
     {var _sU_=directly_observed(t);return caml_call2(Packed$0[5],file,_sU_)}
    function iter_observer_descendants(t,f)
     {var _sT_=directly_observed(t);return caml_call2(Packed$0[4],_sT_,f)}
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       max_num_parents_field=[0,0],
       percentage_of_nodes_by_num_parents_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _sJ_=param[1];
          if(1 === _sJ_[0])
           {var _sK_=_sJ_[1];
            if(_sK_)
             {var _sL_=_sK_[1];
              if(0 === _sL_[0])
               {var _sM_=_sK_[2],_sN_=_sL_[1];
                if(! _sM_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_sN_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _sM_[2])
                 {var tail=param[2],field_sexp=_sM_[1];
                  if(caml_string_notequal(_sN_,cst_max_num_parents))
                   if
                    (caml_string_notequal
                      (_sN_,cst_percentage_of_nodes_by_num_parents))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_sN_,extra[1]]}
                   else
                    if(percentage_of_nodes_by_num_parents_field[1])
                     duplicates[1] = [0,_sN_,duplicates[1]];
                    else
                     {var
                       _sO_=
                        function(sexp)
                         {if(1 === sexp[0])
                           {var _sR_=sexp[1];
                            if(_sR_)
                             {var _sS_=_sR_[2];
                              if(_sS_)
                               if(! _sS_[2])
                                {var
                                  v1=_sS_[1],
                                  v0=_sR_[1],
                                  v0$0=caml_call1(Core_kernel[340],v0),
                                  v1$0=caml_call1(Core_kernel_Percent[5],v1);
                                 return [0,v0$0,v1$0]}}}
                          return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc,2,sexp)},
                       fvalue=caml_call2(Core_kernel[401],_sO_,field_sexp);
                      percentage_of_nodes_by_num_parents_field[1] = [0,fvalue]}
                  else
                   if(max_num_parents_field[1])
                    duplicates[1] = [0,_sN_,duplicates[1]];
                   else
                    {var fvalue$0=caml_call1(Core_kernel[340],field_sexp);
                     max_num_parents_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_sJ_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var
         _sP_=max_num_parents_field[1],
         _sQ_=percentage_of_nodes_by_num_parents_field[1];
        if(_sP_)
         if(_sQ_)
          {var
            percentage_of_nodes_by_num_parents_value=_sQ_[1],
            max_num_parents_value=_sP_[1];
           return [0,
                   max_num_parents_value,
                   percentage_of_nodes_by_num_parents_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === max_num_parents_field[1]?1:0,cst_max_num_parents$0],
                  [0,
                   [0,
                    0 === percentage_of_nodes_by_num_parents_field[1]?1:0,
                    cst_percentage_of_nodes_by_num_parents$0],
                   0]])}}
    function sexp_of_t$41(param)
     {var
       v_percentage_of_nodes_by_num_parents=param[2],
       v_max_num_parents=param[1],
       bnds=0;
      function _sI_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[339],v0),
         v1$0=caml_call1(Core_kernel_Percent[6],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg=
        caml_call2(Core_kernel[400],_sI_,v_percentage_of_nodes_by_num_parents),
       bnds$0=[0,[1,[0,_lZ_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[339],v_max_num_parents),
       bnds$1=[0,[1,[0,_l0_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    var Stats=[0,t_of_sexp$0,sexp_of_t$41];
    function stats(t)
     {var max_num_parents=[0,-1],num_necessary_nodes=[0,0];
      iter_observer_descendants
       (t,
        function(param)
         {num_necessary_nodes[1]++;
          max_num_parents[1]
          =
          caml_call2(include[109],max_num_parents[1],param[8]);
          return 0});
      var
       max_num_parents$0=max_num_parents[1],
       num_nodes_by_num_parents=
        caml_call2(Array[35],max_num_parents$0 + 1 | 0,0);
      iter_observer_descendants
       (t,
        function(param)
         {var
           num_parents=param[8],
           _sH_=
            caml_check_bound(num_nodes_by_num_parents,num_parents)
             [1 + num_parents]
            +
            1
            |
            0;
          caml_check_bound(num_nodes_by_num_parents,num_parents)
           [1 + num_parents]
          =
          _sH_;
          return 0});
      function _sF_(i,ac,num_nodes)
       {return caml_call2(symbol$1,num_nodes,0)
                ?ac
                :[0,
                  [0,
                   i,
                   caml_call1
                    (Core_kernel_Percent[66],num_nodes / num_necessary_nodes[1])],
                  ac]}
      var
       _sG_=caml_call3(Array[55],num_nodes_by_num_parents,0,_sF_),
       percentage_of_nodes_by_num_parents=
        caml_call1(Core_kernel_List[32],_sG_);
      return [0,max_num_parents$0,percentage_of_nodes_by_num_parents]}
    function am_stabilizing(t)
     {var _sE_=t[1];
      if(typeof _sE_ === "number")return 2 <= _sE_?0:1;
      var raised_exn=_sE_[1];
      return caml_call5
              (Core_kernel[224],
               0,
               _l1_,
               cst_cannot_call_am_stabilizing_stabilize_previously_raised,
               raised_exn,
               sexp_of_t$35)}
    function invariant$30(t)
     {if(typeof t[1] === "number")
       {var
         _rR_=
          function(param)
           {function check(f){return caml_call2(Base_Invariant[2],t,f)}
            iter_observers
             (t,
              function(internal_observer)
               {var switcher=internal_observer[1] - 1 | 0;
                if(1 < switcher >>> 0)
                 {var
                   _sA_=function(param){return _l2_},
                   _sB_=
                    function(_sD_){return sexp_of_internal_observer(_sA_,_sD_)};
                  caml_call5
                   (Core_kernel[224],
                    0,
                    _l3_,
                    cst_member_of_all_observers_with_unexpected_state,
                    internal_observer,
                    _sB_)}
                return invariant$24
                        (function(_sC_){return 0},internal_observer)});
            iter_observer_descendants
             (t,
              function(node)
               {invariant$18(function(_sz_){return 0},node);
                if(1 - am_stabilizing(t))
                 if(! caml_call1(Uopt[5],node[19]))
                  throw [0,Assert_failure,_l5_];
                if(caml_call2(symbol$0,node[13],t[6][3]))return 0;
                throw [0,Assert_failure,_l4_]});
            var _rS_=max_height_allowed(t[5]);
            if(caml_call2(symbol$1,max_height_allowed$0(t[6]),_rS_))
             {var
               _rT_=function(_sy_){return 0},
               _rU_=function(_sx_){return 0},
               _rV_=function(_sw_){return 0},
               _rW_=function(_sv_){return 0},
               _rX_=function(_su_){return 0},
               _rY_=function(_st_){return 0},
               _rZ_=function(_ss_){return 0},
               _r0_=function(_sr_){return 0},
               _r1_=function(_sq_){return 0},
               _r2_=function(_sp_){return 0},
               _r3_=check(Only_in_debug[7]),
               _r4_=
                check
                 (caml_call1(Core_kernel_Stack[3],Run_on_update_handlers[2])),
               _r5_=check(caml_call1(Core_kernel_Stack[3],Packed$0[2])),
               _r6_=
                check
                 (function(set_during_stabilization)
                   {var _sn_=t[1];
                    if(typeof _sn_ === "number")
                     {if(0 === _sn_)
                       {var
                         _so_=
                          function(param)
                           {if(caml_call1(Uopt[6],param[2]))return 0;
                            throw [0,Assert_failure,_l6_]};
                        return caml_call2
                                (Core_kernel_Stack[3],_so_,set_during_stabilization)}
                      if
                       (caml_call1(Core_kernel_Stack[6],set_during_stabilization))
                       return 0;
                      throw [0,Assert_failure,_l7_]}
                    throw [0,Assert_failure,_l8_]}),
               _r7_=
                function(packed)
                 {caml_call1(_kb_[2],packed);
                  if(2 === packed[1])return 0;
                  throw [0,Assert_failure,_l9_]},
               _r8_=check(caml_call1(Core_kernel_Stack[3],_r7_)),
               _r9_=
                function(packed)
                 {caml_call1(_kb_[2],packed);
                  var switcher=packed[1] - 1 | 0;
                  if(1 < switcher >>> 0)return 0;
                  throw [0,Assert_failure,_l__]},
               _r__=check(caml_call1(Core_kernel_Stack[3],_r9_)),
               _r$_=function(_sm_){return 0},
               _sa_=function(_sl_){return 0},
               _sb_=
                check
                 (function(num_active_observers)
                   {if(caml_call2(symbol,num_active_observers,0))return 0;
                    throw [0,Assert_failure,_l$_]}),
               _sc_=
                check
                 (function(propagate_invalidity)
                   {if(caml_call1(Core_kernel_Stack[6],propagate_invalidity))
                     return 0;
                    throw [0,Assert_failure,_ma_]}),
               _sd_=
                check
                 (function(adjust_heights_heap)
                   {if(caml_call2(symbol$1,adjust_heights_heap[1],0))
                     return invariant$22(adjust_heights_heap);
                    throw [0,Assert_failure,_mb_]}),
               _se_=check(invariant$20),
               _sf_=
                check
                 (function(current_scope)
                   {if(caml_call2(Core_kernel[234],current_scope,top))return 0;
                    throw [0,Assert_failure,_mc_]}),
               _sg_=check(invariant$2),
               _sh_=function(_sk_){return 0},
               _si_=function(_sj_){return 0};
              return caml_call26
                      (Fields$0[31],
                       _si_,
                       _sh_,
                       _sg_,
                       _sf_,
                       _se_,
                       _sd_,
                       _sc_,
                       _sb_,
                       _sa_,
                       _r$_,
                       _r__,
                       _r8_,
                       _r6_,
                       _r5_,
                       _r4_,
                       _r3_,
                       _r2_,
                       _r1_,
                       _r0_,
                       _rZ_,
                       _rY_,
                       _rX_,
                       _rW_,
                       _rV_,
                       _rU_,
                       _rT_)}
            throw [0,Assert_failure,_md_]};
        return caml_call4(Base_Invariant[1],_me_,t,sexp_of_t$39,_rR_)}
      return 0}
    function ensure_not_stabilizing(t,name,allow_in_update_handler)
     {var _rJ_=t[1];
      if(typeof _rJ_ === "number")
       switch(_rJ_)
        {case 0:
          var
           backtrace=caml_call2(Base_Backtrace[2],0,0),
           _rK_=Base_Backtrace[1],
           _rL_=caml_call2(Core_kernel[244],_mf_,name);
          return caml_call5(Core_kernel[224],0,_mg_,_rL_,backtrace,_rK_);
         case 1:
          var _rM_=1 - allow_in_update_handler;
          if(_rM_)
           {var
             backtrace$0=caml_call2(Base_Backtrace[2],0,0),
             _rN_=Base_Backtrace[1],
             _rO_=caml_call2(Core_kernel[244],_mh_,name);
            return caml_call5(Core_kernel[224],0,_mi_,_rO_,backtrace$0,_rN_)}
          return _rM_;
         default:return 0}
      var raised_exn=_rJ_[1],backtrace$1=caml_call2(Base_Backtrace[2],0,0);
      function _rP_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=sexp_of_t$35(v0),
         v1$0=caml_call1(Base_Backtrace[1],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var _rQ_=caml_call2(Core_kernel[244],_mj_,name);
      return caml_call5
              (Core_kernel[224],0,_mk_,_rQ_,[0,raised_exn,backtrace$1],_rP_)}
    function set_height$1(t,node,height)
     {return set_height$0(t[6],node,height)}
    function set_max_height_allowed$1(t,height)
     {ensure_not_stabilizing(t,cst_set_max_height_allowed,1);
      set_max_height_allowed$0(t[6],height);
      return set_max_height_allowed(t[5],height)}
    function handle_after_stabilization$1(t,node)
     {var _rI_=1 - node[21];
      return _rI_
              ?(node[21] = 1,caml_call2(Core_kernel_Stack[24],t[14],node))
              :_rI_}
    function remove_children(t,parent)
     {return iteri_children$0
              (parent,
               function(child_index,param)
                {return remove_child(t,param,parent,child_index)})}
    function became_unnecessary(t,node)
     {t[19] = t[19] + 1 | 0;
      if(caml_call2(symbol$2,node[7],0))handle_after_stabilization$1(t,node);
      node[13] = -1;
      remove_children(t,node);
      var _rG_=node[4];
      if(typeof _rG_ === "number")
       var switch$0=0;
      else
       switch(_rG_[0])
        {case 6:var p=_rG_[1];observability_change(p,0);var switch$0=1;break;
         case 15:var u=_rG_[1];force_full_compute(u);var switch$0=1;break;
         default:var switch$0=0}
      var _rH_=is_in_recompute_heap(node);
      return _rH_?remove(t[5],node):_rH_}
    function check_if_unnecessary(t,node)
     {var _rF_=1 - caml_call1(is_necessary$1,node);
      return _rF_?became_unnecessary(t,node):_rF_}
    function remove_child(t,child,parent,child_index)
     {remove_parent(child,parent,child_index);
      return check_if_unnecessary(t,child)}
    function remove_alarm(clock,alarm)
     {var _rE_=caml_call2(Timing_wheel[27],clock[1],alarm);
      return _rE_?caml_call2(Timing_wheel[28],clock[1],alarm):_rE_}
    function invalidate_node(t,node)
     {var _rw_=caml_call1(is_valid$2,node);
      if(_rw_)
       {if(caml_call2(symbol$2,node[7],0))
         handle_after_stabilization$1(t,node);
        node[3] = Uopt[3];
        node[6] = t[3];
        node[2] = t[3];
        t[22] = t[22] + 1 | 0;
        if(caml_call1(is_necessary$1,node))
         {remove_children(t,node);node[13] = height(node[11]) + 1 | 0}
        var _rx_=node[4];
        if(typeof _rx_ === "number")
         var switch$0=0;
        else
         switch(_rx_[0])
          {case 1:
            var at=_rx_[1];remove_alarm(at[4],at[3]);var switch$0=1;break;
           case 2:
            var at_intervals=_rx_[1];
            remove_alarm(at_intervals[5],at_intervals[4]);
            var switch$0=1;
            break;
           case 4:
            var bind=_rx_[1];
            invalidate_nodes_created_on_rhs(t,bind[7]);
            var switch$0=1;
            break;
           case 14:
            var match=_rx_[1],alarm=match[6],clock=match[8];
            remove_alarm(clock,alarm);
            var switch$0=1;
            break;
           default:var switch$0=0}
        set_kind$0(node,0);
        var _rz_=node[8] - 1 | 0,_ry_=0;
        if(! (_rz_ < 0))
         {var index=_ry_;
          for(;;)
           {var _rC_=get_parent(node,index);
            caml_call2(Core_kernel_Stack[24],t[7],_rC_);
            var _rD_=index + 1 | 0;
            if(_rz_ !== index){var index=_rD_;continue}
            break}}
        var _rA_=is_in_recompute_heap(node);
        if(_rA_)return remove(t[5],node);
        var _rB_=_rA_}
      else
       var _rB_=_rw_;
      return _rB_}
    function invalidate_nodes_created_on_rhs(t,node)
     {var r=[0,node];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var match=caml_call1(Uopt[9],r[1]);
          r[1] = match[12];
          match[12] = Uopt[3];
          invalidate_node(t,match);
          continue}
        return 0}}
    function rescope_nodes_created_on_rhs(t,first_node_on_rhs,new_scope)
     {var r=[0,first_node_on_rhs];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var match=caml_call1(Uopt[9],r[1]);
          r[1] = match[12];
          match[12] = Uopt[3];
          match[11] = new_scope;
          add_node(new_scope,match);
          continue}
        return 0}}
    function propagate_invalidity$1(t)
     {for(;;)
       {if(caml_call1(Core_kernel_Stack[6],t[7]))return 0;
        var node=caml_call1(Core_kernel_Stack[26],t[7]);
        if(caml_call1(is_valid$2,node))
         if(should_be_invalidated(node))
          invalidate_node(t,node);
         else
          {var _rv_=node[4];
           if(typeof _rv_ === "number")
            var switch$0=0;
           else
            if(6 === _rv_[0])
             {var expert=_rv_[1];incr_invalid_children(expert);var switch$0=1}
            else
             var switch$0=0;
           if(1 - is_in_recompute_heap(node))add$0(t[5],node)}
        continue}}
    function add_parent_without_adjusting_heights(t,child,parent,child_index)
     {var was_necessary=caml_call1(is_necessary$1,child);
      add_parent(child,parent,child_index);
      if(1 - caml_call1(is_valid$2,child))
       caml_call2(Core_kernel_Stack[24],t[7],parent);
      if(1 - was_necessary)_ml_(t,child);
      var _ru_=parent[4];
      if(typeof _ru_ !== "number" && 6 === _ru_[0])
       {var e=_ru_[1];return run_edge_callback(e,child_index)}
      return 0}
    function _ml_(t,node)
     {var
       _rn_=caml_call1(is_valid$2,node),
       _ro_=_rn_?1 - is_necessary$0(node[11]):_rn_;
      if(_ro_)
       {var
         _rp_=function(param){return _mm_},
         _rq_=function(_rt_){return sexp_of_t$26(_rp_,_rt_)};
        caml_call5
         (Core_kernel[224],
          0,
          _mn_,
          cst_Trying_to_make_a_node_necessary_whose_defining_bind_is_not_necessary,
          node,
          _rq_)}
      t[18] = t[18] + 1 | 0;
      if(caml_call2(symbol$2,node[7],0))handle_after_stabilization$1(t,node);
      set_height$1(t,node,height(node[11]) + 1 | 0);
      iteri_children$0
       (node,
        function(child_index,child)
         {add_parent_without_adjusting_heights(t,child,node,child_index);
          var _rs_=caml_call2(symbol,child[13],node[13]);
          return _rs_?set_height$1(t,node,child[13] + 1 | 0):_rs_});
      if(is_stale(node))add$0(t[5],node);
      var _rr_=node[4];
      if(typeof _rr_ !== "number" && 6 === _rr_[0])
       {var p=_rr_[1];return observability_change(p,1)}
      return 0}
    function became_necessary(t,node)
     {_ml_(t,node);return propagate_invalidity$1(t)}
    function add_parent$0(t,child,parent,child_index)
     {add_parent_without_adjusting_heights(t,child,parent,child_index);
      if(caml_call2(symbol,child[13],parent[13]))
       adjust_heights(t[6],t[5],child,parent);
      propagate_invalidity$1(t);
      var _rk_=1 - is_in_recompute_heap(parent);
      if(_rk_)
       var _rl_=is_none(parent[2]),_rm_=_rl_ || edge_is_stale(child,parent);
      else
       var _rm_=_rk_;
      return _rm_?add$0(t[5],parent):_rm_}
    function run_with_scope(t,scope,f)
     {var saved=t[4];
      t[4] = scope;
      try
       {var v=caml_call1(f,0);t[4] = saved;return v}
      catch(exn){exn = caml_wrap_exception(exn);t[4] = saved;throw exn}}
    function within_scope(t,scope,f)
     {if(1 - is_valid$1(scope))
       caml_call5
        (Core_kernel[224],
         0,
         _mo_,
         cst_attempt_to_run_within_an_invalid_scope,
         t,
         sexp_of_t$39);
      return run_with_scope(t,scope,f)}
    function change_child(t,parent,old_child,new_child,child_index)
     {if(caml_call1(Uopt[5],old_child))
       return add_parent$0(t,new_child,parent,child_index);
      var
       old_child$0=caml_call1(Uopt[9],old_child),
       _rj_=1 - caml_call2(Core_kernel[234],old_child$0,new_child);
      return _rj_
              ?(remove_parent(old_child$0,parent,child_index),
                old_child$0[25]
                =
                1,
                add_parent$0(t,new_child,parent,child_index),
                old_child$0[25]
                =
                0,
                check_if_unnecessary(t,old_child$0))
              :_rj_}
    function add_alarm(clock,at,alarm_value)
     {return caml_call3(Timing_wheel[25],clock[1],at,alarm_value)}
    function maybe_change_value(t,node,new_value)
     {var old_value_opt=node[3],_q3_=caml_call1(Uopt[5],old_value_opt);
      if(_q3_)
       var _q4_=_q3_;
      else
       var
        _ri_=caml_call1(Uopt[9],old_value_opt),
        _q4_=1 - should_cutoff(node[5],_ri_,new_value);
      if(_q4_)
       {node[3] = caml_call1(Uopt[4],new_value);
        node[6] = t[3];
        t[20] = t[20] + 1 | 0;
        if(caml_call2(symbol$2,node[7],0))
         {node[19] = old_value_opt;handle_after_stabilization$1(t,node)}
        if(caml_call2(symbol,node[8],1))
         {var _q6_=node[8] - 1 | 0,_q5_=1;
          if(! (_q6_ < 1))
           {var parent_index=_q5_;
            for(;;)
             {var
               _re_=parent_index - 1 | 0,
               _rf_=caml_check_bound(node[9],_re_)[1 + _re_],
               parent$0=caml_call1(Uopt[7],_rf_),
               _rg_=parent$0[4];
              if(typeof _rg_ === "number")
               var switch$0=0;
              else
               switch(_rg_[0])
                {case 6:
                  var
                   expert=_rg_[1],
                   child_index$0=
                    caml_check_bound(node[24],parent_index)[1 + parent_index];
                  run_edge_callback(expert,child_index$0);
                  var switch$0=1;
                  break;
                 case 15:
                  var u$0=_rg_[1];
                  child_changed
                   (u$0,
                    node,
                    caml_check_bound(node[24],parent_index)[1 + parent_index],
                    old_value_opt,
                    new_value);
                  var switch$0=1;
                  break;
                 default:var switch$0=0}
              if(1 - is_in_recompute_heap(parent$0))add$0(t[5],parent$0);
              var _rh_=parent_index + 1 | 0;
              if(_q6_ !== parent_index){var parent_index=_rh_;continue}
              break}}
          var parent=caml_call1(Uopt[7],node[10]),_q7_=parent[4];
          if(typeof _q7_ === "number")
           var switch$1=0;
          else
           switch(_q7_[0])
            {case 6:
              var p=_q7_[1],child_index=caml_check_bound(node[24],0)[1];
              run_edge_callback(p,child_index);
              var switch$1=1;
              break;
             case 15:
              var u=_q7_[1];
              child_changed
               (u,
                node,
                caml_check_bound(node[24],0)[1],
                old_value_opt,
                new_value);
              var switch$1=1;
              break;
             default:var switch$1=0}
          if(1 - is_in_recompute_heap(parent))
           {var _q8_=parent[4];
            if(typeof _q8_ === "number")
             {if(1 === _q8_)throw [0,Assert_failure,_ms_];var switch$2=0}
            else
             switch(_q8_[0])
              {case 1:throw [0,Assert_failure,_mt_];
               case 2:throw [0,Assert_failure,_mu_];
               case 3:
                var
                 _q__=height(parent[11]),
                 can_recompute_now=caml_call2(symbol$2,node[13],_q__),
                 switch$2=1;
                break;
               case 4:
                var
                 b=_q8_[1],
                 can_recompute_now=caml_call2(symbol$2,node[13],b[4][13]),
                 switch$2=1;
                break;
               case 7:
                var
                 _q$_=height(parent[11]),
                 can_recompute_now=caml_call2(symbol$2,node[13],_q$_),
                 switch$2=1;
                break;
               case 8:
                var
                 _ra_=height(parent[11]),
                 can_recompute_now=caml_call2(symbol$2,node[13],_ra_),
                 switch$2=1;
                break;
               case 9:
                var
                 i=_q8_[1],
                 can_recompute_now=caml_call2(symbol$2,node[13],i[3][13]),
                 switch$2=1;
                break;
               case 10:
                var
                 _rb_=height(parent[11]),
                 can_recompute_now=caml_call2(symbol$2,node[13],_rb_),
                 switch$2=1;
                break;
               case 11:
                var
                 j=_q8_[1],
                 can_recompute_now=caml_call2(symbol$2,node[13],j[3][13]),
                 switch$2=1;
                break;
               case 12:
                var
                 _rc_=height(parent[11]),
                 can_recompute_now=caml_call2(symbol$2,node[13],_rc_),
                 switch$2=1;
                break;
               case 14:
                var
                 _rd_=height(parent[11]),
                 can_recompute_now=caml_call2(symbol$2,node[13],_rd_),
                 switch$2=1;
                break;
               case 5:
               case 13:
               case 16:var switch$2=0;break;
               default:var can_recompute_now=0,switch$2=1}
            if(! switch$2)throw [0,Assert_failure,_mr_];
            if(can_recompute_now)
             {t[24] = t[24] + 1 | 0;recompute(t,parent)}
            else
             {var _q9_=min_height(t[5]);
              if(caml_call2(symbol$0,parent[13],_q9_))
               {t[25] = t[25] + 1 | 0;recompute(t,parent)}
              else
               add$0(t[5],parent)}}}}
      return debug}
    function copy_child(t,parent,child)
     {return caml_call1(is_valid$2,child)
              ?maybe_change_value(t,parent,value_exn(child))
              :(invalidate_node(t,parent),propagate_invalidity$1(t))}
    function recompute(t,node)
     {t[23] = t[23] + 1 | 0;
      node[2] = t[3];
      var _pm_=node[4];
      if(typeof _pm_ === "number")
       {if(0 === _pm_)throw [0,Assert_failure,_mp_];
        throw [0,Assert_failure,_mq_]}
      else
       switch(_pm_[0])
        {case 0:
          var array_fold=_pm_[1];
          return maybe_change_value(t,node,compute$0(array_fold));
         case 1:return maybe_change_value(t,node,0);
         case 2:return maybe_change_value(t,node,0);
         case 3:
          var
           bind=_pm_[1],
           main=bind[1],
           f=bind[2],
           lhs=bind[3],
           old_rhs=bind[5],
           rhs_scope=bind[6],
           old_all_nodes_created_on_rhs=bind[7];
          bind[7] = Uopt[3];
          var
           rhs=
            run_with_scope
             (t,
              rhs_scope,
              function(param){return caml_call1(f,value_exn(lhs))});
          bind[5] = caml_call1(Uopt[4],rhs);
          node[6] = t[3];
          change_child(t,main,old_rhs,rhs,bind_rhs_child_index);
          if(caml_call1(Uopt[6],old_rhs))
           {if(t[2])
             invalidate_nodes_created_on_rhs(t,old_all_nodes_created_on_rhs);
            else
             rescope_nodes_created_on_rhs
              (t,old_all_nodes_created_on_rhs,main[11]);
            propagate_invalidity$1(t)}
          return maybe_change_value(t,node,0);
         case 4:
          var match=_pm_[1],rhs$0=match[5];
          return copy_child(t,node,caml_call1(Uopt[7],rhs$0));
         case 5:var a=_pm_[1];return maybe_change_value(t,node,a);
         case 6:
          var expert=_pm_[1],match$0=before_main_computation(expert);
          return 144245463 <= match$0
                  ?(invalidate_node(t,node),propagate_invalidity$1(t))
                  :maybe_change_value(t,node,caml_call1(expert[1],0));
         case 7:
          var
           match$1=_pm_[1],
           only_freeze_when=match$1[3],
           child=match$1[2],
           value=value_exn(child);
          if(caml_call1(only_freeze_when,value))
           {remove_children(t,node);
            set_kind$0(node,[5,value]);
            if(caml_call1(is_necessary$1,node))
             set_height$1(t,node,0);
            else
             became_unnecessary(t,node)}
          return maybe_change_value(t,node,value);
         case 8:
          var
           if_then_else=_pm_[1],
           test=if_then_else[2],
           main$0=if_then_else[1],
           current_branch=if_then_else[4],
           else$0=if_then_else[6],
           then=if_then_else[5],
           desired_branch=value_exn(test)?then:else$0;
          if_then_else[4] = caml_call1(Uopt[4],desired_branch);
          node[6] = t[3];
          change_child
           (t,main$0,current_branch,desired_branch,if_branch_child_index);
          return maybe_change_value(t,node,0);
         case 9:
          var match$2=_pm_[1],current_branch$0=match$2[4];
          return copy_child(t,node,caml_call1(Uopt[7],current_branch$0));
         case 10:
          var
           join=_pm_[1],
           lhs$0=join[2],
           main$1=join[1],
           old_rhs$0=join[4],
           rhs$1=value_exn(lhs$0);
          join[4] = caml_call1(Uopt[4],rhs$1);
          node[6] = t[3];
          change_child(t,main$1,old_rhs$0,rhs$1,join_rhs_child_index);
          return maybe_change_value(t,node,0);
         case 11:
          var match$3=_pm_[1],rhs$2=match$3[4];
          return copy_child(t,node,caml_call1(Uopt[7],rhs$2));
         case 12:
          var n1=_pm_[2],f$0=_pm_[1];
          return maybe_change_value(t,node,caml_call1(f$0,value_exn(n1)));
         case 13:
          var match$4=_pm_[1],before=match$4[3];
          return maybe_change_value(t,node,before);
         case 14:
          var
           step_function_node=_pm_[1],
           child$0=step_function_node[2],
           clock=step_function_node[8];
          if(caml_call1(Uopt[6],child$0))
           {var child$1=caml_call1(Uopt[7],child$0);
            if
             (caml_call2
               (symbol$2,caml_call2(_w_,child$1[6],step_function_node[3]),0))
             {step_function_node[3] = child$1[6];
              remove_alarm(clock,step_function_node[6]);
              var
               step_function=value_exn(child$1),
               _pn_=caml_call1(Incremental_step_function[3],step_function);
              step_function_node[4] = caml_call1(Uopt[4],_pn_);
              step_function_node[5]
              =
              caml_call1(Incremental_step_function[4],step_function);
              if(is_const(child$1))
               {remove_children(t,node);
                step_function_node[2] = Uopt[3];
                set_height$1(t,node,height(node[11]) + 1 | 0)}}}
          advance(step_function_node,now$2(clock));
          var
           step_function_value=caml_call1(Uopt[7],step_function_node[4]),
           match$5=caml_call1(Core_kernel_Sequence[61],step_function_node[5]);
          if(match$5)
           {var match$6=match$5[1],at=match$6[1];
            step_function_node[6] = add_alarm(clock,at,step_function_node[7])}
          else
           if(caml_call1(Uopt[5],child$0))
            set_kind$0(node,[5,step_function_value]);
          return maybe_change_value(t,node,step_function_value);
         case 15:var u=_pm_[1];return maybe_change_value(t,node,compute(u));
         case 16:var var$0=_pm_[1];return maybe_change_value(t,node,var$0[1]);
         case 17:
          var n2=_pm_[3],n1$0=_pm_[2],f$1=_pm_[1],_po_=value_exn(n2);
          return maybe_change_value
                  (t,node,caml_call2(f$1,value_exn(n1$0),_po_));
         case 18:
          var
           n3=_pm_[4],
           n2$0=_pm_[3],
           n1$1=_pm_[2],
           f$2=_pm_[1],
           _pp_=value_exn(n3),
           _pq_=value_exn(n2$0);
          return maybe_change_value
                  (t,node,caml_call3(f$2,value_exn(n1$1),_pq_,_pp_));
         case 19:
          var
           n4=_pm_[5],
           n3$0=_pm_[4],
           n2$1=_pm_[3],
           n1$2=_pm_[2],
           f$3=_pm_[1],
           _pr_=value_exn(n4),
           _ps_=value_exn(n3$0),
           _pt_=value_exn(n2$1);
          return maybe_change_value
                  (t,node,caml_call4(f$3,value_exn(n1$2),_pt_,_ps_,_pr_));
         case 20:
          var
           n5=_pm_[6],
           n4$0=_pm_[5],
           n3$1=_pm_[4],
           n2$2=_pm_[3],
           n1$3=_pm_[2],
           f$4=_pm_[1],
           _pu_=value_exn(n5),
           _pv_=value_exn(n4$0),
           _pw_=value_exn(n3$1),
           _px_=value_exn(n2$2);
          return maybe_change_value
                  (t,node,caml_call5(f$4,value_exn(n1$3),_px_,_pw_,_pv_,_pu_));
         case 21:
          var
           n6=_pm_[7],
           n5$0=_pm_[6],
           n4$1=_pm_[5],
           n3$2=_pm_[4],
           n2$3=_pm_[3],
           n1$4=_pm_[2],
           f$5=_pm_[1],
           _py_=value_exn(n6),
           _pz_=value_exn(n5$0),
           _pA_=value_exn(n4$1),
           _pB_=value_exn(n3$2),
           _pC_=value_exn(n2$3);
          return maybe_change_value
                  (t,
                   node,
                   caml_call6(f$5,value_exn(n1$4),_pC_,_pB_,_pA_,_pz_,_py_));
         case 22:
          var
           n7=_pm_[8],
           n6$0=_pm_[7],
           n5$1=_pm_[6],
           n4$2=_pm_[5],
           n3$3=_pm_[4],
           n2$4=_pm_[3],
           n1$5=_pm_[2],
           f$6=_pm_[1],
           _pD_=value_exn(n7),
           _pE_=value_exn(n6$0),
           _pF_=value_exn(n5$1),
           _pG_=value_exn(n4$2),
           _pH_=value_exn(n3$3),
           _pI_=value_exn(n2$4);
          return maybe_change_value
                  (t,
                   node,
                   caml_call7
                    (f$6,value_exn(n1$5),_pI_,_pH_,_pG_,_pF_,_pE_,_pD_));
         case 23:
          var
           n8=_pm_[9],
           n7$0=_pm_[8],
           n6$1=_pm_[7],
           n5$2=_pm_[6],
           n4$3=_pm_[5],
           n3$4=_pm_[4],
           n2$5=_pm_[3],
           n1$6=_pm_[2],
           f$7=_pm_[1],
           _pJ_=value_exn(n8),
           _pK_=value_exn(n7$0),
           _pL_=value_exn(n6$1),
           _pM_=value_exn(n5$2),
           _pN_=value_exn(n4$3),
           _pO_=value_exn(n3$4),
           _pP_=value_exn(n2$5);
          return maybe_change_value
                  (t,
                   node,
                   caml_call8
                    (f$7,value_exn(n1$6),_pP_,_pO_,_pN_,_pM_,_pL_,_pK_,_pJ_));
         case 24:
          var
           n9=_pm_[10],
           n8$0=_pm_[9],
           n7$1=_pm_[8],
           n6$2=_pm_[7],
           n5$3=_pm_[6],
           n4$4=_pm_[5],
           n3$5=_pm_[4],
           n2$6=_pm_[3],
           n1$7=_pm_[2],
           f$8=_pm_[1],
           _pQ_=value_exn(n9),
           _pR_=value_exn(n8$0),
           _pS_=value_exn(n7$1),
           _pT_=value_exn(n6$2),
           _pU_=value_exn(n5$3),
           _pV_=value_exn(n4$4),
           _pW_=value_exn(n3$5),
           _pX_=value_exn(n2$6);
          return maybe_change_value
                  (t,
                   node,
                   caml_call9
                    (f$8,
                     value_exn(n1$7),
                     _pX_,
                     _pW_,
                     _pV_,
                     _pU_,
                     _pT_,
                     _pS_,
                     _pR_,
                     _pQ_));
         case 25:
          var
           n10=_pm_[11],
           n9$0=_pm_[10],
           n8$1=_pm_[9],
           n7$2=_pm_[8],
           n6$3=_pm_[7],
           n5$4=_pm_[6],
           n4$5=_pm_[5],
           n3$6=_pm_[4],
           n2$7=_pm_[3],
           n1$8=_pm_[2],
           f$9=_pm_[1],
           _pY_=value_exn(n10),
           _pZ_=value_exn(n9$0),
           _p0_=value_exn(n8$1),
           _p1_=value_exn(n7$2),
           _p2_=value_exn(n6$3),
           _p3_=value_exn(n5$4),
           _p4_=value_exn(n4$5),
           _p5_=value_exn(n3$6),
           _p6_=value_exn(n2$7);
          return maybe_change_value
                  (t,
                   node,
                   caml_call10
                    (f$9,
                     value_exn(n1$8),
                     _p6_,
                     _p5_,
                     _p4_,
                     _p3_,
                     _p2_,
                     _p1_,
                     _p0_,
                     _pZ_,
                     _pY_));
         case 26:
          var
           n11=_pm_[12],
           n10$0=_pm_[11],
           n9$1=_pm_[10],
           n8$2=_pm_[9],
           n7$3=_pm_[8],
           n6$4=_pm_[7],
           n5$5=_pm_[6],
           n4$6=_pm_[5],
           n3$7=_pm_[4],
           n2$8=_pm_[3],
           n1$9=_pm_[2],
           f$10=_pm_[1],
           _p7_=value_exn(n11),
           _p8_=value_exn(n10$0),
           _p9_=value_exn(n9$1),
           _p__=value_exn(n8$2),
           _p$_=value_exn(n7$3),
           _qa_=value_exn(n6$4),
           _qb_=value_exn(n5$5),
           _qc_=value_exn(n4$6),
           _qd_=value_exn(n3$7),
           _qe_=value_exn(n2$8);
          return maybe_change_value
                  (t,
                   node,
                   caml_call11
                    (f$10,
                     value_exn(n1$9),
                     _qe_,
                     _qd_,
                     _qc_,
                     _qb_,
                     _qa_,
                     _p$_,
                     _p__,
                     _p9_,
                     _p8_,
                     _p7_));
         case 27:
          var
           n12=_pm_[13],
           n11$0=_pm_[12],
           n10$1=_pm_[11],
           n9$2=_pm_[10],
           n8$3=_pm_[9],
           n7$4=_pm_[8],
           n6$5=_pm_[7],
           n5$6=_pm_[6],
           n4$7=_pm_[5],
           n3$8=_pm_[4],
           n2$9=_pm_[3],
           n1$10=_pm_[2],
           f$11=_pm_[1],
           _qf_=value_exn(n12),
           _qg_=value_exn(n11$0),
           _qh_=value_exn(n10$1),
           _qi_=value_exn(n9$2),
           _qj_=value_exn(n8$3),
           _qk_=value_exn(n7$4),
           _ql_=value_exn(n6$5),
           _qm_=value_exn(n5$6),
           _qn_=value_exn(n4$7),
           _qo_=value_exn(n3$8),
           _qp_=value_exn(n2$9);
          return maybe_change_value
                  (t,
                   node,
                   caml_call12
                    (f$11,
                     value_exn(n1$10),
                     _qp_,
                     _qo_,
                     _qn_,
                     _qm_,
                     _ql_,
                     _qk_,
                     _qj_,
                     _qi_,
                     _qh_,
                     _qg_,
                     _qf_));
         case 28:
          var
           n13=_pm_[14],
           n12$0=_pm_[13],
           n11$1=_pm_[12],
           n10$2=_pm_[11],
           n9$3=_pm_[10],
           n8$4=_pm_[9],
           n7$5=_pm_[8],
           n6$6=_pm_[7],
           n5$7=_pm_[6],
           n4$8=_pm_[5],
           n3$9=_pm_[4],
           n2$10=_pm_[3],
           n1$11=_pm_[2],
           f$12=_pm_[1],
           _qq_=value_exn(n13),
           _qr_=value_exn(n12$0),
           _qs_=value_exn(n11$1),
           _qt_=value_exn(n10$2),
           _qu_=value_exn(n9$3),
           _qv_=value_exn(n8$4),
           _qw_=value_exn(n7$5),
           _qx_=value_exn(n6$6),
           _qy_=value_exn(n5$7),
           _qz_=value_exn(n4$8),
           _qA_=value_exn(n3$9),
           _qB_=value_exn(n2$10);
          return maybe_change_value
                  (t,
                   node,
                   caml_call13
                    (f$12,
                     value_exn(n1$11),
                     _qB_,
                     _qA_,
                     _qz_,
                     _qy_,
                     _qx_,
                     _qw_,
                     _qv_,
                     _qu_,
                     _qt_,
                     _qs_,
                     _qr_,
                     _qq_));
         case 29:
          var
           n14=_pm_[15],
           n13$0=_pm_[14],
           n12$1=_pm_[13],
           n11$2=_pm_[12],
           n10$3=_pm_[11],
           n9$4=_pm_[10],
           n8$5=_pm_[9],
           n7$6=_pm_[8],
           n6$7=_pm_[7],
           n5$8=_pm_[6],
           n4$9=_pm_[5],
           n3$10=_pm_[4],
           n2$11=_pm_[3],
           n1$12=_pm_[2],
           f$13=_pm_[1],
           _qC_=value_exn(n14),
           _qD_=value_exn(n13$0),
           _qE_=value_exn(n12$1),
           _qF_=value_exn(n11$2),
           _qG_=value_exn(n10$3),
           _qH_=value_exn(n9$4),
           _qI_=value_exn(n8$5),
           _qJ_=value_exn(n7$6),
           _qK_=value_exn(n6$7),
           _qL_=value_exn(n5$8),
           _qM_=value_exn(n4$9),
           _qN_=value_exn(n3$10),
           _qO_=value_exn(n2$11);
          return maybe_change_value
                  (t,
                   node,
                   caml_call14
                    (f$13,
                     value_exn(n1$12),
                     _qO_,
                     _qN_,
                     _qM_,
                     _qL_,
                     _qK_,
                     _qJ_,
                     _qI_,
                     _qH_,
                     _qG_,
                     _qF_,
                     _qE_,
                     _qD_,
                     _qC_));
         default:
          var
           n15=_pm_[16],
           n14$0=_pm_[15],
           n13$1=_pm_[14],
           n12$2=_pm_[13],
           n11$3=_pm_[12],
           n10$4=_pm_[11],
           n9$5=_pm_[10],
           n8$6=_pm_[9],
           n7$7=_pm_[8],
           n6$8=_pm_[7],
           n5$9=_pm_[6],
           n4$10=_pm_[5],
           n3$11=_pm_[4],
           n2$12=_pm_[3],
           n1$13=_pm_[2],
           f$14=_pm_[1],
           _qP_=value_exn(n15),
           _qQ_=value_exn(n14$0),
           _qR_=value_exn(n13$1),
           _qS_=value_exn(n12$2),
           _qT_=value_exn(n11$3),
           _qU_=value_exn(n10$4),
           _qV_=value_exn(n9$5),
           _qW_=value_exn(n8$6),
           _qX_=value_exn(n7$7),
           _qY_=value_exn(n6$8),
           _qZ_=value_exn(n5$9),
           _q0_=value_exn(n4$10),
           _q1_=value_exn(n3$11),
           _q2_=value_exn(n2$12);
          return maybe_change_value
                  (t,
                   node,
                   caml_call15
                    (f$14,
                     value_exn(n1$13),
                     _q2_,
                     _q1_,
                     _q0_,
                     _qZ_,
                     _qY_,
                     _qX_,
                     _qW_,
                     _qV_,
                     _qU_,
                     _qT_,
                     _qS_,
                     _qR_,
                     _qQ_,
                     _qP_))}}
    function recompute_everything_that_is_necessary(t)
     {var r=t[5];
      for(;;)
       {if(caml_call2(symbol$2,r[1],0))
         {var node=remove_min(r);recompute(t,node);continue}
        return debug}}
    function unlink_disallowed_observers(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Core_kernel_Stack[5],t[12]),0))
         {var internal_observer=caml_call1(Core_kernel_Stack[26],t[12]);
          internal_observer[1] = 3;
          var all_observers=caml_call1(Uopt[7],t[9]);
          if(same$2(internal_observer,all_observers))
           t[9] = internal_observer[5];
          unlink$0(internal_observer);
          check_if_unnecessary(t,internal_observer[2]);
          continue}
        return 0}}
    function disallow_future_use(t,internal_observer)
     {var _pl_=internal_observer[1];
      return 1 === _pl_
              ?(t[8]
                =
                t[8]
                -
                1
                |
                0,
                internal_observer[1]
                =
                2,
                caml_call2(Core_kernel_Stack[24],t[12],internal_observer))
              :0 === _pl_
                ?(t[8]
                  =
                  t[8]
                  -
                  1
                  |
                  0,
                  internal_observer[1]
                  =
                  3,
                  internal_observer[3]
                  =
                  0,
                  0)
                :0}
    function disallow_finalized_observers(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Thread_safe_queue[4],t[10]),0))
         {var internal_observer=caml_call1(Thread_safe_queue[6],t[10]);
          if(caml_call1(Core_kernel_List[7],internal_observer[3]))
           disallow_future_use(t,internal_observer);
          continue}
        return 0}}
    function observer_finalizer(t)
     {function _pk_(observer)
       {var internal_observer=observer[1];
        return caml_call2(Thread_safe_queue[5],t[10],internal_observer)}
      return caml_call1(Core_kernel[245],_pk_)}
    function create_observer(opt,t,observing)
     {if(opt)var sth=opt[1],should_finalize=sth;else var should_finalize=1;
      var internal_observer=[0,0,observing,0,Uopt[3],Uopt[3],Uopt[3],Uopt[3]];
      caml_call2(Core_kernel_Stack[24],t[11],internal_observer);
      var observer=[0,internal_observer];
      if(should_finalize)
       {var _pi_=observer_finalizer(t),_pj_=caml_call1(Core_kernel[246],_pi_);
        caml_call2(Core_kernel_Gc[9][2],observer,_pj_)}
      t[8] = t[8] + 1 | 0;
      return observer}
    function add_new_observers(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Core_kernel_Stack[5],t[11]),0))
         {var
           internal_observer=caml_call1(Core_kernel_Stack[26],t[11]),
           _pd_=internal_observer[1];
          if(0 === _pd_)
           {internal_observer[1] = 1;
            var old_all_observers=t[9];
            if(caml_call1(Uopt[6],old_all_observers))
             {internal_observer[5] = old_all_observers;
              var
               _pe_=caml_call1(Uopt[4],internal_observer),
               _pf_=caml_call1(Uopt[9],old_all_observers);
              caml_call2(_kb_[4],_pf_,_pe_)}
            t[9] = caml_call1(Uopt[4],internal_observer);
            var
             observing=internal_observer[2],
             was_necessary=caml_call1(is_necessary$1,observing),
             _pg_=caml_call1(Core_kernel_List[6],internal_observer[3]);
            observing[7] = observing[7] + _pg_ | 0;
            var old_observers=observing[20];
            if(caml_call1(Uopt[6],old_observers))
             {internal_observer[7] = old_observers;
              var _ph_=caml_call1(Uopt[4],internal_observer);
              caml_call1(Uopt[9],old_observers)[6] = _ph_}
            observing[20] = caml_call1(Uopt[4],internal_observer);
            handle_after_stabilization$1(t,observing);
            if(1 - was_necessary)became_necessary(t,observing)}
          else
           if(! (3 <= _pd_))throw [0,Assert_failure,_mv_];
          continue}
        return 0}}
    function observer_value_exn(t,observer)
     {var _o$_=t[1];
      if(typeof _o$_ === "number")
       {if(0 === _o$_)
         {var
           _pa_=function(param){return _mw_},
           _pb_=function(_pc_){return sexp_of_t$34(_pa_,_pc_)};
          return caml_call5
                  (Core_kernel[224],
                   0,
                   _mx_,
                   cst_Observer_value_exn_called_during_stabilization,
                   observer,
                   _pb_)}
        return value_exn$1(observer)}
      var raised_exn=_o$_[1];
      return caml_call5
              (Core_kernel[224],
               0,
               _my_,
               cst_Observer_value_exn_called_after_stabilize_previously_raised,
               raised_exn,
               sexp_of_t$35)}
    function observer_value(t,observer)
     {try
       {var _o__=[0,observer_value_exn(t,observer)];return _o__}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return [1,caml_call2(Core_kernel_Error[22],0,exn)]}}
    function node_on_update(t,node,f)
     {on_update(node,create$1(f,t[3]));
      return handle_after_stabilization$1(t,node)}
    function observer_on_update_exn(t,observer,f)
     {on_update_exn$0(observer,create$1(f,t[3]));
      return handle_after_stabilization$1(t,observing$1(observer))}
    function set_var_while_not_stabilizing(t,var$0,value)
     {t[26] = t[26] + 1 | 0;
      var$0[1] = value;
      var _o6_=caml_call2(symbol$3,caml_call2(_w_,var$0[3],t[3]),0);
      if(_o6_)
       {var$0[3] = t[3];
        var
         watch=var$0[4],
         _o7_=caml_call1(is_necessary$1,watch),
         _o8_=_o7_?1 - is_in_recompute_heap(watch):_o7_;
        if(_o8_)return add$0(t[5],watch);
        var _o9_=_o8_}
      else
       var _o9_=_o6_;
      return _o9_}
    function set_var(t,var$0,value)
     {var _o5_=t[1];
      if(typeof _o5_ === "number")
       {if(0 === _o5_)
         {if(caml_call1(Uopt[5],var$0[2]))
           caml_call2(Core_kernel_Stack[24],t[13],var$0);
          var$0[2] = caml_call1(Uopt[4],value);
          return 0}
        return set_var_while_not_stabilizing(t,var$0,value)}
      var raised_exn=_o5_[1];
      return caml_call5
              (Core_kernel[224],
               0,
               _mz_,
               cst_cannot_set_var_stabilization_previously_raised,
               raised_exn,
               sexp_of_t$35)}
    function reclaim_space_in_weak_hashtbls(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Thread_safe_queue[4],t[17]),0))
         {var
           match=caml_call1(Thread_safe_queue[6],t[17]),
           weak_hashtbl=match[1];
          caml_call1(Weak_hashtbl[11],weak_hashtbl);
          continue}
        return 0}}
    function stabilize(t)
     {ensure_not_stabilizing(t,cst_stabilize,0);
      try
       {t[1] = 0;
        disallow_finalized_observers(t);
        add_new_observers(t);
        unlink_disallowed_observers(t);
        recompute_everything_that_is_necessary(t);
        t[3] = add1(t[3]);
        for(;;)
         {if(caml_call1(Core_kernel_Stack[6],t[13]))
           for(;;)
            {if(caml_call1(Core_kernel_Stack[6],t[14]))
              {t[1] = 1;
               var now=t[3];
               for(;;)
                {if(caml_call1(Core_kernel_Stack[6],t[15]))
                  {t[1] = 2;
                   var _o3_=reclaim_space_in_weak_hashtbls(t);
                   return _o3_}
                 var
                  match=caml_call1(Core_kernel_Stack[26],t[15]),
                  node_update=match[2],
                  node=match[1];
                 run_on_update_handlers(node,node_update,now);
                 continue}}
             var node$0=caml_call1(Core_kernel_Stack[26],t[14]);
             node$0[21] = 0;
             var old_value=node$0[19];
             node$0[19] = Uopt[3];
             if(caml_call1(is_valid$2,node$0))
              if(caml_call1(is_necessary$1,node$0))
               var
                new_value=caml_call1(Uopt[7],node$0[3]),
                _o4_=
                 caml_call1(Uopt[5],old_value)
                  ?[0,new_value]
                  :[1,caml_call1(Uopt[9],old_value),new_value],
                node_update$0=_o4_;
              else
               var node_update$0=1;
             else
              var node_update$0=0;
             caml_call2(Core_kernel_Stack[24],t[15],[0,node$0,node_update$0]);
             continue}
          var
           var$0=caml_call1(Core_kernel_Stack[26],t[13]),
           value=caml_call1(Uopt[7],var$0[2]);
          var$0[2] = Uopt[3];
          set_var_while_not_stabilizing(t,var$0,value);
          continue}}
      catch(exn)
       {exn = caml_wrap_exception(exn);t[1] = [0,create$9(exn)];throw exn}}
    function create_node_in(t,created_in,kind)
     {t[21] = t[21] + 1 | 0;return create$4(created_in,kind)}
    function create_node(t,kind){return create_node_in(t,t[4],kind)}
    function create_node_top(t,kind){return create_node_in(t,top,kind)}
    function create_var(opt,t,value)
     {if(opt)
       var sth=opt[1],use_current_scope=sth;
      else
       var use_current_scope=0;
      var
       scope=use_current_scope?t[4]:top,
       watch=create_node_in(t,scope,1),
       var$0=[0,value,Uopt[3],t[3],watch];
      set_kind$0(watch,[16,var$0]);
      return var$0}
    function const$0(t,a){return create_node(t,[5,a])}
    function map$6(t,n,f){return create_node(t,[12,f,n])}
    function map2(t,n1,n2,f){return create_node(t,[17,f,n1,n2])}
    function map3(t,n1,n2,n3,f){return create_node(t,[18,f,n1,n2,n3])}
    function map4(t,n1,n2,n3,n4,f){return create_node(t,[19,f,n1,n2,n3,n4])}
    function map5(t,n1,n2,n3,n4,n5,f)
     {return create_node(t,[20,f,n1,n2,n3,n4,n5])}
    function map6(t,n1,n2,n3,n4,n5,n6,f)
     {return create_node(t,[21,f,n1,n2,n3,n4,n5,n6])}
    function map7(t,n1,n2,n3,n4,n5,n6,n7,f)
     {return create_node(t,[22,f,n1,n2,n3,n4,n5,n6,n7])}
    function map8(t,n1,n2,n3,n4,n5,n6,n7,n8,f)
     {return create_node(t,[23,f,n1,n2,n3,n4,n5,n6,n7,n8])}
    function map9(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,f)
     {return create_node(t,[24,f,n1,n2,n3,n4,n5,n6,n7,n8,n9])}
    function map10(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,f)
     {return create_node(t,[25,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10])}
    function map11(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,f)
     {return create_node(t,[26,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11])}
    function map12(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,f)
     {return create_node(t,[27,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12])}
    function map13(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,f)
     {return create_node(t,[28,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13])}
    function map14(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,f)
     {return create_node
              (t,[29,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14])}
    function map15(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,f)
     {return create_node
              (t,[30,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15])}
    function preserve_cutoff(input,output)
     {return set_cutoff$0
              (output,
               [2,
                function(param,_o2_)
                 {return caml_call2(_v_,input[6],output[6])}])}
    function depend_on(t,input,depend_on)
     {var output=map2(t,input,depend_on,function(a,param){return a});
      preserve_cutoff(input,output);
      return output}
    function necessary_if_alive(t,input)
     {var
       observer=create_observer(0,t,input),
       output=
        map$6
         (t,
          input,
          function(a){caml_call1(Core_kernel_Gc[5],observer);return a});
      preserve_cutoff(input,output);
      return output}
    function bind(t,lhs,f)
     {var
       lhs_change=create_node(t,1),
       main=create_node(t,1),
       bind=[0,main,f,lhs,lhs_change,Uopt[3],top,Uopt[3]];
      set_cutoff$0(lhs_change,never);
      bind[6] = [0,bind];
      set_kind$0(lhs_change,[3,bind]);
      set_kind$0(main,[4,bind]);
      return main}
    function bind2(t,n1,n2,f)
     {function _o1_(param)
       {var v2=param[2],v1=param[1];return caml_call2(f,v1,v2)}
      return bind(t,map2(t,n1,n2,function(v1,v2){return [0,v1,v2]}),_o1_)}
    function bind3(t,n1,n2,n3,f)
     {function _o0_(param)
       {var v3=param[3],v2=param[2],v1=param[1];return caml_call3(f,v1,v2,v3)}
      return bind
              (t,
               map3(t,n1,n2,n3,function(v1,v2,v3){return [0,v1,v2,v3]}),
               _o0_)}
    function bind4(t,n1,n2,n3,n4,f)
     {function _oZ_(param)
       {var v4=param[4],v3=param[3],v2=param[2],v1=param[1];
        return caml_call4(f,v1,v2,v3,v4)}
      return bind
              (t,
               map4
                (t,n1,n2,n3,n4,function(v1,v2,v3,v4){return [0,v1,v2,v3,v4]}),
               _oZ_)}
    function join(t,lhs)
     {var
       lhs_change=create_node(t,1),
       main=create_node(t,1),
       join=[0,main,lhs,lhs_change,Uopt[3]];
      set_cutoff$0(lhs_change,never);
      set_kind$0(lhs_change,[10,join]);
      set_kind$0(main,[11,join]);
      return main}
    function if$0(t,test,then,else$0)
     {var
       test_change=create_node(t,1),
       main=create_node(t,1),
       if_then_else=[0,main,test,test_change,Uopt[3],then,else$0];
      set_cutoff$0(test_change,never);
      set_kind$0(test_change,[8,if_then_else]);
      set_kind$0(main,[9,if_then_else]);
      return main}
    function lazy_from_fun(t,f)
     {var scope=t[4];
      function _oY_(param){return within_scope(t,scope,f)}
      return caml_call1(Core_kernel_Lazy[28],_oY_)}
    var default_hash_table_initial_size=4;
    function memoize_fun_by_key(opt,t,hashable,project_key,f)
     {if(opt)
       var sth=opt[1],initial_size=sth;
      else
       var initial_size=default_hash_table_initial_size;
      var
       scope=t[4],
       table=caml_call3(Core_kernel_Hashtbl[4],0,[0,initial_size],hashable);
      function _oX_(a)
       {var
         key=caml_call1(project_key,a),
         match=caml_call2(Core_kernel_Hashtbl[52],table,key);
        if(match){var b=match[1];return b}
        var b$0=within_scope(t,scope,function(param){return caml_call1(f,a)});
        caml_call3(Core_kernel_Hashtbl[36],table,key,b$0);
        return b$0}
      return caml_call1(Core_kernel[245],_oX_)}
    function array_fold(t,children,init,f)
     {return caml_call2(symbol$1,caml_call1(Array[17],children),0)
              ?const$0(t,init)
              :create_node(t,[0,[0,init,f,children]])}
    function all(t,ts)
     {function _oW_(ac,a){return [0,a,ac]}
      return array_fold(t,caml_call1(Array[83],ts),0,_oW_)}
    function unordered_array_fold(opt,t,children,init,f,update)
     {if(opt)
       var sth=opt[1],full_compute_every_n_changes=sth;
      else
       var full_compute_every_n_changes=include[61];
      if(caml_call2(symbol$1,caml_call1(Array[17],children),0))
       return const$0(t,init);
      if(caml_call2(symbol$0,full_compute_every_n_changes,0))
       return caml_call5
               (Core_kernel[224],
                0,
                _mA_,
                cst_unordered_array_fold_got_non_positive_full_compute_every_n_changes,
                full_compute_every_n_changes,
                Core_kernel[339]);
      var main=create_node(t,1);
      set_kind$0
       (main,
        [15,
         create$2(init,f,update,full_compute_every_n_changes,children,main)]);
      return main}
    function opt_unordered_array_fold
     (full_compute_every_n_changes,t,ts,init,f,f_inverse)
     {function f$0(param,x)
       {var num_invalid=param[2],accum=param[1];
        if(x){var x$0=x[1];return [0,caml_call2(f,accum,x$0),num_invalid]}
        return [0,accum,num_invalid + 1 | 0]}
      function f_inverse$0(param,x)
       {var num_invalid=param[2],accum=param[1];
        if(x)
         {var x$0=x[1];return [0,caml_call2(f_inverse,accum,x$0),num_invalid]}
        return [0,accum,num_invalid - 1 | 0]}
      function _oV_(param)
       {var num_invalid=param[2],accum=param[1];
        return caml_call2(symbol$1,num_invalid,0)?[0,accum]:0}
      return map$6
              (t,
               unordered_array_fold
                (full_compute_every_n_changes,
                 t,
                 ts,
                 [0,init,0],
                 f$0,
                 [0,f_inverse$0]),
               _oV_)}
    function at_least_k_of(t,nodes,k)
     {function bool_to_int(b){return b?1:0}
      function _oT_(i){return caml_call2(symbol,i,k)}
      var _oU_=[0,function(num_true,b){return num_true - bool_to_int(b) | 0}];
      return map$6
              (t,
               unordered_array_fold
                (0,
                 t,
                 nodes,
                 0,
                 function(num_true,b){return num_true + bool_to_int(b) | 0},
                 _oU_),
               _oT_)}
    function exists$6(t,nodes){return at_least_k_of(t,nodes,1)}
    function for_all$6(t,nodes)
     {return at_least_k_of(t,nodes,caml_call1(Array[17],nodes))}
    function sum$0(full_compute_every_n_changes,t,nodes,zero,add,sub)
     {return unordered_array_fold
              (full_compute_every_n_changes,t,nodes,zero,add,[0,sub])}
    function opt_sum(full_compute_every_n_changes,t,nodes,zero,add,sub)
     {return opt_unordered_array_fold
              (full_compute_every_n_changes,t,nodes,zero,add,sub)}
    function sum_int(t,nodes)
     {function _oO_(_oS_,_oR_){return _oS_ - _oR_ | 0}
      return sum$0
              (0,t,nodes,0,function(_oQ_,_oP_){return _oQ_ + _oP_ | 0},_oO_)}
    function sum_float(t,nodes)
     {function _oI_(_oN_,_oM_){return _oN_ - _oM_}
      function _oJ_(_oL_,_oK_){return _oL_ + _oK_}
      return sum$0([0,caml_call1(Array[17],nodes)],t,nodes,0.,_oJ_,_oI_)}
    function set_freeze(t,node,child,only_freeze_when)
     {var was_necessary=caml_call1(is_necessary$1,node);
      set_kind$0(node,[7,[0,node,child,only_freeze_when]]);
      return was_necessary
              ?add_parent$0(t,child,node,freeze_child_index)
              :became_necessary(t,node)}
    function freeze(t,child,only_freeze_when)
     {var node=create_node_top(t,1);
      set_freeze(t,node,child,only_freeze_when);
      return node}
    function at(t,clock,time)
     {var _oH_=now$2(clock);
      if(caml_call2(Time_ns[16],time,_oH_))return const$0(t,1);
      var main=create_node(t,1),at=[0,main,time,null$0,clock];
      set_kind$0(main,[1,at]);
      at[3] = add_alarm(clock,time,create$8([0,at]));
      return main}
    function after(t,clock,span)
     {var _oG_=now$2(clock);
      return at(t,clock,caml_call2(Time_ns[63],_oG_,span))}
    function next_interval_alarm_strict(clock,base,interval)
     {var
       after=now$2(clock),
       at=caml_call5(Time_ns[77],_mB_,base,after,interval,0);
      return at}
    function at_intervals(t,clock,interval)
     {var _oE_=caml_call1(Timing_wheel[10],clock[1]);
      if(caml_call2(Time_ns[1][18],interval,_oE_))
       caml_call5
        (Core_kernel[224],
         0,
         _mC_,
         cst_at_intervals_got_too_small_interval,
         interval,
         Time_ns[1][10]);
      var
       main=create_node(t,1),
       base=now$2(clock),
       at_intervals=[0,main,base,interval,null$0,clock];
      set_kind$0(main,[2,at_intervals]);
      set_cutoff$0(main,never);
      var _oF_=create$8([1,at_intervals]);
      at_intervals[4]
      =
      add_alarm(clock,next_interval_alarm_strict(clock,base,interval),_oF_);
      return main}
    function snapshot(t,clock,value_at,at,before)
     {var _oC_=now$2(clock);
      if(caml_call2(Time_ns[16],at,_oC_))
       {var _oD_=now$2(clock);
        return caml_call2(Time_ns[19],at,_oD_)
                ?caml_call4
                  (Core_kernel_Or_error[39],
                   0,
                   cst_cannot_take_snapshot_in_the_past,
                   at,
                   Time_ns[88])
                :[0,freeze(t,value_at,caml_call1(Core_kernel_Fn[1],1))]}
      var
       main=create_node_top(t,1),
       snapshot=[0,main,at,before,value_at,clock];
      set_kind$0(main,[13,snapshot]);
      add_alarm(clock,at,create$8([2,snapshot]));
      return [0,main]}
    function incremental_step_function(t,clock,child)
     {var
       main=create_node(t,1),
       _oA_=Core_kernel_Sequence[46],
       _oB_=Uopt[3],
       step_function_node=
        [0,main,caml_call1(Uopt[4],child),none,_oB_,_oA_,null$0,0,clock];
      step_function_node[7] = create$8([3,step_function_node]);
      set_kind$0(main,[14,step_function_node]);
      return main}
    function make_stale$0(t,node)
     {node[2] = none;
      var
       _oy_=needs_to_be_computed(node),
       _oz_=_oy_?1 - is_in_recompute_heap(node):_oy_;
      return _oz_?add$0(t[5],node):_oz_}
    function advance_clock(t,clock,to)
     {ensure_not_stabilizing(t,cst_advance_clock,1);
      var _ou_=now$2(clock),_ov_=caml_call2(Time_ns[18],to,_ou_);
      if(_ov_)
       {set_var_while_not_stabilizing(t,clock[2],to);
        caml_call3(Timing_wheel[20],clock[1],to,clock[3]);
        caml_call2(Timing_wheel[21],clock[1],clock[3]);
        for(;;)
         {if(caml_call1(Uopt[6],clock[4]))
           {var alarm_value=caml_call1(Uopt[9],clock[4]);
            clock[4] = alarm_value[2];
            alarm_value[2] = Uopt[3];
            var _ow_=alarm_value[1];
            switch(_ow_[0])
             {case 0:
               var match=_ow_[1],main=match[1];
               if(caml_call1(is_valid$2,main))
                {set_kind$0(main,_mD_);make_stale$0(t,main)}
               break;
              case 1:
               var
                at_intervals=_ow_[1],
                interval=at_intervals[3],
                base=at_intervals[2],
                main$0=at_intervals[1];
               if(caml_call1(is_valid$2,main$0))
                {at_intervals[4]
                 =
                 add_alarm
                  (clock,
                   next_interval_alarm_strict(clock,base,interval),
                   alarm_value);
                 make_stale$0(t,main$0)}
               break;
              case 2:
               var match$0=_ow_[1],value_at=match$0[4],main$1=match$0[1];
               set_freeze(t,main$1,value_at,function(param){return 1});
               make_stale$0(t,main$1);
               break;
              default:
               var match$1=_ow_[1],main$2=match$1[1];
               if(caml_call1(is_valid$2,main$2))make_stale$0(t,main$2)}
            continue}
          var _ox_=debug;
          break}}
      else
       var _ox_=_ov_;
      return _ox_}
    function create_clock(t,timing_wheel_config,start)
     {var
       timing_wheel=caml_call2(Timing_wheel[9],timing_wheel_config,start),
       clock=[],
       handle_fired=function _ot_(_os_){return _ot_.fun(_os_)},
       _or_=Uopt[3];
      caml_update_dummy
       (clock,[0,timing_wheel,create_var(0,t,start),handle_fired,_or_]);
      caml_update_dummy
       (handle_fired,
        function(alarm)
         {var alarm_value=caml_call2(Timing_wheel[5][5],clock[1],alarm);
          alarm_value[2] = clock[4];
          clock[4] = caml_call1(Uopt[4],alarm_value);
          return 0});
      return clock}
    function create$14(Config,max_height_allowed)
     {var
       adjust_heights_heap=create$7(max_height_allowed),
       recompute_heap=create$5(max_height_allowed),
       _oh_=caml_call1(Thread_safe_queue[3],0),
       _oi_=caml_call1(Only_in_debug[8],0),
       _oj_=caml_call1(Core_kernel_Stack[22],0),
       _ok_=caml_call1(Core_kernel_Stack[22],0),
       _ol_=caml_call1(Core_kernel_Stack[22],0),
       _om_=caml_call1(Core_kernel_Stack[22],0),
       _on_=caml_call1(Core_kernel_Stack[22],0),
       _oo_=caml_call1(Thread_safe_queue[3],0),
       _op_=Uopt[3],
       _oq_=caml_call1(Core_kernel_Stack[22],0),
       t=
        [0,
         2,
         Config[1],
         _p_,
         top,
         recompute_heap,
         adjust_heights_heap,
         _oq_,
         0,
         _op_,
         _oo_,
         _on_,
         _om_,
         _ol_,
         _ok_,
         _oj_,
         _oi_,
         _oh_,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0];
      return t}
    function weak_memoize_fun_by_key(opt,t,hashable,project_key,f)
     {if(opt)
       var sth=opt[1],initial_size=sth;
      else
       var initial_size=default_hash_table_initial_size;
      var
       scope=t[4],
       table=caml_call3(Weak_hashtbl[2],0,[0,initial_size],hashable),
       packed=[0,table];
      function _of_(param)
       {return caml_call2(Thread_safe_queue[5],t[17],packed)}
      caml_call2(Weak_hashtbl[12],table,_of_);
      function _og_(a)
       {var
         key=caml_call1(project_key,a),
         match=caml_call2(Weak_hashtbl[5],table,key);
        if(match){var b=match[1];return b}
        var b$0=within_scope(t,scope,function(param){return caml_call1(f,a)});
        caml_call3(Weak_hashtbl[8],table,key,b$0);
        return b$0}
      return caml_call1(Core_kernel[245],_og_)}
    function expert_kind_of_node(node)
     {var _ob_=node[4];
      if(typeof _ob_ === "number")
       {if(0 === _ob_)return Uopt[3]}
      else
       if(6 === _ob_[0]){var e=_ob_[1];return caml_call1(Uopt[4],e)}
      var
       _oc_=0,
       _od_=[0,sexp_of_t$25(function(param){return _mE_},_ob_),_oc_],
       _oe_=
        [1,
         [0,
          caml_call1
           (Sexplib0_Sexp_conv[7],cst_unexpected_kind_for_expert_node),
          _od_]];
      return caml_call1(Core_kernel[241],_oe_)}
    function create$15(state,on_observability_change,f)
     {var e=create$3(f,on_observability_change),node=create_node(state,[6,e]);
      return node}
    function currently_running_node_exn(state,name)
     {var _n9_=state[16][1];
      if(_n9_){var current=_n9_[1];return current}
      var
       _n__=caml_call2(Core_kernel[18],name,cst_during_stabilization),
       _n$_=caml_call2(Core_kernel[18],cst_can_only_call,_n__),
       _oa_=caml_call1(Core_kernel[447],_n$_);
      return caml_call1(Core_kernel[241],_oa_)}
    function assert_currently_running_node_is_child(state,node,name)
     {var
       current=currently_running_node_exn(state,name),
       _nY_=1 - has_child(node,current);
      if(_nY_)
       {var
         _nZ_=0,
         _n0_=0,
         _n1_=current[4],
         _n2_=
          [0,
           [1,
            [0,_mG_,[0,sexp_of_t$25(function(param){return _mF_},_n1_),_n0_]]],
           _nZ_],
         _n3_=0,
         _n4_=node[4],
         _n5_=
          [0,
           [1,
            [0,_mI_,[0,sexp_of_t$25(function(param){return _mH_},_n4_),_n3_]]],
           _n2_],
         _n6_=caml_call2(Core_kernel[18],name,cst_on_parent_nodes),
         _n7_=caml_call2(Core_kernel[18],cst_can_only_call$0,_n6_),
         _n8_=[1,[0,caml_call1(Core_kernel[447],_n7_),_n5_]];
        return caml_call1(Core_kernel[241],_n8_)}
      return _nY_}
    function assert_currently_running_node_is_parent(state,node,name)
     {var
       current=currently_running_node_exn(state,name),
       _nN_=1 - has_parent(node,current);
      if(_nN_)
       {var
         _nO_=0,
         _nP_=0,
         _nQ_=current[4],
         _nR_=
          [0,
           [1,
            [0,_mK_,[0,sexp_of_t$25(function(param){return _mJ_},_nQ_),_nP_]]],
           _nO_],
         _nS_=0,
         _nT_=node[4],
         _nU_=
          [0,
           [1,
            [0,_mM_,[0,sexp_of_t$25(function(param){return _mL_},_nT_),_nS_]]],
           _nR_],
         _nV_=caml_call2(Core_kernel[18],name,cst_on_children_nodes),
         _nW_=caml_call2(Core_kernel[18],cst_can_only_call$1,_nV_),
         _nX_=[1,[0,caml_call1(Core_kernel[447],_nW_),_nU_]];
        return caml_call1(Core_kernel[241],_nX_)}
      return _nN_}
    function make_stale$1(state,node)
     {var e_opt=expert_kind_of_node(node),_nJ_=caml_call1(Uopt[6],e_opt);
      if(_nJ_)
       {var e=caml_call1(Uopt[9],e_opt),match=make_stale(e);
        if(534011858 <= match)return 0;
        var
         _nK_=caml_call1(is_necessary$1,node),
         _nL_=_nK_?1 - is_in_recompute_heap(node):_nK_;
        if(_nL_)return add$0(state[5],node);
        var _nM_=_nL_}
      else
       var _nM_=_nJ_;
      return _nM_}
    function invalidate(state,node)
     {invalidate_node(state,node);return propagate_invalidity$1(state)}
    function add_dependency(state,node,dep)
     {var e_opt=expert_kind_of_node(node),_nE_=caml_call1(Uopt[6],e_opt);
      if(_nE_)
       {var
         e=caml_call1(Uopt[9],e_opt),
         new_child_index=add_child_edge(e,dep),
         _nF_=caml_call1(is_necessary$1,node);
        if(_nF_)
         {add_parent$0(state,dep[1],node,new_child_index);
          var _nG_=1 - is_in_recompute_heap(node);
          if(_nG_)return add$0(state[5],node);
          var _nH_=_nG_}
        else
         var _nH_=_nF_;
        var _nI_=_nH_}
      else
       var _nI_=_nE_;
      return _nI_}
    function remove_dependency(state,node,edge)
     {var e_opt=expert_kind_of_node(node),_nB_=caml_call1(Uopt[6],e_opt);
      if(_nB_)
       {var e=caml_call1(Uopt[9],e_opt);
        if(! caml_call1(is_necessary$1,node))throw [0,Assert_failure,_mN_];
        var
         edge_index=caml_call1(Uopt[7],edge[3]),
         last_edge=last_child_edge_exn(e),
         last_edge_index=caml_call1(Uopt[7],last_edge[3]);
        if(caml_call2(symbol$4,edge_index,last_edge_index))
         {swap_children_except_in_kind
           (node,edge[1],edge_index,last_edge[1],last_edge_index);
          swap_children(e,edge_index,last_edge_index)}
        remove_last_child_edge_exn(e);
        remove_child(state,edge[1],node,last_edge_index);
        if(1 - is_in_recompute_heap(node))add$0(state[5],node);
        var _nC_=1 - caml_call1(is_valid$2,edge[1]);
        if(_nC_)return decr_invalid_children(e);
        var _nD_=_nC_}
      else
       var _nD_=_nB_;
      return _nD_}
    var
     Expert$0=
      [0,
       expert_kind_of_node,
       create$15,
       currently_running_node_exn,
       assert_currently_running_node_is_child,
       assert_currently_running_node_is_parent,
       make_stale$1,
       invalidate,
       add_dependency,
       remove_dependency];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$97);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$6=
      [0,
       sexp_of_status,
       Run_on_update_handlers,
       Only_in_debug,
       Packed_weak_hashtbl,
       num_var_sets,
       set_num_var_sets,
       num_nodes_recomputed_directly_because_min_height,
       set_num_nodes_recomputed_directly_because_min_height,
       num_nodes_recomputed_directly_because_one_child,
       set_num_nodes_recomputed_directly_because_one_child,
       num_nodes_recomputed,
       set_num_nodes_recomputed,
       num_nodes_invalidated,
       set_num_nodes_invalidated,
       num_nodes_created,
       set_num_nodes_created,
       num_nodes_changed,
       set_num_nodes_changed,
       num_nodes_became_unnecessary,
       set_num_nodes_became_unnecessary,
       num_nodes_became_necessary,
       set_num_nodes_became_necessary,
       weak_hashtbls,
       only_in_debug,
       set_only_in_debug,
       run_on_update_handlers$0,
       set_during_stabilization,
       disallowed_observers,
       new_observers,
       finalized_observers,
       all_observers,
       set_all_observers,
       num_active_observers,
       set_num_active_observers,
       adjust_heights_heap,
       recompute_heap,
       current_scope,
       set_current_scope,
       stabilization_num,
       set_stabilization_num,
       bind_lhs_change_should_invalidate_rhs,
       status,
       set_status,
       Fields$0,
       sexp_of_t$39,
       Clock$0,
       now$2,
       timing_wheel_length,
       num_stabilizes,
       max_height_allowed$1,
       max_height_seen$1,
       iter_observers,
       directly_observed,
       save_dot$0,
       iter_observer_descendants,
       Stats,
       stats,
       am_stabilizing,
       invariant$30,
       ensure_not_stabilizing,
       set_height$1,
       set_max_height_allowed$1,
       handle_after_stabilization$1,
       remove_children,
       remove_child,
       check_if_unnecessary,
       became_unnecessary,
       remove_alarm,
       invalidate_node,
       invalidate_nodes_created_on_rhs,
       rescope_nodes_created_on_rhs,
       propagate_invalidity$1,
       add_parent_without_adjusting_heights,
       became_necessary,
       add_parent$0,
       run_with_scope,
       within_scope,
       change_child,
       add_alarm,
       recompute,
       copy_child,
       maybe_change_value,
       recompute_everything_that_is_necessary,
       unlink_disallowed_observers,
       disallow_future_use,
       disallow_finalized_observers,
       observer_finalizer,
       create_observer,
       add_new_observers,
       observer_value_exn,
       observer_value,
       node_on_update,
       observer_on_update_exn,
       set_var_while_not_stabilizing,
       set_var,
       reclaim_space_in_weak_hashtbls,
       stabilize,
       create_node_in,
       create_node,
       create_node_top,
       create_var,
       const$0,
       map$6,
       map2,
       map3,
       map4,
       map5,
       map6,
       map7,
       map8,
       map9,
       map10,
       map11,
       map12,
       map13,
       map14,
       map15,
       preserve_cutoff,
       depend_on,
       necessary_if_alive,
       bind,
       bind2,
       bind3,
       bind4,
       join,
       if$0,
       lazy_from_fun,
       default_hash_table_initial_size,
       memoize_fun_by_key,
       array_fold,
       all,
       unordered_array_fold,
       opt_unordered_array_fold,
       at_least_k_of,
       exists$6,
       for_all$6,
       sum$0,
       opt_sum,
       sum_int,
       sum_float,
       set_freeze,
       freeze,
       at,
       after,
       next_interval_alarm_strict,
       at_intervals,
       snapshot,
       incremental_step_function,
       make_stale$0,
       advance_clock,
       create_clock,
       create$14,
       weak_memoize_fun_by_key,
       Expert$0];
    caml_register_global(1219,include$6,"Incremental__State");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$98);
    caml_call1(Expect_test_collector[4][1],cst_src_expert1_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$99,cst$32);
    function create$16(opt,child)
     {if(opt)
       var sth=opt[1],on_change=sth;
      else
       var on_change=function(_nA_){return 0};
      return [0,child,on_change,Uopt[3]]}
    function value$3(state,t){return value_exn(t[1])}
    var include$7=[0,sexp_of_t$19,create$16,value$3];
    function create$17(state,opt,f)
     {if(opt)
       var sth=opt[1],on_observability_change=sth;
      else
       var on_observability_change=function(param){return 0};
      return caml_call3(Expert$0[2],state,on_observability_change,f)}
    var make_stale$2=Expert$0[6];
    function watch$1(_nz_){return _nz_}
    var
     invalidate$0=Expert$0[7],
     add_dependency$0=Expert$0[8],
     remove_dependency$0=Expert$0[9];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$100);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$8=
      [0,
       sexp_of_t$26,
       create$17,
       watch$1,
       make_stale$2,
       invalidate$0,
       add_dependency$0,
       remove_dependency$0],
     Incremental_Expert1=[0,include$7,include$8];
    caml_register_global(1220,Incremental_Expert1,"Incremental__Expert1");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$101);
    caml_call1(Expect_test_collector[4][1],cst_src_reduce_balanced_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$102,cst$33);
    function create$18(state,children,f,reduce)
     {var len=caml_call1(Array[17],children);
      if(caml_call2(symbol$1,len,0))return 0;
      var reducer=caml_call4(Balanced_reducer[3],0,0,len,reduce);
      function _nr_(param)
       {var a=caml_call1(Balanced_reducer[6],reducer);return a}
      var node=caml_call3(include$8[2],state,0,_nr_),_nt_=len - 1 | 0,_ns_=0;
      if(! (_nt_ < 0))
       {var i=_ns_;
        for(;;)
         {var
           _nu_=caml_check_bound(children,i)[1 + i],
           _nv_=
            [0,
             function(i)
               {return function(a)
                 {var _ny_=caml_call1(f,a);
                  caml_call3(Balanced_reducer[4],reducer,i,_ny_);
                  return debug}}
              (i)],
           _nw_=caml_call2(include$7[2],_nv_,_nu_);
          caml_call3(include$8[6],state,node,_nw_);
          var _nx_=i + 1 | 0;
          if(_nt_ !== i){var i=_nx_;continue}
          break}}
      return [0,caml_call1(include$8[3],node)]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$103);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Reduce_balanced=[0,create$18];
    caml_register_global
     (1222,Incremental_Reduce_balanced,"Incremental__Reduce_balanced");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$104);
    caml_call1(Expect_test_collector[4][1],cst_src_incremental_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$105,cst$34);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$106);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_Incremental_intf=[0];
    caml_register_global
     (1223,Incremental_Incremental_intf,"Incremental__Incremental_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental$107);
    caml_call1(Expect_test_collector[4][1],cst_src_incremental_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$108,cst$35);
    function Make_with_config(Incremental_config,_nc_)
     {var
       t=create$14(Incremental_config,128),
       State=
        [0,
         sexp_of_status,
         Run_on_update_handlers,
         Only_in_debug,
         Packed_weak_hashtbl,
         num_var_sets,
         set_num_var_sets,
         num_nodes_recomputed_directly_because_min_height,
         set_num_nodes_recomputed_directly_because_min_height,
         num_nodes_recomputed_directly_because_one_child,
         set_num_nodes_recomputed_directly_because_one_child,
         num_nodes_recomputed,
         set_num_nodes_recomputed,
         num_nodes_invalidated,
         set_num_nodes_invalidated,
         num_nodes_created,
         set_num_nodes_created,
         num_nodes_changed,
         set_num_nodes_changed,
         num_nodes_became_unnecessary,
         set_num_nodes_became_unnecessary,
         num_nodes_became_necessary,
         set_num_nodes_became_necessary,
         weak_hashtbls,
         only_in_debug,
         set_only_in_debug,
         run_on_update_handlers$0,
         set_during_stabilization,
         disallowed_observers,
         new_observers,
         finalized_observers,
         all_observers,
         set_all_observers,
         num_active_observers,
         set_num_active_observers,
         adjust_heights_heap,
         recompute_heap,
         current_scope,
         set_current_scope,
         stabilization_num,
         set_stabilization_num,
         bind_lhs_change_should_invalidate_rhs,
         status,
         set_status,
         Fields$0,
         sexp_of_t$39,
         Clock$0,
         now$2,
         timing_wheel_length,
         num_stabilizes,
         max_height_allowed$1,
         max_height_seen$1,
         iter_observers,
         directly_observed,
         save_dot$0,
         iter_observer_descendants,
         Stats,
         stats,
         am_stabilizing,
         invariant$30,
         ensure_not_stabilizing,
         set_height$1,
         set_max_height_allowed$1,
         handle_after_stabilization$1,
         remove_children,
         remove_child,
         check_if_unnecessary,
         became_unnecessary,
         remove_alarm,
         invalidate_node,
         invalidate_nodes_created_on_rhs,
         rescope_nodes_created_on_rhs,
         propagate_invalidity$1,
         add_parent_without_adjusting_heights,
         became_necessary,
         add_parent$0,
         run_with_scope,
         within_scope,
         change_child,
         add_alarm,
         recompute,
         copy_child,
         maybe_change_value,
         recompute_everything_that_is_necessary,
         unlink_disallowed_observers,
         disallow_future_use,
         disallow_finalized_observers,
         observer_finalizer,
         create_observer,
         add_new_observers,
         observer_value_exn,
         observer_value,
         node_on_update,
         observer_on_update_exn,
         set_var_while_not_stabilizing,
         set_var,
         reclaim_space_in_weak_hashtbls,
         stabilize,
         create_node_in,
         create_node,
         create_node_top,
         create_var,
         const$0,
         map$6,
         map2,
         map3,
         map4,
         map5,
         map6,
         map7,
         map8,
         map9,
         map10,
         map11,
         map12,
         map13,
         map14,
         map15,
         preserve_cutoff,
         depend_on,
         necessary_if_alive,
         bind,
         bind2,
         bind3,
         bind4,
         join,
         if$0,
         lazy_from_fun,
         default_hash_table_initial_size,
         memoize_fun_by_key,
         array_fold,
         all,
         unordered_array_fold,
         opt_unordered_array_fold,
         at_least_k_of,
         exists$6,
         for_all$6,
         sum$0,
         opt_sum,
         sum_int,
         sum_float,
         set_freeze,
         freeze,
         at,
         after,
         next_interval_alarm_strict,
         at_intervals,
         snapshot,
         incremental_step_function,
         make_stale$0,
         advance_clock,
         create_clock,
         create$14,
         weak_memoize_fun_by_key,
         Expert$0,
         t],
       state=State[155];
      function current(param){return state[4]}
      function within(t,f){return caml_call3(State[77],state,t,f)}
      var
       Scope=
        [0,
         _di_,
         invariant$12,
         top,
         is_top,
         height,
         is_valid$1,
         is_necessary$0,
         add_node,
         current,
         within];
      function pack(t){return t}
      function const$1(a){return caml_call2(State[102],state,a)}
      function observe(should_finalize,t)
       {return caml_call3(State[88],should_finalize,state,t)}
      function map(t1,f){return caml_call3(State[103],state,t1,f)}
      function map2$0(t1,t2,f){return caml_call4(State[104],state,t1,t2,f)}
      function map3$0(t1,t2,t3,f)
       {return caml_call5(State[105],state,t1,t2,t3,f)}
      function map4$0(t1,t2,t3,t4,f)
       {return caml_call6(State[106],state,t1,t2,t3,t4,f)}
      function map5$0(t1,t2,t3,t4,t5,f)
       {return caml_call7(State[107],state,t1,t2,t3,t4,t5,f)}
      function map6$0(t1,t2,t3,t4,t5,t6,f)
       {return caml_call8(State[108],state,t1,t2,t3,t4,t5,t6,f)}
      function map7$0(t1,t2,t3,t4,t5,t6,t7,f)
       {return caml_call9(State[109],state,t1,t2,t3,t4,t5,t6,t7,f)}
      function map8$0(t1,t2,t3,t4,t5,t6,t7,t8,f)
       {return caml_call10(State[110],state,t1,t2,t3,t4,t5,t6,t7,t8,f)}
      function map9$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,f)
       {return caml_call11(State[111],state,t1,t2,t3,t4,t5,t6,t7,t8,t9,f)}
      function map10$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,f)
       {return caml_call12(State[112],state,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,f)}
      function map11$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,f)
       {return caml_call13
                (State[113],state,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,f)}
      function map12$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,f)
       {return caml_call14
                (State[114],state,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,f)}
      function map13$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,f)
       {return caml_call15
                (State[115],
                 state,
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
                 f)}
      function map14$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,f)
       {return caml_call16
                (State[116],
                 state,
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
                 t14,
                 f)}
      function map15$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,f)
       {return caml_call17
                (State[117],
                 state,
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
                 t14,
                 t15,
                 f)}
      function bind$0(t,f){return caml_call3(State[121],state,t,f)}
      function bind2$0(t1,t2,f){return caml_call4(State[122],state,t1,t2,f)}
      function bind3$0(t1,t2,t3,f)
       {return caml_call5(State[123],state,t1,t2,t3,f)}
      function bind4$0(t1,t2,t3,t4,f)
       {return caml_call6(State[124],state,t1,t2,t3,t4,f)}
      function symbol_map(t,f){return map(t,f)}
      function symbol_bind(t,f){return bind$0(t,f)}
      var
       include=[0,symbol_map,symbol_bind],
       symbol_map$0=include[1],
       symbol_bind$0=include[2];
      function join$0(t){return caml_call2(State[125],state,t)}
      function if$1(test,then,else$0)
       {return caml_call4(State[126],state,test,then,else$0)}
      function lazy_from_fun$0(f){return caml_call2(State[127],state,f)}
      var default_hash_table_initial_size$0=State[128];
      function memoize_fun_by_key$0(initial_size,hashable,project_key,f)
       {return caml_call5
                (State[129],initial_size,state,hashable,project_key,f)}
      function memoize_fun(initial_size,hashable,f)
       {return memoize_fun_by_key$0
                (initial_size,hashable,function(_nq_){return _nq_},f)}
      function array_fold$0(ts,init,f)
       {return caml_call4(State[130],state,ts,init,f)}
      function reduce_balanced(ts,f,reduce)
       {return create$18(state,ts,f,reduce)}
      function unordered_array_fold$0
       (full_compute_every_n_changes,ts,init,f,update)
       {return caml_call6
                (State[132],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 init,
                 f,
                 update)}
      function opt_unordered_array_fold$0
       (full_compute_every_n_changes,ts,init,f,f_inverse)
       {return caml_call6
                (State[133],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 init,
                 f,
                 f_inverse)}
      function all$0(ts){return caml_call2(State[131],state,ts)}
      function exists(ts){return caml_call2(State[135],state,ts)}
      function for_all(ts){return caml_call2(State[136],state,ts)}
      function both(t1,t2){return map2$0(t1,t2,Core_kernel_Tuple[1][6])}
      function sum(full_compute_every_n_changes,ts,zero,add,sub)
       {return caml_call6
                (State[137],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 zero,
                 add,
                 sub)}
      function opt_sum$0(full_compute_every_n_changes,ts,zero,add,sub)
       {return caml_call6
                (State[138],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 zero,
                 add,
                 sub)}
      function sum_int$0(ts){return caml_call2(State[139],state,ts)}
      function sum_float$0(ts){return caml_call2(State[140],state,ts)}
      function create(use_current_scope,value)
       {return caml_call3(State[101],use_current_scope,state,value)}
      function set(t,value){return caml_call3(State[95],state,t,value)}
      function value(t){return t[1]}
      function watch(t){return t[4]}
      function sexp_of_t(sexp_of_a,t){return caml_call1(sexp_of_a,t[1])}
      var
       Var=
        [0,invariant$3,Packed,latest_value,create,set,value,watch,sexp_of_t];
      function compare(cmp_a,a_001,match)
       {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
        if(typeof a_001 === "number")
         {if(typeof match === "number")
           return 0;
          else
           if(1 === match[0])return 1}
        else
         {if(0 === a_001[0])
           {var _nn_=a_001[1];
            if(typeof match !== "number" && 0 === match[0])
             {var b_004=match[1];return caml_call2(cmp_a,_nn_,b_004)}
            return -1}
          var _no_=a_001[2],_np_=a_001[1];
          if(typeof match === "number")
           return -1;
          else
           if(0 !== match[0])
            {var b_008=match[2],b_006=match[1],n=caml_call2(cmp_a,_np_,b_006);
             return 0 === n?caml_call2(cmp_a,_no_,b_008):n}}
        return 1}
      function sexp_of_t$0(of_a,param)
       {if(typeof param === "number")
         return _mO_;
        else
         {if(0 === param[0])
           {var v0=param[1],v0$0=caml_call1(of_a,v0);
            return [1,[0,_mP_,[0,v0$0,0]]]}
          var
           v1=param[2],
           v0$1=param[1],
           v0$2=caml_call1(of_a,v0$1),
           v1$0=caml_call1(of_a,v1);
          return [1,[0,_mQ_,[0,v0$2,[0,v1$0,0]]]]}}
      var Update=[0,compare,sexp_of_t$0];
      function on_update_exn(t,f)
       {function _nj_(param)
         {if(typeof param === "number")
           {if(0 === param)return caml_call1(f,0);
            var
             _nk_=function(param){return _mR_},
             _nl_=function(_nm_){return sexp_of_t$34(_nk_,_nm_)};
            return caml_call5
                    (Core_kernel[224],
                     0,
                     _mS_,
                     cst_Incremental_bug_Observer_on_update_exn_got_unexpected_update_Unnecessary,
                     t,
                     _nl_)}
          else
           {if(0 === param[0]){var a=param[1];return caml_call1(f,[0,a])}
            var a2=param[2],a1=param[1];
            return caml_call1(f,[1,a1,a2])}}
        return caml_call3(State[93],state,t,_nj_)}
      function disallow_future_use$0(t)
       {return caml_call2(State[85],state,t[1])}
      function value$0(t){return caml_call2(State[91],state,t)}
      function value_exn$0(t){return caml_call2(State[90],state,t)}
      function sexp_of_t$1(sexp_of_a,t)
       {var _ni_=t[1][1];
        if(1 === _ni_)
         {var uopt=t[1][2][3];
          return caml_call1(Uopt[5],uopt)
                  ?caml_call1(Sexplib0_Sexp_conv[7],cst_invalid)
                  :caml_call1(sexp_of_a,caml_call1(Uopt[9],uopt))}
        return 0 === _ni_
                ?caml_call1(Sexplib0_Sexp_conv[7],cst_unstabilized)
                :caml_call1(Sexplib0_Sexp_conv[7],cst_disallowed)}
      var
       Observer=
        [0,
         invariant$26,
         observing$1,
         use_is_allowed$0,
         Update,
         on_update_exn,
         disallow_future_use$0,
         value$0,
         value_exn$0,
         sexp_of_t$1],
       include$0=State[46],
       fired_alarm_values=include$0[1],
       set_fired_alarm_values=include$0[2],
       handle_fired=include$0[3],
       timing_wheel=include$0[5],
       Fields=include$0[6],
       sexp_of_t$2=include$0[7],
       invariant=include$0[8],
       alarm_precision=Timing_wheel[1][10],
       _nd_=[0,caml_call2(Timing_wheel[7][5],_mT_,level_bits)],
       default_timing_wheel_config=
        caml_call4(Timing_wheel[8][4],0,_nd_,alarm_precision,0);
      function create$0(opt,start,param)
       {if(opt)
         var sth=opt[1],timing_wheel_config=sth;
        else
         var timing_wheel_config=default_timing_wheel_config;
        var
         _nh_=caml_call1(Time_ns[83],start),
         start$0=caml_call1(Time_ns[85],_nh_);
        return caml_call3(State[151],state,timing_wheel_config,start$0)}
      function alarm_precision$0(t){return caml_call1(Timing_wheel[10],t[1])}
      var timing_wheel_length$0=State[48],now=State[47];
      function watch_now(t){return t[2][4]}
      function at$0(t,time){return caml_call3(State[143],state,t,time)}
      function after$0(t,span){return caml_call3(State[144],state,t,span)}
      function at_intervals$0(t,span)
       {return caml_call3(State[146],state,t,span)}
      function advance_clock$0(t,to){return caml_call3(State[150],state,t,to)}
      function advance_clock_by(t,span)
       {var _ng_=caml_call1(now,t);
        return advance_clock$0(t,caml_call2(Time_ns[63],_ng_,span))}
      function incremental_step_function$0(t,step_function)
       {return caml_call3(State[148],state,t,step_function)}
      function step_function(t,init,steps)
       {return incremental_step_function$0
                (t,
                 const$1(caml_call2(Incremental_step_function[7],init,steps)))}
      function snapshot$0(t,incr,at,before)
       {return caml_call5(State[147],state,t,incr,at,before)}
      var
       Clock=
        [0,
         fired_alarm_values,
         set_fired_alarm_values,
         handle_fired,
         timing_wheel,
         Fields,
         sexp_of_t$2,
         invariant,
         default_timing_wheel_config,
         create$0,
         alarm_precision$0,
         timing_wheel_length$0,
         now,
         watch_now,
         at$0,
         after$0,
         at_intervals$0,
         advance_clock$0,
         advance_clock_by,
         incremental_step_function$0,
         step_function,
         snapshot$0];
      function freeze$0(opt,t)
       {if(opt)
         var sth=opt[1],when=sth;
        else
         var when=function(param){return 1};
        return caml_call3(State[142],state,t,when)}
      function depend_on$0(t,depend_on)
       {return caml_call3(State[119],state,t,depend_on)}
      function necessary_if_alive$0(input)
       {return caml_call2(State[120],state,input)}
      function on_update(t,f){return caml_call3(State[92],state,t,f)}
      function stabilize$0(param){return caml_call1(State[97],state)}
      function am_stabilizing$0(param){return caml_call1(State[58],state)}
      function save_dot(file){return caml_call2(State[54],state,file)}
      function sexp_of_t$3(sexp_of_a,t)
       {return caml_call1(is_valid$2,t)
                ?caml_call1(is_necessary$1,t)
                  ?caml_call1(Uopt[5],t[3])
                    ?caml_call1(Core_kernel[447],cst_uncomputed)
                    :caml_call1(sexp_of_a,unsafe_value(t))
                  :caml_call1(Core_kernel[447],cst_unnecessary)
                :caml_call1(Core_kernel[447],cst_invalid$0)}
      var sexp_of_t$4=include$7[1],create$1=include$7[2],_ne_=include$7[3];
      function value$1(t){return caml_call2(_ne_,State[155],t)}
      var
       Dependency=[0,sexp_of_t$4,create$1,value$1],
       sexp_of_t$5=include$8[1],
       watch$0=include$8[3];
      function create$2(on_observability_change,f)
       {return caml_call3(include$8[2],State[155],on_observability_change,f)}
      function make_stale(t){return caml_call2(include$8[4],state,t)}
      function invalidate(t){return caml_call2(include$8[5],State[155],t)}
      function add_dependency(t,edge)
       {return caml_call3(include$8[6],State[155],t,edge)}
      function remove_dependency(t,edge)
       {return caml_call3(include$8[7],State[155],t,edge)}
      var
       Node=
        [0,
         sexp_of_t$5,
         watch$0,
         create$2,
         make_stale,
         invalidate,
         add_dependency,
         remove_dependency],
       Expert=[0,Dependency,Node];
      function both$0(t1,t2)
       {return map2$0(t1,t2,function(x1,x2){return [0,x1,x2]})}
      var
       watch$1=Var[7],
       Open_on_rhs=[0,watch$1],
       Let_syntax=[0,bind$0,map,both$0,Open_on_rhs],
       Let_syntax$0=[0,const$1,symbol_map$0,symbol_bind$0,Let_syntax];
      function weak_memoize_fun_by_key$0(initial_size,hashable,project_key,f)
       {return caml_call5
                (State[153],initial_size,state,hashable,project_key,f)}
      function weak_memoize_fun(initial_size,hashable,f)
       {return weak_memoize_fun_by_key$0
                (initial_size,hashable,function(_nf_){return _nf_},f)}
      return [0,
              Incremental_config,
              State,
              state,
              Scope,
              Packed$0,
              type_equal_if_phys_same$0,
              invariant$18,
              create$4,
              set_kind$0,
              same$1,
              iteri_children$0,
              get_parent,
              add_parent,
              remove_parent,
              swap_children_except_in_kind,
              is_const,
              is_in_recompute_heap,
              is_necessary$1,
              is_valid$2,
              should_be_invalidated,
              edge_is_stale,
              is_stale,
              needs_to_be_computed,
              value_exn,
              unsafe_value,
              get_cutoff,
              set_cutoff$0,
              run_on_update_handlers,
              keep_node_creation_backtrace,
              user_info,
              set_user_info,
              has_child,
              has_parent,
              pack,
              const$1,
              const$1,
              observe,
              map,
              map2$0,
              map3$0,
              map4$0,
              map5$0,
              map6$0,
              map7$0,
              map8$0,
              map9$0,
              map10$0,
              map11$0,
              map12$0,
              map13$0,
              map14$0,
              map15$0,
              bind$0,
              bind2$0,
              bind3$0,
              bind4$0,
              include,
              symbol_map$0,
              symbol_bind$0,
              join$0,
              if$1,
              lazy_from_fun$0,
              default_hash_table_initial_size$0,
              memoize_fun_by_key$0,
              memoize_fun,
              array_fold$0,
              reduce_balanced,
              unordered_array_fold$0,
              opt_unordered_array_fold$0,
              all$0,
              exists,
              for_all,
              both,
              sum,
              opt_sum$0,
              sum_int$0,
              sum_float$0,
              Var,
              Observer,
              Clock,
              freeze$0,
              depend_on$0,
              necessary_if_alive$0,
              on_update,
              stabilize$0,
              am_stabilizing$0,
              save_dot,
              sexp_of_t$3,
              Expert,
              Let_syntax$0,
              weak_memoize_fun_by_key$0,
              weak_memoize_fun]}
    var Private=[0,debug];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$109);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    function _mU_(_m5_,_m4_)
     {var
       _m6_=Make_with_config(_m5_,_m4_),
       _m7_=_m6_[80],
       _m8_=_m6_[2],
       _m9_=_m6_[89],
       _m__=_m9_[2],
       _m$_=_m6_[4],
       _na_=_m6_[79],
       _nb_=_m6_[78];
      return [0,
              _m6_[88],
              _m6_[7],
              _m6_[16],
              _m6_[19],
              _m6_[18],
              _m6_[35],
              _m6_[36],
              _m6_[38],
              _m6_[58],
              _m6_[39],
              _m6_[40],
              _m6_[41],
              _m6_[42],
              _m6_[43],
              _m6_[44],
              _m6_[45],
              _m6_[46],
              _m6_[47],
              _m6_[48],
              _m6_[49],
              _m6_[50],
              _m6_[51],
              _m6_[52],
              _m6_[53],
              _m6_[59],
              _m6_[54],
              _m6_[55],
              _m6_[56],
              _m6_[57],
              _m6_[60],
              _m6_[61],
              _m6_[81],
              _m6_[82],
              _m6_[83],
              _m6_[72],
              _m6_[71],
              _m6_[70],
              _m6_[73],
              _m6_[66],
              _m6_[67],
              [0],
              _m6_[68],
              _m6_[69],
              _m6_[74],
              _m6_[75],
              _m6_[76],
              _m6_[77],
              [0,_nb_[8],_nb_[4],_nb_[5],_nb_[7],_nb_[6],_nb_[3]],
              [0,
               _na_[9],
               _na_[1],
               _na_[2],
               _na_[3],
               _na_[7],
               _na_[8],
               _na_[4],
               _na_[5],
               _na_[6]],
              _m6_[37],
              Node_update,
              _m6_[84],
              _m6_[85],
              _m6_[86],
              [0,
               sexp_of_t$2,
               invariant$0,
               create$0,
               of_compare,
               of_equal,
               always,
               never,
               phys_equal,
               poly_equal,
               should_cutoff,
               equal$1],
              _m6_[27],
              _m6_[26],
              [0,_m$_[3],_m$_[9],_m$_[10]],
              _m6_[62],
              _m6_[63],
              _m6_[65],
              _m6_[64],
              _m6_[30],
              _m6_[31],
              [0,
               _m9_[1],
               [0,_m__[1],_m__[3],_m__[2],_m__[4],_m__[5],_m__[6],_m__[7]]],
              [0,
               _m8_[45],
               _m8_[59],
               _m8_[155],
               _m8_[50],
               _m8_[62],
               _m8_[33],
               _m8_[51],
               _m8_[21],
               _m8_[19],
               _m8_[17],
               _m8_[15],
               _m8_[13],
               _m8_[11],
               _m8_[9],
               _m8_[7],
               _m8_[49],
               _m8_[5],
               [0,_m8_[56][2]],
               _m8_[57]],
              [0,_m6_[5][5]],
              _m6_[34],
              _m6_[87],
              _m6_[29],
              _m6_[90],
              Incremental_Before_or_after,
              [0,
               _m7_[6],
               _m7_[8],
               _m7_[9],
               _m7_[10],
               _m7_[11],
               _m7_[12],
               _m7_[13],
               _m7_[17],
               _m7_[18],
               _m7_[14],
               _m7_[15],
               _m7_[16],
               _m7_[20],
               _m7_[19],
               _m7_[21]],
              _m6_[92],
              _m6_[91]]}
    var
     Incremental$0=
      [0,
       Incremental_Config,
       function(_mV_)
        {var
          _m3_=Make_with_config(caml_call1(Incremental_Config[1],[0]),[0]),
          _mW_=_m3_[80],
          _mX_=_m3_[2],
          _mY_=_m3_[89],
          _mZ_=_mY_[2],
          _m0_=_m3_[4],
          _m1_=_m3_[79],
          _m2_=_m3_[78];
         return [0,
                 _m3_[88],
                 _m3_[7],
                 _m3_[16],
                 _m3_[19],
                 _m3_[18],
                 _m3_[35],
                 _m3_[36],
                 _m3_[38],
                 _m3_[58],
                 _m3_[39],
                 _m3_[40],
                 _m3_[41],
                 _m3_[42],
                 _m3_[43],
                 _m3_[44],
                 _m3_[45],
                 _m3_[46],
                 _m3_[47],
                 _m3_[48],
                 _m3_[49],
                 _m3_[50],
                 _m3_[51],
                 _m3_[52],
                 _m3_[53],
                 _m3_[59],
                 _m3_[54],
                 _m3_[55],
                 _m3_[56],
                 _m3_[57],
                 _m3_[60],
                 _m3_[61],
                 _m3_[81],
                 _m3_[82],
                 _m3_[83],
                 _m3_[72],
                 _m3_[71],
                 _m3_[70],
                 _m3_[73],
                 _m3_[66],
                 _m3_[67],
                 [0],
                 _m3_[68],
                 _m3_[69],
                 _m3_[74],
                 _m3_[75],
                 _m3_[76],
                 _m3_[77],
                 [0,_m2_[8],_m2_[4],_m2_[5],_m2_[7],_m2_[6],_m2_[3]],
                 [0,
                  _m1_[9],
                  _m1_[1],
                  _m1_[2],
                  _m1_[3],
                  _m1_[7],
                  _m1_[8],
                  _m1_[4],
                  _m1_[5],
                  _m1_[6]],
                 _m3_[37],
                 Node_update,
                 _m3_[84],
                 _m3_[85],
                 _m3_[86],
                 [0,
                  sexp_of_t$2,
                  invariant$0,
                  create$0,
                  of_compare,
                  of_equal,
                  always,
                  never,
                  phys_equal,
                  poly_equal,
                  should_cutoff,
                  equal$1],
                 _m3_[27],
                 _m3_[26],
                 [0,_m0_[3],_m0_[9],_m0_[10]],
                 _m3_[62],
                 _m3_[63],
                 _m3_[65],
                 _m3_[64],
                 _m3_[30],
                 _m3_[31],
                 [0,
                  _mY_[1],
                  [0,_mZ_[1],_mZ_[3],_mZ_[2],_mZ_[4],_mZ_[5],_mZ_[6],_mZ_[7]]],
                 [0,
                  _mX_[45],
                  _mX_[59],
                  _mX_[155],
                  _mX_[50],
                  _mX_[62],
                  _mX_[33],
                  _mX_[51],
                  _mX_[21],
                  _mX_[19],
                  _mX_[17],
                  _mX_[15],
                  _mX_[13],
                  _mX_[11],
                  _mX_[9],
                  _mX_[7],
                  _mX_[49],
                  _mX_[5],
                  [0,_mX_[56][2]],
                  _mX_[57]],
                 [0,_m3_[5][5]],
                 _m3_[34],
                 _m3_[87],
                 _m3_[29],
                 _m3_[90],
                 Incremental_Before_or_after,
                 [0,
                  _mW_[6],
                  _mW_[8],
                  _mW_[9],
                  _mW_[10],
                  _mW_[11],
                  _mW_[12],
                  _mW_[13],
                  _mW_[17],
                  _mW_[18],
                  _mW_[14],
                  _mW_[15],
                  _mW_[16],
                  _mW_[20],
                  _mW_[19],
                  _mW_[21]],
                 _m3_[92],
                 _m3_[91]]},
       _mU_,
       Private];
    caml_register_global(1225,Incremental$0,"Incremental");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyZW1lbnRhbC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
