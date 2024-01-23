import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRemove = __dirname + '/files/fileToRemove.txt';
    if (!fs.existsSync(fileToRemove)) {
        throw new Error('FS operation failed');
    }
    fs.unlinkSync(fileToRemove)
};

await remove();
