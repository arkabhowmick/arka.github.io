$(document).ready(function(){

  $(window).scroll(function(){


    if($(this).scrollTop()>210){

      $('header').addClass("fixed-nav");
    }
    else{
      $('header').removeClass('fixed-nav');
    }
  });
});
