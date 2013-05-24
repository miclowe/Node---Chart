var http = require('http');
var data = 'callback([{"title":"January","value":60.19}, {"title":"February","value":56.69}, {"title":"March","value":37.77}, {"title":"April","value":22.74}, {"title":"May","value":15.2}])';

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/javascript"});
  response.write(data);
  response.end();
});

server.listen(80);