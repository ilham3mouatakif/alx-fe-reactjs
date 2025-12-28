import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
    };

    const validate = () => {
        let tempErrors = {};
        if (!username) tempErrors.username = "Username is required";
        if (!email) tempErrors.email = "Email is required";
        if (!password) tempErrors.password = "Password is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully:", formData);
            // Mock API call simulation
            alert("Registration successful!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
