import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const path = __dirname + '/files/fresh.txt';
    const content = 'I am fresh and young';
    
    fs.access(path, fs.constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else {
            fs.writeFile(path, content, (err) => {
                if (err) throw err;
            });
        }
    });
};

create();