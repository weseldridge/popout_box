$(document).ready(function() {
    $('#container').scrollspy({
        min: $(this).offset().top,
        max: $(this).offset() + $(this).height,
        onEnter: function(element, position) {
            $('#popbox-wrapper').animate({
                right: '+= 250px'
            },500);
        },
        onLeave: function(element, position) {
            $('#popbox-wrapper').animate({
                right: '-= 250px'
            },500);
        }
    });
});