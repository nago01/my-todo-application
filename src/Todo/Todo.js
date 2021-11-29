import { useLazyQuery, useQuery } from '@apollo/client';
import React from 'react';
import { BACKEND_QUERY } from '../graphql/Queries';
function Todo() {
    const {data , loading , error} = useQuery(BACKEND_QUERY);
    if(loading) return <div>Loading Data</div>

    // const {loading,data,error} = useQuery(BACKEND_QUERY)
    return (
        <div>
            <div>
                <h1>ADD YOUR TASK</h1>
                <input></input>
                
                <button> ADD </button>
            </div>
            <div>
            {
                data.users.map(
                    user => (
                        <p key={user.id}>
                            <span>{user.name}</span>
                            <button>DELETE the task</button>
                        </p>

                    )
                )
            }
            </div>
        </div>
    )
}

export default Todo
