$(function(){
	if (document.body.clientWidth <= 768) {
		$('#fullpage').fullpage({
			paddingTop: '84px',
			slidesNavigation: true,
			menu: '.nav',
			anchors: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8']
			// slidesNavPosition: 'bottom',
		});
		$(".header").find(".navBtn").on("click",function(){
			$(".nav").slideToggle("fast");			
		});
		$(".navBox a").click(function(){
			$(".nav").slideToggle("fast");		
		});
		
		
	} else {
		$('#fullpage').fullpage({
			paddingTop: '117px',
			slidesNavigation: true,
			menu: '.nav',
			anchors: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
			loopHorizontal: true,
			continuousHorizontal: true,
			fixedElements:'.headerBox',
			
		});
		
	}
    
		//  轮播
    	var swiper = new Swiper('.banner', {
		    autoplay:3000, //自动切换
		    speed:1000,    //速度
		    parallax : true,  //是否开启视差效果（相对父元素移动）
		    preloadImages:false,  //强制加载所有图片，默认为true
		    effect:'slide',    //切换效果，slide（唯一切换），fade（淡入），cube（方块），coverflow（3d流），flip（3d翻转）
//		    pagination : '.swiper-pagination',
//		    paginationClickable: true,
		    autoplayDisableOnInteraction : false///注意此参数，默认为true
		});
		
	$("#searchBtn").on("click",function(){
		var ewbNo = $("#ewbNo").val();
		if(!ewbNo.trim()){
			alert("请输入运单号");
			return false;
		}else{
			var searchewbNo;
			var ewbNoArr = ewbNo.trim().split(",");
			var ewbNoArrE = ewbNo.trim().split("，");
			if(ewbNoArr == ewbNoArrE){
				searchewbNo = ewbNoArr;
			}else{
				searchewbNo = ewbNoArrE;
			}
			
			if (searchewbNo.length > 100) {
	            alert('一次最多只能查询100个快件单号');
	            return false;
	        }
			window.open('http://wto.ne56erp.com/common/ewb_query.zul?ewbNo='+searchewbNo);
		}
		
		
		
//		$.ajax({
//			type: "get",
//			url: url,
//			async: false,
//			dataType: 'jsonp',
//			success: function(data){
//				alert(data);
//			}
//		});
	});
})