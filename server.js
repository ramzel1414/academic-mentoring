import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {  
  // res.end('<h1>hello world</h1>');
  if(req.url == '/') {
    res.end('<h1>Homepage</h1>');
  } else if(req.url == '/about') {
    res.end('<h1>About page</h1>');
  } else {
    res.end('<h1>Not found</h1>');
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

