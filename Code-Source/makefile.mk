# Makefile

# Commande pour exécuter pkg
PKG = pkg --targets node14-win-x64,node14-macos-x64,node14-linux-x64 .
MKDIR = mkdir .\compilé
MOVE = move cryptage-win-x64.exe .\compilé
MOVE2 = move cryptage-linux-x64 .\compilé
MOVE3 = move cryptage-macos-x64 .\compilé
# Règle par défaut
all: package

# Règle pour exécuter pkg
package:
    $(PKG)
    $(MKDIR)
    $(MOVE)
    $(MOVE2)
    $(MOVE3)

# Nettoyage des fichiers temporaires
clean:
    @echo "Nettoyage terminé."

# Définition des règles qui ne correspondent pas à des fichiers
.PHONY: all package clean
