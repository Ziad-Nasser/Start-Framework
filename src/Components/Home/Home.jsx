import React from 'react'
import Heading from '../Heading/Heading'
import avatar from '../../assets/avataaars.svg'
export default function Home() {
    return <>
        <section className='bg-emerald-400 min-h-screen flex items-center justify-center'>
            <div className="text-center">
                <div className="mb-8">
                    <img src={avatar} className='w-64 h-64 mx-auto' alt="avatar" />
                </div>
                <Heading color="white" text="START FRAMEWORK" />
                <p className='text-white mt-4 text-lg'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
    </>

}
