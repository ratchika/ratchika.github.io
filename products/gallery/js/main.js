// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


$(document).ready(function() {


   var form = $('#myForm'); // contact form
   var submit = $('.submit-btn'); // submit button
   var alert = $('.alert-msg'); // alert div for show alert message

   // form submit event
   form.on('submit', function(e) {
       e.preventDefault(); // prevent default form submit

       $.ajax({
           url: 'mail.php', // form action url
           type: 'POST', // form submit method get/post
           dataType: 'html', // request type html/json/xml
           data: form.serialize(), // serialize form data
           beforeSend: function() {
               alert.fadeOut();
               submit.html('Sending....'); // change submit button text
           },
           success: function(data) {
               alert.html(data).fadeIn(); // fade in response data
               form.trigger('reset'); // reset form
               submit.attr("style", "display: none !important");; // reset submit button text
           },
           error: function(e) {
               console.log(e)
           }
       });
   });
});
