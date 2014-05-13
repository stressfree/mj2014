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