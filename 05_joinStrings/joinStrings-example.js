const birthYear = 2002;
const thisYear = 2025;
const firstName = "Abdel-Arip";
const lastName = "Saripada";

const greeting =
  "Hello! My name is " +
  firstName +
  " " +
  lastName +
  " and I am " +
  (thisYear - birthYear) +
  " years old.";

console.log(greeting);

module.exports = {
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName,
};
