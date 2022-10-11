function solution(progress, speeds) {
    let arr = [], result = [], count = 1, prev = 1, finish = 1;

    for(let i = 0; i < progress.length; i++) {
        let speed = speeds[i];
        
        while(progress[i] + speed < 100) {
            count++;
            speed += speeds[i];
        }
        arr.push(count);
        count = 1;
    }
    
    while(arr.length > 0) {
        let first = arr[0];
        let count = arr.findIndex(num => first < num);

        if(count !== -1) {
            result.push(count);
            arr.splice(0, count);
        } else {
            result.push(arr.length);
            arr.splice(0, arr.length);
        }
    }
    return result;
}




console.log(solution([93, 30, 55], [1, 30, 5]))
/*
progress        speeds      result
[93, 30, 55]	[1, 30, 5]	[2, 1]
*/