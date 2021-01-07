import * as d3 from 'd3'
import { FireworksDisplay } from './fireworks/fireworks-display'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

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

    library.add(fas, far, fab)
    dom.i2svg()
}