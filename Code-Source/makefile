# Makefile

# Règle par défaut
all: package

# Commandes à exécuter dans l'ordre spécifié
package:
	npm install --global pkg
	pkg --targets node14-win-x64,node14-linux-x64,node14-macos-x64 .
	pkg --targets node14-macos-arm64,node14-linux-arm64 .

# Définition des règles qui ne correspondent pas        des
.PHONY: all package
