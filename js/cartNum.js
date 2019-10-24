$(function() {
    $(".ad_close").click(function () {
        $(this).parent().slideUp();
    })
    // 客户服务
    $(".index_serbox").mouseover(function() {
        $(this).children().eq(0).css({
            "background-color": "#fff",
            "border-left": "1px solid #ccc",
            "border-right": "1px solid #ccc"
        })
        $(this).children().eq(1).show().slideDown();
    })
    $(".index_serbox").mouseout(function() {
        $(this).children().eq(1).hide().slideUp();
        $(this).children().eq(0).css({
            "background-color": "#f4f4f4",
            "border-left": "1px solid transparent",
            "border-right": "1px solid transparent"
        });
    })

    //存储购物车页面代码及购物车数量
    var cartNum=localStorage.getItem("cartNum")>0?localStorage.getItem("cartNum"):0;
    var cartCode=localStorage.getItem("cartCode")!=null?localStorage.getItem("cartCode"):"";
    var yshop_car =localStorage.getItem("cartCode")!=null?localStorage.getItem("yshop_car"):"";
    $(".cartNum span").text("("+cartNum+")")
    if(cartNum>0) {
        $(".cartNum").css("color","#cc5252")
    }else {
        $(".cartNum span").css("display","none") 
    }
    $(".w_cont-bt16").click(function() {

        cartNum++;
        $(".login-look").hide()
        $(".cart-empty").hide()
        $(".yshop-car").show()
        $(".yshop-car .bottom").css({"bottom":"0"})
        localStorage.setItem("cartNum",cartNum)
        $(this).parent().parent().parent().addClass("addCart");
            cartCode+=`
            <li>
                <i class="check"></i>
                <p class="left">
                    <img src="${$(".addCart .w_cont_img1").eq($(".addCart").index($(this).parent().parent().parent()))[0].src}" alt="">
                </p>
                <div class="content">
                    <p>${$(".addCart .w_cont-bt8").eq($(".addCart").index($(this).parent().parent().parent())).text()}</p>
                    <p class="noneed">真皮 黑色</p>
                </div>
                <div class="control">
                    <span>￥<span class="price">${$(".addCart .w_cont-bt7").eq($(".addCart").index($(this).parent().parent().parent())).text().split(" ").join("").substr(1).split(",").join("")}</span></span>
                    <div>
                        <button class="sub" type="button">-</button>
                        <input class="number" type="text" value="1" disabled>
                        <button class="add" type="button">+</button>
                    </div>
                    <span class="priceAll" style="font-weight: 700;">￥${$(".addCart .w_cont-bt7").eq($(".addCart").index($(this).parent().parent().parent())).text().split(" ").join("").substr(1).split(",").join("")}</span>
                    <a class="delete-g" href="javascript:void(0)">删除</a>
                </div>
                <a href="javascript:void(0)" class="remove-collect">移入收藏</a>
            </li>
            `
            yshop_car=`
                <li>
                    <div class="middle">
                        <div class="left">
                            <img src="${$(".addCart .w_cont_img1").eq($(".addCart").index($(this).parent().parent().parent().addClass("addCart")))[0].src}" alt="">
                        </div>
                        <div class="right">
                            <span class="p1">${$(".addCart .w_cont-bt8").eq($(".addCart").index($(this).parent().parent().parent().addClass("addCart"))).text()}</span>
                            <span class="pr"><b id="pricc">${$(".addCart .w_cont-bt7").eq($(".addCart").index($(this).parent().parent().parent().addClass("addCart"))).text().split(" ").join("").substr(1).split(",").join("")}
                            </b>
                            <em>x<i class="coun">1</i></em>
                            <span class="delete-gg">删除</span>
                            </span>
                            
                        </div>
                    </div>
                   
                </li>
                `
            
            
            localStorage.setItem("yshop_car",yshop_car)
        localStorage.setItem("cartCode",cartCode)
        if(cartNum>0) {
            $(".cartNum").css("color","#cc5252")
            $(".cartNum span").removeAttr("style")
        }else {
            $(".cartNum span").css("display","none") 
        }
        $(".cartNum span").text("("+cartNum+")")
        $(".yshop-car").append(localStorage.getItem("yshop_car"))
        $(".delete-gg").click(function(){
            $(this).parent().parent().parent().parent().remove()
            console.log(1213)
        })
    });
   

    $(".L_shop_btn2").click(function() {   //商品详情加购
        cartNum++;
        localStorage.setItem("cartNum",cartNum)
        cartCode+=`
        <li>
            <i class="check"></i>
            <p class="left">
                <img src="${$(".L_shop_img_box img")[0].src}" alt="">
            </p>
            <div class="content">
                <p>${$(".L_shop_detail_right>h2").text()}</p>
                <p class="noneed">真皮 黑色</p>
            </div>
            <div class="control">
                <span>￥<span class="price">${$(".L_shop_price_all>span span").text().split(",").join("")}</span></span>
                <div>
                    <button class="sub" type="button">-</button>
                    <input class="number" type="text" value="1" disabled>
                    <button class="add" type="button">+</button>
                </div>
                <span class="priceAll" style="font-weight: 700;">￥${$(".L_shop_price_all>span span").text().split(",").join("")}</span>
                <a class="del" href="javascript:void(0)">删除</a>
            </div>
            <a href="javascript:void(0)" class="remove-collect">移入收藏</a>
        </li>
        `
        localStorage.setItem("cartCode",cartCode)
        if(cartNum>0) {
            $(".cartNum").css("color","#cc5252")
            $(".cartNum span").removeAttr("style")
        }else {
            $(".cartNum span").css("display","none") 
        }
        $(".cartNum span").text("("+cartNum+")")
        $(".yshop-car").append(localStorage.getItem("yshop_car"))
    })

    $(".L_shop_btn1").click(function() {   //立即购买
        datalist=`
            <li>
                <div class="shopMessage">
                    <a href="javascript:void(0)">
                        <img src="${$(".L_shop_img_box img")[0].src}" alt="">
                    </a>
                    <div class="shopContent">
                        <p class="p1">${$(".L_shop_detail_right>h2").text()}</p>
                        <p class="p2">真皮 黑色</p>
                        <span>七天退换</span>
                    </div>
                    <div class="shopMessage_fl">
                        <span>￥<span class="price">${$(".L_shop_price_all>span span").text().split(",").join("")}</span></span>
                        <div>
                            <button class="sub subNum" type="button">-</button>
                            <input class="number" type="text" value="${$(".L_shop_count input").val()}" disabled>
                            <button class="add addNum" type="button">+</button>
                        </div>
                        <span class="priceAll" style="font-weight: 700;">￥${$(".L_shop_price_all>span span").text().split(",").join("")}</span>
                    </div>
                </div>
            </li>
            `
            localStorage.setItem("list",datalist)
    })
    

})