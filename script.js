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

// digitial root problem. 16  -> 1 + 6 = 7

function digitialRoot(num){
    num.toString();
    for(var i = 0; i < num.length-1; i++){
        console.log(i);
    }
}
console.log(digitialRoot(16));


// Given an array of 1000 integers, write a function that returns the 10 largest numbers. unsorted
// then do to the Nth largest numbers

function largest10(numArr){


}

largest10([1234,123,2,5,7,8,9,10,33,13,12,65]);

// 5 cards, compare who has poker hands 

function compare(hand1, hand2){

}

// given two strings, find the character difference between two strings 



// increment string
for (var i = 0; i < split.length; i++) {
    if (isNaN(split[i])) {
        word.push(split[i])
    } else if (!isNaN(split[i])) {
        number.push(split[i])
    }
}




word = word.join(''); //word is defined, concat this with incremetedNumber
numCount = number.length;




console.log(number)




for (var n = 0; n < number.length; n++) {

    console.log('check', number[n])

    if (number[n] > '0') {
        console.log('not zero, exit')

        break;
    } else if (number[n] === '0') {
        console.log('this is pre-zero', number[n])
        zeros.push(number[n])
        zeroCount++;
    }



console.log(zeros)

number = number.join('');

if (numCount === zeroCount) {
    number++;
    number = number.toString();
    zeros.pop();
    zeros = zeros.join('');
    return word + zeros + number
}

zeros = zeros.join('');
number++;
number = number.toString();

return word + zeros + number

}








