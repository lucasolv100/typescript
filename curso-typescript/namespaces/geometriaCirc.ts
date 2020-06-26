namespace Geometria {
    export namespace Area {
        const PI = 3.14
        export const areaCirc = (raio: number): number => {
            return PI * Math.pow(raio, 2)
        }
    }
}