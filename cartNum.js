$(function() {
    //存储购物车页面代码及购物车数量(公用)
    var cartNum=localStorage.getItem("cartNum")>0?localStorage.getItem("cartNum"):0;
    var cartCode=localStorage.getItem("cartCode")!=null?localStorage.getItem("cartCode"):"";
    $(".cartNum span").text("("+cartNum+")")
    if(cartNum>0) {
        $(".cartNum").css("color","#cc5252")
    }else {
        $(".cartNum span").css("display","none") 
    }
    
    $(".w_cont-bt16").click(function() {
        cartNum++;
        localStorage.setItem("cartNum",cartNum)
        $(this).parent().parent().parent().addClass("addCart");
            cartCode+=`
            <li>
                <i class="check"></i>
                <p>
                    <img src="${$(".addCart .w_cont_img1").eq($(".addCart").index($(this).parent().parent().parent()))[0].src}" alt="">
                </p>
                <div class="content">
                    <p>${$(".addCart .w_cont-bt8").eq($(".addCart").index($(this).parent().parent().parent())).text()}</p>
                    <p>真皮 黑色</p>
                </div>
                <div class="control">
                    <span>￥<span class="price">${$(".addCart .w_cont-bt7").eq($(".addCart").index($(this).parent().parent().parent())).text().split(" ").join("").substr(1).split(",").join("")}</span></span>
                    <div>
                        <button class="sub" type="button">-</button>
                        <input class="number" type="text" value="1" disabled>
                        <button class="add" type="button">+</button>
                    </div>
                    <span class="priceAll" style="font-weight: 700;">￥${$(".addCart .w_cont-bt7").eq($(".addCart").index($(this).parent().parent().parent())).text().split(" ").join("").substr(1).split(",").join("")}</span>
                    <a class="del" href="javascript:void(0)">删除</a>
                </div>
                <a href="javascript:void(0)">移入收藏</a>
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
    })

})