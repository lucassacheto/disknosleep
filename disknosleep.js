const express = require('express')
var schedule = require('node-schedule');
var fs = require('fs');
const app = express();
const port = 3000;


var j = schedule.scheduleJob('*/1 * * * *', function(){  
    console.log('The answer to life, the universe, and everything!');

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

});

app.get('/', (req, res) => {
  res.send('Serve ON')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});