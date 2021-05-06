const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

//End Point for getting video
app.get('/video', (req, res) => {
    res.sendFile('assets/test.mp4', { root: __dirname });
});

app.get('/test', (req, res) => {
  res.send("working fine");
});

app.get('/downloadVideo', (req, res) => {
    res.download(__dirname+'/assets/test.mp4',"download.mp4");
});

app.listen(4000, () => {
    console.log('Listening on port 4000!')
});