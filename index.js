const server = (require('./server'));
const config = require('./config');

server.listen(config.port);
console.log('Server listerning on port: ', config.port);
