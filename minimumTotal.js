var minimumTotal = function(triangle) {
    if(triangle.length === 1) return triangle[0][0];
    
    let height = triangle.length - 2;
    
    for(let level = height; level >= 0; level--){
        for(let col = 0; col < triangle[level].length; col++){
           
            triangle[level][col] += Math.min(triangle[level +1][col], triangle[level +1][col+1])
            
        }
    }
    return triangle[0][0];
};