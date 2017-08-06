'use strict';
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const { iso } = require('./tools');

const sniff = (host, port, sneezeCallback) => {
  server.on('listening', () => {
    const address = server.address();
    console.log(`listening on ${address.address}:${address.port}`);
  });

  server.on('message', (message, remote) => {
    console.log(`${iso()}\t${remote.address}\t${message}`);
    sneeze(message);
  });

  server.bind(port, host);
};

module.exports = sniff;
