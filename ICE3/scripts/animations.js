function fadeInOutTo() {
    //fade out out 3 secs
    $('.red-box').fadeOut(3000);

    //fade out in 3 secs
    $('.red-box').fadeIn(1500);

    //fade to an opacity
    $('.green-box').fadeTo(2000, .3);

    //fade to half opacity
    $('.blue-box').fadeTo(1000, .5);

    //toggle display(went to none)
    $('.blue-box').toggle();
    //toggle display(went to block, but remembered the fadeTo)
    $('.blue-box').toggle();
}


function hideElement() {
    //hides the element for 1 sec
    $('.red-box').hide(1000);
    //shows hidden element after 2 secs
    $('.red-box').show(2000);
    //slides item up after 2 secs
    $('.red-box').slideUp(2000);
    //slides item up after 2 secs
    $('.red-box').slideDown(2000);
    //toggle
    $('.red-box').slideToggle(2000);
    $('.red-box').slideToggle(2000);
}

function chainAnimations() {
    $('.red-box').fadeTo(1000, .5);
    //delays by 1 sec
    $('.green-box').delay(1000).fadeTo(1000, .5);

    //chains the animation functions
    $('.blue-box').delay(2000).fadeTo(1000, 0.5).fadeTo(1000, 1.0).delay(1000).fadeOut();
}

chainAnimations();
// hideElement();
// fadeInOutTo();