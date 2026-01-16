import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { FaUserEdit, FaEnvelope, FaIdBadge, FaShieldAlt } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl shadow-indigo-100 border border-gray-100 overflow-hidden">
                
                {/* Upper Banner Part */}
                <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 w-full relative">
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                        <div className="avatar">
                            <div className="w-32 rounded-[2.5rem] ring ring-white ring-offset-4 shadow-xl">
                                <img src={user?.photoURL || "https://img.icons8.com/officel/80/user.png"} alt="Profile" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="pt-20 pb-10 px-8 text-center">
                    <div className="mb-6">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                            {user?.displayName || "Anonymous User"}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mt-1 text-indigo-600">
                            <FaShieldAlt size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Verified Account</span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-8">
                        {/* Email Info */}
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 transition-hover hover:bg-white hover:shadow-md cursor-default group">
                            <FaEnvelope className="text-gray-400 group-hover:text-indigo-500" />
                            <p className="text-sm font-bold text-gray-700">{user?.email}</p>
                        </div>

                        {/* ID Info */}
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 transition-hover hover:bg-white hover:shadow-md cursor-default group">
                            <FaIdBadge className="text-gray-400 group-hover:text-purple-500" />
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                                UID: <span className="text-gray-800">{user?.uid?.slice(0, 15)}...</span>
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-2xl font-black py-4 h-auto shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 active:scale-95 transition-all">
                            <FaUserEdit /> Edit Profile Details
                        </button>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">
                            Member Since 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;