function mjRemoveStyles(el) {
    if (el.getAttribute("style")) {        
        if (el.getAttribute("style").toUpperCase().indexOf("DISPLAY") < 0) {
            el.removeAttribute('style');
        }
    }
    
    if(el.childNodes.length > 0) {
        for(var child in el.childNodes) {
            if(el.childNodes[child].nodeType === 1) {
                mjRemoveStyles(el.childNodes[child]);
            }
        }
    }
}

function mjScrollEvent(e) {
    var $pos = document.body.scrollTop || document.documentElement.scrollTop;
    var $body = document.getElementById("mjbody");
    
    if ($pos > 30) {
        $body.className = $loadedBodyClass + ' short';
    } else {
        $body.className = $loadedBodyClass;
    }
}

var $loadedBodyClass = document.getElementById("mjbody").className;

if (!window.addEventListener) {
    window.attachEvent("onscroll", mjScrollEvent);
}
else {
    window.addEventListener("scroll", mjScrollEvent);
}

mjRemoveStyles(document.getElementById("mjcontent"));

var $allParas = document.getElementById("mjcontent").getElementsByTagName('p');

for(var i = 0; i < $allParas.length; i++) {    
    if ($allParas[i].innerHTML.replace(/&nbsp;/gi,'').trim() === '') {
        $allParas[i].style.display = 'none';
    }
}