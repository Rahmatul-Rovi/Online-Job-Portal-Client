import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#6366f1] p-1.5 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Job<span className="text-[#6366f1]">Portal</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-2">
              Connecting talented professionals with world-class companies. Your next career move starts here.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-[#6366f1] transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-[#6366f1] transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-[#6366f1] transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-[#6366f1] transition-colors"><FaGithub size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Services</h6>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">Browse Jobs</a></li>
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">Companies</a></li>
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">Career Advice</a></li>
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">Job Alerts</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h6>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">About Us</a></li>
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">Contact</a></li>
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a className="hover:text-[#6366f1] transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div>
            <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Stay Updated</h6>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get the latest job updates.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="text" 
                placeholder="Email Address" 
                className="bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#6366f1] text-white"
              />
              <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white py-2 rounded-lg text-sm font-bold transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1f2937] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;