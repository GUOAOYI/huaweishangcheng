$(function() {

    $("#btn1").click(function() {
        console.log($("#username").val(),
            $("#password").val());
        $.ajax({
            type: "get",
            url: "http://jx.xuzhixiang.top/ap/api/reg.php",
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            },
            // dataType: "json",
            success: function(response) {
                console.log(response);
                if (response.code == 1) {
                    alert("注册成功")
                    window.location.href = "../html/denglu.html";
                } else {
                    alert("用户名已注册")
                }
            },
        });
    })
})