var mySwiper = new Swiper ('.swiper-container', {
    //   direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
        bulletClass : 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
       
      },
      
    autoplay: {
        delay: 3000,//1秒切换一次
    },
})  

 $(".index_left_nav").css("display","none")
    $(".nav_left").mouseenter(function() {
        $(".index_left_nav").slideDown("fast");
    })
    $(".nav_left").mouseleave(function() {
        $(".index_left_nav").slideUp();
    })
// $(".m-top").
$(document).on("scroll", function () {
  var index_scrollTop = $(this).scrollTop();
  if (index_scrollTop > 200) {
    // $(".m-container-fixed").css("display","block")
    $(".m-container-fixed").slideDown(1000);
  } else {
    $(".m-container-fixed").slideUp(1000);
  }
})
// $(".m-top").click(function(){
//   window.scrollTop(0,0);
// })
$(".m-top").click(function(){   
  $('body,html').animate({ 
      scrollTop:0 
  },700);
  return false; //防止冒泡
});
$("img").lazyload({
	effect: "fadeIn",
	event: "scroll",
	threshold: 500,
	container: $("body"),
});
//跳转商品详情
$(".m-content-nav-shop img").click(function(){
  window.location.href="shop.html"
})
$(".m-content-nav-shop p").click(function(){
  window.location.href="shop.html"
})
