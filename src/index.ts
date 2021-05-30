import json from './datas.json'
import { render } from './ui'
import parseUrl from './parseUrl'
import { Data, isEyeColor, filterByAge, getRange } from './models'

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

for (let [query, value] of entries) {
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
const prev: HTMLButtonElement = document.querySelector('.prev')
const next: HTMLButtonElement = document.querySelector('.next')
if (data.length < 11) {
  next.disabled = true
  prev.disabled = true
}
let stateSlider = 0

next.addEventListener('click', () => {
  if (10 * stateSlider > data.length) {
    return
  }
  stateSlider++
  const start = stateSlider === 0 ? 0 : 10 * stateSlider
  const end = start + 11
  render(data.slice(start, end), start)
  if (end > data.length) {
    next.disabled = true
  } else if (stateSlider > 0) {
    prev.disabled = false
  }
})

prev.addEventListener('click', () => {
  if (stateSlider === 0) {
    return
  }
  stateSlider--
  const start = stateSlider === 0 ? 0 : 10 * stateSlider
  const end = start + 11
  render(data.slice(start, end), start)

  if (stateSlider === 0) {
    prev.disabled = true
  } else if (10 * stateSlider < data.length) {
    next.disabled = false
  }
})

render(data.slice(0, 10))
