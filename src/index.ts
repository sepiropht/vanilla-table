import datas from './datas.json'

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')

type Data = {
  firstName: string
  lastName: string
  eyeColor: string
  age: number
  phone: string
  email: string
  company: string
}

let data: Data = datas.map(
  ({ name, eyeColor, age, email, company, phone }) => ({
    firstName: name.first.toLowerCase(),
    lastName: name.last.toLowerCase(),
    eyeColor,
    age: parseInt(age),
    phone,
    company,
    email,
  })
)

const eyeColors = ['blue', 'brown', 'green']
export type EyeColor = typeof eyeColors[string]
const isEyeColor = (x: any) => eyeColors.includes(x)

type Range = [number, number]
const ageRanges: Array<Range> = [
  [20, 25],
  [26, 30],
  [31, 35],
  [36, 41],
]
const getRange = (age: number): Range =>
  ageRanges.find(([start, end]) => age >= start && age <= end)
const filterByAge = (collection: Data, range: Range): Data =>
  collection.filter(({ age }) => age >= range[0] && age <= range[1])

const keys = {
  Nom: 'lastName',
  Prénom: 'firstName',
  Âge: 'age',
  'Couleur des yeux': 'eyeColor',
  Email: 'email',
  Entreprise: 'company',
  Téléphone: 'phone',
}

Object.keys(keys).forEach((key) => {
  const th = document.createElement('th')
  th.textContent = key
  tr.appendChild(th)
})

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const entries = urlParams.entries()

for (let [query, value] of entries) {
  if (query === 'age') {
    value = parseInt(value)
    const range = getRange(value)
    data = filterByAge(data, range)
  } else {
    data = data.filter((elem) => {
      if (query === 'eyeColor' && !isEyeColor(value)) {
        return true
      }
      return elem[query] === value
    })
  }
}
data.forEach((element) => {
  const trbody = document.createElement('tr')
  Object.values(keys).forEach((key) => {
    const td = document.createElement('td')
    td.textContent = element[key]
    trbody.appendChild(td)
  })
  tbody.appendChild(trbody)
})

thead.appendChild(tr)
table.appendChild(thead)
table.appendChild(tbody)

document.querySelector('body').appendChild(table)
