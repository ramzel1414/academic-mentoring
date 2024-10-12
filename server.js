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

//Get single posts
app.get('/api/posts/:id', (req, res) => {
  // console.log(typeof req.params.id);
  const id = parseInt(req.params.id)
  const post = posts.find((post) => post.id === id);

  if(!post) {   // if post is not in the database
    res.status(404).json({msg: `A post not found with an id of ${id}`})
  } else {
    res.status(200).json(post);
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

