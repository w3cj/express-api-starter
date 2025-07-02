# Express API Starter

A JavaScript Express v5 starter template with sensible defaults. For a TypeScript starter see the [express-api-starter-ts](https://github.com/w3cj/express-api-starter-ts)

How to use this template:

```sh
pnpm dlx create-express-api@latest --directory my-api-name
```

Includes API Server utilities:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [vitest](https://www.npmjs.com/package/vitest)
  - Next generation testing framework powered by Vite.
- [zod](https://www.npmjs.com/package/zod)
  - Validated env with zod schema
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

## Setup

```
pnpm install
```

## Lint

```
pnpm run lint
```

## Test

```
pnpm test
```

## Development

```
pnpm run dev
```
