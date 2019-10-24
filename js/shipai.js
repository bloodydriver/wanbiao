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
    $(function (){
        $(".tab").on("click",function(){
            var $tet=$(this).index()*(-210);
            $(".lide").delay("slow").animate({"left": $tet},80)
            $(this).addClass("active").siblings().removeClass("active");
        })
        var $a=0;
        function add(){
            $(".tab").removeClass("active");
            $a++
            if($a>=$(".tab").length){
                $a=0
                $(".lide").css("left",$a*(-280)+"px");
            };
            if($a<$(".tab").length){
                $(".lide").delay("slow").animate({"left": $a*(-280)},800)
                $(".tab").eq($a).addClass("active");
               
            };
        }
        var timer= setInterval(add,2500);
    });
    
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
        
        if ($(this).index()<5) {
            $(".yrightArea").css({"display":"block"})
        }else{
            $(".yrightArea").hide()
        }
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


// (function () {  //评论晒单轮播
//     var i = 0;
//     var timer;
//     $('.img9').eq(0).show().siblings().hide();
//     showTime();
//     $('.ttab').hover(function () {
//         i = $(this).index();
//         show()
//         clearInterval(timer);
//     }, function () {
//         showTime();
//     });
//     function showTime() {
//         timer = setInterval(function () {
//             show()
//             i++;
//             if (i == 4) {
//                 i = 0;
//             }
//         }, 2000);
//     }
//     function show() {
//         $('.img9').eq(i).fadeIn(300).siblings().fadeOut(300);
//         $(".ttab").eq(i).css("background", "#ff6700").siblings().css("background", "")
//     }
//     $(".img9").mouseenter(function () {
//         clearInterval(timer)
//     })
//     $(".img9").mouseleave(function () {
//         showTime()
//     })
// }
// )(jQuery);


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
var ylist = document.getElementsByClassName("ylist");   //循环媒体报道等tab切换下的内容

for (var j = 0; j < ylist.length; j++) {
    for (var i = 0; i < 15; i++) {
        ylist[j].innerHTML += `
     <li>
     <div class="essay">
         <div class="pic">
             <img src="https://image2.wbiao.co/upload/article/201701/20/1484903470455124781.jpg" alt="">
         </div>
         <div class="essay-details">
             <div class="title">跟随万表欧洲游，感受Chronoswisss瑞宝表顶级珐琅制表工艺</div>
             <div class="source">
                 <span>作者：练小爷</span>
                 <span>2018年01月20日</span>
                 <span>内容来源：万表网</span>
             </div>
             <div class="des">
                 瑞宝表在琉森总部设立了开放式的表匠工作间，在这里，万表团队可近距离观摩传统手工制表过程，包括像素级的精密部件和珐琅工艺，并有幸与顶级表匠进行交流。瑞宝表的行政总裁Ebstein先生表示，一位老练的表匠，玑镂纹表盘成品率大概在70%左右。而且……
                 <a href="javascript:void(0)">[更多]</a>
             </div>
             <div class="hits">
                 人气<span>(692)</span><em>|</em>评论<span>(1)</span>
             </div>
             <div class="tab1">
                 <span>标签：</span>瑞宝万表
             </div>
         </div>
     </div>
 </li>
     `
    }
};
var aa = document.getElementsByClassName("aa")[0];
for(var k=0;k<8;k++){
    aa.innerHTML+=`
    <li class="cl">
    <div class="fl"><img src="https://image2.wbiao.co/upload/article/201910/09/1570610773378111915.jpg" alt=""></div>
    <div class="fr">
        <p class="tt">打开她的心扉！卡地亚Clé de Cartier系列钥匙腕表</p>
        <p class="author">
            <span class="fir">作者：表哥亮</span>
            <span>2019年10月09日</span>
            <span class="se">人气<span>(0)</span></span>
            <span class="se">评论<span>(0)</span>|</span>
        </p>
        <p class="ct">【实拍控】今天推荐：卡地亚全新系列Clé de Cartier女士机械腕表WSCL0006</p>
        <p class="igw">
            <img src="https://image2.wbiao.co/upload/article/201910/09/1570610773378111915.jpg" alt="">
            <img src="https://image2.wbiao.co/upload/article/201910/09/1570610805036572998.jpg" alt="">
            <img src="https://image2.wbiao.co/upload/article/201910/09/1570610837180229978.jpg" alt="">
            <img src="https://image2.wbiao.co/upload/article/201910/09/1570610868623751041.jpg" alt="">
            <img src="https://image2.wbiao.co/upload/article/201910/09/1570610908363369240.jpg" alt="">
            <img src="https://image2.wbiao.co/upload/article/201910/09/1570610927466147634.jpg" alt="">
        </p>
    </div>
</li>
    `
}
var list1=document.getElementsByClassName("lists")[0]
for(var p=0;p<6;p++){
    list1.innerHTML+= `
    <li class="list-box">
    <div class="img">
    <img src="https://image2.wbiao.co/goods/b/201709/17/3390_152_20_16_25_32136.png" alt="">
    </div>
    <div class="text">
        <p class="tt">爱宝时</p>
        <p>EmotionQ情感系列</p>
        <p><span class="em">528</span>人评论</p>
    </div>
</li>
    `
}
$(".index_left_nav").css("display","none")
$(".nav_left").mouseenter(function() {
    $(".index_left_nav").slideDown("fast");
})
$(".nav_left").mouseleave(function() {
    $(".index_left_nav").slideUp();
})



