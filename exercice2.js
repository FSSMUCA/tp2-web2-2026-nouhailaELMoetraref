// exercice2.js

let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i];
    let affichage = val === "" ? "(chaine vide)" : String(val); // traitement chaîne vide
    let typeBool = val ? "truthy" : "falsy"; // test direct de la valeur
    console.log(affichage + " -> " + typeBool);
}