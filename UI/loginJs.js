'use strict';
//toggle between register form and login form
$('.message a').click(function () {
    $('form').animate({height:"toggle",opacity: "toggle"}, "slow");
});