import express, { Request } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
//https://github.com/microsoft/TypeScript/issues/41887
import api from "./api/index.js";

const port = 5100;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// Make io accessible to our router
app.use(function (req: Request, res, next) {
  (req as any).io = io;
  next();
});

app.use("/", api);
app.use(cors());

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
