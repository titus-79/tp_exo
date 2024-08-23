// Exercice 2 : Boucles et traitement de tableaux (45mn)
// ​
// Contexte : Vous devez développer une fonctionnalité pour un site de blog qui calcule le nombre total de mots dans une liste d'articles.
// ​
// Énoncé :
// Écrivez une fonction compterMots(articles) qui prend en entrée un tableau articles, où chaque élément est une chaîne de caractères représentant le contenu d'un article. La fonction doit retourner le nombre total de mots dans tous les articles.

// *Indice  Un mot est défini comme une séquence de caractères séparée par des espaces.

let articles = [
    "JavaScript est un langage fascinant",
    "Apprendre à coder est une compétence précieuse",
    "Il est important de pratiquer régulièrement"
];

console.log(compterMots(articles)); // Doit afficher 16

function compterMots(articles) {
    let count = 0;
    for (let i = 0; i < articles.length; i++) {
        let tab = articles[i].split(" ")
        count = count + tab.length;
    }
    return count;
}

// Ecrivez une fonction trier(articles) qui affiche le tableau d'articles (console.table()), trie les articles par ordre alphabétique décroissant (utilisez la méthode JS Array.sort()), et affiche à nouveau les articles. 
// ​

function trier(articles) {
    console.table(articles);
    articles.sort();
    articles.reverse();
    console.table(articles)
}
console.log(trier(articles));

let array = new Array("Pommes", "Poires", "Ananas", "Cerise", "Abricot");

console.log(compterMots(array)); 
console.log(trier(array));
