/**
 * Divides two positive, finite numbers.
 */
export function divide(dividend, divisor) {
  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    throw new TypeError('Both operands must be numbers');
  }

  if (!Number.isFinite(dividend) || !Number.isFinite(divisor) || dividend <= 0 || divisor <= 0) {
    throw new RangeError('Both operands must be positive, finite numbers');
  }

  return dividend / divisor;
}
