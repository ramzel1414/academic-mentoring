import express from 'express';
import posts from './routes/posts.js'
const app = express();

const PORT = 3000;

//body parse middleware
app.use(express.json());

app.use('/api/posts', posts);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

