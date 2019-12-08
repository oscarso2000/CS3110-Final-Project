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
    var
     global_data=runtime.caml_get_global_data(),
     cst_persistent_connection_kernel=
      caml_new_string("persistent_connection_kernel"),
     cst_persistent_connection_kernel_src_persistent_connection_kernel_intf_ml=
      caml_new_string
       ("persistent_connection_kernel/src/persistent_connection_kernel_intf.ml"),
     cst=caml_new_string(""),
     cst_persistent_connection_kernel$0=
      caml_new_string("persistent_connection_kernel"),
     cst_persistent_connection_kernel$1=
      caml_new_string("persistent_connection_kernel"),
     cst_persistent_connection_kernel$2=
      caml_new_string("persistent_connection_kernel"),
     cst_persistent_connection_kernel_src_persistent_connection_kernel_ml=
      caml_new_string
       ("persistent_connection_kernel/src/persistent_connection_kernel.ml"),
     cst$0=caml_new_string(""),
     cst_persistent_connection_kernel$3=
      caml_new_string("persistent_connection_kernel"),
     cst_persistent_connection_kernel$4=
      caml_new_string("persistent_connection_kernel"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Async_kernel=global_data.Async_kernel,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Base_Random=global_data.Base__Random,
     Async_kernel_Time_source=global_data.Async_kernel__Time_source,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Persistent_connection_kernel=[0];
    caml_register_global
     (28,Persistent_connection_kernel,"Persistent_connection_kernel__");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],
      cst_persistent_connection_kernel);
    caml_call1
     (Expect_test_collector[4][1],
      cst_persistent_connection_kernel_src_persistent_connection_kernel_intf_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_persistent_connection_kernel$0,cst);
    caml_call1
     (Ppx_inline_test_lib_Runtime[3],cst_persistent_connection_kernel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Persistent_connection_kernel_Persistent_connection_kernel_intf=[0];
    caml_register_global
     (32,
      Persistent_connection_kernel_Persistent_connection_kernel_intf,
      "Persistent_connection_kernel__Persistent_connection_kernel_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],
      cst_persistent_connection_kernel$2);
    caml_call1
     (Expect_test_collector[4][1],
      cst_persistent_connection_kernel_src_persistent_connection_kernel_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_persistent_connection_kernel$3,cst$0);
    caml_call1
     (Ppx_inline_test_lib_Runtime[3],cst_persistent_connection_kernel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _h_=[0,990972795,0],
     _g_=[0,-289386606,0],
     _f_=[0,-289386606,0],
     _a_=[0,caml_new_string("Attempting_to_connect")],
     _b_=[0,caml_new_string("Disconnected")],
     _c_=[0,caml_new_string("Obtained_address")],
     _d_=[0,caml_new_string("Failed_to_connect")],
     _e_=[0,caml_new_string("Connected")],
     Persistent_connection_kernel$0=
      [0,
       function(Conn)
        {var sexp_of_address=Conn[1][1];
         function sexp_of_t(param)
          {if(typeof param === "number")
            return 0 === param?_a_:_b_;
           else
            switch(param[0])
             {case 0:
               var v0=param[1],v0$0=caml_call1(sexp_of_address,v0);
               return [1,[0,_c_,[0,v0$0,0]]];
              case 1:
               var v0$1=param[1],v0$2=caml_call1(Core_kernel_Error[6],v0$1);
               return [1,[0,_d_,[0,v0$2,0]]];
              default:
               var v0$3=param[1],v0$4=caml_call1(Sexplib0_Sexp_conv[23],v0$3);
               return [1,[0,_e_,[0,v0$4,0]]]}}
         function log_level(param)
          {if(typeof param !== "number" && 1 === param[0])return 106380200;
           return 815031438}
         function handle_event(t$0,t)
          {var on_event=t$0[5][2];return caml_call1(on_event,t)}
         function create(server_name,opt,_t_,_s_,_r_,connect,get_address)
          {if(opt)
            var sth=opt[1],on_event=sth;
           else
            var on_event=function(param){return Async_kernel_Deferred[18]};
           if(_t_)
            var sth$0=_t_[1],retry_delay=sth$0;
           else
            var
             _y_=caml_call1(Core_kernel_Time_ns[1][80],10.),
             retry_delay=caml_call1(Core_kernel[218],_y_);
           if(_s_)
            var sth$1=_s_[1],random_state=sth$1;
           else
            var random_state=Base_Random[18][1];
           if(_r_)
            var sth$2=_r_[1],time_source=sth$2;
           else
            var time_source=caml_call1(Async_kernel_Time_source[10],0);
           var event_handler=[0,server_name,on_event];
           function retry_delay$0(param)
            {var
              _af_=caml_call1(retry_delay,0),
              span=caml_call1(Core_kernel_Time_ns[1][90],_af_),
              distance=caml_call2(Base_Random[18][10],random_state,span * 0.3),
              wait=
               caml_call1(Base_Random[18][16],random_state)
                ?span + distance
                :span - distance,
              _ag_=caml_call1(Core_kernel_Time_ns[1][80],wait);
             return caml_call2(Async_kernel_Time_source[27],time_source,_ag_)}
           var
            _u_=caml_call1(Async_kernel_Ivar[12],0),
            _v_=caml_call1(Async_kernel_Ivar[12],0),
            t=
             [0,
              get_address,
              connect,
              retry_delay$0,
              caml_call1(Async_kernel_Ivar[12],0),
              event_handler,
              _v_,
              _u_];
           function _w_(param)
            {function _z_(param)
              {var
                ready_to_retry_connecting=caml_call1(t[3],0),
                previous_address=[0,0],
                previous_error=[0,0];
               function _C_(maybe_conn)
                {caml_call2(Async_kernel_Ivar[14],t[4],maybe_conn);
                 if(typeof maybe_conn === "number")
                  return caml_call1(Async_kernel[19],_f_);
                 var conn=maybe_conn[2];
                 function _V_(param)
                  {function _X_(param)
                    {t[4] = caml_call1(Async_kernel_Ivar[12],0);
                     function _Z_(param)
                      {var _$_=0;
                       function _aa_(param)
                        {caml_call2(Async_kernel_Ivar[14],t[4],-400989606);
                         return _g_}
                       var
                        _ab_=caml_call1(Async_kernel_Ivar[18],t[6]),
                        _ac_=[0,caml_call2(Async_kernel_Deferred[28],_ab_,_aa_),_$_];
                       function _ad_(param){return _h_}
                       var
                        _ae_=
                         [0,
                          caml_call2
                           (Async_kernel_Deferred[28],ready_to_retry_connecting,_ad_),
                          _ac_];
                       return caml_call1(Async_kernel_Deferred[30],_ae_)}
                     var ___=handle_event(t,1);
                     return caml_call2(Async_kernel[20],___,_Z_)}
                   var _Y_=caml_call1(Conn[4],conn);
                   return caml_call2(Async_kernel[20],_Y_,_X_)}
                 var _W_=handle_event(t,[2,conn]);
                 return caml_call2(Async_kernel[20],_W_,_V_)}
               function loop(param)
                {if(caml_call1(Async_kernel_Ivar[17],t[6]))
                  return caml_call1(Async_kernel[19],-400989606);
                 function _G_(param)
                  {if(0 === param[0])
                    {var conn=param[1];
                     return caml_call1(Async_kernel[19],[0,17724,conn])}
                   var err=param[1],_M_=previous_error[1];
                   if(_M_)
                    var
                     previous_err=_M_[1],
                     to_sexp=
                      function(e)
                       {var
                         _T_=caml_call1(Core_kernel_Error[23],e),
                         _U_=caml_call1(Async_kernel_Monitor[13],_T_);
                        return caml_call1(Base_Exn[1],_U_)},
                     _K_=to_sexp(previous_err),
                     _L_=to_sexp(err),
                     same_as_previous_error=
                      caml_call2(Core_kernel_Sexp[36],_L_,_K_);
                   else
                    var same_as_previous_error=0;
                   previous_error[1] = [0,err];
                   function _N_(param)
                    {function _P_(param){return loop(0)}
                     var
                      _Q_=[0,caml_call1(Async_kernel_Ivar[18],t[6]),0],
                      _R_=[0,caml_call1(t[3],0),_Q_],
                      _S_=caml_call1(Async_kernel_Deferred[24],_R_);
                     return caml_call2(Async_kernel[20],_S_,_P_)}
                   var
                    _O_=
                     same_as_previous_error
                      ?Async_kernel_Deferred[18]
                      :handle_event(t,[1,err]);
                   return caml_call2(Async_kernel[20],_O_,_N_)}
                 function _D_(param)
                  {if(0 === param[0])
                    {var addr=param[1],_H_=previous_address[1];
                     if(_H_)
                      var
                       previous_address$0=_H_[1],
                       same_as_previous_address=
                        caml_call2(Conn[1][2],addr,previous_address$0);
                     else
                      var same_as_previous_address=0;
                     previous_address[1] = [0,addr];
                     var
                      _I_=function(param){return caml_call1(t[2],addr)},
                      _J_=
                       same_as_previous_address
                        ?Async_kernel_Deferred[18]
                        :handle_event(t,[0,addr]);
                     return caml_call2(Async_kernel[20],_J_,_I_)}
                   var e=param[1];
                   return caml_call1(Async_kernel[19],[1,e])}
                 var
                  _E_=caml_call1(t[1],0),
                  _F_=caml_call2(Async_kernel[20],_E_,_D_);
                 return caml_call2(Async_kernel[20],_F_,_G_)}
               var _B_=loop(0);
               return caml_call2(Async_kernel[20],_B_,_C_)}
             var _A_=handle_event(t,0);
             return caml_call2(Async_kernel[20],_A_,_z_)}
           var _x_=caml_call2(Async_kernel_Deferred[32],0,_w_);
           caml_call1(Async_kernel[6],_x_);
           return t}
         function connected(t)
          {function loop(param)
            {var
              d=caml_call1(Async_kernel_Ivar[18],t[4]),
              match=caml_call1(Async_kernel_Deferred[5],d);
             if(match)
              {var _o_=match[1];
               if(typeof _o_ === "number")
                return caml_call1(Async_kernel_Deferred[20],0);
               var conn=_o_[2];
               if(caml_call1(Conn[3],conn))
                {var _p_=caml_call1(Conn[4],conn);
                 return caml_call2(Async_kernel[20],_p_,loop)}
               return caml_call1(Async_kernel[19],conn)}
             function _q_(param)
              {if(typeof param === "number")
                return caml_call1(Async_kernel_Deferred[20],0);
               var conn=param[2];
               return caml_call1(Async_kernel[19],conn)}
             return caml_call2(Async_kernel[20],d,_q_)}
           return loop(0)}
         function current_connection(t)
          {var
            _m_=caml_call1(Async_kernel_Ivar[18],t[4]),
            match=caml_call1(Async_kernel_Deferred[5],_m_);
           if(match)
            {var _n_=match[1];
             if(typeof _n_ !== "number"){var conn=_n_[2];return [0,conn]}}
           return 0}
         function close_finished(t)
          {return caml_call1(Async_kernel_Ivar[18],t[7])}
         function is_closed(t){return caml_call1(Async_kernel_Ivar[17],t[6])}
         function close(t)
          {if(caml_call1(Async_kernel_Ivar[17],t[6]))return close_finished(t);
           caml_call2(Async_kernel_Ivar[14],t[6],0);
           function _i_(conn_opt)
            {function _k_(param)
              {return caml_call2(Async_kernel_Ivar[14],t[7],0)}
             if(typeof conn_opt === "number")
              var _l_=Async_kernel_Deferred[18];
             else
              var conn=conn_opt[2],_l_=caml_call1(Conn[2],conn);
             return caml_call2(Async_kernel[21],_l_,_k_)}
           var _j_=caml_call1(Async_kernel_Ivar[18],t[4]);
           return caml_call2(Async_kernel[20],_j_,_i_)}
         return [0,
                 [0,sexp_of_t,log_level],
                 create,
                 connected,
                 current_connection,
                 close,
                 is_closed,
                 close_finished]}];
    caml_register_global
     (46,Persistent_connection_kernel$0,"Persistent_connection_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwZXJzaXN0ZW50X2Nvbm5lY3Rpb25fa2VybmVsLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
