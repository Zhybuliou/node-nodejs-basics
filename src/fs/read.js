import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRead = __dirname + '/files/fileToRead.txt';
    if (!fs.existsSync(fileToRead)) {
        throw new Error('FS operation failed');
    }
    fs.readFile(fileToRead, function(error,data){
        if(error) {  
            return console.log(error);
        }
        console.log(data.toString());  
    });
};

await read();