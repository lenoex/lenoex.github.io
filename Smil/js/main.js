$(function(){
$('a[href^="#dg"],a[href^="#f"],a[href^="#lg"],a[href^="#headerwrap"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//speed
return false; 
}); 
});
