function solution(user, db) {
    for (let i = 0; i < db.length; i++) {
        if (user[0] === db[i][0] && user[1] === db[i][1]) {
            return 'login';
        }       
        
        if (user[0] === db[i][0] && user[1] !== db[i][1]) {
            return 'wrong pw';
        }
    }
    
    return 'fail';
}