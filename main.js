let caracteres = [];

function codage(code, cle) {
    // Vérifier s'il y a au moins un argument
    if (cle.length === 0) {
        console.log('Veuillez fournir une clé.');
        process.exit(1); // Quitter le processus avec un code d'erreur
    }
    let codé = code;
    for(let i = 0;i < code.length; i++){
        // Premier rotor
        codé[i] += listecle[0];
        listecle[0] += 24;
        // Deuxième rotor
        if(listecle[0] > (255 - 23)) {
            listecle[0] = 1
            listecle[1] += 24
        }
        codé[i] -= listecle[1];
        listecle[1] += 24;
        // Troisième rotor
        if(listecle[1] > (255 - 23)) {
            listecle[1] = 1
            listecle[2] += 24
        }
        codé[i] * listecle[1];
        listecle[1] += 24;
        if(listecle[2] > (255 - 23)) {
            listecle[2] = 1
            listecle[0] += 24
        }
    }
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
        listecle = cle.split('-');
        getCodeASCII(message, cle);
        rl.close();
    });
});
