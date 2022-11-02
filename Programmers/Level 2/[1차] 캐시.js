function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    let time = 0, cache = [];
    for(let i = 0; i < cities.length; i++) {
        if(cache.length < cacheSize) {
            if(cache.includes(cities[i].toLowerCase())) {
                time++;
                cache.splice(cache.indexOf(cities[i].toLowerCase()), 1);
                cache[cache.length] = cities[i].toLowerCase();
                continue;
            } else {
                cache.push(cities[i].toLowerCase());
                time += 5;
                continue;   
            }
        }
        
        if(cache.length >= cacheSize) {
            if(cache.includes(cities[i].toLowerCase())) {
                time++; 
                cache.splice(cache.indexOf(cities[i].toLowerCase()), 1);
                cache[cache.length] = cities[i].toLowerCase();
            } else {
                time += 5;
                cache.shift();
                cache.push(cities[i].toLowerCase());
            }
        }
    }
    return time;
}

/* TC
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 50
console.log(solution(4, ["1", "2", "3", "4", "2"])); // 21
console.log(solution(30, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])); // 21
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 60
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 60
console.log(solution(4, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
console.log(solution(3, ["A", "B", "A"])); // 11
console.log(solution(10, ["1", "2", "3", "2"])); // 16
console.log(solution(0, ["A", "B", "A", "A", "A"])); // 25
*/