import json from './datas.json'
import { render } from './ui'
import parseUrl from './parseUrl'
import {
  Data,
  Range,
  isEyeColor,
  EyeColor,
  filterByAge,
  getRange,
} from './models.ts'

let data: Data = json.map(({ name, eyeColor, age, email, company, phone }) => ({
  firstName: name.first.toLowerCase(),
  lastName: name.last.toLowerCase(),
  eyeColor,
  age: parseInt(age),
  phone,
  company: company.toLowerCase(),
  email,
}))

const entries = parseUrl(window.location.search)

for (let [query, value] of entries) {
  if (query === 'age') {
    const range = getRange(value)
    data = filterByAge(data, range)
    continue
  } else if (query === 'eyeColor' && !isEyeColor(value)) {
    continue
  }
  data = data.filter((elem) => elem[query] === value)
}

render(data)
