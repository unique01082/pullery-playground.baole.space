import assert from 'node:assert/strict';
import { test } from 'node:test';

import { sum } from '../src/sum.js';

test('adds any number of numbers', () => {
  assert.equal(sum(1, 2, 3, 4), 10);
});

test('returns zero when no numbers are provided', () => {
  assert.equal(sum(), 0);
});
