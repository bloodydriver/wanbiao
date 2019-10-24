$(function() {

    // 信用卡中心页面
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
    //银行快速导航
    $(".x_bank_list").mouseenter(function() {
        $(".x_bank_menus").slideToggle("fast");
    })
    
    $(".x_bank_menus").mouseleave(function() {
        $(this).slideUp("fast");
    })
    // 轮播
    new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
    //信用卡点评 tab切换
    $(".x_comment_nav li").mouseenter(function() {
        var i = $(this).index();
        $(".x_comment_nav a").removeClass("x_nav_col");
        $(".x_comment_nav a").eq(i).addClass("x_nav_col");
        $(".x_comm_tab").eq(i).addClass("x_comm_show").siblings().removeClass("x_comm_show");
    })
    //底部tab切换
    $("#x_code_weibo li").on("mouseover",function() {
        $(this).addClass("x_code_in").siblings().removeClass("x_code_in");
        $(".x_code_con").eq($(this).index()).addClass("x_code_show").siblings().removeClass("x_code_show")
    })
    $("#x_code_server li").on("mouseover",function() {
        $(this).addClass("x_code_in").siblings().removeClass("x_code_in");
        $(".x_code_con2").eq($(this).index()).addClass("x_code_show").siblings().removeClass("x_code_show")
    })
    
    // help页面
    // 左侧导航栏鼠标经过
    $(".index_left_nav").css("display","none")
    $(".nav_left").mouseenter(function() {
        $(".index_left_nav").slideDown("fast");
    })
    $(".nav_left").mouseleave(function() {
        $(".index_left_nav").slideUp();
    })
})