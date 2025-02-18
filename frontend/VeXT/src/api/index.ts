

var socket = new WebSocket("ws://localhost:8080/ws");

type ConnectCallback = (message: MessageEvent) => void;

let connect = (cb:ConnectCallback): void =>  {
    console.log("Trying to connect to websocket!");

    socket.onopen = () => {
        console.log("successfully connected to websocket");
    }

    socket.onmessage = (msg: MessageEvent) => {
        console.log(msg.data);
        cb(msg)
    }
    
    socket.onclose = closingMsg => {
        console.log("Socket closing connection: ", closingMsg);
    }
    
    socket.onerror = error => {
        console.log("Socket error: ", error)
    }
}

let sendMsg = (msg: string) => {
    socket.send(msg);
} 

export {connect, sendMsg}

