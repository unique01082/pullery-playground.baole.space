# Working in this repository

A deliberately tiny pilot repository, used to exercise Pullery end to end.

## Validating a change

```bash
npm test
```

That runs `node --test test/`. There are **no dependencies to install** — the test
runner is built into Node — so `npm install` is never needed and network access is
not required to validate anything here.

Report every command you ran as a check, with its real output. A check reported as
passing without having been run is worse than no check.

## Conventions

- ES modules (`"type": "module"`). Use `import`, and include the `.js` extension in
  relative specifiers.
- Source in `src/`, tests in `test/`, mirroring the filename.
- Keep changes to what was asked. This repository exists to make Pullery's
  behaviour legible, so an unrelated "improvement" makes a test run harder to read,
  not better.
