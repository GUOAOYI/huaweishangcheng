function getStyle(domobj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(domobj, null)[attr];
    }
    return domobj.currentStyle[attr];
}
//{width:500,height:500}
function startMove(domobj, json, fn) {
    clearInterval(domobj.timer);
    domobj.timer = setInterval(function() {
        var flag = true; //假设所有的属性都达到了目标值
        for (var attr in json) {
            var iTarget = json[attr]; //目标值
            if (attr == "opacity") {
                var iCur = parseInt(getStyle(domobj, attr) * 100);
            } else {
                var iCur = parseInt(getStyle(domobj, attr));
            }
            var iSpeed = (iTarget - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == "opacity") {
                domobj.style.opacity = (iCur + iSpeed) / 100;
                domobj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
            } else {
                domobj.style[attr] = iCur + iSpeed + "px";
            }
            if (iCur != iTarget) {
                flag = false; //有属性没有达到目标值，假设不成立
            }
        }
        if (flag) { //假设成立
            clearInterval(domobj.timer);
            if (fn) {
                fn();
            }
        }
    }, 20);
}