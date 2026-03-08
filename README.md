# UniForm

A headless React library that accepts a Zod schema and automatically renders a fully customizable form. Zero default styles — bring your own components.

## Monorepo Structure

```
uniform/
├── packages/
│   └── core/          # The library (@uniform/core)
└── apps/
    └── playground/    # Vite + React dev app
```

## Packages

### `@uniform/core`

The core library. Phase 1 ships:

- **Type definitions** — `FieldConfig`, `FieldMeta`, `FieldProps`, `ComponentRegistry`, `AutoFormProps`, and more
- **Schema introspection** — walks a Zod schema and produces a normalized `FieldConfig` tree
  - Handles `ZodString`, `ZodNumber`, `ZodBoolean`, `ZodDate`, `ZodEnum`, `ZodNativeEnum`, `ZodObject`, `ZodArray`, `ZodUnion`, `ZodDiscriminatedUnion`
  - Transparently unwraps `ZodOptional`, `ZodNullable`, `ZodDefault`, `ZodEffects`
  - Extracts `.meta()` metadata (Zod V4)
  - Derives human-readable labels from camelCase / snake_case field names
  - Never throws — unsupported types fall back to `type: 'unknown'`

### `apps/playground`

Vite + React app for manual testing. Renders introspected field configs for example schemas.

## Getting Started

```bash
pnpm install
pnpm build        # build @uniform/core
pnpm test         # run unit tests
pnpm dev          # start playground
```

## Tech Stack

- **pnpm workspaces** — monorepo management
- **tsup** — library bundler (ESM + CJS + `.d.ts`)
- **Vite** — playground dev server
- **Vitest** — unit tests
- **TypeScript** — strict mode throughout
- **Zod V4** (`^3.25`) — peer dependency
