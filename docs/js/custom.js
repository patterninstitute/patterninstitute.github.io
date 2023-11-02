$(function () {
    //    sticky navbar//
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".navbar");
        if (scrolling >= -0) {
            sticky.addClass("navbg");
        } else {
            sticky.removeClass("navbg");
        }
    });
    // animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1500);
                return false;
            }
        }
    });


    // gallery part js//
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: false,
        spinner: 'rotating-plane'
    });


    // navbar menu bar  icon //
    $(".bar-icon").click(function () {
        $(".bar-icon").addClass("d-none");
        $(".bar-icon").removeClass("d-block");
    });
    $(".bar-icon").click(function () {
        $(".close-icon").addClass("d-block");
        $(".close-icon").removeClass("d-none")
    });


    $(".close-icon").click(function () {
        $(".bar-icon").addClass("d-block");
        $(".bar-icon").removeClass("d-none")
    });
    $(".close-icon").click(function () {
        $(".close-icon").addClass("d-none");
        $(".close-icon").removeClass("d-block")
    });

    // menu add and remove //
    $(".bar-icon").click(function () {
        $(".navbar-nav").addClass("nav-visible");
        $(".navbar-nav").removeClass("nav-invisible");
    });
    $(".close-icon").click(function () {
        $(".navbar-nav").addClass("nav-invisible");
        $(".navbar-nav").removeClass("nav-visible")
    });

});

$(function () {
    $('.navbar-toggler-icon').addClass('bi bi-list');

    $(".navbar-toggler").click(function () {
        $(".bi").toggleClass("bi-x-lg");
        $(".navbar-nav").toggleClass("visible");
    });
});