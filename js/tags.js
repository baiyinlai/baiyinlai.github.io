window.onload=function(){
    var obox = document.getElementById("tags_wrap");
    var obj = obox.getElementsByTagName("a");
    //10种可取的颜色
    var clrs = new Array("#814E2D","#C7B18B","#958974","#81622D","#C7BB8B","#5F6E83","#81702D","#4E5662","#958174","#C7A38B");
    //生成 0 ~ num-1 之间的随机整数
    function rand(num){
	return parseInt(Math.random()*num);
    }
    /* 循环操作，为每个标签设置不容的样式 */
    for(i = obj.length; i--;) {
	obj[i].style.fontSize = rand(12) + 10 + "px";
	obj[i].style.color = clrs[rand(11)];
	obj[i].onmouseover = function() {
	    this.style.background = "#E3D5BD";
	    this.style.borderBottom = "1px dashed #CFBD9C";
	}
	obj[i].onmouseout = function() {
	    this.style.background = "none";
	    this.style.borderBottom = "none";
	}
    }
}
