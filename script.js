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

    function validateFirstName()
    {
        //verificam daca e empty
        if(checkIfEmpty(firstName)) return;
    }

    function checkIfEmpty(field)
    {
            if(isEmpty(field.value.trim())) //The trim() method removes whitespace from both sides of a string.
        {
            //set field invalid
            return true;
        }
        else
        {
            //set field invalid
            return false;
        }
    }

    function isEmpty(value)
    {
        if(value === '') return true;
        return false;
    }