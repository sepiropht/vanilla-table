import data from './datas.json'
console.log(data)

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')

const keys = {
  Nom: 'name1',
  Prénom: 'name2',
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

data.forEach((element) => {
  const trbody = document.createElement('tr')
  Object.values(keys).forEach((key) => {
    const td = document.createElement('td')
    if (key === 'name1') {
      td.textContent = element['name']['first']
    } else if (key === 'name2') {
      td.textContent = element['name']['last']
    } else {
      td.textContent = element[key]
    }
    trbody.appendChild(td)
  })
  tbody.appendChild(trbody)
})

thead.appendChild(tr)
table.appendChild(thead)
table.appendChild(tbody)

document.querySelector('body').appendChild(table)
