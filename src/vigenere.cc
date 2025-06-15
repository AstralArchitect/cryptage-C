#include <iostream>

std::string vigenere_number_crypt(std::string key, std::string str)
{
    // first, convert the user-prompted string to a vigenerable one
    // ------------------------------------------------------------
    // remove all non-alphabetic characters
    for (size_t i = 0; i < str.size(); i++)
       if (!std::isalpha(str[i]))
           str.erase(i, 1);
    // convert all characters to uppercase
    for (size_t i = 0; i < str.size(); i++)
       str[i] = std::toupper(str[i]);

    // second, convert the user-prompted key to a vigenerable one
    // ----------------------------------------------------------
    // remove all non-alphabetic characters
    for (size_t i = 0; i < key.size(); i++)
       if (!std::isalpha(key[i]))
           key.erase(i, 1);
    // convert  all characters to uppercase
    for (size_t i = 0; i < key.size(); i++)
       key[i] = std::toupper(key[i]);

    // Now we have a vigenerable string. We can now crypt it.
    // ------------------------------------------------------
    // iterate through the string, string[i] = (string[i] + key[i % key.size()]) % 26
    for (size_t i = 0; i < str.size(); i++)
        str[i] = ((str[i] - 'A') + (key[i % key.size()] - 'A')) % 26 + 'A';
    // return the string
    return str;
}

std::string vigenere_number_uncrypt(std::string key, std::string str)
{
    // first, convert the user-prompted string to a vigenerable one
    // ------------------------------------------------------------
    // remove all non-alphabetic characters
    for (size_t i = 0; i < str.size(); i++)
       if (!std::isalpha(str[i]))
           str.erase(i, 1);
    // convert all characters to uppercase
    for (size_t i = 0; i < str.size(); i++)
       str[i] = std::toupper(str[i]);

    // second, convert the user-prompted key to a vigenerable one
    // ----------------------------------------------------------
    // remove all non-alphabetic characters
    for (size_t i = 0; i < key.size(); i++)
       if (!std::isalpha(key[i]))
           key.erase(i, 1);
    // convert  all characters to uppercase
    for (size_t i = 0; i < key.size(); i++)
       key[i] = std::toupper(key[i]);

    // Now we have a vigenerable string. We can now uncrypt it.
    // ------------------------------------------------------
    // iterate through the string, string[i] = (string[i] + key[i % key.size()]) % 26
    for (size_t i = 0; i < str.size(); i++)
        str[i] = ((str[i] - 'A') - (key[i % key.size()] - 'A') + 26) % 26 + 'A';
    // return the string
    return str;
}