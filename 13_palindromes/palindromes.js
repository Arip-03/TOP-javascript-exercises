const palindromes = function (str) {
  let processed = str.toLowerCase();

  processed = processed.replace(/[^a-z0-9]/g, "");

  const reversed = processed.split("").reverse().join("");
  return processed === reversed;
};

// Do not edit below this line
module.exports = palindromes;
