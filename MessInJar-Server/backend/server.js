const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const { chats } = require("./data/data");
const app = express();


// middlewares 
app.use(cors());
app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is chitChat on ${PORT}!`));
