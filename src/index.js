const express = require('express');
const authController = require('./controllers/auth');
const db = require('./models');


const app = express();
app.use('/auth', authController);


app.get('/', (req, res) => {
  return res.json('API Online')
});

db.sequelize.sync().then( ()=>{
  app.listen(3001, () => {
    console.log('Server Online')
  });
});