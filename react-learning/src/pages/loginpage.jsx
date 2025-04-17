import React, { useState } from 'react'
import Input from '../components/ui/Input';
import { useNavigate } from 'react-router';

const LoginPage = () => {
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
        // Check if credentials are not empty
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
                    // If response is not ok (status code not in 200-299 range)
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Successfully logged in
                console.log('Login successful:', data);
                // Store token if received
                if (data.token) {
                    localStorage.setItem('token', data.token);
                }
                // Navigate to home page
                navigate("/contact");
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Login failed:', error);
                alert('Login failed. Please check your credentials and try again.');
            });
    }


    return (
        <div className='w-screen min-h-screen flex items-center justify-center '>
            <div className='bg-white p-8 rounded-lg shadow-2xl w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Login</h2>
                <div className='space-y-4'>
                    {inputFields.map((field, index) => (
                        <Input
                            key={index}
                            type={field.type || "text"}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={loginCredentials[field.name]}
                            onChange={(e) => setLoginCredentials({
                                ...loginCredentials,
                                [field.name]: e.target.value
                            })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ))}
                    <button className='w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 cursor-pointer transition duration-200 mt-6'
                        onClick={handleLogin}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
