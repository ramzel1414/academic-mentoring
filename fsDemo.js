import fs, {readFileSync} from 'fs';

//Asynchronous version
fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

//Synchronous version
const data = readFileSync('./test.txt', 'utf8')
console.log(data);

