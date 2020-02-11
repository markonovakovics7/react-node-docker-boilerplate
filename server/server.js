const express = require('express');
const path = require('path');

// Constants


//const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
//app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Test!!!!'
  };
  res.send(JSON.stringify(data, null, 2));
});
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Hello world, Woooooeeeee!!!!'
  };
  res.send(JSON.stringify(data, null, 2));
});

// All remaining requests return the React app, so it can handle routing.
/* app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
}); */


var server = app.listen(8001, function(){
  var port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});