var Bible = {
  type: "bible",

  books: {

    "genesis": {//CODE
      name: "Gênesis",//name that will be printed
      order: 1,
      chapters: {
        "1": {
          number: 1,
          verses: {
            "1": {text:"texto 123 @dicionario#G5544 asdasdsa", ref: [{book:"X", chapter: "1", verse:"1"}] },
            "2": {text:"texto 12345."}
          }
        }
      }
    },

    "X": {
      name: "X",
      order: 2,
      chapters: {
        "1": {
          number: 1,
          verses: {
            "1": {text:"versiculo 1 palavra referenciada @dicionario G5544@ "},
            "2": {text:"versiculo 2"}
          }
        }
      }
    },
  }
}

module.exports = Bible;
