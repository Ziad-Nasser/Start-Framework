import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        document.title = linkName === 'START FRAMEWORK' ? 'HOME' : linkName;
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY !== 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 bg-[#2c3e50] text-white w-full transition-all duration-500 ${isScrolled ? 'py-2.5' : 'py-6'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={() => handleLinkClick('START FRAMEWORK')} className="text-2xl font-bold">START FRAMEWORK</Link>
                    <button
                        className="lg:hidden p-2 rounded"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className="block w-full h-0.5 bg-white"></span>
                            <span className="block w-full h-0.5 bg-white"></span>
                            <span className="block w-full h-0.5 bg-white"></span>
                        </div>
                    </button>
                    <ul className="hidden lg:flex space-x-4">
                        {['ABOUT', 'PORTFOLIO', 'CONTACT'].map((link) => (
                            <li key={link}>
                                <Link
                                    to={`/${link.toLowerCase()}`}
                                    onClick={() => handleLinkClick(link)}
                                    className={`font-bold px-3 py-2 rounded hover:bg-[#1abc9c] transition-colors duration-300 ${activeLink === link ? 'bg-[#1abc9c]' : ''}`}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="px-4 py-2">
                    {['ABOUT', 'PORTFOLIO', 'CONTACT'].map((link) => (
                        <li key={link} className="py-2">
                            <Link
                                to={`/${link.toLowerCase()}`}
                                onClick={() => handleLinkClick(link)}
                                className="block font-bold"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}