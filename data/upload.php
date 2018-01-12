<?php
  require("init.php");
  //1.0 如果上传文件数组为空，出错  empty($_FILES)
  $rs = empty($_FILES);
  if($rs){
    die('{"code":-1,"msg":"没有上传文件请检查"}');
  }
//(1)上传图片
  //1.1:获取上传文件名文件大小
  $xlsxname =  $_FILES["myxlsx"]["name"];
  $xlsxsize =  ceil($_FILES["myxlsx"]["size"]/1024);
  //1.2:判断大小/判断类型 2048==2MB
  if($xlsxsize>2048){
   die('{"code":-2,"msg":"上传文件不能直过2MB"}');
  }
  $type = strstr($xlsxname,".");
  if($type!=".xlsx" && $type!=".xls"){
   die('{"code":-3,"msg":"上传格式不正确"}');
  }
  //1.3:生成新文件名
  $filename = $xlsxname;
  //1.4:移动
  $src = $_FILES["myxlsx"]["tmp_name"];
  $des = "../upload/".$filename;
  move_uploaded_file($src,$des);


//(3)将数据信息添加数据库 e_schedule
//   3.1:获取商品编号
 $className=$_REQUEST['className'];
 $grade=$_REQUEST['grade'];

 $xlsx= "upload/".$filename;
 //3.4:如果没有添加
 $sql = " INSERT INTO e_schedule(sid,sclass,sgrade,spath) VALUES(null,";
 $sql .= " '$className','$grade','$xlsx')";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_affected_rows($conn);
 if($row >0){
    $sql = "SELECT sid FROM e_schedule WHERE spath='$xlsx'";
    $result = mysqli_query($conn,$sql);
    $sid = mysqli_fetch_assoc($result);
    echo '{"code":1,"msg":"上传成功","sid":'.$sid["sid"].'}';
 }else{
    echo '{"code":-1,"msg":"上传失败"}';
 }


