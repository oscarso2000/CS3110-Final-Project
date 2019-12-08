(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Free_type_variable_Vid=caml_new_string("Free type variable: '%{Vid}"),
     cst_Free_type_variable=caml_new_string("Free type variable: '"),
     cst_apply_incorrect_type_application_arity=
      caml_new_string("apply, incorrect type application arity"),
     cst_top_level=caml_new_string("top-level"),
     cst_impossible_lookup_group_unbound_type_identifier_Tid=
      caml_new_string
       ("impossible: lookup_group, unbound type-identifier: %{Tid}"),
     cst_impossible_lookup_group_unbound_type_identifier=
      caml_new_string("impossible: lookup_group, unbound type-identifier: "),
     cst_Exp=caml_new_string("Exp"),
     cst_exp=caml_new_string("exp"),
     cst_Exp$0=caml_new_string("Exp"),
     cst_exp$0=caml_new_string("exp"),
     cst_annotate$1=caml_new_string("annotate"),
     cst_base$1=caml_new_string("base"),
     cst_tuple$1=caml_new_string("tuple"),
     cst_record$1=caml_new_string("record"),
     cst_variant$1=caml_new_string("variant"),
     cst_poly_variant$1=caml_new_string("poly_variant"),
     cst_application$1=caml_new_string("application"),
     cst_rec_app$1=caml_new_string("rec_app"),
     cst_var$1=caml_new_string("var"),
     cst_annotate=caml_new_string("annotate"),
     cst_Annotate=caml_new_string("Annotate"),
     cst_Application=caml_new_string("Application"),
     cst_Base=caml_new_string("Base"),
     cst_Poly_variant=caml_new_string("Poly_variant"),
     cst_Rec_app=caml_new_string("Rec_app"),
     cst_Record=caml_new_string("Record"),
     cst_Tuple=caml_new_string("Tuple"),
     cst_Var=caml_new_string("Var"),
     cst_Variant=caml_new_string("Variant"),
     cst_application=caml_new_string("application"),
     cst_base=caml_new_string("base"),
     cst_poly_variant=caml_new_string("poly_variant"),
     cst_rec_app=caml_new_string("rec_app"),
     cst_record=caml_new_string("record"),
     cst_tuple=caml_new_string("tuple"),
     cst_var=caml_new_string("var"),
     cst_variant=caml_new_string("variant"),
     cst_annotate$0=caml_new_string("annotate"),
     cst_Annotate$0=caml_new_string("Annotate"),
     cst_Application$0=caml_new_string("Application"),
     cst_Base$0=caml_new_string("Base"),
     cst_Poly_variant$0=caml_new_string("Poly_variant"),
     cst_Rec_app$0=caml_new_string("Rec_app"),
     cst_Record$0=caml_new_string("Record"),
     cst_Tuple$0=caml_new_string("Tuple"),
     cst_Var$0=caml_new_string("Var"),
     cst_Variant$0=caml_new_string("Variant"),
     cst_application$0=caml_new_string("application"),
     cst_base$0=caml_new_string("base"),
     cst_poly_variant$0=caml_new_string("poly_variant"),
     cst_rec_app$0=caml_new_string("rec_app"),
     cst_record$0=caml_new_string("record"),
     cst_tuple$0=caml_new_string("tuple"),
     cst_var$0=caml_new_string("var"),
     cst_variant$0=caml_new_string("variant"),
     cst_some=caml_new_string("some"),
     cst_none=caml_new_string("none"),
     cst_sorted=caml_new_string("sorted"),
     cst_sorted$0=caml_new_string("sorted"),
     cst_Location_s=caml_new_string("%{Location}: %s"),
     tp_loc=caml_new_string("shape/src/bin_shape.ml.Sorted_table.t"),
     tp_loc$0=
      caml_new_string("shape/src/bin_shape.ml.Canonical_exp_constructor.t"),
     tp_loc$1=caml_new_string("shape/src/bin_shape.ml.Canonical_full.Exp1.t0"),
     cst_Bin_shape_lib_Bin_shape_For_typerep_Not_a_tuple=
      caml_new_string("Bin_shape_lib.Bin_shape.For_typerep.Not_a_tuple"),
     Assert_failure=global_data.Assert_failure,
     Base_List=global_data.Base__List,
     Base=global_data.Base,
     Base_Option=global_data.Base__Option,
     Base_Map=global_data.Base__Map,
     Base_Comparator=global_data.Base__Comparator,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Base_String=global_data.Base__String,
     Base_Int=global_data.Base__Int,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Printf=global_data.Base__Printf,
     Md5_lib=global_data.Md5_lib,
     Bin_shape_lib=[0];
    caml_register_global(120,Bin_shape_lib,"Bin_shape_lib");
    var
     sexp_of_t=Base_String[21],
     of_string=Base_String[22],
     to_string=Base_String[23],
     t_of_sexp=Base_String[20],
     sexp_of_t$0=Base_String[21],
     of_string$0=Base_String[22],
     to_string$0=Base_String[23],
     compare=Base_String[30],
     _M_=[0,caml_new_string("shape/src/bin_shape.ml.For_typerep.Not_a_tuple")],
     _N_=[0,caml_new_string("_none_"),0,-1],
     _I_=[0,0],
     _J_=
      [0,
       [11,
        caml_new_string
         ("The shape for an inherited type is not described as a polymorphic-variant: "),
        [2,0,0]],
       caml_new_string
        ("The shape for an inherited type is not described as a polymorphic-variant: %s")],
     _x_=[0,caml_new_string("Annotate")],
     _y_=[0,caml_new_string("Base")],
     _z_=[0,caml_new_string("Record")],
     _A_=[0,caml_new_string("Variant")],
     _B_=[0,caml_new_string("Tuple")],
     _C_=[0,caml_new_string("Poly_variant")],
     _D_=[0,caml_new_string("Var")],
     _E_=[0,caml_new_string("Rec_app")],
     _F_=[0,caml_new_string("Top_app")],
     _w_=[0,0],
     _t_=[0,caml_new_string("members")],
     _u_=[0,caml_new_string("loc")],
     _v_=[0,caml_new_string("gid")],
     _r_=[0,caml_new_string("Constr")],
     _s_=[0,caml_new_string("Inherit")],
     _q_=[0,caml_new_string("Exp")],
     _p_=[0,caml_new_string("...")],
     _g_=[0,caml_new_string("Annotate")],
     _h_=[0,caml_new_string("Base")],
     _i_=[0,caml_new_string("Tuple")],
     _j_=[0,caml_new_string("Record")],
     _k_=[0,caml_new_string("Variant")],
     _l_=[0,caml_new_string("Poly_variant")],
     _m_=[0,caml_new_string("Application")],
     _n_=[0,caml_new_string("Rec_app")],
     _o_=[0,caml_new_string("Var")],
     _f_=[0,caml_new_string("")],
     _e_=
      [0,
       [11,
        caml_new_string
         ("Different shapes for duplicated polymorphic constructor: `"),
        [2,0,0]],
       caml_new_string
        ("Different shapes for duplicated polymorphic constructor: `%s")],
     _d_=[0,17724,0],
     _c_=[0,caml_new_string("sorted")],
     _a_=[11,caml_new_string(": "),[2,0,0]],
     _b_=[0,0];
    function eval_fail(loc,fmt)
     {function _b5_(s)
       {var
         _b6_=
          [0,
           [24,
            _b_,
            function(param,custom_printf_001)
             {return caml_call1(to_string,custom_printf_001)},
            _a_],
           cst_Location_s],
         _b7_=caml_call3(Base_Printf[2],_b6_,loc,s);
        return caml_call1(Base[205],_b7_)}
      return caml_call2(Base_Printf[4],_b5_,fmt)}
    function equal_option(equal,a,b)
     {if(a)
       {if(b){var y=b[1],x=a[1];return caml_call2(equal,x,y)}}
      else
       if(! b)return 1;
      return 0}
    function create(loc,eq,xs$1)
     {function _b3_(param,_b4_)
       {var s2=_b4_[1],s1=param[1];return caml_call2(Base_String[30],s1,s2)}
      var param$0=caml_call2(Base_List[59],xs$1,_b3_);
      if(param$0)
       {var
         xs$0=param$0[2],
         match$0=param$0[1],
         value$0=match$0[2],
         key$0=match$0[1],
         acc$1=[0,[0,key$0,value$0],0],
         acc=acc$1,
         last_key=key$0,
         last_value=value$0,
         param=xs$0;
        for(;;)
         {if(param)
           {var xs=param[2],match=param[1],value=match[2],key=match[1];
            if(! caml_call2(Base_String[26],last_key,key))
             {var
               acc$0=[0,[0,key,value],acc],
               acc=acc$0,
               last_key=key,
               last_value=value,
               param=xs;
              continue}
            if(caml_call2(eq,last_value,value)){var param=xs;continue}
            var match$1=[0,-1062743954,key]}
          else
           var match$1=[0,17724,caml_call1(Base_List[35],acc)];
          break}}
      else
       var match$1=_d_;
      if(17724 <= match$1[1]){var sorted=match$1[2];return [0,sorted]}
      var s=match$1[2];
      return caml_call2(eval_fail(loc,_e_),s,0)}
    function map(t,f)
     {function _b2_(param)
       {var v=param[2],k=param[1];return [0,k,caml_call1(f,v)]}
      return [0,caml_call2(Base_List[72],t[1],_b2_)]}
    var
     compare$0=Md5_lib[1],
     to_binary=Md5_lib[3],
     to_hex=Md5_lib[6],
     of_hex_exn=Md5_lib[7],
     string=Md5_lib[8];
    function to_md5(t){return t}
    function of_md5(t){return t}
    function sexp_of_t$1(t)
     {var _b1_=caml_call1(to_hex,t);return caml_call1(Base[153],_b1_)}
    function t_of_sexp$0(s)
     {return caml_call1(of_hex_exn,caml_call1(Base[152],s))}
    function uuid(u){return caml_call1(string,caml_call1(to_string$0,u))}
    function int$0(x){return caml_call1(string,caml_call1(Base_Int[10],x))}
    function pair(x,y)
     {var _bZ_=caml_call1(to_binary,y),_b0_=caml_call1(to_binary,x);
      return caml_call1(string,caml_call2(Base[202],_b0_,_bZ_))}
    function list(l)
     {var _bY_=caml_call2(Base_List[72],l,to_binary);
      return caml_call1(string,caml_call2(Base_String[48],_f_,_bY_))}
    function constructor(s,l)
     {var _bX_=caml_call1(to_binary,list(l));
      return caml_call1(string,caml_call2(Base[202],s,_bX_))}
    function sexp_of_t$2(of_a,param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$0,v0$0),
          v1$0=caml_call1(of_a,v1);
         return [1,[0,_g_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$0,v0$2),
          v1$2=caml_call2(Base[132],of_a,v1$1);
         return [1,[0,_h_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var v0$4=param[1],v0$5=caml_call2(Base[132],of_a,v0$4);
         return [1,[0,_i_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          _bV_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[153],v0),
              v1$0=caml_call1(of_a,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$7=caml_call2(Base[132],_bV_,v0$6);
         return [1,[0,_j_,[0,v0$7,0]]];
        case 4:
         var
          v0$8=param[1],
          _bW_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[153],v0),
              v1$0=caml_call2(Base[132],of_a,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$9=caml_call2(Base[132],_bW_,v0$8);
         return [1,[0,_k_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          of_a$0=caml_call1(Base[143],of_a),
          v_sorted=v0$10[1],
          bnds=0,
          _bU_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[153],v0),
              v1$0=caml_call1(of_a$0,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          arg=caml_call2(Base[132],_bU_,v_sorted),
          bnds$0=[0,[1,[0,_c_,[0,arg,0]]],bnds],
          v0=[1,bnds$0];
         return [1,[0,_l_,[0,v0,0]]];
        case 6:
         var
          v1$3=param[2],
          v0$11=param[1],
          v0$12=caml_call1(of_a,v0$11),
          v1$4=caml_call2(Base[132],of_a,v1$3);
         return [1,[0,_m_,[0,v0$12,[0,v1$4,0]]]];
        case 7:
         var
          v1$5=param[2],
          v0$13=param[1],
          v0$14=caml_call1(Base[115],v0$13),
          v1$6=caml_call2(Base[132],of_a,v1$5);
         return [1,[0,_n_,[0,v0$14,[0,v1$6,0]]]];
        default:
         var v0$15=param[1],v0$16=caml_call1(Base[115],v0$15);
         return [1,[0,_o_,[0,v0$16,0]]]}}
    function map$0(x,f)
     {switch(x[0])
       {case 0:var x$0=x[2],u=x[1];return [0,u,caml_call1(f,x$0)];
        case 1:var xs=x[2],s=x[1];return [1,s,caml_call2(Base_List[72],xs,f)];
        case 2:var xs$0=x[1];return [2,caml_call2(Base_List[72],xs$0,f)];
        case 3:
         var
          l=x[1],
          _bP_=
           function(param)
            {var x=param[2],s=param[1];return [0,s,caml_call1(f,x)]};
         return [3,caml_call2(Base_List[72],l,_bP_)];
        case 4:
         var
          l$0=x[1],
          _bQ_=
           function(param)
            {var xs=param[2],s=param[1];
             return [0,s,caml_call2(Base_List[72],xs,f)]};
         return [4,caml_call2(Base_List[72],l$0,_bQ_)];
        case 5:
         var t=x[1],_bR_=Base_Option[29];
         return [5,map(t,function(_bT_){return caml_call2(_bR_,_bT_,f)})];
        case 6:
         var l$1=x[2],x$1=x[1],_bS_=caml_call2(Base_List[72],l$1,f);
         return [6,caml_call1(f,x$1),_bS_];
        case 7:
         var l$2=x[2],t$0=x[1];return [7,t$0,caml_call2(Base_List[72],l$2,f)];
        default:var v=x[1];return [8,v]}}
    function to_string$1(t)
     {var _bO_=sexp_of_t$2(function(param){return _p_},t);
      return caml_call1(Base[84][15],_bO_)}
    function digest_layer(param)
     {switch(param[0])
       {case 0:
         var x=param[2],u=param[1];
         return constructor(cst_annotate$1,[0,uuid(u),[0,x,0]]);
        case 1:
         var l=param[2],u$0=param[1],_bE_=[0,list(l),0];
         return constructor(cst_base$1,[0,uuid(u$0),_bE_]);
        case 2:
         var l$0=param[1];return constructor(cst_tuple$1,[0,list(l$0),0]);
        case 3:
         var
          l$1=param[1],
          _bF_=0,
          _bG_=
           function(param)
            {var t=param[2],s=param[1];return pair(caml_call1(string,s),t)};
         return constructor
                 (cst_record$1,
                  [0,list(caml_call2(Base_List[72],l$1,_bG_)),_bF_]);
        case 4:
         var
          l$2=param[1],
          _bH_=0,
          _bI_=
           function(param)
            {var l=param[2],s=param[1],_bN_=list(l);
             return pair(caml_call1(string,s),_bN_)};
         return constructor
                 (cst_variant$1,
                  [0,list(caml_call2(Base_List[72],l$2,_bI_)),_bH_]);
        case 5:
         var
          table=param[1],
          _bJ_=0,
          _bK_=
           function(param)
            {var y=param[2],x$0=param[1];
             if(y)
              var x=y[1],_bM_=constructor(cst_some,[0,x,0]);
             else
              var _bM_=constructor(cst_none,0);
             return pair(caml_call1(string,x$0),_bM_)};
         return constructor
                 (cst_poly_variant$1,
                  [0,list(caml_call2(Base_List[72],table[1],_bK_)),_bJ_]);
        case 6:
         var l$3=param[2],x$0=param[1];
         return constructor(cst_application$1,[0,x$0,[0,list(l$3),0]]);
        case 7:
         var l$4=param[2],n=param[1],_bL_=[0,list(l$4),0];
         return constructor(cst_rec_app$1,[0,int$0(n),_bL_]);
        default:
         var n$0=param[1];return constructor(cst_var$1,[0,int$0(n$0),0])}}
    function to_digest(param){var x=param[1];return x}
    function to_digest$0(x)
     {switch(x[0])
       {case 0:var x$0=x[1];return digest_layer([5,x$0]);
        case 1:var match=x[1],x$1=match[2];return x$1;
        default:var x$2=x[1];return x$2}}
    function equal(x,y)
     {var _bC_=to_digest$0(y),_bD_=caml_call2(compare$0,to_digest$0(x),_bC_);
      return caml_call2(Base[187],_bD_,0)}
    function opaque(x){return [2,to_digest$0(x)]}
    function create$0(x)
     {var x$0=map$0(x,to_digest$0),desc=to_string$1(x$0);
      switch(x$0[0])
       {case 0:return [1,[0,desc,digest_layer(x$0)]];
        case 1:return [1,[0,desc,digest_layer(x$0)]];
        case 5:var l=x$0[1];return [0,l];
        case 6:return [1,[0,desc,digest_layer(x$0)]];
        case 7:return [1,[0,desc,digest_layer(x$0)]];
        default:return [1,[0,desc,digest_layer(x$0)]]}}
    function var$0(x){return create$0([8,x])}
    function apply(def,l){return create$0([6,def,l])}
    function recurse(tid,l){return create$0([7,tid,l])}
    function get_poly_variant(x)
     {if(1 === x[0]){var match=x[1],desc=match[1];return [1,desc]}
      var l=x[1],_bz_=Base_Option[29];
      function _bA_(x){return [2,x]}
      return [0,map(l,function(_bB_){return caml_call2(_bz_,_bB_,_bA_)})]}
    var Def=[0];
    function annotate(u,x){return create$0([0,u,x])}
    function basetype(u,l){return create$0([1,u,l])}
    function tuple(l){return create$0([2,l])}
    function poly_variant(loc,l)
     {return create$0
              ([5,
                create
                 (loc,
                  function(_bx_,_by_){return equal_option(equal,_bx_,_by_)},
                  l)])}
    function var$1(x){return create$0([8,x])}
    function apply$0(x,l){return create$0([6,x,l])}
    function recurse$0(t,l){return create$0([7,t,l])}
    function define(x){return x}
    function record(l){return create$0([3,l])}
    function variant(l){return create$0([4,l])}
    function create$1(e){return [0,to_digest$0(e)]}
    var
     Canonical_digest=
      [0,
       to_digest,
       [0,var$0,recurse,apply,opaque,get_poly_variant],
       Def,
       [0,
        annotate,
        basetype,
        tuple,
        poly_variant,
        var$1,
        recurse$0,
        apply$0,
        define,
        record,
        variant,
        create$1]];
    function cmp_a$0(counter,a_064,b_065)
     {if(caml_call2(Ppx_compare_lib[1],a_064,b_065))return 0;
      var b_067=b_065[1],a_066=a_064[1];
      if(caml_call2(Ppx_compare_lib[1],a_066,b_067))return 0;
      switch(a_066[0])
       {case 0:
         var _bi_=a_066[2],_bj_=a_066[1];
         if(0 === b_067[0])
          {var b_015=b_067[2],b_013=b_067[1],n=caml_call2(compare,_bj_,b_013);
           if(0 === n)
            {if(counter < 50)
              {var counter$0=counter + 1 | 0;
               return cmp_a$0(counter$0,_bi_,b_015)}
             return caml_trampoline_return(cmp_a$0,[0,_bi_,b_015])}
           return n}
         return -1;
        case 1:
         var _bk_=a_066[2],_bl_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:
            var
             b_019=b_067[2],
             b_017=b_067[1],
             n$0=caml_call2(compare,_bl_,b_017);
            return 0 === n$0?caml_call3(Base[128],cmp_a,_bk_,b_019):n$0;
           default:return -1}
         break;
        case 2:
         var _bm_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:
            var b_023=b_067[1];return caml_call3(Base[128],cmp_a,_bm_,b_023);
           default:return -1}
         break;
        case 3:
         var _bn_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:
            var
             b_027=b_067[1],
             _bo_=
              function(a_028,b_029)
               {var
                 t_031=a_028[2],
                 t_030=a_028[1],
                 t_033=b_029[2],
                 t_032=b_029[1],
                 n=caml_call2(Base[148],t_030,t_032);
                return 0 === n?cmp_a(t_031,t_033):n};
            return caml_call3(Base[128],_bo_,_bn_,b_027);
           default:return -1}
         break;
        case 4:
         var _bp_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:
            var
             b_035=b_067[1],
             _bq_=
              function(a_036,b_037)
               {var
                 t_039=a_036[2],
                 t_038=a_036[1],
                 t_041=b_037[2],
                 t_040=b_037[1],
                 n=caml_call2(Base[148],t_038,t_040);
                return 0 === n?caml_call3(Base[128],cmp_a,t_039,t_041):n};
            return caml_call3(Base[128],_bq_,_bp_,b_035);
           default:return -1}
         break;
        case 5:
         var _br_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:
            var b_045=b_067[1];
            if(caml_call2(Ppx_compare_lib[1],_br_,b_045))return 0;
            var
             _bf_=b_045[1],
             _bg_=_br_[1],
             _bh_=
              function(a_004,b_005)
               {var
                 t_007=a_004[2],
                 t_006=a_004[1],
                 t_009=b_005[2],
                 t_008=b_005[1],
                 n=caml_call2(Base[148],t_006,t_008);
                return 0 === n?caml_call3(Base[139],cmp_a,t_007,t_009):n};
            return caml_call3(Base[128],_bh_,_bg_,_bf_);
           default:return -1}
         break;
        case 6:
         var _bs_=a_066[2],_bt_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:var switch$0=5;break;
           case 6:
            var b_053=b_067[2],b_051=b_067[1],n$1=cmp_a(_bt_,b_051);
            return 0 === n$1?caml_call3(Base[128],cmp_a,_bs_,b_053):n$1;
           default:return -1}
         break;
        case 7:
         var _bu_=a_066[2],_bv_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:var switch$0=5;break;
           case 6:var switch$0=6;break;
           case 7:
            var
             b_059=b_067[2],
             b_057=b_067[1],
             n$2=caml_call2(Base[110],_bv_,b_057);
            return 0 === n$2?caml_call3(Base[128],cmp_a,_bu_,b_059):n$2;
           default:return -1}
         break;
        default:
         var _bw_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:var switch$0=5;break;
           case 6:var switch$0=6;break;
           case 7:return 1;
           default:var b_063=b_067[1];return caml_call2(Base[110],_bw_,b_063)}}
      switch(switch$0)
       {case 0:return 1;
        case 1:return 1;
        case 2:return 1;
        case 3:return 1;
        case 4:return 1;
        case 5:return 1;
        default:return 1}}
    function cmp_a(a_064,b_065)
     {return caml_trampoline(cmp_a$0(0,a_064,b_065))}
    var of_a=function _be_(_bd_){return _be_.fun(_bd_)};
    runtime.caml_update_dummy
     (of_a,
      function(sexp)
       {if(0 === sexp[0])
         {var
           _a5_=sexp[1],
           switch$0=
            caml_string_notequal(_a5_,cst_Exp)
             ?caml_string_notequal(_a5_,cst_exp)?1:0
             :0;
          if(! switch$0)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)}
        else
         {var _a6_=sexp[1];
          if(! _a6_)
           return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
          var _a7_=_a6_[1];
          if(0 !== _a7_[0])
           return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
          var
           _a8_=_a7_[1],
           switch$1=
            caml_string_notequal(_a8_,cst_Exp$0)
             ?caml_string_notequal(_a8_,cst_exp$0)?1:0
             :0;
          if(! switch$1)
           {var sexp_args$8=_a6_[2];
            if(sexp_args$8)
             if(! sexp_args$8[2])
              {var v0$17=sexp_args$8[1];
               if(0 === v0$17[0])
                {var
                  _aT_=v0$17[1],
                  _aU_=caml_string_compare(_aT_,cst_annotate);
                 if(0 <= _aU_)
                  if(0 < _aU_)
                   if(caml_string_notequal(_aT_,cst_application))
                    if(caml_string_notequal(_aT_,cst_base))
                     if(caml_string_notequal(_aT_,cst_poly_variant))
                      if(caml_string_notequal(_aT_,cst_rec_app))
                       if(caml_string_notequal(_aT_,cst_record))
                        if(caml_string_notequal(_aT_,cst_tuple))
                         if(caml_string_notequal(_aT_,cst_var))
                          if(caml_string_notequal(_aT_,cst_variant))
                           var switch$2=0,switch$3=0;
                          else
                           var switch$3=5;
                         else
                          var switch$3=9;
                        else
                         var switch$3=3;
                       else
                        var switch$3=4;
                      else
                       var switch$3=8;
                     else
                      var switch$3=6;
                    else
                     var switch$3=2;
                   else
                    var switch$3=7;
                  else
                   var switch$3=1;
                 else
                  if(caml_string_notequal(_aT_,cst_Annotate))
                   if(caml_string_notequal(_aT_,cst_Application))
                    if(caml_string_notequal(_aT_,cst_Base))
                     if(caml_string_notequal(_aT_,cst_Poly_variant))
                      if(caml_string_notequal(_aT_,cst_Rec_app))
                       if(caml_string_notequal(_aT_,cst_Record))
                        if(caml_string_notequal(_aT_,cst_Tuple))
                         if(caml_string_notequal(_aT_,cst_Var))
                          if(caml_string_notequal(_aT_,cst_Variant))
                           var switch$2=0,switch$3=0;
                          else
                           var switch$3=5;
                         else
                          var switch$3=9;
                        else
                         var switch$3=3;
                       else
                        var switch$3=4;
                      else
                       var switch$3=8;
                     else
                      var switch$3=6;
                    else
                     var switch$3=2;
                   else
                    var switch$3=7;
                  else
                   var switch$3=1;
                 switch(switch$3)
                  {case 0:break;
                   case 1:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 2:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 3:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 4:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 5:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 6:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 7:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 8:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   default:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1}}
               else
                {var _aV_=v0$17[1];
                 if(_aV_)
                  {var _aW_=_aV_[1];
                   if(0 === _aW_[0])
                    {var
                      _aX_=_aW_[1],
                      _aY_=caml_string_compare(_aX_,cst_annotate$0);
                     if(0 <= _aY_)
                      if(0 < _aY_)
                       if(caml_string_notequal(_aX_,cst_application$0))
                        if(caml_string_notequal(_aX_,cst_base$0))
                         if(caml_string_notequal(_aX_,cst_poly_variant$0))
                          if(caml_string_notequal(_aX_,cst_rec_app$0))
                           if(caml_string_notequal(_aX_,cst_record$0))
                            if(caml_string_notequal(_aX_,cst_tuple$0))
                             if(caml_string_notequal(_aX_,cst_var$0))
                              if(caml_string_notequal(_aX_,cst_variant$0))
                               var switch$2=0,switch$4=0;
                              else
                               var switch$4=5;
                             else
                              var switch$4=9;
                            else
                             var switch$4=3;
                           else
                            var switch$4=4;
                          else
                           var switch$4=8;
                         else
                          var switch$4=6;
                        else
                         var switch$4=2;
                       else
                        var switch$4=7;
                      else
                       var switch$4=1;
                     else
                      if(caml_string_notequal(_aX_,cst_Annotate$0))
                       if(caml_string_notequal(_aX_,cst_Application$0))
                        if(caml_string_notequal(_aX_,cst_Base$0))
                         if(caml_string_notequal(_aX_,cst_Poly_variant$0))
                          if(caml_string_notequal(_aX_,cst_Rec_app$0))
                           if(caml_string_notequal(_aX_,cst_Record$0))
                            if(caml_string_notequal(_aX_,cst_Tuple$0))
                             if(caml_string_notequal(_aX_,cst_Var$0))
                              if(caml_string_notequal(_aX_,cst_Variant$0))
                               var switch$2=0,switch$4=0;
                              else
                               var switch$4=5;
                             else
                              var switch$4=9;
                            else
                             var switch$4=3;
                           else
                            var switch$4=4;
                          else
                           var switch$4=8;
                         else
                          var switch$4=6;
                        else
                         var switch$4=2;
                       else
                        var switch$4=7;
                      else
                       var switch$4=1;
                     switch(switch$4)
                      {case 0:break;
                       case 1:
                        var sexp_args$7=_aV_[2];
                        if(sexp_args$7)
                         {var _a4_=sexp_args$7[2];
                          if(_a4_)
                           if(_a4_[2])
                            var switch$5=1;
                           else
                            var
                             v1$5=_a4_[1],
                             v0$15=sexp_args$7[1],
                             v0$16=caml_call1(t_of_sexp,v0$15),
                             v1$6=caml_call1(of_a,v1$5),
                             v0$18=[0,v0$16,v1$6],
                             switch$2=1,
                             switch$5=0;
                          else
                           var switch$5=1}
                        else
                         var switch$5=1;
                        if(switch$5)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 2:
                        var sexp_args$5=_aV_[2];
                        if(sexp_args$5)
                         {var _a2_=sexp_args$5[2];
                          if(_a2_)
                           if(_a2_[2])
                            var switch$6=1;
                           else
                            var
                             v1$1=_a2_[1],
                             v0$11=sexp_args$5[1],
                             v0$12=caml_call1(t_of_sexp,v0$11),
                             v1$2=caml_call2(Base[131],of_a,v1$1),
                             v0$18=[1,v0$12,v1$2],
                             switch$2=1,
                             switch$6=0;
                          else
                           var switch$6=1}
                        else
                         var switch$6=1;
                        if(switch$6)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 3:
                        var sexp_args$1=_aV_[2];
                        if(sexp_args$1)
                         if(sexp_args$1[2])
                          var switch$7=1;
                         else
                          var
                           v0$3=sexp_args$1[1],
                           v0$4=caml_call2(Base[131],of_a,v0$3),
                           v0$18=[2,v0$4],
                           switch$2=1,
                           switch$7=0;
                        else
                         var switch$7=1;
                        if(switch$7)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 4:
                        var sexp_args$2=_aV_[2];
                        if(sexp_args$2)
                         if(sexp_args$2[2])
                          var switch$8=1;
                         else
                          var
                           v0$5=sexp_args$2[1],
                           _a0_=
                            function(sexp)
                             {if(1 === sexp[0])
                               {var _bb_=sexp[1];
                                if(_bb_)
                                 {var _bc_=_bb_[2];
                                  if(_bc_)
                                   if(! _bc_[2])
                                    {var
                                      v1=_bc_[1],
                                      v0=_bb_[1],
                                      v0$0=caml_call1(Base[152],v0),
                                      v1$0=caml_call1(of_a,v1);
                                     return [0,v0$0,v1$0]}}}
                              return caml_call3
                                      (Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)},
                           v0$6=caml_call2(Base[131],_a0_,v0$5),
                           v0$18=[3,v0$6],
                           switch$2=1,
                           switch$8=0;
                        else
                         var switch$8=1;
                        if(switch$8)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 5:
                        var sexp_args=_aV_[2];
                        if(sexp_args)
                         if(sexp_args[2])
                          var switch$9=1;
                         else
                          var
                           v0=sexp_args[1],
                           _aZ_=
                            function(sexp)
                             {if(1 === sexp[0])
                               {var _a$_=sexp[1];
                                if(_a$_)
                                 {var _ba_=_a$_[2];
                                  if(_ba_)
                                   if(! _ba_[2])
                                    {var
                                      v1=_ba_[1],
                                      v0=_a$_[1],
                                      v0$0=caml_call1(Base[152],v0),
                                      v1$0=caml_call2(Base[131],of_a,v1);
                                     return [0,v0$0,v1$0]}}}
                              return caml_call3
                                      (Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)},
                           v0$0=caml_call2(Base[131],_aZ_,v0),
                           v0$18=[4,v0$0],
                           switch$2=1,
                           switch$9=0;
                        else
                         var switch$9=1;
                        if(switch$9)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 6:
                        var sexp_args$4=_aV_[2];
                        if(sexp_args$4)
                         if(sexp_args$4[2])
                          var switch$10=1;
                         else
                          {var v0$9=sexp_args$4[1],of_a$0=caml_call1(Base[142],of_a);
                           if(0 === v0$9[0])
                            var
                             v0$10=
                              caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,v0$9);
                           else
                            {var
                              field_sexps=v0$9[1],
                              sorted_field=[0,0],
                              duplicates=[0,0],
                              extra=[0,0],
                              param=field_sexps;
                             for(;;)
                              {if(param)
                                {var _aM_=param[1];
                                 if(1 === _aM_[0])
                                  {var _aN_=_aM_[1];
                                   if(_aN_)
                                    {var _aO_=_aN_[1];
                                     if(0 === _aO_[0])
                                      {var _aP_=_aN_[2],_aQ_=_aO_[1];
                                       if(! _aP_)
                                        {var tail$0=param[2];
                                         if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_aQ_,extra[1]];
                                         var param=tail$0;
                                         continue}
                                       if(! _aP_[2])
                                        {var tail=param[2],field_sexp=_aP_[1];
                                         if(caml_string_notequal(_aQ_,cst_sorted))
                                          {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_aQ_,extra[1]]}
                                         else
                                          if(sorted_field[1])
                                           duplicates[1] = [0,_aQ_,duplicates[1]];
                                          else
                                           {var
                                             _aR_=
                                              function(sexp)
                                               {if(1 === sexp[0])
                                                 {var _a9_=sexp[1];
                                                  if(_a9_)
                                                   {var _a__=_a9_[2];
                                                    if(_a__)
                                                     if(! _a__[2])
                                                      {var
                                                        v1=_a__[1],
                                                        v0=_a9_[1],
                                                        v0$0=caml_call1(Base[152],v0),
                                                        v1$0=caml_call1(of_a$0,v1);
                                                       return [0,v0$0,v1$0]}}}
                                                return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc,2,sexp)},
                                             fvalue=caml_call2(Base[131],_aR_,field_sexp);
                                            sorted_field[1] = [0,fvalue]}
                                         var param=tail;
                                         continue}}}}
                                 caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_aM_)}
                               if(duplicates[1])
                                var
                                 v0$10=
                                  caml_call3
                                   (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],v0$9);
                               else
                                if(extra[1])
                                 var
                                  v0$10=
                                   caml_call3
                                    (Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],v0$9);
                                else
                                 {var _aS_=sorted_field[1];
                                  if(_aS_)
                                   var sorted_value=_aS_[1],v0$10=[0,sorted_value];
                                  else
                                   var
                                    v0$10=
                                     caml_call3
                                      (Sexplib0_Sexp_conv_error[14],
                                       tp_loc,
                                       v0$9,
                                       [0,[0,0 === sorted_field[1]?1:0,cst_sorted$0],0])}
                               break}}
                           var v0$18=[5,v0$10],switch$2=1,switch$10=0}
                        else
                         var switch$10=1;
                        if(switch$10)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 7:
                        var sexp_args$6=_aV_[2];
                        if(sexp_args$6)
                         {var _a3_=sexp_args$6[2];
                          if(_a3_)
                           if(_a3_[2])
                            var switch$11=1;
                           else
                            var
                             v1$3=_a3_[1],
                             v0$13=sexp_args$6[1],
                             v0$14=caml_call1(of_a,v0$13),
                             v1$4=caml_call2(Base[131],of_a,v1$3),
                             v0$18=[6,v0$14,v1$4],
                             switch$2=1,
                             switch$11=0;
                          else
                           var switch$11=1}
                        else
                         var switch$11=1;
                        if(switch$11)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 8:
                        var sexp_args$3=_aV_[2];
                        if(sexp_args$3)
                         {var _a1_=sexp_args$3[2];
                          if(_a1_)
                           if(_a1_[2])
                            var switch$12=1;
                           else
                            var
                             v1=_a1_[1],
                             v0$7=sexp_args$3[1],
                             v0$8=caml_call1(Base[114],v0$7),
                             v1$0=caml_call2(Base[131],of_a,v1),
                             v0$18=[7,v0$8,v1$0],
                             switch$2=1,
                             switch$12=0;
                          else
                           var switch$12=1}
                        else
                         var switch$12=1;
                        if(switch$12)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       default:
                        var sexp_args$0=_aV_[2];
                        if(sexp_args$0)
                         if(sexp_args$0[2])
                          var switch$13=1;
                         else
                          var
                           v0$1=sexp_args$0[1],
                           v0$2=caml_call1(Base[114],v0$1),
                           v0$18=[8,v0$2],
                           switch$2=1,
                           switch$13=0;
                        else
                         var switch$13=1;
                        if(switch$13)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1}}
                   else
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,v0$17),
                     switch$2=1}
                 else
                  var
                   v0$18=caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,v0$17),
                   switch$2=1}
               if(! switch$2)
                var
                 v0$18=
                  caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,v0$17);
               return [0,v0$18]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_a8_,sexp)}}
        return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)});
    function sexp_of_t$3(param)
     {var v0=param[1],v0$0=sexp_of_t$2(sexp_of_t$3,v0);
      return [1,[0,_q_,[0,v0$0,0]]]}
    function equal_t0(x,y)
     {var _aL_=cmp_a(x,y);return caml_call2(Base[187],_aL_,0)}
    function var$2(x){return [0,[8,x]]}
    function apply$1(d,xs){return [0,[6,d,xs]]}
    function recurse$1(r,xs){return [0,[7,r,xs]]}
    function get_poly_variant$0(param)
     {var _aK_=param[1];
      if(5 === _aK_[0]){var tab=_aK_[1];return [0,tab]}
      return [1,to_string$1(_aK_)]}
    function opaque$0(t){return t}
    function to_digest$1(param)
     {var e=param[1];return digest_layer(map$0(e,to_digest$1))}
    function to_digest$2(e){return to_digest$1(e)}
    function annotate$0(u,x){return [0,[0,u,x]]}
    function basetype$0(u,xs){return [0,[1,u,xs]]}
    function tuple$0(xs){return [0,[2,xs]]}
    function poly_variant$0(loc,xs)
     {return [0,
              [5,
               create
                (loc,
                 function(_aI_,_aJ_){return equal_option(equal_t0,_aI_,_aJ_)},
                 xs)]]}
    function var$3(n){return [0,[8,n]]}
    function recurse$2(r,xs){return recurse$1(r,xs)}
    function apply$2(d,xs){return apply$1(d,xs)}
    function define$0(x){return x}
    function record$0(xs){return [0,[3,xs]]}
    function variant$0(xs){return [0,[4,xs]]}
    function create$2(exp){return exp}
    var
     Create=
      [0,
       annotate$0,
       basetype$0,
       tuple$0,
       poly_variant$0,
       var$3,
       recurse$2,
       apply$2,
       define$0,
       record$0,
       variant$0,
       create$2];
    function to_string_hum(t)
     {var _aH_=sexp_of_t$3(t);return caml_call2(Base[84][13],0,_aH_)}
    var
     Def$0=[0],
     Exp1=[0,var$2,recurse$1,apply$1,opaque$0,get_poly_variant$0],
     sexp_of_t$4=Base_String[21],
     of_string$1=Base_String[22],
     to_string$2=Base_String[23],
     symbol=Base_String[26],
     compare$1=Base_String[30],
     equal$0=Base_String[104],
     sexp_of_t$5=Base_String[21],
     of_string$2=Base_String[22],
     to_string$3=Base_String[23],
     comparator=Base_String[38],
     compare$2=Base[110],
     sexp_of_t$6=Base[115],
     r=[0,0];
    function group(loc,trips)
     {var u=r[1];
      r[1] = caml_call2(Base[165],1,u);
      function _aG_(param)
       {var t=param[3],vs=param[2],x=param[1];return [0,x,[0,vs,t]]}
      var members=caml_call2(Base_List[72],trips,_aG_);
      return [0,u,loc,members]}
    function lookup(g,tid)
     {var match=caml_call3(Base_List[122][4],g[3],symbol,tid);
      if(match){var scheme=match[1];return scheme}
      var
       _aD_=0,
       _aE_=0,
       _aF_=
        [0,
         [11,
          cst_impossible_lookup_group_unbound_type_identifier,
          [24,
           _w_,
           function(param,custom_printf_108)
            {return caml_call1(to_string$2,custom_printf_108)},
           _aE_]],
         cst_impossible_lookup_group_unbound_type_identifier_Tid];
      return caml_call2(eval_fail(g[2],_aF_),tid,_aD_)}
    function annotate$1(v0,v1){return [0,v0,v1]}
    function basetype$1(v0,v1){return [1,v0,v1]}
    function record$1(v0){return [2,v0]}
    function variant$1(v0){return [3,v0]}
    function tuple$1(v0){return [4,v0]}
    function rec_app(v0,v1){return [7,v0,v1]}
    function top_app(v0,v1,v2){return [8,v0,v1,v2]}
    function of_a$0(param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$0,v0$0),
          v1$0=of_a$0(v1);
         return [1,[0,_x_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$0,v0$2),
          v1$2=caml_call2(Base[132],of_a$0,v1$1);
         return [1,[0,_y_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var
          v0$4=param[1],
          _aA_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[153],v0),
              v1$0=of_a$0(v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$5=caml_call2(Base[132],_aA_,v0$4);
         return [1,[0,_z_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          _aB_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[153],v0),
              v1$0=caml_call2(Base[132],of_a$0,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$7=caml_call2(Base[132],_aB_,v0$6);
         return [1,[0,_A_,[0,v0$7,0]]];
        case 4:
         var v0$8=param[1],v0$9=caml_call2(Base[132],of_a$0,v0$8);
         return [1,[0,_B_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          v1$3=v0$10[2],
          v0$11=v0$10[1],
          v0$12=caml_call1(sexp_of_t,v0$11),
          _aC_=
           function(param)
            {if(-59723313 <= param[1])
              {var
                v0=param[2],
                v1=v0[2],
                v0$0=v0[1],
                v0$1=caml_call1(Base[153],v0$0),
                v1$0=caml_call2(Base[143],of_a$0,v1);
               return [1,[0,_r_,[0,[1,[0,v0$1,[0,v1$0,0]]],0]]]}
             var
              v0$2=param[2],
              v1$1=v0$2[2],
              v0$3=v0$2[1],
              v0$4=caml_call1(sexp_of_t,v0$3),
              v1$2=of_a$0(v1$1);
             return [1,[0,_s_,[0,[1,[0,v0$4,[0,v1$2,0]]],0]]]},
          v1$4=caml_call2(Base[132],_aC_,v1$3),
          v0$13=[1,[0,v0$12,[0,v1$4,0]]];
         return [1,[0,_C_,[0,v0$13,0]]];
        case 6:
         var
          v0$14=param[1],
          v1$5=v0$14[2],
          v0$15=v0$14[1],
          v0$16=caml_call1(sexp_of_t,v0$15),
          v1$6=caml_call1(sexp_of_t$5,v1$5),
          v0$17=[1,[0,v0$16,[0,v1$6,0]]];
         return [1,[0,_D_,[0,v0$17,0]]];
        case 7:
         var
          v1$7=param[2],
          v0$18=param[1],
          v0$19=caml_call1(sexp_of_t$4,v0$18),
          v1$8=caml_call2(Base[132],of_a$0,v1$7);
         return [1,[0,_E_,[0,v0$19,[0,v1$8,0]]]];
        default:
         var
          v2=param[3],
          v1$9=param[2],
          v0$20=param[1],
          v_members=v0$20[3],
          v_loc=v0$20[2],
          v_gid=v0$20[1],
          bnds=0,
          _az_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(sexp_of_t$4,v0),
              v1$0=v1[2],
              v0$1=v1[1],
              v0$2=caml_call2(Base[132],sexp_of_t$5,v0$1),
              v1$1=of_a$0(v1$0),
              v1$2=[1,[0,v0$2,[0,v1$1,0]]];
             return [1,[0,v0$0,[0,v1$2,0]]]},
          arg=caml_call2(Base[132],_az_,v_members),
          bnds$0=[0,[1,[0,_t_,[0,arg,0]]],bnds],
          arg$0=caml_call1(sexp_of_t,v_loc),
          bnds$1=[0,[1,[0,_u_,[0,arg$0,0]]],bnds$0],
          arg$1=caml_call1(sexp_of_t$6,v_gid),
          bnds$2=[0,[1,[0,_v_,[0,arg$1,0]]],bnds$1],
          v0=[1,bnds$2],
          v1$10=caml_call1(sexp_of_t$4,v1$9),
          v2$0=caml_call2(Base[132],of_a$0,v2);
         return [1,[0,_F_,[0,v0,[0,v1$10,[0,v2$0,0]]]]]}}
    function constr(s,t){return [0,-59723313,[0,s,t]]}
    function inherit(loc,t){return [0,-72987685,[0,loc,t]]}
    function var$4(loc,t){return [6,[0,loc,t]]}
    function poly_variant$1(loc,xs){return [5,[0,loc,xs]]}
    function is_cyclic_0(via_VR,group,tid)
     {var set=[0,0];
      function visited(tid)
       {return caml_call3(Base_List[5],set[1],tid,equal$0)}
      function trav(param)
       {var param$0=param;
        for(;;)
         {switch(param$0[0])
           {case 0:var param$1=param$0[2],param$0=param$1;continue;
            case 1:var ts=param$0[2];break;
            case 2:
             var xs=param$0[1];
             if(via_VR)
              {var _av_=function(param){var t=param[2];return trav(t)};
               return caml_call2(Base_List[8],xs,_av_)}
             return 0;
            case 3:
             var xs$0=param$0[1];
             if(via_VR)
              {var
                _aw_=
                 function(param)
                  {var ts=param[2];return caml_call2(Base_List[8],ts,trav)};
               return caml_call2(Base_List[8],xs$0,_aw_)}
             return 0;
            case 4:var ts=param$0[1];break;
            case 5:
             var
              match=param$0[1],
              cs=match[2],
              _ax_=
               function(param)
                {if(-59723313 <= param[1])
                  {var _ay_=param[2][2];
                   if(_ay_){var t=_ay_[1];return trav(t)}
                   return 0}
                 var match=param[2],t$0=match[2];
                 return trav(t$0)};
             return caml_call2(Base_List[8],cs,_ax_);
            case 6:return 0;
            case 7:
             var ts$0=param$0[2],tid=param$0[1];
             if(! visited(tid)){set[1] = [0,tid,set[1]];trav_tid(tid)}
             return caml_call2(Base_List[8],ts$0,trav);
            default:var ts=param$0[3]}
          return caml_call2(Base_List[8],ts,trav)}}
      function trav_tid(tid)
       {var match=lookup(group,tid),body=match[2];return trav(body)}
      trav_tid(tid);
      var res=visited(tid);
      return res}
    var _G_=1,_H_=0;
    function Evaluation(Canonical)
     {var _P_=Base_List[9],_Q_=caml_call1(Base_Map[5],[0,comparator]);
      function _R_(t,param)
       {var v=param[2],k=param[1];return caml_call3(Base_Map[26],t,k,v)}
      function create(_au_){return caml_call3(_P_,_au_,_Q_,_R_)}
      function lookup$0(t,k){return caml_call2(Base_Map[34],t,k)}
      var Venv=[0,lookup$0,create],Applicand=[0];
      function compare(a_109,b_110)
       {var
         t_112=a_109[2],
         t_111=a_109[1],
         t_114=b_110[2],
         t_113=b_110[1],
         n=caml_call2(compare$2,t_111,t_113);
        return 0 === n?caml_call2(compare$1,t_112,t_114):n}
      function sexp_of_t(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(sexp_of_t$6,v0),
         v1$0=caml_call1(sexp_of_t$4,v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       T=[0,compare,sexp_of_t],
       include=caml_call1(Base_Comparator[4],T),
       comparator$0=include[1];
      function find(t,k){return caml_call2(Base_Map[34],t,k)}
      var empty=caml_call1(Base_Map[5],[0,comparator$0]);
      function extend(t,k,v){return caml_call3(Base_Map[26],t,k,v)}
      var Tenv=[0,find,empty,extend];
      function return$0(x,param,tenv){return x}
      function bind(t,f,depth,tenv)
       {var x=caml_call2(t,depth,tenv);
        return caml_call2(caml_call1(f,x),depth,tenv)}
      function look_env(key,param,tenv)
       {var result=caml_call2(Tenv[1],tenv,key);
        function _at_(param){var x=param[2];return [0,x]}
        return caml_call2(Base_Option[29],result,_at_)}
      function extend_new_tid(key,def_t,depth,tenv)
       {var
         value=[0,-271630457,depth],
         tenv$0=caml_call3(Tenv[3],tenv,key,value);
        return [1,caml_call2(def_t,caml_call2(Base[165],depth,1),tenv$0)]}
      function exec(t){return caml_call2(t,0,Tenv[2])}
      var
       Defining=[0,return$0,bind,look_env,extend_new_tid,exec],
       symbol_bind=Defining[2],
       return$1=Defining[1];
      function sequence_defining(xs,f)
       {function loop(acc_ys,param)
         {if(param)
           {var
             xs=param[2],
             x=param[1],
             _as_=function(y){return loop([0,y,acc_ys],xs)};
            return caml_call2(symbol_bind,caml_call1(f,x),_as_)}
          return caml_call1(return$1,caml_call1(Base_List[35],acc_ys))}
        return loop(0,xs)}
      function _S_(group,venv,t)
       {switch(t[0])
         {case 0:
           var
            t$0=t[2],
            s=t[1],
            _ae_=
             function(v)
              {return caml_call1(return$1,caml_call2(Canonical[4][1],s,v))};
           return caml_call2(symbol_bind,_S_(group,venv,t$0),_ae_);
          case 1:
           var
            ts=t[2],
            s$0=t[1],
            _af_=
             function(vs)
              {return caml_call1(return$1,caml_call2(Canonical[4][2],s$0,vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts),_af_);
          case 2:
           var
            binds=t[1],
            _ag_=
             function(binds)
              {return caml_call1(return$1,caml_call1(Canonical[4][9],binds))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (binds,
                      function(param)
                       {var x=param[2],s=param[1];
                        function _ar_(y){return caml_call1(return$1,[0,s,y])}
                        return caml_call2(symbol_bind,_S_(group,venv,x),_ar_)}),
                    _ag_);
          case 3:
           var
            alts=t[1],
            _ah_=
             function(alts)
              {return caml_call1(return$1,caml_call1(Canonical[4][10],alts))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (alts,
                      function(param)
                       {var xs=param[2],s=param[1];
                        function _aq_(ys){return caml_call1(return$1,[0,s,ys])}
                        return caml_call2(symbol_bind,eval_list(group,venv,xs),_aq_)}),
                    _ah_);
          case 4:
           var
            ts$0=t[1],
            _ai_=
             function(vs)
              {return caml_call1(return$1,caml_call1(Canonical[4][3],vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts$0),_ai_);
          case 5:
           var
            match=t[1],
            cs=match[2],
            loc=match[1],
            _aj_=
             function(xss)
              {var _ap_=caml_call1(Base_List[131],xss);
               return caml_call1
                       (return$1,caml_call2(Canonical[4][4],loc,_ap_))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (cs,
                      function(_ao_){return eval_poly_constr(group,venv,_ao_)}),
                    _aj_);
          case 6:
           var
            match$0=t[1],
            vid=match$0[2],
            loc$0=match$0[1],
            match$1=caml_call2(Venv[1],venv,vid);
           if(match$1){var x=match$1[1];return caml_call1(return$1,x)}
           var _ak_=0,_al_=0;
           return caml_call2
                   (eval_fail
                     (loc$0,
                      [0,
                       [11,
                        cst_Free_type_variable,
                        [24,
                         _I_,
                         function(param,custom_printf_115)
                          {return caml_call1(to_string$3,custom_printf_115)},
                         _al_]],
                       cst_Free_type_variable_Vid]),
                    vid,
                    _ak_);
          case 7:
           var
            args=t[2],
            tid=t[1],
            _am_=function(args){return eval_app(group,tid,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args),_am_);
          default:
           var
            args$0=t[3],
            tid$0=t[2],
            in_group=t[1],
            _an_=function(args){return eval_app(in_group,tid$0,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args$0),_an_)}}
      function eval_list(group,venv,ts)
       {return sequence_defining
                (ts,function(_ad_){return _S_(group,venv,_ad_)})}
      function eval_poly_constr(group,venv,c)
       {if(-59723313 <= c[1])
         {var ___=c[2],_$_=___[2],_aa_=___[1];
          if(_$_)
           {var
             t=_$_[1],
             _ab_=
              function(v)
               {return caml_call1
                        (return$1,[0,[0,_aa_,[0,caml_call1(Canonical[2][4],v)]],0])};
            return caml_call2(symbol_bind,_S_(group,venv,t),_ab_)}
          return caml_call1(return$1,[0,[0,_aa_,0],0])}
        var match=c[2],t$0=match[2],loc=match[1];
        function _ac_(v)
         {var match=caml_call1(Canonical[2][5],v);
          if(0 === match[0])
           {var tab=match[1];return caml_call1(return$1,tab[1])}
          var desc=match[1];
          return caml_call2(eval_fail(loc,_J_),desc,0)}
        return caml_call2(symbol_bind,_S_(group,venv,t$0),_ac_)}
      function eval_definition(group,formals,body)
       {function _X_(i,x){return [0,x,caml_call1(Canonical[2][1],i)]}
        var
         _Y_=caml_call2(Base_List[92],formals,_X_),
         venv=caml_call1(Venv[2],_Y_);
        function _Z_(v)
         {return caml_call1(return$1,caml_call1(Canonical[4][8],v))}
        return caml_call2(symbol_bind,_S_(group,venv,body),_Z_)}
      function eval_app(group,tid,args)
       {var
         gid=group[1],
         match=lookup(group,tid),
         body=match[2],
         formals=match[1];
        switch(body[0])
         {case 2:
          case 3:var record_or_normal_variant=1;break;
          default:var record_or_normal_variant=0}
        var
         cyclic=is_cyclic_0(_G_,group,tid),
         cyclic_no_VR=is_cyclic_0(_H_,group,tid),
         switch$0=record_or_normal_variant?cyclic?1:0:0;
        if(! switch$0)
         if(! cyclic_no_VR)
          {var match$0=caml_call2(Base_List[90],formals,args);
           if(match$0)
            var x=match$0[1],venv=caml_call1(Venv[2],x);
           else
            var
             venv=
              caml_call1(Base[205],cst_apply_incorrect_type_application_arity);
           return _S_(group,venv,body)}
        function _U_(param)
         {if(0 === param[0])
           {var r=param[1];
            return caml_call1(return$1,caml_call2(Canonical[2][2],r,args))}
          var def=param[1];
          return caml_call1(return$1,caml_call2(Canonical[2][3],def,args))}
        function _V_(param)
         {if(param){var recurse=param[1];return caml_call1(return$1,recurse)}
          var _W_=eval_definition(group,formals,body);
          return caml_call2(Defining[4],[0,gid,tid],_W_)}
        return caml_call2
                (symbol_bind,
                 caml_call2
                  (symbol_bind,caml_call1(Defining[3],[0,gid,tid]),_V_),
                 _U_)}
      function eval$0(t)
       {var
         group$0=group(caml_call1(of_string,cst_top_level),0),
         venv=caml_call1(Venv[2],0),
         _T_=_S_(group$0,venv,t),
         v=caml_call1(Defining[5],_T_);
        return caml_call1(Canonical[4][11],v)}
      return [0,
              Venv,
              Applicand,
              Tenv,
              Defining,
              symbol_bind,
              return$1,
              sequence_defining,
              eval_list,
              eval_poly_constr,
              eval_definition,
              eval_app,
              eval$0]}
    var
     Exp=[0],
     include=Evaluation([0,to_digest$2,Exp1,Def$0,Create]),
     _K_=include[12],
     Evaluation_to_digest=Evaluation(Canonical_digest);
    function eval_to_digest(exp)
     {var _O_=caml_call1(Evaluation_to_digest[12],exp);
      return caml_call1(Canonical_digest[1],_O_)}
    function eval_to_digest_string(exp)
     {return caml_call1(to_hex,eval_to_digest(exp))}
    var
     Not_a_tuple=
      [248,
       cst_Bin_shape_lib_Bin_shape_For_typerep_Not_a_tuple,
       runtime.caml_fresh_oo_id(0)];
    function _L_(param)
     {if(param[1] === Not_a_tuple)
       {var v0=param[2],v0$0=of_a$0(v0);return [1,[0,_M_,[0,v0$0,0]]]}
      throw [0,Assert_failure,_N_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Not_a_tuple,_L_);
    function deconstruct_tuple_exn(t)
     {if(4 === t[0]){var ts=t[1];return ts}throw [0,Not_a_tuple,t]}
    var
     Bin_shape_lib_Bin_shape=
      [0,
       of_a$0,
       [0,of_string$1],
       [0,of_string$2],
       [0,of_string],
       [0,of_string$0],
       group,
       tuple$1,
       record$1,
       variant$1,
       constr,
       inherit,
       poly_variant$1,
       rec_app,
       top_app,
       var$4,
       basetype$1,
       annotate$1,
       [0,compare$0,t_of_sexp$0,sexp_of_t$1,to_hex,to_md5,of_md5],
       [0,
        cmp_a,
        sexp_of_t$3,
        to_string_hum,
        to_digest$2,
        Exp,
        Def$0,
        [0,
         Create[1],
         Create[2],
         Create[3],
         Create[4],
         Create[5],
         Create[7],
         Create[6],
         Create[8],
         Create[9],
         Create[10],
         Create[11]]],
       _K_,
       eval_to_digest,
       eval_to_digest_string,
       [0,deconstruct_tuple_exn]];
    caml_register_global
     (134,Bin_shape_lib_Bin_shape,"Bin_shape_lib__Bin_shape");
    var Bin_shape_lib_Std=[0];
    caml_register_global(135,Bin_shape_lib_Std,"Bin_shape_lib__Std");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaW5fc2hhcGVfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
