var db = require('../db/dbOperation');
var _ = require('lodash');


var createTopic = async function(req, res) {
    console.log('create route file')
    var topic = _.get(req, 'body');
    const key = _get(topic, 'key');
    if (topic) {
       const result = await db.save(key, topic);
       res.send(result);
    }else {
        res.send({status: 400, message: "Bad Request"});
    }
}

module.exports = createTopic;