"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// filepath: /media/fariha/Android studio/chess/backend1/src/index.ts
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', (ws) => {
    ws.send('hello');
});
console.log('WebSocket server running on ws://localhost:8080');
//# sourceMappingURL=index.js.map