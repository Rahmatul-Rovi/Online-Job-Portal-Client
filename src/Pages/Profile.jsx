import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="card w-96 bg-base-100 shadow-xl border border-primary/20">
                <figure className="px-10 pt-10">
                    <img 
                        src={user?.photoURL || "https://img.icons8.com/officel/80/user.png"} 
                        alt="Profile" 
                        className="rounded-full w-32 h-32 ring ring-primary ring-offset-2" 
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">{user?.displayName || "No Name Found"}</h2>
                    <p className="text-gray-500">{user?.email}</p>
                    <div className="badge badge-outline badge-primary mt-2">
                        User ID: {user?.uid.slice(0, 10)}...
                    </div>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary btn-sm">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;