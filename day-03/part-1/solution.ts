import fs from 'fs';
import path from 'path';

let file = fs.readFileSync(path.join(__filename, '../input.txt'), 'utf8');
file += '.';

const presentsToHouses = new Map<string, number>();

let x = 0;
let y = 0;
for (const move of file) {
    const house = `${x}_${y}`;
    const presentsDelivered = presentsToHouses.get(house);
    if (presentsDelivered === undefined) {
        presentsToHouses.set(house, 1);
    } else {
        presentsToHouses.set(house, presentsDelivered + 1);
    }

    if (move === '>') {
        ++x;
    } else if (move === '<') {
        --x;
    } else if (move === 'v') {
        --y;
    } else if (move === '^') {
        ++y;
    }
}

console.log(presentsToHouses.size);