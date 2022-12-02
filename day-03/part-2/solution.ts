import fs from 'fs';
import path from 'path';

let file = fs.readFileSync(path.join(__filename, '../input.txt'), 'utf8');
file += '..';

const presentsToHouses = new Map<string, number>();

let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;

let roboSantaTurn = false;
for (const move of file) {
    const house = roboSantaTurn ? `${x1}_${y1}` : `${x0}_${y0}`;
    const presentsDelivered = presentsToHouses.get(house);
    if (presentsDelivered === undefined) {
        presentsToHouses.set(house, 1);
    } else {
        presentsToHouses.set(house, presentsDelivered + 1);
    }

    if (roboSantaTurn) {
        if (move === '>') {
            ++x1;
        } else if (move === '<') {
            --x1;
        } else if (move === 'v') {
            --y1;
        } else if (move === '^') {
            ++y1;
        }
    } else {
        if (move === '>') {
            ++x0;
        } else if (move === '<') {
            --x0;
        } else if (move === 'v') {
            --y0;
        } else if (move === '^') {
            ++y0;
        }
    }
    roboSantaTurn = !roboSantaTurn
}

console.log(presentsToHouses.size);