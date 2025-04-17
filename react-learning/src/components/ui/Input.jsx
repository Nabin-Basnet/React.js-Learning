import React from 'react'

const Input = ({ label, type, placeholder, name, value, onChange }) => {
    return (
        <div className="mb-4">
            <label 
                htmlFor={`${name}`}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label}
            </label>
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                value={value} 
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    )
}

export default Input
