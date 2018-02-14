var searchIndex = {};
searchIndex["rocket_cors"] = {"doc":"Build Status Dependency Status Repository Crates.io","items":[[3,"Method","rocket_cors","A wrapper type around `rocket::http::Method` to support serialization and deserialization",null,null],[3,"Cors","","Response generator and Fairing for CORS",null,null],[12,"allowed_origins","","Origins that are allowed to make requests. Will be verified against the `Origin` request header.",0,null],[12,"allowed_methods","","The list of methods which the allowed origins are allowed to access for non-simple requests.",0,null],[12,"allowed_headers","","The list of header field names which can be used when this resource is accessed by allowed origins.",0,null],[12,"allow_credentials","","Allows users to make authenticated requests. If true, injects the `Access-Control-Allow-Credentials` header in responses. This allows cookies and credentials to be submitted across domains.",0,null],[12,"expose_headers","","The list of headers which are safe to expose to the API of a CORS API specification. This corresponds to the `Access-Control-Expose-Headers` responde header.",0,null],[12,"max_age","","The maximum time for which this CORS request maybe cached. This value is set as the `Access-Control-Max-Age` header.",0,null],[12,"send_wildcard","","If true, and the `allowed_origins` parameter is `All`, a wildcard `Access-Control-Allow-Origin` response header is sent, rather than the request’s `Origin` header.",0,null],[12,"fairing_route_base","","When used as Fairing, Cors will need to redirect failed CORS checks to a custom route mounted by the fairing. Specify the base of the route so that it doesn't clash with any of your existing routes.",0,null],[12,"fairing_route_rank","","When used as Fairing, Cors will need to redirect failed CORS checks to a custom route mounted by the fairing. Specify the rank of the route so that it doesn't clash with any of your existing routes. Remember that a higher ranked route has lower priority.",0,null],[3,"Guard","","A request guard to check CORS headers before a route is run. Will not execute the route if checks fail.",null,null],[3,"Responder","","A `Responder` which will simply wraps another `Responder` with CORS headers.",null,null],[3,"ManualResponder","","A Manual Responder used in the \"truly manual\" mode of operation.",null,null],[4,"Error","","Errors during operations",null,null],[13,"MissingOrigin","","The HTTP request header `Origin` is required but was not provided",1,null],[13,"BadOrigin","","The HTTP request header `Origin` could not be parsed correctly.",1,null],[13,"MissingRequestMethod","","The request header `Access-Control-Request-Method` is required but is missing",1,null],[13,"BadRequestMethod","","The request header `Access-Control-Request-Method` has an invalid value",1,null],[13,"MissingRequestHeaders","","The request header `Access-Control-Request-Headers`  is required but is missing.",1,null],[13,"OriginNotAllowed","","Origin is not allowed to make this request",1,null],[13,"MethodNotAllowed","","Requested method is not allowed",1,null],[13,"HeadersNotAllowed","","One or more headers requested are not allowed",1,null],[13,"CredentialsWithWildcardOrigin","","Credentials are allowed, but the Origin is set to \"*\". This is not allowed by W3C",1,null],[13,"MissingCorsInRocketState","","A CORS Request Guard was used, but no CORS Options was available in Rocket's state",1,null],[13,"MissingInjectedHeader","","The `on_response` handler of Fairing could not find the injected header from the Request. Either some other fairing has removed it, or this is a bug.",1,null],[13,"UnknownInjectedHeader","","The `on_response` handler of Fairing found an unknown injected header value from the Request. Either some other fairing has modified it, or this is a bug.",1,null],[4,"AllOrSome","","An enum signifying that some of type T is allowed, or `All` (everything is allowed).",null,null],[13,"All","","Everything is allowed. Usually equivalent to the \"*\" value.",2,null],[13,"Some","","Only some of `T` is allowed",2,null],[5,"catch_all_options_routes","","Returns \"catch all\" OPTIONS routes that you can mount to catch all OPTIONS request. Only works if you have put a `Cors` struct into Rocket's managed state.",null,{"inputs":[],"output":{"generics":["route"],"name":"vec"}}],[11,"info","","",0,{"inputs":[{"name":"self"}],"output":{"name":"info"}}],[11,"on_attach","","",0,{"inputs":[{"name":"self"},{"name":"rocket"}],"output":{"generics":["rocket","rocket"],"name":"result"}}],[11,"on_request","","",0,{"inputs":[{"name":"self"},{"name":"request"},{"name":"data"}],"output":null}],[11,"on_response","","",0,{"inputs":[{"name":"self"},{"name":"request"},{"name":"response"}],"output":null}],[0,"headers","","CORS specific Request Headers",null,null],[3,"HeaderFieldName","rocket_cors::headers","A case insensitive header name",null,null],[3,"Url","","A wrapped `url::Url` to allow for deserialization",null,null],[3,"AccessControlRequestMethod","","The `Access-Control-Request-Method` request header",null,null],[12,"0","","",3,null],[3,"AccessControlRequestHeaders","","The `Access-Control-Request-Headers` request header",null,null],[12,"0","","",4,null],[6,"HeaderFieldNamesSet","","A set of case insensitive header names",null,null],[6,"Origin","","The `Origin` request header used in CORS",null,null],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"headerfieldname"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"self"},{"name":"headerfieldname"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"headerfieldname"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",5,null],[11,"deref","","",5,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",5,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",5,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from_str","","",5,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"url"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"self"},{"name":"url"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"url"}}],[11,"hash","","",6,null],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deref","","",6,null],[11,"from_str","","",6,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_request","","",6,{"inputs":[{"name":"request"}],"output":{"generics":["error"],"name":"outcome"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",3,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_request","","",3,{"inputs":[{"name":"request"}],"output":{"generics":["error"],"name":"outcome"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"accesscontrolrequestheaders"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"accesscontrolrequestheaders"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","Will never fail",4,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_request","","",4,{"inputs":[{"name":"request"}],"output":{"generics":["error"],"name":"outcome"}}],[11,"serialize","rocket_cors","",7,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",7,{"inputs":[{"name":"d"}],"output":{"generics":["method"],"name":"result"}}],[6,"AllowedOrigins","","A list of allowed origins. Either Some origins are allowed, or all origins are allowed.",null,null],[6,"AllowedMethods","","A list of allowed methods",null,null],[6,"AllowedHeaders","","A list of allowed headers",null,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"respond_to","","",1,{"inputs":[{"name":"self"},{"name":"request"}],"output":{"generics":["response","status"],"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"allorsome"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"allorsome"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"allorsome"}],"output":{"name":"bool"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"self"}}],[11,"is_all","","Returns whether this is an `All` variant",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_some","","Returns whether this is a `Some` variant",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"new_from_str_list","","New `AllOrSome` from a list of URL strings. Returns a tuple where the first element is the struct `AllOrSome`, and the second element is a map of strings which failed to parse into URLs and their associated parse errors.",2,null],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"method"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"method"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"self"},{"name":"method"}],"output":{"name":"bool"}}],[11,"hash","","",7,null],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",7,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"deref","","",7,null],[11,"from","","",7,{"inputs":[{"name":"method"}],"output":{"name":"self"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"some","","Allows some origins",8,null],[11,"all","","Allows all origins",8,{"inputs":[],"output":{"name":"self"}}],[11,"some","","Allow some headers",9,null],[11,"all","","Allows all headers",9,{"inputs":[],"output":{"name":"self"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"cors"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"cors"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"cors"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"self"}}],[11,"validate","","Validates if any of the settings are disallowed or incorrect",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"result"}}],[11,"respond_owned","","Manually respond to a request with CORS checks and headers using an Owned `Cors`.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"generics":["manualresponder","error"],"name":"result"}}],[11,"respond_borrowed","","Manually respond to a request with CORS checks and headers using a borrowed `Cors`.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"generics":["manualresponder","error"],"name":"result"}}],[11,"responder","","Consumes the Guard and return  a `Responder` that wraps a provided `rocket:response::Responder` with CORS headers",10,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"responder"}}],[11,"response","","Merge a `rocket::Response` with this CORS Guard. This is usually used in the final step of a route to return a value for the route.",10,{"inputs":[{"name":"self"},{"name":"response"}],"output":{"name":"response"}}],[11,"from_request","","",10,{"inputs":[{"name":"request"}],"output":{"name":"outcome"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"respond_to","","",11,{"inputs":[{"name":"self"},{"name":"request"}],"output":{"name":"result"}}],[11,"respond_to","","",12,{"inputs":[{"name":"self"},{"name":"request"}],"output":{"name":"result"}}]],"paths":[[3,"Cors"],[4,"Error"],[4,"AllOrSome"],[3,"AccessControlRequestMethod"],[3,"AccessControlRequestHeaders"],[3,"HeaderFieldName"],[3,"Url"],[3,"Method"],[6,"AllowedOrigins"],[6,"AllowedHeaders"],[3,"Guard"],[3,"Responder"],[3,"ManualResponder"]]};
initSearch(searchIndex);
