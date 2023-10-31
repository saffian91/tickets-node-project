const express = require('express');
const router = express.Router();
const tickets = require('../services/tickets');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await tickets.getTickets(req.query.page));
  } catch (err) {
    console.error(`Error while getting ticket `, err.message);
    next(err);
  }
});

module.exports = router;