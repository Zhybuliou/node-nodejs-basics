import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToCalculateHashFor = __dirname + '/files/fileToCalculateHashFor.txt';
    const readStream = fs.createReadStream(fileToCalculateHashFor);
    const hash = crypto.createHash('sha256');

    readStream.on('data', (chunk) => {
        console.log(hash.update(chunk).digest('hex'));
      });
};

await calculateHash();
