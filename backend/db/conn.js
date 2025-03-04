//connection 

const { Client } = require('pg');
const client = new Client({
    user: 'user123',
    host: 'db',
    database: 'blogdb',
    password: 'postgres',
    port: 5432,
    connectionTimeoutMillis: 5000, 
});

async function check(){
    try {
        await client.connect();
        console.log("Connected to PostgreSQL successfully!");
    } catch (error) {
        console.error("Connection error:", error);
    }
}


check();
module.exports = client;
