import React, { use } from 'react';

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);

    return (
        <div>
            <h3 className='text-3xl'>
                Jobs Applied so far: {applications?.length || 0}
            </h3>
            <ul>
                {applications?.map(app => (
                    <li key={app._id}>{app.job_title || "Job Application"}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationList;