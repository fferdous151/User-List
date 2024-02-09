import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UsersCard from './Card/UsersCard';


const Home = () => {
    const userList = useLoaderData().users;
    console.log(userList);
    return (
        <div className="grid m-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                userList.map(user => <UsersCard
                    key={user.id}
                    user={user}
                ></UsersCard>)
            }
        </div>
    );
};

export default Home;