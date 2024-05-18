all: package
.SILENT:
package:
	pkg .
	mv cryptage-* ../bin/
run:
	node main.js
install_dep:
	npm i paquet
	npm install --global pkg
configure:
	mkdir ../bin/
