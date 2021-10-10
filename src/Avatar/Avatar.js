import React from 'react';
import demoAvatar from '../resources/demoAvatar.png';

const Avatar = ({ photoURL, signOut }) => {
    return (
        <div className="flex items-center">
            <img className="h-10 w-10 mx-6 rounded-full inline-block" src={photoURL ? photoURL : demoAvatar} alt="user avatar"/>
            <button className="py-2 px-4 bg-red-100 text-red-600 font-medium rounded hover:bg-red-600 hover:text-white transition-all duration-300" onClick={signOut}>Log out</button>
        </div>
    );
};

export default Avatar;
