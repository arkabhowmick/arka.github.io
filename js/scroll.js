$(document).ready(function(){

  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(document).scrollTop()>210){
        $("header").css({'height':'50px','backgroundColor':'black'});
    }
    else if($(document).scrollTop()<210){
        $("header").css({'height':'120px','backgroundColor':'rgba(0,0,0,0)'});
    }
  });
});
