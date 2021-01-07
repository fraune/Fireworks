import d3 from "d3"
import { Particle } from "./particle"

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
        this.setBackdrop()
        this.drawLauncher()

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

    public launch(): void {
        const dimensions = {
            "width": 3,
            "height": 5
        }
        const particleCount: number = 1

        const endCoordinates = {
            'x': this.width / 2,
            'y': this.height / 4
        }

        let firework = this.svg.append('line')
            .style('stroke', '#444444')
            .style('stroke-width', 3)
            .attr('x1', this.width / 2)
            .attr('y1', this.height)
            .attr('x2', this.width / 2)
            .attr('y2', this.height - dimensions.height)

        firework.transition()
            .duration(FireworksDisplay.launchTime)
            .attr('x1', endCoordinates['x'])
            .attr('y1', this.height / 4)
            .attr('x2', endCoordinates['x'])
            .attr('y2', (this.height - 5) / 4)
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