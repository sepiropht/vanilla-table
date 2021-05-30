import { Data, keys } from '../models'

export function render(data: Data, start: number = 0): void {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')
  const tbody = document.createElement('tbody')
  const th = document.createElement('th')
  const body = document.querySelector('.table')
  if (document.querySelector('table')) {
    body.removeChild(document.querySelector('table'))
  }
  th.textContent = 'index'
  tr.appendChild(th)
  Object.keys(keys).forEach((key) => {
    const th = document.createElement('th')
    th.textContent = key
    tr.appendChild(th)
  })

  data.forEach((element, index) => {
    const trbody = document.createElement('tr')
    const td = document.createElement('td')
    td.textContent = (index + start) as any
    trbody.appendChild(td)
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
  document.querySelector('.table').appendChild(table)
}
