const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function decrypt(){
    function deplacementAB(Message, cle) {
        let cle2 = [];
        while (cle2.length < Message.length) {
            cle2 = cle2.concat(cle);
        }
        for(i in Message){
            Message[i] -= cle2[i]
        }
        NombresVersLettre(Message)
    }
    
    function NombresVersLettre(Message) {
        let lettres = [];
        for(i in Message){
            if(Message[i] > 0 && Message[i] < 27){
                let truc = Message[i] + 96;
                let truc2 = String.fromCharCode(truc)
                lettres.push(truc2);
            }else if(Message[i] === 27){
                lettres.push(String.fromCharCode(44));
            }
        }
        let decode = lettres.join('');
        console.log("votre message décodé: " + decode);
    }
    
    function cle(Message) {
        rl.question('Clé ? ', (answer) => {
            let cle = answer.split('');
            for(i in answer){
                cle[i] = parseInt(cle[i]);
            }
            console.log("Votre clé: " + cle);
            deplacementAB(Message, cle);
            rl.close();
        });
    }
    
    rl.question('Message ? ', (answer) => {
        let Message = answer.split(',');
        for(i in Message){
            Message[i] = parseInt(Message[i]);
        }
        cle(Message);
    });
}

function crypte(){
    function deplacementAB(Message, cle) {
        let cle2 = [];
    
        if (cle.length < Message.length) {
        // Répéter la clé jusqu'à ce qu'elle ait la même longueur que le message
            while (cle2.length < Message.length) {
                cle2 = cle2.concat(cle);
            }
            cle2 = cle2.slice(0, Message.length);
            for (let i in Message) {
                Message[i] += cle2[i];
            }
    
            console.log("Votre Message codé: " + Message);
        } else if (cle.length === Message.length) {
            for (let i in Message) {
                Message[i] += cle[i];
            }
        console.log("Votre Message codé: " + Message);
        }
    
    }
    
    function LettreVersNombre(Message, cle) {
        let UTF16 = [];
        for (let i in Message) {
            let nombre = 0
            if(Message[i].charCodeAt(0) > 96 && Message[i].charCodeAt(0) < 123){
                nombre = Message[i].charCodeAt(0);
                nombre -= 96;
            }else if(Message[i].charCodeAt(0) === 44){
                nombre = 27;
            }
            if ((nombre === 0 || nombre > 0) && (nombre < 28)) {
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
}

rl.question('Que voulez-vous faire (1: crypter 2: décrypter) ? ', (answer) => {
    if(answer === "1"){
        crypte();
    }else if(answer === "2"){
        decrypt();
    }else{
        console.log("erreur, veuillez entrez quelque chose de valide.")
    }
});