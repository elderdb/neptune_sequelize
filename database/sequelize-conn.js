const ModelUser = require('../models/user.js');

const Sequelize = require('sequelize', {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

exports.connect = function () {

sequelize
  .authenticate()
  .then(() => {
    
    console.log('Connection has been established successfully.'); 

    ModelUser.initUsers(sequelize)
      .then(User => {

        if(!User){
          console.log('Cannot sync and retrive user object.')
          return;
        }

        console.log('Finding all users: ')

         User.findAll().then(users => {
          console.log(JSON.stringify(users, null, 2))
         })

      })
      .catch((err) => {
        console.log(err);        
      });   
    

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    return;
  });
}

exports.sequelize = sequelize;