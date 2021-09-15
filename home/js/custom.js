function scrollToElement (selector) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 1000);    
};

$(document).on('click', 'a.slow-scroll', function () {
  scrollToElement($(this).attr('href'));
});