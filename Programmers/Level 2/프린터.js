//problem at : https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    let topPriority = Math.max(...priorities),
        count = 0;

    function Element(name, priority, location = 'Not Here') {
        this.name = name;
        this.priority = priority;
        this.location = location;
    }

    let pq = [];
    for(let i = 0; i < priorities.length; i++) {
        let el;
        if(i === location) el = new Element(`paper${i}`, priorities[i], 'Here');
        else el = new Element(`paper${i}`, priorities[i]);
        pq.push(el);
    }
    
    while(true) {
        for(let i = 0; i < pq.length; i++) {
            if(pq[0].priority < topPriority) {
                pq.push(pq[0]);
                pq.shift();
            } else if(pq[0].priority === topPriority) {
                if(pq[0].location === 'Here') {
                    count++;
                    return count;
                } else {
                    pq.shift();
                    priorities.splice(priorities.indexOf(topPriority), 1);
                    topPriority = Math.max(...priorities);
                    count++;
                }
            }
        }
    }
}

// console.log(solution([1, 1, 9, 1, 1, 1]	, 0));

