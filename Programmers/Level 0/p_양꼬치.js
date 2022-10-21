function solution(meat, drink) {
    let answer = (drink * 2000) + (meat * 12000);
    let discount = parseInt(meat / 10);
    
    if(discount > drink) discount = drink; 
    
    return answer - discount * 2000;
}