// PURIFYING IMPURE FUNCTION

// I: ==========================================================================

/*
const assoc = (key, value, object) => {
  object[key] = value;
};
*/

const assoc = (key, value, object) => ( { ...object, [key]: value } )

const person = { name: 'Jhon' }
const clone = assoc('age', 25, person)
// console.log(person, clone)


// II: =========================================================================

/*
const getNames = users => {
  console.log('getting names!')
  return users.map((user) => user.name)
}
*/

const getName = users => users.map(user => user.name)
const users = [ { name: 'Jhon' }, { name: 'Sara' } ]
// console.log(getName(users))

// III: ========================================================================

/*
const append = (item, list) => {
  list.push(item)
  return list
}
*/

const append = (item, list) => ( [...list, item] )
// console.log(append('applle', ['banana', 'egg']))


// IV: ========================================================================

/*
const sortAscending = (numbers) => numbers
  .sort( (a,b) => a > b )
*/

const sortAscending = numbers => [...numbers]
  .sort((a, b) => a > b)
