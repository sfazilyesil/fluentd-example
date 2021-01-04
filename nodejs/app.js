const express = require('express')
const app = express()
const logger = require('pino')()

app.get('/', (req, res) => {
    console.log("Sending reponse");
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
        console.log("no error");
        res.send("no error");
    } catch (err) {
        console.log("Err:", err);
        res.send(err);
    } 
});
app.listen(3000, () => console.log('Server ready'))