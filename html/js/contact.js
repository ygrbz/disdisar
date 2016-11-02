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