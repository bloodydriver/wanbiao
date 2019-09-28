$(function() {
    //顶部 手机万表 鼠标经过
    $(".x_hover_phonewb").mouseenter(function() {
        $(".x_hover_phonewb+div").slideToggle("fast");
    })
    
    $(".x_top_code").mouseleave(function() {
        $(this).slideUp("fast");
    })

    $(".x_top_dropdown li").mouseover(function() {
        $(this).addClass("x_tab_show").siblings().removeClass("x_tab_show");
        $(".x_top_img").eq($(this).index()).addClass("x_top_img_show").siblings().removeClass("x_top_img_show")
    })
    //顶部 服务热线 鼠标经过
    $(".x_hover_server").mouseenter(function() {
        $(".x_hover_server+div").slideToggle("fast");
    })
    
    $(".x_top_server").mouseleave(function() {
        $(this).slideUp("fast");
    })
})