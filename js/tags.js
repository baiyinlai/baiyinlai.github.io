window.onload=function(){
    var obox=document.getElementById("tags_wrap");
    var obj=obox.getElementsByTagName("a");
    //10种可取的颜色
    var clrs = new Array("#EEA516","#cc3366","#660033","#333333","#003300","#99cc99","#ffcc00","#000000","#999999","#ff0000");
    //生成 0-num-1 之间的随机整数
    function rand(num){
	return parseInt(Math.random()*num);
    }
    //循环
    for( i=obj.length;i--;) {
	obj[i].style.fontSize=rand(10)+10+"px";
	obj[i].style.color=clrs[rand(11)];
	obj[i].onmouseover=function(){
	    this.style.background="#EFF5E9";
	    this.style.borderBottom="1px dashed #005C00";
	}
	obj[i].onmouseout=function(){
	    this.style.background="none";
	    this.style.borderBottom="none";
	}
    }
}
