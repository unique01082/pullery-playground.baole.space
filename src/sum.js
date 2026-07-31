/**
 * Adds an arbitrary number of numbers.
 */
export function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
