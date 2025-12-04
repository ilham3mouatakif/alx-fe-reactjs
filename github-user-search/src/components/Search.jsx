import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username) return;
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError('Looks like we can\'t find the user');
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>GitHub User Search</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '0.5rem', marginRight: '0.5rem' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {userData && (
                <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
                    <img src={userData.avatar_url} alt={userData.login} width={100} style={{ borderRadius: '50%' }} />
                    <h3>{userData.name || userData.login}</h3>
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;
