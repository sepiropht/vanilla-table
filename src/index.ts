import json from './datas.json'
import { render } from './ui/render'
import parseUrl from './utils/parseUrl'
import { Data, isEyeColor, filterByAge, getRange } from './models'
import { pagination } from './ui/pagination'

let data: Data = json.map(({ name, eyeColor, age, email, company, phone }) => ({
  firstName: name.first.toLowerCase(),
  lastName: name.last.toLowerCase(),
  eyeColor,
  age: parseInt(age as any),
  phone,
  company: company.toLowerCase(),
  email,
}))

const entries = parseUrl(window.location.search)

for (const [query, value] of entries) {
  if (query === 'age') {
    let range
    try {
      range = getRange(value)
      data = filterByAge(data, range)
    } catch {
      const p = document.querySelector('.error p')
      const div: HTMLElement = document.querySelector('.error')
      p.textContent =
        'Wrong range! Should be [20-25], [26-30], [31-35] or [36-41]'
      div.style.display = 'block'
    }

    data = filterByAge(data, range)
    continue
  } else if (query === 'eyeColor' && !isEyeColor(value)) {
    continue
  }
  data = data.filter((elem) => elem[query] === value)
}

pagination(data)

render(data.slice(0, 11))
