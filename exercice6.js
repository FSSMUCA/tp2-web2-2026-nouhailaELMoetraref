// exercice6.js

let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = {nom, age, ville, score, actif};

console.log("=== Partie A : ?? ===");
for (let key in variables) {
    console.log(key + " ?? \"valeur par défaut\" -> " + (variables[key] ?? "valeur par défaut"));
}

console.log("\n=== Partie B : || ===");
for (let key in variables) {
    console.log(key + " || \"valeur par défaut\" -> " + (variables[key] || "valeur par défaut"));
}

console.log("\n=== Partie C : comparaison ===");
for (let key in variables) {
    let resNullish = variables[key] ?? "valeur par défaut";
    let resOr = variables[key] || "valeur par défaut";
    let comparaison = resNullish === resOr ? "même résultat" : "résultat différent";
    console.log(key + " : ?? et || -> " + comparaison);
}