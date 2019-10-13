var patt1 = /^[0-9]{11}$/;
var patt2 = /^[0-9a-zA-Z]{6,20}$/;
$("#phone").blur(function(){
    if( $("#phone").val()==""){
       
        $("#error1").html("请输入手机号");
        $(".r-error").eq(0).css("display","block")
    }else if(!(patt1.test($("#phone").val()))){
        $("#error1").html("请输入正确的手机号");
        $(".r-error").eq(0).css("display","block")
        
    }else{
        $(".r-error").eq(0).css("display","none")
    }
})

$("#password").blur(function(){
    if(!(patt2.test($("#password").val()))){
        $(".r-error").eq(2).css("display","block")
    }else{
        $(".r-error").eq(2).css("display","none")
    }
})
// $("#password1").blur(function(){
//     if($("#password1").val()!=$("#password").val()){
//         $(".r-error").eq(3).css("display","block")
//     }else{
//         $(".r-error").eq(3).css("display","none")
//     }
// })

$('#password1').on('blur',function(event){
    if($("#password1").val()!=$("#password").val()){
        $(".r-error").eq(3).css("display","block")
    }else{
        $(".r-error").eq(3).css("display","none")
    }
});