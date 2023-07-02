const http = require('http');

http.createServer(function (req, res) {
  res.write('This time for real for real come on'); 
  res.end(); 
}).listen(8080, '0.0.0.0');
