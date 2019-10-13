$(function() {
    $(".w_slideshow-a1").eq(0).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
var thimer=setInterval(function() {
    if($(".w_slideshow").hasClass("w_slideshow-top")==false){
        $(".w_slideshow").addClass("w_slideshow-top");
        $(".w_slideshow-a1").eq(1).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
    }
},5000)
var thimer=setInterval(function() {
    if($(".w_slideshow").hasClass("w_slideshow-top")==true){
       $(".w_slideshow").removeClass("w_slideshow-top");
       $(".w_slideshow-a1").eq(0).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
    }
    },7000)
$(".w_blank-top").on("mouseover",function(){
    clearInterval(thimer);
})
$(".w_blank-top").on("mouseout",function(){
    var thimer=setInterval(function() {
        if($(".w_slideshow").hasClass("w_slideshow-top")==false){
            $(".w_slideshow").addClass("w_slideshow-top");
            $(".w_slideshow-a1").eq(1).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
        }
    },5000)
    var thimer=setInterval(function() {
        if($(".w_slideshow").hasClass("w_slideshow-top")==true){
           $(".w_slideshow").removeClass("w_slideshow-top");
           $(".w_slideshow-a1").eq(0).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
        }
    },7000)
})
})