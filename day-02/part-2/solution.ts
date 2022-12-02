import fs from 'fs';
import path from 'path';

const file = fs.readFileSync(path.join(__filename, '../input.txt'), 'utf8');

let ribbon = 0;
file.split('\n').forEach((line) => {
    const dims = line.split('x')
        .map(x => parseInt(x))
        .sort((a, b) => a - b);

    ribbon += 2 * dims[0] + 2 * dims[1];
    ribbon += dims[0] * dims[1] * dims[2];
});

console.log(ribbon);