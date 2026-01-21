# AGENTS.md - Movie Page Project

This document provides guidelines for agentic coding agents working on this React + TypeScript + Vite project.

## Project Overview

This is a movie search application using:
- React 19.2.0 with TypeScript
- Vite build tool
- Tailwind CSS v4 with @tailwindcss/vite
- Flowbite React UI components
- ESLint for code quality
- Appwrite and TMDB API integration

## Build and Development Commands

### Development
```bash
npm run dev          # Start development server (Vite)
```

### Build and Lint
```bash
npm run build        # Build production bundle: tsc -b && vite build
npm run lint         # Run ESLint on all files
npm run preview      # Preview production build
```

### Type Checking
```bash
npx tsc --noEmit     # Type check without emitting files
```

### Single File Linting
```bash
npx eslint src/App.tsx --fix          # Lint specific file
npx eslint src/components/* --fix     # Lint components
```

## Code Style Guidelines

### Imports
- Use ES module imports (`import`)
- Group imports in this order:
  1. React and core libraries
  2. Third-party libraries
  3. Local modules/components
  4. Type imports
- Use named imports for React hooks: `import { useEffect, useState } from "react"`
- Use default imports for local components: `import Search from "./components/search"`

Example from `src/App.tsx:1-5`:
```typescript
import { useEffect, useState } from "react"
import Search from "./components/search"
import { Loader } from "./components/loader"
import MovieCard from "./components/movieCard"
import { useDebounce } from "react-use"
```

### TypeScript Configuration
- Strict mode is enabled (`"strict": true` in `tsconfig.app.json:20`)
- `"noUnusedLocals": true` and `"noUnusedParameters": true`
- Use explicit types for function parameters and return values
- Avoid `any` type when possible - use proper interfaces or types
- Environment variables are typed via Vite's `import.meta.env`

Example from `src/App.tsx:8`:
```typescript
const apiKey: string = import.meta.env.VITE_TMDB_API_KEY
```

### Component Structure
- Use functional components with TypeScript
- Props should be typed inline or with interfaces
- Default export for components (except utility components)

Example from `src/components/search.tsx:3`:
```typescript
const Search = (props:{searchTerm:string,setSearchTerm:React.Dispatch<React.SetStateAction<string>>}) => {
```

### State Management
- Use React hooks (`useState`, `useEffect`, custom hooks)
- Use `react-use` library for utilities like `useDebounce` (see `src/App.tsx:25`)
- Initialize state with proper types

Example from `src/App.tsx:16-20`:
```typescript
const [searchTerm, setSearchTerm] = useState("")
const [error, setError] = useState('')
const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)
```

### Error Handling
- Use try/catch blocks for async operations
- Set error state for UI feedback
- Log errors to console for debugging

Example from `src/App.tsx:76-81`:
```typescript
} catch (error) {
  console.log(`Error fetching movies: ${error}`)
  setError(`Error fetching movies: ${error}`)
} finally {
  setLoading(false)
}
```

### API Integration
- Use `fetch` API for HTTP requests
- Set proper headers with API keys from environment variables
- Handle response errors and status codes
- Debounce search inputs (see `src/App.tsx:25`)

Example from `src/App.tsx:49-55`:
```typescript
const apiOptions: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};
```

