const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

app.use(express.json(),express.urlencoded({extended:true}),cors());

require('./server/config/database.config');
require('./server/routes/dog.routes')(app);