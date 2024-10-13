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
  } else if(req.url === '/api/users' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.statusCode = 201;
      res.end(JSON.stringify(newUser))
    })
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



//client sending request to server (function)
const addUser = async (user) => {

  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user), //send the user object as JSON
  });

  console.log('User added')
};

//client sending request to server (actual sending of data)
addUser({ id: 5, name: 'Junky Doe'});