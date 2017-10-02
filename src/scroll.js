import $ from 'jquery'

export const scrollToSection = (targets) => {
  var $id
  $(targets).each(function() {
      if ($(window).scrollTop() >= ($(this).offset().top) - 100) {
          $id = $(this).attr('id');
      }
  });
  return ($id)
}

export const animatePageScroll = (target, offset, anchorId) => {
    var top = $(anchorId).offset().top-offset
    $('html, body').animate({
        scrollTop: top
    }, 500);
  }
