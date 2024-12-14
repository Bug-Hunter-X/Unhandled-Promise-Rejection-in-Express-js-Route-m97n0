const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve() : reject(new Error('Simulated database error'));
    }, 100);
  });
}
