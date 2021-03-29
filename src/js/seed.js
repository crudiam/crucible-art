
const SEED = '0x1183710963576842723260160191344579116124668017927';

function initializeSeed(seed = SEED) {

    if (typeof seed === 'number') seed = seed.toString(16);
    if (seed.startsWith('0x')) seed = seed.slice(2);

    const byte = i => parseInt(seed.substr(i, 2), 16);

    let byteIndex = 0;
    const nextByte = () => byte(byteIndex++ % seed.length);
    
    const updateRandomSeed = () => randomSeed(nextByte());

    return { 
        raw: seed,
        nextByte,
        updateRandomSeed
    };
}
