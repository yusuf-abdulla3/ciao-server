const pg = require('pg');
// require('dotenv').config();

const connectionString = `${process.env.POSTGRES_URL}?sslmode=require` ;

const client = new pg.Client({
    connectionString: connectionString || process.env.DATABASE_URL,
});

console.log( `Connected to ${process.env.DB_NAME} on ${process.env.DB_HOST}` );
client.connect();

module.exports = client;