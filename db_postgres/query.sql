select trip.id from Trip
join Prices on Trip.id_Prices = Prices.id;

// Timing is "explain analyze"