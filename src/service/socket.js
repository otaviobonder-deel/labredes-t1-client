import dgram from 'dgram';

const socket = dgram.createSocket('udp4');

export default socket;
