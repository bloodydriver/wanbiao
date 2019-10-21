
$(".span2").click(function() {
    if($(this).hasClass("changeSpan")) {   //是否优惠加购
        $(this).removeClass("changeSpan")
        $(this).text("+优惠加购");
        $(".priceAdd").eq($(".span2").index($(this))).text("￥0")
    }else {
        $(this).addClass("changeSpan")
        $(this).text("取消加购");
        $(".priceAdd").eq($(".span2").index($(this))).text($(".span1 span:first-child").eq($(".span2").index($(this))).text())
    }
})

$(".msg_area").keyup(function() {  //留言文本键入字符长度
    $(".leave_msg span").text($(this).val().length+"/200")
})
$(function() {

//默认地址
$(".edit .p5 i").click(function() {
    if($(this).hasClass("light")) {
        $(this).removeClass("light")
    }else {
        $(this).addClass("light")
    }
})

//添加收货地址
$(".addAddress").click(function() {  //初始化地址信息
    $(".shade").css("display","block")
    $(".edit_box h2 span").text("添加收货地址")
    $("#province1").children().eq(1).removeAttr("selected")
    $("#province1").children().removeAttr("selected")
    $("#province1").children().eq(0).attr("selected")
    $("#province1").siblings().hide(); 
    $(".edit .p1 input").val("")
    $(".edit .p2 input").val("")
    $(".edit .p4 input").val("")
})
$(".edit_box h2 i").click(function() {
    $(".shade").removeAttr("style")
    $(".footer .btn1").removeClass("amend")
})
$(".footer .btn2").click(function() {
    $(".shade").removeAttr("style")
    $(".footer .btn1").removeClass("amend")
})

$(".footer .btn1").click(function() {
    //匹配收货地址信息 格式错误提示
    if(!/[\S]/.test($(".edit .p1 input").val())) {
        $(".edit>p em").eq(0).css("display","block");
        $(".edit .p1 span").css("color","#cc5252")
    }else if(!/^1[34578]\d{9}$/.test($(".edit .p2 input").val())){
        $(".edit>p em").eq(1).css("display","block");
        $(".edit .p2 span").css("color","#cc5252")
    }else if($("#province1").val()==$("#province1 option").eq(0).val()) {
        $("#province1").css("border","1px solid #cc5252")
        $(".edit .p3 span").css("color","#cc5252")
    }else if(!/[\S]/.test($(".edit .p4 input").val())) {
        $(".edit>p em").eq(2).css("display","block");
        $(".edit .p4 span").css("color","#cc5252")
    }else {    //正则匹配成功后创建地址信息或修改地址信息
        if(!$(this).hasClass("amend")) {   //添加地址
            $(".L_address ul").append(
            `
            <li>
                <p class="p1">
                    <span class="Name">${$(".edit .p1 input").val()}</span>
                    <span class="phone">${$(".edit .p2 input").val()}</span>
                    <i>默认</i>
                </p>
                <div>
                    <p class="p2">
                        <i></i>
                        <span>${$("#province1").val()}</span>
                        <span>${$("#city1").val()}</span>
                        <span>${$("#district1").val()}</span>
                    </p>
                    <p class="p3">${$(".edit .p4 input").val()}</p>
                    <i></i>
                </div>
                <span class="hover">编辑</span>
            </li>
            `
        )
        }else {  //修改地址
            $(".L_address ul .Name").eq($(".L_address ul li").index($(".changeBorder"))).text($(".edit .p1 input").val())
            $(".L_address ul .phone").eq($(".L_address ul li").index($(".changeBorder"))).text($(".edit .p2 input").val())
            $(".L_address ul .p3").eq($(".L_address ul li").index($(".changeBorder"))).text($(".edit .p4 input").val())
            $(".L_address ul .p2 span:nth-child(2)").eq($(".L_address ul li").index($(".changeBorder"))).text($("#province1").val())
            $(".L_address ul .p2 span:nth-child(3)").eq($(".L_address ul li").index($(".changeBorder"))).text($("#city1").val())
            $(".L_address ul .p2 span:nth-child(4)").eq($(".L_address ul li").index($(".changeBorder"))).text($("#district1").val())
        }   
        
        $(".shade").removeAttr("style")
        $(this).removeClass("amend")
    }
    $(".L_address .hover").on("click",function() {  
        $(".footer .btn1").addClass("amend");
        $(".shade").css("display","block");
        $(".edit_box h2 span").text("编辑收货地址")
        $("#city1").children().eq(0).removeAttr("selected")
        $("#district1").children().eq(0).attr("selected")
        $("#province1").siblings().show(); 
        $(".edit .p1 input").val($(".L_address ul .Name").eq($(this).parent().index()).text())
        $(".edit .p2 input").val($(".L_address ul .phone").eq($(this).parent().index()).text())
        $(".edit .p4 input").val($(".L_address ul .p3").eq($(this).parent().index()).text())
    })
    //切换地址信息
    $(".L_address ul li").click(function() {
        if(!$(this).hasClass("changeBorder")) {
            $(this).addClass("changeBorder").siblings().removeClass("changeBorder")
            $(".L_address ul li>div>i").css("display","block").not($(".L_address ul li>div>i").eq($(".L_address ul li").index($(this)))).removeAttr("style")
            $(".L_address ul .p2 i").css("background-position","-280px -296px").not($(".L_address ul .p2 i").eq($(".L_address ul li").index($(this)))).removeAttr("style")
            $(".L_address ul .p1").css("color","#cc5252").not($(".L_address ul .p1").eq($(".L_address ul li").index($(this)))).removeAttr("style")
        }
    }) 
    $(".L_address ul li").eq($(".L_address ul li").length-1).addClass("changeBorder")   
    if($(".L_address ul li").eq($(".L_address ul li").length-1).hasClass("changeBorder")) {
        $(".L_address ul li").eq($(".L_address ul li").length-1).addClass("changeBorder").siblings().removeClass("changeBorder")
        $(".L_address ul li>div>i").css("display","block").not($(".L_address ul li>div>i").eq($(".L_address ul li").length-1)).removeAttr("style")
        $(".L_address ul .p2 i").css("background-position","-280px -296px").not($(".L_address ul .p2 i").eq($(".L_address ul li").length-1)).removeAttr("style")
        $(".L_address ul .p1").css("color","#cc5252").not($(".L_address ul .p1").eq($(".L_address ul li").length-1)).removeAttr("style")
    }
})
$(".edit>p input").keyup(function() {  //修改错误信息移除提示
    $(this).parent().children().removeAttr("style")
})

//更改原插件默认格式
$("#province1").change(function() {
    $("#province1").removeAttr("style")  
    $(".edit .p3 span").removeAttr("style")  
    $("#district1").children().eq(0).remove();
    $("#city1").children().eq(0).remove();       
    if($(this).val()==$("#province1 option").eq(0).val()) {
        $(this).siblings().hide();
    }else {
        $(this).siblings().show();
    }
})
 $("#city1").change(function() {
    $("#district1").children().eq(0).remove();
})
})
//将购物车中本地存储的代码取出
$(".shopList ul").eq(0).append(localStorage.getItem("list"))
// console.log(localStorage.getItem("list"))