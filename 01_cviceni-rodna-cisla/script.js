// validates Czech birth number
function validateBirthNumber (number) {
    if (number.length !== 10) {
        document.querySelector('#errorMessage').innerHTML = "Délka rodného čísla musí být 10 znaků";
        return false;
    } else if (!(Number.isInteger(Number(number)))) {
        document.querySelector('#errorMessage').innerHTML = "Rodné číslo musí obsahovat pouze čísla";
        return false;
    } else if (number%11 !== 0) {
        document.querySelector('#errorMessage').innerHTML = "Rodné číslo musí být dělitelné 11";
        return false;
    }
    console.log("Valid number");
    return true;
}

//tests the function validateBirthNumber
const rodnaCislaKOtestovani = [
    '123',
    'nepovím',
    '7060201236',
    '7060201235',
    '123456789123456789',
    '9062185440',
    '123č56q8y7',
  ];
rodnaCislaKOtestovani.forEach((cislo) => {
    //console.log(`Rodné číslo ${cislo} je: `);
    //validateBirthNumber(cislo);
}
);


// checks if the character is a digit 0-9
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isDigit(cislo) {
    return digits.includes(cislo);
}

// logs invalid characters
function logInvalidCharacters(number) {
    Array.from(number).forEach((a) => {
        if (isNaN(a)) {
            console.log(`Invalid character: ${a}`);
        }
    });
}

// logs if the character is a digit
function validateCharacters(inputText) {
    const result = [];
    Array.from(inputText).forEach((char) => {
        if (isDigit(Number(char)) === true) {
            result.push({"char": char, "digit": true})
        } else {
            result.push({"char": char, "digit": false})
        }
  })
  return result;
}
//console.log(validateCharacters('21aho1j'));


// when the form is submitted, validates the birth number
// and displays the result
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#rc');
    const number = input.value;
    let result = validateBirthNumber(number);

    if (result === true) {
        document.querySelector('#errorMessage').innerHTML = "Vaše rodné číslo je platné";
    } else { 
        console.log(validateCharacters(number));
    }

    const validation = validateCharacters(number);
    const inputValue = document.querySelector('#inputValue');

    validation.forEach((charObj) => {
        inputValue.innerHTML += `<span style="padding: 8px; border-radius: 8px; background-color: ${charObj.digit ? '#00DD00' : '#FF8686'}">
        ${charObj.char}
        </span>`;
    })

})
