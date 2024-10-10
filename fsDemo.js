// JS is non-blocking by nature, 
// it will execute the next line 
// without waiting the current file to finish

// Passing a callback function to setTimeout
setTimeout(() => {
  console.log('hello world');

}, 3000);

console.log('non-blocking nature');




