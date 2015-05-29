describe("#wordFind", function() {
  it("takes a string and a specific word, returns all the locations where the words match", function() {
    var string = "this test is a test";
    expect(wordFind(string, "test")).to.eql([1, 4])
  });
});

describe("#wordReplace", function() {
  it("takes a string, an array of indexes and a replacement word, and replaces all words with a matching index, returns a string", function() {
    var string = "this world is a nice world";
    var arrOfIndex = wordFind(string, "world");
    expect(wordReplace(string, arrOfIndex, "universe")).to.eql("this universe is a nice universe")
  })
});

describe("#findAndReplace", function() {
  it("takes a string, a word to replace, and the word you want to replace it with", function() {
    var string = "this world is a nice world";
    var wordToFind = "world";
    var wordToReplace = "dog";
    expect(findAndReplace(string, wordToFind, wordToReplace)).to.eql("this dog is a nice dog")
  })
});

describe("#checkForGram", function() {
  it("takes a word and a word to check", function() {
    var word = "dog";
    var wordToCheck = "dog,";
    var wordToFail = "cat";
    expect(checkForGram(word, wordToCheck)).to.eql(",")
    expect(checkForGram(word, wordToFail)).to.eql(0)
   })
});

describe("#wordFind2", function() {
  it("takes a string and a specific word, returns all the locations where the words match", function() {
    var string = "this test, is a test";
    expect(wordFind2(string, "test")).to.eql([[1, ","], [4, ""]])
  });
});

describe("wordReplace2", function() {
  it("takes a string, an array of indexes and a replacement word, and replaces all words with a matching index, returns a string", function() {
    var string = "the world, is a nice world. world";
    var arrOfIndex = wordFind2(string, "world");
    expect(wordReplace2(string, arrOfIndex, "universe")).to.eql("the universe, is a nice universe. universe")
  });
})
