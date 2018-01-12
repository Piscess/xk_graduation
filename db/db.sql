SET NAMES UTF8;
DROP DATABASE IF EXISTS xk_education;
CREATE DATABASE xk_education CHARSET UTF8;
USE xk_education;
#用户表 用户名 密码 姓名 权限 学号 年级 系别 班级
CREATE TABLE e_user (
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32) NOT NULL DEFAULT '',
	upwd VARCHAR(32) NOT NULL DEFAULT '',
	username VARCHAR(32) NOT NULL DEFAULT '',
	type ENUM('2','1','0') NOT NULL DEFAULT '1',
	ustudentNo INT NOT NULL,
	uclass VARCHAR(32) NOT NULL DEFAULT '',
	udepartment VARCHAR(32) NOT NULL DEFAULT '',
	uclassname  VARCHAR(32) NOT NULL DEFAULT '',
	course1 VARCHAR(32) NOT NULL DEFAULT '',
	course2 VARCHAR(32) NOT NULL DEFAULT '',
	course3 VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO e_user(uid,uname,upwd,type) VALUES(null,'xk',md5(123456),'0');