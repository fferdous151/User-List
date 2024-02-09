import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetailsCard = () => {
    const details = useLoaderData();
    const { firstName, lastName, email, company, address, image, birthDate, bloodGroup, } = details;
    return (
        <div className="card card-side w-4/5 glass mx-auto m-8">
            <figure className='w-1/4 mx-28 my-16'><img src={image} /></figure>
            <div className="card-body">
                <p className="text-3xl">{firstName} {lastName}</p>
                <p><span className='text-xl'>Blood Group: </span><span className='text-lg'>{bloodGroup}</span></p>
                <p><span className="text-xl">Birth Date: </span><span className="text-lg">
                    {birthDate}</span></p>
                <p><span className="text-xl">Address: </span><span className='text-lg'>{address.address}, {address.city}, {address.state}</span></p>
                <p><span className="text-xl">Email: </span><span className="text-lg">
                    {email}</span></p>
                <p><span className='text-xl'>Company: </span>
                    <span className='text-lg'>{company.name}</span></p>
                <p><span className='text-xl'>Company Address: </span>
                    <span className='text-lg'>{company.address.address}, {company.address.city}</span></p>
            </div>
        </div>
    );
};

export default UserDetailsCard;


