// 头尾客服男女表和表带js
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
// 头部左边轮播男女表和表带js
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
});
// 头部左边轮播男女表和表带js
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
});
// 头部左边小tab切换男女表和表带js
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
});
// 头部右边小tab切换男女表和表带js
$(function(){
    $(".w_signList3").on("click",function(){
        if( $(".w_signT1").hasClass("w_signT11")==false){
            $(".w_signU1").hide();
            $(".w_signList2").show();
            $(".w_signT1").addClass("w_signT11");
            $(".w_singB11").show();
            $(".w_abc a").eq(0).css("color","#cc9952");
            $(".w_signList").css("height","275px")
            $(".w_signT2").html("收起");
            $(".w_singSa").on("mouseover",function(){
                $(".w_abc a").eq(0).css("color","#333")
                $(".w_clearfix").hide();
                $(this).css("color","#cc9952").siblings().css("color","#333")
                $(".w_clearfix").eq($(this).index()).show();
            })
        }else {
            $(".w_singB11").hide();
            $(".w_signT2").html("更多");
            $(".w_signU1").show();
            $(".w_abc a").eq(0).css("color","#333")
            $(".w_signList2").hide();
            $(".w_signT1").removeClass("w_signT11")
            $(".w_clearfix").show();
            $(".w_signList").css("height","120px")
        };
    })
});
// 头部右边小tab切换男女表和表带js
$(function(){
    var aet=function(){
        $(".w_class5-li").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class5-lt").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class5-lt").eq($te).addClass("w_class5-di1");
                $(".w_class5-lt").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class5-lt").eq($te).removeClass("w_class5-di1");
                $(".w_class5-lt").eq($te).removeClass("w_class5-de1");
                $(".w_bott1").removeClass("w_bott11");
            } 
            if($(".w_class5-lt").hasClass("w_class5-di1")==true){
                $(".w_bott1").addClass("w_bott11");
            }
        });
    };
    $(".w_class5-bt2").on("click",function(){
        $(".w_class5-list2").show();
        $(".w_class5-list1").hide();
        $(".w_class5-li").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class5-lt").removeClass("w_class5-de1");
            $(".w_class5-lt1").removeClass("w_class5-de2");
            $(".w_class5-lt").eq($tet).addClass("w_class5-de1");
            $(".w_class5-lt1").eq($tet).addClass("w_class5-de2");
        });
       aet()
    }); 
    $(".w_bott2").on("click",function(){
        $(".w_class5-list2").hide();
        $(".w_class5-list1").show();
        $(".w_class5-lt").removeClass("w_class5-de1");
        $(".w_class5-lt1").removeClass("w_class5-de2");
        $(".w_class5-lt").removeClass("w_class5-di1");
        $(".w_bott1").removeClass("w_bott11");
       aet()
    });
});
// 头部右边小tab切换男女表和表带js开始
$(function(){
    $(".w_class6-dot").on("click",function(){
        if( $(".w_class6-T1").hasClass("w_signT11")==false){
            $(".w_class6-T1").addClass("w_signT11");
            $(".w_class6-lt1").css("height","65px");
            $(".w_class6-T2").html("收起");
        }else {
            $(".w_class6-T2").html("更多");
            $(".w_class6-T1").removeClass("w_signT11");
            $(".w_class6-lt1").css("height","14px");
        }
    });
    var aet=function(){
        $(".w_class6-li1").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti1").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti1").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti1").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti1").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti1").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h11").removeClass("w_bott11");
            } 
            if($(".w_class6-lti1").hasClass("w_class5-di1")==true){
                $(".w_class6-h11").addClass("w_bott11");
            }
        }) 
    }
    $(".w_class6-bt2").on("click",function(){
        $(".w_class6-Name2").show();
        $(".w_class6-Name1").hide();
        $(".w_class6-li1").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti1").removeClass("w_class5-de1");
            $(".w_class6-lts1").removeClass("w_class5-de2");
            $(".w_class6-lti1").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts1").eq($tet).addClass("w_class5-de2");
        })
        aet()
    }); 
    $(".w_class6-h12").on("click",function(){
        $(".w_class6-Name2").hide();
        $(".w_class6-Name1").show();
        $(".w_class6-lti1").removeClass("w_class5-de1");
        $(".w_class6-lts1").removeClass("w_class5-de2");
        $(".w_class6-lti1").removeClass("w_class5-di1");
        $(".w_class6-h11").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    var aet=function(){ 
        $(".w_class6-li2").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti2").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti2").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti2").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti2").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti2").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h21").removeClass("w_bott11");
            } 
            if($(".w_class6-lti2").hasClass("w_class5-di1")==true){
                $(".w_class6-h21").addClass("w_bott11");
            }
        }) 
    };
    $(".w_class6-bt3").on("click",function(){
        $(".w_class6-Name4").show();
        $(".w_class6-Name3").hide();
        $(".w_class6-li2").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti2").removeClass("w_class5-de1");
            $(".w_class6-lts2").removeClass("w_class5-de2");
            $(".w_class6-lti2").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts2").eq($tet).addClass("w_class5-de2");
        })
       aet()
    }) 
    $(".w_class6-h22").on("click",function(){
        $(".w_class6-Name4").hide();
        $(".w_class6-Name3").show();
        $(".w_class6-lti2").removeClass("w_class5-de1");
        $(".w_class6-lts2").removeClass("w_class5-de2");
        $(".w_class6-lti2").removeClass("w_class5-di1");
        $(".w_class6-h21").removeClass("w_bott11");
        aet();
    })
    $(".w_class6-st2").on("click",function(){
        var $regex=/^[0-9]{2,}$/;
        if(!$regex.test($(".w_class6-st1").val())){
            $(".w_class6-st3").html("确定请输入有效的表盘直径");
        }else{
            $(".w_class6-st3").html("");
        }
    })
});
$(function(){
    $(".w_class6-dot1").on("click",function(){
        if( $(".w_class6-T11").hasClass("w_signT11")==false){
            $(".w_class6-T11").addClass("w_signT11");
            $(".w_class6-lt4").css("height","65px");
            $(".w_class6-T12").html("收起");
        }else {
            $(".w_class6-T12").html("更多");
            $(".w_class6-T11").removeClass("w_signT11");
            $(".w_class6-lt4").css("height","14px");
        }
    });
    var aet=function(){
        $(".w_class6-li3").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti3").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti3").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti3").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti3").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti3").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h31").removeClass("w_bott11");
            } 
            if($(".w_class6-lti3").hasClass("w_class5-di1")==true){
                $(".w_class6-h31").addClass("w_bott11");
            }
        }) 
    };
    $(".w_class6-bt4").on("click",function(){
        $(".w_class6-Name6").show();
        $(".w_class6-Name5").hide();
        $(".w_class6-li3").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti3").removeClass("w_class5-de1");
            $(".w_class6-lts3").removeClass("w_class5-de2");
            $(".w_class6-lti3").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts3").eq($tet).addClass("w_class5-de2");
        })
       aet() 
    });
    $(".w_class6-h32").on("click",function(){
        $(".w_class6-Name6").hide();
        $(".w_class6-Name5").show();
        $(".w_class6-lti3").removeClass("w_class5-de1");
        $(".w_class6-lts3").removeClass("w_class5-de2");
        $(".w_class6-lti3").removeClass("w_class5-di1");
        $(".w_class6-h31").removeClass("w_bott11");
        aet() 
    })
});
$(function(){
    var aet=function(){
        $(".w_class6-li4").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti4").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti4").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti4").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti4").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti4").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h41").removeClass("w_bott11");
            } 
            if($(".w_class6-lti4").hasClass("w_class5-di1")==true){
                $(".w_class6-h41").addClass("w_bott11");
            }
        }) 
    }
    $(".w_class6-bt5").on("click",function(){
        $(".w_class6-Name8").show();
        $(".w_class6-Name7").hide();
        $(".w_class6-li4").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti4").removeClass("w_class5-de1");
            $(".w_class6-lts4").removeClass("w_class5-de2");
            $(".w_class6-lti4").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts4").eq($tet).addClass("w_class5-de2");
        })
        aet()
    });
     $(".w_class6-h42").on("click",function(){
        $(".w_class6-Name8").hide();
        $(".w_class6-Name7").show();
        $(".w_class6-lti4").removeClass("w_class5-de1");
        $(".w_class6-lts4").removeClass("w_class5-de2");
        $(".w_class6-lti4").removeClass("w_class5-di1");
        $(".w_class6-h41").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    var aet=function(){
        $(".w_class6-li5").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti5").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti5").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti5").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti5").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti5").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h51").removeClass("w_bott11");
            } 
            if($(".w_class6-lti5").hasClass("w_class5-di1")){
                $(".w_class6-h51").addClass("w_bott11");
            }
        }) 
    }
    $(".w_class6-bt6").on("click",function(){
        $(".w_class6-Name10").show();
        $(".w_class6-Name9").hide();
        $(".w_class6-li5").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti5").removeClass("w_class5-de1");
            $(".w_class6-lts5").removeClass("w_class5-de2");
            $(".w_class6-lti5").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts5").eq($tet).addClass("w_class5-de2");
        })
        aet()
    });
    $(".w_class6-h52").on("click",function(){
        $(".w_class6-Name10").hide();
        $(".w_class6-Name9").show();
        $(".w_class6-lti5").removeClass("w_class5-de1");
        $(".w_class6-lts5").removeClass("w_class5-de2");
        $(".w_class6-lti5").removeClass("w_class5-di1");
        $(".w_class6-h51").removeClass("w_bott11");
        aet()
    });
});
$(function(){
    $(".w_class6-dot2").on("click",function(){
        if( $(".w_class6-T21").hasClass("w_signT11")==false){
            $(".w_class6-T21").addClass("w_signT11");
            $(".w_class6-lt7").css("height","40px");
            $(".w_class6-T22").html("收起");
        }else {
            $(".w_class6-T22").html("更多");
            $(".w_class6-T21").removeClass("w_signT11");
            $(".w_class6-lt7").css("height","14px");
        }
    });
    var aet=function(){
        $(".w_class6-li6").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti6").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti6").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti6").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti6").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti6").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h61").removeClass("w_bott11");
            } 
            if($(".w_class6-lti6").hasClass("w_class5-di1")==true){
                $(".w_class6-h61").addClass("w_bott11");
            }
        }) 
    }
    $(".w_class6-bt7").on("click",function(){
        $(".w_class6-Name12").show();
        $(".w_class6-Name11").hide();
        $(".w_class6-li6").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti6").removeClass("w_class5-de1");
            $(".w_class6-lts6").removeClass("w_class5-de2");
            $(".w_class6-lti6").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts6").eq($tet).addClass("w_class5-de2");
        })
       aet()
    });
    $(".w_class6-h62").on("click",function(){
        $(".w_class6-Name12").hide();
        $(".w_class6-Name11").show();
        $(".w_class6-lti6").removeClass("w_class5-de1");
        $(".w_class6-lts6").removeClass("w_class5-de2");
        $(".w_class6-lti6").removeClass("w_class5-di1");
        $(".w_class6-h61").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    var aet=function(){
        $(".w_class6-li7").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti7").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti7").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti7").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti7").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti7").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h71").removeClass("w_bott11");
            } 
            if($(".w_class6-lti7").hasClass("w_class5-di1")==true){
                $(".w_class6-h71").addClass("w_bott11");
            }
        }) 
    }
    $(".w_class6-bt8").on("click",function(){
        $(".w_class6-Name14").show();
        $(".w_class6-Name13").hide();
        $(".w_class6-li7").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti7").removeClass("w_class5-de1");
            $(".w_class6-lts7").removeClass("w_class5-de2");
            $(".w_class6-lti7").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts7").eq($tet).addClass("w_class5-de2");
        })
        aet()
    });
     $(".w_class6-h72").on("click",function(){
        $(".w_class6-Name14").hide();
        $(".w_class6-Name13").show();
        $(".w_class6-lti7").removeClass("w_class5-de1");
        $(".w_class6-lts7").removeClass("w_class5-de2");
        $(".w_class6-lti7").removeClass("w_class5-di1");
        $(".w_class6-h71").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    $(".w_class6-dot3").on("click",function(){
        if( $(".w_class6-T31").hasClass("w_signT11")==false){
            $(".w_class6-T31").addClass("w_signT11");
            $(".w_class6-lt9").css("height","40px");
            $(".w_class6-T32").html("收起");
        }else {
            $(".w_class6-T32").html("更多");
            $(".w_class6-T31").removeClass("w_signT11");
            $(".w_class6-lt9").css("height","14px");
        }
    });
    var aet=function(){
        $(".w_class6-li8").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti8").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti8").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti8").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti8").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti8").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h81").removeClass("w_bott11");
            } 
            if($(".w_class6-lti8").hasClass("w_class5-di1")==true){
                $(".w_class6-h81").addClass("w_bott11");
            }
        }) 
    };
    $(".w_class6-bt9").on("click",function(){
        $(".w_class6-Name16").show();
        $(".w_class6-Name15").hide();
        $(".w_class6-li8").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti8").removeClass("w_class5-de1");
            $(".w_class6-lts8").removeClass("w_class5-de2");
            $(".w_class6-lti8").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts8").eq($tet).addClass("w_class5-de2");
        })
      aet()
    });
     $(".w_class6-h82").on("click",function(){
        $(".w_class6-Name16").hide();
        $(".w_class6-Name15").show();
        $(".w_class6-lti8").removeClass("w_class5-de1");
        $(".w_class6-lts8").removeClass("w_class5-de2");
        $(".w_class6-lti8").removeClass("w_class5-di1");
        $(".w_class6-h81").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    var aet=function(){
        $(".w_class6-li9").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti9").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti9").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti9").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti9").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti9").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h91").removeClass("w_bott11");
            } 
            if($(".w_class6-lti9").hasClass("w_class5-di1")==true){
                $(".w_class6-h91").addClass("w_bott11");
            }
        }) 
    };
    $(".w_class6-bt10").on("click",function(){
        $(".w_class6-Name18").show();
        $(".w_class6-Name17").hide();
        $(".w_class6-li9").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti9").removeClass("w_class5-de1");
            $(".w_class6-lts9").removeClass("w_class5-de2");
            $(".w_class6-lti9").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts9").eq($tet).addClass("w_class5-de2");
        })
        aet()
        
    });
    $(".w_class6-h92").on("click",function(){
        $(".w_class6-Name18").hide();
        $(".w_class6-Name17").show();
        $(".w_class6-lti9").removeClass("w_class5-de1");
        $(".w_class6-lts9").removeClass("w_class5-de2");
        $(".w_class6-lti9").removeClass("w_class5-di1");
        $(".w_class6-h91").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    $(".w_class6-dot4").on("click",function(){
        if( $(".w_class6-T41").hasClass("w_signT11")==false){
            $(".w_class6-T41").addClass("w_signT11");
            $(".w_class6-lt11").css("height","65px");
            $(".w_class6-T42").html("收起");
        }else {
            $(".w_class6-T42").html("更多");
            $(".w_class6-T41").removeClass("w_signT11");
            $(".w_class6-lt11").css("height","14px");
        }
    });
    var aet=function(){
        $(".w_class6-li10").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti10").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti10").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti10").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti10").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti10").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h101").removeClass("w_bott11");
            } 
            if($(".w_class6-lti10").hasClass("w_class5-di1")==true){
                $(".w_class6-h101").addClass("w_bott11");
            }
        }) 
    };
    $(".w_class6-bt11").on("click",function(){
        $(".w_class6-Name20").show();
        $(".w_class6-Name19").hide();
        $(".w_class6-li10").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti10").removeClass("w_class5-de1");
            $(".w_class6-lts10").removeClass("w_class5-de2");
            $(".w_class6-lti10").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts10").eq($tet).addClass("w_class5-de2");
        });
        aet()
    });
    $(".w_class6-h102").on("click",function(){
        $(".w_class6-Name20").hide();
        $(".w_class6-Name19").show();
        $(".w_class6-lti10").removeClass("w_class5-de1");
        $(".w_class6-lts10").removeClass("w_class5-de2");
        $(".w_class6-lti10").removeClass("w_class5-di1");
        $(".w_class6-h101").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    var aet=function(){
        $(".w_class6-li11").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti11").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti11").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti11").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti11").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti11").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h111").removeClass("w_bott11");
            } 
            if($(".w_class6-lti11").hasClass("w_class5-di1")==true){
                $(".w_class6-h111").addClass("w_bott11");
            }
        }) 
    };
    $(".w_class6-bt12").on("click",function(){
        $(".w_class6-Name22").show();
        $(".w_class6-Name21").hide();
        $(".w_class6-li11").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti11").removeClass("w_class5-de1");
            $(".w_class6-lts11").removeClass("w_class5-de2");
            $(".w_class6-lti11").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts11").eq($tet).addClass("w_class5-de2");
        })
       aet()
    });
    $(".w_class6-h112").on("click",function(){
        $(".w_class6-Name22").hide();
        $(".w_class6-Name21").show();
        $(".w_class6-lti11").removeClass("w_class5-de1");
        $(".w_class6-lts11").removeClass("w_class5-de2");
        $(".w_class6-lti11").removeClass("w_class5-di1");
        $(".w_class6-h111").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    var aet=function(){
        $(".w_class6-li12").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti12").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti12").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti12").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti12").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti12").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h121").removeClass("w_bott11");
            } 
            if($(".w_class6-lti12").hasClass("w_class5-di1")){
                $(".w_class6-h121").addClass("w_bott11");
            }
        }) 
    }
    $(".w_class6-bt13").on("click",function(){
        $(".w_class6-Name24").show();
        $(".w_class6-Name23").hide();
        $(".w_class6-li12").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti12").removeClass("w_class5-de1");
            $(".w_class6-lts12").removeClass("w_class5-de2");
            $(".w_class6-lti12").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts12").eq($tet).addClass("w_class5-de2");
        })
        aet()
        
    });
    $(".w_class6-h122").on("click",function(){
        $(".w_class6-Name24").hide();
        $(".w_class6-Name23").show();
        $(".w_class6-lti12").removeClass("w_class5-de1");
        $(".w_class6-lts12").removeClass("w_class5-de2");
        $(".w_class6-lti12").removeClass("w_class5-di1");
        $(".w_class6-h121").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    var aet=function(){
        $(".w_class6-li13").on("click",function(){
            var $te=$(this).index();
            if( $(".w_class6-lti13").eq($te).hasClass("w_class5-di1")==false){
                $(".w_class6-lti13").eq($te).addClass("w_class5-di1");
                $(".w_class6-lti13").eq($te).addClass("w_class5-de1");
            }
            else{
                $(".w_class6-lti13").eq($te).removeClass("w_class5-di1");
                $(".w_class6-lti13").eq($te).removeClass("w_class5-de1");
                $(".w_class6-h131").removeClass("w_bott11");
            } 
            if($(".w_class6-lti13").hasClass("w_class5-di1")){
                $(".w_class6-h131").addClass("w_bott11");
            }
        }) 
    };
    $(".w_class6-bt14").on("click",function(){
        $(".w_class6-Name26").show();
        $(".w_class6-Name25").hide();
        $(".w_class6-li13").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti13").removeClass("w_class5-de1");
            $(".w_class6-lts13").removeClass("w_class5-de2");
            $(".w_class6-lti13").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts13").eq($tet).addClass("w_class5-de2");
        })
        aet()
       
    }); 
    $(".w_class6-h132").on("click",function(){
        $(".w_class6-Name26").hide();
        $(".w_class6-Name25").show();
        $(".w_class6-lti13").removeClass("w_class5-de1");
        $(".w_class6-lts13").removeClass("w_class5-de2");
        $(".w_class6-lti13").removeClass("w_class5-di1");
        $(".w_class6-h131").removeClass("w_bott11");
        aet()
    })
});
$(function(){
    $(".w_classify7").on("click",function(){
        if($(".w_classify7-i").hasClass("w_classify7-i1")==false){
            $(".w_classify7-i").addClass("w_classify7-i1")
            $(".w_classify7-span").html("收起");
            $(".w_classify6").show()
        }else{
            $(".w_classify7-i").removeClass("w_classify7-i1")
            $(".w_classify6").hide();
            $(".w_classify7-span").html("更多选项（表盘、表带、功能、防水等");
        }
    });
    $(".w_top-inupt").on("click",function(){
        var $bt=$(this).index()
        if($(".w_top-lti").eq($bt).hasClass("w_top-lti1")==false){
             $(".w_top-lti").eq($bt).addClass("w_top-lti1");
        }else{
            $(".w_top-lti").eq($bt).removeClass("w_top-lti1");
        }
    })
    $(".w_lstt1").on("click",function(){
     var $mt=$(".w_lstt2").html();
     $(".w_lstt2").html("")
     if($mt>1){
         $mt--;
         $(".w_lstt2").html($mt)
     }else{
        $mt=1;
        $(".w_lstt2").html($mt)
     }
    })
    $(".w_lstt3").on("click",function(){
        var $mt=$(".w_lstt2").html();
       $(".w_lstt2").html("");
        if($mt>=1){
            $mt++;
            $(".w_lstt2").html($mt)
        }
    })
    window.onscroll=function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop 
        var fix=document.getElementsByClassName("w_label-top")[0];
        if(top>=600&&top<=6400){
            fix.classList.add("w_label-fix");
        }else{
            fix.classList.remove("w_label-fix");
        }
    }
});
// 头部右边小tab切换男女表和表带js结束
// 男表内容js
$(function(){
    var $arr=[{"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/8a033d3eb6504297b0c8cca50c10af61.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/d5f66e5fef0247f099b76840941958e1.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/8a033d3eb6504297b0c8cca50c10af61.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/110556385610467c8180e0a9e52a8147.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"德国高级独立制表品牌：格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-25-21-LB 29er 商务机","bt10":"商务休闲随心搭配 ","bt101":"/ 销量2574","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/aaa2fece91584b6dbbfa50b678e284a0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/b2b786ec45b746a583a68e158c5583d9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/9dcd454470d94c6eb8817a3e19f2b909.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/be30c4da13c8488a98a38bf901358578.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/d5f66e5fef0247f099b76840941958e1.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/8a033d3eb6504297b0c8cca50c10af61.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/aaa2fece91584b6dbbfa50b678e284a0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/b2b786ec45b746a583a68e158c5583d9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/9dcd454470d94c6eb8817a3e19f2b909.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/be30c4da13c8488a98a38bf901358578.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/110556385610467c8180e0a9e52a8147.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"德国高级独立制表品牌：格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-25-21-LB 29er 商务机","bt10":"商务休闲随心搭配 ","bt101":"/ 销量2574","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/aaa2fece91584b6dbbfa50b678e284a0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/b2b786ec45b746a583a68e158c5583d9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/9dcd454470d94c6eb8817a3e19f2b909.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/be30c4da13c8488a98a38bf901358578.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/d5f66e5fef0247f099b76840941958e1.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/110556385610467c8180e0a9e52a8147.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"德国高级独立制表品牌：格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-25-21-LB 29er 商务机","bt10":"商务休闲随心搭配 ","bt101":"/ 销量2574","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/aaa2fece91584b6dbbfa50b678e284a0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/be30c4da13c8488a98a38bf901358578.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/d5f66e5fef0247f099b76840941958e1.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/8a033d3eb6504297b0c8cca50c10af61.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/aaa2fece91584b6dbbfa50b678e284a0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/b2b786ec45b746a583a68e158c5583d9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/9dcd454470d94c6eb8817a3e19f2b909.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/be30c4da13c8488a98a38bf901358578.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
            ];
    for(var i=0;i<$arr.length;i++){
        $(".w_cont1").append(`
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
                <div class="w_cont-bt13"> 
                    <a class="w_cont-bt14" href="javascript:void(0);" >加入收藏</a> 
                    <a class="w_cont-bt15" href="javascript:void(0);" >已收藏</a>   
                    <a class="w_cont-bt16" href="javascript:void(0);" >加入购物车</a> 
                </div>
            </div>
        </li> 
        `)
    }
    $(".w_cont-bt").on("mouseover",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).show()
    })
    $(".w_cont-bt").on("mouseout",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).hide()
    })
    $(".w_cont-bt16").on("click",function(){
        $(".w_cont-shop").addClass("w_cont-shop1")   
        $thime=setTimeout(function(){
            $(".w_cont-shop").removeClass("w_cont-shop1")   
        },3000)
    })
});
// 女表内容js
$(function(){
    var $arr=[{"img1":"https://image8.wbiao.co/shop/eafa1f232a92494c80b8a784e3689102.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥357.5 ","bt7":"¥4,290","bt8":"【明星同款】法国优雅时尚腕表品牌：Michel Herbelin赫柏林 Antarès恒星系列  吉普赛女郎  COF.1","bt10":"","bt101":"销量1823","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/f29bae2deb9143cab946f7327d677e59.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"","bt6":"￥316.7 ","bt7":"¥3,800","bt8":"法国优雅时尚腕表品牌：Michel Herbelin赫","bt10":"","bt101":"销量2141","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/387bdecc2ed44b968273330924c9ac66.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥383.3","bt7":" ¥4,600","bt8":"【预计10月中下旬发货】法国优雅时尚腕表品牌：赫柏林Michel Herbelin  Perles珍珠系列  爱之印","bt10":"","bt101":"销量2365","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/dabf6e7c7ec443e0bf52a18618750e18.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/80b6a4d2175c4028999e3e2eab242d3f.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/a161059a8d61487b8de01d7ea96cc866.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/8a033d3eb6504297b0c8cca50c10af61.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/e7d33eecb3b34707a8ea0eef0a974cf4.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/7fb073bb85aa47a39d77d5b1825ca2b1.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"德国高级独立制表品牌：格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-25-21-LB 29er 商务机","bt10":"商务休闲随心搭配 ","bt101":"/ 销量2574","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/8b090ac160334f1582aff9d08f9b2120.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/a221efbc71e84fe6b7586487c30519b0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/81842aa125364752a6f9498408acd4f9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/69f0d8432b4341f8b2082074c6b57ff9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/393a36219f4d468ca1ca27565209170d.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/0ff12fe35ba34cc696cd8f7af8c0a8eb.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/201502_28_424_10_33_20_53_001_04070.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/86dc33501ad841018f994e63aa309688.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/33b69253962a4fc1ae4056378faa4983.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/815a6ff6caa4495c92fe9131e51bf14c.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/89da41158fdb4b2687695fb9f2354c3c.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/39615789c11840eb987d70f96029a695.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/58b0bbcfbf2544198abf8a41a4e4d267.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/ed32ce915f994eb6ad6c43e13c47b417.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/e71e35bc0f01404b9fc15dbe29dbdc17.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/110556385610467c8180e0a9e52a8147.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"德国高级独立制表品牌：格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-25-21-LB 29er 商务机","bt10":"商务休闲随心搭配 ","bt101":"/ 销量2574","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/aaa2fece91584b6dbbfa50b678e284a0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/b2b786ec45b746a583a68e158c5583d9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/9dcd454470d94c6eb8817a3e19f2b909.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/be30c4da13c8488a98a38bf901358578.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/d5f66e5fef0247f099b76840941958e1.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/110556385610467c8180e0a9e52a8147.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"德国高级独立制表品牌：格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-25-21-LB 29er 商务机","bt10":"商务休闲随心搭配 ","bt101":"/ 销量2574","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/6d8690a545534660beef12a536b6b43d.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/aaa2fece91584b6dbbfa50b678e284a0.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/be30c4da13c8488a98a38bf901358578.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/85571f545f4f4b1b931d63efa261ad70.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/7172aed8de084aa1857665f12b665db4.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/201708_15_F20335_1_90719.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/b687a05af20b4ff7b6dfe0060340145c.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥325.8","bt7":" ¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3683","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/b970c3e4da87419ab5f66e4560872964.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥866.7 ","bt7":"¥10,400","bt8":"瑞士柏高Paul Picot -梦想家 商务休闲 P4104.SG.1021.1106 机械男表","bt10":"畅销款式 ","bt101":"/ 销量1800","bt11":"瑞士柏高官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/cb839292568c4382a383d6b52f4f641e.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,630","bt6":"￥362.5 ","bt7":"¥4,350","bt8":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表","bt10":"赠送钢带 ","bt101":"/ 销量1398","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/7696a6d9e37b4ae89509ffed120df6fa.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":" ￥441.7","bt7":" ¥5,300","bt8":"法国国民腕表品牌：赫柏林Michel Herbelin Trophy 领航员系列 1660/22TER 极地迷棕 男士机械表","bt10":"销量159","bt101":"","bt11":"法国赫柏林官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/5854090cb9374db1bcc32e1a69d01cf9.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥16,760","bt6":" ￥1579.2","bt7":" ¥18,950","bt8":"【德国海军定制款】德国高级独立制表品牌：格拉苏蒂莫勒Muehle·Glashuette Nautical Wristwatches ","bt10":"运动爱好者必备","bt101":" / 销量496","bt11":"德国莫勒官方旗舰店"},
            ];
    for(var i=0;i<$arr.length;i++){
        $(".w_cont2").append(`
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
                <a class="w_cont-bt8" href="shop.html">${$arr[i].bt8}</a>
                <div class="w_cont-bt9"> 
                    <span class="w_cont-bt10">${$arr[i].bt10}</span> 
                    <span class="w_cont-bt101">${$arr[i].bt101}</span>
                </div> 
                <a  class="w_cont-bt11" href="shop.html">${$arr[i].bt11}</a>
                <p class="w_cont-bt12">  
                    <span>免息分期</span>       
                </p>
                <div class="w_cont-bt13"> 
                    <a class="w_cont-bt14" href="javascript:void(0);" >加入收藏</a> 
                    <a class="w_cont-bt15" href="javascript:void(0);" >已收藏</a>   
                    <a class="w_cont-bt16" href="javascript:void(0);" >加入购物车</a> 
                </div>
            </div>
        </li> 
        `)
    }
    $(".w_cont-bt").on("mouseover",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).show()
    })
    $(".w_cont-bt").on("mouseout",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).hide()
    })
    $(".w_cont-bt16").on("click",function(){
        $(".w_cont-shop").addClass("w_cont-shop1")   
        $thime=setTimeout(function(){
            $(".w_cont-shop").removeClass("w_cont-shop1")   
        },3000)
    })
});
// 分页js
$(function(){
    $a=4;
    $(".w_number-Bt2").on("click",function(){
        $a++;
        if($a<8){
            $(".w_number-Bt3").addClass("w_number-show")
            $(".w_number-Bt").children().eq(-3).after(`
            <a class="w_number-Bt1"href="javascript:void(0)">${$a}</a>
            `);
            $(".w_number-Bt1").eq($a-4).addClass("w_number-Bta").siblings().removeClass("w_number-Bta");
        }else{ 
            $(".w_number-Bt").empty();
            $(".w_number-Bt").append(`
            <a class="w_number-Bt1 w_number-Bta"href="javascript:void(0)">1</a> 
            <span>...</span>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-6}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-5}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-4}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-3}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-2}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-1}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a}</a>
            <span>...</span>
            <a class="w_number-Bt1"href="javascript:void(0)">105</a>
            `) 
            $(".w_number-Bt3").addClass("w_number-show");
            $(".w_number-Bt1").eq(4).addClass("w_number-Bta").siblings().removeClass("w_number-Bta");
        }  
        $(".w_number-Bt1").on("click",function(){
            $(this).addClass("w_number-Bta").siblings().removeClass("w_number-Bta");
        })
        if($(".w_number-Bt1").eq(0).hasClass("w_number-Bta")==true){
            $(".w_number-Bt3").removeClass("w_number-show")
        }else{
            $(".w_number-Bt3").addClass("w_number-show")
        }
    })
    $(".w_number-Bt3").on("click",function(){
        $a--;
        if($a<=4){
        $a=4
        }
        if(8>$a&&$a>3){
            $(".w_number-Bt").empty();
            $(".w_number-Bt").append(`
            <a class="w_number-Bt1 w_number-Bta"href="javascript:void(0)">1</a>
            <a class="w_number-Bt1" href="javascript:void(0)">2</a>
            <a class="w_number-Bt1"href="javascript:void(0)">3</a>
            <a class="w_number-Bt1"href="javascript:void(0)">4</a>
            <a class="w_number-Bt1"href="javascript:void(0)">5</a>
            <a class="w_number-Bt1"href="javascript:void(0)">6</a>
            <a class="w_number-Bt1"href="javascript:void(0)">7</a>
            <span>...</span>
            <a class="w_number-Bt1"href="javascript:void(0)">105</a>
            `) 
            $(".w_number-Bt1").eq($a-4).addClass("w_number-Bta").siblings().removeClass("w_number-Bta");
        }
        if($a>=9){ 
            $(".w_number-Bt").empty();
            $(".w_number-Bt").append(`
            <a class="w_number-Bt1 w_number-Bta"href="javascript:void(0)">1</a> 
            <span>...</span>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-6}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-5}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-4}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-3}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-2}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a-1}</a>
            <a class="w_number-Bt1"href="javascript:void(0)">${$a}</a>
            <span>...</span>
            <a class="w_number-Bt1"href="javascript:void(0)">105</a>
            `) 
            $(".w_number-Bt3").addClass("w_number-show");
            $(".w_number-Bt1").eq(4).addClass("w_number-Bta").siblings().removeClass("w_number-Bta");
        } 
        $(".w_number-Bt1").on("click",function(){
            $(this).addClass("w_number-Bta").siblings().removeClass("w_number-Bta");
        })
        if($(".w_number-Bt1").eq(0).hasClass("w_number-Bta")==true){
            $(".w_number-Bt3").removeClass("w_number-show")
        }else{
            $(".w_number-Bt3").addClass("w_number-show")
        }
    });
    $(".w_number-Bt1").on("click",function(){
        $(this).addClass("w_number-Bta").siblings().removeClass("w_number-Bta");
        var $a=$(this).index();
        if($(".w_number-Bt1").eq(0).hasClass("w_number-Bta")==true){
            $(".w_number-Bt3").removeClass("w_number-show")
        }else{
            $(".w_number-Bt3").addClass("w_number-show")
        }
    })
    if($(".w_number-Bt1").eq(0).hasClass("w_number-Bta")==true){
        $(".w_number-Bt3").removeClass("w_number-show")
    }else{
        $(".w_number-Bt3").addClass("w_number-show")
    }
});
// 表带内容js
$(function(){
    var $arr=[{"img1":"https://image8.wbiao.co/shop/201703_16_TEZ_LQP__35128.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥49.3","bt7":"¥591","bt8":"积优JEAYOU-柔软鳄鱼皮-新大竹节纹系列表带 20*18TEZ#LQP01 棕色白线真皮表带","bt10":"","bt101":"销量704","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_31_CHB18-01-CBK107_38226.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥23.3 ","bt7":"￥279","bt8":"CHIMAERA-意大利系列 CHB18-01-CBK107 真皮手工表带","bt10":"","bt101":"销量66","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC22-05-CBK107_31170.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥31.5","bt7":" ￥378","bt8":"CHIMAERA-法国小牛皮系列 CHC22-05-CBK107 真皮手工表带","bt10":"","bt101":"销量3","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC18-05-CBK107_27998.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥31.5","bt7":" ￥378","bt8":"CHIMAERA-法国小牛皮系列 CHC18-05-CBK107 真皮手工表带","bt10":"","bt101":"销量1","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201706_08_CHB20-01-CBK110_18088.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥19.1 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC22-01-CBK107_94669.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥28 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201706_08_CHB19-04-CBK110_18319.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥19.1 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201510_14_CF19-03-BK07_50239.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE22-01-BK07_61080.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥26 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE20-02-BK07_42554.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥24.1 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE21-01-BK08_46045.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE18-03-BK07_24730.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥32","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC20-05-CBK110_30722.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥22 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC20-03-CBK107_54600.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥23.1 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC19-01-CBK107_61528.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25.2 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC19-01-CBK107_61528.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥22.2 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE18-01-BK07_01741.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥23 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE20-02-BK07_95528.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_20_18YZP04_21017.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥62 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_27_20_18AZZ04_41742.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥58 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201605_05_U00212_28115.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥55.2 ","bt7":"￥300","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201605_05_U00212_28115.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥55.2 ","bt7":"￥300","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/d1a3aa53007f497f8bd689d14fcc1ea8.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥55.2 ","bt7":"￥302","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量7","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_20_18YZZ10_51080.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25 ","bt7":"￥300","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量12","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201605_05_U00202_39526.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥32 ","bt7":"￥301","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量25","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_20_18YZZ04_75609.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥52 ","bt7":"￥220","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_19_18YZP04_44287.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥45 ","bt7":"￥200","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量55","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/a5d1256d66e74b80af1439997af41220.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥62 ","bt7":"￥300","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量56","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_16_YZLK__66191.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥22","bt7":"￥350","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量25","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_16_TEZ_LQP__35128.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥49.3","bt7":"¥591","bt8":"积优JEAYOU-柔软鳄鱼皮-新大竹节纹系列表带 20*18TEZ#LQP01 棕色白线真皮表带","bt10":"","bt101":"销量704","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_31_CHB18-01-CBK107_38226.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥23.3 ","bt7":"￥279","bt8":"CHIMAERA-意大利系列 CHB18-01-CBK107 真皮手工表带","bt10":"","bt101":"销量66","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC22-05-CBK107_31170.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥31.5","bt7":" ￥378","bt8":"CHIMAERA-法国小牛皮系列 CHC22-05-CBK107 真皮手工表带","bt10":"","bt101":"销量3","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC18-05-CBK107_27998.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥31.5","bt7":" ￥378","bt8":"CHIMAERA-法国小牛皮系列 CHC18-05-CBK107 真皮手工表带","bt10":"","bt101":"销量1","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_20_18YZW04_49031.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥32 ","bt7":"￥120","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量15","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_20_18YZP01_13508.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25 ","bt7":"￥150","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量46","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE18-01-BK07_01741.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥23 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201507_15_CE20-02-BK07_95528.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_20_18YZP04_21017.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥62 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_27_20_18AZZ04_41742.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥58 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201605_05_U00212_28115.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥55.2 ","bt7":"￥300","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201706_08_CHB20-01-CBK110_18088.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥19.1 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201707_14_CHC22-01-CBK107_94669.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥28 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201706_08_CHB19-04-CBK110_18319.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥19.1 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201510_14_CF19-03-BK07_50239.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥25 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_20_18YZP04_21017.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥62 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_27_20_18AZZ04_41742.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥58 ","bt7":"￥229","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_16_YZZ__09031.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥55.2 ","bt7":"￥300","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
            {"img1":"https://image8.wbiao.co/shop/201703_28_21_18YZZ01_97292.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥55.2 ","bt7":"￥300","bt8":"CHIMAERA-意大利系列 CHB18-03-CBK107 小牛皮手工表带","bt10":"","bt101":"销量27","bt11":"表带精品馆"},
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
                <a class="w_cont-bt8"href="shop.html">${$arr[i].bt8}</a>
                <div class="w_cont-bt9"> 
                    <span class="w_cont-bt10">${$arr[i].bt10}</span> 
                    <span class="w_cont-bt101">${$arr[i].bt101}</span>
                </div> 
                <a  class="w_cont-bt11" href="shop.html">${$arr[i].bt11}</a>
                <p class="w_cont-bt12">  
                    <span>免息分期</span>       
                </p>
                <div class="w_cont-bt13"> 
                    <a class="w_cont-bt14" href="javascript:void(0);" >加入收藏</a> 
                    <a class="w_cont-bt15" href="javascript:void(0);" >已收藏</a>   
                    <a class="w_cont-bt16" href="javascript:void(0);" >加入购物车</a> 
                </div>
            </div>
        </li> 
        `)
    }
    $(".w_cont-bt").on("mouseover",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).show()
    })
    $(".w_cont-bt").on("mouseout",function(){
        var $gt=$(this).index();
        $(".w_cont-bt13").eq($gt).hide()
    })
    $(".w_cont-bt16").on("click",function(){
        $(".w_cont-shop").addClass("w_cont-shop1")   
        $thime=setTimeout(function(){
            $(".w_cont-shop").removeClass("w_cont-shop1")   
        },3000)
    })
});
// 尾部tab切换男女表和表带js
$(function(){
    var att=["积家手表","朗格手表","江诗丹顿手表","百达翡丽手表","宝玑手表","伯爵手表","爱彼手表","宝珀手表","格拉苏蒂∙原创手表","法穆兰手表","雅典手表","帝舵手表",
    "泰格豪雅手表","高峯手表","欧米茄手表","劳力士手表","万国手表","沛纳海手表","卡地亚手表","萧邦手表","宇舶手表","梅花手表","依波路手表","天梭手表","英纳格手表","浪琴手表",
    "迪沃斯手表","雅柏手表","名士手表","艾美手表","爱彼特手表","汉米尔顿手表","瑞宝手表","摩凡陀手表","蕾蒙威手表","瑞士军表手表","天美时手表","美度手表","赫柏林手表","时度手表",
    "摩纹手表","名爵手表","Guess手表","CK手表","东方双狮手表","卡西欧手表","天铭手表","蒂芙尼手表","荣汉斯手表","阿玛尼手表","波士手表","C罗表手表","雅克利曼手表","古驰手表","宝格丽手表","精工手表",
    "菲拉格慕手表","查梅斯手表","西铁城手表","玛莎拉蒂手表","库尔沃手表","爱宝时手表","梵德宝手表","真力时手表","雅克德罗手表","芝柏手表","百年灵手表","昆仑手表","柏莱士手表","宝齐莱手表","雷达手表",
    "雪铁纳手表","豪利时手表","艾美达手表","格拉苏蒂·莫勒手表","依百克手表","马克·雅可布手表","唐可娜儿手表","柏高手表","哈伯曼手表","康斯登手表","三宅一生手表","萨克莱斯手表","颂拓手表","宜准手表",
    "塔罗斯手表","海鸥手表","犀飞利手表","雍加毕索手表","爱罗手表","天轮手表","天年手表","天籁手表","赫姆勒手表","侯伯手表","迈克高仕手表","帝特利威手表","MINI手表","海亦施手表","豪度手表英国•肯密狄手表",
    "亨利慕时手表","驰客手表尖刀手表","绮年华手表","LACOSTE手表","汤米手表","SevenFriday手表","优立时手表","廊桥表手表","上海手表","北京手表","dufa手表","华唛手表","诺莫斯手表","劳特莱手表","山城手表",
    "罗马手表","SWISS MILITARY HANOWA瑞士军表手表","诺美纳手表豪朗时手表","DW丹尼尔·惠灵顿手表","诺帝卡手表","飞亚达手表","CIGA Design手表","jeep手表","唯路时手表","华为手表"]
    for(var i=0;i<att.length;i++){
        $(".w_link-ul1").append(`
        <li>
         <a href="https://www.wbiao.cn/jaeger-lecoultre-watches/">${att[i]}</a>
        </li>
        `)
    }
   $(".w_link-pt2").on("click",function(){
       if($(".w_link-ul1").hasClass("w_link-ul")==false){
           $(".w_link-ul1").addClass("w_link-ul");
           $(".w_link-pt2").html("-更多")
       }else{
        $(".w_link-ul1").removeClass("w_link-ul");
        $(".w_link-pt2").html("+更多")
       }
       
   })
   var att1=["天梭T006.407.11.033.00价格","爱宝时3390.152.20.16.25价格","迪沃斯16145615价格","迪沃斯16246615价格","赫柏林12443/S01价格","赫柏林1669/07GO价格","天梭T006.407.16.053.00价格",
            "天梭T006.407.11.053.00价格","赫柏林16873/B08价格","迪沃斯16155570价格"]
   for(var i=0;i<att1.length;i++){
    $(".w_link-ul2").append(`
    <li>
     <a href="https://www.wbiao.cn/jaeger-lecoultre-watches/">${att1[i]}</a>
    </li>
    `)
    }
    $(".w_link-pt3").on("click",function(){
    if($(".w_link-ul2").hasClass("w_link-ul")==false){
        $(".w_link-ul2").addClass("w_link-ul");
        $(".w_link-pt3").html("-更多")
    }else{
        $(".w_link-ul2").removeClass("w_link-ul");
        $(".w_link-pt3").html("+更多")
        }
    })
   var att2=["天梭T006.407.11.033.00图片","爱宝时3390.152.20.16.25图片","迪沃斯16145615图片迪沃斯16246615图片","赫柏林12443/S01图片","赫柏林1669/07GO图片","天梭T006.407.16.053.00图片","天梭T006.407.11.053.00图片",
       "赫柏林16873/B08图片","迪沃斯16155570图片"]
    for(var i=0;i<att2.length;i++){
        $(".w_link-ul3").append(`
        <li>
         <a href="https://www.wbiao.cn/jaeger-lecoultre-watches/">${att2[i]}</a>
        </li>
        `)
    }
    $(".w_link-pt4").on("click",function(){
        if($(".w_link-ul3").hasClass("w_link-ul")==false){
            $(".w_link-ul3").addClass("w_link-ul");
            $(".w_link-pt4").html("-更多")
        }else{
            $(".w_link-ul3").removeClass("w_link-ul");
            $(".w_link-pt4").html("+更多")
        }
    })

    var att3=["康卡斯","ap","二手","奢侈品","钢带","手表","帝陀","二手ap","ap康卡斯","康卡斯"]
    for(var i=0;i<att3.length;i++){
        $(".w_link-ul4").append(`
        <li>
         <a href="https://www.wbiao.cn/jaeger-lecoultre-watches/">${att3[i]}</a>
        </li>
        `)
    }
    $(".w_link-pt5").on("click",function(){
        if($(".w_link-ul4").hasClass("w_link-ul")==false){
            $(".w_link-ul4").addClass("w_link-ul");
            $(".w_link-pt5").html("-更多")
        }else{
            $(".w_link-ul4").removeClass("w_link-ul");
            $(".w_link-pt5").html("+更多")
        }
    })
    var att4=["天梭手表","CK手表","卡西欧手表","浪琴手表","C罗表手表","雅克利曼手表","美度手表","赫柏林手表","迪沃斯手表","爱宝时手表"]
    for(var i=0;i<att4.length;i++){
        $(".w_link-ul5").append(`
        <li>
         <a href="https://www.wbiao.cn/jaeger-lecoultre-watches/">${att4[i]}</a>
        </li>
        `)
    }
    $(".w_link-pt6").on("click",function(){
        if($(".w_link-ul5").hasClass("w_link-ul")==false){
            $(".w_link-ul5").addClass("w_link-ul");
            $(".w_link-pt6").html("-更多")
        }else{
            $(".w_link-ul5").removeClass("w_link-ul");
            $(".w_link-pt6").html("+更多")
        }
    })
});
// 懒加载js
$(function() {
    $("img").lazyload({
      placeholder: "https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,w_160,h_160,color_ffffff", 
      effect: "fadeIn"
     }); 
});