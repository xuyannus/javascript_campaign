console.log(uuidv4())
console.log(moment().format("MMM DD, YYYY"))

let num = 12.3833;
console.log(num.toFixed(1))


// p.forEach(
//   function (x) {
//     x.remove()
//   }
// )

// for (i = 0; i < p.length; i++) {
//   // p[i].remove()
//   p[i].textContent = '****'
// }

// const np = document.createElement('p')
// np.textContent = "this is a new text"
// document.querySelector('body').appendChild(np)

// document.querySelector('#create-button').addEventListener('click', function (x) {
//   console.log("clicked button")
//   x.target.textContent = "clicked"
// })

// //# -> target by ID
// document.querySelector('#remove-button').addEventListener('click', function (x) {
//   console.log("clicked remove button")
//   x.target.textContent = "removed"

//   document.querySelectorAll('.note').forEach(function (note) {
//     note.remove()
//   })

// })

status = localStorage.getItem('checkbox')
if (status === "true") {
  document.getElementById("mycheckbox").checked = true
} else {
  document.getElementById("mycheckbox").checked = false
}

document.querySelector("#form-name").addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(e.target.elements.firstname.value)
  e.target.elements.firstname.value = ''
})

document.getElementById("mycheckbox").addEventListener('change', function (e) {
  if (e.target.checked) {
    localStorage.setItem('checkbox', "true")
  } else {
    localStorage.setItem('checkbox', "false")
  }
})