### Naming Conventions
- **Variables**: camelCase (`searchTerm`, `fetchMovies`)
- **Components**: PascalCase (`MovieCard`, `Search`, `Loader`)
- **Files**: kebab-case for component files (`movieCard.tsx`, `search.tsx`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase for runtime constants
- **Interfaces/Types**: PascalCase, often prefixed with 'I' (optional)
- **Functions**: camelCase, descriptive names
- **Boolean variables**: prefix with `is`/`has` (`isLoading`, `hasError`)

### Formatting and Spacing
- 2-space indentation (consistent with existing code)
- Use empty lines to separate logical blocks
- Keep lines under 100 characters when possible
- Use template literals for string interpolation

Example spacing from `src/App.tsx:24-26`:
```typescript
// debouncing the search
useDebounce(()=>setDebounceSearch(searchTerm),500,[searchTerm])
```

### React Patterns
- Use JSX with Tailwind CSS classes directly
- Conditional rendering with ternary operators or logical AND
- Map over arrays for rendering lists
- Keys for list items (see `src/App.tsx:104`)

Example from `src/App.tsx:103-105`:
```typescript
{loading ? (<p className="text-white text-center"> <Loader /></p>) : error ? (<p className="text-red-500"> {error}</p>) : (<ul> {movies.map((movie: any) => (
  <MovieCard key={movie.id} movie={movie} />
))}</ul>)}
```

### Tailwind CSS Usage
- Use utility classes inline
- Custom classes defined in CSS for complex styles
- Use Flowbite React components when appropriate
- Responsive design with Tailwind breakpoints

### Asset Handling
- Static assets in `public/` directory
- Reference with relative paths: `./logo.png`, `./search.svg`
- Dynamic image URLs from APIs use template literals

Example from `src/components/movieCard.tsx:6`:
```typescript
<img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `./no-movie.png`} alt="movie poster" />
```

## File Organization

```
src/
├── App.tsx              # Main application component
├── main.tsx            # Entry point
├── components/         # Reusable components
│   ├── loader.tsx
│   ├── search.tsx
│   └── movieCard.tsx
public/                 # Static assets
├── logo.png
├── hero.png
├── search.svg
└── star.svg
```

## Environment Variables

- Use `import.meta.env` for Vite environment variables
- Required: `VITE_TMDB_API_KEY`
- Store in `.env.local` file (not committed to git)

## Code Quality

### ESLint Configuration
- Uses ESLint 9 with flat config (`eslint.config.js`)
- TypeScript ESLint rules enabled
- React Hooks and React Refresh plugins
- Lint before committing changes

### Pre-commit Checks
Always run these before creating commits:
```bash
npm run lint           # Check code style
npx tsc --noEmit      # Type checking
npm run build         # Ensure builds successfully
```

## Testing (Not Currently Configured)

No test framework is currently configured. If adding tests:
- Use Vitest (aligned with Vite)
- Test files alongside source: `Component.test.tsx`
- Mock API calls and test component behavior

## Best Practices for Agents

1. **Check imports** - Follow the established import order pattern
2. **Type everything** - Avoid `any` when possible, use proper interfaces
3. **Error boundaries** - Consider adding React Error Boundaries
4. **Loading states** - Always handle loading states in async operations
5. **Empty states** - Handle empty data cases
6. **Accessibility** - Add alt text to images, proper ARIA labels
7. **Responsive design** - Test at different screen sizes
8. **Performance** - Memoize expensive calculations if needed
9. **Security** - Never commit API keys or environment variables
10. **Consistency** - Match existing code patterns and conventions

## Common Patterns to Follow

### API Function Pattern
```typescript
const fetchData = async (params: Type) => {
  setLoading(true)
  setError('')
  try {
    // API logic
    const response = await fetch(url, options)
    if (!response.ok) throw new Error(`Error: ${response.statusText}`)
    const data = await response.json()
    setData(data)
  } catch (error) {
    console.error(error)
    setError(String(error))
  } finally {
    setLoading(false)
  }
}
```

### Component Prop Pattern
```typescript
interface ComponentProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

const Component = ({ value, onChange, disabled = false }: ComponentProps) => {
  // Component logic
}
```

### State Hook Pattern
```typescript
const [state, setState] = useState<Type>(initialValue)
useEffect(() => {
  // Side effect logic
}, [dependencies])
```

## When Making Changes

1. **Small, focused changes** - One logical change per commit
2. **Update types** - Update TypeScript interfaces when changing data structures
3. **Test manually** - Run `npm run dev` to verify changes work
4. **Check linting** - Run `npm run lint` before committing
5. **Document changes** - Update comments or README if changing behavior

## Resources

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Flowbite React](https://flowbite-react.com/)

---

*This document was generated based on analysis of the codebase. Update as patterns evolve.*