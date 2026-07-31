import assert from 'node:assert/strict';
import { test } from 'node:test';

import { greeting } from '../src/greeting.js';

test('greets someone by name', () => {
  assert.equal(greeting('Bao'), 'Hello Bao');
});

test('falls back to a default when the name is empty', () => {
  assert.equal(greeting(''), 'Hello guest');
});
