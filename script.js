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

// create a function that determines if a word is a palindrome

function isPalindrome(str){
    var reversedArr = [];
    var words = str.split('');
    for(var i = words.length -1; i>=0 ;i-- ){
        // console.log(reversedArr);        
        reversedArr.push(words[i]);
    }

    if(str == reversedArr.join('')){
        return 'palindrome';
    } else {
        return 'not';
    }
}
console.log(isPalindrome('poop'));



// Given an array of 1000 integers, write a function that returns the 10 largest numbers. unsorted

function largest10(numArr){


}

largest10([1234,123,2,5,7,8,9,10,33,13,12,65]);

// 5 cards, compare who has poker hands 

function compare (hand1, hand2){
    
}