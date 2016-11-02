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

//case
function case1 (obj) {
	var main=$('#main');
	var ul=$('<ul/>');
	main.append(ul);
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		ul.append(li);
		var a=$('<a href=""></a>');
//		a.attr('href',obj[i].case_url);
		li.append(a);
		var img=$('<img src=""/>');
		var url="../img/" + obj[i].case_image;
		img.attr('src',url);
		a.append(img);
	}
	var li=main.find('li');
	for (var i=0;i<li.length;i++) {
		var num=(i+1)%2;
		if (num==0) {
			$(li[i]).addClass('right');
		}else{
			$(li[i]).addClass('left');
		}
	}
	
}

$.ajax({
     type: 'GET',
     url: '../../php/php/case1.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		case1(obj);
    }
});