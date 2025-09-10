const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const personDeath = person.yearOfDeath || currentYear;
    const oldestDeath = oldest.yearOfDeath || currentYear;

    const personAge = personDeath - person.yearOfBirth;
    const oldestAge = oldestDeath - oldest.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
