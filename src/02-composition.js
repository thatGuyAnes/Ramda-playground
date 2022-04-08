import {map} from 'ramda';

// UpperCase and Reverse bobo's first name
const bobo = {
  firstName: 'Bobo',
  lastName: 'Flakes',
}

const getFirstName = (person) => person.firstName
const uppercaseString = (str) => str.slice().toUpperCase()
const reverseString = (str) => [...str].reverse().join('')

const upperAndReverseFirstName = (person) => {
  const firstName = getFirstName(person)
  const uppercaseFirstName = uppercaseString(firstName)
  return reverseString(uppercaseFirstName)
}

const result1 = upperAndReverseFirstName(bobo)
console.log({ result1 })

// Upper and Reverse for bobo and his friends
const users = [
  {
    firstName: 'Bobo',
    lastName: 'Flakes',
  },
  {
    firstName: 'Lawrence',
    lastName: 'Shilling',
  },
  {
    firstName: 'Anon',
    lastName: 'User',
  },
]

const upperAndReverseFirstNames = users => users.map(upperAndReverseFirstName)

const result2 = upperAndReverseFirstNames(users)
console.log({ result2 })


// Curring example

const double = numb => numb * 2
const numbers = [1,2,3,4,5]

const doubleNumbers = map(double)

const result3 = doubleNumbers(numbers)
console.log({result3})
