import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const Migrate = () => {
    return (
        <div className='mt-4'>
            <div className='bg-[#0e404a] hero min-h-screen'>
                <div className="hero-content flex flex-col lg:flex-row items-center gap-6 lg:gap-12 p-6 md:p-10 rounded-lg">
                    
                 
                    <img
                        src="../assets/happy.png"
                        alt="Hosting"
                        className="w-[520px] h-auto rounded-2xl object-cover shadow-lg"
                    />

                
                    <div className="flex flex-col justify-center text-center lg:text-left max-w-2xl">
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            Switching Hosts? <br /> We’ll Handle It for Free
                        </h1>

                        <p className='text-gray-200 text-base mb-5 leading-relaxed'>
                            Migrate your website hassle-free! Our expert team will move everything for you — ensuring zero downtime, full security, and peak performance.
                        </p>

                      
                        <div className="flex flex-col gap-3 sm:gap-4 mb-8">
                            {[
                                'AI Site Builder for instant creation',
                                'NVMe LiteSpeed hosting for blazing speed',
                                '24/7 human support that truly helps',
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center lg:justify-start space-x-2"
                                >
                                    <CheckIcon className="h-6 w-6 text-green-400" />
                                    <span className="text-white text-base">{text}</span>
                                </div>
                            ))}
                        </div>

                       
                        <div className="flex justify-center lg:justify-start">
                            <button className="cursor-pointer bg-[#0d5e6e] hover:bg-[#064552] text-white font-semibold px-8 py-3 rounded-md shadow-md transition duration-300 ease-in-out">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Migrate;
