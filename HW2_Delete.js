/**
 * Mohammad Hossain HW2 for Web Api
 */

'use strict';

var util = require('util');

module.exports  = {

    delete : deletes
};

function deletes(req, res) {
    console.log("Now doing a delete request!");
    if(req.method == 'DELETE')
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