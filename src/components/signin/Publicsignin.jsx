import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PublicSignin.css'; // Import CSS file for styling

const AuthPage = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating account creation logic (e.g., API call can be added here)
        console.log('Account Created:', formData);

        // Navigate to the Public Login page after successful account creation
        navigate('/PublicLogin'); 
    };

    return (
        <div className="signin-container">
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit} className="signin-form">
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="signin-btn">Sign up</button>
            </form>

            <p className="signin-footer">
                By clicking continue, you agree to our{" "}
                <Link to="/termsofservice" className="underline hover:text-primary">Terms of Service</Link> and{" "}
                <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
            </p>
            <p className="signin-footer">
                Already have an account? <Link to="/PublicLogin">Login</Link>
            </p>
        </div>
    );
};

export default AuthPage;
