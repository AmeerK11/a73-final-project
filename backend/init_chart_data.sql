CREATE DATABASE IF NOT EXISTS finalproj;
USE finalproj;

CREATE TABLE IF NOT EXISTS chart_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  chart_name VARCHAR(64) NOT NULL,
  label VARCHAR(128) NOT NULL,
  value INT NOT NULL
);

DELETE FROM chart_data WHERE chart_name='research_awards';
INSERT INTO chart_data (chart_name,label,value) VALUES
('research_awards','Engineering',12),
('research_awards','Computing',8),
('research_awards','Science',15),
('research_awards','Arts',5),
('research_awards','Business',6);

DELETE FROM chart_data WHERE chart_name='research_funding';
INSERT INTO chart_data (chart_name,label,value) VALUES
('research_funding','Federal Grants',120),
('research_funding','State Grants',60),
('research_funding','Private Funding',90),
('research_funding','University Funds',30);
