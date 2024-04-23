# Makefile

# Règle par défaut
all: package

# Commandes à exécuter dans l'ordre spécifié
.SILENT:
package:
	@echo "compilation..."
	pkg --targets node14-win-x64,node14-linux-x64,node14-macos-x64 .
run:
	node main.js
install_dep:
	@echo "installation des librairies nécéssaires à la compilation..."
	npm i commander paquet
	npm install --global pkg