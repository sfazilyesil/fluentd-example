const express = require('express')
const app = express()
const logger = require('pino')()

const logConsole = (...args) => {
    const now = new Date().toISOString();
    console.log(now + " - " + args.join(" - "));
};

app.get('/', (req, res) => {
    logConsole("Sending reponse");
    res.send('Hello World!');
});

app.get('/json', (req, res) => {
    logger.info("Sending reponse");
    res.send({"msg":"hello world!!!"});
});

app.get('/error-json', (req, res) => {

    try {
        var list = null;
        var k = list[5];
        logger.info("no error");
        res.send("no error");
    } catch (err) {
        logger.error(err, "Error occured!..");
        res.send(err);
    } 
});

app.get('/error', (req, res) => {
    try {
        var list = null;
        var k = list[5];
        logConsole("no error");
        res.send("no error");
    } catch (err) {
        logConsole("Err: ", err.stack);
        res.send(err);
    } 
});

app.listen(3000, () => logConsole('Server ready'))