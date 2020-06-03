const express = require('express');
const { getPrice, getTripData } = require('./controller.js');

const router = express.Router();

// Tina Routes
router.get('/:id/price', getTripData);
router.get('/:id/calendar', getPrice);

// Alex New Routes
// router.get('/:id/calendar', getOneTrip);
// router.post('/:id/calendar', createOneTrip);
// router.delete('/:id/calendar', deleteOneTrip);
// router.put('/:id/calendar', editOneTrip);

module.exports = router;
