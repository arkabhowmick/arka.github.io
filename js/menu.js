$(document).ready(function(){
    var headerHeight=50;
    $(".menu-item , #logo").click(function(e){
        var link=$(this).attr("href");
        $('body , html').animate({
            scrollTop : $(link).offset().top-headerHeight
        },1000);
        $(".menu-item").children().removeClass("active");
        $(this).children().addClass("active");
        e.preventDefault();
    });


    $("#menu-icon").click(function(){
        $(this).children("div").toggleClass("cross");
        $("#menu").toggleClass("expand");
    });
    $( window ).resize(function() {
        if($(this).width()>=768){
            $("#menu").removeClass("expand");
            $("#menu-icon").children("div").removeClass("cross");
        }
    });


});
