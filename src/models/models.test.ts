/**
 * @jest-environment jsdom
 */

import { Data, filterByAge, getRange } from '.'

const data: Data = [
  {
    firstName: 'first',
    lastName: 'last',
    eyeColor: 'brown',
    age: 20,
  },
  {
    firstName: 'first',
    lastName: 'last',
    eyeColor: 'brown',
    age: 26,
  },
  {
    firstName: 'first',
    lastName: 'last',
    eyeColor: 'brown',
    age: 32,
  },
]

test('should get range according to age', () => {
  expect(getRange('[20-25]')).toStrictEqual([20, 25])
  expect(getRange('[26-30]')).toStrictEqual([26, 30])
  expect(getRange('[31-35]')).toStrictEqual([31, 35])
  expect(getRange('[36-41]')).toStrictEqual([36, 41])
})

test('should throw error', () => {
  expect(() => getRange('[20, 26]')).toThrowError('Wrong range')
})

test('should filter collection by age', () => {
  expect(filterByAge(data, [20, 25])).toStrictEqual([
    {
      firstName: 'first',
      lastName: 'last',
      eyeColor: 'brown',
      age: 20,
    },
  ])
  expect(filterByAge(data, [26, 30])).toStrictEqual([
    {
      firstName: 'first',
      lastName: 'last',
      eyeColor: 'brown',
      age: 26,
    },
  ])

  expect(filterByAge(data, [31, 35])).toStrictEqual([
    {
      firstName: 'first',
      lastName: 'last',
      eyeColor: 'brown',
      age: 32,
    },
  ])
})
