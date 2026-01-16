import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaRocket, FaHandshake, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section - Simple & Bold */}
      <div className="bg-[#111827] py-20 px-4 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Empowering Your <span className="text-[#6366f1]">Career Journey</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are more than just a job portal. We are a bridge between world-class talent and industry-leading companies.
          </p>
        </motion.div>
        
        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366f1]/20 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. Mission & Vision Section */}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-6">
              Our Mission to <span className="text-[#6366f1]">Innovate</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since 2024, our platform has been dedicated to simplifying the recruitment process. We believe that everyone deserves to work in a place where they can grow, and every company deserves to find the right talent quickly.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <FaBullseye className="text-[#6366f1] text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-[#1a1a1a]">Our Goal</h4>
                  <p className="text-sm text-gray-500">To be the #1 choice for developers and tech enthusiasts globally.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-[#f9fafb] p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-shadow">
               <FaUsers className="text-[#6366f1] text-4xl mx-auto mb-4" />
               <h3 className="text-3xl text-black font-black">10k+</h3>
               <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-2">Active Users</p>
            </div>
            <div className="bg-[#f9fafb] p-8 rounded-[2.5rem] border border-gray-100 text-center mt-8 hover:shadow-xl transition-shadow">
               <FaRocket className="text-purple-500 text-4xl mx-auto mb-4" />
               <h3 className="text-3xl text-black font-black">500+</h3>
               <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-2">Placements</p>
            </div>
            <div className="bg-[#f9fafb] p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-shadow">
               <FaHandshake className="text-emerald-500 text-4xl mx-auto mb-4" />
               <h3 className="text-3xl text-black font-black">200+</h3>
               <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-2">Partners</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Why Choose Us? */}
      <div className="bg-[#f9fafb] py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a]">Why Choose <span className="text-[#6366f1]">Our Portal</span>?</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Smart Matching", desc: "Our AI helps find the perfect job based on your specific skills.", icon: "🤖" },
            { title: "Direct Connect", desc: "Directly communicate with HRs and founders of top companies.", icon: "⚡" },
            { title: "Verified Jobs", desc: "No fake job posts. Every company and job is manually verified.", icon: "✅" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:border-[#6366f1] transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-[#1a1a1a] mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Final CTA */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to find your next adventure?</h2>
          <p className="text-indigo-100 mb-10 max-w-xl mx-auto italic">"Your dream job is waiting for you. Let's make it happen together."</p>
          <button className="bg-white text-[#6366f1] px-10 py-4 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
            Browse All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;