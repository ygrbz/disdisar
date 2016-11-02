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
     url: '../../php/php/index.php',
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

//home的news
$.ajax({
     type: 'GET',
     url: '../../php/php/homenews.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		var news1=new Homenews(obj[0],0,22,'#',24,46);
    		var news2=new Homenews(obj[1],0,16,'#',18,36);
    		var news3=new Homenews(obj[5],0,19,'#',26,41);
    		var news4=new Homenews(obj[3],0,15,'#',22,36);
    		var news5=new Homenews(obj[2],0,18,'#',18,36);
    		var news6=new Homenews(obj[6],0,21,'#',22,36);
    		var news7=new Homenews(obj[4],0,19,'#',20,39);
    		
    }
});

function Homenews (obj,a,b,url,c,d) {
	var div=$('<div/>');
	var news=$('.news');
	news.append(div);
	var str1=obj.news_content.substr(a,b);
	div[0].innerHTML=str1;
	var a=$('<a href=""></a>');
	a.attr('href',url);
	div.append(a);
	var str2=obj.news_content.substr(c,d);
	a[0].innerHTML=str2+'...';
}
//最新动态
var news=$('.news')[0];
var up=$('.up')[0];
var down=$('.down')[0];
var scroll=$('.scroll')[0];
var offTop=scroll.offsetTop;
down.onclick=function  () {
	var offtop=news.offsetTop;
	offtop-=75;
	if (offtop<=-(news.offsetHeight-scroll.offsetHeight)) {
		offtop=-(news.offsetHeight-scroll.offsetHeight);
	}
	news.style.top=offtop+'px';
}
up.onclick=function  () {
	var offtop=news.offsetTop;
	offtop+=75;
	if (offtop>=0) {
		offtop=0;
	}
	news.style.top=offtop+'px';
}

//视频案例
var on=true;
function homecasebanner (obj) {
	var banner=$('.homecasebanner');
	var ul=$('<ul/>');
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
//		li.on('mouseup',function  () {
//			on=false;
//		})
//		li.on('mouseout',function  () {
//			on=true;
//		})
		if (on==true) {
			var url="../img/" + obj[i].banner_image;
			img.attr('src',url);
		}
//		if (on==false){
//			var url="../img/" + obj[i].banner_image2;
//			img.attr('src',url);
//		}
		
		a.append(img);
	}
	change(ul);
}
var casetimer=null;
var index=0;
function change (ul) {
	var li=ul.children();
	var i=$('i');
	$(i[0]).addClass('circleon');
//	$(li[0]).addClass('imgon');
	$(li[0]).fadeIn();
	casetime=setInterval(function  () {
		if (index<li.length-1) {
			index++;
		}else{
			index=0
		}
//		li.removeClass();
		li.fadeOut();
		i.removeClass();
//		$(li[index]).addClass('imgon');
		$(li[index]).fadeIn('slow');
		$(i[index]).addClass('circleon');
	},4000)	
}

$.ajax({
     type: 'GET',
     url: '../../php/php/homecasebanner.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
    		homecasebanner(obj);
    }
});

//经典案例
//function caseImg (obj) {
//	var caseimg=$('.caseimg');
//	var ul=$('<ul/>');
//	caseimg.append(ul);
//	for (var i=0;i<obj.length;i++) {
//		var li=$('<li/>');
//		ul.append(li);
//		var a=$('<a href=""></a>');
//		li.append(a);
//		var img=$('<img/>');
//		var url="../img/" + obj[i].case_image;
//		img.attr('src',url);
//		a.append(img);
//	}
//}
$.ajax({
     type: 'GET',
     url: '../../php/php/classiccase.php',
    success:function  (arr) {
		var obj=JSON.parse(arr);
//  		caseImg(obj);
		var caseimg=$('.caseimg').find('img');
		for (var i=0;i<obj.length;i++) {
			caseimg[i].src="../img/"+obj[i].case_image;
		}
		
    }
});


