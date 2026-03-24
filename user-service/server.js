const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recipeapp', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  email: String,
  password: String
}));

// Routes
app.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send('User registered');
});

app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email, password: req.body.password });
  if (user) res.send('Login successful');
  else res.send('Invalid credentials');
});

app.listen(3001, () => console.log('User Service on port 3001'));