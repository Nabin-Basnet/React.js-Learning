import React from 'react'

const Input = ({ label, type = "text", placeholder, name, value, onChange }) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-sm"
            />
        </div>
    )
}

export default Input
