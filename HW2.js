/*
    Mohammad Hossain HW2 for Web Api
 */

'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var express = require('express');
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
    gets : gets,
    posts : posts,
    puts : puts,
    deletes : deletes
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function gets(req, res) {
    console.log("Now doing a get request!");
    if(req.method == 'GET')
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