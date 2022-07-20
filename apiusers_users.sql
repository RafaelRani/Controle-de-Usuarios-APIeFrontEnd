CREATE DATABASE  IF NOT EXISTS `apiusers` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `apiusers`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: apiusers
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `role` int(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'adm@gmail.com','$2b$10$hM4GJMU9f3JfThk1oaF2Lua91bFbJ34JQ1YjnRwcAmC0cj2jcXyTK','Administrador',1),(2,'user1@gmail.com','$2b$10$i/fvXe9t9Vr3/c3t1.1mQeCeGsZGCT4FnYEnzZlOvIKwmE0dtB7Km','User 1',0),(3,'user2@gmail.com','$2b$10$vhDs.Nyj/Mn1RbAetPuaH.li6.7dxVwgI341T8OxHKj0a4GodNpCO','User 2',0),(4,'user3@gmail.com','$2b$10$yL90ttuuoPXk5/u45u99Ie9E6exKVSn2qxbqS.GWN0NxPpGrXf58K','User 3',0),(5,'user4@gmail.com','$2b$10$dZtauwQFi.d2Lq1IVasLuO6Wc0zGnKW3qv5VNGWBMl7K3FQ067YT6','User 4',0),(6,'user5@gmail.com','$2b$10$VCm2V8Kky/NabyOM1W.qA.0o0xw1.uY0O8Uu/VBS4VcP6rKeok2ua','User 5',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-19 19:40:51
