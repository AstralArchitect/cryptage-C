let caracteres = [];
function codage(code, cle, listecle) {
    // Effectuer le codage
    // Votre logique de codage ici

    // Vérifier s'il y a au moins un argument
    if (cle.length === 0) {
        console.log('Veuillez fournir la clé en ligne de commande.');
        process.exit(1); // Quitter le processus avec un code d'erreur
    }
    listecle = cle.split('-');
    // premier rotor
    return listecle;
}

function getCodeASCII(liste, cle, listecle) {
    if (!liste) {
        console.log("Aucun élément fourni.");
    } else {
        for (let i = 0; i < liste.length; i++) {
            const code = liste[i].charCodeAt(0);
            caracteres.push(code - 32);
            // Appeler la fonction de codage avec le code ASCII et la clé
            codage(code, cle, listecle);
        }
    }
}

// Exemple d'utilisation
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quel message ? ', (message) => {
    let listecle = [];
    const cle = process.argv[2];
    console.log(getCodeASCII(message, cle,listecle));
    rl.close();
});