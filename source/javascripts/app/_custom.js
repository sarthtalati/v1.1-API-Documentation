/* Custom JS */

$(document).ready(function () {
    

    $('.feedback--submit').click(function () {
        sendData(sender = $('#feedback-email').val(), feedback = $('#feedback-description').val());
        $('.feedback--container').fadeOut();
    });

    $('.fab--button__feedback').click(function () {
        $('.feedback--container').fadeIn();
    });

    $('.feedback--modal-close').click(function () {
        $('.feedback--container').fadeOut();
    });

});
