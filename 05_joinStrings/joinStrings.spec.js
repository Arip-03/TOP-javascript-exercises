const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Abdel-Arip", () => {
    expect(values.firstName).toEqual("Abdel-Arip");
  });
  test("lastName is Saripada", () => {
    expect(values.lastName).toEqual("Saripada");
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("birthYear is 2002", () => {
    expect(values.birthYear).toEqual(2002);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Abdel-Arip Saripada and I am 23 years old."
    );
  });
});

describe("step 3", () => {
  test("fullName is Abdel-Arip Saripada", () => {
    expect(values.fullName).toEqual("Abdel-Arip Saripada");
  });
  test("age is 23", () => {
    expect(values.age).toEqual(23);
  });
});
