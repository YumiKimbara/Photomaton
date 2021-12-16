const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const postsRoutes = require("./routes/postsRoutes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("API Is Running");
});

app.use("/api/users", userRoutes);
app.use("/api/post", postsRoutes);
app.use("/", postsRoutes);
app.use("/", postsRoutes);
app.use("/", postsRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

// Create socket.io
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: "*"
  }
})

io.on('connection', (socket) => {
  console.log('Someone has connected.', socket.id)
  

  socket.on('disconnect', () => {
    console.log('Someone has left.')
  })
})

io.listen(5000, () => {
  console.log('socket is listening at port 5000')
});

