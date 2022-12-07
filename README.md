# Angular Module Federation host app LOCALE_ID issue reproduction

## Working version
Project `loc` with no module federation setup works as expected.

```bash
npx nx loc:build
npx http-server dist/apps/loc/en # locale is en
npx http-server dist/apps/loc/lt # locale is lt
```

## MF version with issue
Project `loc-host` is MF host app and it has issue with not changing `LOCALE_ID`.

```bash
npx nx loc-host:build
npx http-server dist/apps/loc-host/en # locale is en-US
npx http-server dist/apps/loc-host/lt # locale is en-US
```
