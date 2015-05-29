function wordFind(string, word) {
  var array = string.split(" ")
  var arrayOfIndex = []
  array.forEach(function(element, index) {
    if (element == word) {
      arrayOfIndex.push(index)
    }
  });
  return arrayOfIndex;
}

function wordReplace(string, arrayOfIndex, word) {
  var arrayOfWords = string.split(" ");
  arrayOfIndex.forEach(function(element, index) {
    //the element in this case is the index of the word to be replaced in arrOfWords
    arrayOfWords[element] = word;
  });
  string = arrayOfWords.join(" ");
  return string;
}

function findAndReplace(string, wordToFind, wordToReplace) {
  var arrayOfIndex = wordFind(string, wordToFind);
  var stringReturn = wordReplace(string, arrayOfIndex, wordToReplace)
  return stringReturn
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    var string = ($("input#string").val());
    var wordToFind = ($("input#wordToFind").val());
    var wordToReplace = ($("input#wordToReplace").val());
    var stringPrint = findAndReplace(string, wordToFind, wordToReplace);
    $("p#results").text(stringPrint);
    event.preventDefault();
  });
})
