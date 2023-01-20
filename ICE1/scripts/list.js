// ADDING ITEMS TO START AND END OF LIST


// Get the <ul> element
let list = document.getElementsByTagName('ul')[0];


// ADD NEW ITEM TO END OF LIST

// Create element
let newLastItem = document.createElement('li');
// Create text node
let newTextLast = document.createTextNode('half and half cream');
// Add text node to element
newLastItem.appendChild(newTextLast);
// Add element end of list
list.appendChild(newLastItem);


// ADD NEW ITEM START OF LIST


// Create element
let newFirstItem = document.createElement('li');
// Create text node
let textFirst = document.createTextNode('lettuce');
// Add text node to element
newFirstItem.appendChild(textFirst);
// Add element to list
list.insertBefore(newFirstItem, list.firstChild);



// All <li> elements
let listItems = document.getElementsByTagName('li');


// ADD A CLASS OF COOL TO ALL LIST ITEMS


// Counter variable
let i;
// Loop through elements
for(i = 0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

// h2 element
let heading = document.querySelector('h2');
// h2 text
let headingText = heading.firstChild.nodeValue;
// No. of <li> elements
let totalItems = listItems.length;
// Content
let newHeading = headingText + '<span>' + totalItems + '</span>';
// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = newHeading;
