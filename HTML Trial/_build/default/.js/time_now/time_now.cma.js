(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_clock_gettime_CLOCK_REALTIME_failed=
      caml_new_string("clock_gettime(CLOCK_REALTIME) failed"),
     Base_Int63=global_data.Base__Int63,
     Base=global_data.Base;
    function nanoseconds_since_unix_epoch(param)
     {var t=runtime.time_now_nanoseconds_since_unix_epoch_or_zero(0);
      return caml_call2(Base_Int63[16],t,Base_Int63[42])
              ?t
              :caml_call1(Base[205],cst_clock_gettime_CLOCK_REALTIME_failed)}
    var Time_now=[0,nanoseconds_since_unix_epoch];
    runtime.caml_register_global(3,Time_now,"Time_now");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aW1lX25vdy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
