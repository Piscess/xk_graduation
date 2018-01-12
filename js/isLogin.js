$(()=>{
    $.ajax({
        type:"GET",
        url:"data/routes/user/isLogin.php",
        success:function (data) {
            console.log(data);
            if(data.code==1){
                $("#userName").html("欢迎&nbsp;"+data.uname);
            }else{
                location.href="index.html";
            }
        },
        error:function () {
            alert("网络故障");
        }
    });
});