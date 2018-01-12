SET NAMES UTF8;
USE xk_education;
DROP TABLE IF EXISTS e_department;
CREATE TABLE e_department (
	did INT PRIMARY KEY AUTO_INCREMENT,
	dname VARCHAR(128) NOT NULL DEFAULT ''
);
INSERT INTO e_department VALUES(null,'信科系');
INSERT INTO e_department VALUES(null,'会计系');
INSERT INTO e_department VALUES(null,'金融系');
INSERT INTO e_department VALUES(null,'英语系');
DROP TABLE IF EXISTS e_class;
CREATE TABLE e_class (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL DEFAULT '',
	department VARCHAR(128) NOT NULL DEFAULT ''
);
INSERT INTO e_class VALUES(null,'计科','信科系');
INSERT INTO e_class VALUES(null,'物联','信科系');
INSERT INTO e_class VALUES(null,'信管','信科系');
INSERT INTO e_class VALUES(null,'工商管理','会计系');
INSERT INTO e_class VALUES(null,'人力资源','会计系');
INSERT INTO e_class VALUES(null,'财务管理','会计系');
INSERT INTO e_class VALUES(null,'政治经济','金融系');
INSERT INTO e_class VALUES(null,'国际贸易','金融系');
INSERT INTO e_class VALUES(null,'企业管理','金融系');
INSERT INTO e_class VALUES(null,'英语','英语系');
DROP TABLE IF EXISTS e_className;
CREATE TABLE e_classname(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL DEFAULT '',
	class VARCHAR(128) NOT NULL DEFAULT ''
);
INSERT INTO e_classname VALUES(null,'计科1310','计科');
INSERT INTO e_classname VALUES(null,'计科1411','计科');
INSERT INTO e_classname VALUES(null,'计科1512','计科');
INSERT INTO e_classname VALUES(null,'物联1309','物联');
INSERT INTO e_classname VALUES(null,'物联1410','物联');
INSERT INTO e_classname VALUES(null,'物联1511','物联');
INSERT INTO e_classname VALUES(null,'信管1308','信管');
INSERT INTO e_classname VALUES(null,'信管1409','信管');
INSERT INTO e_classname VALUES(null,'信管1510','信管');