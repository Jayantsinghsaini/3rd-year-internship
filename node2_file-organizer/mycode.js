const fs = require('fs');
const path = require('path');

const folderName = 'mycode';

// Replace async readdir with sync
const files = fs.readdirSync(`./${folderName}`);

for (let index = 0; index < files.length; index++) {
    let ext = path.extname(files[index]);
    try {
        // Use mkdirSync with { recursive: true } to avoid error if folder exists
        fs.mkdirSync(`./${folderName}/${ext}`, { recursive: true });
        console.log('Folder created!');
    } catch (err) {
        throw err;
    }
}

// Replace second async readdir with sync
const items = fs.readdirSync(`./${folderName}`);

const onlyFiles = [];

for (let i = 0; i < items.length; i++) {
    const fullPath = path.join(folderName, items[i]);

    try {
        const stats = fs.statSync(fullPath);

        if (stats.isFile()) {
            onlyFiles.push(items[i]);
        }
    } catch (err) {
        throw err;
    }
}

// Now move files synchronously
for (let index = 0; index < onlyFiles.length; index++) {
    let ext = path.extname(onlyFiles[index]);

    try {
        fs.renameSync(`./${folderName}/${onlyFiles[index]}`,`${folderName}/${ext}/${onlyFiles[index]}`);
        console.log('File moved!');
    } catch (err) {
        throw err;
    }
}
