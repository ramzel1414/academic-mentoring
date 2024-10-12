import express from 'express';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
  // res.send('<h1>hello world</h1>');
  // res.send({message: 'hello world'});
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

