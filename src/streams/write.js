import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = __dirname + '/files/fileToWrite.txt';
    const writeStream = fs.createWriteStream(file);
    process.stdin.on('data', (chunk) => writeStream.write(chunk));

};

await write();