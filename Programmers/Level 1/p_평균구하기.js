function solution(arr) {
    let answer = 0,
        sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);

    answer = (sum / (arr.length));

    return answer;
}

