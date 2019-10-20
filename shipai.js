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
    $(".medioReport").click(function () { // 媒体报道一行的tab切换
        $(".yleftList").hide()
        $(".tab-change .ymainbox1").eq($(this).index()).show().siblings().hide();
        $(this).css({ "border-bottom": "2px solid #b01330", "color": "#b01330" }).eq(0).siblings().css({ "border-bottom": "none", "color": "#333" })
    });
});
//常见手表问题的tab切换
$(function () {
    $(".tt1").mouseenter(function () {
        $(".bot").eq($(this).index()).show().siblings().hide();
        $(this).css({ "border-bottom": "none", "color": "#b01330" }).eq(0).siblings().css({ "border-bottom": "1px solid #ccc", "color": "#666" })
    })

});
(function () {  //评论晒单轮播
    var i = 0;
    var timer;
    $('.img9').eq(0).show().siblings().hide();
    showTime();
    $('.ttab').hover(function () {
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
            if (i == 4) {
                i = 0;
            }
        }, 2000);
    }
    function show() {
        $('.img9').eq(i).fadeIn(300).siblings().fadeOut(300);
        $(".ttab").eq(i).css("background", "#ff6700").siblings().css("background", "")
    }
    $(".img9").mouseenter(function () {
        clearInterval(timer)
    })
    $(".img9").mouseleave(function () {
        showTime()
    })
}
)(jQuery);
// var bot22 =document.getElementsByClassName("botbot")[0];
// console.log(bot22)
// for(var i=0;i<16;i++){
//     bot11.innerHTML += `
//     <div class="bot">
//     <div class="box">
//         <div class="l">
//             <div class="lquest">
//                 <a href="javascript:void(0)"><i>问</i>香奈儿是哪个国家的品牌</a>
//                 <div class="respon">
//                     <i>答</i>暂无回答
//                 </div>
//             </div>
//             <div class="bottom">
//                 <ul>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">女士手表什么牌子好</a></span><span
//                             class="time">2014-10-23 09:37:22</span></li>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">男士手表什么牌子好</a></span><span
//                             class="time">2014-10-23 09:37:23</span></li>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">浪琴手表那个系列好</a></span><span
//                             class="time">2014-10-23 09:37:24</span></li>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">机械手表哪个牌子好</a></span><span
//                             class="time">2014-10-23 09:37:24</span></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="r">
//             <div class="lquest">
//                 <a href="javascript:void(0)"><i>问</i>送手表代表什么意思</a>
//                 <div class="respon">
//                     <i>答</i>暂无回答
//                 </div>
//             </div>
//             <div class="bottom">
//                 <ul>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">梦见手表是什么意思</a></span><span
//                             class="time">2014-10-23 09:37:22</span></li>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">天梭是哪个国家的品牌</a></span><span
//                             class="time">2014-10-23 09:37:23</span></li>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">买手表要注意什么</a></span><span
//                             class="time">2014-10-23 09:37:24</span></li>
//                     <li><span>•<i>问：</i><a href="javascript:void(0)">gucci是什么意思</a></span><span
//                             class="time">2014-10-23 09:37:24</span></li>
//                 </ul>
//             </div>
//         </div>
//     </div>

// </div>
//     `
// }

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

})

$(function () {
    //本文相关品牌
    $(".logo-icon1, .logo-icon2, .logo-icon3, .logo-icon4").mouseenter(function () {
        $(this).css({ background: "#b01330" })
        $(this).find("div").css({ "display": "block" })
    })
    $(".logo-icon1,.logo-icon2,.logo-icon3,.logo-icon4").mouseleave(function () {
        $(this).css({ background: "" });
        $(".logo-icon1-text").hide()
    })
});
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
        $(".yshop-car").show();
        $(".car-number").show()
        carnum.innerHTML++
        nu.innerHTML++
        nu1.innerHTML++
        pre.innerHTML = "￥" + eval(nu.innerHTML * 2120)
        pre1.innerHTML = "￥" + eval(nu1.innerHTML * 2120)

    });
    $(".delete-g").click(function () {
        $(".yshop-car").hide()
        $(".car-number").hide()
    });
    $(".dialogue-support-icon").mouseenter(function () {
        $(".dialogue-hover").css({ "transform": "right 200px", "opacity": "1" })
    });
    $(".dialogue-support-icon").mouseleave(function () {
        $(".dialogue-hover").css({ "transform": "none", "opacity": "0" })
    });
})
$(function(){
    $(".collect").click(function(){
        $(".collect-g").show()
        $(".cart-empty").hide();
        $(".login-look").hide();
    })
})