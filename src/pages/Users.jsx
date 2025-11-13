import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Users() {
    const { id } = useParams();
    const [user, setUser] = useState( {} )

    async function fetchUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(data)
    }
        
    

    useEffect(() => {
       fetchUser();
    }, []);
    return <h1>{id}</h1>
}

export default Users;