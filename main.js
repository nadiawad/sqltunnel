require('http').createServer(function(req, res) {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('SQL Tunnel\n\n' + (process.env.VCAP_SERVICES || 'no service bindings') + '\n');
}).listen(process.env.PORT || 8000);
