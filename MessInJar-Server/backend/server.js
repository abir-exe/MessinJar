const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const app = express();
dotenv.config();



// middlewares 
app.use(cors());
app.use(express.json());  //to accept json data


connectDB();


app.get("/", (req, res) => {
  res.send("API is running");
});

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   // console.log(req.params.id);
//   const singleChat = chats.find((chat) => chat._id === req.params.id);
//   res.send(singleChat);
// });

app.use('/api/user',userRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is chitChat on ${PORT}!`));
