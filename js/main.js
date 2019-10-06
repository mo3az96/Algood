$(document).ready(function () {
    // Search
    $('.mo-search-icon').click(function () {
        $(this).toggleClass("search-open")
        $(".search").fadeToggle(500);
        $(".overlay").toggle();
        $('.search-input').focus();
    });
    $('.overlay').click(function () {
        $(".overlay").toggle();
        $('.mo-search-icon').toggleClass("search-open");
        $(".search").fadeToggle(500);
        $('.search-input').focus();
    });
    // Side Menu
    $('.mo-menu-icon').click(function () {
        $(".xs-nav").toggle()
        $(".nav-links").addClass("inscreen")
        $(".nav-links").removeClass("outscreen")
        $('body, html').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $(".xs-nav").fadeOut(700)
        $(".nav-links").addClass("outscreen")
        $(".nav-links").removeClass("inscreen")
        $('body, html').css("overflow", "auto");
    });
    $(".nav-links").click(function (e) {
        e.stopPropagation();
    });
    $(".close-btn").click(function (e) {
        $(".xs-nav").fadeOut(700)
        $(".nav-links").addClass("outscreen")
        $(".nav-links").removeClass("inscreen")
        $('body, html').css("overflow", "auto");
    });

    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 10,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        rewind: true,
        nav: false,
        dots: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });

    // Cats Slider
    $('.cats-slider').owlCarousel({
        items: 6,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        stagePadding: 5,
        loop: false,
        rewind: true,
        nav: true,
        dots: false,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
            },
            768: {
                items: 3,
                dots: true,
                nav: false,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 6
            }
        }
    });

    // Products Slider
    $('.Product-slider').owlCarousel({
        items: 4,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: false,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
            },
            768: {
                items: 2,
                dots: true,
                nav: false,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    // Mobile if
    if ($(window).width() < 992) {
        $(".product-anchor").addClass("moaccordion");
        $(".products-ul").addClass("mopanel");
        $(".nav-foot-header").addClass("moaccordion");
        $(".nav-foot").addClass("mopanel");
        //$(".slider-cont").removeClass("container");
    }

    // Accordion
    var acc = document.getElementsByClassName("moaccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});