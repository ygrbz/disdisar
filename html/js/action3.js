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
		action(arr[2]);
		var aa=$('.menu').find('a');
		$(aa[0]).css({
			color:'#969393'
		})
    }
});

