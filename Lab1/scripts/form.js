console.log("connected form");
/*
* Name: Jade Bedlington
* Student ID: 100822822
* Date Completed: 2023-02-28
*/

/**
 * validateFirst - validated user first name entry through registration form
 * @param {string} first
 * @returns html element for error message
 */
export function validateFirst(first) {
    if (first.length < 2) {
        return "<p>You have entered a first name that is too short, must be greater than 2. Please re-enter all inputs.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validateLast- validated user last name entry through registration form
 * @param {string} last
 * @returns html element for error message
 */
export function validateLast(last) {
    if (last.length < 2) {
        return "<p>You have entered a last name that is too short, must be greater than 2. Please re-enter all inputs.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validateEmail- validated user email entry through registration form
 * @param {string} email
 * @returns html element for error message
 */
export function validateEmail(email) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.length < 8) {
        return "<p>You have entered an email that is too short, must be greater than 8.</p>"
    }
    else if (!email.match(validRegex)) {
        return "<p>You have entered an email that is invalid, must have an @ and a period(.) after the @</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validatePassword- validated user password entries 1 and 2 are the same through ristration form
 * @param {string} passord
 * @returns html element for error message
 */
export function validationpass(password) {
    if (password.length < 6) {
        return "<p>Your password must be 6 characters in length, Please re-enter all inputs.</p>";
    } else {
        return "<p></p>"
    }

};

/**
 * validatePassword- validated user password entries 1 and 2 are the same through ristration form
 * @param {string} passord1
 * @param {string} password2
 * @returns html element for error message
 */
export function validatePassword(pass1, pass2) {
    if (pass1 == pass2) {
        return "<p></p>";
    } else {
        return "<p>Your passwords do not match. Please re-enter all inputs.</p>"
    }

};