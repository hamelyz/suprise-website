/* animate smooth scrolling sections */
/*jslint browser: true*/
/*global $*/
/* eslint-env browser */
$("nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 2500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});