<?php
require_once("../../init.php");
function register(){
    global $conn;
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST["upwd"];
    $username=$_REQUEST['username'];
    $type=$_REQUEST["type"];
    if($type==2){
    	$ustudentNo=0;
    	$uclass="";
    	$udepartment="";
    	$uclassname="";
    	$c1=$_REQUEST['course1'];
    	$c2=$_REQUEST['course2'];
    	$c3=$_REQUEST['course3'];
    }else{
        $ustudentNo=$_REQUEST["studentNo"];
        $uclass=$_REQUEST["class"];
        $udepartment=$_REQUEST["department"];
        $uclassname=$_REQUEST["className"];
        $c1="";
        $c2="";
        $c3="";
    }
    $sql="INSERT INTO e_user VALUES(";
    $sql.="null,";
    $sql.=" '$uname',md5($upwd),'$username','$type',$ustudentNo,'$uclass','$udepartment','$uclassname','$c1','$c2','$c3' ";
    $sql.=")";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row>0){
        echo '{"code":1,"msg":"注册成功"}';
    }else{
        echo '{"code":-1,"msg":"注册失败"}';
    }

}
function login(){
    global $conn;
    $uname=$_REQUEST["uname"];
    $upwd=$_REQUEST["upwd"];
    $sql="SELECT uid,type FROM e_user WHERE uname='$uname' AND upwd=md5($upwd)";
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
}
function isLogin(){
    global $conn;
    session_start();
    @$uid=$_SESSION["uid"];
    if($uid){
        $sql="SELECT uname FROM e_user WHERE uid=$uid";
        $result=mysqli_query($conn,$sql);
        $user=mysqli_fetch_all($result,1);
        $u=$user[0]["uname"];
        $output["code"]=1;
        $output["uname"]=$u;
        echo json_encode($output);
    }else{
        $output["code"]=0;
        echo json_encode($output);
    }
}
function logout(){
	session_start();
	$_SESSION["uid"]=null;
	$_SESSION["type"]=null;
	echo '{"code":1,"msg":"请先登录"}';
}
?>