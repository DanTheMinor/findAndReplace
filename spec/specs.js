describe("#wordFind", function() {
  it("takes an array of words and a specific word, returns all the locations in that array where the words match", function() {
    var arrOfWords = ["hello", "world"];
    expect(wordFind(arrOfWords, "world")).to.eql([1]) //as 1 is the index of world
    arrOfWords = ["this", "test", "is", "a", "test"];
    expect(wordFind(arrOfWords, "test")).to.eql([1, 4])
  });

  
});
