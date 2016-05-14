$(document).ready(function(){


$(function() {

      //----- CLOSE
      $('[data-popup-close]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-close');
          $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

          event.preventDefault();
      });


  window.setTimeout(function(){
    $('.popup').css({"display": "block"})
  }, 3000);
});



});
