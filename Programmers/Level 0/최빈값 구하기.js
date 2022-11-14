function solution(arr) {
    let sliced = arr.slice();
    let slicedSet = [...new Set(sliced)];
    let temp = [];
    
    function countingFunc(num, arr) {
        let count = 0;
        
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] === num) count++;
        }    
        return count;
    }

    function el(value, occurence) {
        this.value = value;
        this.occurence = occurence;
    }
    
    for(let i = 0; i < slicedSet.length; i++) {
        let nEl = new el(slicedSet[i], countingFunc(slicedSet[i], arr));
        temp.push(nEl);      
    }
    
     
    temp.sort((a,b) => b.occurence - a.occurence);
    return temp.length < 2 || temp[0].occurence !== temp[1].occurence
        ? temp[0].value 
        : -1;
}

// console.log(solution([1, 2, 3, 3, 3, 4]))