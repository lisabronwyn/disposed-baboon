# Michael and Lisa's FCC Basic Algorithm Scripting

We are doing the exercises from this link for challenge #86 from GuildCrafts: https://github.com/GuildCrafts/web-development-js/issues/86

Complete the basic algorithm scripting section here:
https://www.freecodecamp.com/map

##Reverse a String 
```javascript

function reverseString(str) {
  
  var splitString = str.split("");
  
  var reverseArray = splitString.reverse();
  
  var joinArray = reverseArray.join("");
  
  return joinArray;
}

reverseString("hello");
```

##Factorialize a Number
```javascript
function factorialize(num) {

  if(num === 0) {
    return 1;
  }
  else {
    return num * factorialize(num-1);
  }
}
```

##Check for Palindromes
```javascript
function palindrome(str) {
  var re = /[\W_]/g;
  var hatersGonHate = str.toLowerCase().replace(re, '');
  var splitPalindrome = hatersGonHate.split('').reverse().join('');
  
  return hatersGonHate === splitPalindrome;
} 

palindrome("eye");
```

##Find the Longest Word in a String 
```javascript
function findLongestWord(str) {
 
  var strSplit = str.split(' ');

  var longestWord = 0;

  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length; 
     }
  }
 
  return longestWord; 
}

findLongestWord("The quick brown fox jumped over the lazy dog");
```

##Title Case a Sentence 
```javascript
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  
  return str.join(' ');
}

titleCase("I'm a little tea pot");
```

##Return Largest Numbers in Arrays 
```javascript
function largestOfFour(arr) {
var results = [];
for (var n = 0; n < arr.length; n++) {
var largestNumber = 0;
for (var sb = 0; sb < arr[n].length; sb++) {
if (arr[n][sb] > largestNumber) {
largestNumber = arr[n][sb];
}
}

results[n] = largestNumber;
}

return results;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
##Confirm the Ending 
```javascript
function confirmEnding(str, target) {
// "Never give up and good luck will find you."
// -- Falcor
return target === str.substr(str.length - target.length);
}

confirmEnding("Bastian", "n");
```
##Repeat a string repeat a string 
```javascript
function repeatStringNumTimes(str, num) {
var accumulatedStr = '';

while (num > 0) {
accumulatedStr += str;
num--;
}

return accumulatedStr;
}
```

##Truncate a string 
```javascript
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

```
##Chunky Monkey 

##Slasher Flick 

Mutations 

Falsy Bouncer 

Seek and Destroy 

Where do I belong?

Caesars Cipher 
