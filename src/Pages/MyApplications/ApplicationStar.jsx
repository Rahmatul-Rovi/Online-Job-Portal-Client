import React from "react";
import { FaBriefcase, FaEye, FaCheckCircle } from "react-icons/fa";

const ApplicationStar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* 1. Total Applications */}
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between group hover:border-indigo-500 transition-all duration-300">
        <div>
          <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">
            Total Applied
          </p>
          <div className="stat-value text-4xl font-black text-[#1a1a1a]">12</div>
          <p className="text-xs font-bold text-indigo-500 mt-2 flex items-center gap-1">
            <span>↑ 2</span> <span className="text-gray-400">new this week</span>
          </p>
        </div>
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#6366f1] group-hover:scale-110 transition-transform">
          <FaBriefcase size={28} />
        </div>
      </div>

      {/* 2. Profile Views */}
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between group hover:border-purple-500 transition-all duration-300">
        <div>
          <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">
            Profile Views
          </p>
          <div className="stat-value text-4xl font-black text-[#1a1a1a]">1.2K</div>
          <p className="text-xs font-bold text-purple-500 mt-2 flex items-center gap-1">
            <span>↑ 12%</span> <span className="text-gray-400">vs last month</span>
          </p>
        </div>
        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
          <FaEye size={28} />
        </div>
      </div>

      {/* 3. Shortlisted / Success Rate */}
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between group hover:border-emerald-500 transition-all duration-300">
        <div>
          <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">
            Shortlisted
          </p>
          <div className="stat-value text-4xl font-black text-[#1a1a1a]">85%</div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
             <div className="bg-emerald-500 h-full w-[85%] rounded-full"></div>
          </div>
        </div>
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
          <FaCheckCircle size={28} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationStar;