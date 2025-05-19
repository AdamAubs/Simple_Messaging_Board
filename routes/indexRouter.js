const { Router } = require("express");

const indexRouter = Router();

// const messages = require("../data/messages");
const db = require("../db/queries.js");

indexRouter.get("/", async (req, res) => {
  const messages = await db.getMessages();
  res.render("index", { title: "Mini Message-board", messages: messages });
});

indexRouter.post("/new", async (req, res) => {
  const { messageText, authorText } = req.body;
  // messages.push({ text: messageText, user: authorText });
  await db.addMessage(authorText, messageText)
  res.redirect("/");
});

indexRouter.get("/details/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  // const message = messages[id];
  const message = await db.getMessageById(id + 1)
  console.log(`message ${message.username}`)
  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("details", { message });
});

module.exports = indexRouter;
