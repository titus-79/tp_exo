// Écrivez une fonction afficherMessagePanier(nbArticles) qui prend en entrée le nombre d'articles dans le panier et retourne un message approprié :
// Si le panier est vide (0 articles), retournez "Votre panier est vide".
// Si le panier contient 1 article, retournez .
// Si le panier contient entre 2 et 5 articles, retournez "Vous avez quelques articles dans votre panier".
// Si le panier contient plus de 5 articles, retournez "Vous avez beaucoup d'articles dans votre panier".

function afficherMessagePanier(nbArticles) {
    if (nbArticles === 0) {
        console.log("Votre panier est vide");
    } else if (nbArticles === 1) {
        console.log("Vous avez 1 article dans votre panier");
    } else if (nbArticles >= 2 && nbArticles <= 5) {
        console.log("Vous avez quelques articles dans votre panier");
    } else {
        console.log("Vous avez beaucoup d'articles dans votre panier");
    }
}

afficherMessagePanier(0);
afficherMessagePanier(1);
afficherMessagePanier(2);
afficherMessagePanier(5);
afficherMessagePanier(6);