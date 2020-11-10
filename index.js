var axios = require('axios');
var Plugin = {};


Plugin.load = function (params, callback) {
    console.log('params----', params);
    var router = params.router;
    router.get('/getData', getTestData);
    callback();
}


async function getTestData(req, res) {
    console.log('get test data')
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.send(data);
}

module.exports = Plugin;