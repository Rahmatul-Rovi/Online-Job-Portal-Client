import React from 'react';
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";  
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
     <motion.img
      src= {team1}
      animate= {{y:[100,150, 100]}}
      transition={{duration: 5, repeat: Infinity, repeatType: 'reverse'}}
      className="max-w-sm border-blue-400 border-s-4 border-b-4 rounded-t-4xl rounded-br-4xl shadow-2xl"
    />
     <motion.img
      src= {team2}
      animate= {{x:[100,150, 100]}}
      transition={{duration: 10, delay: 2, repeat: Infinity, repeatType: 'reverse'}}
      className="max-w-sm border-blue-400 border-s-4 border-b-4 rounded-t-4xl rounded-br-4xl shadow-2xl"
    />
   </div>
    <div className='flex-1'>
      <motion.h1 
      animate={{rotate: 180,
      x: 200,
      y: -200,
      transition: {
        duration:4
      }
      }}
      className="text-5xl font-bold">Latest <span className='text-violet-500'>Jobs</span> for you!</motion.h1>

      <motion.h1 
     initial= {{scale: 0}}
     animate={{scale: 1, transition: {duration: 4}}}

      className="text-5xl font-bold">Your Gateway to a  <span className='text-blue-500'>Dream Career!</span></motion.h1>
      <p className="py-6 text-2xl font-bold">
       Connecting talented professionals with top companies worldwide. Whether you are looking for your first job or a leadership role, we provide the platform to make it happen.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
 
</div>

    );
};

export default Banner;