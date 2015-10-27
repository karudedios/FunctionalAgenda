import { exists } from 'fs';
import express from 'express';
import env from 'node-env-file';

let path = `${__dirname}/process.env`;

exists(path, () => {
  env(path);
});

let app = express();
let router = express.Router();

app.use(router);

app.get('/', (req, res) => res.sendFile(`${__dirname}/compiled/index.html`));

app.listen(+process.env.PORT || 3000);