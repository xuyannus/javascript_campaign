let func1 = function (v) {
  const cel = (v - 32) * (5.0 / 9);
  return cel;
}

console.log(func1(10))
console.log(func1(40))

let name;
console.log(name);

if (name === undefined) {
  console.log("you need to define name");
}

function addScore(a, b, c = 10) {
  return a + b + c;
}

console.log(addScore(10, 11));

let topic = "template";
console.log(`this is a test of ${topic} string`);

