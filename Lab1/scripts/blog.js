console.log("connected blog");
/*
* Name: Jade Bedlington
* Student ID: 100822822
* Date Completed: 2023-03-17
*/

//const for my api key from my account
const apiKey = '34280607-7d98875f2f55b1aea8afb6f5a';
//const for XMLHttpRequest
const xhr = new XMLHttpRequest();
//variable for posts url 
let url_xhr = 'https://jsonplaceholder.typicode.com/posts'
// confiture with open()
xhr.open('GET', `https://pixabay.com/api/?key=${apiKey}&per_page=20&q=animals`, true);
//when the XHR request is completed.
xhr.onload = function () {
    // only execute when done and status is 200
    if (xhr.readyState == 4 & xhr.status == 200) {
        //extract the array of images
        const pics = JSON.parse(this.responseText).hits;
        //const for XMLHttpRequest for posts
        const xhrPosts = new XMLHttpRequest();
        // confiture with open()
        xhrPosts.open('GET', url_xhr, true);
        // create the callback to handle the onreadystatechange
        xhrPosts.onload = function () {
            // only execute when done and status is 200
            if (xhr.readyState == 4 & xhr.status == 200) {
                //extract the array of images(slice is used to only exact up to 20 posts)
                const posts = JSON.parse(this.responseText).slice(0, 20);
                posts.forEach((post, index) => {
                    //making the index of images a const named image
                    const image = pics[index];
                    //creating a div element for attaching the id blog-posts from my blog.html div container
                    let div1 = $(`<div class="col-lg-4 col-md-6"></div>`).appendTo('#blog-posts');
                    //adding another div element for the card with the class card from bootstrap and putting it inside div1
                    let div2 = $(`<div class="card"></div>`).appendTo(div1);
                    //adding an img element for the card's img with the class card-img-top from bootstrap and putting it inside div2
                    let img = $(`<img class="card-img-top" src="${image.largeImageURL}" alt="${image.tags}"></img>`).appendTo(div2);
                    //adding another div element for the card's body with the class card-body from bootstrap and putting it inside div2
                    let div3 = $(`<div class="card-body"></div>`).appendTo(div2);
                    //adding an h5 element for the card's title with the class card-title from bootstrap and putting it inside div3
                    let h5 = $(`<h5 class="card-title">${post.title}</h5>`).appendTo(div3);
                    //adding an hr element to help with spacing(like br)
                    let hr1 = $(`<hr>`).appendTo(div3);
                    //adding a p element for the card's text with the class card-text from bootstrap and putting it inside div3
                    let p1 = $(`<p class="card-text">${post.body}</p>`).appendTo(div3);
                    //adding another hr element to help with spacing(like br)
                    let hr2 = $(`<hr>`).appendTo(div3);
                    //adding another p element for the card's reference with the class text-muted from bootstrap and putting it inside div3
                    let p2 = $(`<p class="text-muted"><small>Photo by ${image.user} on Pixabay</small></p>`).appendTo(div3);
                });
            } else {
                //catch an error and display it to the console
                console.error('Error fetching posts');
            }
        };
        //sending the request
        xhrPosts.send();
    } else {
        //catch an error and display it to the console
        console.error('Error fetching images');
    }
};
// send the request
xhr.send();