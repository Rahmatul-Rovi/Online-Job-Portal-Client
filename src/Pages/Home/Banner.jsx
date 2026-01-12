import React from 'react';
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";  
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
     <img
      src= {team1}
      className="max-w-sm border-4 rounded-t-4xl rounded-br-4xl shadow-2xl"
    />
   </div>
    <div className='flex-1'>
      <motion.h1 
      animate={{rotate: 180,
      x: 100,
      y: -100,
      transition: {
        duration:4
      }
      }}
      className="text-5xl font-bold">Latest <span className='text-violet-500'>Jobs</span> for you!</motion.h1>

      <motion.h1 
     initial= {{scale: 0}}
     animate={{scale: 1, transition: {duration: 4}}}

      className="text-5xl font-bold">Remote <span className='text-blue-500'>Jobs</span> for you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;