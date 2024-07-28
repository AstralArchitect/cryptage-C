#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#ifdef _WIN32
#include <windows.h>
#endif

void crypter();
void decrypter();

int main()
{
    #ifdef _WIN32
    SetConsoleOutputCP(CP_UTF8);
    #endif
    char rep;
    printf("Que voulez-vous faire (1: crypter 2: décrypter) ? ");
    rep = fgetc(stdin);
    if(rep == '1'){
        crypter();
    }else if(rep == '2'){
        decrypter();
    }else{
        printf("erreur, veuillez entrez quelque chose de valide.\n");
    }
}

void crypter()
{
    // demander à l'utilisateur le message à crypter et la clef de cryptage
    char clef[11];
    char message[101];
    char messageCrypte[101];

    printf("entrez votre message à crypter (max 100 caractères): ");
    // je sais que c'est pas ouf pour la secu mais quand j'utilisait fgets(message, 100, stdin) le truc beuguait
    scanf("%s", message);

    printf("entrez une clef de cryptage(max: 10 chiffres): ");
    scanf("%s", clef);
    for (int i = 0; i < strlen(clef); i++) {
        if (!isdigit(clef[i])) {
            printf("Attention : La clef doit contenir uniquement des chiffres.\n");
            break;
        }
    }

    printf("Message: %s\nClef : %s\n", message, clef);

    unsigned char messageLenght = strlen(message);

    unsigned char keyLenght = strlen(clef);

    for (unsigned char i = 0; i < messageLenght; i++)
    {
        messageCrypte[i] = message[i] + clef[i % keyLenght] - '0';        
    }
    
    printf("message crypté : %s\n", messageCrypte); 
}

void decrypter()
{
    char clef[11];
    char messageCrypte[101];
    char messageDecrypte[101];

    printf("Entrez votre message crypté (max: 100 caratères): ");
    scanf("%s", messageCrypte);

    printf("Entrez la clef de décryptage (max: 10 caratères): ");
    scanf("%s", clef);
    for (int i = 0; i < strlen(clef); i++) {
        if (!isdigit(clef[i])) {
            printf("Attention : La clef doit contenir uniquement des chiffres.\n");
            break;
        }
    }

    printf("Message crypté: %s\nClef : %s\n", messageCrypte, clef);

    unsigned char messageLenght = strlen(messageCrypte);

    unsigned char keyLenght = strlen(clef);

    for (unsigned char i = 0; i < messageLenght; i++)
    {
        messageDecrypte[i] = messageCrypte[i] - clef[i % keyLenght] + '0';        
    }
    
    printf("message decrypté : %s\n", messageDecrypte); 
}