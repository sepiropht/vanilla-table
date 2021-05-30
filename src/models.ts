export type Data = Array<{
  firstName: string
  lastName: string
  eyeColor: string
  age: number
  phone: string
  email: string
  company: string
}>

const eyeColors = ['blue', 'brown', 'green']

export type EyeColor = typeof eyeColors

export const isEyeColor = (x: any) => eyeColors.includes(x)

export type Range = [number, number]

const ageRanges: Array<Range> = [
  [20, 25],
  [26, 30],
  [31, 35],
  [36, 41],
]

export const getRange = (age: number): Range =>
  ageRanges.find(([start, end]) => age >= start && age <= end)

export const filterByAge = (collection: Data, range: Range): Data =>
  collection.filter(({ age }) => age >= range[0] && age <= range[1])

export const keys = {
  Nom: 'lastName',
  Prénom: 'firstName',
  Âge: 'age',
  'Couleur des yeux': 'eyeColor',
  Email: 'email',
  Entreprise: 'company',
  Téléphone: 'phone',
}
