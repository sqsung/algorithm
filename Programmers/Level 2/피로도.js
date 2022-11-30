// problem at: https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
    let arr = [];
    let visited = new Array(dungeons.length).fill(false);

    function DFS(k, dungeons, visited, count) {
        arr.push(count);
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                let reducedHp = k - dungeons[i][1];
                DFS(reducedHp, dungeons, visited, count + 1);
                visited[i] = false;
            }
        }
    }
    DFS(k, dungeons, visited, 0);
    return Math.max(...arr);
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));