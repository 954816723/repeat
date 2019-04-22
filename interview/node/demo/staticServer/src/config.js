let debug = require('debug')('static:config');
let path = require('path');

let config = {
    host: 'localhost',
    port: 8080,
    root: path.resolve(__dirname,'..','public')
}
debug(config);
module.exports = config; 