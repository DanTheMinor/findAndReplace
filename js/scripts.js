function wordFind(array, word) {
  var arrayOfIndex = []
  array.forEach(function(element, index) {
    if (element == word) {
      arrayOfIndex.push(index)
    }
  });
  return arrayOfIndex;
}
