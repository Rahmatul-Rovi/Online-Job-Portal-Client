import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdln = form.linkdln.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkdln,
      github,
      resume,
    };

    axios
      .post("https://job-portal-server-50h1rzimu-rahmatul-rovis-projects.vercel.app/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Application Sent!",
            text: "Your professional profile has been shared with the recruiter.",
            confirmButtonColor: "#6366f1",
          });
          navigate("/myApplications"); // Apply korar por applications page e niye jabe
        }
      })
      .catch((error) => console.log(error));
  };

  const inputClass =
    "w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all bg-white text-gray-800 placeholder:text-gray-400 font-medium";
  const labelClass =
    "block text-sm font-black text-gray-600 mb-2 ml-1 uppercase tracking-widest";

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button & Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <Link
            to={`/jobDetails/${jobId}`}
            className="flex items-center gap-2 text-indigo-600 font-black text-sm mb-4 hover:gap-3 transition-all"
          >
            <FaArrowLeft /> Back to Job Details
          </Link>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">
            Submit Your <span className="text-indigo-600">Application</span>
          </h2>
          <p className="text-gray-500 mt-2 font-medium italic">
            Apply as: {user?.email}
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleApplyFormSubmit}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-indigo-100/50 border border-gray-100 space-y-8"
        >
          {/* LinkedIn Input */}
          <div className="relative">
            <label className={labelClass}>LinkedIn Profile</label>
            <div className="relative">
              <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0077b5] text-xl" />
              <input
                type="url"
                name="linkdln"
                className={inputClass}
                placeholder="Enter your LinkedIn profile link"
                required
              />
            </div>
          </div>

          {/* GitHub Input */}
          <div className="relative">
            <label className={labelClass}>GitHub Profile</label>
            <div className="relative">
              <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#181717] text-xl" />
              <input
                type="url"
                name="github"
                className={inputClass}
                placeholder="Enter your GitHub profile link"
                required
              />
            </div>
          </div>

          {/* Resume Input */}
          <div className="relative">
            <label className={labelClass}>Resume Link (Drive/Cloud)</label>
            <div className="relative">
              <FaFilePdf className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff2d55] text-xl" />
              <input
                type="url"
                name="resume"
                className={inputClass}
                placeholder="Enter your Resume/CV link"
                required
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-2 ml-1 font-bold italic">
              * Please make sure the link is public
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg mt-10"
          >
            Submit Application <FaPaperPlane />
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mt-8">
          Secure & Professional Job Application
        </p>
      </div>
    </div>
  );
};

export default JobApply;
