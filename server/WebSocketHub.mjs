import WebSocket, { WebSocketServer } from 'ws';
export default function WebSocketHub(httpServer,port){
const wss = new WebSocketServer({ server:httpServer, binary:true });
console.log(`starting websocket server on port:`,port)
wss.on('connection', (ws,req) => {
    ws.conId = req.headers['sec-websocket-key'];
    console.log('connect:',ws.conId)
    ws.on('message', (message, isBinary) => {
    })
    ws.on('close', () => {
        console.log('disconnnect:',ws.conId)
        //removeUserFromRoom(ws, ws.roomId);
    })
})

function heartbeat() {
    this.isAlive = true;
    //console.log('pong...',this.conId)
}
wss.on('connection', function connection(ws) {
    ws.isAlive = true;
    ws.on('pong', heartbeat);
});

const interval = setInterval(function ping() {
wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false)
        return ws.terminate();
    ws.isAlive = false;
    ws.ping();
});
}, 31000);

wss.on('close', function close() {
clearInterval(interval);
});

let broadcast=(msg,exclude)=>{
    wss.clients.forEach(ws=>(ws!==exclude)&&ws.send(msg))
}
    
    this.connections = {
        wss,
        broadcast
    }
    
}
