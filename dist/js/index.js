var oinput = document.getElementById("oinput");
var a1 = document.getElementById("a-1");
var a2 = document.getElementById("a-2");
oinput.onclick = function(e) {
    e.stopPropagation()
    a1.style.display = "none"
    a2.style.display = "none"
}
document.onclick = function() {

    a1.style.display = "block"
    a2.style.display = "block"
}
let oSliderBox = document.querySelectorAll(".sliderBox")[0];
let oSliderList = document.querySelectorAll(".sliderList")[0];
let aSliderList = oSliderList.children;
let len = aSliderList.length;
let perWidth = aSliderList[0].offsetWidth;
oSliderList.style.width = len * perWidth + "px"; //设置ul的宽度 区块个数*单位宽
let aPoints = document.querySelector(".num").children;
//开定时器
let i = 0;

function move() {
    i++;
    //控制临界值123123
    if (i === len) {
        oSliderList.style.left = 0;
        i = 1;
    }
    //控制临界值321321
    if (i == -1) {
        oSliderList.style.left = -perWidth * (len - 1) + "px";
        i = len - 2;
    }
    //控制圆点的点亮
    for (let j = 0; j < aPoints.length; j++) {
        aPoints[j].className = "";
    }
    if (i == len - 1) { //图片出来最后一张时，应该让第一个圆点点亮
        aPoints[0].className = "hover";
    } else {
        aPoints[i].className = "hover";
    }

    startMove(oSliderList, {
        "left": -perWidth * i
    });
}
let timer = setInterval(function() {
    move();
}, 4000);
//移到圆点上去
for (let j = 0; j < aPoints.length; j++) {
    aPoints[j].onmouseover = function() {
        i = j - 1;
        move();
    }
}
//开关定时器
oSliderBox.onmouseover = function() {
    clearInterval(timer);
}
oSliderBox.onmouseout = function() {
        timer = setInterval(function() {
            move();
        }, 4000);
    }
    //小轮播
let aii = document.getElementById("ii");
let aio = document.getElementById("io");
let aip = document.getElementById("ip");
let xingzuan = document.getElementById("xingzuan");
let axingzuan = document.getElementById("axingzuan");
let oxingzuan = document.getElementById("oxingzuan");
aii.onclick = function() {
    aii.style.background = "#9caaee"
    aio.style.background = " #ccc"
    aip.style.background = "#ccc"
    xingzuan.style.display = "block"
    axingzuan.style.display = "none"
    oxingzuan.style.display = "none"
}
aio.onclick = function() {
    aii.style.background = "#ccc"
    aio.style.background = " #9caaee"
    aip.style.background = "#ccc"
    aio.style.background = "#9caaee"
    axingzuan.style.display = "block"
    xingzuan.style.display = "none"
    oxingzuan.style.display = "none"
}
aip.onclick = function() {
        aii.style.background = "#ccc"
        aio.style.background = "#ccc"
        aip.style.background = " #9caaee"
        aip.style.background = "#9caaee"
        oxingzuan.style.display = "block"
        xingzuan.style.display = "none"
        axingzuan.style.display = "none"
    }
    //返回顶部
window.onload = function() {
    var oTop = document.getElementById("to_top");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    oTop.style.left = screenw - oTop.offsetWidth + "px";
    oTop.style.top = screenh - oTop.offsetHeight + "px";
    window.onscroll = function() {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = screenh - oTop.offsetHeight + scrolltop + "px";
    }
    oTop.onclick = function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}

// position:sticky
var oxuanfua1 = document.getElementById("xuanfu");
oxuanfua1.style.position = 'sticky'
oxuanfua1.style.top = 0
    // document.onscroll = function() {
    //     var t = document.documentElement.scrollTop || document.body.scrollTop;
    //     console.log(t)
    //     var oxuanfua1 = document.getElementById("xuanfu");
    //     console.log(oxuanfua1);
    //     if (t >= 250) {
    //         oxuanfua1.style.position = 'fixed'
    //         oxuanfua1.style.top = 0
    //     } else {
    //         oxuanfua1.style.position = 'relative'
    //             // oxuanfua1.style.top = 0
    //     }
    // }



$('.huaguo').hover(function() {
    // console.log(222);
    console.log($(this));
    $('.tab').css({
        display: 'block'
    });
    // $('.tab').append('a');
}, function() {

})
$('.tab').hover(function() {}, function() {
        $(this).css({
            display: 'none'
        })
    })
    //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
let adrss = "http://jx.xuzhixiang.top/ap/api/productlist.php"
let oid = localStorage.getItem("id");
$.ajax({
    type: "get",
    url: adrss,
    data: {
        uid: 45103
    },
    success: function(res) {
        console.log(res);
        let arr = res.data;
        let html = ""
        $.each(arr, function(i, v) {
            html += `<li>
            <a  class="aaa" href="html/details.html?pid=${v.pid}"><img src="${v.pimg}">
                    <p class="p-1">${v.pname}</p>
                    <p class="p-2">${v.pname}</p>
                    <p class="p-3">
                        <b>￥${v.pprice}起</b>
                    </p>
                </a>
            `
        });
        console.log(html, $(".grid-1"))
        $(".grid-1").html(html);
    }
})