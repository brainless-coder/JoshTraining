const { instrument } = require("@socket.io/admin-ui");

const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080", "https://admin.socket.io"],
  },
});

// apan khudka namespace banane ke liye
const userIo = io.of('/user');
userIo.on('connection', socket => {
  console.log('Connected to user namespace with username: ' + socket.username);
});

// aise apan middlewares use kar sakte hai socket ke saath
// like yhape auth ke liye kiya hai, user namespace me
userIo.use((socket, next) => {
  if (socket.handshake.auth.token) {
    socket.username = getUsernameFromToken(socket.handshake.auth.token);
    next()
  } else {
    next(new Error("Please send token"));
  }
});

function getUsernameFromToken(token) {
  return token;
}


io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("send-message", (message, room) => {
    if (room === "") {
      socket.broadcast.emit("receive-message", message);
    } else {
      socket.to(room).emit("receive-message", message);
    }
  });

  socket.on("join-room", (room, cb) => {
    // join() fn se apan sidhe kisi bhi room me join kar sakte hai
    socket.join(room);
    // ye humlog server se call kar rhe h, and ye client me run ho rha h, bcoz of callback
    cb(`Joined room: ${room}`);
  });
});

instrument(io, { auth: false });