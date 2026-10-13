import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[500px] border'>
            <h1 className='text-4xl font-bold mb-5'> Hi, I'm Sazib Khan</h1>
            <h3 className='text-yellow-500'>Frontend Developer & WordPress Expert</h3>
            <p className='mt-3 w-8/12'>I build modern, responsive, and user-friendly websites using React, WordPress, and Elementor. I turn ideas into clean, functional digital experiences that help businesses grow online</p>
            <div className='mt-8 flex gap-5'>
                <button className='my-custom-btn'>View My Work</button>
                <button className='border px-4 rounded-4xl'>Contact Me</button>
            </div>
        </div>
    );
};

export default Hero;