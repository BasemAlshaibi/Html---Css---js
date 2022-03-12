$(document).ready(function() {

    ///********** smooth scrolling ************////
    // Add smooth scrolling to all links
    $(".header .logoNav .navbar ul li a ").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    ///********** EnD smooth scrolling ************////




    ///********** start Active Links ************////
    $(".header .logoNav .navbar ul li a ").click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    ///********** start Active Links  ************////



    ///********** start header slider ************////
    $('.bxslider').bxSlider({

        pager: false
    });

    ///********** End header slider ************////


    $("body").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "1px solid aquamarine",
        cursorborderradius: 0
    });

    ///********** End header slider ************////

    ///********** mixitup flter************////

    var mixer = mixitup('.container');

    ///********** start  our auto slider ************////
    (function autoSlider() {

        $('.ourSlider .selected').each(function() {

            if (!$(this).is(':last:child')) {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass('selected').next().addClass('selected').fadeIn();
                    autoSlider();

                });
            } else {

                $(this).delay(3000).fadeout(1000, function() {

                    $(this).removeClass('selected');

                    $('.ourSlider div').eq(0).addClass('selected').fadeIn();

                    autoSlider();



                });
            }
        });
    });




    ///********** End our auto slider ************////

});