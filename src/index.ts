import * as d3 from "d3";

function component() {
    const element = document.createElement('div');

    element.innerHTML = "hello";

    return element;
}

document.body.appendChild(component());