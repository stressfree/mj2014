function removeStyles(el) {
    if (el.getAttribute("style")) {        
        if (el.getAttribute("style").toUpperCase().indexOf("DISPLAY") < 0) {
            el.removeAttribute('style');
        }
    }
    
    if(el.childNodes.length > 0) {
        for(var child in el.childNodes) {
            if(el.childNodes[child].nodeType === 1) {
                removeStyles(el.childNodes[child]);
            }
        }
    }
}

var $loadedBodyClass = document.getElementById("mjbody").className;

window.addEventListener("scroll", function(e) {
    var $pos = document.body.scrollTop || document.documentElement.scrollTop;
    var $body = document.getElementById("mjbody");
    
    if ($pos > 30) {
        $body.className = $loadedBodyClass + ' short';
    } else {
        $body.className = $loadedBodyClass;
    }
});

removeStyles(document.getElementById("mjcontent"));

var $allParas = document.getElementById("mjcontent").getElementsByTagName('p');

for(var i = 0; i < $allParas.length; i++) {    
    if ($allParas[i].innerHTML.replace(/&nbsp;/gi,'').trim() === '') {
        $allParas[i].style.display = 'none';
    }
}