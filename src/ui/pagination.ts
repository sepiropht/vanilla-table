import { Data } from '../models'
import { render } from './render'

export const pagination = (data: Data) => {
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

    if (end > data.length) {
      next.disabled = true
    } else if (stateSlider > 0) {
      prev.disabled = false
    }

    render(data.slice(start, end), start)
  })

  prev.addEventListener('click', () => {
    if (stateSlider === 0) {
      return
    }

    stateSlider--
    const start = stateSlider === 0 ? 0 : 10 * stateSlider
    const end = start + 11

    if (stateSlider === 0) {
      prev.disabled = true
    } else if (10 * stateSlider < data.length) {
      next.disabled = false
    }

    render(data.slice(start, end), start)
  })
}
