-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.20-log - MySQL Community Server (GPL)
-- Операционная система:         Win64
-- HeidiSQL Версия:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Дамп структуры для таблица sd_api.positions
DROP TABLE IF EXISTS `positions`;
CREATE TABLE IF NOT EXISTS `positions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` char(64) NOT NULL,
  `category` enum('Development','Quality Assurance','Customer Service') NOT NULL,
  `type` char(64) NOT NULL,
  `geography` char(64) NOT NULL,
  `requirements` text,
  `offerings` text,
  `responsibilities` text,
  `projectDescription` text,
  `hot` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы sd_api.positions: ~3 rows (приблизительно)
DELETE FROM `positions`;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` (`id`, `timestamp`, `name`, `category`, `type`, `geography`, `requirements`, `offerings`, `responsibilities`, `projectDescription`, `hot`) VALUES
	(1, '2017-11-17 11:59:26', 'Front End Developer (Web)', 'Development', 'Fulltime', 'Kiev, Ukraine', '2+ years of experience in software development\nExpertise in front end development with JavaScript\nExperience with ES6 ESLint, Webpack and Babel\nExperience with React and Redux\nExperience with agile software development\nFamiliarity with continuous integration, automated testing platforms and unit tests\nProducing clean and comprehensable code', 'Competitive compensation and social packages;\nOpportunity to participate in various internal/external events (educational programs, seminars, training sessions);\nComfortable office with modern infrastructure;\nFlexible working schedule;\n21 calendar days of paid vacation, paid sick leave.', 'Build a web application based on REST API using the latest front end technologies;\nCreate a sign-in form similar to the one in the mobile app;\nAdd an ability to add friends in the desktop version;\nCreate lists and pages for multiple entities;\nCreate a feature of following places and events in profile and newsfeed;\nAdd an ability to post, comment and interact with other users.', 'asdasdasddasasdasdddddd asdasdasd asdasdasdas asdasdasd asdadasd asda sd.', 11),
	(2, '2018-01-07 19:58:08', 'Senior Back End Developer', 'Development', 'Fulltime', 'Kiev, Ukraine', '5+ years of experience in software development\nExpertise in back end development with Node.js or Python\nAbility to work with Linux servers, AWS or other cloud services\nHands-on experience in PostgreSQL or MySQL\nVery good knowledge of Git and development methodologies', 'Be part of a young growing company\nBuild great products with emerging technologies\nWork with sharp and success-oriented team\nGain experience in one of the hottest technological markets\nCompetitive compensation and social packages\nComfortable office with modern infrastructure\nFlexible working schedule\n21 calendar days of paid vacation, paid sick leave', 'Taking active part in development of various company projects in the field of cybersecurity and cryrtocurrency, a crypto-wallet in particular', 'Currently SD Solutions is looking for an experienced back end developer to become part of a unique group of experienced technologists developing products in cyber-security and cryptocurrencies. We bring together our strong expertise in various software fields to create engaging apps and software solutions.', 12),
	(3, '2018-01-27 23:13:17', 'Front End Software Architect', 'Development', 'Fulltime', 'Kiev, Ukraine', 'Fluent English\n100% Hands-On experience with such technologies as: React (2+years), Node.JS on back end, Redux, WebPack\nSource code that can be shared, preferably on GitHub, to present coding abilities\nHigher education in Computer Science with proven knowledge of: Complexity, Data Structures, Operating Systems, Networks;\nProven programming experience with TDD (Test Driven Development)\nSuccessful leading exeperience\nBackground of around 1M of code lines written throughout the programming career', 'Be part of a growing company\nBuild great products with emerging technologies\nWork with sharp and success-oriented team\nGain experience in one of the hottest technological markets\nCompetitive compensation and social packages;\nComfortable office with modern infrastructure\nFlexible working schedule\nTrips to Israel and the USA\n21 calendar days of paid vacation, paid sick leave', 'In this role you will be a main figure in the Ukrainian R&D center, providing your expertise on different stages of development of a high-distributed innovative product as well as making crucial business and technological decisions in the product perspective. ', 'Build a web application based on REST API using the latest front end technologies;\nCreate a sign-in form similar to the one in the mobile app;\nAdd an ability to add friends in the desktop version;\nCreate lists and pages for multiple entities;\nCreate a feature of following places and events in profile and newsfeed;\nAdd an ability to post, comment and interact with other users.', 0),
	(4, '2018-03-16 14:35:25', 'Front End Developer (AI)', 'Development', 'Fulltime', 'Kiev, Ukraine', '2+ years of experience in software development\nExpertise in front end development with JavaScript\nExperience with React and Redux', 'Competitive compensation and social packages\nOpportunity to participate in various internal/external events (educational programs, seminars, training sessions)\nComfortable office with modern infrastructure\nFlexible working schedule\n21 calendar days of paid vacation, paid sick leave', 'Taking active part in development of the chat bot platform, which is an innovative AI solution to automatize marketing industry', 'On behalf of Chat Leap SD Solutions is looking for an experienced Front End developer to join a great team of professionals. Chat Leap is an Israeli start-up designed for the marketing industry and supports such customers as SAAS companies (Payoneer, Dapulse), gaming companies (Mytopia, Gamepix) and many others.', 0),
	(5, '2018-03-16 14:37:23', 'Full Stack Developer (Python)', 'Development', 'Fulltime', 'Kiev, Ukraine', '2+ years of experience in software development\nExpertise in back end development in Python\nKnowledge of  JavaScript and frameworks as Angular and React', 'Be part of a young growing company\nBuild great products with emerging technologies\nWork with sharp and success-oriented team\nGain experience in one of the hottest technological markets\nCompetitive compensation and social packages\nComfortable office with modern infrastructure\nFlexible working schedule\n21 calendar days of paid vacation, paid sick leave', 'In this role you will be developing web applications for premium Israeli clients. Working as part of a distributed development team within an agile environment with a broad range of front-end and back-end systems you will be expected to contribute design, build new features, maintain existing applications, make integration tests, fix bugs and contribute to our knowledge base.', 'On behalf of 200Apps SD Solutions is looking for an experienced Full Stack developer to become part of a successful team of like-minded people and create brand-new functional and usable web and mobile applications.', 13),
	(6, '2018-03-16 14:39:02', 'Node.Js Developer', 'Development', 'Fulltime', 'Kiev, Ukraine', '2+ years of experience in software development\nExpertise in back end development with Node.js\nExperience with MongoDB and Elastic Search', 'Competitive compensation and social packages\nOpportunity to participate in various internal/external events (educational programs, seminars, training sessions)\nComfortable office with modern infrastructure\nFlexible working schedule\n21 calendar days of paid vacation, paid sick leave', 'Taking active part in development of the chat bot platform, which is an innovative AI solution to automatize marketing industry.', 'On behalf of Chat Leap SD Solutions is looking for an experienced Node.js developer to join a great team of professionals. Chat Leap is an Israeli start-up designed for the marketing industry and supports such customers as SAAS companies (Payoneer, Dapulse), gaming companies (Mytopia, Gamepix) and many others.', 3),
	(7, '2018-03-16 14:40:36', 'Full Stack Developer', 'Development', 'Fulltime', 'Kiev, Ukraine', 'Proven experience as a full stack developer for large scale websites\nAround 2 years RoR experience\nRSpec – writing unit and integration tests\nProficient HTML/CSS experience\nProven experience in Javascript\nCSS/SaSS/Less\nAttention to detail, knowledge of best practices and refactorings\nExperience with git\nRequired production experience:\nPostgresql and SQL in general\nRedis/Memcached', 'You will participate in a from-scratch development of a financial mobile application for a family use. The application is aimed at families with kids and gives parents an opportunity to supply their kids with money and track all the expenses.', 'Competitive compensation and social packages\nOpportunity to participate in various internal/external events (educational programs, seminars, training sessions)\nComfortable office with modern infrastructure\nFlexible working schedule\n21 calendar days of paid vacation, paid sick leave', 'On behalf of Roundforest SD Solutions is looking for Full Stack developer. Good understanding of performance issues. Quick doer that loves to get things done and in the same time details oriented. Self motivated, independent and seek taking responsibility and ownership over tasks.\n\nOur client is a global technology company providing online products and solutions for millions worldwide. They are an Israeli startup, which develops Big Data solutions for online websites globally. They are partners with huge e-commerce websites such as Amazon, Ebay and Walmart. As a work model, you will work and communicate directly with the development team on the client side.\n\nhttp://www.roundforest.com', 10);
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;

-- Дамп структуры для таблица sd_api.users
DROP TABLE IF EXISTS `users`;
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

-- Дамп данных таблицы sd_api.users: ~3 rows (приблизительно)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `timestamp`, `login`, `role`, `fullname`, `password`, `rank`, `groupId`) VALUES
	(2, '2017-08-21 17:19:21', 'admin', '', 'Root', 'Admin13', 4, 1),
	(3, '2017-08-22 10:47:52', 'test', '', 'TEST', 'pass', 1, 1),
	(5, '2017-11-17 10:32:54', 'test_admin', 'administration', 'Myfullname', '6b7a010aab872b4b6efb84138fcc3969', 4, 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
