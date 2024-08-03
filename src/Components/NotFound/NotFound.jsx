import React from 'react'
import notfound from '../../assets/Error404.png'
export default function NotFound() {
    return (
        <section id='notFound' className='min-h-screen bg-gray-100 pt-16 flex items-center justify-center'>
            <div className='text-center w-full max-w-4xl px-4'>
                <img src={notfound} className='w-full max-w-2xl mx-auto' alt="page not found" />
            </div>
        </section>

    )
}
