var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.input);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
    //  response.writeHead(404);
    //  response.end();
      return response.writeHead(404);
    }
      var i;
    function largestPrimeFactor(n){
      i = 2;
      while (i<=n){
        if (n%i == 0){
          n/=i;
        }else{
          i++;
        }
      }
console.log(i);
}
var a = queryData.input * 1;
largestPrimeFactor(a)
i += "";

    response.writeHead(200);
    response.end('output = ' + i);
});
app.listen(8080);
