//导航栏样式
var lead=$('.lead');
var line=$('#line');
for (var i=0;i<lead.length;i++) {
	lead[i].index=i;
	var offLeft=lead[0].offsetLeft+8;
	lead[i].onmouseover=function  () {
		line.css({
			display:'block',
			left:offLeft+this.index*48+'px'
		})
	}
	lead[i].onmouseout=function  () {
		line.css({
			display:'none'
		})
	}
}

function action (obj) {
	var action=$('.action');
	var ul=$('<ul/>');
	action.append(ul);
	
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		ul.append(li);
		var a=$('<a href=""></a>');
		li.append(a);
		var img=$('<img/>');
		var url="../img/"+obj[i].news_image;
		img.attr('src',url);
		a.append(img);
		a.attr('href',obj[i].news_url);
		var div=$('<div/>');
		li.append(div);
		div[0].innerHTML=obj[i].news_content;
	}
}

$.ajax({
     type: 'GET',
     url: '../../php/php/action1.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
//  		action(obj);
		var arr = [];
		for (var i = 0; i < obj.length; i++) {
			if(i % 4 == 0){
				arr.push([]);
			}
			arr[Math.floor(i / 4)].push(obj[i]);
		}
		
		
		
		var ali=$('.menu').find('li');
		for (var i=0;i<arr.length;i++) {
			action(arr[i]);
		}
		var aul=$('.action').find('ul');
		aul.css('display','none');

		
		if (state==0) {
			ali[1].className='current';
			ali[0].style.cursor='text';
			$(aul[0]).css('display','block');
			state=1;
		}
		
		ali[2].onclick=function  () {
			aul.css('display','none');
			$(aul[2]).css('display','block');
			ali.removeClass();
			ali[0].addClass('first');
			ali[].addClass('first');
			ali[2].className='current';
			ali[0].style.cursor='pointer';
			state=0;
		}
		

		
		
		
    }
});

var state=0;
//function menu (arr) {
//	var ali=$('.menu').find('li');
//	if (state==true) {
//		ali[1].className='current';
//		ali[0].style.cursor='text';
//		action(arr[0]);
//		state=false;
//	}
//	ali[0].onclick=function  () {
//		action(arr[1])
//	}
//}
//menu()