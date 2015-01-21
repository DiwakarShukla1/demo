var express = require('express'),
	app = express();

    app.use(express.static('./app'));

app.listen(8020);