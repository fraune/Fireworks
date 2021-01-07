import * as d3 from "d3"
import { Particle } from "./particle"
import { faCamera, faDog } from '@fortawesome/free-solid-svg-icons'

export class FireworksDisplay {

    private width: number = 0
    private height: number = 0
    private launcher: any = null

    private static readonly launchTime: number = 2000
    private static readonly particleMovement: number = 3

    constructor(
        private svg: any
    ) {
        this.width = this.svg.style("width").replace("px", "")
        this.height = this.svg.style("height").replace("px", "")

        console.log(`height: ${this.height}`)
        console.log(`width: ${this.width}`)

        this.setBackdrop()
        this.drawLauncher()

        this.drawAndAnimateDog();

        this.test()
    }

    private setBackdrop(): void {
        this.svg.style('background-color', 'black')
        // TODO: Set night sky backdrop
    }

    private drawLauncher(): void {
        this.launcher = this.svg.append('line')
            .style('stroke', 'grey')
            .style('stroke-width', 5)
            .attr('x1', this.width / 2)
            .attr('y1', this.height)
            .attr('x2', this.width / 2)
            .attr('y2', this.height - 10)
    }

    private drawAndAnimateDog(): void {
        const dogSize = 50

        this.svg.append('svg')
            .html('<i class="fas fa-dog"></i>')
            .style('font-size', dogSize)
            .attr('height', dogSize)
            .attr('width', dogSize)
            .attr('color', 'hotpink')
            .on('click', () => {
                console.log('dogclick')
            })
            .attr('x', -dogSize)
            .attr('y', this.height - dogSize)
            .transition()
            .duration(10000)
            .attr('x', this.width)
            .attr('y', this.height - dogSize)
            .remove()


        // .attr

        // this.svg.append('svg:')
        // .html('<i class="fas fa-info-circle"></i>')
        // .style('stroke', 'green')

    }

    public launch(): void {
        const dimensions = {
            "width": 3,
            "height": 5
        }
        const particleCount: number = 1

        const startCoordinates = {
            'x': this.width / 2,
            'y': this.height
        }

        const endCoordinates = {
            'x': this.width / 2,
            'y': this.height / 4
        }

        let mortar = this.svg.append('line')
            .style('stroke', '#777777')
            .style('stroke-width', dimensions['width'])
            .attr('x1', startCoordinates['x'])
            .attr('y1', startCoordinates['y'])
            .attr('x2', startCoordinates['x'])
            .attr('y2', startCoordinates['y'] - dimensions.height)

        mortar.transition()
            .duration(FireworksDisplay.launchTime)
            .attr('x1', endCoordinates['x'])
            .attr('y1', endCoordinates['y'])
            .attr('x2', endCoordinates['x'])
            .attr('y2', endCoordinates['y'] - dimensions.height)
            .remove()

        setTimeout(() => {
            let particle = new Particle(this.svg, endCoordinates['x'], endCoordinates['y'], particleCount)
        }, FireworksDisplay.launchTime);
        console.log('draw particle')

        // setTimeout(() => this.generateParticles(endCoordinates['x'], endCoordinates['y']), FireworksDisplay.launchTime)

    }

    private test(): void {
        // draw an alpha gradient
        let line = this.svg.append('line')
            .style('stroke', 'url(#linear)')
            .style('stroke-width', 5)
            .attr('x1', 20)
            .attr('y1', 20)
            .attr('x2', 20)
            .attr('y2', 20)

        line.transition()
            .duration(6000)
            .attr('x1', 200)
            .attr('y1', 200)
            .attr('x2', 220)
            .attr('y2', 220)

    }

    // private generateParticles(startX: number, startY: number): void {

    //     let particle = this.svg.append('circle')
    //         .style("fill", startColor)
    //         .attr("r", 10)
    //         .attr("cx", startX)
    //         .attr("cy", startY)

    //     particle.transition()
    //         .duration(2000)
    //         .style("fill", endColor)
    //         .style("opacity", "0")
    //         .remove()
    // }

}