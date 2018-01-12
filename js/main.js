$(()=>{

   $.ajax({
       type:"GET",
       url:"data/routes/main/mainload.php",
       success:function (data) {
           //console.log(data);
           $("#logout_btn").click(function(){
               $.ajax({
                   type:"POST",
                   url:"data/routes/user/logout.php",
                   success:function(data){
                       alert(data.msg);
                       location.href="index.html";
                   },
                   error:function(){
                       alert("故障");
                   }
               });
           });

           var html="";
           if(data.type==0){
               html+=`<ul class="nav navbar-nav">
		                <li><a href="#">课程表管理</a></li>
		                <li><a href="#"  data-toggle="modal" data-target="#applyModal">教室申请处理</a></li>
		            </ul>`;
                $("#my-menu").html(html);
                $("#tit1").html("管理员信息");
               var sche=data.schedules;
               var departs=data.departments;
                html=`
				<ul class="list-inline">
					<li class="col-md-4 col-sm-6 col-xs-12">姓名:${data.uname}</li>
					<li class="col-md-4 col-sm-6 col-xs-12">类型:管理员</li>
					<li class="col-md-4 col-sm-6 col-xs-12">邮箱:xiaoc.cc@qq.com</li>
				</ul>`;
			    $("#demo1>div").html(html);//demo01的html内容
				html=`
  					<div class="form-group center-block col-md-3 col-xs-12 text-center">
	  						<label for="department">请选择系别:</label>
							<select class="form-control" id="department" name="department">
							  <option>--请选择--</option>`;
                for(var depart of departs){
                    html+=`<option value="${depart.dname}">${depart.dname}</option>`
                };
                html+=`</select>
					</div>
					<div class="form-group center-block col-md-3 col-xs-12 text-center">
	  						<label for="class">请选择班级:</label>
							<select class="form-control" id="class" name="class">
							  <option>--请选择--</option>
							</select>
					</div>
					<div class="form-group center-block col-md-3 col-xs-12 text-center">
	  						<label for="className">请选择年级:</label>
							<select class="form-control" id="className" name="className">
							  <option>--请选择--</option>
							</select>
					</div>
					<div class="form-group row center-block col-md-1 col-xs-6 text-center">
						<input type="button" class="btn btn-info" value="查询" id="check_btn" />
					</div>
					<div class="form-group row center-block col-md-1 col-xs-6 text-center">
						<input type="button" class="btn btn-info" data-toggle="modal" data-target="#insertModal" value="添加" />
					</div>
				`;
                $("#checkschedule").html(html);
                html=`<tr>
                    <td>编号</td>
                    <td>课程表名称</td>
                    <td>操作</td>
                 </tr>`;//表格标题
                $("#t1>thead").html(html);
                html="";
                for(var i=0;i<sche.length;i++){
                      var docName=sche[i].spath.slice(7);
                      //console.log(sche[i].spath);
                      html+=`<li><a href="${sche[i].spath}">${docName}</a></li>`;
                }
                $("#dllist").html(html);
			//按年级班级系别查询
                var checkmsg=[];//设置空数组接收查询条件
                $("#department").change(function(){
                   //console.log($("#department").val());
                   checkmsg[0]=$("#department").val();
                    //console.log(checkmsg);
                   if($("#department").val()=="--请选择--"){
                       $("#class").html("<option>--请选择--</option>");
                   }
                   $.ajax({
                       type:"GET",
                       url:"data/routes/main/class_choose.php",
                       data:{department:$("#department").val()},
                       success:function(data){
                           var html="<option>--请选择--</option>";
                           for(var cl of data){
                               html+=`
                                <option value="${cl.name}">${cl.name}</option>
                               `;
                           }
                           $("#class").html(html);
                       },
                       error:function(){
                           alert("故障");
                       }
                   })
                });
                $("#class").change(function(){
                   //console.log($("#class").val());
                   checkmsg[1]=$("#class").val();
                    //console.log(checkmsg);
                   if($("#class").val()=="--请选择--"){
                       $("#className").html("<option>--请选择--</option>");
                   }
                   $.ajax({
                       type:"GET",
                       url:"data/routes/main/className_choose.php",
                       data:{class:$("#class").val()},
                       success:function(data){
                           var html="<option>--请选择--</option>";
                           for(var cN of data){
                               html+=`
                            <option value="${cN.name}">${cN.name}</option>
                           `;
                           }
                           $("#className").html(html);
                       },
                       error:function(){
                           alert("故障");
                       }
                   })
                });
                $("#className").change(function(){
                    checkmsg[2]=$("#className").val();
                    //console.log(checkmsg);
                });
                $("#check_btn").click(function (e) {
                    e.preventDefault();
                    $.ajax({
                       type:"GET",
                       url:"data/routes/main/maincheck.php",
                       data:{department:checkmsg[0],class:checkmsg[1],className:checkmsg[2]},
                       success:function(data){
                           var html="";
                           for(var i=0;i<data.length;i++){
                               html+=`
                                    <tr>
                                        <td>${data[i].sid}</td>
                                        <td>${data[i].sname}</td>
                                        <td>
                                            <a href="${sche[i].sid}" class="btn-detail">查看</a>
                                            <a href="${sche[i].sid}" class="btn-update">更改</a>
                                            <a href="${sche[i].sid}" class="btn-del">删除</a>
                                        </td>
                                    </tr>
                                `;
                           }
                           $("#tbody1").html(html);
                           html="";
                           for(var i=0;i<data.length;i++){
                               var docName=data[i].spath.slice(7);
                               html+=`<li><a href="${data[i].spath}">${docName}</a></li>`;
                           }
                           $("#dllist").html(html);
                       },
                       error:function(){
                           alert("故障");
                       }
                    });
                });
               loadProductByPage(1,10);
                //教室申请
               html=`<thead>
							<tr>
								<td>申请内容</td>
								<td>进程</td>
							</tr>
						</thead>
                        <tbody id="aF_tbody">
                        </tbody>
                `;
               $("#applyFor_table").html(html);
               $('#applyModal').on('show.bs.modal', function () {
                   $.get("data/routes/main/applyFor_admin.php",function(data){
                       var html="";
                       for(var msg of data){
                           html+=`
                            <tr>
                                <td>${msg.ctitle}</td>
                                <td>
                                    <button class="btn btn-default ps" data-cid="${msg.cid}">批准</button>
                                    <button class="btn btn-default nops" data-cid="${msg.cid}">拒绝</button>
                                </td>
                            </tr>
                           `;
                           console.log(html);
                       }
                       $("#aF_tbody").html(html);
                   });
               });
            }else if(data.type==1){
               var user=data.user;
               console.log(user);
               html=`
				<ul class="list-inline">
					<li class="col-md-4 col-sm-6 col-xs-12">姓名:${user['username']}</li>
					<li class="col-md-4 col-sm-6 col-xs-12">年级:${user['uclass']}</li>
					<li class="col-md-4 col-sm-6 col-xs-12">系别:${user['udepartment']}</li>
					<li class="col-md-4 col-sm-6 col-xs-12">班级:${user['uclassname']}</li>
					<li class="col-md-4 col-sm-6 col-xs-12">学号:${user['ustudentNo']}</li>
					<li class="col-md-4 col-sm-6 col-xs-12">类型:学生</li>
				</ul>`;
               $("#demo1>div").html(html);
               html=`
                <div class="form-group">
	  						<label for="grade">请选择课程:</label>
							<select class="form-control" id="grade" name="grade" data-className="${user['uclassname']}">
								<option>--请选择--</option>
								<option value="大一第一学期">大一上半学期</option>
								<option value="大一第二学期">大一下半学期</option>
								<option value="大二第一学期">大二上半学期</option>
								<option value="大二第二学期">大二下半学期</option>
								<option value="大三第一学期">大三上半学期</option>
								<option value="大三第二学期">大三下半学期</option>
								<option value="大四第一学期">大四上半学期</option>
								<option value="大四第二学期">大四下半学期</option>
							</select>
                </div>
               `;
               $("#checkschedule").html(html);
               $("#t1").html(data.schedule);
               var sche=data.path;
               html="";
               for(var i=0;i<sche.length;i++){
                   var docName=sche[i].spath.slice(7);
                   //console.log(sche[i].spath);
                   html+=`<li><a href="${sche[i].spath}">${docName}</a></li>`;
               }
               $("#dllist").html(html);
               $("#grade").change(function(){
                   var checkmsg=$("#grade").val();
                   var className=$("#grade").attr("data-className");
                   console.log(checkmsg);
                   $.ajax({
                       type:"GET",
                       url:"data/routes/main/stu_check.php",
                       data:{grade:checkmsg,className:className},
                       success:function(data){
                           $("#t1").html(data.shtml);
                       },
                       error:function(){
                           alert("网络故障");
                       }
                   })
               });
           }else if(data.type==2){
               html+=`<ul class="nav navbar-nav">
		                <li><a href="#">课程表</a></li>
		                <li><a href="#" data-toggle="modal" data-target="#applyModal">教室申请</a></li>
		            </ul>`;
               $("#my-menu").html(html);
               var user=data.data;
               console.log(user);
               html=`
				<ul class="list-inline">
					<li class="col-md-4 col-sm-6 col-xs-12">姓名:${user['username']}</li>
					<li class="col-md-4 col-sm-6 col-xs-12">类型:老师</li>
				</ul>`;
               //console.log(html);
               $("#demo1>div").html(html);
               html=`
                <div class="form-group">
	  						<label for="course">请选择课程:</label>
							<select class="form-control" id="course" name="course" data-username="${user['username']}">
								<option>--请选择--</option>
								<option value="${user['course1']}">${user['course1']}</option>
								<option value="${user['course2']}">${user['course2']}</option>
								<option value="${user['course3']}">${user['course3']}</option>
							</select>
                </div>
               `;
               $("#checkschedule").html(html);
               $("#t1").html(data.html);
               var sche=data.path;
               html="";
               for(var i=0;i<sche.length;i++){
                   var docName=sche[i].spath.slice(7);
                   //console.log(sche[i].spath);
                   html+=`<li><a href="${sche[i].spath}">${docName}</a></li>`;
               }
               $("#dllist").html(html);
               $("#course").change(function(){
                   var checkmsg=$("#course").val();
                   var username=$("#course").attr("data-username");
                   console.log(checkmsg);
                   $.ajax({
                       type:"GET",
                       url:"data/routes/main/tea_check.php",
                       data:{name:checkmsg,username:username},
                       success:function(data){
                           $("#t1").html(data.shtml);
                       },
                       error:function(){
                           alert("网络故障");
                       }
                   })
               });
               // 教室申请 data-username="${user['username']}
               html=`<thead>
							<tr>
								<td>申请内容</td>
								<td>进程</td>
							</tr>
						</thead>
                        <tbody id="aF_tbody">
                        </tbody>
                `;
               $("#applyFor_table").html(html);
               html=`<form action="#" data-username="${user['username']}" id="course">
						<div class="form-group">
							<label for="applyFor_title">申请内容:</label>
							<input type="text" id="applyFor_title" name="applyFor_title" class="form-control" />
						</div>
					 </form>
					`;
               $("#applyFor_form").html(html);
               $('#applyModal').on('show.bs.modal', function () {
                   var un=$("#course").attr("data-username");
                    $.get("data/routes/main/applyFor_search.php",{un:un},function(data){
                       var html="";
                       for(var msg of data){
                           if(msg.ispass==0){
                               var ispass="正在审核";
                           }else if(msg.ipass==1){
                               var ispass="已通过";
                           }else{
                               var ispass="被拒绝";
                           }
                           html+=`
                            <tr>
                                <td>${msg.ctitle}</td>
                                <td>${ispass}</td>
                            </tr>
                           `;
                           console.log(html);
                       }
                        $("#aF_tbody").html(html);
                    });
               });
               $("#aF_btn").click(function(){
                   var username=$("#course").attr("data-username");
                   var msg=$("#applyFor_title").val();
                   $.post("data/routes/main/applyFor.php",{msg:msg,un:username},function(data){
                      if(data.code==1){
                          alert(data.msg);
                          location.reload();
                      }else {
                          alert(data.msg);
                      }
                   });
               })
           }
       },
       error:function () {
           alert("网络故障");
       }
   })
});

