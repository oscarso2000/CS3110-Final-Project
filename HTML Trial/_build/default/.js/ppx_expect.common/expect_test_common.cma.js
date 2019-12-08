(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Expect_test_collector_File_Digest_of_string_unexpected_length=
      caml_new_string
       ("Expect_test_collector.File.Digest.of_string, unexpected length"),
     cst_Expect_test_collector_File_Digest_of_string=
      caml_new_string("Expect_test_collector.File.Digest.of_string"),
     cst_Expect_test_collector_File_Location_compare=
      caml_new_string("Expect_test_collector.File.Location.compare"),
     cst_end_pos=caml_new_string("end_pos"),
     cst_filename=caml_new_string("filename"),
     cst_line_number=caml_new_string("line_number"),
     cst_line_start=caml_new_string("line_start"),
     cst_start_pos=caml_new_string("start_pos"),
     cst_end_pos$0=caml_new_string("end_pos"),
     cst_start_pos$0=caml_new_string("start_pos"),
     cst_line_start$0=caml_new_string("line_start"),
     cst_line_number$0=caml_new_string("line_number"),
     cst_filename$0=caml_new_string("filename"),
     tp_loc=caml_new_string("common/file.ml.Location.T.t"),
     Base=global_data.Base,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Stdlib_filename=global_data.Stdlib__filename,
     Base_String=global_data.Base__String,
     Base_Comparable=global_data.Base__Comparable,
     Expect_test_common=[0];
    caml_register_global(27,Expect_test_common,"Expect_test_common");
    var
     hash_fold_t=Base_String[19],
     t_of_sexp=Base_String[20],
     sexp_of_t=Base_String[21],
     of_string=Base_String[22],
     to_string=Base_String[23],
     symbol=Base_String[24],
     symbol$0=Base_String[25],
     symbol$1=Base_String[26],
     symbol$2=Base_String[27],
     symbol$3=Base_String[28],
     symbol$4=Base_String[29],
     compare=Base_String[30],
     min=Base_String[31],
     max=Base_String[32],
     ascending=Base_String[33],
     descending=Base_String[34],
     between=Base_String[35],
     clamp_exn=Base_String[36],
     clamp=Base_String[37],
     comparator=Base_String[38],
     validate_lbound=Base_String[39],
     validate_ubound=Base_String[40],
     validate_bound=Base_String[41],
     pp=Base_String[42],
     equal=Base_String[104],
     _a_=[0,caml_new_string("end_pos")],
     _b_=[0,caml_new_string("start_pos")],
     _c_=[0,caml_new_string("line_start")],
     _d_=[0,caml_new_string("line_number")],
     _e_=[0,caml_new_string("filename")],
     _k_=[0,caml_new_string("body_location")],
     _l_=[0,caml_new_string("extid_location")],
     _m_=[0,caml_new_string("body")],
     _n_=[0,caml_new_string("tag")],
     _g_=[0,caml_new_string("Output")],
     _h_=[0,caml_new_string("Unreachable")],
     _i_=[0,caml_new_string("Exact")],
     _j_=[0,caml_new_string("Pretty")];
    function relative_to(dir,t)
     {return caml_call1(Stdlib_filename[5],t)
              ?caml_call2(Stdlib_filename[4],dir,t)
              :t}
    var
     Name=
      [0,
       relative_to,
       hash_fold_t,
       function(_H_){return runtime.Base_hash_string(_H_)},
       t_of_sexp,
       sexp_of_t,
       of_string,
       to_string,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare,
       min,
       max,
       ascending,
       descending,
       between,
       clamp_exn,
       clamp,
       comparator,
       validate_lbound,
       validate_ubound,
       validate_bound,
       pp];
    try
     {var v=runtime.caml_sys_getcwd(0),switch$0=0}
    catch(exn)
     {exn = caml_wrap_exception(exn);
      var dir_or_error=[0,3458171,exn],switch$0=1}
    if(! switch$0)var dir_or_error=[0,17724,v];
    function initial_dir(param)
     {if(3458171 <= dir_or_error[1]){var exn=dir_or_error[2];throw exn}
      var v=dir_or_error[2];
      return v}
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       filename_field=[0,0],
       line_number_field=[0,0],
       line_start_field=[0,0],
       start_pos_field=[0,0],
       end_pos_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _x_=param[1];
          if(1 === _x_[0])
           {var _y_=_x_[1];
            if(_y_)
             {var _z_=_y_[1];
              if(0 === _z_[0])
               {var _A_=_y_[2],_B_=_z_[1];
                if(! _A_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_B_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _A_[2])
                 {var tail=param[2],field_sexp=_A_[1];
                  if(caml_string_notequal(_B_,cst_end_pos))
                   if(caml_string_notequal(_B_,cst_filename))
                    if(caml_string_notequal(_B_,cst_line_number))
                     if(caml_string_notequal(_B_,cst_line_start))
                      if(caml_string_notequal(_B_,cst_start_pos))
                       {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_B_,extra[1]]}
                      else
                       if(start_pos_field[1])
                        duplicates[1] = [0,_B_,duplicates[1]];
                       else
                        {var fvalue=caml_call1(Base[114],field_sexp);
                         start_pos_field[1] = [0,fvalue]}
                     else
                      if(line_start_field[1])
                       duplicates[1] = [0,_B_,duplicates[1]];
                      else
                       {var fvalue$0=caml_call1(Base[114],field_sexp);
                        line_start_field[1] = [0,fvalue$0]}
                    else
                     if(line_number_field[1])
                      duplicates[1] = [0,_B_,duplicates[1]];
                     else
                      {var fvalue$1=caml_call1(Base[114],field_sexp);
                       line_number_field[1] = [0,fvalue$1]}
                   else
                    if(filename_field[1])
                     duplicates[1] = [0,_B_,duplicates[1]];
                    else
                     {var fvalue$2=caml_call1(Name[4],field_sexp);
                      filename_field[1] = [0,fvalue$2]}
                  else
                   if(end_pos_field[1])
                    duplicates[1] = [0,_B_,duplicates[1]];
                   else
                    {var fvalue$3=caml_call1(Base[114],field_sexp);
                     end_pos_field[1] = [0,fvalue$3]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_x_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var
         _C_=filename_field[1],
         _D_=line_number_field[1],
         _E_=line_start_field[1],
         _F_=start_pos_field[1],
         _G_=end_pos_field[1];
        if(_C_)
         if(_D_)
          if(_E_)
           if(_F_)
            if(_G_)
             {var
               end_pos_value=_G_[1],
               start_pos_value=_F_[1],
               line_start_value=_E_[1],
               line_number_value=_D_[1],
               filename_value=_C_[1];
              return [0,
                      filename_value,
                      line_number_value,
                      line_start_value,
                      start_pos_value,
                      end_pos_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === filename_field[1]?1:0,cst_filename$0],
                  [0,
                   [0,0 === line_number_field[1]?1:0,cst_line_number$0],
                   [0,
                    [0,0 === line_start_field[1]?1:0,cst_line_start$0],
                    [0,
                     [0,0 === start_pos_field[1]?1:0,cst_start_pos$0],
                     [0,[0,0 === end_pos_field[1]?1:0,cst_end_pos$0],0]]]]])}}
    function sexp_of_t$0(param)
     {var
       v_end_pos=param[5],
       v_start_pos=param[4],
       v_line_start=param[3],
       v_line_number=param[2],
       v_filename=param[1],
       arg=caml_call1(Base[115],v_end_pos),
       bnds=[0,[1,[0,_a_,[0,arg,0]]],0],
       arg$0=caml_call1(Base[115],v_start_pos),
       bnds$0=[0,[1,[0,_b_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Base[115],v_line_start),
       bnds$1=[0,[1,[0,_c_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Base[115],v_line_number),
       bnds$2=[0,[1,[0,_d_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Name[5],v_filename),
       bnds$3=[0,[1,[0,_e_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function compare$0(a,b)
     {var match=caml_call2(Name[15],a[1],b[1]),_w_=0 === match?1:0;
      if(_w_)
       {if(caml_call2(Ppx_compare_lib[1],a,b))return 0;
        var n=caml_call2(Name[15],a[1],b[1]);
        if(0 === n)
         {var n$0=caml_call2(Base[110],a[2],b[2]);
          if(0 === n$0)
           {var n$1=caml_call2(Base[110],a[3],b[3]);
            if(0 === n$1)
             {var n$2=caml_call2(Base[110],a[4],b[4]);
              return 0 === n$2?caml_call2(Base[110],a[5],b[5]):n$2}
            return n$1}
          return n$0}
        return n}
      return caml_call1
              (Base[206],cst_Expect_test_collector_File_Location_compare)}
    var
     include=caml_call1(Base_Comparable[8],[0,compare$0,sexp_of_t$0]),
     symbol$5=include[1],
     symbol$6=include[2],
     symbol$7=include[3],
     symbol$8=include[4],
     symbol$9=include[5],
     symbol$10=include[6],
     equal$0=include[7],
     compare$1=include[8],
     min$0=include[9],
     max$0=include[10],
     ascending$0=include[11],
     descending$0=include[12],
     between$0=include[13],
     clamp_exn$0=include[14],
     clamp$0=include[15],
     comparator$0=include[16],
     validate_lbound$0=include[17],
     validate_ubound$0=include[18],
     validate_bound$0=include[19];
    function beginning_of_file(filename){return [0,filename,1,0,0,0]}
    var sexp_of_t$1=Base[153],compare$2=Base[148];
    function to_string$0(t){return t}
    function of_string$0(s)
     {var expected_length=32;
      if(caml_call2(Base[186],runtime.caml_ml_string_length(s),32))
       caml_call1
        (Base[206],
         cst_Expect_test_collector_File_Digest_of_string_unexpected_length);
      var _u_=caml_call2(Base[166],expected_length,1),_t_=0;
      if(! (_u_ < 0))
       {var i=_t_;
        for(;;)
         {var
           match=runtime.caml_string_get(s,i),
           switch$0=58 <= match?5 < (match - 97 | 0) >>> 0?0:1:48 <= match?1:0;
          if(! switch$0)
           caml_call1
            (Base[206],cst_Expect_test_collector_File_Digest_of_string);
          var _v_=i + 1 | 0;
          if(_u_ !== i){var i=_v_;continue}
          break}}
      return s}
    var
     _f_=
      [0,
       t_of_sexp$0,
       sexp_of_t$0,
       beginning_of_file,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal$0,
       compare$1,
       min$0,
       max$0,
       ascending$0,
       descending$0,
       between$0,
       clamp_exn$0,
       clamp$0,
       comparator$0,
       validate_lbound$0,
       validate_ubound$0,
       validate_bound$0],
     Expect_test_common_File=
      [0,
       Name,
       initial_dir,
       _f_,
       [0,sexp_of_t$1,compare$2,of_string$0,to_string$0]];
    caml_register_global
     (35,Expect_test_common_File,"Expect_test_common__File");
    function sexp_of_t$2(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_g_:_h_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(Sexplib0_Sexp_conv[7],v0);
          return [1,[0,_i_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_a,v0$1);
        return [1,[0,_j_,[0,v0$2,0]]]}}
    function compare$3(cmp_a,a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       if(0 === a_001)
        {if(typeof match === "number")
          {if(0 === match)return 0;var switch$1=1}
         else
          if(0 === match[0])var switch$0=0,switch$1=0;else var switch$1=1;
         if(switch$1)return -1}
       else
        if(typeof match === "number")
         {if(1 === match)return 0;var switch$0=1}
        else
         {if(1 === match[0])return 1;var switch$0=0}
      else
       {if(0 === a_001[0])
         {var _r_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];
            return caml_call2(Ppx_compare_lib[4][8],_r_,b_004)}
          return -1}
        var _s_=a_001[1];
        if(typeof match === "number")
         {if(0 !== match)return -1;var switch$0=1}
        else
         {if(0 !== match[0])
           {var b_006=match[1];return caml_call2(cmp_a,_s_,b_006)}
          var switch$0=0}}
      return switch$0?1:1}
    function map_pretty(t,f)
     {if(typeof t !== "number" && 1 === t[0])
       {var x=t[1];return [1,caml_call1(f,x)]}
      return t}
    var Body=[0,sexp_of_t$2,compare$3,map_pretty];
    function sexp_of_t$3(of_a,param)
     {var
       v_body_location=param[4],
       v_extid_location=param[3],
       v_body=param[2],
       v_tag=param[1],
       arg=caml_call1(_f_[2],v_body_location),
       bnds=[0,[1,[0,_k_,[0,arg,0]]],0],
       arg$0=caml_call1(_f_[2],v_extid_location),
       bnds$0=[0,[1,[0,_l_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Body[1],of_a,v_body),
       bnds$1=[0,[1,[0,_m_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7],v_tag),
       bnds$2=[0,[1,[0,_n_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function compare$4(cmp_a,a_007,b_008)
     {if(caml_call2(Ppx_compare_lib[1],a_007,b_008))return 0;
      var
       n=
        caml_call3
         (Ppx_compare_lib[4][12],Ppx_compare_lib[4][8],a_007[1],b_008[1]);
      if(0 === n)
       {var n$0=caml_call3(Body[2],cmp_a,a_007[2],b_008[2]);
        if(0 === n$0)
         {var n$1=caml_call2(_f_[11],a_007[3],b_008[3]);
          return 0 === n$1?caml_call2(_f_[11],a_007[4],b_008[4]):n$1}
        return n$0}
      return n}
    function sexp_of_t$4(v){return sexp_of_t$3(Sexplib0_Sexp_conv[7],v)}
    function compare$5(a_013,b_014)
     {return compare$4(Ppx_compare_lib[4][8],a_013,b_014)}
    var Raw=[0,sexp_of_t$4,compare$5];
    function map_pretty$0(init,f)
     {var _o_=init[4],_p_=init[3],_q_=caml_call2(Body[3],init[2],f);
      return [0,init[1],_q_,_p_,_o_]}
    var
     Expect_test_common_Expectation=
      [0,Body,sexp_of_t$3,compare$4,Raw,map_pretty$0];
    caml_register_global
     (36,Expect_test_common_Expectation,"Expect_test_common__Expectation");
    var Expect_test_common_Std=[0];
    caml_register_global(37,Expect_test_common_Std,"Expect_test_common__Std");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb21tb24uY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
