console.log("connected app");
/*
* Name: Jade Bedlington
* Student ID: 100822822
* Date Completed: 2023-02-28
*/

//function to redirect the user to a certain page after 3 seconds.
function timedRedirect(e){
    //Creating a variable for first name, by grabbing the textboxes' id.value
    let contactFirstName = document.getElementById('firstName').value;
    //Creating a variable for last name, by grabbing the textboxes' id.value
    let contactLastName = document.getElementById('lastName').value;
    //Creating a variable for contact number, by grabbing the textboxes' id.value
    let contactNumber = document.getElementById('telNo').value;
    //Creating a variable for email address, by grabbing the textboxes' id.value
    let contactEmail = document.getElementById('exampleFormControlInput1').value;
    //Creating a variable for message, by grabbing the textboxes' id.value
    let contactMessage = document.getElementById('exampleFormControlTextarea1').value;

    //writing user's inputs to console.log
    console.log("Name: " + contactFirstName + " " + contactLastName + "Contact Number: " + contactNumber + "Email: " + contactEmail + "Message: " + contactMessage);
    //prevents the default behaviour
    e.preventDefault();
    //setting the timer for redirect(3 secs = 3000 ms) + redirecting
    setTimeout(function () {
        //redirects to the index 
        window.location.href = "index.html";
     }, 3000)
}
//This function grabs the text from the textbox for username and inserts the name to the navbar
function usernameInNav(e){
    //prevents the default behaviour
    e.preventDefault();

    //getting the list element
    let list = document.getElementsByTagName('ul')[0];
    //creating the <li> element
    let li = document.createElement('li');
    //creating the <a> element
    let a = document.createElement('a');
    //adding the <a> element to the <li> element
    li.appendChild(a);
    //grabbing the textbox for username's id value
    let loginUsername = document.getElementById('emailLogin').value;
    //creating a p element to store the text inside the textbox
    let loginUsernameNode = document.createElement('p');
    //storing the text
    loginUsernameNode.innerHTML = loginUsername;
    //adding the text node to the <a> element
    a.appendChild(loginUsernameNode);
    //adding nav-item class to the new <li> element
    li.classList.add("nav-item");
    //adding nav-item class to the new <a> element
    a.classList.add("nav-link");
    //adding all the list in between about and contact
    list.insertBefore(li, list.children[6]);
}

//grabbing the submit button by its id 'submit-button'
let submitbutton = document.getElementById('submit-button');
//all pages won't have submit button. Asking if the page has the submit button
if(submitbutton){
    //adding the click event handler and passing my timedRedirect function through it
    //(when clicked, pass through function)
    submitbutton.addEventListener('click', timedRedirect, false);
}


//INSERTING USERNAME BETWEEN CONTACT US AND LOGIN LINK WHEN LOGIN BUTTON IS CLICKED(see usernameInNav function on line 30)


//grabbing the login button by its id 'loginButton'
let loginbutton = document.getElementById('loginButton');
//all pages won't have login button. Asking if the page has the login button
if(loginbutton){
    //adding the click event handler and passing my usernameInNav function through it
    //(when clicked, pass through function)
    loginbutton.addEventListener('click', usernameInNav, false);
}


//ADDING TEXT TO HTML PAGES

//grabbing the title element
let page = document.getElementsByTagName('Title');
//creating a page variable using .innerHTML
let pageTitle = page[0].innerHTML;

//if the title is Home
if(pageTitle === 'Home'){
    //creating <h1> element
    let homeHeader = document.createElement('h1');
    //adds homeText class to <h1>
    homeHeader.className = "homeText";
    //adding text to the <h1> element
    homeHeader.innerHTML = 'Welcome to my website, I hope you enjoy everything we have to offer!';
    //appending <h1> element to the <body> element so it displays in the body
    document.getElementsByTagName('body')[0].appendChild(homeHeader);
}