//分页
function loadProductByPage(pno,pageSize) {
    //*1:发送ajax请示获取当前页数据内容
    //*2:获取返回结果数据
    $.ajax({
        type: "GET",
        url: "data/routes/main/mainload.php",
        data: {pno: pno, pageSize: pageSize},
        success: function (data) {
            console.log(1);
            console.log(data);
            //*3:动态创建表格中多行 id="tbody1"
            var sche=data.schedules;
            var html = "";
            for (var i = 0; i < sche.length; i++) {
                html += `
                    <tr>
                        <td>${sche[i].sid}</td>
                        <td>${sche[i].sname}</td>
                        <td>
                            <a href="${sche[i].sid}" data-pno="${data.pno}" class="btn-detail">查看</a>
                            <a href="${sche[i].sid}" data-pno="${data.pno}" class="btn-update">更改</a>
                            <a href="${sche[i].sid}" data-pno="${data.pno}" class="btn-del">删除</a>
                        </td>
                    </tr>
                `;
            }
            $("#tbody1").html(html);
            var html = "";
//上上一页
            if(data.pno-2>0){
                html += `<li><a href="#">${data.pno-2}</a></li>`;
            }
//上一页 10:53--11:03
            if(data.pno-1>0){
                html += `<li><a href="#">${data.pno-1}</a></li>`;
            }
//当前页
            html += `<li class="active"><a href="#">${data.pno}</a></li>`;
//下一页
            if(data.pno+1<=data.pageCount){
                html += `<li><a href="#">${data.pno+1}</a></li>`;
            }
//下下一页
            if(data.pno+2<=data.pageCount){
                html += `<li><a href="#">${data.pno+2}</a></li>`;
            }
            $("#pagination").html(html);
        }//for end
    })
}

