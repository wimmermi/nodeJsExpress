const express = require('express');
const router = express.Router();

// Beispiel-Daten
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

module.exports = router;