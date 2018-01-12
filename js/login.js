$(function(){
    var img=new Image();
    img.src='http://101.132.121.210/xk_graduation/img/back.png';
    img.onload = function () {
    	alert("img is loaded");
    	$(".bg").html(img);
    };
    $("#btn2").click(function(){
    	$.ajax({
    		type:"post",
    		url:"data/routes/user/login.php",
    		data:$("#form1").serialize(),
    		success:function(data){
    			if(data.code==1){
                    alert(data.msg);
                    location.href="main.html";
				}else{
                    alert(data.msg);
				}
    		},
    		error:function(){
    			alert("故障")
    		}
    	});
    });
});