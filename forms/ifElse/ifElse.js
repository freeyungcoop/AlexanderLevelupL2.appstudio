//Create Variables
let userName = prompt(`the users first name`);
let userState = prompt(`the users state (2 letters)`); 
let userTemp = Number(prompt(`the users temperature (number) in fahrenheit`));

// convert the first letter of the user name to a capital in case the user used all lower case.
let upperCaseName = userName.charAt(0).toUpperCase() + userName.slice(1

//convert the state entered to all capitals in case the user used lower case.
let upperCaseState = userState.toUpperCase();

//Creating the Array
let msgArray = [upperCaseName, upperCaseState, userTemp];

//Creating message array
let msg = ["wear a warm coat, hat, scarf and gloves", "wear a warm coat but you won't need a hat, scarf or gloves", "wear your warmest coat, a warm hat, a scarf, and warm gloves", "wear a warm coat, hat and gloves. Maybe a scarf too" ]
