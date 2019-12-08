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
    var
     global_data=runtime.caml_get_global_data(),
     cst_attempt_to_compute_balanced_reducer_with_unset_elements=
      caml_new_string
       ("attempt to compute balanced reducer with unset elements"),
     cst_attempt_to_access_negative_index_in_balanced_reducer=
      caml_new_string("attempt to access negative index in balanced reducer"),
     cst_attempt_to_access_out_of_bounds_index_in_balanced_reducer=
      caml_new_string
       ("attempt to access out of bounds index in balanced reducer"),
     cst_non_positive_number_of_leaves_in_balanced_reducer=
      caml_new_string("non-positive number of leaves in balanced reducer"),
     cst_balanced_reducer=caml_new_string("balanced_reducer"),
     cst_balanced_reducer_src_balanced_reducer_ml=
      caml_new_string("balanced_reducer/src/balanced_reducer.ml"),
     cst=caml_new_string(""),
     cst_balanced_reducer$0=caml_new_string("balanced_reducer"),
     cst_balanced_reducer$1=caml_new_string("balanced_reducer"),
     Base_Option_array=global_data.Base__Option_array,
     Base=global_data.Base,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Int=global_data.Base__Int,
     Assert_failure=global_data.Assert_failure,
     Base_List=global_data.Base__List,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_balanced_reducer);
    caml_call1
     (Expect_test_collector[4][1],
      cst_balanced_reducer_src_balanced_reducer_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_balanced_reducer$0,cst);
    var
     _i_=[0,caml_new_string("balanced_reducer")],
     _e_=[0,caml_new_string("index")],
     _f_=[0,caml_new_string("length")],
     _g_=[0,caml_new_string("index")],
     _d_=[0,caml_new_string("_")],
     _c_=[0,caml_new_string("num_leaves")],
     _a_=[0,caml_new_string("balanced_reducer/src/balanced_reducer.ml"),76,9],
     _b_=[0,caml_new_string("balanced_reducer/src/balanced_reducer.ml"),78,6];
    function left_child_index(parent_index)
     {var _O_=caml_call2(Base[167],parent_index,2);
      return caml_call2(Base[165],_O_,1)}
    function right_child_index(left_child_index)
     {return caml_call2(Base[165],left_child_index,1)}
    function num_branches(t){return caml_call2(Base[166],t[2],1)}
    function index_is_leaf(t,i)
     {var _N_=num_branches(t);return caml_call2(Base[189],i,_N_)}
    function leaf_index(t,i)
     {var
       offset_from_start_of_leaves_in_array=caml_call2(Base[165],i,t[3]),
       rotated_index=
        caml_call2(Base[184],offset_from_start_of_leaves_in_array,t[2])
         ?offset_from_start_of_leaves_in_array
         :caml_call2(Base[166],offset_from_start_of_leaves_in_array,t[2]),
       _M_=num_branches(t);
      return caml_call2(Base[165],rotated_index,_M_)}
    function sexp_of_t(sexp_of_a,t)
     {function _I_(i)
       {var _L_=leaf_index(t,i);
        return caml_call2(Base_Option_array[8],t[1],_L_)}
      var
       _J_=caml_call2(Base_List[116],t[2],_I_),
       _K_=caml_call1(Base[143],sexp_of_a);
      return caml_call2(Base[132],_K_,_J_)}
    function invariant(invariant_a,t)
     {var
       data=t[1],
       _B_=caml_call1(Base_Option_array[7],data),
       _C_=caml_call2(Base[166],_B_,1),
       _A_=0;
      if(! (_C_ < 0))
       {var i$0=_A_;
        for(;;)
         {var match=caml_call2(Base_Option_array[8],data,i$0);
          if(match){var a=match[1];caml_call1(invariant_a,a)}
          var _H_=i$0 + 1 | 0;
          if(_C_ !== i$0){var i$0=_H_;continue}
          break}}
      var _E_=num_branches(t),_F_=caml_call2(Base[166],_E_,1),_D_=0;
      if(! (_F_ < 0))
       {var i=_D_;
        for(;;)
         {var
           left=left_child_index(i),
           right=right_child_index(left),
           left_is_none=caml_call2(Base_Option_array[10],data,left),
           right_is_none=caml_call2(Base_Option_array[10],data,right);
          if(caml_call2(Base_Option_array[11],data,i))
           {var switch$0=left_is_none?0:right_is_none?0:1;
            if(! switch$0)throw [0,Assert_failure,_a_]}
          else
           if(! index_is_leaf(t,left))
            if(! index_is_leaf(t,right))
             if(! left_is_none)
              if(! right_is_none)throw [0,Assert_failure,_b_];
          var _G_=i + 1 | 0;
          if(_F_ !== i){var i=_G_;continue}
          break}}
      return 0}
    function create_exn(opt,param,num_leaves,reduce)
     {if(opt)
       var sth=opt[1],sexp_of_a=sth;
      else
       var sexp_of_a=function(param){return _d_};
      if(caml_call2(Base[184],num_leaves,1))
       {var
         _w_=[0,[1,[0,_c_,[0,caml_call1(Base[115],num_leaves),0]]],0],
         _x_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_non_positive_number_of_leaves_in_balanced_reducer),
            _w_]];
        caml_call1(Base[207],_x_)}
      var
       num_branches=caml_call2(Base[166],num_leaves,1),
       _y_=caml_call1(Base_Int[92],num_leaves),
       num_leaves_not_in_bottom_level=caml_call2(Base[166],_y_,num_leaves),
       _z_=caml_call2(Base[165],num_branches,num_leaves),
       data=caml_call1(Base_Option_array[4],_z_);
      return [0,
              data,
              num_leaves,
              num_leaves_not_in_bottom_level,
              reduce,
              sexp_of_a]}
    function validate_index(t,i)
     {if(caml_call2(Base[184],i,0))
       {var
         _q_=[0,[1,[0,_e_,[0,caml_call1(Base[115],i),0]]],0],
         _r_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_attempt_to_access_negative_index_in_balanced_reducer),
            _q_]];
        caml_call1(Base[207],_r_)}
      var length=t[2],_s_=caml_call2(Base[189],i,length);
      if(_s_)
       {var
         _t_=[0,[1,[0,_f_,[0,caml_call1(Base[115],length),0]]],0],
         _u_=[0,[1,[0,_g_,[0,caml_call1(Base[115],i),0]]],_t_],
         _v_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_attempt_to_access_out_of_bounds_index_in_balanced_reducer),
            _u_]];
        return caml_call1(Base[207],_v_)}
      return _s_}
    function set_exn(t,i,a)
     {validate_index(t,i);
      var data=t[1],i$0=[0,leaf_index(t,i)];
      caml_call3(Base_Option_array[17],data,i$0[1],a);
      for(;;)
       {if(caml_call2(Base[186],i$0[1],0))
         {var
           _p_=caml_call2(Base[166],i$0[1],1),
           parent=caml_call2(Base[168],_p_,2);
          if(caml_call2(Base_Option_array[10],data,parent))
           i$0[1] = 0;
          else
           {caml_call2(Base_Option_array[23],data,parent);i$0[1] = parent}
          continue}
        return 0}}
    function get_exn(t,i)
     {validate_index(t,i);
      var _o_=leaf_index(t,i);
      return caml_call2(Base_Option_array[9],t[1],_o_)}
    function _h_(t,i)
     {if(caml_call2(Base_Option_array[11],t[1],i))
       return caml_call2(Base_Option_array[13],t[1],i);
      var
       left=left_child_index(i),
       right=right_child_index(left),
       _j_=caml_call1(Base_Option_array[7],t[1]);
      if(caml_call2(Base[189],left,_j_))
       {var
         sexp_of_a=t[5],
         _k_=[0,[1,[0,_i_,[0,sexp_of_t(sexp_of_a,t),0]]],0],
         _l_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_attempt_to_compute_balanced_reducer_with_unset_elements),
            _k_]];
        caml_call1(Base[207],_l_)}
      var _m_=_h_(t,right),_n_=_h_(t,left),a=caml_call2(t[4],_n_,_m_);
      caml_call3(Base_Option_array[22],t[1],i,a);
      return a}
    function compute_exn(t){return _h_(t,0)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_balanced_reducer$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Balanced_reducer=
      [0,sexp_of_t,invariant,create_exn,set_exn,get_exn,compute_exn];
    runtime.caml_register_global(26,Balanced_reducer,"Balanced_reducer");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYWxhbmNlZF9yZWR1Y2VyLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