//if the title is Products
if (pageTitle === 'Products') {
    //if there's a gallery class on the page
    if ($(".gallery")) {
        // callback function to handle the gallery rotation
        $(function () {
            // getting the image tag
            let galleryImage = $(".gallery").find("img").first();
            // getting a list of your images
            let images = [
                "./images/valorant.jpg",
                "./images/ems.jpeg",
                "./images/movieposter.jpg",
                "./images/jett.jpg"
            ]

            // setting the first index
            let imageIndex = 0;

            // calling the setInterval method that will re-call this method at a set interval
            setInterval(function () {
                // increment the image index but no greater than how many images you have
                imageIndex = (imageIndex + 1) % images.length;
                // fade out the current image
                galleryImage.fadeOut(1000, function () {
                    // $(this) refers to the object that calls the callback or in this case galleryImage
                    // change the src attribute of the image
                    $(this).attr("src", images[imageIndex]);
                    // fade it back in
                    $(this).fadeIn(1000);
                    // debug statement
                    console.log($(this).attr("src"));
                })
                //setting the time for more than how long the fade out and in process will take or you won't get the images you expect
            }, 3000); 
        });
    };

    // //creating <p> element
    // let productHeader = document.createElement('p');
    // //adds homeText class to <h1>
    // // productHeader.className = "productText";
    // //adding text to the <p> element
    // productHeader.innerHTML = 'This page displays three of my favourite pieces of media. The first piece of media I chose was my favourite game, "Valorant". I have been playing the game for 2 years now, probably everyday, it has become my night routine to play before I sleep. The second piece of media I chose is a TV-show called "The Walking Dead." The show actually just finished its 11th season, and sadly ended this November. This is my favourite show because I have been watching it since I was 8 and it is nostalgic for me. The last piece of media I chose is a movie called "This is the End." I have watched hundreds of movies throughout my life but this one, without fail, makes me laugh the most out of any movie I have seen, no matter how many times I watch it.';
    // //appending <p> element to the <body> element so it displays in the body
    // document.getElementsByTagName('body')[0].appendChild(productHeader);
}

