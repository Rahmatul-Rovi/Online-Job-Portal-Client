import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";
import { FaClipboardList } from "react-icons/fa";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
      {/* Table Header Section */}
      <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            <FaClipboardList size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-gray-900">
              Applications <span className="text-indigo-600">History</span>
            </h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Total Applied: {applications?.length || 0}
            </p>
          </div>
        </div>

        {/* Simple Filter Placeholder (Optional) */}
        <div className="text-xs font-black text-indigo-500 bg-indigo-50 px-4 py-2 rounded-full uppercase tracking-tighter">
          Real-time Sync Active
        </div>
      </div>

      {/* Modern Table Layout */}
      <div className="overflow-x-auto">
        <table className="table w-full border-separate border-spacing-y-2 px-6 pb-6">
          {/* Table Head */}
          <thead>
            <tr className="text-gray-400 border-none uppercase text-[11px] tracking-[0.15em] font-black">
              <th className="bg-transparent pl-8">#</th>
              <th className="bg-transparent">Company & Job Role</th>
              <th className="bg-transparent">Work Location</th>
              <th className="bg-transparent">Application Status</th>
              <th className="bg-transparent text-right pr-8">Actions</th>
            </tr>
          </thead>

          <tbody className="space-y-4 text-black">
            {applications.length > 0 ? (
              applications.map((application, index) => (
                <JobApplicationRow
                  key={application._id}
                  application={application}
                  index={index}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-20">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-gray-400 font-bold">
                      No applications found yet.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
