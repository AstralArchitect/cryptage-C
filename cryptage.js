let caracteres = [];

function codage(code, cle) {
    let coda = code;
    for(let i = 0;i < code.length; i++){
        // Premier rotor
        coda[i] += cle[0];
        cle[0] += 24;
        // Deuxième rotor
        if(cle[0] > (255 - 32)) {
            cle[0] = 1
            cle[1] += 24
        }
        coda[i] -= cle[1];
        cle[1] += 24;
        // Troisième rotor
        if(cle[1] > (255 - 32)) {
            cle[1] = 1
            cle[2] += 24
        }
        coda[i] += cle[2];
        cle[2] += 24;
        if(cle[2] > (255 - 32)) {
            cle[2] = 1
            cle[0] += 24
        }
    }
    console.log("le message crypté est ``" + coda + "``");
    console.log("la clé de décryptage de ce message est ``" + cle + "``");
}

function getCodeASCII(message, cle) {
    const listecle_s = cle.split('-');

    // Vérifier s'il y a au moins un argument
    if (listecle_s.length < 3) {
    console.log('Veuillez fournir une clé.');
    process.exit(1); // Quitter le processus avec un code d'erreur
    }
    let listecle = [];
    for (let i = 0; i < listecle_s.length; i++) {
        listecle.push(parseInt(listecle_s[i]))
    }    

    if (!message) {
        console.log("Aucun élément fourni.");
    } else {
        let code = [];
        for (let i = 0; i < message.length; i++) {
            code.push(message.charCodeAt(i) - 32);
        }
        // Appeler la fonction de codage avec le code ASCII et la clé
        codage(code, listecle);
        
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
        getCodeASCII(message, cle);
        rl.close();
    });
});
