# Michael and Lisa's FCC Basic Algorithm Scripting

##Specifications
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

 var alphabeticalOnlyRe = /[\W_]/g; 
 
 var lowerCaseStr = str.toLowerCase().replace(re, '');
 
 var splitPalindrome = lowerCaseStr.split('').reverse().join('');
 
 return lowerCaseStr === splitPalindrome;
 
}

palindrome("eye");
```

##Find the Longest Word in a String 
```javascript
function findLongestWord(str) {
 
  var strSplit = str.split(' ');

  var longestWord = 0;

  for(var i = 0; i < strSplit.length; i++) {
  
    if(strSplit[i].length > longestWord) {
    
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

return target === str.substr(str.length - target.length);

}

confirmEnding("Bastian", "n");
##
Repeat a string repeat a string
```javascript

function repeatStringNumTimes( str, num ) {
  var accumulatedStr = '';

  while ( num > 0 ) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

```
##
Truncate a string
```javascript

function truncateString( str, num ) {
  if ( str.length <= num ) {
    return str;
  } else {
    return str.slice( 0, num > 3 ? num - 3 : num ) + '...';
  }
}
truncateString( "A-tisket a-tasket A green and yellow basket", 11 );

```
##
Chunky Monkey
```javascript

function chunkArrayInGroups( arr, size ) {
  var chunkeyMonkeh = [],
    i = 0,
    j = arr.length;
  while ( i < j ) {
    chunkeyMonkeh.push( arr.slice( i, i += size ) );
  }
  return chunkeyMonkeh;
}

chunkArrayInGroups( [ "a", "b", "c", "d" ], 2 );
```
##
Slasher Flick
```javascript

function slasher( arr, howMany ) {
  return arr.slice( howMany );
}
```
##
Mutations
```javascript

function mutation( arr ) {
  var firstString = arr[ 0 ].toLowerCase();
  var secondString = arr[ 1 ].toLowerCase();
  for ( var i = 0; i < secondString.length; i++ ) {
    if ( firstString.indexOf( secondString.charAt( i ) ) == -1 ) {
      return false;
    }
  }
  return true;
}
mutation( [ "hello", "hey" ] );

```
##
Falsy Bouncer
```javascript

function bouncer( arr ) {
  var newArray = arr.filter( Boolean );
  return newArray;
}

bouncer( [ 7, "ate", "", false, 9 ] );

```
##
Seek and Destroy
```javascript

function destroyer( arr ) {
  var args = Array.prototype.slice.call( arguments );
  args.splice( 0, 1 );
  return arr.filter( function( element ) {
    return args.indexOf( element ) === -1;
  } );

  // Remove all the values
}

destroyer( [ 1, 2, 3, 1, 2, 3 ], 2, 3 );

```
##
Where do I belong ?
```  javascript

function getIndexToIns( arr, num ) {
  arr.sort( function( a, b ) {
    return a - b;
  } );

  for ( var a = 0; a < arr.length; a++ ) {
    if ( arr[ a ] >= num )
      return parseInt( a );
  }

  return arr.length;
}
getIndexToIns( [ 40, 60 ], 50 );

```
##
Caesars Cipher
```javascript

function rot13( str ) {
  // Split str into a character array
  return str.split( '' )
    // Iterate over each character in the array
    .map.call( str, function( char ) {
      // Convert char to a character code
      x = char.charCodeAt( 0 );
      // Checks if character lies between A-Z
      if ( x < 65 || x > 90 ) {
        return String.fromCharCode( x ); // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if ( x < 78 ) {
        return String.fromCharCode( x + 13 );
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode( x - 13 );
    } ).join( '' ); // Rejoin the array into a string
}
```
#BONUS PigLatin Project

After we completed our study goals for this week, we embarked upon our PigLatin project. Here's our function.
```javascript
function convertWordToPigLatin(word) {
  var firstLetter = word.substring(0, 1);
  var newWord = word.substring(1, word.length) + firstLetter + 'ay';
  return newWord
}

function convertSentenceToPigLatin(sentence) {
  var mySentence = sentence.split(" ");
  var newSentence = ""
  mySentence.forEach(function(word) {
    newSentence += convertWordToPigLatin(word) + " ";
  })
  document.getElementById("translatedText").innerHTML = newSentence;
  return newSentence
}

window.addEventListener("load", function() {

  document.getElementById("clickMe").onclick = function() {
    var sentence = document.getElementById("sentence").value
    console.log(sentence)
    var convertedSentence = convertSentenceToPigLatin(sentence)
  };

}, false)

```
