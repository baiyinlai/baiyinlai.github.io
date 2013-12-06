function toggleDl(dt) {
    var dl=dt.parentNode;
    if("collapse"==dl.className) {
	dl.className="expand";
	dt.style.backgroundPosition="150px -17px";
    }
    else { 
	dl.className="collapse";
	dt.style.backgroundPosition="150px 12px";
    }
}
