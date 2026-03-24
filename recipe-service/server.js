const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recipeapp', { useNewUrlParser: true, useUnifiedTopology: true });

const Recipe = mongoose.model('Recipe', new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  userId: String
}));

// Routes
app.post('/', async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.send('Recipe added');
});

app.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

app.delete('/:id', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.send('Recipe deleted');
});

app.listen(3002, () => console.log('Recipe Service on port 3002'));