# Makefile

# Règle par défaut
all: package

# Commandes à exécuter dans l'ordre spécifié
package:
    sudo apt install nodejs npm
    npm install --global pkg
    pkg --target node14-win-x64 .
    pkg --target node14-linux-x64 .
    pkg --target node14-macos-x64.

# Définition des règles qui ne correspondent pas à des fichiers
.PHONY: all package
