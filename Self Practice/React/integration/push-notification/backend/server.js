const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();

const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    // allowedHeaders: ["Content-Type", "Authorization"],
    // credentials: true,
    // preflightContinue: false,
    // optionsSuccessStatus: 200,
  },
});

app.use(cors("*"));

app.use(express.json());

app.post("/notify", (req, res) => {
  const message = req.body.message;
  console.log("message:", message);

  io.emit("pushNotification", { message });
  res.status(200).send({ message: "Notification sent successfully" });

  io.on("connection", (socket) => {
    console.log(socket.id + " user connected");

    socket.on("disconnect", () => {
      console.log(socket.id + " user disconnected");
    });
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
