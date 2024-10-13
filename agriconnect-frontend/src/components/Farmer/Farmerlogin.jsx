import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Farmerlogin.css'; // Add your custom CSS or use Tailwind CSS
import Farmerlayout from './Farmerlayout';

const FarmerLogin = () => {
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
        console.log('Login Submitted', formData);

        // Simulated login logic
        // Add your login API call here if needed.
        navigate('/farmerhome');
    };

    return (
        <Farmerlayout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="card bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-green-600 text-center">Farmer Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="farmer@example.com"
                            required
                            type="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            required
                            type="password"
                            onChange={handleChange}
                            value={formData.password}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition ease-in-out duration-150"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don’t have an account?{' '}
                    <Link to="/Farmersignin" className="text-green-600 hover:text-green-800 font-medium">Sign Up</Link>
                </p>
            </div>
        </div>
        </Farmerlayout>
    );
};

export default FarmerLogin;
