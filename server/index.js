


// const express = require('express');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data)
        //   console.log(client.send(data))
        }
        
      });
    });
  });
// // const webSocketsServerPort = 8082;
// // const webSocketServer = require('websocket').server;
// // // Spinning the http server and the websocket server.
// // const http = require('http');
// // const server = http.createServer();
// // server.listen(webSocketsServerPort);
// // const wsServer = new webSocketServer({
// //   httpServer: server
// // });



// wss.on('connection', ws => {
//     console.log('New connection!')

//     ws.on('message', data => {
//         console.log(`from client ${data}`)
        
//         wss.clients.forEach( (client) => {
//             if (client != ws) {
//                 client.send(data)
//             }
//         })
//     })
//     ws.on('close', () => {
//         console.log('Client disconnected')
//     })
// })