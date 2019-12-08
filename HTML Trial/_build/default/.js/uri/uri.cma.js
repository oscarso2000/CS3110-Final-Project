(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_make_vect=runtime.caml_make_vect,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst$40=caml_new_string(""),
     cst$39=caml_new_string(""),
     cst$37=caml_new_string(""),
     cst$38=caml_new_string("/"),
     cst$36=caml_new_string(""),
     cst$35=caml_new_string(","),
     cst$33=caml_new_string("/"),
     cst$34=caml_new_string("/"),
     cst$32=caml_new_string(""),
     cst$30=caml_new_string(""),
     cst$31=caml_new_string(""),
     cst$29=caml_new_string(""),
     cst_localhost$0=caml_new_string("localhost"),
     cst$25=caml_new_string("//"),
     cst$26=caml_new_string("/"),
     cst$27=caml_new_string(":"),
     cst$28=caml_new_string("./"),
     cst$23=caml_new_string("/"),
     cst$24=caml_new_string("/"),
     cst$22=caml_new_string(","),
     cst$21=caml_new_string("&"),
     cst$20=caml_new_string("/"),
     cst$17=caml_new_string("/"),
     cst$18=caml_new_string("/"),
     cst$19=caml_new_string("/"),
     cst$16=caml_new_string("/"),
     cst$15=caml_new_string(""),
     cst$3=caml_new_string("."),
     cst$4=caml_new_string(".."),
     cst$5=caml_new_string("/"),
     cst$9=caml_new_string("."),
     cst$10=caml_new_string(".."),
     cst$11=caml_new_string("/"),
     cst$12=caml_new_string("/"),
     cst$13=caml_new_string("/"),
     cst$14=caml_new_string("/"),
     cst$6=caml_new_string(".."),
     e=caml_new_string("/"),
     cst$7=caml_new_string("/"),
     cst$8=caml_new_string("/"),
     cst_int_of_hex_char=caml_new_string("int_of_hex_char"),
     cst_int_of_hex_char$0=caml_new_string("int_of_hex_char"),
     cst_file=caml_new_string("file"),
     cst_http=caml_new_string("http"),
     cst_https=caml_new_string("https"),
     cst_urn=caml_new_string("urn"),
     cst_localhost=caml_new_string("localhost"),
     subd=caml_new_string("!$&'()*+,;="),
     cst=caml_new_string("[:/?#\\[\\]@]"),
     cst$0=caml_new_string("[!$&'()*+,;=]"),
     cst$1=caml_new_string("//"),
     cst_A_Za_z0_9=caml_new_string("[A-Za-z0-9-._~]"),
     cst_0_9A_Fa_f=caml_new_string("[0-9A-Fa-f]"),
     cst_25_0_5_2_0_4_0_9_01_0_9_0_9=
      caml_new_string("25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?"),
     cst_25=caml_new_string("%25"),
     cst_0_9=caml_new_string("[0-9]*"),
     cst_A_Za_z_A_Za_z0_9=caml_new_string("[A-Za-z][A-Za-z0-9+\\\\-\\.]*"),
     cst$2=
      caml_new_string
       ("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
     always_safe=
      caml_new_string
       ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.-~"),
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib=global_data.Stdlib,
     Stdlib_string=global_data.Stdlib__string,
     Stringext=global_data.Stringext,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Re=global_data.Re,
     Stdlib_lazy=global_data.Stdlib__lazy,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_char=global_data.Stdlib__char,
     Re_Posix=global_data.Re__Posix,
     _ar_=[0,[11,caml_new_string("/?"),[2,0,0]],caml_new_string("/?%s")],
     _aq_=[0,[2,0,[12,63,[2,0,0]]],caml_new_string("%s?%s")],
     _an_=[0,-178940859],
     _ao_=[0,803994504],
     _ap_=[0,127343600],
     _am_=[0,caml_new_string("")],
     _al_=[0,0],
     _aj_=[0,795008922],
     _ai_=[0,-911188600],
     _ae_=[0,caml_new_string(""),0],
     _af_=[0,caml_new_string(""),0],
     _ag_=[0,2],
     _ah_=[0,[0,caml_new_string(""),0],0],
     _ad_=[0,892015045],
     _aa_=[0,-145160103],
     _ab_=[0,-145160103],
     ___=[0,2],
     _$_=[0,caml_new_string(""),0],
     _Z_=[0,[12,37,[4,8,[0,2,2],0,0]],caml_new_string("%%%02X")],
     _Y_=[0,caml_new_string("")],
     _X_=[0,caml_new_string("/"),0],
     _a_=[0,3],
     _c_=[0,4];
    function symbol(a,b){return caml_call1(Re[26],[0,a,[0,b,0]])}
    function symbol$0(a,b){return caml_call1(Re[25],[0,a,[0,b,0]])}
    var
     gen_delims=caml_call2(Re_Posix[3],0,cst),
     sub_delims=caml_call2(Re_Posix[3],0,cst$0),
     c_at=caml_call1(Re[24],64),
     c_colon=caml_call1(Re[24],58),
     c_slash=caml_call1(Re[24],47),
     c_slash2=caml_call2(Re_Posix[3],0,cst$1),
     c_dot=caml_call1(Re[24],46),
     c_question=caml_call1(Re[24],63),
     c_hash=caml_call1(Re[24],35);
    symbol$0(gen_delims,sub_delims);
    var
     unreserved=caml_call2(Re_Posix[3],0,cst_A_Za_z0_9),
     hexdig=caml_call2(Re_Posix[3],0,cst_0_9A_Fa_f),
     pct_encoded=symbol(symbol(caml_call1(Re[24],37),hexdig),hexdig),
     dec_octet=caml_call2(Re_Posix[3],0,cst_25_0_5_2_0_4_0_9_01_0_9_0_9),
     _b_=symbol(dec_octet,c_dot),
     ipv4_address=symbol(caml_call3(Re[31],_b_,3,_a_),dec_octet),
     zone_id=symbol$0(unreserved,pct_encoded);
    function symbol$1(n,a){return caml_call3(Re[31],a,n,[0,n])}
    function symbol$2(n,a){return caml_call3(Re[31],a,0,[0,n])}
    var
     h16=caml_call3(Re[31],hexdig,1,_c_),
     h16c=symbol(h16,c_colon),
     cc=symbol(c_colon,c_colon),
     ls32=symbol$0(symbol(h16c,h16),ipv4_address),
     _d_=caml_call1(Re[24],93),
     _e_=caml_call1(Re[30],zone_id),
     _f_=symbol(caml_call2(Re_Posix[3],0,cst_25),_e_),
     _g_=caml_call1(Re[32],_f_),
     _h_=symbol(symbol$2(1,symbol(symbol$2(6,h16c),h16)),cc),
     _i_=symbol(symbol(symbol$2(1,symbol(symbol$2(5,h16c),h16)),cc),h16),
     _j_=symbol(symbol(symbol$2(1,symbol(symbol$2(4,h16c),h16)),cc),ls32),
     _k_=
      symbol
       (symbol(symbol(symbol$2(1,symbol(symbol$2(3,h16c),h16)),cc),h16c),ls32),
     _l_=symbol$1(2,h16c),
     _m_=
      symbol
       (symbol(symbol(symbol$2(1,symbol(symbol$2(2,h16c),h16)),cc),_l_),ls32),
     _n_=symbol$1(3,h16c),
     _o_=
      symbol
       (symbol(symbol(symbol$2(1,symbol(symbol$2(1,h16c),h16)),cc),_n_),ls32),
     _p_=symbol$1(4,h16c),
     _q_=symbol(symbol(symbol(symbol$2(1,h16),cc),_p_),ls32),
     _r_=symbol(symbol(cc,symbol$1(5,h16c)),ls32),
     _s_=
      symbol$0
       (symbol$0
         (symbol$0
           (symbol$0
             (symbol$0
               (symbol$0
                 (symbol$0(symbol$0(symbol(symbol$1(6,h16c),ls32),_r_),_q_),
                  _o_),
                _m_),
              _k_),
            _j_),
          _i_),
        _h_),
     ipv6_address=symbol(symbol(symbol(caml_call1(Re[24],91),_s_),_g_),_d_),
     _t_=symbol$0(symbol$0(unreserved,pct_encoded),sub_delims),
     reg_name=caml_call1(Re[29],_t_),
     host=symbol$0(symbol$0(ipv6_address,ipv4_address),reg_name),
     _u_=
      symbol$0(symbol$0(symbol$0(unreserved,pct_encoded),sub_delims),c_colon),
     userinfo=caml_call1(Re[29],_u_),
     port=caml_call2(Re_Posix[3],0,cst_0_9),
     _v_=symbol(c_colon,caml_call1(Re[50],port)),
     _w_=caml_call1(Re[32],_v_),
     _x_=caml_call1(Re[50],host),
     _y_=symbol(caml_call1(Re[50],userinfo),c_at),
     authority=symbol(symbol(caml_call1(Re[32],_y_),_x_),_w_),
     _z_=caml_call1(Re[50],Re[27]),
     _A_=caml_call1(Re[50],Re[27]);
    symbol(symbol(caml_call1(Re[50],Re[27]),_A_),_z_);
    var
     pchar=
      symbol$0
       (symbol$0
         (symbol$0(symbol$0(unreserved,pct_encoded),sub_delims),c_colon),
        c_at),
     segment=caml_call1(Re[29],pchar),
     segment_nz=caml_call1(Re[30],pchar),
     _B_=symbol$0(symbol$0(symbol$0(unreserved,pct_encoded),sub_delims),c_at),
     segment_nz_nc=caml_call3(Re[31],_B_,1,0),
     _C_=symbol(c_slash,segment),
     path_abempty=caml_call1(Re[29],_C_),
     _D_=symbol(c_slash,segment),
     _E_=symbol(segment_nz,caml_call1(Re[29],_D_)),
     path_absolute=symbol(c_slash,caml_call1(Re[32],_E_)),
     _F_=symbol(c_slash,segment),
     path_noscheme=symbol(segment_nz_nc,caml_call1(Re[29],_F_)),
     _G_=symbol(c_slash,segment),
     path_rootless=symbol(segment_nz,caml_call1(Re[29],_G_)),
     _H_=Re[27];
    symbol$0
     (symbol$0
       (symbol$0(symbol$0(path_abempty,path_absolute),path_noscheme),
        path_rootless),
      _H_);
    var
     _I_=symbol$0(symbol$0(path_absolute,path_rootless),_H_),
     hier_part=symbol$0(symbol(symbol(c_slash2,authority),path_abempty),_I_),
     scheme=caml_call2(Re_Posix[3],0,cst_A_Za_z_A_Za_z0_9),
     _J_=symbol$0(symbol$0(pchar,c_slash),c_question),
     _K_=caml_call1(Re[29],_J_),
     query=caml_call1(Re[50],_K_),
     _L_=symbol$0(symbol$0(pchar,c_slash),c_question),
     _M_=caml_call1(Re[29],_L_),
     fragment=caml_call1(Re[50],_M_),
     _N_=symbol(c_question,query),
     _O_=caml_call1(Re[32],_N_);
    symbol(symbol(symbol(scheme,c_colon),hier_part),_O_);
    var
     _P_=symbol(c_hash,fragment),
     _Q_=caml_call1(Re[32],_P_),
     _R_=symbol(c_question,query),
     _S_=caml_call1(Re[32],_R_);
    symbol(symbol(symbol(symbol(scheme,c_colon),hier_part),_S_),_Q_);
    var
     _T_=symbol$0(symbol$0(path_absolute,path_noscheme),_H_),
     relative_part=
      symbol$0(symbol(symbol(c_slash2,authority),path_abempty),_T_),
     _U_=symbol(c_hash,fragment),
     _V_=caml_call1(Re[32],_U_),
     _W_=symbol(c_question,query);
    symbol(symbol(relative_part,caml_call1(Re[32],_W_)),_V_);
    var
     uri_reference=caml_call2(Re_Posix[3],0,cst$2),
     ipv4_address$0=caml_call1(Re_Posix[4],ipv4_address),
     ipv6_address$0=caml_call1(Re_Posix[4],ipv6_address),
     uri_reference$0=caml_call1(Re_Posix[4],uri_reference),
     authority$0=caml_call1(Re_Posix[4],authority),
     host$0=caml_call1(Re_Posix[4],host);
    function iter_concat(fn,sep,buf,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var _c5_=param$0[2],_c6_=param$0[1];
          if(_c5_)
           {caml_call2(fn,buf,_c6_);
            caml_call2(Stdlib_buffer[14],buf,sep);
            var param$0=_c5_;
            continue}
          return caml_call2(fn,buf,_c6_)}
        return 0}}
    function compare_opt(c,t$0,t)
     {if(t$0)
       {var _c4_=t$0[1];if(t){var b=t[1];return caml_call2(c,_c4_,b)}return 1}
      return t?-1:0}
    function compare_list(f,t$0,t)
     {var t$2=t$0,t$1=t;
      for(;;)
       {if(t$2)
         {var _c2_=t$2[2],_c3_=t$2[1];
          if(t$1)
           {var ys=t$1[2],y=t$1[1],c=caml_call2(f,_c3_,y);
            if(0 === c){var t$2=_c2_,t$1=ys;continue}
            return c}
          return 1}
        return t$1?-1:0}}
    function sub_delims$0(a)
     {var i=0;
      for(;;)
       {var c=caml_string_get(subd,i);
        caml_check_bound(a,c)[1 + c] = 1;
        var _c1_=i + 1 | 0;
        if(10 !== i){var i=_c1_;continue}
        return a}}
    var a=caml_make_vect(256,0),i=0;
    for(;;)
     {var c=caml_string_get(always_safe,i);
      caml_check_bound(a,c)[1 + c] = 1;
      var _as_=i + 1 | 0;
      if(65 !== i){var i=_as_;continue}
      var pchar$0=sub_delims$0(caml_call1(Stdlib_array[8],a));
      caml_check_bound(pchar$0,58)[59] = 1;
      caml_check_bound(pchar$0,64)[65] = 1;
      var safe_chars_for_scheme=caml_call1(Stdlib_array[8],a);
      caml_check_bound(safe_chars_for_scheme,43)[44] = 1;
      var
       safe_chars_for_path=
        sub_delims$0(caml_call1(Stdlib_array[8],pchar$0));
      caml_check_bound(safe_chars_for_path,47)[48] = 0;
      var safe_chars_for_fragment=caml_call1(Stdlib_array[8],pchar$0);
      caml_check_bound(safe_chars_for_fragment,47)[48] = 1;
      caml_check_bound(safe_chars_for_fragment,63)[64] = 1;
      caml_check_bound(safe_chars_for_fragment,38)[39] = 0;
      caml_check_bound(safe_chars_for_fragment,59)[60] = 0;
      caml_check_bound(safe_chars_for_fragment,43)[44] = 0;
      var
       safe_chars_for_query_key=
        caml_call1(Stdlib_array[8],safe_chars_for_fragment);
      caml_check_bound(safe_chars_for_query_key,61)[62] = 0;
      var
       safe_chars_for_query_value=
        caml_call1(Stdlib_array[8],safe_chars_for_fragment);
      caml_check_bound(safe_chars_for_query_value,44)[45] = 0;
      var a$0=caml_call1(Stdlib_array[8],a);
      caml_check_bound(a$0,58)[59] = 0;
      var
       safe_chars_for_component=
        function(param)
         {if(-145160103 <= param)
           if(795008922 <= param)
            {if(892015045 === param)return safe_chars_for_path;
             if(! (795008923 <= param))return safe_chars_for_query_value}
           else
            {if(127343600 === param)return safe_chars_for_fragment;
             if(! (-145160102 <= param))return a$0}
          else
           {if(-911188600 === param)return safe_chars_for_query_key;
            if(-250086680 === param)return safe_chars_for_fragment;
            if(-178940859 === param)return safe_chars_for_scheme}
          return a},
       normalize_host=function(hso){return hso},
       canonicalize_port=function(port){return port},
       canonicalize_path=function(path){return path},
       Generic=
        [0,
         safe_chars_for_component,
         normalize_host,
         canonicalize_port,
         canonicalize_path],
       safe_chars_for_component$0=Generic[1],
       normalize_host$0=
        function(param)
         {if(param)
           {var hs=param[1];return [0,caml_call1(Stdlib_string[30],hs)]}
          return 0},
       canonicalize_port$0=
        function(param)
         {if(param){var _c0_=param[1];return 80 === _c0_?0:[0,_c0_]}return 0},
       canonicalize_path$0=function(x){return x?x:_X_},
       Http=
        [0,
         safe_chars_for_component$0,
         normalize_host$0,
         canonicalize_port$0,
         canonicalize_path$0],
       safe_chars_for_component$1=Http[1],
       normalize_host$1=Http[2],
       canonicalize_path$1=Http[4],
       canonicalize_port$1=
        function(param)
         {if(param){var _cZ_=param[1];return 443 === _cZ_?0:[0,_cZ_]}return 0},
       Https=
        [0,
         safe_chars_for_component$1,
         normalize_host$1,
         canonicalize_port$1,
         canonicalize_path$1],
       safe_chars_for_component$2=Generic[1],
       canonicalize_port$2=Generic[3],
       canonicalize_path$2=Generic[4],
       normalize_host$2=
        function(param)
         {if(param)
           {var hs=param[1],hs$0=caml_call1(Stdlib_string[30],hs);
            return caml_string_equal(hs$0,cst_localhost)?_Y_:[0,hs$0]}
          return 0},
       File=
        [0,
         safe_chars_for_component$2,
         normalize_host$2,
         canonicalize_port$2,
         canonicalize_path$2],
       safe_chars_for_component$3=Generic[1],
       normalize_host$3=Generic[2],
       canonicalize_port$3=Generic[3],
       canonicalize_path$3=Generic[4],
       Urn=
        [0,
         safe_chars_for_component$3,
         normalize_host$3,
         canonicalize_port$3,
         canonicalize_path$3],
       module_of_scheme=
        function(param)
         {if(param)
           {var s=param[1],match=caml_call1(Stdlib_string[30],s);
            return caml_string_notequal(match,cst_file)
                    ?caml_string_notequal(match,cst_http)
                      ?caml_string_notequal(match,cst_https)
                        ?caml_string_notequal(match,cst_urn)?Generic:Urn
                        :Https
                      :Http
                    :File}
          return Generic},
       encode=
        function(scheme,opt,b)
         {if(opt)var sth=opt[1],component=sth;else var component=892015045;
          var
           Scheme=module_of_scheme(scheme),
           safe_chars=caml_call1(Scheme[1],component),
           len=caml_ml_string_length(b),
           buf=caml_call1(Stdlib_buffer[1],len),
           start=0,
           cur=0;
          for(;;)
           {if(len <= cur)
             {caml_call4(Stdlib_buffer[16],buf,b,start,cur - start | 0);
              return caml_call1(Stdlib_buffer[2],buf)}
            var c=caml_string_get(b,cur);
            if(caml_check_bound(safe_chars,c)[1 + c])
             {var cur$0=cur + 1 | 0,cur=cur$0;continue}
            if(start < cur)
             caml_call4(Stdlib_buffer[16],buf,b,start,cur - start | 0);
            var _cY_=caml_call2(Stdlib_printf[4],_Z_,c);
            caml_call2(Stdlib_buffer[14],buf,_cY_);
            var cur$1=cur + 1 | 0,start$0=cur + 1 | 0,start=start$0,cur=cur$1;
            continue}},
       int_of_hex_char=
        function(c)
         {var c$0=caml_call1(Stdlib_char[6],c) - 48 | 0;
          if(9 < c$0)
           {if(16 < c$0)if(! (23 <= c$0))return c$0 - 7 | 0;
            return caml_call1(Stdlib[2],cst_int_of_hex_char)}
          return 0 <= c$0?c$0:caml_call1(Stdlib[2],cst_int_of_hex_char$0)},
       decode=
        function(b)
         {var
           len=caml_ml_string_length(b),
           buf=caml_call1(Stdlib_buffer[1],len);
          function scan(start,cur)
           {var start$0=start,cur$0=cur;
            for(;;)
             {if(len <= cur$0)
               return caml_call4
                       (Stdlib_buffer[16],buf,b,start$0,cur$0 - start$0 | 0);
              if(37 === caml_string_get(b,cur$0))
               {caml_call4
                 (Stdlib_buffer[16],buf,b,start$0,cur$0 - start$0 | 0);
                var cur$1=cur$0 + 1 | 0;
                if(len <= cur$1)return caml_call2(Stdlib_buffer[10],buf,37);
                try
                 {var highbits=int_of_hex_char(caml_string_get(b,cur$1))}
                catch(_cX_)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var start$0=cur$1,cur$0=cur$1;
                  continue}
                var cur$2=cur$1 + 1 | 0;
                if(len <= cur$2)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var _cT_=caml_string_get(b,cur$2 - 1 | 0);
                  return caml_call2(Stdlib_buffer[10],buf,_cT_)}
                try
                 {var
                   lowbits=int_of_hex_char(caml_string_get(b,cur$2)),
                   switch$0=0}
                catch(_cW_)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var _cU_=caml_string_get(b,cur$2 - 1 | 0);
                  caml_call2(Stdlib_buffer[10],buf,_cU_);
                  var cur$3=cur$2,switch$0=1}
                if(! switch$0)
                 {var
                   _cV_=
                    caml_call1(Stdlib_char[1],(highbits << 4) + lowbits | 0);
                  caml_call2(Stdlib_buffer[10],buf,_cV_);
                  var cur$3=cur$2 + 1 | 0}
                var start$0=cur$3,cur$0=cur$3;
                continue}
              var cur$4=cur$0 + 1 | 0,cur$0=cur$4;
              continue}}
          scan(0,0);
          return caml_call1(Stdlib_buffer[2],buf)},
       pct_encode=
        function(scheme,opt,s)
         {if(opt)var sth=opt[1],component=sth;else var component=892015045;
          return encode(scheme,[0,component],s)},
       pct_decode=function(s){return decode(s)},
       compare=
        function(param,_cS_)
         {var
           p=_cS_[2],
           u=_cS_[1],
           p$0=param[2],
           u$0=param[1],
           c=caml_call2(Stdlib_string[33],u$0,u);
          return 0 === c?compare_opt(Stdlib_string[33],p$0,p):c},
       userinfo_of_encoded=
        function(us)
         {var match=caml_call3(Stringext[3],___,us,58);
          if(match)
           {var _cP_=match[2],_cQ_=match[1];
            if(_cP_)
             {var p=_cP_[1],_cR_=[0,pct_decode(p)];
              return [0,pct_decode(_cQ_),_cR_]}
            return [0,pct_decode(_cQ_),0]}
          return _$_},
       encoded_of_userinfo=
        function(scheme)
         {return function(param)
           {var po=param[2],u=param[1];
            if(po)var p=po[1],_cM_=caml_ml_string_length(p);else var _cM_=0;
            var
             len=(1 + caml_ml_string_length(u) | 0) + _cM_ | 0,
             buf=caml_call1(Stdlib_buffer[1],len),
             _cN_=pct_encode(scheme,_aa_,u);
            caml_call2(Stdlib_buffer[14],buf,_cN_);
            if(po)
             {var p$0=po[1];
              caml_call2(Stdlib_buffer[10],buf,58);
              var _cO_=pct_encode(scheme,_ab_,p$0);
              caml_call2(Stdlib_buffer[14],buf,_cO_)}
            return caml_call1(Stdlib_buffer[2],buf)}},
       _ac_=Stdlib_string[33],
       path_of_encoded=
        function(ps)
         {var tokl=caml_call2(Stringext[4],ps,47);
          return caml_call2(Stdlib_list[17],pct_decode,tokl)},
       remove_dot_segments=
        function(p)
         {var
           param$1=caml_call1(Stdlib_list[9],p),
           ascension=0,
           outp=0,
           param$2=param$1;
          for(;;)
           {if(param$2)
             {var _cI_=param$2[1];
              if(caml_string_notequal(_cI_,cst$3))
               {if(caml_string_notequal(_cI_,cst$4))
                 if(caml_string_notequal(_cI_,cst$5))
                  var switch$0=1,switch$1=0,switch$2=0;
                 else
                  {var _cK_=param$2[2];
                   if(_cK_)
                    {var _cL_=_cK_[1];
                     if(caml_string_notequal(_cL_,cst$9))
                      if(caml_string_notequal(_cL_,cst$10))
                       {if(! caml_string_notequal(_cL_,cst$11))
                         {var r$0=_cK_[2];
                          if(0 < ascension)
                           {var
                             param$4=[0,cst$12,r$0],
                             ascension$1=ascension - 1 | 0,
                             ascension=ascension$1,
                             param$2=param$4;
                            continue}}
                        var r=_cK_[2];
                        if(0 < ascension)
                         {var
                           ascension$0=ascension - 1 | 0,
                           ascension=ascension$0,
                           param$2=r;
                          continue}
                        var switch$0=1,switch$1=0,switch$2=0}
                      else
                       var param$5=_cK_[2],switch$2=1;
                     else
                      var param$6=_cK_[2],switch$1=1,switch$2=0}
                   else
                    var switch$0=0,switch$1=0,switch$2=0}
                else
                 var param$5=param$2[2],switch$2=1;
                if(switch$2)
                 {var
                   ascension$2=ascension + 1 | 0,
                   ascension=ascension$2,
                   param$2=param$5;
                  continue}}
              else
               var param$6=param$2[2],switch$1=1;
              if(switch$1){var param$2=param$6;continue}}
            else
             var switch$0=0;
            if(! switch$0)
             if(0 < caml_call1(Stdlib_list[1],p))
              if(caml_string_equal(caml_call1(Stdlib_list[5],p),cst$13))
               return [0,cst$14,outp];
            if(param$2)
             {var
               param$3=param$2[2],
               s=param$2[1],
               outp$0=[0,s,outp],
               ascension=0,
               outp=outp$0,
               param$2=param$3;
              continue}
            if(0 < ascension)
             {var
               lst=
                caml_call1(Stdlib_array[11],caml_make_vect(ascension,cst$6));
              if(lst)
               {var t=lst[2],h=lst[1],acc$1=[0,h,0],acc=acc$1,param=t;
                for(;;)
                 {if(param)
                   {var
                     param$0=param[2],
                     x=param[1],
                     acc$0=[0,x,[0,e,acc]],
                     acc=acc$0,
                     param=param$0;
                    continue}
                  var _cJ_=acc;
                  break}}
              else
               var _cJ_=0;
              return caml_call2(Stdlib_list[12],[0,cst$7,_cJ_],outp)}
            if(0 < caml_call1(Stdlib_list[1],outp))
             if(caml_string_equal(caml_call1(Stdlib_list[5],outp),cst$8))
              return caml_call1(Stdlib_list[6],outp);
            return outp}},
       encoded_of_path=
        function(scheme)
         {return function(p)
           {var _cF_=0;
            function _cG_(c,tok){return caml_ml_string_length(tok) + c | 0}
            var
             len=caml_call3(Stdlib_list[21],_cG_,_cF_,p),
             buf=caml_call1(Stdlib_buffer[1],len);
            iter_concat
             (function(buf,seg)
               {if(caml_string_notequal(seg,cst$16))
                 {var _cH_=pct_encode(scheme,_ad_,seg);
                  return caml_call2(Stdlib_buffer[14],buf,_cH_)}
                return caml_call2(Stdlib_buffer[10],buf,47)},
              cst$15,
              buf,
              p);
            return caml_call1(Stdlib_buffer[2],buf)}},
       find=
        function(q,k)
         {try
           {var _cD_=[0,caml_call2(Stdlib_list[39],k,q)];return _cD_}
          catch(_cE_)
           {_cE_ = caml_wrap_exception(_cE_);
            if(_cE_ === Stdlib[8])return 0;
            throw _cE_}},
       query_of_encoded=
        function(qs)
         {var els=caml_call3(Stringext[3],0,qs,38);
          function plus_to_space(s)
           {var
             s$0=caml_call1(Stdlib_bytes[43],s),
             _cB_=runtime.caml_ml_bytes_length(s$0) - 1 | 0,
             _cA_=0;
            if(! (_cB_ < 0))
             {var i=_cA_;
              for(;;)
               {if(43 === runtime.caml_bytes_get(s$0,i))
                 runtime.caml_bytes_set(s$0,i,32);
                var _cC_=i + 1 | 0;
                if(_cB_ !== i){var i=_cC_;continue}
                break}}
            return caml_call1(Stdlib_bytes[42],s$0)}
          if(els)
           {var
             _cw_=function(el){return caml_call3(Stringext[3],_ag_,el,61)},
             param$1=caml_call2(Stdlib_list[19],_cw_,els),
             acc=0,
             param=param$1;
            for(;;)
             {if(param)
               {var _cs_=param[1];
                if(_cs_)
                 {var _ct_=_cs_[2],_cu_=_cs_[1];
                  if(_ct_)
                   {var
                     tl=param[2],
                     v=_ct_[1],
                     _cv_=plus_to_space(v),
                     l=caml_call3(Stringext[3],0,_cv_,44),
                     l$0=l || _ae_,
                     n=[0,plus_to_space(_cu_),l$0],
                     acc$0=[0,n,acc],
                     acc=acc$0,
                     param=tl;
                    continue}
                  var
                   tl$0=param[2],
                   n$0=[0,plus_to_space(_cu_),0],
                   acc$1=[0,n$0,acc],
                   acc=acc$1,
                   param=tl$0;
                  continue}
                var
                 param$0=param[2],
                 acc$2=[0,_af_,acc],
                 acc=acc$2,
                 param=param$0;
                continue}
              var _cx_=acc;
              break}}
          else
           var _cx_=_ah_;
          function _cy_(param)
           {var
             v=param[2],
             k=param[1],
             _cz_=caml_call2(Stdlib_list[17],pct_decode,v);
            return [0,pct_decode(k),_cz_]}
          return caml_call2(Stdlib_list[17],_cy_,_cx_)},
       encoded_of_query=
        function(scheme,l)
         {var _cl_=-1;
          function _cm_(a,param)
           {var v=param[2],k=param[1],_cq_=0;
            function _cr_(a,s)
             {return (a + caml_ml_string_length(s) | 0) + 1 | 0}
            return ((a + caml_ml_string_length(k) | 0)
                    +
                    caml_call3(Stdlib_list[21],_cr_,_cq_,v)
                    |
                    0)
                   +
                   2
                   |
                   0}
          var
           len=caml_call3(Stdlib_list[21],_cm_,_cl_,l),
           buf=caml_call1(Stdlib_buffer[1],len);
          iter_concat
           (function(buf,param)
             {var v=param[2],k=param[1],_cn_=pct_encode(scheme,_ai_,k);
              caml_call2(Stdlib_buffer[14],buf,_cn_);
              var _co_=0 !== v?1:0;
              return _co_
                      ?(caml_call2(Stdlib_buffer[10],buf,61),
                        iter_concat
                         (function(buf,s)
                           {var _cp_=pct_encode(scheme,_aj_,s);
                            return caml_call2(Stdlib_buffer[14],buf,_cp_)},
                          cst$22,
                          buf,
                          v))
                      :_co_},
            cst$21,
            buf,
            l);
          return caml_call1(Stdlib_buffer[2],buf)},
       of_raw=
        function(qs)
         {function _ck_(param){return query_of_encoded(qs)}
          var lazy_query=caml_call1(Stdlib_lazy[3],_ck_);
          return [1,[0,qs],lazy_query]},
       kv=
        function(param)
         {if(0 === param[0])
           var kv=param[1];
          else
           var
            _ch_=param[2],
            _ci_=caml_obj_tag(_ch_),
            _cj_=
             250 === _ci_
              ?_ch_[1]
              :246 === _ci_?caml_call1(CamlinternalLazy[2],_ch_):_ch_,
            kv=_cj_;
          return kv},
       encoded_of_query$0=
        function(scheme)
         {return function(_cg_){return encoded_of_query(scheme,_cg_)}},
       empty=[0,0,0,0,0,0,[1,0,caml_call1(Stdlib_lazy[4],0)],0],
       _ak_=Stdlib_string[33],
       compare_decoded_opt=
        function(_ce_,_cf_){return compare_opt(_ak_,_ce_,_cf_)},
       compare$0=
        function(t$0,t)
         {var c=compare_decoded_opt(t$0[3],t[3]);
          if(0 === c)
           {var c$0=compare_decoded_opt(t$0[1],t[1]);
            if(0 === c$0)
             {var
               _b$_=t[4],
               _ca_=t$0[4],
               c$1=
                compare_opt
                 (function(p$0,p){return p$0 < p?-1:p < p$0?1:0},_ca_,_b$_);
              if(0 === c$1)
               {var c$2=compare_opt(compare,t$0[2],t[2]);
                if(0 === c$2)
                 {var c$4=compare_list(_ac_,t$0[5],t[5]);
                  if(0 === c$4)
                   {var _cb_=t[6],_cc_=t$0[6];
                    if(0 === _cc_[0])
                     {var _b3_=_cc_[1];
                      if(0 === _cb_[0])
                       var kvl$0=_b3_,kvl=_cb_[1],switch$0=0;
                      else
                       var
                        _b4_=_cb_[2],
                        _b5_=caml_obj_tag(_b4_),
                        _b6_=
                         250 === _b5_
                          ?_b4_[1]
                          :246 === _b5_?caml_call1(CamlinternalLazy[2],_b4_):_b4_,
                        kvl$0=_b3_,
                        kvl=_b6_,
                        switch$0=0}
                    else
                     {var _b7_=_cc_[2],_b8_=_cc_[1];
                      if(0 === _cb_[0])
                       var
                        _b9_=caml_obj_tag(_b7_),
                        _b__=
                         250 === _b9_
                          ?_b7_[1]
                          :246 === _b9_?caml_call1(CamlinternalLazy[2],_b7_):_b7_,
                        kvl$0=_b__,
                        kvl=_cb_[1],
                        switch$0=0;
                      else
                       var
                        raw=_cb_[1],
                        c$3=compare_opt(Stdlib_string[33],_b8_,raw),
                        switch$0=1}
                    if(! switch$0)
                     var
                      c$3=
                       compare_list
                        (function(param,_cd_)
                          {var
                            vl=_cd_[2],
                            k=_cd_[1],
                            vl$0=param[2],
                            k$0=param[1],
                            c=caml_call2(Stdlib_string[33],k$0,k);
                           return 0 === c?compare_list(Stdlib_string[33],vl$0,vl):c},
                         kvl$0,
                         kvl);
                    return 0 === c$3?compare_decoded_opt(t$0[7],t[7]):c$3}
                  return c$4}
                return c$2}
              return c$1}
            return c$0}
          return c},
       equal=function(t$0,t){return 0 === compare$0(t$0,t)?1:0},
       uncast_opt=
        function(param){if(param){var h=param[1];return [0,h]}return 0},
       normalize=
        function(schem,init)
         {var
           Scheme=module_of_scheme(uncast_opt(schem)),
           _bT_=init[7],
           _bU_=init[6],
           _bV_=init[5],
           _bW_=init[4],
           _bX_=uncast_opt(init[3]),
           param=caml_call1(Scheme[2],_bX_);
          if(param)var h=param[1],_bY_=[0,h];else var _bY_=0;
          var _b0_=init[1],_bZ_=init[2],_b1_=Stdlib_string[30];
          if(_b0_)var x=_b0_[1],_b2_=[0,caml_call1(_b1_,x)];else var _b2_=0;
          return [0,_b2_,_bZ_,_bY_,_bW_,_bV_,_bU_,_bT_]},
       make=
        function(scheme,userinfo,host,port,path,query,fragment,param)
         {function decode(param)
           {if(param){var x=param[1];return [0,x]}return 0}
          if(host)
           var switch$0=0;
          else
           {if(port)
             var switch$1=1;
            else
             if(userinfo)var switch$1=1;else var switch$0=0,switch$1=0;
            if(switch$1)var host$0=_am_,switch$0=1}
          if(! switch$0)var host$0=host;
          if(userinfo)
           var u=userinfo[1],userinfo$0=[0,userinfo_of_encoded(u)];
          else
           var userinfo$0=0;
          if(path)
           {var p=path[1],match=path_of_encoded(p);
            if(host$0)
             if(match)
              if(caml_string_notequal(match[1],cst$23))
               var _bR_=[0,cst$24,match],switch$2=1;
              else
               var switch$2=0;
             else
              var switch$2=0;
            else
             var switch$2=0;
            if(! switch$2)var _bR_=match;
            var path$0=_bR_}
          else
           var path$0=0;
          if(query)var p$0=query[1],query$0=[0,p$0];else var query$0=_al_;
          var scheme$0=decode(scheme),_bS_=decode(fragment);
          return normalize
                  (scheme$0,
                   [0,
                    scheme$0,
                    userinfo$0,
                    decode(host$0),
                    port,
                    path$0,
                    query$0,
                    _bS_])},
       of_string=
        function(s)
         {function get_opt_encoded(s,n)
           {try
             {var _bP_=[0,caml_call2(Re[1][1],s,n)];return _bP_}
            catch(_bQ_)
             {_bQ_ = caml_wrap_exception(_bQ_);
              if(_bQ_ === Stdlib[8])return 0;
              throw _bQ_}}
          function get_opt(s,n)
           {try
             {var pct=caml_call2(Re[1][1],s,n),_bN_=[0,decode(pct)];
              return _bN_}
            catch(_bO_)
             {_bO_ = caml_wrap_exception(_bO_);
              if(_bO_ === Stdlib[8])return 0;
              throw _bO_}}
          var
           subs=caml_call4(Re[3],0,0,uri_reference$0,s),
           scheme=get_opt(subs,2),
           match=get_opt_encoded(subs,4);
          if(match)
           {var
             a=match[1],
             subs$0=caml_call4(Re[3],0,0,authority$0,a),
             match$0=get_opt_encoded(subs$0,1);
            if(match$0)
             var x=match$0[1],userinfo=[0,userinfo_of_encoded(x)];
            else
             var userinfo=0;
            var host=get_opt(subs$0,2),match$1=get_opt(subs$0,3);
            if(match$1)
             {var x$0=match$1[1];
              try
               {var _bL_=[0,runtime.caml_int_of_string(x$0)],_bK_=_bL_}
              catch(_bM_){var _bK_=0}
              var port=_bK_}
            else
             var port=0;
            var userinfo$0=userinfo,host$0=host,port$0=port}
          else
           var userinfo$0=0,host$0=0,port$0=0;
          var match$2=get_opt_encoded(subs,5);
          if(match$2)
           var x$1=match$2[1],path=path_of_encoded(x$1);
          else
           var path=0;
          var match$3=get_opt_encoded(subs,7);
          if(match$3)
           var x$2=match$3[1],query=of_raw(x$2);
          else
           var query=[1,0,caml_call1(Stdlib_lazy[4],0)];
          var fragment=get_opt(subs,9);
          return normalize
                  (scheme,
                   [0,scheme,userinfo$0,host$0,port$0,path,query,fragment])},
       to_string=
        function(uri)
         {var _bm_=uri[1];
          if(_bm_)var s=_bm_[1],scheme=[0,s];else var scheme=0;
          var buf=caml_call1(Stdlib_buffer[1],128);
          function add_pct_string(opt,x)
           {if(opt)var sth=opt[1],component=sth;else var component=892015045;
            var _bJ_=encode(scheme,[0,component],x);
            return caml_call2(Stdlib_buffer[14],buf,_bJ_)}
          var _bn_=uri[1];
          if(_bn_)
           {var x=_bn_[1];
            add_pct_string(_an_,x);
            caml_call2(Stdlib_buffer[10],buf,58)}
          var _bo_=uri[3],_bp_=uri[4];
          if(uri[2])
           var switch$0=0;
          else
           if(_bo_)
            var switch$0=0;
           else
            if(_bp_)var switch$0=0;else var _bq_=0,switch$0=1;
          if(! switch$0)var _bq_=1;
          if(_bq_)caml_call2(Stdlib_buffer[14],buf,cst$25);
          var _br_=uri[2];
          if(_br_)
           {var
             userinfo=_br_[1],
             _bs_=caml_call1(encoded_of_userinfo(scheme),userinfo);
            caml_call2(Stdlib_buffer[14],buf,_bs_);
            caml_call2(Stdlib_buffer[10],buf,64)}
          var _bt_=uri[3];
          if(_bt_){var host=_bt_[1];add_pct_string(_ao_,host)}
          var _bu_=uri[4];
          if(_bu_)
           {var port=_bu_[1];
            caml_call2(Stdlib_buffer[10],buf,58);
            var _bv_=caml_call1(Stdlib[33],port);
            caml_call2(Stdlib_buffer[14],buf,_bv_)}
          var _bw_=uri[5];
          if(_bw_)
           {var _bx_=_bw_[1];
            if(caml_string_notequal(_bx_,cst$26))
             {if(uri[3])
               caml_call2(Stdlib_buffer[10],buf,47);
              else
               {var match=caml_call3(Stringext[12],0,_bx_,cst$27);
                if(match)if(! scheme)caml_call2(Stdlib_buffer[14],buf,cst$28)}
              var _by_=uri[5],_bz_=caml_call1(encoded_of_path(scheme),_by_);
              caml_call2(Stdlib_buffer[14],buf,_bz_)}
            else
             {var _bH_=uri[5],_bI_=caml_call1(encoded_of_path(scheme),_bH_);
              caml_call2(Stdlib_buffer[14],buf,_bI_)}}
          var _bA_=uri[6];
          if(0 === _bA_[0])
           {var _bB_=_bA_[1];
            if(_bB_)var q=_bB_,switch$1=1;else var switch$1=0}
          else
           if(_bA_[1])
            var
             _bE_=_bA_[2],
             _bF_=caml_obj_tag(_bE_),
             _bG_=
              250 === _bF_
               ?_bE_[1]
               :246 === _bF_?caml_call1(CamlinternalLazy[2],_bE_):_bE_,
             q=_bG_,
             switch$1=1;
           else
            var switch$1=0;
          if(switch$1)
           {caml_call2(Stdlib_buffer[10],buf,63);
            var _bC_=encoded_of_query(scheme,q);
            caml_call2(Stdlib_buffer[14],buf,_bC_)}
          var _bD_=uri[7];
          if(_bD_)
           {var f=_bD_[1];
            caml_call2(Stdlib_buffer[10],buf,35);
            add_pct_string(_ap_,f)}
          return caml_call1(Stdlib_buffer[2],buf)},
       get_decoded_opt=
        function(param){if(param){var x=param[1];return [0,x]}return 0},
       scheme$0=function(uri){return get_decoded_opt(uri[1])},
       with_scheme=
        function(uri,param)
         {if(param)
           {var scheme=param[1];
            return [0,[0,scheme],uri[2],uri[3],uri[4],uri[5],uri[6],uri[7]]}
          return [0,0,uri[2],uri[3],uri[4],uri[5],uri[6],uri[7]]},
       host$1=function(uri){return get_decoded_opt(uri[3])},
       with_host=
        function(uri,param)
         {if(param)
           {var host=param[1];
            return [0,uri[1],uri[2],[0,host],uri[4],uri[5],uri[6],uri[7]]}
          return [0,uri[1],uri[2],0,uri[4],uri[5],uri[6],uri[7]]},
       host_with_default=
        function(opt,uri)
         {if(opt)
           var sth=opt[1],default$0=sth;
          else
           var default$0=cst_localhost$0;
          var match=host$1(uri);
          if(match){var h=match[1];return h}
          return default$0},
       userinfo$0=
        function(uri)
         {var _bj_=uri[2];
          if(_bj_)
           {var userinfo=_bj_[1],_bk_=uri[1];
            if(_bk_)
             var
              s=_bk_[1],
              _bl_=caml_call1(encoded_of_userinfo([0,s]),userinfo);
            else
             var _bl_=caml_call1(encoded_of_userinfo(0),userinfo);
            return [0,_bl_]}
          return 0},
       with_userinfo=
        function(uri,userinfo)
         {if(userinfo)
           var u=userinfo[1],userinfo$0=[0,userinfo_of_encoded(u)];
          else
           var userinfo$0=0;
          var match=host$1(uri);
          return match
                  ?[0,uri[1],userinfo$0,uri[3],uri[4],uri[5],uri[6],uri[7]]
                  :[0,
                    uri[1],
                    userinfo$0,
                    [0,cst$29],
                    uri[4],
                    uri[5],
                    uri[6],
                    uri[7]]},
       user=
        function(uri)
         {var _bi_=uri[2];
          if(_bi_){var match=_bi_[1],user=match[1];return [0,user]}
          return 0},
       password=
        function(uri)
         {var _bg_=uri[2];
          if(_bg_)
           {var _bh_=_bg_[1][2];if(_bh_){var pass=_bh_[1];return [0,pass]}}
          return 0},
       with_password=
        function(uri,password)
         {function result(userinfo)
           {var match=host$1(uri);
            return match
                    ?[0,uri[1],userinfo,uri[3],uri[4],uri[5],uri[6],uri[7]]
                    :[0,uri[1],userinfo,[0,cst$30],uri[4],uri[5],uri[6],uri[7]]}
          var _bf_=uri[2];
          if(_bf_)
           {var match=_bf_[1],user=match[1];
            return result([0,[0,user,password]])}
          return password?result([0,[0,cst$31,password]]):uri},
       port$0=function(uri){return uri[4]},
       with_port=
        function(uri,port)
         {var match=host$1(uri);
          return match
                  ?[0,uri[1],uri[2],uri[3],port,uri[5],uri[6],uri[7]]
                  :port
                    ?[0,uri[1],uri[2],[0,cst$32],port,uri[5],uri[6],uri[7]]
                    :[0,uri[1],uri[2],0,0,uri[5],uri[6],uri[7]]},
       path=
        function(uri)
         {var _bb_=uri[1];
          if(_bb_)
           var
            s=_bb_[1],
            _bc_=uri[5],
            _bd_=caml_call1(encoded_of_path([0,s]),_bc_);
          else
           var _be_=uri[5],_bd_=caml_call1(encoded_of_path(0),_be_);
          return _bd_},
       with_path=
        function(uri,path)
         {var match=path_of_encoded(path);
          if(host$1(uri))
           if(match)
            if(caml_string_notequal(match[1],cst$33))
             return [0,
                     uri[1],
                     uri[2],
                     uri[3],
                     uri[4],
                     [0,cst$34,match],
                     uri[6],
                     uri[7]];
          return [0,uri[1],uri[2],uri[3],uri[4],match,uri[6],uri[7]]},
       fragment$0=function(uri){return get_decoded_opt(uri[7])},
       with_fragment=
        function(uri,param)
         {if(param)
           {var frag=param[1];
            return [0,uri[1],uri[2],uri[3],uri[4],uri[5],uri[6],[0,frag]]}
          return [0,uri[1],uri[2],uri[3],uri[4],uri[5],uri[6],0]},
       query$0=function(uri){return kv(uri[6])},
       verbatim_query=
        function(uri)
         {var _a$_=uri[6];
          if(0 === _a$_[0])
           {var _ba_=_a$_[1];
            return _ba_?[0,encoded_of_query(scheme$0(uri),_ba_)]:0}
          var qs=_a$_[1];
          return qs},
       get_query_param=function(uri,k){return find(kv(uri[6]),k)},
       get_query_param$0=
        function(uri,k)
         {var match=get_query_param(uri,k);
          if(match)
           {var v=match[1];return [0,caml_call2(Stdlib_string[7],cst$35,v)]}
          return 0},
       with_query=
        function(uri,query)
         {return [0,uri[1],uri[2],uri[3],uri[4],uri[5],[0,query],uri[7]]},
       q_s=
        function(q)
         {function _a__(param){var v=param[2],k=param[1];return [0,k,[0,v,0]]}
          return caml_call2(Stdlib_list[17],_a__,q)},
       with_query$0=function(uri,query){return with_query(uri,q_s(query))},
       add_query_param=
        function(init,p)
         {var _a8_=init[7],_a9_=[0,[0,p,kv(init[6])]];
          return [0,init[1],init[2],init[3],init[4],init[5],_a9_,_a8_]},
       add_query_param$0=
        function(init,param)
         {var
           v=param[2],
           k=param[1],
           _a6_=init[7],
           _a7_=[0,[0,[0,k,[0,v,0]],kv(init[6])]];
          return [0,init[1],init[2],init[3],init[4],init[5],_a7_,_a6_]},
       add_query_params=
        function(init,ps)
         {var
           _a3_=init[7],
           _a4_=kv(init[6]),
           _a5_=[0,caml_call2(Stdlib[37],ps,_a4_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_a5_,_a3_]},
       add_query_params$0=
        function(init,ps)
         {var
           _aZ_=init[7],
           _a0_=kv(init[6]),
           _a1_=q_s(ps),
           _a2_=[0,caml_call2(Stdlib[37],_a1_,_a0_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_a2_,_aZ_]},
       remove_query_param=
        function(init,k)
         {var _aV_=init[7],_aW_=kv(init[6]);
          function _aX_(param)
           {var k$0=param[1];return caml_string_notequal(k,k$0)}
          var _aY_=[0,caml_call2(Stdlib_list[36],_aX_,_aW_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_aY_,_aV_]},
       with_uri=
        function(scheme,userinfo,host,port,path,query,fragment,uri)
         {function with_path_opt(u,o)
           {if(o){var p=o[1];return with_path(u,p)}return with_path(u,cst$36)}
          function with_query_opt(u,o)
           {if(o){var q=o[1];return with_query(u,q)}return with_query(u,0)}
          function with$0(f,o,u)
           {if(o){var x=o[1];return caml_call2(f,u,x)}return u}
          return with$0
                  (with_fragment,
                   fragment,
                   with$0
                    (with_query_opt,
                     query,
                     with$0
                      (with_path_opt,
                       path,
                       with$0
                        (with_port,
                         port,
                         with$0
                          (with_host,
                           host,
                           with$0
                            (with_userinfo,userinfo,with$0(with_scheme,scheme,uri)))))))},
       path_and_query=
        function(uri)
         {var match=path(uri),match$0=query$0(uri);
          if(caml_string_notequal(match,cst$37))
           {if(match$0)
             {var
               scheme=uncast_opt(uri[1]),
               _aT_=caml_call1(encoded_of_query$0(scheme),match$0);
              return caml_call3(Stdlib_printf[4],_aq_,match,_aT_)}
            return match}
          if(match$0)
           {var
             scheme$0=uncast_opt(uri[1]),
             _aU_=caml_call1(encoded_of_query$0(scheme$0),match$0);
            return caml_call2(Stdlib_printf[4],_ar_,_aU_)}
          return cst$38},
       resolve=
        function(schem,base,uri)
         {var match$0=scheme$0(base);
          if(match$0)
           var scheme=match$0[1],scheme$1=scheme;
          else
           var scheme$1=schem;
          var
           schem$0=[0,scheme$1],
           match$1=scheme$0(uri),
           match$2=userinfo$0(uri),
           match$3=host$1(uri);
          if(match$1)
           var
            _aA_=uri[7],
            _aB_=uri[6],
            _aC_=remove_dot_segments(uri[5]),
            _aD_=[0,uri[1],uri[2],uri[3],uri[4],_aC_,_aB_,_aA_];
          else
           {if(match$2)
             var switch$0=0;
            else
             if(match$3)
              var switch$0=0;
             else
              {var
                init=[0,base[1],base[2],base[3],base[4],uri[5],uri[6],uri[7]],
                path_str=path(init);
               if(caml_string_equal(path_str,cst$39))
                var
                 _aH_=init[7],
                 _aI_=init[6][1]?init[6]:base[6],
                 _aJ_=[0,init[1],init[2],init[3],init[4],base[5],_aI_,_aH_];
               else
                if(47 === caml_string_get(path_str,0))
                 var
                  _aK_=init[7],
                  _aL_=init[6],
                  _aM_=remove_dot_segments(init[5]),
                  _aJ_=[0,init[1],init[2],init[3],init[4],_aM_,_aL_,_aK_];
                else
                 {var
                   _aP_=init[5],
                   _aN_=init[7],
                   _aO_=init[6],
                   _aQ_=base[3],
                   match=caml_call1(Stdlib_list[9],base[5]);
                  if(_aQ_)
                   if(match)
                    var switch$1=0;
                   else
                    var _aR_=[0,cst$20,_aP_],switch$1=1;
                  else
                   var switch$1=0;
                  if(! switch$1)
                   {if(match)
                     {if(caml_string_notequal(match[1],cst$17))
                       {var _az_=match[2];
                        if(_az_)
                         if(caml_string_notequal(_az_[1],cst$18))
                          var switch$2=0,switch$3=0;
                         else
                          var rbpath=_az_[2],switch$3=1;
                        else
                         var switch$2=0,switch$3=0}
                      else
                       var rbpath=match[2],switch$3=1;
                      if(switch$3)
                       var
                        _aR_=caml_call2(Stdlib_list[12],[0,cst$19,rbpath],_aP_),
                        switch$2=1}
                    else
                     var switch$2=0;
                    if(! switch$2)var _aR_=_aP_}
                  var
                   _aS_=remove_dot_segments(_aR_),
                   _aJ_=[0,init[1],init[2],init[3],init[4],_aS_,_aO_,_aN_]}
               var _aD_=_aJ_,switch$0=1}
            if(! switch$0)
             var
              _aE_=uri[7],
              _aF_=uri[6],
              _aG_=remove_dot_segments(uri[5]),
              _aD_=[0,base[1],uri[2],uri[3],uri[4],_aG_,_aF_,_aE_]}
          return normalize(schem$0,_aD_)},
       canonicalize=
        function(uri)
         {var
           init=resolve(cst$40,empty,uri),
           Scheme=module_of_scheme(uncast_opt(init[1])),
           _av_=init[7],
           _aw_=init[6],
           _ax_=caml_call1(Scheme[4],init[5]),
           _ay_=caml_call1(Scheme[3],init[4]);
          return [0,init[1],init[2],init[3],_ay_,_ax_,_aw_,_av_]},
       pp=
        function(ppf,uri)
         {var _au_=to_string(uri);
          return caml_call2(Stdlib_format[13],ppf,_au_)},
       pp_hum=
        function(ppf,uri)
         {var _at_=to_string(uri);
          return caml_call2(Stdlib_format[13],ppf,_at_)},
       Uri=
        [0,
         empty,
         compare$0,
         equal,
         pct_encode,
         pct_decode,
         of_string,
         to_string,
         resolve,
         canonicalize,
         make,
         with_uri,
         query$0,
         verbatim_query,
         encoded_of_query$0,
         query_of_encoded,
         with_query,
         with_query$0,
         get_query_param,
         get_query_param$0,
         add_query_param,
         add_query_param$0,
         add_query_params,
         add_query_params$0,
         remove_query_param,
         path,
         path_and_query,
         with_path,
         scheme$0,
         with_scheme,
         userinfo$0,
         with_userinfo,
         user,
         password,
         with_password,
         host$1,
         with_host,
         host_with_default,
         port$0,
         with_port,
         fragment$0,
         with_fragment,
         pp,
         pp_hum,
         [0,ipv4_address$0,ipv6_address$0,uri_reference$0,authority$0,host$0]];
      runtime.caml_register_global(97,Uri,"Uri");
      return}}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1cmkuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
