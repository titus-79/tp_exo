// Exercice 4 : Programmation Orientée Objet (1h15)
// Contexte : Vous développez un jeu de rôle en ligne. Les joueurs peuvent avoir plusieurs personnages, chacun avec des caractéristiques spécifiques.

// Énoncé :
// Créez une classe Personnage qui a les propriétés suivantes :
// nom : le nom du personnage (chaîne de caractères)
// force : la force du personnage (nombre)
// pointsDeVie : les points de vie du personnage (nombre)

// La classe doit également avoir les méthodes suivantes :
// attaquer(cible) : réduit les pointsDeVie de la cible en fonction de la force du personnage.
// soigner(montant) : augmente les pointsDeVie du personnage de montant.

class Personnage {
    constructor(nom, force, pointsDeVie) {
        this.nom = nom;
        this.force = force;
        this.pointsDeVie = pointsDeVie;
    }

    attaquer(cible) {
        cible.pointsDeVie = cible.pointsDeVie - this.force;
    }

    soigner(montant) {
        this.pointsDeVie = this.pointsDeVie + montant;
    }
}

// Ensuite, créez deux instances de Personnage et faites en sorte qu'elles s'attaquent mutuellement jusqu'à ce qu'un des personnages soit mort, puis affichez le vainqueur.
// En bonus, vous pourriez ajouter une propriété vitesse qui pourrait influer sur le nombres de touches. 

// Exemple :
let guerrier = new Personnage("Guerrier", 10, 100);
let mage = new Personnage("Mage", 7, 80);

console.log(mage);
guerrier.attaquer(mage); // Les points de vie du mage sont réduits de 10
console.log("Le guerrier à attaquer le mage");
console.log(mage);
console.log(guerrier);
mage.attaquer(guerrier); // Les points de vie du mage sont réduits de 10
console.log("Le mage à attaquer le guerrier");
console.log(guerrier);
console.log(mage);
console.log("Le mage se soigne");
mage.soigner(5); // Les points de vie du mage augmentent de 5
console.log(mage);

