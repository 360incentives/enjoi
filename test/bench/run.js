'use strict';

var Spawn = require('child_process').spawn;
var Path = require('path');

var enjoi, tv4, themis, imjv;

console.log('tv4 vs themis vs is-my-json-valid vs joi benchmark:\n');

tv4 = Spawn('node', [Path.resolve(__dirname, 'tv4.js')]);

tv4.stdout.pipe(process.stdout);

tv4.once('close', function () {
    themis = Spawn('node', [Path.resolve(__dirname, 'themis.js')]);

    themis.stdout.pipe(process.stdout);

    themis.once('close', function () {
        imjv = Spawn('node', [Path.resolve(__dirname, 'imjv.js')]);

        imjv.stdout.pipe(process.stdout);

        imjv.once('close', function () {
            enjoi = Spawn('node', [Path.resolve(__dirname, 'enjoi.js')]);

            enjoi.stdout.pipe(process.stdout);

            enjoi.once('close', function () {
                process.exit(0);
            });
        });
    });
});
