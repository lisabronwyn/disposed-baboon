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
