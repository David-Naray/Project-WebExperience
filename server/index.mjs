
//import http from 'http';
//var httpServer = http.createServer();
let port = 3010;
let root = 'web'
//httpServer.listen(port);
import express from "express";
let app = express();
//app.server=httpServer;
console.log("serving ./web as http on:",port)
app.use(express.static(root));
let server = app.listen(port,() => console.log(`Server listening on port: ${port}`));
import WebSocketHub from "./WebSocketHub.mjs"
new WebSocketHub(server,port);
