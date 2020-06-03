const express = require('express');
const { getPrice, getTripData } = require('./controller.js');

const router = express.Router();

// Tina Routes
router.get('/:id/price', getTripData);
router.get('/:id/calendar', getPrice);

// Alex New Routes
// router.get('/:id/calendar', getOneTrip);
<<<<<<< HEAD
// router.post('/:id/calendar', createOneTrip);
// router.delete('/:id/calendar', deleteOneTrip);
// router.put('/:id/calendar', editOneTrip);
=======
router.post('/:id/calendar', createOneTrip);
router.delete('/:id/calendar', deleteOneTrip);
router.put('/:id/calendar', editOneTrip);
>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5

module.exports = router;
