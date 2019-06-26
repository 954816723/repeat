const http = requrie('http');

const PORT = 8080;

const serverHandle = require('../app');

const server = http.createServer(serverHandle);
server.listen(PORT);