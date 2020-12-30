export class Fireworks {

    private width: number = 0;
    private height: number = 0;
    private launcher: any = null;

    constructor(
        private svg: any
    ) {
        this.svg.style('background-color', 'black');
        this.width = this.svg.style("width").replace("px", "");
        this.height = this.svg.style("height").replace("px", "");

        this.drawLauncher()
    }

    private drawLauncher(): void {
        this.launcher = this.svg.append('line')
            .style('stroke', 'grey')
            .style('stroke-width', 5)
            .attr('x1', this.width / 2)
            .attr('y1', this.height)
            .attr('x2', this.width / 2)
            .attr('y2', this.height - 10);
    }

    public launch(): void {
        let dimensions = {
            "width": 3,
            "height": 5
        }

        let firework = this.svg.append('line')
            .style('stroke', '#444444')
            .style('stroke-width', 3)
            .attr('x1', this.width / 2)
            .attr('y1', this.height)
            .attr('x2', this.width / 2)
            .attr('y2', this.height - dimensions.height);

        firework.transition()
        .duration(2000)
        .attr('x1', this.width / 2)
        .attr('y1', this.height / 3)
        .attr('x2', this.width / 2)
        .attr('y2', (this.height - 5) / 3)
        .remove();
    }
}