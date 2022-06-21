function addBinary(a, b){
    const abin = `0b${a}`;
    const bbin = `0b${b}`;
    let sum = BigInt(abin) + BigInt(bbin);
    return sum.toString(2);
};