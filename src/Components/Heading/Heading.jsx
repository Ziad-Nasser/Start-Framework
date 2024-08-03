import React from 'react'

export default function Heading({ color, text }) {
    const colorClasses = {
        white: 'text-white',
        black: 'text-[#2C3E50]'
    }

    return <>
        <div className={`text-center ${colorClasses[color]}`}>
            <h1 className='font-bold text-4xl mb-4'>{text}</h1>
            <div className="flex items-center justify-center">
                <div className="w-24 h-1 bg-current"></div>
                <div className="mx-4 text-2xl">
                    <i className="fas fa-star"></i>
                </div>
                <div className="w-24 h-1 bg-current"></div>
            </div>
        </div>
    </>
}