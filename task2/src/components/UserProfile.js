import { use, useEffect, useState } from "react";

function UserProfile({userId}){
    const[user, setUser]=useState(null);
    const[loading, setLoading]=useState(false);
    const[error, setError]=useState(null);

    const refreshUser=()=>{
        const randomId=Math.floor(Math.random() *10)+1;
        setUser(null);
        setError(null);
        setLoading(true);
        window.dispatchEvent(
            new CustomEvent("changeUser", {detail:randomId})
        );
    };

    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch('https://jsonplaceholder.typicode.com/users/${userId}', {signal:controller.signal,})

        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
// catch for handling any error
        .catch((err)=>{
            if (err.name!== 'AbortError'){
                setError(err.message);
                setLoading(false);
            }
        });

        // Clean abort fetch if component unmounts or userId changes

        return()=>{
            controller.abort();
        };
    }, [userId]); 
    // UserId is in dependency array so effect runs again when userId changes



    if(loading) return <p>Loading ...</p>;
    if(error) return <p>Error:{error}</p>;

    return(
        user &&(
            <div>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <button onClick={refreshUser}>Refresh</button>
            </div>
        )
    );
}

export default UserProfile;