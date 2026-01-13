import React from "react";
import { FaMapMarkerAlt, FaDollarSign, FaBriefcase } from "react-icons/fa";
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
    <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="p-6">
        {/* Company Info Section */}
        <div className="flex gap-4 items-center mb-4">
          <figure className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <img src={company_logo} className="w-12 h-12 object-contain" alt={company} />
          </figure>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{company}</h3>
            <p className="flex gap-1 items-center text-gray-500 text-sm">
              <FaMapMarkerAlt className="text-gray-400" /> {location}
            </p>
          </div>
        </div>

        {/* Job Title & Description */}
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            {title}
            <div className="badge badge-sm badge-secondary font-medium">NEW</div>
          </h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Requirements/Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="divider my-2 opacity-50"></div>

        {/* Salary and Action Button */}
        <div className="card-actions items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Salary</span>
            <p className="text-sm font-bold text-blue-600">
              {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
            </p>
          </div>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary btn-sm normal-case px-6">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;