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

//轮播图
function banner (obj) {
	obj.push(obj[0]);
	obj.unshift(obj[obj.length-2]);
	
	var banner=$('.banner');
	var ul=$('<ul/>');
	ul.css({
		width:banner.width()*obj.length,
		left:-banner.width()
	})
	banner.append(ul);
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		li.css({
			width:banner.width(),
			hetght:banner.height()
		})
		ul.append(li);
		var a=$('<a href=""></a>');
//		a.attr('href',obj[i].banner_url);
		li.append(a);
		var img=$('<img/>');
		img.css({
			width:banner.width(),
			hetght:banner.height()
		})
		var url="../img/" + obj[i].banner_image;
		img.attr('src',url);
		a.append(img);
	}
	move(banner);
	btn (ul);
}

var timer=null;	
function move (banner) {
	var offLeft=banner.children('ul').position().left;
	timer=setInterval(function  () {
		offLeft -= banner.width();
		banner.children('ul').animate({
			left:offLeft+'px'
		},500,'linear',function  () {
			if (offLeft==-(banner.children('ul').width() - banner.width())) {
				banner.children('ul').css('left',-banner.width());
				offLeft=-banner.width();
			}
		})
	},3000)
}

//banner的btn
function btn (ul) {
	var last=$('.last');
	var next=$('.next');
	last[0].onclick=function  () {
		var off=ul.position().left;
		off+=ul.children('li').width();
		ul.css('left',off);
		if (off==0) {
			ul.css('left',-(ul.width()-2*wrap.width()))
		}
	}
	next[0].onclick=function  () {
		var off=ul.position().left;
		off-=ul.children('li').width();
		ul.css('left',off);
		if (off==-(ul.width()-ul.children('li').width())) {
			ul.css('left',-ul.children('li').width())
		}
	}
}

//about的banner
$.ajax({
     type: 'GET',
     url: '../../php/php/aboutbanner.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		banner(obj);
    }
});

//客户端的图片
function service (obj) {
	var banner=$('.customer');
	var ul=$('<ul/>');
	banner.append(ul);
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		ul.append(li);
		var a=$('<a href=""></a>');
//		a.attr('href',obj[i].banner_url);
		li.append(a);
		var img=$('<img src=""/>');
		var url="../img/" + obj[i].about_image;
		img.attr('src',url);
		a.append(img);
	}
	var li=banner.find('li');
	for (var i=0;i<li.length;i++) {
		var num=(i+1)%4
		if (num==0) {
			$(li[i]).addClass('last');
		}
	}
	
}

$.ajax({
     type: 'GET',
     url: '../../php/php/aboutservice.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		service(obj);
    }
});
//核心力量
function power (obj) {
	var power=$('.power');
	var ul=$('<ul/>');
	power.append(ul);
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		ul.append(li);
		li[0].innerHTML=obj[i].about_content;
	}
	var li=power.find('li');
	for (var i=0;i<li.length;i++) {
		var num=(i+1)%4
		if (num==0) {
			$(li[i]).addClass('last');
		}
	}
}
$.ajax({
     type: 'GET',
     url: '../../php/php/aboutpower.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		power(obj);
    }
});
//招贤纳士
function joinus (obj) {
	var joinus=$('.joinus');
	var ul=$('<ul/>');
	joinus.append(ul);
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		ul.append(li);
		li[0].innerHTML=obj[i].about_content;
	}
	var li=joinus.find('li');
	for (var i=0;i<li.length;i++) {
		var num=(i+1)%3
		if (num==0) {
			$(li[i]).addClass('last');
		}
	}
}
$.ajax({
     type: 'GET',
     url: '../../php/php/aboutjoinus.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		joinus(obj);
    }
});


