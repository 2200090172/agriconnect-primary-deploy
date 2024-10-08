import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PublicLogin.css'; // Importing CSS for styling

const PublicLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulated login logic
        console.log('Login Submitted', formData);
        
        // Here, you can add your login API call logic.
        // For example:
        // const response = await axios.post("http://localhost:2014/login", formData);
        // Handle response...
        navigate('/About'); // Navigate to shop on successful login (remove this if you add API logic)
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <h2> Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        placeholder="m@example.com"
                        required
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        required
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
            <p className="login-footer">
                Didn't have account ?<Link to="/PublicSignin">Sign Up</Link>
            </p>
        </div>
    );
};

export default PublicLogin;
