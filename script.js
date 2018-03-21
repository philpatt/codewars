// Code Wars problem

// create a function that determines the factorial of any number
function factorialize(num){
    for(var answer=1; num>0; num--){
        answer*=num;
    }
    return answer;
}
console.log(factorialize(5));

// create a function that reverses the WORDS in a string

function reverseWord(str){
    var reversedArr = [];
    var words = str.split(' ');
    for(var i=words.length-1; i>=0; i--){
       reversedArr.push(words[i]);
    }
    return reversedArr.join(' ');
}
console.log(reverseWord('well hello there'));