$("#pagination").on("click","li a",function(e){
    //console.log(1);
    //阻止事件默认行为
    e.preventDefault();//a submit 都要阻止默认行为
    //console.log(2);
    //获取当元素页码
    var pno = $(this).html();
    //console.log(3+pno);
    //不同页码调用 loadProductByPage()
    loadProductByPage(pno,10);
});

$(".detail").on("click","a",function(e){
    e.preventDefault();
    $(".detail").hide();
});
$(".detail").on("click","button",function(e){
    e.preventDefault();
    $(".detail").hide();
});
$("#tbody1").on("click","a.btn-detail",function(e){
   e.preventDefault();
   //console.log(1);
   var sid = $(this).attr("href");
   //console.log(2);
  //console.log(sid);
   $(".detail").show();
   $.ajax({
       type:"GET",
       url:"data/routes/main/maindetail.php",
       data:{sid:sid},
       success:function(data) {
           //console.log(3);
           $(".detail>p").html(data.sname+"课程表");
           $("#admin_sche").html(data.shtml);
       },
       error:function(){
           //json接错 php语法  404
           alert("网络故障请检查..");
       }
   })
});

$(".update").on("click","a",function(e){
    e.preventDefault();
    $(".update").hide();
});
$("#tbody1").on("click","a.btn-update",function(e) {
    e.preventDefault();
    //console.log(1);
    var sid = $(this).attr("href");
    //console.log(2);
    //console.log(sid);
    $(".update").show();
    $.ajax({
        type:"GET",
        url:"data/routes/main/maindetail.php",
        data:{sid:sid},
        success:function(data) {
            //console.log(3);
            $(".update>p").html(data.sname+"课程表");
            $("#update_sche").html(data.shtml);
            $("#update_sche").attr("data-sid",data.sid);
        },
        error:function(){
            //json接错 php语法  404
            alert("网络故障请检查..");
        }
    })
});
let ori="";
$("#update_sche").on("click","td",function(e){
    if($(e.target).html()==""){
        let html=`<input type="text" class="update_input" autofocus /> `;
        $(e.target).html(html);
        $(e.target).on("blur",".update_input",function(e){
            let msg=$(e.target).val();
            if(msg==""){
                $(e.target).parent().html("");
            }else{
                $(e.target).parent().html(msg);
            }
        });
    }else{
        //console.log(ori);
        ori=$(e.target).html();
        //console.log(ori);
        let html=`<input type="text" class="update_input" autofocus />`;
        $(e.target).html(html);
        $(e.target).on("blur",".update_input",function(e){
            let msg=$(e.target).val();
            if(msg==""){
                $(e.target).parent().html(ori);
                ori="";
            }else{
                $(e.target).parent().html(msg);
            }
        });
    }
});
$(".update").on("click","button",function(e){
    e.preventDefault();
    var update=$("#update_sche").html();
    var sid=$("#update_sche").attr("data-sid");
    //console.log(update);
    $.ajax({
        type:"GET",
        url:"data/routes/main/mainupdate.php",
        data:{update:update,sid:sid},
        success:function(data) {
           alert(data.msg);
        },
        error:function(){
            //json接错 php语法  404
            alert("网络故障请检查..");
        }
    })
});
// 删除
$("#tbody1").on("click","a.btn-del",function(e){
    e.preventDefault();
    var rs = window.confirm("是否删除该商品");
    if(!rs){
        return;
    }
    var sid = $(this).attr("href");
    var pno = $(this).data("pno");
    $.ajax({
        type:"POST",
        url:"data/routes/main/maindel.php",
        data:{sid:sid},
        success:function(data){
            if(data.code>0){
                alert(data.msg);
                loadProductByPage(pno,10);
            }else{
                alert(data.msg);
            }
        },
        error:function(){
            //404 json php语法出错
            alert("网络故障请检查");
        }

    });
});

//上传
$("#upload").click(function(){
    $("#xlsx-upload").click();
});
var file = $("#xlsx-upload");
file.on('change', function( e ){
    var fileInfo = e.currentTarget.files[0].name;
    $("#up-routes").val(fileInfo);
    //console.log(fileInfo);
});
$("#up-btn").click(function () {
    var incl=$("#in_className").val(),
        grade=$("#in_grade").val();
    if(incl==""){
        alert("请先填写班级");
        return;
    }else if(grade==""){
        alert("请先填写年级");
        return;
    }
    var fileInfo = document.getElementById("xlsx-upload").files;
    //console.log(fileInfo[0].type);
    var rs = fileInfo[0].type.indexOf("application");
    if(rs==-1){
        alert("只能上传表格格式的文件");
        return;
    }
    var size = Math.ceil(fileInfo[0].size/1024);
    if(size>2048){
        alert("上传表格太大，不能超过2MB");
        return;
    }
    var fd = new FormData();
    fd.append("myxlsx",fileInfo[0]);
    fd.append("className",incl);
    fd.append("grade",grade);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            var res=JSON.parse(xhr.responseText);
            console.log(res);
            $("#in_btn").attr("data-sid",res.sid);
        }
    };
    xhr.open("POST","data/upload.php",true);
    xhr.setRequestHeader("X-Requested-With",
        "XMLHttpRequest");
    xhr.send(fd);
});
//添加-表格输入
$("#insert_sche").on("click","td",function(e){
    var html=`<input type="text" class="update_input" autofocus="autofocus"/>`;
    $(e.target).html(html);
    $(".update_input").blur(function(){
        var msg=$(".update_input").val();
        $(e.target).html(msg);
    });
});

