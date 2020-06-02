select trip.id from Trip
join Prices on Trip.id_Prices = Prices.id;

select * from Prices
join Trips on Prices.id_Trips = Trips.id
limit 10;

// Timing is "explain analyze"