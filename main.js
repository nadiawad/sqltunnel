require('http').createServer(function(req, res) {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('SQL Tunnel (e.g. cf ssh -L 63306:10.193.144.75:3306 sqltunnel)\n\n');
}).listen(process.env.PORT || 8000);
