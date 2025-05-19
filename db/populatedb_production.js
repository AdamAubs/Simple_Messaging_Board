const { Client } = require('pg')
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message) 
VALUES 
  ('Welcome bot', 'Welcome to the message board');
`;



async function main() {
  console.log("seeding...")
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("done")
}

main();
