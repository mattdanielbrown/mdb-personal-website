jQuery(document).ready(function($){
    
    // Set buttons to de-focus after being clicked
    $("button").on('click', function(e) {
        this.blur();
    });

});