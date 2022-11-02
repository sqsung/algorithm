//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    let reportPerUser = {},
        uniqueReports = [...new Set(report)],
        reportedPeople = [];
    
    // 1. Reorganizing who reported who
    for(let i = 0; i < id_list.length; i++) {
        reportPerUser[id_list[i]] = [];
    }

    for(let i = 0; i < uniqueReports.length; i++) {
        let splitted = uniqueReports[i].split(' ');

        reportedPeople.push(splitted[1]);
        reportPerUser[splitted[0]].push(splitted[1]);
    }

   // 2. Identifying who is banned
    let uniqueReportedPeople = [...new Set(reportedPeople)];
    let banned = [];

    for(let i = 0; i < uniqueReportedPeople.length; i++) {
        let count = reportedPeople.filter(user => user === uniqueReportedPeople[i]).length;
        count >= k ? banned.push(uniqueReportedPeople[i]) : banned;
    }

    // 3. Identifying how many report results each user has to get
    let answer = [];
    let count = 0;
    for(let keys in reportPerUser) {
        for(let i = 0; i < reportPerUser[keys].length; i++) {
            if (banned.includes(reportPerUser[keys][i])) count++; 
        }
        answer.push(count);
        count = 0;
    }

    return answer;
}


// console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));
