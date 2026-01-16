import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#1a1a1a] tracking-tight"
          >
            Get in <span className="text-[#6366f1]">Touch</span>
          </motion.h1>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto font-medium">
            Have questions or need help? Our team is here to support your career growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* 1. Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-[#6366f1] mb-6">
                <FaEnvelope size={20} />
              </div>
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</h4>
              <p className="text-lg font-bold text-[#1a1a1a]">jobportal@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                <FaPhoneAlt size={20} />
              </div>
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Call Us</h4>
              <p className="text-lg font-bold text-[#1a1a1a]">+880 1234 567 890</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6">
                <FaMapMarkerAlt size={20} />
              </div>
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Visit Us</h4>
              <p className="text-lg font-bold text-[#1a1a1a]">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* 2. Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-indigo-100/50"
            >
              <h3 className="text-2xl font-black text-[#1a1a1a] mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="bg-[#f9fafb] border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366f1] focus:ring-4 focus:ring-indigo-50 transition-all text-[#1a1a1a]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-[#f9fafb] border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366f1] focus:ring-4 focus:ring-indigo-50 transition-all text-[#1a1a1a]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    className="bg-[#f9fafb] border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366f1] focus:ring-4 focus:ring-indigo-50 transition-all text-[#1a1a1a]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600 ml-1">Your Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Write your message here..." 
                    className="bg-[#f9fafb] border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366f1] focus:ring-4 focus:ring-indigo-50 transition-all text-[#1a1a1a] resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#6366f1] hover:bg-[#4f46e5] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 active:scale-95"
                >
                  Send Message <FaPaperPlane size={16} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. Simple FAQ or Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="bg-[#111827] rounded-[3rem] p-12 text-center">
          <h2 className="text-white text-2xl font-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Quick answers to common questions about our job portal.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all">Support Center</button>
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all">Terms of Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;