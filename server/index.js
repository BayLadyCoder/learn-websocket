const webSocket = require('ws');

// websocket server
const wss = new webSocket.Server({ port: 8082 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('close', () => {
    console.log('Client has disconnected');
  });
});
