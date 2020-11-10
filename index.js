var axios = require('axios');
var createTopic = require('./routes/createObjects');
var getTopic = require('./routes/getTopics');

var Plugin = {};

Plugin.load = function (params, callback) {
    console.log('-----init----');
    var router = params.router;
    router.post('/addTopic', createTopic);
    router.get('/getTopic', getTopic);
    callback();
}

module.exports = Plugin;