//if the title is Services
if (pageTitle === 'Services') {
        //if there's a gallery class on the page
        if ($(".gallery")) {
            // callback function to handle the gallery rotation
            $(function () {
                // getting the image tag
                let galleryImage = $(".gallery").find("img").first();
                // getting a list of your images
                let images = [
                    "./images/customerService.jpg",
                    "./images/webDesign.png",
                    "./images/Computer-Programmer.jpg"
                ]

                // setting the first index
                let imageIndex = 0;

                // calling the setInterval method that will re-call this method at a set interval
                setInterval(function () {
                    // increment the image index but no greater than how many images you have
                    imageIndex = (imageIndex + 1) % images.length;
                    // fade out the current image
                    galleryImage.fadeOut(1000, function () {
                        // $(this) refers to the object that calls the callback or in this case galleryImage
                        // change the src attribute of the image
                        $(this).attr("src", images[imageIndex]);
                        // fade it back in
                        $(this).fadeIn(1000);
                        // debug statement
                        console.log($(this).attr("src"));
                    })
                    //setting the time for more than how long the fade out and in process will take or you won't get the images you expect
                }, 3000); 
            });
        };

    // //creating <p> element
    // let newHeader = document.createElement('p');
    // //adds serviceText class to <h1>
    // newHeader.className = "serviceText";
    // //adding text to the <p> element
    // newHeader.innerHTML = 'This page displays three of my best skills that I offer my clients. One being customer service, I worked as a receptionist at Whitby Mazda for a summer and it really benefited my social skills and customer service skills. In the future if I need to talk with clients about code requirements, I have the means to do so respectfully and skillfully. The next skill I would like to dislpay is Web Design(mostly the colour coding parts, still trying to get the positioning down), I have taken a lot of interest in it, the last 2 years and I feel it is one of my strong suits out of all the coding I have done. It is something I actually enjoy doing, it is not something I would be forcing myself to do. The final skill I have is computer programming, I am aware of how broad computer programming is, but one of my skills is knowing a lot of different and various languages and easily switching between them. I am by no means a computer programming genius and I do not know everything there is to know, but during my Computer Programming course I found it fairly easy for myself to switch between languages while doing multiple assignments.';
    // //appending <p> element to the <body> element so it displays in the body
    // document.getElementsByTagName('body')[0].appendChild(newHeader);
    
}
//if the title is About Us
if (pageTitle === 'About Us') {
    //if there's a gallery class on the page
    if ($(".gallery")) {
        // callback function to handle the gallery rotation
        $(function () {
            // getting the image tag
            let galleryImage = $(".gallery").find("img").first();
            // getting a list of your images
            let images = [
                "./images/Ozzy.jpg",
                "./images/setup.jpg",
                "./images/tennis.jpg"
            ]

            // setting the first index
            let imageIndex = 0;

            // calling the setInterval method that will re-call this method at a set interval
            setInterval(function () {
                // increment the image index but no greater than how many images you have
                imageIndex = (imageIndex + 1) % images.length;
                // fade out the current image
                galleryImage.fadeOut(1000, function () {
                    // $(this) refers to the object that calls the callback or in this case galleryImage
                    // change the src attribute of the image
                    $(this).attr("src", images[imageIndex]);
                    // fade it back in
                    $(this).fadeIn(1000);
                    // debug statement
                    console.log($(this).attr("src"));
                })
                //setting the time for more than how long the fade out and in process will take or you won't get the images you expect
            }, 3000); 
        });
    };
    // //creating <p> element
    // let newHeader = document.createElement('p');
    // //adds aboutText class to <h1>
    // newHeader.className = "aboutText";
    // //adding text to the <p> element
    // newHeader.innerHTML = 'This page is about me! The first photo I put up is of my dog, Ozzy, he is 1 years old and he is a mini AussiDoodle(australian shepherd and mini poodle mix). He is a super happy guy, very anxious though. He enjoys herding cars outside, which we are working on! The second picture is of my pc setup, this is where I spend most of my nights playing games with my friends or doing work, so I put it down as one of my hobbies! The third picture is of me playing tennis in the summer. This is one of my hobbies and something I enjoy, I have been playing tennis since I was around 7 years old. I played competitively for a long time, but I did end up quitting that part in grade 12. I met my best friend playing in Ajax and now we go out and play for fun!';
    // //appending <p> element to the <body> element so it displays in the body
    // document.getElementsByTagName('body')[0].appendChild(newHeader);
}
//if the title is Human Resources
if(pageTitle === 'Human Resources'){
    //creating <h1> element
    let newHeader = document.createElement('h1');
    //adding text to the <h1> element
    newHeader.innerHTML = 'Nothing was in the requirements about this page, made it for the next lab if it needs to be added! :)';
    //appending <h1> element to the <body> element so it displays in the body
    document.getElementsByTagName('body')[0].appendChild(newHeader);
}
//if the title is Login
if (pageTitle === 'Register') {
    
    //CREATING ERROR MESSAGE DIV

    $('#firstNameDiv').after('<div id="errorMessage"></div>');
    $('#lastNameDiv').after('<div id="errorMessage2"></div>');
    $('#emailDiv').after('<div id="errorMessage3"></div>');
    $('#passwordDiv').after('<div id="errorMessage4"></div>');
    $('#passwordDiv').after('<div id="errorMessage5"></div>');
    //$('#confirmPasswordDiv').after('<div id="errorMessage"></div>');
}


//CHANGING PRODUCTS TO INTERESTS IN NAV BAR

//grabbing the id for the product link and using .innerHTML to change it to interests
document.getElementById("productLink").innerHTML = "Interests";



//ADDING HUMAN RESOURCES TAB TO TOP NAV BAR

