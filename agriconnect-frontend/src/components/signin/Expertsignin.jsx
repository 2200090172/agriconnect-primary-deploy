import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Expertsignin.css'; // Import CSS file for styling

const ExpertSignin = () => {
    const [formData, setFormData] = useState({
        userName: 'expert',
        email: 'expert@gmail.com',
        password: 'abcd1234',
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
        console.log('Expert Account Created:', formData);
        navigate('/Expertlogin');
    };

    return (
        <div className="signin-container">
            <div className="signin-content">
                <h2>Expert Sign In</h2>
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

                    <button type="submit" className="signin-btn">Sign In</button>
                </form>

                <p className="signin-footer">
                    By signing in, you agree to our{" "}
                    <Link to="/termsofservice" className="underline hover:text-primary">Terms of Service</Link> and{" "}
                    <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </p>
                <p className="signin-footer">
                     have an account? <Link to="/Expertlogin">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ExpertSignin;
