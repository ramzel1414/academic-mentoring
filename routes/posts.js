import express from 'express';
const router = express.Router();

const posts = [
  { id: 1, title:'Post One'},
  { id: 2, title:'Post Two'},
  { id: 3, title:'Post Three'},
]

//Get all posts
router.get('/', (req, res) => {
  res.json(posts);
})

//Get single posts
router.get('/:id', (req, res) => {
  // console.log(typeof req.params.id);
  const id = parseInt(req.params.id)
  const post = posts.find((post) => post.id === id);

  if(!post) {   // if post is not in the database
    res.status(404).json({msg: `A post not found with an id of ${id}`})
  } else {
    res.status(200).json(post);
  }
})

export default router;