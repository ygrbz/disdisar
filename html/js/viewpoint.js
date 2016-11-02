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
		a.attr('href',obj[i].banner_url);
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

//home首页banner
$.ajax({
     type: 'GET',
     url: '../../php/php/viewpointbanner.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		banner(obj);
    }
});
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

//我们的观点
function ourpoint (obj) {
	var point=$('.point');
	var ul=$('<ul/>');
	
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		point.append(ul);
		ul.append(li);
		var a=$('<a href=""></a>');
		var a1=$('<a href=""></a>');
		a1.text(obj[i].point_title);
		a1.attr('href',obj[i].point_url);
		a1.addClass('title')
		li.append(a);
		li.append(a1);
		var span=$('<span/>');
		li.append(span);
		span[0].innerHTML=obj[i].point_content;
		var img=$('<img/>');
		var url="../img/"+obj[i].point_img;
		img.attr('src',url);
		a.append(img);
		a.attr('href',obj[i].point_url);
	}	
	var li=point.find('li');
	for (var i=0;i<li.length;i++) {
		var num=(i+1)%4;
		if (num==0) {
			$(li[i]).addClass('last');
		}
	}
}
$.ajax({
     type: 'GET',
     url: '../../php/php/ourpoint.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		ourpoint(obj);
    }
});

//微创新
function creatnew (obj) {
	var point=$('.creatnew');
	var ul=$('<ul/>');
	
	for (var i=0;i<obj.length;i++) {
		var li=$('<li/>');
		point.append(ul);
		ul.append(li);
		var a=$('<a href=""></a>');
		var a1=$('<a href=""></a>');
		a1.text(obj[i].point_title);
		a1.attr('href',obj[i].point_url);
		a1.addClass('title')
		li.append(a);
		li.append(a1);
		var span=$('<span/>');
		li.append(span);
		span[0].innerHTML=obj[i].point_content;
		var img=$('<img/>');
		var url="../img/"+obj[i].point_img;
		img.attr('src',url);
		a.append(img);
		a.attr('href',obj[i].point_url);	
	}	
	var li=point.find('li');
	for (var i=0;i<li.length;i++) {
		var num=(i+1)%4;
		if (num==0) {
			$(li[i]).addClass('last');
		}
	}
	var lastli=$('<li/>');
	ul.append(lastli);
	lastli.addClass('last')
	var lasta=$('<a href=""></a>')
	var img1=$('<img/>');
	img1.attr('src',"../img/more2.jpg");
	lasta.append(img1);
	lastli.append(lasta)
}

$.ajax({
     type: 'GET',
     url: '../../php/php/creatnew.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		creatnew(obj);
    }
});