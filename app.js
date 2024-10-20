const express = require('express')
const app = express()
const port=3000

const productRouter=require('./products/operations');
const userRouter=require('./users/operations');
app.use('/users',userRouter);
app.use('/products',productRouter);
// app.get('/users', (req, res) => {
// //   res.send('Hello World!')
//   const users=[{name:"aishwarya"},{name:"Sunil"}];
//   res.json(users);
// });
// app.get('/products', (req, res) => {
//   res.send('Product endpoint called');
// })
app.get('/', (req, res) => {
  res.send('Root endpoint');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})