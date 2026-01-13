import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-8">
  Find your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span>
</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
           </div>
        </div>
    );
};

export default HotJobs;