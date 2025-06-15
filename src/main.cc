#include <iostream>

using namespace std;

std::string vigenere_number_crypt(std::string key, std::string str);
std::string vigenere_number_uncrypt(std::string key, std::string str);

int main()
{
    // variables
    // ---------
    std::string message;
    std::string key;
    
    // entrée utilisateur
    // ------------------
    // msg
    cout << "Entrez un message :";
    cin >> message;
    // key
    cout << "Entrez une clé :";
    cin >> key;
    
    // calcul + print result
    // ---------------------
    cout << vigenere_number_crypt(key, message) << endl;
    cout << vigenere_number_uncrypt(key, message) << endl;
    return 0;
}