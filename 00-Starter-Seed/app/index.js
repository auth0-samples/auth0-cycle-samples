import xs from 'xstream'
import {run} from "@cycle/xstream-run";
import {makeDOMDriver, div} from "@cycle/dom";

function main(sources) {

    return {
        DOM: xs.of(div('Basic application'))
    };
}

var drivers = {
    DOM: makeDOMDriver("#main")
};

run(main, drivers);