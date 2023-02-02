/*
* Name: Jade Bedlington
* Student ID: 100822822
* Date Completed: 2023-02-01
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

//grabbing the submit button by its id 'submit-button'
let submitbutton = document.getElementById('submit-button');
//all pages won't have submit button. Asking if the page has the submit button
if(submitbutton){
    //adding the click event handler and passing my timedRedirect function through it
    //(when clicked, pass through function)
    submitbutton.addEventListener('click', timedRedirect, false);
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
if(pageTitle === 'Products'){
    //creating <p> element
    let productHeader = document.createElement('p');
    //adds homeText class to <h1>
    productHeader.className = "productText";
    //adding text to the <p> element
    productHeader.innerHTML = 'This page displays three of my favourite pieces of media. The first piece of media I chose was my favourite game, "Valorant". I have been playing the game for 2 years now, probably everyday, it has become my night routine to play before I sleep. The second piece of media I chose is a TV-show called "The Walking Dead." The show actually just finished its 11th season, and sadly ended this November. This is my favourite show because I have been watching it since I was 8 and it is nostalgic for me. The last piece of media I chose is a movie called "This is the End." I have watched hundreds of movies throughout my life but this one, without fail, makes me laugh the most out of any movie I have seen, no matter how many times I watch it.';
    //appending <p> element to the <body> element so it displays in the body
    document.getElementsByTagName('body')[0].appendChild(productHeader);
}

//if the title is Services
if(pageTitle === 'Services'){
    //creating <p> element
    let newHeader = document.createElement('p');
    //adds serviceText class to <h1>
    newHeader.className = "serviceText";
    //adding text to the <p> element
    newHeader.innerHTML = 'This page displays three of my best skills that I offer my clients. One being customer service, I worked as a receptionist at Whitby Mazda for a summer and it really benefited my social skills and customer service skills. In the future if I need to talk with clients about code requirements, I have the means to do so respectfully and skillfully. The next skill I would like to dislpay is Web Design(mostly the colour coding parts, still trying to get the positioning down), I have taken a lot of interest in it, the last 2 years and I feel it is one of my strong suits out of all the coding I have done. It is something I actually enjoy doing, it is not something I would be forcing myself to do. The final skill I have is computer programming, I am aware of how broad computer programming is, but one of my skills is knowing a lot of different and various languages and easily switching between them. I am by no means a computer programming genius and I do not know everything there is to know, but during my Computer Programming course I found it fairly easy for myself to switch between languages while doing multiple assignments.';
    //appending <p> element to the <body> element so it displays in the body
    document.getElementsByTagName('body')[0].appendChild(newHeader);
    
}
//if the title is About Us
if(pageTitle === 'About Us'){
    //creating <p> element
    let newHeader = document.createElement('p');
    //adds aboutText class to <h1>
    newHeader.className = "aboutText";
    //adding text to the <p> element
    newHeader.innerHTML = 'This page is about me! The first photo I put up is of my dog, Ozzy, he is 1 years old and he is a mini AussiDoodle(australian shepherd and mini poodle mix). He is a super happy guy, very anxious though. He enjoys herding cars outside, which we are working on! The second picture is of my pc setup, this is where I spend most of my nights playing games with my friends or doing work, so I put it down as one of my hobbies! The third picture is of me playing tennis in the summer. This is one of my hobbies and something I enjoy, I have been playing tennis since I was around 7 years old. I played competitively for a long time, but I did end up quitting that part in grade 12. I met my best friend playing in Ajax and now we go out and play for fun!';
    //appending <p> element to the <body> element so it displays in the body
    document.getElementsByTagName('body')[0].appendChild(newHeader);
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