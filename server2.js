import { createServer } from 'http';

const PORT = 3000;

const users = [
  {id: 1, name:'John Doe'},
  {id: 2, name:'Jane Doe'},
  {id: 3, name:'Jil Doe'},
]

const server = createServer((req, res) => {
  if(req.url === '/api/users' && req.method === 'GET') {
    res.setHeader('Content-type', 'application/json');
    res.write(JSON.stringify(users))
    res.end();
  } else {
    res.setHeader('Content-type', 'application/json');
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}))
    res.end();
  }
})

server.listen(PORT, () => {
  console.log(`new server is running on port ${PORT}`);
})