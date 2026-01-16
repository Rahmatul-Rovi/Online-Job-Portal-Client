import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2 className="text-3xl">Jobs Created by you: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-black">Job Title</th>
              <th className="text-black">Deadline</th>
              <th className="text-black">View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
           {
            jobs.map((job, index) =>  <tr key={job._id}>
              <th>{index+1}</th>
              <td className="text-black">{job.title}</td>
              <td className="text-black">{job.deadline}</td>
              <td className="text-black"> <Link to={`/applications/${job._id}`}> View Applications </Link> </td>
            </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