//getting the list element
let list = document.getElementsByTagName('ul')[0];
//creating the <li> element
let li = document.createElement('li');
//creating the <a> element
let a = document.createElement('a');
//creating the Human Resources text node
let HumanResources = document.createTextNode('Human Resources');
//adding the <a> element to the <li> element
li.appendChild(a);
//adding the text node to the <a> element
a.appendChild(HumanResources);
//adding nav-item class to the new <li> element
li.classList.add("nav-item");
//adding nav-item class to the new <a> element
a.classList.add("nav-link");
//adding href for link human resources
a.href = "humanResources.html";
//adding all the list in between about and contact
list.insertBefore(li, list.children[4]);



//ADDING BOTTOM NAV BAR

//creating a <nav> element
let navBottom = document.createElement('nav');
//creating a <div> attribute
let divBottom = document.createElement('div');
//creating the <a> element
let aBottom = document.createElement('a');
//creating the copywrite text node
let copyWrite = document.createTextNode('© Copyright 2023');
//adding <div> into the <nav>
navBottom.appendChild(divBottom);
//putting the <a> element inside the <div>
divBottom.appendChild(aBottom);
//appending copywrite textnode to the <a> element
aBottom.appendChild(copyWrite);
//adding class "navbar fixed-top navbar-light bg-light" to the <nav> element
navBottom.classList.add('myNavbar', 'bg-light', 'navbar-fixed-bottom');
//adding class "container-fluid" to the <div> element
divBottom.classList.add("container-fluid");
//adding class "navbar-brand" to the <a> element
aBottom.classList.add("navbar-brand");
//adding href for a link if needed in the future
aBottom.href = "#";
//append nav bar to the <body element>
document.body.appendChild(navBottom);



//VALIDATING REGISTER PAGE INPUTS/SUBMITTING TO THE CONSOLE


import * as formValidation from "./form.js"
import * as userClass from "./user.js"

// if the submit button is on the page
if ($("#btnRegSubmit")) {
    // click function that calls a callack function
    $("#btnRegSubmit").click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault();
        // create a new user
        // you normally wouldn't do this unless you had validated, but we're going to do it to show how class memebers work in calling the validation
        const unvalidated_user = new userClass.User(
            // get the first name input
            $("#firstNameRegister").val(),
            // get the last name input
            $("#lastNameRegister").val(),
            // get the email input
            $("#emailRegister").val(),
            // get the password input
            $("#passwordRegister").val(),
            // get the confirm password input
            $("#confirmPasswordRegister").val()
        )

        // validate first name
        $("#errorMessage").html(formValidation.validateFirst(unvalidated_user.firstName));
        // validate last name
        $("#errorMessage2").html(formValidation.validateLast(unvalidated_user.lastName));
        // validate email
        $("#errorMessage3").html(formValidation.validateEmail(unvalidated_user.email));
        // validate password length
        $("#errorMessage5").html(formValidation.validationpass(unvalidated_user.password));
        // validate password and confirm password
        let error = formValidation.validatePassword(unvalidated_user.password, $("#confirmPasswordRegister").val());
        $("#errorMessage4").html(error);

        // debug statement for object
        console.log(`User details: ${unvalidated_user.displayUser()}`)
        
        //selecting the form with the forms id
        let form = document.getElementById("formRegister");
        
        //check if the inputs are valid
        if (form.checkValidity()) {
            //reset the form
            form.reset();
        } else {
            //do nothing
            console.log("");
        }
});
}


//RESET BUTTON(CLEAR ERROR MESSAGES)

//if reset button present
if ($("#btnRegReset")) {
    // bind a click event handler
    $("#btnRegReset").click(function (e) {
        // clear out all error message paragraphs
        $("#errorMessage").html("<p></p>");
        $("#errorMessage2").html("<p></p>");
        $("#errorMessage3").html("<p></p>");
        $("#errorMessage4").html("<p></p>");
        $("#errorMessage5").html("<p></p>");
    });
};