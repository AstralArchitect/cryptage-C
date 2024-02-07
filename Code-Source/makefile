# Makefile

# Règle par défaut
all: package

# Commandes à exécuter dans l'ordre spécifié
package:
        npm install --global pkg
        pkg --target node14-win-x64 .
        pkg --target node14-win-arm64 .
        pkg --target node14-macos-x64 .
        pkg --target node14-macos-arm64 .
        pkg --target node14-linux-x64 .

# Définition des règles qui ne correspondent pas        des
.PHONY: all package
