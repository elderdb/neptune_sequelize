const Sequelize = require('sequelize', {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

exports.initUsers = function initUsers(sequelize) {

  return new Promise((resolve, reject) => {
     
    const User = sequelize.define('user', {
    
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING    
      }
    }, {     
      
      timestamps: false
      
    });

    if(User){
      
      User.sync();

      resolve(User);
     
    } else {
      
      reject(new Error ('User cannot be null'));
      
    }    

  });

}