$(function () {
    // 主页顶部关闭广告
    $(".ad_close").click(function () {
        $(this).parent().slideUp();
    })
    // 主页搜索栏
    $("#index_search").focus(function () {
        $(this).val("").css("color", "#333");
        $(".tips").show();
    })
    $("#index_search").blur(function () {
        $(this).val("劳力士").css("color", "#ccc");
        $(".tips").hide();
    })
    //主页隐藏导航栏
    $(document).on("scroll", function () {
        var index_scrollTop = $(this).scrollTop();
        if (index_scrollTop > 200) {
            $(".index_hide_nav_list_bg").show();
        } else {
            $(".index_hide_nav_list_bg").hide();
        }
    })
    $(".index_nav_right_glass").click(function () {
        $(".index_nav_right_glass_more").animate({
            right: "110px",
            opacity: "1",
        }, 500)
    })
    $(".index_nav_right_glass_arrow").click(function () {
        $(".index_nav_right_glass_more").animate({
            right: "-290px",
            opacity: "0",
        }, 1000)
    })
    $("#index_nav_right_glass_input").focus(function () {
        $(this).val("").css("color", "#333");
        $(".index_right_hide_nav").show();
    })
    $("#index_nav_right_glass_input").blur(function () {
        $(this).val("劳力士").css("color", "#ccc");
        $(".index_right_hide_nav").hide();
    })
    // 主页左侧导航栏渐变 
    $(".index_left_nav_list_img").on("scroll load", function () {
        var index_left_nav_scrollTop = $(this).scrollTop();
        if (index_left_nav_scrollTop > 10) {
            $(".index_left_nav_btm_shadow").hide()
        } else {
            $(".index_left_nav_btm_shadow").show();
        }
    })
    // 客户服务
    $(".index_serbox").mouseover(function () {
        $(this).children().eq(0).css({
            "background-color": "#fff",
            "border-left": "1px solid #ccc",
            "border-right": "1px solid #ccc"
        })
        $(this).children().eq(1).show().slideDown();
    })
    $(".index_serbox").mouseout(function () {
        $(this).children().eq(1).hide().slideUp();
        $(this).children().eq(0).css({
            "background-color": "#f4f4f4",
            "border-left": "1px solid transparent",
            "border-right": "1px solid transparent"
        });
    })
    //主页倒计时 
    function indexCountdown() {
        var localTime = new Date(); //当前时间的毫秒数
        var inputTime = new Date('2019-10-31 12:00:00'); //规定时间的毫秒数
        var countdown = (inputTime - localTime) / 1000; //时间差
        var $d = parseInt(countdown / 60 / 60 / 24);
        $d = $d < 10 ? "0" + $d : $d;
        var $h = parseInt(countdown / 60 / 60 % 24);
        $h = $h < 10 ? "0" + $h : $h;
        var $m = parseInt(countdown / 60 % 60);
        $m = $m < 10 ? "0" + $m : $m;
        var $s = parseInt(countdown % 60);
        $s = $s < 10 ? "0" + $s : $s;
        $(".zd_index_left_time").html(
            `距离本期结束
              <em>${$d}</em>
              <i>天</i>
              <em>${$h}</em>
              <i>时</i>
              <em>${$m}</em>
              <i>分</i>
              <em>${$s}</em>
              <i>秒</i>`
        );
        if (countdown < 0) {
            clearInterval(index_countDown_timer);
            $(".zd_index_left_time").html("已失效");
        }
    };
    var index_countDown_timer = setInterval(indexCountdown, 1000);
    // 尾部彩蛋
    $(".foot_info_list").slideUp();
    $(".foot_slide_info").click(function () {
        $(".foot_info_list").slideToggle();
    });
    $(".foot_slide_info1").click(function () {
        $(".foot_info_list1").slideToggle();
    });
    // swiper
    // 主页轮播
    var mySwiper = new Swiper('.swiper-container1', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        effect: 'fade', //切换样式
        // 分页器
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        autoplay: {
            delay: 3000, //时间 毫秒
            disableOnInteraction: false, //用户操作之后是否停止自动轮播默认true 
        },
    });
    // 限时购轮播1
    var index_to_buy_list_swiper = new Swiper('.index_buy_list_swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。
        spaceBetween: 30, //在slide之间设置距离（单位px）。
        navigation: {
            nextEl: '.index_buy_list_swiper-button-next',
            prevEl: '.index_buy_list_swiper-button-prev',
        },
    });
    // 限时购轮播2
    var index_to_list_right_swiper = new Swiper('.index_buy_list_slider_right_swiper-container', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.index_buy_right_swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.index_buy_right_swiper-button-next',
            prevEl: '.index_buy_right_swiper-button-prev',
        },
    });
    // 二手交易轮播
    var zd_index_boom_slider_list_swiper = new Swiper('.zd_index_boom_swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.zd_index_boom_swiper-button-next',
            prevEl: '.zd_index_boom_swiper-button-prev',
        },
    });
    //主页tab切换
    $(".zd_index_boom_tit ul li:first-child,.zd_index_sport_tit ul li:first-child,.zd_index_fashion_tit ul li:first-child").css({
        "background-color": "#333",
        "color": "#f2d291",
    }).siblings().children().hide();

    $(".zd_index_chart_tit ul li:first-child").css({
        "background-color": "#333",
        "color": "#f2d291",
    }).siblings().children().hide();

    indexChartTab = $(".index_chart_tab .index_time_to_buy_left_box");
    var i = 0;
    $(".zd_index_chart_tit li").on("mouseover", function () {
        i = $(this).index();
        indexChartTab.eq(i).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
        $(this).css({
            "background-color": "#333",
            "color": "#f2d291",
        }).children().show();
        $(this).siblings().css({
            "color": "#666",
            "background-color": "#e6e6e6",
        }).children().hide();
    });

    $(".index_tab_btns_left").click(function () {
        i--;
        if (i < 0) {
            i = indexChartTab.length - 1;
        }
        indexChartTab.eq(i).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
        $(this).parent().next().children().eq(1).children().eq(i).css({
            "background-color": "#333",
            "color": "#f2d291",
        }).children().show();
        $(this).parent().next().children().eq(1).children().eq(i).siblings().css({
            "color": "#666",
            "background-color": "#e6e6e6",
        }).children().hide();
    });

    $(".index_tab_btns_right").click(function () {
        i++;
        if (i >= indexChartTab.length) {
            i = 0;
        }
        indexChartTab.eq(i).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
        $(this).parent().next().children().eq(1).children().eq(i).css({
            "background-color": "#333",
            "color": "#f2d291",
        }).children().show();
        $(this).parent().next().children().eq(1).children().eq(i).siblings().css({
            "color": "#666",
            "background-color": "#e6e6e6",
        }).children().hide();
    });

    $(".zd_index_brand_tit ul li:first-child").css({
        "background-color": "#333",
        "color": "#f2d291",
    }).siblings().children().hide();

    indexTab = $(".index_brand_tabListbox .index_brand_tabList");
    var j = 0;
    $(".zd_index_brand_tit li").on("mouseover", function () {
        j = $(this).index();
        indexTab.eq(j).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
        $(this).css({
            "background-color": "#333",
            "color": "#f2d291",
        }).children().show();
        $(this).siblings().css({
            "color": "#666",
            "background-color": "#e6e6e6",
        }).children().hide();
    })

    $(".index_tab_btns_brand_left").click(function () {
        j--;
        if (j < 0) {
            j = indexTab.length - 1;
        }
        indexTab.eq(j).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
        $(this).parent().next().children().eq(1).children().eq(j).css({
            "background-color": "#333",
            "color": "#f2d291",
        }).children().show();
        $(this).parent().next().children().eq(1).children().eq(j).siblings().css({
            "color": "#666",
            "background-color": "#e6e6e6",
        }).children().hide();
        console.log(j);
    });

    $(".index_tab_btns_brand_right").click(function () {
        j++;
        if (j >= indexTab.length) {
            j = 0;
        }
        indexTab.eq(j).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
        $(this).parent().next().children().eq(1).children().eq(j).css({
            "background-color": "#333",
            "color": "#f2d291",
        }).children().show();
        $(this).parent().next().children().eq(1).children().eq(j).siblings().css({
            "color": "#666",
            "background-color": "#e6e6e6",
        }).children().hide();
    });
    //二手拍卖倒计时
    function index_boom_countDown(ele, futureTime) {
        var localTime = new Date(); //当前时间的毫秒数
        var inputTime = new Date(futureTime); //规定时间的毫秒数
        var countdown = (inputTime - localTime) / 1000; //时间差
        var $h = parseInt(countdown / 60 / 60 % 24);
        $h = $h < 10 ? "0" + $h : $h;
        var $m = parseInt(countdown / 60 % 60);
        $m = $m < 10 ? "0" + $m : $m;
        var $s = parseInt(countdown % 60);
        $s = $s < 10 ? "0" + $s : $s;
        $(ele).html(
            ` <em>${$h}</em>
              <i>:</i>
              <em>${$m}</em>
              <i>:</i>
              <em>${$s}</em>
            `
        );
        if (countdown < 0) {
            clearInterval(zd_index_boom_countDown);
            $(ele).html("已失效");
        }
    };

    function time() {
        index_boom_countDown('.boom_countDown1', '2019-10-25 14:15:00');
        index_boom_countDown('.boom_countDown2', '2019-11-18 23:48:00');
        index_boom_countDown('.boom_countDown3', '2019-12-18 01:48:00');
        index_boom_countDown('.boom_countDown4', '2019-12-18 07:23:00');
        index_boom_countDown('.boom_countDown5', '2019-10-25 01:15:00');
        index_boom_countDown('.boom_countDown6', '2019-11-11 11:11:11');
        index_boom_countDown('.boom_countDown7', '2019-12-28 00:00:00');
        index_boom_countDown('.boom_countDown8', '2019-11-19 00:00:00');
    }
    var zd_index_boom_countDown = setInterval(time, 1000);


    // lazyload
    $("img").lazyload({
        effect: "fadeIn",
    });
    $(".index_kong_over").click(function () {
        window.location.href = "controlDetails.html"
    })


})