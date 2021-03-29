

function initSeed() {

const SEED = '0x12312312544354361212312542365436123';

return (seed = SEED) => {

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

}