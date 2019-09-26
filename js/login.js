$(function(){

    //控制tab切换
    $(".m-main-login-p-right").click(function(){
        $(".m-main-login-div").css("display","none");
        $(".m-main-login-footer").css("display","none");
        $(".m-main-login-code").css("display","block");
        $(this).css("color","#cc5252")
        $(".m-main-login-p-left").css("color","#808080")
    })
    $(".m-main-login-p-left").click(function(){
        $(".m-main-login-div").css("display","block");
        $(".m-main-login-footer").css("display","block");
        $(".m-main-login-code").css("display","none");
        $(this).css("color","#cc5252")
        $(".m-main-login-p-right").css("color","#808080")
    })
    var num = 0;
    $(".m-main-login-footer-right").click(function(){
        if(num%2==0){
            $(".m-main-login-footer-hidden").css("display","block");
        }
        else{
            $(".m-main-login-footer-hidden").css("display","none");
        }
        num++;
    })
})
