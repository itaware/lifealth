$(function(){
$(window).scroll(
function () {//Au scroll dans la fenetre on déclenche la fonction
if ($(this).scrollTop() > 100) { 
$('.unfixednav').addClass("fixrow"); 
} else {
$('.unfixednav').removeClass("fixrow");
          }
        }
      );       
});