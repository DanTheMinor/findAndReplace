describe("#wordFind", function() {
  it("takes a string and a specific word, returns all the locations where the words match", function() {
    var string = "this test is a test";
    expect(wordFind(string, "test")).to.eql([1, 4])
  });

  describe("#wordReplace", function() {
    it("takes a string, an array of indexs and a replacement word, and replaces all words with a matching index, returns a string", function() {
      var string = "this world is a nice world";
      var arrOfIndex = wordFind(string, "world");
      expect(wordReplace(string, arrOfIndex, "universe")).to.eql("this universe is a nice universe")
    })
  })
});
