import { Data, keys } from './models'

export function render(data: Data): void {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')
  const tbody = document.createElement('tbody')

  Object.keys(keys).forEach((key) => {
    const th = document.createElement('th')
    th.textContent = key
    tr.appendChild(th)
  })

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
}
