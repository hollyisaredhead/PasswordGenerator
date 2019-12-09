var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "{", "}", "[", "]", "(", ")"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function passwordL() {

    var length = parseInt(prompt(
        "How many characters will your password be? Enter 8-128")); 
        if (isNaN(length) === true) {
            alert("Enter valid number");
            return;
        }

        if (length < 8) {
            prompt("Enter valid number 8-128");
            return;
        }

        if (length > 128) {
            prompt("Enter valid number 8-128");
            return;

        }

        var specialChar = confirm("Special characters?");
        var numbers = confirm("Numbers?");
        var lowerCase = confirm("Lowercase?");
        var upperCase = confirm("Uppercase?");
        
    

    if (
        specialChar === false &&
        numbers === false &&
        upperCase === false &&
        lowerCase === false
    ) {
        alert("Select at least one character type");
        return;
    }

    var passwordChoices = {
        length: length,
        specialChar: specialChar,
        numbers: numbers,
        upperCase: upperCase,
        lowerCase: lowerCase
    };
    return passwordChoices;

}

function getRandom(pass) {
    var randIndex = Math.floor(Math.random() * pass.length);
    var randElement = pass[randIndex];

    return randElement;
}

function genPassword() {
    var passOptions = passwordL();
    var outcome = [];
    var charChoices = [];
    var eachChar = [];


if (passOptions.specialChar) {
    charChoices = charChoices.concat(specialChar);
    eachChar.push(getRandom(specialChar));
}

if (passOptions.numbers) {
    charChoices = charChoices.concat(numbers);
    eachChar.push(getRandom(numbers));
}

if (passOptions.upperCase) {
    charChoices = charChoices.concat(upperCase);
    eachChar.push(getRandom(upperCase));
}
if (passOptions.lowerCase) {
    charChoices = charChoices.concat(lowerCase);
    eachChar.push(getRandom(lowerCase));
}

for (var i = 0; i < passOptions.length; i++) {
    var charChoices = getRandom(charChoices);

    outcome.push(charChoices);
}

for (var i = 0; i < eachChar.length; i++) {
    outcome[i] = eachChar[i];
}

return outcome.join("");
}

var generateBtn = document.querySelector("#generate");

function btnPass() {
    var password = genPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}



//function copyToClipboard() {
    //var passwordText = document.querySelector("#password");

   // passwordText.select();
   // document.execCommand("copy");

    //alert(
     //   "Your password " + passwordText.value + " was copied to your clipboard."
   // );
//}
generateBtn.addEventListener("click", btnPass);


