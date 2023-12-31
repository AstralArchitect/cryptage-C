let caracteres = [];

function codage(code, cle) {
    // Effectuer le codage
    // Votre logique de codage ici

    // Vérifier s'il y a au moins un argument
    if (cle.length === 0) {
        console.log('Veuillez fournir la clé en ligne de commande.');
        process.exit(1); // Quitter le processus avec un code d'erreur
    }

    // La variable listecle est déjà disponible ici, pas besoin de la réassigner
    // Premier rotor
    
}
function getCodeASCII(liste, cle) {
    if (!liste) {
        console.log("Aucun élément fourni.");
    } else {
        let code = [];
        for (let i = 0; i < liste.length; i++) {
            code = liste[i].charCodeAt(0);
            caracteres.push(code - 32);
        }
        // Appeler la fonction de codage avec le code ASCII et la clé
        codage(code, cle);
        
    }
}

// Exemple d'utilisation
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quel message ? ', (message) => {
    const cle = rl.question('Quelle est la clé ? ', (cle) => {
        listecle = cle.split('-')
        getCodeASCII(message, cle);
        rl.close();
    });
});
