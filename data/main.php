<?php
    require_once("init.php");
	session_start();
	@$type=$_SESSION["type"];
	@$uid=$_SESSION["uid"];
	if($type==0){
	    $sql="SELECT uname FROM e_user WHERE uid=$uid";
	    $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_assoc($result);
        $row["type"]=$type;
        echo json_encode($row);
	}

