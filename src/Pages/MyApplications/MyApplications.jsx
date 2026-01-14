import React, { Suspense } from 'react';
import ApplicationStar from './ApplicationStar';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';

const MyApplications = () => {
    const { user } = useAuth();

    if (!user?.email) return <div>Loading User...</div>;

    return (
        <div>
            <ApplicationStar />
            <Suspense fallback={<div>Loading your Applications...</div>}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyApplications;