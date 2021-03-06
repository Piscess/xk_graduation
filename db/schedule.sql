SET NAMES UTF8;
USE xk_education;
DROP TABLE IF EXISTS e_schedule;
CREATE TABLE e_schedule (
	sid INT PRIMARY KEY AUTO_INCREMENT,
	sname VARCHAR(128) NOT NULL DEFAULT '',
    sdepartment VARCHAR(128) NOT NULL DEFAULT '',
	sclass VARCHAR(128) NOT NULL DEFAULT '',
	sclassName VARCHAR(128) NOT NULL DEFAULT '',
	sgrade VARCHAR(128) NOT NULL DEFAULT '',
	spath VARCHAR(128) NOT NULL DEFAULT '',
	shtml VARCHAR(5000) NOT NULL DEFAULT
	        '<thead>
                  <tr>
                      <td>上课时间</td>
                      <td>星期一</td>
                      <td>星期二</td>
                      <td>星期三</td>
                      <td>星期四</td>
                      <td>星期五</td>
                      <td>星期六</td>
                      <td>星期天</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>第一节</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                  </tr>
                  <tr>
                      <td>第二节</td>
                      <td>SQLSever2008设计实践</td>
                      <td></td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td></td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                  </tr>
                  <tr>
                      <td></td>
                  </tr>
                  <tr>
                      <td>第三节</td>
                      <td>SQLSever2008设计实践</td>
                      <td></td>
                      <td>SQLSever2008设计实践</td>
                      <td></td>
                      <td>SQLSever2008设计实践</td>
                      <td></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>第四节</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td>SQLSever2008设计实践</td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>晚自习</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
                </tbody>',
    expire enum('0','1') NOT NULL DEFAULT '0'
);
INSERT INTO e_schedule VALUES(
      null,
      '信科系计科1411大一第一学期',
      '信科系',
      '计科',
      '计科1411',
      '大一第一学期',
      'upload/jike141111.xlsx',
      '<thead>
          <tr>
              <td>上课时间</td>
              <td>星期一</td>
              <td>星期二</td>
              <td>星期三</td>
              <td>星期四</td>
              <td>星期五</td>
              <td>星期六</td>
              <td>星期天</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>第一节</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
          </tr>
          <tr>
              <td>第二节</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
          </tr>
          <tr>
              <td></td>
          </tr>
          <tr>
              <td>第三节</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>第四节</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>晚自习</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
        </tbody>',
        '0'
  );
  INSERT INTO e_schedule VALUES(
      null,
      '信科系计科1411大一第二学期',
      '信科系',
      '计科',
      '计科1411',
      '大一第二学期',
      'upload/jike141112.xlsx',
      '<thead>
          <tr>
              <td>上课时间</td>
              <td>星期一</td>
              <td>星期二</td>
              <td>星期三</td>
              <td>星期四</td>
              <td>星期五</td>
              <td>星期六</td>
              <td>星期天</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>第一节</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
          </tr>
          <tr>
              <td>第二节</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
          </tr>
          <tr>
              <td></td>
          </tr>
          <tr>
              <td>第三节</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>第四节</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
              <td></td>
              <td></td>
              <td>SQLSever2008设计实践</td>
              <td>SQLSever2008设计实践</td>
          </tr>
          <tr>
              <td>晚自习</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
        </tbody>',
      '0'
  );
   INSERT INTO e_schedule VALUES(
       null,
       '信科系计科1411大二第一学期',
       '信科系',
       '计科',
       '计科1411',
       '大二第一学期',
       'upload/jike141121.xlsx',
       '<thead>
           <tr>
               <td>上课时间</td>
               <td>星期一</td>
               <td>星期二</td>
               <td>星期三</td>
               <td>星期四</td>
               <td>星期五</td>
               <td>星期六</td>
               <td>星期天</td>
           </tr>
         </thead>
         <tbody>
           <tr>
               <td>第一节</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td></td>
           </tr>
           <tr>
               <td>第二节</td>
               <td>SQLSever2008设计实践</td>
               <td></td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td></td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
           </tr>
           <tr>
               <td></td>
           </tr>
           <tr>
               <td>第三节</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td></td>
               <td>SQLSever2008设计实践</td>
               <td></td>
               <td></td>
               <td></td>
           </tr>
           <tr>
               <td>第四节</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
               <td></td>
               <td></td>
               <td>SQLSever2008设计实践</td>
               <td>SQLSever2008设计实践</td>
           </tr>
           <tr>
               <td>晚自习</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
           </tr>
         </tbody>',
         '0'
   );
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系计科1310大一第一学期',
      '信科系',
      '计科',
      '计科1310',
      '大一第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系计科1310大一第二学期',
      '信科系',
      '计科',
      '计科1310',
      '大一第二学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系计科1310大二第一学期',
      '信科系',
      '计科',
      '计科1310',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大一第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大一第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大一第二学期',
      '信科系',
      '物联',
      '物联1309',
      '大一第二学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);
INSERT INTO e_schedule(sid,sname,sdepartment,sclass,sclassName,sgrade,expire) VALUES(
      null,
      '信科系物联1309大二第一学期',
      '信科系',
      '物联',
      '物联1309',
      '大二第一学期',
      '0'
);