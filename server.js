import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {  
  res.end('<h1>hello world</h1>');
  // res.writeHead(500, {'Content-type': 'application/json'});
  // res.end(JSON.stringify({message: 'server error'}))
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

