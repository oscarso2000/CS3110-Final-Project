(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_string_notequal=runtime.caml_string_notequal;
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
     cst=caml_new_string(""),
     cst_container=caml_new_string("container"),
     cst_value=caml_new_string("value"),
     cst_text=caml_new_string("text"),
     cst_Submit=caml_new_string("Submit"),
     cst_Reset=caml_new_string("Reset"),
     cst_Incr_counter=caml_new_string("Incr_counter"),
     cst_Reset_counter=caml_new_string("Reset_counter"),
     cst_Submit_input=caml_new_string("Submit_input"),
     cst_Update_input=caml_new_string("Update_input"),
     cst_incr_counter=caml_new_string("incr_counter"),
     cst_reset_counter=caml_new_string("reset_counter"),
     cst_submit_input=caml_new_string("submit_input"),
     cst_update_input=caml_new_string("update_input"),
     cst_Incr_counter$0=caml_new_string("Incr_counter"),
     cst_Reset_counter$0=caml_new_string("Reset_counter"),
     cst_Submit_input$0=caml_new_string("Submit_input"),
     cst_Update_input$0=caml_new_string("Update_input"),
     cst_incr_counter$0=caml_new_string("incr_counter"),
     cst_reset_counter$0=caml_new_string("reset_counter"),
     cst_submit_input$0=caml_new_string("submit_input"),
     cst_update_input$0=caml_new_string("update_input"),
     cst_counter=caml_new_string("counter"),
     cst_input_text=caml_new_string("input_text"),
     cst_submitted_text=caml_new_string("submitted_text"),
     cst_submitted_text$0=caml_new_string("submitted_text"),
     cst_input_text$0=caml_new_string("input_text"),
     cst_counter$0=caml_new_string("counter"),
     tp_loc=caml_new_string("app.ml.Model.t"),
     names=
      [0,
       caml_new_string("counter"),
       [0,
        caml_new_string("input_text"),
        [0,caml_new_string("submitted_text"),0]]],
     cst_submitted_text$1=caml_new_string("submitted_text"),
     cst_input_text$1=caml_new_string("input_text"),
     cst_counter$1=caml_new_string("counter"),
     tp_loc$0=caml_new_string("app.ml.Action.t"),
     Incr_dom_Component=global_data.Incr_dom__Component,
     Incr_dom_Incr=global_data.Incr_dom__Incr,
     Virtual_dom_Node=global_data.Virtual_dom__Node,
     Virtual_dom_Vdom=global_data.Virtual_dom__Vdom,
     Async_kernel=global_data.Async_kernel,
     Core_kernel=global_data.Core_kernel,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Base_Field=global_data.Base__Field,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     _k_=[0,caml_new_string("Reset_counter")],
     _l_=[0,caml_new_string("Incr_counter")],
     _m_=[0,caml_new_string("Submit_input")],
     _n_=[0,caml_new_string("Update_input")],
     _j_=
      [0,
       [11,caml_new_string("Default #"),[4,0,0,0,0]],
       caml_new_string("Default #%d")],
     _a_=[0,caml_new_string("submitted_text")],
     _b_=[0,caml_new_string("input_text")],
     _c_=[0,caml_new_string("counter")];
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       counter_field=[0,0],
       input_text_field=[0,0],
       submitted_text_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _an_=param[1];
          if(1 === _an_[0])
           {var _ao_=_an_[1];
            if(_ao_)
             {var _ap_=_ao_[1];
              if(0 === _ap_[0])
               {var _aq_=_ao_[2],_ar_=_ap_[1];
                if(! _aq_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_ar_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _aq_[2])
                 {var tail=param[2],field_sexp=_aq_[1];
                  if(caml_string_notequal(_ar_,cst_counter))
                   if(caml_string_notequal(_ar_,cst_input_text))
                    if(caml_string_notequal(_ar_,cst_submitted_text))
                     {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_ar_,extra[1]]}
                    else
                     if(submitted_text_field[1])
                      duplicates[1] = [0,_ar_,duplicates[1]];
                     else
                      {var
                        fvalue=
                         caml_call2(Core_kernel[432],Core_kernel[448],field_sexp);
                       submitted_text_field[1] = [0,fvalue]}
                   else
                    if(input_text_field[1])
                     duplicates[1] = [0,_ar_,duplicates[1]];
                    else
                     {var fvalue$0=caml_call1(Core_kernel[448],field_sexp);
                      input_text_field[1] = [0,fvalue$0]}
                  else
                   if(counter_field[1])
                    duplicates[1] = [0,_ar_,duplicates[1]];
                   else
                    {var fvalue$1=caml_call1(Core_kernel[340],field_sexp);
                     counter_field[1] = [0,fvalue$1]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_an_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var
         _as_=counter_field[1],
         _at_=input_text_field[1],
         _au_=submitted_text_field[1];
        if(_as_)
         if(_at_)
          if(_au_)
           {var
             submitted_text_value=_au_[1],
             input_text_value=_at_[1],
             counter_value=_as_[1];
            return [0,counter_value,input_text_value,submitted_text_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === counter_field[1]?1:0,cst_counter$0],
                  [0,
                   [0,0 === input_text_field[1]?1:0,cst_input_text$0],
                   [0,
                    [0,0 === submitted_text_field[1]?1:0,cst_submitted_text$0],
                    0]]])}}
    function sexp_of_t(param)
     {var
       v_submitted_text=param[3],
       v_input_text=param[2],
       v_counter=param[1],
       arg=caml_call2(Core_kernel[431],Core_kernel[447],v_submitted_text),
       bnds=[0,[1,[0,_a_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[447],v_input_text),
       bnds$0=[0,[1,[0,_b_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[339],v_counter),
       bnds$1=[0,[1,[0,_c_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function submitted_text(r){return r[3]}
    function input_text(r){return r[2]}
    function counter(r){return r[1]}
    function _d_(r,v){return [0,r[1],r[2],v]}
    var
     _e_=0,
     submitted_text$0=
      [0,
       function(param){return 0},
       cst_submitted_text$1,
       _e_,
       submitted_text,
       _d_];
    function _f_(r,v){return [0,r[1],v,r[3]]}
    var
     _g_=0,
     input_text$0=
      [0,function(param){return 0},cst_input_text$1,_g_,input_text,_f_];
    function _h_(r,v){return [0,v,r[2],r[3]]}
    var
     _i_=0,
     counter$0=[0,function(param){return 0},cst_counter$1,_i_,counter,_h_];
    function make_creator
     (counter_fun,input_text_fun,submitted_text_fun,compile_acc)
     {var
       match=caml_call2(counter_fun,counter$0,compile_acc),
       compile_acc$0=match[2],
       counter_gen=match[1],
       match$0=caml_call2(input_text_fun,input_text$0,compile_acc$0),
       compile_acc$1=match$0[2],
       input_text_gen=match$0[1],
       match$1=caml_call2(submitted_text_fun,submitted_text$0,compile_acc$1),
       compile_acc$2=match$1[2],
       submitted_text_gen=match$1[1];
      return [0,
              function(acc)
               {var
                 counter=caml_call1(counter_gen,acc),
                 input_text=caml_call1(input_text_gen,acc),
                 submitted_text=caml_call1(submitted_text_gen,acc);
                return [0,counter,input_text,submitted_text]},
              compile_acc$2]}
    function create(counter,input_text,submitted_text)
     {return [0,counter,input_text,submitted_text]}
    function map(counter_fun,input_text_fun,submitted_text_fun)
     {var
       _al_=caml_call1(submitted_text_fun,submitted_text$0),
       _am_=caml_call1(input_text_fun,input_text$0);
      return [0,caml_call1(counter_fun,counter$0),_am_,_al_]}
    function iter(counter_fun,input_text_fun,submitted_text_fun)
     {caml_call1(counter_fun,counter$0);
      caml_call1(input_text_fun,input_text$0);
      return caml_call1(submitted_text_fun,submitted_text$0)}
    function fold(init,counter_fun,input_text_fun,submitted_text_fun)
     {return caml_call2
              (submitted_text_fun,
               caml_call2
                (input_text_fun,
                 caml_call2(counter_fun,init,counter$0),
                 input_text$0),
               submitted_text$0)}
    function map_poly(record)
     {var
       _aj_=[0,caml_call1(record[1],submitted_text$0),0],
       _ak_=[0,caml_call1(record[1],input_text$0),_aj_];
      return [0,caml_call1(record[1],counter$0),_ak_]}
    function for_all(counter_fun,input_text_fun,submitted_text_fun)
     {var
       _ah_=caml_call1(counter_fun,counter$0),
       _ai_=_ah_?caml_call1(input_text_fun,input_text$0):_ah_;
      return _ai_?caml_call1(submitted_text_fun,submitted_text$0):_ai_}
    function exists(counter_fun,input_text_fun,submitted_text_fun)
     {var
       _ag_=caml_call1(counter_fun,counter$0),
       _af_=_ag_ || caml_call1(input_text_fun,input_text$0);
      return _af_?_af_:caml_call1(submitted_text_fun,submitted_text$0)}
    function to_list(counter_fun,input_text_fun,submitted_text_fun)
     {var
       _ad_=[0,caml_call1(submitted_text_fun,submitted_text$0),0],
       _ae_=[0,caml_call1(input_text_fun,input_text$0),_ad_];
      return [0,caml_call1(counter_fun,counter$0),_ae_]}
    function iter$0(record,counter_fun,input_text_fun,submitted_text_fun)
     {caml_call3(counter_fun,counter$0,record,record[1]);
      caml_call3(input_text_fun,input_text$0,record,record[2]);
      return caml_call3(submitted_text_fun,submitted_text$0,record,record[3])}
    function fold$0(record,init,counter_fun,input_text_fun,submitted_text_fun)
     {var _ab_=record[3],_ac_=record[2];
      return caml_call4
              (submitted_text_fun,
               caml_call4
                (input_text_fun,
                 caml_call4(counter_fun,init,counter$0,record,record[1]),
                 input_text$0,
                 record,
                 _ac_),
               submitted_text$0,
               record,
               _ab_)}
    function for_all$0(record,counter_fun,input_text_fun,submitted_text_fun)
     {var
       _$_=caml_call3(counter_fun,counter$0,record,record[1]),
       _aa_=_$_?caml_call3(input_text_fun,input_text$0,record,record[2]):_$_;
      return _aa_
              ?caml_call3
                (submitted_text_fun,submitted_text$0,record,record[3])
              :_aa_}
    function exists$0(record,counter_fun,input_text_fun,submitted_text_fun)
     {var
       ___=caml_call3(counter_fun,counter$0,record,record[1]),
       _Z_=___ || caml_call3(input_text_fun,input_text$0,record,record[2]);
      return _Z_
              ?_Z_
              :caml_call3
                (submitted_text_fun,submitted_text$0,record,record[3])}
    function to_list$0(record,counter_fun,input_text_fun,submitted_text_fun)
     {var
       _X_=
        [0,caml_call3(submitted_text_fun,submitted_text$0,record,record[3]),0],
       _Y_=[0,caml_call3(input_text_fun,input_text$0,record,record[2]),_X_];
      return [0,caml_call3(counter_fun,counter$0,record,record[1]),_Y_]}
    function map$0(record,counter_fun,input_text_fun,submitted_text_fun)
     {var
       _V_=caml_call3(submitted_text_fun,submitted_text$0,record,record[3]),
       _W_=caml_call3(input_text_fun,input_text$0,record,record[2]);
      return [0,caml_call3(counter_fun,counter$0,record,record[1]),_W_,_V_]}
    function set_all_mutable_fields(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$0,
       for_all$0,
       exists$0,
       to_list$0,
       map$0,
       set_all_mutable_fields],
     Fields=
      [0,
       names,
       submitted_text$0,
       input_text$0,
       counter$0,
       make_creator,
       create,
       map,
       iter,
       fold,
       map_poly,
       for_all,
       exists,
       to_list,
       Direct];
    function compare(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(Core_kernel[335],a_001[1],b_002[1]);
      if(0 === n)
       {var n$0=caml_call2(Core_kernel[443],a_001[2],b_002[2]);
        return 0 === n$0
                ?caml_call3
                  (Core_kernel[428],Core_kernel[443],a_001[3],b_002[3])
                :n$0}
      return n}
    function set_default_input(counter,submitted_text)
     {return [0,
              counter,
              caml_call2(Core_kernel[244],_j_,counter),
              submitted_text]}
    function init(param){return set_default_input(0,0)}
    function reset_counter(t){return set_default_input(0,t[3])}
    function incr_counter(t){return set_default_input(t[1] + 1 | 0,t[3])}
    function update_input(t,input_text){return [0,t[1],input_text,t[3]]}
    function submit_input(t){return [0,t[1],t[2],[0,t[2]]]}
    function cutoff(t1,t2)
     {var _U_=compare(t1,t2);return caml_call2(Core_kernel[90],_U_,0)}
    var
     Model=
      [0,
       t_of_sexp,
       sexp_of_t,
       submitted_text,
       input_text,
       counter,
       Fields,
       compare,
       set_default_input,
       init,
       reset_counter,
       incr_counter,
       update_input,
       submit_input,
       cutoff];
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       {var _Q_=sexp[1];
        if(caml_string_notequal(_Q_,cst_Incr_counter))
         {if(caml_string_notequal(_Q_,cst_Reset_counter))
           {if(caml_string_notequal(_Q_,cst_Submit_input))
             {if(caml_string_notequal(_Q_,cst_Update_input))
               if(caml_string_notequal(_Q_,cst_incr_counter))
                if(caml_string_notequal(_Q_,cst_reset_counter))
                 if(caml_string_notequal(_Q_,cst_submit_input))
                  if(caml_string_notequal(_Q_,cst_update_input))
                   var switch$0=1,switch$1=0,switch$2=0,switch$3=0;
                  else
                   var switch$3=1;
                 else
                  var switch$2=1,switch$3=0;
                else
                 var switch$1=1,switch$2=0,switch$3=0;
               else
                var switch$0=0,switch$1=0,switch$2=0,switch$3=0;
              else
               var switch$3=1;
              if(switch$3)
               return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp)}
            else
             var switch$2=1;
            if(switch$2)return 2}
          else
           var switch$1=1;
          if(switch$1)return 0}
        else
         var switch$0=0;
        if(! switch$0)return 1}
      else
       {var _R_=sexp[1];
        if(! _R_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,sexp);
        var _S_=_R_[1];
        if(0 !== _S_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,sexp);
        var _T_=_S_[1];
        if(caml_string_notequal(_T_,cst_Incr_counter$0))
         {if(caml_string_notequal(_T_,cst_Reset_counter$0))
           {if(caml_string_notequal(_T_,cst_Submit_input$0))
             {if(caml_string_notequal(_T_,cst_Update_input$0))
               if(caml_string_notequal(_T_,cst_incr_counter$0))
                if(caml_string_notequal(_T_,cst_reset_counter$0))
                 if(caml_string_notequal(_T_,cst_submit_input$0))
                  if(caml_string_notequal(_T_,cst_update_input$0))
                   var switch$4=1,switch$5=0,switch$6=0,switch$7=0;
                  else
                   var switch$7=1;
                 else
                  var switch$6=1,switch$7=0;
                else
                 var switch$5=1,switch$6=0,switch$7=0;
               else
                var switch$4=0,switch$5=0,switch$6=0,switch$7=0;
              else
               var switch$7=1;
              if(switch$7)
               {var sexp_args=_R_[2];
                if(sexp_args)
                 if(! sexp_args[2])
                  {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel[448],v0);
                   return [0,v0$0]}
                return caml_call3
                        (Sexplib0_Sexp_conv_error[4],tp_loc$0,_T_,sexp)}}
            else
             var switch$6=1;
            if(switch$6)
             return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)}
          else
           var switch$5=1;
          if(switch$5)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)}
        else
         var switch$4=0;
        if(! switch$4)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,sexp)}
    function sexp_of_t$0(param)
     {if(typeof param === "number")
       switch(param){case 0:return _k_;case 1:return _l_;default:return _m_}
      var v0=param[1],v0$0=caml_call1(Core_kernel[447],v0);
      return [1,[0,_n_,[0,v0$0,0]]]}
    function should_log(param){return 1}
    var Action=[0,t_of_sexp$0,sexp_of_t$0,should_log],State=[0];
    function apply_action(model,action,param,_P_)
     {if(typeof action === "number")
       switch(action)
        {case 0:return caml_call1(Model[10],model);
         case 1:return caml_call1(Model[11],model);
         default:return caml_call1(Model[13],model)}
      var text=action[1];
      return caml_call2(Model[12],model,text)}
    function on_startup(param,_O_){return caml_call1(Async_kernel[19],0)}
    function view(m,inject)
     {function button(label,action)
       {var _K_=[0,caml_call1(Virtual_dom_Node[4],label),0],_L_=0;
        function _M_(ev){return caml_call1(inject,action)}
        var _N_=[0,caml_call1(Virtual_dom_Vdom[1][30],_M_),_L_];
        return caml_call3(Virtual_dom_Node[7],0,_N_,_K_)}
      var submit_button=button(cst_Submit,2),reset_button=button(cst_Reset,0);
      function _v_(input_text)
       {var _E_=0,_F_=0;
        function _G_(ev,text){return caml_call1(inject,[0,text])}
        var
         _H_=[0,caml_call1(Virtual_dom_Vdom[1][28],_G_),_F_],
         _I_=[0,caml_call2(Virtual_dom_Vdom[1][3],cst_value,input_text),_H_],
         _J_=[0,caml_call1(Virtual_dom_Vdom[1][24],cst_text),_I_];
        return caml_call3(Virtual_dom_Node[19],0,_J_,_E_)}
      var
       _w_=caml_call2(Incr_dom_Incr[73][2],m,Model[4]),
       let_syntax_005=caml_call2(Incr_dom_Incr[73][4][2],_w_,_v_);
      function _x_(submitted_text)
       {if(submitted_text)
         var text=submitted_text[1],text$0=text;
        else
         var text$0=cst;
        var
         _B_=[0,caml_call1(Virtual_dom_Node[4],text$0),0],
         _C_=[0,caml_call3(Virtual_dom_Node[25],0,0,_B_),0],
         _D_=[0,caml_call1(Virtual_dom_Vdom[1][9],cst_container),0];
        return caml_call3(Virtual_dom_Node[9],0,_D_,_C_)}
      var
       _y_=caml_call2(Incr_dom_Incr[73][2],m,Model[3]),
       let_syntax_006=caml_call2(Incr_dom_Incr[73][4][2],_y_,_x_);
      function _z_(param)
       {var submission=param[2],input=param[1];
        return caml_call3
                (Virtual_dom_Node[6],
                 0,
                 0,
                 [0,submission,[0,input,[0,submit_button,[0,reset_button,0]]]])}
      var
       _A_=
        caml_call2(Incr_dom_Incr[73][4][3],let_syntax_005,let_syntax_006);
      return caml_call2(Incr_dom_Incr[73][4][2],_A_,_z_)}
    function create$0(model,param,inject)
     {function _o_(model)
       {return function(_s_,_t_,_u_){return apply_action(model,_s_,_t_,_u_)}}
      var
       let_syntax_007=caml_call2(Incr_dom_Incr[73][4][2],model,_o_),
       let_syntax_008=view(model,inject);
      function _p_(param)
       {var match=param[2],model=match[2],view=match[1],apply_action=param[1];
        return caml_call5
                (Incr_dom_Component[6],[0,apply_action],0,0,model,view)}
      var
       _q_=caml_call2(Incr_dom_Incr[73][4][3],let_syntax_008,model),
       _r_=caml_call2(Incr_dom_Incr[73][4][3],let_syntax_007,_q_);
      return caml_call2(Incr_dom_Incr[73][4][2],_r_,_p_)}
    var App=[0,Model,Action,State,apply_action,on_startup,view,create$0];
    runtime.caml_register_global(52,App,"App");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2FwcC5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsidHBfbG9jIiwibmFtZXMiLCJ0cF9sb2MkMCIsInRfb2Zfc2V4cCIsInNleHAiLCJmaWVsZF9zZXhwcyIsImNvdW50ZXJfZmllbGQiLCJpbnB1dF90ZXh0X2ZpZWxkIiwic3VibWl0dGVkX3RleHRfZmllbGQiLCJkdXBsaWNhdGVzIiwiZXh0cmEiLCJ0YWlsJDAiLCJ0YWlsIiwiZmllbGRfc2V4cCIsImZ2YWx1ZSIsImZ2YWx1ZSQwIiwiZnZhbHVlJDEiLCJzdWJtaXR0ZWRfdGV4dF92YWx1ZSIsImlucHV0X3RleHRfdmFsdWUiLCJjb3VudGVyX3ZhbHVlIiwic2V4cF9vZl90Iiwidl9zdWJtaXR0ZWRfdGV4dCIsInZfaW5wdXRfdGV4dCIsInZfY291bnRlciIsImFyZyIsImJuZHMiLCJhcmckMCIsImJuZHMkMCIsImFyZyQxIiwiYm5kcyQxIiwic3VibWl0dGVkX3RleHQiLCJyIiwiaW5wdXRfdGV4dCIsImNvdW50ZXIiLCJ2Iiwic3VibWl0dGVkX3RleHQkMCIsImlucHV0X3RleHQkMCIsImNvdW50ZXIkMCIsIm1ha2VfY3JlYXRvciIsImNvdW50ZXJfZnVuIiwiaW5wdXRfdGV4dF9mdW4iLCJzdWJtaXR0ZWRfdGV4dF9mdW4iLCJjb21waWxlX2FjYyIsImNvbXBpbGVfYWNjJDAiLCJjb3VudGVyX2dlbiIsImNvbXBpbGVfYWNjJDEiLCJpbnB1dF90ZXh0X2dlbiIsImNvbXBpbGVfYWNjJDIiLCJzdWJtaXR0ZWRfdGV4dF9nZW4iLCJhY2MiLCJjcmVhdGUiLCJtYXAiLCJpdGVyIiwiZm9sZCIsImluaXQiLCJtYXBfcG9seSIsInJlY29yZCIsImZvcl9hbGwiLCJleGlzdHMiLCJ0b19saXN0IiwiaXRlciQwIiwiZm9sZCQwIiwiZm9yX2FsbCQwIiwiZXhpc3RzJDAiLCJ0b19saXN0JDAiLCJtYXAkMCIsInNldF9hbGxfbXV0YWJsZV9maWVsZHMiLCJjb21wYXJlIiwiYV8wMDEiLCJiXzAwMiIsIm4iLCJuJDAiLCJzZXRfZGVmYXVsdF9pbnB1dCIsInJlc2V0X2NvdW50ZXIiLCJ0IiwiaW5jcl9jb3VudGVyIiwidXBkYXRlX2lucHV0Iiwic3VibWl0X2lucHV0IiwiY3V0b2ZmIiwidDEiLCJ0MiIsInRfb2Zfc2V4cCQwIiwic2V4cF9hcmdzIiwidjAiLCJ2MCQwIiwic2V4cF9vZl90JDAiLCJzaG91bGRfbG9nIiwiYXBwbHlfYWN0aW9uIiwibW9kZWwiLCJhY3Rpb24iLCJ0ZXh0Iiwib25fc3RhcnR1cCIsInZpZXciLCJtIiwiaW5qZWN0IiwiYnV0dG9uIiwibGFiZWwiLCJldiIsInN1Ym1pdF9idXR0b24iLCJyZXNldF9idXR0b24iLCJsZXRfc3ludGF4XzAwNSIsInRleHQkMCIsImxldF9zeW50YXhfMDA2Iiwic3VibWlzc2lvbiIsImlucHV0IiwiY3JlYXRlJDAiLCJsZXRfc3ludGF4XzAwNyIsImxldF9zeW50YXhfMDA4Il0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FJRUE7S0FBS0M7Ozs7Ozs7OztLQW9CTEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFwQkFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHSUs7c0JBSEpDOzt1QkFHNEI7d0JBQXhCSzt5QkFBd0IsNkNBSDVCRDt1QkFHNEIsNkJBQXhCQzs7dUJBREFQO3FCQUZKRTs7c0JBRUkseUNBRkpJO3NCQUVJOztzQkFEQVA7b0JBREpHOztxQkFDSSx5Q0FESkk7cUJBQ0k7NEJBREpEOzs7Ozs7Ozs7Y0FDSU47U0FESixLQUVJQztTQUZKLEtBR0lDO1FBSEo7Ozs7YUFHSVM7YUFEQUM7YUFEQUM7b0NBQ0FELGlCQUNBRDtRQUhKOzs7OzsyQkFDSVg7OzRCQUNBQzs7NkJBQ0FDOzBCQUU4QjthQUxsQ1k7Ozs7O09BRzRCLGlEQUF4QkM7T0FBd0IscUJBQXhCRztPQURBO3lDQUNBQztPQUZBO3lDQUNBRTtNQURB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QU1DLEVBQXFCQztNQUM3QixTQUVJQyxPQUFPQyxNQUFNUDtRQUM0QywwQ0FEbERPLFVBQ2tEO3FCQUExQkMsSUFBTyxrQkFKYkgsT0FHWkwsT0FDc0M7UUFBdkM7d0RBQThEO01BRTFELHVDQUNEO21CQUVUekQ7UUFDUjtxQkFPdUJpRSxHQUFJUCxNQUFRLGtCQWpCUkksVUFpQkFKLE1BQXlDO1FBQWhFOztTQUhBLG1EQUxJMUQ7U0FFSjt5REFRQTtNQVZpQjsyQ0FUZjZEO09BU047bUJBWVEvRDtRQUNSLEdBRFFBO1NBSVMsU0FKVEEsa0JBQ0p1RSxPQUdLWDs7YUFITFc7UUFLNkM7K0NBTDdDQTtTQUtpQztTQUEzQjt3REFBeUQ7TUFOMUM7MkNBckJuQlI7T0FxQk47O1FBYkY7Ozs7O29CQVlJVSxjQVpJQyxTQUZKTixpQkFDQUMsbUJBc0IwRDs7OzJDQXJCdERDLGVBWUpFO3dEQVMwRDthQUc1REcsU0FBT2pCLFlBQW9CTTtNQUM3QixhQUVVTjtRQUNSLDZCLE9BOUNBRCxhQTZDUUMsbUJBQ1U7TUFEbEI7eURBSE9BO09BS0Usb0JBTEZBLE1BQW9CTTtNQUtsQjtRQUhYOzswQ0FBUVAsa0JBSUpDLE1BREFJLEtBRXFDO01BRjlCOzhDQUFQZSxlQUxLbkI7OENBRURrQjt3REFLaUM7a0NBakR2Q25CLGFBUUFJLFdBRUFDLEtBZ0NBYTs7VSIsInNvdXJjZXMiOlsiL1VzZXJzL29zY2Fyc28vRGVza3RvcC9BbGwgRm9sZGVycy9Tb3Bob21vcmUgU2VtIDEvQ1MgMzExMC90cmlhbC9fYnVpbGQvZGVmYXVsdC9hcHAubWwiXSwic291cmNlc0NvbnRlbnQiOlsib3BlbiBDb3JlX2tlcm5lbFxub3BlbiBJbmNyX2RvbVxuXG5tb2R1bGUgTW9kZWwgPSBzdHJ1Y3RcbiAgdHlwZSB0ID1cbiAgICB7IGNvdW50ZXIgOiBpbnRcbiAgICA7IGlucHV0X3RleHQgOiBzdHJpbmdcbiAgICA7IHN1Ym1pdHRlZF90ZXh0IDogc3RyaW5nIG9wdGlvblxuICAgIH1cbiAgW0BAZGVyaXZpbmcgc2V4cCwgZmllbGRzLCBjb21wYXJlXVxuXG4gIGxldCBzZXRfZGVmYXVsdF9pbnB1dCBjb3VudGVyIHN1Ym1pdHRlZF90ZXh0ID1cbiAgICB7IGNvdW50ZXI7IGlucHV0X3RleHQgPSBzcHJpbnRmIFwiRGVmYXVsdCAjJWRcIiBjb3VudGVyOyBzdWJtaXR0ZWRfdGV4dCB9XG4gIDs7XG5cbiAgbGV0IGluaXQgKCkgPSBzZXRfZGVmYXVsdF9pbnB1dCAwIE5vbmVcbiAgbGV0IHJlc2V0X2NvdW50ZXIgdCA9IHNldF9kZWZhdWx0X2lucHV0IDAgdC5zdWJtaXR0ZWRfdGV4dFxuICBsZXQgaW5jcl9jb3VudGVyIHQgPSBzZXRfZGVmYXVsdF9pbnB1dCAodC5jb3VudGVyICsgMSkgdC5zdWJtaXR0ZWRfdGV4dFxuICBsZXQgdXBkYXRlX2lucHV0IHQgaW5wdXRfdGV4dCA9IHsgdCB3aXRoIGlucHV0X3RleHQgfVxuICBsZXQgc3VibWl0X2lucHV0IHQgPSB7IHQgd2l0aCBzdWJtaXR0ZWRfdGV4dCA9IFNvbWUgdC5pbnB1dF90ZXh0IH1cbiAgbGV0IGN1dG9mZiB0MSB0MiA9IGNvbXBhcmUgdDEgdDIgPSAwXG5lbmRcblxubW9kdWxlIEFjdGlvbiA9IHN0cnVjdFxuICB0eXBlIHQgPVxuICAgIHwgUmVzZXRfY291bnRlclxuICAgIHwgSW5jcl9jb3VudGVyXG4gICAgfCBVcGRhdGVfaW5wdXQgb2Ygc3RyaW5nXG4gICAgfCBTdWJtaXRfaW5wdXRcbiAgW0BAZGVyaXZpbmcgc2V4cF1cblxuICBsZXQgc2hvdWxkX2xvZyBfID0gdHJ1ZVxuZW5kXG5cbm1vZHVsZSBTdGF0ZSA9IHN0cnVjdFxuICB0eXBlIHQgPSB1bml0XG5lbmRcblxubGV0IGFwcGx5X2FjdGlvbiBtb2RlbCBhY3Rpb24gXyB+c2NoZWR1bGVfYWN0aW9uOl8gPVxuICBtYXRjaCAoYWN0aW9uIDogQWN0aW9uLnQpIHdpdGhcbiAgfCBSZXNldF9jb3VudGVyIC0+IE1vZGVsLnJlc2V0X2NvdW50ZXIgbW9kZWxcbiAgfCBJbmNyX2NvdW50ZXIgLT4gTW9kZWwuaW5jcl9jb3VudGVyIG1vZGVsXG4gIHwgVXBkYXRlX2lucHV0IHRleHQgLT4gTW9kZWwudXBkYXRlX2lucHV0IG1vZGVsIHRleHRcbiAgfCBTdWJtaXRfaW5wdXQgLT4gTW9kZWwuc3VibWl0X2lucHV0IG1vZGVsXG47O1xuXG5sZXQgb25fc3RhcnR1cCB+c2NoZWR1bGVfYWN0aW9uOl8gXyA9IEFzeW5jX2tlcm5lbC5yZXR1cm4gKClcblxubGV0IHZpZXcgKG0gOiBNb2RlbC50IEluY3IudCkgfmluamVjdCA9XG4gIGxldCBvcGVuIEluY3IuTGV0X3N5bnRheCBpblxuICBsZXQgb3BlbiBWZG9tIGluXG4gIGxldCBidXR0b24gbGFiZWwgYWN0aW9uID1cbiAgICBOb2RlLmJ1dHRvbiBbIEF0dHIub25fY2xpY2sgKGZ1biBfZXYgLT4gaW5qZWN0IGFjdGlvbikgXSBbIE5vZGUudGV4dCBsYWJlbCBdXG4gIGluXG4gIGxldCBzdWJtaXRfYnV0dG9uID0gYnV0dG9uIFwiU3VibWl0XCIgQWN0aW9uLlN1Ym1pdF9pbnB1dCBpblxuICBsZXQgcmVzZXRfYnV0dG9uID0gYnV0dG9uIFwiUmVzZXRcIiBBY3Rpb24uUmVzZXRfY291bnRlciBpblxuICBsZXQlbWFwIGlucHV0ID1cbiAgICBsZXQlbWFwIGlucHV0X3RleHQgPSBtID4+fCBNb2RlbC5pbnB1dF90ZXh0IGluXG4gICAgTm9kZS5pbnB1dFxuICAgICAgWyBBdHRyLnR5cGVfIFwidGV4dFwiXG4gICAgICAoKiBUaGUgdmFsdWUgcHJvcGVydHkgY29udHJvbHMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHRleHQgaW5wdXQsIHdoZXJlYXMgdGhlXG4gICAgICAgICB2YWx1ZSBhdHRyaWJ1dGUgb25seSBjb250cm9scyBpdHMgaW5pdGlhbCB2YWx1ZS4gKilcbiAgICAgIDsgQXR0ci5zdHJpbmdfcHJvcGVydHkgXCJ2YWx1ZVwiIGlucHV0X3RleHRcbiAgICAgICgqIFdlIG11c3QgdXBkYXRlIG91ciBtb2RlbCB3aXRoIHRoZSB1c2VyJ3MgaW5wdXQgdG8ga2VlcCB0aGUgdmlydHVhbCBkb20gY29uc2lzdGVudFxuICAgICAgICAgd2l0aCB0aGUgYWN0dWFsIGRvbS4gKilcbiAgICAgIDsgQXR0ci5vbl9pbnB1dCAoZnVuIF9ldiB0ZXh0IC0+IGluamVjdCAoQWN0aW9uLlVwZGF0ZV9pbnB1dCB0ZXh0KSlcbiAgICAgIF1cbiAgICAgIFtdXG4gIGFuZCBzdWJtaXNzaW9uID1cbiAgICBsZXQlbWFwIHN1Ym1pdHRlZF90ZXh0ID0gbSA+PnwgTW9kZWwuc3VibWl0dGVkX3RleHQgaW5cbiAgICBsZXQgdGV4dCA9XG4gICAgICBtYXRjaCBzdWJtaXR0ZWRfdGV4dCB3aXRoXG4gICAgICB8IE5vbmUgLT4gXCJcIlxuICAgICAgfCBTb21lIHRleHQgLT4gdGV4dFxuICAgIGluXG4gICAgTm9kZS5kaXYgW0F0dHIuY2xhc3NfIFwiY29udGFpbmVyXCJdIFsgTm9kZS5wIFtdIFsgTm9kZS50ZXh0IHRleHQgXSBdXG4gIGluXG4gIE5vZGUuYm9keSBbXSBbIHN1Ym1pc3Npb247IGlucHV0OyBzdWJtaXRfYnV0dG9uOyByZXNldF9idXR0b25dXG47O1xuXG5sZXQgY3JlYXRlIG1vZGVsIH5vbGRfbW9kZWw6XyB+aW5qZWN0ID1cbiAgbGV0IG9wZW4gSW5jci5MZXRfc3ludGF4IGluXG4gIGxldCVtYXAgYXBwbHlfYWN0aW9uID1cbiAgICBsZXQlbWFwIG1vZGVsID0gbW9kZWwgaW5cbiAgICBhcHBseV9hY3Rpb24gbW9kZWxcbiAgYW5kIHZpZXcgPSB2aWV3IG1vZGVsIH5pbmplY3RcbiAgYW5kIG1vZGVsID0gbW9kZWwgaW5cbiAgQ29tcG9uZW50LmNyZWF0ZSB+YXBwbHlfYWN0aW9uIG1vZGVsIHZpZXdcbjs7Il19
