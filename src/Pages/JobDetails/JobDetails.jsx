import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronLeft,
  FaCheckCircle,
  FaBuilding
} from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();

  // Fallback UI when loader fails or data is missing
  if (!job || job?.error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 mb-4"></div>
        <h2 className="text-2xl font-black text-gray-800">Loading job details...</h2>
        <p className="text-gray-500 font-bold mt-2">Please check your backend connection.</p>
        <Link to="/" className="btn btn-outline mt-6">Go Back Home</Link>
      </div>
    );
  }

  // Safe destructuring with defaults
  const {
    _id,
    title = "",
    location = "",
    jobType = "",
    category = "",
    requirements = [],
    applicationDeadline = "",
    salaryRange = {},
    description = "",
    company = "",
    company_logo = ""
  } = job;

  return (
    <div className="bg-[#fcfcfd] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-indigo-600 font-black hover:gap-3 transition-all"
          >
            <FaChevronLeft /> Back to Browse Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-indigo-100/30 border border-gray-50">

              {/* Header */}
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {jobType}
                  </span>
                  <span className="bg-purple-50 text-purple-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  {title}
                </h1>

                <div className="flex flex-wrap gap-6 text-gray-400 font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-indigo-400" /> {location}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-indigo-400" /> Deadline: {applicationDeadline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-12 pt-10 border-t border-gray-50">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Position Overview</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium italic">
                  {description || "Job description will be updated soon."}
                </p>
              </div>

              {/* Requirements */}
              <div className="mt-12">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements.length > 0 ? (
                    requirements.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-gray-50 p-5 rounded-[1.5rem] border border-gray-100 hover:border-indigo-200 transition-colors"
                      >
                        <FaCheckCircle className="text-indigo-500 shrink-0" />
                        <span className="text-gray-800 font-black text-sm">{skill}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">No specific requirements mentioned.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Salary Card */}
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-200 sticky top-10">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-4">
                Compensation
              </h3>

              <div className="mb-10">
                <p className="text-4xl font-black">
                  {salaryRange?.min || "N/A"} - {salaryRange?.max || "N/A"}
                  <span className="text-sm font-bold ml-2 uppercase opacity-80">
                    {salaryRange?.currency}
                  </span>
                </p>
                <p className="text-indigo-200 text-[10px] font-black uppercase mt-2">
                  Negotiable based on experience
                </p>
              </div>

              <Link
                to={`/jobApply/${_id}`}
                className="w-full bg-white text-indigo-600 font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all active:scale-95 shadow-lg"
              >
                Apply for Job
              </Link>
            </div>

            {/* Company Card */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl p-4 border border-gray-100 mb-4">
                {company_logo && (
                  <img
                    src={company_logo}
                    alt={company}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <h4 className="text-xl font-black text-gray-900">{company}</h4>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase mt-1">
                <FaBuilding /> Verified Employer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;