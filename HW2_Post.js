/**
 * Mohammad Hossain HW2 for Web Api
 */

'use strict';

var util = require('util');

module.exports  = {

    post : posts
};

function posts(req, res) {
    console.log("Now doing a post request!");
    if(req.method == 'POST')
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
