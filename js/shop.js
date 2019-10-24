$(function() {
//搜索提示
$(".L_header_rigth span").click(function() {
    $(".L_seach_input").focus();
})
$(".L_seach_input").focus(function() {
    $(".L_header_rigth span").hide();
})
$(".L_seach_input").blur(function() {
    if($(".L_seach_input").val()=="") {
        $(".L_header_rigth span").show();
    }else {
        $(".L_header_rigth span").hide();
    }
})

//放大镜效果
var L_arr1=["https://image8.wbiao.co/shop/c7fe11add1b24475b1d582b053687469.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff",
"https://image8.wbiao.co/shop/201708_16_AR1970_29629.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff",
"https://image8.wbiao.co/shop/50410debdf744890bb1c2bc4851de1c1.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff",
"https://image8.wbiao.co/shop/8ae381227d1e4af68fdc34af8941112b.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff",
"https://image8.wbiao.co/shop/94ad15e495b9433abd415135d6b2315a.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff",
"https://image8.wbiao.co/shop/180049aad9f64c3f81bdcd4c0e6b02f6.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff"];
var L_arr2=["https://image8.wbiao.co/shop/c7fe11add1b24475b1d582b053687469.jpg?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center",
"https://image8.wbiao.co/shop/201708_16_AR1970_29629.jpg?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center",
"https://image8.wbiao.co/shop/50410debdf744890bb1c2bc4851de1c1.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center",
"https://image8.wbiao.co/shop/8ae381227d1e4af68fdc34af8941112b.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center",
"https://image8.wbiao.co/shop/94ad15e495b9433abd415135d6b2315a.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center",
"https://image8.wbiao.co/shop/180049aad9f64c3f81bdcd4c0e6b02f6.jpg?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center"];
var imgIndex=0;
function imgTab(imgIndex) {
    $(".L_shop_img img")[0].src=L_arr1[imgIndex];
    $(".L_shop_img_box").mousemove(function() {
    $(".L_shop_img img").css({
        "width": "1000px",
        "height": "1000px",
        "position": "absolute", 
        "left": -(event.pageX-$(".L_shop_img_box").offset().left),
        "top": -(event.pageY-$(".L_shop_img_box").offset().top)*1.1
        })
    $(".L_shop_img img")[0].src=L_arr2[imgIndex];
    })
}
imgTab(0);
$(".L_img_list li").mouseenter(function() {
    $(this).addClass("L_img_list_li").siblings().removeClass("L_img_list_li");
    imgTab($(this).index())
})
$(".L_shop_img_box").mouseleave(function() {
    $(".L_shop_img img").animate({"opacity": 0},"show",function() {
        $(".L_shop_img img")[0].style="";
        $(".L_shop_img img")[0].src=L_arr1[$(".L_img_list li").index($(".L_img_list_li"))]
    }) 
})

//图片下方轮播
var index=$(".L_img_list li").length;
$(".L_img_list_right").click(function() {
    if(index>5) {
        $(".L_img_list").animate({"right":"+=85px"},"slow")
        index--;
    }
})
$(".L_img_list_left").click(function() {
    if($(".L_img_list li").length>5&&index<=5) {
        $(".L_img_list").animate({"right":"-=85px"},"slow")
        index++;
    }
})

//遮罩轮播
$(".L_img_shade").hide();
var num=0;
function imgShade() {
    $(".L_shade_content_left").click(function() {
        num--;
        if(num<0) {
            num=0;
        }
        $(".L_shade_ul").animate({"left": -num*700+"px"},"flast")
    })
    $(".L_shade_content_right").click(function() {
        num++;
        if(num>5) {
            num=5;
        }
        $(".L_shade_ul").animate({"left": -num*700+"px"},"flast")
    })
};
$("#L_change_img").click(function() {
    $(".L_img_shade").show();
    $(".L_shade_off").click(function() {
        $(".L_img_shade").hide();
        imgShade=null;   //调用完后移除
    });
    imgShade();
})

//承诺中的文字提示
$(".L_shop_promise li").mouseenter(function() {
    $(".L_placehoder").eq($(this).index()).css("display","block").not($(".L_placehoder").eq($(this).index())).css("display","none")
})
$(".L_shop_promise li").mouseleave(function() {
    $(".L_placehoder").css("display","none");
})

//免息鼠标效果
$(".L_shop_date>span").mouseenter(function() {
    $("#L_right_pay").css("display","block")
})
$(".L_shop_date>span").mouseleave(function() {
    $("#L_right_pay").css("display","none")
})

//购物数量加减
$(".L_number_sub").click(function() {
    $(".L_shop_count input")[0].value--;
    if($(".L_shop_count input")[0].value<=0) {
        $(".L_shop_count input")[0].value=1;
        $(".L_shop_number>p").text("购买的数量不能小于1").css("display","block");
        $(".L_shop_number>p").fadeToggle(3000)
    }
})
$(".L_number_add").click(function() {
    $(".L_shop_count input")[0].value++;
    if($(".L_shop_count input")[0].value<=0) {
        $(".L_shop_count input")[0].value=1;
        $(".L_shop_number>p").text("购买的数量不能小于1").css("display","block");
        $(".L_shop_number>p").fadeToggle(3000)
    }
})

//手机购买显示二维码
$(".L_buy_code").mouseenter(function() {
    $(".L_buy_code img").css("display","block")
})
$(".L_buy_code").mouseleave(function() {
    $(".L_buy_code img").css("display","none")
})

//分享
$(".L_share_list li").click(function() {
    $(this).addClass("L_share_li").siblings().removeClass("L_share_li");
})
$(".L_share_check input").eq(0).prop("checked",true);
$(".L_share_check input").click(function() {
    $(this).prop("checked",true).siblings().prop("checked",false)
})
$(".L_share_shade").hide();
$(".L_share_content>p i").click(function() {
    $(".L_share_shade").hide();
})
$(".L_whileShare a").eq(1).click(function() {
    $(".L_share_shade").hide();
})
$(".L_shop_share span").eq(1).click(function() {
    $(".L_share_shade").show();
})

//用户评论部分
for(var i=0;i<20;i++) {
    $(".L_shop_comment ul").append(`
    <li>
        <div class="comment_user">
            <img src="https://image8.wbiao.co/member/377d6476-af58-4171-909d-627d1e459c0f.jpg" alt="">
            <p>s****u</p>
        </div> 
        <div class="comment_content">
            <div class="comment_start">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <span>金卡会员</span>
            </div>
            <div class="comment_txt">
                适合年轻人带 皮带舒服 带一阵子就不硬了
                总体来说满意
            </div>
            <div class="comment_image">
                <img src="https://image8.wbiao.co/comment/eafc2524-94c4-4f9f-8700-955cf92e68e3.jpg?x-oss-process=image/resize,m_fill,w_106,h_106,color_f1f1f1" alt="">
            </div>
            <div class="comment_date">
                <span>2019-07-29 14:07:48</span>
                <span>混合 黑色</span>
            </div>
        </div>  
    </li>
`)
}

//导航切换
$(".L_move_nav a").click(function() {
    $(this).addClass("L_checkOn").siblings().removeClass("L_checkOn");
    $(".L_nav_content").css("display","block").not($(".L_nav_content").eq($(this).index())).css("display","none")
})

//店铺列表
for(var i=0; i<10; i++) {
   $(".more_shop").append(`
    <li class="L_more_shop">
        <div class="L_img_left"> 
            <img src="https://image2.wbiao.co/others/shop_store/201702/17/148731473292588.jpg?x-oss-process=image/resize,m_fill,w_559,h_406,color_f1f1f1" alt="">
        </div>
        <div class="L_content_right">
            <p class="p1">万表名表中心-广州总部</p>
            <p class="p2">查看地图：</p>
            <p class="p3">广州市番禺区大石街番禺大道北60-1号</p>
            <p class="p2">联系电话：</p>
            <p class="p3">400-883-2688</p>
            <p class="p2">主营品牌：</p>
            <p class="p3 clearfix"> 
                <a class="fl" href="">天梭</a>  
                <a class="fl" href="">西铁城</a> 
                <a class="fl" href="">欧米茄</a>
                <a class="fl" href="">浪琴</a> 
                <a class="fl" href="">劳力士</a>  
                <a class="fl" href="">万国</a> 
                <a class="fl" href="">江诗丹顿</a> 
                <a class="fl" href="">百达翡丽</a> 
                <a class="fl" href="">伯爵</a>  
                <a class="fl" href="">爱彼</a> 
                <a class="fl" href="">汉米尔顿</a> 
                <a class="fl" href="">美度</a> 
                <a class="fl" href="">赫柏林</a>
                <a class="fl" href="">迪沃斯</a>  
                <a class="fl" href="">库尔沃</a> 
                <a class="fl" href="">爱宝时</a> 
                <a class="fl" href="">百年灵</a> 
                <a class="fl" href="">万宝龙</a> 
                <a class="fl" href="">艾美达</a> 
                <a class="fl" href="">莫勒</a> 
                <a class="fl" href="">柏高</a> 
                <a class="fl" href="">康斯登</a> 
                <a class="fl" href="">爱罗</a> 
                <a class="fl" href="">亨利慕时</a> 
                <a class="fl" href="">世纪</a> 
                <a class="fl" href="">雷米格</a>
            </p> 
            <a class="p4" href="">查看更多门店 &gt;</a>
        </div>
    </li>
`)
}

//导航锚点
$(window).scroll(function() {
    if($(window).scrollTop()>$(".L_shop_nav").offset().top) {
        $(".L_bottom_line").css({
            "position":"fixed",
            "top":"0px"
        })
        $(".L_bottom_line>p").css("display","block")
    }else {
        $(".L_bottom_line").removeAttr("style")
        $(".L_bottom_line>p").removeAttr("style")
    }
})
$(".L_move_nav a").click(function() {
    $("html").animate({"scrollTop":$(".L_shop_nav").offset().top},"fast")
})
//点击购买跳转
$(".L_shop_btn1").click(function(){
    window.location.href = "submitIndent.html";
})
$(".L_header_left img").click(function(){
    window.location.href="index.html"
})
})
