// exercice8.js

let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// 1️⃣ Nom
nom = nom.trim();
if (nom === "") nom = "Inconnu";

// 2️⃣ Age
age = parseInt(age);
let ageValide = (age > 0);

// 3️⃣ Email
let atPos = email.indexOf("@");
let pointPos = email.indexOf(".", atPos);
let emailValide = atPos !== -1 && pointPos > atPos;

// 4️⃣ Score
scoreJeu = parseInt(scoreJeu);
if (isNaN(scoreJeu)) scoreJeu = 0;

// 5️⃣ estAdmin
estAdmin = (estAdmin === "true"); // convertir la chaîne manuellement

// 6️⃣ Dernière connexion
derniereConnexion = derniereConnexion ?? "Jamais connecté";

// 7️⃣ Nombre de connexions
nombreConnexions = parseInt(nombreConnexions);
if (nombreConnexions === 0) nombreConnexions = "Aucune connexion";

// 8️⃣ Affichage du rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log("nom              : \"" + nom + "\" (corrigé : espaces supprimés)");
console.log("age              : " + (ageValide ? age : "Invalide"));
console.log("email            : \"" + email + "\" (" + (emailValide ? "valide" : "invalide : pas de point après @") + ")");
console.log("scoreJeu         : " + scoreJeu + " (extrait depuis \"150pts\")");
console.log("estAdmin         : " + estAdmin + " (attention : Boolean(\"false\") = true, conversion manuelle requise)");
console.log("derniereConnexion: \"" + derniereConnexion + "\" (valeur par défaut via ??)");
console.log("nombreConnexions : " + nombreConnexions + " (0 après conversion)");
console.log("================================");