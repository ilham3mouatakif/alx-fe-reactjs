import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <nav>
                <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <Routes>
                    <Route path="details" element={<ProfileDetails />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Routes>
            </div>
        </div>
    );
};

const ProfileDetails = () => <div><h3>Profile Details</h3><p>Username: cooluser123</p></div>;
const ProfileSettings = () => <div><h3>Profile Settings</h3><p>Manage your account settings here.</p></div>;

export default Profile;
