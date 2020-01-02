# Example of use the Sequelize

For run this project, clone the repository and run npm install. NodeJS is required.
After done, configure sequelize-conn.js file changing the row:

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

For this example do you need to have a table called 'users' with fields shown on models/user.js file.
