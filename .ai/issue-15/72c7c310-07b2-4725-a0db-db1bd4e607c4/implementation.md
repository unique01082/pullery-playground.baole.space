# Issue #15 implementation evidence

## Changes

- Added `src/sum.js` with a named variadic `sum(...numbers)` export.
- The implementation reduces from `0`, supporting arbitrary arity and returning
  `0` for zero arguments.
- Added `test/sum.test.js` covering several arguments, one argument, no
  arguments, and negative/decimal values.
- Left the unrelated greeting defect unchanged.

## Correctness checks

### `npm test`

Status: failed (exit code 1).

The four new sum tests passed. The known baseline greeting test remained the
only failure:

```text
> pullery-playground@0.0.0 test
> node --test

TAP version 13
# Subtest: greets someone by name
ok 1 - greets someone by name
# Subtest: falls back to a default when the name is empty
not ok 2 - falls back to a default when the name is empty
...
# Subtest: sums several numbers
ok 3 - sums several numbers
# Subtest: returns a single number unchanged
ok 4 - returns a single number unchanged
# Subtest: returns zero when given no numbers
ok 5 - returns zero when given no numbers
# Subtest: sums negative and decimal numbers
ok 6 - sums negative and decimal numbers
1..6
# tests 6
# suites 0
# pass 5
# fail 1
# cancelled 0
# skipped 0
# todo 0
```

The failure was `test/greeting.test.js`: expected `Hello guest`, received
`Hello `. This matches the canonical baseline failure and is outside issue #15.

### `node --test test/sum.test.js`

Status: passed (exit code 0).

```text
TAP version 13
# Subtest: sums several numbers
ok 1 - sums several numbers
# Subtest: returns a single number unchanged
ok 2 - returns a single number unchanged
# Subtest: returns zero when given no numbers
ok 3 - returns zero when given no numbers
# Subtest: sums negative and decimal numbers
ok 4 - sums negative and decimal numbers
1..4
# tests 4
# suites 0
# pass 4
# fail 0
# cancelled 0
# skipped 0
# todo 0
```

## Conclusion

The approved sum behavior is implemented and its focused tests pass. The full
suite remains red only because of the pre-existing greeting defect.
