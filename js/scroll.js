$(document).ready(function(){

  $(window).scroll(function(){
    console.log($(this).scrollTop());

    if($(this).scrollTop()>210){
      console.log('hi');
      $('header').addClass('fixed-nav');
    }
    else{
      $('header').removeClass('fixed-nav');
    }
  });
});
