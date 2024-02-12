import React, { useState } from 'react';

const SearchBar = (user) => {
    const [input, setInput] = useState("");
    const { } = user;
    //console.log(user.user);

    const fetchData = (value) => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((json) => {
                // const results = json.filter((user) => {

                // });
                // console.log(results);
            })

    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div>
            <input type="text"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search here"
                className="input  w-full max-w-xs items-end " />
        </div>
    );
};

export default SearchBar;