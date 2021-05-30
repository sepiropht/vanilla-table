import { keys } from '../models'

export default (url: string): Array<[string, string]> => {
  const urlParams = new URLSearchParams(url)
  return Array.from(urlParams.entries())
    .filter(isBadKeys)
    .filter(isDuplicatedKey)
}

const isBadKeys = ([key, _]: [string, string]): boolean =>
  Object.values(keys).includes(key)

const alreadyFind = []
const isDuplicatedKey = ([key, _]: [string, string]): boolean => {
  if (!alreadyFind.includes(key)) {
    alreadyFind.push(key)
    return true
  }
}
