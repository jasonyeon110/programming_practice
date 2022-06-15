function lengthOfLastWord(str){
    let sArrary = s.split(" ");

    for(let i = sArrary.length-1; i >= 0; i--){
        if(sArrary[i].length !== 0){
            return sArrary[i].length;
        }
    }
};