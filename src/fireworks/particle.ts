export class Particle {

    // private static readonly gravity: number = 10
    private radius: number = 100;

    constructor(
        private svg: any,
        private startX: number,
        private startY: number,
        private count: number
    ) {
        this.makeParticleCircle(this.count)
    }

    private genRanHex(size: number): string {
        return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
    }

    private getRandomColor(): string {
        let hex: string = this.genRanHex(6)
        console.log(hex)
        return `#${hex}`
    }

    private makeParticleCircle(count: number): void {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.svg.append('circle')
                    .style("stroke", this.getRandomColor())
                    .attr("r", 0)
                    .attr("cx", this.startX)
                    .attr("cy", this.startY)
                    .style("stroke-dasharray", ("5,5")) // make the stroke dashed
                    .style('stroke-width', '5')
                    .transition()
                    .duration(4000)
                    .style("stroke", this.getRandomColor())
                    .attr('r', 500)
                    .style('stroke-width', '1000')
                    .transition()
                    .duration(2000)
                    .style('opacity', 0)
                    .remove()
            }, 50 * i);
        }
    }
}