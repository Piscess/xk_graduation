<?php
//1:修改响应头格式json
//2:连接数据库并且设编码
require("init.php");
//3:获取用户参数页码 pno 1 2 3
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
 $pageSize = 8;
}else{
 $pageSize = intval($_REQUEST["pageSize"]);
}
//7:查询商品表记录(图片)
$offset = ($pno-1)*$pageSize;
$sql = " SELECT lid,title,spec,price,category,expire";
$sql.= " FROM xz_laptop";
$sql.= " LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//如果SQL出错，这里会显示详细出错信息
if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
//8:查询总页数
$sql = " SELECT count(*) FROM xz_laptop";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
//总页数
$pageCount = ceil($row[0]/$pageSize);
$output = [
  "recordCount"=>$row[0],   //总记录数43
  "pageCount"=>$pageCount,  //总页数6
  "pno"=>$pno,              //当前页页码1
  "pageSize"=>$pageSize,    //当前页记录数8
  "data"=>$rows             //当前页内容[...]
];
//9:将数据转换json发送
echo json_encode($output);
