<?php
require_once("../../init.php");
function mainload(){
    global $conn;
    session_start();
    @$type=$_SESSION["type"];
    @$uid=$_SESSION["uid"];
    if($type==0){
        @$pno = $_REQUEST["pno"];
        //4:判断如果用户没有指定页码 pno=1
        if(!$pno){
         $pno = 1;
        }else{
         $pno = intval($_REQUEST["pno"]);
        }
        //5:获取用户指定一页中记录数 pageSize
        @$pageSize = $_REQUEST["pageSize"];
        //6:如果如果没有指定记录     pageSize=8
        if(!$pageSize){
         $pageSize = 10;
        }else{
         $pageSize = intval($_REQUEST["pageSize"]);
        }
        //7:查询商品表记录(图片)
        $offset = ($pno-1)*$pageSize;
        $sql = " SELECT sid,sname,spath";
        $sql.= " FROM e_schedule WHERE expire='0'";
        $sql.= " LIMIT $offset,$pageSize";
        $result = mysqli_query($conn,$sql);
        $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
        //如果SQL出错，这里会显示详细出错信息
        if(mysqli_error($conn)){
           echo mysqli_error($conn);
        }
        //8:查询总页数
        $sql = " SELECT count(*) FROM e_schedule";
        $result = mysqli_query($conn,$sql);
        $count = mysqli_fetch_row($result);
        //总页数
        $pageCount = ceil($count[0]/$pageSize);
        $sql="SELECT uname FROM e_user WHERE uid=$uid";
        $result=mysqli_query($conn,$sql);
        $uname=mysqli_fetch_assoc($result);
//        $sql="SELECT sid,sname,spath FROM e_schedule";
//        $result=mysqli_query($conn,$sql);
//        $schedules=mysqli_fetch_all($result,MYSQLI_ASSOC);
//        $row["schedules"]=$schedules;
        $sql="SELECT dname FROM e_department";
        $result=mysqli_query($conn,$sql);
        $departments=mysqli_fetch_all($result,MYSQLI_ASSOC);
        $row["departments"]=$departments;
        $row=[
          "recordCount"=>$count[0],   //总记录数
          "pageCount"=>$pageCount,  //总页数
          "pno"=>$pno,              //当前页页码
          "pageSize"=>$pageSize,    //当前页记录数
          "schedules"=>$rows,      //当前页内容[...]
          "departments"=>$departments,
          "uname"=>$uname["uname"],
          "type"=>$type
        ];
        echo json_encode($row);
    }else if($type==1){
        $sql="SELECT username,uclass,udepartment,uclassname,ustudentNo FROM e_user WHERE uid=$uid";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_assoc($result);
        $className=$row["uclassname"];
        $sql="SELECT shtml,spath FROM e_schedule WHERE sclassName='$className' ";
        $result=mysqli_query($conn,$sql);
        $data=mysqli_fetch_all($result,MYSQLI_ASSOC);
        $output=[
            "user"=>$row,
            "type"=>$type,
            "schedule"=>$data[0]["shtml"],
            "path"=>$data
        ];
        echo json_encode($output);
    }else if($type==2){
        $sql="SELECT username,course1,course2,course3 FROM e_user WHERE uid=$uid";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_assoc($result);
        $msg=$row["username"];
        $sql="SELECT shtml,spath FROM e_schedule WHERE sname LIKE '%$msg%' AND expire='0' ";
        $result=mysqli_query($conn,$sql);
        $html=mysqli_fetch_all($result,MYSQLI_ASSOC);;
        $output=[
            "data"=>$row,
            "html"=>$html[0]["shtml"],
            "path"=>$html,
            "type"=>$type
        ];
        echo json_encode($output);
    }
}
function class_choose(){
    global $conn;
    @$department=$_REQUEST['department'];
    $sql="SELECT name FROM e_class WHERE department='$department'";
    $result=mysqli_query($conn,$sql);
    $names=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($names);
}
function className_choose(){
    global $conn;
    @$class=$_REQUEST['class'];
    $sql="SELECT name FROM e_classname WHERE class='$class'";
    $result=mysqli_query($conn,$sql);
    $classNames=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($classNames);
}
function maincheck(){
    global $conn;
    @$dm=$_REQUEST['department'];
    @$cl=$_REQUEST['class'];
    @$cN=$_REQUEST['className'];
    if(!$cl){
        $sql="SELECT sid,sname,spath FROM e_schedule WHERE sdepartment='$dm'";
        $result=mysqli_query($conn,$sql);
        $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($rows);
    }else if(!$cN){
        $sql="SELECT sid,sname,spath FROM e_schedule WHERE sclass='$cl'";
        $result=mysqli_query($conn,$sql);
        $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($rows);
    }else{
        $sql="SELECT sid,sname,spath FROM e_schedule WHERE sclassName='$cN'";
        $result=mysqli_query($conn,$sql);
        $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($rows);
    }
}
function maindetail(){
    global $conn;
    @$sid=$_REQUEST["sid"];
    $sql="SELECT sid,sname,shtml FROM e_schedule WHERE sid=$sid";
    $result=mysqli_query($conn,$sql);
    $html=mysqli_fetch_assoc($result);
    echo json_encode($html);
}
function mainupdate(){
    global $conn;
    @$update=$_REQUEST["update"];
    @$sid=$_REQUEST["sid"];
    $sql="UPDATE e_schedule SET shtml='$update' WHERE sid=$sid";
    $result=mysqli_query($conn,$sql);
    $row = mysqli_affected_rows($conn);
    if($row>0){
     echo '{"code":1,"msg":"更新成功"}';
    }else{
     echo '{"code":-1,"msg":"更新失败"}';
    }
}
function maindel(){
    global $conn;
    $sid = $_REQUEST["sid"];
    $sql = " UPDATE e_schedule SET expire='1'";
    $sql .= " WHERE sid = $sid";
    $result = mysqli_query($conn,$sql);
    if(mysqli_error($conn)){
      echo mysqli_error($conn);
    }
    $rows = mysqli_affected_rows($conn);
    if($rows>0){
     echo '{"code":1,"msg":"删除成功"}';
    }else{
     echo '{"code":-1,"msg":"删除失败"}';
    }
}
function maininsert(){
    global $conn;
    $sid = $_REQUEST["sid"];
    $sname=$_REQUEST["sname"];
    $sdm=$_REQUEST['department'];
    $scl=$_REQUEST['class'];
    $html=$_REQUEST['shtml'];
    $sql="UPDATE e_schedule SET sname='$sname',sdepartment='$sdm',sclass='$scl',shtml='$html' WHERE sid=$sid ";
    $result = mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row>0){
     echo '{"code":1,"msg":"提交成功"}';
    }else{
     echo '{"code":-1,"msg":"提交失败"}';
    }
}
function stu_check(){
    global $conn;
    $grade=$_REQUEST['grade'];
    $className=$_REQUEST['className'];
    $sql="SELECT shtml FROM e_schedule WHERE sgrade='$grade' AND sclassName='$className' ";
    $result=mysqli_query($conn,$sql);
    $html=mysqli_fetch_assoc($result);
    echo json_encode($html);
}
function tea_check(){
    global $conn;
    $name=$_REQUEST['name'];
    $username=$_REQUEST['username'];
    $sql="SELECT shtml FROM e_schedule WHERE sname LIKE '%$name%' AND sname LIKE '%$username%'";
    $result=mysqli_query($conn,$sql);
    $html=mysqli_fetch_assoc($result);
    echo json_encode($html);
}
function applyFor(){
    global $conn;
    $msg=$_REQUEST['msg'];
    $un=$_REQUEST['un'];
    $sql="INSERT INTO e_course(cid,ctitle,cuser) VALUES(null,'$msg','$un')";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row>0){
        echo '{"code":1,"msg":"提交成功,请等待管理员处理"}';
    }else{
        echo '{"code":-1,"msg":"提交失败"}';
    }
}
function applyFor_search(){
    global $conn;
    @$un=$_REQUEST['un'];
    $sql="SELECT ctitle,ispass FROM e_course WHERE cuser='$un' AND expire='0' ";
    $result=mysqli_query($conn,$sql);
    $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($rows);
}
function applyFor_admin(){
    global $conn;
    $sql="SELECT cid,ctitle FROM e_course WHERE ispass='0' AND expire='0' ";
    $result=mysqli_query($conn,$sql);
    $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($rows);
}
function aF_pass(){
    global $conn;
    @$cid=$_REQUEST['cid'];
    $sql="UPDATE e_course SET ispass='1' WHERE cid=$cid ";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row>0){
        echo '{"code":1}';
    }else{
        echo '{"code":-1}';
    }
}
function aF_unpass(){
    global $conn;
    @$cid=$_REQUEST['cid'];
    $sql="UPDATE e_course SET ispass='2' WHERE cid=$cid ";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row>0){
        echo '{"code":1}';
    }else{
        echo '{"code":-1}';
    }
}
