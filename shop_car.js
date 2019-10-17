$(function() {
    //商品添加
    for(var i=0; i<5; i++) {
        $(".shopCar_content ul").prepend(`
        <li>
            <i class="check"></i>
            <img src="" alt="">
            <div class="content">
                <p>阿玛尼-LUIGI系列 AR1970 石英男表${i+1}</p>
                <p>真皮 黑色</p>
            </div>
            <div class="control">
                <span>￥<span class="price">2120</span></span>
                <div>
                    <button class="sub" type="button">-</button>
                    <input class="number" type="text" value="1" disabled>
                    <button class="add" type="button">+</button>
                </div>
                <span class="priceAll" style="font-weight: 700;">￥2120</span>
                <a class="del" href="javascript:void(0)">删除</a>
            </div>
            <a href="">移入收藏</a>
        </li>
        `)}
    
    $(".shop_num").text($(".shopCar_content li").length);

    //选中商品
    var checked = function() {  //判断是否所有商品被选中
        if($(".shopCar_content ul .checkOn").length==$(".shopCar_content li").length) {
            $(".checkAll i").addClass("checkOn")
            $(".shopName>.check").addClass("checkOn")
            $(".check_payment i").addClass("checkOn")
        }else {
            $(".checkAll i").removeClass("checkOn")
            $(".shopName>.check").removeClass("checkOn")
            $(".check_payment i").removeClass("checkOn")
        }
    }
    $(".check").click(function() { //单个商品选中
        if($(this).hasClass("checkOn")) {
            $(this).removeClass("checkOn");
        }else {
            $(this).addClass("checkOn")
        }
        checked();
        getPrice();
    })
    $(".checkAll i").click(function() { //顶部全选
        if($(this).hasClass("checkOn")) {
            $(".check").removeClass("checkOn")
            $(this).removeClass("checkOn")
            $(".check_payment i").removeClass("checkOn")
        }else {
            $(".check").addClass("checkOn")
            $(this).addClass("checkOn")
            $(".check_payment i").addClass("checkOn")
        }
        getPrice();
    })
    $(".shopName>.check").click(function() { //选中店铺
        if($(this).hasClass("checkOn")) {
            $(".check").removeClass("checkOn")
        }else {
            $(".check").addClass("checkOn")
        }
        checked();
        getPrice();
    })

    $(".check_payment i").click(function() { //结算全选
        if($(this).hasClass("checkOn")) {
            $(this).removeClass("checkOn");
            $(".check").removeClass("checkOn");
            $(".checkAll i").removeClass("checkOn");
        }else {
            $(".check").addClass("checkOn");
            $(this).addClass("checkOn");
            $(".checkAll i").addClass("checkOn");
        }
        checked();
        getPrice();
    })

    //商品计数及小计
    $(".sub").click(function() {
        $(".number")[$(".sub").index($(this))].value--;
        if($(".number")[$(".sub").index($(this))].value<=1) {
            $(".number")[$(".sub").index($(this))].value=1;
        }
        $(".priceAll")[$(".sub").index($(this))].innerHTML="￥"+$(".number")[$(".sub").index($(this))].value*$(".price").eq($(".sub").index($(this))).text();
        getPrice();
    })
    $(".add").on("click",function() {
        $(".number")[$(".add").index($(this))].value++;
        $(".priceAll")[$(".add").index($(this))].innerHTML="￥"+$(".number")[$(".add").index($(this))].value*$(".price").eq($(".add").index($(this))).text();
        getPrice();
    })

    //删除商品
    var clearCar = function () {
        if($(".shopCar_content li").length==0) {  //购物车清空后
            $(".shopAll").css("display","none");
            $(".shopNull").css("display","block")
        }else {
            $(".shopNull").css("display","none")
        }
        $(".shop_num").text($(".shopCar_content li").length);//删除后的商品数量
    }
    $(".del").click(function() { //单个商品删除
        $(".shopCar_content li").eq($(".del").index($(this))).remove()
        clearCar();
        checked();
        getPrice();
    })
    $(".checkDel").click(function() { //对选中的商品删除
        $(".shopCar_content li>.checkOn").parent().remove(); 
        clearCar();
        getPrice();
    })

    //结算总价
   function getPrice() {
        $(".totalPrice")[0].innerHTML=0; //每次执行事件进行清0
        for (var j=0;j<$(".shopCar_content li").length;j++) { //循环所有的商品
            if($(".shopCar_content li .check").eq(j).hasClass("checkOn")) { //判断每个商品是否被选中
                $(".totalPrice")[0].innerHTML+=("+"+$(".priceAll").eq(j).text().substr(1));  //选中后进行价格拼接  
            }
        }
        $(".totalPrice")[0].innerHTML=eval($(".totalPrice").text());  //计算总价
        $(".checkedNum").text($(".shopCar_content li .checkOn").length); //选中商品的数量
        if($(".ticket>em").hasClass("ticketOn")) {  //判断是否领券
            $(".total").text($(".totalPrice")[0].innerHTML-$(".ticket>em").text().substr(1)); //领券后的价格
            if($(".total").text()<0) { //避免领券后价格为负值，同时在有价格时显示优惠价格
                $(".total").text(0);
                $(".totalPrice~span").hide()
            }else {
                $(".totalPrice~span").show()
            }
        }else {
            $(".total").text($(".totalPrice")[0].innerHTML);  //未领券的价格
        }
    }
    
    //领券
    $(".shopName a").focus(function() {
        $(".shopName>em").css("display","block")
        $(".ticket").css("display","block")
    })
    $(".shopName a").blur(function() {
        $(".shopName>em").css("display","none")
        $(".ticket").css("display","none")
    }) 
    $(".ticket>i").click(function() {
        $(this).text("领取成功").css("border","none");
        if($(this).text("领取成功")) {
            $(".ticket>em").addClass("ticketOn")
            $(".totalPrice").parent().append(`
                <span style="margin-left: 10px">活动优惠${$(".ticket>em").text()}</span> 
                `)                  //领取优惠券后在总额后插入优惠价格
            getPrice();
        }
    })
})