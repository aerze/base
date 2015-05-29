'use strict';

var execute = require('child_process').exec,
    fs = require('fs');

fs.readdir(__dirname + '/bw/', function (err, data) {
    for (var i = data.length - 1; i >= 0; i-=1) {
        var outputname = data[i].split('.')[0];
        encode( 'bw/' + data[i], 'bwp/' + outputname);
    }
});



function encode(input, output) {
    execute('./cwebp -q 50 ' + input + ' -o ' + output + '.webp',
        function(err, stdout, stderr) {
            console.log('stdout:\n' + stdout);
            console.log('stderr:\n' + stderr);
            if (err !== null) {
              console.log('exec error: ' + err);
            }
    });
}

 

// encode(__dirname + '/color/1.jpg', __dirname + '/colorw/1');