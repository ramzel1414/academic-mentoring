import { createServer } from 'http';

const PORT = 3000;

const users = [
  {id: 1, name:'John Doe'},
  {id: 2, name:'Jane Doe'},
  {id: 3, name:'Jil Doe'},
  {id: 4, name:'Jimmy Doe'},
]

const server = createServer((req, res) => {
  if(req.url === '/api/users' && req.method === 'GET') {
    res.setHeader('Content-type', 'application/json');
    res.write(JSON.stringify(users))
    res.end();
  } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {  // /api/users/:id
    const id = req.url.split('/')[3];  
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader('Content-Type', 'application/json');
    if(user) {  //if user exist
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({message: 'User not found'}));
    }
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