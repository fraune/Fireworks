import * as d3 from 'd3';
import { Fireworks } from './fireworks';

var fireworks: Fireworks;

window.addEventListener('load', (event) => {
    console.log('Page loaded.');
    initialize();
});

function initialize() {
    const launchButton = document.getElementById('launch-button');
    if (launchButton) {
        launchButton.addEventListener('click', _ => fireworks.launch());
    }

    const svg = d3.select('#fireworks')
    fireworks = new Fireworks(svg)
}