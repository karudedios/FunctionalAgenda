let env = require('node-env-file');
env(`${__dirname}/process.env`);

let express = require('express');
let app = express();
let router = express.Router();

app.use(router);

app.get('/', (req, res) =>
    res.sendFile(`${__dirname}/compiled/index.html`));

app.listen(+process.env.PORT);