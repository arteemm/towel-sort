
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix && matrix.length !== 0){
   
    for(let i = 0; i <= matrix.length-1; i++){

        if(i%2 === 0){
            for (let j = 0; j <= matrix[i].length - 1; j++){
                arr.push(matrix[i][j])
            } 
        } else {
            for (let f = matrix[i].length - 1; f >= 0; f--){
                arr.push(matrix[i][f])
            }
            }
    }

    return arr;
} else{
    return [];
}
    
}


