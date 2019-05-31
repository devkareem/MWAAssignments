const fs = require('fs');
const path = require('path');
let query = '';

const readFile = (query) => {
    let content = '';
    const readable = fs.createReadStream(path.join(__dirname, query.name), { encoding: 'utf-8' });
    readable.on('data', function (chunk) {
        content += chunk;
    });

    readable.on('end', function () {
        process.send(content);
       process.exit(1);
    });

}

process.on('message', (message) => {
    console.log(message);

    if (message.name) {
        readFile(message);
    }
});

