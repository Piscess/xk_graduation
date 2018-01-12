<?php
require('init.php');
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
$sql="SELECT uid,type FROM e_user WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
 if($row===null){
   echo '{"code":-1,"msg":"用户名或密码错误"}';
 }else{
	session_start();
	$_SESSION["type"]=$row["type"];
	$_SESSION["uid"]=$row["uid"];
	echo '{"code":1,"msg":"登录成功"}';
 }
?>