(function() {var implementors = {};
implementors["rocket_cors"] = ["impl&lt;'r&gt; <a class=\"trait\" href=\"https://api.rocket.rs/rocket/response/responder/trait.Responder.html\" title=\"trait rocket::response::responder::Responder\">Responder</a>&lt;'r&gt; for <a class=\"enum\" href=\"rocket_cors/enum.Error.html\" title=\"enum rocket_cors::Error\">Error</a>","impl&lt;'r, R:&nbsp;<a class=\"trait\" href=\"https://api.rocket.rs/rocket/response/responder/trait.Responder.html\" title=\"trait rocket::response::responder::Responder\">Responder</a>&lt;'r&gt;&gt; <a class=\"trait\" href=\"https://api.rocket.rs/rocket/response/responder/trait.Responder.html\" title=\"trait rocket::response::responder::Responder\">Responder</a>&lt;'r&gt; for <a class=\"struct\" href=\"rocket_cors/struct.Responder.html\" title=\"struct rocket_cors::Responder\">Responder</a>&lt;'r, R&gt;","impl&lt;'r, F, R&gt; <a class=\"trait\" href=\"https://api.rocket.rs/rocket/response/responder/trait.Responder.html\" title=\"trait rocket::response::responder::Responder\">Responder</a>&lt;'r&gt; for <a class=\"struct\" href=\"rocket_cors/struct.ManualResponder.html\" title=\"struct rocket_cors::ManualResponder\">ManualResponder</a>&lt;'r, F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"struct\" href=\"rocket_cors/struct.Guard.html\" title=\"struct rocket_cors::Guard\">Guard</a>&lt;'r&gt;) -&gt; R + 'r,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://api.rocket.rs/rocket/response/responder/trait.Responder.html\" title=\"trait rocket::response::responder::Responder\">Responder</a>&lt;'r&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()