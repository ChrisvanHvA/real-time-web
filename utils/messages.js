
const moment = require('moment');

function formatMessage(username, text, beast) {
return {
    beast,
    username,
    text,
    time: moment().format('h:mm a')
    
};
}

module.exports = formatMessage;