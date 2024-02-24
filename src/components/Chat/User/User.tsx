import React, { type FC } from 'react';

interface UserProps {
    profil: string
    status?: boolean
    name: string
}

export const UserComponent: FC<UserProps> = ({ profil, status, name }) => {
    return (
        <>
            <div className={`flex items-center h-fit ${status === false && 'opacity-50'}`}>
                <div className="relative w-8">
                    <img className="w-8 flex flex-shrink-0" src={profil} />
                    <div className={`w-2 h-2 absolute rounded bottom-1 right-1 ${status === true && 'bg-green-500'}`}></div>
                </div>
                <div className="ml-2 text-xs truncate">{name}</div>
            </div>
        </>
    );
};
