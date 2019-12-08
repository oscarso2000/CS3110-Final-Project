(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_app=caml_new_string("app"),
     App=global_data.App,
     Incr_dom_Start_app=global_data.Incr_dom__Start_app,
     _a_=[0,[0,App[1][14]],[0,App[2][2]],App[3],App[5],App[7]],
     _b_=caml_call1(App[1][9],0);
    caml_call5(Incr_dom_Start_app[1],0,0,cst_app,_b_,_a_);
    var Main=[0];
    runtime.caml_register_global(3,Main,"Main");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL21haW4uY21vLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7OztJQVFtQjs7Ozs7OztJQUhqQjtJQUdpQjtJQUhqQjtVIiwic291cmNlcyI6WyIvVXNlcnMvb3NjYXJzby9EZXNrdG9wL0FsbCBGb2xkZXJzL1NvcGhvbW9yZSBTZW0gMS9DUyAzMTEwL3RyaWFsL19idWlsZC9kZWZhdWx0L21haW4ubWwiXSwic291cmNlc0NvbnRlbnQiOlsib3BlbiEgQ29yZV9rZXJuZWxcbm9wZW4hIEluY3JfZG9tXG5vcGVuISBKc19vZl9vY2FtbFxuXG5sZXQgKCkgPVxuICBTdGFydF9hcHAuc3RhcnRcbiAgICAobW9kdWxlIEFwcClcbiAgICB+YmluZF90b19lbGVtZW50X3dpdGhfaWQ6XCJhcHBcIlxuICAgIH5pbml0aWFsX21vZGVsOihBcHAuTW9kZWwuaW5pdCAoKSlcbjs7XG4iXX0=
