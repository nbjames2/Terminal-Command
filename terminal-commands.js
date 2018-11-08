const fs = require('fs');

module.exports.ls = () => {
    fs. readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = (name, content) => {
    fs.writeFile(name, content, 'utf8', (err) => {
        if (err) throw err;
        console.log('file ' + name + ' created.');
    });
};

module.exports.mkdir = (path) => {
    fs.mkdir(path, (err) => {
        if (err) throw err;
        console.log(path + ' created.');
    });
};