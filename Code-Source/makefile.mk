# Makefile

# Commande pour exécuter pkg
PKG = pkg --targets node14-win-x64,node14-macos-x64,node14-linux-x64,node14-linux-arm64,node14-macos-arm64 .

# Règle par défaut
all: package

# Règle pour exécuter pkg
package:
    $(PKG)

# Nettoyage des fichiers temporaires
clean:
    @echo "Nettoyage terminé."

# Définition des règles qui ne correspondent pas à des fichiers
.PHONY: all package clean
