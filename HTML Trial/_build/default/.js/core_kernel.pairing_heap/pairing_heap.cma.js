(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_cannot_remove_from_a_different_heap=
      caml_new_string("cannot remove from a different heap"),
     cst_Heap_value_exn_node_was_removed_from_the_heap=
      caml_new_string("Heap.value_exn: node was removed from the heap"),
     cst_Heap_top_exn_called_on_an_empty_heap=
      caml_new_string("Heap.top_exn called on an empty heap"),
     cst_pairing_heap=caml_new_string("pairing_heap"),
     cst_pairing_heap_src_pairing_heap_ml=
      caml_new_string("pairing_heap/src/pairing_heap.ml"),
     cst=caml_new_string(""),
     cst_pairing_heap$0=caml_new_string("pairing_heap"),
     cst_pairing_heap$1=caml_new_string("pairing_heap"),
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel_List=global_data.Core_kernel__List,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Tuple_pool=global_data.Tuple_pool,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Base_Container=global_data.Base__Container;
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_pairing_heap);
    caml_call1
     (Expect_test_collector[4][1],cst_pairing_heap_src_pairing_heap_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_pairing_heap$0,cst);
    var
     empty=Tuple_pool[3][4],
     is_empty=Tuple_pool[3][5],
     equal=Tuple_pool[3][7],
     _d_=[0,caml_new_string("pairing_heap/src/pairing_heap.ml"),239,10],
     _e_=[0,caml_new_string("pairing_heap/src/pairing_heap.ml"),237,8],
     _f_=[0,caml_new_string("pairing_heap/src/pairing_heap.ml"),246,2],
     _a_=[0,caml_new_string("pairing_heap/src/pairing_heap.ml"),110,4],
     dummy_id=-1;
    function child(t,pool)
     {return caml_call3(Tuple_pool[32],pool,t,Tuple_pool[2][4])}
    function sibling(t,pool)
     {return caml_call3(Tuple_pool[32],pool,t,Tuple_pool[2][5])}
    function prev(t,pool)
     {return caml_call3(Tuple_pool[32],pool,t,Tuple_pool[2][6])}
    function id(t,pool)
     {return caml_call3(Tuple_pool[32],pool,t,Tuple_pool[2][7])}
    function set_child(t,v,pool)
     {return caml_call4(Tuple_pool[34],pool,t,Tuple_pool[2][4],v)}
    function set_sibling(t,v,pool)
     {return caml_call4(Tuple_pool[34],pool,t,Tuple_pool[2][5],v)}
    function set_prev(t,v,pool)
     {return caml_call4(Tuple_pool[34],pool,t,Tuple_pool[2][6],v)}
    function value_exn(t,pool)
     {if(caml_call1(is_empty,t))throw [0,Assert_failure,_a_];
      return caml_call3(Tuple_pool[32],pool,t,Tuple_pool[2][3])}
    function allocate(value,pool,id)
     {var
       _J_=caml_call1(empty,0),
       _K_=caml_call1(empty,0),
       _L_=caml_call1(empty,0);
      return caml_call6(Tuple_pool[21],pool,value,_L_,_K_,_J_,id)}
    function disconnect_sibling(t,pool)
     {var sibling$0=sibling(t,pool);
      if(1 - caml_call1(is_empty,sibling$0))
       {set_sibling(t,caml_call1(empty,0),pool);
        set_prev(sibling$0,caml_call1(empty,0),pool)}
      return sibling$0}
    function disconnect_child(t,pool)
     {var child$0=child(t,pool);
      if(1 - caml_call1(is_empty,child$0))
       {set_child(t,caml_call1(empty,0),pool);
        set_prev(child$0,caml_call1(empty,0),pool)}
      return child$0}
    function create(capacity)
     {var
       _G_=caml_call1(Tuple_pool[3][4],0),
       _H_=caml_call1(Tuple_pool[3][4],0),
       _I_=[0,0,caml_call1(Tuple_pool[3][4],0),_H_,_G_,dummy_id];
      return caml_call3(Tuple_pool[9],Tuple_pool[1][21],capacity,_I_)}
    var _b_=Core_kernel_Int[106],_c_=Core_kernel_Int[72];
    function invariant(param,t)
     {if(! caml_call1(is_empty,t[3]))
       if(! caml_call1(is_empty,sibling(t[3],t[2])))
        throw [0,Assert_failure,_f_];
      var
       _E_=caml_call1(empty,0),
       to_visit$1=[0,[0,t[3],_E_,0],0],
       to_visit=to_visit$1;
      for(;;)
       {if(to_visit)
         {var
           rest=to_visit[2],
           match=to_visit[1],
           maybe_parent_value=match[3],
           expected_prev=match[2],
           node=match[1];
          if(caml_call1(is_empty,node)){var to_visit=rest;continue}
          var this_value=value_exn(node,t[2]);
          if(caml_call2(equal,prev(node,t[2]),expected_prev))
           {var
             _C_=
              function(this_value)
                {return function(parent_value)
                  {var _F_=caml_call2(t[1],parent_value,this_value);
                   if(caml_call2(Core_kernel[89],_F_,0))return 0;
                   throw [0,Assert_failure,_d_]}}
               (this_value);
            caml_call2(Core_kernel_Option[18],maybe_parent_value,_C_);
            var
             _D_=[0,[0,sibling(node,t[2]),node,maybe_parent_value],rest],
             to_visit$0=[0,[0,child(node,t[2]),node,[0,this_value]],_D_],
             to_visit=to_visit$0;
            continue}
          throw [0,Assert_failure,_e_]}
        return 0}}
    function create$0(opt,cmp,param)
     {if(opt)var sth=opt[1],min_size=sth;else var min_size=1;
      var _B_=caml_call1(empty,0);
      return [0,cmp,create(min_size),_B_,0]}
    function copy(param)
     {var
       cmp=param[1],
       pool$0=param[2],
       root$0=param[3],
       num_of_allocated_nodes=param[4],
       pool=create(caml_call1(Tuple_pool[11],pool$0));
      function copy_node(node,to_visit)
       {if(caml_call1(is_empty,node))return [0,caml_call1(empty,0),to_visit];
        var
         _z_=id(node,pool$0),
         new_node=allocate(value_exn(node,pool$0),pool,_z_),
         _A_=[0,[0,new_node,-560648958,sibling(node,pool$0)],to_visit],
         to_visit$0=[0,[0,new_node,-977688164,child(node,pool$0)],_A_];
        return [0,new_node,to_visit$0]}
      var
       match$1=copy_node(root$0,0),
       to_visit$1=match$1[2],
       root=match$1[1],
       to_visit=to_visit$1;
      for(;;)
       {if(to_visit)
         {var
           rest=to_visit[2],
           match=to_visit[1],
           node_to_copy=match[3],
           slot=match[2],
           node_to_update=match[1],
           match$0=copy_node(node_to_copy,rest),
           to_visit$0=match$0[2],
           new_node=match$0[1];
          if(-560648958 <= slot)
           set_sibling(node_to_update,new_node,pool);
          else
           set_child(node_to_update,new_node,pool);
          if(1 - caml_call1(is_empty,new_node))
           set_prev(new_node,node_to_update,pool);
          var to_visit=to_visit$0;
          continue}
        return [0,cmp,pool,root,num_of_allocated_nodes]}}
    function merge(t,root1,root2)
     {if(caml_call1(is_empty,root1))return root2;
      if(caml_call1(is_empty,root2))return root1;
      function add_child(t,node,child)
       {var _y_=t[2],current_child=disconnect_child(node,_y_);
        set_sibling(child,current_child,_y_);
        if(1 - caml_call1(is_empty,current_child))
         set_prev(current_child,child,_y_);
        set_child(node,child,_y_);
        set_prev(child,node,_y_);
        return node}
      var
       v1=value_exn(root1,t[2]),
       v2=value_exn(root2,t[2]),
       _x_=caml_call2(t[1],v1,v2);
      return caml_call2(Core_kernel[92],_x_,0)
              ?add_child(t,root1,root2)
              :add_child(t,root2,root1)}
    function top_exn(t)
     {return caml_call1(is_empty,t[3])
              ?caml_call1
                (Core_kernel[6],cst_Heap_top_exn_called_on_an_empty_heap)
              :value_exn(t[3],t[2])}
    function top(t){return caml_call1(is_empty,t[3])?0:[0,top_exn(t)]}
    function add_node(t,v)
     {if(caml_call1(Tuple_pool[14],t[2]))
       t[2] = caml_call2(Tuple_pool[13],0,t[2]);
      t[4] = t[4] + 1 | 0;
      var _w_=caml_call1(_c_,t[4]),node=allocate(v,t[2],_w_);
      t[3] = merge(t,t[3],node);
      return node}
    function add(t,v){add_node(t,v);return 0}
    var max_stack_depth=1000;
    function loop(t,depth,head$1)
     {if(caml_call2(Core_kernel[88],depth,max_stack_depth))
       {var acc=0,head=head$1;
        for(;;)
         {if(caml_call1(is_empty,head))
           var match=acc;
          else
           {var next1=disconnect_sibling(head,t[2]);
            if(! caml_call1(is_empty,next1))
             {var
               head$0=disconnect_sibling(next1,t[2]),
               acc$0=[0,merge(t,head,next1),acc],
               acc=acc$0,
               head=head$0;
              continue}
            var match=[0,head,acc]}
          if(match)
           {var _s_=match[2],_t_=match[1];
            if(_s_)
             {var _u_=function(acc,heap){return merge(t,acc,heap)};
              return caml_call3(Core_kernel_List[9],_s_,_t_,_u_)}
            return _t_}
          return caml_call1(empty,0)}}
      if(caml_call1(is_empty,head$1))return head$1;
      var next1$0=disconnect_sibling(head$1,t[2]);
      if(caml_call1(is_empty,next1$0))return head$1;
      var
       next2=disconnect_sibling(next1$0,t[2]),
       _v_=loop(t,depth + 1 | 0,next2);
      return merge(t,merge(t,head$1,next1$0),_v_)}
    function remove_non_empty(t,node)
     {var pool=t[2];
      if(1 - caml_call1(is_empty,node))
       {var prev$0=prev(node,pool);
        if(1 - caml_call1(is_empty,prev$0))
         {var
           relation_to_prev=
            caml_call2(equal,node,child(prev$0,pool))?-977688164:-560648958;
          set_prev(node,caml_call1(empty,0),pool);
          var sibling=disconnect_sibling(node,pool);
          if(-560648958 <= relation_to_prev)
           set_sibling(prev$0,sibling,pool);
          else
           set_child(prev$0,sibling,pool);
          if(1 - caml_call1(is_empty,sibling))
           {set_prev(sibling,prev$0,pool);var switch$0=1,switch$1=0}
          else
           var switch$1=1}
        else
         var switch$1=1;
        if(switch$1)var switch$0=0}
      else
       var switch$0=0;
      var
       head=disconnect_child(node,pool),
       merged_children=loop(t,0,head),
       new_root=
        caml_call2(equal,t[3],node)
         ?merged_children
         :merge(t,t[3],merged_children);
      caml_call2(Tuple_pool[16],pool,node);
      t[3] = new_root;
      return 0}
    function remove_top(t)
     {var _r_=1 - caml_call1(is_empty,t[3]);
      return _r_?remove_non_empty(t,t[3]):_r_}
    function pop_exn(t){var r=top_exn(t);remove_top(t);return r}
    function pop(t){return caml_call1(is_empty,t[3])?0:[0,pop_exn(t)]}
    function pop_if(t,f)
     {var match=top(t);
      if(match){var v=match[1];return caml_call1(f,v)?(remove_top(t),[0,v]):0}
      return 0}
    function fold(t,acc,f)
     {var pool=t[2],to_visit$1=[0,t[3],0],acc$0=acc,to_visit=to_visit$1;
      for(;;)
       {if(to_visit)
         {var rest=to_visit[2],node=to_visit[1];
          if(caml_call1(is_empty,node)){var to_visit=rest;continue}
          var
           _q_=[0,child(node,pool),rest],
           to_visit$0=[0,sibling(node,pool),_q_],
           acc$1=caml_call2(f,acc$0,value_exn(node,pool)),
           acc$0=acc$1,
           to_visit=to_visit$0;
          continue}
        return acc$0}}
    function iter(t,f)
     {var pool=t[2],to_visit$1=[0,t[3],0],to_visit=to_visit$1;
      for(;;)
       {if(to_visit)
         {var rest=to_visit[2],node=to_visit[1];
          if(caml_call1(is_empty,node)){var to_visit=rest;continue}
          caml_call1(f,value_exn(node,pool));
          var
           _p_=[0,child(node,pool),rest],
           to_visit$0=[0,sibling(node,pool),_p_],
           to_visit=to_visit$0;
          continue}
        return 0}}
    function length(t){return caml_call1(Tuple_pool[12],t[2])}
    var
     iter$0=[0,-198771759,iter],
     length$0=[0,-198771759,length],
     C=caml_call1(Base_Container[16],[0,fold,iter$0,length$0]);
    function is_empty$0(t){return caml_call1(is_empty,t[3])}
    var
     mem=C[1],
     exists=C[8],
     for_all=C[9],
     count=C[10],
     sum=C[11],
     find=C[12],
     find_map=C[13],
     to_list=C[14],
     to_array=C[15],
     min_elt=C[16],
     max_elt=C[17],
     fold_result=C[6],
     fold_until=C[7];
    function of_array(arr,cmp)
     {var t=create$0([0,caml_call1(Core_kernel_Array[17],arr)],cmp,0);
      function _o_(v){return add(t,v)}
      caml_call2(Core_kernel_Array[19],arr,_o_);
      return t}
    function of_list(l,cmp)
     {return of_array(caml_call1(Core_kernel_Array[47],l),cmp)}
    function sexp_of_t(f,t)
     {var
       _l_=t[1],
       _m_=caml_call1(to_array,t),
       _n_=caml_call2(Core_kernel_Array[104],_m_,_l_);
      return caml_call2(Core_kernel_Array[13],f,_n_)}
    function is_node_valid(t)
     {var _k_=t[2];return caml_call2(_b_,id(t[1],t[3][2]),_k_)}
    function value_exn$0(t)
     {return is_node_valid(t)
              ?value_exn(t[1],t[3][2])
              :caml_call1
                (Core_kernel[6],
                 cst_Heap_value_exn_node_was_removed_from_the_heap)}
    function sexp_of_t$0(sexp_of_a,t)
     {var _j_=is_node_valid(t)?[0,value_exn(t[1],t[3][2])]:0;
      return caml_call2(Core_kernel[431],sexp_of_a,_j_)}
    function remove(t,token)
     {if(caml_call2(Core_kernel[234],t,token[3]))
       {var _h_=1 - caml_call1(is_empty,token[1]);
        if(_h_)
         {if(is_node_valid(token))remove_non_empty(t,token[1]);
          token[1] = caml_call1(empty,0);
          var _i_=0}
        else
         var _i_=_h_;
        return _i_}
      return caml_call1
              (Core_kernel[6],cst_cannot_remove_from_a_different_heap)}
    function add_removable(t,v)
     {var node=add_node(t,v);return [0,node,id(node,t[2]),t]}
    function update(t,token,v){remove(t,token);return add_removable(t,v)}
    function find_elt(t,f)
     {var nodes$1=[0,t[3],0],nodes=nodes$1;
      for(;;)
       {if(nodes)
         {var rest=nodes[2],node=nodes[1];
          if(caml_call1(is_empty,node)){var nodes=rest;continue}
          if(caml_call1(f,value_exn(node,t[2])))
           return [0,[0,node,id(node,t[2]),t]];
          var
           _g_=[0,child(node,t[2]),rest],
           nodes$0=[0,sibling(node,t[2]),_g_],
           nodes=nodes$0;
          continue}
        return 0}}
    function value(t,heap){return value_exn(t,heap[2])}
    var Elt=[0,value];
    function update$0(t,elt,v){remove_non_empty(t,elt);return add_node(t,v)}
    var Unsafe=[0,Elt,add_node,remove_non_empty,update$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_pairing_heap$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Pairing_heap=
      [0,
       sexp_of_t,
       mem,
       length,
       is_empty$0,
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
       invariant,
       min_elt,
       max_elt,
       create$0,
       of_array,
       of_list,
       top,
       top_exn,
       add,
       remove_top,
       pop,
       pop_exn,
       pop_if,
       copy,
       [0,sexp_of_t$0,value_exn$0],
       add_removable,
       remove,
       update,
       find_elt,
       Unsafe];
    runtime.caml_register_global(23,Pairing_heap,"Pairing_heap");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwYWlyaW5nX2hlYXAuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
