import React from 'react';
import { Link } from 'react-router-dom';

const UsersCard = ({ user }) => {
    const { id, firstName, lastName, email, company, address, image } = user;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <Link to={`/user/${id}`}><figure><img src={image} /></figure></Link>
            <div className="card-body">
                <h2 className="card-title">{firstName}<span></span>{lastName}</h2>
                <p>Address: {address.address}, {address.city}</p>
                <p>Email: {email}</p>
                <p>Company: {company.name}</p>
            </div>
        </div>
    );
};

export default UsersCard;