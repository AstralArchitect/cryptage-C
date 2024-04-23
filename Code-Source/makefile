il# Makefile

# Règle par défaut
all: package

# Commandes à exécuter dans l'ordre spécifié
package:
	@echo "\n compilation... \n"
	pkg --targets node14-win-x64,node14-linux-x64,node14-macos-x64 .
run:
        node main.js
install_dep:
        npm i commander paquet
	@echo "\n installation des librairies nécéssaires à la compilation... \n"
	npm install --global pkg

# Définition des règles qui ne correspondent pas        des
.PHONY: all package
