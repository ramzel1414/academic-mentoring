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

//Post request handler
router.post('/', (req, res) => {
  // console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  posts.push(newPost);

  res.status(201).json(posts);
})

//Put request handler / Update Post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id)
  if(!post) {   // if post is not in the database
    res.status(404).json({msg: `A post not found with an id of ${id}`})
  } 
  
  post.title = req.body.title;   
  res.status(200).json(posts);
})



////  CLIENT REQUEST SIMULATION  

// //sending request / Post method
// const addPost = async (post) => {
//   const response = await fetch('http://localhost:3000/api/posts', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(post), // Send the post object as JSON
//   });
  
//   console.log(await response.json()); // Parse the response data as JSON


// };
// addPost({ title: 'New Post' });   // invoking the addPost function

//sending request / Put method
const updatePost = async (updatedPost) => {
  const response = await fetch('http://localhost:3000/api/posts/1', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost), // Send the post object as JSON
  });

  console.log('Post updated');
  console.log(await response.json())

};

updatePost({ title: 'Updated Post' });

export default router;