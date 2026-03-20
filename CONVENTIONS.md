# Code Conventions

## Arrow Functions (Preferred)

This project uses **arrow functions** for all function declarations, including React components and utility functions.

### Why Arrow Functions?

- **Consistency**: Uniform syntax across the codebase
- **Lexical `this` binding**: Reduces bugs related to context binding
- **Modern JavaScript**: Aligns with contemporary ES6+ practices
- **Consistency with React**: Standard pattern for functional components and hooks

### Examples

#### Utility Functions
```typescript
// ✅ Preferred
export const buildTheme = (dark: boolean) => {
  return { /* ... */ };
};

// ❌ Avoid
export function buildTheme(dark: boolean) {
  return { /* ... */ };
}
```

#### React Components
```typescript
// ✅ Preferred
export const Header = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

// ❌ Avoid
export function Header({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
```

#### Callbacks & Event Handlers
```typescript
// ✅ Preferred
const handleClick = () => {
  console.log("clicked");
};

// ❌ Avoid
function handleClick() {
  console.log("clicked");
}
```

### ESLint Enforcement

The ESLint rule [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback) enforces this convention with a `warn` severity level.

**Note:** The `prefer-arrow-callback` rule specifically targets callbacks. For general function declarations, consider using a linter setup with the `no-func-assign` rule or similar if stricter enforcement is needed in the future.

### Default Exports

For default exports, explicitly assign before exporting:
```typescript
// ✅ Preferred
const CVPage = () => {
  return <div>Content</div>;
};
export default CVPage;

// ❌ Avoid
export default function CVPage() {
  return <div>Content</div>;
}
```
