import React from 'react';
import Input from '../Input/Input';
import Heading from '../Heading/Heading';

export default function Contact() {
    const inputs = [
        { text: "userName", type: "text" },
        { text: "userAge", type: "number" },
        { text: "userEmail", type: "email" },
        { text: "userPassword", type: "password" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-white py-16">
            <div className="w-full max-w-5xl px-4">
                <Heading color="black" text="Contact Section" className="space-y-8" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    {inputs.map((inp, index) => (
                        <Input key={index} text={inp.text} type={inp.type} />
                    ))}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
                    >
                        send Message
                    </button>
                </form>
            </div>
        </section>

    );
};
