const net = require('net');
const { IP, PORT } = require('./constants');

/** 
 * Establish connection with the game server
*/

const connect = function() {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Message from client: ', data)
  });
  conn.on('connect', () => {
    console.log('Succesfully connected ');
    conn.write('Name: AGP');
    // conn.write('Move: up');
  });
  

  return conn;
} 


module.exports = { connect };