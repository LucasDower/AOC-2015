import fs from 'fs';
import path from 'path';

const file = fs.readFileSync(path.join(__filename, '../input.txt'), 'utf8');

const floor = file.split('').reduce((acc, cur) => {
    return acc += cur === '(' ? 1 : -1;
}, 0);

console.log(floor);