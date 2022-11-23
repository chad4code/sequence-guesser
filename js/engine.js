// Load audio
const noteArr = ['do', 'mi', 'so', 're', 'fa', 'la'];
const DO = new Audio('./audio/do.mp3');
const RE = new Audio('./audio/re.mp3');
const MI = new Audio('./audio/mi.mp3');
const FA = new Audio('./audio/fa.mp3');
const SO = new Audio('./audio/so.mp3');
const LA = new Audio('./audio/la.mp3');
const soundArr = [DO, RE, MI, FA, SO, LA];

// Global
let score = 0;
let incNum = 0;
let seqArr = [];
const genRandNum = length => {
    return Math.floor(Math.random()*length);
}

// Generate sequence
const sequenceIterator = () => {
    if (incNum < 4) {
        seqArr.push(soundArr[genRandNum(6)]);
        incNum++;
    } else if (incNum >= 4 && incNum <= 10) {
        const numArr = [1, 2, 3];
        const randInd = numArr[genRandNum(numArr.length)];
        if (randInd === 1) {
            const noteOne = soundArr[genRandNum(6)];
            let noteTwo;
            do {
                noteTwo = soundArr[genRandNum(6)];
            } while (noteTwo === noteOne);
            seqArr.push([noteOne, noteTwo]);
        } else {
            seqArr.push(soundArr[genRandNum(6)]);
        }
        incNum++;
    } else if (incNum > 10 && incNum <= 20) {
        const numArr = [1, 2, 3, 4];
        const randInd = numArr[genRandNum(numArr.length)];
        let contArr = soundArr;
        if (randInd < 3) {
            seqArr.push(soundArr[genRandNum(6)]);
        } else if (randInd >= 3) {
            let pushArr = [];
            let testNote;
            for (i = 0; i < (randInd - 1); i++) {
                let testInd = genRandNum(contArr.length);
                testNote = contArr[testInd];
                pushArr.push(testNote);
                contArr.splice(testInd, 1);
            }
            seqArr.push(pushArr);
        }
    } else if (incNum > 20) {
        const numArr = [1, 2, 3, 4, 5, 6];
        const randInd = numArr[genRandNum(numArr.length)];
        let contArr = soundArr;
        let pushArr = [];
        let testNote;
        for (i = 0; i < randInd; i++) {
            let testInd = genRandNum(contArr.length);
            testNote = contArr[testInd];
            pushArr.push(testNote);
            contArr.splice(testInd, 1);
        }
        seqArr.push(pushArr);
    }
}
// Set beginning play sequence
sequenceIterator();