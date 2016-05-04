$(document).ready(function(){


$(function() {
      //----- OPEN
      // $('[.popup]').on('onload', function(e)  {
          // var targeted_popup_class = jQuery(this).attr('data-popup-1');
          // $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

          // event.preventDefault();
      // });

      //----- CLOSE
      $('[data-popup-close]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-close');
          $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

          event.preventDefault();
      });
  // });


  // window.onload = function () {
  //     setTimeout(function () {
  //         PopUp('show');
  //     }, 5000);
  // }

  window.setTimeout(function(){
    $('.popup').css({"display": "block"})
  }, 3000);
});

  // $(".subscribe-me").subscribeBetter();
  // });


  // alert("BE THE FIRST TO KNOW WHEN INTRODUCTION ARRIVE")
  // $("h1").click(
    // function(){
      // alert("You clicked the headline")
    // }
  // )


});
