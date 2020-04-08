const http = require("http");
const url = require("url");
//create a server object:
const server = http.createServer(function(req, res) {
  const parsedUrl = url.parse(req.url);
  console.log(parsedUrl);
  //if(req.method === 'GET' && req.)
  res.write("Hello World!"); //write a response to the client
  res.end(); //end the response
});

server.listen(8080); //the server object listens on port 8080
