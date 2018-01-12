SET NAMES UTF8;
USE xk_education;
DROP TABLE IF EXISTS e_course;
CREATE TABLE e_course (
	cid INT PRIMARY KEY AUTO_INCREMENT,
    ctitle VARCHAR(128) NOT NULL DEFAULT '',
    cuser VARCHAR(128) NOT NULL DEFAULT '',
    ispass enum('0','1') NOT NULL DEFAULT '0',
    expire enum('0','1') NOT NULL DEFAULT '0'
)