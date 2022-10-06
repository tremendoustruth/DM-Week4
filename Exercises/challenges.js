// October 3 2022
// In this challenge, you’ll write a decoder using the classic Caesar Cipher.
// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. 
// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello" 

let alphabet = "abcdefghijklmnopqrstuvwxyz";

function decodeMe(str){ 
    let decode="";   // initializes empty string
    let skipper = Number(str[0]); //assumes index 0 of the string is a single digit number; 
    for (let i = 1; i<str.length; i++){ 
        let newindex = alphabet.indexOf(str[i]) + skipper  
        decode += alphabet[newindex]
    }
    return decode;
}

let sample1 = "2fcjjm" // --> should return "hello"
console.log(decodeMe(sample1)); //confirmed


// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:
// printDigits(1)
// // 1

// printDigits(314)
// // 4
// // 1
// // 3

// printDigits(12)
// // 2
// // 1

function printDigits(int){
    let counter = 0;
    while (counter < int){;
        counter = int%10
        console.log(counter)
        counter++;
    }
}

printDigits(413);

//October 4 2022
//Write a function to remove all duplciate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

let sample2 = "iwanttoclimbamountain"
function makeUnique(str){
    let uniqueset = new Set(str);  // automatically removes duplicate values(set definition) and assigns the new set to variable unique set.
    let uniquestr = Array.from(uniqueset).join(""); //converts the set to a string using the Array.from and join methods
    return uniquestr; //returns desired value.
}
console.log(makeUnique(sample2));

//class review 

const makeUnique2 = str => [...new Set(str)].join('');

function makeUnique(string) {
    let unique = '' // initializes empty string
    for(const char of string){
        if (unique.includes(char) == false){
            unique += char;

        }
    }
    return unique
}
console.log(makeUnique('helloworld'))
console.log(makeUnique('iwanttoclimbamountain'))
console.log(makeUnique('abababaghghetrfghbwt'))



// October 5 2022 
// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.

// Note that an empty string is also considered valid.

function isValid(str){
    //create stack array to track parenthesis 
    let tracker = [];
    for (let i = 0; i < str.length; i++){
        let char = tracker[tracker.length-1] // 
        if (str[i] === "("){
            tracker.push(str[i])
        } else if (char === "(" && str[i] === ")"){
            tracker.pop() 
        } else return false
    }

}

sample1 = ""
console.log(isValid(sample1));


//October 6 2022
// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.



function tshirtSorter(str){
    let s = ""
    let m = ""
    let l = ""
    for (char of str){
        if (char === "s"){s+=char}
        if (char === "m"){m+=char}
        if (char === "l"){l+=char}
    }
    return s+m+l
}

console.log(tshirtSorter('smllms'));

