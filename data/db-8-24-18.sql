# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.3.8-MariaDB)
# Database: collegebacker
# Generation Time: 2018-08-24 23:56:22 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table contributions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contributions`;

CREATE TABLE `contributions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  `amount` int(10) unsigned NOT NULL,
  `contributorId` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_20204d4b705d1e56c6e83acb4be` (`contributorId`),
  CONSTRAINT `FK_20204d4b705d1e56c6e83acb4be` FOREIGN KEY (`contributorId`) REFERENCES `contributors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `contributions` WRITE;
/*!40000 ALTER TABLE `contributions` DISABLE KEYS */;

INSERT INTO `contributions` (`id`, `uuid`, `createdAt`, `updatedAt`, `deletedAt`, `amount`, `contributorId`)
VALUES
	(1,'4b145e9d-3c3f-4f1a-8e0f-ae9b25aa7628','2018-08-24 01:12:16','2018-08-24 01:12:16',NULL,500,1),
	(2,'4b145e9d-3c3f-4f1a-8e0f-ae9b25aa7627','2018-01-01 00:00:00','2018-01-01 00:00:00',NULL,400,1),
	(3,'8y87687','2018-01-01 00:00:00','2018-01-01 00:00:00','2018-08-24 16:34:17',200,1),
	(4,'989877','2018-01-01 00:00:00','2018-01-01 00:00:00','2018-08-24 16:34:18',100,1),
	(5,'786897','2018-01-01 00:00:00','2018-01-01 00:00:00','2018-08-24 16:34:19',50,1),
	(6,'98979','2018-01-01 00:00:00','2018-01-01 00:00:00',NULL,40,1),
	(7,'9898798','2018-01-01 00:00:00','2018-01-01 00:00:00',NULL,30,1),
	(8,'889798','2018-01-01 00:00:00','2018-01-01 00:00:00',NULL,20,1),
	(9,'cd4ec128-b423-4219-bd01-5271574aa797','2018-08-24 16:50:14','2018-08-24 16:50:14','2018-08-24 16:50:52',323,2),
	(10,'aff3a57b-827b-425a-993b-21c526fdc039','2018-08-24 16:55:25','2018-08-24 16:55:25',NULL,150,3);

/*!40000 ALTER TABLE `contributions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table contributors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contributors`;

CREATE TABLE `contributors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  `firstName` varchar(60) NOT NULL,
  `lastName` varchar(90) DEFAULT NULL,
  `photoUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `contributors` WRITE;
/*!40000 ALTER TABLE `contributors` DISABLE KEYS */;

INSERT INTO `contributors` (`id`, `uuid`, `createdAt`, `updatedAt`, `deletedAt`, `firstName`, `lastName`, `photoUrl`)
VALUES
	(1,'76514103-3583-43e0-b2a6-554aaef8f04f','2018-08-24 01:12:16','2018-08-24 01:12:16',NULL,'Isaac','Newton','https://ds055uzetaobb.cloudfront.net/image_optimizer/fcef2ed12b562470c014dcd676957216987912af.jpg'),
	(2,'d6866dcc-64ef-45e2-a572-1b09e77d6fdc','2018-08-24 16:50:14','2018-08-24 16:50:14',NULL,'aa','bb','vvv'),
	(3,'8d1e0b24-292c-4653-a247-2e7bfbe6713a','2018-08-24 16:55:25','2018-08-24 16:55:25',NULL,'Blaise','Pascal','https://dailyasianage.com/library/1534621400_5.jpg');

/*!40000 ALTER TABLE `contributors` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
