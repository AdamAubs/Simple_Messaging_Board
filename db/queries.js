const pool = require("./pool")

async function getMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
  } catch (err) {
    return [];
  }
}

async function addMessage(username, message) {
  try {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message])
    console.log("message added")
  } catch (err) {
    console.error("Error getting messages:", err)
  }
}

async function getMessageById(id) {
  try {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [id])
    console.log("message retrieved from database", rows)
    return rows[0]
  } catch (err) {
    console.error("Error retrieving message: ", err)
  }
}
module.exports = {
  getMessages,
  addMessage,
  getMessageById,
}
