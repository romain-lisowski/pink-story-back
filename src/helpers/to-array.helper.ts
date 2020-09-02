// Helper
const StringIsNumber = value => isNaN(Number(value)) === false

// Turn enum into array
export function ToArray(enumme) {
  return Object.keys(enumme)
    .filter(StringIsNumber)
    .map(key => enumme[key])
}
