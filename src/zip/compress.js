import * as fs from 'fs'
import zlib from 'zlib';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = __dirname + '/files/fileToCompress.txt';
    const archive = __dirname + '/files/archive.gz';
    if (!fs.existsSync(file)) {
        throw new Error('You not have file fileToCompress.txt');
    }
    const readableStream = fs.createReadStream(file);
    const writeableStream = fs.createWriteStream(archive);
    const gzip = zlib.createGzip();

    readableStream.pipe(gzip).pipe(writeableStream);
    writeableStream.on('finish', () => {
        fs.unlinkSync(file);
    })
};

await compress();