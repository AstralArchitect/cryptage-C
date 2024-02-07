# Makefile

# Commande pour exécuter pkg
PKG = pkg --target node14-win-x64 .

# Règle par défaut
all: package

# Règle pour exécuter pkg
package:
    $(PKG)

# Nettoyage des fichiers temporaires
clean:
    @echo "Compilation terminée."

# Définition des règles qui ne correspondent pas à des fichiers
.PHONY: all package clean
