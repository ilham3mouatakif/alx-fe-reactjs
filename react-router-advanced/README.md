# React Router Advanced

This project demonstrates advanced routing techniques in React using `react-router-dom`.

## Key Features
- **Nested Routes**: Managed within the `Profile` component for sub-sections.
- **Dynamic Routing**: Implementation of variable paths using `useParams` (see `BlogPost`).
- **Protected Routes**: A specialized route wrapper (`ProtectedRoute`) that requires authentication (simulated).

## Project Structure
- `src/App.jsx`: Main router configuration.
- `src/components/Profile.jsx`: Demonstrates nested routes (`ProfileDetails`, `ProfileSettings`).
- `src/components/BlogPost.jsx`: Demonstrates dynamic routes with `useParams`.
- `src/components/ProtectedRoute.jsx`: Authentication check wrapper.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
