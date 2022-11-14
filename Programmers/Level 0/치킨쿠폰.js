function solution(chicken) {
    if (chicken < 10) return 0;
    let service = Math.floor(chicken / 10);
    return service + solution(service + (chicken % 10));
};

// console.log(solution(100));
// console.log(solution(1081));