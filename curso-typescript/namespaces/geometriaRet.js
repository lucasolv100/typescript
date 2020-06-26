"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        Area.areaRet = (base, altura) => {
            return base * altura;
        };
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
