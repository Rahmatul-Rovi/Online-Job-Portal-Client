import React from 'react';

const JobApplicationRow = ({ application, index }) => {
    const { title, company, company_logo, location, status } = application;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={company_logo} alt="Company Logo" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{company}</div>
                    </div>
                </div>
            </td>
            <td>{location}</td>
            <td>
                <span className="badge badge-ghost badge-sm">{status || 'Applied'}</span>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default JobApplicationRow;