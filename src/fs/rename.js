import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const wrongFilename = __dirname + '/files/wrongFilename.txt';
    const properFilename = __dirname + '/files/properFilename.md';

    if (!fs.existsSync(wrongFilename)) {
        throw new Error('FS operation failed');
    }
    if (fs.existsSync(properFilename)) {
        throw new Error('FS operation failed');
    }
    fs.rename(wrongFilename, properFilename, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await rename();