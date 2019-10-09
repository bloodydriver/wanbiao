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
                $(".clearfix").hide();
                $(this).css("color","#cc9952").siblings().css("color","#333")
                $(".clearfix").eq($(this).index()).show();
            })
        }else {
            $(".w_singB11").hide();
            $(".w_signT2").html("更多");
            $(".w_signU1").show();
            $(".w_abc a").eq(0).css("color","#333")
            $(".w_signList2").hide();
            $(".w_signT1").removeClass("w_signT11")
            $(".clearfix").show();
            $(".w_signList").css("height","120px")
        };
    })
});
$(function(){
    $(".w_class5-bt2").on("click",function(){
        $(".w_class5-list2").show();
        $(".w_class5-list1").hide();
        $(".w_bott2").on("click",function(){
            $(".w_class5-list2").hide();
            $(".w_class5-list1").show();
            $(".w_class5-lt").removeClass("w_class5-de1");
            $(".w_class5-lt1").removeClass("w_class5-de2");
            $(".w_class5-lt").removeClass("w_class5-di1");
            $(".w_bott1").removeClass("w_bott11");
        });
        $(".w_class5-li").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class5-lt").removeClass("w_class5-de1");
            $(".w_class5-lt1").removeClass("w_class5-de2");
            $(".w_class5-lt").eq($tet).addClass("w_class5-de1");
            $(".w_class5-lt1").eq($tet).addClass("w_class5-de2");
        });
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
            if($(".w_class5-lt").hasClass("w_class5-di1")){
                $(".w_bott1").addClass("w_bott11");
            }
        }) ;
    });
});
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
            if($(".w_class6-lti1").hasClass("w_class5-di1")){
                $(".w_class6-h11").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h12").on("click",function(){
            $(".w_class6-Name2").hide();
            $(".w_class6-Name1").show();
            $(".w_class6-lti1").removeClass("w_class5-de1");
            $(".w_class6-lts1").removeClass("w_class5-de2");
            $(".w_class6-lti1").removeClass("w_class5-di1");
            $(".w_class6-h11").removeClass("w_bott11");
        })
    });
});
$(function(){
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
            if($(".w_class6-lti2").hasClass("w_class5-di1")){
                $(".w_class6-h21").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h22").on("click",function(){
            $(".w_class6-Name4").hide();
            $(".w_class6-Name3").show();
            $(".w_class6-lti2").removeClass("w_class5-de1");
            $(".w_class6-lts2").removeClass("w_class5-de2");
            $(".w_class6-lti2").removeClass("w_class5-di1");
            $(".w_class6-h21").removeClass("w_bott11");
        })
    })
    $(".w_class6-st2").on("click",function(){
        var $regex=/^[0-9]{2,}$/;
        if(!$regex.test($(".w_class6-st1").val())){
            console.log(1111);
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
            if($(".w_class6-lti3").hasClass("w_class5-di1")){
                $(".w_class6-h31").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h32").on("click",function(){
            $(".w_class6-Name6").hide();
            $(".w_class6-Name5").show();
            $(".w_class6-lti3").removeClass("w_class5-de1");
            $(".w_class6-lts3").removeClass("w_class5-de2");
            $(".w_class6-lti3").removeClass("w_class5-di1");
            $(".w_class6-h31").removeClass("w_bott11");
        })
    });
});
$(function(){
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
            if($(".w_class6-lti4").hasClass("w_class5-di1")){
                $(".w_class6-h41").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h42").on("click",function(){
            $(".w_class6-Name8").hide();
            $(".w_class6-Name7").show();
            $(".w_class6-lti4").removeClass("w_class5-de1");
            $(".w_class6-lts4").removeClass("w_class5-de2");
            $(".w_class6-lti4").removeClass("w_class5-di1");
            $(".w_class6-h41").removeClass("w_bott11");
        })
    });
});
$(function(){
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
        $(".w_class6-h52").on("click",function(){
            $(".w_class6-Name10").hide();
            $(".w_class6-Name9").show();
            $(".w_class6-lti5").removeClass("w_class5-de1");
            $(".w_class6-lts5").removeClass("w_class5-de2");
            $(".w_class6-lti5").removeClass("w_class5-di1");
            $(".w_class6-h51").removeClass("w_bott11");
        })
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
            if($(".w_class6-lti6").hasClass("w_class5-di1")){
                $(".w_class6-h61").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h62").on("click",function(){
            $(".w_class6-Name12").hide();
            $(".w_class6-Name11").show();
            $(".w_class6-lti6").removeClass("w_class5-de1");
            $(".w_class6-lts6").removeClass("w_class5-de2");
            $(".w_class6-lti6").removeClass("w_class5-di1");
            $(".w_class6-h61").removeClass("w_bott11");
        })
    });
});
$(function(){
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
            if($(".w_class6-lti7").hasClass("w_class5-di1")){
                $(".w_class6-h71").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h72").on("click",function(){
            $(".w_class6-Name14").hide();
            $(".w_class6-Name13").show();
            $(".w_class6-lti7").removeClass("w_class5-de1");
            $(".w_class6-lts7").removeClass("w_class5-de2");
            $(".w_class6-lti7").removeClass("w_class5-di1");
            $(".w_class6-h71").removeClass("w_bott11");
        })
    });
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
            if($(".w_class6-lti8").hasClass("w_class5-di1")){
                $(".w_class6-h81").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h82").on("click",function(){
            $(".w_class6-Name16").hide();
            $(".w_class6-Name15").show();
            $(".w_class6-lti8").removeClass("w_class5-de1");
            $(".w_class6-lts8").removeClass("w_class5-de2");
            $(".w_class6-lti8").removeClass("w_class5-di1");
            $(".w_class6-h81").removeClass("w_bott11");
        })
    });
});
$(function(){
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
            if($(".w_class6-lti9").hasClass("w_class5-di1")){
                $(".w_class6-h91").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h92").on("click",function(){
            $(".w_class6-Name18").hide();
            $(".w_class6-Name17").show();
            $(".w_class6-lti9").removeClass("w_class5-de1");
            $(".w_class6-lts9").removeClass("w_class5-de2");
            $(".w_class6-lti9").removeClass("w_class5-di1");
            $(".w_class6-h91").removeClass("w_bott11");
        })
    });
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
    $(".w_class6-bt11").on("click",function(){
        $(".w_class6-Name20").show();
        $(".w_class6-Name19").hide();
        $(".w_class6-li10").on("mouseover",function(){
            var $tet=$(this).index();
            $(".w_class6-lti10").removeClass("w_class5-de1");
            $(".w_class6-lts10").removeClass("w_class5-de2");
            $(".w_class6-lti10").eq($tet).addClass("w_class5-de1");
            $(".w_class6-lts10").eq($tet).addClass("w_class5-de2");
        })
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
            if($(".w_class6-lti10").hasClass("w_class5-di1")){
                $(".w_class6-h101").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h102").on("click",function(){
            $(".w_class6-Name20").hide();
            $(".w_class6-Name19").show();
            $(".w_class6-lti10").removeClass("w_class5-de1");
            $(".w_class6-lts10").removeClass("w_class5-de2");
            $(".w_class6-lti10").removeClass("w_class5-di1");
            $(".w_class6-h101").removeClass("w_bott11");
        })
    });
});
$(function(){
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
            if($(".w_class6-lti11").hasClass("w_class5-di1")){
                $(".w_class6-h111").addClass("w_bott11");
            }
        }) 
        $(".w_class6-h112").on("click",function(){
            $(".w_class6-Name22").hide();
            $(".w_class6-Name21").show();
            $(".w_class6-lti11").removeClass("w_class5-de1");
            $(".w_class6-lts11").removeClass("w_class5-de2");
            $(".w_class6-lti11").removeClass("w_class5-di1");
            $(".w_class6-h111").removeClass("w_bott11");
        })
    });
});
$(function(){
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
        $(".w_class6-h122").on("click",function(){
            $(".w_class6-Name24").hide();
            $(".w_class6-Name23").show();
            $(".w_class6-lti12").removeClass("w_class5-de1");
            $(".w_class6-lts12").removeClass("w_class5-de2");
            $(".w_class6-lti12").removeClass("w_class5-di1");
            $(".w_class6-h121").removeClass("w_bott11");
        })
    });
});
$(function(){
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
        $(".w_class6-h132").on("click",function(){
            $(".w_class6-Name26").hide();
            $(".w_class6-Name25").show();
            $(".w_class6-lti13").removeClass("w_class5-de1");
            $(".w_class6-lts13").removeClass("w_class5-de2");
            $(".w_class6-lti13").removeClass("w_class5-di1");
            $(".w_class6-h131").removeClass("w_bott11");
        })
    });
});
$(function(){
    $(".w_classify7").on("click",function(){
        if($(".w_classify7-i").hasClass("w_classify7-i1")==false){
            $(".w_classify7-i").addClass("w_classify7-i1")
            $(".w_classify6").show()
        }else{
            $(".w_classify7-i").removeClass("w_classify7-i1")
            $(".w_classify6").hide()
        }
    })
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
     console.log($mt);
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
        console.log($mt);
        if($mt>=1){
            $mt++;
            $(".w_lstt2").html($mt)
        }
        
    })
})
$(function(){
    var $arr=[{"img1":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 3,560","bt6":"￥325.8","bt7":"￥3,910","bt8":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表","bt10":"80小时动储","bt101":"/销量6749","bt11":"天梭TISSOT"},
              {"img1":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"¥ 4,900","bt6":"￥480.8","bt7":"¥5,770","bt8":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表","bt10":"水蓝版 ","bt101":"/ 销量5488","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/d5f66e5fef0247f099b76840941958e1.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"","bt2":"","bt6":"￥511.7","bt7":"¥6,140","bt8":"【10月中下旬发货】瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-雪白版 3390.15","bt10":"雪白版 ","bt101":"/ 销量4843","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/8a033d3eb6504297b0c8cca50c10af61.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥2,680","bt6":"￥245.8 ","bt7":"¥2,950","bt8":"【魏大勋同款】西铁城Citizen-光动能男表系列 BX1001-89L 万年历男表","bt10":"万年历/世界时","bt101":"/ 销量122","bt11":"瑞士爱宝时官方旗舰店"},
              {"img1":"https://image8.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,m_pad,h_350","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"￥3,560","bt6":"￥325.8 ","bt7":"¥3,910","bt8":"【天梭原装正品，全球联保两年】 天梭TISSOT-力洛克系列 T006.407.11.053.00 机械男表","bt10":"80小时动储 ","bt101":"/ 销量3679","bt11":"天梭TISSOT"},
              {"img1":"","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"","bt6":"","bt7":"","bt8":"","bt10":"","bt101":"","bt11":""},
              {"img1":"","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"","bt6":"","bt7":"","bt8":"","bt10":"","bt101":"","bt11":""},
              {"img1":"","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"","bt6":"","bt7":"","bt8":"","bt10":"","bt101":"","bt11":""},
              {"img1":"","img2":"https://image8.wbiao.co/mall/e6c159b6eae54b278cdffe347713a1cd.png","bt2":"","bt6":"","bt7":"","bt8":"","bt10":"","bt101":"","bt11":""},

            ];
    for(var i=0;i<48;i++){
        $(".w_cont1").append(`
        <li class='w_cont-bt'>
            <a class='w_cont-bta' href='https://www.wbiao.cn/goods/62520.html' >
                <img class='w_cont_img1' src='${$arr[0].img1}' alt="">  
                <div class="w_cont-bt1"> 
                    <img class="w_cont_img2" src='${$arr[0].img2}' alt=""> 
                    <span class="w_cont-bt2">${$arr[0].bt2}</span>
                </div>  
            </a>  
            <div class="w_cont-bt3">
                <p class="w_cont-bt4"> 
                    <span class="w_cont-bt5">月付</span> 
                    <span class="w_cont-bt6">${$arr[0].bt6}</span> 
                    <span class="w_cont-bt7">${$arr[0].bt7}</span> 
                </p> 
                <a class="w_cont-bt8" href="https://www.wbiao.cn/goods/62520.html">${$arr[0].bt8}</a>
                <div class="w_cont-bt9"> 
                    <span class="w_cont-bt10">${$arr[0].bt10}</span> 
                    <span class="w_cont-bt101">${$arr[0].bt101}</span>
                </div> 
                <a  class="w_cont-bt11" href="https://www.wbiao.cn/shop/13">${$arr[0].bt11}</a>
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
    

})
$(function(){
    var $a=4;
    $(".w_number-Bt3").addClass("w_number-Bta");
    $(".w_number-Bt2").on("click",function(){
        $a++;
        console.log($a);
        if($a<8){
            console.log( $(".w_number-Bt").children().eq(-4));
            $("#w_number-Bt1").css("display","inline-block")
            $(".w_number-Bt").children().eq(-4).after(`
            <a href="javascript:void(0)">${$a}</a>
            `)
        }else{
            $("#w_number-Bt1").css("display","inline-block")
            $(".w_number-Bt").children().eq(-4).after(`
            <a href="javascript:void(0)">${$a}</a>
            <a href="javascript:void(0)">${$a+1}</a>
            <a href="javascript:void(0)">${$a+2}</a>
            `)
        }
    })
})