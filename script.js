// Code Wars problem

function factorialize(num){
    for(var answer=1; num>0; num--){
        answer*=num;
    }
    return answer;
}
console.log(factorialize(5));

