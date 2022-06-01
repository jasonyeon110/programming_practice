function lcp(strs: string[]): string{
    if(strs.length ===0){
        return "";
    }
    let commonP = strs[0];
    for(let str of strs){
        while(str.indexOf(commonP) != 0){
            commonP = commonP.substring(0, commonP.length-1);
        }
    }
    return commonP;
}

