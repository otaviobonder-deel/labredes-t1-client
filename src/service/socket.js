import dgram from 'dgram';

let socket;

function getInstance() {
  if (socket === null || socket === undefined) {
    socket = dgram.createSocket('udp4');
    socket.bind(41235, function (err) {
      if (err) {
        throw err;
      }
    });
  }
  return socket;
}

export function sendMessage(req) {
  const messageInArray = toByteArray(req);
  socket.send(
    messageInArray,
    0,
    messageInArray.length,
    41234,
    '192.168.0.33',
    function (err) {
      if (err) throw err;
    },
  );
}

function toByteArray(obj) {
  const uint = new Uint8Array(obj.length);
  for (let i = 0, l = obj.length; i < l; i++) {
    uint[i] = obj.charCodeAt(i);
  }

  return new Uint8Array(uint);
}

export function bin2String(array) {
  let count = array.length;
  let str = '';

  for (let index = 0; index < count; index += 1) {
    str += String.fromCharCode(array[index]);
  }

  return str;
}

export default getInstance();
