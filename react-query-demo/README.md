# React Query Demo

This project demonstrates how to use React Query (specifically `@tanstack/react-query`) for efficient data fetching, caching, and state management in a React application.

## Key Features
- **Data Fetching**: Fetches posts from the JSONPlaceholder API.
- **Caching**: React Query automatically caches data. Navigating away and back will show the data instantly if still in cache.
- **Error & Loading States**: Handles and displays loading and error states during fetching.
- **Manual Refetching**: Includes a button to manually trigger a refetch of the data.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## API Endpoint
- Posts: `https://jsonplaceholder.typicode.com/posts`
