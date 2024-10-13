import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Farmersignin.css'; // Import CSS file for styling

const Farmersignup = () => {
    const [formData, setFormData] = useState({
        userName: 'farmer',
        email: 'farmer@gmail.com',
        password: '1234',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Farmer Account Created:', formData);
        navigate('/Farmerlogin');
    };

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h2>Farmer Signup</h2>
                <form onSubmit={handleSubmit} className="signup-form">
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

                    <button type="submit" className="signup-btn">Sign up</button>
                </form>

                <p className="signup-footer">
                    By signing up, you agree to our{" "}
                    <Link to="/termsofservice" className="underline hover:text-primary">Terms of Service</Link> and{" "}
                    <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </p>
                <p className="signup-footer">
                    Already have an account? <Link to="/Farmerlogin">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Farmersignup;
