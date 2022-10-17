// Create WebSocket connection handshake.
// 'wss' is more secure, it is WebSocket on https (good for production)
// while 'ws' is WebSocket on http (ok for development environment)
const ws = new WebSocket('ws://localhost:8082');

ws.addEventListener('open', () => {
  console.log('We are connected to the server!');

  const status = document.getElementById('status');
  status.textContent = 'Status: WebSocket successfully connected!';
  readyState.textContent = `Ready State: ${readyStates[ws.readyState]}`; // open
});

// change the server port # to any other number or stop the server to make it fail
ws.addEventListener('error', () => {
  console.error('We failed to connect to the server!');

  const status = document.getElementById('status');
  status.textContent = 'Status: WebSocket failed to connect :(';
  readyState.textContent = `Ready State: ${readyStates[ws.readyState]}`; // closed
});

// ReadyState value description
// 0  CONNECTING  Socket has been created. The connection is not yet open.
// 1  OPEN    The connection is open and ready to communicate.
// 2  CLOSING The connection is in the process of closing.
// 3  CLOSED  The connection is closed or couldn't be opened.
const readyState = document.getElementById('ready-state');
const readyStates = ['Connecting', 'Open', 'Closing', 'Closed'];
readyState.textContent = `Ready State: ${readyStates[ws.readyState]}`; // connecting

// TODO: addEventListener 'message'
// TODO: addEventListener 'close'
