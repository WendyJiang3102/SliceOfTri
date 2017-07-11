// JavaScript File
$('ul li').click(function(){
    
    var clicked_tab = $(this);
    
    clicked_tab.addClass('active');
    
    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
    
    var clicked_href = $(this).children('a').attr('href');
    $('img').hide();
    $(clicked_href).show();

});
$("#myCarousel").carousel();

$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});