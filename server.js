"use strict";
var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var github = githubhook({
    host: '0.0.0.0',
    port: 3420,
    path: '/',
    secret: 'It would be devastating if anyone learned that your character is actually an assassin.',
    logger: console
});

github.listen();

github.on('deploy-ex:refs/heads/master', function (data) {
    // Exec a shell script
    var execOptions = {
        maxBuffer: 1024 * 1024 // Increase max buffer to 1mb
    };
    execFile('/home/deployer/deploy/deploy.sh', execOptions, function(error, stdout, stderr) {
        if( error )
        {
            console.log(error)
        }
    });
});
