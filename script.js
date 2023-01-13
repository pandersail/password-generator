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

let lowerCaseCharacters = false
let upperCaseCharacters = false
let numberCharacters = false
let oddCharacters = false
let passwordLength = 0






/* */
// Function to prompt user for password options
function getPasswordOptions() {

alert("Welcome to web's safest password generator, 30X Keys – powered by silicone micro-brain technology.")
//Welcome alert

  i = 0
  while (i < 1) {
// while loop to include break property in case of non-accepted input
   
  passwordLength = prompt("How many characters-long do you want your password to be?")

// convert input to integer
  passwordLength = parseInt(passwordLength)

  if (passwordLength < 10 || passwordLength > 64 || passwordLength % 1 !== 0) {
    alert("You have to choose a number between 10 and 64. Please reload the page to start again.")
    break;
  };
// Conditions for passwordLength to be accepted, otherwise break if length or type of input incorrect (not int)
 

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
}



// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}




//getPasswordOptions()

/*If the value is correct, prompt if password should contain:
- Lowercase characters
- Uppercase characters
- Numeric
- Special characters
If none are selected from the above list alert at least one type should be selected and restart

If at least one is selected:
Select relevant arrays to math.random to the length of the value inputted
Print the password on the screen*/






// No need to edit past below
// Get references to the #generate element
let conditionsBtn = document.querySelector('#conditions')
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function generateConditions() {
  let conditions = getPasswordOptions()
  let conditionsText = document.querySelector('#conditions');

  conditionsText = conditions;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
conditionsBtn.addEventListener('click', generateConditions);
generateBtn.addEventListener('click', writePassword);

/*Yes, the given pseudo-code is a good outline for a password generator. However, 
there are a couple of things that can be improved:

Instead of using a break statement to handle invalid input for the password length, 
it would be better to use a while loop to repeatedly prompt the user until valid input is entered.

To check whether at least one of the character types (lowercase, uppercase, numeric, special characters) 
has been selected, you can use a variable (e.g. has_selected) and set it to false initially. Then, for each type that is selected, 
set has_selected to true. At the end of the character type selection, check if has_selected is still false. If it is, prompt the user 
to select at least one type again.

It would be better to use a library function to generate a random number, rather than Math.random()




# Display welcome message
alert("Welcome to the password generator!")

# Initialize password length and character type variables
password_length = 0
has_lowercase = false
has_uppercase = false
has_numeric = false
has_special = false

# Prompt user for password length and validate input
while (password_length < 10 || password_length > 64)
    password_length = prompt("Enter the desired length of your password (between 10 and 64 characters):")
    if (password_length < 10 || password_length > 64)
        alert("Invalid input. Please enter a number between 10 and 64.")

# Prompt user for character types to include in password
has_lowercase = confirm("Include lowercase characters in the password?")
has_uppercase = confirm("Include uppercase characters in the password?")
has_numeric = confirm("Include numeric characters in the password?")
has_special = confirm("Include special characters in the password?")

# Validate that at least one character type has been selected
if (!has_lowercase && !has_uppercase && !has_numeric && !has_special)
    alert("You must select at least one character type.")
    # Repeat character type selection
else
    # Generate password using selected character types and desired length
    password = ""
    while (password.length < password_length)
        if (has_lowercase)
            password += random_lowercase_char()
        if (has_uppercase)
            password += random_uppercase_char()
        if (has_numeric)
            password += random_numeric_char()
        if (has_special)
            password += random_special_char()
    # Display generated password
    alert("Your generated password is: " + password)
*/
