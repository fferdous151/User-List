import React from 'react';
import { Link } from 'react-router-dom';

const UsersCard = ({ user }) => {
    const { id, firstName, lastName, email, company, address, image } = user;
    return (
        <div className="card w-64 mx-auto shadow-2xl shadow-black">
            <Link className='p-6 bg-gray-800' to={`/user/${id}`}><figure><img src={image} /></figure></Link>
            <div className="card-body bg-green-500">
                <p className="text-2xl">{firstName} {lastName}</p>
                <p><span className="text-xl">Address: </span><span className='text-lg'>{address.address}, {address.city}</span></p>
                <p><span className="text-xl">Email: </span><span className="text-lg">
                    {email}</span></p>
                <p><span className='text-xl'>Company: </span>
                    <span className='text-lg'>{company.name}</span></p>
            </div>
        </div>
    );
};

export default UsersCard;