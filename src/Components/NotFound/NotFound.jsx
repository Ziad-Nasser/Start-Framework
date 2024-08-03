import React from 'react'
import notfound from '../../assets/Error404.png'
export default function NotFound() {
    return (
        <section id='notFound' className='h-screen bg-gray-100 pt-16 flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-gray-800 mb-2 text-3xl font-bold'>Page Not Found ... </h1>
                <img src={notfound} className='w-1/4 mx-auto' alt="page not found" />
            </div>
        </section>

    )
}
