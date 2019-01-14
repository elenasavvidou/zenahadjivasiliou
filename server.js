const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.get('/aboutme', (req, res) => {
    res.sendFile(path.join(__dirname, './aboutme.html'));
});

app.get('/publications', (req, res) => {
  res.sendFile(path.join(__dirname, './publications.html'));
});

app.get('/research', (req, res) => {
  res.sendFile(path.join(__dirname, './research.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
