import * as fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import { release, version } from 'os';
import  http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = new URL('', import.meta.url).pathname;
const fileC = __dirname + '/files/c.js';
const fileA = __dirname + '/files/a.json';
const fileB = __dirname + '/files/b.json';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
        unknownObject = fs.readFileSync(fileA).toString()  
} else {
    unknownObject = fs.readFileSync(fileB).toString()  
}
console.log(fs.readFileSync(fileC).toString());
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((__, res) => {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };

