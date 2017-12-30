const express = require('express');
const router = express.Router();

// router middleware that can do something before http requests are made
// router.use((req, res, next) => {
//
//   next();
// })

// route middleware to validate :name
router.param('name', (req, res, next, name) => {
  console.log("This is the user's name: " + name);
  req.name = name;
  next();
})

router.get('/', (req, res, next) => {
  res.send('This is the root route');
})

module.exports = router;
