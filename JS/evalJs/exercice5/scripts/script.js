// Exercice 5 : Générateur de Mot de Passe (1h)
// Énoncé :
// Créez un programme en JavaScript qui génère un mot de passe aléatoire selon les critères suivants :

// Le mot de passe doit contenir entre 8 et 16 caractères.
// Il doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre, et un caractère spécial.
// L'utilisateur doit pouvoir spécifier la longueur du mot de passe.

// Indications :
// Utilisez les fonctions Math.random() et String.fromCharCode() pour générer des caractères aléatoires.
// Vous pouvez stocker les différents types de caractères dans des tableaux distincts (par exemple, un tableau pour les majuscules, un autre pour les minuscules, etc.) et en tirer aléatoirement pour construire le mot de passe. 
// Vous pouvez aussi générer un mot de passe totalement aléatoire et vérifier ensuite qu'il remplisse les conditions. 
// Vous pouvez aussi faire les 2 

// Math.floor(Math.random() * 2)
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// une lettre majuscule(65-90), une lettre minuscule(97-122), un chiffre(0-9), et un caractère spécial(33-47 & 58-64 & 91-96 & 123-126).

function caratereAleatoire(type) {
    switch (type) {
        case 1://"maj":
            motDePasse += String.fromCharCode(getRandomArbitrary(65, 90));
            maj = true;
            break;
        case 2://"min":
            motDePasse += String.fromCharCode(getRandomArbitrary(97, 122));
            min = true;
            break;
        case 3://"num":
            motDePasse += String.fromCharCode(getRandomArbitrary(48, 57));
            num = true;
            break;
        case 4://"spe":
            let spe = getRandomArbitrary(1,4);
            special = true;
            if (spe === 1) {
                motDePasse += String.fromCharCode(getRandomArbitrary(33, 47));
            } else if (spe === 2) {
                motDePasse += String.fromCharCode(getRandomArbitrary(58, 64));
            } else if (spe === 3) {
                motDePasse += String.fromCharCode(getRandomArbitrary(91, 96));
            } else if (spe === 4) {
                motDePasse += String.fromCharCode(getRandomArbitrary(123, 126));
            }
            break;        
        }
    }



let saisi = parseInt(window.prompt("Combien de caractère (Le mot de passe doit contenir entre 8 et 16 caractères) :"))
if (saisi < 8 || saisi >16) {
    alert("Le mot de passe doit contenir entre 8 et 16 caractères");
    window.location.reload()
} else {
    motDePasse = "";
    let maj = false;
    let min = false;
    let num = false;
    let special = false;
    for (let i = 0; i < saisi; i++) {
        let caractere = getRandomArbitrary( 1, 4);


        if ((i + 4 === saisi) && (maj === false)) {
            caractere = 1;
        } else if ((i + 3 === saisi) && (min === false)) {
            caractere = 2;
        } else if ((i + 2 === saisi) && (num === false)) {
            caractere = 3;
        } else if ((i + 1 === saisi) && (special === false)) {
            caractere = 4;
        }
        caratereAleatoire(caractere); 
    }
    alert(motDePasse)

}