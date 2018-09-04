const express = require('express')
const app = express()

const { spawn } = require('child_process');
const script = spawn(`${__dirname}/myscript.sh`);

let done;

script.stdout.on('data', (stdout) => {
    console.log(`stdout: ${stdout}`);
    if(done) done(stdout);
});

script.stderr.on('data', (stderr) => {
    console.log(`stderr: ${stderr}`);
    if(done) done(stderr);
});

app.get('/', (req, res) => {
    done = result => {
        res.send(`${result}`);
        done = null;
    };
    script.stdin.write(`${req.query.command}\n`);
})

app.get('/getstate', (req, res) => {
    res.send('state');
})

app.post('/setstate:state', (req, res) => res.send('posted state'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
