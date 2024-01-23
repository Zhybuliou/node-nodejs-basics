const create = async () => {
    const fs = require("fs")
    const path = __dirname + '/files/fresh.txt';
    const data = 'I am fresh and young';

    fs.access(path, fs.constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else {
            fs.writeFile(path, data, (err) => {
                if (err) throw err;
                console.log('File has been created');
            });
        }
    });
};

create();