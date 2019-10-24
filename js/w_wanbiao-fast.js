// 头尾js
$(function () {
 // 左侧导航栏鼠标经过
 $(".index_left_nav").css("display","none")
 $(".nav_left").mouseenter(function() {
     $(".index_left_nav").slideDown("fast");
 })
 $(".nav_left").mouseleave(function() {
     $(".index_left_nav").slideUp();
 })
})
// 内容js
$(function(){
    $(".w_brandFooter1").addClass("w_brandList").siblings().removeClass("w_brandList");
    $(".w_brandFooter1").on("mouseover",function(){
        $(this).addClass("w_brandList").siblings().removeClass("w_brandList");
        $(".w_brandF1").show();
        $(".w_brandF2").hide();
    })
    $(".w_brandFooter2").on("mouseover",function(){
        $(this).addClass("w_brandList").siblings().removeClass("w_brandList");
        $(".w_brandF2").show()
        $(".w_brandF1").hide();
    })
})
$(function() {
    var cont=[{"w_fastimg":"https://image8.wbiao.co/mall/e10aaee14770422b94e06111dabeb266.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"商务"},
              {"w_fastimg":"https://image8.wbiao.co/mall/dfbd58c60a2b4ad39628e9e762491a12.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"时尚简约"},
              {"w_fastimg":"https://image8.wbiao.co/mall/f21cd6efe48b4cc7a3fb53f3e625162d.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"运动"},
              {"w_fastimg":"https://image8.wbiao.co/mall/1e06b306dbd64e509c82dddb8f500a0f.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"计时"},
              {"w_fastimg":"https://image8.wbiao.co/mall/61876ab5849946fd8616e8bb31f2ff29.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"月相款"},
              {"w_fastimg":"https://image8.wbiao.co/mall/f3610fb91bac42babf33091153019c80.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"经典女款"},
              {"w_fastimg":"https://image8.wbiao.co/mall/eecd3ae9388247c691b17355ee5abe7d.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"经典男表"},
              {"w_fastimg":"https://image8.wbiao.co/mall/be96e8cf1f9543fb8a5c34dc2e3208f1.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"个性时尚"},
              {"w_fastimg":"https://image8.wbiao.co/mall/7d01cee4eaf045b8abc889847f3a4c42.png?x-oss-process=image/resize,m_pad,h_200,w,200","a1":"艺术"}
            ];
for(var i=0;i<cont.length;i++){
    $(".w_fast2-ul").append(`
        <li class="w_fast2-li">
            <img class="w_fast2-img" src='${cont[i].w_fastimg}' alt="">
            <a class="w_fast2-a1";href="javascript:;">${cont[i].a1}</a>
        </li>
    `)
};
$(".w_fast2-a1").eq(0).addClass("w_fast2-a2");
$(".w_fast2-a1").on("click",function(){
    $(".w_fast2-a1").removeClass("w_fast2-a2");
    $(this).addClass("w_fast2-a2");
})
$(".w_fast3-a").on("click",function(){
    $(this).addClass("w_fast2-a2").siblings().removeClass("w_fast2-a2");
})
})
// 品牌内容js
$(function(){
    var $arr=[{"img1":"https://image8.wbiao.co/shop/a178542e3e80465cac78f057054550f6.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥4108.3  ","bt7":"¥49,300","bt8":"瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 全日历月相表  P0459.SRG.1022.7604 正装休闲 机械男表(全","bt10":"","bt101":"销量74","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/3c58b50686bc49ab8fb582ec75c6df0a.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"","bt6":"￥316.7 ","bt7":"¥3,800","bt8":"法国优雅时尚腕表品牌：Michel Herbelin赫","bt10":"","bt101":"销量2141","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/ca350e3bb28b494e903019c1453f1e87.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥383.3","bt7":" ¥4,600","bt8":"【预计10月中下旬发货】法国优雅时尚腕表品牌：赫柏林Michel Herbelin  Perles珍珠系列  爱之印","bt10":"","bt101":"销量2365","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/d847df2e3823472c86727a06010d183c.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/9f73248eda99472d92b83c61170515c2.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/038c757faf274881870d08f66340340b.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/461204afe893468ab23c513da97f1b7b.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c9c5a662285f42e69304239c35308d91.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/ddb1f1090a1542be8bfcbb452781a42d.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/7696a6d9e37b4ae89509ffed120df6fa.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c9c5a662285f42e69304239c35308d91.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
            ];
    for(var i=0;i<$arr.length;i++){
        $(".w_cont3").append(`
        <li class='w_cont-bt'>
            <a class='w_cont-bta' href="shop.html" >
                <img class='w_cont_img1' src='${$arr[i].img1}' alt="">  
                <div class="w_cont-bt1"> 
                    <img class="w_cont_img2" src='${$arr[i].img2}' alt=""> 
                    <span class="w_cont-bt2">${$arr[i].bt2}</span>
                </div>  
            </a>  
            <div class="w_cont-bt3">
                <p class="w_cont-bt4"> 
                    <span class="w_cont-bt5">月付</span> 
                    <span class="w_cont-bt6">${$arr[i].bt6}</span> 
                    <span class="w_cont-bt7">${$arr[i].bt7}</span> 
                </p> 
                <a class="w_cont-bt8"  href="shop.html">${$arr[i].bt8}</a>
                <div class="w_cont-bt9"> 
                    <span class="w_cont-bt10">${$arr[i].bt10}</span> 
                    <span class="w_cont-bt101">${$arr[i].bt101}</span>
                </div> 
                <a  class="w_cont-bt11"  href="shop.html">${$arr[i].bt11}</a>
                <p class="w_cont-bt12">  
                    <span>免息分期</span>      
                </p>
                <span class="w_cont-bt121">自营</span>
                <div class="w_cont-bt13"> 
                    <a class="w_cont-bt14" href="javascript:void(0);" >加入收藏</a> 
                    <a class="w_cont-bt15" href="javascript:void(0);" >已收藏</a>   
                    <a class="w_cont-bt16" href="javascript:void(0);" >加入购物车</a> 
                </div>
            </div>
        </li> 
        `)
    }
        //存储购物车页面代码及购物车数量
    var cartNum=localStorage.getItem("cartNum")>0?localStorage.getItem("cartNum"):0;
    $(".cartNum span").text("("+cartNum+")")
    if(cartNum>0) {
        $(".cartNum").css("color","#cc5252")
    }else {
        $(".cartNum span").css("display","none") 
    }
    $(".w_cont-bt16").click(function() {
        cartNum++;
        localStorage.setItem("cartNum",cartNum)
        if(cartNum>0) {
            $(".cartNum").css("color","#cc5252")
            $(".cartNum span").removeAttr("style")
        }else {
            $(".cartNum span").css("display","none") 
        }
        $(".cartNum span").text("("+cartNum+")")
    })
    $(".w_cont-bt").on("mouseover",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).show()
    })
    $(".w_cont-bt").on("mouseout",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).hide()
    })
});
// 懒加载
$(function() {
    $("img").lazyload({
      placeholder: "https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,w_160,h_160,color_ffffff", 
      effect: "fadeIn"
     }); 
});
 
