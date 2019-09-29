$(function (){
    $(".w_listLeft2a").on("click",function(){
        var $tet=$(this).index()*(-210);
        $(".w_listLeft1").delay("slow").animate({"left": $tet},800)
        $(this).addClass("w_listLefta").siblings().removeClass("w_listLefta");
    })
    var $a=0;
    function add(){
        $(".w_listLeft2a").removeClass("w_listLefta");
        $a++
        if($a>=$(".w_listLeft2a").length){
            $a=0
            $(".w_listLeft1").css("left",$a*(-210)+"px");
        };
        if($a<$(".w_listLeft2a").length){
            $(".w_listLeft1").delay("slow").animate({"left": $a*(-210)},800)
            $(".w_listLeft2a").eq($a).addClass("w_listLefta");
        };
    }
    var $thimer=setInterval(add,1500);
})
$(function(){
    function commena(){
        $(".w_commentMa").on("click",function(){
            var $bt=$(this).index()*(-210);
            $(".w_commenUl1").delay("slow").animate({"left": $bt},800)
            $(this).addClass("w_commentMb").siblings().removeClass("w_commentMb");
        })
        var $a=0;
        function add(){
            $(".w_commentMa").removeClass("w_commentMb");
            $a++
            if($a>=$(".w_commentMa").length){
                $a=0
                $(".w_commenUl1").css("left",$a*(-210)+"px");
            };
            if($a<$(".w_commentMa").length){
                $(".w_commenUl1").delay("slow").animate({"left": $a*(-210)},800)
                $(".w_commentMa").eq($a).addClass("w_commentMb");
            };
        }
        var $thimer=setInterval(add,1500);
    }
    function commens(){
        $(".w_commentMs").on("click",function(){
            var $bt=$(this).index()*(-210);
            $(".w_commenUl2").delay("slow").animate({"left": $bt},800)
            $(this).addClass("w_commentMb").siblings().removeClass("w_commentMb");
        })
        var $a=0;
        function add(){
            $(".w_commentMs").removeClass("w_commentMb");
            $a++
            if($a>=$(".w_commentMs").length){
                $a=0
                $(".w_commenUl2").css("left",$a*(-210)+"px");
            };
            if($a<$(".w_commentMs").length){
                $(".w_commenUl2").delay("slow").animate({"left": $a*(-210)},800)
                $(".w_commentMs").eq($a).addClass("w_commentMb");
            };
        }
        var $thimer=setInterval(add,1500);
    }
    commena()
    $(".w_commenName1").addClass("w_commenName").siblings().removeClass("w_commenName");
    $(".w_commenName1").on("mouseover",function(){
        $(".w_commentMg1").show().siblings().hide();
        $(this).addClass("w_commenName").siblings().removeClass("w_commenName");
    })
    $(".w_commenName2").on("mouseover",function(){
        $(".w_commentMg2").show().siblings().hide();; 
        $(this).addClass("w_commenName").siblings().removeClass("w_commenName");
        commens()
    })
})
$(function(){
    $(".w_brandList1").addClass("w_brandList").siblings().removeClass("w_brandList");
    $(".w_brandList1").on("mouseover",function(){
        $(this).addClass("w_brandList").siblings().removeClass("w_brandList");
        $(".w_brandName1").show();
        $(".w_brandName2").hide();
    })
    $(".w_brandList2").on("mouseover",function(){
        $(this).addClass("w_brandList").siblings().removeClass("w_brandList");
        $(".w_brandName2").show()
        $(".w_brandName1").hide();
    })
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
$(function(){
    $(".w_signList3").on("click",function(){
        $(".w_singSa").on("mouseover",function(){
            $(".clearfix").hide();
            $(".clearfix").eq($(this).index()).show();
    
        });

    })


   
})