var str = require('../tpls/flower/freshFlowers.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);
common.switchPage(0);

// swiper 定义
var mySwiper = new Swiper('#index-swiper', {
  onSlideChangeEnd: function(swiper){
    $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
  }
});
$('#swiper-nav li').on('tap', function () {
  mySwiper.slideTo($(this).index());
  $(this).addClass('active').siblings().removeClass('active');
});



$.ajax({
  url: '/api/freshFlowers.php',
  success: function (res) {
    var html = template('list', res);
    common.inner($('#index-scroll'), html);
  }
});

$.ajax({
  url: '/api/freshFlowersSale.php',
  success: function (res) {
    var html = template('list', res);
    common.inner($('#index-scroll01'),html);
  }
});

$.ajax({
  url: '/api/freshFlowersPrice.php',
  success: function (res) {
    var html = template('list', res);
    common.inner($('#index-scroll02'),html);
  }
});

$.ajax({
  url: '/api/freshSort.php',
  success: function (res) {
    var html = template('list01', res);
    common.inner($('#index-scroll03'),html);
  }
});





window.onload = function () {
  var id1 = '#index-scroll';
  indexScrolls(id1);
  var id2 = '#index-scroll01';
  indexScrolls(id2);
  var id3 = '#index-scroll02';
  indexScrolls(id3);
  var id4 = '#index-scroll03';
  indexScrolls(id4);

  

  function indexScrolls(id){
    var myScroll = new IScroll(id, {
    probeType: 3,
    mouseWheel: true
  });
  }
  $('header ul').on('tap', 'li:last-child', function() {

            $('#nav2').toggle()
        })
  navload();
    function navload(){
            $('#nav2 ul li').eq(0).on('tap',function(){
        location.href="./index.html"
    })
     $('#nav2 ul li').eq(1).on('tap',function(){
       
    
    })
 $('#nav2 ul li').eq(2).on('tap',function(){
        location.href="./build/other/cart.html"
    })
  $('#nav2 ul li').eq(3).on('tap',function(){
        location.href="./build/other/login.html"
    })
    $("header ul li").eq(0).on('tap',function(){
        history.back();
    })

    }
  
  
  
  
  
};

