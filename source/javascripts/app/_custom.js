/* Custom JS */

$(document).ready(function () {
    function sendData(sender, feedback) {
        Email.send({
            SecureToken: "855f0b2d-d92a-40a0-8024-44d1de56586f",
            To: 'harsha.vardhan@capillarytech.com',
            From: "capapidoc@gmail.com",
            Subject: "Suggested Edits: " + document.title,
            Body: "Hello Harsha, " + sender + " has suggested an edit for '" + window.location.hash.substr(1) + "'." + "Their feedback is as follows: " + feedback
        });
    }

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
