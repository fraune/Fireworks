export class Particle {

    private static readonly gravity: number = 10
    private startColor: string = this.getRandomColor()
    private endColor: string = this.getRandomColor()

    constructor(
        svg: any,
    ) {

    }

    private genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    private getRandomColor(): string {
        let hex: string = this.genRanHex(6);
        console.log(hex);
        return `#${hex}`;
    }
}