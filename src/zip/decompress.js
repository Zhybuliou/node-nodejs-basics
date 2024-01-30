import * as fs from 'fs'
import zlib from 'zlib';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = __dirname + '/files/fileToCompress.txt';
    const archive = __dirname + '/files/archive.gz';
    if (!fs.existsSync(archive)) {
        throw new Error('You not have archive.gz');
    }
    const readableStream = fs.createReadStream(archive);
    const writeableStream = fs.createWriteStream(file);
    const unzip = zlib.createGunzip();

    readableStream.pipe(unzip).pipe(writeableStream);
    writeableStream.on('finish', () => {
        fs.unlinkSync(archive);
    })
};

await decompress();