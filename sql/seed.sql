CREATE DATABASE IF NOT EXISTS finalproj;
USE finalproj;

CREATE TABLE IF NOT EXISTS chart_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  chart_name VARCHAR(64) NOT NULL,
  label VARCHAR(128) NOT NULL,
  value INT NOT NULL
);

DELETE FROM chart_data WHERE 1=1;

INSERT INTO chart_data (chart_name,label,value) VALUES
('grants','< ', 48),
('grants',' - ', 23),
('grants',' - ', 9),
('grants','> ', 6);

INSERT INTO chart_data (chart_name,label,value) VALUES
('nsf_career','Engineering',6),
('nsf_career','Computing',4),
('nsf_career','Science',3),
('nsf_career','Arts',3),
('nsf_career','Business',2);
