jQuery(document).ready(function($){

    /*      VARIABLES       */

    var formSubmitButton = $("#submit-input");
    


    /*      FUNCTIONS       */




    /*      MAIN SCRIPT     */

    /* Set buttons to de-focus after being clicked      */
    $("button").on('click', function(e) {
        this.blur();
    });

    /* Smooth scroll between anchor links (and de-focus them after being clicked)      */
    $('a[href*="#"]:not([href="#"])').click(function() {
        this.blur();
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

    /* Defocus submit form button after it's clicked       */
    formSubmitButton.on('click', function(e) {
       this.blur();
    });


});