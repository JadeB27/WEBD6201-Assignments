console.log('selectors.js loaded');

function highlight(element){
    element.css("background-color", "#fcf30040");
}

function cssSelectors(){
    $('p').css('background-color', '#2a9d8f');

    // using classes
    $('.red-box').css('background-color', '#2a9d8f');

    //using ids
    $('#list').css('background-color', '#2a9d8f');

    //multiple selectors
    $('h1, h2').css('background-color', '#3a86ff');
    //grabs first li
    $('li:first').css('background-color', '#red');
    //grabs every even number of li
    $('li:even').css('background-color', '#red');  
}

function traversingtheDOM(){
    //finds all li elements and changes background colour
    $('#list').find('li').css('background-color', '#3a86ff'); 
    //makes the body(the right outline of the page) light blue
    $('#list').parents('body').css('background-color', '#3a86ff');
    
    //direct parent(changes the font size of the div)
    $('#list').parent('div').css('font-size', '20px');

    //.sibling('div') <- sibling divs of elements

    //prev & next
    $('#list').prev().css('background-color', '#3a86ff');
    $('#list').next().css('background-color', '#3a86ff');
}

function filtering(){
    //selects all even lis and changes background-color
    $('#list').find('li').filter(':even').css('background-color', '#3a86ff');

    //whatever gets returned true, the css applies
    $('list').filter(function (index) {
        return index % 3 === 0;
    }).css('background-color', '#219ebc');

    //highlighting (uses highlight function from above)
    let items = $('#list').find('li');
    highlight(items);
}

function addingReplacingRemoving(){
    //adds another list item
    $('ul ul:first').append($("<li>I'm going to be the last item.</il>"));
    //same as above
    $("<li>I'm going to be the last item.</il>").appendTo('ul ul:first');
    //makes it first list item
    $("<li>Now I'm first!!.</il>").prependTo('ul ul:first');

    //after
    $('.red-box').after("<div class='red-box'>Another Red Box!</div>");
    //before
    $('.red-box').before("<div class='red-box'>Another Red Box!</div>");

    let text1 = "Last night, Darth Vader came down from planet Vulcan.";

    //replace with new element
    $('li').replaceWith(`<li>${text1}</li>`);

    //replace all red boxes with green boxes
    $("<div class='green-box'>Created Green Box</div>").replaceAll(".red-box");
    
    //remove *PERMA DELETES*
    $('li').remove();

    //detaching *CAN REVERSE THE REMOVE*
    let detachedItems = $('li').detach();
    //adds it back
    $('#content').append(detachedItems);
}




//addingReplacingRemoving();
//filtering();
//traversingtheDOM();
//cssSelectors();