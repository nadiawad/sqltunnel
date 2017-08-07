require('http').createServer(function(req, res) {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write('<!DOCTYPE html>');
		res.write('<html>');
		res.write('<head>');
		res.write('<meta charset="UTF-8">');
		res.write('<title>SQL Tunnel</title>');
		res.write('</head>');
		res.write('<body>');
		res.write('	<a href="https://github.com/amcginlay/sqltunnel/blob/master/README.md">SQL Tunnel</a>');
		res.write('</body>');
		res.end('</html>');
}).listen(process.env.PORT || 8000);
