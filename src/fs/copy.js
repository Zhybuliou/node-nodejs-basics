import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const folderFiles = __dirname + '/files';
    const folderFilesCopy = __dirname + '/files_copy';
        if (!fs.existsSync(folderFiles)) {
            throw new Error('FS operation failed');
        }
    
        if (fs.existsSync(folderFilesCopy)) {
            throw new Error('FS operation failed');
        }

        fs.mkdirSync(folderFilesCopy);
        const files = fs.readdirSync(folderFiles);

        for(const file of files){
            const sourceFile = `${folderFiles}/${file}`
            const copyFile = `${folderFilesCopy}/${file}`

            fs.copyFileSync(sourceFile, copyFile);
        }
};

await copy();
