import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';
import { FaLayerGroup, FaPlus, FaBriefcase, FaUsers, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const { user } = useAuth();

    const SkeletonLoader = () => (
        <div className="grid grid-cols-1 gap-6 mt-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 w-full bg-white border border-gray-100 rounded-[2.5rem] animate-pulse"></div>
            ))}
        </div>
    );

    return (
        <div className="max-w-7xl  mx-auto px-4 py-12 min-h-screen bg-[#fcfcfd]">
            
            {/* Header & Action Button */}
            <div className="flex flex-col  lg:flex-row justify-between items-center mb-10 gap-6">
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-white shadow-xl shadow-indigo-100 rounded-[1.5rem] flex items-center justify-center text-indigo-600 border border-indigo-50">
                        <FaLayerGroup size={28} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                            Recruiter <span className="text-indigo-600">Console</span>
                        </h2>
                        <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">
                            {user?.email} • Employer Account
                        </p>
                    </div>
                </div>

                <Link 
                    to="/addJob" 
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-white transition-all duration-200 bg-indigo-600 rounded-2xl hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-200"
                >
                    <FaPlus className="mr-2 group-hover:rotate-90 transition-transform" /> 
                    Post a New Vacancy
                </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <FaBriefcase />
                    </div>
                    <div>
                        <p className="text-xs font-black text-gray-400 uppercase">Live Jobs</p>
                        <p className="text-xl font-black text-gray-800">Check List</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                        <FaUsers />
                    </div>
                    <div>
                        <p className="text-xs font-black text-gray-400 uppercase">Total Candidates</p>
                        <p className="text-xl font-black text-gray-800">Manage All</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                        <FaClock />
                    </div>
                    <div>
                        <p className="text-xs font-black text-gray-400 uppercase">Avg. Response</p>
                        <p className="text-xl font-black text-gray-800">48 Hours</p>
                    </div>
                </div>
            </div>

            {/* Jobs List Section */}
            <div className="bg-white text-black rounded-[3rem] p-2 md:p-8 border border-gray-100 shadow-sm">
                <div className="p-6 border-b border-gray-50 mb-6">
                    <h3 className="text-xl font-black text-black text-gray-800">Your Active Listings</h3>
                </div>
                
                <Suspense  fallback={<SkeletonLoader />}>
                    <JobList jobsCreatedByPromise={jobsCreatedByPromise(user?.email)} />
                </Suspense>
            </div>
        </div>
    );
};

export default MyPostedJobs;