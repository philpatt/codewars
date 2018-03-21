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
    var words = str.split(' ');
    for(var i=words.length-1; i=0; i--){
        console.log(i);
    }
}
console.log(reverseWord('Well hello there'));
