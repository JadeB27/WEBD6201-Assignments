console.log("connected user");
/*
* Name: Jade Bedlington
* Student ID: 100822822
* Date Completed: 2023-02-28
*/
/*
* Class to create new user
 */
export class User {

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    /**
     * @property {function} displayUser Prints users details: user name, email, and password
     * @returns {string}
     */
    displayUser() {
         return `Name: ${this.firstName} ${this.lastName}
         Email: ${this.email}
         Password: ${this.password}`
    }
}