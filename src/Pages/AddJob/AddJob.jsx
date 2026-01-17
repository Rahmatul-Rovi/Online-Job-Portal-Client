import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlusCircle, FaBriefcase, FaDollarSign, FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    newJob.requirements = newJob.requirements ? newJob.requirements.split(",").map((req) => req.trim()) : [];
    newJob.responsibilities = newJob.responsibilities ? newJob.responsibilities.split(",").map((res) => res.trim()) : [];
    newJob.status = "active";

    axios.post("https://job-portal-server-50h1rzimu-rahmatul-rovis-projects.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Job Posted!",
            text: "Job has been successfully added.",
            confirmButtonColor: "#6366f1",
          });
          form.reset();
        }
      })
      .catch((error) => console.error("Error adding job:", error));
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white text-gray-800 placeholder:text-gray-400";
  const labelClass = "block text-sm font-black text-gray-600 mb-2 ml-1 uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Modern Header */}
        <div className="bg-white rounded-t-[2.5rem] p-10 border-b border-gray-100 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Post a <span className="text-indigo-600">New Job</span>
            </h2>
            <p className="text-gray-500 font-medium mt-1">Hire the best talent for your team.</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-2xl hidden md:block">
            <FaBriefcase className="text-indigo-600 text-3xl" />
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleAddAJob} className="bg-white rounded-b-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 space-y-10">
          
          {/* Group 1: Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={labelClass}>Job Title</label>
              <input type="text" name="title" className={inputClass} placeholder="Enter Job Title" required />
            </div>
            <div>
              <label className={labelClass}>Company Name</label>
              <input type="text" name="company" className={inputClass} placeholder="Enter Company Name" required />
            </div>
            <div>
              <label className={labelClass}>Location</label>
              <div className="relative">
                 <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-300" />
                 <input type="text" name="location" className={`${inputClass} pl-10`} placeholder="Enter Job Location" required />
              </div>
            </div>
            <div>
              <label className={labelClass}>Company Logo URL</label>
              <input type="text" name="companyLogo" className={inputClass} placeholder="Enter Company Logo URL" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div>
              <label className={labelClass}>Job Type</label>
              <select name="jobType" className={inputClass}>
                <option value="on-site">On-Site</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Job Category</label>
              <select name="category" className={inputClass}>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Design</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Application Deadline</label>
              <input type="date" name="deadline" className={inputClass} required />
            </div>
          </div>

          {/* Group 2: Compensation */}
          <div className="bg-indigo-50/30 p-8 rounded-[2rem] border border-indigo-100/50">
            <h3 className="flex items-center gap-2 text-indigo-700 font-black uppercase text-xs tracking-[0.2em] mb-6">
              <FaDollarSign /> Salary Range & Currency
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input type="number" name="min" className={inputClass} placeholder="Enter Min Salary" required />
              <input type="number" name="max" className={inputClass} placeholder="Enter Max Salary" required />
              <select name="currency" className={inputClass}>
                <option value="BDT">BDT (৳)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>
          </div>

          {/* Group 3: Content */}
          <div className="space-y-8">
            <div>
              <label className={labelClass}>Job Description</label>
              <textarea name="description" className={`${inputClass} h-32 resize-none`} placeholder="Enter Job Description" required></textarea>
            </div>
            <div>
              <label className={labelClass}>Job Requirements</label>
              <textarea name="requirements" className={`${inputClass} h-24 resize-none`} placeholder="Enter Job Requirements (separate by comma)" required></textarea>
            </div>
            <div>
              <label className={labelClass}>Job Responsibilities</label>
              <textarea name="responsibilities" className={`${inputClass} h-24 resize-none`} placeholder="Enter Job Responsibilities (separate by comma)" required></textarea>
            </div>
          </div>

          {/* Footer / Submit */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-gray-100">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black">
                   {user?.displayName?.charAt(0) || "H"}
                </div>
                <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Posting as HR</p>
                   <p className="text-gray-800 font-bold">{user?.email}</p>
                </div>
             </div>
             <button type="submit" className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-black px-12 py-4 rounded-2xl shadow-xl shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                Post Job Now <FaPlusCircle />
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;