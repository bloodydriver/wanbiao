$(function() {
    $(".w_slideshow-a1").eq(0).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
    if($(".w_slideshow").hasClass("w_slideshow-top")==false){
        var thimer=setInterval(function() {
            $(".w_slideshow").addClass("w_slideshow-top");
            $(".w_slideshow-a1").eq(1).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
        },5000)
    }else {
        var thimer1=setInterval(function() {
            
            $(".w_slideshow").removeClass("w_slideshow-top");
            $(".w_slideshow-a1").eq(0).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
        },10000)
    }
})
$(function(){
     var a=0;
    $(".w_brand-lt4").on("click",function(){
        a++
        if(a<15){
            $(".w_brand-lt").animate({
                "left":a*-150+"px"
            },1000)
        }else{
            a=0;
            $(".w_brand-lt").css("left",a*-150+"px")
        }
    })
    $(".w_brand-lt1").on("click",function(){
        a--
        if(a>0){
            $(".w_brand-lt").animate({
                "left":a*-150+"px"
            },1000)
        }else{
            a=0;
            $(".w_brand-lt").animate({
                "left":a*-150+"px"
            },1000)
        }
        
    })
})