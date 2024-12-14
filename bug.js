const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query)
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(error => {
    console.error(error);
    // Missing error handling for the response
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random failure
      Math.random() < 0.5 ? resolve() : reject(new Error('Simulated database error'));
    }, 100);
  });
}