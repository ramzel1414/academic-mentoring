// import fs, {readFileSync} from 'fs';
import fs from 'fs/promises'

// //Asynchronous version
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })

// //Synchronous version
// const data = readFileSync('./test.txt', 'utf8')
// console.log(data);

// //Promise verison
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8')
    console.log(data);
  } catch (error) {
    console.log(err);
  }
}

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Writing to this file')
    console.log('this file has been written to...')
  } catch (error) {
    console.log(error);
  }
}

const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nThis is an appended text')
    console.log('This file appended...')
  } catch (error) {
    console.log(error);
  }
}

writeFile();
appendFile();
readFile();
