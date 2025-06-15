# Introduction

Ceci est un programme permetant de crypter les messages grâce au Chiffre de Vigenère inventé en 1586 par Blaise de Vigenère.

# Principe mathématique ([wikipedia](https://fr.wikipedia.org/wiki/Chiffre_de_Vigen%C3%A8re))
Mathématiquement, on identifie les lettres de l'alphabet aux nombres de 0 à 25 (A=0, B=1...). Les opérations de chiffrement et de déchiffrement sont, pour chaque lettre, celles du chiffre de César. En désignant la i ème lettre du texte clair par Texte[i], la i ème du chiffré par Chiffré[i], et la ie lettre de la clé, répétée suffisamment de fois, par Clés[i], elle se formalise par :
<br><br>
Chiffré[i] = (Texte[i] + Clés[i]) modulo 26<br>
Texte[i] = (Chiffré[i] - Clés[i]) modulo 26<br>
où x modulo 26 désigne le reste de la division entière de x par 26. Pour le chiffrement il suffit d'effectuer l'addition des deux lettres puis de soustraire 26 si le résultat dépasse 26. Pour le déchiffrement il suffit d'effectuer la soustraction et d'additionner 26 si le résultat est négatif. Le déchiffrement est aussi une opération identique à celle du chiffrement pour la clé obtenue par Clé'[i] = 26 - Clé[i]. Un disque à chiffrer (en), qui utilise une représentation circulaire de l'alphabet (après Z on a A), permet de réaliser directement cette opération.
<br><br>
Le chiffré d'un texte suffisamment long constitué uniquement de A donne la clé (0 + x = x, soit A + Clés[i] = Clés[i]).
