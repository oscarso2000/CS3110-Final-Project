(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
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
     cst_thread_safe_queue=caml_new_string("thread_safe_queue"),
     cst_thread_safe_queue_src_import_ml=
      caml_new_string("thread_safe_queue/src/import.ml"),
     cst=caml_new_string(""),
     cst_thread_safe_queue$0=caml_new_string("thread_safe_queue"),
     cst_thread_safe_queue$1=caml_new_string("thread_safe_queue"),
     cst_Thread_safe_queue_dequeue_exn_of_empty_queue=
      caml_new_string("Thread_safe_queue.dequeue_exn of empty queue"),
     cst_thread_safe_queue$2=caml_new_string("thread_safe_queue"),
     cst_thread_safe_queue_src_thread_safe_queue_ml=
      caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),
     cst$0=caml_new_string(""),
     cst_thread_safe_queue$3=caml_new_string("thread_safe_queue"),
     cst_unused_elts=caml_new_string("unused_elts"),
     cst_back=caml_new_string("back"),
     cst_front=caml_new_string("front"),
     cst_length=caml_new_string("length"),
     cst_thread_safe_queue$4=caml_new_string("thread_safe_queue"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Uopt=global_data.Uopt,
     Core_kernel=global_data.Core_kernel,
     Assert_failure=global_data.Assert_failure,
     Base_Invariant=global_data.Base__Invariant,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Thread_safe_queue=[0];
    caml_register_global(31,Thread_safe_queue,"Thread_safe_queue__");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_thread_safe_queue);
    caml_call1
     (Expect_test_collector[4][1],cst_thread_safe_queue_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_thread_safe_queue$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_thread_safe_queue$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Thread_safe_queue_Import=[0];
    caml_register_global
     (35,Thread_safe_queue_Import,"Thread_safe_queue__Import");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_thread_safe_queue$2);
    caml_call1
     (Expect_test_collector[4][1],
      cst_thread_safe_queue_src_thread_safe_queue_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_thread_safe_queue$3,cst$0);
    var
     _v_=[0,caml_new_string("_")],
     _w_=
      [0,
       [0,
        caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),
        102,
        3237,
        3239]],
     _t_=[0,caml_new_string("_")],
     _s_=
      [0,caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),43,36],
     _q_=
      [0,caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),52,13],
     _r_=
      [0,caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),54,11],
     _p_=
      [0,caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),55,32],
     _o_=
      [0,caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),62,13],
     _u_=
      [0,
       caml_new_string("thread_safe_queue/src/thread_safe_queue.ml"),
       40,
       1540,
       1562],
     _k_=[0,caml_new_string("unused_elts")],
     _l_=[0,caml_new_string("back")],
     _m_=[0,caml_new_string("front")],
     _n_=[0,caml_new_string("length")],
     _a_=[0,caml_new_string("next")],
     _b_=[0,caml_new_string("value")];
    function sexp_of_t(of_a,param)
     {var
       v_value=param[1],
       v_next=param[2],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_next),
       bnds=[0,[1,[0,_a_,[0,arg,0]]],0],
       arg$0=caml_call2(Uopt[1],of_a,v_value),
       bnds$0=[0,[1,[0,_b_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function create(param){return [0,Uopt[3],Uopt[3]]}
    function unused_elts(r){return r[4]}
    function set_unused_elts(r,v){r[4] = v;return 0}
    function back(r){return r[3]}
    function set_back(r,v){r[3] = v;return 0}
    function front(r){return r[2]}
    function set_front(r,v){r[2] = v;return 0}
    function length(r){return r[1]}
    function set_length(r,v){r[1] = v;return 0}
    function _c_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _d_=[0,set_unused_elts],
     unused_elts$0=
      [0,function(param){return 0},cst_unused_elts,_d_,unused_elts,_c_];
    function _e_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _f_=[0,set_back],
     back$0=[0,function(param){return 0},cst_back,_f_,back,_e_];
    function _g_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _h_=[0,set_front],
     front$0=[0,function(param){return 0},cst_front,_h_,front,_g_];
    function _i_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _j_=[0,set_length],
     length$0=[0,function(param){return 0},cst_length,_j_,length,_i_];
    function sexp_of_t$0(of_a,param)
     {var
       v_length=param[1],
       v_front=param[2],
       v_back=param[3],
       v_unused_elts=param[4],
       bnds=0;
      function _G_(_H_){return sexp_of_t(of_a,_H_)}
      var
       arg=caml_call2(Uopt[1],_G_,v_unused_elts),
       bnds$0=[0,[1,[0,_k_,[0,arg,0]]],bnds],
       arg$0=sexp_of_t(of_a,v_back),
       bnds$1=[0,[1,[0,_l_,[0,arg$0,0]]],bnds$0],
       arg$1=sexp_of_t(of_a,v_front),
       bnds$2=[0,[1,[0,_m_,[0,arg$1,0]]],bnds$1],
       arg$2=caml_call1(Core_kernel[339],v_length),
       bnds$3=[0,[1,[0,_n_,[0,arg$2,0]]],bnds$2];
      return [1,bnds$3]}
    function invariant(invariant_a,t)
     {function _C_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         unused_elts_fun=
          check
           (function(unused_elts)
             {var r=[0,unused_elts];
              for(;;)
               {if(caml_call1(Uopt[6],r[1]))
                 {var elt=caml_call1(Uopt[7],r[1]);
                  r[1] = elt[2];
                  if(caml_call1(Uopt[5],elt[1]))continue;
                  throw [0,Assert_failure,_o_]}
                return 0}}),
         back_fun=
          check
           (function(back)
             {if(caml_call1(Uopt[5],back[1]))return 0;
              throw [0,Assert_failure,_p_]}),
         front_fun=
          check
           (function(front)
             {var i=[0,t[1]],r=[0,front];
              for(;;)
               {if(caml_call2(Core_kernel[91],i[1],0))
                 {i[1] += -1;
                  var elt=r[1];
                  r[1] = caml_call1(Uopt[7],elt[2]);
                  if(caml_call1(Uopt[6],elt[1]))continue;
                  throw [0,Assert_failure,_q_]}
                if(caml_call2(Core_kernel[234],r[1],t[3]))return 0;
                throw [0,Assert_failure,_r_]}}),
         length_fun=
          check
           (function(length)
             {if(caml_call2(Core_kernel[88],length,0))return 0;
              throw [0,Assert_failure,_s_]});
        caml_call1(length_fun,length$0);
        caml_call1(front_fun,front$0);
        caml_call1(back_fun,back$0);
        return caml_call1(unused_elts_fun,unused_elts$0)}
      function _D_(param){return _t_}
      function _E_(_F_){return sexp_of_t$0(_D_,_F_)}
      return caml_call4(Base_Invariant[1],_u_,t,_E_,_C_)}
    function create$0(param){var elt=create(0);return [0,0,elt,elt,Uopt[3]]}
    function enqueue(t,a)
     {if(caml_call1(Uopt[6],t[4]))
       {var elt=caml_call1(Uopt[8],t[4]);t[4] = elt[2];var new_back=elt}
      else
       var new_back=create(0);
      t[1] = t[1] + 1 | 0;
      var _A_=caml_call1(Uopt[4],a);
      t[3][1] = _A_;
      var _B_=caml_call1(Uopt[4],new_back);
      t[3][2] = _B_;
      t[3] = new_back;
      return 0}
    function dequeue_exn(t)
     {if(caml_call2(Core_kernel[90],t[1],0))
       {var
         _x_=function(param){return _v_},
         _y_=function(_z_){return sexp_of_t$0(_x_,_z_)};
        caml_call5
         (Core_kernel[224],
          0,
          _w_,
          cst_Thread_safe_queue_dequeue_exn_of_empty_queue,
          t,
          _y_)}
      var elt=t[2],a=elt[1];
      t[2] = caml_call1(Uopt[8],elt[2]);
      t[1] = t[1] - 1 | 0;
      elt[1] = Uopt[3];
      elt[2] = t[4];
      t[4] = caml_call1(Uopt[4],elt);
      return caml_call1(Uopt[8],a)}
    function clear_internal_pool(t){t[4] = Uopt[3];return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_thread_safe_queue$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Thread_safe_queue$0=
      [0,
       sexp_of_t$0,
       invariant,
       create$0,
       length,
       enqueue,
       dequeue_exn,
       clear_internal_pool,
       [0,[0,Uopt[1],Uopt[3],Uopt[4],Uopt[5],Uopt[6]]]];
    caml_register_global(42,Thread_safe_queue$0,"Thread_safe_queue");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aHJlYWRfc2FmZV9xdWV1ZS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
