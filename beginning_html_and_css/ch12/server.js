/**
 * Created by babyduncan on 6/3/15.
 */

var http = require("http");
var url = require("url");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"})
    var pathname = url.parse(request.url).pathname;
    var arg1 = url.parse(request.url, true).query.a;
    var arg2 = url.parse(request.url, true).query.b;
    response.write("Hello World : params : " + "a=" + arg1 + " and b=" + arg2);
    response.end();
}).listen(8888);

//    http://localhost:8888/?a=aaa&b=bbb
//    Hello World : params : a=aaa and b=bbb