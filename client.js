const net = require('net');

/** 
 * Establish connection with the game server
*/

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Message from client: ', data)
  });
  conn.on('connect', () => {
    console.log('Succesfully connected ');
    conn.write('Name: dfg');
  });
  

  return conn;
} 


module.exports = { connect };