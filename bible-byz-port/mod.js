var Module = {
  id: "bible-byz-port",
  type: "bible",
  books: {
    "book1": {
      name: "The Book 1",
      chapters: {
        "1": {file:"chapter1.js", verses:2},
        "2": {file:"chapter2.js", verses:3}
      }
    },
    "book2": {
      name: "The Book 2",
      chapters: {
        "1": "chapter1.js",
        "2": "chapter2.js",
      }
    }
  }
}

module.exports = Module;
