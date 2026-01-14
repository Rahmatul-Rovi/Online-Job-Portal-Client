import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div>
      <h3 className="text-3xl mb-5">
        Jobs Applied so far: {applications?.length || 0}
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Company & Job</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              applications.map((application, index) => (
                <JobApplicationRow 
                   key={application._id} 
                   application={application} 
                   index={index}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;