$(document).ready(function(){
    $(window).scroll(function(){
      
    
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $(".Header").css("background" , "#fff");
            $("a").css("color" , "#000");
            $("#dark-logo").attr("src","imgs/logo-dark.png");
            $(".navbar a").hover(function(){
                $(this).css("color" , "#f5af00");
            }, function(){
                $(this).css("color" , "#000");
            });
        }
        else{
            $(".Header").css("background" , "transparent");  	
        }
        $(".card").hover(function(){
            $(this).find(".card-img-overlay").css({
                "display":"block",
                "z-index":"1"
            });
            $(this).css("transform","scale(1.1)");
        }, function(){
            $(this).find(".card-img-overlay").css({
                "display":"none",
                "z-index":"-100"
            });
            $(this).css("transform","scale(1)");
        });
    });
    $(".card").click(function(){
        var imgSrc = $(this).find(".card-img").attr("src");
        $("#modalImage").attr("src", imgSrc);
        $("#imageModal").css("display", "block");
    });
    $("#imageModal").click(function(){
        $(this).css("display", "none");
    })

    

});