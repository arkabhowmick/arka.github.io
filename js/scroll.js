$(document).ready(function(){
  $(".preload").fadeOut("slow");
  $(window).scroll(function(){
    if($(document).scrollTop()>210){
        $("#header").css({'height':'50px','border':'0px','paddingTop':'0','backgroundColor':'black'});
    }
    else if($(document).scrollTop()<210){
        $("#header").css({'height':'120px','borderTop':'8px solid #ffd800','paddingTop':'50px','backgroundColor':'rgba(0,0,0,0)'});
    }
  });
});
