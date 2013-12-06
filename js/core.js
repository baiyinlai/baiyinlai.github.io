var SITE_ROOT = 'http://baige5117.github.com/';
try {
  document.execCommand("BackgroundImageCache", false, true);
} catch(err) {}

function addDOMLoadEvent(f){if(!window.__ADLE){var n=function(){if(arguments.callee.d)return;arguments.callee.d=true;if(window.__ADLET){clearInterval(window.__ADLET);window.__ADLET=null}for(var i=0;i<window.__ADLE.length;i++){window.__ADLE[i]()}window.__ADLE=null};if(document.addEventListener)document.addEventListener("DOMContentLoaded",n,false);/*@cc_on @*//*@if (@_win32)document.write("<scr"+"ipt id=__ie_onload defer src=//0><\/scr"+"ipt>");var s=document.getElementById("__ie_onload");s.onreadystatechange=function(){if(this.readyState=="complete")n()};/*@end @*/if(/WebKit/i.test(navigator.userAgent)){window.__ADLET=setInterval(function(){if(/loaded|complete/.test(document.readyState)){n()}},10)}window.onload=n;window.__ADLE=[]}window.__ADLE.push(f)}
 
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
	window.onload = func;
    } else {
	window.onload = function() {
	    oldonload();
	    func();
	}
    }
}

function getElementsByClass(searchClass,node,tag) {
    var classElements = new Array();
    if ( node == null )
	node = document;
    if ( tag == null )
	tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i = 0, j = 0; i < elsLen; i++) {
	if ( pattern.test(els[i].className) ) {
	    classElements[j] = els[i];
	    j++;
	}
    }
    return classElements;
}

