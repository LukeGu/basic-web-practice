$(document).ready(function(){
	$(window).on("load",function(){
		imgLocation();
		var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]}
		window.onscroll = function(){
			if (scrollSide()) {
				$.each(dataImg.data,function(index,value){
					var box = $("<div>").addClass("box").appendTo($("#container"));
					var content = $("<div>").addClass("content").appendTo(box);
					$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
				});
				imgLocation();
			}
		};
	});
});


function scrollSide(){
	var box = $(".box");
	var lastHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var doucumentHeight = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return (lastHeight<scrollHeight+doucumentHeight)?true:false;
}


function imgLocation(){
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width()/boxWidth);
	console.log($(window).width() + " / " + boxWidth + " = " + num);
	var boxArr = [];
	box.each(function(index,value){
		var boxHeight = box.eq(index).height();
		if (index<num) {
			boxArr[index] = boxHeight;

		}else{
			var minboxHeight = Math.min.apply(null,boxArr);
			var minboxIndex = $.inArray(minboxHeight,boxArr);
			//console.log(minboxIndex);
			$(value).css({
				"position" : "absolute",
				"top" : minboxHeight,
				"left" : box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex] += box.eq(index).height();
		}
	});	
}