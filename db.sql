-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.20-0ubuntu0.16.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for sd_api
CREATE DATABASE IF NOT EXISTS `sd_api` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `sd_api`;

-- Dumping structure for table sd_api.positions
CREATE TABLE IF NOT EXISTS `positions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` char(64) NOT NULL,
  `category` enum('Development','Quality Assurance','Customer Service') NOT NULL,
  `type` char(64) NOT NULL,
  `geography` char(64) NOT NULL,
  `requirements` tinyint(4) DEFAULT NULL,
  `offerings` tinyint(4) DEFAULT NULL,
  `responsibilities` tinyint(4) DEFAULT NULL,
  `projectDescription` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table sd_api.positions: ~0 rows (approximately)
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
REPLACE INTO `positions` (`id`, `timestamp`, `name`, `category`, `type`, `geography`, `requirements`, `offerings`, `responsibilities`, `projectDescription`) VALUES
	(1, '2017-11-17 11:59:26', 'Test', 'Development', 'Fulltime', 'Kiev, Ukraine', NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;

-- Dumping structure for table sd_api.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `login` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `rank` tinyint(4) NOT NULL,
  `groupId` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table sd_api.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `timestamp`, `login`, `role`, `fullname`, `password`, `rank`, `groupId`) VALUES
	(2, '2017-08-21 17:19:21', 'admin', '', 'Root', 'Admin13', 4, 1),
	(3, '2017-08-22 10:47:52', 'test', '', 'TEST', 'pass', 1, 1),
	(5, '2017-11-17 10:32:54', 'test_admin', 'administration', 'Myfullname', '6b7a010aab872b4b6efb84138fcc3969', 4, 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
