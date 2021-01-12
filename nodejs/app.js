const express = require('express')
const app = express()
const logger = require('pino')()

const logConsole = (...args) => {
    const now = new Date().toISOString();
    console.log(now + " - " + args.join(" - "));
};

const logConsoleWithNFormat = (...args) => {
    const now = new Date().toISOString();
    console.log(now + " - " + args.join(" - "));
    console.log("[" + now + "] - " + args.join(" - "));
};

app.get('/', (req, res) => {
    logConsole("Received a new request.");
    logConsole("Sending reponse.");
    res.send('Hello World!');
});

app.get('/json', (req, res) => {
    logger.info("Received a new request.");
    logger.info("Sending reponse");
    res.send({"msg":"hello world!!!"});
});

app.get('/error-json', (req, res) => {
    logger.info("Received a new request.");
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
    logConsole("Received a new request.");
    try {
        var list = null;
        var k = list[5];
        logConsole("no error");
        res.send("no error");
    } catch (err) {
        logConsoleWithNFormat("Error", "Error occured... ", err.stack);
        res.send(err);
    } 
});

app.listen(3000, () => logConsole('Server ready...'))