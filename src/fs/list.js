import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const dirFiles = __dirname + '/files';
    if (!fs.existsSync(dirFiles)) {
        throw new Error('FS operation failed');
    }
    fs.readdir(dirFiles, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(files);
        }
    });
};

await list();