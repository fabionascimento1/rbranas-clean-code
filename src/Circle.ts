export default class Circle {
    radius: number
    constructor(radius: number){
        this.radius = radius
    }

    getarea() : number {
        return 2 * Math.PI * this.radius
    }
}