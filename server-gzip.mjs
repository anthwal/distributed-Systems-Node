import * as zlib from 'node:zlib';
import * as http from 'node:http';
import * as fs from 'node:fs';
import * as url from 'node:url'
import path from "node:path";

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

http
  .createServer((req, res) => {
    const raw = fs.createReadStream(__dirname + '/index.html');
    const acceptEncoding = req.headers['accept-encoding'] || '';
    res.setHeader('Content-Type', 'text/plain');
    console.log(acceptEncoding);

    if (acceptEncoding.includes('gzip')) {
      console.log('encoding with gzip');
      res.setHeader('Content-Encoding', 'gzip');
      raw.pipe(zlib.createGzip()).pipe(res);
    } else {
      console.log('no encoding');
      raw.pipe(res);
    }
  })
  .listen(1337);
