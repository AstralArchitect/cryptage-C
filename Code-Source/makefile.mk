# Makefile

# Commande pour exécuter pkg
RM = rmdir /s /q .\node_modules
NPM = npm i --global pkg
NPM2 = npm i paquet command
PKG = pkg --targets node14-win-x64,node14-macos-x64,node14-linux-x64 .

# Règle par défaut
all: package

# Règle pour exécuter pkg
package:
    $(RM)
    $(NPM)
    $(NPM2)
    $(PKG)

# Nettoyage des fichiers temporaires
clean:
    @echo "Nettoyage terminé."

# Définition des règles qui ne correspondent pas à des fichiers
.PHONY: all package clean
