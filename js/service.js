$(function () {      //客服聊天对话框
    var serviceData = {
        'robot': {
            'name': 'robot001',
            'dialogue': ['模拟回复1', '模拟回复2', '模拟回复3'],
            'welcome': '您好，robot001为您服务'
        }
    };
    var dialogueInput = document.getElementById('dialogue_input'),
        dialogueContain = document.getElementById('dialogue_contain'),
        dialogueHint = document.getElementById('dialogue_hint'),
        // btnOpen = document.getElementById('btn_open'),
        btnClose = document.getElementById('btn_close'),
        photo = document.getElementById('btn-pic'),
        photo1 = document.getElementById("btn_close1"),
        photo2 = document.getElementById("btn_close2"),
        timer,
        timerId,
        shiftKeyOn = false;
    photo.addEventListener('click', function (e) {
        $('.dialogue-main').css({ 'display': 'inline-block', 'height': '0' });
        $('.dialogue-main').animate({ 'height': '600px' })
    });
    photo1.addEventListener('click', function (e) {
        $('.dialogue-main').animate({ 'height': '0' }, function () {
            $('.dialogue-main').css({ 'display': 'none' });
            $('.wrapper-zoom').css({ 'display': 'inline-block' });
        });
    })
    photo2.addEventListener('click', function (e) {
        $('.dialogue-main').toggleClass("dialogue-style");
    })
    $(".over-message").click(function () {
        $(".dialogue-main").hide()
    })
    $(".wrapper-zoom").click(function () {
        $('.dialogue-main').css({ 'display': 'inline-block', 'height': '0' });
        $('.dialogue-main').animate({ 'height': '600px' })
        $(this).hide()
    })
    btnClose.addEventListener('click', function (e) {
        $('.dialogue-main').animate({ 'height': '0' }, function () {
            $('.dialogue-main').css({ 'display': 'none' });
            $('.dialogue-support-btn').css({ 'display': 'inline-block' });
        });
    })

    dialogueInput.addEventListener('keydown', function (e) {
        var e = e || window.event;
        if (shiftKeyOn) {
            return true;
        } else if (e.keyCode == 13 && dialogueInput.value == '') {
            setTimeout(function () {
                fadeIn(dialogueHint);
                clearTimeout(timerId)
                timer = setTimeout(function () {
                    fadeOut(dialogueHint)
                }, 2000);
            }, 10);
            timerId = timer;
            return true;
        } else if (e.keyCode == 13) {
            var nodeP = document.createElement('p'),
                nodeSpan = document.createElement('span');
            nodeP.classList.add('dialogue-customer-contain');
            nodeSpan.classList.add('dialogue-text', 'dialogue-customer-text');
            nodeSpan.innerHTML = dialogueInput.value;
            nodeP.appendChild(nodeSpan);
            dialogueContain.appendChild(nodeP);
            dialogueContain.scrollTop = dialogueContain.scrollHeight;
            submitCustomerText(dialogueInput.value);
        }
    });

    dialogueInput.addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            dialogueInput.value = null;
        }
    });
    $(".send-message").click(function () {  //鼠标点击发送
        if (dialogueInput.value != '') {
            var nodeP = document.createElement('p'),
                nodeSpan = document.createElement('span');
            nodeP.classList.add('dialogue-customer-contain');
            nodeSpan.classList.add('dialogue-text', 'dialogue-customer-text');
            nodeSpan.innerHTML = dialogueInput.value;
            nodeP.appendChild(nodeSpan);
            dialogueContain.appendChild(nodeP);
            dialogueContain.scrollTop = dialogueContain.scrollHeight;
            submitCustomerText(dialogueInput.value);
            dialogueInput.value = null;
        } else {
            alert("请输入内容")
        }
    })
    function submitCustomerText(text) {
        getServiceText(serviceData);
    }

    function getServiceText(data) {
        var serviceText = data.robot.dialogue,
            i = Math.floor(Math.random() * serviceText.length);
        var nodeP = document.createElement('p'),
            nodeSpan = document.createElement('span');
        nodeP.classList.add('dialogue-service-contain');
        nodeSpan.classList.add('dialogue-text', 'dialogue-service-text');
        nodeSpan.innerHTML = serviceText[i];
        nodeP.appendChild(nodeSpan);
        dialogueContain.appendChild(nodeP);
        dialogueContain.scrollTop = dialogueContain.scrollHeight;
    };
    //鼠标点击右侧购物车和收藏
    $(".car").click(function () {
        $(".right-panel").css({ right: "0" })
        $(".right-panel-box").eq($(".car").index($(this))).show().siblings().hide()
    })
    $(".right-panel-top .on").click(function () {
        $(this).css({ borderBottom: "1px solid #333" }).eq(0).siblings(".on").css({ "borderBottom": "" })
    })
    $(".right-panel-close").click(function () {
        $(".right-panel").css({ right: "-262px" })
    })
    $(".left-panel a").click(function(){
        $(this).css({"background":"#999"}).siblings().css({"background":"#fff"})
    })

})
//客服右侧板块与购物详情页的连接

$(function () {
    var nu = document.getElementsByClassName("coun")[0]
    var nu1 = document.getElementsByClassName("coun1")[0]
    var pre = document.getElementById("pricc");
    var pre1 = document.getElementById("pric1");
    var carnum = document.getElementsByClassName("car-number")[0];
    $(".L_shop_btn2 ,p3").click(function () {
        $(".login-look").hide();
        $(".cart-empty").hide();
        $(".shop-de").show();
        $(".car-number").show()
        $(".yshop-car").show()
        carnum.innerHTML++
        nu.innerHTML++
        nu1.innerHTML++
        pre.innerHTML = "￥" + eval(nu.innerHTML * 2120)
        pre1.innerHTML = "￥" + eval(nu1.innerHTML * 2120)

    });
    $(".delete-g").click(function () {
        $(".middle").hide()
        nu.innerHTML=0;
        nu1.innerHTML=0
        carnum.innerHTML=0
        $(".yshop-car").hide()
        $(".car-number").hide()
    });
    //鼠标 悬浮 人头像

    $(".dialogue-support-icon").mouseover(function(){
        $(".dialogue-hover").css({"display":"block"})
    });
    $(".dialogue-support-icon").mouseout(function(){
        $(".dialogue-hover").css({"display":"none"})
    })
    $(function(){
        $(".collect").click(function(){
            $(".collect-g").show()
            $(".cart-empty").hide();
            $(".login-look").hide();
        });
       
    });
  
})