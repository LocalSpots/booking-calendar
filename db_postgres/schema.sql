DROP DATABASE IF EXISTS localspots_calendar;
<<<<<<< HEAD
CREATE DATABASE localspots_calendar;
\c localspots_calendar;
=======

CREATE DATABASE localspots_calendar;

USE localspots_calendar;
>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5

DROP TABLE IF EXISTS Trips;
		
CREATE TABLE Trips (
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
<<<<<<< HEAD
  description VARCHAR(255) NOT NULL,
=======
  description INTEGER NOT NULL,
>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5
  duration VARCHAR(255) NOT NULL,
  numtotal_booked INTEGER NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Prices;
		
CREATE TABLE Prices (
  id SERIAL NOT NULL,
  id_Trips INTEGER NOT NULL,
<<<<<<< HEAD
  trip_date INTEGER NOT NULL,
=======
  trip_date DATE NOT NULL,
>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5
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
<<<<<<< HEAD
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

=======
  PRIMARY KEY (id)
);

>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5
-- ---
-- Foreign Keys 
-- ---

ALTER TABLE Prices ADD FOREIGN KEY (id_Trips) REFERENCES Trips (id);
ALTER TABLE Trip ADD FOREIGN KEY (id_Prices) REFERENCES Prices (id);
<<<<<<< HEAD

-- ---
-- INDEXES
-- ---
create index primary_lookup
on Prices (id_Trips);
=======
>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5
