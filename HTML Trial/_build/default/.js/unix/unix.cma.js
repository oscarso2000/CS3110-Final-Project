(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_sys_exit=runtime.caml_sys_exit,
     caml_wrap_exception=runtime.caml_wrap_exception,
     unix_inet_addr_of_string=runtime.unix_inet_addr_of_string;
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
     cst_close_process_full=caml_new_string("close_process_full"),
     cst_close_process=caml_new_string("close_process"),
     cst_close_process_out=caml_new_string("close_process_out"),
     cst_close_process_in=caml_new_string("close_process_in"),
     cst_process_full_pid=caml_new_string("process_full_pid"),
     cst_process_pid=caml_new_string("process_pid"),
     cst_process_out_pid=caml_new_string("process_out_pid"),
     cst_process_in_pid=caml_new_string("process_in_pid"),
     cst$9=caml_new_string(""),
     cst_c$0=caml_new_string("-c"),
     cst_c=caml_new_string("-c"),
     cst$8=caml_new_string(""),
     cst_udp$1=caml_new_string("udp"),
     cst_tcp$1=caml_new_string("tcp"),
     cst$5=caml_new_string(""),
     cst$7=caml_new_string(""),
     cst_tcp=caml_new_string("tcp"),
     cst_udp=caml_new_string("udp"),
     cst_udp$0=caml_new_string("udp"),
     cst_tcp$0=caml_new_string("tcp"),
     cst$6=caml_new_string(""),
     cst_0_0_0_0$0=caml_new_string("0.0.0.0"),
     cst_127_0_0_1$0=caml_new_string("127.0.0.1"),
     cst_Unix_sendto=caml_new_string("Unix.sendto"),
     cst_Unix_send=caml_new_string("Unix.send"),
     cst_Unix_recvfrom=caml_new_string("Unix.recvfrom"),
     cst_Unix_recv=caml_new_string("Unix.recv"),
     cst_Unix_single_write=caml_new_string("Unix.single_write"),
     cst_Unix_write=caml_new_string("Unix.write"),
     cst_Unix_read=caml_new_string("Unix.read"),
     cst$4=caml_new_string(""),
     cst_execvpe=caml_new_string("execvpe"),
     cst_PATH=caml_new_string("PATH"),
     cst_bin_usr_bin=caml_new_string("/bin:/usr/bin"),
     cst$1=caml_new_string(': "'),
     cst_failed=caml_new_string('" failed'),
     cst_on=caml_new_string(' on "'),
     cst$2=caml_new_string('"'),
     cst$3=caml_new_string(": "),
     cst_E2BIG=caml_new_string("E2BIG"),
     cst_EACCES=caml_new_string("EACCES"),
     cst_EAGAIN=caml_new_string("EAGAIN"),
     cst_EBADF=caml_new_string("EBADF"),
     cst_EBUSY=caml_new_string("EBUSY"),
     cst_ECHILD=caml_new_string("ECHILD"),
     cst_EDEADLK=caml_new_string("EDEADLK"),
     cst_EDOM=caml_new_string("EDOM"),
     cst_EEXIST=caml_new_string("EEXIST"),
     cst_EFAULT=caml_new_string("EFAULT"),
     cst_EFBIG=caml_new_string("EFBIG"),
     cst_EINTR=caml_new_string("EINTR"),
     cst_EINVAL=caml_new_string("EINVAL"),
     cst_EIO=caml_new_string("EIO"),
     cst_EISDIR=caml_new_string("EISDIR"),
     cst_EMFILE=caml_new_string("EMFILE"),
     cst_EMLINK=caml_new_string("EMLINK"),
     cst_ENAMETOOLONG=caml_new_string("ENAMETOOLONG"),
     cst_ENFILE=caml_new_string("ENFILE"),
     cst_ENODEV=caml_new_string("ENODEV"),
     cst_ENOENT=caml_new_string("ENOENT"),
     cst_ENOEXEC=caml_new_string("ENOEXEC"),
     cst_ENOLCK=caml_new_string("ENOLCK"),
     cst_ENOMEM=caml_new_string("ENOMEM"),
     cst_ENOSPC=caml_new_string("ENOSPC"),
     cst_ENOSYS=caml_new_string("ENOSYS"),
     cst_ENOTDIR=caml_new_string("ENOTDIR"),
     cst_ENOTEMPTY=caml_new_string("ENOTEMPTY"),
     cst_ENOTTY=caml_new_string("ENOTTY"),
     cst_ENXIO=caml_new_string("ENXIO"),
     cst_EPERM=caml_new_string("EPERM"),
     cst_EPIPE=caml_new_string("EPIPE"),
     cst_ERANGE=caml_new_string("ERANGE"),
     cst_EROFS=caml_new_string("EROFS"),
     cst_ESPIPE=caml_new_string("ESPIPE"),
     cst_ESRCH=caml_new_string("ESRCH"),
     cst_EXDEV=caml_new_string("EXDEV"),
     cst_EWOULDBLOCK=caml_new_string("EWOULDBLOCK"),
     cst_EINPROGRESS=caml_new_string("EINPROGRESS"),
     cst_EALREADY=caml_new_string("EALREADY"),
     cst_ENOTSOCK=caml_new_string("ENOTSOCK"),
     cst_EDESTADDRREQ=caml_new_string("EDESTADDRREQ"),
     cst_EMSGSIZE=caml_new_string("EMSGSIZE"),
     cst_EPROTOTYPE=caml_new_string("EPROTOTYPE"),
     cst_ENOPROTOOPT=caml_new_string("ENOPROTOOPT"),
     cst_EPROTONOSUPPORT=caml_new_string("EPROTONOSUPPORT"),
     cst_ESOCKTNOSUPPORT=caml_new_string("ESOCKTNOSUPPORT"),
     cst_EOPNOTSUPP=caml_new_string("EOPNOTSUPP"),
     cst_EPFNOSUPPORT=caml_new_string("EPFNOSUPPORT"),
     cst_EAFNOSUPPORT=caml_new_string("EAFNOSUPPORT"),
     cst_EADDRINUSE=caml_new_string("EADDRINUSE"),
     cst_EADDRNOTAVAIL=caml_new_string("EADDRNOTAVAIL"),
     cst_ENETDOWN=caml_new_string("ENETDOWN"),
     cst_ENETUNREACH=caml_new_string("ENETUNREACH"),
     cst_ENETRESET=caml_new_string("ENETRESET"),
     cst_ECONNABORTED=caml_new_string("ECONNABORTED"),
     cst_ECONNRESET=caml_new_string("ECONNRESET"),
     cst_ENOBUFS=caml_new_string("ENOBUFS"),
     cst_EISCONN=caml_new_string("EISCONN"),
     cst_ENOTCONN=caml_new_string("ENOTCONN"),
     cst_ESHUTDOWN=caml_new_string("ESHUTDOWN"),
     cst_ETOOMANYREFS=caml_new_string("ETOOMANYREFS"),
     cst_ETIMEDOUT=caml_new_string("ETIMEDOUT"),
     cst_ECONNREFUSED=caml_new_string("ECONNREFUSED"),
     cst_EHOSTDOWN=caml_new_string("EHOSTDOWN"),
     cst_EHOSTUNREACH=caml_new_string("EHOSTUNREACH"),
     cst_ELOOP=caml_new_string("ELOOP"),
     cst_EOVERFLOW=caml_new_string("EOVERFLOW"),
     shell=caml_new_string("/bin/sh"),
     cst_Unix_Unix_error=caml_new_string("Unix.Unix_error"),
     cst=caml_new_string(""),
     cst$0=caml_new_string(""),
     cst_Unix_Unix_error$0=caml_new_string("Unix.Unix_error"),
     cst_0_0_0_0=caml_new_string("0.0.0.0"),
     cst_127_0_0_1=caml_new_string("127.0.0.1"),
     cst$10=caml_new_string("::"),
     cst_1=caml_new_string("::1"),
     Stdlib=global_data.Stdlib,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_int=global_data.Stdlib__int,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_filename=global_data.Stdlib__filename,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Unix_error=[248,cst_Unix_Unix_error,runtime.caml_fresh_oo_id(0)];
    caml_call2
     (Stdlib_callback[2],cst_Unix_Unix_error$0,[0,Unix_error,0,cst$0,cst]);
    var
     _p_=[0,1],
     _q_=[0,1],
     _o_=[0,1],
     _l_=[0,1],
     _m_=[0,1],
     _n_=[0,1],
     _j_=[0,1],
     _k_=[0,1],
     _i_=[0,1],
     _h_=[0,1],
     _e_=[0,0],
     _f_=[0,0],
     _g_=[0,0],
     _d_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _c_=
      [0,
       [11,caml_new_string("EUNKNOWNERR "),[4,0,0,0,0]],
       caml_new_string("EUNKNOWNERR %d")],
     _b_=
      [0,
       [11,
        caml_new_string("Unix.Unix_error(Unix."),
        [2,
         0,
         [11,
          caml_new_string(", "),
          [3,0,[11,caml_new_string(", "),[3,0,[12,41,0]]]]]]],
       caml_new_string("Unix.Unix_error(Unix.%s, %S, %S)")];
    function _a_(param)
     {if(param[1] === Unix_error)
       {var s=param[4],s$0=param[3],e=param[2];
        if(typeof e === "number")
         {var _dD_=e;
          if(34 <= _dD_)
           switch(_dD_)
            {case 34:var msg=cst_ESPIPE;break;
             case 35:var msg=cst_ESRCH;break;
             case 36:var msg=cst_EXDEV;break;
             case 37:var msg=cst_EWOULDBLOCK;break;
             case 38:var msg=cst_EINPROGRESS;break;
             case 39:var msg=cst_EALREADY;break;
             case 40:var msg=cst_ENOTSOCK;break;
             case 41:var msg=cst_EDESTADDRREQ;break;
             case 42:var msg=cst_EMSGSIZE;break;
             case 43:var msg=cst_EPROTOTYPE;break;
             case 44:var msg=cst_ENOPROTOOPT;break;
             case 45:var msg=cst_EPROTONOSUPPORT;break;
             case 46:var msg=cst_ESOCKTNOSUPPORT;break;
             case 47:var msg=cst_EOPNOTSUPP;break;
             case 48:var msg=cst_EPFNOSUPPORT;break;
             case 49:var msg=cst_EAFNOSUPPORT;break;
             case 50:var msg=cst_EADDRINUSE;break;
             case 51:var msg=cst_EADDRNOTAVAIL;break;
             case 52:var msg=cst_ENETDOWN;break;
             case 53:var msg=cst_ENETUNREACH;break;
             case 54:var msg=cst_ENETRESET;break;
             case 55:var msg=cst_ECONNABORTED;break;
             case 56:var msg=cst_ECONNRESET;break;
             case 57:var msg=cst_ENOBUFS;break;
             case 58:var msg=cst_EISCONN;break;
             case 59:var msg=cst_ENOTCONN;break;
             case 60:var msg=cst_ESHUTDOWN;break;
             case 61:var msg=cst_ETOOMANYREFS;break;
             case 62:var msg=cst_ETIMEDOUT;break;
             case 63:var msg=cst_ECONNREFUSED;break;
             case 64:var msg=cst_EHOSTDOWN;break;
             case 65:var msg=cst_EHOSTUNREACH;break;
             case 66:var msg=cst_ELOOP;break;
             default:var msg=cst_EOVERFLOW}
          else
           switch(_dD_)
            {case 0:var msg=cst_E2BIG;break;
             case 1:var msg=cst_EACCES;break;
             case 2:var msg=cst_EAGAIN;break;
             case 3:var msg=cst_EBADF;break;
             case 4:var msg=cst_EBUSY;break;
             case 5:var msg=cst_ECHILD;break;
             case 6:var msg=cst_EDEADLK;break;
             case 7:var msg=cst_EDOM;break;
             case 8:var msg=cst_EEXIST;break;
             case 9:var msg=cst_EFAULT;break;
             case 10:var msg=cst_EFBIG;break;
             case 11:var msg=cst_EINTR;break;
             case 12:var msg=cst_EINVAL;break;
             case 13:var msg=cst_EIO;break;
             case 14:var msg=cst_EISDIR;break;
             case 15:var msg=cst_EMFILE;break;
             case 16:var msg=cst_EMLINK;break;
             case 17:var msg=cst_ENAMETOOLONG;break;
             case 18:var msg=cst_ENFILE;break;
             case 19:var msg=cst_ENODEV;break;
             case 20:var msg=cst_ENOENT;break;
             case 21:var msg=cst_ENOEXEC;break;
             case 22:var msg=cst_ENOLCK;break;
             case 23:var msg=cst_ENOMEM;break;
             case 24:var msg=cst_ENOSPC;break;
             case 25:var msg=cst_ENOSYS;break;
             case 26:var msg=cst_ENOTDIR;break;
             case 27:var msg=cst_ENOTEMPTY;break;
             case 28:var msg=cst_ENOTTY;break;
             case 29:var msg=cst_ENXIO;break;
             case 30:var msg=cst_EPERM;break;
             case 31:var msg=cst_EPIPE;break;
             case 32:var msg=cst_ERANGE;break;
             default:var msg=cst_EROFS}}
        else
         var x=e[1],msg=caml_call2(Stdlib_printf[4],_c_,x);
        return [0,caml_call4(Stdlib_printf[4],_b_,msg,s$0,s)]}
      return 0}
    caml_call1(Stdlib_printexc[8],_a_);
    function handle_unix_error(f,arg)
     {try
       {var _dC_=caml_call1(f,arg);return _dC_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Unix_error)
         {var
           arg$0=exn[4],
           fun_name=exn[3],
           err=exn[2],
           _dA_=caml_check_bound(Stdlib_sys[1],0)[1];
          caml_call1(Stdlib[49],_dA_);
          caml_call1(Stdlib[49],cst$1);
          caml_call1(Stdlib[49],fun_name);
          caml_call1(Stdlib[49],cst_failed);
          if(0 < caml_ml_string_length(arg$0))
           {caml_call1(Stdlib[49],cst_on);
            caml_call1(Stdlib[49],arg$0);
            caml_call1(Stdlib[49],cst$2)}
          caml_call1(Stdlib[49],cst$3);
          var _dB_=runtime.unix_error_message(err);
          caml_call1(Stdlib[53],_dB_);
          return caml_call1(Stdlib[99],2)}
        throw exn}}
    function execvpe(name,args,env)
     {try
       {var _du_=runtime.unix_execvpe(name,args,env);return _du_}
      catch(_dv_)
       {_dv_ = caml_wrap_exception(_dv_);
        if(_dv_[1] === Unix_error)
         {var _dt_=_dv_[2];
          if(typeof _dt_ === "number")
           if(25 === _dt_)
            {var
              exec=
               function(file)
                {try
                  {var _dy_=runtime.unix_execve(file,args,env);return _dy_}
                 catch(_dz_)
                  {_dz_ = caml_wrap_exception(_dz_);
                   if(_dz_[1] === Unix_error)
                    {var _dx_=_dz_[2];
                     if(typeof _dx_ === "number")
                      if(21 === _dx_)
                       {var
                         argc=args.length - 1,
                         args$0=
                          0 === argc
                           ?args
                           :caml_call3(Stdlib_array[7],args,1,argc - 1 | 0),
                         new_args=caml_call2(Stdlib_array[5],[0,shell,file],args$0);
                        return runtime.unix_execve
                                (caml_check_bound(new_args,0)[1],new_args,env)}}
                   throw _dz_}};
             if(caml_call2(Stdlib_string[22],name,47))return exec(name);
             try
              {var _ds_=runtime.caml_sys_unsafe_getenv(cst_PATH),_dr_=_ds_}
             catch(_dw_)
              {_dw_ = caml_wrap_exception(_dw_);
               if(_dw_ !== Stdlib[8])throw _dw_;
               var _dr_=cst_bin_usr_bin}
             var
              param$0=caml_call2(Stdlib_string[35],58,_dr_),
              eacces=0,
              param=param$0;
             for(;;)
              {if(param)
                {var
                  rem=param[2],
                  dir=param[1],
                  dir$0=caml_string_equal(dir,cst$4)?Stdlib_filename[1]:dir;
                 try
                  {var _dp_=exec(caml_call2(Stdlib_filename[4],dir$0,name));
                   return _dp_}
                 catch(exn)
                  {exn = caml_wrap_exception(exn);
                   if(exn[1] === Unix_error)
                    {var err=exn[2];
                     if(typeof err === "number")
                      {var _do_=err - 62 | 0;
                       if(4 < _do_ >>> 0)
                        if(-35 <= _do_)
                         var switch$0=0;
                        else
                         {var switcher=_do_ + 62 | 0;
                          switch(switcher)
                           {case 1:var eacces=1,param=rem;continue;
                            case 14:
                            case 17:
                            case 19:
                            case 20:
                            case 26:var switch$0=1;break;
                            default:var switch$0=0}}
                       else
                        var switch$0=2 < (_do_ - 1 | 0) >>> 0?1:0;
                       if(switch$0){var param=rem;continue}}
                     throw exn}
                   throw exn}}
               var _dq_=eacces?1:20;
               throw [0,Unix_error,_dq_,cst_execvpe,name]}}}
        throw _dv_}}
    var stdin=0,stdout=1,stderr=2;
    function read(fd,buf,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_read(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_read)}
    function write(fd,buf,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_write)}
    function single_write(fd,buf,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_single_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_single_write)}
    function write_substring(fd,buf,ofs,len)
     {return write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function single_write_substring(fd,buf,ofs,len)
     {return single_write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function map_file(fd,opt,kind,layout,shared,dims)
     {if(opt)var sth=opt[1],pos=sth;else var pos=_d_;
      return runtime.caml_unix_map_file_bytecode
              (fd,kind,layout,shared,dims,pos)}
    function pause(param)
     {var sigs=runtime.unix_sigprocmask(1,0);
      return runtime.unix_sigsuspend(sigs)}
    function sleep(duration){return runtime.unix_sleep(duration)}
    var
     inet_addr_any=unix_inet_addr_of_string(cst_0_0_0_0),
     inet_addr_loopback=unix_inet_addr_of_string(cst_127_0_0_1);
    try
     {var _A_=unix_inet_addr_of_string(cst$10),inet_addr_any$0=_A_}
    catch(_dn_)
     {_dn_ = caml_wrap_exception(_dn_);
      if(_dn_[1] !== Stdlib[7])throw _dn_;
      var inet_addr_any$0=inet_addr_any}
    try
     {var _z_=unix_inet_addr_of_string(cst_1),inet6_addr_loopback=_z_}
    catch(_dm_)
     {_dm_ = caml_wrap_exception(_dm_);
      if(_dm_[1] !== Stdlib[7])throw _dm_;
      var inet6_addr_loopback=inet_addr_loopback}
    function domain_of_sockaddr(param)
     {if(0 === param[0])return 0;
      var a=param[1];
      return 16 === caml_ml_string_length(a)?2:1}
    function recv(fd,buf,ofs,len,flags)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_recv(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recv)}
    function recvfrom(fd,buf,ofs,len,flags)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_recvfrom(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recvfrom)}
    function send(fd,buf,ofs,len,flags)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_send(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_send)}
    function sendto(fd,buf,ofs,len,flags,addr)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_sendto(fd,buf,ofs,len,flags,addr);
      return caml_call1(Stdlib[1],cst_Unix_sendto)}
    function send_substring(fd,buf,ofs,len,flags)
     {return send(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags)}
    function sendto_substring(fd,buf,ofs,len,flags,addr)
     {return sendto(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags,addr)}
    function getsockopt(fd,opt){return runtime.unix_getsockopt(0,fd,opt)}
    function setsockopt(fd,opt,v){return runtime.unix_setsockopt(0,fd,opt,v)}
    function getsockopt_int(fd,opt){return runtime.unix_getsockopt(1,fd,opt)}
    function setsockopt_int(fd,opt,v)
     {return runtime.unix_setsockopt(1,fd,opt,v)}
    function getsockopt_optint(fd,opt)
     {return runtime.unix_getsockopt(2,fd,opt)}
    function setsockopt_optint(fd,opt,v)
     {return runtime.unix_setsockopt(2,fd,opt,v)}
    function getsockopt_float(fd,opt)
     {return runtime.unix_getsockopt(3,fd,opt)}
    function setsockopt_float(fd,opt,v)
     {return runtime.unix_setsockopt(3,fd,opt,v)}
    function getsockopt_error(fd){return runtime.unix_getsockopt(4,fd,0)}
    function getaddrinfo(node,service,opts)
     {try
       {var
         _dc_=runtime.unix_getaddrinfo(node,service,opts),
         _dd_=caml_call1(Stdlib_list[9],_dc_);
        return _dd_}
      catch(_de_)
       {_de_ = caml_wrap_exception(_de_);
        if(_de_[1] === Stdlib[6])
         {var
           opt_socktype=[0,0],
           opt_protocol=[0,0],
           opt_passive=[0,0],
           _c1_=
            function(param)
             {if(typeof param === "number")
               {if(2 === param){opt_passive[1] = 1;return 0}}
              else
               switch(param[0])
                {case 1:var s=param[1];opt_socktype[1] = [0,s];return 0;
                 case 2:var p=param[1];opt_protocol[1] = p;return 0
                 }
              return 0};
          caml_call2(Stdlib_list[15],_c1_,opts);
          var
           get_port=
            function(ty,kind)
             {if(caml_string_equal(service,cst$5))return [0,[0,ty,0],0];
              try
               {var _dj_=[0,[0,ty,runtime.caml_int_of_string(service)],0];
                return _dj_}
              catch(_dk_)
               {_dk_ = caml_wrap_exception(_dk_);
                if(_dk_[1] === Stdlib[7])
                 try
                  {var
                    _di_=
                     [0,[0,ty,runtime.unix_getservbyname(service,kind)[3]],0];
                   return _di_}
                 catch(_dl_)
                  {_dl_ = caml_wrap_exception(_dl_);
                   if(_dl_ === Stdlib[8])return 0;
                   throw _dl_}
                throw _dk_}},
           _c2_=opt_socktype[1];
          if(_c2_)
           var
            _c3_=_c2_[1],
            _c4_=
             1 === _c3_
              ?get_port(1,cst_udp)
              :0 === _c3_
                ?get_port(0,cst_tcp)
                :caml_string_equal(service,cst$7)?[0,[0,_c3_,0],0]:0,
            ports=_c4_;
          else
           var
            _da_=get_port(1,cst_udp$0),
            _db_=get_port(0,cst_tcp$0),
            ports=caml_call2(Stdlib[37],_db_,_da_);
          if(caml_string_equal(node,cst$6))
           var
            addresses=
             caml_call2(Stdlib_list[32],2,opts)
              ?[0,[0,inet_addr_any,cst_0_0_0_0$0],0]
              :[0,[0,inet_addr_loopback,cst_127_0_0_1$0],0];
          else
           try
            {var
              _c$_=[0,[0,unix_inet_addr_of_string(node),node],0],
              addresses=_c$_}
           catch(_dg_)
            {_dg_ = caml_wrap_exception(_dg_);
             if(_dg_[1] !== Stdlib[7])throw _dg_;
             try
              {var
                he=runtime.unix_gethostbyname(node),
                _c8_=caml_call1(Stdlib_array[11],he[4]),
                _c9_=function(a){return [0,a,he[1]]},
                _c__=caml_call2(Stdlib_list[17],_c9_,_c8_),
                _c7_=_c__}
             catch(_dh_)
              {_dh_ = caml_wrap_exception(_dh_);
               if(_dh_ !== Stdlib[8])throw _dh_;
               var _c7_=0}
             var addresses=_c7_}
          var
           _c5_=
            function(param)
             {var port=param[2],ty=param[1];
              function _df_(param)
               {var name=param[2],addr=param[1];
                return [0,1,ty,opt_protocol[1],[1,addr,port],name]}
              return caml_call2(Stdlib_list[17],_df_,addresses)},
           _c6_=caml_call2(Stdlib_list[17],_c5_,ports);
          return caml_call1(Stdlib_list[14],_c6_)}
        throw _de_}}
    function getnameinfo(addr,opts)
     {try
       {var _cX_=runtime.unix_getnameinfo(addr,opts);return _cX_}
      catch(_cY_)
       {_cY_ = caml_wrap_exception(_cY_);
        if(_cY_[1] === Stdlib[6])
         {if(0 === addr[0]){var f=addr[1];return [0,cst$8,f]}
          var p=addr[2],a=addr[1];
          try
           {if(caml_call2(Stdlib_list[32],1,opts))throw Stdlib[8];
            var _cW_=runtime.unix_gethostbyaddr(a)[1],hostname=_cW_}
          catch(_c0_)
           {_c0_ = caml_wrap_exception(_c0_);
            if(_c0_ !== Stdlib[8])throw _c0_;
            if(caml_call2(Stdlib_list[32],2,opts))throw Stdlib[8];
            var hostname=runtime.unix_string_of_inet_addr(a)}
          try
           {if(caml_call2(Stdlib_list[32],3,opts))throw Stdlib[8];
            var
             kind=caml_call2(Stdlib_list[32],4,opts)?cst_udp$1:cst_tcp$1,
             _cV_=runtime.unix_getservbyport(p,kind)[1],
             service=_cV_}
          catch(_cZ_)
           {_cZ_ = caml_wrap_exception(_cZ_);
            if(_cZ_ !== Stdlib[8])throw _cZ_;
            var service=caml_call1(Stdlib_int[10],p)}
          return [0,hostname,service]}
        throw _cY_}}
    function waitpid_non_intr(pid)
     {for(;;)
       try
        {var _cT_=runtime.unix_waitpid(0,pid);return _cT_}
       catch(_cU_)
        {_cU_ = caml_wrap_exception(_cU_);
         if(_cU_[1] === Unix_error)
          {var _cS_=_cU_[2];
           if(typeof _cS_ === "number")if(11 === _cS_)continue}
         throw _cU_}}
    function system(cmd)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {var _cQ_=runtime.unix_execv(shell,[0,shell,cst_c,cmd]);return _cQ_}
       catch(_cR_){return caml_sys_exit(127)}
      return waitpid_non_intr(id)[2]}
    function file_descr_not_standard(fd)
     {var fd$0=fd;
      for(;;)
       {if(3 <= fd$0)return fd$0;
        var fd$1=runtime.unix_dup(0,fd$0),fd$0=fd$1;
        continue}}
    function safe_close(fd)
     {try
       {var _cO_=runtime.unix_close(fd);return _cO_}
      catch(_cP_)
       {_cP_ = caml_wrap_exception(_cP_);
        if(_cP_[1] === Unix_error)return 0;
        throw _cP_}}
    function perform_redirections(new_stdin,new_stdout,new_stderr)
     {var
       new_stdin$0=file_descr_not_standard(new_stdin),
       new_stdout$0=file_descr_not_standard(new_stdout),
       new_stderr$0=file_descr_not_standard(new_stderr);
      runtime.unix_dup2(_e_,new_stdin$0,0);
      runtime.unix_dup2(_f_,new_stdout$0,1);
      runtime.unix_dup2(_g_,new_stderr$0,2);
      safe_close(new_stdin$0);
      safe_close(new_stdout$0);
      return safe_close(new_stderr$0)}
    function create_process(cmd,args,new_stdin,new_stdout,new_stderr)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {perform_redirections(new_stdin,new_stdout,new_stderr);
         var _cM_=runtime.unix_execvp(cmd,args);
         return _cM_}
       catch(_cN_){return caml_sys_exit(127)}
      return id}
    function create_process_env(cmd,args,env,new_stdin,new_stdout,new_stderr)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {perform_redirections(new_stdin,new_stdout,new_stderr);
         var _cK_=execvpe(cmd,args,env);
         return _cK_}
       catch(_cL_){return caml_sys_exit(127)}
      return id}
    var popen_processes=caml_call2(Stdlib_hashtbl[1],0,7);
    function open_proc(prog,args,envopt,proc,input,output,error)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       {perform_redirections(input,output,error);
        try
         {if(envopt)
           var env=envopt[1],_cI_=runtime.unix_execve(prog,args,env);
          else
           var _cI_=runtime.unix_execv(prog,args);
          return _cI_}
        catch(_cJ_){return caml_sys_exit(127)}}
      return caml_call3(Stdlib_hashtbl[5],popen_processes,proc,id)}
    function open_process_args_in(prog,args)
     {var
       match=runtime.unix_pipe(_h_,0),
       in_write=match[2],
       in_read=match[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read);
      try
       {open_proc(prog,args,0,[1,inchan],stdin,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[93],inchan);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(in_write);
      return inchan}
    function open_process_args_out(prog,args)
     {var
       match=runtime.unix_pipe(_i_,0),
       out_write=match[2],
       out_read=match[1],
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[2,outchan],out_read,stdout,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[76],outchan);
        runtime.unix_close(out_read);
        throw e}
      runtime.unix_close(out_read);
      return outchan}
    function open_process_args(prog,args)
     {var match=runtime.unix_pipe(_j_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_k_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var
       out_write=match$0[2],
       out_read=match$0[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[0,inchan,outchan],out_read,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      return [0,inchan,outchan]}
    function open_process_args_full(prog,args,env)
     {var match=runtime.unix_pipe(_l_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_m_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var out_write=match$0[2],out_read=match$0[1];
      try
       {var match$1=runtime.unix_pipe(_n_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        throw e}
      var
       err_write=match$1[2],
       err_read=match$1[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write),
       errchan=runtime.unix_inchannel_of_filedescr(err_read);
      try
       {open_proc
         (prog,
          args,
          [0,env],
          [3,inchan,outchan,errchan],
          out_read,
          in_write,
          err_write)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(err_read);
        runtime.unix_close(err_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      runtime.unix_close(err_write);
      return [0,inchan,outchan,errchan]}
    function open_process_shell(fn,cmd)
     {return caml_call2(fn,shell,[0,shell,cst_c$0,cmd])}
    function open_process_in(cmd)
     {return open_process_shell(open_process_args_in,cmd)}
    function open_process_out(cmd)
     {return open_process_shell(open_process_args_out,cmd)}
    function open_process(cmd)
     {return open_process_shell(open_process_args,cmd)}
    function open_process_full(cmd)
     {return open_process_shell(open_process_args_full,cmd)}
    function find_proc_id(fun_name,proc)
     {try
       {var _cG_=caml_call2(Stdlib_hashtbl[6],popen_processes,proc);
        return _cG_}
      catch(_cH_)
       {_cH_ = caml_wrap_exception(_cH_);
        if(_cH_ === Stdlib[8])throw [0,Unix_error,3,fun_name,cst$9];
        throw _cH_}}
    function remove_proc_id(proc)
     {return caml_call2(Stdlib_hashtbl[10],popen_processes,proc)}
    function process_in_pid(inchan)
     {return find_proc_id(cst_process_in_pid,[1,inchan])}
    function process_out_pid(outchan)
     {return find_proc_id(cst_process_out_pid,[2,outchan])}
    function process_pid(param)
     {var outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_pid,[0,inchan,outchan])}
    function process_full_pid(param)
     {var errchan=param[3],outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_full_pid,[3,inchan,outchan,errchan])}
    function close_process_in(inchan)
     {var proc=[1,inchan],pid=find_proc_id(cst_close_process_in,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      return waitpid_non_intr(pid)[2]}
    function close_process_out(outchan)
     {var proc=[2,outchan],pid=find_proc_id(cst_close_process_out,proc);
      remove_proc_id(proc);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cF_)
       {_cF_ = caml_wrap_exception(_cF_);if(_cF_[1] !== Stdlib[11])throw _cF_}
      return waitpid_non_intr(pid)[2]}
    function close_process(param)
     {var
       outchan=param[2],
       inchan=param[1],
       proc=[0,inchan,outchan],
       pid=find_proc_id(cst_close_process,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cE_)
       {_cE_ = caml_wrap_exception(_cE_);if(_cE_[1] !== Stdlib[11])throw _cE_}
      return waitpid_non_intr(pid)[2]}
    function close_process_full(param)
     {var
       errchan=param[3],
       outchan=param[2],
       inchan=param[1],
       proc=[3,inchan,outchan,errchan],
       pid=find_proc_id(cst_close_process_full,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cD_)
       {_cD_ = caml_wrap_exception(_cD_);if(_cD_[1] !== Stdlib[11])throw _cD_}
      caml_call1(Stdlib[93],errchan);
      return waitpid_non_intr(pid)[2]}
    function open_connection(sockaddr)
     {var sock=runtime.unix_socket(_o_,domain_of_sockaddr(sockaddr),0,0);
      try
       {runtime.unix_connect(sock,sockaddr);
        var
         _cB_=runtime.unix_outchannel_of_filedescr(sock),
         _cC_=[0,runtime.unix_inchannel_of_filedescr(sock),_cB_];
        return _cC_}
      catch(exn)
       {exn = caml_wrap_exception(exn);runtime.unix_close(sock);throw exn}}
    function shutdown_connection(inchan)
     {return runtime.unix_shutdown(runtime.caml_channel_descriptor(inchan),1)}
    function accept_non_intr(s)
     {for(;;)
       try
        {var _cz_=runtime.unix_accept(_p_,s);return _cz_}
       catch(_cA_)
        {_cA_ = caml_wrap_exception(_cA_);
         if(_cA_[1] === Unix_error)
          {var _cy_=_cA_[2];
           if(typeof _cy_ === "number")if(11 === _cy_)continue}
         throw _cA_}}
    function establish_server(server_fun,sockaddr)
     {var sock=runtime.unix_socket(_q_,domain_of_sockaddr(sockaddr),0,0);
      runtime.unix_setsockopt(0,sock,2,1);
      runtime.unix_bind(sock,sockaddr);
      runtime.unix_listen(sock,5);
      for(;;)
       {var match=accept_non_intr(sock),s=match[1],id=runtime.unix_fork(0);
        if(0 === id)
         {if(0 !== runtime.unix_fork(0))caml_sys_exit(0);
          runtime.unix_close(sock);
          var
           inchan=runtime.unix_inchannel_of_filedescr(s),
           outchan=runtime.unix_outchannel_of_filedescr(s);
          caml_call2(server_fun,inchan,outchan);
          caml_call1(Stdlib[99],0)}
        else
         {runtime.unix_close(s);waitpid_non_intr(id)}
        continue}}
    function setsid(_cx_){return runtime.unix_setsid(_cx_)}
    function tcflow(_cw_,_cv_){return runtime.unix_tcflow(_cw_,_cv_)}
    function tcflush(_cu_,_ct_){return runtime.unix_tcflush(_cu_,_ct_)}
    function tcdrain(_cs_){return runtime.unix_tcdrain(_cs_)}
    function tcsendbreak(_cr_,_cq_)
     {return runtime.unix_tcsendbreak(_cr_,_cq_)}
    function tcsetattr(_cp_,_co_,_cn_)
     {return runtime.unix_tcsetattr(_cp_,_co_,_cn_)}
    function tcgetattr(_cm_){return runtime.unix_tcgetattr(_cm_)}
    function getservbyport(_cl_,_ck_)
     {return runtime.unix_getservbyport(_cl_,_ck_)}
    function getservbyname(_cj_,_ci_)
     {return runtime.unix_getservbyname(_cj_,_ci_)}
    function getprotobynumber(_ch_)
     {return runtime.unix_getprotobynumber(_ch_)}
    function getprotobyname(_cg_){return runtime.unix_getprotobyname(_cg_)}
    function gethostbyaddr(_cf_){return runtime.unix_gethostbyaddr(_cf_)}
    function gethostbyname(_ce_){return runtime.unix_gethostbyname(_ce_)}
    function gethostname(_cd_){return runtime.unix_gethostname(_cd_)}
    function getpeername(_cc_){return runtime.unix_getpeername(_cc_)}
    function getsockname(_cb_){return runtime.unix_getsockname(_cb_)}
    function shutdown(_ca_,_b$_){return runtime.unix_shutdown(_ca_,_b$_)}
    function listen(_b__,_b9_){return runtime.unix_listen(_b__,_b9_)}
    function connect(_b8_,_b7_){return runtime.unix_connect(_b8_,_b7_)}
    function bind(_b6_,_b5_){return runtime.unix_bind(_b6_,_b5_)}
    function accept(_b4_,_b3_){return runtime.unix_accept(_b4_,_b3_)}
    function socketpair(_b2_,_b1_,_b0_,_bZ_)
     {return runtime.unix_socketpair(_b2_,_b1_,_b0_,_bZ_)}
    function socket(_bY_,_bX_,_bW_,_bV_)
     {return runtime.unix_socket(_bY_,_bX_,_bW_,_bV_)}
    function string_of_inet_addr(_bU_)
     {return runtime.unix_string_of_inet_addr(_bU_)}
    function inet_addr_of_string(_bT_){return unix_inet_addr_of_string(_bT_)}
    function getgrgid(_bS_){return runtime.unix_getgrgid(_bS_)}
    function getpwuid(_bR_){return runtime.unix_getpwuid(_bR_)}
    function getgrnam(_bQ_){return runtime.unix_getgrnam(_bQ_)}
    function getpwnam(_bP_){return runtime.unix_getpwnam(_bP_)}
    function getlogin(_bO_){return runtime.unix_getlogin(_bO_)}
    function initgroups(_bN_,_bM_){return runtime.unix_initgroups(_bN_,_bM_)}
    function setgroups(_bL_){return runtime.unix_setgroups(_bL_)}
    function getgroups(_bK_){return runtime.unix_getgroups(_bK_)}
    function setgid(_bJ_){return runtime.unix_setgid(_bJ_)}
    function getegid(_bI_){return runtime.unix_getegid(_bI_)}
    function getgid(_bH_){return runtime.unix_getgid(_bH_)}
    function setuid(_bG_){return runtime.unix_setuid(_bG_)}
    function geteuid(_bF_){return runtime.unix_geteuid(_bF_)}
    function getuid(_bE_){return runtime.unix_getuid(_bE_)}
    function setitimer(_bD_,_bC_){return runtime.unix_setitimer(_bD_,_bC_)}
    function getitimer(_bB_){return runtime.unix_getitimer(_bB_)}
    function utimes(_bA_,_bz_,_by_)
     {return runtime.unix_utimes(_bA_,_bz_,_by_)}
    function times(_bx_){return runtime.unix_times(_bx_)}
    function _r_(_bw_){return runtime.unix_sleep(_bw_)}
    function alarm(_bv_){return runtime.unix_alarm(_bv_)}
    var
     mktime=runtime.unix_mktime,
     localtime=runtime.unix_localtime,
     gmtime=runtime.unix_gmtime;
    function gettimeofday(_bu_){return runtime.unix_gettimeofday(_bu_)}
    function time(_bt_){return runtime.unix_time(_bt_)}
    function sigsuspend(_bs_){return runtime.unix_sigsuspend(_bs_)}
    function sigpending(_br_){return runtime.unix_sigpending(_br_)}
    function sigprocmask(_bq_,_bp_)
     {return runtime.unix_sigprocmask(_bq_,_bp_)}
    function kill(_bo_,_bn_){return runtime.unix_kill(_bo_,_bn_)}
    function lockf(_bm_,_bl_,_bk_){return runtime.unix_lockf(_bm_,_bl_,_bk_)}
    function select(_bj_,_bi_,_bh_,_bg_)
     {return runtime.unix_select(_bj_,_bi_,_bh_,_bg_)}
    function readlink(_bf_){return runtime.unix_readlink(_bf_)}
    function has_symlink(_be_){return runtime.unix_has_symlink(_be_)}
    function symlink(_bd_,_bc_,_bb_)
     {return runtime.unix_symlink(_bd_,_bc_,_bb_)}
    function mkfifo(_ba_,_a$_){return runtime.unix_mkfifo(_ba_,_a$_)}
    function pipe(_a__,_a9_){return runtime.unix_pipe(_a__,_a9_)}
    function closedir(_a8_){return runtime.unix_closedir(_a8_)}
    function rewinddir(_a7_){return runtime.unix_rewinddir(_a7_)}
    function readdir(_a6_){return runtime.unix_readdir(_a6_)}
    function opendir(_a5_){return runtime.unix_opendir(_a5_)}
    function chroot(_a4_){return runtime.unix_chroot(_a4_)}
    function getcwd(_a3_){return runtime.unix_getcwd(_a3_)}
    function chdir(_a2_){return runtime.unix_chdir(_a2_)}
    function rmdir(_a1_){return runtime.unix_rmdir(_a1_)}
    function mkdir(_a0_,_aZ_){return runtime.unix_mkdir(_a0_,_aZ_)}
    function clear_close_on_exec(_aY_)
     {return runtime.unix_clear_close_on_exec(_aY_)}
    function set_close_on_exec(_aX_)
     {return runtime.unix_set_close_on_exec(_aX_)}
    function clear_nonblock(_aW_){return runtime.unix_clear_nonblock(_aW_)}
    function set_nonblock(_aV_){return runtime.unix_set_nonblock(_aV_)}
    function dup2(_aU_,_aT_,_aS_){return runtime.unix_dup2(_aU_,_aT_,_aS_)}
    function dup(_aR_,_aQ_){return runtime.unix_dup(_aR_,_aQ_)}
    function access(_aP_,_aO_){return runtime.unix_access(_aP_,_aO_)}
    function umask(_aN_){return runtime.unix_umask(_aN_)}
    function fchown(_aM_,_aL_,_aK_)
     {return runtime.unix_fchown(_aM_,_aL_,_aK_)}
    function chown(_aJ_,_aI_,_aH_){return runtime.unix_chown(_aJ_,_aI_,_aH_)}
    function fchmod(_aG_,_aF_){return runtime.unix_fchmod(_aG_,_aF_)}
    function chmod(_aE_,_aD_){return runtime.unix_chmod(_aE_,_aD_)}
    function link(_aC_,_aB_,_aA_){return runtime.unix_link(_aC_,_aB_,_aA_)}
    function rename(_az_,_ay_){return runtime.unix_rename(_az_,_ay_)}
    function unlink(_ax_){return runtime.unix_unlink(_ax_)}
    function _s_(_aw_){return runtime.unix_fstat_64(_aw_)}
    function _t_(_av_){return runtime.unix_lstat_64(_av_)}
    function _u_(_au_){return runtime.unix_stat_64(_au_)}
    function _v_(_at_,_as_){return runtime.unix_ftruncate_64(_at_,_as_)}
    function _w_(_ar_,_aq_){return runtime.unix_truncate_64(_ar_,_aq_)}
    var
     LargeFile=
      [0,
       function(_ap_,_ao_,_an_){return runtime.unix_lseek_64(_ap_,_ao_,_an_)},
       _w_,
       _v_,
       _u_,
       _t_,
       _s_];
    function isatty(_am_){return runtime.unix_isatty(_am_)}
    function fstat(_al_){return runtime.unix_fstat(_al_)}
    function lstat(_ak_){return runtime.unix_lstat(_ak_)}
    function stat(_aj_){return runtime.unix_stat(_aj_)}
    function ftruncate(_ai_,_ah_){return runtime.unix_ftruncate(_ai_,_ah_)}
    function truncate(_ag_,_af_){return runtime.unix_truncate(_ag_,_af_)}
    function lseek(_ae_,_ad_,_ac_){return runtime.unix_lseek(_ae_,_ad_,_ac_)}
    function descr_of_out_channel(_ab_)
     {return runtime.caml_channel_descriptor(_ab_)}
    function descr_of_in_channel(_aa_)
     {return runtime.caml_channel_descriptor(_aa_)}
    function out_channel_of_descr(_$_)
     {return runtime.unix_outchannel_of_filedescr(_$_)}
    function in_channel_of_descr(___)
     {return runtime.unix_inchannel_of_filedescr(___)}
    function _x_(_Z_){return runtime.unix_fsync(_Z_)}
    function close(_Y_){return runtime.unix_close(_Y_)}
    function openfile(_X_,_W_,_V_){return runtime.unix_open(_X_,_W_,_V_)}
    function nice(_U_){return runtime.unix_nice(_U_)}
    function getppid(_T_){return runtime.unix_getppid(_T_)}
    function getpid(_S_){return runtime.unix_getpid(_S_)}
    function waitpid(_R_,_Q_){return runtime.unix_waitpid(_R_,_Q_)}
    function wait(_P_){return runtime.unix_wait(_P_)}
    function fork(_O_){return runtime.unix_fork(_O_)}
    function execvp(_N_,_M_){return runtime.unix_execvp(_N_,_M_)}
    function execve(_L_,_K_,_J_){return runtime.unix_execve(_L_,_K_,_J_)}
    function execv(_I_,_H_){return runtime.unix_execv(_I_,_H_)}
    function putenv(_G_,_F_){return runtime.unix_putenv(_G_,_F_)}
    function unsafe_getenv(_E_){return runtime.caml_sys_unsafe_getenv(_E_)}
    var getenv=runtime.caml_sys_getenv;
    function _y_(_D_){return runtime.unix_environment_unsafe(_D_)}
    function environment(_C_){return runtime.unix_environment(_C_)}
    function error_message(_B_){return runtime.unix_error_message(_B_)}
    var
     include=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       _y_,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       _x_,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       process_in_pid,
       process_out_pid,
       process_pid,
       process_full_pid,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       _r_,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(144,include,"Unix");
    var
     UnixLabels=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(145,UnixLabels,"UnixLabels");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1bml4LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
