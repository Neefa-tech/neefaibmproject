const express = require('express');

const app = express();
app.use(express.json());

// Simple notification service
app.post('/notify', (req, res) => {
  console.log('Notification:', req.body.message);
  res.send('Notification sent');
});

app.listen(3004, () => console.log('Notification Service on port 3004'));