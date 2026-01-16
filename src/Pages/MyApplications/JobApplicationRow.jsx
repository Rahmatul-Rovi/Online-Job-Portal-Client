import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const JobApplicationRow = ({ application, index }) => {
    const { _id, title, company, company_logo, location, status } = application;

    return (
        <tr className="bg-white hover:bg-indigo-50/50 transition-all group border-b border-gray-50">
            {/* 1. Index */}
            <th className="pl-8 py-5">
                <span className="text-gray-400 font-bold text-sm">{(index + 1).toString().padStart(2, '0')}</span>
            </th>

            {/* 2. Company & Job Role */}
            <td className="py-5">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 bg-gray-100 p-1">
                            <img src={company_logo} alt={company} className="object-contain" />
                        </div>
                    </div>
                    <div>
                        <div className="font-black text-gray-800 text-base">{title}</div>
                        <div className="text-xs font-bold text-indigo-600">{company}</div>
                    </div>
                </div>
            </td>

            {/* 3. Location */}
            <td className="py-5">
                <div className="flex items-center gap-1 text-gray-500 font-medium">
                    <FaMapMarkerAlt className="text-gray-300" size={12} />
                    <span>{location}</span>
                </div>
            </td>

            {/* 4. Status Badge */}
            <td className="py-5">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                    status === 'rejected' ? 'bg-red-50 text-red-600 border-red-100' : 
                    status === 'accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                    'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                    {status || 'pending'}
                </span>
            </td>

            {/* 5. Action Button (Clickable Details) */}
            <td className="py-5 text-right pr-8">
                <Link 
                    to={`/jobDetails/${_id}`} 
                    className="inline-flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline group"
                >
                    View Details
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
                </Link>
            </td>
        </tr>
    );
};

export default JobApplicationRow;