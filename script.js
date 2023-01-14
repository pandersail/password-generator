// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Declaring variables
let lowerCaseCharacters = false
let upperCaseCharacters = false
let numberCharacters = false
let oddCharacters = false
let passwordLength = 0
let randomArray = []
let randomNumbers = []
let allArrays = []
let randomPassword = []
let numbers = {};



alert("Welcome to web's safest password generator, 30X Keys – powered by silicone micro-chip technology.")
// Welcome alert

// Function to prompt user for password options
function getPasswordOptions() {

  i = 0
  while (i < 1) {
// while loop to include break property in case of non-accepted input
   
  // passwordLength = prompt("How many characters-long do you want your password to be?")

  // if (passwordLength < 10 || passwordLength > 64 || passwordLength % 1 !== 0) {
  //   alert("You have to choose a number between 10 and 64. Please reload the page to start again.")
  //   break;
  // };
// Conditions for passwordLength to be accepted, otherwise break if length or type of input incorrect (not int)

// convert input to integer
    passwordLength = parseInt(passwordLength)
 

  lowerCaseCharacters = confirm("Do you want include lower-case characters in your password?")
  upperCaseCharacters = confirm("Do you want include upper-case characters in your password?")
  numberCharacters = confirm("Do you want include numbers in your password?")
  oddCharacters = confirm("Do you want include special characters in your password?")
// Type of characters confirm notifications

  if (lowerCaseCharacters === false &&
      upperCaseCharacters === false &&
      numberCharacters === false &&
      oddCharacters === false) {
        alert("You have to choose at least one type of character to make-up the password. Please reload the page to start again.")
        break;
      };
// Non-accepted conditions for type of characters where it breaks to start again
  i++ 
  }
  
  //return passwordLength
}

//let myPasswordLength = getPasswordOptions
//console.log(myPasswordLength)

// Function for getting a random element from an array
function getRandom(arr) {
  i = 0
  while (i < 1) {

                     specialCharacters.sort(() => Math.random() - 0.5);
                     randomNumbers = numericCharacters.sort(() => Math.random() - 0.5);
                     lowerCasedCharacters.sort(() => Math.random() - 0.5);
                     upperCasedCharacters.sort(() => Math.random() - 0.5);

    allArrays = specialCharacters.concat(randomNumbers, lowerCasedCharacters, upperCasedCharacters);

    passwordLength = prompt("How many characters-long do you want your password to be?")

    //test
  if (passwordLength < 10 || passwordLength > 64 || passwordLength % 1 !== 0) {
    alert("You have to choose a number between 10 and 64. Please reload the page to start again.")
    break;
  };//

    randomArray = allArrays.sort(() => Math.random() - 0.5);

    randomPassword = randomArray.slice(0,passwordLength) // !!!!need to figure how to replace by passwordLength

    console.log(randomPassword)
    //return randomPassword
      
i++
  }
  return randomPassword
};

// Function to generate password with user input
function generatePassword() {
    let finalPassword = getRandom();
    finalPassword = finalPassword.join("")
    return finalPassword

}


// Select relevant arrays to math.random to the length of the value inputted
// Print the password on the screen*/




//getPasswordOptions()
//getRandom()


let conditionsBtn = document.querySelector('#conditions')
// Reference to #condition element

let generateBtn = document.querySelector('#generate');
// Get references to the #generate element

function generateConditions() {
  let conditions = getPasswordOptions()
  let conditionsText = document.querySelector('#conditions');

  conditionsText = conditions;
}
// add button for conditions, eliminating the first automatic alert when visiting page


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// Write password to the #password input


conditionsBtn.addEventListener('click', generateConditions);
generateBtn.addEventListener('click', writePassword);
// Add event listener to generate button
