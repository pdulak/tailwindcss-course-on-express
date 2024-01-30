# tailwindcss

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## others

Run tailwindcss during development:

```
bunx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch
```

Run server with hot reloading during development:

```
bun --hot index.ts
```