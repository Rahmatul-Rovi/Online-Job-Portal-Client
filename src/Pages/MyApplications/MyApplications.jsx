import React, { Suspense } from 'react';
import ApplicationStar from './ApplicationStar';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
        <div>
            <ApplicationStar></ApplicationStar>
            <Suspense fallback={'Loading your Applications'}>
            <ApplicationList></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;