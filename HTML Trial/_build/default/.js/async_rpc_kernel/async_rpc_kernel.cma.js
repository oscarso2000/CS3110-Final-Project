(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_t=caml_new_string("t"),
     cst_async_rpc_kernel=caml_new_string("async_rpc_kernel"),
     cst_src_nat0_ml=caml_new_string("src/nat0.ml"),
     cst=caml_new_string(""),
     cst_async_rpc_kernel$0=caml_new_string("async_rpc_kernel"),
     cst_899e2f4a_490a_11e6_b68f_bbd62472516c=
      caml_new_string("899e2f4a-490a-11e6-b68f-bbd62472516c"),
     cst_async_rpc_kernel$1=caml_new_string("async_rpc_kernel"),
     cst_src_writer_with_length_ml$0=
      caml_new_string("src/writer_with_length.ml"),
     cst_for_len_0_to_Int_pow_2_10_do_test_len_done=
      caml_new_string
       (": <<for len = 0 to Int.pow 2 10 do test len done;[...]>>"),
     cst_async_rpc_kernel$2=caml_new_string("async_rpc_kernel"),
     cst_src_writer_with_length_ml=
      caml_new_string("src/writer_with_length.ml"),
     cst$0=caml_new_string(""),
     cst_async_rpc_kernel$3=caml_new_string("async_rpc_kernel"),
     cst_src_writer_with_length_ml$1=
      caml_new_string("src/writer_with_length.ml"),
     cst$1=caml_new_string(""),
     cst_async_rpc_kernel$4=caml_new_string("async_rpc_kernel"),
     cst_name$0=caml_new_string("name"),
     cst_version$0=caml_new_string("version"),
     cst_version$1=caml_new_string("version"),
     cst_name$1=caml_new_string("name"),
     cst_src_description_ml_Stable_V1_t=
      caml_new_string("src/description.ml.Stable.V1.t"),
     cst_async_rpc_kernel$5=caml_new_string("async_rpc_kernel"),
     cst_src_description_ml=caml_new_string("src/description.ml"),
     cst$2=caml_new_string(""),
     cst_async_rpc_kernel$6=caml_new_string("async_rpc_kernel"),
     cst_version=caml_new_string("version"),
     cst_name=caml_new_string("name"),
     cst_t$0=caml_new_string("t"),
     cst_src_description_ml_5_4=caml_new_string("src/description.ml:5:4"),
     cst_t$1=caml_new_string("t"),
     tp_loc=caml_new_string("src/description.ml.Stable.V1.t"),
     cst_async_rpc_kernel$7=caml_new_string("async_rpc_kernel"),
     cst_src_protocol_ml_Message_needs_length=
      caml_new_string("src/protocol.ml.Message.needs_length"),
     cst_needs_length$8=caml_new_string("needs_length"),
     err$0=
      [2,caml_new_string("src/protocol.ml.Stream_response_data.needs_length")],
     cst_needs_length$6=caml_new_string("needs_length"),
     cst_src_protocol_ml_Stream_initial_message_t=
      caml_new_string("src/protocol.ml.Stream_initial_message.t"),
     cst_t$9=caml_new_string("t"),
     err=[2,caml_new_string("src/protocol.ml.Stream_query.needs_length")],
     cst_needs_length$4=caml_new_string("needs_length"),
     cst_src_protocol_ml_Response_needs_length=
      caml_new_string("src/protocol.ml.Response.needs_length"),
     cst_needs_length$2=caml_new_string("needs_length"),
     cst_src_protocol_ml_Query_needs_length=
      caml_new_string("src/protocol.ml.Query.needs_length"),
     cst_needs_length$0=caml_new_string("needs_length"),
     cst_t$7=caml_new_string("t"),
     cst_src_protocol_ml$0=caml_new_string("src/protocol.ml"),
     cst_Version$0=caml_new_string("Version"),
     cst_Version$1=caml_new_string("Version"),
     cst_bin_io_exn=caml_new_string("bin_io_exn"),
     cst_Bin_io_exn$0=caml_new_string("Bin_io_exn"),
     cst_Connection_closed=caml_new_string("Connection_closed"),
     cst_Uncaught_exn$0=caml_new_string("Uncaught_exn"),
     cst_Unimplemented_rpc$0=caml_new_string("Unimplemented_rpc"),
     cst_Unknown_query_id$0=caml_new_string("Unknown_query_id"),
     cst_Write_error$0=caml_new_string("Write_error"),
     cst_connection_closed=caml_new_string("connection_closed"),
     cst_uncaught_exn=caml_new_string("uncaught_exn"),
     cst_unimplemented_rpc=caml_new_string("unimplemented_rpc"),
     cst_unknown_query_id=caml_new_string("unknown_query_id"),
     cst_write_error=caml_new_string("write_error"),
     cst_bin_io_exn$0=caml_new_string("bin_io_exn"),
     cst_Bin_io_exn$1=caml_new_string("Bin_io_exn"),
     cst_Connection_closed$0=caml_new_string("Connection_closed"),
     cst_Uncaught_exn$1=caml_new_string("Uncaught_exn"),
     cst_Unimplemented_rpc$1=caml_new_string("Unimplemented_rpc"),
     cst_Unknown_query_id$1=caml_new_string("Unknown_query_id"),
     cst_Write_error$1=caml_new_string("Write_error"),
     cst_connection_closed$0=caml_new_string("connection_closed"),
     cst_uncaught_exn$0=caml_new_string("uncaught_exn"),
     cst_unimplemented_rpc$0=caml_new_string("unimplemented_rpc"),
     cst_unknown_query_id$0=caml_new_string("unknown_query_id"),
     cst_write_error$0=caml_new_string("write_error"),
     cst_src_protocol_ml_Rpc_error_T_t$0=
      caml_new_string("src/protocol.ml.Rpc_error.T.t"),
     cst_src_protocol_ml_Rpc_error_T_t=
      caml_new_string("src/protocol.ml.Rpc_error.T.t"),
     cst_async_rpc_kernel$8=caml_new_string("async_rpc_kernel"),
     cst_src_protocol_ml=caml_new_string("src/protocol.ml"),
     cst$3=caml_new_string(""),
     cst_async_rpc_kernel$9=caml_new_string("async_rpc_kernel"),
     cst_t$2=caml_new_string("t"),
     cst_src_protocol_ml_16_2=caml_new_string("src/protocol.ml:16:2"),
     cst_t$3=caml_new_string("t"),
     cst_Unknown_query_id=caml_new_string("Unknown_query_id"),
     cst_Version=caml_new_string("Version"),
     cst_src_protocol_ml_41_41=caml_new_string("src/protocol.ml:41:41"),
     cst_Unimplemented_rpc=caml_new_string("Unimplemented_rpc"),
     cst_Uncaught_exn=caml_new_string("Uncaught_exn"),
     cst_Write_error=caml_new_string("Write_error"),
     cst_Bin_io_exn=caml_new_string("Bin_io_exn"),
     cst_t$4=caml_new_string("t"),
     cst_src_protocol_ml_36_4=caml_new_string("src/protocol.ml:36:4"),
     cst_t$5=caml_new_string("t"),
     tp_loc$0=caml_new_string("src/protocol.ml.Rpc_error.T.t"),
     cst_src_protocol_ml$1=caml_new_string("src/protocol.ml"),
     cst_src_protocol_ml$2=caml_new_string("src/protocol.ml"),
     cst_src_protocol_ml$3=caml_new_string("src/protocol.ml"),
     cst_src_protocol_ml$4=caml_new_string("src/protocol.ml"),
     cst_b994a02f0f1fc5a7441e1529c57785ca=
      caml_new_string("b994a02f0f1fc5a7441e1529c57785ca"),
     cst_a=caml_new_string("a"),
     cst_src_protocol_ml_56_15=caml_new_string("src/protocol.ml:56:15"),
     cst_a$0=caml_new_string("a"),
     cst_t$6=caml_new_string("t"),
     cst_src_protocol_ml_56_2=caml_new_string("src/protocol.ml:56:2"),
     cst_a$1=caml_new_string("a"),
     cst_src_protocol_ml_66_16=caml_new_string("src/protocol.ml:66:16"),
     cst_data=caml_new_string("data"),
     cst_id=caml_new_string("id"),
     cst_version$2=caml_new_string("version"),
     cst_tag=caml_new_string("tag"),
     cst_a$2=caml_new_string("a"),
     cst_needs_length=caml_new_string("needs_length"),
     cst_src_protocol_ml_62_2=caml_new_string("src/protocol.ml:62:2"),
     cst_a$3=caml_new_string("a"),
     cst_src_protocol_ml_75_13=caml_new_string("src/protocol.ml:75:13"),
     cst_data$0=caml_new_string("data"),
     cst_id$0=caml_new_string("id"),
     cst_a$4=caml_new_string("a"),
     cst_needs_length$1=caml_new_string("needs_length"),
     cst_src_protocol_ml_73_2=caml_new_string("src/protocol.ml:73:2"),
     cst_Abort=caml_new_string("Abort"),
     cst_a$5=caml_new_string("a"),
     cst_src_protocol_ml_82_36=caml_new_string("src/protocol.ml:82:36"),
     cst_Query=caml_new_string("Query"),
     cst_src_protocol_ml_82_25=caml_new_string("src/protocol.ml:82:25"),
     cst_a$6=caml_new_string("a"),
     cst_needs_length$3=caml_new_string("needs_length"),
     cst_src_protocol_ml_82_2=caml_new_string("src/protocol.ml:82:2"),
     cst_error=caml_new_string("error"),
     cst_src_protocol_ml_90_36=caml_new_string("src/protocol.ml:90:36"),
     cst_response=caml_new_string("response"),
     cst_src_protocol_ml_90_25=caml_new_string("src/protocol.ml:90:25"),
     cst_initial=caml_new_string("initial"),
     cst_unused_query_id=caml_new_string("unused_query_id"),
     cst_error$0=caml_new_string("error"),
     cst_response$0=caml_new_string("response"),
     cst_t$8=caml_new_string("t"),
     cst_src_protocol_ml_88_2=caml_new_string("src/protocol.ml:88:2"),
     cst_Eof=caml_new_string("Eof"),
     cst_a$7=caml_new_string("a"),
     cst_src_protocol_ml_96_33=caml_new_string("src/protocol.ml:96:33"),
     cst_Ok=caml_new_string("Ok"),
     cst_src_protocol_ml_96_25=caml_new_string("src/protocol.ml:96:25"),
     cst_a$8=caml_new_string("a"),
     cst_needs_length$5=caml_new_string("needs_length"),
     cst_src_protocol_ml_96_2=caml_new_string("src/protocol.ml:96:2"),
     cst_a$9=caml_new_string("a"),
     cst_src_protocol_ml_105_19=caml_new_string("src/protocol.ml:105:19"),
     cst_Response=caml_new_string("Response"),
     cst_a$10=caml_new_string("a"),
     cst_src_protocol_ml_104_19=caml_new_string("src/protocol.ml:104:19"),
     cst_Query$0=caml_new_string("Query"),
     cst_a$11=caml_new_string("a"),
     cst_needs_length$7=caml_new_string("needs_length"),
     cst_src_protocol_ml_102_2=caml_new_string("src/protocol.ml:102:2"),
     cst_async_rpc_kernel$10=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$11=caml_new_string("async_rpc_kernel"),
     cst_src_transport_intf_ml=caml_new_string("src/transport_intf.ml"),
     cst$4=caml_new_string(""),
     cst_async_rpc_kernel$12=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$13=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$14=caml_new_string("async_rpc_kernel"),
     cst_src_transport_ml=caml_new_string("src/transport.ml"),
     cst$5=caml_new_string(""),
     cst_async_rpc_kernel$15=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$16=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$17=caml_new_string("async_rpc_kernel"),
     cst_src_implementation_types_ml=
      caml_new_string("src/implementation_types.ml"),
     cst$6=caml_new_string(""),
     cst_async_rpc_kernel$18=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$19=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$20=caml_new_string("async_rpc_kernel"),
     cst_src_implementation_ml=caml_new_string("src/implementation.ml"),
     cst$7=caml_new_string(""),
     cst_async_rpc_kernel$21=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$22=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$23=caml_new_string("async_rpc_kernel"),
     cst_src_rpc_error_ml=caml_new_string("src/rpc_error.ml"),
     cst$8=caml_new_string(""),
     cst_async_rpc_kernel$24=caml_new_string("async_rpc_kernel"),
     cst_Async_rpc_kernel_Rpc_error_Rpc=
      caml_new_string("Async_rpc_kernel__Rpc_error.Rpc"),
     cst_async_rpc_kernel$25=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$26=caml_new_string("async_rpc_kernel"),
     cst_src_rpc_result_ml=caml_new_string("src/rpc_result.ml"),
     cst$9=caml_new_string(""),
     cst_async_rpc_kernel$27=caml_new_string("async_rpc_kernel"),
     cst_a$12=caml_new_string("a"),
     cst_src_rpc_result_ml_4_13=caml_new_string("src/rpc_result.ml:4:13"),
     cst_a$13=caml_new_string("a"),
     cst_t$10=caml_new_string("t"),
     cst_src_rpc_result_ml_4_0=caml_new_string("src/rpc_result.ml:4:0"),
     cst_async_rpc_kernel$28=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$29=caml_new_string("async_rpc_kernel"),
     cst_src_util_ml=caml_new_string("src/util.ml"),
     cst$10=caml_new_string(""),
     cst_async_rpc_kernel$30=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$31=caml_new_string("async_rpc_kernel"),
     cst_server_side_raw_rpc_computation=
      caml_new_string("server-side raw rpc computation"),
     cst_Already_responded=caml_new_string("Already responded"),
     cst_Message_cannot_be_sent=caml_new_string("Message cannot be sent"),
     cst_server_side_pipe_rpc_computation=
      caml_new_string("server-side pipe_rpc computation"),
     cst_Expert_implementation_did_not_reply=
      caml_new_string("Expert implementation did not reply"),
     cst_server_side_rpc_expert_computation=
      caml_new_string("server-side rpc expert computation"),
     cst_server_side_one_way_rpc_message_un_bin_io_ing=
      caml_new_string("server-side one-way rpc message un-bin-io'ing"),
     cst_server_side_one_way_rpc_computation=
      caml_new_string("server-side one-way rpc computation"),
     cst_server_side_one_way_rpc_expert_computation=
      caml_new_string("server-side one-way rpc expert computation"),
     cst_server_side_rpc_query_un_bin_io_ing=
      caml_new_string("server-side rpc query un-bin-io'ing"),
     cst_server_side_rpc_computation=
      caml_new_string("server-side rpc computation"),
     cst_server_side_blocking_rpc_computation=
      caml_new_string("server-side blocking rpc computation"),
     cst_server_side_pipe_rpc_stream_query_un_bin_io_ing=
      caml_new_string("server-side pipe_rpc stream_query un-bin-io'ing"),
     cst_streaming_rpc_server_side_query_un_bin_io_ing=
      caml_new_string("streaming_rpc server-side query un-bin-io'ing"),
     cst_attempted_to_start_writer_which_was_already_started=
      caml_new_string("attempted to start writer which was already started"),
     v=[0,17724,0],
     cst_Failed_to_send_write_error_to_client=
      caml_new_string("Failed to send write error to client"),
     arg=[0,caml_new_string("_")],
     cst_async_rpc_kernel$32=caml_new_string("async_rpc_kernel"),
     cst_src_implementations_ml=caml_new_string("src/implementations.ml"),
     cst$11=caml_new_string(""),
     cst_async_rpc_kernel$33=caml_new_string("async_rpc_kernel"),
     cst_src_implementations_ml$0=caml_new_string("src/implementations.ml"),
     cst_stream_response_constants_are_correct=
      caml_new_string(": stream_response_* constants are correct"),
     cst_Async_rpc_kernel_Implementations_Duplicate_implementations=
      caml_new_string
       ("Async_rpc_kernel__Implementations.Duplicate_implementations"),
     cst_async_rpc_kernel$34=caml_new_string("async_rpc_kernel"),
     cst_Rpc_Connection_close=caml_new_string("Rpc.Connection.close"),
     cst_Rpc_Connection_with_close_finished=
      caml_new_string("Rpc.Connection.with_close finished"),
     cst_RPC_transport_stopped=caml_new_string("RPC transport stopped"),
     cst_created_directly=caml_new_string("<created-directly>"),
     cst_Handshake_timeout=caml_new_string("Handshake timeout"),
     cst_Reader_read_one_message_bin_prot_raised=
      caml_new_string("[Reader.read_one_message_bin_prot] raised"),
     cst_EOF_or_connection_closed=caml_new_string("EOF or connection closed"),
     cst_exn_raised_in_RPC_connection=
      caml_new_string("exn raised in RPC connection "),
     cst_Writer_t=caml_new_string("Writer.t"),
     cst_loop=caml_new_string("loop"),
     cst_No_heartbeats_received_for_sexp_Time_ns_Span_t=
      caml_new_string("No heartbeats received for %{sexp:Time_ns.Span.t}."),
     cst_No_heartbeats_received_for=
      caml_new_string("No heartbeats received for "),
     cst_Connection_on_message_resulted_in_Connection_closed_error_This_is_weird=
      caml_new_string
       ("Connection.on_message resulted in Connection_closed error. This is weird."),
     msg=caml_new_string("Rpc message handling loop stopped"),
     cst_RPC_connection_got_closed_writer=
      caml_new_string("RPC connection got closed writer"),
     cst_Message_cannot_be_sent$0=caml_new_string("Message cannot be sent"),
     cst_src_connection_ml_Heartbeat_config_t=
      caml_new_string("src/connection.ml.Heartbeat_config.t"),
     cst_send_every=caml_new_string("send_every"),
     cst_timeout$1=caml_new_string("timeout"),
     cst_send_every$0=caml_new_string("send_every"),
     cst_timeout$2=caml_new_string("timeout"),
     cst_eof=caml_new_string("eof"),
     cst_Eof$0=caml_new_string("Eof"),
     cst_Negotiated_unexpected_version=
      caml_new_string("Negotiated_unexpected_version"),
     cst_Negotiation_failed=caml_new_string("Negotiation_failed"),
     cst_Reading_header_failed=caml_new_string("Reading_header_failed"),
     cst_Timeout=caml_new_string("Timeout"),
     cst_Transport_closed=caml_new_string("Transport_closed"),
     cst_negotiated_unexpected_version=
      caml_new_string("negotiated_unexpected_version"),
     cst_negotiation_failed=caml_new_string("negotiation_failed"),
     cst_reading_header_failed=caml_new_string("reading_header_failed"),
     cst_timeout=caml_new_string("timeout"),
     cst_transport_closed=caml_new_string("transport_closed"),
     cst_eof$0=caml_new_string("eof"),
     cst_Eof$1=caml_new_string("Eof"),
     cst_Negotiated_unexpected_version$0=
      caml_new_string("Negotiated_unexpected_version"),
     cst_Negotiation_failed$0=caml_new_string("Negotiation_failed"),
     cst_Reading_header_failed$0=caml_new_string("Reading_header_failed"),
     cst_Timeout$0=caml_new_string("Timeout"),
     cst_Transport_closed$0=caml_new_string("Transport_closed"),
     cst_negotiated_unexpected_version$0=
      caml_new_string("negotiated_unexpected_version"),
     cst_negotiation_failed$0=caml_new_string("negotiation_failed"),
     cst_reading_header_failed$0=caml_new_string("reading_header_failed"),
     cst_timeout$0=caml_new_string("timeout"),
     cst_transport_closed$0=caml_new_string("transport_closed"),
     cst_async_rpc_kernel$35=caml_new_string("async_rpc_kernel"),
     cst_src_connection_ml=caml_new_string("src/connection.ml"),
     cst$12=caml_new_string(""),
     cst_async_rpc_kernel$36=caml_new_string("async_rpc_kernel"),
     tp_loc$1=caml_new_string("src/connection.ml.Handshake_error.T.t"),
     cst_Async_rpc_kernel_Connection_Handshake_error_Handshake_error=
      caml_new_string
       ("Async_rpc_kernel__Connection.Handshake_error.Handshake_error"),
     tp_loc$2=caml_new_string("src/connection.ml.Heartbeat_config.t"),
     cst_send_every$1=caml_new_string("send_every"),
     cst_timeout$3=caml_new_string("timeout"),
     cst_t$11=caml_new_string("t"),
     cst_src_connection_ml_42_2=caml_new_string("src/connection.ml:42:2"),
     cst_t$12=caml_new_string("t"),
     cst_async_rpc_kernel$37=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$38=caml_new_string("async_rpc_kernel"),
     cst_src_connection_intf_ml=caml_new_string("src/connection_intf.ml"),
     cst$13=caml_new_string(""),
     cst_async_rpc_kernel$39=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$40=caml_new_string("async_rpc_kernel"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_cannot_add_a_closed_direct_stream_writer=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add_exn: cannot add a closed direct stream writer"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_trying_to_add_a_direct_stream_writer_that_is_already_present_in_the_group=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add_exn: trying to add a direct stream writer that is already present in the group"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_cannot_add_a_direct_stream_writer_with_a_different_bin_writer=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add: cannot add a direct stream writer with a different bin_writer"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_Buffer_create_got_negative_buffer_size=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.Buffer.create got negative buffer size"),
     cst_client_side_streaming_rpc_initial_response_un_bin_io_ing=
      caml_new_string
       ("client-side streaming_rpc initial_response un-bin-io'ing"),
     cst_client_side_streaming_rpc_response_un_bin_io_ing=
      caml_new_string("client-side streaming_rpc response un-bin-io'ing"),
     cst_client_side_streaming_rpc_response_un_bin_io_ing$0=
      caml_new_string("client-side streaming_rpc response un-bin-io'ing"),
     cst_Closed_locally$1=caml_new_string("Closed_locally"),
     cst_Closed_remotely$1=caml_new_string("Closed_remotely"),
     cst_Error$3=caml_new_string("Error"),
     cst_closed_locally$1=caml_new_string("closed_locally"),
     cst_closed_remotely$1=caml_new_string("closed_remotely"),
     cst_error$3=caml_new_string("error"),
     cst_Closed_locally$2=caml_new_string("Closed_locally"),
     cst_Closed_remotely$2=caml_new_string("Closed_remotely"),
     cst_Error$4=caml_new_string("Error"),
     cst_closed_locally$2=caml_new_string("closed_locally"),
     cst_closed_remotely$2=caml_new_string("closed_remotely"),
     cst_error$4=caml_new_string("error"),
     cst_src_rpc_ml_Pipe_close_reason_Stable_V1_t=
      caml_new_string("src/rpc.ml.Pipe_close_reason.Stable.V1.t"),
     cst_Closed_locally=caml_new_string("Closed_locally"),
     cst_Closed_remotely=caml_new_string("Closed_remotely"),
     cst_Error$0=caml_new_string("Error"),
     cst_closed_locally=caml_new_string("closed_locally"),
     cst_closed_remotely=caml_new_string("closed_remotely"),
     cst_error$1=caml_new_string("error"),
     cst_Closed_locally$0=caml_new_string("Closed_locally"),
     cst_Closed_remotely$0=caml_new_string("Closed_remotely"),
     cst_Error$1=caml_new_string("Error"),
     cst_closed_locally$0=caml_new_string("closed_locally"),
     cst_closed_remotely$0=caml_new_string("closed_remotely"),
     cst_error$2=caml_new_string("error"),
     cst_src_rpc_ml_Pipe_close_reason_t=
      caml_new_string("src/rpc.ml.Pipe_close_reason.t"),
     cst_client_side_rpc_response_un_bin_io_ing=
      caml_new_string("client-side rpc response un-bin-io'ing"),
     cst_async_rpc_kernel$41=caml_new_string("async_rpc_kernel"),
     cst_src_rpc_ml=caml_new_string("src/rpc.ml"),
     cst$14=caml_new_string(""),
     cst_async_rpc_kernel$42=caml_new_string("async_rpc_kernel"),
     cst_Error=caml_new_string("Error"),
     cst_t$13=caml_new_string("t"),
     cst_src_rpc_ml_272_2=caml_new_string("src/rpc.ml:272:2"),
     cst_t$14=caml_new_string("t"),
     tp_loc$3=caml_new_string("src/rpc.ml.Pipe_close_reason.t"),
     cst_Error$2=caml_new_string("Error"),
     cst_t$15=caml_new_string("t"),
     cst_src_rpc_ml_280_6=caml_new_string("src/rpc.ml:280:6"),
     cst_t$16=caml_new_string("t"),
     tp_loc$4=caml_new_string("src/rpc.ml.Pipe_close_reason.Stable.V1.t"),
     cst_Async_rpc_kernel_Rpc_Pipe_rpc_Pipe_rpc_failed=
      caml_new_string("Async_rpc_kernel__Rpc.Pipe_rpc.Pipe_rpc_failed"),
     cst_async_rpc_kernel$43=caml_new_string("async_rpc_kernel"),
     cst_src_versioned_rpc_ml$15=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$4=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$14=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$3=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$13=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$2=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$12=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$1=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$11=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$0=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$10=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_Cannot_use_Direct_with_Register_raw=
      caml_new_string("Cannot use Direct with Register_raw"),
     the_rpc=caml_new_string("the-rpc"),
     not_the_rpc=caml_new_string("other-rpc"),
     cst_src_versioned_rpc_ml$5=caml_new_string("src/versioned_rpc.ml"),
     rpc_name=caml_new_string("the-rpc"),
     cst_src_versioned_rpc_ml$0=caml_new_string("src/versioned_rpc.ml"),
     cst_caller_and_callee_share_no_common_versions_for_rpc=
      caml_new_string("caller and callee share no common versions for rpc"),
     cst_cannot_use_direct_interface_with_Register_raw=
      caml_new_string("cannot use direct interface with Register_raw"),
     cst_Rpc_names_don_t_agree=caml_new_string("Rpc names don't agree"),
     cst_Version_already_exists=caml_new_string("Version already exists"),
     cst_unknown_rpc_version=caml_new_string("unknown rpc version"),
     cst_multiple_rpc_registrations=
      caml_new_string("multiple rpc registrations"),
     cst_type_conversion_failure=caml_new_string("type conversion failure"),
     cst_async_rpc_kernel$44=caml_new_string("async_rpc_kernel"),
     cst_src_versioned_rpc_ml=caml_new_string("src/versioned_rpc.ml"),
     cst$15=caml_new_string(""),
     cst_async_rpc_kernel$45=caml_new_string("async_rpc_kernel"),
     name$4=caml_new_string("__Versioned_rpc.Menu"),
     cst_query=caml_new_string("query"),
     cst_src_versioned_rpc_ml_604_6=
      caml_new_string("src/versioned_rpc.ml:604:6"),
     cst_query$0=caml_new_string("query"),
     cst_response$1=caml_new_string("response"),
     cst_src_versioned_rpc_ml_605_6=
      caml_new_string("src/versioned_rpc.ml:605:6"),
     cst_response$2=caml_new_string("response"),
     cst_src_versioned_rpc_ml$1=caml_new_string("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$2=caml_new_string("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$3=caml_new_string("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$4=caml_new_string("src/versioned_rpc.ml"),
     cst_68699430bf14ef784fa8bfb54f592d3b=
      caml_new_string("68699430bf14ef784fa8bfb54f592d3b"),
     cst_src_versioned_rpc_ml$6=caml_new_string("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$7=caml_new_string("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$8=caml_new_string("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$9=caml_new_string("src/versioned_rpc.ml"),
     cst_68699430bf14ef784fa8bfb54f592d3b$0=
      caml_new_string("68699430bf14ef784fa8bfb54f592d3b"),
     cst_async_rpc_kernel$46=caml_new_string("async_rpc_kernel"),
     cst_FOOBAR123$0=caml_new_string("FOOBAR123"),
     cst$18=caml_new_string(""),
     cst_src_pipe_transport_ml_Bench_reader=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$9=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_1_chunk=
      caml_new_string("run_test write_1_msg_1_chunk"),
     cst_write_1_msg_1_chunk=caml_new_string("write_1_msg_1_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$0=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$10=caml_new_string("src/pipe_transport.ml"),
     cst_let_f_write_write_1_msg_1_chunk_write_write_1_msg_1_chunk_write_in_run_test_f=
      caml_new_string
       ("let f write = write_1_msg_1_chunk write; write_1_msg_1_chunk write in\nrun_test f"),
     cst_write_2_msg_1_chunk=caml_new_string("write_2_msg_1_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$1=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$11=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_3_chunk=
      caml_new_string("run_test write_1_msg_3_chunk"),
     cst_write_1_msg_3_chunk=caml_new_string("write_1_msg_3_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$2=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$12=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_1_chunk=
      caml_new_string("run_test write_2_msg_1_chunk"),
     cst_write_2_msg_1_chunk$0=caml_new_string("write_2_msg_1_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$3=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$13=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_one_byte_at_a_time_34_chunk=
      caml_new_string("run_test write_2_msg_one_byte_at_a_time_34_chunk"),
     cst_write_2_msg_one_byte=caml_new_string("write_2_msg_one_byte"),
     cst_src_pipe_transport_ml_Bench_reader$4=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$14=caml_new_string("src/pipe_transport.ml"),
     cst_let_f_write_write_create_message_write_1_msg_3_chunk_write_write_2_msg_1_chunk_write_write_2_msg_one_byte_at_a_time_34_chunk_write_write_create_message_in_run_test_f=
      caml_new_string
       ("let f write =\n  write (create_message ());\n  write_1_msg_3_chunk write;\n  write_2_msg_1_chunk write;\n  write_2_msg_one_byte_at_a_time_34_chunk write;\n  write (create_message ()) in\nrun_test f"),
     cst_multi=caml_new_string("multi"),
     pos$3=caml_new_string("src/pipe_transport.ml:446:19"),
     pos$2=caml_new_string("src/pipe_transport.ml:431:23"),
     cst$17=caml_new_string(""),
     pos$1=caml_new_string("src/pipe_transport.ml:348:19"),
     pos$0=caml_new_string("src/pipe_transport.ml:347:19"),
     pos=caml_new_string("src/pipe_transport.ml:320:21"),
     cst_FOOBAR123=caml_new_string("FOOBAR123"),
     cst_src_pipe_transport_ml$0=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_1_chunk_verify_1_1=
      caml_new_string(": <<run_test write_1_msg_1_chunk (verify 1 1)>>"),
     cst_src_pipe_transport_ml$1=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_f_verify_2_1=
      caml_new_string(": <<run_test f (verify 2 1)>>"),
     cst_src_pipe_transport_ml$2=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_3_chunk_verify_1_3=
      caml_new_string(": <<run_test write_1_msg_3_chunk (verify 1 3)>>"),
     cst_src_pipe_transport_ml$3=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_1_chunk_verify_2_1=
      caml_new_string(": <<run_test write_2_msg_1_chunk (verify 2 1)>>"),
     cst_src_pipe_transport_ml$4=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_one_byte_at_a_time_34_ch=
      caml_new_string
       (": <<run_test write_2_msg_one_byte_at_a_time_34_ch[...]>>"),
     cst_src_pipe_transport_ml$5=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_f_verify_7_40=
      caml_new_string(": <<run_test f (verify 7 40)>>"),
     cst_src_pipe_transport_ml$6=caml_new_string("src/pipe_transport.ml"),
     cst_can_call_read_forever_multiple_times=
      caml_new_string(": can call read_forever multiple times"),
     cst_async_rpc_kernel$47=caml_new_string("async_rpc_kernel"),
     cst_src_pipe_transport_ml=caml_new_string("src/pipe_transport.ml"),
     cst$16=caml_new_string(""),
     cst_async_rpc_kernel$48=caml_new_string("async_rpc_kernel"),
     cst_src_pipe_transport_ml$7=caml_new_string("src/pipe_transport.ml"),
     cst_Test_reader_string=caml_new_string(": Test_reader_string"),
     cst_src_pipe_transport_ml$8=caml_new_string("src/pipe_transport.ml"),
     cst_Test_reader_bigstring=caml_new_string(": Test_reader_bigstring"),
     cst_src_pipe_transport_ml$15=caml_new_string("src/pipe_transport.ml"),
     cst_src_pipe_transport_ml$16=caml_new_string("src/pipe_transport.ml"),
     cst$19=caml_new_string(""),
     cst_Test_reader_string$0=caml_new_string("Test_reader_string"),
     cst_src_pipe_transport_ml$17=caml_new_string("src/pipe_transport.ml"),
     cst_src_pipe_transport_ml$18=caml_new_string("src/pipe_transport.ml"),
     cst$20=caml_new_string(""),
     cst_Test_reader_bigstring$0=caml_new_string("Test_reader_bigstring"),
     cst_async_rpc_kernel$49=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$50=caml_new_string("async_rpc_kernel"),
     cst_src_persistent_connection_ml=
      caml_new_string("src/persistent_connection.ml"),
     cst$21=caml_new_string(""),
     cst_async_rpc_kernel$51=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$52=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$53=caml_new_string("async_rpc_kernel"),
     cst_src_async_rpc_kernel_ml=caml_new_string("src/async_rpc_kernel.ml"),
     cst$22=caml_new_string(""),
     cst_async_rpc_kernel$54=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$55=caml_new_string("async_rpc_kernel"),
     Bin_prot_Common=global_data.Bin_prot__Common,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Bin_prot_Type_class=global_data.Bin_prot__Type_class,
     Bin_prot_Size=global_data.Bin_prot__Size,
     Bin_prot_Write=global_data.Bin_prot__Write,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Bin_prot_Nat0=global_data.Bin_prot__Nat0,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_Bytes=global_data.Core_kernel__Bytes,
     Core_kernel_Bigstring=global_data.Core_kernel__Bigstring,
     Core_kernel=global_data.Core_kernel,
     Bin_prot_Utils=global_data.Bin_prot__Utils,
     Inline_test_config=global_data.Inline_test_config,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Base_Hash=global_data.Base__Hash,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Core_kernel_Comparable=global_data.Core_kernel__Comparable,
     Core_kernel_Hashable=global_data.Core_kernel__Hashable,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Sexplib_Std=global_data.Sexplib__Std,
     Bin_prot_Std=global_data.Bin_prot__Std,
     Stdlib=global_data.Stdlib,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Unique_id=global_data.Core_kernel__Unique_id,
     Expect_test_config=global_data.Expect_test_config,
     Async_kernel=global_data.Async_kernel,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Core_kernel_Queue=global_data.Core_kernel__Queue,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     CamlinternalMod=global_data.CamlinternalMod,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Hash_set=global_data.Core_kernel__Hash_set,
     Core_kernel_List=global_data.Core_kernel__List,
     Base_Backtrace=global_data.Base__Backtrace,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Bag=global_data.Core_kernel__Bag,
     Async_kernel_Scheduler=global_data.Async_kernel__Scheduler,
     Async_kernel_Synchronous_time_source=
      global_data.Async_kernel__Synchronous_time_source,
     Core_kernel_Set_once=global_data.Core_kernel__Set_once,
     Async_kernel_Time_source=global_data.Async_kernel__Time_source,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Base_Staged=global_data.Base__Staged,
     Async_kernel_Async_stream=global_data.Async_kernel__Async_stream,
     Core_kernel_Time_ns_alternate_sexp=
      global_data.Core_kernel__Time_ns_alternate_sexp,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     include$3=global_data.Protocol_version_header,
     Core_kernel_Unit=global_data.Core_kernel__Unit,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Async_kernel_Deferred_or_error=
      global_data.Async_kernel__Deferred_or_error,
     Base_List=global_data.Base__List,
     Core_kernel_Memo=global_data.Core_kernel__Memo,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Async_kernel_Deferred_result=global_data.Async_kernel__Deferred_result,
     Base_Monad=global_data.Base__Monad,
     Async_kernel_Async_kernel_scheduler=
      global_data.Async_kernel__Async_kernel_scheduler,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Core_kernel_Bigbuffer=global_data.Core_kernel__Bigbuffer,
     include$6=global_data.Persistent_connection_kernel,
     Core_kernel_Host_and_port=global_data.Core_kernel__Host_and_port,
     Async_rpc_kernel=[0];
    caml_register_global(685,Async_rpc_kernel,"Async_rpc_kernel__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel);
    caml_call1(Expect_test_collector[4][1],cst_src_nat0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$0,cst);
    var
     _a_=
      caml_call1
       (Bin_prot_Shape[5][1],cst_899e2f4a_490a_11e6_b68f_bbd62472516c),
     bin_shape_t=caml_call1(caml_call1(Bin_prot_Shape[16],_a_),0),
     _c_=Bin_prot_Size[11],
     _e_=Bin_prot_Write[7],
     _g_=Bin_prot_Read[7],
     _j_=
      [0,
       [11,caml_new_string("mismatch for length "),[4,0,0,0,0]],
       caml_new_string("mismatch for length %d")],
     _o_=[0,caml_new_string("version")],
     _p_=[0,caml_new_string("name")],
     _bN_=[0,caml_new_string("Heartbeat")],
     _bO_=[0,caml_new_string("Query")],
     _bP_=[0,caml_new_string("Response")],
     _bM_=[1,caml_new_string("src/protocol.ml.Message.needs_length")],
     _bn_=[0,caml_new_string("initial")],
     _bo_=[0,caml_new_string("unused_query_id")],
     _a1_=[0,caml_new_string("data")],
     _a2_=[0,caml_new_string("id")],
     _aP_=[0,caml_new_string("data")],
     _aQ_=[0,caml_new_string("id")],
     _aR_=[0,caml_new_string("version")],
     _aS_=[0,caml_new_string("tag")],
     _al_=[0,caml_new_string("Connection_closed")],
     _am_=[0,caml_new_string("Bin_io_exn")],
     _an_=[0,caml_new_string("Write_error")],
     _ao_=[0,caml_new_string("Uncaught_exn")],
     _ap_=[0,caml_new_string("Version")],
     _aq_=[0,caml_new_string("Unimplemented_rpc")],
     _ar_=[0,caml_new_string("Unknown_query_id")],
     _ak_=[1,caml_new_string("src/protocol.ml.Rpc_error.T.t")],
     _af_=[0,caml_new_string("Connection_closed"),0],
     _au_=[1,caml_new_string(" 8cc766befa2cf565ea147d9fcd5eaaab ")],
     _av_=[0,caml_new_string("")],
     _ax_=[0,caml_new_string("stable")],
     _bG_=[0,caml_new_string("Heartbeat"),0],
     _bS_=[0,caml_new_string("Closed")],
     _bT_=[0,caml_new_string("Sent")],
     _bU_=[0,caml_new_string("Message_too_big")],
     _bQ_=[0,caml_new_string("max_message_size")],
     _bR_=[0,caml_new_string("size")],
     _bW_=[0,caml_new_string("writer")],
     _bX_=[0,caml_new_string("reader")],
     _bV_=
      [0,
       [11,
        caml_new_string("message length ("),
        [4,
         0,
         0,
         0,
         [11,
          caml_new_string(") did not match expected length ("),
          [4,0,0,0,[12,41,0]]]]],
       caml_new_string
        ("message length (%d) did not match expected length (%d)")],
     _b0_=[0,[0,[0,[0,[0,[0]]]],[0,[0]]]],
     _b1_=[0,caml_new_string("src/implementation_types.ml"),80,6],
     _b2_=[0,[0,[0,[0]]]],
     _b3_=[0,caml_new_string("src/implementation_types.ml"),130,6],
     _b4_=[0,[0,[0,[0]],[0,[0]],[0,[0]]]],
     _b5_=[0,caml_new_string("src/implementation_types.ml"),179,6],
     _b6_=[0,[0]],
     _b7_=[0,caml_new_string("src/implementation_types.ml"),187,6],
     _b8_=[0,[0,[0,[0,[0,[0]]]],[0,[0]]]],
     _b9_=[0,[0,[0,[0]]]],
     _b__=[0,[0,[0,[0]],[0,[0]],[0,[0]]]],
     _b$_=[0,[0]],
     _ca_=[0,caml_new_string("responded")],
     _cb_=[0,caml_new_string("writer")],
     _cc_=[0,caml_new_string("query_id")],
     _cL_=[0,caml_new_string("Connection_closed")],
     _cJ_=[0,caml_new_string("src/rpc_error.ml.Rpc")],
     _cK_=[0,caml_new_string("_none_"),0,-1],
     _cV_=[0,caml_new_string("rpc_version")],
     _cW_=[0,caml_new_string("rpc_tag")],
     _cX_=[0,caml_new_string("connection_description")],
     _cY_=[0,caml_new_string("rpc_error")],
     _cT_=[0,caml_new_string("exn")],
     _cU_=[0,caml_new_string("location")],
     _cZ_=
      [0,
       [11,
        caml_new_string("message length ("),
        [4,
         0,
         0,
         0,
         [11,
          caml_new_string(") did not match expected length ("),
          [4,0,0,0,[12,41,0]]]]],
       caml_new_string
        ("message length (%d) did not match expected length (%d)")],
     _dC_=[0,[0,caml_new_string("src/implementations.ml"),840,29364,29390]],
     _dA_=[0,caml_new_string("_")],
     _dB_=[0,[0,caml_new_string("src/implementations.ml"),836,29242,29248]],
     _dy_=
      [0,caml_new_string("src/implementations.ml.Duplicate_implementations")],
     _dz_=[0,caml_new_string("_none_"),0,-1],
     _dw_=[0,10],
     _du_=[0,10],
     _dv_=[0,10],
     _c3_=[0,caml_new_string("packed_self")],
     _c4_=[0,caml_new_string("last_dispatched_implementation")],
     _c5_=[0,caml_new_string("connection_close_started")],
     _c6_=[0,caml_new_string("connection_description")],
     _c7_=[0,caml_new_string("connection_state")],
     _c8_=[0,caml_new_string("stopped")],
     _c9_=[0,caml_new_string("open_streaming_responses")],
     _c__=[0,caml_new_string("writer")],
     _c$_=[0,caml_new_string("implementations")],
     _dt_=[0,[0,0]],
     _dr_=[0,[0,0]],
     _ds_=[0,[0,0]],
     _dq_=[0,caml_new_string("src/implementations.ml"),673,4],
     _dp_=[0,3456156],
     _do_=[0,0],
     _dn_=[0,0],
     _dm_=[0,0],
     _dk_=[0,3903734],
     _dh_=[0,caml_new_string("backtrace")],
     _di_=[0,caml_new_string("exn")],
     _dj_=[0,caml_new_string("location")],
     _dl_=[0,3903734],
     _dg_=[0,3456156],
     _df_=[0,caml_new_string("src/implementations.ml"),214,6],
     _de_=[0,caml_new_string("src/implementations.ml"),215,6],
     _dc_=[0,0],
     _da_=[0,caml_new_string("reason")],
     _db_=[0,caml_new_string("error")],
     _c0_=[0,caml_new_string("_")],
     _c1_=[0,caml_new_string("Pipe")],
     _c2_=[0,caml_new_string("Direct")],
     _et_=[0,10],
     _ep_=[1,2],
     _eq_=[0,0],
     _er_=[1,0],
     _es_=[1,1],
     _en_=[1,1],
     _eo_=[0,3903734],
     _el_=[0,caml_new_string("src/connection.ml"),345,11135,11181],
     _em_=[0,caml_new_string("RPC connection loop")],
     _ek_=[0,caml_new_string("src/connection.ml"),334,10731,10768],
     _ei_=[12,46,0],
     _ej_=[0,0],
     _eh_=[0,caml_new_string("src/connection.ml"),181,5720,5783],
     _ee_=[1,-1025106484],
     _ed_=[0,0],
     _eb_=[0,caml_new_string("_")],
     _d$_=[0,[0,caml_new_string("src/connection.ml"),101,3083,3087]],
     _ea_=[0,caml_new_string("connection")],
     _ec_=[0,caml_new_string("reason")],
     _d__=[1,-1025106484],
     _d8_=[0,caml_new_string("writer")],
     _d9_=[0,caml_new_string("description")],
     _dX_=[0,caml_new_string("heartbeat_event")],
     _dY_=[0,caml_new_string("time_source")],
     _dZ_=[0,caml_new_string("implementations_instance")],
     _d0_=[0,caml_new_string("close_finished")],
     _d1_=[0,caml_new_string("close_started")],
     _d2_=[0,caml_new_string("open_queries")],
     _d3_=[0,caml_new_string("writer")],
     _d4_=[0,caml_new_string("reader")],
     _d5_=[0,caml_new_string("heartbeat_callbacks")],
     _d6_=[0,caml_new_string("heartbeat_config")],
     _d7_=[0,caml_new_string("description")],
     _dR_=[0,caml_new_string("send_every")],
     _dS_=[0,caml_new_string("timeout")],
     _dP_=
      [0,caml_new_string("src/connection.ml.Handshake_error.Handshake_error")],
     _dQ_=[0,caml_new_string("_none_"),0,-1],
     _dH_=[0,caml_new_string("Eof")],
     _dI_=[0,caml_new_string("Transport_closed")],
     _dJ_=[0,caml_new_string("Timeout")],
     _dK_=[0,caml_new_string("Reading_header_failed")],
     _dL_=[0,caml_new_string("Negotiation_failed")],
     _dM_=[0,caml_new_string("Negotiated_unexpected_version")],
     _dG_=[0,1,0],
     _eY_=[0,[0,caml_new_string("src/rpc.ml"),630,19514,19526]],
     _eW_=[0,76061764,[0,0]],
     _eX_=[0,76061764,[0,0]],
     _eU_=[1,636790696],
     _eV_=[0,76061764,[0,0]],
     _eS_=[0,caml_new_string("Closed_remotely")],
     _eR_=[0,caml_new_string("Closed_locally")],
     _eT_=[0,caml_new_string("Error")],
     _eQ_=[1,caml_new_string("src/rpc.ml.Pipe_close_reason.Stable.V1.t")],
     _eI_=[0,caml_new_string("Closed_remotely")],
     _eH_=[0,caml_new_string("Closed_locally")],
     _eJ_=[0,caml_new_string("Error")],
     _eG_=[1,caml_new_string("src/rpc.ml.Pipe_close_reason.t")],
     _ey_=[0,76061764,[0,0]],
     _ez_=[0,76061764,[0,0]],
     _ex_=[0,76061764,[0,0]],
     _ev_=[0,0],
     _ew_=[1,0],
     _eA_=[0,caml_new_string("Closed_remotely"),0],
     _eB_=[0,caml_new_string("Closed_locally"),0],
     _eK_=[0,caml_new_string("Closed_remotely"),0],
     _eL_=[0,caml_new_string("Closed_locally"),0],
     _f1_=[0,1],
     _f0_=[0,1],
     _fZ_=[0,0],
     _fY_=[0,1],
     _fX_=[0,1],
     _fP_=[0,1,[0,2,[0,3,0]]],
     _fF_=[0,2,0],
     _fG_=[0,1,[0,2,[0,3,0]]],
     _fA_=[0,caml_new_string("callee_menu")],
     _fB_=[0,caml_new_string("callee_versions")],
     _fC_=[0,caml_new_string("caller_versions")],
     _fD_=[0,caml_new_string("rpc_name")],
     _fh_=[0,1],
     _fg_=[0,1],
     _ff_=[0,0],
     _fe_=[0,1],
     _fd_=[0,1],
     _fb_=[0,caml_new_string("Rpc")],
     _fc_=[0,caml_new_string("Version")],
     _e5_=[0,caml_new_string("Update")],
     _e8_=[0,caml_new_string("State")],
     _e9_=[0,caml_new_string("Error")],
     _e__=[0,caml_new_string("Msg")],
     _e$_=[0,caml_new_string("Response")],
     _fa_=[0,caml_new_string("Query")],
     _e6_=[0,caml_new_string("Rpc")],
     _e7_=[0,caml_new_string("Version")],
     _fI_=[1,caml_new_string(" (Ok 2) ")],
     _fJ_=[0,caml_new_string("")],
     _fL_=
      [0,
       caml_new_string
        ("highest version number is taken in most_recent_common_version")],
     _fR_=
      [1,
       caml_new_string
        ('\n      (Error\n       ("caller and callee share no common versions for rpc" (rpc_name the-rpc)\n        (caller_versions (1 2 3)) (callee_versions ())\n        (callee_menu ((other-rpc (1 2))))))')],
     _fS_=[0,caml_new_string("")],
     _fU_=
      [0,
       caml_new_string
        ("error from most_recent_common_version looks reasonable")],
     _gl_=[0,caml_new_string("src/pipe_transport.ml"),442,6],
     _gm_=[0,caml_new_string("src/pipe_transport.ml"),439,6],
     _gk_=[0,0],
     _gj_=[0,1],
     _gh_=[0,caml_new_string("monitor")],
     _gi_=[0,caml_new_string("pipe")],
     _ge_=[0,caml_new_string("src/pipe_transport.ml"),111,12],
     _gf_=[0,caml_new_string("src/pipe_transport.ml"),104,16],
     _gg_=[1,3456156],
     _gc_=[0,caml_new_string("buffer")],
     _gd_=[0,caml_new_string("pipe")],
     _b_=Bin_prot_Type_class[47],
     _d_=Bin_prot_Type_class[44],
     _f_=Bin_prot_Type_class[45];
    function bin_read_t(buf,pos_ref,vnat0)
     {return caml_call2(Bin_prot_Common[19],cst_t,pos_ref[1])}
    var _h_=Bin_prot_Nat0[1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Nat0=
      [0,_c_,_e_,_g_,bin_read_t,bin_shape_t,_d_,_f_,_b_,_h_];
    caml_register_global(696,Async_rpc_kernel_Nat0,"Async_rpc_kernel__Nat0");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$2);
    caml_call1(Expect_test_collector[4][1],cst_src_writer_with_length_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$3,cst$0);
    function of_writer(param)
     {var write=param[2],size=param[1];
      function write$0(buf,pos,a)
       {var
         len=caml_call1(_h_,caml_call1(size,a)),
         pos$0=caml_call3(_e_,buf,pos,len);
        return caml_call3(write,buf,pos$0,a)}
      function size$0(a)
       {var len=caml_call1(_h_,caml_call1(size,a));
        return caml_call1(_c_,len) + len | 0}
      return [0,size$0,write$0]}
    function of_type_class(bin_a){return of_writer(bin_a[2])}
    function _i_(param)
     {function test(len)
       {var
         s=caml_call1(Core_kernel_Bytes[40],len),
         bigstring=caml_call3(Bin_prot_Utils[4],0,Core_kernel_Bytes[6],s),
         bigstring_version=
          caml_call3
           (Bin_prot_Utils[4],0,Core_kernel_Bigstring[120][1][6],bigstring),
         writer_with_length=of_writer(Core_kernel_Bytes[6]),
         with_length_version=
          caml_call3(Bin_prot_Utils[4],0,writer_with_length,s),
         _tm_=caml_call3(Core_kernel_Bigstring[13],0,0,with_length_version),
         _tn_=
          caml_string_notequal
           (caml_call3(Core_kernel_Bigstring[13],0,0,bigstring_version),_tm_);
        return _tn_?caml_call3(Core_kernel[222],_j_,len,0):_tn_}
      function _th_(param)
       {var _tj_=caml_call2(Core_kernel_Int[43],2,10),_ti_=0;
        if(! (_tj_ < 0))
         {var len=_ti_;
          for(;;)
           {test(len);
            var _tl_=len + 1 | 0;
            if(_tj_ !== len){var len=_tl_;continue}
            break}}
        var pow=10;
        for(;;)
         {var x=caml_call2(Core_kernel_Int[43],2,pow);
          test(x - 1 | 0);
          test(x);
          test(x + 1 | 0);
          var _tk_=pow + 1 | 0;
          if(20 !== pow){var pow=_tk_;continue}
          return 0}}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_for_len_0_to_Int_pow_2_10_do_test_len_done,
        0,
        cst_src_writer_with_length_ml$0,
        38,
        2,
        189,
        _th_);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst$1,
      0,
      cst_src_writer_with_length_ml$1,
      19,
      0,
      856,
      _i_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Writer_with_length=[0,of_writer,of_type_class];
    caml_register_global
     (703,
      Async_rpc_kernel_Writer_with_length,
      "Async_rpc_kernel__Writer_with_length");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$5);
    caml_call1(Expect_test_collector[4][1],cst_src_description_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$6,cst$2);
    var
     _k_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_name,Core_kernel[435]],
         [0,[0,cst_version,Core_kernel[327]],0]]),
     _l_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$0),0,_k_],0],
     _m_=caml_call1(Bin_prot_Shape[4][1],cst_src_description_ml_5_4),
     group=caml_call2(Bin_prot_Shape[6],_m_,_l_),
     _n_=caml_call1(Bin_prot_Shape[2][1],cst_t$1),
     bin_shape_t$0=caml_call1(caml_call2(Bin_prot_Shape[14],group,_n_),0);
    function bin_size_t(param)
     {var
       v2=param[2],
       v1=param[1],
       _tf_=caml_call1(Core_kernel[436],v1),
       size=caml_call2(Bin_prot_Common[23],0,_tf_),
       _tg_=caml_call1(Core_kernel[328],v2);
      return caml_call2(Bin_prot_Common[23],size,_tg_)}
    function bin_write_t(buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel[437],buf,pos,v1);
      return caml_call3(Core_kernel[329],buf,pos$0,v2)}
    var bin_writer_t=[0,bin_size_t,bin_write_t];
    function bin_read_t$0(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_description_ml_Stable_V1_t,
               pos_ref[1])}
    function bin_read_t$1(buf,pos_ref)
     {var
       v_name=caml_call2(Core_kernel[439],buf,pos_ref),
       v_version=caml_call2(Core_kernel[331],buf,pos_ref);
      return [0,v_name,v_version]}
    var
     bin_reader_t=[0,bin_read_t$1,bin_read_t$0],
     bin_t=[0,bin_shape_t$0,bin_writer_t,bin_reader_t];
    function compare(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(Core_kernel[443],a_001[1],b_002[1]);
      return 0 === n?caml_call2(Core_kernel[335],a_001[2],b_002[2]):n}
    function hash_fold_t(hsv,arg)
     {var hsv$0=caml_call2(Core_kernel[445],hsv,arg[1]);
      return caml_call2(Core_kernel[337],hsv$0,arg[2])}
    function hash(x)
     {var hsv=caml_call2(Base_Hash[11],0,0),_te_=hash_fold_t(hsv,x);
      return caml_call1(Base_Hash[9],_te_)}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       name_field=[0,0],
       version_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _s9_=param[1];
          if(1 === _s9_[0])
           {var _s__=_s9_[1];
            if(_s__)
             {var _s$_=_s__[1];
              if(0 === _s$_[0])
               {var _ta_=_s__[2],_tb_=_s$_[1];
                if(! _ta_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_tb_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _ta_[2])
                 {var tail=param[2],field_sexp=_ta_[1];
                  if(caml_string_notequal(_tb_,cst_name$0))
                   if(caml_string_notequal(_tb_,cst_version$0))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_tb_,extra[1]]}
                   else
                    if(version_field[1])
                     duplicates[1] = [0,_tb_,duplicates[1]];
                    else
                     {var fvalue=caml_call1(Core_kernel[340],field_sexp);
                      version_field[1] = [0,fvalue]}
                  else
                   if(name_field[1])
                    duplicates[1] = [0,_tb_,duplicates[1]];
                   else
                    {var fvalue$0=caml_call1(Core_kernel[448],field_sexp);
                     name_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_s9_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var _tc_=name_field[1],_td_=version_field[1];
        if(_tc_)
         if(_td_)
          {var version_value=_td_[1],name_value=_tc_[1];
           return [0,name_value,version_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === name_field[1]?1:0,cst_name$1],
                  [0,[0,0 === version_field[1]?1:0,cst_version$1],0]])}}
    function sexp_of_t(param)
     {var
       v_version=param[2],
       v_name=param[1],
       arg=caml_call1(Core_kernel[339],v_version),
       bnds=[0,[1,[0,_o_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[447],v_name),
       bnds$0=[0,[1,[0,_p_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     _q_=caml_call1(Core_kernel_Comparable[6],[0,compare,t_of_sexp,sexp_of_t]),
     _x_=_q_[7],
     _r_=_q_[1],
     _s_=_q_[2],
     _t_=_q_[3],
     _u_=_q_[4],
     _v_=_q_[5],
     _w_=_q_[6],
     _y_=_q_[9],
     _z_=_q_[10],
     _A_=_q_[11],
     _B_=_q_[12],
     _C_=_q_[13],
     _D_=_q_[14],
     _E_=_q_[15],
     _F_=_q_[16],
     _G_=_q_[17],
     _H_=_q_[18],
     _I_=_q_[19],
     _J_=_q_[20],
     _K_=_q_[21],
     _L_=_q_[22],
     include=
      caml_call1
       (Core_kernel_Hashable[3],
        [0,hash_fold_t,t_of_sexp,compare,sexp_of_t,hash]),
     _M_=include[1],
     _N_=include[2],
     _O_=include[3],
     _Q_=include[5],
     _R_=include[6],
     _P_=include[4],
     _S_=include[7];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _T_=
      [0,
       [0,
        compare,
        t_of_sexp,
        sexp_of_t,
        bin_size_t,
        bin_write_t,
        bin_read_t$1,
        bin_read_t$0,
        bin_shape_t$0,
        bin_writer_t,
        bin_reader_t,
        bin_t,
        hash_fold_t,
        hash]],
     Async_rpc_kernel_Description=
      [0,
       bin_size_t,
       bin_write_t,
       bin_read_t$1,
       bin_read_t$0,
       bin_shape_t$0,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       sexp_of_t,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_];
    caml_register_global
     (710,Async_rpc_kernel_Description,"Async_rpc_kernel__Description");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$8);
    caml_call1(Expect_test_collector[4][1],cst_src_protocol_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$9,cst$3);
    var
     Rpc_tag=
      [0,
       Core_kernel_String[88],
       Core_kernel_String[89],
       Core_kernel_String[90],
       Core_kernel_String[91],
       Core_kernel_String[92],
       Core_kernel_String[93],
       Core_kernel_String[94],
       Core_kernel_String[95],
       Core_kernel_String[96],
       Core_kernel_String[97],
       Core_kernel_String[98],
       Core_kernel_String[99],
       Core_kernel_String[100],
       Core_kernel_String[101],
       Core_kernel_String[102],
       Core_kernel_String[103],
       Core_kernel_String[104],
       Core_kernel_String[105],
       Core_kernel_String[106],
       Core_kernel_String[107],
       Core_kernel_String[108],
       Core_kernel_String[109],
       Core_kernel_String[110],
       Core_kernel_String[111],
       Core_kernel_String[112],
       Core_kernel_String[113],
       Core_kernel_String[114],
       Core_kernel_String[115],
       Core_kernel_String[116],
       Core_kernel_String[117],
       Core_kernel_String[118],
       Core_kernel_String[119],
       Core_kernel_String[120],
       Core_kernel_String[121],
       Core_kernel_String[122],
       Core_kernel_String[123],
       Core_kernel_String[124],
       Core_kernel_String[125],
       Core_kernel_String[126],
       Core_kernel_String[127],
       Core_kernel_String[128]],
     Query_id=caml_call1(Core_kernel_Unique_id[2],[0]),
     _U_=Query_id[5],
     _V_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$2),0,_U_],0],
     _W_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_16_2),
     group$0=caml_call2(Bin_prot_Shape[6],_W_,_V_),
     _X_=caml_call1(Bin_prot_Shape[2][1],cst_t$3),
     bin_shape_t$1=caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_X_),0),
     _Y_=Query_id[1],
     _Z_=Query_id[2],
     bin_writer_t$0=[0,_Y_,_Z_],
     ___=Query_id[4],
     _$_=Query_id[3],
     bin_reader_t$0=[0,_$_,___],
     bin_t$0=[0,bin_shape_t$1,bin_writer_t$0,bin_reader_t$0],
     _aa_=Query_id[10],
     t=caml_call1(Query_id[45],0),
     Unused_query_id=
      [0,
       _Y_,
       _Z_,
       _$_,
       ___,
       bin_shape_t$1,
       bin_writer_t$0,
       bin_reader_t$0,
       bin_t$0,
       _aa_,
       t],
     _ab_=[0,[0,cst_Unknown_query_id,[0,Query_id[5],0]],0],
     _ac_=
      [0,
       caml_call2
        (Bin_prot_Shape[10],cst_Version,[0,Core_kernel_Int[135][1][5]]),
       0],
     _ad_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_41_41),
     _ae_=[0,caml_call2(Bin_prot_Shape[12],_ad_,_ac_),0],
     _ag_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,
         [0,cst_Bin_io_exn,[0,Core_kernel_Sexp[5],0]],
         [0,
          _af_,
          [0,
           [0,cst_Write_error,[0,Core_kernel_Sexp[5],0]],
           [0,
            [0,cst_Uncaught_exn,[0,Core_kernel_Sexp[5],0]],
            [0,[0,cst_Unimplemented_rpc,[0,Rpc_tag[5],_ae_]],_ab_]]]]]),
     _ah_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$4),0,_ag_],0],
     _ai_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_36_4),
     group$1=caml_call2(Bin_prot_Shape[6],_ai_,_ah_),
     _aj_=caml_call1(Bin_prot_Shape[2][1],cst_t$5),
     bin_shape_t$2=caml_call1(caml_call2(Bin_prot_Shape[14],group$1,_aj_),0);
    function bin_size_t$0(param)
     {if(typeof param === "number")
       return 1;
      else
       switch(param[0])
        {case 0:
          var v1=param[1],_s3_=caml_call1(Core_kernel_Sexp[1],v1);
          return caml_call2(Bin_prot_Common[23],1,_s3_);
         case 1:
          var v1$0=param[1],_s4_=caml_call1(Core_kernel_Sexp[1],v1$0);
          return caml_call2(Bin_prot_Common[23],1,_s4_);
         case 2:
          var v1$1=param[1],_s5_=caml_call1(Core_kernel_Sexp[1],v1$1);
          return caml_call2(Bin_prot_Common[23],1,_s5_);
         case 3:
          var
           v2=param[2],
           v1$2=param[1],
           _s6_=caml_call1(Rpc_tag[1],v1$2),
           size=caml_call2(Bin_prot_Common[23],1,_s6_),
           args=v2[2],
           size_args=caml_call1(Core_kernel_Int[135][1][1],args),
           _s7_=caml_call2(Bin_prot_Common[23],size_args,4);
          return caml_call2(Bin_prot_Common[23],size,_s7_);
         default:
          var v1$3=param[1],_s8_=caml_call1(Query_id[1],v1$3);
          return caml_call2(Bin_prot_Common[23],1,_s8_)}}
    function bin_write_t$0(buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[30],buf,pos,1);
      else
       switch(param[0])
        {case 0:
          var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,0);
          return caml_call3(Core_kernel_Sexp[2],buf,pos$0,v1);
         case 1:
          var v1$0=param[1],pos$1=caml_call3(Bin_prot_Write[30],buf,pos,2);
          return caml_call3(Core_kernel_Sexp[2],buf,pos$1,v1$0);
         case 2:
          var v1$1=param[1],pos$2=caml_call3(Bin_prot_Write[30],buf,pos,3);
          return caml_call3(Core_kernel_Sexp[2],buf,pos$2,v1$1);
         case 3:
          var
           v2=param[2],
           v1$2=param[1],
           pos$3=caml_call3(Bin_prot_Write[30],buf,pos,4),
           pos$4=caml_call3(Rpc_tag[2],buf,pos$3,v1$2),
           args=v2[2],
           pos$5=caml_call3(Bin_prot_Write[29],buf,pos$4,-901574920);
          return caml_call3(Core_kernel_Int[135][1][2],buf,pos$5,args);
         default:
          var v1$3=param[1],pos$6=caml_call3(Bin_prot_Write[30],buf,pos,5);
          return caml_call3(Query_id[2],buf,pos$6,v1$3)}}
    var bin_writer_t$1=[0,bin_size_t$0,bin_write_t$0];
    function bin_read_t$2(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Rpc_error_T_t,
               pos_ref[1])}
    function bin_read_t$3(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(5 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_ak_,pos_ref[1]);
      switch(match)
       {case 0:
         var arg_1=caml_call2(Core_kernel_Sexp[3],buf,pos_ref);
         return [0,arg_1];
        case 1:return 0;
        case 2:
         var arg_1$0=caml_call2(Core_kernel_Sexp[3],buf,pos_ref);
         return [1,arg_1$0];
        case 3:
         var arg_1$1=caml_call2(Core_kernel_Sexp[3],buf,pos_ref);
         return [2,arg_1$1];
        case 4:
         var
          arg_1$2=caml_call2(Rpc_tag[3],buf,pos_ref),
          vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
         try
          {if(-901574920 !== vint)throw Bin_prot_Common[13];
           var
            arg_1$3=caml_call2(Core_kernel_Int[135][1][3],buf,pos_ref),
            _s1_=[0,-901574920,arg_1$3],
            arg_2=_s1_}
         catch(_s2_)
          {_s2_ = caml_wrap_exception(_s2_);
           if(_s2_ !== Bin_prot_Common[13])throw _s2_;
           var
            arg_2=
             caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Rpc_error_T_t$0,
               pos_ref[1])}
         return [3,arg_1$2,arg_2];
        default:
         var arg_1$4=caml_call2(Query_id[3],buf,pos_ref);return [4,arg_1$4]}}
    var
     bin_reader_t$1=[0,bin_read_t$3,bin_read_t$2],
     bin_t$1=[0,bin_shape_t$2,bin_writer_t$1,bin_reader_t$1];
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       {var
         _sL_=sexp[1],
         _sM_=caml_string_compare(_sL_,cst_bin_io_exn),
         switch$0=
          0 <= _sM_
           ?0 < _sM_
             ?caml_string_notequal(_sL_,cst_connection_closed)
               ?caml_string_notequal(_sL_,cst_uncaught_exn)
                 ?caml_string_notequal(_sL_,cst_unimplemented_rpc)
                   ?caml_string_notequal(_sL_,cst_unknown_query_id)
                     ?caml_string_notequal(_sL_,cst_write_error)?6:2
                     :5
                   :4
                 :3
               :0
             :1
           :caml_string_notequal(_sL_,cst_Bin_io_exn$0)
             ?caml_string_notequal(_sL_,cst_Connection_closed)
               ?caml_string_notequal(_sL_,cst_Uncaught_exn$0)
                 ?caml_string_notequal(_sL_,cst_Unimplemented_rpc$0)
                   ?caml_string_notequal(_sL_,cst_Unknown_query_id$0)
                     ?caml_string_notequal(_sL_,cst_Write_error$0)?6:2
                     :5
                   :4
                 :3
               :0
             :1;
        switch(switch$0)
         {case 0:return 0;
          case 1:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp)
          }}
      else
       {var _sN_=sexp[1];
        if(! _sN_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,sexp);
        var _sO_=_sN_[1];
        if(0 !== _sO_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,sexp);
        var
         _sP_=_sO_[1],
         _sQ_=caml_string_compare(_sP_,cst_bin_io_exn$0),
         switch$1=
          0 <= _sQ_
           ?0 < _sQ_
             ?caml_string_notequal(_sP_,cst_connection_closed$0)
               ?caml_string_notequal(_sP_,cst_uncaught_exn$0)
                 ?caml_string_notequal(_sP_,cst_unimplemented_rpc$0)
                   ?caml_string_notequal(_sP_,cst_unknown_query_id$0)
                     ?caml_string_notequal(_sP_,cst_write_error$0)?6:1
                     :4
                   :3
                 :2
               :5
             :0
           :caml_string_notequal(_sP_,cst_Bin_io_exn$1)
             ?caml_string_notequal(_sP_,cst_Connection_closed$0)
               ?caml_string_notequal(_sP_,cst_Uncaught_exn$1)
                 ?caml_string_notequal(_sP_,cst_Unimplemented_rpc$1)
                   ?caml_string_notequal(_sP_,cst_Unknown_query_id$1)
                     ?caml_string_notequal(_sP_,cst_Write_error$1)?6:1
                     :4
                   :3
                 :2
               :5
             :0;
        switch(switch$1)
         {case 0:
           var sexp_args$3=_sN_[2];
           if(sexp_args$3)
            if(! sexp_args$3[2])
             {var
               v0$7=sexp_args$3[1],
               v0$8=caml_call1(Core_kernel_Sexp[89],v0$7);
              return [0,v0$8]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 1:
           var sexp_args=_sN_[2];
           if(sexp_args)
            if(! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Sexp[89],v0);
              return [1,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 2:
           var sexp_args$2=_sN_[2];
           if(sexp_args$2)
            if(! sexp_args$2[2])
             {var
               v0$5=sexp_args$2[1],
               v0$6=caml_call1(Core_kernel_Sexp[89],v0$5);
              return [2,v0$6]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 3:
           var sexp_args$1=_sN_[2];
           if(sexp_args$1)
            {var _sR_=sexp_args$1[2];
             if(_sR_)
              if(! _sR_[2])
               {var
                 v1=_sR_[1],
                 v0$3=sexp_args$1[1],
                 v0$4=caml_call1(Rpc_tag[9],v0$3),
                 v1$0=
                  function(sexp)
                    {try
                      {if(0 === sexp[0])
                        var
                         atom=sexp[1],
                         _sS_=
                          caml_string_notequal(atom,cst_Version$0)
                           ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                           :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$0,sexp),
                         _sT_=_sS_;
                       else
                        {var _sU_=sexp[1];
                         if(_sU_)
                          {var _sV_=_sU_[1];
                           if(0 === _sV_[0])
                            {var sexp_args=_sU_[2],atom$0=_sV_[1];
                             if(caml_string_notequal(atom$0,cst_Version$1))
                              var _sW_=caml_call1(Sexplib0_Sexp_conv_error[18],0);
                             else
                              {if(sexp_args)
                                if(sexp_args[2])
                                 var switch$0=0;
                                else
                                 var
                                  v0=sexp_args[1],
                                  v0$0=caml_call1(Core_kernel_Int[135][1][10],v0),
                                  _sZ_=[0,-901574920,v0$0],
                                  switch$0=1;
                               else
                                var switch$0=0;
                               if(! switch$0)
                                var
                                 _sZ_=
                                  caml_call3
                                   (Sexplib0_Sexp_conv_error[21],tp_loc$0,atom$0,sexp);
                               var _sW_=_sZ_}
                             var _sX_=_sW_}
                           else
                            var
                             _sX_=
                              caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$0,sexp);
                           var _sY_=_sX_}
                         else
                          var
                           _sY_=
                            caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$0,sexp);
                         var _sT_=_sY_}
                       return _sT_}
                     catch(_s0_)
                      {_s0_ = caml_wrap_exception(_s0_);
                       if(_s0_ === Sexplib0_Sexp_conv_error[17])
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[19],tp_loc$0,sexp);
                       throw _s0_}}
                   (v1);
                return [3,v0$4,v1$0]}}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 4:
           var sexp_args$0=_sN_[2];
           if(sexp_args$0)
            if(! sexp_args$0[2])
             {var v0$1=sexp_args$0[1],v0$2=caml_call1(Query_id[9],v0$1);
              return [4,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,sexp)}
    function sexp_of_t$0(param)
     {if(typeof param === "number")
       return _al_;
      else
       switch(param[0])
        {case 0:
          var v0=param[1],v0$0=caml_call1(Core_kernel_Sexp[88],v0);
          return [1,[0,_am_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=caml_call1(Core_kernel_Sexp[88],v0$1);
          return [1,[0,_an_,[0,v0$2,0]]];
         case 2:
          var v0$3=param[1],v0$4=caml_call1(Core_kernel_Sexp[88],v0$3);
          return [1,[0,_ao_,[0,v0$4,0]]];
         case 3:
          var
           v1=param[2],
           v0$5=param[1],
           v0$6=caml_call1(Rpc_tag[10],v0$5),
           v0$7=v1[2],
           v1$0=
            [1,[0,_ap_,[0,caml_call1(Core_kernel_Int[135][1][11],v0$7),0]]];
          return [1,[0,_aq_,[0,v0$6,[0,v1$0,0]]]];
         default:
          var v0$8=param[1],v0$9=caml_call1(Query_id[10],v0$8);
          return [1,[0,_ar_,[0,v0$9,0]]]}}
    function compare$0(a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       if(typeof match === "number")
        return 0;
       else
        {if(0 !== match[0])return -1;var switch$0=0}
      else
       switch(a_001[0])
        {case 0:
          var _sF_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];
            return caml_call2(Core_kernel_Sexp[35],_sF_,b_004)}
          return -1;
         case 1:
          var _sG_=a_001[1];
          if(typeof match === "number")
           var switch$0=1;
          else
           switch(match[0])
            {case 0:var switch$0=0;break;
             case 1:
              var b_006=match[1];
              return caml_call2(Core_kernel_Sexp[35],_sG_,b_006);
             default:return -1}
          break;
         case 2:
          var _sH_=a_001[1];
          if(typeof match === "number")
           var switch$0=1;
          else
           switch(match[0])
            {case 0:var switch$0=0;break;
             case 1:var switch$0=2;break;
             case 2:
              var b_008=match[1];
              return caml_call2(Core_kernel_Sexp[35],_sH_,b_008);
             default:return -1}
          break;
         case 3:
          var _sI_=a_001[2],_sJ_=a_001[1];
          if(typeof match === "number")
           var switch$0=1;
          else
           switch(match[0])
            {case 0:var switch$0=0;break;
             case 1:var switch$0=2;break;
             case 2:var switch$0=3;break;
             case 3:
              var
               b_012=match[2],
               b_010=match[1],
               n=caml_call2(Rpc_tag[21],_sJ_,b_010);
              if(0 === n)
               {if(caml_call2(Ppx_compare_lib[1],_sI_,b_012))return 0;
                var right_014=b_012[2],left_013=_sI_[2];
                return caml_call2
                        (Core_kernel_Int[135][1][9],left_013,right_014)}
              return n;
             default:return -1}
          break;
         default:
          var _sK_=a_001[1];
          if(typeof match === "number")
           var switch$0=1;
          else
           switch(match[0])
            {case 0:var switch$0=0;break;
             case 1:var switch$0=2;break;
             case 2:var switch$0=3;break;
             case 3:return 1;
             default:
              var b_016=match[1];return caml_call2(Query_id[20],_sK_,b_016)}}
      switch(switch$0)
       {case 0:return 1;case 1:return 1;case 2:return 1;default:return 1}}
    var
     Expect_test_collector$0=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _as_(param)
     {var
       _sC_=caml_call1(Bin_prot_Shape[21],bin_shape_t$2),
       _sD_=caml_call1(Bin_prot_Shape[18][4],_sC_);
      caml_call1(Stdlib[46],_sD_);
      var
       _sE_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$0),
         47,
         1254,
         1262,
         1268];
      return caml_call1(Expect_test_collector$0[1],_sE_)}
    var
     _at_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$1),
       47,
       1254,
       1269,
       1307],
     _aw_=
      [0,
       [0,
        _av_,
        _au_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$2),
         47,
         1254,
         1262,
         1268],
        _at_],
       0],
     _ay_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$4),
       45,
       1185,
       1189,
       1308],
     _az_=
      caml_call1
       (Expect_test_common_File[4][3],cst_b994a02f0f1fc5a7441e1529c57785ca);
    caml_call9
     (Expect_test_collector$0[3],
      _az_,
      _ay_,
      cst_src_protocol_ml$3,
      _ax_,
      0,
      _aw_,
      0,
      Inline_test_config,
      _as_);
    var
     include$0=
      caml_call1
       (Core_kernel_Comparable[6],[0,compare$0,t_of_sexp$0,sexp_of_t$0]),
     symbol=include$0[1],
     symbol$0=include$0[2],
     symbol$1=include$0[3],
     symbol$2=include$0[4],
     symbol$3=include$0[5],
     symbol$4=include$0[6],
     equal=include$0[7],
     compare$1=include$0[8],
     min=include$0[9],
     max=include$0[10],
     ascending=include$0[11],
     descending=include$0[12],
     between=include$0[13],
     clamp_exn=include$0[14],
     clamp=include$0[15],
     comparator=include$0[16],
     validate_lbound=include$0[17],
     validate_ubound=include$0[18],
     validate_bound=include$0[19],
     Replace_polymorphic_compare=include$0[20],
     Map=include$0[21],
     Set=include$0[22],
     Rpc_error=
      [0,
       bin_size_t$0,
       bin_write_t$0,
       bin_read_t$3,
       bin_read_t$2,
       bin_shape_t$2,
       bin_writer_t$1,
       bin_reader_t$1,
       bin_t$1,
       t_of_sexp$0,
       sexp_of_t$0,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare$1,
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
       Replace_polymorphic_compare,
       Map,
       Set],
     _aA_=Rpc_error[5],
     _aB_=caml_call1(Bin_prot_Shape[3][1],cst_a),
     _aC_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_56_15),
     _aD_=caml_call2(Bin_prot_Shape[15],_aC_,_aB_),
     _aE_=caml_call1(caml_call1(Core_kernel_Result[1],_aD_),_aA_),
     _aF_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$0),0],
     _aG_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$6),_aF_,_aE_],0],
     _aH_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_56_2),
     group$2=caml_call2(Bin_prot_Shape[6],_aH_,_aG_);
    function bin_shape_t$3(a)
     {var _sB_=caml_call1(Bin_prot_Shape[2][1],cst_t$7);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$2,_sB_),[0,a,0])}
    function bin_size_t$1(size_of_a,v)
     {return caml_call3(Core_kernel_Result[2],size_of_a,Rpc_error[1],v)}
    function bin_write_t$1(write_a,buf,pos,v)
     {return caml_call3
              (caml_call2(Core_kernel_Result[3],write_a,Rpc_error[2]),
               buf,
               pos,
               v)}
    function bin_writer_t$2(bin_writer_a)
     {function _sx_(v)
       {var _sy_=bin_writer_a[2];
        return function(_sz_,_sA_){return bin_write_t$1(_sy_,v,_sz_,_sA_)}}
      return [0,function(v){return bin_size_t$1(bin_writer_a[1],v)},_sx_]}
    function bin_read_t$4(of_a,buf,pos_ref,vint)
     {return caml_call3
              (caml_call2(Core_kernel_Result[5],of_a,Rpc_error[3]),
               buf,
               pos_ref,
               vint)}
    function bin_read_t$5(of_a,buf,pos_ref)
     {return caml_call2
              (caml_call2(Core_kernel_Result[4],of_a,Rpc_error[3]),
               buf,
               pos_ref)}
    function bin_reader_t$2(bin_reader_a)
     {function _sw_(buf,pos_ref,vtag)
       {return bin_read_t$4(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$5(bin_reader_a[1],buf,pos_ref)},
              _sw_]}
    function bin_t$2(bin_a)
     {var _su_=bin_reader_t$2(bin_a[3]),_sv_=bin_writer_t$2(bin_a[2]);
      return [0,bin_shape_t$3(bin_a[1]),_sv_,_su_]}
    function sexp_of_t$1(of_a,v)
     {return caml_call3(Core_kernel_Result[10],of_a,Rpc_error[10],v)}
    var
     Rpc_result=
      [0,
       bin_shape_t$3,
       bin_size_t$1,
       bin_write_t$1,
       bin_writer_t$2,
       bin_read_t$4,
       bin_read_t$5,
       bin_reader_t$2,
       bin_t$2,
       sexp_of_t$1],
     _aI_=caml_call1(Bin_prot_Shape[3][1],cst_a$1),
     _aJ_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_66_16),
     _aK_=[0,[0,cst_data,caml_call2(Bin_prot_Shape[15],_aJ_,_aI_)],0],
     _aL_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_tag,Rpc_tag[5]],
         [0,
          [0,cst_version$2,Bin_prot_Std[80]],
          [0,[0,cst_id,Query_id[5]],_aK_]]]),
     _aM_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$2),0],
     _aN_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length),_aM_,_aL_],0],
     _aO_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_62_2),
     group$3=caml_call2(Bin_prot_Shape[6],_aO_,_aN_);
    function bin_shape_needs_length(a)
     {var _st_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$0);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$3,_st_),[0,a,0])}
    function bin_size_needs_length(size_of_a,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       _sp_=caml_call1(Rpc_tag[1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_sp_),
       _sq_=caml_call1(Bin_prot_Std[6],v2),
       size$0=caml_call2(Bin_prot_Common[23],size,_sq_),
       _sr_=caml_call1(Query_id[1],v3),
       size$1=caml_call2(Bin_prot_Common[23],size$0,_sr_),
       _ss_=caml_call1(size_of_a,v4);
      return caml_call2(Bin_prot_Common[23],size$1,_ss_)}
    function bin_write_needs_length(write_a,buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Rpc_tag[2],buf,pos,v1),
       pos$1=caml_call3(Bin_prot_Std[82],buf,pos$0,v2),
       pos$2=caml_call3(Query_id[2],buf,pos$1,v3);
      return caml_call3(write_a,buf,pos$2,v4)}
    function bin_writer_needs_length(bin_writer_a)
     {function _sl_(v)
       {var _sm_=bin_writer_a[2];
        return function(_sn_,_so_)
         {return bin_write_needs_length(_sm_,v,_sn_,_so_)}}
      return [0,
              function(v){return bin_size_needs_length(bin_writer_a[1],v)},
              _sl_]}
    function bin_read_needs_length(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Query_needs_length,
               pos_ref[1])}
    function bin_read_needs_length$0(of_a,buf,pos_ref)
     {var
       v_tag=caml_call2(Rpc_tag[3],buf,pos_ref),
       v_version=caml_call2(Bin_prot_Std[84],buf,pos_ref),
       v_id=caml_call2(Query_id[3],buf,pos_ref),
       v_data=caml_call2(of_a,buf,pos_ref);
      return [0,v_tag,v_version,v_id,v_data]}
    function bin_reader_needs_length(bin_reader_a)
     {function _sk_(buf,pos_ref,vtag)
       {return bin_read_needs_length(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$0(bin_reader_a[1],buf,pos_ref)},
              _sk_]}
    function bin_needs_length(bin_a)
     {var
       _si_=bin_reader_needs_length(bin_a[3]),
       _sj_=bin_writer_needs_length(bin_a[2]);
      return [0,bin_shape_needs_length(bin_a[1]),_sj_,_si_]}
    function sexp_of_needs_length(of_a,param)
     {var
       v_data=param[4],
       v_id=param[3],
       v_version=param[2],
       v_tag=param[1],
       arg=caml_call1(of_a,v_data),
       bnds=[0,[1,[0,_aP_,[0,arg,0]]],0],
       arg$0=caml_call1(Query_id[10],v_id),
       bnds$0=[0,[1,[0,_aQ_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Sexplib_Std[11],v_version),
       bnds$1=[0,[1,[0,_aR_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Rpc_tag[10],v_tag),
       bnds$2=[0,[1,[0,_aS_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function bin_read_t$6(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length(of_a,buf,pos_ref,vint)}
    function bin_read_t$7(of_a,buf,pos_ref)
     {return bin_read_needs_length$0(of_a,buf,pos_ref)}
    function bin_reader_t$3(bin_reader_a)
     {function _sh_(buf,pos_ref,vtag)
       {return bin_read_t$6(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$7(bin_reader_a[1],buf,pos_ref)},
              _sh_]}
    var
     Query=
      [0,
       bin_shape_needs_length,
       bin_size_needs_length,
       bin_write_needs_length,
       bin_writer_needs_length,
       bin_read_needs_length,
       bin_read_needs_length$0,
       bin_reader_needs_length,
       bin_needs_length,
       sexp_of_needs_length,
       bin_read_t$6,
       bin_read_t$7,
       bin_reader_t$3],
     _aT_=caml_call1(Bin_prot_Shape[3][1],cst_a$3),
     _aU_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_75_13),
     _aV_=caml_call2(Bin_prot_Shape[15],_aU_,_aT_),
     _aW_=[0,[0,cst_data$0,caml_call1(Rpc_result[1],_aV_)],0],
     _aX_=caml_call1(Bin_prot_Shape[8],[0,[0,cst_id$0,Query_id[5]],_aW_]),
     _aY_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$4),0],
     _aZ_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$1),_aY_,_aX_],0],
     _a0_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_73_2),
     group$4=caml_call2(Bin_prot_Shape[6],_a0_,_aZ_);
    function bin_shape_needs_length$0(a)
     {var _sg_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$2);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$4,_sg_),[0,a,0])}
    function bin_size_needs_length$0(size_of_a,param)
     {var
       v2=param[2],
       v1=param[1],
       _se_=caml_call1(Query_id[1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_se_),
       _sf_=caml_call2(Rpc_result[2],size_of_a,v2);
      return caml_call2(Bin_prot_Common[23],size,_sf_)}
    function bin_write_needs_length$0(write_a,buf,pos,param)
     {var v2=param[2],v1=param[1],pos$0=caml_call3(Query_id[2],buf,pos,v1);
      return caml_call3(caml_call1(Rpc_result[3],write_a),buf,pos$0,v2)}
    function bin_writer_needs_length$0(bin_writer_a)
     {function _sa_(v)
       {var _sb_=bin_writer_a[2];
        return function(_sc_,_sd_)
         {return bin_write_needs_length$0(_sb_,v,_sc_,_sd_)}}
      return [0,
              function(v){return bin_size_needs_length$0(bin_writer_a[1],v)},
              _sa_]}
    function bin_read_needs_length$1(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Response_needs_length,
               pos_ref[1])}
    function bin_read_needs_length$2(of_a,buf,pos_ref)
     {var
       v_id=caml_call2(Query_id[3],buf,pos_ref),
       v_data=caml_call2(caml_call1(Rpc_result[6],of_a),buf,pos_ref);
      return [0,v_id,v_data]}
    function bin_reader_needs_length$0(bin_reader_a)
     {function _r$_(buf,pos_ref,vtag)
       {return bin_read_needs_length$1(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$2(bin_reader_a[1],buf,pos_ref)},
              _r$_]}
    function bin_needs_length$0(bin_a)
     {var
       _r9_=bin_reader_needs_length$0(bin_a[3]),
       _r__=bin_writer_needs_length$0(bin_a[2]);
      return [0,bin_shape_needs_length$0(bin_a[1]),_r__,_r9_]}
    function sexp_of_needs_length$0(of_a,param)
     {var
       v_data=param[2],
       v_id=param[1],
       arg=caml_call2(Rpc_result[9],of_a,v_data),
       bnds=[0,[1,[0,_a1_,[0,arg,0]]],0],
       arg$0=caml_call1(Query_id[10],v_id),
       bnds$0=[0,[1,[0,_a2_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function bin_read_t$8(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$1(of_a,buf,pos_ref,vint)}
    function bin_read_t$9(of_a,buf,pos_ref)
     {return bin_read_needs_length$2(of_a,buf,pos_ref)}
    function bin_reader_t$4(bin_reader_a)
     {function _r8_(buf,pos_ref,vtag)
       {return bin_read_t$8(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$9(bin_reader_a[1],buf,pos_ref)},
              _r8_]}
    var
     Response=
      [0,
       bin_shape_needs_length$0,
       bin_size_needs_length$0,
       bin_write_needs_length$0,
       bin_writer_needs_length$0,
       bin_read_needs_length$1,
       bin_read_needs_length$2,
       bin_reader_needs_length$0,
       bin_needs_length$0,
       sexp_of_needs_length$0,
       bin_read_t$8,
       bin_read_t$9,
       bin_reader_t$4],
     _a3_=[0,caml_call2(Bin_prot_Shape[10],cst_Abort,0),0],
     _a4_=caml_call1(Bin_prot_Shape[3][1],cst_a$5),
     _a5_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_82_36),
     _a6_=[0,caml_call2(Bin_prot_Shape[15],_a5_,_a4_)],
     _a7_=[0,caml_call2(Bin_prot_Shape[10],cst_Query,_a6_),_a3_],
     _a8_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_82_25),
     _a9_=caml_call2(Bin_prot_Shape[12],_a8_,_a7_),
     _a__=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$6),0],
     _a$_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$3),_a__,_a9_],0],
     _ba_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_82_2),
     group$5=caml_call2(Bin_prot_Shape[6],_ba_,_a$_);
    function bin_shape_needs_length$1(a)
     {var _r7_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$4);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$5,_r7_),[0,a,0])}
    function bin_size_needs_length$1(size_of_a,param)
     {if(typeof param !== "number")
       if(-250086680 === param[1])
        {var args=param[2],size_args=caml_call1(size_of_a,args);
         return caml_call2(Bin_prot_Common[23],size_args,4)}
      return 4}
    function bin_write_needs_length$1(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[29],buf,pos,774323088);
      var
       args=param[2],
       pos$0=caml_call3(Bin_prot_Write[29],buf,pos,-250086680);
      return caml_call3(write_a,buf,pos$0,args)}
    function bin_writer_needs_length$1(bin_writer_a)
     {function _r3_(v)
       {var _r4_=bin_writer_a[2];
        return function(_r5_,_r6_)
         {return bin_write_needs_length$1(_r4_,v,_r5_,_r6_)}}
      return [0,
              function(v){return bin_size_needs_length$1(bin_writer_a[1],v)},
              _r3_]}
    function bin_read_needs_length$3(of_a,buf,pos_ref,vint)
     {if(-250086680 === vint)
       {var arg_1=caml_call2(of_a,buf,pos_ref);return [0,-250086680,arg_1]}
      if(774323088 === vint)return 774323088;
      throw Bin_prot_Common[13]}
    function bin_read_needs_length$4(of_a,buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var
         _rY_=
          function(_r0_,_r1_,_r2_)
            {return bin_read_needs_length$3(of_a,_r0_,_r1_,_r2_)}
           (buf,pos_ref,vint);
        return _rY_}
      catch(_rZ_)
       {_rZ_ = caml_wrap_exception(_rZ_);
        if(_rZ_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err,pos_ref[1]);
        throw _rZ_}}
    function bin_reader_needs_length$1(bin_reader_a)
     {function _rX_(buf,pos_ref,vtag)
       {return bin_read_needs_length$3(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$4(bin_reader_a[1],buf,pos_ref)},
              _rX_]}
    function bin_needs_length$1(bin_a)
     {var
       _rV_=bin_reader_needs_length$1(bin_a[3]),
       _rW_=bin_writer_needs_length$1(bin_a[2]);
      return [0,bin_shape_needs_length$1(bin_a[1]),_rW_,_rV_]}
    function bin_read_t$10(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$3(of_a,buf,pos_ref,vint)}
    function bin_read_t$11(of_a,buf,pos_ref)
     {return bin_read_needs_length$4(of_a,buf,pos_ref)}
    function bin_reader_t$5(bin_reader_a)
     {function _rU_(buf,pos_ref,vtag)
       {return bin_read_t$10(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$11(bin_reader_a[1],buf,pos_ref)},
              _rU_]}
    function bin_read_nat0_t(buf,pos_ref,vint)
     {return bin_read_needs_length$3(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$0(buf,pos_ref)
     {return bin_read_needs_length$4(_g_,buf,pos_ref)}
    var bin_reader_nat0_t=[0,bin_read_nat0_t$0,bin_read_nat0_t];
    function bin_size_nat0_t(v){return bin_size_needs_length$1(_c_,v)}
    function bin_write_nat0_t(buf,pos,v)
     {return bin_write_needs_length$1(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t=[0,bin_size_nat0_t,bin_write_nat0_t],
     Stream_query=
      [0,
       bin_shape_needs_length$1,
       bin_size_needs_length$1,
       bin_write_needs_length$1,
       bin_writer_needs_length$1,
       bin_read_needs_length$3,
       bin_read_needs_length$4,
       bin_reader_needs_length$1,
       bin_needs_length$1,
       bin_read_t$10,
       bin_read_t$11,
       bin_reader_t$5,
       bin_read_nat0_t,
       bin_read_nat0_t$0,
       bin_reader_nat0_t,
       bin_size_nat0_t,
       bin_write_nat0_t,
       bin_writer_nat0_t],
     _bb_=caml_call1(Bin_prot_Shape[3][1],cst_error),
     _bc_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_90_36),
     _bd_=caml_call2(Bin_prot_Shape[15],_bc_,_bb_),
     _be_=caml_call1(Bin_prot_Shape[3][1],cst_response),
     _bf_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_90_25),
     _bg_=caml_call2(Bin_prot_Shape[15],_bf_,_be_),
     _bh_=
      [0,
       [0,cst_initial,caml_call1(caml_call1(Core_kernel_Result[1],_bg_),_bd_)],
       0],
     _bi_=
      caml_call1
       (Bin_prot_Shape[8],[0,[0,cst_unused_query_id,Unused_query_id[5]],_bh_]),
     _bj_=[0,caml_call1(Bin_prot_Shape[3][1],cst_error$0),0],
     _bk_=[0,caml_call1(Bin_prot_Shape[3][1],cst_response$0),_bj_],
     _bl_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$8),_bk_,_bi_],0],
     _bm_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_88_2),
     group$6=caml_call2(Bin_prot_Shape[6],_bm_,_bl_);
    function bin_shape_t$4(response,error)
     {var _rT_=caml_call1(Bin_prot_Shape[2][1],cst_t$9);
      return caml_call1
              (caml_call2(Bin_prot_Shape[14],group$6,_rT_),
               [0,response,[0,error,0]])}
    function bin_size_t$2(size_of_response,size_of_error,param)
     {var
       v2=param[2],
       v1=param[1],
       _rR_=caml_call1(Unused_query_id[1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_rR_),
       _rS_=
        caml_call3(Core_kernel_Result[2],size_of_response,size_of_error,v2);
      return caml_call2(Bin_prot_Common[23],size,_rS_)}
    function bin_write_t$2(write_response,write_error,buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Unused_query_id[2],buf,pos,v1);
      return caml_call3
              (caml_call2(Core_kernel_Result[3],write_response,write_error),
               buf,
               pos$0,
               v2)}
    function bin_writer_t$3(bin_writer_response,bin_writer_error)
     {function _rM_(v)
       {var _rN_=bin_writer_error[2],_rO_=bin_writer_response[2];
        return function(_rP_,_rQ_)
         {return bin_write_t$2(_rO_,_rN_,v,_rP_,_rQ_)}}
      return [0,
              function(v)
               {return bin_size_t$2
                        (bin_writer_response[1],bin_writer_error[1],v)},
              _rM_]}
    function bin_read_t$12(of_response,of_error,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Stream_initial_message_t,
               pos_ref[1])}
    function bin_read_t$13(of_response,of_error,buf,pos_ref)
     {var
       v_unused_query_id=caml_call2(Unused_query_id[3],buf,pos_ref),
       v_initial=
        caml_call2
         (caml_call2(Core_kernel_Result[4],of_response,of_error),buf,pos_ref);
      return [0,v_unused_query_id,v_initial]}
    function bin_reader_t$6(bin_reader_response,bin_reader_error)
     {function _rL_(buf,pos_ref,vtag)
       {return bin_read_t$12
                (bin_reader_response[1],bin_reader_error[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$13
                        (bin_reader_response[1],bin_reader_error[1],buf,pos_ref)},
              _rL_]}
    function bin_t$3(bin_response,bin_error)
     {var
       _rJ_=bin_reader_t$6(bin_response[3],bin_error[3]),
       _rK_=bin_writer_t$3(bin_response[2],bin_error[2]);
      return [0,bin_shape_t$4(bin_response[1],bin_error[1]),_rK_,_rJ_]}
    function sexp_of_t$2(of_response,of_error,param)
     {var
       v_initial=param[2],
       v_unused_query_id=param[1],
       arg=caml_call3(Core_kernel_Result[10],of_response,of_error,v_initial),
       bnds=[0,[1,[0,_bn_,[0,arg,0]]],0],
       arg$0=caml_call1(Unused_query_id[9],v_unused_query_id),
       bnds$0=[0,[1,[0,_bo_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     Stream_initial_message=
      [0,
       bin_shape_t$4,
       bin_size_t$2,
       bin_write_t$2,
       bin_writer_t$3,
       bin_read_t$12,
       bin_read_t$13,
       bin_reader_t$6,
       bin_t$3,
       sexp_of_t$2],
     _bp_=[0,caml_call2(Bin_prot_Shape[10],cst_Eof,0),0],
     _bq_=caml_call1(Bin_prot_Shape[3][1],cst_a$7),
     _br_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_96_33),
     _bs_=[0,caml_call2(Bin_prot_Shape[15],_br_,_bq_)],
     _bt_=[0,caml_call2(Bin_prot_Shape[10],cst_Ok,_bs_),_bp_],
     _bu_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_96_25),
     _bv_=caml_call2(Bin_prot_Shape[12],_bu_,_bt_),
     _bw_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$8),0],
     _bx_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$5),_bw_,_bv_],0],
     _by_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_96_2),
     group$7=caml_call2(Bin_prot_Shape[6],_by_,_bx_);
    function bin_shape_needs_length$2(a)
     {var _rI_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$6);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$7,_rI_),[0,a,0])}
    function bin_size_needs_length$2(size_of_a,param)
     {if(typeof param !== "number")
       if(17724 === param[1])
        {var args=param[2],size_args=caml_call1(size_of_a,args);
         return caml_call2(Bin_prot_Common[23],size_args,4)}
      return 4}
    function bin_write_needs_length$2(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[29],buf,pos,3456156);
      var args=param[2],pos$0=caml_call3(Bin_prot_Write[29],buf,pos,17724);
      return caml_call3(write_a,buf,pos$0,args)}
    function bin_writer_needs_length$2(bin_writer_a)
     {function _rE_(v)
       {var _rF_=bin_writer_a[2];
        return function(_rG_,_rH_)
         {return bin_write_needs_length$2(_rF_,v,_rG_,_rH_)}}
      return [0,
              function(v){return bin_size_needs_length$2(bin_writer_a[1],v)},
              _rE_]}
    function bin_read_needs_length$5(of_a,buf,pos_ref,vint)
     {if(17724 === vint)
       {var arg_1=caml_call2(of_a,buf,pos_ref);return [0,17724,arg_1]}
      if(3456156 === vint)return 3456156;
      throw Bin_prot_Common[13]}
    function bin_read_needs_length$6(of_a,buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var
         _rz_=
          function(_rB_,_rC_,_rD_)
            {return bin_read_needs_length$5(of_a,_rB_,_rC_,_rD_)}
           (buf,pos_ref,vint);
        return _rz_}
      catch(_rA_)
       {_rA_ = caml_wrap_exception(_rA_);
        if(_rA_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err$0,pos_ref[1]);
        throw _rA_}}
    function bin_reader_needs_length$2(bin_reader_a)
     {function _ry_(buf,pos_ref,vtag)
       {return bin_read_needs_length$5(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$6(bin_reader_a[1],buf,pos_ref)},
              _ry_]}
    function bin_needs_length$2(bin_a)
     {var
       _rw_=bin_reader_needs_length$2(bin_a[3]),
       _rx_=bin_writer_needs_length$2(bin_a[2]);
      return [0,bin_shape_needs_length$2(bin_a[1]),_rx_,_rw_]}
    function bin_read_t$14(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$5(of_a,buf,pos_ref,vint)}
    function bin_read_t$15(of_a,buf,pos_ref)
     {return bin_read_needs_length$6(of_a,buf,pos_ref)}
    function bin_reader_t$7(bin_reader_a)
     {function _rv_(buf,pos_ref,vtag)
       {return bin_read_t$14(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$15(bin_reader_a[1],buf,pos_ref)},
              _rv_]}
    function bin_read_nat0_t$1(buf,pos_ref,vint)
     {return bin_read_needs_length$5(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$2(buf,pos_ref)
     {return bin_read_needs_length$6(_g_,buf,pos_ref)}
    var bin_reader_nat0_t$0=[0,bin_read_nat0_t$2,bin_read_nat0_t$1];
    function bin_size_nat0_t$0(v){return bin_size_needs_length$2(_c_,v)}
    function bin_write_nat0_t$0(buf,pos,v)
     {return bin_write_needs_length$2(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t$0=[0,bin_size_nat0_t$0,bin_write_nat0_t$0],
     Stream_response_data=
      [0,
       bin_shape_needs_length$2,
       bin_size_needs_length$2,
       bin_write_needs_length$2,
       bin_writer_needs_length$2,
       bin_read_needs_length$5,
       bin_read_needs_length$6,
       bin_reader_needs_length$2,
       bin_needs_length$2,
       bin_read_t$14,
       bin_read_t$15,
       bin_reader_t$7,
       bin_read_nat0_t$1,
       bin_read_nat0_t$2,
       bin_reader_nat0_t$0,
       bin_size_nat0_t$0,
       bin_write_nat0_t$0,
       bin_writer_nat0_t$0],
     _bz_=caml_call1(Bin_prot_Shape[3][1],cst_a$9),
     _bA_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_105_19),
     _bB_=caml_call2(Bin_prot_Shape[15],_bA_,_bz_),
     _bC_=[0,[0,cst_Response,[0,caml_call1(Response[1],_bB_),0]],0],
     _bD_=caml_call1(Bin_prot_Shape[3][1],cst_a$10),
     _bE_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_104_19),
     _bF_=caml_call2(Bin_prot_Shape[15],_bE_,_bD_),
     _bH_=[0,_bG_,[0,[0,cst_Query$0,[0,caml_call1(Query[1],_bF_),0]],_bC_]],
     _bI_=caml_call1(Bin_prot_Shape[9],_bH_),
     _bJ_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$11),0],
     _bK_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$7),_bJ_,_bI_],0],
     _bL_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_102_2),
     group$8=caml_call2(Bin_prot_Shape[6],_bL_,_bK_);
    function bin_shape_needs_length$3(a)
     {var _ru_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$8);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$8,_ru_),[0,a,0])}
    function bin_size_needs_length$3(size_of_a,param)
     {if(typeof param === "number")
       return 1;
      else
       {if(0 === param[0])
         {var v1=param[1],_rs_=caml_call2(Query[2],size_of_a,v1);
          return caml_call2(Bin_prot_Common[23],1,_rs_)}
        var v1$0=param[1],_rt_=caml_call2(Response[2],size_of_a,v1$0);
        return caml_call2(Bin_prot_Common[23],1,_rt_)}}
    function bin_write_needs_length$3(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[30],buf,pos,0);
      else
       {if(0 === param[0])
         {var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,1);
          return caml_call3(caml_call1(Query[3],write_a),buf,pos$0,v1)}
        var v1$0=param[1],pos$1=caml_call3(Bin_prot_Write[30],buf,pos,2);
        return caml_call3(caml_call1(Response[3],write_a),buf,pos$1,v1$0)}}
    function bin_writer_needs_length$3(bin_writer_a)
     {function _ro_(v)
       {var _rp_=bin_writer_a[2];
        return function(_rq_,_rr_)
         {return bin_write_needs_length$3(_rp_,v,_rq_,_rr_)}}
      return [0,
              function(v){return bin_size_needs_length$3(bin_writer_a[1],v)},
              _ro_]}
    function bin_read_needs_length$7(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Message_needs_length,
               pos_ref[1])}
    function bin_read_needs_length$8(of_a,buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_bM_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:
         var arg_1=caml_call2(caml_call1(Query[6],of_a),buf,pos_ref);
         return [0,arg_1];
        default:
         var arg_1$0=caml_call2(caml_call1(Response[6],of_a),buf,pos_ref);
         return [1,arg_1$0]}}
    function bin_reader_needs_length$3(bin_reader_a)
     {function _rn_(buf,pos_ref,vtag)
       {return bin_read_needs_length$7(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$8(bin_reader_a[1],buf,pos_ref)},
              _rn_]}
    function bin_needs_length$3(bin_a)
     {var
       _rl_=bin_reader_needs_length$3(bin_a[3]),
       _rm_=bin_writer_needs_length$3(bin_a[2]);
      return [0,bin_shape_needs_length$3(bin_a[1]),_rm_,_rl_]}
    function sexp_of_needs_length$1(of_a,param)
     {if(typeof param === "number")
       return _bN_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call2(Query[9],of_a,v0);
          return [1,[0,_bO_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call2(Response[9],of_a,v0$1);
        return [1,[0,_bP_,[0,v0$2,0]]]}}
    function bin_read_t$16(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$7(of_a,buf,pos_ref,vint)}
    function bin_read_t$17(of_a,buf,pos_ref)
     {return bin_read_needs_length$8(of_a,buf,pos_ref)}
    function bin_reader_t$8(bin_reader_a)
     {function _rk_(buf,pos_ref,vtag)
       {return bin_read_t$16(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$17(bin_reader_a[1],buf,pos_ref)},
              _rk_]}
    function bin_read_nat0_t$3(buf,pos_ref,vint)
     {return bin_read_needs_length$7(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$4(buf,pos_ref)
     {return bin_read_needs_length$8(_g_,buf,pos_ref)}
    var bin_reader_nat0_t$1=[0,bin_read_nat0_t$4,bin_read_nat0_t$3];
    function bin_size_nat0_t$1(v){return bin_size_needs_length$3(_c_,v)}
    function bin_write_nat0_t$1(buf,pos,v)
     {return bin_write_needs_length$3(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t$1=[0,bin_size_nat0_t$1,bin_write_nat0_t$1],
     Message=
      [0,
       bin_shape_needs_length$3,
       bin_size_needs_length$3,
       bin_write_needs_length$3,
       bin_writer_needs_length$3,
       bin_read_needs_length$7,
       bin_read_needs_length$8,
       bin_reader_needs_length$3,
       bin_needs_length$3,
       sexp_of_needs_length$1,
       bin_read_t$16,
       bin_read_t$17,
       bin_reader_t$8,
       sexp_of_needs_length$1,
       bin_read_nat0_t$3,
       bin_read_nat0_t$4,
       bin_reader_nat0_t$1,
       bin_size_nat0_t$1,
       bin_write_nat0_t$1,
       bin_writer_nat0_t$1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Protocol=
      [0,
       Rpc_tag,
       Query_id,
       Unused_query_id,
       Rpc_error,
       Rpc_result,
       Query,
       Response,
       Stream_query,
       Stream_initial_message,
       Stream_response_data,
       Message];
    caml_register_global
     (720,Async_rpc_kernel_Protocol,"Async_rpc_kernel__Protocol");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$11);
    caml_call1(Expect_test_collector[4][1],cst_src_transport_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$12,cst$4);
    var Handler_result=[0];
    function sexp_of_message_too_big(param)
     {var
       v_max_message_size=param[2],
       v_size=param[1],
       arg=caml_call1(Core_kernel[339],v_max_message_size),
       bnds=[0,[1,[0,_bQ_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[339],v_size),
       bnds$0=[0,[1,[0,_bR_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function sexp_of_t$3(of_a,param)
     {if(typeof param === "number")
       return _bS_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_bT_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=sexp_of_message_too_big(v0$1);
        return [1,[0,_bU_,[0,v0$2,0]]]}}
    var Send_result=[0,sexp_of_message_too_big,sexp_of_t$3];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Transport_intf=[0,Handler_result,Send_result];
    caml_register_global
     (721,Async_rpc_kernel_Transport_intf,"Async_rpc_kernel__Transport_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$14);
    caml_call1(Expect_test_collector[4][1],cst_src_transport_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$15,cst$5);
    var length=8;
    function unsafe_get_payload_length(buf,pos)
     {return caml_call2(Core_kernel_Bigstring[78],buf,pos)}
    function unsafe_set_payload_length(buf,pos,payload_len)
     {return caml_call3(Core_kernel_Bigstring[82],buf,pos,payload_len)}
    var Header=[0,length,unsafe_get_payload_length,unsafe_set_payload_length];
    function pack(m,t){return [0,m,t]}
    function sexp_of_t$4(param)
     {var t=param[2],M=param[1];return caml_call1(M[1],t)}
    function close(param){var t=param[2],M=param[1];return caml_call1(M[2],t)}
    function is_closed(param)
     {var t=param[2],M=param[1];return caml_call1(M[3],t)}
    function read_forever(param,on_message,on_end_of_batch)
     {var t=param[2],M=param[1];
      return caml_call3(M[4],t,on_message,on_end_of_batch)}
    function read_one_message_bin_prot(t,bin_reader)
     {function _ri_(_rj_){return 0}
      return read_forever
              (t,
               function(buf,pos,len)
                {var pos_ref=[0,pos],x=caml_call2(bin_reader[1],buf,pos_ref);
                 return caml_call2(Core_kernel[93],pos_ref[1],pos + len | 0)
                         ?caml_call4
                           (Core_kernel[222],_bV_,pos_ref[1] - pos | 0,len,0)
                         :[0,x]},
               _ri_)}
    function pack$0(M,t){return [0,[0,M,t,caml_call1(M[6],t)]]}
    function sexp_of_t$5(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[1],t)}
    function close$0(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[2],t)}
    function is_closed$0(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[3],t)}
    function monitor(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[4],t)}
    function bytes_to_write(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[5],t)}
    function flushed(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[7],t)}
    function ready_to_write(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[8],t)}
    function send_bin_prot(param,bin_writer,x)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call3(M[9],t,bin_writer,x)}
    function send_bin_prot_and_bigstring(param,bin_writer,x,buf,pos,len)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call6(M[10],t,bin_writer,x,buf,pos,len)}
    function send_bin_prot_and_bigstring_non_copying
     (param,bin_writer,x,buf,pos,len)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call6(M[11],t,bin_writer,x,buf,pos,len)}
    function stopped(param)
     {var match=param[1],stopped=match[3];return stopped}
    function can_send(param)
     {var
       match=param[1],
       stopped=match[3],
       t=match[2],
       M=match[1],
       _rg_=caml_call1(M[3],t),
       _rh_=_rg_ || caml_call1(Async_kernel_Deferred[7],stopped);
      return 1 - _rh_}
    function transfer(t,opt,pipe,f)
     {if(opt)
       var sth=opt[1],max_num_values_per_read=sth;
      else
       var max_num_values_per_read=1000;
      function _q7_(param)
       {function _re_(param){return 17724}
        var _rf_=flushed(t);
        return caml_call2(Async_kernel[21],_rf_,_re_)}
      var consumer=caml_call2(Async_kernel_Pipe[22],pipe,_q7_);
      function _q8_(ivar)
       {function iter(param)
         {var _ra_=can_send(t);
          if(_ra_)
           {var
             match=
              caml_call3
               (Async_kernel_Pipe[37],
                [0,consumer],
                [0,max_num_values_per_read],
                pipe);
            if(typeof match === "number")
             {if(3456156 <= match)
               return caml_call2(Async_kernel_Ivar[14],ivar,0);
              var
               _rb_=function(param){return iter(0)},
               _rc_=caml_call1(Async_kernel_Pipe[43],pipe);
              return caml_call2(Async_kernel[16],_rc_,_rb_)}
            var q=match[2];
            caml_call2(Core_kernel_Queue[15],q,f);
            caml_call1(Async_kernel_Pipe[21][1],consumer);
            var _rd_=ready_to_write(t);
            return caml_call2(Async_kernel[16],_rd_,iter)}
          return _ra_}
        return iter(0)}
      var end_of_pipe=caml_call1(Async_kernel_Deferred[3],_q8_);
      function _q9_(param){return caml_call1(Async_kernel_Pipe[15],pipe)}
      var
       _q__=[0,end_of_pipe,[0,stopped(t),0]],
       _q$_=caml_call1(Async_kernel_Deferred[24],_q__);
      return caml_call2(Async_kernel[21],_q$_,_q9_)}
    function sexp_of_t$6(param)
     {var
       v_writer=param[2],
       v_reader=param[1],
       arg=sexp_of_t$5(v_writer),
       bnds=[0,[1,[0,_bW_,[0,arg,0]]],0],
       arg$0=sexp_of_t$4(v_reader),
       bnds$0=[0,[1,[0,_bX_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function close$1(t)
     {function _q5_(param){return close(t[1])}
      var _q6_=close$0(t[2]);
      return caml_call2(Async_kernel[20],_q6_,_q5_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _bY_=
      [0,
       sexp_of_t$5,
       close$0,
       is_closed$0,
       monitor,
       bytes_to_write,
       stopped,
       flushed,
       ready_to_write,
       send_bin_prot,
       send_bin_prot_and_bigstring,
       send_bin_prot_and_bigstring_non_copying,
       pack$0,
       can_send,
       transfer],
     _bZ_=
      [0,
       sexp_of_t$4,
       close,
       is_closed,
       read_forever,
       pack,
       read_one_message_bin_prot],
     Async_rpc_kernel_Transport=[0,Header,_bZ_,_bY_,sexp_of_t$6,close$1];
    caml_register_global
     (727,Async_rpc_kernel_Transport,"Async_rpc_kernel__Transport");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$17);
    caml_call1(Expect_test_collector[4][1],cst_src_implementation_types_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$18,cst$6);
    var
     Direct_stream_writer_id=caml_call1(Core_kernel_Unique_id[2],[0]),
     Implementation=caml_call2(CamlinternalMod[1],_b1_,_b0_),
     Implementations=caml_call2(CamlinternalMod[1],_b3_,_b2_),
     Direct_stream_writer=caml_call2(CamlinternalMod[1],_b5_,_b4_),
     Cached_stream_writer=caml_call2(CamlinternalMod[1],_b7_,_b6_);
    caml_call3(CamlinternalMod[2],_b8_,Implementation,Implementation);
    caml_call3(CamlinternalMod[2],_b9_,Implementations,Implementations);
    caml_call3
     (CamlinternalMod[2],_b__,Direct_stream_writer,Direct_stream_writer);
    caml_call3
     (CamlinternalMod[2],_b$_,Cached_stream_writer,Cached_stream_writer);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Implementation_types=
      [0,
       Direct_stream_writer_id,
       Implementation,
       Implementations,
       Direct_stream_writer,
       Cached_stream_writer];
    caml_register_global
     (729,
      Async_rpc_kernel_Implementation_types,
      "Async_rpc_kernel__Implementation_types");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$20);
    caml_call1(Expect_test_collector[4][1],cst_src_implementation_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$21,cst$7);
    function sexp_of_t$7(param)
     {var
       v_writer=param[2],
       v_query_id=param[1],
       v_responded=param[3],
       arg=caml_call1(Core_kernel[291],v_responded),
       bnds=[0,[1,[0,_ca_,[0,arg,0]]],0],
       arg$0=caml_call1(_bY_[1],v_writer),
       bnds$0=[0,[1,[0,_cb_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Query_id[10],v_query_id),
       bnds$1=[0,[1,[0,_cc_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function create(query_id,writer){return [0,query_id,writer,0]}
    var Responder=[0,sexp_of_t$7,create],Expert=[0,Responder];
    function lift(t,f)
     {switch(t[0])
       {case 0:
         var impl=t[2],bin_msg=t[1];
         return [0,
                 bin_msg,
                 function(state,str)
                  {return caml_call2(impl,caml_call1(f,state),str)}];
        case 1:
         var impl$0=t[1];
         return [1,
                 function(state,buf,pos,len)
                  {return caml_call4(impl$0,caml_call1(f,state),buf,pos,len)}];
        case 2:
         var result_mode=t[4],impl$1=t[3],bin_response=t[2],bin_query=t[1];
         return [2,
                 bin_query,
                 bin_response,
                 function(state,q)
                  {return caml_call2(impl$1,caml_call1(f,state),q)},
                 result_mode];
        case 3:
         var result_mode$0=t[2],impl$2=t[1];
         return [3,
                 function(state,resp,buf,pos,len)
                  {return caml_call5
                           (impl$2,caml_call1(f,state),resp,buf,pos,len)},
                 result_mode$0];
        default:
         var impl$3=t[4],bin_u=t[3],bin_i=t[2],bin_q=t[1];
         if(0 === impl$3[0])
          var
           impl$4=impl$3[1],
           impl$5=
            [0,
             function(state,q)
              {return caml_call2(impl$4,caml_call1(f,state),q)}];
         else
          var
           impl$6=impl$3[1],
           impl$5=
            [1,
             function(state,q,w)
              {return caml_call3(impl$6,caml_call1(f,state),q,w)}];
         return [4,bin_q,bin_i,bin_u,impl$5]}}
    var F=[0,lift];
    function description(t)
     {var _q4_=t[2];return [0,caml_call1(Rpc_tag[12],t[1]),_q4_]}
    function lift$0(init,f)
     {var _q3_=caml_call2(F[1],init[3],f);return [0,init[1],init[2],_q3_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Implementation=[0,Expert,F,description,lift$0];
    caml_register_global
     (730,Async_rpc_kernel_Implementation,"Async_rpc_kernel__Implementation");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$23);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_error_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$24,cst$8);
    var
     _ch_=Rpc_error[5],
     _cm_=Rpc_error[10],
     _cd_=Rpc_error[1],
     _ce_=Rpc_error[2],
     _cf_=Rpc_error[3],
     _cg_=Rpc_error[4],
     _ci_=Rpc_error[6],
     _cj_=Rpc_error[7],
     _ck_=Rpc_error[8],
     _cl_=Rpc_error[9],
     _cn_=Rpc_error[11],
     _co_=Rpc_error[12],
     _cp_=Rpc_error[13],
     _cq_=Rpc_error[14],
     _cr_=Rpc_error[15],
     _cs_=Rpc_error[16],
     _ct_=Rpc_error[17],
     _cu_=Rpc_error[18],
     _cv_=Rpc_error[19],
     _cw_=Rpc_error[20],
     _cx_=Rpc_error[21],
     _cy_=Rpc_error[22],
     _cz_=Rpc_error[23],
     _cA_=Rpc_error[24],
     _cB_=Rpc_error[25],
     _cC_=Rpc_error[26],
     _cD_=Rpc_error[27],
     _cE_=Rpc_error[28],
     _cF_=Rpc_error[29],
     include$1=
      caml_call1(Core_kernel_Sexpable[1],[0,Rpc_error[9],Rpc_error[10]]),
     _cG_=include$1[1],
     _cH_=include$1[2],
     Rpc=[248,cst_Async_rpc_kernel_Rpc_error_Rpc,caml_fresh_oo_id(0)];
    function _cI_(param)
     {if(param[1] === Rpc)
       {var
         v1=param[3],
         v0=param[2],
         v0$0=caml_call1(_cm_,v0),
         v1$0=caml_call1(Core_kernel_Info[6],v1);
        return [1,[0,_cJ_,[0,v0$0,[0,v1$0,0]]]]}
      throw [0,Assert_failure,_cK_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Rpc,_cI_);
    function raise(t,connection_description)
     {throw [0,Rpc,t,connection_description]}
    function sexp_of_t$8(t,get_connection_close_reason)
     {if(typeof t === "number")
       {var _q2_=caml_call1(get_connection_close_reason,0);
        return [1,[0,_cL_,[0,caml_call1(Core_kernel_Sexp[88],_q2_),0]]]}
      return caml_call1(_cm_,t)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Rpc_error=
      [0,
       _cd_,
       _ce_,
       _cf_,
       _cg_,
       _ch_,
       _ci_,
       _cj_,
       _ck_,
       _cl_,
       _cn_,
       _co_,
       _cp_,
       _cq_,
       _cr_,
       _cs_,
       _ct_,
       _cu_,
       _cv_,
       _cw_,
       _cx_,
       _cy_,
       _cz_,
       _cA_,
       _cB_,
       _cC_,
       _cD_,
       _cE_,
       _cF_,
       sexp_of_t$8,
       _cG_,
       _cH_,
       Rpc,
       raise];
    caml_register_global
     (734,Async_rpc_kernel_Rpc_error,"Async_rpc_kernel__Rpc_error");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$26);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_result_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$27,cst$9);
    var
     _cM_=caml_call1(Bin_prot_Shape[3][1],cst_a$12),
     _cN_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_result_ml_4_13),
     _cO_=caml_call2(Bin_prot_Shape[15],_cN_,_cM_),
     _cP_=caml_call1(caml_call1(Core_kernel_Result[1],_cO_),_ch_),
     _cQ_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$13),0],
     _cR_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$10),_cQ_,_cP_],0],
     _cS_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_result_ml_4_0);
    caml_call2(Bin_prot_Shape[6],_cS_,_cR_);
    function sexp_of_located_error(param)
     {var
       v_exn=param[2],
       v_location=param[1],
       arg=caml_call1(Base_Exn[1],v_exn),
       bnds=[0,[1,[0,_cT_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[447],v_location),
       bnds$0=[0,[1,[0,_cU_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function uncaught_exn(location,exn)
     {return [1,[2,sexp_of_located_error([0,location,exn])]]}
    function bin_io_exn(location,exn)
     {return [1,[0,sexp_of_located_error([0,location,exn])]]}
    function try_with(run,location,f)
     {var x=caml_call7(Async_kernel_Monitor[16],0,0,0,0,run,0,f);
      function join(param)
       {if(0 === param[0]){var x=param[1];return x}
        var exn=param[1];
        return uncaught_exn(location,exn)}
      var match=caml_call1(Async_kernel_Deferred[5],x);
      if(match)
       {var x$0=match[1],_q1_=join(x$0);
        return caml_call1(Async_kernel[19],_q1_)}
      return caml_call2(Async_kernel[21],x,join)}
    function or_error
     (rpc_tag,
      rpc_version,
      connection_description,
      connection_close_started,
      param)
     {if(0 === param[0]){var x=param[1];return [0,x]}
      var
       rpc_error=param[1],
       rpc_error$0=
        sexp_of_t$8
         (rpc_error,
          function(param)
           {var
             close_reason=
              caml_call1(Async_kernel_Deferred[5],connection_close_started);
            return caml_call2
                    (Core_kernel[431],Core_kernel_Info[6],close_reason)}),
       _qX_=[0,[1,[0,_cV_,[0,caml_call1(Core_kernel[339],rpc_version),0]]],0],
       _qY_=[0,[1,[0,_cW_,[0,caml_call1(Rpc_tag[10],rpc_tag),0]]],_qX_],
       _qZ_=
        [0,
         [1,
          [0,
           _cX_,
           [0,caml_call1(Core_kernel_Info[6],connection_description),0]]],
         _qY_],
       _q0_=
        [1,
         [0,
          [1,[0,_cY_,[0,caml_call1(Core_kernel_Sexp[88],rpc_error$0),0]]],
          _qZ_]];
      return caml_call1(Core_kernel_Or_error[40],_q0_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Rpc_result=
      [0,uncaught_exn,bin_io_exn,try_with,or_error];
    caml_register_global
     (738,Async_rpc_kernel_Rpc_result,"Async_rpc_kernel__Rpc_result");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$29);
    caml_call1(Expect_test_collector[4][1],cst_src_util_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$30,cst$10);
    function bin_read_from_bigstring
     (bin_reader_t,add_len,buf,pos_ref,len,location)
     {try
       {var init_pos=pos_ref[1],data=caml_call2(bin_reader_t[1],buf,pos_ref);
        if(add_len)
         var add_len$0=add_len[1],add_len$1=caml_call1(add_len$0,data);
        else
         var add_len$1=0;
        if
         (caml_call2
           (Core_kernel[93],(pos_ref[1] - init_pos | 0) + add_len$1 | 0,len))
         caml_call4(Core_kernel[222],_cZ_,pos_ref[1] - init_pos | 0,len,0);
        var _qW_=[0,data];
        return _qW_}
      catch(e){e = caml_wrap_exception(e);return bin_io_exn(location,e)}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Util=[0,bin_read_from_bigstring];
    caml_register_global(739,Async_rpc_kernel_Util,"Async_rpc_kernel__Util");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$32);
    caml_call1(Expect_test_collector[4][1],cst_src_implementations_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$33,cst$11);
    var symbol$5=Core_kernel_Result[15];
    function defer_result(err)
     {if(0 === err[0])
       {var d=err[1],match=caml_call1(Async_kernel_Deferred[5],d);
        if(match)
         {var d$0=match[1];return caml_call1(Async_kernel[19],[0,d$0])}
        var _qV_=function(x){return [0,x]};
        return caml_call2(Async_kernel[21],d,_qV_)}
      return caml_call1(Async_kernel[19],err)}
    function symbol_map(d,f)
     {var match=caml_call1(Async_kernel_Deferred[5],d);
      if(match)
       {var x=match[1],_qU_=caml_call1(f,x);
        return caml_call1(Async_kernel[19],_qU_)}
      return caml_call2(Async_kernel[21],d,f)}
    function descriptions(t){return caml_call1(Core_kernel_Hashtbl[59],t[1])}
    function sexp_of_streaming_response(param)
     {if(0 === param[0])
       {var
         v0=param[1],
         _qT_=function(param){return _c0_},
         v0$0=caml_call2(Async_kernel_Pipe[4][1],_qT_,v0);
        return [1,[0,_c1_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(Sexplib0_Sexp_conv[23],v0$1);
      return [1,[0,_c2_,[0,v0$2,0]]]}
    function sexp_of_t$9(param)
     {var
       t=param[1],
       v_open_streaming_responses=t[3],
       v_writer=t[2],
       v_implementations=t[1],
       v_stopped=t[4],
       v_connection_close_started=t[7],
       v_connection_description=t[6],
       v_last_dispatched_implementation=t[8],
       v_packed_self=t[9],
       arg$1=caml_call1(Sexplib0_Sexp_conv[23],v_packed_self),
       bnds=[0,[1,[0,_c3_,[0,arg$1,0]]],0];
      function _qS_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=sexp_of_t(v0),
         v1$0=caml_call1(Sexplib0_Sexp_conv[23],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$2=
        caml_call2(Core_kernel[431],_qS_,v_last_dispatched_implementation),
       bnds$0=[0,[1,[0,_c4_,[0,arg$2,0]]],bnds],
       arg$3=
        caml_call2
         (Async_kernel_Deferred[1],
          Core_kernel_Info[6],
          v_connection_close_started),
       bnds$1=[0,[1,[0,_c5_,[0,arg$3,0]]],bnds$0],
       arg$4=caml_call1(Core_kernel_Info[6],v_connection_description),
       bnds$2=[0,[1,[0,_c6_,[0,arg$4,0]]],bnds$1],
       bnds$3=[0,[1,[0,_c7_,[0,arg,0]]],bnds$2],
       arg$5=caml_call1(Core_kernel[291],v_stopped),
       bnds$4=[0,[1,[0,_c8_,[0,arg$5,0]]],bnds$3],
       arg$0=
        caml_call3
         (Core_kernel_Hashtbl[3],
          Query_id[10],
          sexp_of_streaming_response,
          v_open_streaming_responses),
       bnds$5=[0,[1,[0,_c9_,[0,arg$0,0]]],bnds$4],
       arg$6=caml_call1(_bY_[1],v_writer),
       bnds$6=[0,[1,[0,_c__,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Sexplib0_Sexp_conv[23],v_implementations),
       bnds$7=[0,[1,[0,_c$_,[0,arg$7,0]]],bnds$6];
      return [1,bnds$7]}
    function handle_send_result(t,id,result)
     {if(typeof result === "number")
       return 0;
      else
       {if(0 === result[0])return 0;
        var
         sexp=caml_call1(caml_call1(Send_result[2],Core_kernel[491]),result),
         data=[1,[0,id,[1,[1,sexp]]]],
         r=caml_call3(_bY_[9],t[2],Message[19],data);
        if(typeof r !== "number" && 1 === r[0])
         {var
           _qP_=
            [0,
             [1,[0,_da_,[0,caml_call2(Send_result[2],Core_kernel[491],r),0]]],
             0],
           _qQ_=
            [0,
             [1,
              [0,
               [1,[0,_db_,[0,caml_call1(Core_kernel_Sexp[88],sexp),0]]],
               _qP_]],
             0],
           _qR_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Failed_to_send_write_error_to_client),
              _qQ_]];
          return caml_call1(Core_kernel[241],_qR_)}
        return 0}}
    function write_message(t,id,bin_writer,x)
     {var _qO_=1 - t[4];
      return _qO_
              ?handle_send_result(t,id,caml_call3(_bY_[9],t[2],bin_writer,x))
              :_qO_}
    function write_response(t,id,bin_writer_data,data)
     {var
       _qN_=of_writer(bin_writer_data),
       bin_writer=caml_call1(Message[4],_qN_);
      return write_message(t,id,bin_writer,[1,[0,id,data]])}
    function bin_write_void(buf,pos,param){return pos}
    var buf=caml_call2(Core_kernel_Bigstring[110],0,32);
    function create$0(id,bin_writer)
     {var
       v=[1,[0,id,_dc_]],
       len=caml_call3(caml_call1(Message[3],bin_write_void),buf,0,v),
       header_prefix=caml_call3(Core_kernel_Bigstring[25][4],buf,0,len);
      return [0,header_prefix,caml_call1(_h_,0),bin_writer]}
    var stream_response_data_header_as_int32=35449;
    function _dd_(param)
     {var
       len=
        caml_call3(caml_call1(Stream_response_data[3],bin_write_void),buf,0,v);
      if(len === 4)
       {if
         (runtime.caml_equal
           (caml_call2(Core_kernel_Bigstring[96],buf,0),
            stream_response_data_header_as_int32))
         return 0;
        throw [0,Assert_failure,_de_]}
      throw [0,Assert_failure,_df_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_stream_response_constants_are_correct,
      0,
      cst_src_implementations_ml$0,
      209,
      4,
      369,
      _dd_);
    function bin_write_string_no_length(buf,pos,str)
     {var str_len=caml_ml_string_length(str);
      caml_call1(Bin_prot_Common[3],pos);
      var next=pos + str_len | 0;
      caml_call2(Bin_prot_Common[5],buf,next);
      runtime.bin_prot_blit_string_buf_stub(0,str,pos,buf,str_len);
      return next}
    function bin_size_nat0_header(param)
     {var
       header_prefix=param[1],
       data_len=param[2],
       stream_response_data_nat0_len=4 + caml_call1(_c_,data_len) | 0,
       stream_response_data_len=stream_response_data_nat0_len + data_len | 0;
      return (caml_ml_string_length(header_prefix)
              +
              caml_call1(_c_,caml_call1(_h_,stream_response_data_len))
              |
              0)
             +
             stream_response_data_nat0_len
             |
             0}
    function bin_write_nat0_header(buf,pos,param)
     {var
       header_prefix=param[1],
       data_len=param[2],
       pos$0=bin_write_string_no_length(buf,pos,header_prefix),
       stream_response_data_len=
        (4 + caml_call1(_c_,data_len) | 0)
        +
        data_len
        |
        0,
       pos$1=
        caml_call3(_e_,buf,pos$0,caml_call1(_h_,stream_response_data_len)),
       next=pos$1 + 4 | 0;
      caml_call2(Bin_prot_Common[5],buf,next);
      caml_call3
       (Core_kernel_Bigstring[98],
        buf,
        pos$1,
        stream_response_data_header_as_int32);
      return caml_call3(_e_,buf,next,data_len)}
    var bin_writer=[0,bin_size_nat0_header,bin_write_nat0_header];
    function bin_size_message(param)
     {var t=param[1],_qM_=t[2];return bin_size_nat0_header(t) + _qM_ | 0}
    function bin_write_message(buf,pos,param)
     {var data=param[2],t=param[1],pos$0=bin_write_nat0_header(buf,pos,t);
      return caml_call3(t[3][2],buf,pos$0,data)}
    var bin_writer_message=[0,bin_size_message,bin_write_message];
    function bin_size_message_as_string(param)
     {var t=param[1],_qL_=t[2];return bin_size_nat0_header(t) + _qL_ | 0}
    function bin_write_message_as_string(buf,pos,param)
     {var str=param[2],t=param[1],pos$0=bin_write_nat0_header(buf,pos,t);
      return bin_write_string_no_length(buf,pos$0,str)}
    var
     bin_writer_message_as_string=
      [0,bin_size_message_as_string,bin_write_message_as_string];
    function write(t,param,id,data)
     {var instance=param[1];
      t[2] = caml_call1(_h_,caml_call1(t[3][1],data));
      return write_message(instance,id,bin_writer_message,[0,t,data])}
    function is_closed$1(t){return caml_call1(Async_kernel_Ivar[17],t[3])}
    function closed(t){return caml_call1(Async_kernel_Ivar[18],t[3])}
    function flushed$0(t)
     {var match=t[4],instance=match[1];return caml_call1(_bY_[7],instance[2])}
    function bin_writer$0(t){return t[6][3]}
    function write_eof(param)
     {var query_id=param[5],match=param[4],instance=match[1];
      return write_response(instance,query_id,Stream_response_data[17],_dg_)}
    function write_message$0(param,x)
     {var stream_writer=param[6],query_id=param[5],instance=param[4];
      return write(stream_writer,instance,query_id,x)}
    function close_without_removing_from_instance(t)
     {var _qJ_=1 - caml_call1(Async_kernel_Ivar[17],t[3]);
      if(_qJ_)
       {caml_call2(Async_kernel_Ivar[14],t[3],0);
        var groups=t[7];
        if(1 - caml_call1(Core_kernel_Bag[6],groups))
         {var
           _qK_=
            function(param)
             {var match=caml_call1(Core_kernel_Bag[28],groups);
              if(match)
               {var
                 match$0=match[1],
                 element_in_group=match$0[2],
                 group=match$0[1];
                caml_call2(Core_kernel_Bag[26],group[1],element_in_group);
                caml_call2(Core_kernel_Hashtbl[31],group[2],t[1]);
                return 1}
              return 0};
          caml_call1(Async_kernel_Scheduler[64][2],_qK_)}
        return t[2]?0:write_eof(t)}
      return _qJ_}
    function close$2(t)
     {var query_id=t[5],match=t[4],instance=match[1];
      close_without_removing_from_instance(t);
      return caml_call2(Core_kernel_Hashtbl[31],instance[3],query_id)}
    function write_without_pushback(t,x)
     {if(caml_call1(Async_kernel_Ivar[17],t[3]))return -1025106484;
      var _qI_=t[2];
      if(_qI_)
       {var q=_qI_[1];caml_call2(Core_kernel_Queue[40],q,[0,x])}
      else
       write_message$0(t,x);
      return 17724}
    function write$0(t,x)
     {var match=t[4],instance=match[1],match$0=write_without_pushback(t,x);
      return 17724 <= match$0
              ?[0,933108739,caml_call1(_bY_[7],instance[2])]
              :-1025106484}
    function write_without_pushback$0(t,buf,pos,len)
     {if(caml_call1(Async_kernel_Ivar[17],t[3]))return -1025106484;
      var _qG_=t[2];
      if(_qG_)
       {var
         q=_qG_[1],
         _qH_=[1,caml_call3(Core_kernel_Bigstring[25][4],buf,pos,len)];
        caml_call2(Core_kernel_Queue[40],q,_qH_)}
      else
       {var
         stream_writer=t[6],
         query_id=t[5],
         instance$0=t[4],
         instance=instance$0[1];
        stream_writer[2] = caml_call1(_h_,len);
        if(1 - instance[4])
         handle_send_result
          (instance,
           query_id,
           caml_call6
            (_bY_[10],instance[2],bin_writer,stream_writer,buf,pos,len))}
      return 17724}
    function write$1(t,buf,pos,len)
     {var
       match=t[4],
       instance=match[1],
       match$0=write_without_pushback$0(t,buf,pos,len);
      return 17724 <= match$0
              ?[0,933108739,caml_call1(_bY_[7],instance[2])]
              :-1025106484}
    function apply_implementation
     (t,implementation,query,read_buffer,read_buffer_pos_ref)
     {var id=query[3];
      switch(implementation[0])
       {case 0:
         var
          f=implementation[2],
          bin_query_reader=implementation[1],
          query_contents=
           bin_read_from_bigstring
            (bin_query_reader,
             0,
             read_buffer,
             read_buffer_pos_ref,
             query[4],
             cst_server_side_one_way_rpc_message_un_bin_io_ing);
         if(0 === query_contents[0])
          {var q=query_contents[1];
           try
            {caml_call2(f,t[5],q);var _p3_=0;return _p3_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             return [0,
                     uncaught_exn(cst_server_side_one_way_rpc_computation,exn)]}}
         return [0,query_contents];
        case 1:
         var f$0=implementation[1];
         try
          {var len=query[4];
           caml_call4(f$0,t[5],read_buffer,read_buffer_pos_ref[1],len);
           read_buffer_pos_ref[1] = read_buffer_pos_ref[1] + len | 0;
           var _p4_=0;
           return _p4_}
         catch(exn)
          {exn = caml_wrap_exception(exn);
           return [0,
                   uncaught_exn
                    (cst_server_side_one_way_rpc_expert_computation,exn)]}
        case 2:
         var
          result_mode=implementation[4],
          f$1=implementation[3],
          bin_response_writer=implementation[2],
          bin_query_reader$0=implementation[1],
          query_contents$0=
           bin_read_from_bigstring
            (bin_query_reader$0,
             0,
             read_buffer,
             read_buffer_pos_ref,
             query[4],
             cst_server_side_rpc_query_un_bin_io_ing);
         if(0 === result_mode)
          {try
            {var
              _p7_=caml_call2(symbol$5,query_contents$0,caml_call1(f$1,t[5])),
              data=_p7_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             var
              backtrace=caml_call1(Base_Backtrace[6][4],0),
              _p5_=
               [0,
                [1,[0,_dh_,[0,caml_call1(Base_Backtrace[1],backtrace),0]]],
                0],
              _p6_=
               [0,[1,[0,_di_,[0,caml_call1(Core_kernel[508],exn),0]]],_p5_],
              sexp=
               [1,
                [0,
                 [1,
                  [0,
                   _dj_,
                   [0,
                    caml_call1
                     (Sexplib0_Sexp_conv[7],
                      cst_server_side_blocking_rpc_computation),
                    0]]],
                 _p6_]],
              data=[1,[2,sexp]]}
           write_response(t,id,bin_response_writer,data)}
         else
          {var
            data$0=
             try_with
              (_dk_,
               cst_server_side_rpc_computation,
               function(param)
                {return defer_result
                         (caml_call2(symbol$5,query_contents$0,caml_call1(f$1,t[5])))}),
            match=caml_call1(Async_kernel_Deferred[5],data$0);
           if(match)
            {var data$1=match[1];
             write_response(t,id,bin_response_writer,data$1)}
           else
            {var
              _p8_=
               function(_qq_)
                {return write_response(t,id,bin_response_writer,_qq_)};
             caml_call2(Async_kernel[16],data$0,_p8_)}}
         return 0;
        case 3:
         var
          result_mode$0=implementation[2],
          f$2=implementation[1],
          responder=caml_call2(Expert[1][2],query[3],t[2]),
          _p9_=
           function(param)
            {var
              len=query[4],
              result=
               caml_call5
                (f$2,t[5],responder,read_buffer,read_buffer_pos_ref[1],len);
             return 0 === result_mode$0
                     ?caml_call1(Async_kernel_Deferred[12],result)
                     :result},
          d=caml_call7(Async_kernel_Monitor[16],0,0,0,0,_dl_,0,_p9_),
          handle_exn=
           function(exn)
            {var
              result=
               uncaught_exn(cst_server_side_rpc_expert_computation,exn);
             return responder[3]
                     ?result
                     :(write_response(t,id,Core_kernel[482],result),_dm_)},
          check_responded=
           function(param)
            {return responder[3]
                     ?_dn_
                     :handle_exn
                       ([0,Stdlib[7],cst_Expert_implementation_did_not_reply])},
          d$0=
           symbol_map
            (d,
             function(param)
              {if(0 === param[0])
                {var result=param[1];
                 if(result)
                  var d=result[1],d$0=d;
                 else
                  var d$0=Async_kernel_Deferred[18];
                 if(caml_call1(Async_kernel_Deferred[7],d$0))
                  return check_responded(0);
                 var
                  _qn_=
                   function(param)
                    {var
                      _qo_=check_responded(0),
                      _qp_=or_error(query[1],query[2],t[6],t[7],_qo_);
                     return caml_call1(Core_kernel[233],_qp_)};
                 caml_call2(Async_kernel[12],d$0,_qn_);
                 return _do_}
               var exn=param[1];
               return handle_exn(exn)}),
          match$0=caml_call1(Async_kernel_Deferred[5],d$0);
         if(match$0)
          {var result=match$0[1];return 0 === result[0]?0:[0,result]}
         var
          _p__=
           function(r)
            {var _qm_=or_error(query[1],query[2],t[6],t[7],r);
             return caml_call1(Core_kernel[233],_qm_)};
         return [1,caml_call2(Async_kernel[21],d$0,_p__)];
        default:
         var
          impl=implementation[4],
          bin_update_writer=implementation[3],
          bin_init_writer=implementation[2],
          bin_query_reader$1=implementation[1],
          _p$_=query[4],
          _qa_=
           [0,
            function(param)
             {if(typeof param === "number")return 0;
              var len=param[2];
              return len}],
          stream_query=
           bin_read_from_bigstring
            (Stream_query[14],
             _qa_,
             read_buffer,
             read_buffer_pos_ref,
             _p$_,
             cst_server_side_pipe_rpc_stream_query_un_bin_io_ing);
         if(0 === stream_query[0])
          {var _qb_=stream_query[1];
           if(typeof _qb_ === "number")
            {var
              _qc_=
               function(param)
                {if(0 === param[0])
                  {var pipe=param[1];
                   return caml_call1(Async_kernel_Pipe[15],pipe)}
                 var w=param[1];
                 return close$2(w)},
              _qd_=caml_call2(Core_kernel_Hashtbl[52],t[3],query[3]);
             caml_call2(Core_kernel_Option[18],_qd_,_qc_)}
           else
            {var
              len$0=_qb_[2],
              data$2=
               bin_read_from_bigstring
                (bin_query_reader$1,
                 0,
                 read_buffer,
                 read_buffer_pos_ref,
                 len$0,
                 cst_streaming_rpc_server_side_query_un_bin_io_ing),
              stream_writer=create$0(id,bin_update_writer);
             if(0 === impl[0])
              var f$3=impl[1],impl_with_state=[0,892411982,f$3];
             else
              {var
                f$6=impl[1],
                _qi_=caml_call1(Core_kernel_Bag[22],0),
                _qj_=t[9],
                _qk_=caml_call1(Async_kernel_Ivar[12],0),
                _ql_=[0,caml_call2(Core_kernel_Queue[60],0,0)],
                writer$0=
                 [0,
                  caml_call1(Direct_stream_writer_id[45],0),
                  _ql_,
                  _qk_,
                  _qj_,
                  id,
                  stream_writer,
                  _qi_];
               caml_call3(Core_kernel_Hashtbl[34],t[3],query[3],[1,writer$0]);
               var impl_with_state=[0,-251740343,[0,f$6,writer$0]]}
             var
              run_impl=
               function(impl,split_ok,handle_ok)
                {function _qD_(param)
                  {if(0 === param[0])
                    {var _qF_=param[1];
                     if(0 === _qF_[0])
                      {var
                        ok=_qF_[1],
                        match=caml_call1(split_ok,ok),
                        rest=match[2],
                        initial=match[1];
                       write_response(t,id,bin_init_writer,[0,initial]);
                       return caml_call1(handle_ok,rest)}
                     var err=_qF_[1];
                     caml_call2(Core_kernel_Hashtbl[31],t[3],id);
                     return write_response(t,id,bin_init_writer,[0,err])}
                   var err$0=param[1];
                   caml_call2(Core_kernel_Hashtbl[31],t[3],id);
                   return write_response(t,id,bin_init_writer,[1,err$0])}
                 var
                  _qE_=
                   try_with
                    (0,
                     cst_server_side_pipe_rpc_computation,
                     function(param)
                      {return defer_result(caml_call2(symbol$5,data$2,impl))});
                 return caml_call2(Async_kernel[16],_qE_,_qD_)};
             if(892411982 <= impl_with_state[1])
              {var
                f$4=impl_with_state[2],
                _qe_=
                 function(pipe_r)
                  {caml_call3(Core_kernel_Hashtbl[34],t[3],id,[0,pipe_r]);
                   var _qs_=t[9];
                   function _qt_(_qz_)
                    {return write(stream_writer,_qs_,id,_qz_)}
                   var _qu_=caml_call4(_bY_[14],t[2],0,pipe_r,_qt_);
                   caml_call1(Async_kernel[6],_qu_);
                   function _qv_(param)
                    {function _qx_(param)
                      {write_response(t,id,Stream_response_data[17],_dp_);
                       return caml_call2(Core_kernel_Hashtbl[31],t[3],id)}
                     var _qy_=caml_call1(Async_kernel_Pipe[19],pipe_r);
                     return caml_call2(Async_kernel[16],_qy_,_qx_)}
                   var _qw_=caml_call1(Async_kernel_Pipe[17],pipe_r);
                   return caml_call2(Async_kernel[16],_qw_,_qv_)},
                _qf_=function(_qr_){return _qr_};
               run_impl
                (function(data){return caml_call2(f$4,t[5],data)},_qf_,_qe_)}
             else
              {var
                match$1=impl_with_state[2],
                writer=match$1[2],
                f$5=match$1[1],
                _qg_=
                 function(param)
                  {var _qA_=writer[2];
                   if(_qA_)
                    {var q=_qA_[1];
                     writer[2] = 0;
                     var
                      _qB_=
                       function(param)
                        {if(0 === param[0])
                          {var x=param[1];return write_message$0(writer,x)}
                         var
                          x$0=param[1],
                          stream_writer=writer[6],
                          query_id=writer[5],
                          instance$0=writer[4],
                          instance=instance$0[1];
                         stream_writer[2]
                         =
                         caml_call1(_h_,caml_ml_string_length(x$0));
                         return write_message
                                 (instance,
                                  query_id,
                                  bin_writer_message_as_string,
                                  [0,stream_writer,x$0])};
                     caml_call2(Core_kernel_Queue[15],q,_qB_);
                     var _qC_=caml_call1(Async_kernel_Ivar[17],writer[3]);
                     return _qC_?write_eof(writer):_qC_}
                   return caml_call1
                           (Core_kernel[6],
                            cst_attempted_to_start_writer_which_was_already_started)},
                _qh_=function(x){return [0,x,0]};
               run_impl
                (function(data){return caml_call3(f$5,t[5],data,writer)},
                 _qh_,
                 _qg_)}}}
         return 0}}
    function flush(param)
     {var t=param[1];
      if(t[4])throw [0,Assert_failure,_dq_];
      function _p1_(param,data,acc)
       {if(0 === data[0])
         {var pipe=data[1],_p2_=caml_call1(Async_kernel_Pipe[19],pipe);
          return [0,caml_call1(Async_kernel_Deferred[15],_p2_),acc]}
        return acc}
      var producers_flushed=caml_call3(Core_kernel_Hashtbl[18],t[3],0,_p1_);
      return caml_call1(Async_kernel_Deferred[23],producers_flushed)}
    function stop(param)
     {var t=param[1];
      t[4] = 1;
      function _p0_(param)
       {if(0 === param[0])return 0;
        var writer=param[1];
        return close_without_removing_from_instance(writer)}
      caml_call2(Core_kernel_Hashtbl[20],t[3],_p0_);
      return caml_call1(Core_kernel_Hashtbl[16],t[3])}
    function handle_query(param,query,read_buffer,read_buffer_pos_ref)
     {var t=param[1];
      if(! t[4])
       if(! caml_call1(_bY_[3],t[2]))
        {var
          match$0=t[1],
          on_unknown_rpc=match$0[2],
          implementations=match$0[1],
          _pW_=query[2],
          description=[0,caml_call1(Rpc_tag[12],query[1]),_pW_],
          _pX_=t[8];
         if(_pX_)
          {var match$1=_pX_[1],implementation=match$1[2],last_desc=match$1[1];
           if(caml_call2(_x_,last_desc,description))
            return apply_implementation
                    (t,implementation,query,read_buffer,read_buffer_pos_ref)}
         var
          match$2=
           caml_call2(Core_kernel_Hashtbl[52],implementations,description);
         if(match$2)
          {var implementation$0=match$2[1];
           t[8] = [0,[0,description,implementation$0]];
           return apply_implementation
                   (t,implementation$0,query,read_buffer,read_buffer_pos_ref)}
         if(typeof on_unknown_rpc !== "number")
          if(! (747848894 <= on_unknown_rpc[1]))
           {var
             impl=on_unknown_rpc[2],
             len=query[4],
             id=query[3],
             version=query[2],
             tag=query[1],
             responder=caml_call2(Expert[1][2],id,t[2]),
             _pY_=read_buffer_pos_ref[1],
             _pZ_=caml_call1(Rpc_tag[12],tag),
             d=
              caml_call7
               (impl,t[5],_pZ_,version,responder,read_buffer,_pY_,len);
            return caml_call1(Async_kernel_Deferred[7],d)?0:[1,d]}
         var error=[3,query[1],[0,-901574920,query[2]]];
         write_response(t,query[3],Message[19],[1,error]);
         if(typeof on_unknown_rpc === "number")
          return -146189108 === on_unknown_rpc
                  ?raise(error,t[6])
                  :192584839 <= on_unknown_rpc?0:_dr_;
         var
          f=on_unknown_rpc[2],
          _pU_=query[2],
          _pV_=caml_call1(Rpc_tag[12],query[1]),
          match=caml_call3(f,t[5],_pV_,_pU_);
         return 192584839 <= match?0:_ds_}
      return _dt_}
    function create$1(i_s,on_unknown_rpc)
     {var
       implementations=caml_call3(_Q_[4],0,_du_,0),
       dups=caml_call3(_R_[2],0,_dv_,0);
      function _pS_(i)
       {var
         _pT_=i[2],
         description=[0,caml_call1(Rpc_tag[12],i[1]),_pT_],
         match=
          caml_call3(Core_kernel_Hashtbl[35],implementations,description,i[3]);
        return 17724 <= match
                ?0
                :caml_call2(Core_kernel_Hash_set[22],dups,description)}
      caml_call2(Core_kernel_List[8],i_s,_pS_);
      return caml_call1(Core_kernel_Hash_set[5],dups)
              ?[0,[0,implementations,on_unknown_rpc]]
              :[1,[0,-965860371,caml_call1(Core_kernel_Hash_set[16],dups)]]}
    function instantiate
     (t,
      connection_description,
      connection_close_started,
      connection_state,
      writer)
     {var unpacked=[];
      runtime.caml_update_dummy
       (unpacked,
        [0,
         t,
         writer,
         caml_call3(Core_kernel_Hashtbl[80][13],0,_dw_,0),
         0,
         connection_state,
         connection_description,
         connection_close_started,
         0,
         [0,unpacked]]);
      return unpacked[9]}
    var
     Duplicate_implementations=
      [248,
       cst_Async_rpc_kernel_Implementations_Duplicate_implementations,
       caml_fresh_oo_id(0)];
    function _dx_(param)
     {if(param[1] === Duplicate_implementations)
       {var v0=param[2],v0$0=caml_call2(Core_kernel[400],sexp_of_t,v0);
        return [1,[0,_dy_,[0,v0$0,0]]]}
      throw [0,Assert_failure,_dz_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Duplicate_implementations,_dx_);
    function create_exn(implementations,on_unknown_rpc)
     {var match=create$1(implementations,on_unknown_rpc);
      if(0 === match[0]){var x=match[1];return x}
      var match$0=match[1],dups=match$0[2];
      throw [0,Duplicate_implementations,dups]}
    function null$0(param){return create_exn(0,-146189108)}
    function add_exn(t,implementation)
     {var
       _pR_=implementation[2],
       desc=[0,caml_call1(Rpc_tag[12],implementation[1]),_pR_],
       implementations=caml_call1(Core_kernel_Hashtbl[17],t[1]),
       match=
        caml_call3
         (Core_kernel_Hashtbl[35],implementations,desc,implementation[3]);
      if(17724 <= match)return [0,implementations,t[2]];
      throw [0,Duplicate_implementations,[0,desc,0]]}
    function add(t,implementation)
     {function _pQ_(param){return add_exn(t,implementation)}
      return caml_call2(Core_kernel_Or_error[33],0,_pQ_)}
    function lift$1(param,f)
     {var on_unknown_rpc=param[2],implementations=param[1],_pM_=F[1];
      function _pN_(_pP_){return caml_call2(_pM_,_pP_,f)}
      var
       implementations$0=
        caml_call2(Core_kernel_Hashtbl[39],implementations,_pN_);
      if(typeof on_unknown_rpc === "number")
       var on_unknown_rpc$0=on_unknown_rpc;
      else
       {if(747848894 <= on_unknown_rpc[1])
         var
          call=on_unknown_rpc[2],
          _pO_=
           [0,
            747848894,
            function(state){return caml_call1(call,caml_call1(f,state))}];
        else
         var
          expert=on_unknown_rpc[2],
          _pO_=
           [0,
            -116756726,
            function(state){return caml_call1(expert,caml_call1(f,state))}];
        var on_unknown_rpc$0=_pO_}
      return [0,implementations$0,on_unknown_rpc$0]}
    function cannot_send(r)
     {function _pK_(param){return _dA_}
      var _pL_=caml_call1(Send_result[2],_pK_);
      return caml_call5
              (Core_kernel[224],0,_dB_,cst_Message_cannot_be_sent,r,_pL_)}
    function mark_responded(t)
     {if(t[3])
       caml_call5
        (Core_kernel[224],0,_dC_,cst_Already_responded,t,Expert[1][1]);
      t[3] = 1;
      return 0}
    function schedule(t,buf,pos,len)
     {mark_responded(t);
      var
       _pJ_=[0,caml_call1(_h_,len)],
       header=[1,[0,t[1],_pJ_]],
       r=caml_call6(_bY_[11],t[2],Message[19],header,buf,pos,len);
      if(typeof r === "number")
       return 179911373;
      else
       {if(0 === r[0]){var d=r[1];return [0,933108739,d]}
        return cannot_send(r)}}
    function handle_send_result$0(r)
     {if(typeof r !== "number" && 1 === r[0])return cannot_send(r);return 0}
    function write_bigstring(t,buf,pos,len)
     {mark_responded(t);
      var _pI_=[0,caml_call1(_h_,len)],header=[1,[0,t[1],_pI_]];
      return handle_send_result$0
              (caml_call6(_bY_[10],t[2],Message[19],header,buf,pos,len))}
    function write_error(t,error)
     {mark_responded(t);
      var
       data=
        uncaught_exn
         (cst_server_side_raw_rpc_computation,
          caml_call1(Core_kernel_Error[23],error));
      return handle_send_result$0
              (caml_call3(_bY_[9],t[2],Message[19],[1,[0,t[1],data]]))}
    function write_bin_prot(t,bin_writer_a,a)
     {mark_responded(t);
      var
       _pF_=[1,[0,t[1],[0,a]]],
       _pG_=of_writer(bin_writer_a),
       _pH_=caml_call1(Message[4],_pG_);
      return handle_send_result$0(caml_call3(_bY_[9],t[2],_pH_,_pF_))}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _dD_=
      [0,[0,schedule,write_bigstring,write_bin_prot,write_error],create_exn],
     _dE_=[0,sexp_of_t$9,handle_query,flush,stop],
     include$2=
      [0,
       close$2,
       closed,
       is_closed$1,
       write$0,
       write_without_pushback,
       flushed$0,
       bin_writer$0,
       [0,write$1,write_without_pushback$0]],
     Async_rpc_kernel_Implementations=
      [0,
       create$1,
       null$0,
       lift$1,
       include$2,
       _dE_,
       instantiate,
       create_exn,
       add,
       add_exn,
       descriptions,
       _dD_];
    caml_register_global
     (748,
      Async_rpc_kernel_Implementations,
      "Async_rpc_kernel__Implementations");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$35);
    caml_call1(Expect_test_collector[4][1],cst_src_connection_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$36,cst$12);
    var
     _dF_=include$3[8],
     negotiate=caml_call1(include$3[12],1),
     v1=caml_call2(include$3[11],2,_dG_);
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       {var
         _pz_=sexp[1],
         _pA_=caml_string_compare(_pz_,cst_eof),
         switch$0=
          0 <= _pA_
           ?0 < _pA_
             ?caml_string_notequal(_pz_,cst_negotiated_unexpected_version)
               ?caml_string_notequal(_pz_,cst_negotiation_failed)
                 ?caml_string_notequal(_pz_,cst_reading_header_failed)
                   ?caml_string_notequal(_pz_,cst_timeout)
                     ?caml_string_notequal(_pz_,cst_transport_closed)?6:1
                     :2
                   :3
                 :4
               :5
             :0
           :caml_string_notequal(_pz_,cst_Eof$0)
             ?caml_string_notequal(_pz_,cst_Negotiated_unexpected_version)
               ?caml_string_notequal(_pz_,cst_Negotiation_failed)
                 ?caml_string_notequal(_pz_,cst_Reading_header_failed)
                   ?caml_string_notequal(_pz_,cst_Timeout)
                     ?caml_string_notequal(_pz_,cst_Transport_closed)?6:1
                     :2
                   :3
                 :4
               :5
             :0;
        switch(switch$0)
         {case 0:return 0;
          case 1:return 1;
          case 2:return 2;
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)
          }}
      else
       {var _pB_=sexp[1];
        if(! _pB_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
        var _pC_=_pB_[1];
        if(0 !== _pC_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
        var
         _pD_=_pC_[1],
         _pE_=caml_string_compare(_pD_,cst_eof$0),
         switch$1=
          0 <= _pE_
           ?0 < _pE_
             ?caml_string_notequal(_pD_,cst_negotiated_unexpected_version$0)
               ?caml_string_notequal(_pD_,cst_negotiation_failed$0)
                 ?caml_string_notequal(_pD_,cst_reading_header_failed$0)
                   ?caml_string_notequal(_pD_,cst_timeout$0)
                     ?caml_string_notequal(_pD_,cst_transport_closed$0)?6:4
                     :5
                   :0
                 :1
               :2
             :3
           :caml_string_notequal(_pD_,cst_Eof$1)
             ?caml_string_notequal(_pD_,cst_Negotiated_unexpected_version$0)
               ?caml_string_notequal(_pD_,cst_Negotiation_failed$0)
                 ?caml_string_notequal(_pD_,cst_Reading_header_failed$0)
                   ?caml_string_notequal(_pD_,cst_Timeout$0)
                     ?caml_string_notequal(_pD_,cst_Transport_closed$0)?6:4
                     :5
                   :0
                 :1
               :2
             :3;
        switch(switch$1)
         {case 0:
           var sexp_args=_pB_[2];
           if(sexp_args)
            if(! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Error[5],v0);
              return [0,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_pD_,sexp);
          case 1:
           var sexp_args$0=_pB_[2];
           if(sexp_args$0)
            if(! sexp_args$0[2])
             {var
               v0$1=sexp_args$0[1],
               v0$2=caml_call1(Core_kernel_Error[5],v0$1);
              return [1,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_pD_,sexp);
          case 2:
           var sexp_args$1=_pB_[2];
           if(sexp_args$1)
            if(! sexp_args$1[2])
             {var v0$3=sexp_args$1[1],v0$4=caml_call1(Core_kernel[340],v0$3);
              return [2,v0$4]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_pD_,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)}
    function sexp_of_t$10(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return _dH_;case 1:return _dI_;default:return _dJ_}
      else
       switch(param[0])
        {case 0:
          var v0=param[1],v0$0=caml_call1(Core_kernel_Error[6],v0);
          return [1,[0,_dK_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=caml_call1(Core_kernel_Error[6],v0$1);
          return [1,[0,_dL_,[0,v0$2,0]]];
         default:
          var v0$3=param[1],v0$4=caml_call1(Core_kernel[339],v0$3);
          return [1,[0,_dM_,[0,v0$4,0]]]}}
    var T=[0,t_of_sexp$1,sexp_of_t$10],_dN_=T[2];
    caml_call1(Core_kernel_Sexpable[1],T);
    var
     Handshake_error=
      [248,
       cst_Async_rpc_kernel_Connection_Handshake_error_Handshake_error,
       caml_fresh_oo_id(0)];
    function _dO_(param)
     {if(param[1] === Handshake_error)
       {var
         v0=param[2],
         v1=v0[2],
         v0$0=v0[1],
         v0$1=caml_call1(_dN_,v0$0),
         v1$0=caml_call1(Core_kernel_Info[6],v1),
         v0$2=[1,[0,v0$1,[0,v1$0,0]]];
        return [1,[0,_dP_,[0,v0$2,0]]]}
      throw [0,Assert_failure,_dQ_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Handshake_error,_dO_);
    function t_of_sexp$2(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$2,sexp);
      var
       field_sexps=sexp[1],
       timeout_field=[0,0],
       send_every_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _ps_=param[1];
          if(1 === _ps_[0])
           {var _pt_=_ps_[1];
            if(_pt_)
             {var _pu_=_pt_[1];
              if(0 === _pu_[0])
               {var _pv_=_pt_[2],_pw_=_pu_[1];
                if(! _pv_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_pw_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _pv_[2])
                 {var tail=param[2],field_sexp=_pv_[1];
                  if(caml_string_notequal(_pw_,cst_send_every))
                   if(caml_string_notequal(_pw_,cst_timeout$1))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_pw_,extra[1]]}
                   else
                    if(timeout_field[1])
                     duplicates[1] = [0,_pw_,duplicates[1]];
                    else
                     {var
                       fvalue=
                        caml_call1
                         (Core_kernel_Time_ns_alternate_sexp[1][9],field_sexp);
                      timeout_field[1] = [0,fvalue]}
                  else
                   if(send_every_field[1])
                    duplicates[1] = [0,_pw_,duplicates[1]];
                   else
                    {var
                      fvalue$0=
                       caml_call1
                        (Core_kernel_Time_ns_alternate_sexp[1][9],field_sexp);
                     send_every_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$2,_ps_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc$2,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$2,extra[1],sexp);
        var _px_=timeout_field[1],_py_=send_every_field[1];
        if(_px_)
         if(_py_)
          {var send_every_value=_py_[1],timeout_value=_px_[1];
           return [0,timeout_value,send_every_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc$2,
                 sexp,
                 [0,
                  [0,0 === timeout_field[1]?1:0,cst_timeout$2],
                  [0,[0,0 === send_every_field[1]?1:0,cst_send_every$0],0]])}}
    function sexp_of_t$11(param)
     {var
       v_send_every=param[2],
       v_timeout=param[1],
       arg=caml_call1(Core_kernel_Time_ns_alternate_sexp[1][10],v_send_every),
       bnds=[0,[1,[0,_dR_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel_Time_ns_alternate_sexp[1][10],v_timeout),
       bnds$0=[0,[1,[0,_dS_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     _dT_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_timeout$3,Core_kernel_Time_ns_alternate_sexp[1][5]],
         [0,[0,cst_send_every$1,Core_kernel_Time_ns_alternate_sexp[1][5]],0]]),
     _dU_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$11),0,_dT_],0],
     _dV_=caml_call1(Bin_prot_Shape[4][1],cst_src_connection_ml_42_2),
     group$9=caml_call2(Bin_prot_Shape[6],_dV_,_dU_),
     _dW_=caml_call1(Bin_prot_Shape[2][1],cst_t$12),
     bin_shape_t$5=caml_call1(caml_call2(Bin_prot_Shape[14],group$9,_dW_),0);
    function bin_size_t$3(param)
     {var
       v2=param[2],
       v1=param[1],
       _pq_=caml_call1(Core_kernel_Time_ns_alternate_sexp[1][1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_pq_),
       _pr_=caml_call1(Core_kernel_Time_ns_alternate_sexp[1][1],v2);
      return caml_call2(Bin_prot_Common[23],size,_pr_)}
    function bin_write_t$3(buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel_Time_ns_alternate_sexp[1][2],buf,pos,v1);
      return caml_call3(Core_kernel_Time_ns_alternate_sexp[1][2],buf,pos$0,v2)}
    var bin_writer_t$4=[0,bin_size_t$3,bin_write_t$3];
    function bin_read_t$18(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_connection_ml_Heartbeat_config_t,
               pos_ref[1])}
    function bin_read_t$19(buf,pos_ref)
     {var
       v_timeout=
        caml_call2(Core_kernel_Time_ns_alternate_sexp[1][3],buf,pos_ref),
       v_send_every=
        caml_call2(Core_kernel_Time_ns_alternate_sexp[1][3],buf,pos_ref);
      return [0,v_timeout,v_send_every]}
    var
     bin_reader_t$9=[0,bin_read_t$19,bin_read_t$18],
     bin_t$4=[0,bin_shape_t$5,bin_writer_t$4,bin_reader_t$9];
    function send_every(r){return r[2]}
    function timeout(r){return r[1]}
    function create$2(opt,_pp_,param)
     {if(opt)
       var sth=opt[1],timeout=sth;
      else
       var timeout=caml_call1(Core_kernel_Time_ns_alternate_sexp[1][80],30.);
      if(_pp_)
       var sth$0=_pp_[1],send_every=sth$0;
      else
       var
        send_every=
         caml_call1(Core_kernel_Time_ns_alternate_sexp[1][80],10.);
      return [0,timeout,send_every]}
    function sexp_of_t$12(param)
     {var
       v_heartbeat_config=param[2],
       v_description=param[1],
       v_heartbeat_callbacks=param[3],
       v_heartbeat_event=param[11],
       v_time_source=param[10],
       v_implementations_instance=param[9],
       v_close_finished=param[8],
       v_close_started=param[7],
       v_open_queries=param[6],
       v_writer=param[5],
       v_reader=param[4],
       arg=
        caml_call2
         (Core_kernel_Set_once[1],
          Async_kernel_Synchronous_time_source[21][1],
          v_heartbeat_event),
       bnds=[0,[1,[0,_dX_,[0,arg,0]]],0],
       arg$0=caml_call1(Async_kernel_Synchronous_time_source[4],v_time_source),
       bnds$0=[0,[1,[0,_dY_,[0,arg$0,0]]],bnds],
       arg$1=
        caml_call2(Core_kernel_Set_once[1],_dE_[1],v_implementations_instance),
       bnds$1=[0,[1,[0,_dZ_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call2(Async_kernel_Ivar[9],Core_kernel[491],v_close_finished),
       bnds$2=[0,[1,[0,_d0_,[0,arg$2,0]]],bnds$1],
       arg$3=
        caml_call2(Async_kernel_Ivar[9],Core_kernel_Info[6],v_close_started),
       bnds$3=[0,[1,[0,_d1_,[0,arg$3,0]]],bnds$2],
       arg$4=
        caml_call3
         (Core_kernel_Hashtbl[3],
          Query_id[10],
          Sexplib0_Sexp_conv[23],
          v_open_queries),
       bnds$4=[0,[1,[0,_d2_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(_bY_[1],v_writer),
       bnds$5=[0,[1,[0,_d3_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call1(_bZ_[1],v_reader),
       bnds$6=[0,[1,[0,_d4_,[0,arg$6,0]]],bnds$5];
      function _pm_(f)
       {function _pn_(_po_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_pn_)}
      var
       arg$7=caml_call2(Core_kernel[275],_pm_,v_heartbeat_callbacks),
       bnds$7=[0,[1,[0,_d5_,[0,arg$7,0]]],bnds$6],
       arg$8=sexp_of_t$11(v_heartbeat_config),
       bnds$8=[0,[1,[0,_d6_,[0,arg$8,0]]],bnds$7],
       arg$9=caml_call1(Core_kernel_Info[6],v_description),
       bnds$9=[0,[1,[0,_d7_,[0,arg$9,0]]],bnds$8];
      return [1,bnds$9]}
    function sexp_of_t_hum_writer(t)
     {var _pl_=[0,[1,[0,_d8_,[0,caml_call1(_bY_[1],t[5]),0]]],0];
      return [1,
              [0,[1,[0,_d9_,[0,caml_call1(Core_kernel_Info[6],t[1]),0]]],_pl_]]}
    function description$0(t){return t[1]}
    function is_closed$2(t){return caml_call1(Async_kernel_Ivar[17],t[7])}
    function writer(t){return is_closed$2(t)?_d__:[0,t[5]]}
    function bytes_to_write$0(t){return caml_call1(_bY_[5],t[5])}
    function flushed$1(t){return caml_call1(_bY_[7],t[5])}
    function handle_send_result$1(t,r)
     {if(typeof r === "number")
       return caml_call5
               (Core_kernel[224],
                0,
                _d$_,
                cst_RPC_connection_got_closed_writer,
                t,
                sexp_of_t_hum_writer);
      else
       {if(0 === r[0]){var x=r[1];return x}
        var
         _pf_=0,
         _pg_=[0,[1,[0,_ea_,[0,sexp_of_t_hum_writer(t),0]]],0],
         _ph_=0,
         _pi_=function(param){return _eb_},
         _pj_=
          [0,
           [1,
            [0,[1,[0,_ec_,[0,caml_call2(Send_result[2],_pi_,r),_ph_]]],_pg_]],
           _pf_],
         _pk_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Message_cannot_be_sent$0),
            _pj_]];
        return caml_call1(Core_kernel[241],_pk_)}}
    function dispatch(t,response_handler,bin_writer_query,query)
     {var r=writer(t);
      if(0 === r[0])
       {var
         writer$0=r[1],
         _pc_=
          function(response_handler)
           {return caml_call3
                    (Core_kernel_Hashtbl[34],t[6],query[3],response_handler)};
        caml_call2(Core_kernel_Option[18],response_handler,_pc_);
        var _pd_=of_writer(bin_writer_query),_pe_=caml_call1(Message[4],_pd_);
        handle_send_result$1(t,caml_call3(_bY_[9],writer$0,_pe_,[0,query]));
        return _ed_}
      return r}
    function make_dispatch_bigstring
     (do_send,t,tag,version,buf,pos,len,response_handler)
     {var match=writer(t);
      if(0 === match[0])
       {var
         writer$0=match[1],
         id=caml_call1(Query_id[45],0),
         header=[0,[0,tag,version,id,caml_call1(_h_,len)]],
         _pb_=
          function(response_handler)
           {return caml_call3
                    (Core_kernel_Hashtbl[34],t[6],id,response_handler)};
        caml_call2(Core_kernel_Option[18],response_handler,_pb_);
        var
         result=
          handle_send_result$1
           (t,caml_call6(do_send,writer$0,Message[19],header,buf,pos,len));
        return [0,result]}
      return _ee_}
    var _ef_=_bY_[10];
    function dispatch_bigstring(_o6_,_o7_,_o8_,_o9_,_o__,_o$_,_pa_)
     {return make_dispatch_bigstring(_ef_,_o6_,_o7_,_o8_,_o9_,_o__,_o$_,_pa_)}
    var _eg_=_bY_[11];
    function schedule_dispatch_bigstring(_oZ_,_o0_,_o1_,_o2_,_o3_,_o4_,_o5_)
     {return make_dispatch_bigstring(_eg_,_oZ_,_o0_,_o1_,_o2_,_o3_,_o4_,_o5_)}
    function close_reason(t,on_close)
     {var reason=caml_call1(Async_kernel_Ivar[18],t[7]);
      if(890972481 <= on_close)return reason;
      function _oX_(param){return reason}
      var _oY_=caml_call1(Async_kernel_Ivar[18],t[8]);
      return caml_call2(Async_kernel[20],_oY_,_oX_)}
    function close_finished(t){return caml_call1(Async_kernel_Ivar[18],t[8])}
    function add_heartbeat_callback(t,f)
     {t[3] = caml_call2(Core_kernel_Array[38],[0,f],t[3]);return 0}
    function close$3(opt,reason,t)
     {if(opt)
       var sth=opt[1],streaming_responses_flush_timeout=sth;
      else
       var
        streaming_responses_flush_timeout=
         caml_call1(Core_kernel_Time_ns_alternate_sexp[1][81],5);
      if(1 - is_closed$2(t))
       {var
         _oK_=
          function(event)
           {var
             match=
              caml_call2
               (Async_kernel_Synchronous_time_source[21][7],t[10],event);
            if(1 === match)
             {var
               _oW_=
                function(param)
                 {return caml_call2
                          (Async_kernel_Synchronous_time_source[21][8],t[10],event)};
              return caml_call3
                      (Async_kernel_Synchronous_time_source[18],
                       t[10],
                       Core_kernel_Time_ns_alternate_sexp[1][74],
                       _oW_)}
            return 0},
         _oL_=caml_call1(Core_kernel_Set_once[7],t[11]);
        caml_call2(Core_kernel_Option[18],_oL_,_oK_);
        caml_call2(Async_kernel_Ivar[14],t[7],reason);
        var
         _oM_=
          function(param)
           {function _oS_(param)
             {function _oU_(param)
               {return caml_call2(Async_kernel_Ivar[14],t[8],0)}
              var _oV_=caml_call1(_bZ_[2],t[4]);
              return caml_call2(Async_kernel[16],_oV_,_oU_)}
            var _oT_=caml_call1(_bY_[2],t[5]);
            return caml_call2(Async_kernel[16],_oT_,_oS_)},
         match=caml_call1(Core_kernel_Set_once[7],t[9]);
        if(match)
         {var instance=match[1],flushed=caml_call1(_dE_[3],instance);
          if(caml_call1(Async_kernel_Deferred[7],flushed))
           {caml_call1(_dE_[4],instance);var flushed$0=flushed}
          else
           var
            _oN_=function(param){return caml_call1(_dE_[4],instance)},
            _oO_=caml_call1(Async_kernel_Time_source[36],t[10]),
            _oP_=
             [0,
              caml_call2
               (Async_kernel_Time_source[27],
                _oO_,
                streaming_responses_flush_timeout),
              0],
            _oQ_=[0,flushed,[0,caml_call1(_bY_[6],t[5]),_oP_]],
            _oR_=caml_call1(Async_kernel_Deferred[25],_oQ_),
            flushed$0=caml_call2(Async_kernel[21],_oR_,_oN_);
          var flushed$1=flushed$0}
        else
         var flushed$1=Async_kernel_Deferred[18];
        caml_call2(Async_kernel[16],flushed$1,_oM_)}
      return close_finished(t)}
    function heartbeat_now(t,last_heartbeat)
     {var
       _oF_=caml_call1(Async_kernel_Synchronous_time_source[13],t[10]),
       since_last_heartbeat=
        caml_call2(Core_kernel_Time_ns_alternate_sexp[69],_oF_,last_heartbeat);
      if
       (caml_call2
         (Core_kernel_Time_ns_alternate_sexp[1][17],
          since_last_heartbeat,
          t[2][1]))
       {var
         reason=
          function(param)
           {var
             _oH_=t[2][1],
             _oI_=
              [0,
               [11,
                cst_No_heartbeats_received_for,
                [24,
                 _ej_,
                 function(param,custom_printf_001)
                  {var
                    _oJ_=
                     caml_call1
                      (Core_kernel_Time_ns_alternate_sexp[1][10],
                       custom_printf_001);
                   return caml_call2(Sexplib0_Sexp[13],0,_oJ_)},
                 _ei_]],
               cst_No_heartbeats_received_for_sexp_Time_ns_Span_t];
            return caml_call2(Core_kernel[244],_oI_,_oH_)},
         _oG_=close$3(0,caml_call1(Core_kernel_Info[13],reason),t);
        return caml_call1(Async_kernel[6],_oG_)}
      return handle_send_result$1(t,caml_call3(_bY_[9],t[5],Message[19],0))}
    var
     default_handshake_timeout=
      caml_call1(Core_kernel_Time_ns_alternate_sexp[1][80],30.);
    function cleanup(t,reason,exn)
     {var _oB_=close$3(0,reason,t);
      caml_call1(Async_kernel[6],_oB_);
      var _oC_=1 - caml_call1(Core_kernel_Hashtbl[29],t[6]);
      if(_oC_)
       {if(exn[1] === Rpc)
         var error=exn[2],error$0=error;
        else
         var error$0=[2,caml_call1(Base_Exn[1],exn)];
        var
         dummy_buffer=caml_call2(Core_kernel_Bigstring[110],0,1),
         dummy_ref=[0,0],
         _oD_=
          function(query_id,response_handler)
           {caml_call3
             (response_handler,
              [0,query_id,[1,error$0]],
              dummy_buffer,
              dummy_ref);
            return 0};
        caml_call2(Core_kernel_Hashtbl[21],t[6],_oD_);
        caml_call1(Core_kernel_Hashtbl[16],t[6]);
        var _oE_=runtime.bigstring_destroy_stub(dummy_buffer)}
      else
       var _oE_=_oC_;
      return _oE_}
    var contains_magic_prefix=caml_call1(include$3[13],2);
    function create$3
     (implementations,connection_state,opt,_nR_,_nQ_,_nP_,param)
     {var writer=param[2],reader=param[1];
      if(opt)
       var sth=opt[1],handshake_timeout=sth;
      else
       var handshake_timeout=default_handshake_timeout;
      if(_nR_)
       var sth$0=_nR_[1],heartbeat_config=sth$0;
      else
       var heartbeat_config=create$2(0,0,0);
      if(_nQ_)
       var sth$1=_nQ_[1],description=sth$1;
      else
       var description=caml_call1(Core_kernel_Info[11],cst_created_directly);
      if(_nP_)
       var sth$2=_nP_[1],time_source=sth$2;
      else
       var time_source=caml_call1(Async_kernel_Synchronous_time_source[23],0);
      if(implementations)
       var s=implementations[1],implementations$0=s;
      else
       var implementations$0=null$0(0);
      var
       _nS_=caml_call1(Core_kernel_Set_once[3],0),
       _nT_=caml_call1(Core_kernel_Set_once[3],0),
       _nU_=caml_call1(Async_kernel_Ivar[12],0),
       _nV_=caml_call1(Async_kernel_Ivar[12],0),
       t=
        [0,
         description,
         heartbeat_config,
         [0],
         reader,
         writer,
         caml_call3(Core_kernel_Hashtbl[80][13],0,_et_,0),
         _nV_,
         _nU_,
         _nT_,
         time_source,
         _nS_];
      function _nW_(param)
       {var
         _oA_=
          close$3
           (0,caml_call1(Core_kernel_Info[11],cst_RPC_transport_stopped),t);
        return caml_call1(Async_kernel[6],_oA_)}
      var _nX_=caml_call1(_bY_[6],writer);
      caml_call2(Async_kernel[12],_nX_,_nW_);
      function _nY_(param)
       {if(0 === param[0])
         {var
           _n5_=t[5],
           _n6_=caml_call1(connection_state,t),
           _n7_=caml_call1(Async_kernel_Ivar[18],t[7]),
           instance=instantiate(implementations$0,t[1],_n7_,_n6_,_n5_);
          caml_call3(Core_kernel_Set_once[5],t[9],_el_,instance);
          var
           monitor=caml_call4(Async_kernel_Monitor[3],0,0,_em_,0),
           reason=
            function(name,exn)
             {var
               _oy_=
                caml_call2
                 (Core_kernel[18],cst_exn_raised_in_RPC_connection,name),
               _oz_=caml_call2(Core_kernel_Info[22],0,exn);
              return [0,exn,caml_call2(Core_kernel_Info[18],_oz_,_oy_)]},
           _n8_=
            function(param)
             {var reason=param[2],exn=param[1];return cleanup(t,reason,exn)},
           _n9_=0,
           _n__=function(_ox_){return reason(cst_Writer_t,_ox_)},
           _n$_=caml_call1(_bY_[4],t[5]),
           _oa_=caml_call1(Async_kernel_Monitor[11],_n$_),
           _ob_=[0,caml_call2(Async_kernel_Async_stream[25],_oa_,_n__),_n9_],
           _oc_=function(_ow_){return reason(cst_loop,_ow_)},
           _od_=caml_call1(Async_kernel_Monitor[11],monitor),
           _oe_=[0,caml_call2(Async_kernel_Async_stream[25],_od_,_oc_),_ob_],
           _of_=caml_call1(Async_kernel_Async_stream[5],_oe_),
           _og_=caml_call1(Async_kernel_Async_stream[31],_of_);
          caml_call2(Async_kernel_Async_stream[18],_og_,_n8_);
          var
           _oh_=
            function(param)
             {var
               last_heartbeat=
                [0,caml_call1(Async_kernel_Synchronous_time_source[13],t[10])];
              heartbeat_now(t,last_heartbeat[1]);
              function _oj_(param){return heartbeat_now(t,last_heartbeat[1])}
              var
               heartbeat_from_now_on=
                caml_call3
                 (Async_kernel_Synchronous_time_source[21][5],
                  t[10],
                  t[2][2],
                  _oj_);
              caml_call3
               (Core_kernel_Set_once[5],t[11],_ek_,heartbeat_from_now_on);
              function _ok_(param)
               {if(0 === param[0])
                 {var reason=param[1];return cleanup(t,reason,[0,Rpc,0,t[1]])}
                var _ov_=[0,Rpc,0,t[1]];
                return cleanup
                        (t,
                         caml_call1
                          (Core_kernel_Info[11],cst_EOF_or_connection_closed),
                         _ov_)}
              function _ol_(param)
               {last_heartbeat[1]
                =
                caml_call1(Async_kernel_Synchronous_time_source[13],t[10]);
                function _ou_(f){return caml_call1(f,0)}
                return caml_call2(Core_kernel_Array[19],t[3],_ou_)}
              function f(buf,pos,param)
               {var
                 read_buffer_pos_ref=[0,pos],
                 msg$0=caml_call2(Message[15],buf,read_buffer_pos_ref);
                if(typeof msg$0 === "number")
                 var res=0;
                else
                 if(0 === msg$0[0])
                  var
                   query=msg$0[1],
                   instance=caml_call2(Core_kernel_Set_once[8],t[9],_eh_),
                   res=
                    caml_call4(_dE_[2],instance,query,buf,read_buffer_pos_ref);
                 else
                  {var
                    response=msg$0[1],
                    match=caml_call2(Core_kernel_Hashtbl[52],t[6],response[1]);
                   if(match)
                    {var
                      response_handler=match[1],
                      match$0=
                       caml_call3
                        (response_handler,response,buf,read_buffer_pos_ref);
                     if(typeof match$0 === "number")
                      var _op_=0;
                     else
                      {var _oo_=match$0[1];
                       if(-286555464 === _oo_)
                        {var wait=match$0[2];
                         caml_call2(Core_kernel_Hashtbl[31],t[6],response[1]);
                         var _op_=[1,wait]}
                       else
                        if(76061764 <= _oo_)
                         {var removal_circumstances=match$0[2];
                          caml_call2(Core_kernel_Hashtbl[31],t[6],response[1]);
                          if(0 === removal_circumstances[0])
                           var _op_=0;
                          else
                           {var e=removal_circumstances[1];
                            if(typeof e === "number")
                             var switch$0=0;
                            else
                             if(3 === e[0])var _op_=0,switch$0=1;else var switch$0=0;
                            if(! switch$0)var _op_=[0,[1,e]]}}
                        else
                         var wait$0=match$0[2],_op_=[1,wait$0]}}
                   else
                    var _op_=[0,[1,[4,response[1]]]];
                   var res=_op_}
                if(typeof res === "number")
                 return 0;
                else
                 {if(0 === res[0])
                   {var result=res[1];
                    if(0 === result[0])
                     var reason=caml_call1(Core_kernel_Info[11],msg);
                    else
                     var
                      e$0=result[1],
                      _or_=
                       function(param)
                        {return caml_call1
                                 (Sexplib0_Sexp_conv[7],
                                  cst_Connection_on_message_resulted_in_Connection_closed_error_This_is_weird)},
                      _os_=function(_ot_){return sexp_of_t$8(_ot_,_or_)},
                      reason=caml_call5(Core_kernel_Info[15],0,0,msg,e$0,_os_);
                    var _oq_=close$3(0,reason,t);
                    caml_call1(Async_kernel[6],_oq_);
                    return [0,reason]}
                  return res}}
              var
               _oi_=caml_call1(Base_Staged[1],f),
               _om_=caml_call1(Base_Staged[2],_oi_),
               _on_=caml_call3(_bZ_[4],t[4],_om_,_ol_);
              return caml_call2(Async_kernel[16],_on_,_ok_)};
          caml_call3(Async_kernel[14],[0,monitor],0,_oh_);
          return [0,t]}
        var error=param[1];
        return [1,[0,Handshake_error,[0,error,description]]]}
      if(caml_call1(_bY_[3],t[5]))
       var _nZ_=caml_call1(Async_kernel[19],_en_);
      else
       {handle_send_result$1(t,caml_call3(_bY_[9],t[5],_dF_[2],v1));
        var
         _nL_=function(param){return caml_call2(_bZ_[6],t[4],_dF_[3])},
         result=caml_call7(Async_kernel_Monitor[16],0,0,0,0,_eo_,0,_nL_),
         _nM_=
          function(param)
           {if(typeof param === "number")
             {var
               _n0_=
                close$3
                 (0,caml_call1(Core_kernel_Info[11],cst_Handshake_timeout),t);
              caml_call1(Async_kernel[6],_n0_);
              return _ep_}
            var _n1_=param[2];
            if(0 === _n1_[0])
             {var _n2_=_n1_[1];
              if(0 === _n2_[0])
               {var peer=_n2_[1],match=caml_call2(negotiate,v1,peer);
                if(0 === match[0])
                 {var _n3_=match[1];return 1 === _n3_?_eq_:[1,[2,_n3_]]}
                var e=match[1];
                return [1,[1,e]]}
              return 3456156 <= _n2_[1]?_er_:_es_}
            var
             exn=_n1_[1],
             reason=
              caml_call1
               (Core_kernel_Info[11],
                cst_Reader_read_one_message_bin_prot_raised),
             _n4_=close$3(0,reason,t);
            caml_call1(Async_kernel[6],_n4_);
            return [1,[0,caml_call2(Core_kernel_Error[22],0,exn)]]},
         _nN_=caml_call1(Async_kernel_Time_source[36],t[10]),
         _nO_=
          caml_call3
           (Async_kernel_Time_source[28],_nN_,handshake_timeout,result),
         _nZ_=caml_call2(Async_kernel[21],_nO_,_nM_)}
      return caml_call2(Async_kernel[21],_nZ_,_nY_)}
    function with_close
     (implementations,
      handshake_timeout,
      heartbeat_config,
      connection_state,
      transport,
      dispatch_queries,
      on_handshake_error)
     {if(typeof on_handshake_error === "number")
       var handle_handshake_error=function(_nK_){throw _nK_};
      else
       var f=on_handshake_error[2],handle_handshake_error=f;
      function _nA_(t)
       {if(0 === t[0])
         {var
           t$0=t[1],
           _nC_=
            function(param)
             {return close$3
                      (0,
                       caml_call1
                        (Core_kernel_Info[11],
                         cst_Rpc_Connection_with_close_finished),
                       t$0)},
           _nD_=
            function(param)
             {function _nG_(result)
               {function _nI_(param){return result}
                var
                 _nJ_=
                  implementations
                   ?close_finished(t$0)
                   :Async_kernel_Deferred[18];
                return caml_call2(Async_kernel[21],_nJ_,_nI_)}
              var _nH_=caml_call1(dispatch_queries,t$0);
              return caml_call2(Async_kernel[20],_nH_,_nG_)};
          return caml_call7(Async_kernel_Monitor[23],0,0,0,0,0,_nD_,_nC_)}
        var e=t[1];
        function _nE_(param){return caml_call1(handle_handshake_error,e)}
        var _nF_=close$1(transport);
        return caml_call2(Async_kernel[20],_nF_,_nE_)}
      var
       _nB_=
        create$3
         (implementations,
          connection_state,
          handshake_timeout,
          heartbeat_config,
          0,
          0,
          transport);
      return caml_call2(Async_kernel[20],_nB_,_nA_)}
    function server_with_close
     (handshake_timeout,
      heartbeat_config,
      transport,
      implementations,
      connection_state,
      on_handshake_error)
     {if(typeof on_handshake_error === "number")
       var
        on_handshake_error$0=
         -146189108 <= on_handshake_error
          ?-146189108
          :[0,747848894,function(param){return Async_kernel_Deferred[18]}];
      else
       var f=on_handshake_error[2],on_handshake_error$0=[0,747848894,f];
      return with_close
              ([0,implementations],
               handshake_timeout,
               heartbeat_config,
               connection_state,
               transport,
               function(param){return Async_kernel_Deferred[18]},
               on_handshake_error$0)}
    function close$4(streaming_responses_flush_timeout,opt,t)
     {if(opt)
       var sth=opt[1],reason=sth;
      else
       var reason=caml_call1(Core_kernel_Info[11],cst_Rpc_Connection_close);
      return close$3(streaming_responses_flush_timeout,reason,t)}
    function null$1(param)
     {var _nz_=null$0(0);return [0,function(param){return 0},_nz_]}
    var Client_implementations=[0,null$1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _eu_=
      [0,
       t_of_sexp$2,
       sexp_of_t$11,
       bin_size_t$3,
       bin_write_t$3,
       bin_read_t$19,
       bin_read_t$18,
       bin_shape_t$5,
       bin_writer_t$4,
       bin_reader_t$9,
       bin_t$4,
       create$2,
       timeout,
       send_every],
     Async_rpc_kernel_Connection=
      [0,
       sexp_of_t$12,
       _eu_,
       Client_implementations,
       create$3,
       contains_magic_prefix,
       description$0,
       add_heartbeat_callback,
       close$4,
       close_finished,
       close_reason,
       is_closed$2,
       bytes_to_write$0,
       flushed$1,
       with_close,
       server_with_close,
       dispatch,
       dispatch_bigstring,
       schedule_dispatch_bigstring,
       default_handshake_timeout];
    caml_register_global
     (759,Async_rpc_kernel_Connection,"Async_rpc_kernel__Connection");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$38);
    caml_call1(Expect_test_collector[4][1],cst_src_connection_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$39,cst$13);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Connection_intf=[0];
    caml_register_global
     (760,
      Async_rpc_kernel_Connection_intf,
      "Async_rpc_kernel__Connection_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$41);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$42,cst$14);
    var symbol$6=Core_kernel_Result[14],symbol$7=Core_kernel_Result[15];
    function dispatch_raw
     (conn,tag,version,bin_writer_query,query,query_id,response_handler)
     {var
       query$0=[0,tag,version,query_id,query],
       match=dispatch(conn,response_handler,bin_writer_query,query$0);
      return 0 === match[0]?_ev_:_ew_}
    function dispatch_raw$0
     (conn,tag,version,bin_writer_query,query,query_id,f)
     {var
       response_ivar=caml_call1(Async_kernel_Ivar[12],0),
       e=
        dispatch_raw
         (conn,
          tag,
          version,
          bin_writer_query,
          query,
          query_id,
          [0,caml_call1(f,response_ivar)]);
      if(0 !== e[0])caml_call2(Async_kernel_Ivar[14],response_ivar,e);
      return caml_call1(Async_kernel_Ivar[18],response_ivar)}
    function create$4(name,version,bin_query,bin_response)
     {return [0,caml_call1(Rpc_tag[11],name),version,bin_query,bin_response]}
    function name(t){return caml_call1(Rpc_tag[12],t[1])}
    function version(t){return t[2]}
    function description$1(t){var _ny_=t[2];return [0,name(t),_ny_]}
    function bin_query(t){return t[3]}
    function bin_response(t){return t[4]}
    function implement(t,f){return [0,t[1],t[2],[2,t[3][3],t[4][2],f,1]]}
    function implement$0(t,f){return [0,t[1],t[2],[2,t[3][3],t[4][2],f,0]]}
    function dispatch$0(t,conn,query)
     {function response_handler(ivar,response,read_buffer,read_buffer_pos_ref)
       {function _nx_(len)
         {return bin_read_from_bigstring
                  (t[4][3],
                   0,
                   read_buffer,
                   read_buffer_pos_ref,
                   len,
                   cst_client_side_rpc_response_un_bin_io_ing)}
        var response$0=caml_call2(symbol$6,response[2],_nx_);
        caml_call2(Async_kernel_Ivar[14],ivar,response$0);
        return _ex_}
      var query_id=caml_call1(Query_id[45],0);
      return dispatch_raw$0
              (conn,t[1],t[2],t[3][2],query,query_id,response_handler)}
    function rpc_result_to_or_error(t,conn,result)
     {var _nw_=close_reason(conn,890972481);
      return or_error(t[1],t[2],conn[1],_nw_,result)}
    function dispatch$1(t,conn,query)
     {function _nu_(result){return rpc_result_to_or_error(t,conn,result)}
      var _nv_=dispatch$0(t,conn,query);
      return caml_call2(Async_kernel[21],_nv_,_nu_)}
    function dispatch_exn(t,conn,query)
     {var _ns_=Core_kernel_Or_error[36],_nt_=dispatch$1(t,conn,query);
      return caml_call2(Async_kernel[21],_nt_,_ns_)}
    function make_dispatch
     (do_dispatch,
      conn,
      rpc_tag,
      version,
      buf,
      pos,
      len,
      handle_response,
      handle_error)
     {function response_handler(response,read_buffer,read_buffer_pos_ref)
       {var _no_=response[2];
        if(0 === _no_[0])
         {var
           len=_no_[1],
           d=
            caml_call3(handle_response,read_buffer,read_buffer_pos_ref[1],len);
          read_buffer_pos_ref[1] = read_buffer_pos_ref[1] + len | 0;
          return caml_call1(Async_kernel_Deferred[7],d)?_ey_:[0,-286555464,d]}
        var
         e=_no_[1],
         _np_=
          sexp_of_t$8
           (e,
            function(param)
             {var
               _nq_=close_reason(conn,890972481),
               _nr_=caml_call1(Async_kernel_Deferred[5],_nq_);
              return caml_call2(Core_kernel[431],Core_kernel_Info[6],_nr_)});
        caml_call1(handle_error,caml_call1(Core_kernel_Error[5],_np_));
        return _ez_}
      return caml_call7
              (do_dispatch,
               conn,
               caml_call1(Rpc_tag[11],rpc_tag),
               version,
               buf,
               pos,
               len,
               [0,response_handler])}
    function dispatch$2
     (conn,rpc_tag,version,buf,pos,len,handle_response,handle_error)
     {var
       match=
        make_dispatch
         (dispatch_bigstring,
          conn,
          rpc_tag,
          version,
          buf,
          pos,
          len,
          handle_response,
          handle_error);
      return 0 === match[0]?17724:179911373}
    function schedule_dispatch
     (conn,rpc_tag,version,buf,pos,len,handle_response,handle_error)
     {var
       match=
        make_dispatch
         (schedule_dispatch_bigstring,
          conn,
          rpc_tag,
          version,
          buf,
          pos,
          len,
          handle_response,
          handle_error);
      if(0 === match[0]){var d=match[1];return [0,933108739,d]}
      return 179911373}
    function implement$1(t,f){return [0,t[1],t[2],[3,f,1]]}
    function implement$2(t,f){return [0,t[1],t[2],[3,f,0]]}
    function implement_for_tag_and_version(rpc_tag,version,f)
     {return [0,caml_call1(Rpc_tag[11],rpc_tag),version,[3,f,1]]}
    function implement_for_tag_and_version$0(rpc_tag,version,f)
     {return [0,caml_call1(Rpc_tag[11],rpc_tag),version,[3,f,0]]}
    function bin_msg(r){return r[3]}
    function version$0(r){return r[2]}
    function name$0(t){return caml_call1(Rpc_tag[12],t[1])}
    function create$5(name,version,bin_msg)
     {return [0,caml_call1(Rpc_tag[11],name),version,bin_msg]}
    function description$2(t){var _nn_=t[2];return [0,name$0(t),_nn_]}
    function implement$3(t,f){return [0,t[1],t[2],[0,t[3][3],f]]}
    function dispatch$3(t,conn,query)
     {var query_id=caml_call1(Query_id[45],0);
      return dispatch_raw(conn,t[1],t[2],t[3][2],query,query_id,0)}
    function rpc_result_to_or_error$0(t,conn,result)
     {var _nm_=close_reason(conn,890972481);
      return or_error(t[1],t[2],conn[1],_nm_,result)}
    function dispatch$4(t,conn,query)
     {var result=dispatch$3(t,conn,query);
      return rpc_result_to_or_error$0(t,conn,result)}
    function dispatch_exn$0(t,conn,query)
     {var _nl_=dispatch$4(t,conn,query);
      return caml_call1(Core_kernel_Or_error[36],_nl_)}
    function implement$4(t,f){return [0,t[1],t[2],[1,f]]}
    function dispatch$5(param,conn,buf,pos,len)
     {var
       version=param[2],
       tag=param[1],
       match=dispatch_bigstring(conn,tag,version,buf,pos,len,0);
      return 0 === match[0]?17724:179911373}
    function schedule_dispatch$0(param,conn,buf,pos,len)
     {var
       version=param[2],
       tag=param[1],
       match=schedule_dispatch_bigstring(conn,tag,version,buf,pos,len,0);
      if(0 === match[0]){var flushed=match[1];return [0,933108739,flushed]}
      return 179911373}
    var
     Expert$0=[0,implement$4,dispatch$5,schedule_dispatch$0],
     _eC_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,_eB_,[0,_eA_,[0,[0,cst_Error,[0,Core_kernel_Error[33],0]],0]]]),
     _eD_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$13),0,_eC_],0],
     _eE_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_ml_272_2),
     group$10=caml_call2(Bin_prot_Shape[6],_eE_,_eD_),
     _eF_=caml_call1(Bin_prot_Shape[2][1],cst_t$14),
     bin_shape_t$6=caml_call1(caml_call2(Bin_prot_Shape[14],group$10,_eF_),0);
    function bin_size_t$4(param)
     {if(typeof param === "number")return 1;
      var v1=param[1],_nk_=caml_call1(Core_kernel_Error[29],v1);
      return caml_call2(Bin_prot_Common[23],1,_nk_)}
    function bin_write_t$4(buf,pos,param)
     {if(typeof param === "number")
       return 0 === param
               ?caml_call3(Bin_prot_Write[30],buf,pos,0)
               :caml_call3(Bin_prot_Write[30],buf,pos,1);
      var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,2);
      return caml_call3(Core_kernel_Error[30],buf,pos$0,v1)}
    var bin_writer_t$5=[0,bin_size_t$4,bin_write_t$4];
    function bin_read_t$20(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_rpc_ml_Pipe_close_reason_t,
               pos_ref[1])}
    function bin_read_t$21(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_eG_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:return 1;
        default:
         var arg_1=caml_call2(Core_kernel_Error[31],buf,pos_ref);
         return [0,arg_1]}}
    var
     bin_reader_t$10=[0,bin_read_t$21,bin_read_t$20],
     bin_t$5=[0,bin_shape_t$6,bin_writer_t$5,bin_reader_t$10];
    function compare$2(a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       {if(0 === a_001)
         {if(typeof match === "number")if(0 === match)return 0;return -1}
        if(typeof match !== "number")return -1;
        if(0 !== match)return 0}
      else
       {var _nj_=a_001[1];
        if(typeof match !== "number")
         {var b_004=match[1];
          return caml_call2(Core_kernel_Error[1],_nj_,b_004)}
        if(0 !== match)return 1}
      return 1}
    function t_of_sexp$3(sexp)
     {if(0 === sexp[0])
       {var _nf_=sexp[1];
        if(caml_string_notequal(_nf_,cst_Closed_locally))
         {if(caml_string_notequal(_nf_,cst_Closed_remotely))
           {if(caml_string_notequal(_nf_,cst_Error$0))
             if(caml_string_notequal(_nf_,cst_closed_locally))
              if(caml_string_notequal(_nf_,cst_closed_remotely))
               if(caml_string_notequal(_nf_,cst_error$1))
                var switch$0=1,switch$1=0,switch$2=0;
               else
                var switch$2=1;
              else
               var switch$1=1,switch$2=0;
             else
              var switch$0=0,switch$1=0,switch$2=0;
            else
             var switch$2=1;
            if(switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$3,sexp)}
          else
           var switch$1=1;
          if(switch$1)return 1}
        else
         var switch$0=0;
        if(! switch$0)return 0}
      else
       {var _ng_=sexp[1];
        if(! _ng_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$3,sexp);
        var _nh_=_ng_[1];
        if(0 !== _nh_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$3,sexp);
        var _ni_=_nh_[1];
        if(caml_string_notequal(_ni_,cst_Closed_locally$0))
         {if(caml_string_notequal(_ni_,cst_Closed_remotely$0))
           {if(caml_string_notequal(_ni_,cst_Error$1))
             if(caml_string_notequal(_ni_,cst_closed_locally$0))
              if(caml_string_notequal(_ni_,cst_closed_remotely$0))
               if(caml_string_notequal(_ni_,cst_error$2))
                var switch$3=1,switch$4=0,switch$5=0;
               else
                var switch$5=1;
              else
               var switch$4=1,switch$5=0;
             else
              var switch$3=0,switch$4=0,switch$5=0;
            else
             var switch$5=1;
            if(switch$5)
             {var sexp_args=_ng_[2];
              if(sexp_args)
               if(! sexp_args[2])
                {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Error[5],v0);
                 return [0,v0$0]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$3,_ni_,sexp)}}
          else
           var switch$4=1;
          if(switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
        else
         var switch$3=0;
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$3,sexp)}
    function sexp_of_t$13(param)
     {if(typeof param === "number")return 0 === param?_eH_:_eI_;
      var v0=param[1],v0$0=caml_call1(Core_kernel_Error[6],v0);
      return [1,[0,_eJ_,[0,v0$0,0]]]}
    var
     _eM_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,
         _eL_,
         [0,_eK_,[0,[0,cst_Error$2,[0,Core_kernel_Error[37][2][5],0]],0]]]),
     _eN_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$15),0,_eM_],0],
     _eO_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_ml_280_6),
     group$11=caml_call2(Bin_prot_Shape[6],_eO_,_eN_),
     _eP_=caml_call1(Bin_prot_Shape[2][1],cst_t$16),
     bin_shape_t$7=caml_call1(caml_call2(Bin_prot_Shape[14],group$11,_eP_),0);
    function bin_size_t$5(param)
     {if(typeof param === "number")return 1;
      var v1=param[1],_ne_=caml_call1(Core_kernel_Error[37][2][1],v1);
      return caml_call2(Bin_prot_Common[23],1,_ne_)}
    function bin_write_t$5(buf,pos,param)
     {if(typeof param === "number")
       return 0 === param
               ?caml_call3(Bin_prot_Write[30],buf,pos,0)
               :caml_call3(Bin_prot_Write[30],buf,pos,1);
      var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,2);
      return caml_call3(Core_kernel_Error[37][2][2],buf,pos$0,v1)}
    var bin_writer_t$6=[0,bin_size_t$5,bin_write_t$5];
    function bin_read_t$22(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_rpc_ml_Pipe_close_reason_Stable_V1_t,
               pos_ref[1])}
    function bin_read_t$23(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_eQ_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:return 1;
        default:
         var arg_1=caml_call2(Core_kernel_Error[37][2][3],buf,pos_ref);
         return [0,arg_1]}}
    var
     bin_reader_t$11=[0,bin_read_t$23,bin_read_t$22],
     bin_t$6=[0,bin_shape_t$7,bin_writer_t$6,bin_reader_t$11];
    function compare$3(a_005,match)
     {if(caml_call2(Ppx_compare_lib[1],a_005,match))return 0;
      if(typeof a_005 === "number")
       {if(0 === a_005)
         {if(typeof match === "number")if(0 === match)return 0;return -1}
        if(typeof match !== "number")return -1;
        if(0 !== match)return 0}
      else
       {var _nd_=a_005[1];
        if(typeof match !== "number")
         {var b_008=match[1];
          return caml_call2(Core_kernel_Error[37][2][9],_nd_,b_008)}
        if(0 !== match)return 1}
      return 1}
    function t_of_sexp$4(sexp)
     {if(0 === sexp[0])
       {var _m$_=sexp[1];
        if(caml_string_notequal(_m$_,cst_Closed_locally$1))
         {if(caml_string_notequal(_m$_,cst_Closed_remotely$1))
           {if(caml_string_notequal(_m$_,cst_Error$3))
             if(caml_string_notequal(_m$_,cst_closed_locally$1))
              if(caml_string_notequal(_m$_,cst_closed_remotely$1))
               if(caml_string_notequal(_m$_,cst_error$3))
                var switch$0=1,switch$1=0,switch$2=0;
               else
                var switch$2=1;
              else
               var switch$1=1,switch$2=0;
             else
              var switch$0=0,switch$1=0,switch$2=0;
            else
             var switch$2=1;
            if(switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$4,sexp)}
          else
           var switch$1=1;
          if(switch$1)return 1}
        else
         var switch$0=0;
        if(! switch$0)return 0}
      else
       {var _na_=sexp[1];
        if(! _na_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$4,sexp);
        var _nb_=_na_[1];
        if(0 !== _nb_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$4,sexp);
        var _nc_=_nb_[1];
        if(caml_string_notequal(_nc_,cst_Closed_locally$2))
         {if(caml_string_notequal(_nc_,cst_Closed_remotely$2))
           {if(caml_string_notequal(_nc_,cst_Error$4))
             if(caml_string_notequal(_nc_,cst_closed_locally$2))
              if(caml_string_notequal(_nc_,cst_closed_remotely$2))
               if(caml_string_notequal(_nc_,cst_error$4))
                var switch$3=1,switch$4=0,switch$5=0;
               else
                var switch$5=1;
              else
               var switch$4=1,switch$5=0;
             else
              var switch$3=0,switch$4=0,switch$5=0;
            else
             var switch$5=1;
            if(switch$5)
             {var sexp_args=_na_[2];
              if(sexp_args)
               if(! sexp_args[2])
                {var
                  v0=sexp_args[1],
                  v0$0=caml_call1(Core_kernel_Error[37][2][10],v0);
                 return [0,v0$0]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$4,_nc_,sexp)}}
          else
           var switch$4=1;
          if(switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$4,sexp)}
        else
         var switch$3=0;
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$4,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$4,sexp)}
    function sexp_of_t$14(param)
     {if(typeof param === "number")return 0 === param?_eR_:_eS_;
      var v0=param[1],v0$0=caml_call1(Core_kernel_Error[37][2][11],v0);
      return [1,[0,_eT_,[0,v0$0,0]]]}
    function create$6
     (client_pushes_back,
      name,
      version,
      bin_query,
      bin_initial_response,
      bin_update_response,
      bin_error,
      param)
     {var client_pushes_back$0=client_pushes_back?1:0;
      return [0,
              caml_call1(Rpc_tag[11],name),
              version,
              bin_query,
              bin_initial_response,
              bin_update_response,
              bin_error,
              client_pushes_back$0]}
    function make_initial_message(x){return [0,Unused_query_id[10],x]}
    function implement_gen(t,impl)
     {var
       bin_init_writer=
        caml_call2(Stream_initial_message[4],t[4][2],t[6][2]);
      return [0,t[1],t[2],[4,t[3][3],bin_init_writer,t[5][2],impl]]}
    function implement$5(t,f)
     {function f$0(c,query)
       {function _m9_(param)
         {if(0 === param[0])
           {var match=param[1],pipe=match[2],initial=match[1];
            return [0,[0,make_initial_message([0,initial]),pipe]]}
          var err=param[1];
          return [1,make_initial_message([1,err])]}
        var _m__=caml_call2(f,c,query);
        return caml_call2(Async_kernel[21],_m__,_m9_)}
      return implement_gen(t,[0,f$0])}
    function abort(t,conn,id)
     {var query=[0,t[1],t[2],id,774323088];
      dispatch(conn,0,Stream_query[17],query);
      return 0}
    var Pipe_message=[0],Pipe_response=[0];
    function id(t){return t[1]}
    function close_reason$0(t){return t[2]}
    function read_error(get_connection_close_reason,handler,err)
     {var
       _m8_=sexp_of_t$8(err,get_connection_close_reason),
       core_err=caml_call1(Core_kernel_Error[5],_m8_);
      caml_call1(handler,[1,[0,106380200,core_err]]);
      return [0,76061764,[1,err]]}
    function dispatch_gen(t,conn,query,make_update_handler)
     {var
       _mR_=of_type_class(t[3]),
       bin_writer_query=caml_call1(Stream_query[4],_mR_),
       query$0=[0,-250086680,query],
       query_id=caml_call1(Query_id[45],0),
       _mS_=close_reason(conn,890972481),
       _mT_=conn[1],
       _mU_=t[2],
       _mV_=t[1];
      function _mW_(_m7_){return or_error(_mV_,_mU_,_mT_,_mS_,_m7_)}
      function _mX_(ivar)
       {var initial_state=[0,t,query_id,make_update_handler,ivar,conn];
        function get_connection_close_reason(param)
         {var
           _m5_=close_reason(conn,890972481),
           _m6_=caml_call1(Async_kernel_Deferred[5],_m5_);
          return caml_call2(Core_kernel[431],Core_kernel_Info[6],_m6_)}
        var state=[0,[0,initial_state]];
        return function(response,read_buffer,read_buffer_pos_ref)
         {var _mZ_=state[1];
          if(0 === _mZ_[0])
           {var
             initial_handler=_mZ_[1],
             error=
              function(err)
               {caml_call2(Async_kernel_Ivar[14],initial_handler[4],[1,err]);
                return _eW_},
             _m0_=response[2];
            if(0 === _m0_[0])
             {var
               len=_m0_[1],
               initial=
                bin_read_from_bigstring
                 (caml_call2
                   (Stream_initial_message[7],
                    initial_handler[1][4][3],
                    initial_handler[1][6][3]),
                  0,
                  read_buffer,
                  read_buffer_pos_ref,
                  len,
                  cst_client_side_streaming_rpc_initial_response_un_bin_io_ing);
              if(0 === initial[0])
               {var initial_msg=initial[1],_m1_=initial_msg[2];
                if(0 === _m1_[0])
                 {var
                   initial$0=_m1_[1],
                   match=caml_call1(initial_handler[3],0),
                   handler=match[2],
                   extra=match[1];
                  caml_call2
                   (Async_kernel_Ivar[14],
                    initial_handler[4],
                    [0,[0,[0,initial_handler[2],initial$0,extra]]]);
                  state[1] = [1,initial_handler[1][5][3],handler];
                  return -955854715}
                var err=_m1_[1];
                caml_call2
                 (Async_kernel_Ivar[14],initial_handler[4],[0,[1,err]]);
                return _eX_}
              var err$0=initial[1];
              return error(err$0)}
            var err$1=_m0_[1];
            return error(err$1)}
          var handler$0=_mZ_[2],bin_reader_update=_mZ_[1],_m2_=response[2];
          if(0 === _m2_[0])
           {var
             len$0=_m2_[1],
             _m3_=
              [0,
               function(param)
                {if(typeof param === "number")return 0;
                 var len=param[2];
                 return len}],
             data=
              bin_read_from_bigstring
               (Stream_response_data[14],
                _m3_,
                read_buffer,
                read_buffer_pos_ref,
                len$0,
                cst_client_side_streaming_rpc_response_un_bin_io_ing);
            if(0 === data[0])
             {var _m4_=data[1];
              if(typeof _m4_ === "number")
               {caml_call1(handler$0,_eU_);return _eV_}
              var
               len$1=_m4_[2],
               data$0=
                bin_read_from_bigstring
                 (bin_reader_update,
                  0,
                  read_buffer,
                  read_buffer_pos_ref,
                  len$1,
                  cst_client_side_streaming_rpc_response_un_bin_io_ing$0);
              if(0 === data$0[0])
               {var data$1=data$0[1],match$0=caml_call1(handler$0,[0,data$1]);
                if(match$0){var d=match$0[1];return [0,-822977931,d]}
                return -955854715}
              var err$2=data$0[1];
              return read_error(get_connection_close_reason,handler$0,err$2)}
            var err$3=data[1];
            return read_error(get_connection_close_reason,handler$0,err$3)}
          var err$4=_m2_[1];
          return read_error(get_connection_close_reason,handler$0,err$4)}}
      var
       _mY_=
        dispatch_raw$0(conn,t[1],t[2],bin_writer_query,query$0,query_id,_mX_);
      return caml_call2(Async_kernel[21],_mY_,_mW_)}
    function dispatch$6(t,conn,query)
     {function _mF_(e)
       {if(0 === e[0])
         {var _mM_=e[1];
          if(0 === _mM_[0])
           {var
             _mN_=_mM_[1],
             match=_mN_[3],
             close_reason=match[2],
             pipe_r=match[1],
             init=_mN_[2],
             id=_mN_[1],
             _mO_=
              function(param)
               {var _mQ_=1 - caml_call1(Async_kernel_Ivar[17],close_reason);
                return _mQ_
                        ?(abort(t,conn,id),
                          caml_call2(Async_kernel_Ivar[14],close_reason,0))
                        :_mQ_},
             _mP_=caml_call1(Async_kernel_Pipe[17],pipe_r);
            caml_call2(Async_kernel[12],_mP_,_mO_);
            var
             pipe_metadata=
              [0,id,caml_call1(Async_kernel_Ivar[18],close_reason)];
            return [0,[0,[0,pipe_metadata,init,pipe_r]]]}}
        return e}
      var
       _mG_=
        dispatch_gen
         (t,
          conn,
          query,
          function(param)
           {var
             match=caml_call1(Async_kernel_Pipe[8],0),
             pipe_w=match[2],
             pipe_r=match[1];
            caml_call2(Async_kernel_Pipe[79],pipe_w,100);
            var close_reason=caml_call1(Async_kernel_Ivar[12],0);
            function f(param)
             {if(0 === param[0])
               {var data=param[1];
                if(caml_call1(Async_kernel_Pipe[16],pipe_w))return 0;
                caml_call2(Async_kernel_Pipe[27],pipe_w,data);
                if(t[7])
                 {var
                   _mH_=caml_call1(Async_kernel_Pipe[78],pipe_w),
                   _mI_=caml_call1(Async_kernel_Pipe[23],pipe_w);
                  if(caml_call2(Core_kernel[88],_mI_,_mH_))
                   {var
                     _mJ_=function(param){return 0},
                     _mK_=caml_call1(Async_kernel_Pipe[20],pipe_w);
                    return [0,caml_call2(Async_kernel[21],_mK_,_mJ_)]}}
                return 0}
              var reason=param[1];
              if(typeof reason === "number")
               var _mL_=1;
              else
               var err=reason[2],_mL_=[0,err];
              caml_call2(Async_kernel_Ivar[15],close_reason,_mL_);
              caml_call1(Async_kernel_Pipe[14],pipe_w);
              return 0}
            return [0,[0,pipe_r,close_reason],f]});
      return caml_call2(Async_kernel[21],_mG_,_mF_)}
    function create$7
     (client_pushes_back,name,version,bin_query,bin_response,bin_error,param)
     {return create$6
              (client_pushes_back,
               name,
               version,
               bin_query,
               Core_kernel_Unit[12],
               bin_response,
               bin_error,
               0)}
    function bin_query$0(t){return t[3]}
    function bin_response$0(t){return t[5]}
    function bin_error(t){return t[6]}
    function client_pushes_back(t){return t[7]}
    function implement$6(t,f)
     {return implement$5
              (t,
               function(a,query)
                {function _mD_(x)
                  {return caml_call2(symbol$7,x,function(x){return [0,0,x]})}
                 var _mE_=caml_call2(f,a,query);
                 return caml_call2(Async_kernel[21],_mE_,_mD_)})}
    var
     close$5=include$2[1],
     closed$0=include$2[2],
     is_closed$3=include$2[3],
     write$2=include$2[4],
     write_without_pushback$1=include$2[5],
     flushed$2=include$2[6],
     bin_writer$1=include$2[7],
     Expert$1=include$2[8];
    function create$8(opt,param)
     {if(opt)var sth=opt[1],initial_size=sth;else var initial_size=4096;
      if(caml_call2(Core_kernel[92],initial_size,0))
       caml_call5
        (Core_kernel[224],
         0,
         _eY_,
         cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_Buffer_create_got_negative_buffer_size,
         initial_size,
         Core_kernel_Int[96]);
      return [0,caml_call2(Core_kernel_Bigstring[110],0,initial_size)]}
    var Buffer=[0,create$8];
    function create$9(buffer,param)
     {if(buffer)
       var b=buffer[1],buffer$0=b;
      else
       var buffer$0=caml_call2(Buffer[1],0,0);
      var _mC_=caml_call3(Direct_stream_writer_id[38][4],0,0,0);
      return [0,caml_call1(Core_kernel_Bag[22],0),_mC_,buffer$0]}
    function length$0(t){return caml_call1(Core_kernel_Bag[5],t[1])}
    function add_exn$0(t,writer)
     {if(caml_call1(is_closed$3,writer))
       caml_call1
        (Core_kernel[6],
         cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_cannot_add_a_closed_direct_stream_writer);
      if(caml_call2(Core_kernel_Hashtbl[30],t[2],writer[1]))
       caml_call1
        (Core_kernel[6],
         cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_trying_to_add_a_direct_stream_writer_that_is_already_present_in_the_group);
      var match=caml_call1(Core_kernel_Bag[27],t[1]);
      if(match)
       {var
         one=match[1],
         one$0=caml_call1(Core_kernel_Bag[1][3],one),
         _mA_=caml_call1(bin_writer$1,writer),
         _mB_=caml_call1(bin_writer$1,one$0);
        if(1 - caml_call2(Core_kernel[234],_mB_,_mA_))
         caml_call1
          (Core_kernel[6],
           cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_cannot_add_a_direct_stream_writer_with_a_different_bin_writer)}
      var
       writer_element_in_group=caml_call2(Core_kernel_Bag[23],t[1],writer),
       group_element_in_writer=
        caml_call2
         (Core_kernel_Bag[23],writer[7],[0,t,writer_element_in_group]);
      return caml_call3
              (Core_kernel_Hashtbl[36],
               t[2],
               writer[1],
               [0,writer_element_in_group,group_element_in_writer])}
    function remove(t,writer)
     {var match=caml_call2(Core_kernel_Hashtbl[56],t[2],writer[1]);
      if(match)
       {var
         match$0=match[1],
         group_element_in_writer=match$0[2],
         writer_element_in_group=match$0[1];
        caml_call2(Core_kernel_Bag[26],t[1],writer_element_in_group);
        return caml_call2
                (Core_kernel_Bag[26],writer[7],group_element_in_writer)}
      return 0}
    function to_list(t){return caml_call1(Core_kernel_Bag[17],t[1])}
    function flushed$3(t)
     {var
       _my_=to_list(t),
       _mz_=caml_call2(Core_kernel_List[69],_my_,flushed$2);
      return caml_call1(Async_kernel_Deferred[23],_mz_)}
    function write_without_pushback$2(t,buf,pos,len)
     {function _mx_(direct_stream_writer)
       {caml_call4(Expert$1[2],direct_stream_writer,buf,pos,len);return 0}
      return caml_call2(Core_kernel_Bag[7],t[1],_mx_)}
    function write$3(t,buf,pos,len)
     {write_without_pushback$2(t,buf,pos,len);return flushed$3(t)}
    function write_without_pushback$3(t,x)
     {var match=caml_call1(Core_kernel_Bag[27],t[1]);
      if(match)
       {var
         one=match[1],
         one$0=caml_call1(Core_kernel_Bag[1][3],one),
         match$0=caml_call1(bin_writer$1,one$0),
         write=match$0[2],
         size=match$0[1],
         buffer=t[3][1];
        try
         {var len$1=caml_call3(write,buffer,0,x)}
        catch(_mw_)
         {var len=caml_call1(size,x);
          runtime.bigstring_destroy_stub(buffer);
          var
           _mv_=caml_call1(Core_kernel_Int[65],len),
           buffer$0=caml_call2(Core_kernel_Bigstring[110],0,_mv_);
          t[3][1] = buffer$0;
          var len$0=caml_call3(write,buffer$0,0,x);
          return write_without_pushback$2(t,buffer$0,0,len$0)}
        return write_without_pushback$2(t,buffer,0,len$1)}
      return 0}
    function write$4(t,x){write_without_pushback$3(t,x);return flushed$3(t)}
    function implement_direct(t,f$0)
     {function f(c,query,writer)
       {function _mt_(x)
         {return 0 === x[0]
                  ?[0,make_initial_message(x)]
                  :[1,make_initial_message(x)]}
        var _mu_=caml_call3(f$0,c,query,writer);
        return caml_call2(Async_kernel[21],_mu_,_mt_)}
      return implement_gen(t,[1,f])}
    function dispatch$7(t,conn,query)
     {function _mr_(response)
       {return caml_call2
                (symbol$7,
                 response,
                 function(x)
                  {return caml_call2
                           (symbol$7,
                            x,
                            function(param)
                             {var pipe_r=param[3],metadata=param[1];
                              return [0,pipe_r,metadata]})})}
      var _ms_=dispatch$6(t,conn,query);
      return caml_call2(Async_kernel[21],_ms_,_mr_)}
    var
     Pipe_rpc_failed=
      [248,
       cst_Async_rpc_kernel_Rpc_Pipe_rpc_Pipe_rpc_failed,
       caml_fresh_oo_id(0)];
    function dispatch_exn$1(t,conn,query)
     {function _mo_(result)
       {if(0 === result[0])
         {var _mq_=result[1];
          if(0 === _mq_[0]){var pipe_and_id=_mq_[1];return pipe_and_id}
          throw Pipe_rpc_failed}
        var rpc_error=result[1];
        throw caml_call1(Core_kernel_Error[23],rpc_error)}
      var _mp_=dispatch$7(t,conn,query);
      return caml_call2(Async_kernel[21],_mp_,_mo_)}
    function dispatch_iter(t,conn,query,f)
     {function _mm_(response)
       {return caml_call2
                (symbol$7,
                 response,
                 function(x)
                  {return caml_call2
                           (symbol$7,x,function(param){var id=param[1];return id})})}
      function _mj_(e)
       {if(0 === e[0])
         {var _mn_=e[1];
          if(0 === _mn_[0])
           {var match=_mn_[1],init=match[2],id=match[1];
            return [0,[0,[0,id,init]]]}}
        return e}
      var
       _mk_=dispatch_gen(t,conn,query,function(param){return [0,0,f]}),
       _ml_=caml_call2(Async_kernel[21],_mk_,_mj_);
      return caml_call2(Async_kernel[21],_ml_,_mm_)}
    function name$1(t){return caml_call1(Rpc_tag[12],t[1])}
    function version$1(t){return t[2]}
    function description$3(t){var _mi_=t[2];return [0,name$1(t),_mi_]}
    function create$10
     (client_pushes_back,
      name,
      version,
      bin_query,
      bin_state,
      bin_update,
      bin_error,
      param)
     {return create$6
              (client_pushes_back,
               name,
               version,
               bin_query,
               bin_state,
               bin_update,
               bin_error,
               0)}
    function bin_query$1(t){return t[3]}
    function bin_state(t){return t[4]}
    function bin_update(t){return t[5]}
    function bin_error$0(t){return t[6]}
    function dispatch$8(t,conn,query)
     {function _mg_(response)
       {return caml_call2
                (symbol$7,
                 response,
                 function(x)
                  {return caml_call2
                           (symbol$7,
                            x,
                            function(param)
                             {var update_r=param[3],state=param[2],metadata=param[1];
                              return [0,state,update_r,metadata]})})}
      var _mh_=dispatch$6(t,conn,query);
      return caml_call2(Async_kernel[21],_mh_,_mg_)}
    function client_pushes_back$0(t){return t[7]}
    function name$2(t){return caml_call1(Rpc_tag[12],t[1])}
    function version$2(t){return t[2]}
    function description$4(t){var _mf_=t[2];return [0,name$2(t),_mf_]}
    function description$5(param)
     {switch(param[0])
       {case 0:var rpc=param[1];return description$1(rpc);
        case 1:var rpc$0=param[1];return description$3(rpc$0);
        case 2:var rpc$1=param[1];return description$4(rpc$1);
        default:var rpc$2=param[1];return description$2(rpc$2)}}
    var Any=[0,description$5];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _eZ_=
      [0,
       create$5,
       name$0,
       version$0,
       description$2,
       bin_msg,
       implement$3,
       dispatch$3,
       rpc_result_to_or_error$0,
       dispatch$4,
       dispatch_exn$0,
       Expert$0],
     _e0_=
      [0,
       [0],
       [0,id],
       create$10,
       bin_query$1,
       bin_state,
       bin_update,
       bin_error$0,
       implement$5,
       dispatch$8,
       abort,
       close_reason$0,
       client_pushes_back$0,
       name$2,
       version$2,
       description$4],
     _e1_=
      [0,
       [0],
       [0,id],
       create$7,
       bin_query$0,
       bin_response$0,
       bin_error,
       implement$6,
       [0,
        write$2,
        write_without_pushback$1,
        close$5,
        closed$0,
        is_closed$3,
        Expert$1,
        [0,
         Buffer,
         create$9,
         flushed$3,
         add_exn$0,
         remove,
         write$4,
         write_without_pushback$3,
         to_list,
         length$0,
         [0,write$3,write_without_pushback$2]]],
       implement_direct,
       dispatch$7,
       dispatch_exn$1,
       Pipe_message,
       Pipe_response,
       dispatch_iter,
       abort,
       close_reason$0,
       client_pushes_back,
       name$1,
       version$1,
       description$3],
     _e2_=
      [0,
       create$4,
       name,
       version,
       description$1,
       bin_query,
       bin_response,
       implement,
       implement$0,
       dispatch$0,
       rpc_result_to_or_error,
       dispatch$1,
       dispatch_exn,
       [0,
        _dD_[1],
        schedule_dispatch,
        dispatch$2,
        implement$1,
        implement$2,
        implement_for_tag_and_version,
        implement_for_tag_and_version$0]],
     _e3_=
      [0,
       sexp_of_t$12,
       _eu_,
       Client_implementations,
       create$3,
       contains_magic_prefix,
       description$0,
       add_heartbeat_callback,
       close$4,
       close_finished,
       close_reason,
       is_closed$2,
       bytes_to_write$0,
       flushed$1,
       with_close,
       server_with_close],
     _e4_=[0,description,lift$0],
     Async_rpc_kernel_Rpc=
      [0,
       [0,_M_,_N_,_O_,sexp_of_t,_T_],
       _e4_,
       [0,
        null$0,
        lift$1,
        create$1,
        create_exn,
        add,
        add_exn,
        descriptions,
        [0,[0],_dD_[2]]],
       _e3_,
       _e2_,
       [0,
        bin_size_t$4,
        bin_write_t$4,
        bin_read_t$21,
        bin_read_t$20,
        bin_shape_t$6,
        bin_writer_t$5,
        bin_reader_t$10,
        bin_t$5,
        compare$2,
        t_of_sexp$3,
        sexp_of_t$13,
        [0,
         [0,
          bin_size_t$5,
          bin_write_t$5,
          bin_read_t$23,
          bin_read_t$22,
          bin_shape_t$7,
          bin_writer_t$6,
          bin_reader_t$11,
          bin_t$6,
          compare$3,
          t_of_sexp$4,
          sexp_of_t$14]]],
       _e1_,
       _e0_,
       _eZ_,
       Any,
       [0,
        [0,create$4,description$1,bin_query,bin_response],
        [0,create$7,description$3,bin_query$0,bin_response$0,bin_error],
        [0,
         create$10,
         description$4,
         bin_query$1,
         bin_state,
         bin_update,
         bin_error$0],
        [0,create$5,description$2,bin_msg]]];
    caml_register_global(762,Async_rpc_kernel_Rpc,"Async_rpc_kernel__Rpc");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$44);
    caml_call1(Expect_test_collector[4][1],cst_src_versioned_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$45,cst$15);
    function write$5(param,input)
     {var writer=param[2],convert=param[1],_me_=caml_call1(convert,input);
      return caml_call2(_e1_[8][1],writer,_me_)}
    function write_without_pushback$4(param,input)
     {var writer=param[2],convert=param[1],_md_=caml_call1(convert,input);
      return caml_call2(_e1_[8][2],writer,_md_)}
    function close$6(param)
     {var writer=param[2];return caml_call1(_e1_[8][3],writer)}
    function is_closed$4(param)
     {var writer=param[2];return caml_call1(_e1_[8][5],writer)}
    function closed$1(param)
     {var writer=param[2];return caml_call1(_e1_[8][4],writer)}
    function failed_conversion(x)
     {function _mb_(param)
       {var
         v3=param[4],
         v2=param[3],
         v1=param[2],
         v0=param[1],
         _mc_=
          3854881 <= v0
           ?389604849 <= v0
             ?999946793 <= v0?_e5_:_e8_
             :106380200 <= v0?_e9_:_e__
           :-71406943 <= v0?_e$_:_fa_,
         v0$0=v1[2],
         v1$0=[1,[0,_e6_,[0,caml_call1(Core_kernel[447],v0$0),0]]],
         v0$1=v2[2],
         v2$0=[1,[0,_e7_,[0,caml_call1(Core_kernel[339],v0$1),0]]],
         v3$0=caml_call1(Core_kernel[508],v3);
        return [1,[0,_mc_,[0,v1$0,[0,v2$0,[0,v3$0,0]]]]]}
      return caml_call5
              (Core_kernel_Error[15],0,0,cst_type_conversion_failure,x,_mb_)}
    function multiple_registrations(x)
     {function _ma_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=v0[2],
         v0$1=[1,[0,_fb_,[0,caml_call1(Core_kernel[447],v0$0),0]]],
         v0$2=v1[2],
         v1$0=[1,[0,_fc_,[0,caml_call1(Core_kernel[339],v0$2),0]]];
        return [1,[0,v0$1,[0,v1$0,0]]]}
      return caml_call5
              (Core_kernel_Error[15],
               0,
               0,
               cst_multiple_rpc_registrations,
               x,
               _ma_)}
    function name$3(r){return r[1]}
    function create$11(name){return [0,name,Core_kernel_Int[120][4]]}
    function add$0(param,rpc,adapter)
     {var adapters=param[2],name=param[1],_l8_=caml_call1(_e2_[2],rpc);
      if(caml_call2(Core_kernel_String[106],name,_l8_))
       {var
         _l9_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[447],v0),
             v1$0=caml_call1(Core_kernel[447],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]},
         _l__=[0,name,caml_call1(_e2_[2],rpc)];
        return caml_call4
                (Core_kernel_Or_error[39],
                 0,
                 cst_Rpc_names_don_t_agree,
                 _l__,
                 _l9_)}
      var
       version=caml_call1(_e2_[3],rpc),
       match=caml_call2(Core_kernel_Map[37],adapters,version);
      if(match)
       {var
         _l$_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[447],v0),
             v1$0=caml_call1(Core_kernel[339],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]};
        return caml_call4
                (Core_kernel_Or_error[39],
                 0,
                 cst_Version_already_exists,
                 [0,name,version],
                 _l$_)}
      var adapters$0=caml_call3(Core_kernel_Map[31],adapters,version,adapter);
      return [0,[0,name,adapters$0]]}
    function add_rpc_version(t,old_rpc,upgrade,downgrade)
     {function adapt(fn)
       {function adapted(state,old_query)
         {function _l6_(result){return caml_call1(downgrade,result)}
          var _l7_=caml_call2(fn,state,caml_call1(upgrade,old_query));
          return caml_call2(Async_kernel[21],_l7_,_l6_)}
        return caml_call2(_e2_[7],old_rpc,adapted)}
      return add$0(t,old_rpc,[0,adapt])}
    function add_rpc_version_with_failure
     (t,old_rpc,upgrade_or_error,downgrade_or_error)
     {function adapt(fn)
       {function _lX_(state,old_query)
         {function _lY_(param)
           {if(0 === param[0]){var value=param[1];return [0,value]}
            var error=param[1];
            return [1,caml_call1(Core_kernel_Error[8],error)]}
          function _lZ_(query)
           {function _l3_(response)
             {var _l5_=caml_call1(downgrade_or_error,response);
              return caml_call1(Async_kernel[19],_l5_)}
            var _l4_=caml_call2(fn,state,query);
            return caml_call2(Async_kernel_Deferred_result[4][1],_l4_,_l3_)}
          var
           _l0_=caml_call1(upgrade_or_error,old_query),
           _l1_=caml_call1(Async_kernel[19],_l0_),
           _l2_=caml_call2(Async_kernel_Deferred_result[4][1],_l1_,_lZ_);
          return caml_call2(Async_kernel[21],_l2_,_lY_)}
        return caml_call2(_e2_[7],old_rpc,_lX_)}
      return add$0(t,old_rpc,[0,adapt])}
    function add_version(t,version,bin_query,bin_response,upgrade,downgrade)
     {var rpc=caml_call4(_e2_[1],t[1],version,bin_query,bin_response);
      return add_rpc_version(t,rpc,upgrade,downgrade)}
    function add_version_with_failure
     (t,version,bin_query,bin_response,upgrade,downgrade)
     {var rpc=caml_call4(_e2_[1],t[1],version,bin_query,bin_response);
      return add_rpc_version_with_failure(t,rpc,upgrade,downgrade)}
    function implement$7(t,fn)
     {function _lV_(param){var adapt=param[1];return caml_call1(adapt,fn)}
      var _lW_=caml_call1(Core_kernel_Map[67],t[2]);
      return caml_call2(Core_kernel_List[69],_lW_,_lV_)}
    function Make(_lE_)
     {var _lF_=_lE_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fd_,0);
      function implement_multi(log_not_previously_seen_version,f)
       {if(log_not_previously_seen_version)
         var
          f$0=log_not_previously_seen_version[1],
          _lR_=caml_call1(f$0,_lF_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_lR_);
        else
         var log_version=function(_lU_){return 0};
        function _lS_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _lT_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_lT_,_lS_)}
      function rpcs(param)
       {function _lP_(param){var rpc=param[2];return rpc}
        var _lQ_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_lQ_,_lP_)}
      function versions(param)
       {var _lO_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call1(Core_kernel_Int[121][57],_lO_)}
      function Register(Version_i)
       {var
         rpc=
          caml_call4(_e2_[1],_lF_,Version_i[17],Version_i[8],Version_i[16]);
        function implement(log_version,f)
         {function _lH_(s,q)
           {caml_call1(log_version,Version_i[17]);
            function _lI_(param){return caml_call1(Version_i[18],q)}
            var match=caml_call1(Core_kernel_Result[43],_lI_);
            if(0 === match[0])
             {var
               q$0=match[1],
               _lJ_=
                function(r)
                 {function _lM_(param){return caml_call1(Version_i[19],r)}
                  var match=caml_call1(Core_kernel_Result[43],_lM_);
                  if(0 === match[0]){var r$0=match[1];return r$0}
                  var
                   exn=match[1],
                   _lN_=
                    failed_conversion
                     ([0,
                       -71406943,
                       [0,4102853,_lF_],
                       [0,-901574920,Version_i[17]],
                       exn]);
                  return caml_call1(Core_kernel_Error[25],_lN_)},
               _lK_=caml_call3(f,s,Version_i[17],q$0);
              return caml_call2(Async_kernel[21],_lK_,_lJ_)}
            var
             exn=match[1],
             _lL_=
              failed_conversion
               ([0,
                 -250086680,
                 [0,4102853,_lF_],
                 [0,-901574920,Version_i[17]],
                 exn]);
            return caml_call1(Core_kernel_Error[25],_lL_)}
          return caml_call2(_e2_[7],rpc,_lH_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[17]);
        if(match)
         {var
           _lG_=
            multiple_registrations
             ([0,[0,4102853,_lF_],[0,-901574920,Version_i[17]]]);
          caml_call1(Core_kernel_Error[25],_lG_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[17],
           [0,[0,implement],[0,rpc]]);
        return [0,rpc]}
      return [0,_lF_,registry,implement_multi,rpcs,versions,Register]}
    function Make$0(_la_)
     {var _lb_=_la_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fe_,0);
      function implement_multi_gen(log_not_previously_seen_version,impl)
       {if(log_not_previously_seen_version)
         var
          f=log_not_previously_seen_version[1],
          _lA_=caml_call1(f,_lb_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_lA_);
        else
         var log_version=function(_lD_){return 0};
        function _lB_(param)
         {var i=param[1];return caml_call2(i[1],log_version,impl)}
        var _lC_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_lC_,_lB_)}
      function implement_multi(log_not_previously_seen_version,f)
       {return implement_multi_gen(log_not_previously_seen_version,[0,f])}
      function implement_direct_multi(log_not_previously_seen_version,f)
       {return implement_multi_gen(log_not_previously_seen_version,[1,f])}
      function rpcs(param)
       {function _ly_(param){var rpc=param[2];return rpc}
        var _lz_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_lz_,_ly_)}
      function versions(param)
       {var _lx_=caml_call1(Core_kernel_Int[125][59],registry);
        return caml_call1(Core_kernel_Int[121][57],_lx_)}
      function Make_shared(Version_i,Convert)
       {var
         _lc_=Version_i[24],
         _ld_=Version_i[16],
         _le_=Version_i[8],
         _lf_=Version_i[25],
         _lg_=caml_call2(Core_kernel_Option[53],Version_i[28],0),
         rpc=caml_call7(_e1_[3],_lg_,_lb_,_lf_,_le_,_ld_,_lc_,0);
        function wrapped_model_of_query(q)
         {try
           {var q$0=caml_call1(Version_i[26],q);return q$0}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _lw_=
              failed_conversion
               ([0,
                 -71406943,
                 [0,4102853,_lb_],
                 [0,-901574920,Version_i[25]],
                 exn]);
            return caml_call1(Core_kernel_Error[25],_lw_)}}
        function wrapped_error_of_model(error)
         {try
           {var error$0=caml_call1(Version_i[27],error)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _lv_=
              failed_conversion
               ([0,
                 106380200,
                 [0,4102853,_lb_],
                 [0,-901574920,Version_i[25]],
                 exn]);
            return caml_call1(Core_kernel_Error[25],_lv_)}
          return [1,error$0]}
        function implement(log_version,impl)
         {if(0 === impl[0])
           {var
             f=impl[1],
             _li_=
              function(s,q)
               {caml_call1(log_version,Version_i[25]);
                function _ln_(param)
                 {if(0 === param[0])
                   {var
                     pipe=param[1],
                     _lq_=
                      function(exn)
                       {var
                         _lu_=
                          failed_conversion
                           ([0,
                             -71406943,
                             [0,4102853,_lb_],
                             [0,-901574920,Version_i[25]],
                             exn]);
                        return caml_call1(Core_kernel_Error[25],_lu_)},
                     _lr_=
                      function(param)
                       {var _lt_=[0,caml_call1(Convert[2],pipe)];
                        return caml_call1(Async_kernel[19],_lt_)};
                    return caml_call5(Async_kernel_Monitor[19],0,0,0,_lr_,_lq_)}
                  var error=param[1],_ls_=wrapped_error_of_model(error);
                  return caml_call1(Async_kernel[19],_ls_)}
                var
                 _lo_=wrapped_model_of_query(q),
                 _lp_=caml_call3(f,s,Version_i[25],_lo_);
                return caml_call2(Async_kernel[20],_lp_,_ln_)};
            return caml_call2(_e1_[7],rpc,_li_)}
          var
           f$0=impl[1],
           convert_elt=caml_call1(Core_kernel_Or_error[36],Convert[1]);
          function _lj_(s,q,dsw)
           {var writer=[0,convert_elt,dsw];
            function _lk_(param)
             {if(0 === param[0])return _ff_;
              var error=param[1];
              return wrapped_error_of_model(error)}
            var
             _ll_=wrapped_model_of_query(q),
             _lm_=caml_call4(f$0,s,Version_i[25],_ll_,writer);
            return caml_call2(Async_kernel[21],_lm_,_lk_)}
          return caml_call2(_e1_[9],rpc,_lj_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[25]);
        if(match)
         {var
           _lh_=
            multiple_registrations
             ([0,[0,4102853,_lb_],[0,-901574920,Version_i[25]]]);
          caml_call1(Core_kernel_Error[25],_lh_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[25],
           [0,[0,implement],[1,rpc]]);
        return [0,rpc,wrapped_model_of_query,wrapped_error_of_model,implement]}
      function Register_raw(Version_i)
       {var
         convert_elt=
          caml_call1
           (Core_kernel_Or_error[41],
            cst_cannot_use_direct_interface_with_Register_raw),
         convert_pipe=Version_i[29];
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      function Register(Version_i)
       {var convert_elt=[0,Version_i[29]];
        function convert_pipe(pipe)
         {return caml_call2(Async_kernel_Pipe[57],pipe,Version_i[29])}
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      return [0,
              _lb_,
              registry,
              implement_multi_gen,
              implement_multi,
              implement_direct_multi,
              rpcs,
              versions,
              Make_shared,
              Register_raw,
              Register]}
    function Make$1(_kK_)
     {var _kL_=_kK_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fg_,0);
      function implement_multi(log_not_previously_seen_version,f)
       {if(log_not_previously_seen_version)
         var
          f$0=log_not_previously_seen_version[1],
          _k8_=caml_call1(f$0,_kL_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_k8_);
        else
         var log_version=function(_k$_){return 0};
        function _k9_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _k__=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_k__,_k9_)}
      function rpcs(param)
       {function _k6_(param){var rpc=param[2];return rpc}
        var _k7_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_k7_,_k6_)}
      function versions(param)
       {var _k5_=caml_call1(Core_kernel_Int[125][59],registry);
        return caml_call1(Core_kernel_Int[121][57],_k5_)}
      function Register_raw(Version_i)
       {var
         _kN_=Version_i[32],
         _kO_=Version_i[24],
         _kP_=Version_i[16],
         _kQ_=Version_i[8],
         _kR_=Version_i[33],
         _kS_=caml_call2(Core_kernel_Option[53],Version_i[37],0),
         rpc=caml_call8(_e0_[3],_kS_,_kL_,_kR_,_kQ_,_kP_,_kO_,_kN_,0);
        function implement(log_version,f)
         {function _kU_(s,q)
           {caml_call1(log_version,Version_i[33]);
            try
             {var q$0=caml_call1(Version_i[34],q)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              var
               _kV_=
                failed_conversion
                 ([0,
                   -71406943,
                   [0,4102853,_kL_],
                   [0,-901574920,Version_i[33]],
                   exn]);
              return caml_call1(Core_kernel_Error[25],_kV_)}
            function _kW_(param)
             {if(0 === param[0])
               {var match=param[1],pipe=match[2],model_state=match[1];
                try
                 {var
                   state$0=caml_call1(Version_i[35],model_state),
                   state=state$0}
                catch(exn)
                 {exn = caml_wrap_exception(exn);
                  var
                   _kY_=
                    failed_conversion
                     ([0,
                       389604849,
                       [0,4102853,_kL_],
                       [0,-901574920,Version_i[33]],
                       exn]),
                   state=caml_call1(Core_kernel_Error[25],_kY_)}
                var
                 _kZ_=
                  function(exn)
                   {var
                     _k4_=
                      failed_conversion
                       ([0,
                         999946793,
                         [0,4102853,_kL_],
                         [0,-901574920,Version_i[33]],
                         exn]);
                    return caml_call1(Core_kernel_Error[25],_k4_)},
                 _k0_=
                  function(param)
                   {var
                     _k3_=
                      [0,[0,state,caml_call2(Version_i[38],model_state,pipe)]];
                    return caml_call1(Async_kernel[19],_k3_)};
                return caml_call5(Async_kernel_Monitor[19],0,0,0,_k0_,_kZ_)}
              var error=param[1];
              try
               {var error$0=caml_call1(Version_i[36],error),switch$0=0}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                var
                 _k1_=
                  failed_conversion
                   ([0,
                     106380200,
                     [0,4102853,_kL_],
                     [0,-901574920,Version_i[33]],
                     exn]),
                 _k2_=caml_call1(Core_kernel_Error[25],_k1_),
                 switch$0=1}
              if(! switch$0)var _k2_=[1,error$0];
              return caml_call1(Async_kernel[19],_k2_)}
            var _kX_=caml_call3(f,s,Version_i[33],q$0);
            return caml_call2(Async_kernel[20],_kX_,_kW_)}
          return caml_call2(_e0_[8],rpc,_kU_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[33]);
        if(match)
         {var
           _kT_=
            multiple_registrations
             ([0,[0,4102853,_kL_],[0,-901574920,Version_i[33]]]);
          caml_call1(Core_kernel_Error[25],_kT_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[33],
           [0,[0,implement],[2,rpc]]);
        return [0,rpc]}
      function Register(Version_i)
       {var
         bin_shape_query=Version_i[1],
         bin_size_query=Version_i[2],
         bin_write_query=Version_i[3],
         bin_writer_query=Version_i[4],
         bin_read_query=Version_i[5],
         bin_read_query$0=Version_i[6],
         bin_reader_query=Version_i[7],
         bin_query=Version_i[8],
         bin_shape_state=Version_i[9],
         bin_size_state=Version_i[10],
         bin_write_state=Version_i[11],
         bin_writer_state=Version_i[12],
         bin_read_state=Version_i[13],
         bin_read_state$0=Version_i[14],
         bin_reader_state=Version_i[15],
         bin_state=Version_i[16],
         bin_shape_update=Version_i[17],
         bin_size_update=Version_i[18],
         bin_write_update=Version_i[19],
         bin_writer_update=Version_i[20],
         bin_read_update=Version_i[21],
         bin_read_update$0=Version_i[22],
         bin_reader_update=Version_i[23],
         bin_update=Version_i[24],
         bin_shape_error=Version_i[25],
         bin_size_error=Version_i[26],
         bin_write_error=Version_i[27],
         bin_writer_error=Version_i[28],
         bin_read_error=Version_i[29],
         bin_read_error$0=Version_i[30],
         bin_reader_error=Version_i[31],
         bin_error=Version_i[32],
         version=Version_i[33],
         model_of_query=Version_i[34],
         state_of_model=Version_i[35],
         error_of_model=Version_i[36],
         client_pushes_back=Version_i[37],
         _kM_=Version_i[38];
        function update_of_model(state,pipe)
         {return caml_call2(Async_kernel_Pipe[57],pipe,_kM_)}
        var
         include=
          Register_raw
           ([0,
             bin_shape_query,
             bin_size_query,
             bin_write_query,
             bin_writer_query,
             bin_read_query,
             bin_read_query$0,
             bin_reader_query,
             bin_query,
             bin_shape_state,
             bin_size_state,
             bin_write_state,
             bin_writer_state,
             bin_read_state,
             bin_read_state$0,
             bin_reader_state,
             bin_state,
             bin_shape_update,
             bin_size_update,
             bin_write_update,
             bin_writer_update,
             bin_read_update,
             bin_read_update$0,
             bin_reader_update,
             bin_update,
             bin_shape_error,
             bin_size_error,
             bin_write_error,
             bin_writer_error,
             bin_read_error,
             bin_read_error$0,
             bin_reader_error,
             bin_error,
             version,
             model_of_query,
             state_of_model,
             error_of_model,
             client_pushes_back,
             update_of_model]),
         rpc=include[1];
        return [0,rpc]}
      return [0,
              _kL_,
              registry,
              implement_multi,
              rpcs,
              versions,
              Register_raw,
              Register]}
    function Make$2(_kx_)
     {var _ky_=_kx_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fh_,0);
      function implement_multi(log_not_previously_seen_version,f)
       {if(log_not_previously_seen_version)
         var
          f$0=log_not_previously_seen_version[1],
          _kG_=caml_call1(f$0,_ky_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_kG_);
        else
         var log_version=function(_kJ_){return 0};
        function _kH_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _kI_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_kI_,_kH_)}
      function rpcs(param)
       {function _kE_(param){var rpc=param[2];return rpc}
        var _kF_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_kF_,_kE_)}
      function versions(param)
       {var _kD_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call1(Core_kernel_Int[121][57],_kD_)}
      function Register(Version_i)
       {var rpc=caml_call3(_eZ_[1],_ky_,Version_i[9],Version_i[8]);
        function implement(log_version,f)
         {function _kA_(s,q)
           {caml_call1(log_version,Version_i[9]);
            function _kB_(param){return caml_call1(Version_i[10],q)}
            var match=caml_call1(Core_kernel_Result[43],_kB_);
            if(0 === match[0])
             {var q$0=match[1];return caml_call3(f,s,Version_i[9],q$0)}
            var
             exn=match[1],
             _kC_=
              failed_conversion
               ([0,3854881,[0,4102853,_ky_],[0,-901574920,Version_i[9]],exn]);
            return caml_call1(Core_kernel_Error[25],_kC_)}
          return caml_call2(_eZ_[6],rpc,_kA_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[9]);
        if(match)
         {var
           _kz_=
            multiple_registrations
             ([0,[0,4102853,_ky_],[0,-901574920,Version_i[9]]]);
          caml_call1(Core_kernel_Error[25],_kz_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[9],
           [0,[0,implement],[3,rpc]]);
        return [0,rpc]}
      return [0,_ky_,registry,implement_multi,rpcs,versions,Register]}
    var
     Model=[0,name$4],
     include$4=Make(Model),
     _fi_=include$4[3],
     _fj_=include$4[6],
     _fk_=Model[1],
     _fl_=Core_kernel[479],
     _fm_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_query),0,_fl_],0],
     _fn_=caml_call1(Bin_prot_Shape[4][1],cst_src_versioned_rpc_ml_604_6),
     group$12=caml_call2(Bin_prot_Shape[6],_fn_,_fm_),
     _fo_=caml_call1(Bin_prot_Shape[2][1],cst_query$0),
     bin_shape_query=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$12,_fo_),0),
     _fp_=Core_kernel[480],
     _fq_=Core_kernel[481],
     bin_writer_query=[0,_fp_,_fq_],
     _fr_=Core_kernel[484],
     _fs_=Core_kernel[483],
     bin_reader_query=[0,_fs_,_fr_],
     bin_query$2=[0,bin_shape_query,bin_writer_query,bin_reader_query],
     _ft_=
      caml_call1
       (Bin_prot_Shape[7],[0,Core_kernel[435],[0,Core_kernel[327],0]]),
     _fu_=caml_call1(Core_kernel[389],_ft_),
     _fv_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_response$1),0,_fu_],0],
     _fw_=caml_call1(Bin_prot_Shape[4][1],cst_src_versioned_rpc_ml_605_6),
     group$13=caml_call2(Bin_prot_Shape[6],_fw_,_fv_),
     _fx_=caml_call1(Bin_prot_Shape[2][1],cst_response$2),
     bin_shape_response=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$13,_fx_),0),
     version$3=1;
    function bin_size_response(v)
     {function _ku_(param)
       {var
         v2=param[2],
         v1=param[1],
         _kv_=caml_call1(Core_kernel[436],v1),
         size=caml_call2(Bin_prot_Common[23],0,_kv_),
         _kw_=caml_call1(Core_kernel[328],v2);
        return caml_call2(Bin_prot_Common[23],size,_kw_)}
      return caml_call2(Core_kernel[390],_ku_,v)}
    function bin_write_response(buf,pos,v)
     {function _kt_(buf,pos,param)
       {var
         v2=param[2],
         v1=param[1],
         pos$0=caml_call3(Core_kernel[437],buf,pos,v1);
        return caml_call3(Core_kernel[329],buf,pos$0,v2)}
      return caml_call3(caml_call1(Core_kernel[391],_kt_),buf,pos,v)}
    var bin_writer_response=[0,bin_size_response,bin_write_response];
    function bin_read_response(buf,pos_ref,vint)
     {function _ks_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel[439],buf,pos_ref),
         v2=caml_call2(Core_kernel[331],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call3(caml_call1(Core_kernel[394],_ks_),buf,pos_ref,vint)}
    function bin_read_response$0(buf,pos_ref)
     {function _kr_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel[439],buf,pos_ref),
         v2=caml_call2(Core_kernel[331],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call2(caml_call1(Core_kernel[393],_kr_),buf,pos_ref)}
    var
     bin_reader_response=[0,bin_read_response$0,bin_read_response],
     bin_response$1=
      [0,bin_shape_response,bin_writer_response,bin_reader_response];
    function model_of_query(q){return q}
    var _fy_=Core_kernel_List[69];
    function _fz_(param)
     {var version=param[2],name=param[1];return [0,name,version]}
    function response_of_model(_kq_){return caml_call2(_fy_,_kq_,_fz_)}
    var
     include$5=
      caml_call1
       (_fj_,
        [0,
         bin_shape_query,
         _fp_,
         _fq_,
         bin_writer_query,
         _fs_,
         _fr_,
         bin_reader_query,
         bin_query$2,
         bin_shape_response,
         bin_size_response,
         bin_write_response,
         bin_writer_response,
         bin_read_response$0,
         bin_read_response,
         bin_reader_response,
         bin_response$1,
         version$3,
         model_of_query,
         response_of_model]),
     rpc=include$5[1];
    function add$1(impls)
     {var
       menu=caml_call2(Core_kernel_List[69],impls,_e4_[1]),
       menu_impls=
        caml_call2
         (_fi_,
          0,
          function(param,_kp_,_ko_){return caml_call1(Async_kernel[19],menu)});
      return caml_call2(Core_kernel[145],impls,menu_impls)}
    function supported_rpcs(t)
     {function _kk_(param)
       {var versions=param[2],name=param[1];
        function _km_(version){return [0,name,version]}
        var _kn_=caml_call1(Core_kernel_Int[121][15],versions);
        return caml_call2(Base_List[23][2],_kn_,_km_)}
      var _kl_=caml_call1(Core_kernel_String[126][70],t);
      return caml_call2(Base_List[23][1],_kl_,_kk_)}
    function supported_versions(t,rpc_name)
     {var
       _ki_=Core_kernel_Int[121][54],
       _kj_=caml_call2(Core_kernel_Hashtbl[52],t,rpc_name);
      return caml_call2(Core_kernel_Option[48],_kj_,_ki_)}
    function of_entries(entries)
     {var
       _kg_=Core_kernel_Int[121][57],
       _kh_=caml_call3(Core_kernel_String[126][9],0,0,entries);
      return caml_call2(Core_kernel_Hashtbl[39],_kh_,_kg_)}
    function request(conn)
     {function _ke_(result)
       {return caml_call2(Core_kernel_Result[36],result,of_entries)}
      var _kf_=caml_call3(_e2_[11],rpc,conn,0);
      return caml_call2(Async_kernel[21],_kf_,_ke_)}
    function create$12(descriptions)
     {function _kd_(param)
       {var version=param[2],name=param[1];return [0,name,version]}
      return of_entries(caml_call2(Core_kernel_List[69],descriptions,_kd_))}
    function menu(r){return r[2]}
    function connection(r){return r[1]}
    function create$13(connection)
     {function _kb_(menu){return [0,connection,menu]}
      var _kc_=request(connection);
      return caml_call2(Async_kernel_Deferred_or_error[11][2],_kc_,_kb_)}
    function create_directly(connection,menu){return [0,connection,menu]}
    function most_recent_common_version
     (rpc_name,caller_versions,callee_versions,callee_menu)
     {var
       _j7_=caml_call2(Core_kernel_Set[15],callee_versions,caller_versions),
       match=caml_call1(Core_kernel_Set[57],_j7_);
      if(match){var version=match[1];return [0,version]}
      var
       _j8_=
        [0,
         [1,
          [0,
           _fA_,
           [0,
            caml_call2
             (Core_kernel_String[126][1],Core_kernel_Int[121][74],callee_menu),
            0]]],
         0],
       _j9_=
        [0,
         [1,
          [0,_fB_,[0,caml_call1(Core_kernel_Int[121][74],callee_versions),0]]],
         _j8_],
       _j__=
        [0,
         [1,
          [0,_fC_,[0,caml_call1(Core_kernel_Int[121][74],caller_versions),0]]],
         _j9_],
       _j$_=[0,[1,[0,_fD_,[0,caml_call1(Core_kernel[447],rpc_name),0]]],_j__],
       _ka_=
        [1,
         [0,
          caml_call1
           (Sexplib0_Sexp_conv[7],
            cst_caller_and_callee_share_no_common_versions_for_rpc),
          _j$_]];
      return caml_call1(Core_kernel[221],_ka_)}
    var
     Expect_test_collector$1=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _fE_(param)
     {var
       menu=of_entries([0,[0,rpc_name,2],0]),
       _j4_=caml_call1(Core_kernel_Int[121][57],_fF_),
       result=
        most_recent_common_version
         (rpc_name,caml_call1(Core_kernel_Int[121][57],_fG_),_j4_,menu),
       _j5_=caml_call2(Core_kernel_Or_error[13],Core_kernel[339],result);
      caml_call2(Core_kernel[236],0,_j5_);
      var
       _j6_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$0),
         691,
         22294,
         22300,
         22306];
      return caml_call1(Expect_test_collector$1[1],_j6_)}
    var
     _fH_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$1),
       691,
       22294,
       22307,
       22319],
     _fK_=
      [0,
       [0,
        _fJ_,
        _fI_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$2),
         691,
         22294,
         22300,
         22306],
        _fH_],
       0],
     _fM_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$4),
       680,
       21886,
       21888,
       22320],
     _fN_=
      caml_call1
       (Expect_test_common_File[4][3],cst_68699430bf14ef784fa8bfb54f592d3b);
    caml_call9
     (Expect_test_collector$1[3],
      _fN_,
      _fM_,
      cst_src_versioned_rpc_ml$3,
      _fL_,
      0,
      _fK_,
      0,
      Inline_test_config,
      _fE_);
    var
     Expect_test_collector$2=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _fO_(param)
     {var
       menu=of_entries([0,[0,not_the_rpc,1],[0,[0,not_the_rpc,2],0]]),
       _j1_=supported_versions(menu,the_rpc),
       result=
        most_recent_common_version
         (the_rpc,caml_call1(Core_kernel_Int[121][57],_fP_),_j1_,menu),
       _j2_=caml_call2(Core_kernel_Or_error[13],Core_kernel[339],result);
      caml_call2(Core_kernel[236],0,_j2_);
      var
       _j3_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$5),
         706,
         22821,
         22827,
         22833];
      return caml_call1(Expect_test_collector$2[1],_j3_)}
    var
     _fQ_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$6),
       706,
       22821,
       22834,
       23030],
     _fT_=
      [0,
       [0,
        _fS_,
        _fR_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$7),
         706,
         22821,
         22827,
         22833],
        _fQ_],
       0],
     _fV_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$9),
       694,
       22327,
       22329,
       23031],
     _fW_=
      caml_call1
       (Expect_test_common_File[4][3],cst_68699430bf14ef784fa8bfb54f592d3b$0);
    caml_call9
     (Expect_test_collector$2[3],
      _fW_,
      _fV_,
      cst_src_versioned_rpc_ml$8,
      _fU_,
      0,
      _fT_,
      0,
      Inline_test_config,
      _fO_);
    function Make$3(M)
     {function with_specific_version
       (version,connection,name,query,dispatcher,registry)
       {var match=caml_call2(Core_kernel_Hashtbl[52],registry,version);
        if(match)
         {var match$0=match[1],dispatch=match$0[1];
          return caml_call3(dispatcher,dispatch,connection,query)}
        var x=[0,name,version];
        function _jZ_(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[447],v0),
           v1$0=caml_call1(Core_kernel[339],v1);
          return [1,[0,v0$0,[0,v1$0,0]]]}
        var
         _j0_=
          [1,
           caml_call5
            (Core_kernel_Error[15],0,0,cst_unknown_rpc_version,x,_jZ_)];
        return caml_call1(M[5],_j0_)}
      function with_version_menu
       (param,query,name,versions,registry,dispatcher)
       {var
         menu=param[2],
         connection=param[1],
         callee_versions=supported_versions(menu,name),
         caller_versions=caml_call1(versions,0),
         match=
          most_recent_common_version
           (name,caller_versions,callee_versions,menu);
        if(0 === match[0])
         {var version=match[1];
          return with_specific_version
                  (version,connection,name,query,dispatcher,registry)}
        var e=match[1];
        return caml_call1(M[5],[1,e])}
      return [0,with_specific_version,with_version_menu]}
    var
     Async=
      Make$3
       ([0,
         Async_kernel_Deferred[8],
         Async_kernel_Deferred[9],
         Async_kernel_Deferred[10],
         Async_kernel_Deferred[11],
         Async_kernel_Deferred[12],
         Async_kernel_Deferred[13],
         Async_kernel_Deferred[14],
         Async_kernel_Deferred[15],
         Async_kernel_Deferred[22],
         Async_kernel_Deferred[23],
         Async_kernel_Deferred[16]]),
     Direct=Make$3(Base_Monad[5]);
    function Make$4(_jK_)
     {var _jL_=_jK_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fX_,0);
      function rpcs(param)
       {function _jX_(param){var rpc=param[2];return rpc}
        var _jY_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_jY_,_jX_)}
      function versions(param)
       {var _jW_=caml_call1(Core_kernel_Int[125][59],registry);
        return caml_call1(Core_kernel_Int[121][57],_jW_)}
      function dispatch_multi(conn_with_menu,query)
       {function _jU_(_jV_){return _jV_}
        return caml_call6
                (Async[2],conn_with_menu,query,_jL_,versions,registry,_jU_)}
      function Register(Version_i)
       {var
         rpc=
          caml_call4(_e2_[1],_jL_,Version_i[17],Version_i[8],Version_i[16]);
        function dispatch(conn,mq)
         {function _jO_(param){return caml_call1(Version_i[18],mq)}
          var match=caml_call1(Core_kernel_Result[43],_jO_);
          if(0 === match[0])
           {var
             q=match[1],
             _jP_=
              function(result)
               {function _jS_(r)
                 {function _jT_(param){return caml_call2(Version_i[19],mq,r)}
                  var match=caml_call1(Core_kernel_Result[43],_jT_);
                  if(0 === match[0]){var r$0=match[1];return [0,r$0]}
                  var exn=match[1];
                  return [1,
                          failed_conversion
                           ([0,
                             -71406943,
                             [0,4102853,_jL_],
                             [0,-901574920,Version_i[17]],
                             exn])]}
                return caml_call2(Core_kernel_Result[18],result,_jS_)},
             _jQ_=caml_call3(_e2_[11],rpc,conn,q);
            return caml_call2(Async_kernel[21],_jQ_,_jP_)}
          var
           exn=match[1],
           _jR_=
            [1,
             failed_conversion
              ([0,
                -250086680,
                [0,4102853,_jL_],
                [0,-901574920,Version_i[17]],
                exn])];
          return caml_call1(Async_kernel[19],_jR_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[17]);
        if(match)
         {var
           _jN_=
            multiple_registrations
             ([0,[0,4102853,_jL_],[0,-901574920,Version_i[17]]]);
          caml_call1(Core_kernel_Error[25],_jN_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[17],
           [0,dispatch,[0,rpc]]);
        return [0,rpc]}
      function Register$0(Version_i)
       {var
         bin_shape_query=Version_i[1],
         bin_size_query=Version_i[2],
         bin_write_query=Version_i[3],
         bin_writer_query=Version_i[4],
         bin_read_query=Version_i[5],
         bin_read_query$0=Version_i[6],
         bin_reader_query=Version_i[7],
         bin_query=Version_i[8],
         bin_shape_response=Version_i[9],
         bin_size_response=Version_i[10],
         bin_write_response=Version_i[11],
         bin_writer_response=Version_i[12],
         bin_read_response=Version_i[13],
         bin_read_response$0=Version_i[14],
         bin_reader_response=Version_i[15],
         bin_response=Version_i[16],
         version=Version_i[17],
         query_of_model=Version_i[18],
         _jM_=Version_i[19];
        function model_of_response(param,r){return caml_call1(_jM_,r)}
        return Register
                ([0,
                  bin_shape_query,
                  bin_size_query,
                  bin_write_query,
                  bin_writer_query,
                  bin_read_query,
                  bin_read_query$0,
                  bin_reader_query,
                  bin_query,
                  bin_shape_response,
                  bin_size_response,
                  bin_write_response,
                  bin_writer_response,
                  bin_read_response,
                  bin_read_response$0,
                  bin_reader_response,
                  bin_response,
                  version,
                  query_of_model,
                  model_of_response])}
      return [0,
              _jL_,
              registry,
              rpcs,
              versions,
              dispatch_multi,
              Register,
              Register$0]}
    function Make$5(_ji_)
     {var _jj_=_ji_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fY_,0);
      function rpcs(param)
       {function _jI_(param){var rpc=param[2];return rpc}
        var _jJ_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_jJ_,_jI_)}
      function versions(param)
       {var _jH_=caml_call1(Core_kernel_Int[125][59],registry);
        return caml_call1(Core_kernel_Int[121][57],_jH_)}
      function dispatch_iter_multi(conn_with_menu,query,f)
       {function _jG_(param,conn,query)
         {var dispatch_iter=param[3];
          return caml_call3(dispatch_iter,conn,query,f)}
        return caml_call6
                (Async[2],conn_with_menu,query,_jj_,versions,registry,_jG_)}
      function dispatch_multi(conn_with_menu,query)
       {function _jF_(param,conn,query)
         {var dispatch=param[2];return caml_call2(dispatch,conn,query)}
        return caml_call6
                (Async[2],conn_with_menu,query,_jj_,versions,registry,_jF_)}
      function abort_multi(conn_with_menu,id)
       {function _jE_(param,conn,id)
         {var abort=param[1];caml_call2(abort,conn,id);return _fZ_}
        return caml_call6
                (Direct[2],conn_with_menu,id,_jj_,versions,registry,_jE_)}
      function Make_shared(Version_i,Convert)
       {var
         _jl_=Version_i[24],
         _jm_=Version_i[16],
         _jn_=Version_i[8],
         _jo_=Version_i[25],
         _jp_=caml_call2(Core_kernel_Option[53],Version_i[28],0),
         rpc=caml_call7(_e1_[3],_jp_,_jj_,_jo_,_jn_,_jm_,_jl_,0);
        function wrapped_query_of_model(q)
         {try
           {var q$0=caml_call1(Version_i[26],q)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _jD_=
              [1,
               failed_conversion
                ([0,
                  -250086680,
                  [0,4102853,_jj_],
                  [0,-901574920,Version_i[25]],
                  exn])];
            return caml_call1(Async_kernel[19],_jD_)}
          return caml_call1(Async_kernel[19],[0,q$0])}
        function convert_result(result,convert_ok)
         {if(0 === result[0])
           {var _jC_=result[1];
            if(0 === _jC_[0])
             {var ok=_jC_[1];return [0,[0,caml_call1(convert_ok,ok)]]}
            var e=_jC_[1];
            try
             {var e$0=caml_call1(Version_i[27],e)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,
                         106380200,
                         [0,4102853,_jj_],
                         [0,-901574920,Version_i[25]],
                         exn])]}
            return [0,[1,e$0]]}
          return result}
        function dispatch(conn,q)
         {function _jy_(q)
           {function _jA_(result)
             {return convert_result
                      (result,
                       function(param)
                        {var id=param[2],pipe=param[1];
                         return [0,caml_call1(Convert[2],pipe),id]})}
            var _jB_=caml_call3(_e1_[10],rpc,conn,q);
            return caml_call2(Async_kernel[21],_jB_,_jA_)}
          var _jz_=wrapped_query_of_model(q);
          return caml_call2(Async_kernel[17],_jz_,_jy_)}
        function dispatch_iter(conn,q,f)
         {var convert_elt=caml_call1(Core_kernel_Or_error[36],Convert[1]);
          function _jr_(q)
           {function _jt_(result)
             {return convert_result(result,function(_jx_){return _jx_})}
            function _ju_(message)
             {if(0 === message[0])
               var u=message[1],_jw_=[0,caml_call1(convert_elt,u)];
              else
               var _jw_=message;
              return caml_call1(f,_jw_)}
            var _jv_=caml_call4(_e1_[14],rpc,conn,q,_ju_);
            return caml_call2(Async_kernel[21],_jv_,_jt_)}
          var _js_=wrapped_query_of_model(q);
          return caml_call2(Async_kernel[17],_js_,_jr_)}
        function abort(conn,id){return caml_call3(_e1_[15],rpc,conn,id)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[25]);
        if(match)
         {var
           _jq_=
            multiple_registrations
             ([0,[0,4102853,_jj_],[0,-901574920,Version_i[25]]]);
          caml_call1(Core_kernel_Error[25],_jq_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[25],
           [0,[0,abort,dispatch,dispatch_iter],[1,rpc]]);
        return [0,
                rpc,
                wrapped_query_of_model,
                convert_result,
                dispatch,
                dispatch_iter,
                abort]}
      function Register_raw(Version_i)
       {var
         convert_elt=
          caml_call1
           (Core_kernel_Or_error[41],cst_Cannot_use_Direct_with_Register_raw),
         convert_pipe=Version_i[29];
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      function Register(Version_i)
       {var convert_elt=[0,Version_i[29]];
        function convert_pipe(rs)
         {function _jk_(r)
           {try
             {var r$0=caml_call1(Version_i[29],r)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,
                         -71406943,
                         [0,4102853,_jj_],
                         [0,-901574920,Version_i[25]],
                         exn])]}
            return [0,r$0]}
          return caml_call2(Async_kernel_Pipe[57],rs,_jk_)}
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      return [0,
              _jj_,
              registry,
              rpcs,
              versions,
              dispatch_iter_multi,
              dispatch_multi,
              abort_multi,
              Make_shared,
              Register_raw,
              Register]}
    function Make$6(_i1_)
     {var _i2_=_i1_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_f0_,0);
      function rpcs(param)
       {function _jg_(param){var rpc=param[2];return rpc}
        var _jh_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_jh_,_jg_)}
      function versions(param)
       {var _jf_=caml_call1(Core_kernel_Int[125][59],registry);
        return caml_call1(Core_kernel_Int[121][57],_jf_)}
      function dispatch_multi(conn_with_menu,query)
       {function _jd_(_je_){return _je_}
        return caml_call6
                (Async[2],conn_with_menu,query,_i2_,versions,registry,_jd_)}
      function Register_raw(Version_i)
       {var
         _i4_=Version_i[32],
         _i5_=Version_i[24],
         _i6_=Version_i[16],
         _i7_=Version_i[8],
         _i8_=Version_i[33],
         _i9_=caml_call2(Core_kernel_Option[53],Version_i[37],0),
         rpc=caml_call8(_e0_[3],_i9_,_i2_,_i8_,_i7_,_i6_,_i5_,_i4_,0);
        function dispatch(conn,q)
         {try
           {var q$0=caml_call1(Version_i[34],q)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _i$_=
              [1,
               failed_conversion
                ([0,
                  -250086680,
                  [0,4102853,_i2_],
                  [0,-901574920,Version_i[33]],
                  exn])];
            return caml_call1(Async_kernel[19],_i$_)}
          function _ja_(result)
           {if(0 === result[0])
             {var _jc_=result[1];
              if(0 === _jc_[0])
               {var match=_jc_[1],id=match[3],pipe=match[2],state=match[1];
                try
                 {var state$0=caml_call1(Version_i[35],state)}
                catch(exn)
                 {exn = caml_wrap_exception(exn);
                  return [1,
                          failed_conversion
                           ([0,
                             389604849,
                             [0,4102853,_i2_],
                             [0,-901574920,Version_i[33]],
                             exn])]}
                return [0,[0,[0,state$0,caml_call1(Version_i[38],pipe),id]]]}
              var e=_jc_[1];
              try
               {var e$0=caml_call1(Version_i[36],e)}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                return [1,
                        failed_conversion
                         ([0,
                           106380200,
                           [0,4102853,_i2_],
                           [0,-901574920,Version_i[33]],
                           exn])]}
              return [0,[1,e$0]]}
            var exn=result[1];
            return [1,exn]}
          var _jb_=caml_call3(_e0_[9],rpc,conn,q$0);
          return caml_call2(Async_kernel[21],_jb_,_ja_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[33]);
        if(match)
         {var
           _i__=
            multiple_registrations
             ([0,[0,4102853,_i2_],[0,-901574920,Version_i[33]]]);
          caml_call1(Core_kernel_Error[25],_i__)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[33],
           [0,dispatch,[2,rpc]]);
        return [0,rpc]}
      function Register(Version_i)
       {var
         bin_shape_query=Version_i[1],
         bin_size_query=Version_i[2],
         bin_write_query=Version_i[3],
         bin_writer_query=Version_i[4],
         bin_read_query=Version_i[5],
         bin_read_query$0=Version_i[6],
         bin_reader_query=Version_i[7],
         bin_query=Version_i[8],
         bin_shape_state=Version_i[9],
         bin_size_state=Version_i[10],
         bin_write_state=Version_i[11],
         bin_writer_state=Version_i[12],
         bin_read_state=Version_i[13],
         bin_read_state$0=Version_i[14],
         bin_reader_state=Version_i[15],
         bin_state=Version_i[16],
         bin_shape_update=Version_i[17],
         bin_size_update=Version_i[18],
         bin_write_update=Version_i[19],
         bin_writer_update=Version_i[20],
         bin_read_update=Version_i[21],
         bin_read_update$0=Version_i[22],
         bin_reader_update=Version_i[23],
         bin_update=Version_i[24],
         bin_shape_error=Version_i[25],
         bin_size_error=Version_i[26],
         bin_write_error=Version_i[27],
         bin_writer_error=Version_i[28],
         bin_read_error=Version_i[29],
         bin_read_error$0=Version_i[30],
         bin_reader_error=Version_i[31],
         bin_error=Version_i[32],
         version=Version_i[33],
         query_of_model=Version_i[34],
         model_of_state=Version_i[35],
         model_of_error=Version_i[36],
         client_pushes_back=Version_i[37];
        function model_of_update(rs)
         {function _i3_(r)
           {try
             {var r$0=caml_call1(Version_i[38],r)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,999946793,[0,4102853,_i2_],[0,-901574920,version],exn])]}
            return [0,r$0]}
          return caml_call2(Async_kernel_Pipe[57],rs,_i3_)}
        var
         include=
          Register_raw
           ([0,
             bin_shape_query,
             bin_size_query,
             bin_write_query,
             bin_writer_query,
             bin_read_query,
             bin_read_query$0,
             bin_reader_query,
             bin_query,
             bin_shape_state,
             bin_size_state,
             bin_write_state,
             bin_writer_state,
             bin_read_state,
             bin_read_state$0,
             bin_reader_state,
             bin_state,
             bin_shape_update,
             bin_size_update,
             bin_write_update,
             bin_writer_update,
             bin_read_update,
             bin_read_update$0,
             bin_reader_update,
             bin_update,
             bin_shape_error,
             bin_size_error,
             bin_write_error,
             bin_writer_error,
             bin_read_error,
             bin_read_error$0,
             bin_reader_error,
             bin_error,
             version,
             query_of_model,
             model_of_state,
             model_of_error,
             client_pushes_back,
             model_of_update]),
         rpc=include[1];
        return [0,rpc]}
      return [0,
              _i2_,
              registry,
              rpcs,
              versions,
              dispatch_multi,
              Register_raw,
              Register]}
    function Make$7(_iS_)
     {var _iT_=_iS_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_f1_,0);
      function rpcs(param)
       {function _iZ_(param){var rpc=param[2];return rpc}
        var _i0_=caml_call1(Core_kernel_Hashtbl[60],registry);
        return caml_call2(Core_kernel_List[69],_i0_,_iZ_)}
      function versions(param)
       {var _iY_=caml_call1(Core_kernel_Int[125][59],registry);
        return caml_call1(Core_kernel_Int[121][57],_iY_)}
      function dispatch_multi(conn_with_menu,msg)
       {function _iW_(_iX_){return _iX_}
        return caml_call6
                (Direct[2],conn_with_menu,msg,_iT_,versions,registry,_iW_)}
      function Register(Version_i)
       {var rpc=caml_call3(_eZ_[1],_iT_,Version_i[9],Version_i[8]);
        function dispatch(conn,q)
         {function _iV_(param){return caml_call1(Version_i[10],q)}
          var match=caml_call1(Core_kernel_Result[43],_iV_);
          if(0 === match[0])
           {var q$0=match[1];return caml_call3(_eZ_[9],rpc,conn,q$0)}
          var exn=match[1];
          return [1,
                  failed_conversion
                   ([0,
                     3854881,
                     [0,4102853,_iT_],
                     [0,-901574920,Version_i[9]],
                     exn])]}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[9]);
        if(match)
         {var
           _iU_=
            multiple_registrations
             ([0,[0,4102853,_iT_],[0,-901574920,Version_i[9]]]);
          caml_call1(Core_kernel_Error[25],_iU_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],registry,Version_i[9],[0,dispatch,[3,rpc]]);
        return [0,rpc]}
      return [0,_iT_,registry,rpcs,versions,dispatch_multi,Register]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _f2_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$7([0,name]),Callee=Make$2([0,name]);
         function _iL_(param)
          {var _iQ_=caml_call1(Callee[5],0),_iR_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[121][26],_iR_,_iQ_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versions_Callee_ve$3,
           0,
           cst_src_versioned_rpc_ml$14,
           1511,
           6,
           74,
           _iL_);
         function Register(Version)
          {var
            version=Version[1],
            bin_shape_msg=Version[2],
            bin_size_msg=Version[3],
            bin_write_msg=Version[4],
            bin_writer_msg=Version[5],
            bin_read_msg=Version[6],
            bin_read_msg$0=Version[7],
            bin_reader_msg=Version[8],
            bin_msg=Version[9],
            callee_model_of_msg=Version[11];
           caml_call1
            (Callee[6],
             [0,
              bin_shape_msg,
              bin_size_msg,
              bin_write_msg,
              bin_writer_msg,
              bin_read_msg,
              bin_read_msg$0,
              bin_reader_msg,
              bin_msg,
              version,
              callee_model_of_msg]);
           var
            version$0=Version[1],
            bin_shape_msg$0=Version[2],
            bin_size_msg$0=Version[3],
            bin_write_msg$0=Version[4],
            bin_writer_msg$0=Version[5],
            bin_read_msg$1=Version[6],
            bin_read_msg$2=Version[7],
            bin_reader_msg$0=Version[8],
            bin_msg$0=Version[9],
            msg_of_caller_model=Version[10],
            include=
             caml_call1
              (Caller[6],
               [0,
                bin_shape_msg$0,
                bin_size_msg$0,
                bin_write_msg$0,
                bin_writer_msg$0,
                bin_read_msg$1,
                bin_read_msg$2,
                bin_reader_msg$0,
                bin_msg$0,
                version$0,
                msg_of_caller_model]),
            _iM_=include[1];
           function _iN_(param)
            {var _iO_=caml_call1(Callee[5],0),_iP_=caml_call1(Caller[4],0);
             return caml_call2(Core_kernel_Int[121][26],_iP_,_iO_)}
           caml_call8
            (Ppx_inline_test_lib_Runtime[4],
             Inline_test_config,
             cst_Int_Set_equal_Caller_versions_Callee_ve$4,
             0,
             cst_src_versioned_rpc_ml$15,
             1528,
             8,
             76,
             _iN_);
           return [0,_iM_]}
         var dispatch_multi=Caller[5],implement_multi=Callee[3];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         return [0,Register,dispatch_multi,implement_multi,rpcs,versions,name]}],
     _f3_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$6([0,name]),Callee=Make$1([0,name]);
         function _iI_(param)
          {var _iJ_=caml_call1(Callee[5],0),_iK_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[121][26],_iK_,_iJ_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versions_Callee_ve$2,
           0,
           cst_src_versioned_rpc_ml$13,
           1407,
           6,
           74,
           _iI_);
         function Register_raw(Version_i)
          {var
            version=Version_i[1],
            bin_shape_query=Version_i[2],
            bin_size_query=Version_i[3],
            bin_write_query=Version_i[4],
            bin_writer_query=Version_i[5],
            bin_read_query=Version_i[6],
            bin_read_query$0=Version_i[7],
            bin_reader_query=Version_i[8],
            bin_query=Version_i[9],
            bin_shape_state=Version_i[10],
            bin_size_state=Version_i[11],
            bin_write_state=Version_i[12],
            bin_writer_state=Version_i[13],
            bin_read_state=Version_i[14],
            bin_read_state$0=Version_i[15],
            bin_reader_state=Version_i[16],
            bin_state=Version_i[17],
            bin_shape_update=Version_i[18],
            bin_size_update=Version_i[19],
            bin_write_update=Version_i[20],
            bin_writer_update=Version_i[21],
            bin_read_update=Version_i[22],
            bin_read_update$0=Version_i[23],
            bin_reader_update=Version_i[24],
            bin_update=Version_i[25],
            bin_shape_error=Version_i[26],
            bin_size_error=Version_i[27],
            bin_write_error=Version_i[28],
            bin_writer_error=Version_i[29],
            bin_read_error=Version_i[30],
            bin_read_error$0=Version_i[31],
            bin_reader_error=Version_i[32],
            bin_error=Version_i[33],
            callee_model_of_query=Version_i[35],
            state_of_callee_model=Version_i[37],
            error_of_callee_model=Version_i[39],
            client_pushes_back=Version_i[40],
            update_of_callee_model=Version_i[42];
           caml_call1
            (Callee[6],
             [0,
              bin_shape_query,
              bin_size_query,
              bin_write_query,
              bin_writer_query,
              bin_read_query,
              bin_read_query$0,
              bin_reader_query,
              bin_query,
              bin_shape_state,
              bin_size_state,
              bin_write_state,
              bin_writer_state,
              bin_read_state,
              bin_read_state$0,
              bin_reader_state,
              bin_state,
              bin_shape_update,
              bin_size_update,
              bin_write_update,
              bin_writer_update,
              bin_read_update,
              bin_read_update$0,
              bin_reader_update,
              bin_update,
              bin_shape_error,
              bin_size_error,
              bin_write_error,
              bin_writer_error,
              bin_read_error,
              bin_read_error$0,
              bin_reader_error,
              bin_error,
              version,
              callee_model_of_query,
              state_of_callee_model,
              error_of_callee_model,
              client_pushes_back,
              update_of_callee_model]);
           var
            version$0=Version_i[1],
            bin_shape_query$0=Version_i[2],
            bin_size_query$0=Version_i[3],
            bin_write_query$0=Version_i[4],
            bin_writer_query$0=Version_i[5],
            bin_read_query$1=Version_i[6],
            bin_read_query$2=Version_i[7],
            bin_reader_query$0=Version_i[8],
            bin_query$0=Version_i[9],
            bin_shape_state$0=Version_i[10],
            bin_size_state$0=Version_i[11],
            bin_write_state$0=Version_i[12],
            bin_writer_state$0=Version_i[13],
            bin_read_state$1=Version_i[14],
            bin_read_state$2=Version_i[15],
            bin_reader_state$0=Version_i[16],
            bin_state$0=Version_i[17],
            bin_shape_update$0=Version_i[18],
            bin_size_update$0=Version_i[19],
            bin_write_update$0=Version_i[20],
            bin_writer_update$0=Version_i[21],
            bin_read_update$1=Version_i[22],
            bin_read_update$2=Version_i[23],
            bin_reader_update$0=Version_i[24],
            bin_update$0=Version_i[25],
            bin_shape_error$0=Version_i[26],
            bin_size_error$0=Version_i[27],
            bin_write_error$0=Version_i[28],
            bin_writer_error$0=Version_i[29],
            bin_read_error$1=Version_i[30],
            bin_read_error$2=Version_i[31],
            bin_reader_error$0=Version_i[32],
            bin_error$0=Version_i[33],
            query_of_caller_model=Version_i[34],
            caller_model_of_state=Version_i[36],
            caller_model_of_error=Version_i[38],
            client_pushes_back$0=Version_i[40],
            caller_model_of_update=Version_i[41],
            include=
             caml_call1
              (Caller[6],
               [0,
                bin_shape_query$0,
                bin_size_query$0,
                bin_write_query$0,
                bin_writer_query$0,
                bin_read_query$1,
                bin_read_query$2,
                bin_reader_query$0,
                bin_query$0,
                bin_shape_state$0,
                bin_size_state$0,
                bin_write_state$0,
                bin_writer_state$0,
                bin_read_state$1,
                bin_read_state$2,
                bin_reader_state$0,
                bin_state$0,
                bin_shape_update$0,
                bin_size_update$0,
                bin_write_update$0,
                bin_writer_update$0,
                bin_read_update$1,
                bin_read_update$2,
                bin_reader_update$0,
                bin_update$0,
                bin_shape_error$0,
                bin_size_error$0,
                bin_write_error$0,
                bin_writer_error$0,
                bin_read_error$1,
                bin_read_error$2,
                bin_reader_error$0,
                bin_error$0,
                version$0,
                query_of_caller_model,
                caller_model_of_state,
                caller_model_of_error,
                client_pushes_back$0,
                caller_model_of_update]),
            rpc=include[1];
           return [0,rpc]}
         function Register(Version_i)
          {var
            version=Version_i[1],
            bin_shape_query=Version_i[2],
            bin_size_query=Version_i[3],
            bin_write_query=Version_i[4],
            bin_writer_query=Version_i[5],
            bin_read_query=Version_i[6],
            bin_read_query$0=Version_i[7],
            bin_reader_query=Version_i[8],
            bin_query=Version_i[9],
            bin_shape_state=Version_i[10],
            bin_size_state=Version_i[11],
            bin_write_state=Version_i[12],
            bin_writer_state=Version_i[13],
            bin_read_state=Version_i[14],
            bin_read_state$0=Version_i[15],
            bin_reader_state=Version_i[16],
            bin_state=Version_i[17],
            bin_shape_update=Version_i[18],
            bin_size_update=Version_i[19],
            bin_write_update=Version_i[20],
            bin_writer_update=Version_i[21],
            bin_read_update=Version_i[22],
            bin_read_update$0=Version_i[23],
            bin_reader_update=Version_i[24],
            bin_update=Version_i[25],
            bin_shape_error=Version_i[26],
            bin_size_error=Version_i[27],
            bin_write_error=Version_i[28],
            bin_writer_error=Version_i[29],
            bin_read_error=Version_i[30],
            bin_read_error$0=Version_i[31],
            bin_reader_error=Version_i[32],
            bin_error=Version_i[33],
            callee_model_of_query=Version_i[35],
            state_of_callee_model=Version_i[37],
            error_of_callee_model=Version_i[39],
            client_pushes_back=Version_i[40],
            update_of_callee_model=Version_i[41];
           caml_call1
            (Callee[7],
             [0,
              bin_shape_query,
              bin_size_query,
              bin_write_query,
              bin_writer_query,
              bin_read_query,
              bin_read_query$0,
              bin_reader_query,
              bin_query,
              bin_shape_state,
              bin_size_state,
              bin_write_state,
              bin_writer_state,
              bin_read_state,
              bin_read_state$0,
              bin_reader_state,
              bin_state,
              bin_shape_update,
              bin_size_update,
              bin_write_update,
              bin_writer_update,
              bin_read_update,
              bin_read_update$0,
              bin_reader_update,
              bin_update,
              bin_shape_error,
              bin_size_error,
              bin_write_error,
              bin_writer_error,
              bin_read_error,
              bin_read_error$0,
              bin_reader_error,
              bin_error,
              version,
              callee_model_of_query,
              state_of_callee_model,
              error_of_callee_model,
              client_pushes_back,
              update_of_callee_model]);
           var
            version$0=Version_i[1],
            bin_shape_query$0=Version_i[2],
            bin_size_query$0=Version_i[3],
            bin_write_query$0=Version_i[4],
            bin_writer_query$0=Version_i[5],
            bin_read_query$1=Version_i[6],
            bin_read_query$2=Version_i[7],
            bin_reader_query$0=Version_i[8],
            bin_query$0=Version_i[9],
            bin_shape_state$0=Version_i[10],
            bin_size_state$0=Version_i[11],
            bin_write_state$0=Version_i[12],
            bin_writer_state$0=Version_i[13],
            bin_read_state$1=Version_i[14],
            bin_read_state$2=Version_i[15],
            bin_reader_state$0=Version_i[16],
            bin_state$0=Version_i[17],
            bin_shape_update$0=Version_i[18],
            bin_size_update$0=Version_i[19],
            bin_write_update$0=Version_i[20],
            bin_writer_update$0=Version_i[21],
            bin_read_update$1=Version_i[22],
            bin_read_update$2=Version_i[23],
            bin_reader_update$0=Version_i[24],
            bin_update$0=Version_i[25],
            bin_shape_error$0=Version_i[26],
            bin_size_error$0=Version_i[27],
            bin_write_error$0=Version_i[28],
            bin_writer_error$0=Version_i[29],
            bin_read_error$1=Version_i[30],
            bin_read_error$2=Version_i[31],
            bin_reader_error$0=Version_i[32],
            bin_error$0=Version_i[33],
            query_of_caller_model=Version_i[34],
            caller_model_of_state=Version_i[36],
            caller_model_of_error=Version_i[38],
            client_pushes_back$0=Version_i[40],
            caller_model_of_update=Version_i[42],
            include=
             caml_call1
              (Caller[7],
               [0,
                bin_shape_query$0,
                bin_size_query$0,
                bin_write_query$0,
                bin_writer_query$0,
                bin_read_query$1,
                bin_read_query$2,
                bin_reader_query$0,
                bin_query$0,
                bin_shape_state$0,
                bin_size_state$0,
                bin_write_state$0,
                bin_writer_state$0,
                bin_read_state$1,
                bin_read_state$2,
                bin_reader_state$0,
                bin_state$0,
                bin_shape_update$0,
                bin_size_update$0,
                bin_write_update$0,
                bin_writer_update$0,
                bin_read_update$1,
                bin_read_update$2,
                bin_reader_update$0,
                bin_update$0,
                bin_shape_error$0,
                bin_size_error$0,
                bin_write_error$0,
                bin_writer_error$0,
                bin_read_error$1,
                bin_read_error$2,
                bin_reader_error$0,
                bin_error$0,
                version$0,
                query_of_caller_model,
                caller_model_of_state,
                caller_model_of_error,
                client_pushes_back$0,
                caller_model_of_update]),
            rpc=include[1];
           return [0,rpc]}
         var dispatch_multi=Caller[5],implement_multi=Callee[3];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         return [0,
                 Register,
                 Register_raw,
                 dispatch_multi,
                 implement_multi,
                 rpcs,
                 versions,
                 name]}],
     _f4_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$5([0,name]),Callee=Make$0([0,name]);
         function _iE_(param)
          {var _iG_=caml_call1(Callee[7],0),_iH_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[121][26],_iH_,_iG_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versions_Callee_ve$1,
           0,
           cst_src_versioned_rpc_ml$12,
           1294,
           6,
           74,
           _iE_);
         var
          dispatch_multi=Caller[6],
          dispatch_iter_multi=Caller[5],
          abort_multi=Caller[7],
          implement_multi=Callee[4],
          implement_direct_multi=Callee[5];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         function _iF_(Version_i)
          {var
            version=Version_i[1],
            bin_shape_query=Version_i[2],
            bin_size_query=Version_i[3],
            bin_write_query=Version_i[4],
            bin_writer_query=Version_i[5],
            bin_read_query=Version_i[6],
            bin_read_query$0=Version_i[7],
            bin_reader_query=Version_i[8],
            bin_query=Version_i[9],
            bin_shape_response=Version_i[10],
            bin_size_response=Version_i[11],
            bin_write_response=Version_i[12],
            bin_writer_response=Version_i[13],
            bin_read_response=Version_i[14],
            bin_read_response$0=Version_i[15],
            bin_reader_response=Version_i[16],
            bin_response=Version_i[17],
            bin_shape_error=Version_i[18],
            bin_size_error=Version_i[19],
            bin_write_error=Version_i[20],
            bin_writer_error=Version_i[21],
            bin_read_error=Version_i[22],
            bin_read_error$0=Version_i[23],
            bin_reader_error=Version_i[24],
            bin_error=Version_i[25],
            callee_model_of_query=Version_i[27],
            error_of_callee_model=Version_i[28],
            client_pushes_back=Version_i[30],
            response_of_callee_model=Version_i[31];
           caml_call1
            (Callee[9],
             [0,
              bin_shape_query,
              bin_size_query,
              bin_write_query,
              bin_writer_query,
              bin_read_query,
              bin_read_query$0,
              bin_reader_query,
              bin_query,
              bin_shape_response,
              bin_size_response,
              bin_write_response,
              bin_writer_response,
              bin_read_response,
              bin_read_response$0,
              bin_reader_response,
              bin_response,
              bin_shape_error,
              bin_size_error,
              bin_write_error,
              bin_writer_error,
              bin_read_error,
              bin_read_error$0,
              bin_reader_error,
              bin_error,
              version,
              callee_model_of_query,
              error_of_callee_model,
              client_pushes_back,
              response_of_callee_model]);
           var
            version$0=Version_i[1],
            bin_shape_query$0=Version_i[2],
            bin_size_query$0=Version_i[3],
            bin_write_query$0=Version_i[4],
            bin_writer_query$0=Version_i[5],
            bin_read_query$1=Version_i[6],
            bin_read_query$2=Version_i[7],
            bin_reader_query$0=Version_i[8],
            bin_query$0=Version_i[9],
            bin_shape_response$0=Version_i[10],
            bin_size_response$0=Version_i[11],
            bin_write_response$0=Version_i[12],
            bin_writer_response$0=Version_i[13],
            bin_read_response$1=Version_i[14],
            bin_read_response$2=Version_i[15],
            bin_reader_response$0=Version_i[16],
            bin_response$0=Version_i[17],
            bin_shape_error$0=Version_i[18],
            bin_size_error$0=Version_i[19],
            bin_write_error$0=Version_i[20],
            bin_writer_error$0=Version_i[21],
            bin_read_error$1=Version_i[22],
            bin_read_error$2=Version_i[23],
            bin_reader_error$0=Version_i[24],
            bin_error$0=Version_i[25],
            query_of_caller_model=Version_i[26],
            caller_model_of_error=Version_i[29],
            client_pushes_back$0=Version_i[30],
            caller_model_of_response=Version_i[32],
            include=
             caml_call1
              (Caller[9],
               [0,
                bin_shape_query$0,
                bin_size_query$0,
                bin_write_query$0,
                bin_writer_query$0,
                bin_read_query$1,
                bin_read_query$2,
                bin_reader_query$0,
                bin_query$0,
                bin_shape_response$0,
                bin_size_response$0,
                bin_write_response$0,
                bin_writer_response$0,
                bin_read_response$1,
                bin_read_response$2,
                bin_reader_response$0,
                bin_response$0,
                bin_shape_error$0,
                bin_size_error$0,
                bin_write_error$0,
                bin_writer_error$0,
                bin_read_error$1,
                bin_read_error$2,
                bin_reader_error$0,
                bin_error$0,
                version$0,
                query_of_caller_model,
                caller_model_of_error,
                client_pushes_back$0,
                caller_model_of_response]),
            rpc=include[1];
           return [0,rpc]}
         return [0,
                 function(Version_i)
                  {var
                    version=Version_i[1],
                    bin_shape_query=Version_i[2],
                    bin_size_query=Version_i[3],
                    bin_write_query=Version_i[4],
                    bin_writer_query=Version_i[5],
                    bin_read_query=Version_i[6],
                    bin_read_query$0=Version_i[7],
                    bin_reader_query=Version_i[8],
                    bin_query=Version_i[9],
                    bin_shape_response=Version_i[10],
                    bin_size_response=Version_i[11],
                    bin_write_response=Version_i[12],
                    bin_writer_response=Version_i[13],
                    bin_read_response=Version_i[14],
                    bin_read_response$0=Version_i[15],
                    bin_reader_response=Version_i[16],
                    bin_response=Version_i[17],
                    bin_shape_error=Version_i[18],
                    bin_size_error=Version_i[19],
                    bin_write_error=Version_i[20],
                    bin_writer_error=Version_i[21],
                    bin_read_error=Version_i[22],
                    bin_read_error$0=Version_i[23],
                    bin_reader_error=Version_i[24],
                    bin_error=Version_i[25],
                    callee_model_of_query=Version_i[27],
                    error_of_callee_model=Version_i[28],
                    client_pushes_back=Version_i[30],
                    response_of_callee_model=Version_i[31];
                   caml_call1
                    (Callee[10],
                     [0,
                      bin_shape_query,
                      bin_size_query,
                      bin_write_query,
                      bin_writer_query,
                      bin_read_query,
                      bin_read_query$0,
                      bin_reader_query,
                      bin_query,
                      bin_shape_response,
                      bin_size_response,
                      bin_write_response,
                      bin_writer_response,
                      bin_read_response,
                      bin_read_response$0,
                      bin_reader_response,
                      bin_response,
                      bin_shape_error,
                      bin_size_error,
                      bin_write_error,
                      bin_writer_error,
                      bin_read_error,
                      bin_read_error$0,
                      bin_reader_error,
                      bin_error,
                      version,
                      callee_model_of_query,
                      error_of_callee_model,
                      client_pushes_back,
                      response_of_callee_model]);
                   var
                    version$0=Version_i[1],
                    bin_shape_query$0=Version_i[2],
                    bin_size_query$0=Version_i[3],
                    bin_write_query$0=Version_i[4],
                    bin_writer_query$0=Version_i[5],
                    bin_read_query$1=Version_i[6],
                    bin_read_query$2=Version_i[7],
                    bin_reader_query$0=Version_i[8],
                    bin_query$0=Version_i[9],
                    bin_shape_response$0=Version_i[10],
                    bin_size_response$0=Version_i[11],
                    bin_write_response$0=Version_i[12],
                    bin_writer_response$0=Version_i[13],
                    bin_read_response$1=Version_i[14],
                    bin_read_response$2=Version_i[15],
                    bin_reader_response$0=Version_i[16],
                    bin_response$0=Version_i[17],
                    bin_shape_error$0=Version_i[18],
                    bin_size_error$0=Version_i[19],
                    bin_write_error$0=Version_i[20],
                    bin_writer_error$0=Version_i[21],
                    bin_read_error$1=Version_i[22],
                    bin_read_error$2=Version_i[23],
                    bin_reader_error$0=Version_i[24],
                    bin_error$0=Version_i[25],
                    query_of_caller_model=Version_i[26],
                    caller_model_of_error=Version_i[29],
                    client_pushes_back$0=Version_i[30],
                    caller_model_of_response=Version_i[32],
                    include=
                     caml_call1
                      (Caller[10],
                       [0,
                        bin_shape_query$0,
                        bin_size_query$0,
                        bin_write_query$0,
                        bin_writer_query$0,
                        bin_read_query$1,
                        bin_read_query$2,
                        bin_reader_query$0,
                        bin_query$0,
                        bin_shape_response$0,
                        bin_size_response$0,
                        bin_write_response$0,
                        bin_writer_response$0,
                        bin_read_response$1,
                        bin_read_response$2,
                        bin_reader_response$0,
                        bin_response$0,
                        bin_shape_error$0,
                        bin_size_error$0,
                        bin_write_error$0,
                        bin_writer_error$0,
                        bin_read_error$1,
                        bin_read_error$2,
                        bin_reader_error$0,
                        bin_error$0,
                        version$0,
                        query_of_caller_model,
                        caller_model_of_error,
                        client_pushes_back$0,
                        caller_model_of_response]),
                    rpc=include[1];
                   return [0,rpc]},
                 _iF_,
                 dispatch_multi,
                 dispatch_iter_multi,
                 abort_multi,
                 implement_multi,
                 implement_direct_multi,
                 rpcs,
                 versions,
                 name]}],
     _f5_=
      [0,
       [0,
        function(Model)
         {var name=Model[1],Caller=Make$4([0,name]),Callee=Make([0,name]);
          function _ix_(param)
           {var _iC_=caml_call1(Callee[5],0),_iD_=caml_call1(Caller[4],0);
            return caml_call2(Core_kernel_Int[121][26],_iD_,_iC_)}
          caml_call8
           (Ppx_inline_test_lib_Runtime[4],
            Inline_test_config,
            cst_Int_Set_equal_Caller_versions_Callee_ve,
            0,
            cst_src_versioned_rpc_ml$10,
            1196,
            6,
            74,
            _ix_);
          function Register(Version)
           {var
             version=Version[1],
             bin_shape_query=Version[2],
             bin_size_query=Version[3],
             bin_write_query=Version[4],
             bin_writer_query=Version[5],
             bin_read_query=Version[6],
             bin_read_query$0=Version[7],
             bin_reader_query=Version[8],
             bin_query=Version[9],
             bin_shape_response=Version[10],
             bin_size_response=Version[11],
             bin_write_response=Version[12],
             bin_writer_response=Version[13],
             bin_read_response=Version[14],
             bin_read_response$0=Version[15],
             bin_reader_response=Version[16],
             bin_response=Version[17],
             callee_model_of_query=Version[19],
             response_of_callee_model=Version[20];
            caml_call1
             (Callee[6],
              [0,
               bin_shape_query,
               bin_size_query,
               bin_write_query,
               bin_writer_query,
               bin_read_query,
               bin_read_query$0,
               bin_reader_query,
               bin_query,
               bin_shape_response,
               bin_size_response,
               bin_write_response,
               bin_writer_response,
               bin_read_response,
               bin_read_response$0,
               bin_reader_response,
               bin_response,
               version,
               callee_model_of_query,
               response_of_callee_model]);
            var
             version$0=Version[1],
             bin_shape_query$0=Version[2],
             bin_size_query$0=Version[3],
             bin_write_query$0=Version[4],
             bin_writer_query$0=Version[5],
             bin_read_query$1=Version[6],
             bin_read_query$2=Version[7],
             bin_reader_query$0=Version[8],
             bin_query$0=Version[9],
             bin_shape_response$0=Version[10],
             bin_size_response$0=Version[11],
             bin_write_response$0=Version[12],
             bin_writer_response$0=Version[13],
             bin_read_response$1=Version[14],
             bin_read_response$2=Version[15],
             bin_reader_response$0=Version[16],
             bin_response$0=Version[17],
             query_of_caller_model=Version[18],
             caller_model_of_response=Version[21],
             include=
              caml_call1
               (Caller[7],
                [0,
                 bin_shape_query$0,
                 bin_size_query$0,
                 bin_write_query$0,
                 bin_writer_query$0,
                 bin_read_query$1,
                 bin_read_query$2,
                 bin_reader_query$0,
                 bin_query$0,
                 bin_shape_response$0,
                 bin_size_response$0,
                 bin_write_response$0,
                 bin_writer_response$0,
                 bin_read_response$1,
                 bin_read_response$2,
                 bin_reader_response$0,
                 bin_response$0,
                 version$0,
                 query_of_caller_model,
                 caller_model_of_response]),
             _iy_=include[1];
            function _iz_(param)
             {var _iA_=caml_call1(Callee[5],0),_iB_=caml_call1(Caller[4],0);
              return caml_call2(Core_kernel_Int[121][26],_iB_,_iA_)}
            caml_call8
             (Ppx_inline_test_lib_Runtime[4],
              Inline_test_config,
              cst_Int_Set_equal_Caller_versions_Callee_ve$0,
              0,
              cst_src_versioned_rpc_ml$11,
              1218,
              8,
              76,
              _iz_);
            return [0,_iy_]}
          var dispatch_multi=Caller[5],implement_multi=Callee[3];
          function versions(param){return caml_call1(Caller[4],0)}
          function rpcs(param){return caml_call1(Caller[3],0)}
          return [0,
                  Register,
                  dispatch_multi,
                  implement_multi,
                  rpcs,
                  versions,
                  name]}],
       _f4_,
       _f3_,
       _f2_],
     _f6_=
      [0,
       function(_ip_)
        {var
          _iq_=Make$2(_ip_),
          _ir_=_iq_[1],
          _is_=_iq_[5],
          _it_=_iq_[4],
          _iu_=_iq_[3],
          _iv_=_iq_[6];
         return [0,
                 function(_iw_)
                  {return caml_call1
                           (_iv_,
                            [0,
                             _iw_[2],
                             _iw_[3],
                             _iw_[4],
                             _iw_[5],
                             _iw_[6],
                             _iw_[7],
                             _iw_[8],
                             _iw_[9],
                             _iw_[1],
                             _iw_[10]])},
                 _iu_,
                 _it_,
                 _is_,
                 _ir_]}],
     _f7_=
      [0,
       function(_in_)
        {var _io_=Make$1(_in_);
         return [0,_io_[7],_io_[6],_io_[3],_io_[4],_io_[5],_io_[1]]}],
     _f8_=
      [0,
       function(_ib_)
        {var
          _ic_=Make$0(_ib_),
          _id_=_ic_[1],
          _ie_=_ic_[7],
          _if_=_ic_[6],
          _ig_=_ic_[5],
          _ih_=_ic_[4],
          _ii_=_ic_[9];
         function _ij_(_im_){return [0,caml_call1(_ii_,_im_)[1]]}
         var _ik_=_ic_[10];
         return [0,
                 function(_il_){return [0,caml_call1(_ik_,_il_)[1]]},
                 _ij_,
                 _ih_,
                 _ig_,
                 _if_,
                 _ie_,
                 _id_]}],
     _f9_=
      [0,
       [0,
        [0,
         create$11,
         name$3,
         add_version,
         add_version_with_failure,
         add_rpc_version,
         add_rpc_version_with_failure,
         implement$7],
        function(_h5_)
         {var
           _h6_=Make(_h5_),
           _h7_=_h6_[1],
           _h8_=_h6_[5],
           _h9_=_h6_[4],
           _h__=_h6_[3],
           _h$_=_h6_[6];
          return [0,
                  function(_ia_)
                   {return caml_call1
                            (_h$_,
                             [0,
                              _ia_[2],
                              _ia_[3],
                              _ia_[4],
                              _ia_[5],
                              _ia_[6],
                              _ia_[7],
                              _ia_[8],
                              _ia_[9],
                              _ia_[10],
                              _ia_[11],
                              _ia_[12],
                              _ia_[13],
                              _ia_[14],
                              _ia_[15],
                              _ia_[16],
                              _ia_[17],
                              _ia_[1],
                              _ia_[18],
                              _ia_[19]])},
                  _h__,
                  _h9_,
                  _h8_,
                  _h7_]}],
       _f8_,
       _f7_,
       _f6_],
     _f__=
      [0,
       function(_hX_)
        {var
          _hY_=Make$7(_hX_),
          _hZ_=_hY_[1],
          _h0_=_hY_[4],
          _h1_=_hY_[3],
          _h2_=_hY_[5],
          _h3_=_hY_[6];
         return [0,
                 function(_h4_)
                  {return caml_call1
                           (_h3_,
                            [0,
                             _h4_[2],
                             _h4_[3],
                             _h4_[4],
                             _h4_[5],
                             _h4_[6],
                             _h4_[7],
                             _h4_[8],
                             _h4_[9],
                             _h4_[1],
                             _h4_[10]])},
                 _h2_,
                 _h1_,
                 _h0_,
                 _hZ_]}],
     _f$_=
      [0,
       function(_hV_)
        {var _hW_=Make$6(_hV_);
         return [0,_hW_[7],_hW_[6],_hW_[5],_hW_[3],_hW_[4],_hW_[1]]}],
     _ga_=
      [0,
       function(_hI_)
        {var
          _hJ_=Make$5(_hI_),
          _hK_=_hJ_[1],
          _hL_=_hJ_[4],
          _hM_=_hJ_[3],
          _hN_=_hJ_[7],
          _hO_=_hJ_[5],
          _hP_=_hJ_[6],
          _hQ_=_hJ_[9];
         function _hR_(_hU_){return [0,caml_call1(_hQ_,_hU_)[1]]}
         var _hS_=_hJ_[10];
         return [0,
                 function(_hT_){return [0,caml_call1(_hS_,_hT_)[1]]},
                 _hR_,
                 _hP_,
                 _hO_,
                 _hN_,
                 _hM_,
                 _hL_,
                 _hK_]}],
     _gb_=[0,create$13,create_directly,connection,menu],
     Async_rpc_kernel_Versioned_rpc=
      [0,
       [0,add$1,_fi_,request,supported_rpcs,supported_versions,create$12,_fk_],
       _gb_,
       [0,write$5,write_without_pushback$4,close$6,closed$1,is_closed$4],
       [0,
        [0,
         function(_hx_)
          {var
            _hy_=Make$4(_hx_),
            _hz_=_hy_[1],
            _hA_=_hy_[4],
            _hB_=_hy_[3],
            _hC_=_hy_[5],
            _hD_=_hy_[6];
           function _hE_(_hH_)
            {return caml_call1
                     (_hD_,
                      [0,
                       _hH_[2],
                       _hH_[3],
                       _hH_[4],
                       _hH_[5],
                       _hH_[6],
                       _hH_[7],
                       _hH_[8],
                       _hH_[9],
                       _hH_[10],
                       _hH_[11],
                       _hH_[12],
                       _hH_[13],
                       _hH_[14],
                       _hH_[15],
                       _hH_[16],
                       _hH_[17],
                       _hH_[1],
                       _hH_[18],
                       _hH_[19]])}
           var _hF_=_hy_[7];
           return [0,
                   function(_hG_)
                    {return caml_call1
                             (_hF_,
                              [0,
                               _hG_[2],
                               _hG_[3],
                               _hG_[4],
                               _hG_[5],
                               _hG_[6],
                               _hG_[7],
                               _hG_[8],
                               _hG_[9],
                               _hG_[10],
                               _hG_[11],
                               _hG_[12],
                               _hG_[13],
                               _hG_[14],
                               _hG_[15],
                               _hG_[16],
                               _hG_[17],
                               _hG_[1],
                               _hG_[18],
                               _hG_[19]])},
                   _hE_,
                   _hC_,
                   _hB_,
                   _hA_,
                   _hz_]}],
        _ga_,
        _f$_,
        _f__],
       _f9_,
       _f5_];
    caml_register_global
     (770,Async_rpc_kernel_Versioned_rpc,"Async_rpc_kernel__Versioned_rpc");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$47);
    caml_call1(Expect_test_collector[4][1],cst_src_pipe_transport_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$48,cst$16);
    function pipe_read(t,f)
     {function _hv_(param)
       {if(3456156 <= param)return caml_call1(f,3456156);
        var res=caml_call3(Async_kernel_Pipe[37],0,0,t);
        if(typeof res === "number")
         if(! (3456156 <= res))return pipe_read(t,f);
        return caml_call1(f,res)}
      var _hw_=caml_call1(Async_kernel_Pipe[43],t);
      return caml_call2(Async_kernel[20],_hw_,_hv_)}
    function create$14(pipe)
     {return [0,pipe,caml_call1(Core_kernel_Bigbuffer[2],Header[1])]}
    function Pipe_reader(Data)
     {function sexp_of_t(v)
       {var
         v_buffer=v[2],
         v_pipe=v[1],
         _hu_=Data[1],
         arg=caml_call1(Core_kernel_Bigbuffer[1],v_buffer),
         bnds=[0,[1,[0,_gc_,[0,arg,0]]],0],
         arg$0=caml_call2(Async_kernel_Pipe[4][1],_hu_,v_pipe),
         bnds$0=[0,[1,[0,_gd_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      function close(t)
       {caml_call1(Async_kernel_Pipe[15],t[1]);
        return Async_kernel_Deferred[18]}
      function is_closed(t){return caml_call1(Async_kernel_Pipe[16],t[1])}
      function read_forever(t,on_message,on_end_of_batch)
       {var buffer=t[2];
        function process_queue$0(counter,need,queue)
         {for(;;)
           {var match=caml_call1(Core_kernel_Queue[42],queue);
            if(match)
             {var
               data=match[1],
               buff_len=caml_call1(Core_kernel_Bigbuffer[12],buffer),
               data_len=caml_call1(Data[2],data);
              if(caml_call2(Core_kernel_Int[118][3],buff_len,0))
               if(caml_call2(Core_kernel_Int[118][1],data_len,need))
                {var _hq_=caml_call1(Data[4],data),_hr_=0;
                 if(counter < 50)
                  {var counter$0=counter + 1 | 0;
                   return process_data$0(counter$0,_hr_,_hq_,data_len,queue)}
                 return caml_trampoline_return
                         (process_data$0,[0,_hr_,_hq_,data_len,queue])}
              caml_call2(Data[3],buffer,data);
              var _hs_=caml_call1(Core_kernel_Bigbuffer[12],buffer);
              if(caml_call2(Core_kernel_Int[118][1],_hs_,need))
               {var
                 data$0=caml_call1(Core_kernel_Bigbuffer[22],buffer),
                 length=caml_call1(Core_kernel_Bigbuffer[12],buffer),
                 _ht_=0;
                if(counter < 50)
                 {var counter$1=counter + 1 | 0;
                  return process_data$0(counter$1,_ht_,data$0,length,queue)}
                return caml_trampoline_return
                        (process_data$0,[0,_ht_,data$0,length,queue])}
              continue}
            return caml_call1(Async_kernel[19],[1,need])}}
        function process_data$0(counter,pos,data,length,queue)
         {if(caml_call2(Core_kernel_Int[118][1],length,Header[1]))
           {var
             payload_len=caml_call2(Header[2],data,pos),
             total_len=Header[1] + payload_len | 0;
            if(caml_call2(Core_kernel_Int[118][1],length,total_len))
             {var
               continue_or_wait=
                caml_call3(on_message,data,pos + Header[1] | 0,payload_len);
              if
               (typeof continue_or_wait
                !==
                "number"
                &&
                0
                ===
                continue_or_wait[0])
               {var
                 x=continue_or_wait[1],
                 pos$0=pos + total_len | 0,
                 length$0=length - total_len | 0;
                set_buffer(pos$0,length$0,data);
                var
                 _ho_=
                  function(data){return caml_call2(Data[3],buffer,data)};
                caml_call2(Core_kernel_Queue[15],queue,_ho_);
                return caml_call1(Async_kernel[19],[0,x])}
              var
               _hm_=
                function(param)
                 {var
                   pos$0=pos + total_len | 0,
                   length$0=length - total_len | 0;
                  if(caml_call2(Core_kernel_Int[118][1],length$0,0))
                   return caml_call2(Core_kernel_Int[118][4],length$0,0)
                           ?process_data(pos$0,data,length$0,queue)
                           :set_buffer_and_process_queue(Header[1],pos$0,0,queue,data);
                  throw [0,Assert_failure,_ge_]};
              if(typeof continue_or_wait === "number")
               var _hn_=Async_kernel_Deferred[18];
              else
               {if(0 === continue_or_wait[0])throw [0,Assert_failure,_gf_];
                var d=continue_or_wait[1],_hn_=d}
              return caml_call2(Async_kernel[20],_hn_,_hm_)}
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return set_buffer_and_process_queue$0
                      (counter$0,total_len,pos,length,queue,data)}
            return caml_trampoline_return
                    (set_buffer_and_process_queue$0,
                     [0,total_len,pos,length,queue,data])}
          var _hp_=Header[1];
          if(counter < 50)
           {var counter$1=counter + 1 | 0;
            return set_buffer_and_process_queue$0
                    (counter$1,_hp_,pos,length,queue,data)}
          return caml_trampoline_return
                  (set_buffer_and_process_queue$0,
                   [0,_hp_,pos,length,queue,data])}
        function set_buffer_and_process_queue$0
         (counter,need,pos,length,queue,data)
         {set_buffer(pos,length,data);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return process_queue$0(counter$0,need,queue)}
          return caml_trampoline_return(process_queue$0,[0,need,queue])}
        function process_queue(need,queue)
         {return caml_trampoline(process_queue$0(0,need,queue))}
        function process_data(pos,data,length,queue)
         {return caml_trampoline(process_data$0(0,pos,data,length,queue))}
        function set_buffer_and_process_queue(need,pos,length,queue,data)
         {return caml_trampoline
                  (set_buffer_and_process_queue$0
                    (0,need,pos,length,queue,data))}
        function set_buffer(pos,length,data)
         {if(caml_call2(Core_kernel_Int[118][3],length,0))
           return caml_call1(Core_kernel_Bigbuffer[13],buffer);
          var data$0=caml_call3(Core_kernel_Bigstring[22],data,pos,length);
          caml_call1(Core_kernel_Bigbuffer[13],buffer);
          return caml_call2(Core_kernel_Bigbuffer[23],buffer,data$0)}
        function wait_for_read(need)
         {function _hk_(param)
           {if(typeof param === "number")
             return caml_call1(Async_kernel[19],_gg_);
            var queue=param[2],_hl_=process_queue(need,queue);
            return caml_call2(Async_kernel[20],_hl_,end_of_batch_and_continue)}
          return pipe_read(t[1],_hk_)}
        function end_of_batch_and_continue(next)
         {caml_call1(on_end_of_batch,0);
          if(0 === next[0])
           {var result=next[1];return caml_call1(Async_kernel[19],[0,result])}
          var need=next[1];
          return wait_for_read(need)}
        var
         need=Header[1],
         length=caml_call1(Core_kernel_Bigbuffer[12],buffer);
        if(caml_call2(Core_kernel_Int[104],length,need))
         return wait_for_read(need);
        var
         data=caml_call1(Core_kernel_Bigbuffer[22],buffer),
         _hj_=
          process_data(0,data,length,caml_call2(Core_kernel_Queue[60],0,0));
        return caml_call2(Async_kernel[20],_hj_,end_of_batch_and_continue)}
      var of_bigstring=Data[5],For_testing=[0,of_bigstring];
      return [0,sexp_of_t,close,is_closed,read_forever,For_testing]}
    function Pipe_writer(Data)
     {function sexp_of_t(v)
       {var
         v_monitor=v[2],
         v_pipe=v[1],
         _hi_=Data[1],
         arg=caml_call1(Async_kernel_Monitor[1],v_monitor),
         bnds=[0,[1,[0,_gh_,[0,arg,0]]],0],
         arg$0=caml_call2(Async_kernel_Pipe[3][1],_hi_,v_pipe),
         bnds$0=[0,[1,[0,_gi_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      function close(t)
       {caml_call1(Async_kernel_Pipe[14],t[1]);
        return Async_kernel_Deferred[18]}
      function is_closed(t){return caml_call1(Async_kernel_Pipe[16],t[1])}
      function monitor(t){return t[2]}
      function bytes_to_write(param){return 0}
      function stopped(t){return caml_call1(Async_kernel_Pipe[17],t[1])}
      function flushed(param){return Async_kernel_Deferred[18]}
      function sent_result(x){return [0,x]}
      function check_closed(t,f)
       {return caml_call1(Async_kernel_Pipe[16],t[1])?0:caml_call1(f,0)}
      function send_bin_prot(t,writer,x)
       {return check_closed
                (t,
                 function(param)
                  {var
                    buf=caml_call3(Bin_prot_Utils[4],_gj_,writer,x),
                    _hh_=caml_call1(Data[5],buf);
                   caml_call2(Async_kernel_Pipe[27],t[1],_hh_);
                   return [0,0]})}
      function send_bin_prot_and_bigstring(t,writer,x,buf,pos,payload_size)
       {return check_closed
                (t,
                 function(param)
                  {var
                    data_size=caml_call1(writer[1],x),
                    data=
                     caml_call2
                      (Core_kernel_Bigstring[110],
                       0,
                       (data_size + Header[1] | 0) + payload_size | 0);
                   caml_call3(Header[3],data,0,data_size + payload_size | 0);
                   var dst_pos=caml_call3(writer[2],data,Header[1],x);
                   caml_call5
                    (Core_kernel_Bigstring[19],
                     buf,
                     pos,
                     data,
                     dst_pos,
                     payload_size);
                   var _hg_=caml_call1(Data[5],data);
                   caml_call2(Async_kernel_Pipe[27],t[1],_hg_);
                   return [0,0]})}
      function send_bin_prot_and_bigstring_non_copying(t,writer,x,buf,pos,len)
       {var r=send_bin_prot_and_bigstring(t,writer,x,buf,pos,len);
        if(typeof r !== "number" && 0 === r[0])
         return [0,Async_kernel_Deferred[18]];
        return r}
      return [0,
              sexp_of_t,
              close,
              is_closed,
              monitor,
              bytes_to_write,
              stopped,
              flushed,
              flushed,
              sent_result,
              check_closed,
              send_bin_prot,
              send_bin_prot_and_bigstring,
              send_bin_prot_and_bigstring_non_copying]}
    var
     sexp_of_t$15=Core_kernel_Bigstring[3],
     length$1=Core_kernel_Bigstring[18],
     add_to_bigbuffer=Core_kernel_Bigbuffer[23];
    function to_bigstring(x){return x}
    function of_bigstring(x){return x}
    var
     Bigstring_data=
      [0,sexp_of_t$15,length$1,add_to_bigbuffer,to_bigstring,of_bigstring],
     sexp_of_t$16=Core_kernel_String[97],
     length$2=caml_ml_string_length,
     add_to_bigbuffer$0=Core_kernel_Bigbuffer[16];
    function to_bigstring$0(x)
     {return caml_call3(Core_kernel_Bigstring[11],0,0,x)}
    function of_bigstring$0(x)
     {return caml_call3(Core_kernel_Bigstring[13],0,0,x)}
    var
     String_data=
      [0,
       sexp_of_t$16,
       length$2,
       add_to_bigbuffer$0,
       to_bigstring$0,
       of_bigstring$0],
     Bigstring_pipe_reader=Pipe_reader(Bigstring_data),
     Bigstring_pipe_writer=Pipe_writer(Bigstring_data),
     String_pipe_reader=Pipe_reader(String_data),
     String_pipe_writer=Pipe_writer(String_data),
     Kind=[0,0,1];
    function create$15(kind,reader$0,writer$0)
     {var
       writer=[0,writer$0,caml_call4(Async_kernel_Monitor[3],0,0,0,0)],
       _he_=
        0 === kind
         ?caml_call2
           (_bY_[12],
            [0,
             String_pipe_writer[1],
             String_pipe_writer[2],
             String_pipe_writer[3],
             String_pipe_writer[4],
             String_pipe_writer[5],
             String_pipe_writer[6],
             String_pipe_writer[7],
             String_pipe_writer[8],
             String_pipe_writer[11],
             String_pipe_writer[12],
             String_pipe_writer[13]],
            writer)
         :caml_call2
           (_bY_[12],
            [0,
             Bigstring_pipe_writer[1],
             Bigstring_pipe_writer[2],
             Bigstring_pipe_writer[3],
             Bigstring_pipe_writer[4],
             Bigstring_pipe_writer[5],
             Bigstring_pipe_writer[6],
             Bigstring_pipe_writer[7],
             Bigstring_pipe_writer[8],
             Bigstring_pipe_writer[11],
             Bigstring_pipe_writer[12],
             Bigstring_pipe_writer[13]],
            writer),
       reader=create$14(reader$0),
       _hf_=
        0 === kind
         ?caml_call2
           (_bZ_[5],
            [0,
             String_pipe_reader[1],
             String_pipe_reader[2],
             String_pipe_reader[3],
             String_pipe_reader[4]],
            reader)
         :caml_call2
           (_bZ_[5],
            [0,
             Bigstring_pipe_reader[1],
             Bigstring_pipe_reader[2],
             Bigstring_pipe_reader[3],
             Bigstring_pipe_reader[4]],
            reader);
      return [0,_hf_,_he_]}
    function Test_reader(Transport_reader)
     {var expect=caml_call3(Core_kernel_Bigstring[11],0,0,cst_FOOBAR123);
      function create_message_buf(message)
       {var
         message_len=caml_call1(Core_kernel_Bigstring[18],message),
         buf=
          caml_call2(Core_kernel_Bigstring[110],0,Header[1] + message_len | 0);
        caml_call3(Header[3],buf,0,message_len);
        caml_call5
         (Core_kernel_Bigstring[19],message,0,buf,Header[1],message_len);
        return buf}
      function create_message(param){return create_message_buf(expect)}
      function on_message(opt,on_message_count,buffer,pos$0,len)
       {if(opt)var sth=opt[1],message=sth;else var message=expect;
        on_message_count[1] = on_message_count[1] + 1 | 0;
        var
         got=caml_call3(Core_kernel_Bigstring[22],buffer,pos$0,len),
         sexpifier=Core_kernel_Bigstring[3],
         comparator=Core_kernel_Bigstring[1];
        caml_call8
         (Ppx_assert_lib_Runtime[3],
          pos,
          sexpifier,
          comparator,
          0,
          0,
          0,
          message,
          got);
        return 0}
      function on_end_of_batch(on_end_of_batch_count,param)
       {on_end_of_batch_count[1]++;return 0}
      function wait(param)
       {return caml_call1(Async_kernel_Async_kernel_scheduler[32][1],0)}
      function run_test(run,verify)
       {var
         match=caml_call1(Async_kernel_Pipe[8],0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader),
         on_message_count=[0,0],
         on_end_of_batch_count=[0,0],
         _g__=0;
        function on_message$0(_hb_,_hc_,_hd_)
         {return on_message(_g__,on_message_count,_hb_,_hc_,_hd_)}
        function on_end_of_batch$0(_ha_)
         {return on_end_of_batch(on_end_of_batch_count,_ha_)}
        caml_call3
         (Transport_reader[5],reader$0,on_message$0,on_end_of_batch$0);
        wait(0);
        caml_call1
         (run,
          function(x)
           {var _g$_=caml_call1(Transport_reader[1][1],x);
            return caml_call2(Async_kernel_Pipe[27],writer,_g$_)});
        wait(0);
        return caml_call2(verify,on_message_count,on_end_of_batch_count)}
      function verify
       (on_message_count,on_end_of_batch_count,message_count,expect)
       {var sexpifier=Core_kernel[339],comparator=Core_kernel[335];
        caml_call8
         (Ppx_assert_lib_Runtime[3],
          pos$0,
          sexpifier,
          comparator,
          0,
          0,
          0,
          message_count,
          on_message_count[1]);
        var sexpifier$0=Core_kernel[339],comparator$0=Core_kernel[335];
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$1,
                 sexpifier$0,
                 comparator$0,
                 0,
                 0,
                 0,
                 expect,
                 on_end_of_batch_count[1])}
      function write_1_msg_1_chunk(write)
       {return caml_call1(write,create_message(0))}
      function write_1_msg_3_chunk(write)
       {var
         buf=
          create_message_buf(caml_call3(Core_kernel_Bigstring[11],0,0,cst$17)),
         _g9_=caml_call1(Core_kernel_Bigstring[18],expect);
        caml_call3(Header[3],buf,0,_g9_);
        caml_call1(write,buf);
        wait(0);
        var
         msg_len=caml_call1(Core_kernel_Bigstring[18],expect),
         split_at=msg_len / 2 | 0,
         part1=caml_call3(Core_kernel_Bigstring[22],expect,0,split_at),
         part2=
          caml_call3
           (Core_kernel_Bigstring[22],expect,split_at,msg_len - split_at | 0);
        caml_call1(write,part1);
        wait(0);
        return caml_call1(write,part2)}
      function write_2_msg_1_chunk(write)
       {var
         one_msg=create_message_buf(expect),
         two_msg=
          caml_call2(Core_kernel_Bigstring[15],0,[0,one_msg,[0,one_msg,0]]);
        return caml_call1(write,two_msg)}
      function write_2_msg_one_byte_at_a_time_34_chunk(write)
       {var
         one_msg=create_message_buf(expect),
         two_msg=
          caml_call2(Core_kernel_Bigstring[15],0,[0,one_msg,[0,one_msg,0]]),
         _g7_=caml_call1(Core_kernel_Bigstring[18],two_msg) - 1 | 0,
         _g6_=0;
        if(! (_g7_ < 0))
         {var i=_g6_;
          for(;;)
           {caml_call1
             (write,caml_call3(Core_kernel_Bigstring[22],two_msg,i,1));
            wait(0);
            var _g8_=i + 1 | 0;
            if(_g7_ !== i){var i=_g8_;continue}
            break}}
        return 0}
      function _gH_(param)
       {return run_test
                (write_1_msg_1_chunk,
                 function(_g4_)
                  {return function(_g5_){return verify(_g4_,_g5_,1,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_1_msg_1_chunk_verify_1_1,
        0,
        cst_src_pipe_transport_ml$0,
        385,
        2,
        61,
        _gH_);
      function _gI_(param)
       {function f(write)
         {write_1_msg_1_chunk(write);return write_1_msg_1_chunk(write)}
        return run_test
                (f,
                 function(_g2_)
                  {return function(_g3_){return verify(_g2_,_g3_,2,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_f_verify_2_1,
        0,
        cst_src_pipe_transport_ml$1,
        387,
        2,
        137,
        _gI_);
      function _gJ_(param)
       {return run_test
                (write_1_msg_3_chunk,
                 function(_g0_)
                  {return function(_g1_){return verify(_g0_,_g1_,1,3)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_1_msg_3_chunk_verify_1_3,
        0,
        cst_src_pipe_transport_ml$2,
        394,
        2,
        65,
        _gJ_);
      function _gK_(param)
       {return run_test
                (write_2_msg_1_chunk,
                 function(_gY_)
                  {return function(_gZ_){return verify(_gY_,_gZ_,2,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_2_msg_1_chunk_verify_2_1,
        0,
        cst_src_pipe_transport_ml$3,
        397,
        2,
        65,
        _gK_);
      function _gL_(param)
       {return run_test
                (write_2_msg_one_byte_at_a_time_34_chunk,
                 function(_gW_)
                  {return function(_gX_){return verify(_gW_,_gX_,2,34)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_2_msg_one_byte_at_a_time_34_ch,
        0,
        cst_src_pipe_transport_ml$4,
        400,
        2,
        86,
        _gL_);
      function _gM_(param)
       {function f(write)
         {caml_call1(write,create_message(0));
          wait(0);
          write_1_msg_3_chunk(write);
          wait(0);
          write_2_msg_1_chunk(write);
          wait(0);
          write_2_msg_one_byte_at_a_time_34_chunk(write);
          wait(0);
          return caml_call1(write,create_message(0))}
        return run_test
                (f,
                 function(_gU_)
                  {return function(_gV_){return verify(_gU_,_gV_,7,40)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_f_verify_7_40,
        0,
        cst_src_pipe_transport_ml$5,
        403,
        2,
        322,
        _gM_);
      function _gN_(param)
       {var
         match=caml_call1(Async_kernel_Pipe[8],0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader);
        function on_end_of_batch(param){return 0}
        function write(x)
         {var _gT_=caml_call1(Transport_reader[1][1],x);
          return caml_call2(Async_kernel_Pipe[27],writer,_gT_)}
        var num=[0,0];
        function stop_after_on_message(buffer,pos,len)
         {num[1]++;
          var
           got=caml_call3(Core_kernel_Bigstring[22],buffer,pos,len),
           sexpifier=Core_kernel_Bigstring[3],
           comparator=Core_kernel_Bigstring[1];
          caml_call8
           (Ppx_assert_lib_Runtime[3],
            pos$2,
            sexpifier,
            comparator,
            0,
            0,
            0,
            expect,
            got);
          return _gk_}
        write_2_msg_1_chunk(write);
        caml_call1(Async_kernel_Pipe[14],writer);
        function _gO_(x)
         {if(caml_call1(Core_kernel_Result[27],x))
           {var
             _gR_=
              function(x)
               {if(caml_call1(Core_kernel_Result[27],x))
                 return Async_kernel_Deferred[18];
                throw [0,Assert_failure,_gl_]},
             _gS_=
              caml_call3
               (Transport_reader[5],
                reader$0,
                stop_after_on_message,
                on_end_of_batch);
            return caml_call2(Async_kernel[20],_gS_,_gR_)}
          throw [0,Assert_failure,_gm_]}
        var
         _gP_=
          caml_call3
           (Transport_reader[5],
            reader$0,
            stop_after_on_message,
            on_end_of_batch),
         _gQ_=caml_call2(Async_kernel[20],_gP_,_gO_);
        caml_call1(Async_kernel[6],_gQ_);
        wait(0);
        var sexpifier=Core_kernel_Int[96],comparator=Core_kernel_Int[107];
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$3,
                 sexpifier,
                 comparator,
                 0,
                 0,
                 0,
                 2,
                 num[1])}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_can_call_read_forever_multiple_times,
        0,
        cst_src_pipe_transport_ml$6,
        422,
        2,
        936,
        _gN_);
      return [0,
              expect,
              create_message_buf,
              create_message,
              on_message,
              on_end_of_batch,
              wait,
              run_test,
              verify,
              write_1_msg_1_chunk,
              write_1_msg_3_chunk,
              write_2_msg_1_chunk,
              write_2_msg_one_byte_at_a_time_34_chunk]}
    function _gn_(param)
     {Test_reader
       ([0,
         String_pipe_reader[5],
         String_pipe_reader[1],
         String_pipe_reader[2],
         String_pipe_reader[3],
         String_pipe_reader[4]]);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst_Test_reader_string,
      0,
      cst_src_pipe_transport_ml$7,
      451,
      0,
      81,
      _gn_);
    function _go_(param)
     {Test_reader
       ([0,
         Bigstring_pipe_reader[5],
         Bigstring_pipe_reader[1],
         Bigstring_pipe_reader[2],
         Bigstring_pipe_reader[3],
         Bigstring_pipe_reader[4]]);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst_Test_reader_bigstring,
      0,
      cst_src_pipe_transport_ml$8,
      453,
      0,
      84,
      _go_);
    function Bench_reader(Transport_reader)
     {var
       default_message=
        caml_call3(Core_kernel_Bigstring[11],0,0,cst_FOOBAR123$0);
      function create_message_buf(message)
       {var
         message_len=caml_call1(Core_kernel_Bigstring[18],message),
         buf=
          caml_call2(Core_kernel_Bigstring[110],0,Header[1] + message_len | 0);
        caml_call3(Header[3],buf,0,message_len);
        caml_call5
         (Core_kernel_Bigstring[19],message,0,buf,Header[1],message_len);
        return buf}
      function create_message(param)
       {return create_message_buf(default_message)}
      var
       one_message=create_message(0),
       two_messages=
        caml_call2
         (Core_kernel_Bigstring[15],0,[0,one_message,[0,one_message,0]]),
       msg_len=caml_call1(Core_kernel_Bigstring[18],one_message),
       split_at=msg_len / 2 | 0,
       one_message_p1=
        caml_call3(Core_kernel_Bigstring[22],one_message,0,split_at),
       one_message_p2=
        caml_call3
         (Core_kernel_Bigstring[22],
          one_message,
          split_at,
          msg_len - split_at | 0);
      function on_message(buffer,param,_gG_){return 0}
      function on_end_of_batch(param){return 0}
      function wait(param)
       {return caml_call1(Async_kernel_Async_kernel_scheduler[32][1],0)}
      function run_test(run)
       {var
         match=caml_call1(Async_kernel_Pipe[8],0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader);
        caml_call3(Transport_reader[5],reader$0,on_message,on_end_of_batch);
        wait(0);
        var for$0=0;
        for(;;)
         {caml_call1
           (run,
            function(x)
             {var _gF_=caml_call1(Transport_reader[1][1],x);
              return caml_call2(Async_kernel_Pipe[27],writer,_gF_)});
          var _gE_=for$0 + 1 | 0;
          if(100 !== for$0){var for$0=_gE_;continue}
          return wait(0)}}
      function write_1_msg_1_chunk(write)
       {return caml_call1(write,one_message)}
      var
       buf=
        create_message_buf(caml_call3(Core_kernel_Bigstring[11],0,0,cst$18));
      function write_1_msg_3_chunk(write)
       {var _gD_=caml_call1(Core_kernel_Bigstring[18],one_message);
        caml_call3(Header[3],buf,0,_gD_);
        caml_call1(write,buf);
        caml_call1(write,one_message_p1);
        return caml_call1(write,one_message_p2)}
      function write_2_msg_1_chunk(write)
       {return caml_call1(write,two_messages)}
      function write_2_msg_one_byte_at_a_time_34_chunk(write)
       {var
         _gB_=caml_call1(Core_kernel_Bigstring[18],two_messages) - 1 | 0,
         _gA_=0;
        if(! (_gB_ < 0))
         {var i=_gA_;
          for(;;)
           {caml_call1
             (write,caml_call3(Core_kernel_Bigstring[22],two_messages,i,1));
            var _gC_=i + 1 | 0;
            if(_gB_ !== i){var i=_gC_;continue}
            break}}
        return 0}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var f=function(param,_gz_){return run_test(write_1_msg_1_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_1_msg_1_chunk,
          cst_run_test_write_1_msg_1_chunk,
          cst_src_pipe_transport_ml$9,
          cst_src_pipe_transport_ml_Bench_reader,
          525,
          2,
          64,
          [0,f])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var
         f$0=
          function(param,_gy_)
           {function f(write)
             {write_1_msg_1_chunk(write);return write_1_msg_1_chunk(write)}
            return run_test(f)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_2_msg_1_chunk,
          cst_let_f_write_write_1_msg_1_chunk_write_write_1_msg_1_chunk_write_in_run_test_f,
          cst_src_pipe_transport_ml$10,
          cst_src_pipe_transport_ml_Bench_reader$0,
          527,
          2,
          140,
          [0,f$0])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var f$1=function(param,_gx_){return run_test(write_1_msg_3_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_1_msg_3_chunk,
          cst_run_test_write_1_msg_3_chunk,
          cst_src_pipe_transport_ml$11,
          cst_src_pipe_transport_ml_Bench_reader$1,
          534,
          2,
          68,
          [0,f$1])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var f$2=function(param,_gw_){return run_test(write_2_msg_1_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_2_msg_1_chunk$0,
          cst_run_test_write_2_msg_1_chunk,
          cst_src_pipe_transport_ml$12,
          cst_src_pipe_transport_ml_Bench_reader$2,
          537,
          2,
          68,
          [0,f$2])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var
         f$3=
          function(param,_gv_)
           {return run_test(write_2_msg_one_byte_at_a_time_34_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_2_msg_one_byte,
          cst_run_test_write_2_msg_one_byte_at_a_time_34_chunk,
          cst_src_pipe_transport_ml$13,
          cst_src_pipe_transport_ml_Bench_reader$3,
          540,
          2,
          89,
          [0,f$3])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var
         f$4=
          function(param,_gu_)
           {function f(write)
             {caml_call1(write,create_message(0));
              write_1_msg_3_chunk(write);
              write_2_msg_1_chunk(write);
              write_2_msg_one_byte_at_a_time_34_chunk(write);
              return caml_call1(write,create_message(0))}
            return run_test(f)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_multi,
          cst_let_f_write_write_create_message_write_1_msg_3_chunk_write_write_2_msg_1_chunk_write_write_2_msg_one_byte_at_a_time_34_chunk_write_write_create_message_in_run_test_f,
          cst_src_pipe_transport_ml$14,
          cst_src_pipe_transport_ml_Bench_reader$4,
          543,
          2,
          246,
          [0,f$4])}
      return [0,
              default_message,
              create_message_buf,
              create_message,
              one_message,
              two_messages,
              one_message_p1,
              one_message_p2,
              on_message,
              on_end_of_batch,
              wait,
              run_test,
              write_1_msg_1_chunk,
              buf,
              write_1_msg_3_chunk,
              write_2_msg_1_chunk,
              write_2_msg_one_byte_at_a_time_34_chunk]}
    if(Ppx_bench_lib_Benchmark_accumulator[3])
     {var
       _gp_=
        function(param)
         {Bench_reader
           ([0,
             String_pipe_reader[5],
             String_pipe_reader[1],
             String_pipe_reader[2],
             String_pipe_reader[3],
             String_pipe_reader[4]]);
          return 0};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumulator[6],
        cst_Test_reader_string$0,
        cst$19,
        cst_src_pipe_transport_ml$16,
        cst_src_pipe_transport_ml$15,
        554,
        0,
        83,
        _gp_)}
    if(Ppx_bench_lib_Benchmark_accumulator[3])
     {var
       _gq_=
        function(param)
         {Bench_reader
           ([0,
             Bigstring_pipe_reader[5],
             Bigstring_pipe_reader[1],
             Bigstring_pipe_reader[2],
             Bigstring_pipe_reader[3],
             Bigstring_pipe_reader[4]]);
          return 0};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumulator[6],
        cst_Test_reader_bigstring$0,
        cst$20,
        cst_src_pipe_transport_ml$18,
        cst_src_pipe_transport_ml$17,
        556,
        0,
        86,
        _gq_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Pipe_transport=[0,Kind,create$15];
    caml_register_global
     (774,Async_rpc_kernel_Pipe_transport,"Async_rpc_kernel__Pipe_transport");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$50);
    caml_call1(Expect_test_collector[4][1],cst_src_persistent_connection_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$51,cst$21);
    var Make$8=include$6[1],rpc_connection=_gb_[3];
    function close$7(t)
     {var _gt_=caml_call1(rpc_connection,t);
      return caml_call3(_e3_[8],0,0,_gt_)}
    function is_closed$5(t)
     {var _gs_=caml_call1(rpc_connection,t);return caml_call1(_e3_[11],_gs_)}
    function close_finished$0(t)
     {var _gr_=caml_call1(rpc_connection,t);return caml_call1(_e3_[9],_gr_)}
    var
     Versioned_rpc=
      caml_call1
       (Make$8,
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$7,
         is_closed$5,
         close_finished$0]);
    function close$8(t){return caml_call3(_e3_[8],0,0,t)}
    function is_closed$6(t){return caml_call1(_e3_[11],t)}
    function close_finished$1(t){return caml_call1(_e3_[9],t)}
    var
     Rpc$0=
      caml_call1
       (Make$8,
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$8,
         is_closed$6,
         close_finished$1]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Persistent_connection=[0,Rpc$0,Versioned_rpc];
    caml_register_global
     (777,
      Async_rpc_kernel_Persistent_connection,
      "Async_rpc_kernel__Persistent_connection");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$53);
    caml_call1(Expect_test_collector[4][1],cst_src_async_rpc_kernel_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$54,cst$22);
    var
     Async_rpc_kernel_stable=[0],
     Async_rpc_kernel_private=[0,default_handshake_timeout];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel$0=
      [0,Async_rpc_kernel_stable,Async_rpc_kernel_private];
    caml_register_global(778,Async_rpc_kernel$0,"Async_rpc_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19ycGNfa2VybmVsLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
