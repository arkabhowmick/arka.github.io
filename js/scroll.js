
var headerHeight=60;
$(document).ready(function(){
  $(".preload").fadeOut("slow");
  $(window).scroll(function(){
    if($(document).scrollTop()>210){
        $("#header").css({'height':'80px','paddingTop':'0','backgroundColor':'black'});
    }
    else if($(document).scrollTop()<210){
        $("#header").css({'height':'120px','borderTop':'8px solid #ffd800','paddingTop':'50px','backgroundColor':'rgba(0,0,0,0)'});
    }

    //console.log($("#team"));
    /*console.log("document top: " + $(document).scrollTop());
    console.log("team document top: " + $("#team").offset().top);
    console.log("team 1 top: " + $("#team1").offset().top);*/
    if($(document).scrollTop()>=$("#team").offset().top-70){
      $(".team-desc").children("img").css({"right":"0px","transform":"rotate(360deg)","opacity": "1","filter": "alpha(opacity=100)"});
      $(".team-desc").children(".text").css({"opacity": "1","filter": "alpha(opacity=100)"});
    }


    if($(document).scrollTop()>$("#work").offset().top - headerHeight){
        deactive();
        $("#work-menu").addClass("active");
        $("#work").children(".container").css({"opacity":"1","filter": "alpha(opacity=100)"});
    }
    else if($(document).scrollTop()>$("#download").offset().top - headerHeight){
        deactive();
        $("#download-menu").addClass("active");
    }
    else if($(document).scrollTop()>$("#team").offset().top - headerHeight){
        deactive();
        $("#team-menu").addClass("active");
    }
    else if($(document).scrollTop()>$("#services").offset().top - headerHeight){
        deactive();
        $("#services-menu").addClass("active");
    }
    else if($(document).scrollTop()>$("#main").offset().top - headerHeight){
        deactive();
        $("#main-menu").addClass("active");
    }


  });
});


function deactive(){
    $(".menu-item").children().removeClass("active");
}
