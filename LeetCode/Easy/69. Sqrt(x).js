/*
1. without built-in functions or methods
*/ 

var mySqrt = function(x) {
  let num = 1; 
  
  while(true) {
      let sum = num * num; 
      if (sum >= x) {
        if (sum === x) break;
        else if (sum > x) {
          num -= 1;
          break;
        }
      }
      else num++;
  }
  return num;
};

/*
2. with method 
*/ 

function mySqrt(x) {
  return Math.sqrt(x) << 0;
}

//console.log(mySqrt(8));