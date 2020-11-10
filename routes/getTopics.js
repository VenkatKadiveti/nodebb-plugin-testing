var db = require('../db/dbOperation');
var _ = require('lodash');


var getTopic = async function(req, res) {
    console.log('get route file');
    const key = _get(req, 'query.key');
    if (key) {
       const result = await db.getObj(key);
       res.send(result);
    }else {
        res.send({status: 400, message: "Bad Request"});
    }
}

module.exports = getTopic;