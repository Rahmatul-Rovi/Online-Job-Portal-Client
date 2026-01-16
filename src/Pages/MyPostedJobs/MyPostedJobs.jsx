import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';
import { FaLayerGroup, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const { user } = useAuth();

    // Fast loading skeleton
    const SkeletonLoader = () => (
        <div className="grid grid-cols-1 gap-4 mt-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 w-full bg-white border border-gray-100 rounded-[2rem] animate-pulse"></div>
            ))}
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-5 text-center md:text-left">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-inner">
                        <FaLayerGroup size={26} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                            My Posted <span className="text-indigo-600">Jobs</span>
                        </h2>
                        <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">
                            Manage and track your active listings
                        </p>
                    </div>
                </div>

                <Link 
                    to="/addJob" 
                    className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none px-8 rounded-2xl font-black shadow-lg shadow-indigo-100 flex items-center gap-2 active:scale-95 transition-all"
                >
                    <FaPlus /> Post Another Job
                </Link>
            </div>

            {/* List Section with Suspense */}
            <div className="mt-8">
                <Suspense fallback={<SkeletonLoader />}>
                    <JobList jobsCreatedByPromise={jobsCreatedByPromise(user?.email)} />
                </Suspense>
            </div>
        </div>
    );
};

export default MyPostedJobs;