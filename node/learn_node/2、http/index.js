const http = require("http");
const fs = require("fs");
http
	.createServer((req, res) => {
		if (req.url === "/") {
			fs.createReadStream(__dirname + "/index.html").pipe(res);
    
		}
	})
	.listen(3000);
