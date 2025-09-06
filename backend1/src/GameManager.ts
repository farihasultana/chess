import nodeNet = require("node:net");
import WebSocket = require("ws");

 class GameManager{
    private games: Game[];
    constructor (){

        this.games =[];
    }

    addUser(socket: WebSocket){

    }
    removeUser(socket: WebSocket){

    }
    private handleMessage(){

    }
}