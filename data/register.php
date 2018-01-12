<?php
require("init.php");
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST["upwd"];
$type=$_REQUEST["type"];
if($type==2){
	$ustudentNo=0;
	$uclass="";
	$udepartment="";
	$uclassname="";
}else{
    $ustudentNo=$_REQUEST["studentNo"];
    $uclass=$_REQUEST["class"];
    $udepartment=$_REQUEST["department"];
    $uclassname=$_REQUEST["className"];
}
$sql="INSERT INTO e_user VALUES(";
$sql.="null,";
$sql.=" '$uname','$upwd','$type',$ustudentNo,'$uclass','$udepartment','$uclassname'";
$sql.=")";
$result=mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row>0){
    echo '{"code":1,"msg":"注册成功"}';
}else{
    echo '{"code":-1,"msg":"注册失败"}';
}
?>