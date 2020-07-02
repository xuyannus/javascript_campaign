let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}


console.log(myBook);
console.log(myBook.title);


let myAccount = {
  name: 'Yan',
  amount: 0
}


function addAmount(account, amount) {
  account.amount += amount;
  console.log(account)
}

addAmount(myAccount, 10)

console.log(myAccount)

