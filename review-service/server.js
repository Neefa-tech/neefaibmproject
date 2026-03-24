const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recipeapp', { useNewUrlParser: true, useUnifiedTopology: true });

const Review = mongoose.model('Review', new mongoose.Schema({
  recipeId: String,
  userId: String,
  rating: Number,
  comment: String
}));

// Routes
app.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.send('Review added');
});

app.get('/:recipeId', async (req, res) => {
  const reviews = await Review.find({ recipeId: req.params.recipeId });
  res.json(reviews);
});

app.listen(3003, () => console.log('Review Service on port 3003'));