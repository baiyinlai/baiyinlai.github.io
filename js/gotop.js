var getDiv=document.getElementById("gotop");
getDiv.onclick=function(){
    window.scrollTo(0,0);
}
window.onscroll=function(){
    if(document.documentElement.scrollTop){
	getDiv.style.display="block";
    }else if(document.body.scrollTop){
	getDiv.style.display="block";
    }else{
	getDiv.style.display="none";
    }
}
