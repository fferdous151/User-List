import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-success h-20">
            <Link to={'/'} className="px-12 text-4xl mx-auto">User Database</Link>
            <button className="btn btn-success mx-auto text-xl"><Link to={'/adduser'}>Add User</Link></button>
            <SearchBar></SearchBar>
            <div className='mx-auto gap-6'>

                <select className="select  w-full max-w-xs ">
                    <option disabled selected>Sort Users By</option>
                    <option>By Name</option>
                    <option>By Email</option>
                    <option>By Company Name</option>
                </select>
            </div>
        </div>
    );
};

export default Navbar;