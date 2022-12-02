import fs from 'fs';
import path from 'path';

const file = fs.readFileSync(path.join(__filename, '../input.txt'), 'utf8');

let floor = 0;
let i = 0;

for (i = 0; i < file.length; ++i) {
    floor += file[i] === '(' ? 1 : -1;
    if (floor === -1) {
        break;
    }
}
console.log(i + 1);