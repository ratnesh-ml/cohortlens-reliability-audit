# CohortLens Reliability Audit

CohortLens is an original, local-first reliability audit for an **illustrative score baseline**. I built it to practise a question I often see skipped in model demos: what changes when I inspect a rule across slices, thresholds, calibration buckets, and individual rows instead of reporting one average?

The built-in records are a small, attributed reference slice from UCI’s Wine Quality dataset. The app uses an intentionally simple score based on three published physicochemical columns so every calculation is inspectable. It is not a trained classifier or a real quality decision tool.

**Live demo:** Deployment verification in progress.

## What the workspace includes

| Surface | Purpose |
| --- | --- |
| Threshold workbench | Adjusts a transparent local rule and recalculates accuracy, precision, recall, false-positive rate, and confusion counts. |
| Measured-feature cohorts | Splits rows by alcohol bands to inspect context differences without inferring personal or sensitive traits. |
| Calibration view | Compares the average illustrative score in each bucket with the observed positive share in that same local bucket. |
| Row table | Makes every score, threshold outcome, and ground-truth label inspectable. |
| Local CSV import | Reads compatible `alcohol`, `volatile acidity`, `sulphates`, and `quality` columns in the browser only. |
| Local audit brief | Downloads a concise Markdown record of the current rule and slice metrics. |

## Run locally

```bash
pnpm install
pnpm check
pnpm test
pnpm build
pnpm dev
```

## Scope and attribution

The UCI Wine Quality dataset contains physicochemical inputs and a sensory quality output for Portuguese vinho verde samples; UCI lists it under CC BY 4.0 and provides the citation for Cortez et al. (2009). [1]

> CohortLens is a teaching and inspection interface. It does not train a model, infer sensitive traits, certify fairness, establish causality, or authorize any decision. Local imports are parsed in the browser and are not uploaded by this static application.

## License

MIT. See [LICENSE](LICENSE).

## References

[1] [UCI Machine Learning Repository — Wine Quality](https://archive.ics.uci.edu/dataset/186/wine+quality)
