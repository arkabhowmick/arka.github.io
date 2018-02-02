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
});
