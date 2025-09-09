const values = require("./joinStrings-example");

describe("joinStrings-example", () => {
  test("birthYear is 2002", () => {
    expect(values.birthYear).toEqual(2002);
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("firstName is Abdel-Arip", () => {
    expect(values.firstName).toEqual("Abdel-Arip");
  });
  test("lastName is Saripada", () => {
    expect(values.lastName).toEqual("Saripada");
  });
  test("greeting is put together correctly", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Abdel-Arip Saripada and I am 23 years old."
    );
  });
});
