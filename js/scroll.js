
var headerHeight=60;
$(document).ready(function(){
    checkHeader();
    hideElements();
    setTimeout(function() {
        $(".preload").fadeOut("slow");
    }, 1200);

    headerAdjust();
    menuActive();
    animate();
});


function deactive(){
    $(".menu-item").children().removeClass("active");
}

function checkHeader(){
    if($(document).scrollTop()>210){
        $("#header").css({'height':'80px','paddingTop':'0','backgroundColor':'black'});
    }
    else if($(document).scrollTop()<210){
        $("#header").css({'height':'120px','borderTop':'8px solid #ffd800','paddingTop':'50px','backgroundColor':'rgba(0,0,0,0)'});
    }
}
function headerAdjust(){
    $(window).scroll(function(){
        checkHeader();
    });
}

function menuActive(){
    $(window).scroll(function(){
        if($(document).scrollTop()>$("#work").offset().top - headerHeight){
            deactive();
            $("#work-menu").addClass("active");
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
}

function hideElements(){
    $(".animation").css({"visibility":"hidden"});
    //$("#header").hide();
}

function animate(){
    $("#header").show("slow","swing",function(){
        //$("#head-1").addClass("wow fadeIn");
    });
    $(window).scroll(function(){

    });
}
