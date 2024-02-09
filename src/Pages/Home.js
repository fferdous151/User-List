import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UsersCard from './Card/UsersCard';


const Home = () => {
    const userList = useLoaderData().users;
    console.log(userList);
    return (
        <div>
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