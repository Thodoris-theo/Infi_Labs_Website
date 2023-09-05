// script.js
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let isOpen = false;

menu.onclick = () => {
    if (isOpen) {
        setTimeout(() => {
            navlist.style.right = '-100%';
        }, 400); 
        menu.classList.remove('fa-times'); 
        menu.classList.add('fa-bars');
    } else {
        navlist.style.right = '0';
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
    }
    isOpen = !isOpen;
};

$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("header.navbar").addClass("active");
        } else {
            $("header.navbar").removeClass("active");
        }
    });
});

