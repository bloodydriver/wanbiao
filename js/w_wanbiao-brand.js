$(function() {
    $(".w_slideshow-a1").eq(0).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
    if($(".w_slideshow").hasClass("w_slideshow-top")==false){
        var thimer=setInterval(function() {
            $(".w_slideshow").css("top",-500+"px")
            $(".w_slideshow-a1").eq(1).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
        },5000)
    }
    $(".w_slideshow").removeClass("w_slideshow-top");
    $(".w_slideshow-a1").eq(0).addClass("w_slideshow-a2").siblings().removeClass("w_slideshow-a2");
    
})
$(function(){
     var a=0;
    $(".w_brand-lt4").on("click",function(){
        a++
        if(a<15){
            $(".w_brand-lt").animate({
                "left":a*-149+"px"
            },1000)
        }else{
            a=0;
            $(".w_brand-lt").css("left",a*-149+"px")
        }
    })
    $(".w_brand-lt1").on("click",function(){
        a--
        if(a>0){
            $(".w_brand-lt").animate({
                "left":a*-149+"px"
            },1000)
        }else{
            a=0;
            $(".w_brand-lt").animate({
                "left":a*-149+"px"
            },1000)
        }
    })
    $(".w_brand-lt3").on("mouseover",function(){
        var te=$(this).index()
        $(".w_brand_hover").eq(te).show().siblings().hide()
        $(".w_brand-lt3 img").eq(te).hide()
    })
    $(".w_brand-lt3").on("mouseout",function(){
        var te=$(this).index()
        $(".w_brand_hover").eq(te).hide().siblings().show()
        $(".w_brand-lt3 img").eq(te).show()
    })
})
$(function(){
    var att=[{"img":"https://image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥480.8","price2":"¥5770","bt":"瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表"},
             {"img":"https://image8.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥325.8","price2":"¥3910","bt":"【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表"},
             {"img":"https://image8.wbiao.co/shop/b2b786ec45b746a583a68e158c5583d9.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥362.5","price2":"¥4350","bt":"法国国民腕表品牌：Michel Herbelin赫柏林 City都市系列  雅士  1669/07GO  男士自动机械表"},
             {"img":"https://image8.wbiao.co/shop/824dd16ad6444e9f8b124c04a563f30a.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥408","price2":"¥4896","bt":"爆款！纯正瑞士品牌 迪沃斯DAVOSA-Heritage传统系列 Classic 经典机械 绅士蓝影 16145615 自动机械商务休闲男表"},
             {"img":"https://image8.wbiao.co/shop/2ecb141b2df44f9ea15af13298e87044.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥396.7","price2":"¥4760","bt":"美度MIDO-贝伦赛丽系列 M8600.4.26.8 机械男表"},
             {"img":"https://image8.wbiao.co/shop/4f3abdf707cd4390beabd94c0e46a156.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥1116.7","price2":"¥13400","bt":"浪琴longines-名匠系列 L2.628.4.78.3 机械男表"},
             {"img":"https://image8.wbiao.co/shop/6f16ce22b2c047dca584b907239f63ca.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥1141.7","price2":"¥13700","bt":"浪琴Longines-名匠系列 L2.628.4.78.6 机械男表"},
             {"img":"https://image8.wbiao.co/shop/f29bae2deb9143cab946f7327d677e59.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥1120","price2":"¥2083.3","bt":"[瑞士原装正品，全球联保]欧米茄Omega-碟飞系列 424.10.37.20.02.001 机械男表"},
             {"img":"https://image8.wbiao.co/shop/23ba86255c5245dc88d3cc116b127c2c.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥455","price2":"¥5460","bt":"【绿蛟龙】纯正瑞士品牌 迪沃斯DAVOSA-Diving 潜水系列 Ternos 特诺斯潜行者 墨玉绿 16155570 自动机械男表 "},
             {"img":"https://image8.wbiao.co/shop/b1276261f397498f83c1d64904cd1e09.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥316.7","price2":"¥3800","bt":"法国优雅时尚腕表品牌：Michel Herbelin赫柏林  Perles珍珠系列  珍珠恋人  16873/B08  女士石英表"},
             {"img":"https://image8.wbiao.co/shop/a254070eefb741b388e3ecc29f14df83.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥877.5","price2":"¥10530","bt":"莫勒·航海领域的专业时计，来自德国格拉苏蒂Muehle·Glashuette-Sporty运动系列 M1-25-33-MB 29er机械男表 大号"},
             {"img":"https://image8.wbiao.co/shop/36435012b21f4ee4a56a46ad56f5da56.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥2000","price2":"¥24000","bt":"帝舵（TUDOR）-王子系列星期日历型 76213-62483银面丝绸 自动机械男表"},
             {"img":"https://image8.wbiao.co/shop/b3053ec652e8497484da1473b2fa4d06.jpg?x-oss-process=image/resize,w_178,h_178","price1":"¥703.7","price2":"¥8444","bt":"荣汉斯JUNGHANS-max bill 系列 027/4700.04 自动机械表"}
             ];
    for(var i=0;i<att.length;i++){
        $(".w_blank3-context").append(`
            <a class="w_blank3-at" href="javascript:vido(0)">
                <img class="w_blank3-img"src="${att[i].img}" alt="">
                <p class="w_cont-bt4"> 
                    <span class="w_cont-bt5">月付</span> 
                    <span class="w_cont-bt6">${att[i].price1}</span> 
                    <span class="w_cont-bt7">${att[i].price2}</span> 
                </p> 
                <p class="w_blank3-bt">${att[i].bt}</p>
            </a>
        `)
    }
    $(".w_blank3-foot").on("click",function(){
        $(".w_blank3-context").css("height","auto");
        $(this).hide();
    })
})
$(function(){
    var arr=[{"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
             {"img1":"https://image8.wbiao.co/shop/2d516b6cdfb746fea3c55d024d9f2a3f.jpg","img2":"https://image8.wbiao.co/shop/2b1bf0564f6c4df982e5efaebd9470f2.jpg?x-oss-process=image/resize,w_366,h_142","p1":"浪琴LONGINES","p2":"浪琴Longines手表自1832年在瑞士索伊米亚(Saint-Imier)创立开始，在全球屡屡突破制表技术而傲视同行，同时又不失体现其优雅风范。1912年，浪琴手表在世界运动会中缔造了历史性时刻——率先运用断线远离，于比赛场上的起点与终点分别启动及终止计时装置。浪琴手表自此成为多项国际赛事的制定官方计时器，包括多次冬季与夏季奥运会。浪琴手表与航空及航海历史接下不解之缘。譬如浪琴手表为飞行家连拔(Lindbergh)首次个人横越大西洋计算飞行时间，期后更依照连拔的设计制造了Hour angle导航腕表。","a1":"绅士专区","a2":"名媛专区","a3":"功能分类"},
];
    for(var i=0;i<arr.length;i++){
        $(".w_shop-ul").append(`
            <li class="w_shop-li">
                <div class="w_shop-list1">
                <img src="${arr[i].img1}" alt="">
                </div>
                <a class="w_shop-list2" href="javacript:vido(0)">
                <img class="w_shop-list3" src="${arr[i].img2}" alt="">
                <p class="w_shop-list4">${arr[i].p1}</p>
                </a>
                <p class="w_shop-list5">${arr[i].p2}</p>
                <div class="w_shop-list6">
                    <a href="javacript:vido(0)" class="w_shop-list7">${arr[i].a1}</a>
                    <a href="javacript:vido(0)" class="w_shop-list7">${arr[i].a2}</a>
                    <a href="javacript:vido(0)" class="w_shop-list7">${arr[i].a3}</a>
                    <a href="javacript:vido(0)" class="w_shop-list8">进店></a>
                </div>
            </li>
        `)
    }
    $(".w_shop-li").on("mouseover",function(){
        var ht=$(this).index()
        $(".w_shop-list6").eq(ht).show();
        $(".w_shop-list5").eq(ht).hide();
    })
    $(".w_shop-li").on("mouseout",function(){
        var ht=$(this).index()
        $(".w_shop-list6").eq(ht).hide();
        $(".w_shop-list5").eq(ht).show();
    })

})
$(function() {
    $("img").lazyload({
      placeholder: "../images/w_imgfex1.png", 
      effect: "fadeIn"
     }); 
});