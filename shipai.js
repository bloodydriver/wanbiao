$(function () {
    (function () {   //头条新闻轮播
        var i = 0;
        var timer;
        $('.textslide').eq(0).show().siblings('.textslide').hide();
        showTime();
        function showTime() {
            timer = setInterval(function () {
                $('.textslide').eq(i).fadeIn(300).siblings('.textslide').fadeOut(300);
                i++;
                if (i == 3) {
                    i = 0;
                }
            }, 1500);
        }
        $(".change_btn").click(function () {
            clearInterval(timer);
            if (i == 3) {
                i = -1;
            }
            i++;
            $('.textslide').eq(i).fadeIn(300).siblings('.textslide').fadeOut(300);
            showTime();
        })
        $(".textslide").mouseenter(function () {
            clearInterval(timer)
        })
        $(".textslide").mouseleave(function () {
            showTime()
        })
    }
    )(jQuery);
    (function () {  //头条新闻下的图片轮播
        var i = 0;
        var timer;
        $('.lidead').eq(0).show().siblings('.lidead').hide();
        showTime();
        $('.tab').hover(function () {
            i = $(this).index();
            show()
            clearInterval(timer);
        }, function () {
            showTime();
        });
        function showTime() {
            timer = setInterval(function () {
                show()
                i++;
                if (i == 5) {
                    i = 0;
                }
            }, 2000);
        }
        function show() {
            $('.lidead').eq(i).fadeIn(300).siblings('.lidead').fadeOut(300);
            $(".tab").eq(i).css("background", "#ff6700").siblings(".tab").css("background", "")
        }
        $(".lidead").mouseenter(function () {
            clearInterval(timer)
        })
        $(".lidead").mouseleave(function () {
            showTime()
        })
    }
    )(jQuery)
    $(".r_top span").mouseenter(function () {  //  新闻 图片 评论的tab切换
        $(".r_contentbox").eq($(this).index()).show().siblings().hide();
        $(".r_top span").eq($(this).index()).css("border-top", "2px solid red").siblings().css("border-top", "none")
    }),
        (function () {   //万表热搜轮播
            var i = 0;
            var timer;
            $('.hot_list').eq(0).show().siblings('.hot_list').hide();
            showTime();
            function showTime() {
                timer = setInterval(function () {
                    $('.hot_list').eq(i).fadeIn(300).siblings('.hot_list').fadeOut(300);
                    i++;
                    if (i == 1) {
                        i = 0;
                    }
                }, 2500);
            }
            $(".change_btn").click(function () {
                clearInterval(timer);
                if (i == 1) {
                    i = -1;
                }
                i++;
                $('.hot_list').eq(i).fadeIn(300).siblings('.hot_list').fadeOut(300);
                showTime();
            })
            $(".hot_list").mouseenter(function () {
                clearInterval(timer)
            })
            $(".hot_list").mouseleave(function () {
                showTime()
            })
        }
        )(jQuery);

    (function () {   //猜你喜欢轮播
        var i = 0;
        var timer;
        $('.guess_box').eq(0).show().siblings('.guess_box').hide();
        showTime();
        function showTime() {
            timer = setInterval(function () {
                $(".textslidetab").eq(i).css("background", "#ff6700").siblings(".textslidetab").css("background", "")
                $('.guess_box').eq(i).fadeIn(300).siblings('.guess_box').fadeOut(300);
                i++;
                if (i == 2) {
                    i = 0;
                }
            }, 2500);
        }
        $('.guess_l').click(function () {
            clearInterval(timer);
            if (i == 0) {
                i = 2;
            }
            i--;
            showTime();
        });
        $('.guess_r').click(function () {
            clearInterval(timer);
            if (i == 1) {
                i = -1;
            }
            i++;
            showTime();
        });
        $(".guess_box").mouseenter(function () {
            clearInterval(timer)
        })
        $(".guess_box").mouseleave(function () {
            showTime()
        })
    }
    )(jQuery);
    (function () {   //底部轮播
        var i = 0;
        var timer;
        $('.boxitem').eq(0).show().siblings('.boxitem').hide();
        showTime();
        function showTime() {
            timer = setInterval(function () {
                $(".boxitem_tab").eq(i).css("background", "red").siblings(".boxitem_tab").css("background", "")
                $('.boxitem').eq(i).fadeIn(300).siblings('.boxitem').fadeOut(300);
                i++;
                if (i == 6) {
                    i = 0;
                }
            }, 2500);
        }
        $(".boxitem").mouseenter(function () {
            clearInterval(timer)
        })
        $(".boxitem").mouseleave(function () {
            showTime()
        })
    }
    )(jQuery);
    (function () {   //底部轮播
        var i = 0;
        var timer;
        $('.boxitem1').eq(0).show().siblings('.boxitem1').hide();
        showTime();
        function showTime() {
            timer = setInterval(function () {
                $(".boxitem_tab1").eq(i).css("background", "red").siblings(".boxitem_tab1").css("background", "")
                $('.boxitem1').eq(i).fadeIn(300).siblings('.boxitem1').fadeOut(300);
                i++;
                if (i == 6) {
                    i = 0;
                }
            }, 2500);
        }
        $(".boxitem1").mouseenter(function () {
            clearInterval(timer)
        })
        $(".boxitem1").mouseleave(function () {
            showTime()
        })
    }
    )(jQuery);
    $(".medioReport").click(function(){
        $(".yleftList").hide()
        $(".ymainbox1").show()
    });

});
$(function(){      //客服聊天对话框
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
        photo=document.getElementById('btn-pic'),
        photo1 = document.getElementById("btn_close1"),
        photo2 =document.getElementById("btn_close2"),
        timer,
        timerId,
        shiftKeyOn = false; 
    photo.addEventListener('click', function(e) {
        $('.dialogue-main').css({'display': 'inline-block', 'height': '0'});
        $('.dialogue-main').animate({'height': '600px'})
    });
    photo1.addEventListener('click', function(e) {
        $('.dialogue-main').animate({'height': '0'}, function() {
            $('.dialogue-main').css({'display': 'none'});
            $('.wrapper-zoom').css({'display': 'inline-block'});
        });
    })
    photo2.addEventListener('click', function(e) {
        $('.dialogue-main').toggleClass("dialogue-style");
    })
    $(".wrapper-zoom").click(function(){
        $('.dialogue-main').css({'display': 'inline-block', 'height': '0'});
        $('.dialogue-main').animate({'height': '600px'})
        $(this).hide()
    })
    btnClose.addEventListener('click', function(e) {
        $('.dialogue-main').animate({'height': '0'}, function() {
            $('.dialogue-main').css({'display': 'none'});
            $('.dialogue-support-btn').css({'display': 'inline-block'});
        });
    })

    dialogueInput.addEventListener('keydown', function(e) {
        var e = e || window.event;
        if (shiftKeyOn) {
            return true;
        } else if (e.keyCode == 13 && dialogueInput.value == '') {
            setTimeout(function() {
                fadeIn(dialogueHint);
                clearTimeout(timerId)
                timer = setTimeout(function() {
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

    dialogueInput.addEventListener('keyup', function(e) {
        if (e.keyCode == 13) {
            dialogueInput.value = null;
        }
    });

    function submitCustomerText(text) {
        console.log(text)
        // code here 向后端发送text内容

        // 模拟后端回复
        var num = Math.random() * 10;
        if (num <= 7) {
            getServiceText(serviceData);
        }
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
    $(".car").click(function(){
        $(".right-panel").css({right:"0"})
        $(".right-panel-box").eq($(".car").index($(this))).show().siblings().hide()
    })
    $(".right-panel-top .on").click(function(){
        $(this).css({borderBottom:"3px solid #333"}).eq(0).siblings(".on").css({"borderBottom":""})
    })
    $(".right-panel-close").click(function(){
        $(".right-panel").css({right:"-262px"})
    })
})
