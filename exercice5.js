// exercice5.js

let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    let val = nombres[i];
    let result = "";

    if (Number.isNaN(val)) {
        result = "INVALIDE";
    } else if (val === Infinity || val === -Infinity) {
        result = "INFINI";
    } else if (val === 0 && 1 / val === -Infinity) {
        result = "ZERO NEGATIF";
    } else if (Number.isInteger(val)) {
        if (Math.abs(val) <= Number.MAX_SAFE_INTEGER) {
            result = "ENTIER SUR";
        } else {
            result = "ENTIER HORS LIMITES";
        }
    } else {
        result = "DECIMAL";
    }

    console.log(val + " -> " + result);
}