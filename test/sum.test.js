import assert from 'node:assert/strict';
import { test } from 'node:test';

import { sum } from '../src/sum.js';

test('sums multiple numbers', () => {
  assert.equal(sum(1, 2, 3, 4), 10);
});

test('returns a single number unchanged', () => {
  assert.equal(sum(7), 7);
});

test('returns zero when called without numbers', () => {
  assert.equal(sum(), 0);
});

test('sums negative and decimal numbers', () => {
  assert.equal(sum(-2, 1.5, 3), 2.5);
});
