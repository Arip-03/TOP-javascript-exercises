const getTheTitles = require("./getTheTitles");

describe("getTheTitles", () => {
  const books = [
    {
      title: "Book",
      author: "hunterXhunter",
    },
    {
      title: "Book2",
      author: "Onepiece",
    },
  ];

  test("gets titles", () => {
    expect(getTheTitles(books)).toEqual(["Book", "Book2"]);
  });
});
