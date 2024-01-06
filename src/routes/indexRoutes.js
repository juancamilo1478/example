const indexRoutes = require('express').Router();
//import diferent
  const productRoute= require('./productRoute');
 
//images

indexRoutes
   .use('/products', productRoute)
 
// .use('/menu', menuRouter);

indexRoutes.get('/', (req, res) => {
  res.send('Hello World!');
});
module.exports = indexRoutes;