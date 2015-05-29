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
