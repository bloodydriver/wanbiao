   //商品添加
    // for(var i=0; i<localStorage.getItem("cartNum"); i++) {
        $(".shopCar_content ul").prepend(localStorage.getItem("cartCode"))
        var datalist="";
        $(".pay button").click(function() {  //结算时把勾选的商品节点本地存储
            
            for(var j=0;j<$(".shopCar_content li .checkOn").length;j++) {
                // console.log($(".content p:first-child").eq($(".shopCar_content li").index($(".checkOn").parent().eq(j))).text())
                datalist+=`
                <li>
                    <div class="shopMessage">
                        <a href="javascript:void(0)">
                            <img src="${$(".shopCar_content li>p img").eq($(".shopCar_content li").index($(".shopCar_content li .checkOn").parent().eq(j)))[0].src}" alt="">
                        </a>
                        <div class="shopContent">
                            <p class="p1">${$(".content p:first-child").eq($(".shopCar_content li").index($(".shopCar_content li .checkOn").parent().eq(j))).text()}</p>
                            <p class="p2">${$(".content p:last-child").eq($(".shopCar_content li").index($(".shopCar_content li .checkOn").parent().eq(j))).text()}</p>
                            <span>七天退换</span>
                        </div>
                        <div class="shopMessage_fl">
                            <span>￥<span class="price">${$(".price").eq($(".shopCar_content li").index($(".shopCar_content li .checkOn").parent().eq(j))).text()}</span></span>
                            <div>
                                <button class="sub subNum" type="button">-</button>
                                <input class="number" type="text" value="${$(".number").eq($(".shopCar_content li").index($(".shopCar_content li .checkOn").parent().eq(j))).val()}" disabled>
                                <button class="add addNum" type="button">+</button>
                            </div>
                            <span class="priceAll" style="font-weight: 700;">${$(".priceAll").eq($(".shopCar_content li").index($(".shopCar_content li .checkOn").parent().eq(j))).text()}</span>
                        </div>
                    </div>
                </li>
                `
            }
            localStorage.setItem("list",datalist)
            if($(".ticket>em").hasClass("ticketOn")) {
                localStorage.setItem("subPrice",$(".ticket>em").text().substr(1))
            }
            if($(".checkOn").length>0) {  //勾选商品后可跳转至结算
                window.location.href = "submitIndent.html";
            }
        })

        if(localStorage.getItem("subPrice")>0) {   //页面刷新判断是否领券
            $(".ticket>em").addClass("ticketOn")
            $(".ticket>i").text("领取成功").css("border","none");
            if($(".ticket>i").text("领取成功")) {
                $(".ticket>em").addClass("ticketOn")
                if($(".pay .totalPrice").parent().children().length<3) {
                    $(".pay .totalPrice").parent().append(`
                    <span style="margin-left: 10px">活动优惠${$(".ticket>em").text()}</span> 
                    `)  
                }               //领取优惠券后在总额后插入优惠价格
                getPrice();
            }
        }
        
    
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
    $(".sub").on("click",function() {
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
    clearCar();
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
        $(".totalPrice").text(0); //每次执行事件进行清0
        for (var j=0;j<$(".shopCar_content li").length;j++) { //循环所有的商品
            if($(".shopCar_content li .check").eq(j).hasClass("checkOn")) { //判断每个商品是否被选中
                $(".totalPrice")[0].innerHTML+=("+"+$(".priceAll").eq(j).text().substr(1));  //选中后进行价格拼接  
            }
        }
        $(".totalPrice").text(eval($(".totalPrice").text()));  //计算总价
        $(".checkedNum").text($(".shopCar_content li .checkOn").length); //选中商品的数量
        if($(".ticket>em").hasClass("ticketOn")) {  //判断是否领券
            $(".total").text($(".totalPrice").text()-$(".ticket>em").text().substr(1)); //领券后的价格
            if($(".total").text()<0) { //避免领券后价格为负值，同时在有价格时显示优惠价格
                $(".total").text(0);
                $(".totalPrice~span").hide()
            }else {
                $(".totalPrice~span").show()
            }
        }else {
            $(".total").text($(".totalPrice").text());  //未领券的价格
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
            if($(".totalPrice").parent().children().length<3) {
                $(".totalPrice").parent().append(`
                <span style="margin-left: 10px">活动优惠${$(".ticket>em").text()}</span> 
                `)  
            }               //领取优惠券后在总额后插入优惠价格
            getPrice();
        }
    })