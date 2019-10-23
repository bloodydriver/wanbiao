$(function(){

    //控制tab切换
    $(".m-main-login-p-right,.m-main-login-footer-hidden>a").click(function(){
        $(".m-main-login-move").css("display","none");
        $(".m-main-login-div").css("display","none");
        $(".m-main-login-footer").css("display","none");
        $(".m-main-login-code").css("display","block");
        $(".m-main-login-p-right").css("color","#cc5252")
        $(".m-main-login-p-left").css("color","#808080")
        // $(".m-main-login-logo").css("display","block");
        if($(".m-main-login-code-div").html()=="关闭二维码"){
            $(".m-main-login-logo").css("display","block");
            $(".m-main-login-code-p").css("display","none");
            $(".m-main-login-img").css("display","none");
         
        }else {
            $(".m-main-login-logo").css("display","none");
            $(".m-main-login-code-p").css("display","block");
            $(".m-main-login-img").css("display","block");
        }
    })
    $(".m-main-login-p-left").click(function(){
        $(".m-main-login-div").css("display","block");
        $(".m-main-login-footer").css("display","block");
        $(".m-main-login-code").css("display","none");
        $(this).css("color","#cc5252")
        $(".m-main-login-p-right").css("color","#808080")
        $(".m-main-login-logo").css("display","none");

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

    $(".m-main-login-footer-left1").click(function(){
        $(".m-main-login-move").css("display","none");
        $(".m-main-login-div").css("display","block");
        $(this).css("display","none");
        $(".m-main-login-footer-img").css("display","block");
        $(".m-main-login-footer-left").css("display","block");
        $(".m-main-login-logo").css("display","none");

    })
    // $(".m-main-login-footer-left").click(function(){
    //     $(".m-main-login-move").css("display","block");
    //     $(".m-main-login-div").css("display","none");
    //     $(this).css("display","none");
    //     $(".m-main-login-footer-img").css("display","none");
    //     $(".m-main-login-footer-left1").css("display","block");
    //     $(".m-main-login-logo").css("display","none");

    // })
    var count = 0;
    $(".m-main-login-code-div").click(function(){
        if(count%2==0){
            $(".m-main-login-code-p").css("display","none");
            $(".m-main-login-img").css("display","none");
            $(".m-main-login-logo").css("display","block");
            $(".m-main-login-code-div").html("关闭二维码")
         
            count++;
        }else {
            $(".m-main-login-code-p").css("display","block");
            $(".m-main-login-img").css("display","block");
            $(".m-main-login-logo").css("display","none");
            $(".m-main-login-code-div").html("下载万表app");
            count++;
        }
        
    })
})
function check(){
    // if($("#r-content-from-last").val()==""){
    //     $("#r-content-from-last").val("null")
    // }
    if($('.user').val()==''){
        return false
    }else if($('.password').val()==''){
        return false
    }else {
        return true;
    }
}