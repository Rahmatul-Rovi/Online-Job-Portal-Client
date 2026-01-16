import React from 'react';
import { Link } from 'react-router-dom'; // React Router Dom use koro
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const JobApplicationRow = ({ application, index }) => {
    // MongoDB theke data asle oita _id name thake
    const { _id, title, company, company_logo, location, status } = application;

    return (
        <tr className="bg-white hover:bg-indigo-50/50 transition-all border-b border-gray-50 group">
            <th className="pl-8 py-5 text-gray-400 font-bold text-sm">
                {(index + 1).toString().padStart(2, '0')}
            </th>

            <td className="py-5">
                <div className="flex items-center gap-4">
                    <div className="mask mask-squircle h-12 w-12 bg-gray-100 p-1">
                        <img src={company_logo} alt={company} className="object-contain" />
                    </div>
                    <div>
                        {/* Title Force Black */}
                        <div className="font-black text-black text-base leading-tight">{title}</div>
                        <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-0.5">{company}</div>
                    </div>
                </div>
            </td>

            <td className="py-5">
                <div className="flex items-center gap-1 text-black font-bold text-sm">
                    <FaMapMarkerAlt className="text-indigo-400" size={12} />
                    <span>{location}</span>
                </div>
            </td>

            <td className="py-5">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm ${
                    status === 'rejected' ? 'bg-red-50 text-red-600 border-red-100' : 
                    status === 'accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                    'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                    {status || 'pending'}
                </span>
            </td>

            <td className="py-5 text-right pr-8">
                {/* Router Connection Fixed: /jobs/:id */}
                <Link 
                    to={`/jobs/${_id}`} 
                    className="inline-flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline group cursor-pointer"
                >
                    View Details
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
                </Link>
            </td>
        </tr>
    );
};

export default JobApplicationRow;