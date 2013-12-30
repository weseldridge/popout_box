$(document).ready(function() {
    $('#container').scrollspy({
        min: 400,
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