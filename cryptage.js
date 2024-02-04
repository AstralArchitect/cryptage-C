const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function deplacementAB(Message, cle) {
    let cle2 = [];
    if(cle.length === Message.length || cle.length > Message.length){
        for (let i in Message) {
            cle2.push(cle[i]);
        }
        for (let i in Message) {
            Message[i] += cle2[i];
        }
        console.log("Votre Message codé: " + Message);
    }else{
        console.log("Erreur, votre clé est trop courte.")
    }
}

function LettreVersNombre(Message, cle) {
    let UTF16 = [];
    for (let i in Message) {
        let nombre = Message[i].charCodeAt(0);
        nombre -= 96;
        if ((nombre === 0 || nombre > 0) && (nombre < 27)) {
            UTF16.push(nombre);
        }
    }
    if (UTF16.length === Message.length) {
        deplacementAB(UTF16, cle);
    } else {
        console.log("Veuillez entrer quelque chose de valide");
    }
}

function cle(Message) {
    rl.question('Clé ? ', (answer) => {
        let cle = answer.split('');
        for(i in answer){
            cle[i] = parseInt(cle[i]);
        }
        console.log("Votre clé: " + cle);
        LettreVersNombre(Message, cle);
        rl.close();
    });
}

rl.question('Message ? ', (answer) => {
    let Message = answer.split('');
    cle(Message);
});
