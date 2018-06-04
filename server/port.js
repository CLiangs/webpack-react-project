const argv = require("./argv"),
port = 3000;
module.exports = parseInt(argv.port || process.env.PORT || port, 10);
