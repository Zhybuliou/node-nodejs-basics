import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToCalculateHashFor = __dirname + '/files/fileToRead.txt';
    const readStream = fs.createReadStream(fileToCalculateHashFor);
    readStream.on('data', (chunk) => process.stdout.write(chunk));
};

await read();