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
 });
  $('ul li').click(function() {
    $("#myCarousel").carousel();

    $(".item").click(function() {
      $("#myCarousel").carousel(1);
    });

    $(".left").click(function() {
      $("#myCarousel").carousel("prev");
    });

});
