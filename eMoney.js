
var myNav = document.getElementById('navbar');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-scroll");
        // myNav.classList.remove("nav-transparent");
    }
    else {
        // myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-scroll");
    }
};
