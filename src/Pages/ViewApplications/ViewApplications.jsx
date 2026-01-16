import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id} = useParams();
    const applications = useLoaderData();
    
    return (
        <div>
            <h4 className="text-4xl">{applications.length} Application for: {job_id}</h4>
        </div>
    );
};

export default ViewApplications;