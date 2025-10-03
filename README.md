## Comp3123 Jeffin Yohannan | ID: 101512594

## how to Run
- **Q1 (ES6/Promise)**: `npm run q1`
- **Q2 (Promises)**: `npm run q2`
- **Q3 (File Module)**:
  - Create logs: `npm run q3:add`
  - Remove logs: `npm run q3:remove`

## Notes
- Q1 filters non-strings and lowercases the rest; returns a Promise.
- Q2 includes `resolvedPromise` and `rejectedPromise`, both 500ms delayed.
- Q3 uses `fs`, `path`, and `process.cwd()` to create/remove `Logs/` and print filenames.