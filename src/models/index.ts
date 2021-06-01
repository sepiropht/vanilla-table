export type Data = Array<{
  firstName: string
  lastName: string
  eyeColor: string
  age: number
  phone?: string
  email?: string
  company?: string
}>

const eyeColors = ['blue', 'brown', 'green']

export type EyeColor = typeof eyeColors

export const isEyeColor = (x: string): boolean => eyeColors.includes(x)

export type Range = [number, number]

const keyRanges = {
  '[20-25]': [20, 25],
  '[26-30]': [26, 30],
  '[31-35]': [31, 35],
  '[36-41]': [36, 41],
}

export const getRange = (keyRange: string): Range => {
  if (!keyRanges[keyRange]) {
    throw Error('Wrong range')
  }
  return keyRanges[keyRange]
}

export const filterByAge = (collection: Data, range: Range): Data =>
  range
    ? collection.filter(({ age }) => age >= range[0] && age <= range[1])
    : collection

export const keys = {
  Nom: 'lastName',
  Prénom: 'firstName',
  Âge: 'age',
  'Couleur des yeux': 'eyeColor',
  Email: 'email',
  Entreprise: 'company',
  Téléphone: 'phone',
}
