import express from 'express';
const app = express();

const PORT = 3000;

const posts = [
  { id: 1, title:'Post One'},
  { id: 2, title:'Post Two'},
  { id: 3, title:'Post Three'},
]

//Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

