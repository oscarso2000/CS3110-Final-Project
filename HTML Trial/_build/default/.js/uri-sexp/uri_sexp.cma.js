(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     cst$0=caml_new_string(""),
     cst_fragment=caml_new_string("fragment"),
     cst_host=caml_new_string("host"),
     cst_path=caml_new_string("path"),
     cst_port=caml_new_string("port"),
     cst_query=caml_new_string("query"),
     cst_scheme=caml_new_string("scheme"),
     cst_userinfo=caml_new_string("userinfo"),
     cst=caml_new_string(""),
     cst_Authority=caml_new_string("Authority"),
     cst_Fragment=caml_new_string("Fragment"),
     cst_Host=caml_new_string("Host"),
     cst_Path=caml_new_string("Path"),
     cst_Query=caml_new_string("Query"),
     cst_Query_key=caml_new_string("Query_key"),
     cst_Query_value=caml_new_string("Query_value"),
     cst_Scheme=caml_new_string("Scheme"),
     cst_Userinfo=caml_new_string("Userinfo"),
     cst_Authority$0=caml_new_string("Authority"),
     cst_Fragment$0=caml_new_string("Fragment"),
     cst_Host$0=caml_new_string("Host"),
     cst_Path$0=caml_new_string("Path"),
     cst_Query$0=caml_new_string("Query"),
     cst_Query_key$0=caml_new_string("Query_key"),
     cst_Query_value$0=caml_new_string("Query_value"),
     cst_Scheme$0=caml_new_string("Scheme"),
     cst_Userinfo$0=caml_new_string("Userinfo"),
     tp_loc=caml_new_string("lib_sexp/uri_sexp.ml.Derived.component"),
     tp_loc$0=caml_new_string("lib_sexp/uri_sexp.ml.Derived.component"),
     tp_loc$1=caml_new_string("lib_sexp/uri_sexp.ml.Derived.t"),
     Uri=global_data.Uri,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     _p_=[0,caml_new_string("fragment")],
     _o_=[0,caml_new_string("query")],
     _n_=[0,caml_new_string("path")],
     _m_=[0,caml_new_string("port")],
     _l_=[0,caml_new_string("host")],
     _k_=[0,caml_new_string("userinfo")],
     _j_=[0,caml_new_string("scheme")],
     _b_=[0,caml_new_string("Path")],
     _c_=[0,caml_new_string("Host")],
     _d_=[0,caml_new_string("Query_value")],
     _e_=[0,caml_new_string("Userinfo")],
     _a_=[0,caml_new_string("Fragment")],
     _f_=[0,caml_new_string("Scheme")],
     _g_=[0,caml_new_string("Query")],
     _h_=[0,caml_new_string("Authority")],
     _i_=[0,caml_new_string("Query_key")];
    function component_of_sexp(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        return caml_string_notequal(atom,cst_Authority)
                ?caml_string_notequal(atom,cst_Fragment)
                  ?caml_string_notequal(atom,cst_Host)
                    ?caml_string_notequal(atom,cst_Path)
                      ?caml_string_notequal(atom,cst_Query)
                        ?caml_string_notequal(atom,cst_Query_key)
                          ?caml_string_notequal(atom,cst_Query_value)
                            ?caml_string_notequal(atom,cst_Scheme)
                              ?caml_string_notequal(atom,cst_Userinfo)
                                ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                                :-145160103
                              :-178940859
                            :795008922
                          :-911188600
                        :-250086680
                      :892015045
                    :803994504
                  :127343600
                :-715788189}
      var _B_=sexp[1];
      if(_B_)
       {var _C_=_B_[1];
        if(0 === _C_[0])
         {var atom$0=_C_[1];
          return caml_string_notequal(atom$0,cst_Authority$0)
                  ?caml_string_notequal(atom$0,cst_Fragment$0)
                    ?caml_string_notequal(atom$0,cst_Host$0)
                      ?caml_string_notequal(atom$0,cst_Path$0)
                        ?caml_string_notequal(atom$0,cst_Query$0)
                          ?caml_string_notequal(atom$0,cst_Query_key$0)
                            ?caml_string_notequal(atom$0,cst_Query_value$0)
                              ?caml_string_notequal(atom$0,cst_Scheme$0)
                                ?caml_string_notequal(atom$0,cst_Userinfo$0)
                                  ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                                  :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                                :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                              :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                            :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                          :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                        :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                      :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                    :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                  :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc,sexp)}
    function component_of_sexp$0(sexp)
     {try
       {var _z_=component_of_sexp(sexp);return _z_}
      catch(_A_)
       {_A_ = caml_wrap_exception(_A_);
        if(_A_ === Sexplib0_Sexp_conv_error[17])
         return caml_call2(Sexplib0_Sexp_conv_error[19],tp_loc$0,sexp);
        throw _A_}}
    function sexp_of_component(param)
     {return -145160103 <= param
              ?127343600 === param
                ?_a_
                :803994504 <= param
                  ?892015045 <= param?_b_:_c_
                  :795008922 <= param?_d_:_e_
              :-250086680 <= param
                ?-178940859 <= param?_f_:_g_
                :-715788189 <= param?_h_:_i_}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       var t=caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$1,sexp);
      else
       {var
         field_sexps=sexp[1],
         scheme_field=[0,0],
         userinfo_field=[0,0],
         host_field=[0,0],
         port_field=[0,0],
         path_field=[0,0],
         query_field=[0,0],
         fragment_field=[0,0],
         duplicates=[0,0],
         extra=[0,0],
         param=field_sexps;
        for(;;)
         {if(param)
           {var _s_=param[1];
            if(1 === _s_[0])
             {var _t_=_s_[1];
              if(_t_)
               {var _u_=_t_[1];
                if(0 === _u_[0])
                 {var _v_=_t_[2],_w_=_u_[1];
                  if(! _v_)
                   {var tail$0=param[2];
                    if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_w_,extra[1]];
                    var param=tail$0;
                    continue}
                  if(! _v_[2])
                   {var tail=param[2],field_sexp=_v_[1];
                    if(caml_string_notequal(_w_,cst_fragment))
                     if(caml_string_notequal(_w_,cst_host))
                      if(caml_string_notequal(_w_,cst_path))
                       if(caml_string_notequal(_w_,cst_port))
                        if(caml_string_notequal(_w_,cst_query))
                         if(caml_string_notequal(_w_,cst_scheme))
                          if(caml_string_notequal(_w_,cst_userinfo))
                           {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_w_,extra[1]]}
                          else
                           if(userinfo_field[1])
                            duplicates[1] = [0,_w_,duplicates[1]];
                           else
                            {var
                              fvalue=
                               caml_call2
                                (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp);
                             userinfo_field[1] = [0,fvalue]}
                         else
                          if(scheme_field[1])
                           duplicates[1] = [0,_w_,duplicates[1]];
                          else
                           {var
                             fvalue$0=
                              caml_call2
                               (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp);
                            scheme_field[1] = [0,fvalue$0]}
                        else
                         if(query_field[1])
                          duplicates[1] = [0,_w_,duplicates[1]];
                         else
                          {var
                            a_of_sexp=
                             function(sexp)
                              {if(1 === sexp[0])
                                {var _x_=sexp[1];
                                 if(_x_)
                                  {var _y_=_x_[2];
                                   if(_y_)
                                    if(! _y_[2])
                                     {var
                                       v1=_y_[1],
                                       v0=_x_[1],
                                       v0$0=caml_call1(Sexplib0_Sexp_conv[31],v0),
                                       v1$0=
                                        caml_call2(Sexplib0_Sexp_conv[44],Sexplib0_Sexp_conv[31],v1);
                                      return [0,v0$0,v1$0]}}}
                               return caml_call3
                                       (Sexplib0_Sexp_conv_error[2],tp_loc$1,2,sexp)},
                            fvalue$1=
                             caml_call2(Sexplib0_Sexp_conv[44],a_of_sexp,field_sexp);
                           query_field[1] = [0,fvalue$1]}
                       else
                        if(port_field[1])
                         duplicates[1] = [0,_w_,duplicates[1]];
                        else
                         {var
                           fvalue$2=
                            caml_call2
                             (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[34],field_sexp);
                          port_field[1] = [0,fvalue$2]}
                      else
                       if(path_field[1])
                        duplicates[1] = [0,_w_,duplicates[1]];
                       else
                        {var fvalue$3=caml_call1(Sexplib0_Sexp_conv[31],field_sexp);
                         path_field[1] = [0,fvalue$3]}
                     else
                      if(host_field[1])
                       duplicates[1] = [0,_w_,duplicates[1]];
                      else
                       {var
                         fvalue$4=
                          caml_call2
                           (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp);
                        host_field[1] = [0,fvalue$4]}
                    else
                     if(fragment_field[1])
                      duplicates[1] = [0,_w_,duplicates[1]];
                     else
                      {var
                        fvalue$5=
                         caml_call2
                          (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp);
                       fragment_field[1] = [0,fvalue$5]}
                    var param=tail;
                    continue}}}}
            caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$1,_s_)}
          if(duplicates[1])
           var
            t=
             caml_call3
              (Sexplib0_Sexp_conv_error[11],tp_loc$1,duplicates[1],sexp);
          else
           if(extra[1])
            var
             t=
              caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc$1,extra[1],sexp);
           else
            {var
              fragment_value=fragment_field[1],
              query_value=query_field[1],
              path_value=path_field[1],
              port_value=port_field[1],
              host_value=host_field[1],
              userinfo_value=userinfo_field[1],
              scheme_value=scheme_field[1];
             if(fragment_value)var v=fragment_value[1],v$0=v;else var v$0=0;
             if(query_value)var v$1=query_value[1],v$2=v$1;else var v$2=0;
             if(path_value)var v$3=path_value[1],v$4=v$3;else var v$4=cst;
             if(port_value)var v$5=port_value[1],v$6=v$5;else var v$6=0;
             if(host_value)var v$7=host_value[1],v$8=v$7;else var v$8=0;
             if(userinfo_value)
              var v$9=userinfo_value[1],v$10=v$9;
             else
              var v$10=0;
             if(scheme_value)
              var v$11=scheme_value[1],v$12=v$11;
             else
              var v$12=0;
             var t=[0,v$12,v$10,v$8,v$6,v$4,v$2,v$0]}
          break}}
      return caml_call8(Uri[10],t[1],t[2],t[3],t[4],[0,t[5]],[0,t[6]],t[7],0)}
    function sexp_of_t(t)
     {var
       v_fragment=caml_call1(Uri[40],t),
       v_query=caml_call1(Uri[12],t),
       v_path=caml_call1(Uri[25],t),
       v_port=caml_call1(Uri[38],t),
       v_host=caml_call1(Uri[35],t),
       v_userinfo=caml_call1(Uri[30],t),
       v_scheme=caml_call1(Uri[28],t),
       bnds=0;
      if(0 === v_fragment)
       var bnds$0=bnds;
      else
       var
        arg$5=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),
           v_fragment),
        bnd$5=[1,[0,_p_,[0,arg$5,0]]],
        bnds$0=[0,bnd$5,bnds];
      var _q_=v_query?0:1;
      if(_q_)
       var bnds$1=bnds$0;
      else
       var
        _r_=
         function(el)
          {var
            v1=el[2],
            v0=el[1],
            v0$0=caml_call1(Sexplib0_Sexp_conv[7],v0),
            v1$0=caml_call2(Sexplib0_Sexp_conv[20],Sexplib0_Sexp_conv[7],v1);
           return [1,[0,v0$0,[0,v1$0,0]]]},
        arg$4=caml_call1(caml_call1(Sexplib0_Sexp_conv[20],_r_),v_query),
        bnd$4=[1,[0,_o_,[0,arg$4,0]]],
        bnds$1=[0,bnd$4,bnds$0];
      if(runtime.caml_string_equal(cst$0,v_path))
       var bnds$2=bnds$1;
      else
       var
        arg$3=caml_call1(Sexplib0_Sexp_conv[7],v_path),
        bnd$3=[1,[0,_n_,[0,arg$3,0]]],
        bnds$2=[0,bnd$3,bnds$1];
      if(0 === v_port)
       var bnds$3=bnds$2;
      else
       var
        arg$2=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[10]),v_port),
        bnd$2=[1,[0,_m_,[0,arg$2,0]]],
        bnds$3=[0,bnd$2,bnds$2];
      if(0 === v_host)
       var bnds$4=bnds$3;
      else
       var
        arg$1=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_host),
        bnd$1=[1,[0,_l_,[0,arg$1,0]]],
        bnds$4=[0,bnd$1,bnds$3];
      if(0 === v_userinfo)
       var bnds$5=bnds$4;
      else
       var
        arg$0=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),
           v_userinfo),
        bnd$0=[1,[0,_k_,[0,arg$0,0]]],
        bnds$5=[0,bnd$0,bnds$4];
      if(0 === v_scheme)
       var bnds$6=bnds$5;
      else
       var
        arg=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_scheme),
        bnd=[1,[0,_j_,[0,arg,0]]],
        bnds$6=[0,bnd,bnds$5];
      return [1,bnds$6]}
    function compare(a,b){return caml_call2(Uri[2],a,b)}
    function equal(a,b){return caml_call2(Uri[3],a,b)}
    var
     Uri_sexp=
      [0,
       component_of_sexp$0,
       sexp_of_component,
       t_of_sexp,
       sexp_of_t,
       compare,
       equal];
    runtime.caml_register_global(49,Uri_sexp,"Uri_sexp");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1cmlfc2V4cC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
