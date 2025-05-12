const { Router } = require("express");

const indexRouter = Router();

const messages = require("../data/messages");

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message-board", messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const { messageText, authorText } = req.body;
  messages.push({ text: messageText, user: authorText });
  res.redirect("/");
});

indexRouter.get("/details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages[id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("details", { message });
});

module.exports = indexRouter;
