<?php
    require_once("init.php");
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
?>