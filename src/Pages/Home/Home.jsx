import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import Stat from '../Shared/Stat';



 const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res => res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Suspense fallback={'Loading hot Jobs'}>
             <HotJobs jobsPromise={jobsPromise}></HotJobs>
           </Suspense>
           <Stat></Stat>
          
        </div>
    );
};

export default Home;