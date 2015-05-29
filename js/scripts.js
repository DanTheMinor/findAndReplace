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
  var arrayOfIndex = wordFind2(string, wordToFind);
  var stringReturn = wordReplace2(string, arrayOfIndex, wordToReplace)
  return stringReturn
}

function checkForGram(word, wordCheck) {
  //compares the word to the one being checked, if it matches the word to check
  //but with some grammar tacked on, it returns the character that needs to be added
  //on to the end if true, returns 0 otherwise
  if(wordCheck === word) {return 1}
  else if (wordCheck === (word + ',')) { return ",";}
  else if (wordCheck === (word + '.')) {return ".";}
  else if (wordCheck === (word + '?')) {return "?";}
  else if (wordCheck === (word + '!')) {return "!";}
  else {return 0;}
}

function wordFind2(string, word) {
  var array = string.split(" ")
  var arrayOfIndex = []
  var temp = []
  array.forEach(function(element, index) {
    if (1 == checkForGram(word, element)) {
      temp = [index, ""]
      arrayOfIndex.push(temp)
    } else if (',' == checkForGram(word, element)) {
      temp = [index, ","]
      arrayOfIndex.push(temp)
    } else if ('.' == checkForGram(word, element)) {
      temp = [index, "."]
      arrayOfIndex.push(temp)
    } else if ('!' == checkForGram(word, element)) {
      temp = [index, "!"]
      arrayOfIndex.push(temp)
    } else if ('?' == checkForGram(word, element)) {
      temp = [index, "?"]
      arrayOfIndex.push(temp)
    }
  });
  return arrayOfIndex;
}

function wordReplace2(string, arrayOfIndex, word) {
  var arrayOfWords = string.split(" ");
  var index_ind = 0;
  for (var i = 0; i < arrayOfWords.length; i++) {
    
    if (i == arrayOfIndex[index_ind][0]) {
      arrayOfWords[i] = word + arrayOfIndex[index_ind][1];
      index_ind++;
    };
  };
  string = arrayOfWords.join(" ");
  return string;
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
