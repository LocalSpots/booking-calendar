select trip.id from Trip
join Prices on Trip.id_Prices = Prices.id;

-- This gets the Archetypal prices for a certain Trip

select * from Prices
join Trips on Prices.id_Trips = Trips.id
where Trips.id = 1;

// Timing is "explain analyze"


-- This gets all the different booked Trip reservations

select * from Trip
join Prices on Trip.id_Prices = Prices.id
join Trips on Prices.id_Trips = Trips.id
limit 10;

-- Main query, One trip's info on a certain date
select * from Prices
where id_Trips = 606796
and trip_date = 20210711;


select * from Prices
where id = 800000;

select * from Prices
where id_Trips = 515835
and trip_date = 20200822;

localspots_calendar=# explain analyze select * from Prices
localspots_calendar-# where id_Trips = 515835
localspots_calendar-# and trip_date = 20200822;
                                                       QUERY PLAN
-------------------------------------------------------------------------------------------------------------------------
 Index Scan using primary_lookup on prices  (cost=0.42..12.46 rows=1 width=24) (actual time=0.556..0.558 rows=1 loops=1)
   Index Cond: (id_trips = 515835)
   Filter: (trip_date = 20200822)
 Planning Time: 1.254 ms
 Execution Time: 0.647 ms
(5 rows)



-- 
BEGIN; 
explain analyze  update Prices
set trip_availability = trip_availability - 1
where id = 199999;

explain analyze  update Trips
set numtotal_booked = numtotal_booked + 1
where id = 606796;

explain analyze  INSERT INTO Trip (id, num_adult,num_child,id_account,id_Prices,created_at,updated_at) 
VALUES (1000008, 2, 1, 1, 900000, now(), now());
COMMIT;


explain analyze select * from Prices
where id = 800000;

 update Prices
set trip_availability = trip_availability - 1
where id = 900000;


localspots_calendar=# SELECT pg_size_pretty( pg_database_size('localspots_calendar') );
 pg_size_pretty
----------------
 2079 MB
(1 row)

localspots_calendar=# SELECT pg_size_pretty( pg_total_relation_size('trip') );
 pg_size_pretty
----------------
 1809 MB
(1 row)
