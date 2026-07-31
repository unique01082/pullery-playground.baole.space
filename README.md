# pullery-playground.baole.space

Pilot repository for [Pullery](https://pullery.baole.space).

Small on purpose: one module, one test file, no dependencies. `greeting('')`
currently returns `"Hello "` where the test expects `"Hello guest"`, which gives
Pullery something real to reproduce, fix, revise and merge.

```bash
npm test
```

Pullery's own configuration lives in [.pullery/config.json](.pullery/config.json)
and its instructions for agents in [AGENTS.md](AGENTS.md).
