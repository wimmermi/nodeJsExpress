const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Willkommen zur Beispiel-Express-Applikation',
    endpoints: [
      { path: '/', method: 'GET', description: 'API Root' },
      { path: '/users', method: 'GET', description: 'List users (example)' },
      { path: '/health', method: 'GET', description: 'Health check' }
    ]
  });
});

module.exports = router;