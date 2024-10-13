import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Expertslogin.css'; // Importing CSS for styling

const ExpertLogin = () => {
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
        console.log('Expert Login Submitted', formData);
        
        // Add your API login call here
        // For example:
        // const response = await axios.post("http://localhost:2014/expertlogin", formData);
        // Handle response...
        navigate('/experthome'); // Navigate to expert dashboard on successful login
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <h2> Expert Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        placeholder="expert@example.com"
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
                Don't have an account? <Link to="/Expertsignin">Sign Up</Link>
            </p>
        </div>
    );
};

export default ExpertLogin;
