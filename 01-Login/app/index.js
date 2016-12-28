import xs from "xstream";
import {run} from "@cycle/xstream-run";

import {makeAuth0Driver, protect} from "cyclejs-auth0";
import {makeDOMDriver, div, button} from "@cycle/dom";
import jwt from "jwt-decode";
import {AUTH0_CLIENT_ID, AUTH0_DOMAIN} from "../auth0-variables.js";

function App({ DOM, auth0, props }) {
return {
        DOM: xs.of(div('Basic application'))
    };
}

function main(sources) {
    var app = protect(App)(sources);

    return {
        DOM: app.DOM,
        auth0: app.auth0
    };
}

var drivers = {
    DOM: makeDOMDriver("#main"),
    auth0: makeAuth0Driver(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
         auth: {
             params: { scope: "openid nickname" },
             responseType: "token"
         }
     })
};

run(main, drivers);