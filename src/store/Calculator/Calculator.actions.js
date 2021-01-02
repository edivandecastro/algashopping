export function sum(a, b) {
  const result = {
    type: "SUM",
    payload: [a, b]
  }
  return result
}

export function subtract(a, b) {
  const result = {
    type: "SUBTRACT",
    payload: [a, b]
  }
  return result
}
