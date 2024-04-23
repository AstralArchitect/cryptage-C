# Introduction: #

Ceci est un programme fait en JavaScript, il permet de crypter et décrypter des messages en fonction d'une clé.

## Comment ça marche : ##

Le principe est simple, il suffit de transformer le caractère en le nombre correspondant dans la table UTF-16, faire -96 pour que a = 1 et z = 26 et ajouter la valeur de la clé à la valeur du caractère pour obtenir un nombre qui sera le résultat finale.
