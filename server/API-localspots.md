## Server API

### Get trip data info
  * GET `/api/trip/:id/price`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `200`

**Returns:** JSON

```
{
  tripname: 'a nice day trip at Philadelphia',
  detail: '7:00 am Departure - a day trip at Philadelphia pick up included!',
  duration: '7:00 am Departure - 4:00pm',
  cancelation: 48,
  totalbooked: 2025,
  price: 199,
  date: today,
}
```

### Get trip price data info
  * GET `/api/trip/${id}/calendar/?startdate=${date}&enddate=${date}&adults=${adults}`

**Path Parameters:**
  * `id` trip id
  * `date` start date
  * `date` end date
  * `adults` number of adults

**Success Status Code:** `200`

**Returns:** JSON

```
{
  cancelation: 24,
  detail: "6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included",
  duration:"6:00 am Departure - 6:00 AM",
  price: 169, 
  totalbooked: 3987,
  trip_availability: 20,  
  tripname: "Yosemite in a Day",
}
```

### Get one booking of a trip info
  * GET `/api/trip/:id/calendar/?booking={bookingid}`

**Path Parameters:**
  * `id` trip id
  * `booking` booking id

**Success Status Code:** `200`

**Returns:** JSON

```
{
  cancelation: 24,
  detail: "6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included",
  duration:"6:00 am Departure - 6:00 AM",
  price: 169, 
  totalbooked: 3987,
  trip_availability: 20,  
  tripname: "Yosemite in a Day",
}
```

### Add trips
  * POST `/api/trip/${id}/calendar/?startdate=${date}&enddate=${date}&adults=${adults}`

**Path Parameters:**
  * `id` trip id
  * `date` start date
  * `date` end date
  * `adults` number of adults

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```
{
  cancelation: 24,
  detail: "6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included",
  duration:"6:00 am Departure - 6:00 AM",
  price: 169, 
  totalbooked: 3987,
  trip_availability: 20,  
  tripname: "Yosemite in a Day",
}
```


### Update trips info
  * PATCH `/api/trip/${id}/calendar/?booking=${booking}`

**Path Parameters:**
  * `id` trip id
  * `booking` booking id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```
{
  cancelation: 24,
  detail: "6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included",
  duration:"6:00 am Departure - 6:00 AM",
  price: 169, 
  totalbooked: 3987,
  trip_availability: 20,  
  tripname: "Yosemite in a Day",
}
```

### Delete trips
  * DELETE `/api/trip/${id}/calendar/?booking=${booking}`

**Path Parameters:**
  * `id` trip id
  * `booking` booking id

**Success Status Code:** `204`
