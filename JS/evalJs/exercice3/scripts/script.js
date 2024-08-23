// Exercice 3 : Fonctions et programmation fonctionnelle (30mn)
// Contexte : Vous êtes en charge de créer un outil qui aide les développeurs à calculer le coût total d'une liste de projets.

// Énoncé :
// Écrivez une fonction calculerCoutTotal(projets, tauxHoraire) qui prend en entrée un tableau projets contenant la durée de chaque projet en heures, et un tauxHoraire qui représente le coût par heure. La fonction doit retourner le coût total de tous les projets.
// Exemple :
let projets = [5, 10, 3, 8];
let tauxHoraire = 50;

console.log(calculerCoutTotal(projets, tauxHoraire)); // Doit afficher 1300

function calculerCoutTotal(projets, tauxHoraire) {
    let coutTotal = 0;
    for (let i = 0; i < projets.length; i++) {
        coutTotal = coutTotal + projets[i] * tauxHoraire;
    }
    return coutTotal;
}