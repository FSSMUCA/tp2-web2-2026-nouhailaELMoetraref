// exercice7.js

let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1️⃣ Sous-total
let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal + " MAD");

// 2️⃣ Réduction
let reduction = (codePromo !== null && estMembre) ? (sousTotal * reductionPourcentage / 100) : 0;
console.log("Réduction : " + reduction + " MAD");

// 3️⃣ Total final
let totalFinal = sousTotal - reduction;
console.log("Total final : " + totalFinal + " MAD");

// 4️⃣ Vérification solde
let paiement = soldeCompte >= totalFinal ? "Paiement accepté" : "Solde insuffisant";
console.log("Statut : " + paiement);

// 5️⃣ Nouveau solde si paiement accepté
let nouveauSolde = paiement === "Paiement accepté" ? soldeCompte - totalFinal : soldeCompte;
console.log("Solde après achat : " + nouveauSolde + " MAD");

// 6️⃣ Récapitulatif final
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + totalFinal + " MAD");
console.log("Statut    : " + paiement);
console.log("Solde     : " + nouveauSolde + " MAD");
console.log("=========================");