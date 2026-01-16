import React from "react";
import { FaMapMarkerAlt, FaDollarSign, FaBriefcase, FaClock } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    requirements,
    salaryRange,
    description,
    company,
    company_logo,
  } = job;

  return (
    <div className="group bg-white rounded-2xl border border-[#e5e7eb] hover:border-[#6366f1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Top Header: Company Logo & Job Type */}
        <div className="flex justify-between items-start mb-4">
          <div className="bg-[#f9fafb] p-2 rounded-xl border border-[#f3f4f6] group-hover:border-[#e0e7ff] transition-colors">
            <img src={company_logo} className="w-12 h-12 object-contain" alt={company} />
          </div>
          <span className="px-3 py-1 bg-[#eef2ff] text-[#6366f1] text-[10px] font-bold uppercase tracking-widest rounded-lg">
            {jobType || "Full Time"}
          </span>
        </div>

        {/* Company & Title */}
        <div className="mb-4">
          <h3 className="text-[#6b7280] text-sm font-medium hover:text-[#6366f1] transition-colors cursor-pointer">{company}</h3>
          <h2 className="text-xl font-bold text-[#1a1a1a] mt-1 group-hover:text-[#4f46e5] transition-colors line-clamp-1">
            {title}
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <p className="flex items-center gap-1.5 text-[#9ca3af] text-xs">
              <FaMapMarkerAlt className="text-[#6366f1]" /> {location}
            </p>
            <p className="flex items-center gap-1.5 text-[#9ca3af] text-xs">
              <FaClock className="text-[#6366f1]" /> 2 days ago
            </p>
          </div>
        </div>

        {/* Job Description */}
        <p className="text-[#4b5563] text-sm leading-relaxed line-clamp-2 mb-5">
          {description}
        </p>

        {/* Skills/Tags */}
        <div className="flex flex-wrap gap-2 mb-6 flex-grow">
          {requirements.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#f3f4f6] text-[#374151] text-xs font-medium rounded-md border border-[#e5e7eb] group-hover:bg-white group-hover:border-[#6366f1]/20 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom Section: Salary & Link */}
        <div className="pt-5 border-t border-[#f3f4f6] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#9ca3af] font-bold uppercase tracking-wider">Salary Range</span>
            <p className="text-sm font-extrabold text-[#1a1a1a]">
              {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} <span className="text-[#6366f1] text-xs">{salaryRange.currency.toUpperCase()}</span>
            </p>
          </div>
          
          <Link to={`/jobs/${_id}`}>
            <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-bold py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-indigo-100 hover:shadow-indigo-200 active:scale-95">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;