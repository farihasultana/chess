// filep
 import { WebSocketServer } from'ws';  
                 
import process = require('node:process');
import type { WebSocket } from 'ws';
import {GameManager} from './GameManager.js'


const wss = new WebSocketServer({ port: 8080 });
const gameManager = new GameManager();

wss.on('connection', (ws: WebSocket) => {
  gameManager.addUser(ws)
  ws.on("disconnect", ()=>gameManager.removeUser(ws))
});

console.log('WebSocket server running on ws://localhost:8080');