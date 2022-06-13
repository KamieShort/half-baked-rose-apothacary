const { Router } = require('express');
const Quote = require('../models/Quote');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const quotes = await Quote.insert(req.body);
    if (req.body.quoteIds) {
      await Promise.all(req.body.quoteIds.map((id) => quotes.addQuoteById(id)));
    }
    res.json(quotes);
  } catch (e) {
    next(e);
  }
});
