
let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

//  Nom
nom = nom.trim();
if (nom === "") nom = "Inconnu";

//  Age
age = parseInt(age);
let ageValide = (age > 0);

//  Email
let atPos = email.indexOf("@");
let pointPos = email.indexOf(".", atPos);
let emailValide = atPos !== -1 && pointPos > atPos;

//  Score
scoreJeu = parseInt(scoreJeu);
if (isNaN(scoreJeu)) scoreJeu = 0;

//  estAdmin
estAdmin = (estAdmin === "true"); // convertir la chaîne manuellement

// Dernière connexion
derniereConnexion = derniereConnexion ?? "Jamais connecté";

//  Nombre de connexions
nombreConnexions = parseInt(nombreConnexions);
if (nombreConnexions === 0) nombreConnexions = "Aucune connexion";

//  Affichage du rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log("nom              : \"" + nom + "\" (corrigé : espaces supprimés)");
console.log("age              : " + (ageValide ? age : "Invalide"));
console.log("email            : \"" + email + "\" (" + (emailValide ? "valide" : "invalide : pas de point après @") + ")");
console.log("scoreJeu         : " + scoreJeu + " (extrait depuis \"150pts\")");
console.log("estAdmin         : " + estAdmin + " (attention : Boolean(\"false\") = true, conversion manuelle requise)");
console.log("derniereConnexion: \"" + derniereConnexion + "\" (valeur par défaut via ??)");
console.log("nombreConnexions : " + nombreConnexions + " (0 après conversion)");
console.log("================================");