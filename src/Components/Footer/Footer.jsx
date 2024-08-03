import React from 'react'

export default function Footer() {
    return (
        <footer className='relative bottom-0 left-0 right-0 w-full text-center text-white'>
            <div className="bg-[#2c3e50] py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-2">LOCATION</h3>
                            <p>2215 John Daniel Drive Clark, MO 65243</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">AROUND THE WEB</h3>
                            <ul className='flex justify-center gap-3'>
                                <li>
                                    <a target='_blank' href="" className="w-10 h-10 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:text-[#1abc9c] hover:border-[#1abc9c]">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="" className="w-10 h-10 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:text-[#1abc9c] hover:border-[#1abc9c]">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="" className="w-10 h-10 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:text-[#1abc9c] hover:border-[#1abc9c]">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="" className="w-10 h-10 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:text-[#1abc9c] hover:border-[#1abc9c]">
                                        <i className="fas fa-globe"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1a252f] py-4">
                <p className='mb-0'>Copyright © Your Website 2021</p>
            </div>
        </footer>
    )
}