function createCookie(name,value,seconds) {
    if (seconds) {
	var date = new Date();
	date.setTime(date.getTime()+(seconds*1000));
	var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

var data1 = new Date();
var fotos_array = new Array();	

var current_foto = 0;

var cookie_relocate_baige;
var relocate = [null,null,current_foto+1];
var test_cookie = readCookie('cookie_relocate_baige');
if(test_cookie&&document.referrer.indexOf('baige5117')>-1) { 
    relocate = test_cookie.split('&');
    current_foto = relocate[2]-1;
}



function path_images ()
{
    var fotos_img= $$('.foto');
    
    for(m=0; m<fotos_img.length; m++)
    {  
	fotos_array[m] = fotos_img[m].getAttribute('src');
	
    }
    
}

function externalLinks() {
    if (!document.getElementsByTagName) return;
    var anchors = document.getElementsByTagName("a");
    for (var i=0; i<anchors.length; i++) {
	var anchor = anchors[i];
	if (anchor.getAttribute("href") &&
	    anchor.getAttribute("rel") == "external")
	    anchor.target = "_blank";
    }
}
 
Fx.Properties = Fx.Styles.extend({	
    increase: function(){for (	var p in this.now) this.element[p] = this.now[p];	}	
});



Fx.FlyingScroller = Fx.Properties.extend({
    initialize: function(el, options){
	this.parent(el, options);
	this.options = Object.extend(this.options || {}, Object.extend({
	    paddingLeft: 0,
	    paddingTop: 0
	}, options || {}));
    },
    toElement: function(el, paddingLeft, paddingTop){
	this.goTo(el.offsetLeft - (paddingLeft || this.options.paddingLeft || 0), el.offsetTop - (paddingTop || this.options.paddingTop || 0));
    },
    goTo: function(x, y){
	this.start({
	    'scrollLeft': [this.element.scrollLeft, x],
	    'scrollTop': [this.element.scrollTop, y]
	})
    }
});

function id(id)
{
    var elem = document.getElementById(id);
    return elem;
}		

function close_message(linku)
{
    linku.parentNode.parentNode.style.display = 'none';
}

function navigation ()
{ var contents = $('contents');
  var fotos_big = $$('.foto');
  
  for(x=0; x<fotos_big.length; x++)
  {  fotos_big[x].setAttribute('src','/images/icons/pix.gif');
  }
  var fotos = document.getElementById('fotos');
  var fotos_img= $$('#fotos img');
  var fotos_span = $$('#fotos span'); 
  
  var galerie = document.getElementById('galerie');
  galerie.removeChild(fotos);
  var fotos_wrapper = document.createElement('div');
  fotos_wrapper.setAttribute('id','fotos_wrapper');
  galerie.appendChild(fotos_wrapper);
  
  
  for(m=0; m<fotos_img.length; m++)
  {fotos_wrapper.appendChild(fotos_img[m]);
   fotos_img[m].style.top = m*494 + 'px';
   fotos_img[m].removeAttribute('alt');
  }
  
  
  var fotos_nav2 = $('fotos_nav2');
  fotos_nav2.style.visibility = 'visible';
  fotos_nav2.style.position = 'absolute';
  fotos_nav2.style.top = 471 + 'px';
  fotos_nav2.style.left = 0;
  fotos_nav2.style.margin = 0;
  
  var fotos_nav_h4 = document.createElement('h4');
  fotos_nav2.appendChild(fotos_nav_h4);
  fotos_nav_h4.innerHTML = fotos_span[0].innerHTML;
  
  var main_nav = new Fx.FlyingScroller($('contents_wrapper'), {
      transition: Fx.Transitions.quadInOut,
      duration: 1500,
      paddingLeft: 0,
      paddingTop: 0
  });
  if(!relocate[0]) {main_nav.clearTimer().toElement($('home')); }
  else {
      main_nav.clearTimer().toElement($(relocate[0]));
      var hovered = getElementsByClass(relocate[0],$('main_menu'),'a');
      if(hovered.length>0) {
	  hovered[0].setAttribute('id','hovered');
      }
  }
  
  var gal_nav = new Fx.FlyingScroller($('fotos_wrapper'), {
      transition: Fx.Transitions.quadInOut,
      duration: 1500,
      paddingLeft: 0,
      paddingTop: 0
  });
  gal_nav.clearTimer().toElement($('foto1'));
   
  
  var main_nav_lks = new Array();
  var linkuri = $$('a');
  var foto_nav2_lks = $$('#fotos_nav2 a');
  foto_nav2_lks[0].setAttribute('id','selectat');
  var content_div =  $$('.content');
  
  for (m=0; m<linkuri.length; m++)
  {
      if(linkuri[m].getAttribute('rel')=='main_menu')
      {
	  main_nav_lks.push(linkuri[m]); 	 
      }
  }
  
  for (i=0; i<main_nav_lks.length; i++)
  {
      main_nav_lks[i].onclick = function ()
       {      
	   var hovered = $('hovered');
	   if(hovered) {hovered.removeAttribute('id');}
	   if(this.className!='home') {this.setAttribute('id','hovered');}
	   
	   var target_page = $(this.className);
	   if(this.getAttribute('rel')=='main_menu')
	   { 
	       main_nav.clearTimer().toElement($(target_page )); 
	       relocate[0] = this.className;
	   }
	   relocate[1] = null;
	   
	   return false;  
       }
  }
  
  
  
  var fotos_nav = document.createElement('ul');
  fotos_nav.setAttribute('id','fotos_nav')
  for(i=0; i<2; i++)
  { var li = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('href','#');
    fotos_nav.appendChild(li);
    li.appendChild(a);
  }
  galerie.appendChild(fotos_nav);
  var fotos_nav_lks = fotos_nav.getElementsByTagName('a');
  fotos_nav_lks[0].setAttribute('id','foto_inapoi');
  fotos_nav_lks[1].setAttribute('id','foto_inainte');
  
  var foto_inapoi = fotos_nav_lks[0];
  var foto_inainte = fotos_nav_lks[1];
  
  if(relocate[2]!=1) {
      gal_nav.clearTimer().toElement($('foto'+relocate[2]));
      foto_nav2_lks[relocate[2]-1].fireEvent('click');
      var selectat = $('selectat');
      if(selectat) {selectat.removeAttribute('id');}
      foto_nav2_lks[relocate[2]-1].setAttribute('id','selectat');
      if(current_foto==0) 
      {foto_inapoi.style.visibility = 'hidden';
       foto_inainte.style.visibility = 'visible';
      }
      else if (current_foto==(foto_nav2_lks.length-1)) 
      {foto_inainte.style.visibility = 'hidden';
       foto_inapoi.style.visibility = 'visible';
      } 
      else {
	  foto_inapoi.style.visibility = 'visible';	
	  foto_inainte.style.visibility = 'visible';
      }
      
  }
  else {
      gal_nav.clearTimer().toElement($('foto'+relocate[2]));
  }
  
  foto_inapoi.onclick = function () 
  { 
      if(current_foto==1) 
      {this.style.visibility = 'hidden';}
      if(current_foto>0) 
      { current_foto--; }
      
      var selectat = $('selectat');
      if(selectat) {selectat.removeAttribute('id');}
      foto_nav2_lks[current_foto].setAttribute('id','selectat');
      foto_inainte.style.visibility  = 'visible';
      
      gal_nav.clearTimer().toElement($('foto'+(current_foto+1)));
      fotos_nav_h4.innerHTML = fotos_span[current_foto].innerHTML;
      relocate[2] = current_foto+1;
      
      return false;
  }
  
  foto_inainte.onclick = function () 
  { 
      if(current_foto==foto_nav2_lks.length-2) 
      {this.style.visibility = 'hidden';}
      if(current_foto<foto_nav2_lks.length-1) 
      { current_foto++; }
      
      var selectat = $('selectat');
      if(selectat) {selectat.removeAttribute('id');}
      foto_nav2_lks[current_foto].setAttribute('id','selectat');
      foto_inapoi.style.visibility  = 'visible';
      
      gal_nav.clearTimer().toElement($('foto'+(current_foto+1)));
      fotos_nav_h4.innerHTML = fotos_span[current_foto].innerHTML;
      relocate[2] = current_foto+1;
      
      return false;
  }
  
   
  for(x=0; x<foto_nav2_lks.length; x++)
  {
      
      foto_nav2_lks[x].addEvent('click',function(e) {
	  if (!e) var e = window.event;
	  var selectat = $('selectat');
	  if(selectat) {selectat.removeAttribute('id');}
	  this.setAttribute('id','selectat');
	  for(z=0; z<foto_nav2_lks.length; z++)
	  {
	      if(foto_nav2_lks[z].getAttribute('id')=='selectat')
	      {  current_foto = z;
		 if(current_foto==0) 
		 {foto_inapoi.style.visibility = 'hidden';
		  foto_inainte.style.visibility = 'visible';
		 }
		 else if (current_foto==(foto_nav2_lks.length-1)) 
		 {foto_inainte.style.visibility = 'hidden';
		  foto_inapoi.style.visibility = 'visible';
		 } 
		 else {
		     foto_inapoi.style.visibility = 'visible';	
		     foto_inainte.style.visibility = 'visible';
		 }
		 gal_nav.clearTimer().toElement($('foto'+(current_foto+1)));
		 fotos_nav_h4.innerHTML = fotos_span[current_foto].innerHTML;
		 relocate[2] = current_foto+1;
	      }
	  }
	  
	  if(e) {
	      if(e.preventDefault) e.preventDefault();
	      if(e.returnValue) e.returnValue = false;
	  }
	  return false;
      })
  }
  
  var contact_lk = document.getElementById('contact_link');
  var locatie_lk = document.getElementById('locatie_link');
  contact_lk.onclick = function () 
  {
      contact_nav.clearTimer().toElement($('locatie')); 
      relocate[1] = 'locatie';
      return false;
  }
  locatie_lk.onclick = function () 
  {
      contact_nav.clearTimer().toElement($('formular_contact')); 
      relocate[1] = 'formular_contact';
      return false;
  } 
}

function selectReplacement(obj) {
    obj.className += ' replaced';
    var ul = document.createElement('ul');
    ul.className = 'selectReplacement';
    ul.setAttribute('id','selectReplacement');
    var opts = obj.options;
    for (var i=0; i<opts.length; i++) {
        var selectedOpt;
        if (opts[i].selected) {
            selectedOpt = i;
            break;
        } else {
            selectedOpt = 0;
        }
    }
    for (var i=0; i<opts.length; i++) {
        var li = document.createElement('li');
	
	var txt = document.createTextNode(opts[i].text);
        li.appendChild(txt);
	
        li.selIndex = opts[i].index;
        li.selectID = obj.id;
        li.onclick = function() {
            selectMe(this);
        }
	
        if (i == selectedOpt) {
            li.className = 'selected';
            li.onclick = function() {
		this.parentNode.className += ' selectOpen';
		this.onclick = function() {
		    selectMe(this);
		}
            }
	    
        }
        if (window.attachEvent) {
            li.onmouseover = function() {
		this.className += ' hover';
            }
            li.onmouseout = function() {
		this.className = 
		    this.className.replace(new RegExp(" hover\\b"), '');
            }
        }
        ul.appendChild(li);
    }
    obj.parentNode.insertBefore(ul,obj);
}
function selectMe(obj) {
    var lis = obj.parentNode.getElementsByTagName('li');
    for (var i=0; i<lis.length; i++) {
        if (lis[i] != obj) {
            lis[i].className='';
            lis[i].onclick = function() {
		selectMe(this);
            }
        } else {
            setVal(obj.selectID, obj.selIndex);
            obj.className='selected';
            obj.parentNode.className = 
		obj.parentNode.className.replace(new RegExp(" selectOpen\\b"), '');
            obj.onclick = function() {
		obj.parentNode.className += ' selectOpen';
		this.onclick = function() {
		    selectMe(this);
		}
            }
        }
    }
}
function setVal(objID, selIndex) {
    var obj = document.getElementById(objID);
    obj.selectedIndex = selIndex;
}
function setForm() {
    var s = document.getElementsByTagName('select');
    for (var i=0; i<s.length; i++) {
        selectReplacement(s[i]);
    }
}



function fotos_big_replace() {
    var fotos_big = $$('.foto');
    for(m=0; m<fotos_big.length; m++)
    {   fotos_big[m].setAttribute('src',fotos_array[m]);
    }
    
}	

function timer_img ()
{ var data2 = new Date();
  window.setTimeout(fotos_big_replace,data2-data1);	
}

function hide_calendar ()
{
    var calendar= $$('.calendar');
    
    for(m=0; m<calendar.length; m++)
    {  document.body.removeChild(calendar[m]);
    }
}	

addDOMLoadEvent(path_images);
addDOMLoadEvent(navigation);
addDOMLoadEvent(setForm);

addDOMLoadEvent(externalLinks);
addLoadEvent(timer_img);
addLoadEvent(date_chooser_init);
addLoadEvent(date_chooser_call);

window.onbeforeunload = unloadPage;

function unloadPage()
{  
    string = relocate.join("&");
    createCookie('cookie_relocate_baige',string,60)
}

  

 
 
 
 
 
 
 
 
