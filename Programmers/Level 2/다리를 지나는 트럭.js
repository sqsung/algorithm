function solution(bridge_length, weight, truck_weights) {
    let queue = Array(bridge_length).fill(0),
        curWeight = 0,
        time = 0;
    
    time++;
    queue.shift();
    curWeight += truck_weights[0];
    queue.push(truck_weights.shift());
    
    while (curWeight > 0) {
        time++;
        curWeight -= queue.shift();

        if (curWeight + truck_weights[0] <= weight && truck_weights.length > 0) {
            curWeight += truck_weights[0];
            queue.push(truck_weights.shift());
          } else queue.push(0);
    }
    
    return time;
  }

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));