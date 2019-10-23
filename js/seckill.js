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
