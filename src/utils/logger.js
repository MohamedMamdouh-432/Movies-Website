const colors = require('console-log-colors');

module.exports = {
    normal : (message) => console.log(colors.white(message)),
    success: (message) => console.log(colors.green(message)),
    error: (message) => console.error(colors.red(message)),
    info: (message) => console.info(colors.cyan(message)),
    debug: (message) => console.debug(colors.magenta(message)),
};
