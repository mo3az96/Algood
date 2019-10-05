$(document).ready(function () {

    $('.mo-search-icon').click(function () {
        $(this).toggleClass("search-open")
        $(".search").fadeToggle(500)
    });

    $('.mo-menu-icon').click(function () {
        $(".xs-nav").toggle()
        $(".nav-links").addClass("inscreen")
        $(".nav-links").removeClass("outscreen")
    });
    $('.xs-nav').click(function () {
        $(".xs-nav").fadeOut(700)
        $(".nav-links").addClass("outscreen")
        $(".nav-links").removeClass("inscreen")
    });
    $(".nav-links").click(function (e) {
        e.stopPropagation();
    });
    $(".close-btn").click(function (e) {
        $(".xs-nav").fadeOut(700)
        $(".nav-links").addClass("outscreen")
        $(".nav-links").removeClass("inscreen")
    });



    if ($(window).width() < 992) {
        $(".product-anchor").addClass("moaccordion");
        $(".products-ul").addClass("mopanel");
    }
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