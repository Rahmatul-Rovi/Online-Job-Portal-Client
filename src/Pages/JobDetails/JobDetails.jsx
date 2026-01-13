import React from "react";
import { useLoaderData, Link } from "react-router";
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaCalendarAlt, FaChevronLeft } from "react-icons/fa";

const JobDetails = () => {

  const job = useLoaderData(); 
  
  const {
    _id,
    title,
    location,
    jobType,
    category,
    requirements,
    applicationDeadline,
    salaryRange,
    description,
    company,
    company_logo,
  } = job;

  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/" className="btn btn-ghost mb-6 gap-2">
          <FaChevronLeft /> Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Details Section (Left Side) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card bg-base-100 shadow-sm p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                  <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
                    <span className="flex items-center gap-2"><FaBriefcase className="text-primary"/> {jobType}</span>
                    <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary"/> {location}</span>
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-primary"/> Deadline: {applicationDeadline}</span>
                  </div>
                </div>
                <div className="badge badge-primary badge-outline p-4 font-semibold">{category}</div>
              </div>

              <div className="divider"></div>

              {/* Job Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Job Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                <div className="flex flex-wrap gap-3">
                  {requirements.map((skill, index) => (
                    <div key={index} className="badge badge-lg bg-blue-50 text-blue-700 border-blue-200 py-4 px-6">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Salary & Apply Card */}
            <div className="card bg-base-100 shadow-sm p-6 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4">Salary Range</h3>
              <p className="text-3xl font-extrabold text-primary flex items-center gap-2 mb-6">
                <FaDollarSign className="text-2xl" />
                {salaryRange.min} - {salaryRange.max} <span className="text-lg font-medium text-gray-500">{salaryRange.currency.toUpperCase()}</span>
              </p>
              <Link to={`/jobApply/${_id}`} className="btn btn-primary btn-block text-lg">
                Apply Now
              </Link>
            </div>

            {/* Company Info Card */}
            <div className="card bg-base-100 shadow-sm p-6">
              <h3 className="text-xl font-bold mb-6">Company Information</h3>
              <div className="flex items-center gap-4 mb-4">
                <img src={company_logo} alt={company} className="w-16 h-16 rounded-lg object-contain bg-gray-50 p-2 border" />
                <div>
                  <h4 className="font-bold text-lg">{company}</h4>
                  <p className="text-gray-500 text-sm">Worldwide IT Solutions</p>
                </div>
              </div>
              <div className="divider my-2"></div>
              <button className="btn btn-outline btn-sm btn-block">View Company Profile</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;