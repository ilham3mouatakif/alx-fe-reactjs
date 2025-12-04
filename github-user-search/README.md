# GitHub User Search

A React application that allows users to search for GitHub profiles using the GitHub API.

## Features

- **Basic Search**: Search for GitHub users by username
- **User Information Display**: View user avatar, name, bio, and profile link
- **Loading States**: Visual feedback during API requests
- **Error Handling**: Clear error messages when users are not found

## Technologies Used

- **React**: UI library
- **Vite**: Build tool and development server
- **Axios**: HTTP client for API requests
- **GitHub API**: Data source for user information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd github-user-search
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
github-user-search/
├── src/
│   ├── components/
│   │   └── Search.jsx          # Main search component
│   ├── services/
│   │   └── githubService.js    # GitHub API service
│   ├── App.jsx                 # Root component
│   └── main.jsx                # Application entry point
├── package.json
└── vite.config.js
```

## Usage

1. Enter a GitHub username in the search input
2. Click the "Search" button or press Enter
3. View the user's profile information
4. Click "View Profile" to visit their GitHub page

## API Reference

This application uses the GitHub REST API:
- Endpoint: `https://api.github.com/users/{username}`
- No authentication required for basic usage
- Rate limit: 60 requests per hour for unauthenticated requests

## Future Enhancements

- Advanced search with filters (location, repositories count)
- Pagination for search results
- User repository listing
- Deployment to Vercel

## License

This project is part of the ALX Frontend React curriculum.
