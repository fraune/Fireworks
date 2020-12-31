import * as d3 from 'd3'
import { FireworksDisplay } from './fireworks/fireworks-display'

var fireworksDisplay: FireworksDisplay

window.addEventListener('load', (event) => {
    console.log('Page loaded.')
    initialize()
})

function initialize() {
    const svg = d3.select('#fireworks')
    fireworksDisplay = new FireworksDisplay(svg)

    const launchButton = document.getElementById('launch-button')
    if (launchButton) {
        launchButton.addEventListener('click', _ => fireworksDisplay.launch())
    }
}