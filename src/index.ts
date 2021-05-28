import data from './datas.json'
console.log(data)

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')

data.forEach((element) => {
  Object.keys(element).forEach((key) => {
    const th = document.createElement('th')
    th.textContent = key
    tr.appendChild(th)
  })
})

data.forEach((element) => {
  const trbody = document.createElement('tr')
  Object.values(element).forEach((value) => {
    const td = document.createElement('td')
    td.textContent = value
    trbody.appendChild(td)
  })
  tbody.appendChild(trbody)
})

thead.appendChild(tr)
table.appendChild(thead)
table.appendChild(tbody)

document.querySelector('body').appendChild(table)
