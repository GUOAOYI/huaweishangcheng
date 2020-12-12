console.log(11111);
$(function() {

    $("#btn2").click(function() {
        $.ajax({
            type: "get",
            url: "http://jx.xuzhixiang.top/ap/api/login.php",
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            },
            dataType: "json",
            success: function(response) {
                if (response.code == 1) {
                    alert("登陆成功")
                    window.location.href = "../index.html";
                } else {
                    alert("请检查用户名或密码")
                }
            },
        });
    })
})