var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var mime = require('mime');

var app = http.createServer();

app.on('request', function(req, res){
	
	var method = req.method.toLowerCase();
	var pathname = url.parse(req.url).pathname;
	// 获得文件硬盘地址
	var hardpath = path.join(__dirname, 'public', pathname);
	console.log(hardpath);
	var types = mime.getType(hardpath);
	console.log(types);
	
	res.writeHead(200, {
		'content-type': types
	});
	fs.readFile(hardpath, function(error, result){
		res.end(result);
	});
		
});

app.listen(3000);
console.log("服务器启动成功！");