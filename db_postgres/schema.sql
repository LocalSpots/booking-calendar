DROP DATABASE IF EXISTS localspots_calendar;

CREATE DATABASE localspots_calendar;

USE localspots_calendar;

DROP TABLE IF EXISTS `Trips`;
		
CREATE TABLE `Trips` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` INTEGER NOT NULL,
  `duration` VARCHAR(255) NOT NULL,
  `numtotal_booked` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Prices`;
		
CREATE TABLE `Prices` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `id_Trips` INTEGER NOT NULL,
  `trip_date` DATE NOT NULL,
  `trip_availability` INTEGER NOT NULL,
  `price` INTEGER NOT NULL,
  `fee_cancel` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Trip`;
		
CREATE TABLE `Trip` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `num_adult` INTEGER NOT NULL,
  `num_child` INTEGER NOT NULL,
  `id_account` INTEGER NOT NULL,
  `id_Prices` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Prices` ADD FOREIGN KEY (id_Trips) REFERENCES `Trips` (`id`);
ALTER TABLE `Trip` ADD FOREIGN KEY (id_Prices) REFERENCES `Prices` (`id`);
