//aducem toate imputurile aici

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const emai = document.getElementById('email');

// aducem si Formul aici

const form = document.getElementById('myForm');

//culorile de validare (schimb asta in css)

const green = '#4caf50';
const red = '#f44336';

//Incepem sa validam inputurile

//firstName

function validateFirstName() {
    //verificam daca e empty
    if (checkIfEmpty(firstName)) return;

    //verificam daca are numai litere

    if (!checkIfOnlyLetters(firstName)) return; //daca NU contine doar litere
    return true;
}

function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) //The trim() method removes whitespace from both sides of a string.
    {
        //set field invalid
        setInvalid(field, `${field.firstName} must not be empty`);// setam pe invalid si afisam un error msg
        return true;
    }
    else {
        //set field valid
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if (value === '') return true;
    return false;
}
function setInvalid(field, message) {
    field.className= 'invalid';// adaug clasa 'invalid' (e de la materialize)
    field.nextElementSibling.innerHTML = message; //atasez span ului de dupa field (ex: linia 27,32,52 ) un mesaj de eroare
    field.nextElementSibling.style.color = red;
}

function setValid(field, message) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = ''; //nu ne mai trebuie un mesaj
    //field.nextElementSibling.style.color = green;

}

function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) // aveam doar caractere a to z si A to Z
    {
        setValid(field);
        return true;
    }
    else {
        setInvalid(field, `${field.firstName} must contain only letters`);
        return false;
    }
}