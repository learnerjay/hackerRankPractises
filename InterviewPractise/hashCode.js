/**
Hash Tables: Ransom Note
**/

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
   for (let word of note) {
        const idx = magazine.indexOf(word)
        if (idx !== -1) {
            magazine[idx] = ""
        } else {
            return console.log('No')
        }
    }
    console.log('Yes')
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
