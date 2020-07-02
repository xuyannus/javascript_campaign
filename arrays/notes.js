const notes = ["a", "k", "f", "b", "f", "c"];
cosnt rules = [true, true, true, true, true, false];

console.log(notes.length);

console.log(notes.join());

for (v in notes) {
  console.log(notes[v]);
}

notes.forEach(function (x, i) {
  console.log(i, '=>', x)
})

notes.splice(1, 1, "X");
console.log(notes);

