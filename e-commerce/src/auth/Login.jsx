import React, { useState } from 'react'
import Input from '../components/input';
import { useNavigate } from 'react-router';

const Login = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const inputFields = [
        { placeholder: 'Username', name: 'username' },
        { placeholder: 'Password', name: 'password', type: 'password' }
    ];

    const handleLogin = () => {
        if (!loginCredentials.username || !loginCredentials.password) {
            alert('Please fill in all fields');
            return;
        }

        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginCredentials)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Login successful:', data);
                if (data.token) {
                    localStorage.setItem('token', data.token);
                }
                navigate("/contact");
            })
            .catch(error => {
                console.error('Login failed:', error);
                alert('Login failed. Please check your credentials and try again.');
            });
    }

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    Sign In
                </h2>
                <div className="space-y-5">
                    {inputFields.map((field, index) => (
                        <Input
                            key={index}
                            type={field.type || "text"}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={loginCredentials[field.name]}
                            onChange={(e) =>
                                setLoginCredentials({
                                    ...loginCredentials,
                                    [field.name]: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        />
                    ))}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md"
                    >
                        Sign In
                    </button>
                    <p className="text-sm text-center text-gray-500">
                        Don't have an account? <span className="text-indigo-600 cursor-pointer hover:underline">Register</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;