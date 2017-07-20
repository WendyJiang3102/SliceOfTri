// JavaScript File
$(document).ready(function() {
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target ||
        $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
          .animate({
            scrollTop: targetOffset
          }, 1000);
        return false;
      }
    }
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $('#nav').addClass('shrink');
    }
    else {
      $('#nav').removeClass('shrink');
    }
  });
});
