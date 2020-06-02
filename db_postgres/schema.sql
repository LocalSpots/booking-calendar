DROP DATABASE IF EXISTS localspots_calendar;
CREATE DATABASE localspots_calendar;
\c localspots_calendar;

DROP TABLE IF EXISTS Trips;
		
CREATE TABLE Trips (
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  duration VARCHAR(255) NOT NULL,
  numtotal_booked INTEGER NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Prices;
		
CREATE TABLE Prices (
  id SERIAL NOT NULL,
  id_Trips INTEGER NOT NULL,
  trip_date INTEGER NOT NULL,
  trip_availability INTEGER NOT NULL,
  price INTEGER NOT NULL,
  fee_cancel INTEGER NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Trip;
		
CREATE TABLE Trip (
  id SERIAL NOT NULL,
  num_adult INTEGER NOT NULL,
  num_child INTEGER NOT NULL,
  id_account INTEGER NOT NULL,
  id_Prices INTEGER NOT NULL,
  created_at varchar(255) NOT NULL,
  updated_at varchar(255) NOT NULL,
  PRIMARY KEY (id)
);


-- ---
-- Seed
-- ---

COPY Trips(id,name,description,duration,numtotal_booked) 
FROM '/Users/karen8/Documents/GitHub/localspots-travelers-server/db_postgres/trips.csv' DELIMITER ',' CSV HEADER;
COPY Prices(id,id_Trips,trip_date,trip_availability,price,fee_cancel) 
FROM '/Users/karen8/Documents/GitHub/localspots-travelers-server/db_postgres/prices.csv' DELIMITER ',' CSV HEADER;
COPY Trip(id,num_adult,num_child,id_account,id_Prices,created_at,updated_at) 
FROM '/Users/karen8/Documents/GitHub/localspots-travelers-server/db_postgres/trip.csv' DELIMITER ',' CSV HEADER;

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE Prices ADD FOREIGN KEY (id_Trips) REFERENCES Trips (id);
ALTER TABLE Trip ADD FOREIGN KEY (id_Prices) REFERENCES Prices (id);
