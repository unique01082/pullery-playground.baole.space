# Issue #15 investigation: implement sum n numbers

## Findings

- The repository is at the requested base commit
  `859d2be41a633de48525731d2d9568edeffa703d` on
  `pullery/issue-15-implement-sum-n-numbers`.
- The tracked project has one source module, `src/greeting.js`, and one matching
  test file, `test/greeting.test.js`.
- A repository search found no `sum` implementation, export, test,
  documentation, or existing arithmetic API. The reported capability is
  therefore missing rather than an incorrect fixed-arity implementation.
- `package.json` declares ES modules and uses Node's built-in test runner. There
  is no package entry point or barrel export, so a standalone named export from
  `src/sum.js` fits the existing layout.
- The canonical `npm test` baseline currently fails one of two greeting tests:
  `greeting('')` returns `"Hello "` instead of `"Hello guest"`. This is
  explicitly documented in the README and is unrelated to issue #15.

## Interpretation and unresolved contract details

The report asks for a sum function accepting an unknown count of numbers. The
minimal JavaScript interpretation is a variadic function using a rest parameter,
for example `sum(...numbers)`, which reduces all supplied numeric arguments.

The issue does not define:

- whether zero arguments should return the additive identity `0` or throw;
- whether non-number values should be rejected, coerced, or allowed to follow
  JavaScript `+` semantics;
- whether callers pass separate arguments (`sum(1, 2, 3)`) or an array
  (`sum([1, 2, 3])`).

For a minimal implementation, the recommended contract is separate numeric
arguments, returning `0` for no arguments, with no additional runtime validation.
This follows the wording ("how many number user will input"), keeps the API
variadic, and avoids inventing validation requirements. Maintainers should
confirm this contract before implementation if coercion or array input is
important.

## Proposed implementation plan (not executed)

1. Add `src/sum.js` exporting `sum(...numbers)` as a named ES-module export.
2. Sum from an initial value of `0`, which handles arbitrary arity and gives
   the natural zero-argument result.
3. Add `test/sum.test.js`, mirroring the source filename, with cases for several
   arguments, one argument, zero arguments, and negative/decimal numbers.
4. Run `npm test`. Expect the new sum tests to pass while the unrelated,
   pre-existing greeting test remains failing unless separately fixed under
   another approved scope.

## Commands and evidence

Exploratory commands inspected the file list, Git state, tracked tree, project
files, current diff, and searched the repository for sum-related code. They
confirmed that no sum capability exists and that source/test files were
unchanged during investigation.

Correctness check run:

```text
$ npm test

> pullery-playground@0.0.0 test
> node --test

TAP version 13
# Subtest: greets someone by name
ok 1 - greets someone by name
# Subtest: falls back to a default when the name is empty
not ok 2 - falls back to a default when the name is empty
...
Expected values to be strictly equal:
+ actual - expected

+ 'Hello '
- 'Hello guest'
...
1..2
# tests 2
# suites 0
# pass 1
# fail 1
# cancelled 0
# skipped 0
# todo 0
```

The command exited with status 1. The omitted TAP timing and stack details do
not change the result; the full command output was captured in the run log.
