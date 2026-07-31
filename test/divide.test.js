import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divide } from '../src/divide.js';

test('divides positive integers', () => {
  assert.equal(divide(12, 3), 4);
});

test('returns fractional results', () => {
  assert.equal(divide(3, 2), 1.5);
});

test('divides positive decimal operands', () => {
  assert.equal(divide(1.5, 0.5), 3);
});

test('returns a result below one when the dividend is smaller', () => {
  assert.equal(divide(2, 8), 0.25);
});

test('returns one when both operands are equal', () => {
  assert.equal(divide(7, 7), 1);
});

test('divides by a positive decimal smaller than one', () => {
  assert.equal(divide(5, 0.25), 20);
});

test('divides very small positive operands', () => {
  assert.equal(divide(0.00048828125, 0.000244140625), 2);
});

test('rejects non-number operands', () => {
  assert.throws(() => divide('12', 3), TypeError);
  assert.throws(() => divide(12, '3'), TypeError);
});

test('rejects zero and negative operands', () => {
  assert.throws(() => divide(0, 3), RangeError);
  assert.throws(() => divide(12, 0), RangeError);
  assert.throws(() => divide(-12, 3), RangeError);
  assert.throws(() => divide(12, -3), RangeError);
});

test('rejects non-finite operands', () => {
  for (const value of [NaN, Infinity, -Infinity]) {
    assert.throws(() => divide(value, 3), RangeError);
    assert.throws(() => divide(12, value), RangeError);
  }
});
