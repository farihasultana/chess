import nodeNet = require("node:net");
import WebSocket = require("ws");

 class GameManager{
    private games: Game[];
    private pendingUser: WebSocket;
    private user: WebSocket[];
    constructor (){

        this.games =[];
        this.pendingUser = 
    }

    addUser(socket: WebSocket){
        this.user.push(socket);
        this.addHandler(socket);

    }
    removeUser(socket: WebSocket){
        this.user.filter(user => user!== socket);
        //stop the game here because user left

    }
    private addHandler(socket: WebSocket){

    }
}