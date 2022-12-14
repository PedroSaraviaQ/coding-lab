//* "includes"
console.log("The house of cats".includes("house"));

//* "indexOf" (not exclusive to arrays)
console.log("javascript".indexOf("scr"));

//* "match" returns regex matching results in an array
console.log("match".match(/[a-e]/g)); //* returns all matches
console.log("match".match(/[a-e]/)); //* only first match
console.log("¿?".match(/\d/)); //* returns null if no matches are found

//* "repeat"
console.log("You".repeat(4));

//* "replace"
let sentence = "    I LIKE when days go like so well";
console.log(sentence.replace(/like/gi, "love"));
console.log(sentence);
console.log("love".replace(/./g, "$&$&")); //* use "$&" to duplicate
console.log("cnv".replace(/[cv]/g, (e) => e + "a")); //* with functions

//* "slice"
console.log(sentence.slice(0, 10));
console.log(sentence);

//* "split"
console.log(sentence.split(" "));
console.log(sentence);

//* "trim" removes whitespace
console.log(sentence.trim());
console.log(sentence);

console.log("_______________...________________");

//* Adding decimals to numbers
const num = 3.5;
console.log(num.toFixed(4));

//* (from) character (to) ASCII
console.log("A".charCodeAt());
console.log(String.fromCharCode(65));

//* Regular expressions (Regex)
const expr1 = /abcd/;
const expr2 = /^abcd$/;
const string = "This is the 'abcd'";

if (expr1.test(string) && !expr2.test(string)) {
  console.log("expr1: 👍, expr2: 👎");
}

//* only one ASCII alphabetic value
console.log(/^[a-zA-Z]$/.test("w"), /^[a-z]$/i.test("R"));
//* not digit or whitespace
console.log(/^[\d\s]*$/.test(""));

//* not "a", "b" or "c" at least once
const letters = ["a", "b", "c", "d"].map((e) => /^[^abc]+$/.test(e));
console.log(...letters);

//* "\" for escaping and using special characters
console.log("...wow".replace(/\./g, ""));
