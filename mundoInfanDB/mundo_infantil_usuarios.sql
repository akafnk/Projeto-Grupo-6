CREATE DATABASE  IF NOT EXISTS `mundo_infantil` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mundo_infantil`;
-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: mundo_infantil
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Frank ','Gárate','1989-10-06','(47) 99695-4389','frank.garate@gmail.com','12345'),(2,'Talita ','Duarte','1990-06-25','(41) 99985-9865','talita.duarte@gmail.com','54321'),(3,'Felipe ','Pires','1983-09-02','(48) 98956-7842','lipepires@gmail.com','67891'),(4,'Fernando ','Furtado','1987-03-05','(51) 98425-7563','fe-roubado@gmail.com','19876'),(5,'Rodrigo','Mello','1992-09-19','(44) 99652-6895','rodrigo-m@gmail.com','75315'),(6,'Angélica ','Silva','1984-11-22','(11) 99548-8536','silva.ang@gmail.com','58963'),(7,'Jose ','Amorim','1988-12-09','(11) 98563-9865','ze.amorim@gmail.com','13356'),(8,'Patricia ','Ropelato','1991-01-22','(44) 98452-3642','patty@gmail.com','98650'),(9,'Eder ','Amorim','1982-06-29','(51) 98745-6523','eder.amorim@gmail.com','22223'),(10,'Carlos ','Lacerda','1980-11-15','(88) 98563-8453','carlinhos@gmail.com','75422'),(11,'Anderson ','Pereira','1990-10-25','(44) 99652-6852','andy@gmail.com','55722'),(12,'Thiago',' Ríos','1993-04-12','(41) 98563-9856','thiaguinho@gmail.com','68452'),(13,'Rafaella ','Martins','1986-05-18','(96) 99125-2232','rafa.mar@gmail.com','57845'),(14,'Lara ','Alves','1994-08-03','(46) 98423-1117','lara.alves@gmail.com','68542'),(15,'Daniel ','Moser','1985-07-27','(96) 98333-8566','danimoser@gmail.com','57855'),(16,'Admin','Admini','1989-10-06','(47) 996954689','mario@email.com','12349'),(17,'Jose ','Bezerra','1999-01-01','47 985848782','Jose.be@email.com','87945'),(18,'Angelo','Zimmer','1998-09-05','54 986857885','angelo@email.com','14785'),(20,'David','Pires','1995-05-08','47 996954856','david@email.com','54893'),(22,'Vitor','Ass','1987-07-05','47 985655254','vitor.ass@email.com','98745'),(24,'Patrick','Mass','1995-08-12','85 985848662','mass@gmail.com','45632'),(25,'Felix','Sanz','1982-10-06','47996954382','felix@email.com','56321'),(26,'Talita2','Duarte2','1994-08-02','47985868483','talita2@email.com','85236'),(27,'Sergio','Mett','1992-08-06','47985848682','sergiomett@email.com','12374'),(28,'Aleluia','Santos','1989-05-02','47 995969285','aleluia@email.com','45612'),(29,'Avril','Lavigne','1900-09-27','47 978584866','avril@email.com','32132'),(30,'Fabio','Mar','1994-08-05','47 963655253','fabio@email.com','98765'),(31,'Ana','Valdez','1995-05-15','41996958756','gustavo.v@email.com','$2b$11$L5QLycY88UADmwF80HTVS.dnJDVvsgpkz5tlIz2mbM7jexAB/Am7C'),(32,'Luisa','Pereira','1978-06-26','11977777777','luiza.r@email.com','$2b$11$sJo54kh5rCnKPqovpqCHculoP5WUsKcPhWVTcKGpj404nHd7oJZ9a'),(33,'Martin ','Souza','1981-10-06','47 995868543','martin@email.com','$2b$11$f2u2n/HNAvopMQ0Zu9HlE.1ClBpOvEJDyH3sPRwibc3xI.HZdLvTG'),(34,'Mario','Mario','1987-08-09','Mario','Mario','Mario'),(38,'Mayara','','1994-04-27','11957576869','','$2b$11$VF46zRpkV2OxdNztU1hxFeAMrsxPHQUIeE3vFlO7Rp/9lPLls3S8W');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-25 23:27:37
