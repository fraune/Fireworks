export class Fireworks {
    constructor(
        private svg: any
    ) {
        this.svg.style('background-color', 'black');
    }

    public launch(): void {
        alert('launch clicked');
    }
}