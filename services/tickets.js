const db = require('./db');
const config = require('../config');

async function getTickets (){
  const rows = await db.query(
    `SELECT id, title, description, status 
    FROM tickets`
  );
  return rows;
}

module.exports = {
  getTickets
}
