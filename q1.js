const lowerCaseWords = (arr) => new Promise((resolve, reject) => {
  if (!Array.isArray(arr)) {
    return reject(new Error("Input must be an array"));
  }

  const result = arr
    .filter((item) => typeof item === "string")
    .map((str) => str.toLowerCase());

  resolve(result);
});

const mixed = ["Apple", 42, true, "HELLO", null, "World", { a: 1 }, "ES6"];
lowerCaseWords(mixed)
  .then((res) => {
    console.log("Q1 Output:", res); // ["apple", "hello", "world", "es6"]
  })
  .catch((err) => console.error("Q1 Error:", err.message));