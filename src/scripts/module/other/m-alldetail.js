var common = require('../../utils/common-util.js');
var html = require( '../../tpls/other/alldetail.html' );
// iscroll 滑动
var deScroll;
// var picSwiper;
// 根据地质栏，首次显示的位置
var href = window.location.href;
var pathArr = href.substr( href.indexOf('?') + 1).split('-');
if(!pathArr[1]){
	pathArr[1] = 0;
}else{
	pathArr[1] = parseInt(pathArr[1]);
}

$.ajax({
	url: '/api/spid/'+pathArr[0],
	success: function (res) {
		var rander = template.compile(html);
		var newhtml = rander(res);
		common.randerBody(newhtml);
		callbackFunc();
	}
}); 

function callbackFunc(){
	        //顶部导航栏
    $('#header ul').on('tap', 'li:last-child', function() {

            $('nav').toggle()
        })

	activeSelf('.delist li' ,pathArr[1], 'active');

	// 单击按钮的监听方法
	$('.delist li').on('tap', function( e ){
		var index = $(this).index();
		activeSelf('.delist li' ,index, 'active');
	});
} 

function activeSelf( select , index, className ){
	$('.swiper-slide').eq(index).css('display' , 'block').siblings().css('display','none');
	$(select).eq(index).addClass(className).siblings().removeClass(className);
	setTimeout( function(){ 
		if( !deScroll){
			 deScroll = new IScroll('.deScoll');
			 setTimeout( function(){deScroll.refresh() },200);
		}else{
			deScroll.refresh();
		}
	},100);

}
 navload();
    function navload(){
            $('nav ul li').eq(0).on('tap',function(){
        location.href="./index.html"
    })
     $('nav ul li').eq(1).on('tap',function(){
       
    
    })
 $('nav ul li').eq(2).on('tap',function(){
        location.href="./build/other/cart.html"
    })
  $('nav ul li').eq(3).on('tap',function(){
        location.href="./build/other/login.html"
    })
    $("#header ul li").eq(0).on('tap',function(){
        history.back();
    })

    }