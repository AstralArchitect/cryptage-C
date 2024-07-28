# Introduction:

Ceci est un programme fait en C, il permet de crypter et décrypter des messages en fonction d'une clef.

## Comment ça marche :

Le principe est simple, il suffit de transformer le caractère en le nombre correspondant dans la table ASCII et ajouter la valeur de la clé à la valeur du caractère pour obtenir un caractère qui sera le résultat finale.

## Compiler

Pour compiler le projet vouz aurez besoin de meson.
1. configurez le projet:
``meson setup builddir/``
2. compilez:
``meson compile -C builddir/``