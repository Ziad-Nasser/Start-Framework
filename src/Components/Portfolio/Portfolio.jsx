import React, { useState } from 'react';
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import Heading from '../Heading/Heading';


export default function Portfolio() {
    const [imgs] = useState([img1, img2, img3, img1, img2, img3]);
    const [selectedImg, setSelectedImg] = useState(null);

    const closeImg = (e) => {
        if (e.target.id === "img-open") {
            setSelectedImg(null);
        }
    };

    const openImg = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <Heading color="black" text="Portfolio Section" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                    {imgs.map((img, index) => (
                        <PortfolioImg key={index} imgSource={img} openImg={openImg} />
                    ))}
                </div>
            </div>
            {selectedImg && (
                <div
                    onClick={closeImg}
                    id="img-open"
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                >
                    <img className="max-w-[80%] max-h-[80vh]" src={selectedImg} alt="" />
                </div>
            )}
        </section>
    );
};

const PortfolioImg = ({ imgSource, openImg }) => {
    return (
        <div className="relative overflow-hidden rounded-lg cursor-pointer group" onClick={() => openImg(imgSource)}>
            <div className="absolute inset-0 bg-teal-400 bg-opacity-90 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="fas fa-plus text-white text-5xl"></i>
            </div>
            <img className="w-full h-auto" src={imgSource} alt="" />
        </div>
    );
};