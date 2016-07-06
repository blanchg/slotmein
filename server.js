'use strict';

var express = require('express');
var app = express();
var browserify = require('browserify-middleware');
var fs = require('fs');
var http = require('http');
var path = require('path');

var externals = ['react', 'react-dom'];

app.get('/app.js', browserify('./src/index.js', {
    standalone: 'app',
    debug: true,
    cache: 'dynamic',
    transform: [
        ["babelify", {presets: [ "react" ]}]
    ],
    external: externals,
    precompile: true
}));

app.get('/extern.js', browserify(externals));

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(7878, function () {
    console.log('app debug server running at http://localhost:7878');
});
