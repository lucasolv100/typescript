
// namespace Areas {

//     const PI = 3.14

//     export const areaCirc = (raio: number): number => {
//         return PI * Math.pow(raio, 2)
//     }

//     export const areaRet = (base: number, altura: number) => {
//         return base * altura;
//     }


// }
namespace Geometria {
    export namespace Area {

        const PI = 3.14

        export const areaCirc = (raio: number): number => {
            return PI * Math.pow(raio, 2)
        }

        export const areaRet = (base: number, altura: number) => {
            return base * altura;
        }

    }
}


console.log(Geometria.Area.areaCirc(10))
console.log(Geometria.Area.areaRet(10, 20))