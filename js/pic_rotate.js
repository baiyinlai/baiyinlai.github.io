window.onload=function() {
    var obox=document.getElementById("gallery");
    var obj=obox.getElementsByTagName("div");
    
    /*循环设置图片的样式*/
    for(i=obj.length;i--;) {
        var left = Math.random() * 550 + 30;
        var top = Math.random() * 350 + 40;
	obj[i].style.top= top + "px";
	obj[i].style.left= left + "px";
	var angle = Math.random() * 60 - 30;
	obj[i].style.transform = "rotate(" + angle + "deg)"; /*others*/
	obj[i].style.MozTransform = "rotate(" + angle + "deg)"; /*FF*/
	obj[i].style.WebkitTransform = "rotate(" + angle + "deg)"; /*webkit:Safari and Chrome*/
	obj[i].style.msTransform = "rotate(" + angle + "deg)"; /*ms*/
	obj[i].style.OTransform = "rotate(" + angle + "deg)"; /*opera*/
    }
}
