import * as R from 'ramda'

// I: --------------------------------------------------------------------------
//    { test } from 'ramda'
// -----------------------------------------------------------------------------
/*
const countBobos = (sentence) => /bobo/ig.test(sentence)
*/

// test API:
  // R.test(/^x/, 'xyz'); //=> true
//
const countBobos = R.test(/bobo/ig)

// II: -------------------------------------------------------------------------
//    { ifElse, equals, where } from 'ramda'
// -----------------------------------------------------------------------------
/*
const shoulCode = (person) => (
  person.lovesTech && person.worksHard ?
    `${person.name} may enojoy a tech career!` :
    `${person.name} wouldn't enjoy a tech career.`
)
*/

// ifElse API:
// R.ifElse( condition: predicateFunc, onTrue, onFalse ) :function
//
//where API:
// where(specObj: {key: predicateFunc})(testObj: {}) :Boolean

const shouldCode = R.ifElse(
  //condition
  R.where({
    lovesTech: R.equals(true),
    worksHard: R.equals(true),
  }),
  // onTrue
  (person) => `${person.name} may enojoy a tech career!`,
  // onFalse
  (person) => `${person.name} wouldn't enjoy a tech career.`
)

const person = { name: 'Anes', lovesTech: true, worksHard: true }
// console.log(shouldCode(person))


// III: ------------------------------------------------------------------------
//      { map, prop, pluck } from 'ramda'
// -----------------------------------------------------------------------------

/*
const getAges = (people) => people.map( (person) => person.age )
*/

const age = x => x.age
const getAges01 = R.map(age)

const getAges02 = R.map(R.prop('age')) 
// The above is achievable because of the data-last and currying
  // R.map will awaits A list, and R.prop will awaits AN object.

const getAges03 = R.pluck('age')

// console.log(getAges01([{name: 'jhon', age: 24}, {name: 'anes', age: 31}]))
// console.log(getAges02([{name: 'jhon', age: 24}, {name: 'anes', age: 31}]))
// console.log(getAges03([{name: 'jhon', age: 24}, {name: 'anes', age: 31}]))


// IV: -------------------------------------------------------------------------
//      { filter, propSatisfies } from 'ramda'
// -----------------------------------------------------------------------------

/*
const keepYoungAdults = (people) => people.filter( (person) => (
  person.age >= 18 && person.age <= 25
) )
*/

const keepYoungAdults1 = R.filter(R.propSatisfies((x) => x >= 18 && x <= 25, 'age'));

/* for some reason we can't do this :
 const isYoungAdultAge = R.where({age: R.lte(25), age: R.gte(18)})
  R.where's spec's keys must not be duplicate.
*/
const youngAdultAge    = R.both(R.gte(18), R.lte(25));
const isYoungAdult     = R.propSatisfies(youngAdultAge, 'age');

const keepYoungAdults2 = R.filter(isYoungAdult);

const people = [
  {"age": 31},
  {"age": 17},
  {"age": 23},
  {"age": 25},
  {"age": 18},
];

// const result1 = keepYoungAdults1(people)
// const result2 = keepYoungAdults2(people)
// console.log(keepYoungAdults2(people))

// V: -------------------------------------------------------------------------
//      Create a function 'defaultTo'
//      curry 'defaultTo' to allow preloading arguments.
//      defaultTo, takes two arguments: defaultVal and val
//        returns defaultVal if val is null or undefined else returns val
// -----------------------------------------------------------------------------

// :Basic js currying
//
// const defaultTo = (defaultVal) => (val) => 
//   !val ?
//     defaultVal :
//     val

const defaultTo = R.curry( (defaultVal, val) => val == null ? defaultVal : val )

// Default value of 'Bobo'
const defaultToBobo = defaultTo('Bobo')

console.log(defaultToBobo(null))      // 'Bobo'
console.log(defaultToBobo('Patrick')) // 'Patrick'
