import React from 'react'
import Heading from '../Heading/Heading'

export default function About() {
    return <>
        <section id="about" className="flex justify-center items-center bg-main min-h-screen py-16">
            <div className="container mx-auto">
                <div className="px-5 text-white">
                    <div className="mb-3">
                        <Heading color="white" text="ABOUT COMPONENT" />
                    </div>
                    <div className="md:flex md:space-x-8">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
