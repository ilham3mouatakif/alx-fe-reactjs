import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <Router>
            <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
                <Link to="/blog/1" style={{ marginRight: '10px' }}>Blog Post 1</Link>
                <Link to="/blog/2" style={{ marginRight: '10px' }}>Blog Post 2</Link>
                {isAuthenticated ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <button onClick={login}>Login</button>
                )}
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/login" element={<div>Please login to access your profile. <button onClick={login}>Login</button></div>} />
            </Routes>
        </Router>
    );
}

export default App;
