import { exists } from 'fs';
import express from 'express';
import env from 'node-env-file';

let path = `${__dirname}/process.env`;

exists(path, () => env(path));

let app = express();
let router = express.Router();

app
  /* public folder serving */
  .use('/public', express.static(`${__dirname}/compiled`))

  /* Main html template serving */
  .get('/', (req, res) => res.sendFile(`${__dirname}/compiled/index.html`))

  /* attaching `router` to app */
  .use(router);

app.listen(+process.env.PORT || 3000);