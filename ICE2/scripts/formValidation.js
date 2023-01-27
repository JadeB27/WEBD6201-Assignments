// console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
// function ValidateEmailAddressSimple(emailString) {
//     console.log('in ValidateEmailAddress');

//     // check for @ sign
//     let atSymbol = emailString.indexOf('@');
//     if(atSymbol < 1) return false;

//     let dot = emailString.indexOf('.');
//     if(dot <= atSymbol + 2) return false;

//     // check that the dot is not at the end
//     if (dot === emailString.length - 1) return false;

//     return true;
// }

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
// function ValidateEmailAddressRegex(emailString) {
//     // note the / and / at the beginning and end of the expression
//     let emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

//     //return true if the email address is valid - how to use regex
// 	return !!emailString && typeof emailString === 'string'
// 		&& emailString.match(emailRegex);
// }


//Reference: some of Amelia's from in-class on Thursday. Used some of the in-class code to fix up my attempt
//https://www.dofactory.com/javascript/regular-expressions
function validateUsername(username){
    //makes usernameRegex variable equal to the regex validation
    let usernameRegex = '^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$'
    //returns if username matches usernameRegex
    return !!username && typeof username === 'string' && username.match(usernameRegex);
}

//function to clear messages
function clearErrorMessages(){
    //makes errors equal to errorOut classname
    let errors = document.getElementsByClassName('errorOut');
    //loops through errors
    for(let i = 0; i < errors.length; i++){
    }
}

//TODO:
// Make all fields required - DONE
// Ensure the password is redacted into dots on screen when typed in - DONE
// Add a pattern attribute in the telephone element (HTML) - DONE
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!) - DONE
// Validate the username when the form is submitted - DONE
// If it is not valid, be sure to update any of the <p></p> with a good error message and some highlighting (red background, maybe?) - PARTIALLY DONE
// Clear any additional error message and highlighting when the form is reset - DONE


let submitButton = document.getElementById('submit-reg-form');
//if submit button is clicked
if(submitButton){
    // add the click event handler
    submitButton.addEventListener('click', function (event){
        //auto loads page for console.log
        event.preventDefault(); 
        //making username equal to the element id usernameInputs value
        let username = document.getElementById('usernameInput').value;
        //using the function above, validateUsername to make sure the username is valid
        if(validateUsername(username)){
            //display that the username is valid
            console.log('username is valid');
        }
        else{
            //error message if username is not valid
            console.log('username is not valid. Must be between 1 and 20 characters')
        }
    })
};

//making the resetButton variable equal to the id element reset-reg-form
let resetButton = document.getElementById('reset-reg-form');
//if the reset button is clicked
if(resetButton){
    //add the click event listener
    resetButton.addEventListener('click', function(e){
        //cancels the event if cancelable
        e.preventDefault();
        //clears the error messgae
        clearErrorMessages();
    })
};