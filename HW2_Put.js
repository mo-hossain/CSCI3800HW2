/**
 * Mohammad Hossain HW2 for Web Api
 */

'use strict';

var util = require('util');

module.exports  = {

    put : puts
};

function puts(req, res) {
    console.log("Now doing a put request!");
    if(req.method == 'PUT')
    {
        if(Object.keys(req.query).length > 0) {
            res.send(req.query);
        }
        else {
            res.send('No query parameters were sent in.');
        }
    }
    else{
        res.status(403).send('HTTP Method not supported.');
    }
}
