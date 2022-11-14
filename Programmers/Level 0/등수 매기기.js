const avg = arr => ((arr[0] + arr[1]) / 2);

const solution = score => { 
    let temp = [];
    let rank = {};
    let result = [];
    
    for (let i = 0; i < score.length; i++) {
        temp.push(avg(score[i]));
    }
    
    let sorted = temp.slice();
    sorted.sort((a,b) => b - a);

    for (let i = 0; i < sorted.length; i++) {
        if (rank[sorted[i]] === undefined) rank[sorted[i]] = i + 1; 
    }

    for (let i = 0; i < temp.length; i++) {
        result.push(rank[temp[i]]);
    }

    return result;
}

// console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]));