# Sign-in UI demo

This project is a front-end form study, not an authentication service. The original 2018 source displayed a success alert for any input and had no build manifest. This refresh adds a runnable Vite/React app, responsive styling, accessible labels, and an interaction test. The original commit history stays in place.

Submitting the form shows an explicit demo notice and clears the password field. No network request, account check, backend, credential storage, or real sign-in occurs. Do not enter a real password here.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm test
npm run build
npm audit
```
