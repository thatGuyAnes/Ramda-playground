// UpperCase and Reverse jhon's first name
const jhon = {
  firstName: 'Jhon',
  lastName: 'Doe'
}

const getFirstName = (person) => person.firstName
const uppercaseString = (str) => str.slice().toUpperCase()
const reverseString = (str) => [...str]
  .reverse()
  .join('')

const upperAndReverseFirstName = (person) => {
  const firstName = getFirstName(person)
  const uppercaseFirstName = uppercaseString(firstName)
  return reverseString(uppercaseFirstName)
} 


const result = upperAndReverseFirstName(jhon)
console.log({ result })
