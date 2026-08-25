# Contributing to CohortLens Reliability Audit

CohortLens is a small learning project maintained by Ratnesh Pratap Singh. Good contributions make the local evaluation logic, dataset attribution, accessibility, test coverage, or explanatory UI easier to inspect.

Before proposing a change, please preserve the project boundaries: this is not a trained classifier, a fairness certification, a causal analysis, or an authorization system. Cohorts must stay non-personal and measured-feature based.

For a code change, keep the change focused, update tests when metric behavior changes, and run:

```bash
pnpm check
pnpm test
pnpm build
```

Do not add sensitive personal data, high-impact decision scenarios, customer information, secrets, or datasets without an explicit compatible license and clear attribution. A small public or synthetic reproduction is preferred for issues and tests.
