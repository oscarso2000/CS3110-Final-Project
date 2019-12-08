(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_update_dummy=runtime.caml_update_dummy;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_incr_map=caml_new_string("incr_map"),
     cst_src_incr_map_intf_ml=caml_new_string("src/incr_map_intf.ml"),
     cst=caml_new_string(""),
     cst_incr_map$0=caml_new_string("incr_map"),
     cst_incr_map$1=caml_new_string("incr_map"),
     cst_Invalid_indices=caml_new_string("Invalid indices"),
     cst_impossible_case_BUG_in_incr_map_ml_subrange=
      caml_new_string("impossible case: BUG in incr_map.ml subrange"),
     cst_incr_map$2=caml_new_string("incr_map"),
     cst_src_incr_map_ml=caml_new_string("src/incr_map.ml"),
     cst$0=caml_new_string(""),
     cst_incr_map$3=caml_new_string("incr_map"),
     cst_incr_map$4=caml_new_string("incr_map"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Info=global_data.Core_kernel__Info,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Bool=global_data.Core_kernel__Bool,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Tuple=global_data.Core_kernel__Tuple,
     Core_kernel_Maybe_bound=global_data.Core_kernel__Maybe_bound,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Core_kernel_Lazy=global_data.Core_kernel__Lazy,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Incr_map=[0];
    caml_register_global(26,Incr_map,"Incr_map__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_map);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_map_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_map$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_map$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incr_map_Incr_map_intf=[0];
    caml_register_global(30,Incr_map_Incr_map_intf,"Incr_map__Incr_map_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_map$2);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_map_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_map$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_map$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _l_=[0,caml_new_string("entries")],
     _m_=[0,caml_new_string("actual_value")],
     _n_=[0,caml_new_string("key")],
     _g_=[0,caml_new_string("node_is_unnecessary")],
     _h_=[0,caml_new_string("node_is_invalid")],
     _i_=[0,caml_new_string("node_is_const")],
     _j_=[0,caml_new_string("node_info")],
     _k_=[0,caml_new_string("saved_value")],
     _b_=[0,caml_new_string("to_")],
     _c_=[0,caml_new_string("from")],
     _d_=[0,0,0],
     _f_=[0,caml_new_string("src/incr_map.ml"),673,10],
     _e_=[0,caml_new_string("src/incr_map.ml"),674,10],
     _a_=[0,caml_new_string("src/incr_map.ml"),159,12],
     Incr_map$0=
      [0,
       function(Incr)
        {function with_old(i,f)
          {var old=[0,0];
           function _bY_(a)
            {var b=caml_call2(f,old[1],a);old[1] = [0,[0,a,b]];return b}
           return caml_call2(Incr[71][4][2],i,_bY_)}
         function unordered_fold(opt,update,map,init,add,remove)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[234];
           function default$0(key,old_data,new_data,acc)
            {return caml_call3
                     (add,key,new_data,caml_call3(remove,key,old_data,acc))}
           var update$0=caml_call2(Core_kernel_Option[48],update,default$0);
           return with_old
                   (map,
                    function(old,new_in)
                     {if(old)
                       {var
                         match=old[1],
                         old_out=match[2],
                         old_in=match[1],
                         _bW_=
                          function(acc,param)
                           {var change=param[2],key=param[1],_bX_=change[1];
                            if(847852583 === _bX_)
                             {var old=change[2];return caml_call3(remove,key,old,acc)}
                            if(1013247643 <= _bX_)
                             {var match=change[2],new$0=match[2],old$0=match[1];
                              return caml_call4(update$0,key,old$0,new$0,acc)}
                            var new$1=change[2];
                            return caml_call3(add,key,new$1,acc)};
                        return caml_call5
                                (Core_kernel_Map[74],old_in,new_in,data_equal,old_out,_bW_)}
                      return caml_call3(Core_kernel_Map[51],new_in,init,add)})}
         function with_comparator(get_comparator,x,f)
          {var
            _bU_=caml_call2(Incr[8],x,get_comparator),
            _bV_=caml_call2(Incr[32],0,_bU_);
           return caml_call2(Incr[24],_bV_,f)}
         function with_comparator$0(map,f)
          {return with_comparator(Core_kernel_Map[2],map,f)}
         function of_set(set)
          {function _bP_(comparator)
            {var
              old_input=[0,caml_call1(Core_kernel_Set[3][1],comparator)],
              old_output=[0,caml_call1(Core_kernel_Map[102][1],comparator)];
             function _bQ_(new_input)
              {function _bR_(output,param)
                {if(0 === param[0])
                  {var k=param[1];
                   return caml_call2(Core_kernel_Map[40],output,k)}
                 var k$0=param[1];
                 return caml_call3(Core_kernel_Map[30],output,k$0,0)}
               var
                _bS_=old_output[1],
                _bT_=caml_call2(Core_kernel_Set[17],old_input[1],new_input),
                new_output=caml_call3(Core_kernel_Sequence[18],_bT_,_bS_,_bR_);
               old_input[1] = new_input;
               old_output[1] = new_output;
               return new_output}
             return caml_call2(Incr[8],set,_bQ_)}
           return with_comparator(Core_kernel_Set[5],set,_bP_)}
         function generic_mapi(witness,opt,map,f)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[234];
           return with_old
                   (map,
                    function(old,input)
                     {if(old)
                       {var
                         match=old[1],
                         old_output=match[2],
                         old_input=match[1],
                         _bN_=
                          function(output,param)
                           {var change=param[2],key=param[1],_bO_=change[1];
                            if(847852583 === _bO_)
                             return caml_call2(Core_kernel_Map[40],output,key);
                            var
                             new_data=1013247643 <= _bO_?change[2][2]:change[2],
                             res=caml_call2(f,key,new_data);
                            if(0 === witness)
                             return caml_call3(Core_kernel_Map[31],output,key,res);
                            if(res)
                             {var output_data=res[1];
                              return caml_call3
                                      (Core_kernel_Map[31],output,key,output_data)}
                            return caml_call2(Core_kernel_Map[40],output,key)};
                        return caml_call5
                                (Core_kernel_Map[74],
                                 old_input,
                                 input,
                                 data_equal,
                                 old_output,
                                 _bN_)}
                      return 0 === witness
                              ?caml_call2(Core_kernel_Map[50],input,f)
                              :caml_call2(Core_kernel_Map[58],input,f)})}
         function mapi(data_equal,map,f)
          {return generic_mapi(0,data_equal,map,f)}
         function filter_mapi(data_equal,map,f)
          {return generic_mapi(1,data_equal,map,f)}
         function with_old2(i1,i2,f)
          {var old=[0,0];
           function _bM_(a1,a2)
            {var b=caml_call3(f,old[1],a1,a2);
             old[1] = [0,[0,a1,a2,b]];
             return b}
           return caml_call3(Incr[10],i1,i2,_bM_)}
         function merge(opt,_bA_,left_map,right_map,f)
          {if(opt)
            var sth=opt[1],data_equal_left=sth;
           else
            var data_equal_left=Core_kernel[234];
           if(_bA_)
            var sth$0=_bA_[1],data_equal_right=sth$0;
           else
            var data_equal_right=Core_kernel[234];
           return with_old2
                   (left_map,
                    right_map,
                    function(old,new_left_map,new_right_map)
                     {var comparator=caml_call1(Core_kernel_Map[2],new_left_map);
                      if(old)
                       var
                        x=old[1],
                        old_left_map=x[1],
                        old_right_map=x[2],
                        old_output=x[3];
                      else
                       var
                        empty=caml_call1(Core_kernel_Map[102][1],comparator),
                        old_left_map=empty,
                        old_right_map=empty,
                        old_output=empty;
                      var
                       left_diff=
                        caml_call3
                         (Core_kernel_Map[73],
                          old_left_map,
                          new_left_map,
                          data_equal_left),
                       right_diff=
                        caml_call3
                         (Core_kernel_Map[73],
                          old_right_map,
                          new_right_map,
                          data_equal_right);
                      function _bB_(output,diff_element)
                       {if(2 === diff_element[0])
                         {var
                           right_key=diff_element[2][1],
                           match$4=diff_element[1],
                           left_key=match$4[1],
                           _bK_=caml_call2(comparator[1],left_key,right_key);
                          if(! caml_call2(Core_kernel_Int[118][3],_bK_,0))
                           throw [0,Assert_failure,_a_];
                          var key$0=left_key}
                        else
                         var match=diff_element[1],key=match[1],key$0=key;
                        function new_data(param)
                         {var _bL_=param[1];
                          if(847852583 === _bL_)return 0;
                          var x=1013247643 <= _bL_?param[2][2]:param[2];
                          return [0,x]}
                        switch(diff_element[0])
                         {case 0:
                           var
                            match$0=diff_element[1],
                            left_diff=match$0[2],
                            _bF_=caml_call2(Core_kernel_Map[37],new_right_map,key$0),
                            match$1=[0,new_data(left_diff),_bF_];
                           break;
                          case 1:
                           var
                            match$2=diff_element[1],
                            right_diff=match$2[2],
                            _bI_=new_data(right_diff),
                            match$1=
                             [0,caml_call2(Core_kernel_Map[37],new_left_map,key$0),_bI_];
                           break;
                          default:
                           var
                            right_diff$0=diff_element[2][2],
                            match$3=diff_element[1],
                            left_diff$0=match$3[2],
                            _bJ_=new_data(right_diff$0),
                            match$1=[0,new_data(left_diff$0),_bJ_]}
                        var right_data_opt=match$1[2],left_data_opt=match$1[1];
                        if(left_data_opt)
                         {var _bG_=left_data_opt[1];
                          if(right_data_opt)
                           var
                            y=right_data_opt[1],
                            _bH_=caml_call2(f,key$0,[0,737457313,[0,_bG_,y]]);
                          else
                           var _bH_=caml_call2(f,key$0,[0,847852583,_bG_]);
                          var output_data_opt=_bH_}
                        else
                         if(right_data_opt)
                          var
                           y$0=right_data_opt[1],
                           output_data_opt=caml_call2(f,key$0,[0,-57574468,y$0]);
                         else
                          var output_data_opt=0;
                        if(output_data_opt)
                         {var data=output_data_opt[1];
                          return caml_call3(Core_kernel_Map[31],output,key$0,data)}
                        return caml_call2(Core_kernel_Map[40],output,key$0)}
                      function _bC_(param,_bE_)
                       {var right_key=_bE_[1],left_key=param[1];
                        return caml_call2(comparator[1],left_key,right_key)}
                      var
                       _bD_=
                        caml_call3
                         (Core_kernel_Sequence[60],left_diff,right_diff,_bC_);
                      return caml_call3
                              (Core_kernel_Sequence[18],_bD_,old_output,_bB_)})}
         function generic_mapi_with_comparator
          (witness,cutoff,opt,lhs,comparator,f)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[234];
           var
            _bj_=Incr[65],
            empty_map=caml_call1(Core_kernel_Map[102][1],comparator),
            prev_map=[0,empty_map],
            prev_nodes=[0,empty_map],
            acc=[0,empty_map];
           function _bk_(param){return acc[1]}
           var
            result=caml_call2(_bj_[2][2],0,_bk_),
            on_inner_change=
             0 === witness
              ?function(key,data)
                {acc[1] = caml_call3(Core_kernel_Map[31],acc[1],key,data);
                 return 0}
              :function(key,opt)
                {var old=acc[1];
                 if(opt)
                  var
                   data=opt[1],
                   _bz_=caml_call3(Core_kernel_Map[31],old,key,data);
                 else
                  var
                   _bz_=
                    caml_call2(Core_kernel_Map[41],old,key)
                     ?caml_call2(Core_kernel_Map[40],old,key)
                     :old;
                 acc[1] = _bz_;
                 return 0},
            lhs_change=[];
           caml_update_dummy
            (lhs_change,
             [246,
              function(_bn_)
               {function _bo_(map)
                 {function _bp_(nodes,param)
                   {var changed=param[2],key=param[1],_bq_=changed[1];
                    if(847852583 === _bq_)
                     {var
                       match=caml_call2(Core_kernel_Map[38],nodes,key),
                       dep=match[2],
                       node=match[1],
                       nodes$0=caml_call2(Core_kernel_Map[40],nodes,key);
                      caml_call2(_bj_[2][7],result,dep);
                      acc[1] = caml_call2(Core_kernel_Map[40],acc[1],key);
                      caml_call1(_bj_[2][5],node);
                      return nodes$0}
                    if(1013247643 <= _bq_)
                     {var
                       match$0=caml_call2(Core_kernel_Map[38],nodes,key),
                       node$0=match$0[1];
                      caml_call1(_bj_[2][4],node$0);
                      return nodes}
                    function _br_(param)
                     {return caml_call2(Core_kernel_Map[38],prev_map[1],key)}
                    var node$1=caml_call2(_bj_[2][2],0,_br_);
                    function _bs_(c)
                     {var _by_=caml_call1(_bj_[2][3],node$1);
                      return caml_call2(Incr[56],_by_,c)}
                    caml_call2(Core_kernel_Option[18],cutoff,_bs_);
                    var
                     _bt_=caml_call1(Core_kernel[225],lhs_change),
                     _bu_=caml_call2(_bj_[1][2],0,_bt_);
                    caml_call2(_bj_[2][6],node$1,_bu_);
                    var
                     _bv_=caml_call2(f,key,caml_call1(_bj_[2][3],node$1)),
                     _bw_=[0,function(_bx_){return on_inner_change(key,_bx_)}],
                     user_function_dep=caml_call2(_bj_[1][2],_bw_,_bv_);
                    caml_call2(_bj_[2][6],result,user_function_dep);
                    return caml_call3
                            (Core_kernel_Map[31],nodes,key,[0,node$1,user_function_dep])}
                  var
                   new_nodes=
                    caml_call5
                     (Core_kernel_Map[74],
                      prev_map[1],
                      map,
                      data_equal,
                      prev_nodes[1],
                      _bp_);
                  prev_nodes[1] = new_nodes;
                  prev_map[1] = map;
                  return 0}
                return caml_call2(Incr[8],lhs,_bo_)}]);
           var
            _bl_=caml_call1(Core_kernel[225],lhs_change),
            _bm_=caml_call2(_bj_[1][2],0,_bl_);
           caml_call2(_bj_[2][6],result,_bm_);
           return caml_call1(_bj_[2][3],result)}
         function filter_mapi$0(cutoff,data_equal,map,f)
          {return with_comparator$0
                   (map,
                    function(comparator)
                     {return generic_mapi_with_comparator
                              (1,cutoff,data_equal,map,comparator,f)})}
         function mapi$0(cutoff,data_equal,map,f)
          {return with_comparator$0
                   (map,
                    function(comparator)
                     {return generic_mapi_with_comparator
                              (0,cutoff,data_equal,map,comparator,f)})}
         function keys(map)
          {return with_comparator$0
                   (map,
                    function(comparator)
                     {function add(key,param,acc)
                       {return caml_call2(Core_kernel_Set[11],acc,key)}
                      function remove(key,param,acc)
                       {return caml_call2(Core_kernel_Set[12],acc,key)}
                      function data_equal(param,_bi_){return 1}
                      return unordered_fold
                              ([0,data_equal],
                               0,
                               map,
                               caml_call1(Core_kernel_Set[3][1],comparator),
                               add,
                               remove)})}
         function flatten(map)
          {var
            _bc_=Incr[65],
            _bd_=caml_call1(Core_kernel_Map[2],map),
            result=[0,caml_call1(Core_kernel_Map[102][1],_bd_)];
           function _be_(param){return result[1]}
           var node=caml_call2(_bc_[2][2],0,_be_);
           function _bf_(key,incr)
            {var
              _bg_=
               [0,
                function(a)
                 {result[1] = caml_call3(Core_kernel_Map[31],result[1],key,a);
                  return 0}],
              _bh_=caml_call2(_bc_[1][2],_bg_,incr);
             return caml_call2(_bc_[2][6],node,_bh_)}
           caml_call2(Core_kernel_Map[44],map,_bf_);
           return caml_call1(_bc_[2][3],node)}
         function join(map_incr)
          {return with_comparator$0
                   (map_incr,
                    function(comparator)
                     {var
                       _a7_=Incr[65],
                       empty_map=caml_call1(Core_kernel_Map[102][1],comparator),
                       result_map=[0,empty_map],
                       old_map_of_incrs=[0,empty_map],
                       current_dependencies=[0,empty_map];
                      function _a8_(param){return result_map[1]}
                      var result=caml_call2(_a7_[2][2],0,_a8_);
                      function add_subnode(current_dependencies,key,data_node)
                       {var
                         _bb_=
                          [0,
                           function(data)
                            {result_map[1]
                             =
                             caml_call3(Core_kernel_Map[31],result_map[1],key,data);
                             return 0}],
                         new_dep=caml_call2(_a7_[1][2],_bb_,data_node);
                        caml_call2(_a7_[2][6],result,new_dep);
                        return caml_call3
                                (Core_kernel_Map[31],current_dependencies,key,new_dep)}
                      function remove_subnode(current_dependencies,key)
                       {var
                         dep=
                          caml_call2(Core_kernel_Map[38],current_dependencies,key);
                        caml_call2(_a7_[2][7],result,dep);
                        result_map[1]
                        =
                        caml_call2(Core_kernel_Map[40],result_map[1],key);
                        return caml_call2
                                (Core_kernel_Map[40],current_dependencies,key)}
                      function _a9_(map_of_incrs)
                       {function _a$_(current_dependencies,param)
                         {var diff=param[2],key=param[1],_ba_=diff[1];
                          if(847852583 === _ba_)
                           return remove_subnode(current_dependencies,key);
                          if(1013247643 <= _ba_)
                           {var match=diff[2],data_node=match[2];
                            return add_subnode
                                    (remove_subnode(current_dependencies,key),key,data_node)}
                          var data_node$0=diff[2];
                          return add_subnode(current_dependencies,key,data_node$0)}
                        var
                         new_dependency_map=
                          caml_call5
                           (Core_kernel_Map[74],
                            old_map_of_incrs[1],
                            map_of_incrs,
                            Core_kernel[234],
                            current_dependencies[1],
                            _a$_);
                        current_dependencies[1] = new_dependency_map;
                        old_map_of_incrs[1] = map_of_incrs;
                        return 0}
                      var
                       lhs_change=caml_call2(Incr[8],map_incr,_a9_),
                       _a__=caml_call2(_a7_[1][2],0,lhs_change);
                      caml_call2(_a7_[2][6],result,_a__);
                      return caml_call1(_a7_[2][3],result)})}
         function separate(input_map,data_equal)
          {return with_comparator$0
                   (input_map,
                    function(comparator)
                     {var
                       empty=caml_call1(Core_kernel_Map[102][1],comparator),
                       state=[0,empty,empty,empty];
                      function _aV_(param){return state[3]}
                      var output_map_node=caml_call2(Incr[65][2][2],0,_aV_);
                      function make_node_depend_on_input_map_changed
                       (node,input_map_changed)
                       {var
                         _a6_=caml_call1(Core_kernel_Lazy[27],input_map_changed),
                         dependency=caml_call2(Incr[65][1][2],0,_a6_);
                        return caml_call2(Incr[65][2][6],node,dependency)}
                      var input_map_changed=[];
                      caml_update_dummy
                       (input_map_changed,
                        [246,
                         function(_aW_)
                          {function _aX_(input_map)
                            {var prev_input_map=state[1];
                             function _aY_(param,_a0_)
                              {var
                                change=_a0_[2],
                                key=_a0_[1],
                                output_map=param[2],
                                expert_nodes=param[1],
                                _a1_=change[1];
                               if(847852583 === _a1_)
                                {var
                                  old_node=
                                   caml_call2(Core_kernel_Map[38],expert_nodes,key);
                                 caml_call1(Incr[65][2][5],old_node);
                                 caml_call1(Incr[65][2][4],output_map_node);
                                 var _a2_=caml_call2(Core_kernel_Map[40],output_map,key);
                                 return [0,
                                         caml_call2(Core_kernel_Map[40],expert_nodes,key),
                                         _a2_]}
                               if(1013247643 <= _a1_)
                                {var _a3_=caml_call2(Core_kernel_Map[38],expert_nodes,key);
                                 caml_call1(Incr[65][2][4],_a3_);
                                 return [0,expert_nodes,output_map]}
                               function _aZ_(param)
                                {return caml_call2(Core_kernel_Map[38],state[1],key)}
                               var node=caml_call2(Incr[65][2][2],0,_aZ_);
                               make_node_depend_on_input_map_changed
                                (node,input_map_changed);
                               caml_call1(Incr[65][2][4],output_map_node);
                               var
                                _a4_=caml_call1(Incr[65][2][3],node),
                                _a5_=caml_call3(Core_kernel_Map[30],output_map,key,_a4_);
                               return [0,
                                       caml_call3(Core_kernel_Map[30],expert_nodes,key,node),
                                       _a5_]}
                             var
                              match=
                               caml_call5
                                (Core_kernel_Map[74],
                                 prev_input_map,
                                 input_map,
                                 data_equal,
                                 [0,state[2],state[3]],
                                 _aY_),
                              output_map=match[2],
                              expert_nodes=match[1];
                             state[1] = input_map;
                             state[2] = expert_nodes;
                             state[3] = output_map;
                             return 0}
                           return caml_call2(Incr[8],input_map,_aX_)}]);
                      make_node_depend_on_input_map_changed
                       (output_map_node,input_map_changed);
                      return caml_call1(Incr[65][2][3],output_map_node)})}
         function subrange(opt,map_incr,range)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[234];
           return with_old2
                   (map_incr,
                    range,
                    function(old,map,range)
                     {var compare=caml_call1(Core_kernel_Map[2],map)[1];
                      function cmp_a(l,r)
                       {var _aU_=caml_call2(compare,l,r);
                        return caml_call2(Core_kernel_Int[118][3],_aU_,0)}
                      function maybe_bound_equal(a_001,match)
                       {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 1;
                        if(typeof a_001 === "number")
                         {if(typeof match === "number")
                           return 1;
                          else
                           if(1 === match[0])return 0}
                        else
                         {if(0 === a_001[0])
                           {var _aS_=a_001[1];
                            if(typeof match !== "number" && 0 === match[0])
                             {var b_004=match[1];return cmp_a(_aS_,b_004)}
                            return 0}
                          var _aT_=a_001[1];
                          if(typeof match === "number")
                           return 0;
                          else
                           if(0 !== match[0])
                            {var b_006=match[1];return cmp_a(_aT_,b_006)}}
                        return 0}
                      function range_is_empty(min,max)
                       {if(typeof min === "number")
                         var switch$0=0;
                        else
                         if(0 === min[0])
                          {var _aQ_=min[1];
                           if(typeof max === "number")
                            var switch$0=0;
                           else
                            {if(0 === max[0])
                              {var max$0=max[1],_aO_=caml_call2(compare,_aQ_,max$0);
                               return caml_call2(Core_kernel_Int[118][4],_aO_,0)}
                             var min$0=_aQ_,max$1=max[1],switch$0=1}}
                         else
                          {var _aR_=min[1];
                           if(typeof max === "number")
                            var switch$0=0;
                           else
                            var min$0=_aR_,max$1=max[1],switch$0=1}
                        if(switch$0)
                         {var _aP_=caml_call2(compare,min$0,max$1);
                          return caml_call2(Core_kernel_Int[118][1],_aP_,0)}
                        return 0}
                      function range_includes(min,max,key)
                       {var
                         _aN_=
                          caml_call3(Core_kernel_Maybe_bound[13],min,key,compare);
                        return _aN_
                                ?caml_call3(Core_kernel_Maybe_bound[14],max,key,compare)
                                :_aN_}
                      if(range)
                       {var
                         range$0=range[1],
                         max=range$0[2],
                         min=range$0[1],
                         from_scratch=
                          function(param)
                           {return caml_call3(Core_kernel_Map[87],map,min,max)};
                        if(old)
                         {var _aC_=old[1],_aD_=_aC_[2];
                          if(_aD_)
                           {var
                             old_res=_aC_[3],
                             old_range=_aD_[1],
                             old_max=old_range[2],
                             old_min=old_range[1],
                             old_map=_aC_[1];
                            if(! range_is_empty(old_min,old_max))
                             if(! range_is_empty(min,old_max))
                              if(! range_is_empty(old_min,max))
                               {var
                                 _aE_=
                                  function(param)
                                   {function apply_diff_in_intersection(param$0,_aK_)
                                     {var
                                       data=_aK_[2],
                                       key=_aK_[1],
                                       map=param$0[2],
                                       outside=param$0[1],
                                       _aJ_=range_includes(min,max,key),
                                       _aL_=_aJ_?range_includes(old_min,old_max,key):_aJ_;
                                      if(_aL_)
                                       {var _aM_=data[1];
                                        if(847852583 === _aM_)
                                         return [0,outside,caml_call2(Core_kernel_Map[40],map,key)];
                                        var data$0=1013247643 <= _aM_?data[2][2]:data[2];
                                        return [0,
                                                outside,
                                                caml_call3(Core_kernel_Map[31],map,key,data$0)]}
                                      var outside$0=outside - 1 | 0;
                                      return caml_call2(Core_kernel_Int[70][11],outside$0,0)
                                              ?caml_call1(param,from_scratch(0))
                                              :[0,outside$0,caml_call2(Core_kernel_Map[40],map,key)]}
                                    var
                                     outside_cutoff=
                                      caml_call1(Core_kernel_Map[28],old_res)
                                      /
                                      4
                                      |
                                      0,
                                     with_updated_values_in_intersection=
                                      caml_call5
                                        (Core_kernel_Map[74],
                                         old_map,
                                         map,
                                         data_equal,
                                         [0,outside_cutoff,old_res],
                                         apply_diff_in_intersection)
                                       [2];
                                    if
                                     (caml_call4
                                       (Core_kernel_Tuple[1][10],
                                        maybe_bound_equal,
                                        maybe_bound_equal,
                                        old_range,
                                        range$0))
                                     return with_updated_values_in_intersection;
                                    var
                                     without_keys_out_of_range=
                                      caml_call3
                                       (Core_kernel_Map[87],
                                        with_updated_values_in_intersection,
                                        min,
                                        max);
                                    function map_append_exn(lower_part,upper_part)
                                     {var
                                       match=
                                        caml_call2(Core_kernel_Map[86],lower_part,upper_part);
                                      if(typeof match === "number")
                                       return caml_call1
                                               (Core_kernel[6],
                                                cst_impossible_case_BUG_in_incr_map_ml_subrange);
                                      var map=match[2];
                                      return map}
                                    if(typeof old_min === "number")
                                     var
                                      _aG_=caml_call1(Core_kernel_Map[2],map),
                                      _aH_=caml_call1(Core_kernel_Map[102][1],_aG_);
                                    else
                                     if(0 === old_min[0])
                                      var
                                       old_min$0=old_min[1],
                                       _aH_=caml_call3(Core_kernel_Map[87],map,min,[1,old_min$0]);
                                     else
                                      var
                                       old_min$1=old_min[1],
                                       _aH_=caml_call3(Core_kernel_Map[87],map,min,[0,old_min$1]);
                                    if(typeof old_max === "number")
                                     var
                                      _aI_=caml_call1(Core_kernel_Map[2],map),
                                      upper_part=caml_call1(Core_kernel_Map[102][1],_aI_);
                                    else
                                     if(0 === old_max[0])
                                      var
                                       old_max$0=old_max[1],
                                       upper_part=
                                        caml_call3(Core_kernel_Map[87],map,[1,old_max$0],max);
                                     else
                                      var
                                       old_max$1=old_max[1],
                                       upper_part=
                                        caml_call3(Core_kernel_Map[87],map,[0,old_max$1],max);
                                    var
                                     with_new_keys_now_in_range=
                                      map_append_exn
                                       (_aH_,map_append_exn(without_keys_out_of_range,upper_part));
                                    return with_new_keys_now_in_range};
                                return caml_call1(Core_kernel[247],_aE_)}
                            return from_scratch(0)}}
                        return from_scratch(0)}
                      var _aF_=caml_call1(Core_kernel_Map[2],map);
                      return caml_call1(Core_kernel_Map[102][1],_aF_)})}
         function is_known(param)
          {if(typeof param === "number")if(0 !== param)return 0;return 1}
         function to_option(param)
          {if(typeof param === "number")return 0;var k=param[1];return [0,k]}
         function key_range_linear(from,to,map)
          {var
            len=caml_call1(Core_kernel_Map[28],map),
            begin_key=caml_call2(Core_kernel_Int[100],from,len)?0:1,
            end_key=caml_call2(Core_kernel_Int[100],to,len)?0:1;
           function find_keys(fold,start_pos,advance_pos)
            {function _aA_(param)
              {return caml_call3
                       (fold,
                        map,
                        [0,begin_key,end_key,start_pos],
                        function(key,param$0,_aB_)
                         {var
                           pos=_aB_[3],
                           end_key=_aB_[2],
                           begin_key=_aB_[1],
                           begin_key$0=
                            caml_call2(Core_kernel_Int[102],pos,from)?[0,key]:begin_key,
                           end_key$0=
                            caml_call2(Core_kernel_Int[102],pos,to)?[0,key]:end_key;
                          if(is_known(begin_key$0))
                           if(is_known(end_key$0))
                            return caml_call1(param,[0,begin_key$0,end_key$0,pos]);
                          return [0,begin_key$0,end_key$0,caml_call1(advance_pos,pos)]})}
             return caml_call1(Core_kernel[247],_aA_)}
           if(caml_call2(Core_kernel_Int[118][5],to,len - from | 0))
            var
             _aw_=function(pos){return pos + 1 | 0},
             match=find_keys(Core_kernel_Map[51],0,_aw_);
           else
            var
             _az_=function(pos){return pos - 1 | 0},
             match=find_keys(Core_kernel_Map[52],len - 1 | 0,_az_);
           var end_key$0=match[2],begin_key$0=match[1];
           function _ax_(begin_key){return [0,begin_key,to_option(end_key$0)]}
           var _ay_=to_option(begin_key$0);
           return caml_call2(Core_kernel_Option[38],_ay_,_ax_)}
         function subrange_by_rank(data_equal,map,range)
          {var
            let_syntax_007=
             with_old2
              (map,
               range,
               function(old,map,param)
                {var
                  to=param[2],
                  from=param[1],
                  _ac_=caml_call2(Core_kernel_Int[104],to,from),
                  _ad_=_ac_ || caml_call2(Core_kernel_Int[104],from,0);
                 if(_ad_)
                  {var
                    _ae_=[0,[1,[0,_b_,[0,caml_call1(Core_kernel[339],to),0]]],0],
                    _af_=
                     [0,[1,[0,_c_,[0,caml_call1(Core_kernel[339],from),0]]],_ae_],
                    _ag_=
                     [1,
                      [0,
                       caml_call1(Sexplib0_Sexp_conv[7],cst_Invalid_indices),
                       _af_]];
                   caml_call1(Core_kernel[241],_ag_)}
                 if(old)
                  {var _ah_=old[1],_ai_=_ah_[3];
                   if(_ai_)
                    {var
                      _aj_=_ai_[1],
                      end_key_opt$0=_aj_[2],
                      begin_key=_aj_[1],
                      match=_ah_[2],
                      old_to=match[2],
                      old_from=match[1],
                      old_map=_ah_[1],
                      _ak_=caml_call1(Core_kernel_Map[2],map)[1],
                      find_offset=
                       function(key,changed_key,change)
                        {var _au_=caml_call2(_ak_,changed_key,key);
                         if(caml_call2(Core_kernel_Int[104],_au_,0))
                          {if(typeof change !== "number")
                            {var _av_=change[1];
                             if(-57574468 === _av_)return -1;
                             if(847852583 === _av_)return 1}
                           return 0}
                         return 0},
                      range_offset_begin=from - old_from | 0,
                      range_offset_end=to - old_to | 0,
                      adjust_and_offset=
                       function(by$1,key$1)
                        {if(caml_call2(Core_kernel_Int[118][1],by$1,0))
                          if(caml_call2(Core_kernel_Map[41],map,key$1))
                           var switch$0=0;
                          else
                           var _at_=1,switch$0=1;
                         else
                          var switch$0=0;
                         if(! switch$0)var _at_=0;
                         var by$2=by$1 + _at_ | 0,key=key$1,by=by$2;
                         for(;;)
                          {if(caml_call2(Core_kernel_Int[102],by,0))return [0,key];
                           if(caml_call2(Core_kernel_Int[104],by,0))
                            var closest_dir=-640801497,add=1;
                           else
                            var closest_dir=-779285466,add=-1;
                           var
                            match=
                             caml_call3(Core_kernel_Map[90],map,closest_dir,key);
                           if(match)
                            {var
                              match$0=match[1],
                              key$0=match$0[1],
                              by$0=by + add | 0,
                              key=key$0,
                              by=by$0;
                             continue}
                           return 0}},
                      diff=
                       function(init,f)
                        {function _ar_(param,_as_){return 1}
                         return caml_call5
                                 (Core_kernel_Map[74],old_map,map,_ar_,init,f)};
                     if(end_key_opt$0)
                      var
                       end_key=end_key_opt$0[1],
                       match$0=
                        diff
                         (_d_,
                          function(param,_ao_)
                           {var
                             change=_ao_[2],
                             key=_ao_[1],
                             offset_end=param[2],
                             offset_begin=param[1],
                             _ap_=offset_end + find_offset(end_key,key,change) | 0;
                            return [0,
                                    offset_begin + find_offset(begin_key,key,change) | 0,
                                    _ap_]}),
                       map_offset_end=match$0[2],
                       map_offset_begin=match$0[1],
                       end_key_opt$1=
                        adjust_and_offset
                         (map_offset_end + range_offset_end | 0,end_key),
                       begin_key_opt=
                        adjust_and_offset
                         (map_offset_begin + range_offset_begin | 0,begin_key),
                       end_key_opt$2=end_key_opt$1;
                     else
                      var
                       map_offset_begin$0=
                        diff
                         (0,
                          function(offset_begin,param)
                           {var change=param[2],key=param[1];
                            return offset_begin + find_offset(begin_key,key,change) | 0}),
                       _aa_=function(_aq_){return _aq_[1]},
                       _ab_=key_range_linear(to,to,map),
                       end_key_opt=caml_call2(Core_kernel_Option[38],_ab_,_aa_),
                       begin_key_opt$0=
                        adjust_and_offset
                         (map_offset_begin$0 + range_offset_begin | 0,begin_key),
                       begin_key_opt=begin_key_opt$0,
                       end_key_opt$2=end_key_opt;
                     var _al_=caml_call1(Core_kernel_Map[41],map);
                     if(caml_call2(Core_kernel_Option[23],begin_key_opt,_al_))
                      {var _am_=caml_call1(Core_kernel_Map[41],map);
                       if(caml_call2(Core_kernel_Option[23],end_key_opt$2,_am_))
                        {var
                          _an_=
                           function(begin_key){return [0,begin_key,end_key_opt$2]};
                         return caml_call2(Core_kernel_Option[38],begin_key_opt,_an_)}
                       throw [0,Assert_failure,_e_]}
                     throw [0,Assert_failure,_f_]}}
                 return key_range_linear(from,to,map)});
           function _W_(param)
            {var map=param[2],key_range=param[1];
             if(key_range)
              {var _Y_=key_range[1],_Z_=_Y_[2],___=_Y_[1];
               if(_Z_){var end_key=_Z_[1];return [0,[0,[0,___],[0,end_key]]]}
               var
                _$_=caml_call1(Core_kernel_Map[77],map),
                last_key=caml_call4(Core_kernel_Option[49],0,0,0,_$_)[1];
               return [0,[0,[0,___],[0,last_key]]]}
             return 0}
           var
            _X_=caml_call2(Incr[71][4][3],let_syntax_007,map),
            subrange_key_range=caml_call2(Incr[71][4][2],_X_,_W_);
           return subrange(data_equal,map,subrange_key_range)}
         var For_testing=[0,key_range_linear];
         function M(K){return [0]}
         function create(opt,input_map,comparator)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[234];
           var self=[];
           caml_update_dummy
            (self,
             [246,
              function(_O_)
               {function _P_(input_map)
                 {var
                   _Q_=caml_obj_tag(self),
                   self$0=
                    250 === _Q_
                     ?self[1]
                     :246 === _Q_?caml_call1(CamlinternalLazy[2],self):self;
                  function _R_(param,_S_)
                   {var
                     changed_value=_S_[2],
                     key=_S_[1],
                     entries=caml_call2(Core_kernel_Map[34],self$0[2],key);
                    function _T_(entry)
                     {var _U_=changed_value[1];
                      if(847852583 === _U_)
                       var _V_=0;
                      else
                       var
                        new_value=
                         1013247643 <= _U_?changed_value[2][2]:changed_value[2],
                        _V_=[0,new_value];
                      entry[1] = _V_;
                      return caml_call1(Incr[65][2][4],entry[2])}
                    return caml_call2(Core_kernel_List[8],entries,_T_)}
                  caml_call5
                   (Core_kernel_Map[74],self$0[1],input_map,data_equal,0,_R_);
                  self$0[1] = input_map;
                  return 0}
                var
                 updater_node=caml_call2(Incr[8],input_map,_P_),
                 empty_map=caml_call1(Core_kernel_Map[102][1],comparator);
                return [0,
                        empty_map,
                        empty_map,
                        updater_node,
                        caml_call1(Incr[58][2],0)]}]);
           var _N_=caml_obj_tag(self);
           return 250 === _N_
                   ?self[1]
                   :246 === _N_?caml_call1(CamlinternalLazy[2],self):self}
         function find(t,key)
          {var match=caml_call2(Core_kernel_Map[34],t[2],key);
           if(match)
            {var entry=match[1];return caml_call1(Incr[65][2][3],entry[2])}
           function _C_(param)
            {var entry=[];
             caml_update_dummy
              (entry,
               [246,
                function(_F_)
                 {function _G_(param)
                   {return caml_call1(Core_kernel[225],entry)[1]}
                  var
                   _H_=
                    [0,
                     function(is_now_observable)
                      {var
                        _J_=caml_obj_tag(entry),
                        entry$0=
                         250 === _J_
                          ?entry[1]
                          :246 === _J_?caml_call1(CamlinternalLazy[2],entry):entry,
                        current_entries=caml_call2(Core_kernel_Map[34],t[2],key),
                        _K_=caml_call1(Core_kernel[234],entry$0),
                        is_linked=
                         caml_call2(Core_kernel_List[12],current_entries,_K_);
                       if
                        (caml_call2
                          (Core_kernel_Bool[25],is_linked,is_now_observable))
                        return 0;
                       if(is_now_observable)
                        {t[2] = caml_call3(Core_kernel_Map[32],t[2],key,entry$0);
                         return 0}
                       function _L_(x)
                        {return 1 - caml_call2(Core_kernel[234],entry$0,x)}
                       var
                        new_entries=
                         caml_call2(Core_kernel_List[48],current_entries,_L_),
                        _M_=
                         caml_call1(Core_kernel_List[7],new_entries)
                          ?caml_call2(Core_kernel_Map[40],t[2],key)
                          :caml_call3(Core_kernel_Map[31],t[2],key,new_entries);
                       t[2] = _M_;
                       return 0}],
                   _I_=caml_call2(Incr[65][2][2],_H_,_G_);
                  return [0,caml_call2(Core_kernel_Map[37],t[1],key),_I_]}]);
             var
              _D_=caml_obj_tag(entry),
              entry$0=
               250 === _D_
                ?entry[1]
                :246 === _D_?caml_call1(CamlinternalLazy[2],entry):entry,
              _E_=caml_call2(Incr[65][1][2],0,t[3]);
             caml_call2(Incr[65][2][6],entry$0[2],_E_);
             return caml_call1(Incr[65][2][3],entry$0[2])}
           return caml_call2(Incr[58][3],t[4],_C_)}
         function sexp_of_t(sexp_of_key,sexp_of_value,t)
          {function _o_(key,data)
            {var _p_=data[1];
             if(737457313 === _p_)
              var
               match=data[2],
               y=match[2],
               x=match[1],
               actual_value=[0,x],
               actual_value$0=actual_value,
               entries=y;
             else
              if(847852583 <= _p_)
               var x$0=data[2],actual_value$0=[0,x$0],entries=0;
              else
               var y$0=data[2],actual_value$0=0,entries=y$0;
             var _q_=0,_r_=0;
             function _s_(entry)
              {var
                saved_value=entry[1],
                node=entry[2],
                node$0=caml_call1(Incr[65][2][3],node),
                match=caml_call1(Incr[63],node$0),
                _u_=caml_call1(Incr[3],node$0),
                match$0=caml_call2(Core_kernel_Option[53],_u_,0),
                _v_=1 - caml_call1(Incr[4],node$0),
                match$1=caml_call2(Core_kernel_Option[53],_v_,0),
                _w_=1 - caml_call1(Incr[5],node$0),
                _x_=caml_call2(Core_kernel_Option[53],_w_,0),
                match$2=0;
               if(_x_)
                var
                 v=_x_[1],
                 _y_=
                  [0,[1,[0,_g_,[0,caml_call1(Core_kernel[491],v),0]]],match$2];
               else
                var _y_=match$2;
               if(match$1)
                var
                 v$0=match$1[1],
                 _z_=
                  [0,[1,[0,_h_,[0,caml_call1(Core_kernel[491],v$0),0]]],_y_];
               else
                var _z_=_y_;
               if(match$0)
                var
                 v$1=match$0[1],
                 _A_=
                  [0,[1,[0,_i_,[0,caml_call1(Core_kernel[491],v$1),0]]],_z_];
               else
                var _A_=_z_;
               if(match)
                var
                 v$2=match[1],
                 _B_=
                  [0,
                   [1,[0,_j_,[0,caml_call1(Core_kernel_Info[6],v$2),0]]],
                   _A_];
               else
                var _B_=_A_;
               return [1,
                       [0,
                        [1,
                         [0,
                          _k_,
                          [0,caml_call2(Core_kernel[431],sexp_of_value,saved_value),0]]],
                        _B_]]}
             var
              match$0=
               [0,
                [1,[0,_l_,[0,caml_call2(Core_kernel[400],_s_,entries),_r_]]],
                _q_];
             if(actual_value$0)
              var
               v=actual_value$0[1],
               _t_=[0,[1,[0,_m_,[0,caml_call1(sexp_of_value,v),0]]],match$0];
             else
              var _t_=match$0;
             return [0,
                     [1,[0,[1,[0,_n_,[0,caml_call1(sexp_of_key,key),0]]],_t_]]]}
           var info_per_key=caml_call3(Core_kernel_Map[70],t[1],t[2],_o_);
           return [1,caml_call1(Core_kernel_Map[67],info_per_key)]}
         return [0,
                 of_set,
                 filter_mapi,
                 mapi,
                 filter_mapi$0,
                 mapi$0,
                 unordered_fold,
                 merge,
                 flatten,
                 join,
                 separate,
                 keys,
                 subrange,
                 subrange_by_rank,
                 [0,create,find,M,[0,sexp_of_t]],
                 For_testing]}];
    caml_register_global(47,Incr_map$0,"Incr_map");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyX21hcC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
