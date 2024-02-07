# Makefile

# Règle par défaut
all: package

# Commandes à exécuter dans l'ordre spécifié
package:
	rm -rf node_modules
	npm i commander paquet
	@echo "installation des librairies nécéssaires à la compilation..."
	npm install --global pkg
	@echo "compilation..."
	pkg --targets node14-win-x64,node14-linux-x64,node14-macos-x64 .
	pkg --targets node14-macos-arm64,node14-linux-arm64 .

# Définition des règles qui ne correspondent pas        des
.PHONY: all package
