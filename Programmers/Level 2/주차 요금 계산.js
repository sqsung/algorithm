//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/92341

// calculating the time difference between a car's entry and exit 
function in_n_out(i, o) {
    let time1 = new Date(2022, 10, 27, i[0], i[1], 0);
    let time2 = new Date(2022, 10, 27, o[0], o[1], 0);
    return (time2 - time1) / 1000 / 60;
}

// sorting 'records' by car numbers
function sort_2d_arr(a, b) {
    if (a[2] === b[2]) return 0;
    else return (a[2] < b[2]) ? -1 : 1;
}

// comparing time with fees array
function finalFee(fees, num) {
    return fees[1] + (Math.ceil( (num - fees[0]) / fees[2] ) ) * fees[3];
}

function solution(fees, records) {
    let splited = [],
        perCarArr = [],
        answer = [];

    for(let i = 0; i < records.length; i++) {
        splited.push(records[i].split(/ |:/));
    }
 
    splited.sort(sort_2d_arr);

    let perCar = 0;
    while(splited.length > 0) {
        if(splited.length >= 2 && splited[0][3] === 'IN' && splited[1][3] === 'OUT') {
            let inTime = [Number(splited[0][0]), Number(splited[0][1])];
            let outTime = [Number(splited[1][0]), Number(splited[1][1])];
            perCar += in_n_out(inTime, outTime);
            
            if(splited.length === 2 || splited[1][2] !== splited[2][2]) {
                perCarArr.push(perCar);
                perCar = 0;
                splited.shift();
                splited.shift();
            } else {
                splited.shift();
                splited.shift();
            }
        } else if(splited.length === 1 || splited[0][3] === 'IN' && splited[1][3] === 'IN') {
            let inTime = [Number(splited[0][0]), Number(splited[0][1])];
            let outTime = [23, 59];
            perCar += in_n_out(inTime, outTime);
            
            perCarArr.push(perCar);
            perCar = 0;
            splited.shift();
        }   
    }

    for(let i = 0; i < perCarArr.length; i++) {
        if(perCarArr[i] <= fees[0]) answer.push(fees[1]);
        else answer.push (finalFee(fees, perCarArr[i]));
    }

    return answer;
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))
console.log(solution([120, 0, 60, 591], ["16:00 3961 IN","16:00 3202 IN","18:00 3961 OUT","18:00 3202 OUT","23:58 3961 IN"]))
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]))
