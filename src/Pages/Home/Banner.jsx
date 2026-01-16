import React from 'react';
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";  
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    
                    {/* LEFT SIDE: Text Content (Professional Alignment) */}
                    <div className='flex-1 order-2 lg:order-1 text-center lg:text-left'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                                </span>
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                                    Latest Jobs for you!
                                </span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[1.1] tracking-tight">
                                Your Gateway to a <br className="hidden lg:block" />
                                <span className='text-indigo-600'>Dream Career!</span>
                            </h1>

                            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                                Connecting talented professionals with top companies worldwide. 
                                We provide a seamless platform to help you take the next big step in your professional journey.
                            </p>

                            {/* Trust Badge or Decorative Element */}
                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                                {/* <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img 
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white" 
                                            src={`https://i.pravatar.cc/100?u=${i}`} 
                                            alt="user" 
                                        />
                                    ))}
                                </div> */}
                                <p className="text-sm font-bold text-gray-500 italic">
                                    Trusted by <span className="text-indigo-600">10k+</span> Candidates
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Image Composition */}
                    <div className='flex-1 order-1 lg:order-2 relative w-full flex justify-center lg:justify-end'>
                        <div className="relative w-[300px] h-[350px] md:w-[450px] md:h-[450px]">
                            {/* Main Top Image */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute z-20 top-0 left-0"
                            >
                                <img
                                    src={team1}
                                    className="w-[220px] md:w-[320px] rounded-[2rem] shadow-2xl border-4 border-white"
                                    alt="Team 1"
                                />
                            </motion.div>

                            {/* Secondary Image */}
                            <motion.div
                                animate={{ x: [0, 20, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute z-10 bottom-4 right-0"
                            >
                                <img
                                    src={team2}
                                    className="w-[200px] md:w-[300px] rounded-[2rem] shadow-xl border-4 border-white"
                                    alt="Team 2"
                                />
                            </motion.div>

                            {/* Decorative Background Blob */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-70 -z-10 animate-pulse"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;