import React, { useState } from 'react';

export default function Input({ text, type }) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(value !== '');
    const handleChange = (e) => setValue(e.target.value);

    return (
        <div className="relative">
            <input
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                type={type}
                name={text}
                id={text}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <label
                htmlFor={text}
                className={`absolute left-0 transition-all duration-300 ${isFocused
                    ? '-top-6 text-sm text-teal-500'
                    : 'top-2 text-gray-500'
                    }`}
            >
                {text}
            </label>
        </div>
    );
};