// 添加-提交按钮
$("#in_btn").click(function(e){
    if($("#in_btn").attr("data-sid")){
        e.preventDefault();
        var sid=$("#in_btn").attr("data-sid"),
            department=$("#in_department").val(),
            sclass=$("#in_class").val(),
            shtml=$("#insert_sche").html(),
            sclassName=$("#in_className").val(),
            sgrade=$("#in_grade").val(),
            sname=department+sclassName+sgrade;
        $.ajax({
            type:"POST",
            url:"data/routes/main/maininsert.php",
            data:{sid:sid,sname:sname,department:department,class:sclass,shtml:shtml},
            success:function(data){
                alert(data.msg);
            },
            error:function(){
                alert("故障")
            }
        })
    }
});

// 申请处理
$("#applyFor_table").on("click","button.ps",function (e) {
    e.preventDefault();
    var cid=$(e.target).attr("data-cid");
    $.post("data/routes/main/aF_pass.php",{cid:cid},function(data){
        if(data.code){
            $(e.target).parent().html("已通过");
        }
    });
});
$("#applyFor_table").on("click","button.nops",function (e) {
    e.preventDefault();
    var cid=$(e.target).attr("data-cid");
    $.post("data/routes/main/aF_unpass.php",{cid:cid},function(data){
        if(data.code){
            $(e.target).parent().html("已拒绝");
        }
    });
});