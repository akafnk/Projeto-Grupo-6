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
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rua` varchar(100) NOT NULL,
  `cep` int NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `pais` varchar(50) DEFAULT 'Brasil',
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id_idx` (`usuario_id`),
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,'Willy Tribess',89057675,'Blumenau','Santa Catarina','Brasil',4),(2,'2 de Setembro',89058458,'Indaial','Santa Catarina','Brasil',1),(3,'Esmeralda',86858457,'Gaspar','Santa Catarina','Brasil',9),(4,'Maria Nuss',86325457,'Itajai','Santa Catarina','Brasil',7),(5,'Av. Paulista',86666458,'São Paulo','São Paulo','Brasil',11),(6,'Ipe roxo',86675133,'Montes Claros','Minas Gerais','Brasil',15),(7,'Tiradentes',86943139,'Rio de Janeiro','Rio de Janeiro','Brasil',8),(8,'Magnolias',86675165,'Bonito','Mato Grosso','Brasil',12),(9,'Condor',86675742,'Maringá','Paraná','Brasil',14),(10,'Padre Caldas',86675135,'Aracaju','Sergipe','Brasil',2),(11,'Natal',86675785,'Gramado','Rio Grande do Sul','Brasil',5),(12,'Santos Dummont',86675124,'Roncador','Paraná','Brasil',13),(13,'XV de Novembro',87428833,'Recife','Pernambuco','Brasil',3),(14,'Gustavo Zimmerman',86526789,'Igrejinha','Rio Grande do Sul','Brasil',10),(15,'Chile',86695338,'Salvador','Bahia','Brasil',6);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
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
