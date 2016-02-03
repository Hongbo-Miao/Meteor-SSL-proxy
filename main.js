var PATH_TO_KEY = "/Users/hongbo-miao/Clouds/Git/ssl/server.key",
    PATH_TO_CERT = "/Users/hongbo-miao/Clouds/Git/ssl/server.crt";
    //PATH_TO_CHAIN = "";

var fs = require('fs'),
    httpProxy = require('http-proxy');

var options = {
  ssl: {
    key: fs.readFileSync(PATH_TO_KEY, 'utf8'),
    cert: fs.readFileSync(PATH_TO_CERT, 'utf8'),
    //ca : fs.readFileSync(PATH_TO_CHAIN, 'utf8')
  },
  target : "http://localhost:3000",
  ws: true,
  xfwd: true
};

var server = httpProxy.createProxyServer(options).listen(443);
