import React, { Suspense } from 'react';
import ApplicationStar from './ApplicationStar';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';

const MyApplications = () => {
    const { user } = useAuth();

    // 1. User check korar somoy loading
    if (!user?.email) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
                <span className="loading loading-ring loading-lg text-primary"></span>
                <p className="text-gray-500 font-bold animate-pulse">Checking User Session...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <ApplicationStar />
            
            {/* 2. Suspense-er bhitore DaisyUI Loading Spinner */}
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center py-20 gap-4 bg-white rounded-[2rem] border border-gray-100 shadow-sm mt-10">
                    <span className="loading loading-dots loading-lg text-[#6366f1]"></span>
                    <p className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">
                        Loading your Applications
                    </p>
                </div>
            }>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyApplications;