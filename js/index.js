$(function () {
    // 右侧客服
    $(".ad_close").click(function () {
        $(this).parent().slideUp();
    })
    $(".bot_msg_close").click(function () {
        $(".bot_msg").css("opacity", "0");
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
    // 客户服务
    $("#drop_window").hide();
    $("#ser").mouseover(function () {
        $("#ser").css({
            "background-color": "#fff",
            "border-left": "1px solid #ccc",
            "border-right": "1px solid #ccc"
        })
        $("#drop_window").slideDown();
    })
    $("#drop_window").mouseover(function () {
        $(this).slideDown();
    })
    $("#drop_window").mouseleave(function () {
        $(this).slideUp();
        $("#ser").css({
            "background-color": "#f4f4f4",
            "border-left": "1px solid transparent",
            "border-right": "1px solid transparent"
        })

    })
    $("#ser").mouseleave(function () {
        // $("#ser").css({
        //     "background-color" : "#f4f4f4",
        //     "border-left":"1px solid transparent",
        //     "border-right": "1px solid transparent"
        // })
        // $("#drop_window").slideUp();
        // $(this).siblings().eq(4).hide();
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
    }
    var index_countDown_timer = setInterval(indexCountdown, 1000);
    // 尾部彩蛋
    $(".foot_info_list").slideUp();
    $(".foot_slide_info").click(function () {
        $(".foot_info_list").slideToggle();
    })
    $(".foot_slide_info1").click(function () {
        $(".foot_info_list1").slideToggle();
    })
    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        effect: 'fade', //切换样式
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000, //时间 毫秒
            disableOnInteraction: false, //用户操作之后是否停止自动轮播默认true 
        },
    })
})